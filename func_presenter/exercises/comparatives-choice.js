const comparativesChoiceSets = [
  {
    imagePath: "images/comperatives/ella-taller-than-zoe.webp",
    correct: ["Ella is taller than Zoe.", "Zoe is shorter than Ella."],
    wrong: ["Ella is shorter than Zoe.", "Zoe is taller than Ella."]
  },
  {
    imagePath: "images/comperatives/lucas-taller-than-noah.webp",
    correct: ["Lucas is taller than Noah.", "Noah is shorter than Lucas."],
    wrong: ["Lucas is shorter than Noah.", "Noah is taller than Lucas."]
  },
  {
    imagePath: "images/comperatives/hannah-faster-than-daniel.webp",
    correct: ["Hannah is faster than Daniel.", "Daniel is slower than Hannah."],
    wrong: ["Hannah is slower than Daniel.", "Daniel is faster than Hannah."]
  },
  {
    imagePath: "images/comperatives/lucas-stronger-than-noah.webp",
    correct: ["Lucas is stronger than Noah.", "Noah is weaker than Lucas."],
    wrong: ["Lucas is weaker than Noah.", "Noah is stronger than Lucas."]
  },
  {
    imagePath: "images/comperatives/chloehair-longer-than-zoehair.webp",
    correct: ["Chloe's hair is longer than Zoe's hair.", "Zoe's hair is shorter than Chloe's hair."],
    wrong: ["Chloe's hair is shorter than Zoe's hair.", "Zoe's hair is longer than Chloe's hair."]
  },
  {
    imagePath: "images/comperatives/big-small-houses.webp",
    correct: ["Chloe's house is bigger than Mia's house.", "Mia's house is smaller than Chloe's house."],
    wrong: ["Chloe's house is smaller than Mia's house.", "Mia's house is bigger than Chloe's house."]
  },
  {
    imagePath: "images/comperatives/armchairvssofa.webp",
    correct: ["The armchair is more comfortable than the sofa."],
    wrong: ["The sofa is more comfortable than the armchair.", "The armchair is less comfortable than the sofa."]
  },
  {
    imagePath: "images/comperatives/villagevscity.webp",
    correct: ["Cities are more crowded than villages.", "Villages are more peaceful than cities."],
    wrong: ["Villages are more crowded than cities.", "Cities are more peaceful than villages."]
  },
  {
    imagePath: "images/comperatives/castlevsflat.webp",
    correct: ["The castle is more beautiful than the flat."],
    wrong: ["The flat is more beautiful than the castle.", "The castle is less beautiful than the flat."]
  },
  {
    imagePath: "images/comperatives/skyscraper-flat.webp",
    correct: ["Skyscrapers are taller than flats.", "Flats are shorter than skyscrapers."],
    wrong: ["Skyscrapers are shorter than flats.", "Flats are taller than skyscrapers."]
  },
  {
    imagePath: "images/comperatives/cheetah-faster-than-rabbit.webp",
    correct: ["A cheetah is faster than a rabbit."],
    wrong: ["A rabbit is faster than a cheetah.", "A cheetah is slower than a rabbit."]
  },
  {
    imagePath: "images/comperatives/expensive-cheap.webp",
    correct: ["A motorcycle is more expensive than a bicycle.", "A bicycle is cheaper than a motorcycle."],
    wrong: ["A bicycle is more expensive than a motorcycle.", "A motorcycle is cheaper than a bicycle."]
  },
  {
    imagePath: "images/comperatives/winter-colder-than-summer.webp",
    correct: ["Winter is colder than summer.", "Summer is hotter than winter."],
    wrong: ["Winter is hotter than summer.", "Summer is colder than winter."]
  },
  {
    imagePath: "images/comperatives/rabbit-faster-turtle.webp",
    correct: ["A turtle is slower than a rabbit."],
    wrong: ["A rabbit is slower than a turtle.", "A turtle is faster than a rabbit."]
  },
  {
    imagePath: "images/comperatives/car-expensive-motor.webp",
    correct: ["A sport car is more expensive than a motorcycle."],
    wrong: ["A motorcycle is more expensive than a sport car.", "A sport car is cheaper than a motorcycle."]
  },
  {
    imagePath: "images/comperatives/town-quieter-than-city.webp",
    correct: ["Towns are quieter than cities.", "Cities are noisier than towns."],
    wrong: ["Cities are quieter than towns.", "Towns are noisier than cities."]
  },
  {
    imagePath: "images/comperatives/plane-faster-train.webp",
    correct: ["A plane is faster than a train."],
    wrong: ["A train is faster than a plane.", "A plane is slower than a train."]
  }
];

const superlativesChoiceQuestions = [
  {
    imagePath: "images/comperatives/giraffe-tallest.webp",
    prompt: "The giraffe is ___ animal in the world.",
    options: ["the tallest", "taller", "the shortest", "shorter"],
    answer: "the tallest"
  },
  {
    imagePath: "images/comperatives/shark.webp",
    prompt: "The shark is ___ sea animal.",
    options: ["the most dangerous", "more dangerous", "the safest", "safer"],
    answer: "the most dangerous"
  },
  {
    imagePath: "images/comperatives/elephant-biggest.webp",
    prompt: "The elephant is ___ animal on land.",
    options: ["smaller", "the smallest", "the biggest", "bigger"],
    answer: "the biggest"
  },
  {
    imagePath: "images/comperatives/lion-strongest.webp",
    prompt: "The lion is ___ animal in the jungle.",
    options: ["the strongest", "stronger", "the weakest", "weaker"],
    answer: "the strongest"
  },
  {
    imagePath: "images/comperatives/cheetah-fastest.webp",
    prompt: "The cheetah is ___ animal on land.",
    options: ["slower", "the slowest", "faster", "the fastest"],
    answer: "the fastest"
  },
  {
    imagePath: "images/comperatives/elephant-biggest.webp",
    prompt: "The elephant is ___ animal on land.",
    options: ["heavier", "the heaviest", "faster", "fastest"],
    answer: "the heaviest"
  },
  {
    imagePath: "images/comperatives/turtle-slowest.webp",
    prompt: "The turtle is ___ animal in the race.",
    options: ["the slowest", "slower", "the fastest", "faster"],
    answer: "the slowest"
  },
  {
    imagePath: "images/comperatives/butterfly.webp",
    prompt: "The butterfly is ___ insect.",
    options: ["the most beautiful", "more beautiful", "the ugliest", "uglier"],
    answer: "the most beautiful"
  },
  {
    imagePath: "images/comperatives/parrot.webp",
    prompt: "The parrot is ___ bird.",
    options: ["the most colorful", "more colorful", "the dullest", "duller"],
    answer: "the most colorful"
  },
  {
    imagePath: "images/comperatives/dolphin.webp",
    prompt: "The dolphin is ___ sea animal.",
    options: ["the most intelligent", "more intelligent", "the slowest", "slower"],
    answer: "the most intelligent"
  },
  {
    imagePath: "images/comperatives/winter-colder-than-summer.webp",
    prompt: "Winter is ___ season.",
    options: ["the coldest", "colder", "the hottest", "hotter"],
    answer: "the coldest"
  },
  {
    imagePath: "images/comperatives/hummingbird.webp",
    prompt: "The hummingbird is ___ bird in the world.",
    options: ["the smallest", "smaller", "the biggest", "bigger"],
    answer: "the smallest"
  },
  {
    imagePath: "images/comperatives/giraffe-tallest.webp",
    prompt: "The giraffe is ___ animal on land.",
    options: ["the tallest", "taller", "the smallest", "smaller"],
    answer: "the tallest"
  }
];

window.comparativesChoiceSets = comparativesChoiceSets;

let comparativesChoiceRemaining = [];

function shuffleComparativesChoiceItems(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function buildComparativesQuestion(set, index) {
  const answer = shuffleComparativesChoiceItems(set.correct)[0];
  const distractors = shuffleComparativesChoiceItems(set.wrong).slice(0, 2);
  return {
    id: `comparatives-choice-${index + 1}`,
    referenceType: "CHOOSE THE CORRECT OPTION",
    prompt: "Choose the correct sentence.",
    imagePath: set.imagePath,
    options: shuffleComparativesChoiceItems([answer, ...distractors]),
    answer,
    instruction: "Look at the picture and choose the correct comparison."
  };
}

const comparativesChoiceExercise = window.exerciseActivityModules.choice({
  id: "comparatives-choice",
  title: "CHOOSE CORRECT OPTION",
  compactPrompt: true,
  wideOptions: true,
  repeatable: true,
  supports(functionModule) {
    return functionModule.id === "comparatives";
  },
  reset() {
    comparativesChoiceRemaining = shuffleComparativesChoiceItems(comparativesChoiceSets);
  },
  hasMoreQuestions() {
    return comparativesChoiceRemaining.length > 0;
  },
  buildQuestions() {
    if (!comparativesChoiceRemaining.length) return [];
    return comparativesChoiceRemaining.splice(0, 10).map(buildComparativesQuestion);
  }
});

const superlativesChoiceExercise = window.exerciseActivityModules.choice({
  id: "superlatives-choice",
  title: "CHOOSE CORRECT OPTION",
  compactPrompt: true,
  wideOptions: true,
  repeatable: false,
  supports(functionModule) {
    return functionModule.id === "superlatives";
  },
  buildQuestions() {
    return shuffleComparativesChoiceItems(superlativesChoiceQuestions).map((question, index) => ({
      id: `superlatives-choice-${index + 1}`,
      referenceType: "CHOOSE CORRECT OPTION",
      visualBrief: "Superlative adjective",
      instruction: "Choose the correct superlative form.",
      ...question,
      options: shuffleComparativesChoiceItems(question.options)
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(comparativesChoiceExercise);
window.exerciseModules.push(superlativesChoiceExercise);
