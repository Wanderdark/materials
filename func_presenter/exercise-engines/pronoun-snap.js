// APP-ANCHOR: Pronoun-snap exercise flow.
function startPronounSnap(exercise) {
  clearTimeout(state.pronounSnapTimer);
  clearInterval(state.pronounSnapTotalTimer);
  state.pronounSnapExercise = exercise;
  state.pronounSnapRounds = exercise.totalDurationMs
    ? shuffle(exercise.rounds)
    : shuffle(exercise.rounds).slice(0, Math.min(exercise.roundCount || exercise.rounds.length, exercise.rounds.length));
  state.pronounSnapIndex = 0;
  state.pronounSnapScore = 0;
  state.pronounSnapStreak = 0;
  state.pronounSnapBestStreak = 0;
  state.pronounSnapStudentCorrect = 0;
  state.pronounSnapAnswered = 0;
  state.pronounSnapDeadline = exercise.totalDurationMs ? Date.now() + exercise.totalDurationMs : 0;
  hideAllScreens();
  els.pronounSnap.classList.remove("hidden");
  const unitLabel = exercise.units ? `UNITS ${exercise.units.join(" + ")}` : `UNIT ${state.module.unit}`;
  els.pronounSnapGrade.textContent = `GRADE ${state.grade} · ${unitLabel}`;
  els.pronounSnapGrade.nextElementSibling.textContent = exercise.title || "SNAP";
  const instruction = els.pronounSnapCard.querySelector(".reference-type");
  if (instruction) instruction.textContent = exercise.instruction || "CHOOSE THE ANSWER BEFORE THE PICTURE CHANGES.";
  els.pronounSnapChoices.classList.toggle("quantity-snap-choices", exercise.activity === "quantity-snap");
  const labels = exercise.labels || [
    { label: "HE", answer: "he" },
    { label: "SHE", answer: "she" },
    { label: "IT", answer: "it" },
    { label: "THEY", answer: "they" }
  ];
  els.pronounSnapChoices.replaceChildren(...labels.map((label) => {
    const answer = typeof label === "string" ? label : label.answer || label.value || label.label;
    const text = typeof label === "string" ? label : label.label || answer;
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.snapAnswer = answer;
    button.textContent = text;
    return button;
  }));
  setupPronounSnapTotalTimer();
  renderPronounSnapRound();
}

function renderPronounSnapRound() {
  clearTimeout(state.pronounSnapTimer);
  if (state.pronounSnapExercise.totalDurationMs && Date.now() >= state.pronounSnapDeadline) {
    showPronounSnapResult();
    return;
  }
  if (state.pronounSnapExercise.totalDurationMs && state.pronounSnapIndex >= state.pronounSnapRounds.length) {
    state.pronounSnapRounds = shuffle(state.pronounSnapExercise.rounds);
    state.pronounSnapIndex = 0;
  }
  const round = state.pronounSnapRounds[state.pronounSnapIndex];
  if (!round) {
    showPronounSnapResult();
    return;
  }
  state.pronounSnapLocked = false;
  els.pronounSnapProgress.textContent = state.pronounSnapExercise.totalDurationMs
    ? `${state.pronounSnapAnswered} ANSWERED`
    : `${state.pronounSnapIndex + 1} / ${state.pronounSnapRounds.length}`;
  els.pronounSnapTimer.textContent = `${Math.round((state.pronounSnapExercise.roundDurationMs || 2000) / 1000)} SECONDS`;
  els.pronounSnapScore.textContent = state.pronounSnapScore;
  els.pronounSnapStreak.textContent = state.pronounSnapStreak;
  els.pronounSnapCard.classList.remove("snap-correct", "snap-wrong");
  els.pronounSnapImage.classList.toggle("hidden", Boolean(round.repeatImagePath));
  clearPronounSnapRepeatVisual();
  if (round.repeatImagePath && round.repeatCount) {
    showPronounSnapRepeatVisual(round.repeatImagePath, round.repeatCount, round.visualBrief || round.answer);
  } else {
    els.pronounSnapImage.src = round.imagePath;
    els.pronounSnapImage.alt = round.visualBrief || "Snap visual";
  }
  [...els.pronounSnapChoices.children].forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "wrong");
  });
  state.pronounSnapTimer = setTimeout(() => advancePronounSnap(false), state.pronounSnapExercise.roundDurationMs);
}

function answerPronounSnap(answer, button) {
  if (state.pronounSnapLocked) return;
  state.pronounSnapLocked = true;
  clearTimeout(state.pronounSnapTimer);
  const round = state.pronounSnapRounds[state.pronounSnapIndex];
  const expected = round.answer || round.pronoun;
  const isCorrect = answer === expected;
  const isLastRound = !state.pronounSnapExercise.totalDurationMs
    && state.pronounSnapIndex === state.pronounSnapRounds.length - 1;
  if (isCorrect) state.pronounSnapStudentCorrect += 1;
  const awardStudentPoint = isCorrect && (isLastRound || state.pronounSnapStudentCorrect % 5 === 0);
  button.classList.add(isCorrect ? "correct" : "wrong");
  [...els.pronounSnapChoices.children].forEach((choiceButton) => {
    choiceButton.disabled = true;
    if (choiceButton.dataset.snapAnswer === expected || choiceButton.dataset.pronoun === expected) choiceButton.classList.add("correct");
  });
  els.pronounSnapCard.classList.add(isCorrect ? "snap-correct" : "snap-wrong");
  playFeedbackSound(isCorrect, { studentCorrect: awardStudentPoint });
  advancePronounSnap(isCorrect, 430);
}

function advancePronounSnap(isCorrect, delay = 0) {
  clearTimeout(state.pronounSnapTimer);
  if (isCorrect) {
    state.pronounSnapStreak += 1;
    state.pronounSnapBestStreak = Math.max(state.pronounSnapBestStreak, state.pronounSnapStreak);
    state.pronounSnapScore += state.pronounSnapStreak * 10;
  } else {
    state.pronounSnapStreak = 0;
  }
  state.pronounSnapAnswered += 1;
  state.pronounSnapIndex += 1;
  if (state.pronounSnapExercise.totalDurationMs && Date.now() >= state.pronounSnapDeadline) {
    showPronounSnapResult();
    return;
  }
  state.pronounSnapTimer = setTimeout(renderPronounSnapRound, delay);
}

function showPronounSnapResult() {
  clearTimeout(state.pronounSnapTimer);
  clearInterval(state.pronounSnapTotalTimer);
  clearPronounSnapRepeatVisual();
  hidePronounSnapTotalTimer();
  els.pronounSnap.classList.add("hidden");
  const resultKicker = els.pronounSnapResult.querySelector(".brand-kicker");
  if (resultKicker) resultKicker.textContent = `${state.pronounSnapExercise.title || "SNAP"} COMPLETE`;
  els.pronounSnapResultScore.textContent = state.pronounSnapScore;
  const completedText = state.pronounSnapExercise.totalDurationMs
    ? `${state.pronounSnapAnswered} visuals completed in ${Math.round(state.pronounSnapExercise.totalDurationMs / 1000)} seconds.`
    : `${state.pronounSnapRounds.length} visuals completed.`;
  els.pronounSnapResultMessage.textContent = `Best streak: ${state.pronounSnapBestStreak}. ${completedText}`;
  els.pronounSnapResult.classList.remove("hidden");
}

function setupPronounSnapTotalTimer() {
  const timer = getPronounSnapTotalTimer();
  if (!state.pronounSnapExercise.totalDurationMs) {
    timer.classList.add("hidden");
    return;
  }
  timer.classList.remove("hidden");
  updatePronounSnapTotalTimer();
  state.pronounSnapTotalTimer = setInterval(updatePronounSnapTotalTimer, 200);
}

function getPronounSnapTotalTimer() {
  let timer = document.getElementById("pronounSnapTotalTimer");
  if (timer) return timer;
  timer = document.createElement("div");
  timer.id = "pronounSnapTotalTimer";
  timer.className = "snap-total-timer hidden";
  timer.innerHTML = '<span class="snap-total-timer-emoji" aria-hidden="true">⌛</span><strong id="pronounSnapTotalSeconds">45</strong>';
  els.pronounSnapGrade.parentElement.after(timer);
  return timer;
}

function updatePronounSnapTotalTimer() {
  const timer = getPronounSnapTotalTimer();
  const secondsEl = document.getElementById("pronounSnapTotalSeconds");
  const totalMs = state.pronounSnapExercise.totalDurationMs || 0;
  const remainingMs = Math.max(0, state.pronounSnapDeadline - Date.now());
  const remainingSeconds = Math.ceil(remainingMs / 1000);
  const progress = totalMs ? remainingMs / totalMs : 0;
  timer.style.setProperty("--snap-total-angle", `${progress * 360}deg`);
  if (secondsEl) secondsEl.textContent = remainingSeconds;
  if (remainingMs <= 0 && !els.pronounSnap.classList.contains("hidden")) showPronounSnapResult();
}

function hidePronounSnapTotalTimer() {
  document.getElementById("pronounSnapTotalTimer")?.classList.add("hidden");
}

function clearPronounSnapRepeatVisual() {
  document.getElementById("pronounSnapRepeatVisual")?.remove();
}

function showPronounSnapRepeatVisual(imagePath, count, altText = "") {
  clearPronounSnapRepeatVisual();
  const wrap = document.createElement("div");
  wrap.id = "pronounSnapRepeatVisual";
  wrap.className = "pronoun-snap-repeat-visual";
  wrap.setAttribute("aria-label", altText);
  Array.from({ length: count }).forEach((_, index) => {
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = index === 0 ? altText : "";
    wrap.append(img);
  });
  els.pronounSnapCard.insertBefore(wrap, els.pronounSnapChoices);
}
