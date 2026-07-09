function buildCorrectDailyRoutineSentence(prompt, answer) {
  return prompt.replace("...", answer);
}

function splitMistakeSentence(sentence) {
  return sentence.trim().split(/\s+/);
}

function makeCorrectMistakeItem(sentence, index) {
  return {
    id: `daily-routine-correct-${index + 1}`,
    sentence,
    correct: true,
    parts: splitMistakeSentence(sentence),
    fixedSentence: sentence
  };
}

function makeWrongMistakeItem(sentence, fixedSentence, wrongText, index) {
  const parts = splitMistakeSentence(sentence);
  return {
    id: `daily-routine-wrong-${index + 1}`,
    sentence,
    correct: false,
    parts,
    errorIndex: parts.findIndex((part) => part.replace(/[.,!?]/g, "") === wrongText),
    fixedSentence
  };
}

const extraDailyRoutineMistakes = [
  ["She go to school.", "She goes to school.", "go"],
  ["He don't like milk.", "He doesn't like milk.", "don't"],
  ["Does she studies English?", "Does she study English?", "studies"],
  ["He doesn't gets up early.", "He doesn't get up early.", "gets"],
  ["They goes home.", "They go home.", "goes"],
  ["Laura don't play basketball.", "Laura doesn't play basketball.", "don't"]
];

let simplePresentDailyRoutineMistakeRemaining = [];
let simplePresentDailyRoutineCorrectRemaining = [];
let simplePresentDailyRoutineWrongRemaining = [];

function shuffleDailyRoutineMistakes(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function buildDailyRoutineMistakeBank() {
  const correctItems = (window.simplePresentDailyRoutineChoiceBank || []).map(([prompt, , answer], index) =>
    makeCorrectMistakeItem(buildCorrectDailyRoutineSentence(prompt, answer), index)
  );
  const generatedWrongItems = (window.simplePresentDailyRoutineChoiceBank || []).map(([prompt, options, answer], index) => {
    const wrongAnswer = options.find((option) => option !== answer);
    return makeWrongMistakeItem(
      buildCorrectDailyRoutineSentence(prompt, wrongAnswer),
      buildCorrectDailyRoutineSentence(prompt, answer),
      wrongAnswer.split(/\s+/)[0],
      index
    );
  });
  const extraWrongItems = extraDailyRoutineMistakes.map(([sentence, fixedSentence, wrongText], index) =>
    makeWrongMistakeItem(sentence, fixedSentence, wrongText, index)
  );
  const wrongItems = [...generatedWrongItems, ...extraWrongItems].filter((item) => item.errorIndex >= 0);
  return { correctItems, wrongItems };
}

function takeDailyRoutineItems(source, count) {
  return source.splice(0, Math.min(count, source.length));
}

const simplePresentDailyRoutinesMistakeExercise = window.exerciseActivityModules.mistakeCorrectIt({
  id: "simple-present-daily-routines-mistake",
  title: "MISTAKE? CORRECT IT",
  repeatable: true,
  supports(functionModule) {
    return functionModule.id === "simple-present-daily-routines"
      || functionModule.id === "simple-present-daily-routines-grade7";
  },
  reset() {
    const bank = buildDailyRoutineMistakeBank();
    simplePresentDailyRoutineCorrectRemaining = shuffleDailyRoutineMistakes(bank.correctItems);
    simplePresentDailyRoutineWrongRemaining = shuffleDailyRoutineMistakes(bank.wrongItems);
    simplePresentDailyRoutineMistakeRemaining = [];
  },
  hasMoreQuestions() {
    return simplePresentDailyRoutineCorrectRemaining.length >= 5 && simplePresentDailyRoutineWrongRemaining.length >= 10;
  },
  buildQuestions() {
    const wrongQuestions = takeDailyRoutineItems(simplePresentDailyRoutineWrongRemaining, 10);
    const correctQuestions = takeDailyRoutineItems(simplePresentDailyRoutineCorrectRemaining, 5);
    if (wrongQuestions.length < 10) {
      correctQuestions.push(...takeDailyRoutineItems(simplePresentDailyRoutineCorrectRemaining, 10 - wrongQuestions.length));
    }
    if (correctQuestions.length < 5) {
      wrongQuestions.push(...takeDailyRoutineItems(simplePresentDailyRoutineWrongRemaining, 5 - correctQuestions.length));
    }
    return shuffleDailyRoutineMistakes([...wrongQuestions, ...correctQuestions]);
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(simplePresentDailyRoutinesMistakeExercise);
