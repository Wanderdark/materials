const { functionModules, getUnitsForGrade, getFunctionsForGradeAndUnit } = window.functionRegistry;
const { getExercisesForFunction } = window.exerciseRegistry;

const $ = (id) => document.getElementById(id);
const els = {
  setup: $("setupScreen"),
  presentation: $("presentationScreen"),
  grades: $("gradeOptions"),
  units: $("unitOptions"),
  functions: $("functionOptions"),
  summary: $("setupSummary"),
  start: $("startButton"),
  setupExercises: $("setupExercisesButton"),
  presentationExercises: $("presentationExercisesButton"),
  complete: $("completeScreen"),
  completeExercises: $("completeExercisesButton"),
  completeHome: $("completeHomeButton"),
  back: $("backButton"),
  exampleCard: $("exampleCard"),
  exampleVisualPanel: $("exampleVisualPanel"),
  functionIntro: $("functionIntro"),
  functionIntroTitle: $("functionIntroTitle"),
  pronounTable: $("pronounTable"),
  fullscreen: $("fullscreenButton"),
  gradeLabel: $("gradeLabel"),
  title: $("functionTitle"),
  progressText: $("progressText"),
  progressBar: $("progressBar"),
  image: $("exampleImage"),
  fallback: $("visualFallback"),
  brief: $("visualBrief"),
  article: $("articleBadge"),
  referenceType: $("referenceType"),
  timeQuestion: $("timeQuestion"),
  sentence: $("sentenceText"),
  presentationExampleSentence: $("presentationExampleSentence"),
  description: $("functionDescription"),
  ruleNote: $("ruleNote"),
  timetableAnswerView: $("timetableAnswerView"),
  timetableAnswer: $("timetableAnswer"),
  timetableReveal: $("timetableRevealButton"),
  presenceView: $("presenceView"),
  timeDigitalDisplay: $("timeDigitalDisplay"),
  timePromptView: $("timePromptView"),
  timePromptDigital: $("timePromptDigital"),
  timeReveal: $("timeRevealButton"),
  timePromptAnswer: $("timePromptAnswer"),
  previous: $("previousButton"),
  next: $("nextButton"),
  dots: $("slideDots"),
  exercise: $("exerciseScreen"),
  exerciseCard: $("exerciseCard"),
  exerciseVisualPanel: $("exerciseVisualPanel"),
  exerciseResult: $("exerciseResultScreen"),
  exerciseBack: $("exerciseBackButton"),
  exerciseGrade: $("exerciseGradeLabel"),
  exerciseTitle: $("exerciseTitle"),
  exerciseProgress: $("exerciseProgressText"),
  exerciseProgressBar: $("exerciseProgressBar"),
  exerciseScore: $("exerciseScore"),
  exerciseImage: $("exerciseImage"),
  exerciseFallback: $("exerciseVisualFallback"),
  exerciseBrief: $("exerciseVisualBrief"),
  exerciseReferenceType: $("exerciseReferenceType"),
  exerciseWord: $("exerciseWord"),
  exercisePrompt: $("exercisePrompt"),
  exerciseSentence: $("exerciseSentence"),
  articleOptions: $("articleOptions"),
  exerciseFeedback: $("exerciseFeedback"),
  exerciseNext: $("exerciseNextButton"),
  exerciseResultScore: $("exerciseResultScore"),
  exerciseResultMessage: $("exerciseResultMessage"),
  exerciseContinue: $("exerciseContinueButton"),
  exerciseHome: $("exerciseHomeButton"),
  sort: $("sortScreen"),
  sortBack: $("sortBackButton"),
  sortGrade: $("sortGradeLabel"),
  sortProgress: $("sortProgressText"),
  sortMistakes: $("sortMistakeCount"),
  sortBank: $("sortCardBank"),
  sortZones: $("sortZones"),
  exerciseMenu: $("exerciseMenu"),
  exerciseMenuClose: $("closeExerciseMenuButton"),
  exerciseMenuOptions: $("exerciseMenuOptions"),
  conversation: $("conversationScreen"),
  conversationBack: $("conversationBackButton"),
  conversationGrade: $("conversationGradeLabel"),
  conversationProgress: $("conversationProgressText"),
  conversationScore: $("conversationScore"),
  conversationBuilder: $("conversationBuilderView"),
  conversationBank: $("conversationLineBank"),
  conversationSequence: $("conversationSequence"),
  conversationNext: $("conversationNextButton"),
  clubQuiz: $("clubQuizView"),
  clubQuizQuestion: $("clubQuizQuestion"),
  clubQuizOptions: $("clubQuizOptions"),
  clubQuizFeedback: $("clubQuizFeedback"),
  clubQuizNext: $("clubQuizNextButton"),
  jumbled: $("jumbledScreen"),
  jumbledBack: $("jumbledBackButton"),
  jumbledGrade: $("jumbledGradeLabel"),
  jumbledProgress: $("jumbledProgressText"),
  jumbledScore: $("jumbledScore"),
  jumbledLives: $("jumbledLives"),
  jumbledCard: $("jumbledCard"),
  jumbledType: $("jumbledType"),
  jumbledImagePanel: $("jumbledImagePanel"),
  jumbledImage: $("jumbledImage"),
  jumbledTiles: $("jumbledWordTiles"),
  jumbledFeedback: $("jumbledFeedback"),
  matching: $("matchingScreen"),
  matchingBack: $("matchingBackButton"),
  matchingGrade: $("matchingGradeLabel"),
  matchingProgress: $("matchingProgressText"),
  matchingScore: $("matchingScore"),
  matchingSentences: $("matchingSentenceGrid"),
  matchingVisuals: $("matchingVisualGrid"),
  matchingTime: $("matchingTimeScreen"),
  matchingTimeText: $("matchingTimeText"),
  matchingTimeMessage: $("matchingTimeMessage"),
  matchingTimeNext: $("matchingTimeNextButton"),
  trueFalse: $("trueFalseScreen"),
  trueFalseBack: $("trueFalseBackButton"),
  trueFalseGrade: $("trueFalseGradeLabel"),
  trueFalseProgress: $("trueFalseProgressText"),
  trueFalseScore: $("trueFalseScore"),
  trueFalseCard: $("trueFalseCard"),
  trueFalseVisualPanel: $("trueFalseVisualPanel"),
  trueFalseImage: $("trueFalseImage"),
  trueFalseVisualFallback: $("trueFalseVisualFallback"),
  trueFalseVisualBrief: $("trueFalseVisualBrief"),
  trueFalseInstruction: $("trueFalseInstruction"),
  trueFalseGrid: $("trueFalseGrid"),
  trueFalseActions: $("trueFalseActions"),
  trueFalseActionMessage: $("trueFalseActionMessage"),
  trueFalseNext: $("trueFalseNextButton"),
  trueFalseExit: $("trueFalseExitButton"),
  pronounMemory: $("pronounMemoryScreen"),
  pronounMemoryExit: $("pronounMemoryExitButton"),
  pronounMemoryGrade: $("pronounMemoryGradeLabel"),
  pronounMemoryLevel: $("pronounMemoryLevelText"),
  pronounMemoryStatus: $("pronounMemoryStatus"),
  pronounMemoryScore: $("pronounMemoryScore"),
  pronounMemoryInstruction: $("pronounMemoryInstruction"),
  pronounMemoryImages: $("pronounMemoryImages"),
  pronounMemoryChoices: $("pronounMemoryChoices"),
  pronounMemoryPrompt: $("pronounMemoryPrompt"),
  pronounMemoryResult: $("pronounMemoryResultScreen"),
  pronounMemoryResultKicker: $("pronounMemoryResultKicker"),
  pronounMemoryResultScore: $("pronounMemoryResultScore"),
  pronounMemoryResultMessage: $("pronounMemoryResultMessage"),
  pronounMemoryRestart: $("pronounMemoryRestartButton"),
  pronounMemoryExitResult: $("pronounMemoryExitResultButton"),
  pronounSnap: $("pronounSnapScreen"),
  pronounSnapExit: $("pronounSnapExitButton"),
  pronounSnapGrade: $("pronounSnapGradeLabel"),
  pronounSnapProgress: $("pronounSnapProgressText"),
  pronounSnapTimer: $("pronounSnapTimerText"),
  pronounSnapScore: $("pronounSnapScore"),
  pronounSnapStreak: $("pronounSnapStreak"),
  pronounSnapCard: $("pronounSnapCard"),
  pronounSnapImage: $("pronounSnapImage"),
  pronounSnapChoices: $("pronounSnapChoices"),
  pronounSnapResult: $("pronounSnapResultScreen"),
  pronounSnapResultScore: $("pronounSnapResultScore"),
  pronounSnapResultMessage: $("pronounSnapResultMessage"),
  pronounSnapRestart: $("pronounSnapRestartButton"),
  pronounSnapExitResult: $("pronounSnapExitResultButton"),
  timeSetter: $("timeSetterScreen"),
  timeSetterExit: $("timeSetterExitButton"),
  timeSetterGrade: $("timeSetterGradeLabel"),
  timeSetterRound: $("timeSetterRoundText"),
  timeSetterScore: $("timeSetterScore"),
  timeSetterTarget: $("timeSetterTarget"),
  timeSetterDigital: $("timeSetterDigital"),
  timeSetterHour: $("timeSetterHour"),
  timeSetterMinute: $("timeSetterMinute"),
  timeSetterHourUp: $("timeSetterHourUp"),
  timeSetterHourDown: $("timeSetterHourDown"),
  timeSetterMinuteUp: $("timeSetterMinuteUp"),
  timeSetterMinuteDown: $("timeSetterMinuteDown"),
  timeSetterCheck: $("timeSetterCheckButton"),
  timeSetterInlineExit: $("timeSetterInlineExitButton"),
  timeSetterFeedback: $("timeSetterFeedback"),
  timeSetterActions: $("timeSetterActions"),
  fillBlank: $("fillBlankScreen"),
  presenceOverlay: $("presenceOverlay"),
  presenceOverlayClose: $("presenceOverlayClose"),
  presenceOverlayQuestion: $("presenceOverlayQuestion"),
  presenceOverlayImage: $("presenceOverlayImage"),
  presenceOverlaySentence: $("presenceOverlaySentence"),
  smScreen: $("studentMatchScreen"),
  smBack: $("smBackButton"),
  smGrade: $("smGradeLabel"),
  smTitle: $("smTitle"),
  smProgress: $("smProgress"),
  smStudentGrid: $("smStudentGrid"),
  smDescList: $("smDescList"),
  smResult: $("smResult"),
  smResultText: $("smResultText"),
  smNext: $("smNextButton"),
  pcScreen: $("paragraphChoiceScreen"),
  pcBack: $("pcBackButton"),
  pcSkip: $("pcSkipButton"),
  pcGradeLabel: $("pcGradeLabel"),
  pcTitle: $("pcTitle"),
  pcScore: $("pcScore"),
  pcImage: $("pcImage"),
  pcParagraph: $("pcParagraph"),
  pcResult: $("pcResult"),
  pcResultText: $("pcResultText"),
  pcDone: $("pcDoneButton"),
  fillBlankBack: $("fillBlankBackButton"),
  fillBlankGrade: $("fillBlankGradeLabel"),
  fillBlankTitle: $("fillBlankTitle"),
  fillBlankProgress: $("fillBlankProgressText"),
  fillBlankInstruction: $("fillBlankInstruction"),
  fillBlankGrid: $("fillBlankGrid"),
  fillBlankFeedback: $("fillBlankFeedback"),
  mistake: $("mistakeScreen"),
  mistakeBack: $("mistakeBackButton"),
  mistakeGrade: $("mistakeGradeLabel"),
  mistakeTitle: $("mistakeTitle"),
  mistakeProgress: $("mistakeProgressText"),
  mistakeScore: $("mistakeScore"),
  mistakeCard: $("mistakeCard"),
  mistakeInstruction: $("mistakeInstruction"),
  mistakeSentence: $("mistakeSentence"),
  mistakeDecisionButtons: $("mistakeDecisionButtons"),
  mistakeCorrect: $("mistakeCorrectButton"),
  mistakeWrong: $("mistakeWrongButton"),
  mistakeWordBank: $("mistakeWordBank"),
  mistakeFeedback: $("mistakeFeedback"),
  mistakeNext: $("mistakeNextButton"),
  luckySpin: $("luckySpinScreen"),
  luckySpinBack: $("luckySpinBackButton"),
  luckySpinGrade: $("luckySpinGradeLabel"),
  luckySpinProgress: $("luckySpinProgressText"),
  luckySpinScore: $("luckySpinScore"),
  luckyFloatingText: $("luckyFloatingText"),
  luckyWheel: $("luckyWheel"),
  luckySpinButton: $("luckySpinButton"),
  luckySpinVisualPanel: $("luckySpinVisualPanel"),
  luckySpinImage: $("luckySpinImage"),
  luckySpinPrompt: $("luckySpinPrompt"),
  luckySpinMeta: $("luckySpinMeta"),
  luckySpinJudge: $("luckySpinJudge"),
  luckyWrong: $("luckyWrongButton"),
  luckyCorrect: $("luckyCorrectButton"),
  luckySpinEnd: $("luckySpinEnd"),
  luckySpinEndKicker: $("luckySpinEndKicker"),
  luckySpinFinalScore: $("luckySpinFinalScore"),
  luckySpinHome: $("luckySpinHomeButton"),
  luckyImageOverlay: $("luckyImageOverlay"),
  luckyImageOverlayClose: $("luckyImageOverlayClose"),
  luckyImageOverlayImage: $("luckyImageOverlayImage")
};

const state = { grade: null, unit: null, module: null, index: 0, showingFunctionIntro: false, exercise: null, exerciseIndex: 0, exerciseScore: 0, exerciseQuestions: [], sortBoard: null, sortSorted: 0, sortMistakes: 0, selectedSortCard: null, draggedSortCard: null, conversationRounds: [], conversationIndex: 0, conversationScore: 0, jumbledQuestions: [], jumbledIndex: 0, jumbledScore: 0, jumbledLives: 3, jumbledLivesMax: 3, draggedJumbledTile: null, jumbledSolved: false, jumbledTimer: null, matchingBatches: [], matchingBatchIndex: 0, matchingBatchMatched: 0, matchingScore: 0, selectedMatchingSentence: null, matchingStartedAt: null, matchingElapsedMs: 0, trueFalseQuestions: [], trueFalseAnswered: 0, trueFalseScore: 0, trueFalsePageIndex: 0, trueFalsePageAnswered: 0, trueFalsePages: [], pronounMemoryExercise: null, pronounMemoryLevel: 0, pronounMemoryScore: 0, pronounMemorySequence: [], pronounMemoryIndex: 0, pronounMemoryTimer: null, pronounMemoryAnswerTimer: null, pronounMemoryLocked: false, pronounSnapExercise: null, pronounSnapRounds: [], pronounSnapIndex: 0, pronounSnapScore: 0, pronounSnapStreak: 0, pronounSnapBestStreak: 0, pronounSnapTimer: null, pronounSnapLocked: false, timeSetterExercise: null, timeSetterTarget: null, timeSetterHour: 12, timeSetterMinute: 0, timeSetterScore: 0, timeSetterRound: 1, timeSetterLocked: false, timeSetterAdvanceTimer: null, fillBlankQuestions: [], fillBlankRevealed: 0, mistakeQuestions: [], mistakeIndex: 0, mistakeScore: 0, mistakeLocked: false, luckyItems: [], luckyRemaining: [], luckyCurrent: null, luckyScore: 0, luckyRotation: 0, luckySpinning: false, luckyTickTimer: null, luckyFinishTimer: null, luckyAudioContext: null, exerciseReturnScreen: "setup", pcPages: [], pcPageIndex: 0, pcOverallCorrect: 0, pcTotalChoices: 0, pcCurrentPageCorrect: 0, smBatchIndex: 0, smMatched: 0, smSelectedDescId: null, smScore: 0 };
let feedbackAudio = null;
let presenceHotspotPoints = [];
let timeStepAudio = null;

function hideAllScreens() {
  [els.setup, els.presentation, els.complete, els.exercise, els.exerciseResult, els.sort, els.conversation, els.jumbled, els.matching, els.matchingTime, els.trueFalse, els.pronounMemory, els.pronounMemoryResult, els.pronounSnap, els.pronounSnapResult, els.timeSetter, els.fillBlank, els.mistake, els.luckySpin, els.pcScreen, els.smScreen, els.exerciseMenu].forEach((screen) => screen.classList.add("hidden"));
}

function playFeedbackSound(isCorrect) {
  if (feedbackAudio) {
    feedbackAudio.pause();
    feedbackAudio.currentTime = 0;
  }
  feedbackAudio = new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.mp3`);
  feedbackAudio.play().catch(() => {});
}

function playWavFeedback(isCorrect) {
  if (feedbackAudio) {
    feedbackAudio.pause();
    feedbackAudio.currentTime = 0;
  }
  feedbackAudio = new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.wav`);
  feedbackAudio.play().catch(() => {});
}

function renderGrades() {
  const grades = [...new Set(functionModules.map((module) => module.grade))].sort((a, b) => a - b);
  els.grades.replaceChildren(...grades.map((grade) => {
    const button = document.createElement("button");
    button.className = "grade-button";
    button.textContent = `GRADE ${grade}`;
    button.addEventListener("click", () => selectGrade(grade));
    return button;
  }));
}

function selectGrade(grade) {
  enterFullscreen();
  state.grade = grade;
  state.unit = null;
  state.module = null;
  [...els.grades.children].forEach((button) => button.classList.toggle("selected", button.textContent === `GRADE ${grade}`));
  renderUnits();
  renderFunctions();
  updateSetup();
}

function renderUnits() {
  const units = state.grade ? getUnitsForGrade(state.grade) : [];
  els.units.replaceChildren(...units.map((unit) => {
    const button = document.createElement("button");
    button.className = "grade-button";
    button.textContent = `UNIT ${unit}`;
    button.addEventListener("click", () => selectUnit(unit));
    return button;
  }));
}

function selectUnit(unit) {
  state.unit = unit;
  state.module = null;
  [...els.units.children].forEach((button) => button.classList.toggle("selected", button.textContent === `UNIT ${unit}`));
  renderFunctions();
  updateSetup();
}

function renderFunctions() {
  const modules = state.grade && state.unit ? getFunctionsForGradeAndUnit(state.grade, state.unit) : [];
  els.functions.replaceChildren(...modules.map((module) => {
    const button = document.createElement("button");
    button.className = "function-button";
    button.innerHTML = `<span>GRAMMAR FUNCTION</span><strong>${module.title}</strong>${module.description ? `<small>${module.description}</small>` : ""}`;
    button.addEventListener("click", () => selectFunction(module));
    return button;
  }));
}

function selectFunction(module) {
  state.module = module;
  [...els.functions.children].forEach((button) => button.classList.toggle("selected", button.querySelector("strong").textContent === module.title));
  updateSetup();
}

function updateSetup() {
  const ready = Boolean(state.grade && state.unit && state.module);
  els.start.disabled = !ready;
  els.setupExercises.disabled = !ready || !getExercisesForFunction(state.module).length;
  if (ready) {
    els.summary.innerHTML = `<strong>${state.module.sentences.length} examples ready</strong><span>Grade ${state.grade} · Unit ${state.unit}: ${state.module.title}</span>`;
  } else if (state.grade && state.unit) {
    els.summary.innerHTML = `<strong>Choose a function</strong><span>Select one grammar function for Grade ${state.grade}, Unit ${state.unit}.</span>`;
  } else if (state.grade) {
    els.summary.innerHTML = `<strong>Choose a unit</strong><span>Select one unit for Grade ${state.grade}.</span>`;
  } else {
    els.summary.innerHTML = "<strong>Choose a grade to begin</strong><span>Your available grammar functions will appear here.</span>";
  }
}

function startPresentation() {
  if (!state.module) return;
  state.index = 0;
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
  els.title.textContent = state.module.title.toUpperCase();
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
  els.dots.replaceChildren();
}

function renderExample() {
  state.showingFunctionIntro = false;
  clearPresenceHotspots();
  els.functionIntro.classList.add("hidden");
  els.exampleCard.classList.remove("hidden");
  const example = state.module.sentences[state.index];
  const visibleSentences = state.module.sentences.filter((s) => !s.bridgeSlide);
  const total = visibleSentences.length;
  const visiblePos = state.module.sentences.slice(0, state.index + 1).filter((s) => !s.bridgeSlide).length;
  const isTimePrompt = Boolean(example.timePrompt);
  const isTimetableSlide = Boolean(example.timetableSlide);
  const isPresenceSlide = Boolean(example.presenceSlide);
  const noVisual = Boolean(example.noVisual);
  const focus = example.focus || example.article || "";
  const highlight = example.highlight || example.article;
  const highlightedSentence = isTimePrompt || isTimetableSlide || isPresenceSlide
    ? ""
    : example.highlightSuffix
    ? example.sentence.replace(
      new RegExp(`\\b(${example.highlightStem})(${example.highlightSuffix})\\b`, "i"),
      `$1<mark class="plural-ending ${example.suffixClass}">$2</mark>`
    )
    : example.sentence.replace(new RegExp(`\\b(${highlight})\\b`, "i"), `<mark class="${example.highlightClass || ""}">$1</mark>`);
  const usesMintBadge = example.article === "the" || example.focus === "PLURAL";

  els.gradeLabel.textContent = `GRADE ${state.grade}`;
  els.title.textContent = state.module.title.toUpperCase();
  els.progressText.textContent = `${visiblePos} / ${total}`;
  els.progressBar.style.width = `${(visiblePos / total) * 100}%`;
  els.exampleCard.classList.toggle("time-prompt-slide", isTimePrompt);
  els.exampleCard.classList.toggle("timetable-slide", isTimetableSlide);
  els.exampleCard.classList.toggle("presence-slide", isPresenceSlide);
  els.exampleCard.classList.toggle("no-visual-slide", noVisual);
  els.exampleCard.classList.toggle("speech-bubble-slide", example.visualStyle === "speech-bubble");
  els.exampleCard.classList.toggle("description-choice-slide", example.listClass === "description-choice-list");
  els.exampleCard.classList.toggle("inline-choice-slide", example.listClass === "inline-choice-list");
  els.exampleVisualPanel.classList.toggle("hidden", isTimePrompt || noVisual);
  els.timeDigitalDisplay.textContent = example.digitalTime || "";
  els.timeDigitalDisplay.classList.toggle("hidden", !example.digitalTime || isTimePrompt);
  els.timePromptView.classList.toggle("hidden", !isTimePrompt);
  els.timetableAnswerView.classList.toggle("hidden", !isTimetableSlide || !example.answerParts);
  els.presenceView.classList.toggle("hidden", !isPresenceSlide);
  if (isTimePrompt) {
    els.timePromptDigital.textContent = example.digitalTime;
    els.timePromptAnswer.textContent = example.answerSentence;
    els.timePromptAnswer.classList.add("hidden");
    els.timeReveal.disabled = false;
  }
  [els.article, els.referenceType, els.timeQuestion, els.sentence, els.presentationExampleSentence, els.description, els.ruleNote]
    .forEach((element) => element.classList.toggle("hidden", isTimePrompt || isPresenceSlide));
  els.article.textContent = focus ? focus.toUpperCase() : "";
  els.article.className = `article-badge ${usesMintBadge ? "specific" : ""} ${focus.length > 2 ? "long" : ""} ${example.badgeClass || ""}`;
  els.article.classList.toggle("hidden", isTimePrompt || isTimetableSlide || isPresenceSlide);
  els.referenceType.textContent = isTimetableSlide ? "TIMETABLE" : example.referenceType || (example.article === "the" ? "SPECIFIC NOUN" : "NON-SPECIFIC NOUN");
  els.timeQuestion.textContent = example.question || "";
  els.timeQuestion.classList.toggle("hidden", isTimePrompt || !example.question);
  els.sentence.innerHTML = isTimetableSlide
    ? renderTimetableParts(example.questionParts || example.sentenceParts)
    : highlightedSentence;
  els.sentence.classList.toggle("long-phrase", isTimetableSlide || (example.sentence?.length || 0) > 10);
  els.sentence.classList.toggle("timetable-sentence", isTimetableSlide);
  const showExampleSentence = !isTimePrompt && state.module.id === "a-an-the" && example.exerciseSentence;
  els.presentationExampleSentence.textContent = showExampleSentence
    ? example.exerciseSentence.replace("___", example.article)
    : "";
  els.presentationExampleSentence.classList.toggle("hidden", !showExampleSentence);
  els.description.textContent = state.module.id === "a-an-the"
    ? `Referring to a ${example.article === "the" ? "specific" : "non-specific"} noun.`
    : state.module.description;
  els.description.classList.toggle("hidden", isTimePrompt || isTimetableSlide || isPresenceSlide || !els.description.textContent);
  els.ruleNote.textContent = example.ruleNote || "";
  els.ruleNote.classList.toggle("hidden", isTimePrompt || isTimetableSlide || !example.ruleNote);
  if (isTimetableSlide && example.answerParts) {
    els.timetableAnswer.innerHTML = renderTimetableParts(example.answerParts);
    els.timetableAnswer.classList.toggle("hidden", Boolean(example.answerReveal));
    els.timetableReveal.classList.toggle("hidden", !example.answerReveal);
    els.timetableReveal.disabled = false;
  }
  if (isPresenceSlide) renderPresenceSlide(example);
  if (!isTimePrompt && !noVisual) {
    els.brief.textContent = example.visualBrief;
    els.fallback.classList.add("hidden");
    els.image.classList.remove("hidden");
    els.image.className = example.imageClass || "";
    els.image.alt = example.visualBrief;
    els.image.src = example.imagePath;
    if (isPresenceSlide) requestAnimationFrame(positionPresenceHotspots);
  }
  els.previous.disabled = state.index === 0 && !state.module.pronounTable;
  const isLastVisible = visibleSentences[visibleSentences.length - 1] === example;
  els.next.textContent = (isLastVisible && !example.exerciseLink && !example.exerciseObj) ? "FINISH" : "NEXT";
  els.dots.replaceChildren(...visibleSentences.map((s) => {
    const actualIdx = state.module.sentences.indexOf(s);
    const dot = document.createElement("span");
    dot.className = actualIdx === state.index ? "active" : actualIdx < state.index ? "complete" : "";
    return dot;
  }));
}

function revealTimeAnswer() {
  const example = state.module?.sentences[state.index];
  if (!example?.timePrompt) return;
  els.timePromptAnswer.classList.remove("hidden");
  els.timeReveal.disabled = true;
}

function renderTimetableParts(parts = []) {
  return parts.map(({ text, className = "" }) => `<span class="${className}">${text}</span>`).join("");
}

function buildComparisonLayout(comp, hl) {
  const layout = document.createElement("div");
  layout.className = "comp-layout";

  const leftCol = document.createElement("div");
  leftCol.className = "comp-col";
  const leftImg = document.createElement("img");
  leftImg.src = comp.left.imagePath;
  leftImg.className = "comp-img";
  const leftCap = document.createElement("p");
  leftCap.className = "comp-caption";
  leftCap.innerHTML = hl(comp.left.caption || "");
  leftCol.append(leftImg, leftCap);

  const divider = document.createElement("div");
  divider.className = "comp-divider";
  const advBtn = document.createElement("button");
  advBtn.className = "comp-advance-btn";
  advBtn.textContent = "›";
  divider.append(advBtn);

  const rightCol = document.createElement("div");
  rightCol.className = "comp-col hidden";
  const rightImg = document.createElement("img");
  rightImg.src = comp.right.imagePath;
  rightImg.className = "comp-img";
  const revealBtn = document.createElement("button");
  revealBtn.className = "comp-reveal-btn";
  revealBtn.textContent = "▶ Reveal";
  const revealSentence = document.createElement("p");
  revealSentence.className = "comp-reveal-sentence hidden";
  revealSentence.innerHTML = hl(comp.right.revealSentence || "");
  revealBtn.addEventListener("click", () => {
    revealSentence.classList.remove("hidden");
    revealBtn.classList.add("hidden");
  });
  rightCol.append(rightImg, revealBtn, revealSentence);

  advBtn.addEventListener("click", () => {
    rightCol.classList.remove("hidden");
    advBtn.classList.add("hidden");
  });

  layout.append(leftCol, divider, rightCol);
  return layout;
}

function openPresenceOverlay({ question, imagePath, sentence, sentences, interactiveSentences, comparison, imageAspect, overlaySize, revealMode }) {
  const highlight = (str) => str.replace(/<([^>]+)>/g, '<span class="freq-highlight">$1</span>');
  if (comparison) {
    els.presenceOverlay.classList.add("comparison-mode");
    els.presenceOverlayQuestion.innerHTML = "";
    els.presenceOverlayImage.src = "";
    els.presenceOverlaySentence.replaceChildren(buildComparisonLayout(comparison, highlight));
    els.presenceOverlay.classList.remove("hidden");
    return;
  }
  els.presenceOverlay.classList.remove("comparison-mode");
  els.presenceOverlayQuestion.innerHTML = highlight(question || "");
  els.presenceOverlayImage.classList.toggle("hidden", !imagePath);
  if (imagePath) {
    els.presenceOverlayImage.src = imagePath;
    els.presenceOverlayImage.alt = question;
    els.presenceOverlayImage.style.aspectRatio = imageAspect || "";
  } else {
    els.presenceOverlayImage.removeAttribute("src");
    els.presenceOverlayImage.alt = "";
    els.presenceOverlayImage.style.aspectRatio = "";
  }
  els.presenceOverlay.querySelector(".presence-overlay-card").classList.toggle("overlay-lg", !!overlaySize);
  if (revealMode) {
    const raw = sentence || "";
    els.presenceOverlaySentence.innerHTML = raw.replace(/<([^>]+)>/g,
      (_, w) => `<span class="reveal-blank" data-answer="${w}">?</span>`);
    els.presenceOverlaySentence.querySelectorAll(".reveal-blank").forEach((span) => {
      span.addEventListener("click", () => {
        span.textContent = span.dataset.answer;
        span.classList.remove("reveal-blank");
        span.classList.add("freq-highlight");
        playFeedbackSound(true);
      });
    });
    els.presenceOverlay.classList.remove("hidden");
    return;
  }
  if (interactiveSentences) {
    els.presenceOverlaySentence.replaceChildren(
      ...interactiveSentences.map((s) => {
        const p = document.createElement("p");
        p.className = "inline-choice-prompt freq-overlay-line";
        p.append(...createInlineChoiceParts(s.segments));
        return p;
      })
    );
  } else {
    const all = sentences || (sentence ? [sentence] : []);
    els.presenceOverlaySentence.innerHTML = all.length > 1
      ? all.map((s, i) => `<span class="freq-overlay-line">${i + 1}) ${highlight(s)}</span>`).join("")
      : highlight(all[0] || "");
  }
  els.presenceOverlay.classList.remove("hidden");
}

function renderPresenceParts(parts = []) {
  return parts.map(({ text, className = "" }) => `<span class="${className}">${text}</span>`).join("");
}

function createPresenceParts(parts = []) {
  return parts.map(({ text, className = "", swapImage }) => {
    const part = swapImage ? document.createElement("button") : document.createElement("span");
    part.className = className;
    part.textContent = text;
    if (swapImage) {
      part.type = "button";
      part.classList.add("presence-image-link");
      part.addEventListener("click", (event) => {
        event.stopPropagation();
        els.image.src = swapImage;
      });
    }
    return part;
  });
}

function appendPresenceParts(target, parts = []) {
  target.replaceChildren(...createPresenceParts(parts));
}

function renderPresenceSlide(example) {
  els.presenceView.replaceChildren();
  if (example.kicker) {
    const kicker = document.createElement("p");
    kicker.className = "presence-kicker";
    kicker.textContent = example.kicker;
    els.presenceView.append(kicker);
  }
  if (example.title || example.titleParts) {
    const title = document.createElement("h1");
    title.className = "presence-title";
    title.classList.toggle("compact", Boolean(example.compactTitle));
    title.innerHTML = renderPresenceParts(example.titleParts || [{ text: example.title }]);
    els.presenceView.append(title);
  }
  if (example.note) {
    const note = document.createElement("p");
    note.className = "presence-note";
    note.textContent = example.note;
    els.presenceView.append(note);
  }
  const list = document.createElement("div");
  list.className = `presence-list ${example.listClass || ""}`;
  const shouldReplaceCurrentItem = Boolean(example.replaceCurrentItem || (state.module?.id === "object-pronouns" && !example.showAllItems));
  list.dataset.replaceCurrentItem = shouldReplaceCurrentItem ? "true" : "";
  const items = example.items || [];
  items.forEach((item, index) => {
    const row = document.createElement("section");
    row.className = `presence-row ${item.kind || "statement"}`;
    if (item.targetId) {
      row.classList.add("clickable");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.addEventListener("click", () => goToSlideById(item.targetId));
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          goToSlideById(item.targetId);
        }
      });
    }
    if (item.swapImage) {
      row.classList.add("clickable");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.addEventListener("click", () => { els.image.src = item.swapImage; });
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          els.image.src = item.swapImage;
        }
      });
    }
    if (item.toggleImages) {
      let togIdx = 0;
      row.classList.add("clickable");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      const doToggle = () => { togIdx = (togIdx + 1) % item.toggleImages.length; els.image.src = item.toggleImages[togIdx]; };
      row.addEventListener("click", doToggle);
      row.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); doToggle(); } });
    }
    if (item.revealSentence) {
      row.classList.add("clickable");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.addEventListener("click", () => {
        playFeedbackSound(true);
        const hl = (s) => s.replace(/<([^>]+)>/g, '<span class="freq-highlight">$1</span>');
        const prompt = row.querySelector(".presence-prompt");
        if (prompt) prompt.innerHTML = hl(item.revealSentence);
        row.classList.remove("clickable");
        row.classList.add("revealed");
        row.removeAttribute("tabindex");
      });
    }
    if (item.revealImage) {
      row.classList.add("clickable");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.addEventListener("click", () => {
        if (row.classList.contains("revealed")) return;
        playFeedbackSound(true);
        els.image.src = item.revealImage;
        const hl = (s) => s.replace(/<([^>]+)>/g, '<span class="freq-highlight">$1</span>');
        const prompt = row.querySelector(".presence-prompt");
        if (prompt) {
          const lines = item.revealSentences || (item.revealSentence ? [item.revealSentence] : []);
          prompt.innerHTML = lines.map((s) => hl(s)).join("<br>");
        }
        row.classList.remove("clickable");
        row.classList.add("revealed");
        row.removeAttribute("tabindex");
      });
    }
    if (item.overlayData) {
      row.classList.add("clickable");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.addEventListener("click", () => openPresenceOverlay(item.overlayData));
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openPresenceOverlay(item.overlayData);
        }
      });
    }
    if (index > 0 && !example.showAllItems) row.classList.add("hidden");
    row.dataset.presenceIndex = index;
    if (item.clearPreviousOnShow) row.dataset.clearPreviousOnShow = "true";
    if (item.titleOverride) row.dataset.titleOverride = item.titleOverride;
    if (example.hotspotMode && item.hotspots) {
      row.classList.add("hotspot-step", "pending-hotspot");
      row.dataset.hotspots = JSON.stringify(item.hotspots);
    }
    if (item.pauseAfterReveal) row.dataset.pauseAfterReveal = "true";
    const promptLine = document.createElement("div");
    promptLine.className = `presence-prompt-line ${item.kind === "replace-choice" ? "replace-prompt-line" : ""}`;
    if (item.kind === "inline-choice") {
      const prompt = document.createElement("p");
      prompt.className = "presence-prompt inline-choice-prompt";
      prompt.append(...createInlineChoiceParts(item.segments || []));
      promptLine.append(prompt);
    } else if (item.kind === "replace-choice") {
      const source = document.createElement("p");
      source.className = "presence-prompt replace-source";
      source.innerHTML = renderPresenceParts(item.sourceParts || []);
      const arrow = document.createElement("span");
      arrow.className = "replace-arrow";
      arrow.textContent = "->";
      const target = document.createElement("p");
      target.className = "presence-prompt replace-target";
      target.innerHTML = renderPresenceParts(item.targetParts || []);
      promptLine.append(source, arrow, target);
    } else {
      const prompt = document.createElement("p");
      prompt.className = "presence-prompt";
      if (example.hotspotMode && item.hotspots) prompt.classList.add("hidden");
      appendPresenceParts(prompt, item.parts || [{ text: item.text || "" }]);
      promptLine.append(prompt);
    }
    if (index < items.length - 1 && !example.showAllItems) {
      const nextButton = document.createElement("button");
      nextButton.className = "presence-next";
      nextButton.type = "button";
      nextButton.textContent = "›";
      nextButton.setAttribute("aria-label", "Show next sentence");
      nextButton.disabled = Boolean(item.answerReveal || item.choices || item.kind === "inline-choice");
      nextButton.addEventListener("click", () => {
        if (example.hotspotMode && item.hotspots) revealPresenceHotspotStep(list, index);
        else showNextPresenceRow(list, index);
      });
      promptLine.append(nextButton);
    }
    if (!item.hidePrompt) row.append(promptLine);
    if (item.answerParts) {
      const answer = document.createElement("p");
      answer.className = "presence-answer";
      answer.innerHTML = renderPresenceParts(item.answerParts);
      if (item.answerReveal) {
        answer.classList.add("hidden");
        const reveal = document.createElement("button");
        reveal.className = "primary-button presence-reveal";
        reveal.textContent = "REVEAL";
        reveal.addEventListener("click", () => {
          answer.classList.remove("hidden");
          reveal.disabled = true;
          enablePresenceNext(row);
        });
        row.append(reveal);
      }
      row.append(answer);
    }
    if (item.choices) {
      const choices = document.createElement("div");
      choices.className = "presence-choices";
      const choiceList = item.shuffleChoices ? shuffle(item.choices) : item.choices;
      choiceList.forEach((choice) => {
        const button = document.createElement("button");
        button.className = "presence-choice";
        button.textContent = choice;
        button.addEventListener("click", () => answerPresenceChoice(button, choices, item.answer, row));
        choices.append(button);
      });
      row.append(choices);
    }
    if (item.kind === "style-match") {
      row.append(createPresenceStyleMatch(item));
    }
    list.append(row);
  });
  els.presenceView.append(list);
  if (example.hotspotMode) {
    const firstHotspotRow = list.querySelector(".presence-row:not(.hidden)[data-hotspots]");
    showPresenceHotspots(readRowHotspots(firstHotspotRow));
  }

  // Image-next button for revealImage slides
  const revealItems = example.items?.filter((i) => i.revealImage) || [];
  document.getElementById("imgNextBtn")?.remove();
  if (revealItems.length > 1) {
    let imgIdx = 0;
    const btn = document.createElement("button");
    btn.id = "imgNextBtn";
    btn.className = "img-next-btn";
    btn.textContent = "NEXT →";
    btn.addEventListener("click", () => {
      imgIdx++;
      if (imgIdx < revealItems.length) {
        els.image.src = revealItems[imgIdx].revealImage;
      }
      if (imgIdx >= revealItems.length - 1) btn.remove();
    });
    document.getElementById("exampleVisualPanel").append(btn);
  }
}

function createInlineChoiceParts(segments) {
  return segments.map((segment) => {
    if (segment.text) {
      const span = document.createElement("span");
      span.className = segment.className || "";
      span.textContent = segment.text;
      return span;
    }
    const group = document.createElement("span");
    group.className = "inline-choice-group";
    group.dataset.answer = segment.answer;

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "inline-choice-trigger";
    trigger.textContent = "?";

    const popup = document.createElement("div");
    popup.className = "inline-choice-popup hidden";

    let closeHandler = null;

    const closePopup = () => {
      popup.classList.add("hidden");
      if (closeHandler) {
        document.removeEventListener("click", closeHandler, true);
        closeHandler = null;
      }
    };

    shuffle(segment.options || []).forEach((option) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "inline-choice-popup-option";
      btn.textContent = option;
      btn.addEventListener("click", () => {
        const isCorrect = option === group.dataset.answer;
        closePopup();
        trigger.disabled = true;
        trigger.classList.add(isCorrect ? "correct" : "wrong");
        trigger.textContent = isCorrect ? option : group.dataset.answer;
        group.dataset.answered = "true";
        playFeedbackSound(isCorrect);
        const row = group.closest(".presence-row");
        if (row && [...row.querySelectorAll(".inline-choice-group")].every((choiceGroup) => choiceGroup.dataset.answered === "true")) {
          enablePresenceNext(row);
        }
      });
      popup.append(btn);
    });

    trigger.addEventListener("click", (e) => {
      if (group.dataset.answered) return;
      e.stopPropagation();
      const isHidden = popup.classList.contains("hidden");
      popup.classList.toggle("hidden", !isHidden);
      if (isHidden) {
        closeHandler = (ev) => { if (!group.contains(ev.target)) closePopup(); };
        document.addEventListener("click", closeHandler, true);
      } else {
        if (closeHandler) { document.removeEventListener("click", closeHandler, true); closeHandler = null; }
      }
    });

    group.append(trigger, popup);
    return group;
  });
}

function createPresenceStyleMatch(item) {
  const activity = document.createElement("div");
  activity.className = "presence-style-match";
  const image = document.createElement("img");
  image.src = item.imagePath;
  image.alt = item.visualBrief || "Style matching visual";
  activity.append(image);

  const slots = document.createElement("div");
  slots.className = "style-match-slots";
  (item.slots || []).forEach((slot) => {
    const target = document.createElement("div");
    target.className = "style-match-slot";
    target.dataset.answer = slot.answer;
    target.textContent = slot.label || "";
    target.addEventListener("dragover", (event) => event.preventDefault());
    target.addEventListener("drop", (event) => {
      event.preventDefault();
      const word = event.dataTransfer.getData("text/plain");
      const card = [...activity.querySelectorAll(".style-match-card")].find((button) => button.dataset.word === word);
      if (!card || card.disabled) return;
      const isCorrect = word === target.dataset.answer;
      playFeedbackSound(isCorrect);
      if (!isCorrect) {
        target.classList.add("wrong");
        setTimeout(() => target.classList.remove("wrong"), 420);
        return;
      }
      target.classList.add("filled");
      target.textContent = word;
      card.disabled = true;
      card.draggable = false;
      card.classList.add("used");
    });
    slots.append(target);
  });
  activity.append(slots);

  const bank = document.createElement("div");
  bank.className = "style-match-bank";
  shuffle(item.words || []).forEach((word) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "style-match-card";
    card.textContent = word;
    card.dataset.word = word;
    card.draggable = true;
    card.addEventListener("dragstart", (event) => {
      if (card.disabled) return;
      event.dataTransfer.setData("text/plain", word);
    });
    bank.append(card);
  });
  activity.append(bank);
  return activity;
}

function readRowHotspots(row) {
  if (!row?.dataset.hotspots) return [];
  try {
    return JSON.parse(row.dataset.hotspots);
  } catch {
    return [];
  }
}

function clearPresenceHotspots() {
  presenceHotspotPoints = [];
  document.getElementById("presenceHotspotLayer")?.remove();
}

function showPresenceHotspots(points = []) {
  clearPresenceHotspots();
  if (!points.length || els.image.classList.contains("hidden")) return;
  presenceHotspotPoints = points;
  const layer = document.createElement("div");
  layer.id = "presenceHotspotLayer";
  layer.className = "presence-hotspot-layer";
  points.forEach(() => {
    const marker = document.createElement("div");
    marker.className = "presence-hotspot-marker";
    marker.setAttribute("aria-hidden", "true");
    layer.append(marker);
  });
  els.exampleVisualPanel.append(layer);
  requestAnimationFrame(positionPresenceHotspots);
}

function positionPresenceHotspots() {
  const layer = document.getElementById("presenceHotspotLayer");
  if (!layer || !presenceHotspotPoints.length) return;
  const imageRect = els.image.getBoundingClientRect();
  const panelRect = els.exampleVisualPanel.getBoundingClientRect();
  [...layer.children].forEach((marker, index) => {
    const point = presenceHotspotPoints[index];
    if (!point) return;
    marker.style.left = `${imageRect.left - panelRect.left + (point.x / 500) * imageRect.width}px`;
    marker.style.top = `${imageRect.top - panelRect.top + (point.y / 500) * imageRect.height}px`;
  });
}

function applyPresenceRowTitleOverride(row) {
  if (!row?.dataset.titleOverride) return;
  const title = els.presenceView.querySelector(".presence-title");
  if (title) title.textContent = row.dataset.titleOverride;
}

function revealPresenceHotspotStep(list, currentIndex) {
  const currentRow = list.querySelector(`[data-presence-index="${currentIndex}"]`);
  if (!currentRow) return;
  currentRow.classList.remove("pending-hotspot");
  currentRow.querySelector(".presence-prompt")?.classList.remove("hidden");
  const currentNextButton = currentRow.querySelector(".presence-next");
  if (currentRow.dataset.pauseAfterReveal === "true") {
    clearPresenceHotspots();
    if (currentNextButton) {
      currentNextButton.onclick = null;
      currentNextButton.replaceWith(currentNextButton.cloneNode(true));
      const followButton = currentRow.querySelector(".presence-next");
      followButton.addEventListener("click", () => showNextPresenceRow(list, currentIndex));
    }
    return;
  }
  currentNextButton?.classList.add("hidden");

  const nextRow = list.querySelector(`[data-presence-index="${currentIndex + 1}"]`);
  if (!nextRow) {
    clearPresenceHotspots();
    return;
  }
  if (nextRow.dataset.clearPreviousOnShow === "true") {
    [...list.querySelectorAll(".presence-row")].forEach((row) => row.classList.add("hidden"));
  } else if (list.dataset.replaceCurrentItem === "true") {
    currentRow.classList.add("hidden");
  }
  nextRow.classList.remove("hidden");
  applyPresenceRowTitleOverride(nextRow);
  showPresenceHotspots(readRowHotspots(nextRow));
}

function showNextPresenceRow(list, currentIndex) {
  const nextRow = list.querySelector(`[data-presence-index="${currentIndex + 1}"]`);
  if (!nextRow) return;
  if (nextRow.dataset.clearPreviousOnShow === "true") {
    [...list.querySelectorAll(".presence-row")].forEach((row) => row.classList.add("hidden"));
  } else if (list.dataset.replaceCurrentItem === "true") {
    const currentRow = list.querySelector(`[data-presence-index="${currentIndex}"]`);
    currentRow?.classList.add("hidden");
  }
  nextRow.classList.remove("hidden");
  applyPresenceRowTitleOverride(nextRow);
  showPresenceHotspots(readRowHotspots(nextRow));
  const nextButton = list.querySelector(`[data-presence-index="${currentIndex}"] .presence-next`);
  if (nextButton) nextButton.classList.add("hidden");
}

function enablePresenceNext(row) {
  const nextButton = row.querySelector(".presence-next");
  if (nextButton) nextButton.disabled = false;
}

function answerPresenceChoice(button, choices, answer, row) {
  if (choices.dataset.answered) return;
  choices.dataset.answered = "true";
  const isCorrect = button.textContent === answer;
  [...choices.children].forEach((choiceButton) => {
    choiceButton.disabled = true;
    if (choiceButton.textContent === answer) choiceButton.classList.add("correct");
  });
  if (!isCorrect) button.classList.add("wrong");
  enablePresenceNext(row);
  playFeedbackSound(isCorrect);
}

function goToSlideById(targetId) {
  const targetIndex = state.module?.sentences.findIndex((sentence) => sentence.id === targetId);
  if (targetIndex == null || targetIndex < 0) return;
  state.index = targetIndex;
  renderExample();
}

function revealTimetableAnswer() {
  const example = state.module?.sentences[state.index];
  if (!example?.timetableSlide || !example.answerReveal) return;
  els.timetableAnswer.classList.remove("hidden");
  els.timetableReveal.disabled = true;
}

function next() {
  if (state.showingFunctionIntro) {
    renderExample();
    return;
  }
  const example = state.module.sentences[state.index];
  if (example?.exerciseLink || example?.exerciseObj) {
    const ex = example.exerciseObj || (window.exerciseModules || []).find((e) => e.id === example.exerciseLink);
    if (ex) {
      state.postExerciseIndex = state.index + 1;
      startSelectedExercise(ex);
      return;
    }
  }
  if (state.index === state.module.sentences.length - 1) showPresentationComplete();
  else {
    state.index += 1;
    renderExample();
  }
}

function previous() {
  if (state.showingFunctionIntro) return;
  if (state.index === 0 && state.module.pronounTable) {
    state.showingFunctionIntro = true;
    renderFunctionIntro();
    return;
  }
  if (state.index === 0) return;
  state.index -= 1;
  renderExample();
}

function returnToSetup() {
  clearTimeout(state.jumbledTimer);
  clearTimeout(state.pronounMemoryTimer);
  clearTimeout(state.pronounMemoryAnswerTimer);
  clearTimeout(state.pronounSnapTimer);
  clearTimeout(state.timeSetterAdvanceTimer);
  hideAllScreens();
  els.setup.classList.remove("hidden");
}

function showPresentationComplete() {
  if (state.module?.returnToSetupOnComplete) {
    returnToSetup();
    return;
  }
  hideAllScreens();
  els.complete.classList.remove("hidden");
}

function openExerciseMenu() {
  if (!state.module) return;
  state.exerciseReturnScreen = !els.presentation.classList.contains("hidden")
    ? "presentation"
    : !els.complete.classList.contains("hidden")
    ? "complete"
    : "setup";
  const exercises = getExercisesForFunction(state.module);
  if (!exercises.length) return;
  els.exerciseMenuOptions.replaceChildren(...exercises.map((exercise) => {
    const button = document.createElement("button");
    button.className = "exercise-menu-option";
    const exerciseDescriptions = {
      choice: "Choose the correct option for each example.",
      sort: "Sort every card into the correct category.",
      "order-sentences": "Build the conversation, then choose the club.",
      "jumbled-sentences": "Drag the words to build the correct sentence.",
      "match-pictures": "Match each activity sentence to its club visual.",
      "true-false-grid": "Mark every school rule as true or false.",
      "pronoun-memory": "Memorize the pictures, then choose the pronouns in order.",
      "pronoun-snap": "Choose the pronoun before each Unit 1 + 2 picture changes.",
      "time-setter": "Set the digital clock to match the target time.",
      "fill-blank": "Tap each blank to reveal the correct answer.",
      "mistake-correct-it": "Decide if the sentence is correct. If not, find the mistake.",
      "paragraph-choice": "Choose the correct word for each blank in the paragraph.",
      "lucky-spin": "Spin the wheel, complete the speaking task, and score points."
    };
    const exerciseDescription = exerciseDescriptions[exercise.activity] || "Start this activity.";
    button.innerHTML = `<span>EXERCISE</span><strong>${exercise.title}</strong><small>${exerciseDescription}</small>`;
    button.addEventListener("click", () => startSelectedExercise(exercise));
    return button;
  }));
  els.exerciseMenu.classList.remove("hidden");
}

function startSelectedExercise(exercise) {
  els.exerciseMenu.classList.add("hidden");
  resetExerciseResultActions();
  exercise.reset?.();
  switch (exercise.activity) {
    case "sort":
      startSortIt(exercise);
      return;
    case "order-sentences":
      startConversationBuilder(exercise);
      return;
    case "jumbled-sentences":
      startJumbledSentences(exercise);
      return;
    case "match-pictures":
      startActivityVisualMatch(exercise);
      return;
    case "true-false-grid":
      startTrueFalseGrid(exercise);
      return;
    case "pronoun-memory":
      startPronounMemory(exercise);
      return;
    case "pronoun-snap":
      startPronounSnap(exercise);
      return;
    case "time-setter":
      startTimeSetter(exercise);
      return;
    case "fill-blank":
      startFillBlank(exercise);
      return;
    case "mistake-correct-it":
      startMistakeCorrectIt(exercise);
      return;
    case "paragraph-choice":
      startParagraphChoice(exercise);
      return;
    case "student-match":
      startStudentMatch(exercise);
      return;
    case "lucky-spin":
      startLuckySpin(exercise);
      return;
    default:
      startChoiceExercise(exercise);
  }
}

function resetExerciseResultActions() {
  els.exerciseContinue.classList.add("hidden");
  els.exerciseHome.textContent = "BACK TO MENU";
  els.exerciseHome.className = "primary-button";
}

function startParagraphChoice(exercise) {
  state.exercise = exercise;
  state.pcPages = exercise.pages || [{ imagePath: exercise.imagePath, sentences: exercise.sentences }];
  state.pcPageIndex = 0;
  state.pcOverallCorrect = 0;
  state.pcCurrentPageCorrect = 0;
  state.pcTotalChoices = state.pcPages.reduce((sum, p) =>
    sum + (p.sentences || []).reduce((s2, sen) =>
      s2 + (sen.segments || []).filter((seg) => seg.options).length, 0), 0);
  hideAllScreens();
  els.pcGradeLabel.textContent = `GRADE ${state.module.grade}`;
  els.pcTitle.textContent = exercise.title;
  els.pcScore.textContent = `0 / ${state.pcTotalChoices}`;
  els.pcResult.classList.add("hidden");
  els.pcSkip.classList.toggle("hidden", state.postExerciseIndex === undefined);
  els.pcScreen.classList.remove("hidden");
  renderPcPage();
}

function renderPcPage() {
  const page = state.pcPages[state.pcPageIndex];
  els.pcImage.src = page.imagePath;
  els.pcImage.alt = state.exercise.title;
  els.pcResult.classList.add("hidden");
  els.pcDone.dataset.pcAction = "done";
  els.pcDone.textContent = "BACK TO MENU";
  els.pcParagraph.replaceChildren(...(page.sentences || []).map((sentence) => {
    const p = document.createElement("p");
    p.className = "inline-choice-prompt";
    p.append(...createInlineChoiceParts(sentence.segments || []));
    return p;
  }));
}

function advancePcPage() {
  state.pcOverallCorrect += state.pcCurrentPageCorrect;
  state.pcCurrentPageCorrect = 0;
  state.pcPageIndex++;
  renderPcPage();
}

function checkPcProgress() {
  const groups = [...els.pcParagraph.querySelectorAll(".inline-choice-group")];
  const total = groups.length;
  const answered = groups.filter((g) => g.dataset.answered).length;
  const correct = groups.filter((g) => g.querySelector(".inline-choice-trigger.correct")).length;
  const overallCorrect = state.pcOverallCorrect + correct;
  els.pcScore.textContent = `${overallCorrect} / ${state.pcTotalChoices}`;
  if (answered === total && total > 0) {
    state.pcCurrentPageCorrect = correct;
    const isLastPage = state.pcPageIndex >= state.pcPages.length - 1;
    setTimeout(() => {
      if (isLastPage) {
        els.pcResultText.textContent = overallCorrect === state.pcTotalChoices
          ? `Perfect! All ${state.pcTotalChoices} correct!`
          : `${overallCorrect} out of ${state.pcTotalChoices} correct.`;
        els.pcDone.textContent = state.postExerciseIndex !== undefined ? "CONTINUE →" : "BACK TO MENU";
        els.pcDone.dataset.pcAction = "done";
      } else {
        els.pcResultText.textContent = `${overallCorrect} / ${state.pcTotalChoices} correct. Keep going!`;
        els.pcDone.textContent = "NEXT PAGE →";
        els.pcDone.dataset.pcAction = "next";
      }
      els.pcResult.classList.remove("hidden");
    }, 500);
  }
}

function startStudentMatch(exercise) {
  state.exercise = exercise;
  state.smBatchIndex = 0;
  state.smScore = 0;
  state.smSelectedDescId = null;
  state.smMatched = 0;
  const glassStudents = shuffle(exercise.students.filter((s) => s.hasGlasses));
  const normalStudents = shuffle(exercise.students.filter((s) => !s.hasGlasses));
  const batches = [];
  for (let i = 0; i < glassStudents.length; i += 2) {
    batches.push(shuffle([glassStudents[i], glassStudents[i + 1], normalStudents.pop(), normalStudents.pop()]));
  }
  while (normalStudents.length >= 4) {
    batches.push(shuffle(normalStudents.splice(0, 4)));
  }
  state.smBatches = shuffle(batches);
  hideAllScreens();
  els.smGrade.textContent = `GRADE ${state.module.grade}`;
  els.smTitle.textContent = exercise.title;
  els.smResult.classList.add("hidden");
  els.smScreen.classList.remove("hidden");
  renderSmBatch();
}

function renderSmBatch() {
  const batches = state.smBatches;
  const batch = batches[state.smBatchIndex];
  state.smMatched = 0;
  state.smSelectedDescId = null;
  els.smProgress.textContent = `${state.smBatchIndex + 1} / ${batches.length}`;
  els.smResult.classList.add("hidden");

  els.smStudentGrid.replaceChildren(...batch.map((student) => {
    const card = document.createElement("div");
    card.className = "sm-student-card";
    card.dataset.studentId = student.id;
    const img = document.createElement("img");
    img.className = "sm-student-img";
    img.src = student.imagePath;
    img.alt = student.name;
    const nameEl = document.createElement("span");
    nameEl.className = "sm-student-name";
    nameEl.textContent = student.name;
    card.append(img, nameEl);
    card.addEventListener("click", () => handleSmStudentClick(student.id));
    return card;
  }));

  const batchHasGlasses = batch.some((s) => s.hasGlasses);
  const shuffled = shuffle([...batch]);
  els.smDescList.replaceChildren(...shuffled.map((student) => {
    const card = document.createElement("div");
    card.className = "sm-desc-card";
    card.dataset.descId = student.id;
    let desc = student.description;
    if (batchHasGlasses) {
      desc += student.hasGlasses
        ? ` S/he has got ${student.glassesType} glasses.`
        : " S/he hasn't got glasses.";
    }
    card.textContent = desc;
    card.addEventListener("click", () => handleSmDescClick(student.id));
    return card;
  }));
}

function handleSmDescClick(descId) {
  if (els.smDescList.querySelector(`.sm-desc-card[data-desc-id="${descId}"]`)?.classList.contains("sm-matched")) return;
  els.smDescList.querySelectorAll(".sm-desc-card").forEach((c) => c.classList.remove("sm-selected"));
  const card = els.smDescList.querySelector(`.sm-desc-card[data-desc-id="${descId}"]`);
  if (card) card.classList.add("sm-selected");
  state.smSelectedDescId = descId;
}

function handleSmStudentClick(studentId) {
  if (state.smSelectedDescId === null) return;
  const studentCard = els.smStudentGrid.querySelector(`.sm-student-card[data-student-id="${studentId}"]`);
  if (!studentCard || studentCard.classList.contains("sm-matched")) return;
  const isCorrect = Number(state.smSelectedDescId) === studentId;
  const img = studentCard.querySelector(".sm-student-img");
  Stamp.show(img, isCorrect ? "correct" : "wrong", { duration: isCorrect ? 1100 : 900 });
  playWavFeedback(isCorrect);
  if (isCorrect) {
    studentCard.classList.add("sm-matched");
    const descCard = els.smDescList.querySelector(`.sm-desc-card[data-desc-id="${state.smSelectedDescId}"]`);
    if (descCard) descCard.classList.add("sm-matched");
    state.smSelectedDescId = null;
    state.smMatched++;
    state.smScore++;
    if (state.smMatched === 4) {
      const isLast = state.smBatchIndex >= state.smBatches.length - 1;
      setTimeout(() => {
        if (isLast) {
          hideAllScreens();
          els.exerciseResultScore.textContent = `${state.smScore} / ${state.exercise.students.length}`;
          els.exerciseResultMessage.textContent = `${state.smScore} students matched correctly.`;
          els.exerciseResult.classList.remove("hidden");
        } else {
          els.smResultText.textContent = "Well done! Ready for the next group?";
          els.smResult.classList.remove("hidden");
        }
      }, 700);
    }
  } else {
    setTimeout(() => {
      const descCard = els.smDescList.querySelector(`.sm-desc-card[data-desc-id="${state.smSelectedDescId}"]`);
      if (descCard) descCard.classList.remove("sm-selected");
      state.smSelectedDescId = null;
    }, 900);
  }
}

function startFillBlank(exercise) {
  state.exercise = exercise;
  state.fillBlankQuestions = typeof exercise.buildQuestions === "function"
    ? exercise.buildQuestions(state.module)
    : exercise.questions || [];
  state.fillBlankRevealed = 0;
  state.fillBlankTotalBlanks = state.fillBlankQuestions.reduce((sum, q) =>
    sum + (q.segments ? q.segments.filter((s) => s.blank).length : 1), 0);
  hideAllScreens();
  els.fillBlank.classList.remove("hidden");
  els.fillBlankGrade.textContent = `GRADE ${state.grade}`;
  els.fillBlankTitle.textContent = exercise.title;
  els.fillBlankInstruction.textContent = exercise.instruction || "TAP EACH BLANK TO REVEAL THE ANSWER.";
  els.fillBlankFeedback.textContent = "Tap the blanks.";
  els.fillBlankFeedback.className = "exercise-feedback";
  const hasImages = state.fillBlankQuestions.some((q) => q.imagePath);
  els.fillBlankGrid.className = `fill-blank-grid${hasImages ? " fill-blank-grid-img" : ""}`;
  updateFillBlankProgress();
  els.fillBlankGrid.replaceChildren(...state.fillBlankQuestions.map((question, index) => createFillBlankItem(question, index)));
}

function createFillBlankItem(question, index) {
  const item = document.createElement("section");
  item.className = "fill-blank-item";
  item.dataset.index = index;
  if (question.segments) {
    item.classList.add("fill-blank-item-seg");
    if (question.imagePath) {
      const img = document.createElement("img");
      img.src = question.imagePath;
      img.className = "fill-blank-seg-img";
      item.append(img);
    }
    const body = document.createElement("div");
    body.className = "fill-blank-seg-body";
    question.segments.forEach((seg) => {
      if (seg.blank) {
        const answer = document.createElement("button");
        answer.className = "fill-blank-answer";
        answer.type = "button";
        answer.dataset.answer = seg.answer;
        answer.textContent = "______";
        answer.addEventListener("click", () => revealFillBlankAnswer(answer));
        body.append(answer);
        const clue = document.createElement("span");
        clue.className = "fill-blank-clue";
        clue.textContent = ` (${seg.clue}) `;
        body.append(clue);
      } else {
        const span = document.createElement("span");
        span.textContent = seg.text;
        body.append(span);
      }
    });
    item.append(body);
    return item;
  }
  (question.parts || []).forEach((part) => {
    const span = document.createElement("span");
    span.className = part.mark ? "fill-blank-mark" : "";
    span.textContent = part.text;
    item.append(span);
  });
  const answer = document.createElement("button");
  answer.className = "fill-blank-answer";
  answer.type = "button";
  answer.dataset.answer = question.answer;
  answer.textContent = "______";
  answer.addEventListener("click", () => revealFillBlankAnswer(answer));
  item.append(answer);
  if (question.suffix) {
    const suffix = document.createElement("span");
    suffix.textContent = question.suffix;
    item.append(suffix);
  }
  return item;
}

function revealFillBlankAnswer(button) {
  if (button.classList.contains("revealed")) return;
  button.textContent = button.dataset.answer;
  button.classList.add("revealed");
  button.disabled = true;
  state.fillBlankRevealed += 1;
  updateFillBlankProgress();
  playFeedbackSound(true);
  els.fillBlankFeedback.textContent = state.fillBlankRevealed === state.fillBlankTotalBlanks
    ? "Great! All blanks are revealed."
    : "Good. Keep going.";
  els.fillBlankFeedback.className = "exercise-feedback correct";
}

function updateFillBlankProgress() {
  els.fillBlankProgress.textContent = `${state.fillBlankRevealed} / ${state.fillBlankTotalBlanks}`;
}

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

function createTimeSetterTarget(previousTarget = null, round = 1, exercise = {}) {
  const defaultTypes = [
    { minutes: [0] },
    { minutes: [15] },
    { minutes: [30] },
    { minutes: [5, 10, 20] },
    { minutes: [45] }
  ];
  const types = exercise.timeTypes || defaultTypes;
  const guidedRounds = exercise.guidedRounds || [0, 15, 30, 0, 15];
  const allowedTypes = round <= guidedRounds.length
    ? [{ minutes: [guidedRounds[round - 1]] }]
    : types;
  let target;
  do {
    const type = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];
    target = {
      hour: Math.floor(Math.random() * 12) + 1,
      minute: type.minutes[Math.floor(Math.random() * type.minutes.length)]
    };
  } while (previousTarget && target.hour === previousTarget.hour && target.minute === previousTarget.minute);
  return target;
}

function describeTimeSetterTarget({ hour, minute }) {
  const words = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
  const hourWord = words[hour];
  if (minute === 0) return `It is ${hourWord} o'clock.`;
  if (minute === 15) return `It is quarter past ${hourWord}.`;
  if (minute === 30) return `It is half past ${hourWord}.`;
  if (minute === 45) return `It is quarter to ${words[hour === 12 ? 1 : hour + 1]}.`;
  return `It is ${words[minute]} past ${hourWord}.`;
}

function startTimeSetter(exercise) {
  state.timeSetterExercise = exercise;
  state.timeSetterScore = 0;
  state.timeSetterRound = 1;
  state.timeSetterTarget = createTimeSetterTarget(null, state.timeSetterRound, state.timeSetterExercise);
  state.timeSetterHour = 12;
  state.timeSetterMinute = 0;
  state.timeSetterLocked = false;
  hideAllScreens();
  els.timeSetter.classList.remove("hidden");
  renderTimeSetter(true);
}

function shakeTimeSetterTarget() {
  const el = els.timeSetterTarget;
  el.classList.remove("ts-shake");
  void el.offsetWidth;
  el.classList.add("ts-shake");
  el.addEventListener("animationend", () => el.classList.remove("ts-shake"), { once: true });
}

function renderTimeSetter(shake = false) {
  els.timeSetterGrade.textContent = `GRADE ${state.grade}`;
  els.timeSetterRound.textContent = `ROUND ${state.timeSetterRound}`;
  els.timeSetterScore.textContent = state.timeSetterScore;
  els.timeSetterTarget.textContent = describeTimeSetterTarget(state.timeSetterTarget);
  updateTimeSetterDigital();
  els.timeSetterFeedback.textContent = "Set the clock, then press OK.";
  els.timeSetterFeedback.className = "exercise-feedback";
  els.timeSetterActions.replaceChildren();
  setTimeSetterControlsDisabled(false);
  if (shake) shakeTimeSetterTarget();
}

function createTimeSetterAction(label, className, handler) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.addEventListener("click", handler);
  return button;
}

function setTimeSetterControlsDisabled(disabled) {
  [els.timeSetterHourUp, els.timeSetterHourDown, els.timeSetterMinuteUp, els.timeSetterMinuteDown, els.timeSetterCheck]
    .forEach((button) => { button.disabled = disabled; });
}

function playTimeSetterStep(isIncrease) {
  if (timeStepAudio) {
    timeStepAudio.pause();
    timeStepAudio.currentTime = 0;
  }
  timeStepAudio = new Audio(`sounds/${isIncrease ? "digital_up" : "digital_down"}.mp3`);
  timeStepAudio.play().catch(() => {});
}

function adjustTimeSetterHour(change) {
  if (state.timeSetterLocked) return;
  state.timeSetterHour = ((state.timeSetterHour - 1 + change + 12) % 12) + 1;
  updateTimeSetterDigital();
  playTimeSetterStep(change > 0);
}

function adjustTimeSetterMinute(change) {
  if (state.timeSetterLocked) return;
  state.timeSetterMinute = (state.timeSetterMinute + change + 60) % 60;
  updateTimeSetterDigital();
  playTimeSetterStep(change > 0);
}

function updateTimeSetterDigital() {
  if (!els.timeSetterDigital) return;
  const value = `${String(state.timeSetterHour).padStart(2, "0")}:${String(state.timeSetterMinute).padStart(2, "0")}`;
  els.timeSetterDigital.setAttribute("aria-label", value);
  els.timeSetterDigital.replaceChildren(...value.split("").map(createDigitalClockGlyph));
}

function createDigitalClockGlyph(character) {
  const glyph = document.createElement("span");
  if (character === ":") {
    glyph.className = "digital-colon";
    glyph.append(document.createElement("i"), document.createElement("i"));
    return glyph;
  }
  const activeSegmentsByDigit = {
    0: ["a", "b", "c", "d", "e", "f"],
    1: ["b", "c"],
    2: ["a", "b", "g", "e", "d"],
    3: ["a", "b", "g", "c", "d"],
    4: ["f", "g", "b", "c"],
    5: ["a", "f", "g", "c", "d"],
    6: ["a", "f", "g", "e", "c", "d"],
    7: ["a", "b", "c"],
    8: ["a", "b", "c", "d", "e", "f", "g"],
    9: ["a", "b", "c", "d", "f", "g"]
  };
  glyph.className = "digital-digit";
  const activeSegments = new Set(activeSegmentsByDigit[character] || []);
  ["a", "b", "c", "d", "e", "f", "g"].forEach((segment) => {
    const bar = document.createElement("i");
    bar.className = `segment segment-${segment}${activeSegments.has(segment) ? " active" : ""}`;
    glyph.append(bar);
  });
  return glyph;
}

function checkTimeSetter() {
  if (state.timeSetterLocked) return;
  const isCorrect = state.timeSetterHour === state.timeSetterTarget.hour && state.timeSetterMinute === state.timeSetterTarget.minute;
  if (isCorrect) {
    state.timeSetterLocked = true;
    setTimeSetterControlsDisabled(true);
    state.timeSetterScore += 1;
    playWavFeedback(true);
    window.exerciseActivityModules.showStamp(true);
    els.timeSetterScore.textContent = state.timeSetterScore;
    els.timeSetterFeedback.textContent = "Correct! Get ready for the next time.";
    els.timeSetterFeedback.className = "exercise-feedback correct";
    els.timeSetterActions.replaceChildren();
    state.timeSetterAdvanceTimer = window.setTimeout(() => {
      state.timeSetterRound += 1;
      state.timeSetterTarget = createTimeSetterTarget(state.timeSetterTarget, state.timeSetterRound, state.timeSetterExercise);
      state.timeSetterHour = 12;
      state.timeSetterMinute = 0;
      state.timeSetterLocked = false;
      renderTimeSetter(true);
    }, 1200);
    return;
  }
  playWavFeedback(false);
  window.exerciseActivityModules.showStamp(false);
  els.timeSetterFeedback.textContent = "Not quite. Try the same target again.";
  els.timeSetterFeedback.className = "exercise-feedback wrong";
}

function retryTimeSetter() {
  state.timeSetterLocked = false;
  renderTimeSetter();
}

function returnFromTimeSetter() {
  clearTimeout(state.timeSetterAdvanceTimer);
  hideAllScreens();
  if (state.exerciseReturnScreen === "presentation") {
    els.presentation.classList.remove("hidden");
    return;
  }
  if (state.exerciseReturnScreen === "complete") {
    els.complete.classList.remove("hidden");
    return;
  }
  els.setup.classList.remove("hidden");
}

function startChoiceExercise(exercise) {
  state.exercise = exercise;
  state.exerciseQuestions = state.exercise.buildQuestions(state.module);
  if (!state.exerciseQuestions.length) return;
  state.exerciseIndex = 0;
  state.exerciseScore = 0;
  hideAllScreens();
  els.exercise.classList.remove("hidden");
  renderExerciseQuestion();
}

function startTrueFalseGrid(exercise) {
  state.exercise = exercise;
  state.trueFalseAnswered = 0;
  state.trueFalseScore = 0;
  state.trueFalsePageIndex = 0;
  state.trueFalsePageAnswered = 0;
  if (exercise.buildPages) {
    state.trueFalsePages = exercise.buildPages();
    state.trueFalseQuestions = state.trueFalsePages.flatMap((p) => p.questions);
  } else {
    state.trueFalseQuestions = exercise.buildQuestions(state.module);
    const pageSize = exercise.pageSize || state.trueFalseQuestions.length;
    state.trueFalsePages = Array.from(
      { length: Math.ceil(state.trueFalseQuestions.length / pageSize) },
      (_, index) => ({ questions: state.trueFalseQuestions.slice(index * pageSize, (index + 1) * pageSize), imagePath: exercise.imagePath })
    );
  }
  hideAllScreens();
  els.trueFalse.classList.remove("hidden");
  els.trueFalse.dataset.exerciseId = exercise.id || "";
  els.trueFalseGrade.textContent = `GRADE ${state.grade}`;
  els.trueFalseScore.textContent = "0";
  els.trueFalseNext.textContent = exercise.continueLabel || (exercise.buildPages ? "CONTINUE" : "NEXT 8 STATEMENTS");
  els.trueFalseExit.textContent = "EXIT";
  els.trueFalseInstruction.textContent = exercise.instruction || "READ EACH STATEMENT AND MARK IT TRUE OR FALSE.";
  const firstImage = state.trueFalsePages[0]?.imagePath || state.trueFalsePages[0]?.questions?.find((question) => question.imagePath)?.imagePath;
  els.trueFalseVisualPanel.classList.toggle("hidden", !firstImage);
  els.trueFalseCard.classList.toggle("with-visual", Boolean(firstImage));
  if (firstImage) {
    setTrueFalseVisual(firstImage);
  }
  renderTrueFalsePage();
}

function setTrueFalseVisual(imagePath) {
  if (!imagePath) return;
  els.trueFalseVisualBrief.textContent = state.exercise?.visualBrief || "A visual for this statement.";
  els.trueFalseVisualFallback.classList.add("hidden");
  els.trueFalseImage.classList.remove("hidden");
  els.trueFalseImage.alt = state.exercise?.visualBrief || "True or false visual";
  els.trueFalseImage.src = imagePath;
  els.trueFalseVisualPanel.classList.remove("hidden");
  els.trueFalseCard.classList.add("with-visual");
}

function renderTrueFalsePage() {
  const page = state.trueFalsePages[state.trueFalsePageIndex];
  state.trueFalsePageAnswered = 0;
  els.trueFalseProgress.textContent = `${state.trueFalseAnswered} / ${state.trueFalseQuestions.length}`;
  els.trueFalseActions.classList.add("hidden");
  els.trueFalseActionMessage.classList.add("hidden");
  els.trueFalseNext.classList.remove("hidden");
  els.trueFalseExit.classList.add("hidden");
  const pageImage = page.imagePath || page.questions.find((question) => question.imagePath)?.imagePath;
  if (pageImage) setTrueFalseVisual(pageImage);
  els.trueFalseGrid.replaceChildren(...page.questions.map(createTrueFalseRow));
}

function createTrueFalseRow(question) {
  const row = document.createElement("article");
  row.className = "true-false-row";
  row.dataset.answer = question.answer;
  const statement = document.createElement("div");
  statement.className = "true-false-statement";
  if (question.imagePath) {
    const imageButton = document.createElement("button");
    imageButton.type = "button";
    imageButton.className = "true-false-image-button";
    imageButton.textContent = "▣";
    imageButton.setAttribute("aria-label", "Show statement image");
    imageButton.addEventListener("click", () => setTrueFalseVisual(question.imagePath));
    statement.append(imageButton);
  }
  const sentence = document.createElement("p");
  sentence.textContent = question.prompt;
  statement.append(sentence);
  const actions = document.createElement("div");
  actions.className = "true-false-actions";
  const trueButton = document.createElement("button");
  trueButton.type = "button";
  trueButton.className = "true-false-button true-button";
  trueButton.textContent = "✓";
  trueButton.setAttribute("aria-label", "True");
  trueButton.addEventListener("click", () => answerTrueFalse(row, "true"));
  const falseButton = document.createElement("button");
  falseButton.type = "button";
  falseButton.className = "true-false-button false-button";
  falseButton.textContent = "✕";
  falseButton.setAttribute("aria-label", "False");
  falseButton.addEventListener("click", () => answerTrueFalse(row, "false"));
  actions.append(trueButton, falseButton);
  row.append(statement, actions);
  return row;
}

function answerTrueFalse(row, selectedAnswer) {
  if (row.dataset.answered) return;
  row.dataset.answered = "true";
  const isCorrect = selectedAnswer === row.dataset.answer;
  const buttons = [...row.querySelectorAll("button")];
  buttons.forEach((button) => {
    button.disabled = true;
    const buttonAnswer = button.classList.contains("true-button") ? "true" : "false";
    if (buttonAnswer === row.dataset.answer) button.classList.add("correct");
    else if (buttonAnswer === selectedAnswer) button.classList.add("wrong");
  });
  row.classList.add(isCorrect ? "answered-correct" : "answered-wrong");
  row.classList.add(row.dataset.answer === "true" ? "statement-true" : "statement-false");
  if (isCorrect) state.trueFalseScore += 1;
  state.trueFalseAnswered += 1;
  state.trueFalsePageAnswered += 1;
  els.trueFalseScore.textContent = state.trueFalseScore;
  els.trueFalseProgress.textContent = `${state.trueFalseAnswered} / ${state.trueFalseQuestions.length}`;
  playFeedbackSound(isCorrect);
  if (state.trueFalsePageAnswered === state.trueFalsePages[state.trueFalsePageIndex].questions.length) {
    if (state.exercise.maxAnsweredBeforeExit && state.trueFalseAnswered >= state.exercise.maxAnsweredBeforeExit) {
      els.trueFalseActions.classList.remove("hidden");
      els.trueFalseActionMessage.textContent = state.exercise.limitMessage || "There are still lots of different sentences, but it seems it's enough for now. Come back later.";
      els.trueFalseActionMessage.classList.remove("hidden");
      els.trueFalseNext.classList.add("hidden");
      els.trueFalseExit.classList.remove("hidden");
      return;
    }
    if (state.trueFalsePageIndex < state.trueFalsePages.length - 1) {
      els.trueFalseActions.classList.remove("hidden");
      els.trueFalseNext.classList.remove("hidden");
      els.trueFalseExit.classList.remove("hidden");
      return;
    }
    setTimeout(() => {
      hideAllScreens();
      els.exerciseResultScore.textContent = `${state.trueFalseScore} / ${state.trueFalseQuestions.length}`;
      els.exerciseResultMessage.textContent = `${state.trueFalseScore} statements marked correctly.`;
      els.exerciseResult.classList.remove("hidden");
    }, 700);
  }
}

function nextTrueFalsePage() {
  if (state.trueFalsePageIndex >= state.trueFalsePages.length - 1) return;
  state.trueFalsePageIndex += 1;
  renderTrueFalsePage();
}

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

function startPronounSnap(exercise) {
  clearTimeout(state.pronounSnapTimer);
  state.pronounSnapExercise = exercise;
  state.pronounSnapRounds = shuffle(exercise.rounds).slice(0, Math.min(exercise.roundCount || exercise.rounds.length, exercise.rounds.length));
  state.pronounSnapIndex = 0;
  state.pronounSnapScore = 0;
  state.pronounSnapStreak = 0;
  state.pronounSnapBestStreak = 0;
  hideAllScreens();
  els.pronounSnap.classList.remove("hidden");
  els.pronounSnapGrade.textContent = `GRADE ${state.grade} · UNITS ${(exercise.units || [state.module.unit]).join(" + ")}`;
  renderPronounSnapRound();
}

function renderPronounSnapRound() {
  clearTimeout(state.pronounSnapTimer);
  const round = state.pronounSnapRounds[state.pronounSnapIndex];
  if (!round) {
    showPronounSnapResult();
    return;
  }
  state.pronounSnapLocked = false;
  els.pronounSnapProgress.textContent = `${state.pronounSnapIndex + 1} / ${state.pronounSnapRounds.length}`;
  els.pronounSnapTimer.textContent = "2 SECONDS";
  els.pronounSnapScore.textContent = state.pronounSnapScore;
  els.pronounSnapStreak.textContent = state.pronounSnapStreak;
  els.pronounSnapCard.classList.remove("snap-correct", "snap-wrong");
  els.pronounSnapImage.src = round.imagePath;
  els.pronounSnapImage.alt = "Unit 1 vocabulary visual";
  [...els.pronounSnapChoices.children].forEach((button) => {
    button.disabled = false;
    button.classList.remove("correct", "wrong");
  });
  state.pronounSnapTimer = setTimeout(() => advancePronounSnap(false), state.pronounSnapExercise.roundDurationMs);
}

function answerPronounSnap(pronoun, button) {
  if (state.pronounSnapLocked) return;
  state.pronounSnapLocked = true;
  clearTimeout(state.pronounSnapTimer);
  const isCorrect = pronoun === state.pronounSnapRounds[state.pronounSnapIndex].pronoun;
  button.classList.add(isCorrect ? "correct" : "wrong");
  els.pronounSnapCard.classList.add(isCorrect ? "snap-correct" : "snap-wrong");
  playFeedbackSound(isCorrect);
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
  state.pronounSnapIndex += 1;
  state.pronounSnapTimer = setTimeout(renderPronounSnapRound, delay);
}

function showPronounSnapResult() {
  clearTimeout(state.pronounSnapTimer);
  els.pronounSnap.classList.add("hidden");
  els.pronounSnapResultScore.textContent = state.pronounSnapScore;
  els.pronounSnapResultMessage.textContent = `Best streak: ${state.pronounSnapBestStreak}. ${state.pronounSnapRounds.length} Unit 1 + 2 visuals completed.`;
  els.pronounSnapResult.classList.remove("hidden");
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

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
  playFeedbackSound(true);
  updateSortStatus();
  if (state.sortSorted === state.sortBoard.cards.length) setTimeout(showSortResult, 700);
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

function startLuckySpin(exercise) {
  const items = exercise.buildItems?.(state.module) || [];
  if (!items.length) return;
  state.exercise = exercise;
  state.luckyItems = items.map((item, index) => ({ ...item, label: item.label || String(index + 1) }));
  state.luckyRemaining = state.luckyItems.map((_, index) => index);
  state.luckyCurrent = null;
  state.luckyScore = 0;
  state.luckyRotation = 0;
  state.luckySpinning = false;
  clearTimeout(state.luckyTickTimer);
  clearTimeout(state.luckyFinishTimer);
  hideAllScreens();
  els.luckySpin.classList.remove("hidden");
  els.luckySpinGrade.textContent = `GRADE ${state.grade}`;
  els.luckySpinScore.textContent = "0";
  els.luckySpinEnd.classList.add("hidden");
  els.luckySpinJudge.classList.add("hidden");
  els.luckySpinVisualPanel.classList.add("hidden");
  els.luckySpinButton.disabled = false;
  els.luckySpinPrompt.textContent = "Spin the wheel to get a task.";
  renderLuckySpin();
}

function luckySegmentCenterAngle(activeIndex, segmentCount) {
  return -90 + (activeIndex + .5) * (360 / segmentCount);
}

function renderLuckySpin() {
  const remainingCount = state.luckyRemaining.length;
  els.luckySpinProgress.textContent = remainingCount;
  els.luckySpinMeta.textContent = `Remaining sections: ${remainingCount} / ${state.luckyItems.length}`;
  const colors = ["#ffd84d", "#65e6b8", "#6688ff", "#ff8066", "#9f7aea", "#38bdf8", "#f472b6", "#a3e635"];
  const activeItems = state.luckyRemaining.map((itemIndex) => ({
    itemIndex,
    item: state.luckyItems[itemIndex]
  }));
  const size = activeItems.length || 1;
  const gradient = activeItems.map(({ itemIndex }, activeIndex) => {
    const start = (activeIndex / size) * 100;
    const end = ((activeIndex + 1) / size) * 100;
    return `${colors[itemIndex % colors.length]} ${start}% ${end}%`;
  }).join(", ");
  els.luckyWheel.style.background = `conic-gradient(from -90deg, ${gradient})`;
  els.luckyWheel.style.setProperty("--wheel-counter-rotation", `${-state.luckyRotation}deg`);
  els.luckyWheel.style.transform = `rotate(${state.luckyRotation}deg)`;
  els.luckyWheel.replaceChildren(...activeItems.map(({ item }, activeIndex) => {
    const label = document.createElement("span");
    label.className = "lucky-segment-label";
    const segmentAngle = luckySegmentCenterAngle(activeIndex, size);
    label.style.setProperty("--segment-angle", `${segmentAngle}deg`);
    label.style.setProperty("--segment-counter-angle", `${-segmentAngle}deg`);
    label.textContent = item.label || String(activeIndex + 1);
    return label;
  }));
}

function spinLuckyWheel() {
  if (state.luckySpinning || !state.luckyRemaining.length) return;
  state.luckySpinning = true;
  state.luckyCurrent = null;
  els.luckySpinButton.disabled = true;
  els.luckySpinJudge.classList.add("hidden");
  els.luckySpinVisualPanel.classList.add("hidden");
  els.luckySpinPrompt.textContent = "Spinning...";
  const activeSegments = [...state.luckyRemaining];
  const activeTargetIndex = Math.floor(Math.random() * activeSegments.length);
  const targetItemIndex = activeSegments[activeTargetIndex];
  const centerAngle = luckySegmentCenterAngle(activeTargetIndex, activeSegments.length);
  const normalizedRotation = ((state.luckyRotation % 360) + 360) % 360;
  const targetRotation = ((-centerAngle % 360) + 360) % 360;
  state.luckyRotation = state.luckyRotation + 1440 + targetRotation - normalizedRotation;
  startLuckySpinTicks(2500);
  els.luckyWheel.style.setProperty("--wheel-counter-rotation", `${-state.luckyRotation}deg`);
  els.luckyWheel.style.transform = `rotate(${state.luckyRotation}deg)`;
  clearTimeout(state.luckyFinishTimer);
  state.luckyFinishTimer = window.setTimeout(() => finishLuckySpin(targetItemIndex), 2550);
}

function startLuckySpinTicks(duration) {
  clearTimeout(state.luckyTickTimer);
  const startedAt = performance.now();
  const tick = () => {
    const elapsed = performance.now() - startedAt;
    if (elapsed >= duration || !state.luckySpinning) return;
    playLuckyTick();
    const progress = elapsed / duration;
    state.luckyTickTimer = window.setTimeout(tick, 38 + Math.pow(progress, 2.2) * 210);
  };
  tick();
}

function playLuckyTick() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  try {
    state.luckyAudioContext ||= new AudioContext();
    const ctx = state.luckyAudioContext;
    const start = ctx.currentTime;
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(920, start);
    gain.gain.setValueAtTime(.001, start);
    gain.gain.exponentialRampToValueAtTime(.075, start + .006);
    gain.gain.exponentialRampToValueAtTime(.001, start + .045);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start(start);
    oscillator.stop(start + .05);
  } catch {}
}

function finishLuckySpin(targetIndex) {
  clearTimeout(state.luckyTickTimer);
  clearTimeout(state.luckyFinishTimer);
  state.luckySpinning = false;
  state.luckyCurrent = targetIndex;
  const item = state.luckyItems[targetIndex];
  els.luckySpinPrompt.textContent = `${item.prompt} (${item.points || 0} Pts)`;
  els.luckySpinMeta.textContent = "Mark the answer.";
  if (item.imagePath) {
    els.luckySpinImage.src = item.imagePath;
    els.luckySpinVisualPanel.classList.remove("hidden");
  } else {
    els.luckySpinVisualPanel.classList.add("hidden");
  }
  els.luckySpinJudge.classList.remove("hidden");
}

function judgeLuckySpin(isCorrect) {
  if (state.luckyCurrent === null || state.luckySpinning) return;
  const item = state.luckyItems[state.luckyCurrent];
  if (isCorrect) {
    state.luckyScore += item.points || 0;
    els.luckySpinScore.textContent = state.luckyScore;
    showLuckyFloatingText(item.points || 0);
  }
  playFeedbackSound(isCorrect);
  state.luckyRemaining = state.luckyRemaining.filter((index) => index !== state.luckyCurrent);
  state.luckyCurrent = null;
  els.luckySpinJudge.classList.add("hidden");
  els.luckySpinVisualPanel.classList.add("hidden");
  renderLuckySpin();
  if (!state.luckyRemaining.length) {
    els.luckySpinButton.disabled = true;
    els.luckySpinPrompt.textContent = "This wheel is complete.";
    els.luckySpinMeta.textContent = "Great work! No more prompts left.";
    els.luckySpinEndKicker.textContent = "GAME COMPLETE";
    els.luckySpinFinalScore.textContent = `${state.luckyScore} POINTS`;
    els.luckySpinEnd.classList.remove("hidden");
  } else {
    els.luckySpinButton.disabled = false;
    els.luckySpinPrompt.textContent = isCorrect ? "Correct! Spin again." : "Wrong. Spin again.";
    els.luckySpinMeta.textContent = `Remaining sections: ${state.luckyRemaining.length} / ${state.luckyItems.length}`;
  }
}

function showLuckyFloatingText(points) {
  if (!points) return;
  els.luckyFloatingText.textContent = `+${points} POINTS`;
  els.luckyFloatingText.classList.remove("hidden", "show");
  void els.luckyFloatingText.offsetWidth;
  els.luckyFloatingText.classList.add("show");
  window.setTimeout(() => els.luckyFloatingText.classList.add("hidden"), 1100);
}

function openLuckyImageOverlay() {
  const src = els.luckySpinImage.getAttribute("src");
  if (!src || els.luckySpinVisualPanel.classList.contains("hidden")) return;
  els.luckyImageOverlayImage.src = src;
  els.luckyImageOverlay.classList.remove("hidden");
}

function closeLuckyImageOverlay() {
  els.luckyImageOverlay.classList.add("hidden");
  els.luckyImageOverlayImage.removeAttribute("src");
}

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

function renderExerciseQuestion() {
  const question = state.exerciseQuestions[state.exerciseIndex];
  const total = state.exerciseQuestions.length;
  els.exerciseGrade.textContent = `GRADE ${state.grade}`;
  els.exerciseTitle.textContent = state.exercise.title;
  els.exerciseProgress.textContent = `${state.exerciseIndex + 1} / ${total}`;
  els.exerciseProgressBar.style.width = `${((state.exerciseIndex + 1) / total) * 100}%`;
  els.exerciseScore.textContent = state.exerciseScore;
  const visualOnly = Boolean(question.visualOnly);
  const textOnly = Boolean(question.textOnly);
  const wideOptions = Boolean(state.exercise.wideOptions);
  els.exerciseCard.classList.toggle("text-only-choice", textOnly);
  els.exerciseCard.classList.toggle("wide-options-choice", wideOptions);
  els.exerciseVisualPanel.classList.toggle("hidden", textOnly);
  els.exerciseReferenceType.textContent = question.referenceType || "CHOOSE THE CORRECT ARTICLE";
  els.exerciseReferenceType.classList.toggle("hidden", visualOnly);
  els.exerciseWord.textContent = question.word ? question.word.toUpperCase() : "";
  els.exerciseWord.classList.toggle("hidden", visualOnly || textOnly || !question.word);
  els.exercisePrompt.textContent = question.prompt || "";
  els.exercisePrompt.classList.toggle("hidden", visualOnly);
  els.exercisePrompt.classList.toggle("compact-prompt", Boolean(state.exercise.compactPrompt));
  els.exerciseSentence.textContent = question.exerciseSentence || "";
  els.exerciseSentence.classList.toggle("hidden", visualOnly || textOnly);
  els.articleOptions.classList.toggle("sentence-choice-options", visualOnly || textOnly);
  els.articleOptions.classList.toggle("wide-sentence-options", wideOptions);
  els.exerciseFeedback.textContent = visualOnly || textOnly ? "" : question.instruction || "Choose the correct article.";
  els.exerciseFeedback.className = "exercise-feedback";
  els.exerciseNext.disabled = true;
  els.exerciseNext.textContent = state.exerciseIndex === total - 1 ? "SEE RESULT" : "NEXT";
  if (!textOnly) {
    els.exerciseBrief.textContent = question.visualBrief;
    els.exerciseFallback.classList.add("hidden");
    els.exerciseImage.classList.remove("hidden");
    els.exerciseImage.alt = question.visualBrief;
    els.exerciseImage.src = question.imagePath;
  } else {
    els.exerciseImage.removeAttribute("src");
  }
  els.articleOptions.replaceChildren(...question.options.map((article) => {
    const button = document.createElement("button");
    button.className = `article-option${visualOnly || textOnly ? " sentence-choice-option" : ""}`;
    if (visualOnly) {
      button.innerHTML = article.replace(/\b(can't|can|mustn't|must|don't|do)\b/gi, '<mark class="modal-option-word">$1</mark>');
    } else {
      button.textContent = wideOptions ? article : article.toUpperCase();
    }
    button.dataset.article = article;
    button.addEventListener("click", () => answerExercise(article));
    return button;
  }));
}

function answerExercise(article) {
  const question = state.exerciseQuestions[state.exerciseIndex];
  const isCorrect = article === question.answer;
  [...els.articleOptions.children].forEach((button) => {
    button.disabled = true;
    if (button.dataset.article === question.answer) button.classList.add("correct");
    else if (button.dataset.article === article) button.classList.add("wrong");
  });
  if (isCorrect) {
    state.exerciseScore += 1;
    playFeedbackSound(true);
    els.exerciseFeedback.textContent = "Correct!";
    els.exerciseFeedback.className = "exercise-feedback correct";
  } else {
    playFeedbackSound(false);
    els.exerciseFeedback.textContent = `The correct answer is ${question.answer}.`;
    els.exerciseFeedback.className = "exercise-feedback wrong";
  }
  els.exerciseScore.textContent = state.exerciseScore;
  els.exerciseNext.disabled = false;
}

function nextExerciseQuestion() {
  if (state.exerciseIndex === state.exerciseQuestions.length - 1) {
    showExerciseResult();
    return;
  }
  state.exerciseIndex += 1;
  renderExerciseQuestion();
}

function showExerciseResult() {
  hideAllScreens();
  els.exerciseResultScore.textContent = `${state.exerciseScore} / ${state.exerciseQuestions.length}`;
  els.exerciseResultMessage.textContent = `${state.exerciseScore} correct answers out of ${state.exerciseQuestions.length}.`;
  const isRepeatable = Boolean(state.exercise?.repeatable);
  const canContinue = Boolean(isRepeatable && (!state.exercise.hasMoreQuestions || state.exercise.hasMoreQuestions()));
  els.exerciseContinue.classList.toggle("hidden", !canContinue);
  els.exerciseHome.textContent = isRepeatable ? "EXIT" : "BACK TO MENU";
  els.exerciseHome.className = isRepeatable ? "secondary-button" : "primary-button";
  els.exerciseResult.classList.remove("hidden");
}

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen?.().catch(() => {});
}

function enterFullscreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
}

els.image.addEventListener("error", () => {
  els.image.classList.add("hidden");
  els.fallback.classList.remove("hidden");
});
els.image.addEventListener("load", positionPresenceHotspots);
window.addEventListener("resize", positionPresenceHotspots);
els.exerciseImage.addEventListener("error", () => {
  els.exerciseImage.classList.add("hidden");
  els.exerciseFallback.classList.remove("hidden");
});
els.jumbledImage.addEventListener("error", () => {
  els.jumbledImagePanel.classList.add("hidden");
  els.jumbledCard.classList.remove("with-visual");
});
els.trueFalseImage.addEventListener("error", () => {
  els.trueFalseImage.classList.add("hidden");
  els.trueFalseVisualFallback.classList.remove("hidden");
});
els.luckySpinImage.addEventListener("error", () => {
  els.luckySpinVisualPanel.classList.add("hidden");
});
els.start.addEventListener("click", startPresentation);
els.setupExercises.addEventListener("click", openExerciseMenu);
els.presentationExercises.addEventListener("click", openExerciseMenu);
els.back.addEventListener("click", returnToSetup);
els.fullscreen.addEventListener("click", toggleFullscreen);
els.previous.addEventListener("click", previous);
els.next.addEventListener("click", next);
els.timeReveal.addEventListener("click", revealTimeAnswer);
els.timetableReveal.addEventListener("click", revealTimetableAnswer);
els.completeExercises.addEventListener("click", openExerciseMenu);
els.completeHome.addEventListener("click", returnToSetup);
els.exerciseBack.addEventListener("click", returnToSetup);
els.exerciseNext.addEventListener("click", nextExerciseQuestion);
els.exerciseContinue.addEventListener("click", () => {
  if (state.exercise?.activity === "mistake-correct-it") startMistakeCorrectIt(state.exercise);
  else if (state.exercise?.activity === "jumbled-sentences") startJumbledSentences(state.exercise);
  else startChoiceExercise(state.exercise);
});
function returnToPostExerciseSlide() {
  const idx = state.postExerciseIndex;
  state.postExerciseIndex = undefined;
  if (idx >= (state.module?.sentences.length || 0)) {
    showPresentationComplete();
    return;
  }
  state.index = idx;
  const slide = state.module.sentences[idx];
  if (slide?.exerciseObj || slide?.exerciseLink) {
    const ex = slide.exerciseObj || (window.exerciseModules || []).find((e) => e.id === slide.exerciseLink);
    if (ex) {
      state.postExerciseIndex = idx + 1;
      startSelectedExercise(ex);
      return;
    }
  }
  hideAllScreens();
  els.presentation.classList.remove("hidden");
  renderExample();
}
els.exerciseHome.addEventListener("click", () => {
  if (state.postExerciseIndex !== undefined) returnToPostExerciseSlide();
  else returnToSetup();
});
els.fillBlankBack.addEventListener("click", () => {
  if (state.postExerciseIndex !== undefined) returnToPostExerciseSlide();
  else returnToSetup();
});
els.pcBack.addEventListener("click", () => {
  state.postExerciseIndex = undefined;
  returnToSetup();
});
els.pcSkip.addEventListener("click", returnToPostExerciseSlide);
els.pcDone.addEventListener("click", () => {
  if (els.pcDone.dataset.pcAction === "next") advancePcPage();
  else if (state.postExerciseIndex !== undefined) returnToPostExerciseSlide();
  else returnToSetup();
});
els.pcParagraph.addEventListener("click", (e) => {
  if (e.target.classList.contains("inline-choice-popup-option")) setTimeout(checkPcProgress, 30);
});
els.mistakeBack.addEventListener("click", returnToSetup);
els.mistakeCorrect.addEventListener("click", () => answerMistakeDecision(true));
els.mistakeWrong.addEventListener("click", () => answerMistakeDecision(false));
els.mistakeNext.addEventListener("click", nextMistakeQuestion);
els.sortBack.addEventListener("click", returnToSetup);
els.luckySpinBack.addEventListener("click", returnToSetup);
els.luckySpinButton.addEventListener("click", spinLuckyWheel);
els.luckySpinVisualPanel.addEventListener("click", openLuckyImageOverlay);
els.luckyCorrect.addEventListener("click", () => judgeLuckySpin(true));
els.luckyWrong.addEventListener("click", () => judgeLuckySpin(false));
els.luckySpinHome.addEventListener("click", returnToSetup);
els.luckyImageOverlayClose.addEventListener("click", closeLuckyImageOverlay);
els.luckyImageOverlay.addEventListener("click", (event) => {
  if (event.target === els.luckyImageOverlay) closeLuckyImageOverlay();
});
els.exerciseMenuClose.addEventListener("click", () => els.exerciseMenu.classList.add("hidden"));
els.conversationBack.addEventListener("click", returnToSetup);
els.conversationNext.addEventListener("click", renderClubQuiz);
els.clubQuizNext.addEventListener("click", nextConversationRound);
els.jumbledBack.addEventListener("click", returnToSetup);
els.jumbledTiles.addEventListener("dragover", (event) => {
  if (state.draggedJumbledTile) event.preventDefault();
});
els.jumbledTiles.addEventListener("drop", reorderJumbledGap);
els.matchingBack.addEventListener("click", returnToSetup);
els.matchingTimeNext.addEventListener("click", continueMatchingAfterTime);
const closePresenceOverlay = () => {
  els.presenceOverlay.classList.add("hidden");
  els.presenceOverlay.classList.remove("comparison-mode");
  els.presenceOverlayImage.style.aspectRatio = "";
  els.presenceOverlay.querySelector(".presence-overlay-card").classList.remove("overlay-lg");
};
els.presenceOverlayClose.addEventListener("click", closePresenceOverlay);
els.presenceOverlay.addEventListener("click", (e) => { if (e.target === els.presenceOverlay) closePresenceOverlay(); });
els.smBack.addEventListener("click", returnToSetup);
els.smNext.addEventListener("click", () => { state.smBatchIndex++; renderSmBatch(); });
els.trueFalseBack.addEventListener("click", returnToSetup);
els.trueFalseNext.addEventListener("click", nextTrueFalsePage);
els.trueFalseExit.addEventListener("click", returnToSetup);
els.pronounMemoryExit.addEventListener("click", returnToSetup);
els.pronounMemoryExitResult.addEventListener("click", returnToSetup);
els.pronounMemoryRestart.addEventListener("click", () => startPronounMemory(state.pronounMemoryExercise));
els.timeSetterExit.addEventListener("click", returnFromTimeSetter);
els.timeSetterInlineExit.addEventListener("click", returnFromTimeSetter);
els.timeSetterCheck.addEventListener("click", checkTimeSetter);
els.timeSetterHourUp.addEventListener("click", () => adjustTimeSetterHour(1));
els.timeSetterHourDown.addEventListener("click", () => adjustTimeSetterHour(-1));
els.timeSetterMinuteUp.addEventListener("click", () => adjustTimeSetterMinute(5));
els.timeSetterMinuteDown.addEventListener("click", () => adjustTimeSetterMinute(-5));
els.pronounMemoryChoices.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-pronoun]");
  if (button) answerPronounMemory(button.dataset.pronoun, button);
});
els.pronounSnapExit.addEventListener("click", returnToSetup);
els.pronounSnapExitResult.addEventListener("click", returnToSetup);
els.pronounSnapRestart.addEventListener("click", () => startPronounSnap(state.pronounSnapExercise));
els.pronounSnapChoices.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-pronoun]");
  if (button) answerPronounSnap(button.dataset.pronoun, button);
});

renderGrades();
updateSetup();
