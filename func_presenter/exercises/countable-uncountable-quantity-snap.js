const quantitySnapLabels = ["A FEW", "A LITTLE", "MANY", "MUCH", "A LOT OF"];

const quantitySnapCountableFoods = [
  { key: "apple", plural: "apples" },
  { key: "mushroom", plural: "mushrooms" },
  { key: "pancake", plural: "pancakes" },
  { key: "croissant", plural: "croissants" },
  { key: "cookie", plural: "cookies" },
  { key: "egg", plural: "eggs" },
  { key: "lemon", plural: "lemons" },
  { key: "tomato", plural: "tomatoes" }
];

const quantitySnapCountableAmounts = [
  { answer: "A FEW", count: 2 },
  { answer: "MANY", count: 5 },
  { answer: "A LOT OF", count: 10 }
];

const quantitySnapUncountableRounds = [
  { answer: "A LITTLE", noun: "butter", imagePath: "images/countable-uncountable/butter_tp_afew.webp" },
  { answer: "A LITTLE", noun: "sugar", imagePath: "images/countable-uncountable/sugar_tp_afew.webp" },
  { answer: "A LITTLE", noun: "oil", imagePath: "images/countable-uncountable/oil_tp_afew.webp" },
  { answer: "MUCH", noun: "butter", imagePath: "images/countable-uncountable/butter_tp_much.webp" },
  { answer: "MUCH", noun: "sugar", imagePath: "images/countable-uncountable/sugar_tp_much.webp" },
  { answer: "MUCH", noun: "oil", imagePath: "images/countable-uncountable/oil_tp_much.webp" },
  { answer: "A LOT OF", noun: "butter", imagePath: "images/countable-uncountable/butter_tp_alot.webp" },
  { answer: "A LOT OF", noun: "sugar", imagePath: "images/countable-uncountable/sugar_tp_alot.webp" },
  { answer: "A LOT OF", noun: "oil", imagePath: "images/countable-uncountable/oil_tp_alot.webp" }
];

function buildQuantitySnapRounds() {
  return [
    ...quantitySnapCountableFoods.flatMap((food) => quantitySnapCountableAmounts.map((amount) => ({
      answer: amount.answer,
      visualBrief: `${amount.answer.toLowerCase()} ${food.plural}.`,
      repeatImagePath: `images/countable-uncountable/${food.key}_tp.webp`,
      repeatCount: amount.count
    }))),
    ...quantitySnapUncountableRounds.map((round) => ({
      answer: round.answer,
      visualBrief: `${round.answer.toLowerCase()} ${round.noun}.`,
      imagePath: round.imagePath
    }))
  ];
}

const quantitySnapExercise = {
  id: "quantity-snap",
  activity: "quantity-snap",
  title: "QUANTITY SNAP",
  instruction: "LOOK FAST. CHOOSE THE QUANTITY.",
  labels: quantitySnapLabels,
  roundDurationMs: 3000,
  totalDurationMs: 45000,
  supports(functionModule) {
    return functionModule.id === "countable-uncountable";
  },
  reset() {
    this.rounds = buildQuantitySnapRounds();
  },
  rounds: buildQuantitySnapRounds()
};

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(quantitySnapExercise);
