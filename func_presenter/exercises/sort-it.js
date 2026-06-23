const sortItExercise = window.exerciseActivityModules.sort({
  id: "sort-it",
  title: "SORT IT!",
  supports(functionModule) {
    return ["a-an-the", "singular-plurals"].includes(functionModule.id);
  },
  buildBoard(functionModule) {
    const isArticleFunction = functionModule.id === "a-an-the";
    return {
      categories: isArticleFunction ? ["A", "AN"] : ["SINGULAR", "PLURAL"],
      cards: functionModule.sentences
        .filter((example) => !isArticleFunction || example.article !== "the")
        .map((example) => ({
        id: example.id,
        label: isArticleFunction
          ? example.sentence.slice(example.article.length).trim()
          : example.answer,
        category: isArticleFunction
          ? example.article.toUpperCase()
          : example.focus
      }))
    };
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(sortItExercise);
