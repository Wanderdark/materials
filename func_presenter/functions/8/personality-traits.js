const personalityTraitsGrade7Source = window.functionModules.find((module) => (
  module.id === "personality-traits" && module.grade === 7 && module.unit === 1
));

const personalityTraitsGrade8Function = JSON.parse(JSON.stringify(personalityTraitsGrade7Source));
personalityTraitsGrade8Function.id = "personality-traits-grade8";
personalityTraitsGrade8Function.grade = 8;

const personalityTraitsGrade8ExtraWords = [
  { word: "kind", definition: "is caring and helpful to other people.", imagePath: "images/personality/ava.webp" },
  { word: "rude", definition: "doesn't show good manners or respect for others.", imagePath: "../images/6/3/74.webp" },
  { word: "mean", definition: "is unkind and often hurts other people's feelings.", imagePath: "../images/8/1/38.webp" },
  { word: "unreliable", definition: "cannot be trusted to do what he/she says.", imagePath: "../images/8/1/56.webp" },
  { word: "liar", definition: "often tells lies instead of the truth.", imagePath: "../images/8/1/56.webp" },
  { word: "arrogant", definition: "thinks he/she is better than other people.", imagePath: "../images/8/1/25.webp" },
  { word: "caring", definition: "shows kindness and concern for other people.", imagePath: "images/personality/ava.webp" },
  { word: "sneaky", definition: "does things secretly so that others do not know.", imagePath: "../images/8/1/44.webp" },
  { word: "tactful", definition: "is careful not to upset other people when speaking.", imagePath: "images/personality/chloe.webp" }
];

const personalityTraitsGrade8Words = personalityTraitsGrade8Function.sentences
  .filter((slide) => slide.personalityWordReveal)
  .flatMap((slide) => slide.personalityWordReveal.words);
const personalityTraitsGrade8WordSlides = [...personalityTraitsGrade8Words, ...personalityTraitsGrade8ExtraWords]
  .reduce((slides, word, index) => {
    const slideIndex = Math.floor(index / 6);
    slides[slideIndex] = slides[slideIndex] || [];
    slides[slideIndex].push(word);
    return slides;
  }, [])
  .map((words, index, slides) => ({
    id: `personality-words-${index + 1}`,
    presenceSlide: true,
    personalityWordReveal: {
      kicker: `PERSONALITY WORDS ${index + 1} / ${slides.length}`,
      title: "Click each word to discover its meaning.",
      words
    }
  }));
personalityTraitsGrade8Function.sentences.splice(
  0,
  personalityTraitsGrade8Function.sentences.findIndex((slide) => slide.personalityHub),
  ...personalityTraitsGrade8WordSlides
);

window.functionModules.push(personalityTraitsGrade8Function);
