const imperativesChoiceExercise = window.exerciseActivityModules.choice({
  id: "imperatives-choice",
  title: "CHOOSE THE CORRECT ONE",
  supports(functionModule) {
    return functionModule.id === "imperatives-do-dont";
  },
  buildQuestions(functionModule) {
    return functionModule.sentences.map((example) => {
      const isNegative = example.focus === "DON'T";
      const incorrectSentence = isNegative
        ? example.sentence.replace(/^Don't\s+/i, "")
        : example.sentence.replace(/^([A-Z][^\s]*)\s+/i, "Don't $1 ");
      const correctSentence = `${example.sentence.charAt(0).toUpperCase()}${example.sentence.slice(1)}`;
      const normalizedIncorrectSentence = `${incorrectSentence.charAt(0).toUpperCase()}${incorrectSentence.slice(1)}`;
      return {
        ...example,
        visualOnly: true,
        options: Math.random() < .5
          ? [correctSentence, normalizedIncorrectSentence]
          : [normalizedIncorrectSentence, correctSentence],
        answer: correctSentence
      };
    });
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(imperativesChoiceExercise);
