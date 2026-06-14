/* Word Overlord question adapter.
 * Keeps the shared QUESTIONS array untouched while exposing stable, ID-based records.
 */
(function createWordOverlordQuestionBank() {
  function hashString(value) {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i++) {
      hash ^= value.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36);
  }

  function countLetters(answer) {
    return String(answer || '').replace(/[\s-]/g, '').length;
  }

  function isTypeableAnswer(answer) {
    return /^[A-Z\s-]+$/.test(String(answer || ''));
  }

  function createRecord(question) {
    const primaryFields = question.slice(0, 7);
    return Object.freeze({
      id: 'wo-' + hashString(JSON.stringify(primaryFields)),
      definitionEn: question[0],
      definitionTr: question[1],
      answer: question[2],
      grade: question[3],
      difficulty: question[4],
      unit: question[5],
      image: question[6] || '',
      letterCount: countLetters(question[2]),
    });
  }

  const records = (typeof QUESTIONS === 'undefined' ? [] : QUESTIONS).map(createRecord);
  const byId = new Map(records.map(question => [question.id, question]));

  function shuffled(items, random) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function selectQuestion(candidates, targetLength, targetDifficulty, usedIds, usedAnswers, random) {
    const available = candidates.filter(question =>
      !usedIds.has(question.id) && !usedAnswers.has(question.answer)
    );

    const lengths = [targetLength, targetLength - 1, targetLength + 1, targetLength - 2, targetLength + 2];
    for (const length of lengths) {
      const matches = available.filter(question =>
        question.difficulty === targetDifficulty && question.letterCount === length
      );
      if (matches.length) return shuffled(matches, random)[0];
    }

    const sameDifficulty = available
      .filter(question => question.difficulty === targetDifficulty)
      .sort((a, b) => Math.abs(a.letterCount - targetLength) - Math.abs(b.letterCount - targetLength));
    if (sameDifficulty.length) {
      const nearestDistance = Math.abs(sameDifficulty[0].letterCount - targetLength);
      return shuffled(
        sameDifficulty.filter(question => Math.abs(question.letterCount - targetLength) === nearestDistance),
        random
      )[0];
    }

    const neighborDifficulties = [targetDifficulty - 1, targetDifficulty + 1]
      .filter(difficulty => difficulty >= 1 && difficulty <= 3);
    for (const difficulty of neighborDifficulties) {
      const neighbors = available
        .filter(question => question.difficulty === difficulty)
        .sort((a, b) => Math.abs(a.letterCount - targetLength) - Math.abs(b.letterCount - targetLength));
      if (neighbors.length) return neighbors[0];
    }

    return null;
  }

  function buildLevelQuestions(options) {
    const level = Math.max(1, Math.min(10, Number(options?.level) || 1));
    const grade = Number(options?.grade);
    const units = Array.isArray(options?.units) ? new Set(options.units.map(Number)) : null;
    const random = typeof options?.random === 'function' ? options.random : Math.random;
    const excludedIds = new Set(Array.isArray(options?.excludedIds) ? options.excludedIds : []);
    const excludedAnswers = new Set(Array.isArray(options?.excludedAnswers) ? options.excludedAnswers : []);
    const candidates = records.filter(question =>
      question.grade === grade &&
      (!units || units.has(question.unit)) &&
      isTypeableAnswer(question.answer) &&
      !excludedIds.has(question.id) &&
      !excludedAnswers.has(question.answer)
    );
    const lengths = Array.isArray(options?.lengths)
      ? options.lengths.map(Number)
      : window.WordOverlordLevelConfig.LENGTH_CURVE;
    const difficulties = Array.isArray(options?.difficulties)
      ? options.difficulties.map(Number)
      : window.WordOverlordLevelConfig.getDifficultyRecipe(level).slice(0, lengths.length);
    const usedIds = new Set();
    const usedAnswers = new Set();
    const selected = [];

    for (let position = 0; position < lengths.length; position++) {
      const question = selectQuestion(
        candidates,
        lengths[position],
        difficulties[position],
        usedIds,
        usedAnswers,
        random
      );
      if (!question) {
        throw new Error(`Not enough unique questions for grade ${grade}, level ${level}, position ${position + 1}`);
      }
      usedIds.add(question.id);
      usedAnswers.add(question.answer);
      selected.push(question);
    }

    return selected;
  }

  window.WordOverlordQuestionBank = Object.freeze({
    all: records,
    byId,
    getById(id) {
      return byId.get(id) || null;
    },
    countLetters,
    isTypeableAnswer,
    buildLevelQuestions,
  });
})();
