window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push({
  id: "present-progressive-fill-blank",
  activity: "fill-blank",
  title: "FILL THE BLANKS",
  instruction: "TAP EACH BLANK TO REVEAL THE ANSWER.",
  questions: [
    {
      imagePath: "images/present-progressive/gobybus.webp",
      segments: [
        { text: "Hannah " },
        { blank: true, answer: "rides", clue: "ride" },
        { text: " her bicycle to school every day, but today she " },
        { blank: true, answer: "is going", clue: "go" },
        { text: " to school by bus." }
      ]
    },
    {
      imagePath: "../images/5/4/27.webp",
      segments: [
        { text: "She " },
        { blank: true, answer: "takes", clue: "take" },
        { text: " photos of flowers every Saturday. Look! She " },
        { blank: true, answer: "is taking", clue: "take" },
        { text: " photos of a butterfly now." }
      ]
    },
    {
      imagePath: "../images/5/4/8.webp",
      segments: [
        { text: "He " },
        { blank: true, answer: "goes", clue: "go" },
        { text: " fishing with his father every weekend, but today they " },
        { blank: true, answer: "are relaxing", clue: "relax" },
        { text: " at the beach." }
      ]
    },
    {
      imagePath: "../images/5/4/13.webp",
      segments: [
        { text: "I usually " },
        { blank: true, answer: "ride", clue: "ride" },
        { text: " my bicycle to school but today I " },
        { blank: true, answer: "am riding", clue: "ride" },
        { text: " my scooter." }
      ]
    },
    {
      imagePath: "images/daily-routines/havedinner.webp",
      segments: [
        { text: "We " },
        { blank: true, answer: "are going out", clue: "go out" },
        { text: " for dinner today but we often " },
        { blank: true, answer: "eat", clue: "eat" },
        { text: " dinner at home." }
      ]
    },
    {
      imagePath: "images/daily-routines/watchestv.webp",
      segments: [
        { text: "She usually " },
        { blank: true, answer: "goes", clue: "go" },
        { text: " to bed early but she " },
        { blank: true, answer: "is watching", clue: "watch" },
        { text: " an interesting movie tonight." }
      ]
    }
  ],
  supports(functionModule) {
    return functionModule.id === "present-progressive";
  }
});
