const timetableChoiceExercise = window.exerciseActivityModules.choice({
  id: "timetable-choice",
  title: "CHOOSE THE CORRECT OPTION",
  compactPrompt: true,
  wideOptions: true,
  repeatable: true,
  supports(functionModule) {
    return functionModule.id === "to-be-telling-time";
  },
  buildQuestions() {
    const timetable = [
      ["Monday", "English", "half past nine"], ["Monday", "Science", "quarter past ten"], ["Monday", "Maths", "half past eleven"], ["Monday", "Maths", "one o'clock"], ["Monday", "Music", "ten to two"], ["Monday", "Social Studies", "twenty to three"],
      ["Tuesday", "Social Studies", "half past nine"], ["Tuesday", "English", "quarter past ten"], ["Tuesday", "Science", "half past eleven"], ["Tuesday", "Science", "one o'clock"], ["Tuesday", "English", "ten to two"], ["Tuesday", "P.E.", "twenty to three"],
      ["Wednesday", "Maths", "half past nine"], ["Wednesday", "Music", "quarter past ten"], ["Wednesday", "English", "half past eleven"], ["Wednesday", "Art", "one o'clock"], ["Wednesday", "Computer", "ten to two"], ["Wednesday", "English", "twenty to three"],
      ["Thursday", "Science", "half past nine"], ["Thursday", "Computer", "quarter past ten"], ["Thursday", "P.E.", "half past eleven"], ["Thursday", "Social Studies", "one o'clock"], ["Thursday", "Maths", "ten to two"], ["Thursday", "Science", "twenty to three"],
      ["Friday", "Art", "half past nine"], ["Friday", "Social Studies", "quarter past ten"], ["Friday", "Science", "half past eleven"], ["Friday", "English", "one o'clock"], ["Friday", "Science", "ten to two"], ["Friday", "Computer", "twenty to three"]
    ];
    const lessonTotalsByDay = new Map();
    timetable.forEach(([day, lesson]) => {
      const key = `${day}|${lesson}`;
      lessonTotalsByDay.set(key, (lessonTotalsByDay.get(key) || 0) + 1);
    });
    const lessonOccurrencesByDay = new Map();
    const ordinalWords = ["", "first", "second", "third"];
    const daysByLesson = new Map();
    timetable.forEach(([day, lesson]) => {
      const days = daysByLesson.get(lesson) || [];
      if (!days.includes(day)) days.push(day);
      daysByLesson.set(lesson, days);
    });
    const timeAnswers = [...new Set(timetable.map(([, , time]) => `It starts at ${time}.`))];
    const formatDays = (days) => {
      if (days.length === 1) return `It is on ${days[0]}.`;
      if (days.length === 2) return `It is on ${days[0]} and ${days[1]}.`;
      return `It is on ${days.slice(0, -1).join(", ")} and ${days[days.length - 1]}.`;
    };
    const dayAnswers = [...daysByLesson.values()].map(formatDays);
    const makeOptions = (answer, source) => shuffleTimeChoiceOptions([
      answer,
      ...shuffleTimeChoiceOptions(source.filter((item) => item !== answer)).slice(0, 2)
    ]);
    const timeQuestions = timetable.map(([day, lesson, time], index) => {
      const key = `${day}|${lesson}`;
      const occurrence = (lessonOccurrencesByDay.get(key) || 0) + 1;
      lessonOccurrencesByDay.set(key, occurrence);
      const lessonLabel = lessonTotalsByDay.get(key) > 1
        ? `the ${ordinalWords[occurrence]} ${lesson}`
        : lesson;
      const answer = `It starts at ${time}.`;
      return {
        id: `timetable-time-${index + 1}`,
        referenceType: "WHAT TIME?",
        prompt: `What time does ${lessonLabel} lesson start on ${day}?`,
        options: makeOptions(answer, timeAnswers),
        answer,
        instruction: "Choose the correct answer.",
        imagePath: "images/telling-time/timetable.webp",
        visualBrief: "A weekly school timetable."
      };
    });
    const dayQuestions = [...daysByLesson.entries()].map(([lesson, days], index) => {
      const answer = formatDays(days);
      return {
        id: `timetable-when-${index + 1}`,
        referenceType: "WHEN?",
        prompt: `When is the ${lesson} lesson?`,
        options: makeOptions(answer, dayAnswers),
        answer,
        instruction: "Choose the correct answer.",
        imagePath: "images/telling-time/timetable.webp",
        visualBrief: "A weekly school timetable."
      };
    });
    return shuffleTimeChoiceOptions([
      ...shuffleTimeChoiceOptions(timeQuestions).slice(0, 8),
      ...shuffleTimeChoiceOptions(dayQuestions).slice(0, 2)
    ]);
  }
});

function shuffleTimeChoiceOptions(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(timetableChoiceExercise);
