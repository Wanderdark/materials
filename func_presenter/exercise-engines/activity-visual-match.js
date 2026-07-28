// APP-ANCHOR: Activity visual-match exercise flow.
function startActivityVisualMatch(exercise) {
  state.matchingBatches = exercise.buildBatches();
  state.matchingBatchIndex = 0;
  state.matchingBatchMatched = 0;
  state.matchingScore = 0;
  state.selectedMatchingSentence = null;
  state.matchingStartedAt = null;
  state.matchingElapsedMs = 0;
  hideAllScreens();
  els.matching.classList.remove("hidden");
  els.matchingGrade.textContent = `GRADE ${state.grade}`;
  renderActivityVisualMatch();
}

function renderActivityVisualMatch() {
  const pairs = state.matchingBatches[state.matchingBatchIndex];
  state.selectedMatchingSentence = null;
  state.matchingStartedAt = null;
  state.matchingElapsedMs = 0;
  els.matchingScore.textContent = state.matchingScore;
  els.matchingProgress.textContent = `${state.matchingBatchMatched} / ${pairs.length}`;
  els.matchingSentences.replaceChildren(...shuffle(pairs).map((pair) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "matching-sentence";
    button.dataset.pairId = pair.id;
    button.textContent = pair.sentence;
    button.addEventListener("click", () => selectMatchingSentence(button));
    return button;
  }));
  els.matchingVisuals.replaceChildren(...shuffle(pairs).map((pair) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "matching-visual";
    button.dataset.pairId = pair.id;
    button.disabled = true;
    const image = document.createElement("img");
    image.src = pair.imagePath;
    image.alt = pair.club;
    image.addEventListener("error", () => {
      image.remove();
      const placeholder = document.createElement("span");
      placeholder.className = "matching-image-placeholder";
      placeholder.textContent = pair.club;
      button.append(placeholder);
    }, { once: true });
    button.append(image);
    button.addEventListener("click", () => selectMatchingVisual(button));
    return button;
  }));
}

function selectMatchingSentence(button) {
  if (button.disabled) return;
  if (state.selectedMatchingSentence && state.selectedMatchingSentence !== button) {
    state.selectedMatchingSentence.classList.remove("selected", "revealed");
  }
  state.selectedMatchingSentence = button;
  button.classList.add("revealed");
  [...els.matchingSentences.children].forEach((item) => item.classList.toggle("selected", item === button));
  setMatchingVisualAvailability(true);
}

function selectMatchingVisual(visualButton) {
  if (!state.selectedMatchingSentence || visualButton.disabled) return;
  visualButton.classList.add("revealed");
  matchActivityVisual(visualButton, state.selectedMatchingSentence);
}

function matchActivityVisual(visualButton, sentenceButton = state.selectedMatchingSentence) {
  if (!sentenceButton || sentenceButton.disabled || visualButton.disabled) return;
  startMatchingTimer();
  const isCorrect = sentenceButton.dataset.pairId === visualButton.dataset.pairId;
  if (!isCorrect) {
    sentenceButton.classList.add("wrong");
    visualButton.classList.add("wrong");
    playFeedbackSound(false);
    state.selectedMatchingSentence = null;
    setMatchingVisualAvailability(false);
    setTimeout(() => {
      sentenceButton.classList.remove("selected", "wrong", "revealed");
      visualButton.classList.remove("selected", "wrong", "revealed");
    }, 1000);
    return;
  }
  sentenceButton.disabled = true;
  visualButton.disabled = true;
  sentenceButton.classList.remove("selected");
  sentenceButton.classList.add("correct");
  visualButton.classList.add("correct");
  state.selectedMatchingSentence = null;
  setMatchingVisualAvailability(false);
  state.matchingScore += 1;
  state.matchingBatchMatched += 1;
  els.matchingScore.textContent = state.matchingScore;
  els.matchingProgress.textContent = `${state.matchingBatchMatched} / ${state.matchingBatches[state.matchingBatchIndex].length}`;
  playFeedbackSound(true);
  if (state.matchingBatchMatched === state.matchingBatches[state.matchingBatchIndex].length) setTimeout(showMatchingTimeResult, 700);
}

function setMatchingVisualAvailability(isAvailable) {
  [...els.matchingVisuals.children].forEach((button) => {
    if (button.classList.contains("correct")) return;
    button.disabled = !isAvailable;
    button.classList.toggle("ready", isAvailable);
  });
}

function startMatchingTimer() {
  if (state.matchingStartedAt) return;
  state.matchingStartedAt = Date.now();
}

function formatMatchingTime(milliseconds) {
  const totalSeconds = Math.max(0, Math.round(milliseconds / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function showMatchingTimeResult() {
  state.matchingElapsedMs = state.matchingStartedAt ? Date.now() - state.matchingStartedAt : 0;
  const isFinalBatch = state.matchingBatchIndex === state.matchingBatches.length - 1;
  hideAllScreens();
  els.matchingTimeText.textContent = `Your time is: ${formatMatchingTime(state.matchingElapsedMs)}`;
  els.matchingTimeMessage.textContent = `Set ${state.matchingBatchIndex + 1} of ${state.matchingBatches.length} complete.`;
  els.matchingTimeNext.textContent = isFinalBatch ? "SEE RESULT" : "NEXT 6 MATCHES";
  els.matchingTime.classList.remove("hidden");
}

function continueMatchingAfterTime() {
  if (state.matchingBatchIndex === state.matchingBatches.length - 1) {
    showActivityMatchResult();
    return;
  }
  state.matchingBatchIndex += 1;
  state.matchingBatchMatched = 0;
  hideAllScreens();
  els.matching.classList.remove("hidden");
  renderActivityVisualMatch();
}

function showActivityMatchResult() {
  hideAllScreens();
  const total = state.matchingBatches.reduce((sum, batch) => sum + batch.length, 0);
  els.exerciseResultScore.textContent = `${state.matchingScore} / ${total}`;
  els.exerciseResultMessage.textContent = `${state.matchingScore} activities matched correctly.`;
  els.exerciseResult.classList.remove("hidden");
}
