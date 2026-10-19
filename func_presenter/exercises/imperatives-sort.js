const imperativesSortExercise = window.exerciseActivityModules.sort({
  id: "imperatives-sort",
  title: "SORT IT!",
  supports(functionModule) {
    return functionModule.id === "imperatives-do-dont";
  },
  buildBoard(functionModule) {
    return {
      categories: ["DO", "DON'T"],
      cards: functionModule.sentences.filter((example) =>
        ["DO", "DON'T"].includes(example.focus) &&
        typeof example.sentence === "string" && example.sentence.trim()
      ).map((example) => ({
        id: example.id,
        label: example.focus === "DON'T"
          ? `${example.sentence.replace(/^Don't\s+/i, "").charAt(0).toUpperCase()}${example.sentence.replace(/^Don't\s+/i, "").slice(1)}`
          : example.sentence,
        category: example.focus
      }))
    };
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(imperativesSortExercise);
