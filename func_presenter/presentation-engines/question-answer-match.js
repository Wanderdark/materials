function clearQuestionAnswerMatch() {
  document.getElementById("questionAnswerMatch")?.remove();
}

function renderQuestionAnswerMatch(example) {
  const data = example.questionAnswerMatch;
  if (!data) return;

  const root = document.createElement("section");
  root.id = "questionAnswerMatch";
  root.className = "question-answer-match";
  const title = document.createElement("h2");
  title.className = "question-answer-match-title";
  title.textContent = data.title;
  const layout = document.createElement("div");
  layout.className = "question-answer-match-layout";
  const questions = document.createElement("div");
  questions.className = "question-answer-match-questions";
  const answers = document.createElement("div");
  answers.className = "question-answer-match-answers";
  let selectedQuestion = null;
  let selectedAnswer = null;

  const updateSelection = () => {
    questions.querySelectorAll("button").forEach((button) => button.classList.toggle("selected", button === selectedQuestion));
    answers.querySelectorAll("button").forEach((button) => button.classList.toggle("selected", button === selectedAnswer));
  };
  const checkMatch = () => {
    if (!selectedQuestion || !selectedAnswer) return;
    if (selectedQuestion.dataset.itemId === selectedAnswer.dataset.itemId) {
      selectedQuestion.disabled = true;
      selectedAnswer.disabled = true;
      selectedQuestion.classList.remove("selected");
      selectedAnswer.classList.remove("selected");
      selectedQuestion.classList.add("correct");
      selectedAnswer.classList.add("correct");
      selectedQuestion = null;
      selectedAnswer = null;
      playFeedbackSound(true);
      return;
    }
    const questionToReset = selectedQuestion;
    const answerToReset = selectedAnswer;
    questionToReset.classList.add("wrong");
    answerToReset.classList.add("wrong");
    selectedQuestion = null;
    selectedAnswer = null;
    playFeedbackSound(false);
    setTimeout(() => {
      questionToReset.classList.remove("wrong", "selected");
      answerToReset.classList.remove("wrong", "selected");
    }, 700);
  };
  const makeButton = (item, type) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `question-answer-match-${type}`;
    button.dataset.itemId = item.id;
    button.textContent = item[type];
    button.addEventListener("click", () => {
      if (button.disabled) return;
      if (type === "question") selectedQuestion = button;
      else selectedAnswer = button;
      updateSelection();
      checkMatch();
    });
    return button;
  };

  data.items.forEach((item) => questions.append(makeButton(item, "question")));
  shuffle(data.items).forEach((item) => answers.append(makeButton(item, "answer")));
  layout.append(questions, answers);
  root.append(title, layout);
  els.presenceView.replaceChildren(root);
}
