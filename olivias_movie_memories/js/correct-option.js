(() => {
  window.LeagueListening = window.LeagueListening || {};
  function hasTrueFalseBonus(item) {
    return typeof item.truefalsequestion === "string" && item.truefalsequestion.trim() !== "" &&
      typeof item.truefalseanswer === "boolean";
  }
  function getCorrectOptionQuestions(item) {
    return (item.correctOptionQuestions || []).filter((question) =>
      typeof question.sentence === "string" && question.sentence.split("___").length === 2 &&
      (question.sentence.match(/([\p{L}][\p{L} '-]*?)\s*:\s*/gu) || []).length <= 3 &&
      typeof question.target === "string" && Array.isArray(question.choices) &&
      question.choices.length === 4 && question.choices.every((choice) => typeof choice === "string" && choice.trim()) &&
      new Set(question.choices.map((choice) => choice.toLowerCase())).size === 4 &&
      question.choices.includes(question.target) && (hasTrueFalseBonus(item) ||
      typeof question.bonus?.target === "string" && Array.isArray(question.bonus.choices) &&
      question.bonus.choices.length === 4 && question.bonus.choices.every((choice) => typeof choice === "string" && choice.trim()) &&
      new Set(question.bonus.choices).size === 4 && question.bonus.choices.includes(question.bonus.target))
    );
  }
  function createCorrectOptionQuestion(item) {
    const questions = getCorrectOptionQuestions(item);
    if (!questions.length) return null;
    const question = questions[Math.floor(Math.random() * questions.length)];
    const choices = [...question.choices];
    for (let index = choices.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [choices[index], choices[swap]] = [choices[swap], choices[index]];
    }
    const answerOptions = choices.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));
    return { ...item, correctOptionQuestion: question, blankTranscript: question.sentence, answerOptions,
      correctOptionId: answerOptions.find((option) => option.text === question.target).id,
      evidenceStart: null, evidenceEnd: null, evidenceSentence: undefined, explanation: "" };
  }
  function createCorrectOptionBonus(item) {
    if (item.randomEventId !== "complete-silence" && hasTrueFalseBonus(item)) {
      return { ...item, isBonusQuestion: true, isTrueFalseBonus: true,
        blankTranscript: item.truefalsequestion.trim(),
        answerOptions: [{ id: "a", text: "TRUE" }, { id: "b", text: "FALSE" }],
        correctOptionId: item.truefalseanswer ? "a" : "b" };
    }
    const bonus = item.correctOptionQuestion?.bonus;
    if (!bonus || bonus.choices?.length !== 4 || !bonus.choices.includes(bonus.target)) return null;
    const choices = [...bonus.choices];
    for (let index = choices.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(Math.random() * (index + 1));
      [choices[index], choices[swap]] = [choices[swap], choices[index]];
    }
    const answerOptions = choices.map((text, index) => ({ id: String.fromCharCode(97 + index), text }));
    return { ...item, isBonusQuestion: true,
      blankTranscript: item.correctOptionQuestion.target.toUpperCase(),
      answerOptions, correctOptionId: answerOptions.find((option) => option.text === bonus.target).id };
  }
  Object.assign(window.LeagueListening, { getCorrectOptionQuestions, createCorrectOptionQuestion, createCorrectOptionBonus });
})();
