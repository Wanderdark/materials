const toBePresentChoiceExercise = window.exerciseActivityModules.choice({
  id: "to-be-present-choice",
  title: "CHOOSE THE CORRECT OPTION",
  compactPrompt: true,
  supports(functionModule) {
    return functionModule.id === "to-be-present";
  },
  buildQuestions() {
    return [
      ["I ..... a student in Mustafa Erçetin Secondary School.", "am", "images/tobe-present/5.webp", "A student at Mustafa Erçetin Secondary School."],
      ["She .... at the school garden.", "is", "images/tobe-present/6.webp", "A girl in the school garden."],
      ["They .... from France.", "are", "images/tobe-present/7.webp", "Students from France."],
      ["She ....... a nurse.", "is", "images/tobe-present/8.webp", "A nurse."],
      ["We ...... in the classroom now.", "are", "images/tobe-present/9.webp", "Students in a classroom."],
      ["I ......... Turkish.", "am", "images/tobe-present/25.webp", "A student from Turkiye."],
      ["He ..... my best friend.", "is", "../images/8/1/4.webp", "A boy who is a best friend."],
      ["You ..... very kind.", "are", "../images/8/1/9.webp", "A kind student."],
      ["It ..... a small pencil case.", "is", "../images/5/2/28.webp", "A small pencil case."],
      ["They ..... in the music club.", "are", "../images/5/1/18.webp", "Students in the music club."],
      ["I ..... happy today.", "am", "../images/6/4/28.webp", "A happy student."],
      ["My brother ..... at home now.", "is", "../images/8/2/20.webp", "A boy at home."],
      ["We ..... ready for the lesson.", "are", "../images/5/2/21.webp", "Students ready for a lesson."],
      ["She ..... my new classmate.", "is", "../images/8/1/1.webp", "A new female classmate."],
      ["I ..... in the school library.", "am", "../images/5/1/10.webp", "A student in the school library."]
    ].map(([prompt, answer, imagePath, visualBrief], index) => ({
      id: `to-be-choice-${index + 1}`,
      referenceType: "CHOOSE AM / IS / ARE",
      prompt,
      options: ["am", "is", "are"],
      answer,
      imagePath,
      visualBrief
    }));
  }
});

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(toBePresentChoiceExercise);
