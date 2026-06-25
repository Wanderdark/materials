const timetableTrueFalseExercise = window.exerciseActivityModules.trueFalseGrid({
  id: "timetable-true-false",
  title: "TRUE - FALSE",
  pageSize: 8,
  imagePath: "images/telling-time/timetable2.webp",
  visualBrief: "A weekly school timetable.",
  instruction: "READ THE TIMETABLE AND MARK EACH STATEMENT TRUE OR FALSE.",
  supports(functionModule) {
    return functionModule.id === "to-be-telling-time";
  },
  buildStatements() {
    const timetable = [
      ["Monday", "English", "nine o'clock"], ["Monday", "Science", "quarter past ten"], ["Monday", "Maths", "ten past eleven"], ["Monday", "Computer", "half past one"], ["Monday", "Music", "quarter past two"], ["Monday", "Social Studies", "three o'clock"],
      ["Tuesday", "Social Studies", "nine o'clock"], ["Tuesday", "English", "quarter past ten"], ["Tuesday", "Science", "ten past eleven"], ["Tuesday", "Art", "half past one"], ["Tuesday", "Religion", "quarter past two"], ["Tuesday", "P.E.", "three o'clock"],
      ["Wednesday", "Maths", "nine o'clock"], ["Wednesday", "Music", "quarter past ten"], ["Wednesday", "English", "ten past eleven"], ["Wednesday", "Social Studies", "half past one"], ["Wednesday", "Maths", "quarter past two"], ["Wednesday", "English", "three o'clock"],
      ["Thursday", "Science", "nine o'clock"], ["Thursday", "Computer", "quarter past ten"], ["Thursday", "P.E.", "ten past eleven"], ["Thursday", "English", "half past one"], ["Thursday", "Science", "quarter past two"], ["Thursday", "Science", "three o'clock"],
      ["Friday", "Art", "nine o'clock"], ["Friday", "Religion", "quarter past ten"], ["Friday", "Turkish", "ten past eleven"], ["Friday", "Science", "half past one"], ["Friday", "Turkish", "quarter past two"], ["Friday", "Computer", "three o'clock"]
    ];
    const timeWords = ["nine o'clock", "quarter past ten", "ten past eleven", "half past one", "quarter past two", "three o'clock"];
    const timeStatements = timetable.flatMap(([day, lesson, time], index) => [
      [`The ${lesson} lesson starts at ${time} on ${day}.`, true],
      [`The ${lesson} lesson starts at ${timeWords[(timeWords.indexOf(time) + 1) % timeWords.length]} on ${day}.`, false]
    ]);
    const daysByLesson = new Map();
    timetable.forEach(([day, lesson]) => {
      const days = daysByLesson.get(lesson) || [];
      if (!days.includes(day)) days.push(day);
      daysByLesson.set(lesson, days);
    });
    const lessonDays = [...daysByLesson.entries()];
    const formatDays = (days) => days.length === 1
      ? days[0]
      : days.length === 2
      ? `${days[0]} and ${days[1]}`
      : `${days.slice(0, -1).join(", ")} and ${days[days.length - 1]}`;
    const dayStatements = lessonDays.flatMap(([lesson, days], index) => [
      [`We have ${lesson} lesson on ${formatDays(days)}.`, true],
      [`We have ${lesson} lesson on ${formatDays(lessonDays[(index + 1) % lessonDays.length][1])}.`, false]
    ]);
    return [
      ...pickTimetableStatements(timeStatements.filter(([, isTrue]) => isTrue), 4),
      ...pickTimetableStatements(timeStatements.filter(([, isTrue]) => !isTrue), 4),
      ...pickTimetableStatements(dayStatements.filter(([, isTrue]) => isTrue), 4),
      ...pickTimetableStatements(dayStatements.filter(([, isTrue]) => !isTrue), 4)
    ];
  }
});

function pickTimetableStatements(items, count) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy.slice(0, count);
}

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(timetableTrueFalseExercise);
