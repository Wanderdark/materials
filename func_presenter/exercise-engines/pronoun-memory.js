// APP-ANCHOR: Pronoun-memory exercise flow.
function startPronounMemory(exercise) {
  clearTimeout(state.pronounMemoryTimer);
  state.pronounMemoryExercise = exercise;
  state.pronounMemoryLevel = 0;
  state.pronounMemoryScore = 0;
  hideAllScreens();
  els.pronounMemory.classList.remove("hidden");
  els.pronounMemoryGrade.textContent = `GRADE ${state.grade}`;
  startPronounMemoryLevel();
}

function buildPronounMemorySequence() {
  const entries = Object.entries(state.pronounMemoryExercise.imageGroups)
    .flatMap(([pronoun, images]) => images.map((imagePath) => ({ pronoun, imagePath })));
  const level = state.pronounMemoryExercise.levels[state.pronounMemoryLevel];
  return shuffle(entries).slice(0, level.count);
}

function startPronounMemoryLevel() {
  clearTimeout(state.pronounMemoryTimer);
  const level = state.pronounMemoryExercise.levels[state.pronounMemoryLevel];
  state.pronounMemorySequence = buildPronounMemorySequence();
  state.pronounMemoryIndex = 0;
  state.pronounMemoryLocked = false;
  els.pronounMemoryLevel.textContent = `LEVEL ${state.pronounMemoryLevel + 1} / ${state.pronounMemoryExercise.levels.length}`;
  els.pronounMemoryScore.textContent = state.pronounMemoryScore;
  els.pronounMemoryStatus.textContent = level.revealMs ? "MEMORIZE" : "CHOOSE";
  els.pronounMemoryInstruction.textContent = level.revealMs
    ? `MEMORIZE ${level.count} PICTURE${level.count === 1 ? "" : "S"}.`
    : "CHOOSE THE CORRECT PRONOUN.";
  els.pronounMemoryChoices.classList.add("hidden");
  renderPronounMemoryImages(false);
  if (!level.revealMs) revealPronounMemoryChoices();
  else state.pronounMemoryTimer = setTimeout(revealPronounMemoryChoices, level.revealMs);
}

function renderPronounMemoryImages(concealed) {
  const count = state.pronounMemorySequence.length;
  els.pronounMemoryImages.style.setProperty("--memory-image-count", count);
  els.pronounMemoryImages.replaceChildren(...state.pronounMemorySequence.map((item, index) => {
    const card = document.createElement("div");
    card.className = `pronoun-memory-image${concealed ? " concealed" : ""}`;
    const image = document.createElement("img");
    image.src = item.imagePath;
    image.alt = "Pronoun memory picture";
    const number = document.createElement("span");
    number.textContent = String(index + 1);
    card.append(image, number);
    return card;
  }));
}

function revealPronounMemoryChoices() {
  const level = state.pronounMemoryExercise.levels[state.pronounMemoryLevel];
  if (level.revealMs) renderPronounMemoryImages(true);
  els.pronounMemoryStatus.textContent = "CHOOSE";
  els.pronounMemoryInstruction.textContent = "REMEMBER THE PICTURES AND CHOOSE THE PRONOUNS IN ORDER.";
  els.pronounMemoryChoices.classList.remove("hidden");
  updatePronounMemoryPrompt();
  startPronounMemoryAnswerTimer();
}

function updatePronounMemoryPrompt() {
  els.pronounMemoryPrompt.textContent = `PICTURE ${state.pronounMemoryIndex + 1} OF ${state.pronounMemorySequence.length}`;
  [...els.pronounMemoryChoices.querySelectorAll("button")].forEach((button) => {
    button.disabled = state.pronounMemoryLocked;
    button.classList.remove("correct", "wrong");
  });
}

function startPronounMemoryAnswerTimer() {
  clearTimeout(state.pronounMemoryAnswerTimer);
  els.pronounMemoryStatus.textContent = "5 SECONDS";
  state.pronounMemoryAnswerTimer = setTimeout(() => {
    if (!state.pronounMemoryLocked) {
      state.pronounMemoryLocked = true;
      showPronounMemoryResult(false, true);
    }
  }, 5000);
}

function answerPronounMemory(pronoun, button) {
  if (state.pronounMemoryLocked) return;
  const expected = state.pronounMemorySequence[state.pronounMemoryIndex]?.pronoun;
  if (!expected) return;
  state.pronounMemoryLocked = true;
  clearTimeout(state.pronounMemoryAnswerTimer);
  const isCorrect = pronoun === expected;
  button.classList.add(isCorrect ? "correct" : "wrong");
  playFeedbackSound(isCorrect);
  if (!isCorrect) {
    state.pronounMemoryTimer = setTimeout(() => showPronounMemoryResult(false), 650);
    return;
  }
  state.pronounMemoryIndex += 1;
  state.pronounMemoryTimer = setTimeout(() => {
    if (state.pronounMemoryIndex === state.pronounMemorySequence.length) {
      const level = state.pronounMemoryExercise.levels[state.pronounMemoryLevel];
      state.pronounMemoryScore += level.points;
      state.pronounMemoryLevel += 1;
      if (state.pronounMemoryLevel === state.pronounMemoryExercise.levels.length) showPronounMemoryResult(true);
      else startPronounMemoryLevel();
      return;
    }
    state.pronounMemoryLocked = false;
    updatePronounMemoryPrompt();
    startPronounMemoryAnswerTimer();
  }, 430);
}

function showPronounMemoryResult(isComplete, timedOut = false) {
  clearTimeout(state.pronounMemoryTimer);
  clearTimeout(state.pronounMemoryAnswerTimer);
  els.pronounMemory.classList.add("hidden");
  els.pronounMemoryResultKicker.textContent = isComplete ? "MEMORY MASTER" : "GAME OVER";
  els.pronounMemoryResultScore.textContent = state.pronounMemoryScore;
  els.pronounMemoryResultMessage.textContent = isComplete
    ? "You completed all 10 levels."
    : timedOut
      ? `Time is up. You reached Level ${state.pronounMemoryLevel + 1}.`
      : `You reached Level ${state.pronounMemoryLevel + 1}.`;
  els.pronounMemoryResult.classList.remove("hidden");
}

