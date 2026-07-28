// APP-ANCHOR: Mistake-correction exercise flow.
function startMistakeCorrectIt(exercise) {
  state.exercise = exercise;
  state.mistakeQuestions = exercise.buildQuestions(state.module);
  if (!state.mistakeQuestions.length) return;
  state.mistakeIndex = 0;
  state.mistakeScore = 0;
  hideAllScreens();
  els.mistake.classList.remove("hidden");
  els.mistakeGrade.textContent = `GRADE ${state.grade}`;
  els.mistakeTitle.textContent = exercise.title || "MISTAKE? CORRECT IT";
  renderMistakeQuestion();
}

function renderMistakeQuestion() {
  const question = state.mistakeQuestions[state.mistakeIndex];
  const total = state.mistakeQuestions.length;
  state.mistakeLocked = false;
  els.mistakeProgress.textContent = `${state.mistakeIndex + 1} / ${total}`;
  els.mistakeScore.textContent = state.mistakeScore;
  els.mistakeInstruction.textContent = "IS THIS SENTENCE CORRECT?";
  els.mistakeSentence.textContent = question.sentence;
  els.mistakeSentence.classList.remove("mistake-wrong-sentence", "mistake-correct-sentence");
  els.mistakeDecisionButtons.classList.remove("hidden");
  els.mistakeCorrect.disabled = false;
  els.mistakeWrong.disabled = false;
  els.mistakeWordBank.classList.add("hidden");
  els.mistakeWordBank.replaceChildren();
  els.mistakeFeedback.textContent = "Choose CORRECT or WRONG.";
  els.mistakeFeedback.className = "exercise-feedback";
  els.mistakeNext.disabled = true;
  els.mistakeNext.textContent = state.mistakeIndex === total - 1 ? "SEE RESULT" : "NEXT";
}

function answerMistakeDecision(userSaysCorrect) {
  if (state.mistakeLocked) return;
  const question = state.mistakeQuestions[state.mistakeIndex];
  const isSentenceCorrect = Boolean(question.correct);
  if (userSaysCorrect === isSentenceCorrect) {
    if (isSentenceCorrect) {
      state.mistakeScore += 1;
      els.mistakeScore.textContent = state.mistakeScore;
      els.mistakeSentence.classList.add("mistake-correct-sentence");
      els.mistakeFeedback.textContent = "Correct!";
      els.mistakeFeedback.className = "exercise-feedback correct";
      playFeedbackSound(true);
      finishMistakeQuestion();
      return;
    }
    revealMistakeWords(question);
    els.mistakeFeedback.textContent = "Good. Now tap the mistake.";
    els.mistakeFeedback.className = "exercise-feedback";
    return;
  }
  els.mistakeFeedback.textContent = isSentenceCorrect ? "This sentence is correct." : "There is a mistake. Tap WRONG first.";
  els.mistakeFeedback.className = "exercise-feedback wrong";
  playFeedbackSound(false);
  if (!isSentenceCorrect && userSaysCorrect) return;
  finishMistakeQuestion();
}

function revealMistakeWords(question) {
  els.mistakeDecisionButtons.classList.add("hidden");
  els.mistakeWordBank.classList.remove("hidden");
  els.mistakeSentence.classList.add("mistake-wrong-sentence");
  els.mistakeWordBank.replaceChildren(...question.parts.map((part, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mistake-word";
    button.textContent = part;
    button.dataset.index = index;
    button.addEventListener("click", () => answerMistakeWord(button, question));
    return button;
  }));
}

function answerMistakeWord(button, question) {
  if (state.mistakeLocked) return;
  const index = Number(button.dataset.index);
  if (index === question.errorIndex) {
    state.mistakeScore += 1;
    els.mistakeScore.textContent = state.mistakeScore;
    button.classList.add("correct");
    els.mistakeFeedback.innerHTML = `<span>Correct!</span><strong class="mistake-fixed-sentence">${question.fixedSentence}</strong>`;
    els.mistakeFeedback.className = "exercise-feedback correct";
    playFeedbackSound(true);
    finishMistakeQuestion();
    return;
  }
  button.classList.add("wrong");
  els.mistakeFeedback.textContent = "That part is not the mistake. Try again.";
  els.mistakeFeedback.className = "exercise-feedback wrong";
  playFeedbackSound(false);
}

function finishMistakeQuestion() {
  state.mistakeLocked = true;
  els.mistakeCorrect.disabled = true;
  els.mistakeWrong.disabled = true;
  [...els.mistakeWordBank.children].forEach((button) => {
    button.disabled = true;
  });
  els.mistakeNext.disabled = false;
}

function nextMistakeQuestion() {
  if (state.mistakeIndex === state.mistakeQuestions.length - 1) {
    showMistakeResult();
    return;
  }
  state.mistakeIndex += 1;
  renderMistakeQuestion();
}

function showMistakeResult() {
  hideAllScreens();
  els.exerciseResultScore.textContent = `${state.mistakeScore} / ${state.mistakeQuestions.length}`;
  els.exerciseResultMessage.textContent = `${state.mistakeScore} correct answers out of ${state.mistakeQuestions.length}.`;
  const canContinue = Boolean(state.exercise?.repeatable && (!state.exercise.hasMoreQuestions || state.exercise.hasMoreQuestions()));
  els.exerciseContinue.classList.toggle("hidden", !canContinue);
  els.exerciseHome.textContent = state.exercise?.repeatable ? "MAIN MENU" : "BACK TO MENU";
  els.exerciseHome.className = "primary-button";
  els.exerciseResult.classList.remove("hidden");
}

