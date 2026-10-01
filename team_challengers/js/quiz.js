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

  function shuffleQuestionOptions(question) {
    const shuffled = shuffle(question.options.map((text, originalIndex) => ({ text, originalIndex, portrait: question.optionPortraits?.[originalIndex] })));
    const answer = shuffled.findIndex((option) => option.originalIndex === question.answer);
    return {
      ...question,
      options: shuffled.map((option) => option.text),
      answer,
      ...(question.optionPortraits ? { optionPortraits: shuffled.map((option) => option.portrait) } : {})
    };
  }

  function createQuestionPicker(questions) {
    let reviewQueue = [];
    let priorityOneQueue = [];
    let priorityTwoQueue = [];
    let regularQueue = [];
    let previousId = "";

    function shuffleQueue(items) {
      const queue = shuffle(items);
      if (queue.length > 1 && queue[0].id === previousId) [queue[0], queue[1]] = [queue[1], queue[0]];
      return queue;
    }

    function activeQueue() {
      if (!reviewQueue.length && !priorityOneQueue.length && !priorityTwoQueue.length && !regularQueue.length) {
        reviewQueue = questions.filter((question) => question.reviewFirst === true);
        priorityOneQueue = shuffleQueue(questions.filter((question) => (question.priority === 1 || question.priority === true) && question.reviewFirst !== true));
        priorityTwoQueue = shuffleQueue(questions.filter((question) => question.priority === 2 && question.reviewFirst !== true));
        regularQueue = shuffleQueue(questions.filter((question) => question.priority !== 1 && question.priority !== 2 && question.priority !== true && question.reviewFirst !== true));
      }
      return reviewQueue.length ? reviewQueue : priorityOneQueue.length ? priorityOneQueue : priorityTwoQueue.length ? priorityTwoQueue : regularQueue;
    }

    const pick = (difficulty) => {
      const firstQueue = activeQueue();
      const queue = difficulty === undefined ? firstQueue : [reviewQueue, priorityOneQueue, priorityTwoQueue, regularQueue].find((items) => items.some((question) => question.difficulty === difficulty)) || [];
      const index = difficulty === undefined ? 0 : queue.findIndex((question) => question.difficulty === difficulty);
      if (index < 0) return undefined;
      const [question] = queue.splice(index, 1);
      previousId = question?.id || "";
      return question;
    };
    pick.availableDifficulties = () => {
      activeQueue();
      return [...new Set([...reviewQueue, ...priorityOneQueue, ...priorityTwoQueue, ...regularQueue].map((question) => question.difficulty))];
    };
    pick.peekReview = () => activeQueue().find((question) => question.reviewFirst === true);
    return pick;
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

  Object.assign(TC, { buildQuestionCatalog, createQuestionPicker, filterQuestions, shuffleQuestionOptions });
})();
