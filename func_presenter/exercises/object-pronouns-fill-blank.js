const objectPronounsFillBlankExercise = window.exerciseActivityModules.fillBlank({
  id: "object-pronouns-fill-blank",
  title: "FILL THE BLANKS",
  supports(functionModule) {
    return functionModule.id === "object-pronouns";
  },
  instruction: "TAP EACH BLANK TO REVEAL THE ANSWER.",
  questions: [
    { parts: [{ text: "I", mark: true }, { text: " can't solve the problem. Can you help " }], answer: "me", suffix: "?" },
    { parts: [{ text: "She", mark: true }, { text: " is my aunt and I like " }], answer: "her", suffix: " very much." },
    { parts: [{ text: "This is " }, { text: "George", mark: true }, { text: ". Do you know " }], answer: "him", suffix: "?" },
    { parts: [{ text: "We", mark: true }, { text: " visit grandma every Sunday. She tells " }], answer: "us", suffix: " stories." },
    { parts: [{ text: "You", mark: true }, { text: " are my best friend. I trust " }], answer: "you", suffix: "." },
    { parts: [{ text: "The students", mark: true }, { text: " are very hungry. These sandwiches are for " }], answer: "them", suffix: "." },
    { parts: [{ text: "Can you sing " }], answer: "me", suffix: " a song?" },
    { parts: [{ text: "Your pencil", mark: true }, { text: " is cute. Can I borrow " }], answer: "it", suffix: "?" }
  ]
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(objectPronounsFillBlankExercise);
