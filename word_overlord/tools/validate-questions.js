const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'questions.js'), 'utf8');
const context = {};

vm.createContext(context);
vm.runInContext(source + '\n;globalThis.__QUESTIONS__ = QUESTIONS;', context);

const questions = context.__QUESTIONS__;
const errors = [];
const warnings = [];
const ids = new Map();

function hashString(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function addIssue(list, index, message) {
  list.push(`Question ${index + 1}: ${message}`);
}

questions.forEach((question, index) => {
  if (!Array.isArray(question)) {
    addIssue(errors, index, 'record is not an array');
    return;
  }

  const [definitionEn, definitionTr, answer, grade, difficulty, unit, image] = question;
  const id = 'wo-' + hashString(JSON.stringify(question.slice(0, 7)));

  if (typeof definitionEn !== 'string' || !definitionEn.trim()) addIssue(errors, index, 'missing English definition');
  if (typeof definitionTr !== 'string' || !definitionTr.trim()) addIssue(errors, index, 'missing Turkish definition');
  if (typeof answer !== 'string' || !answer.trim()) addIssue(errors, index, 'missing main answer');
  if (!Number.isInteger(grade) || grade < 0) addIssue(errors, index, `invalid grade: ${grade}`);
  if (![1, 2, 3].includes(difficulty)) addIssue(errors, index, `invalid difficulty: ${difficulty}`);
  if (!Number.isInteger(unit) || unit < 1) addIssue(errors, index, `invalid unit: ${unit}`);

  if (image) {
    const imagePath = path.resolve(root, image);
    if (!fs.existsSync(imagePath)) addIssue(errors, index, `missing image: ${image}`);
  } else {
    addIssue(warnings, index, 'has no image');
  }

  if (ids.has(id)) {
    addIssue(errors, index, `duplicate generated id ${id}; first used by question ${ids.get(id) + 1}`);
  } else {
    ids.set(id, index);
  }
});

console.log(`Validated ${questions.length} questions.`);
console.log(`Errors: ${errors.length} | Warnings: ${warnings.length}`);

if (warnings.length) {
  console.log('\nWarnings:');
  warnings.forEach(issue => console.log(`- ${issue}`));
}

if (errors.length) {
  console.error('\nErrors:');
  errors.forEach(issue => console.error(`- ${issue}`));
  process.exitCode = 1;
}
