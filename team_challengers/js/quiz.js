(() => {
  const TC = window.TeamChallengers;

  function shuffle(items) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function createQuestionPicker(questions) {
    let priorityQueue = [];
    let regularQueue = [];
    let previousId = "";

    function shuffleQueue(items) {
      const queue = shuffle(items);
      if (queue.length > 1 && queue[0].id === previousId) [queue[0], queue[1]] = [queue[1], queue[0]];
      return queue;
    }

    return () => {
      if (!priorityQueue.length && !regularQueue.length) {
        priorityQueue = shuffleQueue(questions.filter((question) => question.priority === true));
        regularQueue = shuffleQueue(questions.filter((question) => question.priority !== true));
      }
      const queue = priorityQueue.length ? priorityQueue : regularQueue;
      const question = queue.shift();
      previousId = question?.id || "";
      return question;
    };
  }

  function buildQuestionCatalog(questions) {
    const grades = new Map();
    questions.forEach((question) => {
      const grade = Number(question.grade);
      const unit = Number(question.unit);
      if (!Number.isInteger(grade) || !Number.isInteger(unit)) return;
      if (!grades.has(grade)) grades.set(grade, new Map());
      const units = grades.get(grade);
      if (!units.has(unit)) units.set(unit, { unit, count: 0 });
      units.get(unit).count += 1;
    });
    return [...grades.entries()].sort(([a], [b]) => a - b).map(([grade, units]) => ({
      grade,
      units: [...units.values()].sort((a, b) => a.unit - b.unit)
    }));
  }

  function filterQuestions(questions, selection) {
    return questions.filter((question) => Number(question.grade) === Number(selection.grade)
      && Number(question.unit) === Number(selection.unit));
  }

  Object.assign(TC, { buildQuestionCatalog, createQuestionPicker, filterQuestions });
})();
