const _ppJumbledPool = [
  "Chloe is dancing.",
  "He is swimming.",
  "I am reading a book.",
  "Daniel is riding a scooter.",
  "They are playing football.",
  "Emma is having a picnic now.",
  "They are doing homeworks now.",
  "Jack goes fishing every weekend.",
  "Ava is watering the flowers now.",
  "I am writing in my diary."
];

let _ppJumbledRemaining = [];

function _shufflePpJumbled(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(window.exerciseActivityModules.jumbledSentences({
  id: "present-progressive-jumbled",
  title: "JUMBLED SENTENCES",
  repeatable: true,
  lives: 3,
  supports(functionModule) {
    return functionModule.id === "present-progressive";
  },
  reset() {
    _ppJumbledRemaining = _shufflePpJumbled(_ppJumbledPool.map((sentence, index) => ({
      id: `pp-jumbled-${index + 1}`,
      sentence,
      type: sentence.endsWith("?") ? "QUESTION" : "STATEMENT",
      tokens: sentence.trim().split(/\s+/)
    })));
  },
  hasMoreQuestions() {
    return _ppJumbledRemaining.length > 0;
  },
  buildQuestions() {
    return _ppJumbledRemaining.splice(0, 10);
  }
}));
