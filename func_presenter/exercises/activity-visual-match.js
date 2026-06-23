const activityVisualMatchExercise = window.exerciseActivityModules.matchPictures({
  id: "activity-visual-match",
  title: "MATCH PICTURES",
  supports(functionModule) {
    return functionModule.id === "simple-present-do-you-like";
  },
  buildBatches() {
    const toPairs = (items) => items.map(([id, sentence, club, imagePath]) => ({ id, sentence, club, imagePath }));
    return [
      toPairs([
        ["maths", "I like solving problems.", "Maths Club", "../images/5/1/14.webp"],
        ["technology", "I enjoy making robots.", "Technology Club", "../images/5/1/15.webp"],
        ["music", "I like playing guitar.", "Music Club", "../images/5/1/18.webp"],
        ["science", "I like doing experiments.", "Science Club", "../images/5/1/20.webp"],
        ["sports", "I love playing football.", "Sports Club", "../images/5/1/23.webp"],
        ["folk-dance", "I love folk dancing.", "Folk Dance Club", "../images/5/1/24.webp"]
      ]),
      toPairs([
        ["ballet", "I love ballet dancing.", "Ballet Club", "../images/5/1/22.webp"],
        ["film", "I love watching movies.", "Film Club", "../images/5/1/21.webp"],
        ["environment", "I like planting trees.", "Environment Club", "../images/5/1/16.webp"],
        ["art", "I enjoy drawing pictures and painting.", "Art Club", "../images/5/1/17.webp"],
        ["piano", "I like playing the piano.", "Music Club", "../images/5/1/18.webp"],
        ["swimming", "I like swimming.", "Swimming", "images/simple-present-like/13-swimming.webp"]
      ])
    ];
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(activityVisualMatchExercise);
