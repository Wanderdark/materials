const possessiveAdjectivesChoiceExercise = window.exerciseActivityModules.choice({
  id: "possessive-adjectives-choice",
  title: "CHOOSE THE CORRECT OPTION",
  compactPrompt: true,
  supports(functionModule) {
    return functionModule.id === "possessive-adjectives";
  },
  buildQuestions() {
    return [
      ["I have a new ruler. ______ ruler is blue.", ["My", "Me"], "My", "../images/5/2/63.webp", "A blue ruler."],
      ["Hannah has a beautiful bicycle. ______ bicycle is pink.", ["She", "Her"], "Her", "images/possessive-adjectives/hannah-ridebike.webp", "Hannah with a pink bicycle."],
      ["Alex is wearing a green T-shirt. ______ T-shirt looks nice.", ["His", "Him"], "His", "images/possessive-adjectives/jack-tshirt.webp", "Alex wearing a green T-shirt."],
      ["We love English. ______ teacher is very kind.", ["Us", "Our"], "Our", "../images/5/3/101.webp", "Students and their teacher."],
      ["The rabbit is eating ______ carrots.", ["Its", "It"], "Its", "images/possessive-adjectives/rabbiteatcarrot.webp", "A rabbit eating carrots."],
      ["Emma and Chloe are best friends. ______ classroom is very clean.", ["Them", "Their"], "Their", "images/possessive-adjectives/emmaandchloe.webp", "Emma and Chloe in their classroom."],
      ["Is this ______ backpack?", ["Your", "You"], "Your", "../images/5/3/44.webp", "A backpack."],
      ["Ben has a new football. ______ football is black and white.", ["He", "His"], "His", "images/possessive-adjectives/benfootball.webp", "Ben with a football."],
      ["This is Hannah's house. Her family lives here. ______ house is very big.", ["Their", "They"], "Their", "images/possessive-adjectives/hannahhome.webp", "Hannah's family home."],
      ["The bird is in the tree. ______ nest is very small.", ["It", "Its"], "Its", "images/possessive-adjectives/birdnest.webp", "A bird in a tree with a nest."],
      ["Jack and I are classmates. ______ classroom is on the first floor.", ["Our", "We"], "Our", "images/possessive-adjectives/jackandzoe.webp", "Jack and a classmate."],
      ["Linda is reading a book. ______ book is very interesting.", ["She", "Her"], "Her", "images/daily-routines/readsbook.webp", "Linda reading a book."]
    ].map(([prompt, options, answer, imagePath, visualBrief], index) => ({
      id: `possessive-adjectives-choice-${index + 1}`,
      referenceType: "POSSESSIVE ADJECTIVES",
      prompt,
      options,
      answer,
      imagePath,
      visualBrief,
      instruction: "Choose the correct possessive adjective."
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(possessiveAdjectivesChoiceExercise);
