(() => {
  const TC = window.TeamChallengers;
  const $ = (selector) => document.querySelector(selector);
  let groupCount = TC.CONFIG.defaultGroupCount;
  let groupNames = [...TC.CONFIG.groupDefaults];
  let setupGroups = [[], [], []];
  let classroomId = "";
  let state = null;
  let finalAwards = [];
  let finalTransferred = false;
  let answerTimerId = null;
  let answerSecondsLeft = TC.CONFIG.answerTimerSeconds;
  let pendingWheelValue = null;
  const allQuestions = window.TEAM_CHALLENGERS_QUESTIONS || [];
  const questionCatalog = TC.buildQuestionCatalog(allQuestions);
  let curriculumSelection = { grade: null, unit: null };
  let pickQuestion = TC.createQuestionPicker([]);
  const wheel = new TC.PointsWheel($("#points-wheel"), $("#spin-wheel-button"), TC.CONFIG.wheelSegments);
  const liteModeStorageKey = "teamChallengersLiteModeV1";

  function currentQuestionPool() { return TC.filterQuestions(allQuestions, curriculumSelection); }

  function setLiteMode(enabled) {
    document.body.classList.toggle("lite-mode", enabled);
    const button = $("#lite-mode-button"); button.textContent = enabled ? "LITE ✓" : "LITE"; button.setAttribute("aria-pressed", String(enabled));
    try { localStorage.setItem(liteModeStorageKey, enabled ? "1" : "0"); } catch {}
    TC.refreshPortraitEffects?.();
  }

  function storedLiteMode() {
    try { return localStorage.getItem(liteModeStorageKey) === "1"; } catch { return false; }
  }

  function stopAnswerTimer() {
    clearInterval(answerTimerId); answerTimerId = null; TC.stopTimerSound();
  }

  function resetAnswerTimer() {
    stopAnswerTimer(); answerSecondsLeft = TC.CONFIG.answerTimerSeconds; TC.resetAnswerTimerView();
  }

  function startAnswerTimer() {
    if (!state || state.phase !== "answer" || state.answered || answerTimerId) return;
    answerSecondsLeft = TC.CONFIG.answerTimerSeconds; TC.stopBackgroundMusic(); TC.playTimerSound(); TC.startAnswerTimerView(); TC.updateAnswerTimerView(answerSecondsLeft);
    answerTimerId = setInterval(() => {
      answerSecondsLeft -= 1; TC.updateAnswerTimerView(answerSecondsLeft);
      if (answerSecondsLeft > 0) return;
      stopAnswerTimer(); answerQuestion(-1, true);
    }, 1000);
  }

  function syncSetup() { TC.renderSetup(groupCount, groupNames, setupGroups); }

  function fillSelect(select, items, valueFor, labelFor) {
    select.replaceChildren();
    items.forEach((item) => { const option = document.createElement("option"); option.value = valueFor(item); option.textContent = labelFor(item); select.appendChild(option); });
    select.disabled = !items.length;
  }

  function refreshQuestionPool() {
    curriculumSelection = { grade: Number(TC.els.gradeSelect.value), unit: Number(TC.els.unitSelect.value) };
    const count = currentQuestionPool().length;
    TC.els.poolStatus.textContent = count ? `${count} questions ready in this unit.` : "No questions match this selection.";
    TC.els.start.disabled = !count;
  }

  function refreshUnits() {
    const grade = questionCatalog.find((item) => item.grade === Number(TC.els.gradeSelect.value));
    fillSelect(TC.els.unitSelect, grade?.units || [], (item) => item.unit, (item) => `UNIT ${item.unit}`);
    refreshQuestionPool();
  }

  function initializeCurriculumFilters() {
    fillSelect(TC.els.gradeSelect, questionCatalog, (item) => item.grade, (item) => `GRADE ${item.grade}`);
    refreshUnits();
  }

  function addManualStudent() {
    const name = TC.els.manualName.value.trim();
    const groupIndex = Number(TC.els.manualTeam.value);
    if (!name || !Number.isInteger(groupIndex) || groupIndex < 0 || groupIndex >= groupCount) return;
    setupGroups[groupIndex].push({ name, avatarPath: "", id: "" }); TC.els.manualName.value = ""; syncSetup(); TC.els.manualName.focus();
  }

  async function openRosterPicker() {
    await TC.dependenciesReady;
    TC.els.rosterDialog.hidden = false; TC.els.classroomList.replaceChildren(); TC.els.classroomMessage.textContent = "";
    const classrooms = TC.getClassrooms().filter((room) => room.roster?.some((student) => String(student?.name || "").trim()));
    if (!classrooms.length) { TC.els.classroomMessage.textContent = "Create or sync a class roster in Teacher HUD first."; return; }
    classrooms.forEach((room) => { const button = document.createElement("button"); button.type = "button"; button.className = "classroom-card"; const name = document.createElement("strong"); name.textContent = room.name || "CLASS"; const count = document.createElement("span"); count.textContent = `${TC.getPresentStudents(room).length} present · ${(room.roster || []).length} students`; button.append(name, count); button.addEventListener("click", () => { setupGroups = TC.distributeBalanced(room, groupCount).concat([[]]).slice(0, 3); classroomId = room.id; TC.setActiveClassroom(classroomId); TC.els.rosterStatus.textContent = `${room.name || "Class"}: ${TC.getPresentStudents(room).length} present students balanced across teams.`; TC.els.rosterDialog.hidden = true; syncSetup(); }); TC.els.classroomList.appendChild(button); });
  }

  function startGame() {
    const activeGroups = setupGroups.slice(0, groupCount);
    if (activeGroups.some((group) => !group.length)) { TC.showToast("Add at least one student to every team."); return; }
    const questionPool = currentQuestionPool();
    if (!questionPool.length) { TC.showToast("Choose a grade and unit with available questions."); return; }
    pickQuestion = TC.createQuestionPicker(questionPool);
    state = TC.createGameState(activeGroups, groupNames.slice(0, groupCount)); finalTransferred = false; finalAwards = []; TC.showScreen("game"); armAutoFullscreen(TC.els.game); prepareTurn();
  }

  function proceedToCurriculum() {
    const activeGroups = setupGroups.slice(0, groupCount);
    if (activeGroups.some((group) => !group.length)) { TC.showToast("Add at least one student to every team."); return; }
    TC.showScreen("selection"); armAutoFullscreen(TC.els.selection);
  }

  function prepareTurn() { resetAnswerTimer(); TC.renderGame(state); TC.showWheel(); wheel.reset(); }

  async function spinWheel() {
    if (!state || state.phase !== "spin") return;
    TC.startWheelTicks(TC.CONFIG.wheelSpinMs);
    const value = await wheel.spin();
    TC.stopWheelTicks();
    if (!value || state.phase !== "spin") return;
    if (value === 100) { TC.playFeedbackSound("cheer"); TC.launchJackpotConfetti(); }
    if (!TC.canUseJoker(state, "spinAgain")) { openQuestionForWheelValue(value); return; }
    pendingWheelValue = value; TC.renderGame(state); TC.showSpinResult(value);
  }

  function openQuestionForWheelValue(value) {
    if (!state || !value || state.phase !== "spin") return;
    const question = pickQuestion();
    if (!TC.setWheelValue(state, value, question)) return;
    pendingWheelValue = null; TC.renderGame(state); TC.showQuestion(question, value, answerQuestion);
  }

  function keepSpinResult() {
    if (!pendingWheelValue) return;
    openQuestionForWheelValue(pendingWheelValue);
  }

  function useSpinAgain() {
    if (!state || !pendingWheelValue || !TC.useJoker(state, "spinAgain")) return;
    pendingWheelValue = null; TC.renderGame(state); TC.showWheel(); wheel.reset(); spinWheel();
  }

  function useFiftyFifty() {
    if (!state || !TC.useJoker(state, "fiftyFifty")) return;
    const wrongAnswers = state.question.options.map((_, index) => index).filter((index) => index !== state.question.answer);
    for (let index = wrongAnswers.length - 1; index > 0; index -= 1) { const swapIndex = Math.floor(Math.random() * (index + 1)); [wrongAnswers[index], wrongAnswers[swapIndex]] = [wrongAnswers[swapIndex], wrongAnswers[index]]; }
    TC.eliminateAnswers(wrongAnswers.slice(0, 2)); TC.renderGame(state);
  }

  function useDoublePoints() {
    if (!state || !TC.useJoker(state, "doublePoints")) return;
    TC.activateDoublePoints(state.wheelValue * 2); TC.renderGame(state);
  }

  function answerQuestion(index, timedOut = false) {
    const groupId = TC.activeTurn(state).group.id;
    const result = TC.answerCurrentQuestion(state, index); if (!result) return;
    stopAnswerTimer();
    TC.playFeedbackSound(result.correct && state.wheelValue === 100 ? "cheer2" : result.correct ? "correct" : "wrong");
    TC.renderGame(state); TC.showFeedback(result, index, state.question.answer, timedOut);
    if (result.correct) TC.celebrateActivePortrait();
    requestAnimationFrame(() => TC.animateScoreFlight(result.points, index, groupId));
  }

  function nextTurn() {
    pendingWheelValue = null;
    const result = TC.advanceTurn(state);
    if (result === "roundComplete") { TC.renderRound(state); TC.showScreen("round"); return; }
    prepareTurn();
  }

  function handleNextTurn() {
    if (TC.els.nextTurn.dataset.action === "reveal") { TC.revealAnswer(state?.question?.answer); return; }
    nextTurn();
  }

  function closeAwardBreakdown() {
    const overlay = $("#award-breakdown-overlay");
    overlay.classList.remove("open"); overlay.setAttribute("aria-hidden", "true");
  }

  function continueRound() { TC.continueRound(state); TC.showScreen("game"); prepareTurn(); }

  async function finishGame() {
    if (!state) return;
    stopAnswerTimer();
    await TC.dependenciesReady;
    TC.stopPortraitEffects();
    finalAwards = TC.renderFinalScores(state); finalTransferred = false; updateTransferButton(); TC.playFeedbackSound("final"); TC.els.winner.classList.add("open"); TC.els.winner.setAttribute("aria-hidden", "false");
    if (typeof FinalScreen !== "undefined") { FinalScreen.start(); FinalScreen.applyRays(document.querySelector(".winner-ann")); }
  }

  function updateTransferButton() { const button = $("#winner-transfer-stars"); button.disabled = finalTransferred; button.textContent = finalTransferred ? "✓ PUANLAR AKTARILDI" : "⭐ YILDIZLARI PUANA AKTAR"; }

  function transferPoints() {
    if (finalTransferred) return;
    if (typeof window.TeacherControl?.awardFinalPoints !== "function") { TC.showToast("Teacher roster is not ready."); return; }
    const result = TC.transferStarAwards(finalAwards, classroomId);
    if (!result?.awarded?.length) { TC.showToast("No matching roster students were found."); return; }
    finalTransferred = true; updateTransferButton(); TC.showToast(`${result.awarded.length} student point award transferred.`);
  }

  function requestFullscreen() {
    const root = document.documentElement;
    const request = root.requestFullscreen || root.webkitRequestFullscreen || root.msRequestFullscreen;
    if (request && !document.fullscreenElement && !document.webkitFullscreenElement) {
      const result = request.call(root);
      result?.catch?.(() => {});
    }
  }

  function toggleFullscreen() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) { const result = exit.call(document); result?.catch?.(() => {}); }
      return;
    }
    requestFullscreen();
  }

  function armAutoFullscreen(screen) {
    const onFirstInteraction = (event) => {
      screen.removeEventListener("click", onFirstInteraction, true);
      if (event.target.closest(".fullscreen-button")) return;
      requestFullscreen();
    };
    screen.addEventListener("click", onFirstInteraction, true);
  }

  document.querySelectorAll("[data-group-count]").forEach((button) => button.addEventListener("click", () => { groupCount = Number(button.dataset.groupCount); document.querySelectorAll("[data-group-count]").forEach((item) => item.classList.toggle("is-selected", item === button)); syncSetup(); }));
  TC.els.gradeSelect.addEventListener("change", refreshUnits); TC.els.unitSelect.addEventListener("change", refreshQuestionPool);
  TC.els.groupNames.addEventListener("input", (event) => {
    const index = Number(event.target.dataset.groupName); if (!Number.isInteger(index)) return;
    groupNames[index] = event.target.value || TC.CONFIG.groupDefaults[index];
    const heading = TC.els.teamEditor.children[index]?.querySelector("h3"); if (heading) heading.textContent = groupNames[index];
    const option = TC.els.manualTeam.options[index]; if (option) option.textContent = groupNames[index];
  });
  TC.els.teamEditor.addEventListener("click", (event) => { const button = event.target.closest("[data-remove-student]"); if (!button) return; setupGroups[Number(button.dataset.removeGroup)].splice(Number(button.dataset.removeStudent), 1); syncSetup(); });
  $("#add-student-button").addEventListener("click", addManualStudent); TC.els.manualName.addEventListener("keydown", (event) => { if (event.key === "Enter") addManualStudent(); });
  $("#open-roster-button").addEventListener("click", openRosterPicker); document.querySelectorAll("[data-close-roster]").forEach((button) => button.addEventListener("click", () => { TC.els.rosterDialog.hidden = true; })); document.querySelectorAll("[data-close-award-breakdown]").forEach((button) => button.addEventListener("click", closeAwardBreakdown));
  TC.els.proceed.addEventListener("click", proceedToCurriculum); TC.els.start.addEventListener("click", startGame); $("#back-to-teams-button").addEventListener("click", () => TC.showScreen("setup")); $("#spin-wheel-button").addEventListener("click", spinWheel); $("#keep-spin-button").addEventListener("click", keepSpinResult); $("#spin-again-button").addEventListener("click", useSpinAgain); $("#fifty-fifty-button").addEventListener("click", useFiftyFifty); $("#double-points-button").addEventListener("click", useDoublePoints); $("#next-turn-button").addEventListener("click", handleNextTurn); $("#continue-round-button").addEventListener("click", continueRound); $("#end-round-button").addEventListener("click", finishGame);
  $("#finish-game-button").addEventListener("click", finishGame);
  $("#start-timer-button").addEventListener("click", startAnswerTimer);
  $("#lite-mode-button").addEventListener("click", () => setLiteMode(!document.body.classList.contains("lite-mode")));
  $("#fullscreen-button").addEventListener("click", toggleFullscreen);
  $("#setup-fullscreen-button").addEventListener("click", toggleFullscreen);
  $("#selection-fullscreen-button").addEventListener("click", toggleFullscreen);
  $("#winner-transfer-stars").addEventListener("click", transferPoints); $("#winner-play-again").addEventListener("click", () => location.reload()); $("#winner-exit").addEventListener("click", () => document.exitFullscreen?.().catch(() => {}));
  const templateErrors = TC.validateQuestionTemplates(allQuestions); if (templateErrors.length) console.error("Question template errors:", templateErrors);
  armAutoFullscreen(TC.els.setup);
  setLiteMode(storedLiteMode());
  syncSetup();
  initializeCurriculumFilters();
})();
