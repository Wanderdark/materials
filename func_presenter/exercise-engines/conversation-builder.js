// APP-ANCHOR: Conversation-builder exercise flow.
function startConversationBuilder(exercise) {
  state.conversationRounds = exercise.buildRounds();
  state.conversationIndex = 0;
  state.conversationScore = 0;
  hideAllScreens();
  els.conversation.classList.remove("hidden");
  els.conversationGrade.textContent = `GRADE ${state.grade}`;
  renderConversationBuilder();
}

function renderConversationBuilder() {
  const round = state.conversationRounds[state.conversationIndex];
  els.conversationProgress.textContent = `${state.conversationIndex + 1} / ${state.conversationRounds.length}`;
  els.conversationScore.textContent = state.conversationScore;
  els.conversationBuilder.classList.remove("hidden");
  els.clubQuiz.classList.add("hidden");
  els.conversationNext.disabled = true;
  els.conversationNext.classList.add("hidden");
  els.conversationSequence.replaceChildren();
  els.conversationBank.replaceChildren(...shuffle(round.lines.map((line, index) => ({ line, index }))).map((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "conversation-line";
    button.textContent = item.line;
    button.dataset.lineIndex = item.index;
    button.addEventListener("click", () => selectConversationLine(button));
    return button;
  }));
}

function selectConversationLine(button) {
  if (button.disabled) return;
  const expectedIndex = els.conversationSequence.children.length;
  if (Number(button.dataset.lineIndex) !== expectedIndex) {
    button.classList.add("wrong");
    playFeedbackSound(false);
    setTimeout(renderConversationBuilder, 550);
    return;
  }
  button.disabled = true;
  button.classList.add("selected");
  button.classList.add("correct");
  const sequenceItem = document.createElement("div");
  sequenceItem.className = "conversation-sequence-item";
  const number = document.createElement("span");
  number.textContent = String(expectedIndex + 1);
  sequenceItem.append(number, button);
  els.conversationSequence.append(sequenceItem);
  playFeedbackSound(true);
  if (els.conversationSequence.children.length === 4) {
    els.conversationNext.disabled = false;
    els.conversationNext.classList.remove("hidden");
  }
}

function renderClubQuiz() {
  const round = state.conversationRounds[state.conversationIndex];
  const distractors = shuffle(state.conversationRounds.filter((item) => item.id !== round.id)).slice(0, 3);
  const options = shuffle([round, ...distractors]);
  els.conversationBuilder.classList.add("hidden");
  els.clubQuiz.classList.remove("hidden");
  els.clubQuizQuestion.textContent = "Which club is this conversation about?";
  els.clubQuizFeedback.textContent = "Choose the correct club image.";
  els.clubQuizFeedback.className = "exercise-feedback";
  els.clubQuizNext.disabled = true;
  els.clubQuizNext.textContent = state.conversationIndex === state.conversationRounds.length - 1 ? "SEE RESULT" : "NEXT CLUB";
  els.clubQuizOptions.replaceChildren(...options.map((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "club-quiz-option";
    button.dataset.clubId = option.id;
    const image = document.createElement("img");
    image.src = option.imagePath;
    image.alt = option.club;
    image.addEventListener("error", () => {
      image.remove();
      const placeholder = document.createElement("span");
      placeholder.className = "club-image-placeholder";
      placeholder.textContent = option.club;
      button.append(placeholder);
    }, { once: true });
    button.append(image);
    button.addEventListener("click", () => answerClubQuiz(button, round));
    return button;
  }));
}

function answerClubQuiz(button, round) {
  if (!button || button.disabled) return;
  const isCorrect = button.dataset.clubId === round.id;
  [...els.clubQuizOptions.children].forEach((option) => {
    option.disabled = true;
    if (option.dataset.clubId === round.id) option.classList.add("correct");
    else if (option === button) option.classList.add("wrong");
  });
  if (isCorrect) {
    state.conversationScore += 1;
    playFeedbackSound(true);
    els.clubQuizFeedback.textContent = "Correct!";
    els.clubQuizFeedback.className = "exercise-feedback correct";
  } else {
    playFeedbackSound(false);
    els.clubQuizFeedback.textContent = `The correct answer is ${round.club}.`;
    els.clubQuizFeedback.className = "exercise-feedback wrong";
  }
  els.conversationScore.textContent = state.conversationScore;
  els.clubQuizNext.disabled = false;
}

function nextConversationRound() {
  if (state.conversationIndex === state.conversationRounds.length - 1) {
    hideAllScreens();
    els.exerciseResultScore.textContent = `${state.conversationScore} / ${state.conversationRounds.length}`;
    els.exerciseResultMessage.textContent = `${state.conversationScore} clubs chosen correctly.`;
    els.exerciseResult.classList.remove("hidden");
    return;
  }
  state.conversationIndex += 1;
  renderConversationBuilder();
}

function jumbleTokens(tokens) {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    const shuffled = shuffle(tokens);
    if (shuffled.every((token, index) => token !== tokens[index])) return shuffled;
  }
  return [...tokens.slice(1), tokens[0]];
}

