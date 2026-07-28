// APP-ANCHOR: Fill-blank and word-bank exercise flows.
function startFillBlank(exercise) {
  state.exercise = exercise;
  state.fillBlankQuestions = typeof exercise.buildQuestions === "function"
    ? exercise.buildQuestions(state.module)
    : exercise.questions || [];
  state.fillBlankRevealed = 0;
  state.fillBlankTotalBlanks = state.fillBlankQuestions.reduce((sum, q) =>
    sum + (q.segments ? q.segments.filter((s) => s.blank).length : 1), 0);
  hideAllScreens();
  els.fillBlank.classList.remove("hidden");
  els.fillBlankGrade.textContent = `GRADE ${state.grade}`;
  els.fillBlankTitle.textContent = exercise.title;
  els.fillBlankInstruction.textContent = exercise.instruction || "TAP EACH BLANK TO REVEAL THE ANSWER.";
  els.fillBlankFeedback.textContent = "Tap the blanks.";
  els.fillBlankFeedback.className = "exercise-feedback";
  const hasImages = state.fillBlankQuestions.some((q) => q.imagePath);
  els.fillBlankGrid.className = `fill-blank-grid${hasImages ? " fill-blank-grid-img" : ""}`;
  updateFillBlankProgress();
  els.fillBlankGrid.replaceChildren(...state.fillBlankQuestions.map((question, index) => createFillBlankItem(question, index)));
}

function createFillBlankItem(question, index) {
  const item = document.createElement("section");
  item.className = "fill-blank-item";
  item.dataset.index = index;
  if (question.segments) {
    item.classList.add("fill-blank-item-seg");
    if (question.imagePath) {
      const img = document.createElement("img");
      img.src = question.imagePath;
      img.className = "fill-blank-seg-img";
      item.append(img);
    }
    const body = document.createElement("div");
    body.className = "fill-blank-seg-body";
    question.segments.forEach((seg) => {
      if (seg.blank) {
        const answer = document.createElement("button");
        answer.className = "fill-blank-answer";
        answer.type = "button";
        answer.dataset.answer = seg.answer;
        answer.textContent = "______";
        answer.addEventListener("click", () => revealFillBlankAnswer(answer));
        body.append(answer);
        const clue = document.createElement("span");
        clue.className = "fill-blank-clue";
        clue.textContent = ` (${seg.clue}) `;
        body.append(clue);
      } else {
        const span = document.createElement("span");
        span.textContent = seg.text;
        body.append(span);
      }
    });
    item.append(body);
    return item;
  }
  (question.parts || []).forEach((part) => {
    const span = document.createElement("span");
    span.className = part.mark ? "fill-blank-mark" : "";
    span.textContent = part.text;
    item.append(span);
  });
  const answer = document.createElement("button");
  answer.className = "fill-blank-answer";
  answer.type = "button";
  answer.dataset.answer = question.answer;
  answer.textContent = "______";
  answer.addEventListener("click", () => revealFillBlankAnswer(answer));
  item.append(answer);
  if (question.suffix) {
    const suffix = document.createElement("span");
    suffix.textContent = question.suffix;
    item.append(suffix);
  }
  return item;
}

function revealFillBlankAnswer(button) {
  if (button.classList.contains("revealed")) return;
  button.textContent = button.dataset.answer;
  button.classList.add("revealed");
  button.disabled = true;
  state.fillBlankRevealed += 1;
  updateFillBlankProgress();
  playFeedbackSound(true);
  els.fillBlankFeedback.textContent = state.fillBlankRevealed === state.fillBlankTotalBlanks
    ? "Great! All blanks are revealed."
    : "Good. Keep going.";
  els.fillBlankFeedback.className = "exercise-feedback correct";
}

function updateFillBlankProgress() {
  els.fillBlankProgress.textContent = `${state.fillBlankRevealed} / ${state.fillBlankTotalBlanks}`;
}

