const countableUncountableSortCards = [
  { id: "cu-sort-beans", label: "BEANS", category: "COUNTABLE" },
  { id: "cu-sort-croissant", label: "CROISSANT", category: "COUNTABLE" },
  { id: "cu-sort-mushroom", label: "MUSHROOM", category: "COUNTABLE" },
  { id: "cu-sort-pancake", label: "PANCAKE", category: "COUNTABLE" },
  { id: "cu-sort-pepper", label: "PEPPER", category: "COUNTABLE" },
  { id: "cu-sort-biscuit", label: "BISCUIT", category: "COUNTABLE" },
  { id: "cu-sort-cookie", label: "COOKIE", category: "COUNTABLE" },
  { id: "cu-sort-lemon", label: "LEMON", category: "COUNTABLE" },
  { id: "cu-sort-spices", label: "SPICES", category: "COUNTABLE" },
  { id: "cu-sort-pie", label: "PIE", category: "COUNTABLE" },
  { id: "cu-sort-nut", label: "NUT", category: "COUNTABLE" },
  { id: "cu-sort-salad", label: "SALAD", category: "UNCOUNTABLE" },
  { id: "cu-sort-milk", label: "MILK", category: "UNCOUNTABLE" },
  { id: "cu-sort-water", label: "WATER", category: "UNCOUNTABLE" },
  { id: "cu-sort-jam", label: "JAM", category: "UNCOUNTABLE" },
  { id: "cu-sort-sugar", label: "SUGAR", category: "UNCOUNTABLE" },
  { id: "cu-sort-butter", label: "BUTTER", category: "UNCOUNTABLE" },
  { id: "cu-sort-salt", label: "SALT", category: "UNCOUNTABLE" },
  { id: "cu-sort-flour", label: "FLOUR", category: "UNCOUNTABLE" },
  { id: "cu-sort-garlic", label: "GARLIC", category: "UNCOUNTABLE" },
  { id: "cu-sort-meat", label: "MEAT", category: "UNCOUNTABLE" },
  { id: "cu-sort-oil", label: "OIL", category: "UNCOUNTABLE" },
  { id: "cu-sort-baking-powder", label: "BAKING POWDER", category: "UNCOUNTABLE" },
  { id: "cu-sort-cinnamon", label: "CINNAMON", category: "UNCOUNTABLE" },
  { id: "cu-sort-corn", label: "CORN", category: "UNCOUNTABLE" },
  { id: "cu-sort-dough", label: "DOUGH", category: "UNCOUNTABLE" },
  { id: "cu-sort-lettuce", label: "LETTUCE", category: "UNCOUNTABLE" }
];

const countableUncountableSortExercise = window.exerciseActivityModules.sort({
  id: "countable-uncountable-sort",
  title: "SORT IT!",
  supports(functionModule) {
    return functionModule.id === "countable-uncountable";
  },
  buildBoard() {
    return {
      categories: ["COUNTABLE", "UNCOUNTABLE"],
      cards: countableUncountableSortCards
    };
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(countableUncountableSortExercise);
