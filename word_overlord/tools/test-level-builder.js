const fs = require('fs');
const vm = require('vm');

const context = { window: {} };
vm.createContext(context);

['questions.js', 'level-config.js', 'question-bank.js'].forEach(file => {
  vm.runInContext(fs.readFileSync(file, 'utf8'), context);
});

const bank = context.window.WordOverlordQuestionBank;
const config = context.window.WordOverlordLevelConfig;

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value = (Math.imul(value, 1664525) + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

[6, 7, 8].forEach(grade => {
  for (let level = 1; level <= 10; level++) {
    const questions = bank.buildLevelQuestions({ grade, level, random: seededRandom(grade * 100 + level) });
    const ids = new Set(questions.map(question => question.id));
    const answers = new Set(questions.map(question => question.answer));
    if (questions.length !== 10 || ids.size !== 10 || answers.size !== 10) {
      throw new Error(`Invalid level build for grade ${grade}, level ${level}`);
    }
    const recipe = config.getDifficultyRecipe(level);
    questions.forEach((question, position) => {
      if (!bank.isTypeableAnswer(question.answer)) {
        throw new Error(`Untypeable answer selected for grade ${grade}, level ${level}: ${question.answer}`);
      }
      if (question.difficulty !== recipe[position]) {
        throw new Error(`Difficulty fallback used unexpectedly for grade ${grade}, level ${level}, position ${position + 1}`);
      }
    });
  }

  const campaignIds = new Set();
  const campaignAnswers = new Set();
  for (let level = 1; level <= 10; level++) {
    const questions = bank.buildLevelQuestions({
      grade,
      level,
      excludedIds: [...campaignIds],
      excludedAnswers: [...campaignAnswers],
      random: seededRandom(grade * 1000 + level),
    });
    questions.forEach(question => {
      if (!bank.isTypeableAnswer(question.answer)) {
        throw new Error(`Untypeable campaign answer selected for grade ${grade}, level ${level}: ${question.answer}`);
      }
      if (campaignIds.has(question.id) || campaignAnswers.has(question.answer)) {
        throw new Error(`Campaign duplicate for grade ${grade}, level ${level}: ${question.answer}`);
      }
      campaignIds.add(question.id);
      campaignAnswers.add(question.answer);
    });
  }
  if (campaignIds.size !== 100 || campaignAnswers.size !== 100) {
    throw new Error(`Invalid campaign build for grade ${grade}`);
  }

  const replay = bank.buildLevelQuestions({
    grade,
    level: 1,
    excludedIds: [...campaignIds],
    excludedAnswers: [...campaignAnswers],
    random: seededRandom(grade * 10000 + 1),
  });
  replay.forEach(question => {
    if (campaignIds.has(question.id) || campaignAnswers.has(question.answer)) {
      throw new Error(`Replay duplicate for grade ${grade}: ${question.answer}`);
    }
  });
});

[
  { name: 'Animals', unit: 11, seed: 11000 },
  { name: 'Tourism', unit: 17, seed: 17000 },
].forEach(campaign => {
  const campaignIds = new Set();
  const campaignAnswers = new Set();
  for (let level = 1; level <= 10; level++) {
    const questions = bank.buildLevelQuestions({
      grade: 0,
      units: [campaign.unit],
      level,
      lengths: [3, 4, 5, 6, 7, 8, 9, 10],
      excludedIds: [...campaignIds],
      excludedAnswers: [...campaignAnswers],
      random: seededRandom(campaign.seed + level),
    });
    if (questions.length !== 8) throw new Error(`Invalid ${campaign.name} level ${level}`);
    questions.forEach(question => {
      if (campaignIds.has(question.id) || campaignAnswers.has(question.answer)) {
        throw new Error(`${campaign.name} campaign duplicate: ${question.answer}`);
      }
      campaignIds.add(question.id);
      campaignAnswers.add(question.answer);
    });
  }
  if (campaignIds.size !== 80 || campaignAnswers.size !== 80) {
    throw new Error(`${campaign.name} campaign did not build 80 unique questions`);
  }
});

console.log('Built standard campaigns plus unique 80-question Animals and Tourism campaigns.');
