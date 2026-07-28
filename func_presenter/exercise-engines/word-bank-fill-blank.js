function startWordBankFillBlank(exercise) {
  state.exercise = exercise;
  state.wordBankFillPages = typeof exercise.buildPages === "function"
    ? exercise.buildPages(state.module)
    : exercise.pages || [];
  state.wordBankFillPageIndex = 0;
  state.wordBankFillMatched = 0;
  state.wordBankFillSelected = null;
  state.wordBankFillDragged = null;
  hideAllScreens();
  els.fillBlank.classList.remove("hidden");
  els.fillBlankGrade.textContent = `GRADE ${state.grade}`;
  els.fillBlankTitle.textContent = exercise.title || "FILL THE BLANKS";
  els.fillBlankInstruction.textContent = exercise.instruction || "Choose a word, then choose the correct blank.";
  els.fillBlankFeedback.textContent = "Complete the set.";
  els.fillBlankFeedback.className = "exercise-feedback";
  renderWordBankFillBlankPage();
}

function renderWordBankFillBlankPage() {
  const page = state.wordBankFillPages[state.wordBankFillPageIndex];
  if (!page) {
    if (state.postExerciseIndex !== undefined) returnToPostExerciseSlide();
    else returnToSetup();
    return;
  }
  state.wordBankFillMatched = 0;
  state.wordBankFillSelected = null;
  state.wordBankFillDragged = null;
  els.fillBlankProgress.textContent = `${state.wordBankFillPageIndex + 1} / ${state.wordBankFillPages.length}`;
  els.fillBlankInstruction.textContent = page.instruction || state.exercise.instruction || "Choose a word, then choose the correct blank.";
  els.fillBlankFeedback.textContent = "Select a word from the left.";
  els.fillBlankFeedback.className = "exercise-feedback";
  els.fillBlankGrid.className = "fill-blank-grid word-bank-fill-grid";

  const layout = document.createElement("div");
  layout.className = "word-bank-fill-layout";

  const bank = document.createElement("div");
  bank.className = "word-bank-fill-bank";
  (page.words || []).forEach((word) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "word-bank-fill-word";
    button.textContent = word;
    button.dataset.word = word;
    button.draggable = true;
    button.addEventListener("click", () => selectWordBankFillWord(button));
    button.addEventListener("dragstart", (event) => {
      state.wordBankFillDragged = word;
      event.dataTransfer.setData("text/plain", word);
      button.classList.add("dragging");
    });
    button.addEventListener("dragend", () => {
      state.wordBankFillDragged = null;
      button.classList.remove("dragging");
    });
    bank.append(button);
  });

  const sentences = document.createElement("div");
  sentences.className = "word-bank-fill-sentences";
  (page.blanks || []).forEach((blank, index) => {
    const row = document.createElement("section");
    row.className = "word-bank-fill-row";
    row.dataset.answer = blank.answer;

    const number = document.createElement("strong");
    number.className = "word-bank-fill-number";
    number.textContent = `${index + 1}`;

    const text = document.createElement("p");
    text.className = "word-bank-fill-sentence";
    text.append(document.createTextNode(`${blank.clue} `));

    const target = document.createElement("button");
    target.type = "button";
    target.className = "word-bank-fill-target";
    target.textContent = "______";
    target.dataset.answer = blank.answer;
    target.addEventListener("click", () => answerWordBankFillBlank(target));
    target.addEventListener("dragover", (event) => {
      event.preventDefault();
      target.classList.add("drag-over");
    });
    target.addEventListener("dragleave", () => target.classList.remove("drag-over"));
    target.addEventListener("drop", (event) => {
      event.preventDefault();
      target.classList.remove("drag-over");
      const word = event.dataTransfer.getData("text/plain") || state.wordBankFillDragged;
      answerWordBankFillBlank(target, word);
    });
    text.append(target);
    text.append(document.createTextNode("."));

    row.append(number, text);
    sentences.append(row);
  });

  layout.append(bank, sentences);
  els.fillBlankGrid.replaceChildren(layout);
}

function selectWordBankFillWord(button) {
  if (button.disabled) return;
  els.fillBlankGrid.querySelectorAll(".word-bank-fill-word.selected").forEach((item) => item.classList.remove("selected"));
  button.classList.add("selected");
  state.wordBankFillSelected = button.dataset.word;
  els.fillBlankFeedback.textContent = `Selected: ${button.dataset.word}`;
  els.fillBlankFeedback.className = "exercise-feedback";
}

function answerWordBankFillBlank(target, droppedWord) {
  if (target.disabled) return;
  const selectedWord = droppedWord || state.wordBankFillSelected;
  if (!selectedWord) {
    els.fillBlankFeedback.textContent = "Choose a word first.";
    els.fillBlankFeedback.className = "exercise-feedback";
    return;
  }
  const correct = selectedWord === target.dataset.answer;
  if (!correct) {
    playFeedbackSound(false);
    target.classList.add("wrong");
    const selectedButton = findWordBankFillWordButton(selectedWord);
    if (selectedButton) selectedButton.classList.add("wrong");
    els.fillBlankFeedback.textContent = "Try another blank.";
    els.fillBlankFeedback.className = "exercise-feedback wrong";
    setTimeout(() => {
      target.classList.remove("wrong");
      if (selectedButton) selectedButton.classList.remove("wrong");
    }, 500);
    return;
  }
  playFeedbackSound(true);
  target.textContent = selectedWord;
  target.classList.add("revealed");
  target.disabled = true;
  const wordButton = findWordBankFillWordButton(selectedWord);
  if (wordButton) {
    wordButton.classList.remove("selected");
    wordButton.classList.add("used");
    wordButton.disabled = true;
    wordButton.draggable = false;
  }
  state.wordBankFillSelected = null;
  state.wordBankFillMatched += 1;
  els.fillBlankFeedback.textContent = "Correct.";
  els.fillBlankFeedback.className = "exercise-feedback correct";
  if (state.wordBankFillMatched >= (state.wordBankFillPages[state.wordBankFillPageIndex].blanks || []).length) {
    showWordBankFillBlankActions();
  }
}

function findWordBankFillWordButton(word) {
  return [...els.fillBlankGrid.querySelectorAll(".word-bank-fill-word")]
    .find((button) => button.dataset.word === word && !button.disabled);
}

function showWordBankFillBlankActions() {
  const hasNext = state.wordBankFillPageIndex < state.wordBankFillPages.length - 1;
  els.fillBlankFeedback.textContent = hasNext ? "Great set. Continue?" : "Great! All sets are complete.";
  els.fillBlankFeedback.className = "exercise-feedback correct";
  const actions = document.createElement("div");
  actions.className = "word-bank-fill-actions";
  if (hasNext) {
    const next = document.createElement("button");
    next.type = "button";
    next.className = "primary-button";
    next.textContent = "CONTINUE";
    next.addEventListener("click", () => {
      state.wordBankFillPageIndex += 1;
      renderWordBankFillBlankPage();
    });
    actions.append(next);
  }
  const exit = document.createElement("button");
  exit.type = "button";
  exit.className = "secondary-button";
  exit.textContent = "EXIT";
  exit.addEventListener("click", () => {
    if (state.postExerciseIndex !== undefined) returnToPostExerciseSlide();
    else returnToSetup();
  });
  actions.append(exit);
  els.fillBlankGrid.append(actions);
}

