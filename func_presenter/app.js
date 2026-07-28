const { functionModules, getUnitsForGrade, getFunctionsForGradeAndUnit } = window.functionRegistry;
const { getExercisesForFunction } = window.exerciseRegistry;

const $ = (id) => document.getElementById(id);
let guessAnimalKeyAudioContext = null;
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
  headerNext: $("headerNextButton"),
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
  guessAnimal: $("guessAnimalScreen"),
  guessAnimalExit: $("guessAnimalExitButton"),
  guessAnimalGrade: $("guessAnimalGradeLabel"),
  guessAnimalTitle: $("guessAnimalTitle"),
  guessAnimalProgress: $("guessAnimalProgressText"),
  guessAnimalScore: $("guessAnimalScore"),
  guessAnimalCard: $("guessAnimalCard"),
  guessAnimalFloatingText: $("guessAnimalFloatingText"),
  guessAnimalSlots: $("guessAnimalSlots"),
  guessAnimalHints: $("guessAnimalHints"),
  guessAnimalGuess: $("guessAnimalGuessButton"),
  guessAnimalHint: $("guessAnimalHintButton"),
  guessAnimalReveal: $("guessAnimalRevealButton"),
  guessAnimalNext: $("guessAnimalNextButton"),
  guessAnimalKeyboardPanel: $("guessAnimalKeyboardPanel"),
  guessAnimalKeyboard: $("guessAnimalKeyboard"),
  guessAnimalFeedback: $("guessAnimalFeedback"),
  verbCard: $("verbCardScreen"),
  possSimon: $("possSimonScreen"),
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
  pcCard: document.querySelector(".pc-card"),
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
  luckyImageOverlayImage: $("luckyImageOverlayImage"),
  room: $("roomScreen"),
  roomBack: $("roomBackButton"),
  roomGrade: $("roomGradeLabel"),
  roomTitle: $("roomTitle"),
  roomProgress: $("roomProgressText"),
  roomImage: $("roomImage"),
  roomHitSvg: $("roomHitSvg"),
  roomFeedback: $("roomFeedback"),
  roomSpeechBubble: $("roomSpeechBubble"),
  roomSentence: $("roomSentence"),
  roomChoices: $("roomChoices"),
  roomNext: $("roomNextButton"),
  roomExit: $("roomExitButton"),
  roomIntroOverlay: $("roomIntroOverlay"),
  roomIntroText: $("roomIntroText"),
  roomIntroOk: $("roomIntroOkButton")
};

// APP-ANCHOR: DOM references and shared UI synchronization.
function syncHeaderNextButton() {
  if (!els.headerNext) return;
  els.headerNext.textContent = els.next.textContent;
  els.headerNext.disabled = els.next.disabled;
  els.headerNext.classList.toggle("hidden", els.next.classList.contains("hidden"));
}

const state = { grade: null, unit: null, module: null, index: 0, showingFunctionIntro: false, exercise: null, exerciseIndex: 0, exerciseScore: 0, exerciseQuestions: [], sortBoard: null, sortSorted: 0, sortMistakes: 0, selectedSortCard: null, draggedSortCard: null, conversationRounds: [], conversationIndex: 0, conversationScore: 0, jumbledQuestions: [], jumbledIndex: 0, jumbledScore: 0, jumbledLives: 3, jumbledLivesMax: 3, draggedJumbledTile: null, jumbledSolved: false, jumbledTimer: null, matchingBatches: [], matchingBatchIndex: 0, matchingBatchMatched: 0, matchingScore: 0, selectedMatchingSentence: null, matchingStartedAt: null, matchingElapsedMs: 0, trueFalseQuestions: [], trueFalseAnswered: 0, trueFalseScore: 0, trueFalsePageIndex: 0, trueFalsePageAnswered: 0, trueFalsePages: [], pronounMemoryExercise: null, pronounMemoryLevel: 0, pronounMemoryScore: 0, pronounMemorySequence: [], pronounMemoryIndex: 0, pronounMemoryTimer: null, pronounMemoryAnswerTimer: null, pronounMemoryLocked: false, pronounSnapExercise: null, pronounSnapRounds: [], pronounSnapIndex: 0, pronounSnapScore: 0, pronounSnapStreak: 0, pronounSnapBestStreak: 0, pronounSnapTimer: null, pronounSnapTotalTimer: null, pronounSnapDeadline: 0, pronounSnapAnswered: 0, pronounSnapLocked: false, timeSetterExercise: null, timeSetterTarget: null, timeSetterHour: 12, timeSetterMinute: 0, timeSetterScore: 0, timeSetterRound: 1, timeSetterLocked: false, timeSetterAdvanceTimer: null, fillBlankQuestions: [], fillBlankRevealed: 0, mistakeQuestions: [], mistakeIndex: 0, mistakeScore: 0, mistakeLocked: false, guessAnimalQuestions: [], guessAnimalIndex: 0, guessAnimalScore: 0, guessAnimalHintIndex: 0, guessAnimalInput: "", guessAnimalLocked: false, luckyItems: [], luckyRemaining: [], luckyCurrent: null, luckyScore: 0, luckyRotation: 0, luckySpinning: false, luckyTickTimer: null, luckyFinishTimer: null, luckyAudioContext: null, exerciseReturnScreen: "setup", pcPages: [], pcPageIndex: 0, pcOverallCorrect: 0, pcTotalChoices: 0, pcCurrentPageCorrect: 0, smBatchIndex: 0, smMatched: 0, smSelectedDescId: null, smScore: 0, visitedPresenceButtons: new Set() };

// APP-ANCHOR: Shared presentation and exercise state.
let feedbackAudio = null;
let presenceHotspotPoints = [];
let presenceHoverNameTagPoint = null;
let timeStepAudio = null;
let roomState = null;
let roomActiveSentenceEl = null;
const ROOM_DEBUG_HITAREAS = false; // draw hit-area outlines while calibrating rooms; flip to true to recalibrate

// APP-ANCHOR: Character room and room-dialogue interaction. Implemented in presentation-engines/character-room.js.
// APP-ANCHOR: Grade, unit, function selection, and setup flow.
function renderGrades() {
  const available = new Set(functionModules.map((module) => module.grade));
  els.grades.replaceChildren(...[5, 6, 7, 8].map((grade) => {
    const button = document.createElement("button");
    const isAvailable = available.has(grade);
    button.className = `grade-button grade-visual${isAvailable ? "" : " placeholder"}`;
    button.dataset.value = grade;
    button.innerHTML = `<img src="images/main/grade${grade}.webp" alt="Grade ${grade}"><strong class="opt-number">${grade}</strong>`;
    if (isAvailable) button.addEventListener("click", () => selectGrade(grade));
    return button;
  }));
}

function setSetupStep(step) {
  document.getElementById("setupCard").dataset.step = step;
}

function selectGrade(grade) {
  enterFullscreen();
  if (state.grade === grade) { setSetupStep("unit"); return; }
  state.grade = grade;
  state.unit = null;
  state.module = null;
  [...els.grades.children].forEach((button) => button.classList.toggle("selected", Number(button.dataset.value) === grade));
  renderUnits();
  renderFunctions();
  updateSetup();
  setSetupStep("unit");
}

const UNIT_THEMES = {
  5: {
    1: "School Life",
    2: "Classroom Life",
    3: "Personal Life",
    4: "Family Life",
    5: "Life in the Neighbourhood & City",
    6: "Life in the World",
    7: "Life in Nature",
    8: "Life in the Universe & Future"
  }
};

function renderUnits() {
  const units = state.grade ? getUnitsForGrade(state.grade) : [];
  els.units.replaceChildren(...units.map((unit) => {
    const button = document.createElement("button");
    button.className = "grade-button";
    button.dataset.value = unit;
    const theme = UNIT_THEMES[state.grade]?.[unit];
    button.innerHTML = `<span class="opt-kicker">UNIT</span><strong class="opt-number">${unit}</strong>${theme ? `<small class="opt-theme">${theme}</small>` : ""}`;
    button.addEventListener("click", () => selectUnit(unit));
    return button;
  }));
}

function selectUnit(unit) {
  if (state.unit === unit) { setSetupStep("function"); return; }
  state.unit = unit;
  state.module = null;
  [...els.units.children].forEach((button) => button.classList.toggle("selected", Number(button.dataset.value) === unit));
  renderFunctions();
  updateSetup();
  setSetupStep("function");
}

function renderFunctions() {
  const modules = state.grade && state.unit ? getFunctionsForGradeAndUnit(state.grade, state.unit) : [];
  els.functions.replaceChildren(...modules.map((module, index) => {
    const button = document.createElement("button");
    button.className = "function-button";
    button.innerHTML = `<span>GRAMMAR FUNCTION ${String(index + 1).padStart(2, "0")}</span><strong>${module.title}</strong>${module.description ? `<small>${module.description}</small>` : ""}<em class="fn-arrow" aria-hidden="true">→</em>`;
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

// APP-ANCHOR: Presentation intro and slide rendering. Implemented in presentation-engines/presentation-slides.js.
// APP-ANCHOR: Personality hub state, trait cards, and character overlays. Implemented in presentation-engines/personality-hub.js.
// APP-ANCHOR: Timetable/time reveal and generic overlay-content helpers.
// Timetable and telling-time reveal helpers are implemented in presentation-engines/timetable.js.

// Generic overlay-content helpers are implemented in presentation-engines/presentation-overlays.js.
// APP-ANCHOR: Presence rows, hubs, visual annotations, and inline choices.
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

function getPresenceVisitedKey(example, item, index) {
  if (item.disableVisitedTick || item.kind !== "category-list") return "";
  const slideKey = example.id || `${state.module.id || "module"}:${state.index}`;
  const itemKey = item.id || item.targetId || item.visitKey || (item.parts || []).map((part) => part.text || "").join("").trim() || index;
  return `${state.module.id || "module"}::${slideKey}::${itemKey}`;
}

function markPresenceButtonVisited(row) {
  const key = row.dataset.visitedKey;
  if (!key) return;
  state.visitedPresenceButtons.add(key);
  row.classList.add("visited");
  row.setAttribute("aria-pressed", "true");
}

function createCategoryHubOptionButton(item) {
  const button = document.createElement("button");
  button.className = "count-noun-item";
  button.type = "button";
  button.textContent = item.label;
  button.addEventListener("click", () => {
    clearCountNounRepeatVisual();
    els.fallback.classList.add("hidden");
    if (item.repeatImagePath && item.repeatCount) {
      els.image.classList.add("hidden");
      showCountNounRepeatVisual(item.repeatImagePath, item.repeatCount, item.visualBrief || item.label);
    } else {
      els.image.classList.remove("hidden");
      els.image.src = item.imagePath;
      els.image.alt = item.visualBrief || item.label;
    }
    els.brief.textContent = item.visualBrief || item.label;
    updateCountNounCaption(item.caption || "");
    document.querySelectorAll(".count-noun-item").forEach((option) => option.classList.remove("active"));
    button.classList.add("active");
  });
  return button;
}

function highlightCountNounCaption(text = "") {
  return text.replace(/<(how many|how much|is there|are there|some|any|a few|many|a little|much|a lot of|is|are|isn't|aren't)>/gi, '<span class="presence-yellow">$1</span>');
}

function updateCountNounCaption(text = "") {
  clearCountNounCaption();
  if (!text) return;
  const caption = document.createElement("div");
  caption.id = "countNounVisualCaption";
  caption.className = "count-noun-visual-caption";
  if (typeof text === "object") {
    caption.classList.add("stacked");
    const question = document.createElement("p");
    question.innerHTML = highlightCountNounCaption(text.question || "");
    const answer = document.createElement("p");
    answer.className = "hidden";
    answer.innerHTML = highlightCountNounCaption(text.answer || "");
    const next = document.createElement("button");
    next.type = "button";
    next.className = "count-noun-caption-next";
    next.textContent = "CONTINUE";
    next.addEventListener("click", () => {
      answer.classList.remove("hidden");
      next.remove();
    });
    caption.append(question, next, answer);
  } else {
    caption.innerHTML = highlightCountNounCaption(text);
  }
  els.exampleVisualPanel.append(caption);
}

function clearCountNounRepeatVisual() {
  document.getElementById("countNounRepeatVisual")?.remove();
}

function showCountNounRepeatVisual(imagePath, count, altText = "") {
  clearCountNounRepeatVisual();
  const wrap = document.createElement("div");
  wrap.id = "countNounRepeatVisual";
  wrap.className = "count-noun-repeat-visual";
  wrap.setAttribute("aria-label", altText);
  Array.from({ length: count }).forEach((_, index) => {
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = index === 0 ? altText : "";
    wrap.append(img);
  });
  els.exampleVisualPanel.append(wrap);
}

function clearExerciseRepeatVisual() {
  document.getElementById("exerciseRepeatVisual")?.remove();
}

function clearExerciseVisualCaption() {
  document.getElementById("exerciseVisualCaption")?.remove();
}

function showExerciseVisualCaption(html = "") {
  clearExerciseVisualCaption();
  if (!html) return;
  const caption = document.createElement("div");
  caption.id = "exerciseVisualCaption";
  caption.className = "exercise-visual-caption";
  caption.innerHTML = html;
  els.exerciseVisualPanel.append(caption);
}

function showExerciseRepeatVisual(imagePath, count, altText = "") {
  clearExerciseRepeatVisual();
  const wrap = document.createElement("div");
  wrap.id = "exerciseRepeatVisual";
  wrap.className = "exercise-repeat-visual";
  wrap.setAttribute("aria-label", altText);
  Array.from({ length: count }).forEach((_, index) => {
    const img = document.createElement("img");
    img.src = imagePath;
    img.alt = index === 0 ? altText : "";
    wrap.append(img);
  });
  els.exerciseVisualPanel.append(wrap);
}

function renderCategoryHub(example) {
  const hub = example.categoryHub;
  if (!hub) return false;
  updateCountNounCaption("");
  const showCategoryHoverImage = (imagePath, visualBrief = "") => {
    const targetImage = imagePath || example.imagePath;
    if (!targetImage) return;
    clearCountNounRepeatVisual();
    els.fallback.classList.add("hidden");
    els.image.classList.remove("hidden");
    els.image.src = targetImage;
    els.image.alt = visualBrief || "Category visual";
    els.brief.textContent = visualBrief || "Category visual";
    updateCountNounCaption("");
  };
  const wrap = document.createElement("div");
  wrap.className = "count-noun-hub";

  const countableSide = document.createElement("div");
  countableSide.className = "count-noun-side countable-side";
  const countableOptions = document.createElement("div");
  countableOptions.className = "count-noun-options hidden";
  (hub.countable || []).forEach((item) => countableOptions.append(createCategoryHubOptionButton(item)));
  const countableButton = document.createElement("button");
  countableButton.className = "count-noun-main countable-main";
  countableButton.type = "button";
  countableButton.textContent = "COUNTABLE";
  countableButton.addEventListener("click", () => {
    countableOptions.classList.remove("hidden");
    uncountableOptions.classList.add("hidden");
    countableButton.classList.add("active");
    uncountableButton.classList.remove("active");
    showCategoryHoverImage(hub.countableHoverImage, "Countable nouns.");
  });
  countableSide.append(countableOptions, countableButton);

  const uncountableSide = document.createElement("div");
  uncountableSide.className = "count-noun-side uncountable-side";
  const uncountableButton = document.createElement("button");
  uncountableButton.className = "count-noun-main uncountable-main";
  uncountableButton.type = "button";
  uncountableButton.textContent = "UNCOUNTABLE";
  uncountableButton.addEventListener("click", () => {
    uncountableOptions.classList.remove("hidden");
    countableOptions.classList.add("hidden");
    uncountableButton.classList.add("active");
    countableButton.classList.remove("active");
    showCategoryHoverImage(hub.uncountableHoverImage, "Uncountable nouns.");
  });
  const uncountableOptions = document.createElement("div");
  uncountableOptions.className = "count-noun-options hidden";
  (hub.uncountable || []).forEach((item) => uncountableOptions.append(createCategoryHubOptionButton(item)));
  uncountableSide.append(uncountableButton, uncountableOptions);

  wrap.append(countableSide, uncountableSide);
  els.presenceView.append(wrap);
  return true;
}

function highlightPieText(text = "") {
  return text.replace(/<(how many|how much|is there|are there|some|any)>/gi, '<span class="presence-yellow">$1</span>');
}

function renderPieDialogue(example) {
  const data = example.pieDialogue;
  if (!data) return false;
  const wrap = document.createElement("div");
  wrap.className = "pie-dialogue-panel";
  const bubbles = document.createElement("div");
  bubbles.className = "pie-bubble-stack";
  const topBubble = document.createElement("p");
  topBubble.className = "pie-speech-bubble top hidden";
  const bottomBubble = document.createElement("p");
  bottomBubble.className = "pie-speech-bubble bottom hidden";
  const continueButton = document.createElement("button");
  continueButton.type = "button";
  continueButton.className = "primary-button pie-dialogue-next";
  continueButton.textContent = "CONTINUE";
  bubbles.append(topBubble, continueButton, bottomBubble);
  const choices = document.createElement("div");
  choices.className = "pie-inline-choices hidden";
  wrap.append(bubbles, choices);
  els.presenceView.append(wrap);

  const dialogues = data.dialogues || [];
  let dialogueIndex = 0;
  let phase = "question";
  const showQuestion = () => {
    const current = dialogues[dialogueIndex];
    topBubble.innerHTML = highlightPieText(current.question);
    topBubble.classList.remove("hidden");
    bottomBubble.classList.add("hidden");
    bottomBubble.textContent = "";
    continueButton.classList.remove("hidden");
    phase = "answer";
  };
  const showAnswer = () => {
    const current = dialogues[dialogueIndex];
    bottomBubble.innerHTML = highlightPieText(current.answer);
    bottomBubble.classList.remove("hidden");
    phase = "next-question";
  };
  const showInlineChoices = () => {
    bubbles.classList.add("hidden");
    choices.classList.remove("hidden");
    choices.replaceChildren(...(data.choices || []).map((sentence) => {
      const p = document.createElement("p");
      p.className = "inline-choice-prompt pie-inline-choice";
      p.append(...createInlineChoiceParts(sentence.segments || []));
      return p;
    }));
  };

  continueButton.addEventListener("click", () => {
    if (phase === "answer") {
      showAnswer();
      return;
    }
    dialogueIndex++;
    if (dialogueIndex < dialogues.length) showQuestion();
    else showInlineChoices();
  });
  showQuestion();
  return true;
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
  if (example.personalityHub) {
    renderPersonalityHubControls(example);
    return;
  }
  if (renderCategoryHub(example)) return;
  if (renderPieDialogue(example)) return;
  const list = document.createElement("div");
  list.className = `presence-list ${example.listClass || ""}`;
  const shouldReplaceCurrentItem = Boolean(example.replaceCurrentItem || (state.module?.id === "object-pronouns" && !example.showAllItems));
  list.dataset.replaceCurrentItem = shouldReplaceCurrentItem ? "true" : "";
  if (example.defaultFlow || example.flow) list.dataset.defaultPresenceFlow = example.defaultFlow || example.flow;
  const items = example.shuffleItems ? shuffle(example.items || []) : (example.items || []);
  items.forEach((item, index) => {
    const row = document.createElement("section");
    row.className = `presence-row ${item.kind || "statement"}`;
    const visitedKey = getPresenceVisitedKey(example, item, index);
    if (visitedKey) {
      row.dataset.visitedKey = visitedKey;
      row.setAttribute("aria-pressed", state.visitedPresenceButtons.has(visitedKey) ? "true" : "false");
      if (state.visitedPresenceButtons.has(visitedKey)) row.classList.add("visited");
    }
    if (item.targetId) {
      row.classList.add("clickable");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.addEventListener("click", () => {
        markPresenceButtonVisited(row);
          goToSlideById(item.targetId);
      });
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          markPresenceButtonVisited(row);
          goToSlideById(item.targetId);
        }
      });
    }
    if (item.swapImage) {
      row.classList.add("clickable");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.addEventListener("click", () => {
        markPresenceButtonVisited(row);
          els.image.src = item.swapImage;
      });
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          markPresenceButtonVisited(row);
          els.image.src = item.swapImage;
        }
      });
    }
    if (item.toggleImages) {
      let togIdx = 0;
      row.classList.add("clickable");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      const doToggle = () => {
        markPresenceButtonVisited(row);
        togIdx = (togIdx + 1) % item.toggleImages.length;
        els.image.src = item.toggleImages[togIdx];
      };
      row.addEventListener("click", doToggle);
      row.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); doToggle(); } });
    }
    if (item.revealSentence && !item.revealButton) {
      row.classList.add("clickable");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.addEventListener("click", () => {
        playFeedbackSound(true);
        markPresenceButtonVisited(row);
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
        markPresenceButtonVisited(row);
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
      row.addEventListener("click", () => {
        markPresenceButtonVisited(row);
          openPresenceOverlay(item.overlayData);
      });
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          markPresenceButtonVisited(row);
          openPresenceOverlay(item.overlayData);
        }
      });
    }
    if (item.room) {
      row.classList.add("clickable");
      row.tabIndex = 0;
      row.setAttribute("role", "button");
      row.addEventListener("click", () => {
        markPresenceButtonVisited(row);
          openCharacterRoom(item.room, state.index);
      });
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          markPresenceButtonVisited(row);
          openCharacterRoom(item.room, state.index);
        }
      });
    }
    if (item.nameTag) {
      const label = item.nameTag.label || (item.parts || []).map((part) => part.text || "").join("").trim();
      const point = { ...item.nameTag, label };
      row.addEventListener("mouseenter", () => showPresenceHoverNameTag(point));
      row.addEventListener("focus", () => showPresenceHoverNameTag(point));
      row.addEventListener("mouseleave", clearPresenceHoverNameTag);
      row.addEventListener("blur", clearPresenceHoverNameTag);
    }
    if (index > 0 && !example.showAllItems) row.classList.add("hidden");
    row.dataset.presenceIndex = index;
    if (item.fontSize) row.style.setProperty("--presence-item-font-size", item.fontSize);
    if (item.letterSpacing) row.style.setProperty("--presence-item-letter-spacing", item.letterSpacing);
    if (item.clearPreviousOnShow) row.dataset.clearPreviousOnShow = "true";
    if (item.flow) row.dataset.presenceFlow = item.flow;
    if (item.titleOverride) row.dataset.titleOverride = item.titleOverride;
    if (item.imagePathOnShow) row.dataset.imagePathOnShow = item.imagePathOnShow;
    if (item.speechText) row.dataset.speechText = item.speechText;
    if (item.speakerName) row.dataset.speakerName = item.speakerName;
    if (example.hotspotMode && item.hotspots) {
      row.classList.add("hotspot-step", "pending-hotspot");
      row.dataset.hotspots = JSON.stringify(item.hotspots);
    }
    if (item.pauseAfterReveal) row.dataset.pauseAfterReveal = "true";
    const promptLine = document.createElement("div");
    promptLine.className = `presence-prompt-line ${item.kind === "replace-choice" ? "replace-prompt-line" : ""}`;
    if (item.kind === "inline-choice") {
      const prompt = document.createElement("p");
      prompt.className = `presence-prompt inline-choice-prompt ${item.speakerImage ? "speaker-line" : ""}`;
      applyPresencePromptStyle(prompt, item);
      if (item.speakerImage) {
        const head = document.createElement("img");
        head.className = "speaker-head";
        head.src = item.speakerImage;
        head.alt = item.speaker || "";
        const textWrap = document.createElement("span");
        textWrap.className = "speaker-line-text";
        textWrap.append(...createInlineChoiceParts(item.segments || []));
        prompt.append(head, textWrap);
      } else {
        prompt.append(...createInlineChoiceParts(item.segments || []));
      }
      promptLine.append(prompt);
    } else if (item.kind === "replace-choice") {
      const source = document.createElement("p");
      source.className = "presence-prompt replace-source";
      applyPresencePromptStyle(source, item);
      source.innerHTML = renderPresenceParts(item.sourceParts || []);
      const arrow = document.createElement("span");
      arrow.className = "replace-arrow";
      arrow.textContent = "->";
      const target = document.createElement("p");
      target.className = "presence-prompt replace-target";
      applyPresencePromptStyle(target, item);
      target.innerHTML = renderPresenceParts(item.targetParts || []);
      promptLine.append(source, arrow, target);
    } else if (item.speakerImage) {
      const prompt = document.createElement("p");
      prompt.className = "presence-prompt speaker-line";
      applyPresencePromptStyle(prompt, item);
      const head = document.createElement("img");
      head.className = "speaker-head";
      head.src = item.speakerImage;
      head.alt = item.speaker || "";
      const textWrap = document.createElement("span");
      textWrap.className = "speaker-line-text";
      appendPresenceParts(textWrap, item.parts || [{ text: item.text || "" }]);
      prompt.append(head, textWrap);
      promptLine.append(prompt);
    } else {
      const prompt = document.createElement("p");
      prompt.className = "presence-prompt";
      applyPresencePromptStyle(prompt, item);
      if (example.hotspotMode && item.hotspots) prompt.classList.add("hidden");
      appendPresenceParts(prompt, item.parts || [{ text: item.text || "" }]);
      promptLine.append(prompt);
    }
    if (item.imageButton && item.imagePathOnShow) {
      const imageButton = document.createElement("button");
      imageButton.className = "presence-icon-button";
      imageButton.type = "button";
      imageButton.textContent = item.imageButtonLabel || "IMG";
      imageButton.setAttribute("aria-label", "Show image");
      imageButton.addEventListener("click", (event) => {
        event.stopPropagation();
        els.image.src = item.imagePathOnShow;
        if (item.visualBrief) els.visualBrief.textContent = item.visualBrief;
      });
      promptLine.append(imageButton);
    }
    if (item.revealButton && item.revealSentence) {
      const reveal = document.createElement("button");
      reveal.className = "primary-button presence-reveal presence-inline-reveal";
      reveal.type = "button";
      reveal.textContent = item.revealButtonLabel || "REVEAL";
      reveal.addEventListener("click", (event) => {
        event.stopPropagation();
        if (row.classList.contains("revealed")) return;
        playFeedbackSound(true);
        const hl = (s) => s.replace(/<([^>]+)>/g, '<span class="freq-highlight">$1</span>');
        const prompt = row.querySelector(".presence-prompt");
        if (prompt) prompt.innerHTML = hl(item.revealSentence);
        row.classList.add("revealed");
        reveal.disabled = true;
      });
      promptLine.append(reveal);
    }
    if (index < items.length - 1 && !example.showAllItems && item.nextButton !== false) {
      const nextButton = document.createElement("button");
      nextButton.className = "presence-next";
      nextButton.type = "button";
      if ((example.listClass || "").split(/\s+/).includes("simple-past-choice-list")) {
        nextButton.classList.add("presence-next-word");
        nextButton.textContent = item.nextButtonLabel || "NEXT";
      } else {
        nextButton.textContent = item.nextButtonLabel || "›";
      }
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
      appendPresenceParts(answer, item.answerParts);
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
  const firstVisibleRow = list.querySelector(".presence-row:not(.hidden)");
  if (firstVisibleRow?.dataset.imagePathOnShow || firstVisibleRow?.dataset.speechText || firstVisibleRow?.dataset.speakerName) {
    applyPresenceRowImage(firstVisibleRow);
  }
  speakPresenceRow(firstVisibleRow);
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
          applyNextPlanCheckRowImage(row);
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

function parseInlineChoiceSentence(raw = "") {
  const segments = [];
  const pattern = /<<([^<>]+)>|<([^<>]+)>>/g;
  let lastIndex = 0;
  let match;
  while ((match = pattern.exec(raw)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ text: raw.slice(lastIndex, match.index) });
    }
    const leftIsCorrect = Boolean(match[1]);
    const options = (match[1] || match[2] || "").split("/").map((option) => option.trim()).filter(Boolean);
    if (options.length >= 2) {
      segments.push({ options, answer: leftIsCorrect ? options[0] : options[1] });
    } else {
      segments.push({ text: match[0] });
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < raw.length) {
    segments.push({ text: raw.slice(lastIndex) });
  }
  return segments;
}

function applyPresencePromptStyle(prompt, item = {}) {
  if (item.fontSize) prompt.style.fontSize = item.fontSize;
  if (item.letterSpacing) prompt.style.letterSpacing = item.letterSpacing;
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

function clearPresenceHoverNameTag() {
  presenceHoverNameTagPoint = null;
  document.getElementById("visualHoverNameTag")?.remove();
}

function clearCountNounCaption() {
  document.getElementById("countNounVisualCaption")?.remove();
}

function clearVisualAnnotations() {
  document.getElementById("visualSpeechBubble")?.remove();
  document.getElementById("visualNameCaption")?.remove();
  clearPresenceHoverNameTag();
  clearCountNounCaption();
  clearCountNounRepeatVisual();
}

function updateVisualAnnotations({ speechText = "", speakerName = "" } = {}) {
  clearVisualAnnotations();
  if (speechText) {
    const bubble = document.createElement("div");
    bubble.id = "visualSpeechBubble";
    bubble.className = "visual-speech-bubble";
    bubble.textContent = speechText;
    els.exampleVisualPanel.append(bubble);
  }
  if (speakerName) {
    const caption = document.createElement("div");
    caption.id = "visualNameCaption";
    caption.className = "visual-name-caption";
    caption.textContent = speakerName;
    els.exampleVisualPanel.append(caption);
  }
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

function showPresenceHoverNameTag(point) {
  if (!point || typeof point.x !== "number" || typeof point.y !== "number") return;
  clearPresenceHoverNameTag();
  presenceHoverNameTagPoint = point;
  const tag = document.createElement("div");
  tag.id = "visualHoverNameTag";
  tag.className = "visual-hover-nametag";
  tag.textContent = point.label || "";
  els.exampleVisualPanel.append(tag);
  requestAnimationFrame(positionPresenceHoverNameTag);
}

function positionPresenceHoverNameTag() {
  const tag = document.getElementById("visualHoverNameTag");
  if (!tag || !presenceHoverNameTagPoint || els.image.classList.contains("hidden")) return;
  const imageRect = els.image.getBoundingClientRect();
  const panelRect = els.exampleVisualPanel.getBoundingClientRect();
  const baseWidth = presenceHoverNameTagPoint.baseWidth || 500;
  const baseHeight = presenceHoverNameTagPoint.baseHeight || 500;
  tag.style.left = `${imageRect.left - panelRect.left + (presenceHoverNameTagPoint.x / baseWidth) * imageRect.width}px`;
  tag.style.top = `${imageRect.top - panelRect.top + (presenceHoverNameTagPoint.y / baseHeight) * imageRect.height}px`;
}

function applyPresenceRowTitleOverride(row) {
  if (!row?.dataset.titleOverride) return;
  const title = els.presenceView.querySelector(".presence-title");
  if (title) title.textContent = row.dataset.titleOverride;
}

function applyPresenceRowImage(row) {
  if (!row) return;
  if (row.dataset.imagePathOnShow) {
    els.fallback.classList.add("hidden");
    els.image.classList.remove("hidden");
    els.image.src = row.dataset.imagePathOnShow;
  }
  updateVisualAnnotations({
    speechText: row.dataset.speechText || "",
    speakerName: row.dataset.speakerName || ""
  });
}

function applyNextPlanCheckRowImage(row) {
  const list = row?.closest(".going-to-plan-check-list");
  if (!list) return;
  const currentIndex = Number(row.dataset.presenceIndex);
  if (!Number.isFinite(currentIndex)) return;
  const nextRow = list.querySelector(`[data-presence-index="${currentIndex + 1}"]`);
  if (nextRow?.dataset.imagePathOnShow) applyPresenceRowImage(nextRow);
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
  applyPresenceAdvanceVisibility(list, currentRow, nextRow);
  nextRow.classList.remove("hidden");
  applyPresenceRowTitleOverride(nextRow);
  applyPresenceRowImage(nextRow);
  showPresenceHotspots(readRowHotspots(nextRow));
  speakPresenceRow(nextRow);
}

function showNextPresenceRow(list, currentIndex) {
  const nextRow = list.querySelector(`[data-presence-index="${currentIndex + 1}"]`);
  if (!nextRow) return;
  const currentRow = list.querySelector(`[data-presence-index="${currentIndex}"]`);
  applyPresenceAdvanceVisibility(list, currentRow, nextRow);
  nextRow.classList.remove("hidden");
  applyPresenceRowTitleOverride(nextRow);
  applyPresenceRowImage(nextRow);
  showPresenceHotspots(readRowHotspots(nextRow));
  speakPresenceRow(nextRow);
  const nextButton = list.querySelector(`[data-presence-index="${currentIndex}"] .presence-next`);
  if (nextButton) nextButton.classList.add("hidden");
}

function applyPresenceAdvanceVisibility(list, currentRow, nextRow) {
  const flow = nextRow?.dataset.presenceFlow || list.dataset.defaultPresenceFlow || "";
  if (flow === "append") return;
  if (flow === "replace-all" || nextRow?.dataset.clearPreviousOnShow === "true") {
    [...list.querySelectorAll(".presence-row")].forEach((row) => row.classList.add("hidden"));
    return;
  }
  if (flow === "replace-current" || list.dataset.replaceCurrentItem === "true") {
    currentRow?.classList.add("hidden");
  }
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
  const prompt = row.querySelector(".presence-prompt");
  if (prompt?.textContent.includes("____")) {
    prompt.innerHTML = prompt.innerHTML.replace("____", `<span class="presence-yellow">${answer}</span>`);
  }
  if (!isCorrect) button.classList.add("wrong");
  enablePresenceNext(row);
  playFeedbackSound(isCorrect);
}

// APP-ANCHOR: Presentation navigation and completion lifecycle.
function goToSlideById(targetId) {
  const targetIndex = state.module?.sentences.findIndex((sentence) => sentence.id === targetId);
  if (targetIndex == null || targetIndex < 0) return;
  state.index = targetIndex;
  renderExample();
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
  clearInterval(state.pronounSnapTotalTimer);
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

// APP-ANCHOR: Exercise registry routing and exercise entry screen.
function openExerciseMenu() {
  if (!state.module) return;
  state.exerciseReturnScreen = !els.presentation.classList.contains("hidden")
    ? "presentation"
    : !els.complete.classList.contains("hidden")
    ? "complete"
    : "setup";
  const isStudentMode = sessionStorage.getItem("fpStudentMode") === "1";
  const exercises = getExercisesForFunction(state.module)
    .filter((exercise) => !isStudentMode || exercise.activity !== "lucky-spin");
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
      "quantity-snap": "Choose the quantity before the picture changes.",
      "time-setter": "Set the digital clock to match the target time.",
      "fill-blank": "Tap each blank to reveal the correct answer.",
      "mistake-correct-it": "Decide if the sentence is correct. If not, find the mistake.",
      "paragraph-choice": "Choose the correct word for each blank in the paragraph.",
      "guess-animal": "Use the hints and keyboard to guess the animal.",
      "lucky-spin": "Spin the wheel, complete the speaking task, and score points.",
      "possessive-adjectives-simon-says": "Listen to the voice commands and click the correct body part in order."
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
    case "quantity-snap":
      startPronounSnap(exercise);
      return;
    case "time-setter":
      startTimeSetter(exercise);
      return;
    case "fill-blank":
      startFillBlank(exercise);
      return;
    case "word-bank-fill-blank":
      startWordBankFillBlank(exercise);
      return;
    case "mistake-correct-it":
      startMistakeCorrectIt(exercise);
      return;
    case "guess-animal":
      startGuessAnimal(exercise);
      return;
    case "simple-past-verb-cards":
      window.startSimplePastVerbCards?.(exercise, { state, hideAllScreens, returnToSetup });
      return;
    case "possessive-adjectives-simon-says":
      window.startPossessiveAdjectivesSimonSays?.(exercise, { state, hideAllScreens, returnToSetup });
      return;
    case "simple-past-memory-chain":
      window.startSimplePastMemoryChain?.(exercise, { state, hideAllScreens, returnToSetup });
      return;
    case "simple-past-choice":
      window.startSimplePastChoice?.(exercise, { state, hideAllScreens, returnToSetup });
      return;
    case "paragraph-choice":
      startParagraphChoice(exercise);
      return;
    case "student-match":
      startStudentMatch(exercise);
      return;
    case "character-hub-popup":
      startCharacterHubPopup(exercise);
      return;
    case "lucky-spin":
      startLuckySpin(exercise);
      return;
    case "mini-game":
      startMiniGame(exercise);
      return;
    default:
      startChoiceExercise(exercise);
  }
}

function startMiniGame(exercise) {
  const targetUrl = exercise.url || exercise.href;
  if (!targetUrl) {
    console.warn("Mini-game exercise is missing a URL.", exercise);
    return;
  }
  try {
    if (exercise.gameConfig) {
      sessionStorage.setItem("funcPresenterMiniGameConfig", JSON.stringify(exercise.gameConfig));
    }
  } catch (error) {
    console.warn("Could not save mini-game config.", error);
  }
  window.location.href = targetUrl;
}

function resetExerciseResultActions() {
  els.exerciseContinue.classList.add("hidden");
  els.exerciseHome.textContent = "BACK TO MENU";
  els.exerciseHome.className = "primary-button";
}

// APP-ANCHOR: Paragraph-choice and personality matching exercises. Implemented in exercise-engines/paragraph-choice.js.
// APP-ANCHOR: Character matching, memory, and snap exercise flows. Implemented in exercise-engines/student-match.js.
// APP-ANCHOR: Fill-blank exercise flow. Implemented in exercise-engines/fill-blank.js.
// APP-ANCHOR: Word-bank fill-blank exercise flow. Implemented in exercise-engines/word-bank-fill-blank.js.
// APP-ANCHOR: Mistake-correction exercise flow. Implemented in exercise-engines/mistake-correct-it.js.
// APP-ANCHOR: Time-setter exercise flow. Implemented in exercise-engines/time-setter.js.
// APP-ANCHOR: Guess-animal exercise flow and keyboard. Implemented in exercise-engines/guess-animal.js.
// APP-ANCHOR: Choice and true-false exercise flows.
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

// APP-ANCHOR: True-false grid exercise flow. Implemented in exercise-engines/true-false-grid.js.

// APP-ANCHOR: Pronoun-memory exercise flow. Implemented in exercise-engines/pronoun-memory.js.
// APP-ANCHOR: Pronoun-snap exercise flow. Implemented in exercise-engines/pronoun-snap.js.
function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

// APP-ANCHOR: Sort-it exercise flow. Implemented in exercise-engines/sort-it.js.
// APP-ANCHOR: Lucky-spin exercise flow. Implemented in exercise-engines/lucky-spin.js.
// APP-ANCHOR: Conversation-builder exercise flow. Implemented in exercise-engines/conversation-builder.js.
// APP-ANCHOR: Jumbled-sentences exercise flow. Implemented in exercise-engines/jumbled-sentences.js.
// APP-ANCHOR: Activity visual-match exercise flow. Implemented in exercise-engines/activity-visual-match.js.
// APP-ANCHOR: Generic exercise question rendering and answer lifecycle.
function renderExerciseQuestion() {
  const question = state.exerciseQuestions[state.exerciseIndex];
  const total = state.exerciseQuestions.length;
  clearExerciseRepeatVisual();
  clearExerciseVisualCaption();
  clearExerciseImageFocus();
  els.exerciseGrade.textContent = `GRADE ${state.grade}`;
  els.exerciseTitle.textContent = state.exercise.title;
  els.exerciseProgress.textContent = `${state.exerciseIndex + 1} / ${total}`;
  els.exerciseProgressBar.style.width = `${((state.exerciseIndex + 1) / total) * 100}%`;
  els.exerciseScore.textContent = state.exerciseScore;
  const visualOnly = Boolean(question.visualOnly);
  const textOnly = Boolean(question.textOnly);
  const wideOptions = Boolean(state.exercise.wideOptions);
  els.exerciseScore.closest(".exercise-score")?.classList.remove("hidden");
  els.exerciseCard.className = "exercise-card";
  els.exerciseCard.classList.toggle("text-only-choice", textOnly);
  els.exerciseCard.classList.toggle("wide-options-choice", wideOptions);
  els.exerciseVisualPanel.classList.toggle("hidden", textOnly);
  els.exerciseReferenceType.textContent = question.referenceType || "CHOOSE THE CORRECT ARTICLE";
  els.exerciseReferenceType.classList.toggle("hidden", visualOnly);
  els.exerciseReferenceType.classList.toggle("choice-mode-prompt", question.referenceClass === "choice-mode-prompt");
  els.exerciseWord.textContent = question.word ? question.word.toUpperCase() : "";
  els.exerciseWord.classList.toggle("hidden", visualOnly || textOnly || !question.word);
  els.exercisePrompt.textContent = question.prompt || "";
  els.exercisePrompt.classList.toggle("hidden", visualOnly);
  els.exercisePrompt.classList.toggle("compact-prompt", Boolean(state.exercise.compactPrompt));
  els.exerciseSentence.textContent = question.exerciseSentence || "";
  els.exerciseSentence.classList.toggle("hidden", visualOnly || textOnly);
  els.articleOptions.className = "article-options";
  els.articleOptions.classList.toggle("sentence-choice-options", visualOnly || textOnly);
  els.articleOptions.classList.toggle("wide-sentence-options", wideOptions);
  els.exerciseFeedback.textContent = visualOnly || textOnly ? "" : question.instruction || "Choose the correct article.";
  els.exerciseFeedback.className = "exercise-feedback";
  els.exerciseNext.disabled = true;
  els.exerciseNext.textContent = state.exerciseIndex === total - 1 ? "SEE RESULT" : "NEXT";
  if (!textOnly) {
    els.exerciseBrief.textContent = question.visualBrief;
    els.exerciseFallback.classList.add("hidden");
    if (question.repeatImagePath && question.repeatCount) {
      els.exerciseImage.classList.add("hidden");
      showExerciseRepeatVisual(question.repeatImagePath, question.repeatCount, question.visualBrief);
    } else {
      els.exerciseImage.classList.remove("hidden");
      els.exerciseImage.alt = question.visualBrief;
      els.exerciseImage.src = question.imagePath;
      els.exerciseImage.style.aspectRatio = "";
      els.exerciseImage.style.objectFit = "";
      applyExerciseImageFocus(question.imageFocus);
    }
    showExerciseVisualCaption(question.visualCaptionHtml || "");
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

function clearExerciseImageFocus() {
  els.exerciseVisualPanel.classList.remove("focus-zoom-panel");
  els.exerciseImage.classList.remove("exercise-focus-zoom");
  els.exerciseImage.style.removeProperty("--focus-x");
  els.exerciseImage.style.removeProperty("--focus-y");
  els.exerciseImage.style.removeProperty("--focus-zoom");
  els.exerciseImage.style.removeProperty("object-position");
}

function applyExerciseImageFocus(focus) {
  if (!focus) return;
  const baseWidth = focus.baseWidth || focus.width || 500;
  const baseHeight = focus.baseHeight || focus.height || 500;
  const x = Math.max(0, Math.min(100, (Number(focus.x) / baseWidth) * 100));
  const y = Math.max(0, Math.min(100, (Number(focus.y) / baseHeight) * 100));
  els.exerciseVisualPanel.classList.add("focus-zoom-panel");
  els.exerciseImage.classList.add("exercise-focus-zoom");
  els.exerciseImage.style.setProperty("--focus-x", `${x}%`);
  els.exerciseImage.style.setProperty("--focus-y", `${y}%`);
  els.exerciseImage.style.setProperty("--focus-zoom", focus.zoom || 2);
  els.exerciseImage.style.objectPosition = `${x}% ${y}%`;
}

function answerExercise(article) {
  const question = state.exerciseQuestions[state.exerciseIndex];
  const isCorrect = article === question.answer;
  if (question.visualCaptionAnswerHtml) showExerciseVisualCaption(question.visualCaptionAnswerHtml);
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
  if (state.exercise?.activity === "character-hub-popup") {
    if (state.exerciseIndex >= (state.exercise.pages || []).length - 1) {
      hideAllScreens();
      els.exerciseResultScore.textContent = "DONE";
      els.exerciseResultMessage.textContent = "Character descriptions completed.";
      els.exerciseContinue.classList.add("hidden");
      els.exerciseHome.textContent = "BACK TO MENU";
      els.exerciseResult.classList.remove("hidden");
      return;
    }
    state.exerciseIndex += 1;
    renderCharacterHubPopupPage();
    return;
  }
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

// APP-ANCHOR: Fullscreen and post-exercise navigation.
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
els.image.addEventListener("load", () => {
  positionPresenceHotspots();
  positionPresenceHoverNameTag();
});
window.addEventListener("resize", () => {
  positionPresenceHotspots();
  positionPresenceHoverNameTag();
});
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
document.getElementById("unitBackButton").addEventListener("click", () => {
  state.unit = null;
  state.module = null;
  [...els.units.children].forEach((button) => button.classList.remove("selected"));
  [...els.functions.children].forEach((button) => button.classList.remove("selected"));
  updateSetup();
  setSetupStep("grade");
});
document.getElementById("functionBackButton").addEventListener("click", () => {
  state.module = null;
  [...els.functions.children].forEach((button) => button.classList.remove("selected"));
  updateSetup();
  setSetupStep("unit");
});
els.setupExercises.addEventListener("click", openExerciseMenu);
els.presentationExercises.addEventListener("click", openExerciseMenu);
els.roomBack.addEventListener("click", returnToHubFromRoom);
els.roomExit.addEventListener("click", exitCharacterRoom);
els.roomIntroOk.addEventListener("click", () => els.roomIntroOverlay.classList.add("hidden"));
els.roomNext.addEventListener("click", () => {
  roomState.targetIndex += 1;
  renderRoomTarget();
});
els.back.addEventListener("click", returnToSetup);
els.fullscreen.addEventListener("click", toggleFullscreen);
els.previous.addEventListener("click", previous);
els.next.addEventListener("click", next);
els.headerNext.addEventListener("click", next);
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
els.guessAnimalExit.addEventListener("click", returnToSetup);
els.guessAnimalGuess.addEventListener("click", showGuessAnimalKeyboard);
els.guessAnimalHint.addEventListener("click", nextGuessAnimalHint);
els.guessAnimalReveal.addEventListener("click", revealGuessAnimalAnswer);
els.guessAnimalNext.addEventListener("click", nextGuessAnimalRound);
els.fillBlankBack.addEventListener("click", () => {
  if (state.postExerciseIndex !== undefined) returnToPostExerciseSlide();
  else returnToSetup();
});
els.pcBack.addEventListener("click", () => {
  state.postExerciseIndex = undefined;
  returnToSetup();
});
els.pcSkip.addEventListener("click", () => {
  if (els.pcSkip.dataset.pcAction === "exit") {
    state.postExerciseIndex = undefined;
    returnToSetup();
    return;
  }
  returnToPostExerciseSlide();
});
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
  els.presenceOverlayQuestion.classList.remove("as-sentence");
  els.presenceOverlayImage.style.aspectRatio = "";
  els.presenceOverlay.querySelector(".presence-overlay-portrait")?.remove();
  els.presenceOverlay.querySelector(".presence-overlay-card").classList.remove("overlay-lg", "thought-mode", "personality-quiz-overlay");
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
  const button = event.target.closest("button[data-snap-answer], button[data-pronoun]");
  if (button) answerPronounSnap(button.dataset.snapAnswer || button.dataset.pronoun, button);
});
document.getElementById("appBackButton").addEventListener("click", () => {
  window.location.href = sessionStorage.getItem("fpStudentMode") === "1"
    ? "../student-zone/index.html"
    : "../index.html";
});
// APP-ANCHOR: Initial application bootstrap.
renderGrades();
updateSetup();
