const comparativesJumbledPool = [
  ["Ella is taller than Zoe.", "images/comperatives/ella-taller-than-zoe.webp"],
  ["Noah is shorter than Lucas.", "images/comperatives/lucas-taller-than-noah.webp"],
  ["Hannah is faster than Daniel.", "images/comperatives/hannah-faster-than-daniel.webp"],
  ["Lucas is stronger than Noah.", "images/comperatives/lucas-stronger-than-noah.webp"],
  ["Lucas is taller than Noah.", "images/comperatives/lucas-taller-than-noah.webp"],
  ["Zoe is shorter than Ella.", "images/comperatives/ella-taller-than-zoe.webp"],
  ["Daniel is slower than Hannah.", "images/comperatives/hannah-faster-than-daniel.webp"],
  ["Noah is weaker than Lucas.", "images/comperatives/lucas-stronger-than-noah.webp"],
  ["The sofa is more comfortable than the armchair.", "images/comperatives/armchairvssofa.webp"],
  ["Cities are more crowded than villages.", "images/comperatives/villagevscity.webp"],
  ["Villages are more peaceful than cities.", "images/comperatives/villagevscity.webp"],
  ["The castle is more beautiful than the flat.", "images/comperatives/castlevsflat.webp"],
  ["Flats are shorter than skyscrapers.", "images/comperatives/skyscraper-flat.webp"],
  ["A cheetah is faster than a rabbit.", "images/comperatives/cheetah-faster-than-rabbit.webp"],
  ["A motorcycle is more expensive than a bicycle.", "images/comperatives/expensive-cheap.webp"],
  ["Winter is colder than summer.", "images/comperatives/winter-colder-than-summer.webp"],
  ["A turtle is slower than a rabbit.", "images/comperatives/rabbit-faster-turtle.webp"],
  ["Skyscrapers are taller than flats.", "images/comperatives/skyscraper-flat.webp"],
  ["Summer is hotter than winter.", "images/comperatives/winter-colder-than-summer.webp"],
  ["Towns are quieter than cities.", "images/comperatives/town-quieter-than-city.webp"],
  ["Cities are noisier than towns.", "images/comperatives/town-quieter-than-city.webp"],
  ["A bicycle is cheaper than a motorcycle.", "images/comperatives/expensive-cheap.webp"],
  ["A plane is faster than a train.", "images/comperatives/plane-faster-train.webp"],
  ["An armchair is more comfortable than a sofa.", "images/comperatives/armchairvssofa.webp"]
];

const superlativesJumbledPool = [
  "The giraffe is the tallest animal.",
  "The lion is the strongest animal.",
  "The cheetah is the fastest animal.",
  "The elephant is the biggest animal.",
  "The turtle is the slowest animal.",
  "The butterfly is the most beautiful insect.",
  "The shark is the most dangerous ocean animal.",
  "The parrot is the most colorful bird.",
  "The dolphin is the most intelligent sea animal.",
  "The cheetah is the fastest animal.",
  "The giraffe is the tallest animal.",
  "The shark is the most dangerous sea animal.",
  "Winter is the coldest season."
];

let comparativesJumbledRemaining = [];

function shuffleComparativesJumbled(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function buildComparativesJumbledBank() {
  return comparativesJumbledPool.map(([sentence, imagePath], index) => ({
    id: `comparatives-jumbled-${index + 1}`,
    sentence,
    imagePath,
    type: "STATEMENT",
    tokens: sentence.trim().split(/\s+/)
  }));
}

function buildSuperlativesJumbledBank() {
  return superlativesJumbledPool.map((sentence, index) => ({
    id: `superlatives-jumbled-${index + 1}`,
    sentence,
    type: "SUPERLATIVE",
    tokens: sentence.trim().split(/\s+/)
  }));
}

const comparativesJumbledExercise = window.exerciseActivityModules.jumbledSentences({
  id: "comparatives-jumbled",
  title: "JUMBLED SENTENCES",
  repeatable: true,
  lives: 3,
  supports(functionModule) {
    return functionModule.id === "comparatives";
  },
  reset() {
    comparativesJumbledRemaining = shuffleComparativesJumbled(buildComparativesJumbledBank());
  },
  hasMoreQuestions() {
    return comparativesJumbledRemaining.length > 0;
  },
  buildQuestions() {
    return comparativesJumbledRemaining.splice(0, 10);
  }
});

const superlativesJumbledExercise = window.exerciseActivityModules.jumbledSentences({
  id: "superlatives-jumbled",
  title: "JUMBLED SENTENCES",
  repeatable: false,
  lives: 3,
  supports(functionModule) {
    return functionModule.id === "superlatives";
  },
  buildQuestions() {
    return shuffleComparativesJumbled(buildSuperlativesJumbledBank());
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(comparativesJumbledExercise);
window.exerciseModules.push(superlativesJumbledExercise);
