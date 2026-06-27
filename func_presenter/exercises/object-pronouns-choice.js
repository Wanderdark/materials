const objectPronounsChoiceExercise = window.exerciseActivityModules.choice({
  id: "object-pronouns-choice",
  title: "CHOOSE THE CORRECT OPTION",
  compactPrompt: true,
  supports(functionModule) {
    return functionModule.id === "object-pronouns";
  },
  buildQuestions() {
    return [
      ["Can you help ...?", ["me", "I"], "me", "../images/8/8/56.webp", "A person asking for help."],
      ["The teacher is talking to ...", ["them", "they"], "them", "../images/5/3/101.webp", "A teacher talking to students."],
      ["Everybody likes ...", ["he", "him"], "him", "../images/8/2/4.webp", "A boy liked by everybody."],
      ["Can you see ...?", ["he", "him"], "him", "../images/5/3/102.webp", "A boy that can be seen."],
      ["Please wait for ...", ["us", "we"], "us", "../images/5/3/103.webp", "A group asking someone to wait."],
      ["I know ... very well.", ["they", "them"], "them", "../images/8/2/1.webp", "People known very well."],
      ["Can you open ...?", ["its", "it"], "it", "../images/7/1/5.webp", "An object to open."],
      ["She gives ... a notebook.", ["him", "he"], "him", "../images/5/3/100.webp", "A girl giving a notebook to a boy."],
      ["The teacher calls ...", ["we", "us"], "us", "../images/5/3/104.webp", "A teacher calling a group of students."],
      ["Can you hear ...?", ["I", "me"], "me", "../images/8/1/47.webp", "A person asking if they can be heard."],
      ["I meet ... at the cafeteria.", ["them", "they"], "them", "../images/6/1/45.webp", "People meeting at the cafeteria."],
      ["She has two friends and she loves ...", ["them", "they"], "them", "../images/7/1/7.webp", "A girl with two friends."],
      ["Laura is cool and everybody likes ...", ["she", "her"], "her", "../images/8/1/3.webp", "Laura is liked by everybody."],
      ["Peter is hardworking. He does ... homework every day.", ["his", "he"], "his", "../images/7/1/17.webp", "Peter doing homework."]
    ].map(([prompt, options, answer, imagePath, visualBrief], index) => ({
      id: `object-pronouns-choice-${index + 1}`,
      referenceType: "OBJECT PRONOUNS",
      prompt,
      options,
      answer,
      imagePath,
      visualBrief,
      instruction: "Choose the correct object pronoun."
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(objectPronounsChoiceExercise);
