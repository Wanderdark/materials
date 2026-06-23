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
  sentence: $("sentenceText"),
  presentationExampleSentence: $("presentationExampleSentence"),
  description: $("functionDescription"),
  ruleNote: $("ruleNote"),
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
  trueFalseGrid: $("trueFalseGrid"),
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
  pronounSnapExitResult: $("pronounSnapExitResultButton")
};

const state = { grade: null, unit: null, module: null, index: 0, showingFunctionIntro: false, exercise: null, exerciseIndex: 0, exerciseScore: 0, exerciseQuestions: [], sortBoard: null, sortSorted: 0, sortMistakes: 0, selectedSortCard: null, draggedSortCard: null, conversationRounds: [], conversationIndex: 0, conversationScore: 0, jumbledQuestions: [], jumbledIndex: 0, jumbledScore: 0, jumbledLives: 3, jumbledLivesMax: 3, draggedJumbledTile: null, jumbledSolved: false, jumbledTimer: null, matchingBatches: [], matchingBatchIndex: 0, matchingBatchMatched: 0, matchingScore: 0, selectedMatchingSentence: null, matchingStartedAt: null, matchingElapsedMs: 0, trueFalseQuestions: [], trueFalseAnswered: 0, trueFalseScore: 0, pronounMemoryExercise: null, pronounMemoryLevel: 0, pronounMemoryScore: 0, pronounMemorySequence: [], pronounMemoryIndex: 0, pronounMemoryTimer: null, pronounMemoryAnswerTimer: null, pronounMemoryLocked: false, pronounSnapExercise: null, pronounSnapRounds: [], pronounSnapIndex: 0, pronounSnapScore: 0, pronounSnapStreak: 0, pronounSnapBestStreak: 0, pronounSnapTimer: null, pronounSnapLocked: false };
let feedbackAudio = null;

function hideAllScreens() {
  [els.setup, els.presentation, els.complete, els.exercise, els.exerciseResult, els.sort, els.conversation, els.jumbled, els.matching, els.matchingTime, els.trueFalse, els.pronounMemory, els.pronounMemoryResult, els.pronounSnap, els.pronounSnapResult, els.exerciseMenu].forEach((screen) => screen.classList.add("hidden"));
}

function playFeedbackSound(isCorrect) {
  if (feedbackAudio) {
    feedbackAudio.pause();
    feedbackAudio.currentTime = 0;
  }
  feedbackAudio = new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.mp3`);
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
    button.innerHTML = `<span>GRAMMAR FUNCTION</span><strong>${module.title}</strong><small>${module.description}</small>`;
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
  els.functionIntro.classList.add("hidden");
  els.exampleCard.classList.remove("hidden");
  const example = state.module.sentences[state.index];
  const total = state.module.sentences.length;
  const focus = example.focus || example.article;
  const highlight = example.highlight || example.article;
  const highlightedSentence = example.highlightSuffix
    ? example.sentence.replace(
      new RegExp(`\\b(${example.highlightStem})(${example.highlightSuffix})\\b`, "i"),
      `$1<mark class="plural-ending ${example.suffixClass}">$2</mark>`
    )
    : example.sentence.replace(new RegExp(`\\b(${highlight})\\b`, "i"), `<mark class="${example.highlightClass || ""}">$1</mark>`);
  const usesMintBadge = example.article === "the" || example.focus === "PLURAL";

  els.gradeLabel.textContent = `GRADE ${state.grade}`;
  els.title.textContent = state.module.title.toUpperCase();
  els.progressText.textContent = `${state.index + 1} / ${total}`;
  els.progressBar.style.width = `${((state.index + 1) / total) * 100}%`;
  els.article.textContent = focus.toUpperCase();
  els.article.className = `article-badge ${usesMintBadge ? "specific" : ""} ${focus.length > 2 ? "long" : ""} ${example.badgeClass || ""}`;
  els.referenceType.textContent = example.referenceType || (example.article === "the" ? "SPECIFIC NOUN" : "NON-SPECIFIC NOUN");
  els.sentence.innerHTML = highlightedSentence;
  els.sentence.classList.toggle("long-phrase", example.sentence.length > 10);
  const showExampleSentence = state.module.id === "a-an-the" && example.exerciseSentence;
  els.presentationExampleSentence.textContent = showExampleSentence
    ? example.exerciseSentence.replace("___", example.article)
    : "";
  els.presentationExampleSentence.classList.toggle("hidden", !showExampleSentence);
  els.description.textContent = state.module.id === "a-an-the"
    ? `Referring to a ${example.article === "the" ? "specific" : "non-specific"} noun.`
    : state.module.description;
  els.ruleNote.textContent = example.ruleNote || "";
  els.ruleNote.classList.toggle("hidden", !example.ruleNote);
  els.brief.textContent = example.visualBrief;
  els.fallback.classList.add("hidden");
  els.image.classList.remove("hidden");
  els.image.alt = example.visualBrief;
  els.image.src = example.imagePath;
  els.previous.disabled = state.index === 0 && !state.module.pronounTable;
  els.next.textContent = state.index === total - 1 ? "FINISH" : "NEXT";
  els.dots.replaceChildren(...state.module.sentences.map((_, index) => {
    const dot = document.createElement("span");
    dot.className = index === state.index ? "active" : index < state.index ? "complete" : "";
    return dot;
  }));
}

function next() {
  if (state.showingFunctionIntro) {
    renderExample();
    return;
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
  hideAllScreens();
  els.setup.classList.remove("hidden");
}

function showPresentationComplete() {
  hideAllScreens();
  els.complete.classList.remove("hidden");
}

function openExerciseMenu() {
  if (!state.module) return;
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
      "pronoun-snap": "Choose the pronoun before each Unit 1 + 2 picture changes."
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
    default:
      startChoiceExercise(exercise);
  }
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
  state.trueFalseQuestions = exercise.buildQuestions(state.module);
  state.trueFalseAnswered = 0;
  state.trueFalseScore = 0;
  hideAllScreens();
  els.trueFalse.classList.remove("hidden");
  els.trueFalseGrade.textContent = `GRADE ${state.grade}`;
  els.trueFalseProgress.textContent = `0 / ${state.trueFalseQuestions.length}`;
  els.trueFalseScore.textContent = "0";
  els.trueFalseGrid.replaceChildren(...state.trueFalseQuestions.map(createTrueFalseRow));
}

function createTrueFalseRow(question) {
  const row = document.createElement("article");
  row.className = "true-false-row";
  row.dataset.answer = question.answer;
  const sentence = document.createElement("p");
  sentence.textContent = question.prompt;
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
  row.append(sentence, actions);
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
  els.trueFalseScore.textContent = state.trueFalseScore;
  els.trueFalseProgress.textContent = `${state.trueFalseAnswered} / ${state.trueFalseQuestions.length}`;
  playFeedbackSound(isCorrect);
  if (state.trueFalseAnswered === state.trueFalseQuestions.length) {
    setTimeout(() => {
      hideAllScreens();
      els.exerciseResultScore.textContent = `${state.trueFalseScore} / ${state.trueFalseQuestions.length}`;
      els.exerciseResultMessage.textContent = `${state.trueFalseScore} school rules marked correctly.`;
      els.exerciseResult.classList.remove("hidden");
    }, 700);
  }
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
  els.exerciseCard.classList.toggle("text-only-choice", textOnly);
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
  els.exerciseFeedback.textContent = visualOnly || textOnly ? "" : "Choose the correct article.";
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
      button.textContent = article.toUpperCase();
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
els.exerciseImage.addEventListener("error", () => {
  els.exerciseImage.classList.add("hidden");
  els.exerciseFallback.classList.remove("hidden");
});
els.start.addEventListener("click", startPresentation);
els.setupExercises.addEventListener("click", openExerciseMenu);
els.presentationExercises.addEventListener("click", openExerciseMenu);
els.back.addEventListener("click", returnToSetup);
els.fullscreen.addEventListener("click", toggleFullscreen);
els.previous.addEventListener("click", previous);
els.next.addEventListener("click", next);
els.completeExercises.addEventListener("click", openExerciseMenu);
els.completeHome.addEventListener("click", returnToSetup);
els.exerciseBack.addEventListener("click", returnToSetup);
els.exerciseNext.addEventListener("click", nextExerciseQuestion);
els.exerciseHome.addEventListener("click", returnToSetup);
els.sortBack.addEventListener("click", returnToSetup);
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
els.trueFalseBack.addEventListener("click", returnToSetup);
els.pronounMemoryExit.addEventListener("click", returnToSetup);
els.pronounMemoryExitResult.addEventListener("click", returnToSetup);
els.pronounMemoryRestart.addEventListener("click", () => startPronounMemory(state.pronounMemoryExercise));
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
