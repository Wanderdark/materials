// APP-ANCHOR: Sort-it exercise flow.
function startSortIt(exercise) {
  state.sortBoard = exercise.buildBoard(state.module);
  state.sortSorted = 0;
  state.sortMistakes = 0;
  state.selectedSortCard = null;
  state.draggedSortCard = null;
  hideAllScreens();
  els.sort.classList.remove("hidden");
  els.sort.dataset.exerciseId = exercise.id || "";
  els.sortGrade.textContent = `GRADE ${state.grade}`;
  els.sortBank.replaceChildren(...shuffle(state.sortBoard.cards).map(createSortCard));
  els.sortZones.replaceChildren(...state.sortBoard.categories.map(createSortZone));
  updateSortStatus();
}

function createSortCard(card) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "sort-card";
  button.textContent = card.label.toUpperCase();
  button.draggable = true;
  button.dataset.category = card.category;
  button.addEventListener("dragstart", () => {
    state.draggedSortCard = button;
    button.classList.add("dragging");
  });
  button.addEventListener("dragend", () => {
    state.draggedSortCard = null;
    button.classList.remove("dragging");
  });
  button.addEventListener("click", () => selectSortCard(button));
  return button;
}

function createSortZone(category) {
  const zone = document.createElement("div");
  zone.className = "sort-zone";
  zone.setAttribute("role", "button");
  zone.tabIndex = 0;
  zone.dataset.category = category;
  zone.innerHTML = `<strong>${category}</strong><span>DROP HERE</span>`;
  zone.addEventListener("dragover", (event) => event.preventDefault());
  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    sortCard(state.draggedSortCard, category);
  });
  zone.addEventListener("click", () => sortCard(state.selectedSortCard, category));
  return zone;
}

function selectSortCard(card) {
  if (card.disabled) return;
  state.selectedSortCard = card;
  [...els.sortBank.children].forEach((item) => item.classList.toggle("selected", item === card));
}

function sortCard(card, category) {
  if (!card || card.disabled) return;
  if (card.dataset.category !== category) {
    state.sortMistakes += 1;
    card.classList.add("wrong");
    setTimeout(() => card.classList.remove("wrong"), 360);
    playFeedbackSound(false);
    updateSortStatus();
    return;
  }
  const zone = [...els.sortZones.children].find((item) => item.dataset.category === category);
  zone.append(card);
  card.draggable = false;
  card.disabled = true;
  card.classList.remove("selected");
  card.classList.add("sorted");
  state.selectedSortCard = null;
  state.sortSorted += 1;
  const isLastCard = state.sortSorted === state.sortBoard.cards.length;
  const awardStudentPoint = isLastCard || state.sortSorted % 5 === 0;
  playFeedbackSound(true, { studentCorrect: awardStudentPoint });
  updateSortStatus();
  if (isLastCard) setTimeout(showSortResult, 700);
}

function updateSortStatus() {
  const total = state.sortBoard?.cards.length || 0;
  els.sortProgress.textContent = `${state.sortSorted} / ${total}`;
  els.sortMistakes.textContent = state.sortMistakes;
}

function showSortResult() {
  hideAllScreens();
  const total = state.sortBoard.cards.length;
  els.exerciseResultScore.textContent = `${state.sortSorted} / ${total}`;
  els.exerciseResultMessage.textContent = `${total} cards sorted. Mistakes: ${state.sortMistakes}.`;
  els.exerciseResult.classList.remove("hidden");
}
