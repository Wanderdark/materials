// APP-ANCHOR: Jumbled-sentences exercise flow.
function startJumbledSentences(exercise) {
  state.jumbledQuestions = exercise.buildQuestions(state.module);
  if (!state.jumbledQuestions.length) return;
  state.jumbledIndex = 0;
  state.jumbledScore = 0;
  state.jumbledLivesMax = exercise.lives;
  clearTimeout(state.jumbledTimer);
  hideAllScreens();
  els.jumbled.classList.remove("hidden");
  els.jumbledGrade.textContent = `GRADE ${state.grade}`;
  renderJumbledSentence();
}

function renderJumbledSentence() {
  clearTimeout(state.jumbledTimer);
  const question = state.jumbledQuestions[state.jumbledIndex];
  state.jumbledSolved = false;
  state.jumbledLives = state.jumbledLivesMax;
  state.draggedJumbledTile = null;
  els.jumbledProgress.textContent = `${state.jumbledIndex + 1} / ${state.jumbledQuestions.length}`;
  els.jumbledScore.textContent = state.jumbledScore;
  updateJumbledLives();
  els.jumbledType.textContent = question.type;
  els.jumbledFeedback.textContent = "Build the sentence.";
  els.jumbledFeedback.className = "exercise-feedback";
  els.jumbledCard.classList.toggle("with-visual", Boolean(question.imagePath));
  if (question.imagePath) {
    els.jumbledImage.src = question.imagePath;
    els.jumbledImagePanel.classList.remove("hidden");
  } else {
    els.jumbledImage.removeAttribute("src");
    els.jumbledImagePanel.classList.add("hidden");
  }
  els.jumbledTiles.replaceChildren(...jumbleTokens(question.tokens).map((token, index) => createJumbledTile(token, index)));
}

function createJumbledTile(token, index) {
  const tile = document.createElement("button");
  tile.type = "button";
  tile.className = "jumbled-word";
  tile.textContent = token;
  tile.draggable = true;
  tile.dataset.tileId = `${Date.now()}-${index}`;
  tile.addEventListener("dragstart", () => {
    if (state.jumbledSolved || tile.classList.contains("correct-position")) return;
    state.draggedJumbledTile = tile;
    tile.classList.add("dragging");
  });
  tile.addEventListener("dragend", () => {
    state.draggedJumbledTile = null;
    tile.classList.remove("dragging");
  });
  tile.addEventListener("dragover", (event) => event.preventDefault());
  tile.addEventListener("drop", (event) => reorderJumbledTile(event, tile));
  return tile;
}

function reorderJumbledTile(event, target) {
  event.preventDefault();
  const dragged = state.draggedJumbledTile;
  if (!dragged || dragged === target || state.jumbledSolved) return;
  const bounds = target.getBoundingClientRect();
  const reference = event.clientX > bounds.left + bounds.width / 2 ? target.nextSibling : target;
  placeJumbledTile(dragged, reference);
}

function reorderJumbledGap(event) {
  event.preventDefault();
  if (event.target.closest(".jumbled-word")) return;
  const dragged = state.draggedJumbledTile;
  if (!dragged || state.jumbledSolved) return;
  const tiles = [...els.jumbledTiles.children].filter((tile) => tile !== dragged);
  const reference = tiles.find((tile) => {
    const bounds = tile.getBoundingClientRect();
    return event.clientX < bounds.left + bounds.width / 2;
  }) || null;
  placeJumbledTile(dragged, reference);
}

function placeJumbledTile(dragged, reference) {
  const tiles = [...els.jumbledTiles.children];
  const reordered = window.exerciseActivityModules.reorderLockedSlots({
    items: tiles,
    dragged,
    reference,
    isLocked: (tile) => tile.classList.contains("correct-position")
  });
  if (!reordered.changed) return;

  els.jumbledTiles.replaceChildren(...reordered.items);
  dragged.classList.remove("dragging");
  const placement = updateJumbledTilePositions(dragged);
  if (placement.allCorrect) {
    checkJumbledSentence();
  } else if (placement.draggedCorrect) {
    window.exerciseActivityModules.playTone("correct-position");
  } else if (!placement.draggedCorrect) {
    registerJumbledMistake();
  }
}

function updateJumbledTilePositions(draggedTile) {
  const expectedTokens = state.jumbledQuestions[state.jumbledIndex].tokens;
  const tiles = [...els.jumbledTiles.children];
  let draggedCorrect = false;
  let allCorrect = true;
  tiles.forEach((tile, index) => {
    const isCorrectPosition = tile.textContent === expectedTokens[index];
    if (!isCorrectPosition) allCorrect = false;
    if (tile === draggedTile && isCorrectPosition) draggedCorrect = true;
    tile.classList.toggle("correct-position", isCorrectPosition);
    tile.draggable = !isCorrectPosition;
  });
  return { allCorrect, draggedCorrect };
}

function updateJumbledLives() {
  els.jumbledLives.replaceChildren(...Array.from({ length: state.jumbledLivesMax }, (_, index) => {
    const heart = document.createElement("span");
    heart.className = index < state.jumbledLives ? "life-heart" : "life-heart lost";
    heart.innerHTML = "&#9829;";
    return heart;
  }));
}

function registerJumbledMistake() {
  state.jumbledLives -= 1;
  updateJumbledLives();
  els.jumbledCard.classList.add("wrong-drop");
  setTimeout(() => els.jumbledCard.classList.remove("wrong-drop"), 380);
  if (state.jumbledLives > 0) {
    window.exerciseActivityModules.playTone("wrong-position");
    els.jumbledFeedback.textContent = `${state.jumbledLives} ${state.jumbledLives === 1 ? "life" : "lives"} left.`;
    els.jumbledFeedback.className = "exercise-feedback wrong";
    return;
  }
  els.jumbledFeedback.textContent = "No lives left. Try the sentence again!";
  els.jumbledFeedback.className = "exercise-feedback wrong";
  state.jumbledSolved = true;
  playFeedbackSound(false);
  [...els.jumbledTiles.children].forEach((tile) => {
    tile.draggable = false;
  });
  state.jumbledTimer = setTimeout(renderJumbledSentence, 850);
}

function checkJumbledSentence() {
  const expected = state.jumbledQuestions[state.jumbledIndex].tokens.join(" ");
  const current = [...els.jumbledTiles.children].map((tile) => tile.textContent).join(" ");
  if (current !== expected || state.jumbledSolved) return;
  state.jumbledSolved = true;
  state.jumbledScore += 1;
  [...els.jumbledTiles.children].forEach((tile) => {
    tile.draggable = false;
    tile.disabled = true;
    tile.classList.add("correct");
  });
  els.jumbledScore.textContent = state.jumbledScore;
  els.jumbledFeedback.textContent = "Correct!";
  els.jumbledFeedback.className = "exercise-feedback correct";
  playFeedbackSound(true);
  state.jumbledTimer = setTimeout(nextJumbledSentence, 1000);
}

function nextJumbledSentence() {
  state.jumbledIndex += 1;
  if (state.jumbledIndex >= state.jumbledQuestions.length) {
    hideAllScreens();
    els.exerciseResultScore.textContent = `${state.jumbledScore} / ${state.jumbledQuestions.length}`;
    els.exerciseResultMessage.textContent = `${state.jumbledScore} sentences built correctly.`;
    const canContinue = Boolean(state.exercise?.repeatable && (!state.exercise.hasMoreQuestions || state.exercise.hasMoreQuestions()));
    els.exerciseContinue.classList.toggle("hidden", !canContinue);
    els.exerciseHome.textContent = state.exercise?.repeatable ? "EXIT" : "BACK TO MENU";
    els.exerciseHome.className = state.exercise?.repeatable ? "secondary-button" : "primary-button";
    els.exerciseResult.classList.remove("hidden");
    return;
  }
  renderJumbledSentence();
}
