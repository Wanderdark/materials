const quantityChoiceOptions = ["A FEW", "A LITTLE", "MANY", "MUCH", "A LOT OF"];

const quantityChoiceCountableFoods = [
  "apple",
  "mushroom",
  "pancake",
  "croissant",
  "cookie",
  "egg",
  "lemon",
  "tomato"
];

const quantityChoiceCountableNames = {
  apple: "apples",
  mushroom: "mushrooms",
  pancake: "pancakes",
  croissant: "croissants",
  cookie: "cookies",
  egg: "eggs",
  lemon: "lemons",
  tomato: "tomatoes"
};

const quantityChoiceCountableParts = {
  apple: ["apple", "s"],
  mushroom: ["mushroom", "s"],
  pancake: ["pancake", "s"],
  croissant: ["croissant", "s"],
  cookie: ["cookie", "s"],
  egg: ["egg", "s"],
  lemon: ["lemon", "s"],
  tomato: ["tomato", "es"]
};

const quantityChoiceCountableAmounts = [
  { label: "A FEW", count: 2 },
  { label: "MANY", count: 5 },
  { label: "A LOT OF", count: 10 }
];

const quantityChoiceUncountableItems = [
  { label: "A LITTLE", noun: "butter", imagePath: "images/countable-uncountable/butter_tp_afew.webp", visualBrief: "A little butter." },
  { label: "A LITTLE", noun: "sugar", imagePath: "images/countable-uncountable/sugar_tp_afew.webp", visualBrief: "A little sugar." },
  { label: "A LITTLE", noun: "oil", imagePath: "images/countable-uncountable/oil_tp_afew.webp", visualBrief: "A little oil." },
  { label: "MUCH", noun: "butter", imagePath: "images/countable-uncountable/butter_tp_much.webp", visualBrief: "Much butter." },
  { label: "MUCH", noun: "sugar", imagePath: "images/countable-uncountable/sugar_tp_much.webp", visualBrief: "Much sugar." },
  { label: "MUCH", noun: "oil", imagePath: "images/countable-uncountable/oil_tp_much.webp", visualBrief: "Much oil." },
  { label: "A LOT OF", noun: "butter", imagePath: "images/countable-uncountable/butter_tp_alot.webp", visualBrief: "A lot of butter." },
  { label: "A LOT OF", noun: "sugar", imagePath: "images/countable-uncountable/sugar_tp_alot.webp", visualBrief: "A lot of sugar." },
  { label: "A LOT OF", noun: "oil", imagePath: "images/countable-uncountable/oil_tp_alot.webp", visualBrief: "A lot of oil." }
];

let quantityChoiceRemaining = [];

function quantityChoiceBlank() {
  return '<span class="quantity-blank"></span>';
}

function quantityChoiceAnswer(answer) {
  return `<span class="quantity-answer">${answer.toLowerCase()}</span>`;
}

function buildCountableCaption(food, answer = "") {
  const [stem, suffix] = quantityChoiceCountableParts[food] || [food, "s"];
  const quantity = answer ? quantityChoiceAnswer(answer) : quantityChoiceBlank();
  return `There <span class="quantity-verb">are</span> ${quantity} ${stem}<span class="quantity-suffix">${suffix}</span>.`;
}

function buildUncountableCaption(noun, answer = "") {
  const quantity = answer ? quantityChoiceAnswer(answer) : quantityChoiceBlank();
  return `There <span class="quantity-verb">is</span> ${quantity} ${noun}.`;
}

function buildQuantityChoicePool() {
  return shuffleActivityItems([
    ...quantityChoiceCountableFoods.flatMap((food) => quantityChoiceCountableAmounts.map((amount) => ({
      visualOnly: true,
      referenceType: "CHOOSE THE QUANTITY",
      prompt: "Choose the correct quantity.",
      instruction: "Choose the correct quantity.",
      visualBrief: `${amount.label.toLowerCase()} ${quantityChoiceCountableNames[food] || `${food}s`}.`,
      visualCaptionHtml: buildCountableCaption(food),
      visualCaptionAnswerHtml: buildCountableCaption(food, amount.label),
      repeatImagePath: `images/countable-uncountable/${food}_tp.webp`,
      repeatCount: amount.count,
      options: quantityChoiceOptions,
      answer: amount.label
    }))),
    ...quantityChoiceUncountableItems.map((item) => ({
      visualOnly: true,
      referenceType: "CHOOSE THE QUANTITY",
      prompt: "Choose the correct quantity.",
      instruction: "Choose the correct quantity.",
      visualBrief: item.visualBrief,
      visualCaptionHtml: buildUncountableCaption(item.noun),
      visualCaptionAnswerHtml: buildUncountableCaption(item.noun, item.label),
      imagePath: item.imagePath,
      options: quantityChoiceOptions,
      answer: item.label
    }))
  ]);
}

const quantityChoiceExercise = window.exerciseActivityModules.choice({
  id: "quantity-choice",
  title: "CHOOSE THE QUANTITY",
  compactPrompt: true,
  wideOptions: true,
  repeatable: true,
  supports(functionModule) {
    return functionModule.id === "countable-uncountable";
  },
  reset() {
    quantityChoiceRemaining = buildQuantityChoicePool();
  },
  hasMoreQuestions() {
    return true;
  },
  buildQuestions() {
    const questions = [];
    while (questions.length < 10) {
      if (!quantityChoiceRemaining.length) quantityChoiceRemaining = buildQuantityChoicePool();
      questions.push(quantityChoiceRemaining.shift());
    }
    return questions;
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(quantityChoiceExercise);
