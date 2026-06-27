function buildDailyRoutineJumbledSentence(prompt, answer) {
  return prompt.replace("...", answer);
}

function tokenizeDailyRoutineSentence(sentence) {
  return sentence.trim().split(/\s+/);
}

const extraDailyRoutineJumbledSentences = [
  "Tom goes to school by bus",
  "She has breakfast every morning",
  "They play football after school",
  "We go to school by bus",
  "They do exercise every morning"
];

let simplePresentDailyRoutineJumbledRemaining = [];

function shuffleDailyRoutineJumbled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function buildDailyRoutineJumbledBank() {
  const choiceSentences = (window.simplePresentDailyRoutineChoiceBank || []).map(([prompt, , answer]) =>
    buildDailyRoutineJumbledSentence(prompt, answer)
  );
  return [...choiceSentences, ...extraDailyRoutineJumbledSentences].map((sentence, index) => ({
    id: `daily-routine-jumbled-${index + 1}`,
    sentence,
    type: sentence.endsWith("?") ? "QUESTION" : "STATEMENT",
    tokens: tokenizeDailyRoutineSentence(sentence)
  }));
}

const simplePresentDailyRoutinesJumbledExercise = window.exerciseActivityModules.jumbledSentences({
  id: "simple-present-daily-routines-jumbled",
  title: "JUMBLED SENTENCES",
  repeatable: true,
  lives: 3,
  supports(functionModule) {
    return functionModule.id === "simple-present-daily-routines";
  },
  reset() {
    simplePresentDailyRoutineJumbledRemaining = shuffleDailyRoutineJumbled(buildDailyRoutineJumbledBank());
  },
  hasMoreQuestions() {
    return simplePresentDailyRoutineJumbledRemaining.length > 0;
  },
  buildQuestions() {
    return simplePresentDailyRoutineJumbledRemaining.splice(0, 10);
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(simplePresentDailyRoutinesJumbledExercise);
