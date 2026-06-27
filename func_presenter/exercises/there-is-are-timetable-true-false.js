const thereIsAreTimetableTrueFalseExercise = window.exerciseActivityModules.trueFalseGrid({
  id: "there-is-are-timetable-true-false",
  title: "TRUE - FALSE",
  pageSize: 8,
  imagePath: "images/thereis-thereare/timetable.webp",
  visualBrief: "A weekly school timetable.",
  instruction: "READ THE TIMETABLE AND MARK EACH STATEMENT TRUE OR FALSE.",
  continueLabel: "CONTINUE?",
  maxAnsweredBeforeExit: 16,
  limitMessage: "There are still lots of different sentences, but it seems it's enough for now. Come back later.",
  supports(functionModule) {
    return functionModule.id === "there-is-are";
  },
  buildStatements() {
    const timetable = [
      ["Monday", "English"], ["Monday", "Social Studies"], ["Monday", "Science"], ["Monday", "Computer"], ["Monday", "Music"], ["Monday", "Social Studies"],
      ["Tuesday", "Social Studies"], ["Tuesday", "English"], ["Tuesday", "Art"], ["Tuesday", "Science"], ["Tuesday", "Religion"], ["Tuesday", "P.E."],
      ["Wednesday", "Maths"], ["Wednesday", "Music"], ["Wednesday", "Computer"], ["Wednesday", "English"], ["Wednesday", "Maths"], ["Wednesday", "English"],
      ["Thursday", "Science"], ["Thursday", "Computer"], ["Thursday", "P.E."], ["Thursday", "English"], ["Thursday", "Science"], ["Thursday", "Science"],
      ["Friday", "Art"], ["Friday", "Religion"], ["Friday", "Turkish"], ["Friday", "Science"], ["Friday", "Turkish"], ["Friday", "Computer"]
    ];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const lessons = ["English", "Social Studies", "Science", "Computer", "Music", "Art", "Religion", "P.E.", "Maths", "Turkish"];
    const countByDayLesson = new Map();
    timetable.forEach(([day, lesson]) => {
      const key = `${day}|${lesson}`;
      countByDayLesson.set(key, (countByDayLesson.get(key) || 0) + 1);
    });

    const statements = [];
    days.forEach((day) => {
      lessons.forEach((lesson) => {
        const count = countByDayLesson.get(`${day}|${lesson}`) || 0;
        const isPlural = count > 1;
        const article = /^[AEIOU]/.test(lesson) ? "an" : "a";
        const singularPrompt = `There is ${article} ${lesson} lesson on ${day}.`;
        const pluralPrompt = `There are ${lesson} lessons on ${day}.`;
        statements.push([isPlural ? pluralPrompt : singularPrompt, count > 0]);
      });
    });
    return shuffleThereIsAreStatements(statements);
  }
});

function shuffleThereIsAreStatements(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

window.exerciseModules = window.exerciseModules || [];
window.exerciseModules.push(thereIsAreTimetableTrueFalseExercise);
