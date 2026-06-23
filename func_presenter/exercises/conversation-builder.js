const conversationBuilderExercise = window.exerciseActivityModules.orderSentences({
  id: "conversation-builder",
  title: "ORDER THE SENTENCES",
  supports(functionModule) {
    return functionModule.id === "simple-present-do-you-like";
  },
  buildRounds() {
    const clubs = [
      ["chess", "Chess Club", "playing chess", "../images/5/1/19.webp", "enjoy", "love"],
      ["maths", "Maths Club", "solving problems", "../images/5/1/14.webp", "like", "enjoy"],
      ["technology", "Technology Club", "making robots", "../images/5/1/15.webp", "love", "like"],
      ["music", "Music Club", "playing the guitar", "../images/5/1/18.webp", "enjoy", "love"],
      ["science", "Science Club", "doing experiments", "../images/5/1/20.webp", "like", "enjoy"],
      ["sports", "Sports Club", "playing football", "../images/5/1/23.webp", "love", "love"],
      ["folk-dance", "Folk Dance Club", "dancing", "../images/5/1/24.webp", "enjoy", "like"],
      ["ballet", "Ballet Club", "dancing", "../images/5/1/22.webp", "like", "enjoy"],
      ["film", "Film Club", "watching movies", "../images/5/1/21.webp", "love", "like"],
      ["environment", "Environment Club", "planting trees", "../images/5/1/16.webp", "enjoy", "love"],
      ["art", "Art Club", "drawing pictures and painting", "../images/5/1/17.webp", "like", "enjoy"]
    ];
    return clubs.map(([id, club, activity, imagePath, questionVerb, replyVerb]) => ({
      id,
      club,
      activity,
      imagePath,
      lines: [
        "What's your favorite school club?",
        `My favorite club is ${club}.`,
        `Do you ${questionVerb} ${activity}?`,
        `Yes, I ${replyVerb} ${activity}.`
      ]
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(conversationBuilderExercise);
