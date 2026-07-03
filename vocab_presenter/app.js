(() => {
  "use strict";

  document.addEventListener("contextmenu", (event) => event.preventDefault(), true);
  document.addEventListener("selectstart", (event) => event.preventDefault(), true);

  const $ = (id) => document.getElementById(id);
  const els = {
    setup: $("setupScreen"),
    presentation: $("presentationScreen"),
    grades: $("gradeOptions"),
    units: $("unitOptions"),
    gradeStatus: $("gradeStatus"),
    unitStatus: $("unitStatus"),
    poolSummary: $("poolSummary"),
    start: $("startButton"),
    startQuiz: $("startQuizButton"),
    viewCategories: $("viewCategoriesButton"),
    exercises: $("exercisesButton"),
    categorySummaryModal: $("categorySummaryModal"),
    closeCategorySummary: $("closeCategorySummaryButton"),
    categorySummaryTitle: $("categorySummaryTitle"),
    categorySummaryOptions: $("categorySummaryOptions"),
    exercisesModal: $("exercisesModal"),
    closeExercises: $("closeExercisesButton"),
    startAnagram: $("startAnagramButton"),
    startMatch: $("startMatchButton"),
    startSort: $("startSortButton"),
    startOddOneOut: $("startOddOneOutButton"),
    startLuckySpin: $("startLuckySpinButton"),
    anagramCategoryModal: $("anagramCategoryModal"),
    closeAnagramCategories: $("closeAnagramCategoriesButton"),
    anagramCategoryOptions: $("anagramCategoryOptions"),
    matchCategoryModal: $("matchCategoryModal"),
    closeMatchCategories: $("closeMatchCategoriesButton"),
    matchCategoryOptions: $("matchCategoryOptions"),
    anagramScreen: $("anagramScreen"),
    anagramBack: $("anagramBackButton"),
    anagramExit: $("anagramExitButton"),
    anagramSessionLabel: $("anagramSessionLabel"),
    anagramProgressText: $("anagramProgressText"),
    anagramImage: $("anagramImage"),
    anagramTiles: $("anagramTiles"),
    anagramMistakeCount: $("anagramMistakeCount"),
    anagramFeedback: $("anagramFeedback"),
    anagramResult: $("anagramResultView"),
    anagramResultScore: $("anagramResultScore"),
    anagramResultMessage: $("anagramResultMessage"),
    anagramHome: $("anagramHomeButton"),
    matchScreen: $("matchScreen"),
    matchBack: $("matchBackButton"),
    matchSessionLabel: $("matchSessionLabel"),
    matchProgressText: $("matchProgressText"),
    matchWordGrid: $("matchWordGrid"),
    matchVisualGrid: $("matchVisualGrid"),
    matchResult: $("matchResultScreen"),
    matchTimeText: $("matchTimeText"),
    matchResultMessage: $("matchResultMessage"),
    matchYes: $("matchYesButton"),
    matchNo: $("matchNoButton"),
    sortScreen: $("sortScreen"),
    sortBack: $("sortBackButton"),
    sortSessionLabel: $("sortSessionLabel"),
    sortProgressText: $("sortProgressText"),
    sortCardBank: $("sortCardBank"),
    sortZones: $("sortZones"),
    sortResult: $("sortResultScreen"),
    sortResultScore: $("sortResultScore"),
    sortResultMessage: $("sortResultMessage"),
    sortNextRound: $("sortNextRoundButton"),
    luckySpinScreen: $("luckySpinScreen"),
    luckySpinBack: $("luckySpinBackButton"),
    luckySpinSessionLabel: $("luckySpinSessionLabel"),
    luckySpinScore: $("luckySpinScore"),
    luckyFloatingText: $("luckyFloatingText"),
    luckyWheel: $("luckyWheel"),
    luckySpinButton: $("luckySpinButton"),
    luckySpinPrompt: $("luckySpinPrompt"),
    luckySpinMeta: $("luckySpinMeta"),
    luckySpinJudge: $("luckySpinJudge"),
    luckyWrong: $("luckyWrongButton"),
    luckyCorrect: $("luckyCorrectButton"),
    luckySpinEnd: $("luckySpinEnd"),
    luckySpinEndKicker: $("luckySpinEndKicker"),
    luckySpinFinalScore: $("luckySpinFinalScore"),
    luckySpinContinue: $("luckySpinContinueButton"),
    luckySpinHome: $("luckySpinHomeButton"),
    back: $("backButton"),
    fullscreen: $("fullscreenButton"),
    sessionLabel: $("sessionLabel"),
    categoryHeader: $("categoryHeader"),
    progressText: $("progressText"),
    progressBar: $("progressBar"),
    wordView: $("wordView"),
    categoryIntro: $("categoryIntroView"),
    categoryIntroTitle: $("categoryIntroTitle"),
    categoryIntroNumber: $("categoryIntroNumber"),
    categoryIntroCount: $("categoryIntroCount"),
    categoryContinue: $("categoryContinueButton"),
    wordImage: $("wordImage"),
    imageFallback: $("imageFallback"),
    wordGuessPanel: $("wordGuessPanel"),
    wordGuessOptions: $("wordGuessOptions"),
    wordTitleRow: $("wordTitleRow"),
    englishWord: $("englishWord"),
    speakWord: $("speakWordButton"),
    meaningBlock: $("meaningBlock"),
    turkishMeaning: $("turkishMeaning"),
    definitionBlock: $("definitionBlock"),
    englishDefinition: $("englishDefinition"),
    wordRelations: $("wordRelations"),
    synonymInfo: $("synonymInfo"),
    oppositeInfo: $("oppositeInfo"),
    quizView: $("quizView"),
    quizBadge: $("quizBadge"),
    quizQuestion: $("quizQuestion"),
    quizHint: $("quizHint"),
    quizImage: $("quizImage"),
    relationWord: $("relationWord"),
    quizOptions: $("quizOptions"),
    quizFeedback: $("quizFeedback"),
    finishOffer: $("finishOfferView"),
    acceptQuiz: $("acceptQuizButton"),
    declineQuiz: $("declineQuizButton"),
    quizResults: $("quizResultsView"),
    quizResultScore: $("quizResultScore"),
    quizResultMessage: $("quizResultMessage"),
    quizMistakes: $("quizMistakes"),
    resultsHome: $("resultsHomeButton"),
    farewell: $("farewellView"),
    navigation: $("navigationBar"),
    previous: $("previousButton"),
    revealTurkish: $("revealTurkishButton"),
    next: $("nextButton"),
    dots: $("checkpointDots"),
    memoryScreen: $("memoryScreen"),
    startMemory: $("startMemoryButton"),
    oddOneOutScreen: $("oddOneOutScreen"),
    oooCard: $("oooCard"),
    oooBack: $("oooBackButton"),
    oooSessionLabel: $("oooSessionLabel"),
    oooProgressText: $("oooProgressText"),
    oooOptions: $("oooOptions"),
    oooFeedback: $("oooFeedback"),
    oooActions: $("oooActions"),
    oooGroupEnd: $("oooGroupEnd"),
    oooGroupScore: $("oooGroupScore"),
    oooContinue: $("oooContinueButton"),
    oooExit: $("oooExitButton"),
    memoryBack: $("memoryBackButton"),
    memorySessionLabel: $("memorySessionLabel"),
    memoryStudyNext: $("memoryStudyNextButton"),
    memoryTestSessionLabel: $("memoryTestSessionLabel"),
    memoryPlayAgain: $("memoryPlayAgainButton"),
    memoryHome: $("memoryHomeButton")
  };

  const records = typeof QUESTIONS === "undefined"
    ? []
    : QUESTIONS.filter((item) => Array.isArray(item) && item[2] && Number(item[3]) > 0);

  const synonymGroups = typeof SYNONYM_PAIRS === "undefined"
    ? []
    : SYNONYM_PAIRS.filter((group) => Array.isArray(group) && group.length >= 4);

  const state = {
    grade: null,
    unit: null,
    categorySequence: [],
    categoryIndex: 0,
    pool: [],
    index: 0,
    mode: "word",
    wordStage: "guess",
    revealTimer: null,
    categoryIntroTimer: null,
    speechTimer: null,
    feedbackAudio: null,
    quizCheckpoint: null,
    completedCheckpoints: new Set(),
    completedRelationCheckpoints: new Set(),
    finalQuizQuestions: [],
    finalQuizIndex: 0,
    finalQuizScore: 0,
    finalQuizMistakes: [],
    anagramQuestions: [],
    anagramIndex: 0,
    anagramScore: 0,
    anagramSolved: false,
    draggedAnagramTile: null,
    anagramAudioContext: null,
    anagramMistakes: 0,
    anagramTransitionTimer: null,
    anagramCategoryTitle: "ALL WORDS",
    matchCategoryTitle: "",
    matchPool: [],
    matchRemainingPool: [],
    matchRound: [],
    matchSelectedWord: null,
    matchMatched: 0,
    matchStartedAt: null,
    matchResolving: false,
    sortCategories: [],
    sortRemaining: new Map(),
    sortRound: [],
    sortRoundNumber: 0,
    sortSorted: 0,
    sortTotalSorted: 0,
    sortMistakes: 0,
    selectedSortCard: null,
    draggedSortCard: null,
    memoryLevel: 5,
    memoryTargets: [],
    memoryPool: [],
    memoryStudyIndex: 0,
    memoryStudyTimer: null,
    memoryTimer: null,
    memoryTimeLeft: 20,
    memoryActive: false,
    memorySelected: new Set(),
    oddPool: [],
    oddIndex: 0,
    oddGroupCorrect: 0,
    oddAnswered: false,
    luckyItems: [],
    luckyExtraPool: [],
    luckyRoundNumber: 1,
    luckyRemaining: [],
    luckyCurrent: null,
    luckyScore: 0,
    luckyRotation: 0,
    luckySpinning: false,
    luckyTickTimer: null,
    luckyFinishTimer: null,
    luckyAudioContext: null
  };

  function uniqueSorted(values) {
    return [...new Set(values)].sort((a, b) => a - b);
  }

  function createChoice(label, details, selected, onClick) {
    const button = document.createElement("button");
    button.className = `choice-button${selected ? " selected" : ""}`;
    button.innerHTML = `${label}${details ? `<small>${details}</small>` : ""}`;
    button.addEventListener("click", onClick);
    return button;
  }

  function setSetupStep(step) {
    document.getElementById("setupCard").dataset.step = step;
  }

  function renderGrades() {
    els.grades.replaceChildren();
    const available = new Set(records.map((item) => item[3]));
    [5, 6, 7, 8].forEach((grade) => {
      const button = document.createElement("button");
      const isAvailable = available.has(grade);
      button.className = `grade-visual-button${isAvailable ? "" : " placeholder"}${state.grade === grade ? " selected" : ""}`;
      button.innerHTML = `<img src="../func_presenter/images/main/grade${grade}.webp" alt="Grade ${grade}"><strong class="opt-number">${grade}</strong>`;
      if (isAvailable) button.addEventListener("click", () => selectGrade(grade));
      els.grades.append(button);
    });
  }

  function selectGrade(grade) {
    enterFullscreen();
    if (state.grade === grade) { setSetupStep("unit"); return; }
    state.grade = grade;
    state.unit = null;
    els.gradeStatus.textContent = `Grade ${grade} selected`;
    els.unitStatus.textContent = "Select a unit";
    renderGrades();
    renderUnits();
    updateSetupSummary();
    setSetupStep("unit");
  }

  function renderUnits() {
    els.units.replaceChildren();
    if (!state.grade) {
      els.units.className = "option-grid unit-grid empty-options";
      els.units.innerHTML = "<p>Available units will appear here after selecting a grade.</p>";
      return;
    }

    els.units.className = "option-grid unit-grid";
    const units = uniqueSorted(records.filter((item) => item[3] === state.grade).map((item) => item[5]));
    units.forEach((unit) => {
      const count = records.filter((item) => item[3] === state.grade && item[5] === unit).length;
      const button = document.createElement("button");
      button.className = `unit-card-button${state.unit === unit ? " selected" : ""}`;
      button.innerHTML = `<span class="opt-kicker">UNIT</span><strong class="opt-number">${unit}</strong><small class="opt-count">${count} words</small>`;
      button.addEventListener("click", () => {
        state.unit = unit;
        els.unitStatus.textContent = `Unit ${unit} selected`;
        renderUnits();
        updateSetupSummary();
      });
      els.units.append(button);
    });
  }

  function getCategories() {
    if (!state.grade || !state.unit || typeof VocabCategoryAdapter === "undefined") return [];
    return VocabCategoryAdapter.get(state.grade, state.unit);
  }

  function getUnitPool() {
    return records.filter((item) => item[3] === state.grade && item[5] === state.unit);
  }

  function buildCategorySequence() {
    const unitRecords = getUnitPool();
    const categories = getCategories();
    if (!categories.length) return [{ id: "all", title: "All Vocabulary", records: unitRecords }];

    const categorizedWords = new Set(categories.flatMap((category) => category.words));
    const sequence = categories
      .map((category) => ({
        id: category.id,
        title: category.title,
        records: unitRecords.filter((record) => category.words.includes(record[2]))
      }))
      .filter((category) => category.records.length);
    const uncategorized = unitRecords.filter((record) => !categorizedWords.has(record[2]));
    if (uncategorized.length) sequence.push({ id: "other-vocabulary", title: "Other Words", records: uncategorized });
    return sequence;
  }

  function updateSetupSummary() {
    const ready = state.grade && state.unit;
    const count = ready ? getUnitPool().length : 0;
    els.start.disabled = !ready;
    els.startQuiz.disabled = !ready;
    els.viewCategories.disabled = !ready;
    els.exercises.disabled = !ready;
    els.poolSummary.innerHTML = ready
      ? `<strong>${count}-word presentation ready</strong><span>A quick review appears after every 5 words.</span>`
      : "<strong>Not ready</strong><span>Select a grade and unit to continue.</span>";
  }

  function imagePath(record) {
    return record[6] || "";
  }

  function openCategorySummary() {
    const categories = buildCategorySequence();
    els.categorySummaryTitle.textContent = `GRADE ${state.grade} · UNIT ${state.unit} CATEGORIES`;
    els.categorySummaryOptions.replaceChildren(...categories.map((category) => {
      const card = document.createElement("article");
      card.className = "category-summary-card";
      const heading = document.createElement("div");
      heading.className = "category-summary-heading";
      const title = document.createElement("h3");
      title.textContent = category.title;
      const count = document.createElement("span");
      count.textContent = `${category.records.length} WORDS`;
      heading.append(title, count);
      const words = document.createElement("div");
      words.className = "category-word-list";
      category.records.forEach((record) => {
        const word = document.createElement("span");
        word.textContent = record[2];
        words.append(word);
      });
      card.append(heading, words);
      return card;
    }));
    els.categorySummaryModal.classList.remove("hidden");
  }

  function closeCategorySummary() {
    els.categorySummaryModal.classList.add("hidden");
  }

  function startPresentation() {
    state.categorySequence = buildCategorySequence();
    state.categoryIndex = 0;
    state.completedCheckpoints.clear();
    state.completedRelationCheckpoints.clear();
    els.setup.classList.add("hidden");
    els.presentation.classList.remove("hidden");
    activateCategory(0);
  }

  function openExercises() {
    els.startMatch.classList.toggle("hidden", !getMatchCategories().length);
    els.startSort.classList.toggle("hidden", getSortCategories().length < 2);
    els.startOddOneOut.classList.toggle("hidden", getCategories().length < 2);
    els.startLuckySpin.classList.toggle("hidden", !getLuckySpinItems().length);
    els.exercisesModal.classList.remove("hidden");
  }

  function closeExercises() {
    els.exercisesModal.classList.add("hidden");
  }

  function eligibleAnagramRecords(pool) {
    return pool.filter((record) => isEligibleAnagramWord(record[2]));
  }

  function openAnagramCategoryChooser() {
    const options = [
      { id: "all", title: "ALL WORDS", records: getUnitPool() },
      ...getCategories().map((category) => ({
        id: category.id,
        title: category.title,
        records: getUnitPool().filter((record) => category.words.includes(record[2]))
      }))
    ];

    els.anagramCategoryOptions.replaceChildren();
    options.forEach((option) => {
      const eligibleRecords = eligibleAnagramRecords(option.records);
      if (option.id !== "all" && eligibleRecords.length < 7) return;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "anagram-category-choice";
      button.innerHTML = `<strong>${option.title}</strong><small>${option.records.length} category word${option.records.length === 1 ? "" : "s"} · ${eligibleRecords.length} anagram-ready</small>`;
      button.addEventListener("click", () => startAnagram(eligibleRecords, option.title));
      els.anagramCategoryOptions.append(button);
    });
    closeExercises();
    els.anagramCategoryModal.classList.remove("hidden");
  }

  function closeAnagramCategoryChooser() {
    els.anagramCategoryModal.classList.add("hidden");
    openExercises();
  }

  function getMatchCategories() {
    const unitRecords = getUnitPool();
    return getCategories()
      .map((category) => ({
        title: category.title,
        records: getDistinctMatchRecords(unitRecords.filter((record) => category.words.includes(record[2])))
      }))
      .filter((category) => category.records.length >= 12);
  }

  function getSortCategories() {
    const assignedWords = new Set();
    const unitRecords = getUnitPool();
    return getCategories().reduce((categories, category) => {
      const categoryRecords = unitRecords.filter((record) => category.words.includes(record[2]) && !assignedWords.has(record[2]));
      if (categoryRecords.length >= 6) {
        categoryRecords.forEach((record) => assignedWords.add(record[2]));
        categories.push({ id: category.id, title: category.title, records: categoryRecords });
      }
      return categories;
    }, []);
  }

  function startSort() {
    state.sortCategories = getSortCategories();
    if (state.sortCategories.length < 2) return;
    state.sortRemaining = new Map(state.sortCategories.map((category) => [category.id, sample(category.records, category.records.length)]));
    state.sortRoundNumber = 0;
    state.sortTotalSorted = 0;
    state.sortMistakes = 0;
    closeExercises();
    els.setup.classList.add("hidden");
    els.presentation.classList.add("hidden");
    els.sortResult.classList.add("hidden");
    els.sortScreen.classList.remove("hidden");
    startSortRound();
  }

  function startSortRound() {
    const remainingCount = [...state.sortRemaining.values()].reduce((total, words) => total + words.length, 0);
    if (!remainingCount) {
      showSortRoundResult(true);
      return;
    }
    const target = Math.min(16, remainingCount);
    const round = [];
    while (round.length < target) {
      const available = state.sortCategories.filter((category) => state.sortRemaining.get(category.id).length);
      if (!available.length) break;
      available.forEach((category) => {
        if (round.length >= target) return;
        const word = state.sortRemaining.get(category.id).shift();
        round.push({ id: `${category.id}-${word[2]}-${round.length}`, label: word[2], categoryId: category.id });
      });
    }
    state.sortRound = round;
    state.sortRoundNumber += 1;
    state.sortSorted = 0;
    state.selectedSortCard = null;
    state.draggedSortCard = null;
    els.sortSessionLabel.textContent = `GRADE ${state.grade} · UNIT ${state.unit} · ROUND ${state.sortRoundNumber}`;
    els.sortProgressText.textContent = `0 / ${round.length}`;
    renderSortRound();
  }

  function renderSortRound() {
    els.sortCardBank.replaceChildren(...sample(state.sortRound, state.sortRound.length).map((card) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "sort-card";
      button.draggable = true;
      button.dataset.categoryId = card.categoryId;
      button.textContent = card.label;
      applyTextSize(button, card.label);
      button.addEventListener("click", () => selectSortCard(button));
      button.addEventListener("dragstart", () => {
        state.draggedSortCard = button;
        button.classList.add("dragging");
      });
      button.addEventListener("dragend", () => {
        state.draggedSortCard = null;
        button.classList.remove("dragging");
      });
      return button;
    }));
    els.sortZones.replaceChildren(...state.sortCategories.map((category) => {
      const zone = document.createElement("div");
      zone.className = "sort-zone";
      zone.dataset.categoryId = category.id;
      zone.setAttribute("role", "button");
      zone.tabIndex = 0;
      const title = document.createElement("strong");
      title.textContent = category.title;
      const hint = document.createElement("span");
      hint.textContent = "DROP WORDS HERE";
      zone.append(title, hint);
      zone.addEventListener("click", () => placeSortCard(zone));
      zone.addEventListener("dragover", (event) => {
        if (state.draggedSortCard) event.preventDefault();
      });
      zone.addEventListener("drop", (event) => {
        event.preventDefault();
        placeSortCard(zone, state.draggedSortCard);
      });
      return zone;
    }));
  }

  function selectSortCard(card) {
    if (card.disabled) return;
    if (state.selectedSortCard && state.selectedSortCard !== card) state.selectedSortCard.classList.remove("selected");
    state.selectedSortCard = card;
    card.classList.add("selected");
  }

  function placeSortCard(zone, card = state.selectedSortCard) {
    if (!card || card.disabled) return;
    if (card.dataset.categoryId !== zone.dataset.categoryId) {
      state.sortMistakes += 1;
      card.classList.add("wrong");
      setTimeout(() => card.classList.remove("wrong"), 360);
      playFeedbackSound(false);
      return;
    }
    zone.append(card);
    card.draggable = false;
    card.disabled = true;
    card.classList.remove("selected", "dragging");
    card.classList.add("sorted");
    state.selectedSortCard = null;
    state.draggedSortCard = null;
    state.sortSorted += 1;
    state.sortTotalSorted += 1;
    els.sortProgressText.textContent = `${state.sortSorted} / ${state.sortRound.length}`;
    playFeedbackSound(true);
    if (state.sortSorted === state.sortRound.length) {
      const hasMoreWords = [...state.sortRemaining.values()].some((words) => words.length);
      setTimeout(() => showSortRoundResult(!hasMoreWords), 700);
    }
  }

  function showSortRoundResult(isFinalRound) {
    const total = state.sortRound.length;
    const totalWords = state.sortCategories.reduce((sum, category) => sum + category.records.length, 0);
    els.sortResultScore.textContent = isFinalRound
      ? `${state.sortTotalSorted} / ${totalWords}`
      : `${state.sortSorted} / ${total}`;
    els.sortResultMessage.textContent = isFinalRound
      ? `All categorized words are sorted. Mistakes: ${state.sortMistakes}.`
      : `${total} words sorted. Next set is ready.`;
    els.sortNextRound.textContent = isFinalRound ? "BACK TO UNIT SELECTION" : "NEXT WORD SET";
    els.sortNextRound.dataset.finalRound = String(isFinalRound);
    els.sortScreen.classList.add("hidden");
    els.sortResult.classList.remove("hidden");
  }

  // ─── WATCH & REMEMBER ───────────────────────────────────────────

  function getLuckySpinItems() {
    if (typeof VocabLuckySpinAdapter === "undefined") return [];
    return VocabLuckySpinAdapter.getInitial?.(state.grade, state.unit) || VocabLuckySpinAdapter.get(state.grade, state.unit);
  }

  function getLuckySpinExtraItems() {
    if (typeof VocabLuckySpinAdapter === "undefined") return [];
    return VocabLuckySpinAdapter.getExtra?.(state.grade, state.unit) || [];
  }

  function startLuckySpin() {
    const items = getLuckySpinItems();
    if (!items.length) return;
    state.luckyExtraPool = sample(getLuckySpinExtraItems(), getLuckySpinExtraItems().length);
    state.luckyRoundNumber = 1;
    state.luckyScore = 0;
    closeExercises();
    els.setup.classList.add("hidden");
    els.presentation.classList.add("hidden");
    els.luckySpinScreen.classList.remove("hidden");
    startLuckySpinRound(items);
  }

  function startLuckySpinRound(items) {
    state.luckyItems = items.map((item, index) => ({ ...item, label: String(index + 1) }));
    state.luckyRemaining = state.luckyItems.map((_, index) => index);
    state.luckyCurrent = null;
    state.luckyRotation = 0;
    state.luckySpinning = false;
    clearTimeout(state.luckyTickTimer);
    clearTimeout(state.luckyFinishTimer);
    els.luckySpinEnd.classList.add("hidden");
    els.luckySpinJudge.classList.add("hidden");
    els.luckySpinButton.disabled = false;
    els.luckySpinPrompt.textContent = state.luckyRoundNumber === 1
      ? "Spin the wheel to get a task."
      : `Round ${state.luckyRoundNumber}. Spin the wheel.`;
    renderLuckySpin();
  }

  function continueLuckySpin() {
    if (!state.luckyExtraPool.length) return;
    const nextItems = sample(state.luckyExtraPool, Math.min(8, state.luckyExtraPool.length));
    const pickedIds = new Set(nextItems.map((item) => item.id));
    state.luckyExtraPool = state.luckyExtraPool.filter((item) => !pickedIds.has(item.id));
    state.luckyRoundNumber += 1;
    startLuckySpinRound(nextItems);
  }

  function luckySegmentCenterAngle(activeIndex, segmentCount) {
    return -90 + (activeIndex + .5) * (360 / segmentCount);
  }

  function renderLuckySpin() {
    els.luckySpinSessionLabel.textContent = `GRADE ${state.grade} · UNIT ${state.unit}`;
    els.luckySpinScore.textContent = state.luckyRemaining.length;
    els.luckySpinMeta.textContent = `Round ${state.luckyRoundNumber} · Remaining sections: ${state.luckyRemaining.length} / ${state.luckyItems.length}`;
    const colors = ["#ffd84d", "#65e6b8", "#6688ff", "#ff8066", "#9f7aea", "#38bdf8", "#f472b6", "#a3e635"];
    const activeItems = state.luckyRemaining.map((itemIndex) => ({
      itemIndex,
      item: state.luckyItems[itemIndex]
    }));
    const size = activeItems.length || 1;
    const gradient = activeItems.map(({ itemIndex }, activeIndex) => {
      const start = (activeIndex / size) * 100;
      const end = ((activeIndex + 1) / size) * 100;
      const color = colors[itemIndex % colors.length];
      return `${color} ${start}% ${end}%`;
    }).join(", ");
    els.luckyWheel.style.background = `conic-gradient(from -90deg, ${gradient})`;
    els.luckyWheel.style.setProperty("--wheel-rotation", `${state.luckyRotation}deg`);
    els.luckyWheel.style.setProperty("--wheel-counter-rotation", `${-state.luckyRotation}deg`);
    els.luckyWheel.style.transform = `rotate(${state.luckyRotation}deg)`;
    els.luckyWheel.replaceChildren(...activeItems.map(({ item }, activeIndex) => {
      const label = document.createElement("span");
      label.className = "lucky-segment-label";
      const segmentAngle = luckySegmentCenterAngle(activeIndex, size);
      label.style.setProperty("--segment-angle", `${segmentAngle}deg`);
      label.style.setProperty("--segment-counter-angle", `${-segmentAngle}deg`);
      label.textContent = item.label || activeIndex + 1;
      return label;
    }));
  }

  function spinLuckyWheel() {
    if (state.luckySpinning || !state.luckyRemaining.length) return;
    state.luckySpinning = true;
    state.luckyCurrent = null;
    els.luckySpinButton.disabled = true;
    els.luckySpinJudge.classList.add("hidden");
    els.luckySpinPrompt.textContent = "Spinning...";
    const activeSegments = [...state.luckyRemaining];
    const activeTargetIndex = Math.floor(Math.random() * activeSegments.length);
    const targetItemIndex = activeSegments[activeTargetIndex];
    const centerAngle = luckySegmentCenterAngle(activeTargetIndex, activeSegments.length);
    const normalizedRotation = ((state.luckyRotation % 360) + 360) % 360;
    const targetRotation = ((-centerAngle % 360) + 360) % 360;
    state.luckyRotation = state.luckyRotation + 1440 + targetRotation - normalizedRotation;
    startLuckySpinTicks(2500);
    els.luckyWheel.style.setProperty("--wheel-rotation", `${state.luckyRotation}deg`);
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
    els.luckySpinPrompt.textContent = item.prompt;
    els.luckySpinMeta.textContent = `${item.points} points · Let the student answer, then mark it.`;
    els.luckySpinJudge.classList.remove("hidden");
  }

  function judgeLuckySpin(isCorrect) {
    if (state.luckyCurrent === null || state.luckySpinning) return;
    const item = state.luckyItems[state.luckyCurrent];
    if (isCorrect) {
      state.luckyScore += item.points || 0;
      showLuckyFloatingText(item.points || 0);
    }
    playFeedbackSound(isCorrect);
    state.luckyRemaining = state.luckyRemaining.filter((index) => index !== state.luckyCurrent);
    state.luckyCurrent = null;
    els.luckySpinJudge.classList.add("hidden");
    renderLuckySpin();
    if (!state.luckyRemaining.length) {
      els.luckySpinButton.disabled = true;
      els.luckySpinPrompt.textContent = "This wheel is complete.";
      els.luckySpinMeta.textContent = state.luckyExtraPool.length
        ? "Continue for a new wheel or exit."
        : "Great work! No more prompts left.";
      els.luckySpinEndKicker.textContent = state.luckyExtraPool.length ? "ROUND COMPLETE" : "GAME COMPLETE";
      els.luckySpinFinalScore.textContent = `${state.luckyScore} POINTS`;
      els.luckySpinContinue.classList.toggle("hidden", !state.luckyExtraPool.length);
      els.luckySpinHome.textContent = state.luckyExtraPool.length ? "EXIT" : "BACK TO UNIT SELECTION";
      els.luckySpinEnd.classList.remove("hidden");
    } else {
      els.luckySpinButton.disabled = false;
      els.luckySpinPrompt.textContent = isCorrect ? "Correct! Spin again." : "Wrong. Spin again.";
      els.luckySpinMeta.textContent = `Round ${state.luckyRoundNumber} · Remaining sections: ${state.luckyRemaining.length} / ${state.luckyItems.length}`;
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

  const MEMORY_STUDY_DURATION = 3000;
  const MEMORY_TOTAL_CARDS    = 20;
  const MEMORY_TIME_LIMIT     = 20;
  const MEMORY_SHUFFLES       = 5;
  const MEMORY_SHUFFLE_MS     = 270;

  function playMemoryTick() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      state.anagramAudioContext ||= new AC();
      const ctx = state.anagramAudioContext;
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(1500, t);
      osc.frequency.exponentialRampToValueAtTime(1800, t + .05);
      gain.gain.setValueAtTime(.001, t);
      gain.gain.exponentialRampToValueAtTime(.11, t + .008);
      gain.gain.exponentialRampToValueAtTime(.001, t + .1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(t);
      osc.stop(t + .11);
    } catch {}
  }

  function playMemoryFile(name) {
    try {
      const a = new Audio(`sounds/${name}`);
      a.volume = .8;
      a.play().catch(() => {});
    } catch {}
  }

  function startMemory() {
    const unitPool = getUnitPool().filter((r) => imagePath(r));
    if (unitPool.length < 5) return;

    state.memoryLevel = Math.min(state.memoryLevel, unitPool.length);
    const n = state.memoryLevel;

    state.memoryTargets = sample(unitPool, n);
    const targetSet = new Set(state.memoryTargets.map((r) => r[2]));
    const distractors = sample(
      records.filter((r) => imagePath(r) && !targetSet.has(r[2])),
      MEMORY_TOTAL_CARDS - n
    );
    state.memoryPool = sample([...state.memoryTargets, ...distractors], state.memoryTargets.length + distractors.length);
    state.memorySelected = new Set();
    state.memoryStudyIndex = 0;
    state.memoryActive = false;
    clearInterval(state.memoryTimer);

    closeExercises();
    els.setup.classList.add("hidden");
    els.memoryScreen.classList.remove("hidden");
    showMemoryStudyPhase();
    showMemoryWord(0);
  }

  function showMemoryStudyPhase() {
    document.getElementById("memoryStudyPhase").classList.remove("hidden");
    document.getElementById("memoryTestPhase").classList.add("hidden");
    document.getElementById("memoryResultPhase").classList.add("hidden");
    els.memorySessionLabel.textContent = `GRADE ${state.grade} · UNIT ${state.unit} · LEVEL ${state.memoryLevel}`;

    const n = state.memoryTargets.length;
    const dotsEl = document.getElementById("memoryStudyProgress");
    dotsEl.replaceChildren(...Array.from({ length: n }, () => {
      const d = document.createElement("div");
      d.className = "memory-study-dot";
      return d;
    }));
  }

  function showMemoryWord(index) {
    clearTimeout(state.memoryStudyTimer);
    state.memoryStudyIndex = index;
    const record = state.memoryTargets[index];
    const n = state.memoryTargets.length;

    document.getElementById("memoryStudyCount").textContent = `${index + 1} / ${n}`;
    document.getElementById("memoryStudyImage").src = imagePath(record);
    document.getElementById("memoryStudyWord").textContent = record[2];

    const dots = document.getElementById("memoryStudyProgress").children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = "memory-study-dot" + (i < index ? " done" : i === index ? " active" : "");
    }

    const fill = document.getElementById("memoryCountdownFill");
    fill.style.transition = "none";
    fill.style.width = "100%";
    requestAnimationFrame(() => requestAnimationFrame(() => {
      fill.style.transition = `width ${MEMORY_STUDY_DURATION}ms linear`;
      fill.style.width = "0%";
    }));

    state.memoryStudyTimer = setTimeout(advanceMemoryStudy, MEMORY_STUDY_DURATION);
  }

  function advanceMemoryStudy() {
    clearTimeout(state.memoryStudyTimer);
    const next = state.memoryStudyIndex + 1;
    if (next < state.memoryTargets.length) {
      showMemoryWord(next);
    } else {
      startMemoryTestWithShuffle();
    }
  }

  function startMemoryTestWithShuffle() {
    document.getElementById("memoryStudyPhase").classList.add("hidden");
    document.getElementById("memoryTestPhase").classList.remove("hidden");

    const n = state.memoryTargets.length;
    els.memoryTestSessionLabel.textContent = `GRADE ${state.grade} · UNIT ${state.unit} · LEVEL ${state.memoryLevel}`;
    document.getElementById("memorySelectCount").textContent = `0 / ${n}`;
    document.getElementById("memoryTimer").textContent = MEMORY_TIME_LIMIT;
    document.getElementById("memoryTimer").parentElement.classList.remove("low");
    document.getElementById("memoryTestInstruction").textContent = "Get ready…";
    state.memorySelected = new Set();
    state.memoryActive = false;

    renderMemoryGrid();

    let shufflesDone = 0;
    const shuffleInterval = setInterval(() => {
      shufflesDone++;
      state.memoryPool = sample(state.memoryPool, state.memoryPool.length);
      renderMemoryGrid();
      if (shufflesDone >= MEMORY_SHUFFLES) {
        clearInterval(shuffleInterval);
        startMemoryCountdown();
      }
    }, MEMORY_SHUFFLE_MS);
  }

  function startMemoryCountdown() {
    state.memoryTimeLeft = MEMORY_TIME_LIMIT;
    state.memoryActive = true;
    const n = state.memoryTargets.length;
    document.getElementById("memoryTestInstruction").textContent = `Find the ${n} words you memorized!`;
    updateMemoryTimerDisplay();

    state.memoryTimer = setInterval(() => {
      state.memoryTimeLeft--;
      updateMemoryTimerDisplay();
      if (state.memoryTimeLeft <= 0) {
        clearInterval(state.memoryTimer);
        state.memoryActive = false;
        playMemoryFile("wrong.mp3");
        finishMemory(false, "timeout");
      }
    }, 1000);
  }

  function updateMemoryTimerDisplay() {
    const el = document.getElementById("memoryTimer");
    el.textContent = state.memoryTimeLeft;
    el.parentElement.classList.toggle("low", state.memoryTimeLeft <= 5);
  }

  function renderMemoryGrid() {
    const grid = document.getElementById("memoryGrid");
    grid.replaceChildren(...state.memoryPool.map((record) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "memory-card";
      card.dataset.word = record[2];
      const img = document.createElement("img");
      img.src = imagePath(record);
      img.alt = record[2];
      const label = document.createElement("span");
      label.textContent = record[2];
      card.append(img, label);
      card.addEventListener("click", () => handleMemoryCardClick(record[2], card));
      return card;
    }));
  }

  function handleMemoryCardClick(word, card) {
    if (!state.memoryActive) return;
    if (card.classList.contains("correct-pick") || card.classList.contains("wrong-pick")) return;

    const targetSet = new Set(state.memoryTargets.map((r) => r[2]));
    const n = state.memoryTargets.length;

    if (targetSet.has(word)) {
      playMemoryTick();
      card.classList.add("correct-pick");
      state.memorySelected.add(word);
      const count = state.memorySelected.size;
      document.getElementById("memorySelectCount").textContent = `${count} / ${n}`;
      if (count === n) {
        state.memoryActive = false;
        clearInterval(state.memoryTimer);
        setTimeout(() => finishMemory(true), 350);
      }
    } else {
      state.memoryActive = false;
      clearInterval(state.memoryTimer);
      playMemoryFile("wrong.mp3");
      card.classList.add("wrong-pick");
      const phase = document.getElementById("memoryTestPhase");
      phase.classList.add("memory-shake");
      setTimeout(() => {
        phase.classList.remove("memory-shake");
        finishMemory(false, "wrong");
      }, 480);
    }
  }

  function finishMemory(success, reason) {
    clearInterval(state.memoryTimer);
    state.memoryActive = false;

    const score = state.memorySelected.size;
    const n = state.memoryTargets.length;

    if (success) {
      playMemoryFile("correct.mp3");
      state.memoryLevel++;
    } else {
      state.memoryLevel = 5;
    }

    document.getElementById("memoryTestPhase").classList.add("hidden");
    document.getElementById("memoryResultPhase").classList.remove("hidden");

    if (success) {
      document.getElementById("memoryResultEyebrow").textContent = `LEVEL ${state.memoryLevel - 1} COMPLETE`;
      document.getElementById("memoryResultScore").textContent = "WELL DONE!";
      document.getElementById("memoryResultMessage").textContent = `All ${n} words found! Next: ${state.memoryLevel} words.`;
      els.memoryPlayAgain.textContent = `→ LEVEL ${state.memoryLevel}`;
    } else {
      document.getElementById("memoryResultEyebrow").textContent = reason === "timeout" ? "TIME'S UP!" : "WRONG TAP!";
      document.getElementById("memoryResultScore").textContent = `${score} / ${n}`;
      document.getElementById("memoryResultMessage").textContent = "Back to Level 5.";
      els.memoryPlayAgain.textContent = "↺ TRY LEVEL 5";
    }

    const resultGrid = document.getElementById("memoryResultGrid");
    resultGrid.replaceChildren(...state.memoryTargets.map((record) => {
      const hit = state.memorySelected.has(record[2]);
      const card = document.createElement("div");
      card.className = `memory-result-card ${hit ? "correct" : "missed"}`;
      const img = document.createElement("img");
      img.src = imagePath(record);
      img.alt = record[2];
      const name = document.createElement("span");
      name.textContent = record[2];
      const tick = document.createElement("span");
      tick.className = "result-tick";
      tick.textContent = hit ? "✓" : "✗";
      card.append(img, name, tick);
      return card;
    }));
  }

  function playMemoryAgain() {
    startMemory();
  }

  // ────────────────────────────────────────────────────────────────

  function areRivalEquivalent(first, second) {
    if (typeof RivalsDistractorAdapter === "undefined") return false;
    const firstExclusions = RivalsDistractorAdapter.get(first[3], first[5], first[2]);
    const secondExclusions = RivalsDistractorAdapter.get(second[3], second[5], second[2]);
    return firstExclusions.includes(second[2]) || secondExclusions.includes(first[2]);
  }

  function getDistinctMatchRecords(pool) {
    const handled = new Set();
    const distinct = [];
    pool.forEach((record, index) => {
      if (handled.has(index)) return;
      distinct.push(record);
      handled.add(index);
      const connected = [index];
      while (connected.length) {
        const currentIndex = connected.pop();
        pool.forEach((candidate, candidateIndex) => {
          if (handled.has(candidateIndex) || !areRivalEquivalent(pool[currentIndex], candidate)) return;
          handled.add(candidateIndex);
          connected.push(candidateIndex);
        });
      }
    });
    return distinct;
  }

  function openMatchCategoryChooser() {
    els.matchCategoryOptions.replaceChildren();
    getMatchCategories().forEach((category) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "anagram-category-choice";
      button.innerHTML = `<strong>${category.title}</strong><small>${category.records.length} category words</small>`;
      button.addEventListener("click", () => startMatch(category));
      els.matchCategoryOptions.append(button);
    });
    closeExercises();
    els.matchCategoryModal.classList.remove("hidden");
  }

  function closeMatchCategoryChooser() {
    els.matchCategoryModal.classList.add("hidden");
    openExercises();
  }

  function startMatch(category) {
    state.matchCategoryTitle = category.title;
    state.matchPool = [...category.records];
    state.matchRemainingPool = sample(state.matchPool, state.matchPool.length);
    els.matchCategoryModal.classList.add("hidden");
    closeExercises();
    els.setup.classList.add("hidden");
    els.presentation.classList.add("hidden");
    els.matchResult.classList.add("hidden");
    els.matchScreen.classList.remove("hidden");
    startMatchRound();
  }

  function startMatchRound() {
    if (state.matchRemainingPool.length < 6) {
      state.matchRemainingPool = sample(state.matchPool, state.matchPool.length);
    }
    state.matchRound = state.matchRemainingPool.splice(0, 6).map((record, index) => ({
      id: `${record[2]}-${record[6]}-${index}`,
      word: record[2],
      imagePath: imagePath(record)
    }));
    state.matchSelectedWord = null;
    state.matchMatched = 0;
    state.matchStartedAt = null;
    state.matchResolving = false;
    els.matchSessionLabel.textContent = `GRADE ${state.grade} · UNIT ${state.unit} · ${state.matchCategoryTitle}`;
    els.matchProgressText.textContent = "0 / 6";
    renderMatchRound();
  }

  function renderMatchRound() {
    els.matchWordGrid.replaceChildren(...sample(state.matchRound, state.matchRound.length).map((pair) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "match-word";
      button.dataset.pairId = pair.id;
      button.textContent = pair.word;
      applyTextSize(button, pair.word);
      button.addEventListener("click", () => selectMatchWord(button));
      return button;
    }));
    els.matchVisualGrid.replaceChildren(...sample(state.matchRound, state.matchRound.length).map((pair) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "match-visual";
      button.dataset.pairId = pair.id;
      button.disabled = true;
      const image = document.createElement("img");
      image.src = pair.imagePath;
      image.alt = pair.word;
      image.addEventListener("error", () => {
        image.remove();
        const placeholder = document.createElement("span");
        placeholder.className = "match-image-placeholder";
        placeholder.textContent = pair.word;
        button.append(placeholder);
      }, { once: true });
      button.append(image);
      button.addEventListener("click", () => selectMatchVisual(button));
      return button;
    }));
  }

  function selectMatchWord(button) {
    if (button.disabled || state.matchResolving) return;
    if (state.matchSelectedWord && state.matchSelectedWord !== button) {
      state.matchSelectedWord.classList.remove("selected", "revealed");
    }
    state.matchSelectedWord = button;
    button.classList.add("revealed");
    [...els.matchWordGrid.children].forEach((item) => item.classList.toggle("selected", item === button));
    setMatchVisualAvailability(true);
  }

  function selectMatchVisual(button) {
    if (!state.matchSelectedWord || button.disabled || state.matchResolving) return;
    button.classList.add("revealed");
    matchWordAndVisual(button, state.matchSelectedWord);
  }

  function matchWordAndVisual(visualButton, wordButton) {
    if (!wordButton || wordButton.disabled || visualButton.disabled) return;
    state.matchResolving = true;
    if (!state.matchStartedAt) state.matchStartedAt = Date.now();
    const isCorrect = wordButton.dataset.pairId === visualButton.dataset.pairId;
    if (!isCorrect) {
      wordButton.classList.add("wrong");
      visualButton.classList.add("wrong");
      playFeedbackSound(false);
      state.matchSelectedWord = null;
      setMatchVisualAvailability(false);
      setTimeout(() => {
        wordButton.classList.remove("selected", "wrong", "revealed");
        visualButton.classList.remove("wrong", "revealed");
        state.matchResolving = false;
      }, 1000);
      return;
    }
    wordButton.disabled = true;
    visualButton.disabled = true;
    wordButton.classList.remove("selected");
    wordButton.classList.add("correct");
    visualButton.classList.add("correct");
    state.matchSelectedWord = null;
    setMatchVisualAvailability(false);
    state.matchMatched += 1;
    els.matchProgressText.textContent = `${state.matchMatched} / 6`;
    playFeedbackSound(true);
    if (state.matchMatched === 6) setTimeout(showMatchRoundResult, 700);
    else state.matchResolving = false;
  }

  function setMatchVisualAvailability(isAvailable) {
    [...els.matchVisualGrid.children].forEach((button) => {
      if (button.classList.contains("correct")) return;
      button.disabled = !isAvailable;
      button.classList.toggle("ready", isAvailable);
    });
  }

  function formatMatchTime(milliseconds) {
    const totalSeconds = Math.max(0, Math.round(milliseconds / 1000));
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function showMatchRoundResult() {
    const elapsed = state.matchStartedAt ? Date.now() - state.matchStartedAt : 0;
    els.matchTimeText.textContent = `Your time is: ${formatMatchTime(elapsed)}`;
    els.matchResultMessage.textContent = `6 ${state.matchCategoryTitle.toLowerCase()} words matched.`;
    els.matchScreen.classList.add("hidden");
    els.matchResult.classList.remove("hidden");
  }

  function normalizeAnagram(word) {
    return String(word || "").toUpperCase().replace(/[^A-Z]/g, "");
  }

  function shuffledLetters(word) {
    const letters = [...normalizeAnagram(word)];
    for (let attempt = 0; attempt < 500; attempt += 1) {
      const shuffled = sample(letters, letters.length);
      if (shuffled.every((letter, index) => letter !== letters[index])) return shuffled;
    }
    return letters.map((_, index) => letters[(index + 1) % letters.length]);
  }

  function canDerange(word) {
    const letters = [...normalizeAnagram(word)];
    if (letters.length < 2) return false;
    const counts = new Map();
    letters.forEach((letter) => counts.set(letter, (counts.get(letter) || 0) + 1));
    return Math.max(...counts.values()) <= letters.length / 2;
  }

  function isEligibleAnagramWord(word) {
    const value = String(word || "").trim();
    return /^[A-Za-z]{5,11}$/.test(value) && canDerange(value);
  }

  function startAnagram(pool, categoryTitle) {
    const eligiblePool = eligibleAnagramRecords(pool || getUnitPool());
    if (!eligiblePool.length) return;
    state.anagramQuestions = sample(eligiblePool, Math.min(10, eligiblePool.length));
    state.anagramIndex = 0;
    state.anagramScore = 0;
    state.anagramMistakes = 0;
    state.anagramCategoryTitle = categoryTitle || "ALL WORDS";
    closeExercises();
    els.anagramCategoryModal.classList.add("hidden");
    els.setup.classList.add("hidden");
    els.presentation.classList.add("hidden");
    els.anagramScreen.classList.remove("hidden");
    els.anagramResult.classList.add("hidden");
    renderAnagramQuestion();
  }

  function renderAnagramQuestion() {
    clearTimeout(state.anagramTransitionTimer);
    const record = state.anagramQuestions[state.anagramIndex];
    state.anagramSolved = false;
    state.anagramMistakes = 0;
    els.anagramSessionLabel.textContent = `GRADE ${state.grade} · UNIT ${state.unit} · ${state.anagramCategoryTitle}`;
    els.anagramProgressText.textContent = `${state.anagramIndex + 1} / ${state.anagramQuestions.length}`;
    els.anagramImage.src = imagePath(record);
    els.anagramImage.alt = `Image for the anagram word`;
    els.anagramFeedback.textContent = "Drag the letters into the correct order.";
    els.anagramFeedback.className = "anagram-feedback";
    updateAnagramMistakeCount();
    els.anagramTiles.replaceChildren();
    const letters = shuffledLetters(record[2]);
    els.anagramTiles.style.setProperty("--tile-count", letters.length);
    letters.forEach((letter, index) => {
      const tile = document.createElement("button");
      tile.className = "letter-tile";
      tile.type = "button";
      tile.draggable = true;
      tile.dataset.letter = letter;
      tile.dataset.tileId = `${Date.now()}-${index}`;
      tile.textContent = letter;
      tile.addEventListener("dragstart", () => {
        state.draggedAnagramTile = tile;
        tile.classList.add("dragging");
      });
      tile.addEventListener("dragend", () => {
        state.draggedAnagramTile = null;
        tile.classList.remove("dragging");
        updateAnagramTilePositions();
      });
      tile.addEventListener("dragover", (event) => event.preventDefault());
      tile.addEventListener("drop", (event) => reorderAnagramTile(event, tile));
      els.anagramTiles.append(tile);
    });
    updateAnagramTilePositions(false);
  }

  function reorderAnagramTile(event, target) {
    event.preventDefault();
    const dragged = state.draggedAnagramTile;
    if (!dragged || dragged === target || state.anagramSolved) return;
    const targetBounds = target.getBoundingClientRect();
    const dropAfterTarget = event.clientX > targetBounds.left + targetBounds.width / 2;
    placeAnagramTile(dragged, dropAfterTarget ? target.nextSibling : target);
  }

  function reorderAnagramGap(event) {
    event.preventDefault();
    if (event.target.closest(".letter-tile")) return;

    const dragged = state.draggedAnagramTile;
    if (!dragged || state.anagramSolved) return;
    const tiles = [...els.anagramTiles.children].filter((tile) => tile !== dragged);
    const reference = tiles.find((tile) => {
      const bounds = tile.getBoundingClientRect();
      return event.clientX < bounds.left + bounds.width / 2;
    }) || null;
    placeAnagramTile(dragged, reference);
  }

  function placeAnagramTile(dragged, reference) {
    if (reference === dragged || reference === dragged.nextElementSibling) return;
    els.anagramTiles.insertBefore(dragged, reference);
    dragged.classList.remove("dragging");
    const placement = updateAnagramTilePositions();
    if (placement.allCorrect) {
      completeAnagramWord();
    } else if (placement.draggedCorrect) {
      playAnagramCorrectTone();
    } else {
      registerAnagramMistake(dragged);
    }
  }

  function updateAnagramTilePositions() {
    const expected = normalizeAnagram(state.anagramQuestions[state.anagramIndex]?.[2]);
    let allCorrect = true;
    let draggedCorrect = false;
    [...els.anagramTiles.children].forEach((tile, index) => {
      const isCorrectPosition = tile.dataset.letter === expected[index];
      if (!isCorrectPosition) allCorrect = false;
      if (tile === state.draggedAnagramTile && isCorrectPosition) draggedCorrect = true;
      tile.classList.toggle("correct-position", isCorrectPosition);
      tile.draggable = !isCorrectPosition && !state.anagramSolved;
      tile.disabled = isCorrectPosition || state.anagramSolved;
    });
    return { allCorrect, draggedCorrect };
  }

  function playAnagramCorrectTone() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    try {
      state.anagramAudioContext ||= new AudioContext();
      const context = state.anagramAudioContext;
      const start = context.currentTime;
      const gain = context.createGain();
      gain.connect(context.destination);
      gain.gain.setValueAtTime(.001, start);
      gain.gain.exponentialRampToValueAtTime(.08, start + .015);
      gain.gain.exponentialRampToValueAtTime(.001, start + .18);
      [660, 880].forEach((frequency, index) => {
        const oscillator = context.createOscillator();
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(frequency, start + index * .055);
        oscillator.connect(gain);
        oscillator.start(start + index * .055);
        oscillator.stop(start + .19);
      });
    } catch {
      // The anagram remains fully playable when browser audio is unavailable.
    }
  }

  function playAnagramWrongTone() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    try {
      state.anagramAudioContext ||= new AudioContext();
      const context = state.anagramAudioContext;
      const start = context.currentTime;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "sawtooth";
      oscillator.frequency.setValueAtTime(145, start);
      oscillator.frequency.exponentialRampToValueAtTime(85, start + .18);
      gain.gain.setValueAtTime(.001, start);
      gain.gain.exponentialRampToValueAtTime(.14, start + .02);
      gain.gain.exponentialRampToValueAtTime(.001, start + .2);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(start);
      oscillator.stop(start + .21);
    } catch {
      // The exercise stays playable if browser audio is unavailable.
    }
  }

  function updateAnagramMistakeCount() {
    const lives = Math.max(0, 3 - state.anagramMistakes);
    els.anagramMistakeCount.innerHTML = `LIVES ${Array.from({ length: 3 }, (_, index) => `<span class="anagram-heart${index < lives ? "" : " lost"}">&#9829;</span>`).join("")}`;
  }

  function registerAnagramMistake(tile) {
    state.anagramMistakes += 1;
    updateAnagramMistakeCount();
    tile.classList.add("wrong-drop");
    setTimeout(() => tile.classList.remove("wrong-drop"), 360);
    if (state.anagramMistakes >= 3) {
      restartAnagramWord();
      return;
    }
    playAnagramWrongTone();
    els.anagramFeedback.textContent = `${3 - state.anagramMistakes} mistake${state.anagramMistakes === 2 ? "" : "s"} left.`;
    els.anagramFeedback.className = "anagram-feedback wrong";
  }

  function lockAnagramTiles() {
    [...els.anagramTiles.children].forEach((tile) => {
      tile.draggable = false;
      tile.disabled = true;
    });
  }

  function completeAnagramWord() {
    if (state.anagramSolved) return;
    state.anagramSolved = true;
    state.anagramScore += 1;
    lockAnagramTiles();
    playFeedbackSound(true);
    els.anagramFeedback.textContent = `Correct! ${state.anagramQuestions[state.anagramIndex][2]}`;
    els.anagramFeedback.className = "anagram-feedback correct";
    state.anagramTransitionTimer = setTimeout(nextAnagramQuestion, 1100);
  }

  function restartAnagramWord() {
    if (state.anagramSolved) return;
    state.anagramSolved = true;
    lockAnagramTiles();
    playFeedbackSound(false);
    els.anagramFeedback.textContent = "No lives left. Try this word again!";
    els.anagramFeedback.className = "anagram-feedback wrong";
    state.anagramTransitionTimer = setTimeout(renderAnagramQuestion, 850);
  }

  function nextAnagramQuestion() {
    state.anagramIndex += 1;
    if (state.anagramIndex >= state.anagramQuestions.length) {
      showAnagramResults();
    } else {
      renderAnagramQuestion();
    }
  }

  function showAnagramResults() {
    els.anagramResultScore.textContent = `${state.anagramScore} / ${state.anagramQuestions.length}`;
    els.anagramResultMessage.textContent = `${state.anagramScore} words solved correctly.`;
    els.anagramResult.classList.remove("hidden");
    els.anagramScreen.querySelector(".anagram-card").classList.add("hidden");
  }

  function activateCategory(index) {
    state.categoryIndex = index;
    state.pool = state.categorySequence[index].records;
    state.index = 0;
    state.completedCheckpoints.clear();
    state.completedRelationCheckpoints.clear();
    showCategoryIntro();
  }

  function showCategoryIntro() {
    const category = state.categorySequence[state.categoryIndex];
    state.mode = "categoryIntro";
    els.wordView.classList.add("hidden");
    els.quizView.classList.add("hidden");
    els.categoryIntroTitle.textContent = category.title;
    els.categoryIntroNumber.textContent = String(state.categoryIndex + 1).padStart(2, "0");
    els.categoryIntroCount.textContent = `${category.records.length} WORDS`;
    els.categoryIntro.classList.remove("hidden");
    updateChrome();
  }

  function renderWord() {
    clearTimeout(state.categoryIntroTimer);
    clearTimeout(state.revealTimer);
    clearTimeout(state.anagramTransitionTimer);
    clearTimeout(state.speechTimer);
    window.speechSynthesis?.cancel();
    stopFeedbackAudio();
    state.mode = "word";
    state.wordStage = "guess";
    const record = state.pool[state.index];
    els.categoryIntro.classList.add("hidden");
    els.wordView.classList.remove("hidden");
    els.quizView.classList.add("hidden");
    els.englishWord.textContent = record[2];
    applyTextSize(els.englishWord, record[2]);
    els.turkishMeaning.textContent = TurkishAdapter.getMeaning(record);
    els.englishDefinition.textContent = record[0];
    els.wordGuessPanel.classList.remove("hidden");
    els.wordTitleRow.classList.add("hidden");
    els.meaningBlock.classList.add("hidden");
    els.revealTurkish.classList.remove("hidden");
    els.turkishMeaning.classList.add("hidden");
    els.definitionBlock.classList.add("hidden");
    els.wordRelations.classList.add("hidden");
    renderWordGuessOptions(record);
    els.wordImage.alt = `Image for the word ${record[2]}`;
    els.imageFallback.classList.add("hidden");
    els.wordImage.classList.remove("hidden");
    els.wordImage.src = imagePath(record);
    els.wordImage.onerror = () => {
      els.wordImage.classList.add("hidden");
      els.imageFallback.classList.remove("hidden");
    };
    updateChrome();
  }

  function renderWordGuessOptions(record) {
    const wrong = sample(getSafeDistractors(record), 2);
    const choices = sample([record, ...wrong], 3);
    els.wordGuessOptions.replaceChildren();
    choices.forEach((choice) => {
      const button = document.createElement("button");
      button.className = "word-guess-option";
      button.textContent = choice[2];
      applyTextSize(button, choice[2]);
      button.addEventListener("click", () => answerWordGuess(button, choice[2] === record[2], record[2]));
      els.wordGuessOptions.append(button);
    });
  }

  function answerWordGuess(selectedButton, isCorrect, answer) {
    if (state.mode !== "word" || state.wordStage !== "guess") return;
    state.wordStage = "feedback";
    const answeredIndex = state.index;
    [...els.wordGuessOptions.children].forEach((button) => {
      button.disabled = true;
      if (button.textContent === answer) button.classList.add("correct");
    });
    if (!isCorrect) selectedButton.classList.add("wrong");
    Promise.all([playFeedbackSound(isCorrect), wait(1200)]).then(() => {
      if (state.mode === "word" && state.wordStage === "feedback" && state.index === answeredIndex) {
        revealEnglish();
      }
    });
  }

  function revealEnglish() {
    if (state.mode !== "word" || state.wordStage !== "feedback") return;
    state.wordStage = "english";
    els.wordGuessPanel.classList.add("hidden");
    els.wordTitleRow.classList.remove("hidden");
    els.meaningBlock.classList.remove("hidden");
    els.definitionBlock.classList.remove("hidden");
    renderWordRelations(state.pool[state.index]);
    speakWordTwice();
    updateChrome();
  }

  function speakWord() {
    if (!("speechSynthesis" in window) || !state.pool[state.index]) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(state.pool[state.index][2].toLowerCase());
    utterance.lang = "en-US";
    utterance.rate = .82;
    utterance.pitch = 1;
    const englishVoice = window.speechSynthesis.getVoices().find((voice) => voice.lang.startsWith("en"));
    if (englishVoice) utterance.voice = englishVoice;
    window.speechSynthesis.speak(utterance);
  }

  function speakWordTwice() {
    clearTimeout(state.speechTimer);
    speakWord();
    state.speechTimer = setTimeout(speakWord, 2000);
  }

  function wait(milliseconds) {
    return new Promise((resolve) => {
      state.revealTimer = setTimeout(resolve, milliseconds);
    });
  }

  function stopFeedbackAudio() {
    if (!state.feedbackAudio) return;
    state.feedbackAudio.pause();
    state.feedbackAudio.currentTime = 0;
    state.feedbackAudio = null;
  }

  function playFeedbackSound(isCorrect) {
    window.speechSynthesis?.cancel();
    clearTimeout(state.speechTimer);
    stopFeedbackAudio();

    return new Promise((resolve) => {
      const audio = new Audio(isCorrect ? "sounds/correct.mp3" : "sounds/wrong.mp3");
      state.feedbackAudio = audio;
      audio.volume = .8;
      const finish = () => {
        if (state.feedbackAudio === audio) state.feedbackAudio = null;
        resolve();
      };
      audio.addEventListener("ended", finish, { once: true });
      audio.addEventListener("error", finish, { once: true });
      audio.play().catch(finish);
    });
  }

  function revealTurkish() {
    if (state.mode !== "word" || state.wordStage !== "english") return;
    state.wordStage = "turkish";
    els.revealTurkish.classList.add("hidden");
    els.turkishMeaning.classList.remove("hidden");
    updateChrome();
  }

  function renderWordRelations(record) {
    const synonyms = new Set();
    const opposites = new Set();
    synonymGroups.forEach(([grade, unit, ...words]) => {
      if (grade === record[3] && unit === record[5] && words.includes(record[2])) {
        words.filter((word) => word !== record[2]).forEach((word) => synonyms.add(word));
      }
    });
    (typeof OPPOSITE_PAIRS === "undefined" ? [] : OPPOSITE_PAIRS).forEach((group) => {
      if (!Array.isArray(group) || group.length < 4 || group[0] !== record[3] || group[1] !== record[5]) return;
      const words = group.slice(2);
      if (!words.includes(record[2])) return;
      if (words.length === 2) words.filter((word) => word !== record[2]).forEach((word) => opposites.add(word));
      else if (record[2] === words[0]) words.slice(1).forEach((word) => opposites.add(word));
      else opposites.add(words[0]);
    });
    els.synonymInfo.textContent = synonyms.size ? `SYNONYMS: ${[...synonyms].join(", ")}` : "";
    els.oppositeInfo.textContent = opposites.size ? `OPPOSITES: ${[...opposites].join(", ")}` : "";
    els.synonymInfo.classList.toggle("hidden", !synonyms.size);
    els.oppositeInfo.classList.toggle("hidden", !opposites.size);
    els.wordRelations.classList.toggle("hidden", !synonyms.size && !opposites.size);
  }

  function updateChrome() {
    const atEnd = state.index === state.pool.length - 1;
    const category = state.categorySequence[state.categoryIndex];
    els.sessionLabel.textContent = `GRADE ${state.grade} · UNIT ${state.unit}`;
    els.categoryHeader.textContent = category ? category.title.toUpperCase() : "ALL VOCABULARY";
    els.progressText.textContent = `${state.index + 1} / ${state.pool.length}`;
    els.progressBar.style.width = `${((state.index + 1) / state.pool.length) * 100}%`;
    els.navigation.classList.toggle("hidden", ["offer", "results", "farewell", "categoryIntro"].includes(state.mode));
    els.previous.classList.toggle("hidden", state.index === 0 || state.mode !== "word");
    els.next.textContent = state.mode !== "word" ? "Continue →" : atEnd ? "Finish Presentation ✓" : "Next →";
    els.next.classList.toggle("hidden", state.mode === "word" && state.wordStage !== "turkish");
    els.next.disabled = state.mode !== "word" || state.wordStage !== "turkish";
    renderDots();
  }

  function renderDots() {
    els.dots.replaceChildren();
    state.pool.forEach((_, index) => {
      const dot = document.createElement("span");
      if (index === state.index) dot.classList.add("active");
      if ((index + 1) % 5 === 0 && state.completedCheckpoints.has(index + 1)) dot.classList.add("quiz-done");
      if ((index + 1) % 7 === 0 && state.completedRelationCheckpoints.has(index + 1)) dot.classList.add("relation-done");
      els.dots.append(dot);
    });
  }

  function pendingCheckpoint() {
    const checkpoint = state.index + 1;
    if (checkpoint % 5 === 0 && !state.completedCheckpoints.has(checkpoint)) return "quiz";
    if (checkpoint % 7 === 0 && !state.completedRelationCheckpoints.has(checkpoint)) return "relation";
    return null;
  }

  function next() {
    if (state.mode === "finalQuiz") {
      state.finalQuizIndex += 1;
      if (state.finalQuizIndex >= state.finalQuizQuestions.length) showQuizResults();
      else renderFinalQuizQuestion();
      return;
    }
    if (state.mode !== "word") {
      if (state.mode === "quiz") state.completedCheckpoints.add(state.quizCheckpoint);
      if (state.mode === "relation") state.completedRelationCheckpoints.add(state.quizCheckpoint);
      showCheckpointOrAdvance();
      return;
    }
    showCheckpointOrAdvance();
  }

  function showCheckpointOrAdvance() {
    const checkpoint = pendingCheckpoint();
    if (checkpoint === "quiz") {
      showQuiz();
    } else if (checkpoint === "relation") {
      showRelationQuiz();
    } else if (state.index < state.pool.length - 1) {
      state.index += 1;
      renderWord();
    } else {
      advanceCategoryOrFinish();
    }
  }

  function advanceCategoryOrFinish() {
    if (state.categoryIndex < state.categorySequence.length - 1) {
      activateCategory(state.categoryIndex + 1);
    } else {
      finishPresentation();
    }
  }

  function previous() {
    if (state.mode === "word" && state.index > 0) {
      state.index -= 1;
      renderWord();
    }
  }

  function sample(items, count) {
    return [...items].sort(() => Math.random() - .5).slice(0, count);
  }

  function uniqueByAnswer(items) {
    return [...new Map(items.map((item) => [item[2], item])).values()];
  }

  function applyTextSize(element, text) {
    const length = String(text || "").length;
    element.classList.remove("text-long", "text-xlong", "text-xxlong");
    if (length >= 24) element.classList.add("text-xxlong");
    else if (length >= 17) element.classList.add("text-xlong");
    else if (length >= 12) element.classList.add("text-long");
  }

  function normalizeMeaning(value) {
    return String(value || "")
      .toLocaleUpperCase("tr-TR")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
  }

  function getSynonyms(record) {
    const related = new Set([record[2]]);
    synonymGroups.forEach((group) => {
      const [grade, unit, ...words] = group;
      if (grade === record[3] && unit === record[5] && words.includes(record[2])) {
        words.forEach((word) => related.add(word));
      }
    });
    return related;
  }

  function getSafeDistractors(record) {
    const synonyms = getSynonyms(record);
    const rivalsExclusions = new Set(
      typeof RivalsDistractorAdapter === "undefined"
        ? []
        : RivalsDistractorAdapter.get(record[3], record[5], record[2])
    );
    const meaning = normalizeMeaning(TurkishAdapter.getMeaning(record));
    const image = imagePath(record);
    const definition = String(record[0] || "").trim().toLowerCase();

    const safe = uniqueByAnswer(state.pool.filter((candidate) => {
      if (synonyms.has(candidate[2])) return false;
      if (rivalsExclusions.has(candidate[2])) return false;
      if (
        typeof RivalsDistractorAdapter !== "undefined"
        && RivalsDistractorAdapter.get(candidate[3], candidate[5], candidate[2]).includes(record[2])
      ) return false;
      if (image && imagePath(candidate) === image) return false;
      if (meaning && normalizeMeaning(TurkishAdapter.getMeaning(candidate)) === meaning) return false;
      if (definition && String(candidate[0] || "").trim().toLowerCase() === definition) return false;
      return true;
    }));

    if (safe.length >= 3) return safe;
    return uniqueByAnswer(state.pool.filter((candidate) => {
      if (synonyms.has(candidate[2]) || rivalsExclusions.has(candidate[2])) return false;
      return typeof RivalsDistractorAdapter === "undefined"
        || !RivalsDistractorAdapter.get(candidate[3], candidate[5], candidate[2]).includes(record[2]);
    }));
  }

  function showQuiz() {
    state.mode = "quiz";
    state.quizCheckpoint = state.index + 1;
    const recentStart = Math.max(0, state.index - 4);
    const recent = state.pool.slice(recentStart, state.index + 1);
    const answer = sample(recent, 1)[0];
    const wrong = sample(getSafeDistractors(answer), 3);
    const choices = sample([answer, ...wrong], 4);

    els.wordView.classList.add("hidden");
    els.quizView.classList.remove("hidden");
    els.quizBadge.textContent = "5 WORD CHECK";
    els.quizQuestion.textContent = "Which word matches this image?";
    els.quizHint.textContent = "Recall one of the last five words.";
    els.relationWord.classList.add("hidden");
    els.quizImage.src = imagePath(answer);
    els.quizFeedback.textContent = "";
    els.quizOptions.replaceChildren();

    choices.forEach((choice) => {
      const button = document.createElement("button");
      button.className = "quiz-option";
      button.textContent = choice[2];
      applyTextSize(button, choice[2]);
      button.addEventListener("click", () => answerQuiz(button, choice[2] === answer[2], answer[2]));
      els.quizOptions.append(button);
    });
    updateChrome();
  }

  function showRelationQuiz() {
    const relation = createRelationQuestion();
    if (!relation) {
      state.completedRelationCheckpoints.add(state.index + 1);
      showCheckpointOrAdvance();
      return;
    }

    state.mode = "relation";
    state.quizCheckpoint = state.index + 1;
    els.wordView.classList.add("hidden");
    els.quizView.classList.remove("hidden");
    els.quizBadge.textContent = `7 WORD ${relation.type} CHECK`;
    els.quizQuestion.textContent = `Which one is the ${relation.type} of this word?`;
    els.quizHint.textContent = "Choose the word with the correct relationship.";
    els.quizImage.src = imagePath(relation.source);
    els.relationWord.textContent = relation.source[2];
    applyTextSize(els.relationWord, relation.source[2]);
    els.relationWord.classList.remove("hidden");
    els.quizFeedback.textContent = "";
    els.quizOptions.replaceChildren();

    relation.choices.forEach((word) => {
      const button = document.createElement("button");
      button.className = "quiz-option";
      button.textContent = word;
      applyTextSize(button, word);
      button.addEventListener("click", () => answerQuiz(button, word === relation.answer, relation.answer));
      els.quizOptions.append(button);
    });
    updateChrome();
  }

  function createRelationQuestion() {
    const poolByWord = new Map(state.pool.map((record) => [record[2], record]));
    const synonymRelations = synonymGroups
      .filter(([grade, unit]) => grade === state.grade && unit === state.unit)
      .flatMap((group) => {
        const words = group.slice(2);
        return words.filter((word) => poolByWord.has(word)).map((word) => ({
          type: "SYNONYM",
          source: poolByWord.get(word),
          answers: words.filter((candidate) => candidate !== word)
        }));
      });
    const oppositeRelations = (typeof OPPOSITE_PAIRS === "undefined" ? [] : OPPOSITE_PAIRS)
      .filter((group) => Array.isArray(group) && group.length >= 4 && group[0] === state.grade && group[1] === state.unit)
      .flatMap((group) => {
        const words = group.slice(2);
        if (words.length > 2) {
          return poolByWord.has(words[0]) ? [{ type: "OPPOSITE", source: poolByWord.get(words[0]), answers: words.slice(1) }] : [];
        }
        return words.filter((word) => poolByWord.has(word)).map((word) => ({
          type: "OPPOSITE",
          source: poolByWord.get(word),
          answers: words.filter((candidate) => candidate !== word)
        }));
      });
    const relation = sample([...synonymRelations, ...oppositeRelations].filter((item) => item.answers.length), 1)[0];
    if (!relation) return null;

    const answer = sample(relation.answers, 1)[0];
    const excluded = new Set([relation.source[2], ...relation.answers]);
    const distractors = sample(
      uniqueByAnswer(state.pool.filter((record) => !excluded.has(record[2]))).map((record) => record[2]),
      3
    );
    return { ...relation, answer, choices: sample([answer, ...distractors], 4) };
  }

  function answerQuiz(selectedButton, isCorrect, answer) {
    [...els.quizOptions.children].forEach((button) => {
      button.disabled = true;
      if (button.textContent === answer) button.classList.add("correct");
    });
    if (!isCorrect) selectedButton.classList.add("wrong");
    playFeedbackSound(isCorrect);
    if (state.mode === "finalQuiz") {
      if (isCorrect) {
        state.finalQuizScore += 1;
      } else {
        state.finalQuizMistakes.push({
          record: state.finalQuizQuestions[state.finalQuizIndex],
          selected: selectedButton.textContent,
          answer
        });
      }
    }
    els.quizFeedback.textContent = isCorrect ? "Great, correct answer!" : `Correct answer: ${answer}`;
    els.quizFeedback.style.color = isCorrect ? "#13795b" : "#a83a25";
    els.next.disabled = false;
  }

  function finishPresentation() {
    clearTimeout(state.revealTimer);
    clearTimeout(state.categoryIntroTimer);
    clearTimeout(state.speechTimer);
    window.speechSynthesis?.cancel();
    stopFeedbackAudio();
    state.completedCheckpoints.clear();
    state.completedRelationCheckpoints.clear();
    state.mode = "offer";
    hidePresentationViews();
    els.finishOffer.classList.remove("hidden");
    updateChrome();
  }

  function startFinalQuiz() {
    state.pool = getUnitPool();
    const shuffled = sample(state.pool, state.pool.length);
    state.finalQuizQuestions = shuffled.slice(0, 20);
    while (state.finalQuizQuestions.length < 20) {
      state.finalQuizQuestions.push(state.pool[state.finalQuizQuestions.length % state.pool.length]);
    }
    state.finalQuizIndex = 0;
    state.finalQuizScore = 0;
    state.finalQuizMistakes = [];
    state.mode = "finalQuiz";
    els.setup.classList.add("hidden");
    els.presentation.classList.remove("hidden");
    renderFinalQuizQuestion();
  }

  function renderFinalQuizQuestion() {
    const answer = state.finalQuizQuestions[state.finalQuizIndex];
    const choices = sample([answer, ...sample(getSafeDistractors(answer), 3)], 4);
    hidePresentationViews();
    els.quizView.classList.remove("hidden");
    els.navigation.classList.remove("hidden");
    els.quizBadge.textContent = `20 WORD QUIZ · ${state.finalQuizIndex + 1} / 20`;
    els.quizQuestion.textContent = "Which word matches this image?";
    els.quizHint.textContent = "Choose the correct word.";
    els.quizImage.src = imagePath(answer);
    els.relationWord.classList.add("hidden");
    els.quizFeedback.textContent = "";
    els.quizOptions.replaceChildren();
    choices.forEach((choice) => {
      const button = document.createElement("button");
      button.className = "quiz-option";
      button.textContent = choice[2];
      applyTextSize(button, choice[2]);
      button.addEventListener("click", () => answerQuiz(button, choice[2] === answer[2], answer[2]));
      els.quizOptions.append(button);
    });
    els.sessionLabel.textContent = `Grade ${state.grade} · Unit ${state.unit}`;
    els.categoryHeader.textContent = "20 WORD QUIZ";
    els.progressText.textContent = `${state.finalQuizIndex + 1} / 20`;
    els.progressBar.style.width = `${((state.finalQuizIndex + 1) / 20) * 100}%`;
    els.previous.classList.add("hidden");
    els.next.textContent = state.finalQuizIndex === 19 ? "SEE RESULTS →" : "NEXT QUESTION →";
    els.next.classList.remove("hidden");
    els.next.disabled = true;
  }

  function showQuizResults() {
    state.mode = "results";
    hidePresentationViews();
    els.quizResults.classList.remove("hidden");
    els.quizResultScore.textContent = `${state.finalQuizScore} / 20`;
    els.quizResultMessage.textContent = `${state.finalQuizScore} correct · ${20 - state.finalQuizScore} incorrect`;
    renderQuizMistakes();
    updateChrome();
    els.progressText.textContent = "20 / 20";
    els.progressBar.style.width = "100%";
  }

  function renderQuizMistakes() {
    els.quizMistakes.replaceChildren();
    if (!state.finalQuizMistakes.length) {
      const perfect = document.createElement("p");
      perfect.className = "perfect-score";
      perfect.textContent = "Perfect score! No words to review.";
      els.quizMistakes.append(perfect);
      return;
    }

    state.finalQuizMistakes.forEach((mistake, index) => {
      const card = document.createElement("article");
      card.className = "mistake-card";
      card.innerHTML = `
        <img src="${imagePath(mistake.record)}" alt="Image for ${mistake.answer}">
        <div>
          <span>QUESTION ${index + 1}</span>
          <p class="mistake-selected">YOUR ANSWER: <strong>${mistake.selected}</strong></p>
          <p class="mistake-correct">CORRECT ANSWER: <strong>${mistake.answer}</strong></p>
        </div>
      `;
      els.quizMistakes.append(card);
    });
  }

  // ──────────────────────────────── ODD ONE OUT ────────────────────────────────

  function buildOddOneOutPool() {
    const unitRecords = getUnitPool();
    const categories = getCategories()
      .map((cat) => ({
        id: cat.id,
        title: cat.title,
        records: unitRecords.filter((r) => cat.words.includes(r[2]))
      }))
      .filter((cat) => cat.records.length >= 1);

    if (categories.length < 2) return [];

    const questions = [];
    const attempts = 200;
    for (let i = 0; i < attempts && questions.length < 40; i++) {
      const dominantIdx = Math.floor(Math.random() * categories.length);
      const dominant = categories[dominantIdx];
      if (dominant.records.length < 3) continue;

      const oddCandidates = categories.filter((_, idx) => idx !== dominantIdx && _.records.length >= 1);
      if (!oddCandidates.length) continue;
      const oddCat = oddCandidates[Math.floor(Math.random() * oddCandidates.length)];

      const picked3 = sample(dominant.records, 3);
      const picked1 = sample(oddCat.records, 1)[0];
      const options = sample([...picked3.map((r) => ({ record: r, categoryId: dominant.id, categoryTitle: dominant.title })),
        { record: picked1, categoryId: oddCat.id, categoryTitle: oddCat.title }], 4);

      const correctIdx = options.findIndex((o) => o.categoryId === oddCat.id);
      questions.push({ options, correctIdx });
    }
    return questions;
  }

  function startOddOneOut() {
    state.oddPool = buildOddOneOutPool();
    if (!state.oddPool.length) return;
    state.oddIndex = 0;
    state.oddGroupCorrect = 0;
    state.oddAnswered = false;
    closeExercises();
    els.setup.classList.add("hidden");
    els.presentation.classList.add("hidden");
    els.oddOneOutScreen.classList.remove("hidden");
    els.oooCard.classList.remove("hidden");
    els.oooGroupEnd.classList.add("hidden");
    renderOddOneOutQuestion();
  }

  function renderOddOneOutQuestion() {
    state.oddAnswered = false;
    const total = state.oddPool.length;
    const groupStart = Math.floor(state.oddIndex / 10) * 10;
    const posInGroup = state.oddIndex - groupStart + 1;
    const groupSize = Math.min(10, total - groupStart);

    els.oooSessionLabel.textContent = `GRADE ${state.grade} · UNIT ${state.unit}`;
    els.oooProgressText.textContent = `${posInGroup} / ${groupSize}`;
    els.oooFeedback.textContent = "";
    els.oooFeedback.className = "ooo-feedback";
    els.oooActions.replaceChildren();

    const question = state.oddPool[state.oddIndex];
    els.oooOptions.replaceChildren(...question.options.map((option, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ooo-option";
      const imgWrap = document.createElement("div");
      imgWrap.className = "ooo-option-image";
      const img = document.createElement("img");
      img.src = imagePath(option.record);
      img.alt = option.record[2];
      imgWrap.append(img);
      const label = document.createElement("span");
      label.className = "ooo-option-word";
      label.textContent = option.record[2];
      applyTextSize(label, option.record[2]);
      btn.append(imgWrap, label);
      btn.addEventListener("click", () => checkOddOneOut(idx, question));
      return btn;
    }));
  }

  function checkOddOneOut(selectedIdx, question) {
    if (state.oddAnswered) return;
    state.oddAnswered = true;

    const isCorrect = selectedIdx === question.correctIdx;
    const buttons = [...els.oooOptions.children];

    buttons.forEach((btn) => {
      btn.disabled = true;
      btn.classList.add("revealed");
    });

    if (isCorrect) {
      state.oddGroupCorrect++;
      buttons[selectedIdx].classList.add("ooo-correct");
      els.oooFeedback.textContent = "Correct!";
      els.oooFeedback.className = "ooo-feedback correct";
      playFeedbackSound(true);
    } else {
      buttons[selectedIdx].classList.add("ooo-wrong");
      buttons[question.correctIdx].classList.add("ooo-highlight", "ooo-shake");
      els.oooFeedback.textContent = "Not quite — see the highlighted answer.";
      els.oooFeedback.className = "ooo-feedback wrong";
      playFeedbackSound(false);
    }

    if (window.exerciseActivityModules?.showStamp) {
      window.exerciseActivityModules.showStamp(isCorrect);
    }

    const nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "primary-button";
    nextBtn.textContent = "NEXT →";
    nextBtn.addEventListener("click", advanceOddOneOut);
    els.oooActions.replaceChildren(nextBtn);
  }

  function advanceOddOneOut() {
    const prevIndex = state.oddIndex;
    state.oddIndex++;
    const total = state.oddPool.length;
    const groupSize = Math.min(10, total - Math.floor(prevIndex / 10) * 10);
    const posInGroup = (prevIndex % 10) + 1;
    const isGroupEnd = posInGroup >= groupSize;

    if (isGroupEnd) {
      els.oooGroupScore.textContent = `${state.oddGroupCorrect} / ${groupSize}`;
      state.oddGroupCorrect = 0;
      els.oooCard.classList.add("hidden");
      els.oooGroupEnd.classList.remove("hidden");
      els.oooContinue.classList.toggle("hidden", state.oddIndex >= total);
    } else {
      renderOddOneOutQuestion();
    }
  }

  function continueOddOneOut() {
    els.oooGroupEnd.classList.add("hidden");
    els.oooCard.classList.remove("hidden");
    renderOddOneOutQuestion();
  }

  // ─────────────────────────────────────────────────────────────────────────────

  function hidePresentationViews() {
    els.wordView.classList.add("hidden");
    els.categoryIntro.classList.add("hidden");
    els.quizView.classList.add("hidden");
    els.finishOffer.classList.add("hidden");
    els.quizResults.classList.add("hidden");
    els.farewell.classList.add("hidden");
  }

  function showFarewell() {
    state.mode = "farewell";
    hidePresentationViews();
    els.farewell.classList.remove("hidden");
    updateChrome();
    setTimeout(returnToSetup, 1800);
  }

  function returnToSetup() {
    clearTimeout(state.revealTimer);
    clearTimeout(state.categoryIntroTimer);
    clearTimeout(state.speechTimer);
    window.speechSynthesis?.cancel();
    stopFeedbackAudio();
    hidePresentationViews();
    els.presentation.classList.add("hidden");
    els.anagramScreen.classList.add("hidden");
    els.matchScreen.classList.add("hidden");
    els.matchResult.classList.add("hidden");
    els.sortScreen.classList.add("hidden");
    els.sortResult.classList.add("hidden");
    clearTimeout(state.luckyTickTimer);
    state.luckySpinning = false;
    els.luckySpinScreen.classList.add("hidden");
    clearTimeout(state.memoryStudyTimer);
    clearInterval(state.memoryTimer);
    state.memoryActive = false;
    state.memoryLevel = 5;
    els.memoryScreen.classList.add("hidden");
    els.oddOneOutScreen.classList.add("hidden");
    els.exercisesModal.classList.add("hidden");
    els.categorySummaryModal.classList.add("hidden");
    els.anagramCategoryModal.classList.add("hidden");
    els.matchCategoryModal.classList.add("hidden");
    els.anagramScreen.querySelector(".anagram-card").classList.remove("hidden");
    els.setup.classList.remove("hidden");
    els.poolSummary.innerHTML = `<strong>Ready for another round</strong><span>Select a grade and unit to continue.</span>`;
  }

  function enterFullscreen() {
    if (document.fullscreenElement || !document.documentElement.requestFullscreen) return;
    document.documentElement.requestFullscreen().catch(() => {});
  }

  els.start.addEventListener("click", startPresentation);
  els.startQuiz.addEventListener("click", startFinalQuiz);
  els.viewCategories.addEventListener("click", openCategorySummary);
  els.closeCategorySummary.addEventListener("click", closeCategorySummary);
  els.exercises.addEventListener("click", openExercises);
  els.closeExercises.addEventListener("click", closeExercises);
  els.startAnagram.addEventListener("click", openAnagramCategoryChooser);
  els.closeAnagramCategories.addEventListener("click", closeAnagramCategoryChooser);
  els.startMatch.addEventListener("click", openMatchCategoryChooser);
  els.closeMatchCategories.addEventListener("click", closeMatchCategoryChooser);
  els.startSort.addEventListener("click", startSort);
  els.startOddOneOut.addEventListener("click", startOddOneOut);
  els.startLuckySpin.addEventListener("click", startLuckySpin);
  els.luckySpinBack.addEventListener("click", returnToSetup);
  els.luckySpinButton.addEventListener("click", spinLuckyWheel);
  els.luckyCorrect.addEventListener("click", () => judgeLuckySpin(true));
  els.luckyWrong.addEventListener("click", () => judgeLuckySpin(false));
  els.luckySpinContinue.addEventListener("click", continueLuckySpin);
  els.luckySpinHome.addEventListener("click", returnToSetup);
  els.oooBack.addEventListener("click", returnToSetup);
  els.oooContinue.addEventListener("click", continueOddOneOut);
  els.oooExit.addEventListener("click", returnToSetup);
  els.startMemory.addEventListener("click", startMemory);
  els.memoryBack.addEventListener("click", returnToSetup);
  els.memoryStudyNext.addEventListener("click", advanceMemoryStudy);
  els.memoryPlayAgain.addEventListener("click", playMemoryAgain);
  els.memoryHome.addEventListener("click", returnToSetup);
  els.anagramTiles.addEventListener("dragover", (event) => {
    if (state.draggedAnagramTile) event.preventDefault();
  });
  els.anagramTiles.addEventListener("drop", reorderAnagramGap);
  els.anagramBack.addEventListener("click", returnToSetup);
  els.anagramExit.addEventListener("click", returnToSetup);
  els.anagramHome.addEventListener("click", returnToSetup);
  els.matchBack.addEventListener("click", returnToSetup);
  els.matchYes.addEventListener("click", () => {
    els.matchResult.classList.add("hidden");
    els.matchScreen.classList.remove("hidden");
    startMatchRound();
  });
  els.matchNo.addEventListener("click", returnToSetup);
  els.sortBack.addEventListener("click", returnToSetup);
  els.sortNextRound.addEventListener("click", () => {
    if (els.sortNextRound.dataset.finalRound === "true") returnToSetup();
    else {
      els.sortResult.classList.add("hidden");
      els.sortScreen.classList.remove("hidden");
      startSortRound();
    }
  });
  els.next.addEventListener("click", next);
  els.previous.addEventListener("click", previous);
  els.revealTurkish.addEventListener("click", revealTurkish);
  els.speakWord.addEventListener("click", speakWord);
  els.categoryContinue.addEventListener("click", () => {
    if (state.mode === "categoryIntro") renderWord();
  });
  els.acceptQuiz.addEventListener("click", startFinalQuiz);
  els.declineQuiz.addEventListener("click", showFarewell);
  els.resultsHome.addEventListener("click", returnToSetup);
  els.back.addEventListener("click", returnToSetup);
  els.fullscreen.addEventListener("click", () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else enterFullscreen();
  });
  document.addEventListener("keydown", (event) => {
    if (els.presentation.classList.contains("hidden")) return;
    if (event.key === " " && state.mode === "word" && state.wordStage === "english") {
      event.preventDefault();
      revealTurkish();
    }
    if (event.key === "Enter" && state.mode === "categoryIntro") renderWord();
    if (event.key === "ArrowRight" && !els.next.disabled) next();
    if (event.key === "ArrowLeft") previous();
  });

  document.getElementById("unitBackButton").addEventListener("click", () => {
    state.unit = null;
    els.unitStatus.textContent = "Select a unit";
    renderUnits();
    updateSetupSummary();
    setSetupStep("grade");
  });

  renderGrades();
  renderUnits();
  updateSetupSummary();
})();
