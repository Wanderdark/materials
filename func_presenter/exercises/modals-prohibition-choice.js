const modalsProhibitionChoiceExercise = window.exerciseActivityModules.choice({
  id: "modals-prohibition-choice",
  title: "CHOOSE THE CORRECT ONE",
  supports(functionModule) {
    return functionModule.id === "modals-prohibition";
  },
  buildQuestions(functionModule) {
    return functionModule.sentences.map((example) => {
      const modal = example.focus.toLowerCase();
      const alternative = modal === "can't" ? "must" : "can";
      const incorrectSentence = example.sentence.replace(new RegExp(modal, "i"), alternative);
      return {
        ...example,
        visualOnly: true,
        options: Math.random() < .5 ? [example.sentence, incorrectSentence] : [incorrectSentence, example.sentence],
        answer: example.sentence
      };
    });
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(modalsProhibitionChoiceExercise);
