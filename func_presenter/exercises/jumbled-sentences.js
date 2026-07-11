const jumbledSentencesExercise = window.exerciseActivityModules.jumbledSentences({
  id: "jumbled-sentences",
  title: "JUMBLED SENTENCES",
  supports(functionModule) {
    return functionModule.id === "simple-present-do-you-like";
  },
  buildQuestions(functionModule) {
    return functionModule.sentences.filter((example) => typeof example.sentence === "string").map((example) => ({
      id: example.id,
      sentence: example.sentence,
      imagePath: example.imagePath,
      type: example.sentence.endsWith("?") ? "QUESTION" : "STATEMENT",
      tokens: example.sentence.split(/\s+/)
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(jumbledSentencesExercise);
