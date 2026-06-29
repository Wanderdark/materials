const comparativesLuckySpinItems = [
  {
    prompt: "Compare Lucas and Noah. Use 'tall'.",
    imagePath: "images/comperatives/lucas-taller-than-noah.webp",
    points: 10
  },
  {
    prompt: "Compare Noah and Lucas. Use 'short'.",
    imagePath: "images/comperatives/lucas-taller-than-noah.webp",
    points: 10
  },
  {
    prompt: "Compare Hannah and Daniel. Use 'fast'.",
    imagePath: "images/comperatives/hannah-faster-than-daniel.webp",
    points: 10
  },
  {
    prompt: "Compare Daniel and Hannah. Use 'slow'.",
    imagePath: "images/comperatives/hannah-faster-than-daniel.webp",
    points: 10
  },
  {
    prompt: "Compare Chloe's hair and Zoe's hair. Use 'long'.",
    imagePath: "images/comperatives/chloehair-longer-than-zoehair.webp",
    points: 10
  },
  {
    prompt: "Compare Zoe's hair and Chloe's hair. Use 'short'.",
    imagePath: "images/comperatives/chloehair-longer-than-zoehair.webp",
    points: 10
  },
  {
    prompt: "Compare a motorcycle and a bicycle. Use 'expensive'.",
    imagePath: "images/comperatives/expensive-cheap.webp",
    points: 15
  },
  {
    prompt: "Compare a bicycle and a motorcycle. Use 'cheap'.",
    imagePath: "images/comperatives/expensive-cheap.webp",
    points: 10
  },
  {
    prompt: "Compare the armchair and the sofa. Use 'comfortable'.",
    imagePath: "images/comperatives/armchairvssofa.webp",
    points: 15
  },
  {
    prompt: "Compare cities and villages. Use 'crowded'.",
    imagePath: "images/comperatives/villagevscity.webp",
    points: 15
  },
  {
    prompt: "Compare villages and cities. Use 'peaceful'.",
    imagePath: "images/comperatives/villagevscity.webp",
    points: 15
  },
  {
    prompt: "Compare the castle and the flat. Use 'beautiful'.",
    imagePath: "images/comperatives/castlevsflat.webp",
    points: 15
  },
  {
    prompt: "Compare towns and cities. Use 'quiet'.",
    imagePath: "images/comperatives/town-quieter-than-city.webp",
    points: 15
  },
  {
    prompt: "Compare cities and towns. Use 'noisy'.",
    imagePath: "images/comperatives/town-quieter-than-city.webp",
    points: 15
  },
  {
    prompt: "Compare winter and summer. Use 'cold'.",
    imagePath: "images/comperatives/winter-colder-than-summer.webp",
    points: 15
  },
  {
    prompt: "Compare summer and winter. Use 'hot'.",
    imagePath: "images/comperatives/winter-colder-than-summer.webp",
    points: 15
  }
];

const comparativesLuckySpinExercise = window.exerciseActivityModules.luckySpin({
  id: "comparatives-lucky-spin",
  title: "LUCKY SPIN",
  supports(functionModule) {
    return functionModule.id === "comparatives";
  },
  buildItems() {
    return comparativesLuckySpinItems.map((item, index) => ({
      id: `comparatives-spin-${index + 1}`,
      label: String(index + 1),
      ...item
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(comparativesLuckySpinExercise);
