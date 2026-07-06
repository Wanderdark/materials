const goingToPlansAmIsArePool = [
  { prompt: "I ____ going to relax at the seaside.", answer: "am", imagePath: "images/goingto-plans/benjamin-seaside.webp", visualBrief: "Relaxing at the seaside." },
  { prompt: "You ____ going to take photos.", answer: "are", imagePath: "images/common/take-photos-olivia-1.webp", visualBrief: "Taking photos at the Eiffel Tower." },
  { prompt: "We ____ going to have fun at the amusement park.", answer: "are", imagePath: "images/goingto-plans/daniel-amusement-park.webp", visualBrief: "Having fun at the amusement park." },
  { prompt: "She ____ going to climb a hill.", answer: "is", imagePath: "images/common/climb-mountain-hannah-1.webp", visualBrief: "Climbing a hill." },
  { prompt: "She ____ going to visit the zoo.", answer: "is", imagePath: "images/goingto-plans/ava-zoo.webp", visualBrief: "Visiting the zoo." },
  { prompt: "She ____ going to visit a museum.", answer: "is", imagePath: "images/common/visit-museum-zoe-1.webp", visualBrief: "Visiting a museum." },
  { prompt: "She ____ going to build a sandcastle.", answer: "is", imagePath: "images/common/build-sandcastle-ella-1.webp", visualBrief: "Building a sandcastle." },
  { prompt: "David ____ going to ride camels.", answer: "is", imagePath: "images/common/ride-camel-david-1.webp", visualBrief: "Riding camels." },
  { prompt: "Benjamin ____ going to swim.", answer: "is", imagePath: "images/common/swim-benjamin-2.webp", visualBrief: "Swimming." },
  { prompt: "I ____ going to visit Eiffel Tower.", answer: "am", imagePath: "images/goingto-plans/olivia-visit-tower.webp", visualBrief: "Visiting the Eiffel Tower." },
  { prompt: "We ____ going to ride a roller coaster.", answer: "are", imagePath: "images/common/ride-rollercoaster-daniel-1.webp", visualBrief: "Riding a roller coaster." },
  { prompt: "Hannah ____ going to explore a valley.", answer: "is", imagePath: "images/goingto-plans/hannah-valley.webp", visualBrief: "Exploring a valley." },
  { prompt: "Ava ____ going to visit a national park.", answer: "is", imagePath: "images/goingto-plans/ava-national-park.webp", visualBrief: "Visiting a national park." },
  { prompt: "Zoe ____ going to join a sightseeing tour.", answer: "is", imagePath: "images/common/sightseeing-zoe-1.webp", visualBrief: "Joining a sightseeing tour." },
  { prompt: "I ____ going to eat an ice cream.", answer: "am", imagePath: "images/common/eat-icecream-ella-1.webp", visualBrief: "Eating ice cream." },
  { prompt: "I ____ going to explore an island.", answer: "am", imagePath: "images/goingto-plans/david-island.webp", visualBrief: "Exploring an island." },
  { prompt: "He ____ going to go skiing.", answer: "is", imagePath: "images/common/skiing-daniel-1.webp", visualBrief: "Going skiing." },
  { prompt: "She ____ going to ride a bike.", answer: "is", imagePath: "images/common/ride-bike-hannah-2.webp", visualBrief: "Riding a bike." },
  { prompt: "We ____ going to watch a movie.", answer: "are", imagePath: "images/common/watch-movie-olivia-mother-1.webp", visualBrief: "Watching a movie." },
  { prompt: "I ____ going to do scuba diving.", answer: "am", imagePath: "images/common/scuba-diving-benjamin-1.webp", visualBrief: "Doing scuba diving." },
  { prompt: "She ____ going to go hiking.", answer: "is", imagePath: "images/common/go-hiking-hannah-1.webp", visualBrief: "Going hiking." },
  { prompt: "They ____ going to go fishing.", answer: "are", imagePath: "images/common/fishing-jack-father-1.webp", visualBrief: "Going fishing." },
  { prompt: "They ____ going to stay in a tent.", answer: "are", imagePath: "images/common/stay-in-tent-hannah-chloe-1.webp", visualBrief: "Staying in a tent." },
  { prompt: "Jack ____ going to visit his grandparents.", answer: "is", imagePath: "images/common/visit-grandparents-jack-1.webp", visualBrief: "Visiting grandparents." }
];

let goingToPlansAmIsAreRemaining = [];

const goingToPlansAmIsAreExercise = window.exerciseActivityModules.choice({
  id: "going-to-plans-am-is-are",
  title: "CHOOSE CORRECT OPTION",
  compactPrompt: true,
  wideOptions: true,
  repeatable: true,
  supports(functionModule) {
    return functionModule.id === "going-to-plans";
  },
  reset() {
    goingToPlansAmIsAreRemaining = shuffleActivityItems(goingToPlansAmIsArePool);
  },
  hasMoreQuestions() {
    return goingToPlansAmIsAreRemaining.length > 0;
  },
  buildQuestions() {
    if (!goingToPlansAmIsAreRemaining.length) return [];
    return goingToPlansAmIsAreRemaining.splice(0, 8).map((question, index) => ({
      id: `going-to-plans-am-is-are-${index + 1}`,
      referenceType: "AM / IS / ARE",
      referenceClass: "choice-mode-prompt",
      prompt: question.prompt,
      options: shuffleActivityItems(["am", "is", "are"]),
      answer: question.answer,
      imagePath: question.imagePath,
      visualBrief: question.visualBrief || "",
      textOnly: !question.imagePath,
      instruction: "Choose the correct form."
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(goingToPlansAmIsAreExercise);
