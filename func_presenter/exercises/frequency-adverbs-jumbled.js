const _freqJumbledPool = [
  "How often do you play soccer?",
  "How often does Jack go jogging?",
  "I always brush my teeth.",
  "I usually read books after dinner.",
  "I sometimes play video games after school.",
  "I rarely eat sweets.",
  "I never play football.",
  "She goes jogging everyday.",
  "He always goes jogging.",
  "He usually wears sunglasses in summer.",
  "She sometimes eats lunch out.",
  "He never gets up late.",
  "I play video games every day.",
  "I draw pictures once a week.",
  "I play soccer twice a week.",
  "I brush my teeth three times a day."
];

let _freqJumbledRemaining = [];

function _shuffleFreqJumbled(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(window.exerciseActivityModules.jumbledSentences({
  id: "frequency-adverbs-jumbled",
  title: "JUMBLED SENTENCES",
  repeatable: true,
  lives: 3,
  supports(functionModule) {
    return functionModule.id === "frequency-adverbs";
  },
  reset() {
    _freqJumbledRemaining = _shuffleFreqJumbled(_freqJumbledPool.map((sentence, index) => ({
      id: `freq-jumbled-${index + 1}`,
      sentence,
      type: sentence.endsWith("?") ? "QUESTION" : "STATEMENT",
      tokens: sentence.trim().split(/\s+/)
    })));
  },
  hasMoreQuestions() {
    return _freqJumbledRemaining.length > 0;
  },
  buildQuestions() {
    return _freqJumbledRemaining.splice(0, 8);
  }
}));
