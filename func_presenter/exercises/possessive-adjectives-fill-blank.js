const possessiveAdjectivesFillBlankExercise = window.exerciseActivityModules.fillBlank({
  id: "possessive-adjectives-fill-blank",
  title: "FILL THE BLANKS",
  supports(functionModule) {
    return functionModule.id === "possessive-adjectives";
  },
  instruction: "TAP EACH BLANK TO REVEAL THE ANSWER.",
  questions: [
    { parts: [{ text: "Sarah", mark: true }, { text: " has a beautiful dress." }], answer: "Her", suffix: " dress is pink." },
    { parts: [{ text: "My brother and I", mark: true }, { text: " play basketball every Saturday." }], answer: "Our", suffix: " favorite sport is basketball." },
    { parts: [{ text: "You", mark: true }, { text: " have a new notebook! Wow," }], answer: "Your", suffix: " notebook is very cool!" },
    { parts: [{ text: "Alex", mark: true }, { text: " is wearing a blue jacket." }], answer: "His", suffix: " jacket is great." },
    { parts: [{ text: "The bird", mark: true }, { text: " is feeding" }], answer: "its", suffix: " babies." },
    { parts: [{ text: "Tom and Lucy", mark: true }, { text: " have a pet rabbit." }], answer: "Their", suffix: " rabbit is very cute." },
    { parts: [{ text: "I", mark: true }, { text: " have a computer in my bedroom." }], answer: "My", suffix: " computer is very fast." },
    { parts: [{ text: "Our teacher", mark: true }, { text: " is very friendly." }], answer: "His", suffix: " lessons are always interesting." }
  ]
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(possessiveAdjectivesFillBlankExercise);
