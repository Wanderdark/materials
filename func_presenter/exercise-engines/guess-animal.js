// APP-ANCHOR: Guess-animal exercise flow and keyboard.
async function startGuessAnimal(exercise) {
  state.exercise = exercise;
  state.guessAnimalIndex = 0;
  state.guessAnimalScore = 0;
  state.guessAnimalHintIndex = 0;
  state.guessAnimalInput = "";
  state.guessAnimalLocked = false;
  hideAllScreens();
  els.guessAnimal.classList.remove("hidden");
  els.guessAnimalGrade.textContent = `GRADE ${state.grade}`;
  els.guessAnimalTitle.textContent = exercise.title || "GUESS THE ANIMAL";
  els.guessAnimalScore.textContent = "0";
  els.guessAnimalFeedback.textContent = "Loading animals...";
  try {
    state.guessAnimalQuestions = await exercise.buildQuestions(state.module);
  } catch (error) {
    console.error(error);
    els.guessAnimalFeedback.textContent = "Animal data could not be loaded.";
    els.guessAnimalFeedback.className = "exercise-feedback wrong";
    return;
  }
  if (!state.guessAnimalQuestions.length) {
    els.guessAnimalFeedback.textContent = "No animals found.";
    els.guessAnimalFeedback.className = "exercise-feedback wrong";
    return;
  }
  renderGuessAnimalRound();
}

function renderGuessAnimalRound() {
  const question = state.guessAnimalQuestions[state.guessAnimalIndex];
  state.guessAnimalHintIndex = 0;
  state.guessAnimalInput = "";
  state.guessAnimalLocked = false;
  els.guessAnimalCard.classList.remove("wrong-drop");
  els.guessAnimalProgress.textContent = `${state.guessAnimalIndex + 1} / ${state.guessAnimalQuestions.length}`;
  els.guessAnimalScore.textContent = state.guessAnimalScore;
  els.guessAnimalSlots.replaceChildren(...question.name.split("").map(() => {
    const slot = document.createElement("span");
    slot.textContent = "";
    return slot;
  }));
  els.guessAnimalKeyboardPanel.classList.add("hidden");
  els.guessAnimalGuess.classList.remove("hidden");
  els.guessAnimalGuess.textContent = "GUESS";
  els.guessAnimalHint.classList.toggle("hidden", question.hints.length <= 1);
  els.guessAnimalReveal.classList.add("hidden");
  els.guessAnimalNext.classList.add("hidden");
  els.guessAnimalFeedback.textContent = "Read the hint. Guess or ask for the next hint.";
  els.guessAnimalFeedback.className = "exercise-feedback";
  renderGuessAnimalHints();
  renderGuessAnimalInput();
}

function renderGuessAnimalHints() {
  const question = state.guessAnimalQuestions[state.guessAnimalIndex];
  const visibleHints = question.hints.slice(0, state.guessAnimalHintIndex + 1);
  els.guessAnimalHints.replaceChildren(...visibleHints.map((hint, index) => {
    const p = document.createElement("p");
    const label = document.createElement("span");
    label.textContent = index === 0 ? "FREE HINT" : `-${index * getGuessAnimalHintCost()} PTS`;
    p.append(label, document.createTextNode(hint));
    return p;
  }));
}

function showGuessAnimalFloatingText(text, type = "gain") {
  clearTimeout(els.guessAnimalFloatingText._hideTimer);
  els.guessAnimalFloatingText.textContent = text;
  els.guessAnimalFloatingText.className = `guess-animal-floating-text ${type}`;
  void els.guessAnimalFloatingText.offsetWidth;
  els.guessAnimalFloatingText.classList.add("show");
  els.guessAnimalFloatingText._hideTimer = window.setTimeout(() => els.guessAnimalFloatingText.classList.add("hidden"), 950);
}

function playGuessAnimalKeyTone() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    guessAnimalKeyAudioContext = guessAnimalKeyAudioContext || new AudioContext();
    const start = guessAnimalKeyAudioContext.currentTime;
    const oscillator = guessAnimalKeyAudioContext.createOscillator();
    const gain = guessAnimalKeyAudioContext.createGain();
    const frequency = 1320 + Math.random() * 760;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, start);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.18, start + .055);
    gain.gain.setValueAtTime(.045, start);
    gain.gain.exponentialRampToValueAtTime(.001, start + .075);
    oscillator.connect(gain);
    gain.connect(guessAnimalKeyAudioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + .08);
  } catch {
    // The keyboard should stay responsive even when browser audio is blocked.
  }
}

function pressGuessAnimalKey(button, handler) {
  if (state.guessAnimalLocked) return;
  button.classList.remove("key-pressed");
  void button.offsetWidth;
  button.classList.add("key-pressed");
  playGuessAnimalKeyTone();
  handler();
}

function showGuessAnimalKeyboard() {
  if (state.guessAnimalLocked) return;
  if (!els.guessAnimalKeyboardPanel.classList.contains("hidden")) {
    submitGuessAnimal();
    return;
  }
  els.guessAnimalKeyboardPanel.classList.remove("hidden");
  els.guessAnimalGuess.textContent = "CHECK";
  if (els.guessAnimalKeyboard.children.length) return;
  const letters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
  const buttons = letters.map((letter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = letter;
    button.addEventListener("click", () => pressGuessAnimalKey(button, () => addGuessAnimalLetter(letter)));
    return button;
  });
  const del = document.createElement("button");
  del.type = "button";
  del.className = "wide";
  del.textContent = "DEL";
  del.addEventListener("click", () => pressGuessAnimalKey(del, deleteGuessAnimalLetter));
  const clear = document.createElement("button");
  clear.type = "button";
  clear.className = "wide";
  clear.textContent = "CLEAR";
  clear.addEventListener("click", () => pressGuessAnimalKey(clear, clearGuessAnimalInput));
  els.guessAnimalKeyboard.replaceChildren(...buttons, del, clear);
}

function renderGuessAnimalInput() {
  const question = state.guessAnimalQuestions[state.guessAnimalIndex];
  const chars = state.guessAnimalInput.padEnd(question.name.length, " ").split("");
  [...els.guessAnimalSlots.children].forEach((slot, index) => {
    slot.textContent = chars[index]?.trim() || "";
  });
}

function addGuessAnimalLetter(letter) {
  const question = state.guessAnimalQuestions[state.guessAnimalIndex];
  if (state.guessAnimalLocked || state.guessAnimalInput.length >= question.name.length) return;
  state.guessAnimalInput += letter;
  renderGuessAnimalInput();
  if (state.guessAnimalInput.length === question.name.length) submitGuessAnimal();
}

function deleteGuessAnimalLetter() {
  if (state.guessAnimalLocked || !state.guessAnimalInput.length) return;
  state.guessAnimalInput = state.guessAnimalInput.slice(0, -1);
  renderGuessAnimalInput();
}

function clearGuessAnimalInput() {
  if (state.guessAnimalLocked) return;
  state.guessAnimalInput = "";
  renderGuessAnimalInput();
}

function nextGuessAnimalHint() {
  const question = state.guessAnimalQuestions[state.guessAnimalIndex];
  if (state.guessAnimalLocked || state.guessAnimalHintIndex >= question.hints.length - 1) return;
  state.guessAnimalHintIndex += 1;
  renderGuessAnimalHints();
  showGuessAnimalFloatingText(`-${getGuessAnimalHintCost()} PTS`, "loss");
  els.guessAnimalHint.classList.toggle("hidden", state.guessAnimalHintIndex >= question.hints.length - 1);
  els.guessAnimalFeedback.textContent = `${getGuessAnimalRoundPoints()} points left for this animal.`;
  els.guessAnimalFeedback.className = "exercise-feedback";
}

function getGuessAnimalRoundPoints() {
  const hintCost = getGuessAnimalHintCost();
  return Math.max(hintCost, 5 * hintCost - (state.guessAnimalHintIndex * hintCost));
}

function getGuessAnimalHintCost() {
  return sessionStorage.getItem("fpStudentMode") === "1" ? 1 : 10;
}

function submitGuessAnimal() {
  const question = state.guessAnimalQuestions[state.guessAnimalIndex];
  const isComplete = state.guessAnimalInput.length === question.name.length;
  const isCorrect = isComplete && state.guessAnimalInput.toUpperCase() === question.name.toUpperCase();
  state.guessAnimalLocked = true;
  els.guessAnimalGuess.classList.add("hidden");
  els.guessAnimalGuess.textContent = "GUESS";
  els.guessAnimalHint.classList.add("hidden");
  els.guessAnimalKeyboardPanel.classList.add("hidden");
  if (isCorrect) {
    const points = getGuessAnimalRoundPoints();
    state.guessAnimalScore += points;
    els.guessAnimalScore.textContent = state.guessAnimalScore;
    showGuessAnimalFloatingText(`+${points} PTS`, "gain");
    playWavFeedback(true, { studentCorrectCount: 5 - state.guessAnimalHintIndex });
    window.exerciseActivityModules?.showStamp?.(true);
    revealGuessAnimalName("correct");
    els.guessAnimalFeedback.textContent = `Correct! +${points} points.`;
    els.guessAnimalFeedback.className = "exercise-feedback correct";
    els.guessAnimalNext.classList.remove("hidden");
    return;
  }
  playWavFeedback(false);
  window.exerciseActivityModules?.showStamp?.(false);
  els.guessAnimalCard.classList.remove("wrong-drop");
  void els.guessAnimalCard.offsetWidth;
  els.guessAnimalCard.classList.add("wrong-drop");
  els.guessAnimalFeedback.textContent = "Wrong answer. Reveal the animal.";
  els.guessAnimalFeedback.className = "exercise-feedback wrong";
  els.guessAnimalReveal.classList.remove("hidden");
}

function revealGuessAnimalName(status = "revealed") {
  const question = state.guessAnimalQuestions[state.guessAnimalIndex];
  els.guessAnimalSlots.replaceChildren(...question.name.split("").map((letter) => {
    const slot = document.createElement("span");
    slot.className = status === "correct" ? "correct" : "wrong";
    slot.textContent = letter;
    return slot;
  }));
}

function revealGuessAnimalAnswer() {
  revealGuessAnimalName("wrong");
  els.guessAnimalReveal.classList.add("hidden");
  els.guessAnimalNext.classList.remove("hidden");
  els.guessAnimalFeedback.textContent = "Remember it for next time.";
  els.guessAnimalFeedback.className = "exercise-feedback wrong";
}

function nextGuessAnimalRound() {
  if (state.guessAnimalIndex >= state.guessAnimalQuestions.length - 1) {
    hideAllScreens();
    els.exerciseResultScore.textContent = `${state.guessAnimalScore} POINTS`;
    els.exerciseResultMessage.textContent = `Final score: ${state.guessAnimalScore} points.`;
    els.exerciseContinue.classList.add("hidden");
    els.exerciseHome.textContent = "BACK TO MENU";
    els.exerciseHome.className = "primary-button";
    els.exerciseResult.classList.remove("hidden");
    return;
  }
  state.guessAnimalIndex += 1;
  renderGuessAnimalRound();
}
