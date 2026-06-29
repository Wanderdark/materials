const thereIsAreUnit5SortCards = [
  { id: "house-sort-bed", label: "bed", category: "BEDROOM" },
  { id: "house-sort-wardrobe", label: "wardrobe", category: "BEDROOM" },
  { id: "house-sort-computer", label: "computer", category: "BEDROOM" },
  { id: "house-sort-dining-table", label: "dining table", category: "DINING ROOM" },
  { id: "house-sort-chair", label: "chair", category: "DINING ROOM" },
  { id: "house-sort-oven", label: "oven", category: "KITCHEN" },
  { id: "house-sort-cupboard", label: "cupboard", category: "KITCHEN" },
  { id: "house-sort-fridge", label: "fridge", category: "KITCHEN" },
  { id: "house-sort-dishwasher", label: "dishwasher", category: "KITCHEN" },
  { id: "house-sort-sofa", label: "sofa", category: "LIVING ROOM" },
  { id: "house-sort-bookcase", label: "bookcase", category: "LIVING ROOM" },
  { id: "house-sort-armchair", label: "armchair", category: "LIVING ROOM" },
  { id: "house-sort-fireplace", label: "fireplace", category: "LIVING ROOM" },
  { id: "house-sort-washing-machine", label: "washing machine", category: "BATHROOM" },
  { id: "house-sort-toilet", label: "toilet", category: "BATHROOM" },
  { id: "house-sort-bath-tube", label: "bath tube", category: "BATHROOM" }
];

const thereIsAreUnit5SortExercise = window.exerciseActivityModules.sort({
  id: "there-is-are-unit5-sort",
  title: "SORT IT!",
  supports(functionModule) {
    return functionModule.id === "there-is-are-unit5";
  },
  buildBoard() {
    return {
      categories: ["BEDROOM", "DINING ROOM", "KITCHEN", "LIVING ROOM", "BATHROOM"],
      cards: thereIsAreUnit5SortCards
    };
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(thereIsAreUnit5SortExercise);
