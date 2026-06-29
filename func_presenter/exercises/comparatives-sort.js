const comparativesSortCards = [
  { id: "comp-sort-tall", label: "tall", category: "ADD -ER" },
  { id: "comp-sort-short", label: "short", category: "ADD -ER" },
  { id: "comp-sort-fast", label: "fast", category: "ADD -ER" },
  { id: "comp-sort-strong", label: "strong", category: "ADD -ER" },
  { id: "comp-sort-long", label: "long", category: "ADD -ER" },
  { id: "comp-sort-slow", label: "slow", category: "ADD -ER" },
  { id: "comp-sort-weak", label: "weak", category: "ADD -ER" },
  { id: "comp-sort-small", label: "small", category: "ADD -ER" },
  { id: "comp-sort-cheap", label: "cheap", category: "ADD -ER" },
  { id: "comp-sort-quiet", label: "quiet", category: "ADD -ER" },
  { id: "comp-sort-noisy", label: "noisy", category: "Y -> IER" },
  { id: "comp-sort-big", label: "big", category: "DOUBLE + -ER" },
  { id: "comp-sort-hot", label: "hot", category: "DOUBLE + -ER" },
  { id: "comp-sort-comfortable", label: "comfortable", category: "MORE + ADJECTIVE" },
  { id: "comp-sort-crowded", label: "crowded", category: "MORE + ADJECTIVE" },
  { id: "comp-sort-peaceful", label: "peaceful", category: "MORE + ADJECTIVE" },
  { id: "comp-sort-beautiful", label: "beautiful", category: "MORE + ADJECTIVE" },
  { id: "comp-sort-expensive", label: "expensive", category: "MORE + ADJECTIVE" }
];

const comparativesSortExercise = window.exerciseActivityModules.sort({
  id: "comparatives-sort",
  title: "SORT IT!",
  supports(functionModule) {
    return functionModule.id === "comparatives";
  },
  buildBoard() {
    return {
      categories: ["ADD -ER", "DOUBLE + -ER", "Y -> IER", "MORE + ADJECTIVE"],
      cards: comparativesSortCards
    };
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(comparativesSortExercise);
