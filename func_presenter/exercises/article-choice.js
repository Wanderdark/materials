const articleChoiceExercise = window.exerciseActivityModules.choice({
  id: "article-choice",
  title: "CHOOSE THE CORRECT OPTION",
  supports(functionModule) {
    return functionModule.id === "a-an-the";
  },
  buildQuestions(functionModule) {
    return functionModule.sentences.map((example) => ({
      ...example,
      word: example.sentence.slice(example.article.length).trim(),
      prompt: `___ ${example.sentence.slice(example.article.length).trim()}`,
      exerciseSentence: example.exerciseSentence,
      options: ["a", "an", "the"],
      answer: example.article
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(articleChoiceExercise);
