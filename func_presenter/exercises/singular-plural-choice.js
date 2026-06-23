const singularPluralChoiceExercise = window.exerciseActivityModules.choice({
  id: "singular-plural-choice",
  title: "SINGULAR / PLURAL CHALLENGE",
  compactPrompt: true,
  supports(functionModule) {
    return functionModule.id === "singular-plurals";
  },
  buildQuestions(functionModule) {
    return functionModule.sentences.map((example) => ({
      ...example,
      word: `${example.singular} / ${example.plural}`,
      prompt: "Choose the correct word form.",
      options: [example.singular, example.plural],
      answer: example.answer
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(singularPluralChoiceExercise);
