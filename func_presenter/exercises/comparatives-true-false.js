const comparativesTrueFalseSets = [
  {
    imagePath: "images/comperatives/ella-taller-than-zoe.webp",
    trueStatements: ["Ella is taller than Zoe.", "Zoe is shorter than Ella."],
    falseStatements: ["Ella is shorter than Zoe.", "Zoe is taller than Ella."]
  },
  {
    imagePath: "images/comperatives/lucas-taller-than-noah.webp",
    trueStatements: ["Lucas is taller than Noah.", "Noah is shorter than Lucas."],
    falseStatements: ["Lucas is shorter than Noah.", "Noah is taller than Lucas."]
  },
  {
    imagePath: "images/comperatives/hannah-faster-than-daniel.webp",
    trueStatements: ["Hannah is faster than Daniel.", "Daniel is slower than Hannah."],
    falseStatements: ["Hannah is slower than Daniel.", "Daniel is faster than Hannah."]
  },
  {
    imagePath: "images/comperatives/lucas-stronger-than-noah.webp",
    trueStatements: ["Lucas is stronger than Noah.", "Noah is weaker than Lucas."],
    falseStatements: ["Lucas is weaker than Noah.", "Noah is stronger than Lucas."]
  },
  {
    imagePath: "images/comperatives/chloehair-longer-than-zoehair.webp",
    trueStatements: ["Chloe's hair is longer than Zoe's hair.", "Zoe's hair is shorter than Chloe's hair."],
    falseStatements: ["Chloe's hair is shorter than Zoe's hair.", "Zoe's hair is longer than Chloe's hair."]
  },
  {
    imagePath: "images/comperatives/big-small-houses.webp",
    trueStatements: ["Chloe's house is bigger than Mia's house.", "Mia's house is smaller than Chloe's house."],
    falseStatements: ["Chloe's house is smaller than Mia's house.", "Mia's house is bigger than Chloe's house."]
  },
  {
    imagePath: "images/comperatives/armchairvssofa.webp",
    trueStatements: ["The armchair is more comfortable than the sofa."],
    falseStatements: ["The sofa is more comfortable than the armchair.", "The armchair is less comfortable than the sofa."]
  },
  {
    imagePath: "images/comperatives/villagevscity.webp",
    trueStatements: ["Cities are more crowded than villages.", "Villages are more peaceful than cities."],
    falseStatements: ["Villages are more crowded than cities.", "Cities are more peaceful than villages."]
  },
  {
    imagePath: "images/comperatives/castlevsflat.webp",
    trueStatements: ["The castle is more beautiful than the flat."],
    falseStatements: ["The flat is more beautiful than the castle.", "The castle is less beautiful than the flat."]
  },
  {
    imagePath: "images/comperatives/skyscraper-flat.webp",
    trueStatements: ["Skyscrapers are taller than flats.", "Flats are shorter than skyscrapers."],
    falseStatements: ["Skyscrapers are shorter than flats.", "Flats are taller than skyscrapers."]
  },
  {
    imagePath: "images/comperatives/cheetah-faster-than-rabbit.webp",
    trueStatements: ["A cheetah is faster than a rabbit."],
    falseStatements: ["A rabbit is faster than a cheetah.", "A cheetah is slower than a rabbit."]
  },
  {
    imagePath: "images/comperatives/expensive-cheap.webp",
    trueStatements: ["A motorcycle is more expensive than a bicycle.", "A bicycle is cheaper than a motorcycle."],
    falseStatements: ["A bicycle is more expensive than a motorcycle.", "A motorcycle is cheaper than a bicycle."]
  },
  {
    imagePath: "images/comperatives/winter-colder-than-summer.webp",
    trueStatements: ["Winter is colder than summer.", "Summer is hotter than winter."],
    falseStatements: ["Winter is hotter than summer.", "Summer is colder than winter."]
  },
  {
    imagePath: "images/comperatives/rabbit-faster-turtle.webp",
    trueStatements: ["A turtle is slower than a rabbit."],
    falseStatements: ["A rabbit is slower than a turtle.", "A turtle is faster than a rabbit."]
  },
  {
    imagePath: "images/comperatives/car-expensive-motor.webp",
    trueStatements: ["A sport car is more expensive than a motorcycle."],
    falseStatements: ["A motorcycle is more expensive than a sport car.", "A sport car is cheaper than a motorcycle."]
  },
  {
    imagePath: "images/comperatives/town-quieter-than-city.webp",
    trueStatements: ["Towns are quieter than cities.", "Cities are noisier than towns."],
    falseStatements: ["Cities are quieter than towns.", "Towns are noisier than cities."]
  },
  {
    imagePath: "images/comperatives/plane-faster-train.webp",
    trueStatements: ["A plane is faster than a train."],
    falseStatements: ["A train is faster than a plane.", "A plane is slower than a train."]
  }
];

function buildComparativesTrueFalseStatements() {
  return shuffleActivityItems(comparativesTrueFalseSets.flatMap((set, setIndex) => [
    ...set.trueStatements.map((sentence, index) => ({
      id: `comparatives-tf-${setIndex + 1}-t-${index + 1}`,
      sentence,
      isTrue: true,
      imagePath: set.imagePath
    })),
    ...set.falseStatements.map((sentence, index) => ({
      id: `comparatives-tf-${setIndex + 1}-f-${index + 1}`,
      sentence,
      isTrue: false,
      imagePath: set.imagePath
    }))
  ]));
}

const comparativesTrueFalseExercise = window.exerciseActivityModules.trueFalseGrid({
  id: "comparatives-true-false",
  title: "TRUE - FALSE",
  pageSize: 8,
  visualBrief: "Click the image icon near a sentence to see its picture.",
  instruction: "CLICK THE IMAGE ICON IF YOU NEED THE VISUAL, THEN MARK EACH SENTENCE TRUE OR FALSE.",
  continueLabel: "CONTINUE?",
  supports(functionModule) {
    return functionModule.id === "comparatives";
  },
  buildStatements() {
    return buildComparativesTrueFalseStatements();
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(comparativesTrueFalseExercise);
