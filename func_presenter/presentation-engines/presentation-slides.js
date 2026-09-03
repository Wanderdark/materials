// APP-ANCHOR: Presentation intro and slide rendering.
function startPresentation() {
  if (!state.module) return;
  state.index = 0;
  state.visitedPresenceButtons.clear();
  state.showingFunctionIntro = Boolean(state.module.pronounTable);
  hideAllScreens();
  els.presentation.classList.remove("hidden");
  if (state.showingFunctionIntro) renderFunctionIntro();
  else renderExample();
}

function renderFunctionIntro() {
  const intro = state.module.pronounTable;
  els.exampleCard.classList.add("hidden");
  els.functionIntro.classList.remove("hidden");
  els.gradeLabel.textContent = `GRADE ${state.grade}`;
  renderPresentationTitle();
  els.progressText.textContent = "INTRO";
  els.progressBar.style.width = "0%";
  els.functionIntroTitle.textContent = intro.title || "Choose the correct form of to be.";
  els.pronounTable.replaceChildren(...intro.groups.map((group) => {
    const card = document.createElement("div");
    card.className = `pronoun-group ${group.highlightClass || ""}`;
    const pronouns = document.createElement("div");
    pronouns.className = "pronoun-list";
    group.pronouns.forEach((pronoun) => {
      const item = document.createElement("span");
      item.textContent = pronoun;
      pronouns.append(item);
    });
    const arrow = document.createElement("span");
    arrow.className = "pronoun-arrow";
    arrow.textContent = "→";
    const verb = document.createElement("strong");
    verb.textContent = group.verb;
    card.append(pronouns, arrow, verb);
    return card;
  }));
  els.previous.disabled = true;
  els.next.textContent = "START EXAMPLES";
  syncHeaderNextButton();
  els.dots.replaceChildren();
}

function renderPresentationTitle() {
  els.title.classList.toggle("compact-presentation-title", Boolean(state.module.compactPresentationTitle));
  els.title.replaceChildren(state.module.title.toUpperCase());
  if (state.module.titleSecondLine) {
    els.title.append(document.createElement("br"), state.module.titleSecondLine.toUpperCase());
  }
}

function renderExample() {
  state.showingFunctionIntro = false;
  clearVideoDialoguePractice?.();
  clearPreferenceVideoHubPractice?.();
  clearSimplePresentVideoHubPractice?.();
  clearDailyRoutineVideoHubPractice?.();
  clearPresenceHotspots();
  clearVisualAnnotations();
  clearPersonalityHubVisual();
  clearPersonalityWordReveal();
  clearSuggestionDialogue();
  clearSequentialBoxes();
  clearFrequencyExpressionReveal();
  clearSplitImageWordMatch();
  clearQuestionAnswerMatch();
  clearSimpleProcessIndex();
  clearRecipeIngredientQuiz();
  clearRecipeQuestionInfo();
  clearLikesDislikesIntro();
  clearPreferenceComparison();
  clearLikesDislikesPopup();
  clearFriendSorter();
  clearInvitationLetter();
  clearMessageComprehension();
  clearStaticDialogueVideo();
  clearScrambledDialogue();
  clearTestQuestion();
  clearPreferenceTableTest();
  els.functionIntro.classList.add("hidden");
  els.exampleCard.classList.remove("hidden");
  const example = state.module.sentences[state.index];
  const visibleSentences = state.module.sentences.filter((s) => !s.bridgeSlide);
  const total = visibleSentences.length;
  const visiblePos = state.module.sentences.slice(0, state.index + 1).filter((s) => !s.bridgeSlide).length;
  const isTimePrompt = Boolean(example.timePrompt);
  const isTimetableSlide = Boolean(example.timetableSlide);
  const isPresenceSlide = Boolean(example.presenceSlide);
  const isVideoDialogue = Boolean(example.videoDialogue);
  const isPreferenceVideoHub = Boolean(example.preferenceVideoHub);
  const isSimplePresentVideoHub = Boolean(example.simplePresentVideoHub);
  const isPersonalityWordReveal = Boolean(example.personalityWordReveal);
  const isSuggestionDialogue = Boolean(example.suggestionDialogue);
  const isSequentialBoxes = Boolean(example.sequentialBoxes);
  const isFrequencyExpressionReveal = Boolean(example.frequencyExpressionReveal);
  const isSplitImageWordMatch = Boolean(example.splitImageWordMatch);
  const isQuestionAnswerMatch = Boolean(example.questionAnswerMatch);
  const isSimpleProcessIndex = Boolean(example.simpleProcessIndex);
  const isRecipeIngredientQuiz = Boolean(example.recipeIngredientQuiz);
  const isRecipeQuestionInfo = Boolean(example.recipeQuestionInfo);
  const isLikesDislikesIntro = Boolean(example.likesDislikesIntro);
  const isPreferenceComparison = Boolean(example.preferenceComparison);
  const isPreferenceQuestion = example.preferenceComparison?.layout === "question";
  const isLikesDislikesPopup = Boolean(example.likesDislikesPopup);
  const isFriendSorter = Boolean(example.friendSorter);
  const isInvitationLetter = Boolean(example.invitationLetter);
  const isMessageComprehension = Boolean(example.messageComprehension);
  const isTestQuestion = Boolean(example.testQuestion || example.classificationQuiz);
  const isPreferenceTableTest = Boolean(example.preferenceTableTest);
  const noVisual = Boolean(example.noVisual);
  const focus = example.focus || example.article || "";
  const highlight = example.highlight || example.article;
  const highlightedSentence = isTimePrompt || isTimetableSlide || isPresenceSlide || isFrequencyExpressionReveal || isSplitImageWordMatch || isQuestionAnswerMatch || isRecipeIngredientQuiz || isRecipeQuestionInfo || isVideoDialogue || isPreferenceVideoHub || isSimplePresentVideoHub || isLikesDislikesIntro || isPreferenceComparison || isLikesDislikesPopup || isPreferenceTableTest
    ? ""
    : example.highlightSuffix
    ? example.sentence.replace(
      new RegExp(`\\b(${example.highlightStem})(${example.highlightSuffix})\\b`, "i"),
      `$1<mark class="plural-ending ${example.suffixClass}">$2</mark>`
    )
    : example.sentence.replace(new RegExp(`\\b(${highlight})\\b`, "i"), `<mark class="${example.highlightClass || ""}">$1</mark>`);
  const usesMintBadge = example.article === "the" || example.focus === "PLURAL";

  els.gradeLabel.textContent = `GRADE ${state.grade}`;
  renderPresentationTitle();
  els.progressText.textContent = `${visiblePos} / ${total}`;
  els.progressBar.style.width = `${(visiblePos / total) * 100}%`;
  els.exampleCard.classList.toggle("time-prompt-slide", isTimePrompt);
  els.exampleCard.classList.toggle("timetable-slide", isTimetableSlide);
  els.exampleCard.classList.toggle("presence-slide", isPresenceSlide);
  els.exampleCard.classList.toggle("no-visual-slide", noVisual);
  els.exampleCard.classList.toggle("speech-bubble-slide", example.visualStyle === "speech-bubble");
  els.exampleCard.classList.toggle("description-choice-slide", example.listClass === "description-choice-list");
  els.exampleCard.classList.toggle("inline-choice-slide", (example.listClass || "").split(/\s+/).includes("inline-choice-list"));
  els.exampleCard.classList.toggle("personality-hub-slide", Boolean(example.personalityHub));
  els.exampleCard.classList.toggle("personality-word-reveal-slide", isPersonalityWordReveal);
  els.exampleCard.classList.toggle("suggestion-dialogue-slide", isSuggestionDialogue);
  els.exampleCard.classList.toggle("sequential-boxes-slide", isSequentialBoxes);
  els.exampleCard.classList.toggle("frequency-expression-reveal-slide", isFrequencyExpressionReveal);
  els.exampleCard.classList.toggle("split-image-word-match-slide", isSplitImageWordMatch);
  els.exampleCard.classList.toggle("question-answer-match-slide", isQuestionAnswerMatch);
  els.exampleCard.classList.toggle("simple-process-index-slide", isSimpleProcessIndex);
  els.exampleCard.classList.toggle("recipe-ingredient-quiz-slide", isRecipeIngredientQuiz);
  els.exampleCard.classList.toggle("recipe-question-info-slide", isRecipeQuestionInfo);
  els.exampleCard.classList.toggle("likes-dislikes-intro-slide", isLikesDislikesIntro);
  els.exampleCard.classList.toggle("preference-comparison-slide", isPreferenceComparison);
  els.exampleCard.classList.toggle("preference-question-slide", isPreferenceQuestion);
  els.exampleCard.classList.toggle("likes-dislikes-popup-slide", isLikesDislikesPopup);
  els.exampleCard.classList.toggle("friend-sorter-slide", isFriendSorter);
  els.exampleCard.classList.toggle("invitation-letter-slide", isInvitationLetter);
  els.exampleCard.classList.toggle("message-comprehension-slide", isMessageComprehension);
  els.exampleCard.classList.toggle("test-question-slide", isTestQuestion);
  els.exampleCard.classList.toggle("preference-table-test-slide", isPreferenceTableTest);
  els.exampleCard.classList.toggle("video-dialogue-slide", isVideoDialogue);
  els.exampleCard.classList.toggle("preference-video-hub-slide", isPreferenceVideoHub);
  els.exampleCard.classList.toggle("simple-present-video-hub-slide", isSimplePresentVideoHub);
  els.exampleVisualPanel.classList.toggle("hidden", isTimePrompt || noVisual || isSplitImageWordMatch || isQuestionAnswerMatch || isRecipeQuestionInfo || isLikesDislikesIntro);
  els.timeDigitalDisplay.textContent = example.digitalTime || "";
  els.timeDigitalDisplay.classList.toggle("hidden", !example.digitalTime || isTimePrompt);
  els.timePromptView.classList.toggle("hidden", !isTimePrompt);
  els.timetableAnswerView.classList.toggle("hidden", !isTimetableSlide || !example.answerParts);
  els.presenceView.classList.toggle("hidden", !isPresenceSlide && !isFrequencyExpressionReveal && !isSplitImageWordMatch && !isQuestionAnswerMatch && !isRecipeIngredientQuiz && !isRecipeQuestionInfo && !isVideoDialogue && !isLikesDislikesIntro && !isPreferenceComparison && !isLikesDislikesPopup && !isPreferenceTableTest);
  if (isTimePrompt) {
    els.timePromptDigital.textContent = example.digitalTime;
    els.timePromptAnswer.textContent = example.answerSentence;
    els.timePromptAnswer.classList.add("hidden");
    els.timeReveal.disabled = false;
  }
  [els.article, els.referenceType, els.timeQuestion, els.sentence, els.presentationExampleSentence, els.description, els.ruleNote]
    .forEach((element) => element.classList.toggle("hidden", isTimePrompt || isPresenceSlide || isFrequencyExpressionReveal || isSplitImageWordMatch || isQuestionAnswerMatch || isRecipeIngredientQuiz || isRecipeQuestionInfo || isVideoDialogue || isPreferenceVideoHub || isSimplePresentVideoHub || isLikesDislikesIntro || isPreferenceComparison || isLikesDislikesPopup || isPreferenceTableTest));
  els.article.textContent = focus ? focus.toUpperCase() : "";
  els.article.className = `article-badge ${usesMintBadge ? "specific" : ""} ${focus.length > 2 ? "long" : ""} ${example.badgeClass || ""}`;
  els.article.classList.toggle("hidden", isTimePrompt || isTimetableSlide || isPresenceSlide || isFrequencyExpressionReveal || isSplitImageWordMatch || isQuestionAnswerMatch || isRecipeIngredientQuiz || isRecipeQuestionInfo || isVideoDialogue || isPreferenceVideoHub || isSimplePresentVideoHub || isLikesDislikesIntro || isPreferenceComparison || isLikesDislikesPopup || isPreferenceTableTest);
  els.referenceType.textContent = isTimetableSlide ? "TIMETABLE" : example.referenceType || (example.article === "the" ? "SPECIFIC NOUN" : "NON-SPECIFIC NOUN");
  els.timeQuestion.textContent = example.question || "";
  els.timeQuestion.classList.toggle("hidden", isTimePrompt || !example.question);
  els.sentence.innerHTML = isFrequencyExpressionReveal || isSplitImageWordMatch || isRecipeIngredientQuiz || isRecipeQuestionInfo || isVideoDialogue || isPreferenceVideoHub || isSimplePresentVideoHub || isLikesDislikesPopup || isPreferenceTableTest ? "" : isTimetableSlide
    ? renderTimetableParts(example.questionParts || example.sentenceParts)
    : highlightedSentence;
  els.sentence.classList.toggle("long-phrase", !isVideoDialogue && (isTimetableSlide || (example.sentence?.length || 0) > 10));
  els.sentence.classList.toggle("timetable-sentence", isTimetableSlide);
  const showExampleSentence = !isTimePrompt && state.module.id === "a-an-the" && example.exerciseSentence;
  els.presentationExampleSentence.textContent = showExampleSentence
    ? example.exerciseSentence.replace("___", example.article)
    : "";
  els.presentationExampleSentence.classList.toggle("hidden", !showExampleSentence);
  els.description.textContent = state.module.id === "a-an-the"
    ? `Referring to a ${example.article === "the" ? "specific" : "non-specific"} noun.`
    : state.module.description;
  els.description.classList.toggle("hidden", isTimePrompt || isTimetableSlide || isPresenceSlide || isSplitImageWordMatch || isRecipeIngredientQuiz || isRecipeQuestionInfo || isVideoDialogue || isPreferenceVideoHub || isSimplePresentVideoHub || isLikesDislikesIntro || isPreferenceComparison || isLikesDislikesPopup || !els.description.textContent);
  els.ruleNote.textContent = example.ruleNote || "";
  els.ruleNote.classList.toggle("hidden", isTimePrompt || isTimetableSlide || isVideoDialogue || !example.ruleNote);
  if (isTimetableSlide && example.answerParts) {
    els.timetableAnswer.innerHTML = renderTimetableParts(example.answerParts);
    els.timetableAnswer.classList.toggle("hidden", Boolean(example.answerReveal));
    els.timetableReveal.classList.toggle("hidden", !example.answerReveal);
    els.timetableReveal.disabled = false;
  }
  if (isPresenceSlide && !isPersonalityWordReveal && !isSuggestionDialogue && !isSequentialBoxes && !isFriendSorter && !isInvitationLetter && !isMessageComprehension && !isTestQuestion) renderPresenceSlide(example);
  if (isPersonalityWordReveal) renderPersonalityWordReveal(example);
  if (isSuggestionDialogue) renderSuggestionDialogue(example);
  if (isSequentialBoxes) renderSequentialBoxes(example);
  if (isFrequencyExpressionReveal) renderFrequencyExpressionReveal(example);
  if (isSplitImageWordMatch) renderSplitImageWordMatch(example);
  if (isQuestionAnswerMatch) renderQuestionAnswerMatch(example);
  if (isSimpleProcessIndex) renderSimpleProcessIndex(example);
  if (isRecipeIngredientQuiz) renderRecipeIngredientQuiz(example);
  if (isRecipeQuestionInfo) renderRecipeQuestionInfo(example);
  if (isLikesDislikesIntro) renderLikesDislikesIntro(example);
  if (isPreferenceComparison) renderPreferenceComparison(example);
  if (isLikesDislikesPopup) renderLikesDislikesPopup(example);
  if (isFriendSorter) renderFriendSorter(example);
  if (isInvitationLetter) renderInvitationLetter(example);
  if (isMessageComprehension) renderMessageComprehension(example);
  if (isTestQuestion) renderTestQuestion(example);
  if (isPreferenceTableTest) renderPreferenceTableTest(example);
  if (example.appearanceVideoHub) renderAppearanceVideoHub(example);
  if (example.dailyRoutineVideoHub) renderDailyRoutineVideoHub(example);
  if (example.preferenceVideoHub) renderPreferenceVideoHub(example);
  if (example.simplePresentVideoHub) renderSimplePresentVideoHub(example);
  if (isVideoDialogue) renderVideoDialoguePractice(example);
  if (example.personalityHub) {
    const hubState = getPersonalityHubState(example);
    const activeTrait = example.traits?.find((trait) => trait.key === hubState.activeTraitKey) || example.traits?.[0];
    renderPersonalityHubVisual(example, activeTrait);
  }
  if (!isTimePrompt && !noVisual && !example.personalityHub && !isRecipeIngredientQuiz && !isRecipeQuestionInfo && !isVideoDialogue && !isPersonalityWordReveal && !isSuggestionDialogue && !isSequentialBoxes && !isLikesDislikesIntro && !isPreferenceComparison && !isLikesDislikesPopup && !isInvitationLetter && !isMessageComprehension && !isTestQuestion && !isPreferenceTableTest) {
    els.brief.textContent = example.visualBrief;
    els.fallback.classList.add("hidden");
    els.image.classList.remove("hidden");
    els.image.className = example.imageClass || "";
    els.image.alt = example.visualBrief;
    els.image.src = example.imagePath;
    els.image.style.aspectRatio = example.imageAspect || "";
    els.image.style.objectFit = example.imageFit || "";
    updateVisualAnnotations(example);
    if (isPresenceSlide) {
      const firstVisibleRow = els.presenceView.querySelector(".presence-row:not(.hidden)");
      if (firstVisibleRow?.dataset.imagePathOnShow || firstVisibleRow?.dataset.speechText || firstVisibleRow?.dataset.speakerName) {
        applyPresenceRowImage(firstVisibleRow);
      }
    }
    if (isPresenceSlide) {
      requestAnimationFrame(positionPresenceHotspots);
      requestAnimationFrame(positionPresenceHoverNameTag);
    }
    if (example.staticDialogueVideo) renderStaticDialogueVideo(example);
  }
  if (example.scrambledDialogue && !example.staticDialogueVideo) activateScrambledDialogue();
  els.previous.disabled = state.index === 0 && !state.module.pronounTable;
  const isLastVisible = visibleSentences[visibleSentences.length - 1] === example;
  els.next.textContent = isRecipeQuestionInfo
    ? "NEXT"
    : (isLastVisible && !example.keepNextLabel && !example.exerciseLink && !example.exerciseObj) ? "FINISH" : "NEXT";
  syncHeaderNextButton();
  els.dots.replaceChildren(...visibleSentences.map((s) => {
    const actualIdx = state.module.sentences.indexOf(s);
    const dot = document.createElement("span");
    dot.className = actualIdx === state.index ? "active" : actualIdx < state.index ? "complete" : "";
    return dot;
  }));
}
