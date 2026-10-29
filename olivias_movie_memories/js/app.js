(() => {
const { GAME_CONFIG, createRandomItemPicker, getPlayableItems, distributeBalanced, getLockedClassroom, getPresentStudents, getRosterPointAwards, transferRosterPoints, activePlayer, advanceTurn, answerQuestion, applyListeningStreak, canUseJoker, chooseNoSubtitles, consumeJoker, continueRound, createGameState, getEvidenceLine, hasCompleteEvidence, recordVideoPlay, revealSubtitles, setDifficulty, startQuestion, activateAnswerEvidenceHighlight, activateTranscriptEvidenceHighlight, animateScoreAward, celebrateActivePortrait, concealVideo, els, hideEvidenceView, loadQuestion, playEchoSegment, playEvidenceSegment, renderFinal, renderGame, renderJokers, renderRoundScores, renderSetup, resetQuestionView, restoreQuestionOverlays, setDifficultySelection, setTimer, showAnswers, showDecision, showEvidenceView, showFeedback, showScreen, showTranscript, showVideoPlayback, suspendQuestionOverlays, updateWatchCounter, playAnswerSound, showLeaderboard, duckBackgroundMusic, nextBackgroundTrack, previousBackgroundTrack, restoreBackgroundMusic, startBackgroundMusic, toggleBackgroundMusic } = window.LeagueListening;

const $ = (selector) => document.querySelector(selector);
const studentMode = Boolean(window.__oliviasMovieMemoriesStudentMode);
const randomEvents = window.LeagueListening.createRandomEventController(els, GAME_CONFIG.randomEvents);
window.LeagueListening.randomEvents = randomEvents;
const publishedVideoCount = (window.LEAGUE_OF_LISTENING_ITEMS || []).filter((item) => item?.status === "published").length;
$("#published-video-count").textContent = publishedVideoCount;
let groupCount = studentMode ? 1 : 2;
let groupNames = studentMode ? ["STUDENT", "TEAM 2", "TEAM 3"] : ["TEAM 1", "TEAM 2", "TEAM 3"];
let setupGroups = [[], [], []];
let classroomId = "";
let state = null;
let omniSelector = null;
let evidencePlayed = false;
let evidenceAdvancePending = false;
let evidenceSkipRequested = false;
let answerRevealTimer = 0;
const teacherHistoryStorageKey = "oliviasMovieMemoriesTeacherHistoryV1";
const liteModeStorageKey = "oliviasMovieMemoriesLiteModeV1";
const finalAudio = new Audio("assets/sounds/final.mp3");
const characterChoices = ["ava", "benjamin", "chloe", "daniel", "david", "ella", "emma", "ethan", "hannah", "jack", "lucas", "mia", "noah", "olivia", "victoria", "zoe"];

function selectedVideoGrades() { return [...document.querySelectorAll("[data-video-grade]:checked")].map((box) => Number(box.value)); }
function activeSetupGroups() { return setupGroups.slice(0, groupCount); }
function isDirectAnswerMode() { return !studentMode && (state?.gameMode === "correct-option" || (state?.gameMode === "omni" && state.omniType !== "translation")); }
function syncSetup() { renderSetup(activeSetupGroups(), groupNames.slice(0, groupCount)); els.start.disabled = activeSetupGroups().some((group) => !group.length) || (!studentMode && !selectedVideoGrades().length); }
function playableItemsOrWarn() {
  const grades = selectedVideoGrades();
  if (!studentMode && !grades.length) { alert("Choose at least one grade."); return false; }
  const items = getPlayableItems(window.LEAGUE_OF_LISTENING_ITEMS).filter((item) => studentMode || (Array.isArray(item.grades) && item.grades.some((grade) => grades.includes(Number(grade)))));
  if (items.some((item) => studentMode || els.gameMode.value !== "correct-option" || window.LeagueListening.getCorrectOptionQuestions(item).length)) return true;
  alert(studentMode ? "There are no playable listening items yet. Complete the transcript, options and correct answer in scripts.js." : "No playable videos match the selected grades and game mode.");
  return false;
}
function syncOmniSettings() {
  if (studentMode) return;
  const omni = els.gameMode.value === "omni";
  $(".settings-card > .muted").textContent = omni ? "Translation, True/False and correct option modes mixed." : els.gameMode.value === "correct-option" ? "Watch video and choose the correct option." : "Watch video and choose the correct translation option.";
}
function requestGameFullscreen() { if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {}); }
function setLiteMode(enabled) { document.body.classList.toggle("lite-mode", enabled); $("#lite-mode-button").textContent = enabled ? "LITE ✓" : "LITE"; $("#lite-mode-button").setAttribute("aria-pressed", String(enabled)); localStorage.setItem(liteModeStorageKey, enabled ? "1" : "0"); }

function prepareStudentMode() {
  if (!studentMode) return;
  let profile = {};
  try { profile = JSON.parse(localStorage.getItem("fpStudentProfile") || "{}"); } catch (_) {}
  const avatarName = String(profile.avatar || "").trim();
  const avatarPath = avatarName ? `../word_overlord/avatars/AV_Anime_${avatarName}_head.webp` : "";
  const studentName = String(profile.name || "STUDENT").trim() || "STUDENT";
  groupNames[0] = studentName.toUpperCase();
  setupGroups[0] = [{ name: studentName, avatarPath }];
  document.querySelectorAll("[data-group-count]").forEach((button) => { button.hidden = true; });
  const groupCard = document.querySelector(".setup-card:first-child");
  if (groupCard) groupCard.hidden = true;
  const rosterCard = document.querySelector(".setup-card:nth-child(2)");
  if (rosterCard) rosterCard.hidden = true;
  $("#reset-video-history-button").hidden = true;
  $("#scores-button").hidden = true;
  $("#lite-mode-button").hidden = true;
  const settingsCard = document.querySelector(".settings-card");
  if (settingsCard) {
    settingsCard.querySelector(".eyebrow").textContent = "OLIVIA'S MOVIE MEMORIES";
    settingsCard.querySelector("h2").textContent = "Start watching";
    settingsCard.querySelector(".muted").textContent = "Watch a memory, listen closely, then choose your answer.";
    settingsCard.querySelector('[for="game-mode"]').hidden = true;
    els.gameMode.hidden = true;
    $("#grade-selection").hidden = true;
    settingsCard.querySelector(".rules-list").hidden = false;
  }
}

function openRosterPicker() { const room = getLockedClassroom(); if (!room) { els.rosterStatus.textContent = "Lock a classroom from the Teacher HUD roster first."; return; } const present = getPresentStudents(room).length; if (!present) { els.rosterStatus.textContent = `${room.name || "CLASS"} has no present students today.`; return; } setupGroups = distributeBalanced(room, groupCount).concat([[]]).slice(0, 3); classroomId = room.id; els.rosterStatus.textContent = `${room.name}: ${present} present students balanced across teams.`; syncSetup(); }

function isCharacterBasedMode() { return !studentMode && !GAME_CONFIG.teacherRatingScriptOrderEnabled && (state?.gameMode === "character" || ((state?.gameMode === "correct-option" || state?.gameMode === "omni") && GAME_CONFIG.characterRatingSelectionEnabled)); }
function beginGame() { if (studentMode && !window.OliviaMemoryJourney?.begin?.()) return; if (!playableItemsOrWarn()) return; requestGameFullscreen(); const correctOptionMode = !studentMode && els.gameMode.value === "correct-option"; const picker = createRandomItemPicker(window.LEAGUE_OF_LISTENING_ITEMS, { correctOption: correctOptionMode, omni: !studentMode && els.gameMode.value === "omni", grades: studentMode ? undefined : selectedVideoGrades() }); state = createGameState({ groups: activeSetupGroups(), groupNames: groupNames.slice(0, groupCount), itemPicker: picker, roundLimit: Infinity }); state.gameMode = studentMode ? "classic" : els.gameMode.value; randomEvents.resetGame(); showScreen("game"); showAnnouncement(); startBackgroundMusic(); }
function showCharacterSelection(statusMessage = "") { $("#video-rating").hidden = true; const availableCharacters = state.itemPicker.availableCharacterIds?.(state.gameMode === "omni" ? state.omniType : undefined) || new Set(); const player = activePlayer(state).student; els.characterMessage.textContent = statusMessage || `${player.name}, choose a character for this video.`; els.characterGrid.innerHTML = characterChoices.map((id) => `<button class="character-choice" type="button" data-character-id="${id}" ${availableCharacters.has(id) ? "" : 'disabled title="No unused videos remaining"'}><span class="character-avatar-ring"><img src="assets/avatars/v2/${id}.webp" alt="${id}">${window.LeagueListening.renderCharacterPopularityStars(id)}</span><strong>${id.toUpperCase()}</strong></button>`).join(""); els.characterDialog.hidden = false; }
function showAnnouncement(statusMessage = "", eventReady = false) {
  if (!studentMode && state.gameMode === "omni" && !state.omniType) {
    resetQuestionView();
    if (!omniSelector) omniSelector = window.LeagueListening.createOmniSelector();
    return omniSelector.show(state.itemPicker.availableQuestionTypes(), (type) => {
      if (!type) { els.videoStatus.textContent = "No playable videos are available."; return; }
      state.omniType = type;
      showAnnouncement();
    });
  }
  if (!studentMode && !eventReady && !statusMessage) return randomEvents.startTurn(state.gameMode === "omni" ? "omni-" + state.omniType : state.gameMode, () => showAnnouncement(statusMessage, true));
  if (state.gameMode === "omni") {
    if (isCharacterBasedMode() && !state.itemPicker.hasPendingPriority?.(state.omniType)) return showCharacterSelection(statusMessage);
    const item = state.itemPicker.pickForQuestionType(state.omniType);
    if (!item) { state.omniType = null; randomEvents.resetTurn(); return showAnnouncement(); }
    return loadCurrentQuestion(startQuestion(state, item), statusMessage);
  }
  if (isCharacterBasedMode() && !state.itemPicker.hasPendingPriority?.()) return showCharacterSelection(statusMessage);
  loadCurrentQuestion(startQuestion(state), statusMessage);
}
function loadCurrentQuestion(item, statusMessage = "") { cancelPendingVideoStart(); if (!studentMode && state.gameMode === "omni" && item) item = startQuestion(state, window.LeagueListening.createOmniQuestion(item, state.omniType)); if (!studentMode && state.gameMode === "correct-option" && item) item = startQuestion(state, window.LeagueListening.createCorrectOptionQuestion(item)); clearTimeout(answerRevealTimer); answerRevealTimer = 0; evidencePlayed = false; evidenceAdvancePending = false; evidenceSkipRequested = false; if (!item) { els.videoStatus.textContent = "No playable videos are available."; $("#video-rating").hidden = true; els.fallback.hidden = false; els.fallback.querySelector("strong").textContent = "No playable videos are available."; els.playVideo.hidden = true; return; } if (!studentMode) { item = { ...item, randomEventId: randomEvents.getEventId() }; state.question = item; } $("#video-grade").hidden = studentMode; if (!studentMode) $("#video-grade").textContent = `GRADE: ${(Array.isArray(item.grades) ? item.grades : []).join(", ") || "—"}`; renderGame(state, activePlayer(state)); els.instruction.textContent = "Listen carefully."; loadQuestion(item); if (studentMode) { setDifficulty(state, "medium"); setDifficultySelection("medium"); els.playVideo.hidden = false; els.playVideo.disabled = false; els.videoStatus.textContent = "Start the first listen."; } updateWatchCounter(0); if (statusMessage) els.videoStatus.textContent = statusMessage; }
function replaceMissingVideo() { const failedId = state?.question?.id; if (!failedId || state.phase !== "video") return; state.itemPicker.remove?.(failedId); showAnnouncement("Video unavailable. Choose another character."); }
function retryVideoFromR2() { const remoteSrc = els.video.dataset.remoteFallbackSrc; if (location.protocol !== "file:" || !remoteSrc || els.video.dataset.remoteFallbackUsed) return false; els.video.dataset.remoteFallbackUsed = "true"; els.video.src = remoteSrc; els.video.load(); els.videoStatus.textContent = "Local video unavailable. Loading from R2…"; return true; }
function closeVideoHistoryResetDialog() { $("#reset-video-history-dialog").hidden = true; }
function resetVideoHistory() { localStorage.removeItem(teacherHistoryStorageKey); location.reload(); }
let segmentFinished = false;
let segmentFrameId = 0;
let pendingVideoStart = null;
function cancelPendingVideoStart() { pendingVideoStart?.(); }
function waitForVideoReady(startAt) {
  cancelPendingVideoStart();
  return new Promise((resolve, reject) => {
    const video = els.video;
    let positionSet = false, timeoutId = 0, settled = false;
    const events = ["loadedmetadata", "loadeddata", "canplay", "seeked"];
    const finish = (error) => {
      if (settled) return;
      settled = true;
      events.forEach((name) => video.removeEventListener(name, check));
      video.removeEventListener("error", failed);
      clearTimeout(timeoutId);
      if (pendingVideoStart === abort) pendingVideoStart = null;
      if (error) reject(error); else resolve();
    };
    const abort = () => finish(new DOMException("Video start cancelled.", "AbortError"));
    const failed = () => finish(new Error("Video data could not be loaded."));
    const check = () => {
      if (video.error) return failed();
      if (video.readyState < HTMLMediaElement.HAVE_METADATA) return;
      if (!positionSet) {
        positionSet = true;
        if (Math.abs(video.currentTime - startAt) > .01) {
          try { video.currentTime = startAt; } catch (error) { finish(error); }
          return;
        }
      }
      if (!video.seeking && video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) finish();
    };
    pendingVideoStart = abort;
    events.forEach((name) => video.addEventListener(name, check));
    video.addEventListener("error", failed);
    timeoutId = setTimeout(() => finish(new Error("Video loading timed out.")), 15000);
    video.preload = "auto";
    check();
  });
}
function parseVideoTime(value) { if (typeof value === "number" && Number.isFinite(value)) return value; const match = String(value ?? "").trim().match(/^(\d+):(\d{2}(?:\.\d{1,3})?)$/); return match ? Number(match[1]) * 60 + Number(match[2]) : null; }
function stopSegmentMonitor() { if (segmentFrameId) cancelAnimationFrame(segmentFrameId); segmentFrameId = 0; }
function getField(object, name) { return Object.entries(object || {}).find(([key]) => key.toLowerCase() === name.toLowerCase())?.[1]; }
function monitorVideoSegment() { stopSegmentMonitor(); const endAt = parseVideoTime(getField(state?.question, "videoEnd")); if (endAt == null) return; const checkEnd = () => { if (els.video.currentTime >= endAt) return finishVideoSegment(); segmentFrameId = requestAnimationFrame(checkEnd); }; segmentFrameId = requestAnimationFrame(checkEnd); }
function finishVideoSegment() { if (segmentFinished || state?.phase !== "video") return; segmentFinished = true; stopSegmentMonitor(); els.video.pause(); restoreBackgroundMusic(); concealVideo(); updateWatchCounter(state.videoPlays); els.answerNow.hidden = true; els.answerNow.disabled = true; els.overrideReplay.disabled = false; if (isDirectAnswerMode()) beginAnswerPhase(false); else showDecision(state.question); renderJokers(state); }
function playVideo(isOverride = false) { if (!studentMode && pendingVideoStart) return; if (!state || !state.difficulty || (!isOverride && !recordVideoPlay(state))) return; if (isDirectAnswerMode() && state.phase === "answer") { clearInterval(state.timerId); state.timerId = null; state.phase = "video"; els.answerOverlay.hidden = true; els.timer.hidden = true; } segmentFinished = false; els.decisionOverlay.hidden = true; els.replay.hidden = true; els.replay.disabled = true; els.answerNow.hidden = false; els.answerNow.disabled = !studentMode; els.overrideReplay.disabled = true; updateWatchCounter(state.videoPlays); els.replay.disabled = true; showVideoPlayback(); els.fallback.hidden = true; els.playVideo.hidden = true; const startAt = parseVideoTime(getField(state.question, "videoStart")) ?? 0; const slowTimeActive = state.slowTime && state.groups[state.groupIndex]?.jokers?.used.includes("slowTime"); els.videoStatus.textContent = slowTimeActive ? (randomEvents.getEventId() === "rapid-time" ? "Video playing at normal speed…" : "Video playing in slow mode…") : isOverride ? "Override replay in use." : "Video playing…"; const playState = state, playQuestion = state.question, playingStatus = els.videoStatus.textContent; const startSegment = () => { if (state !== playState || state.question !== playQuestion || els.game.hidden) return; if (studentMode) els.video.currentTime = startAt; const currentSlowTime = state.slowTime && state.groups[state.groupIndex]?.jokers?.used.includes("slowTime"); els.videoStatus.textContent = currentSlowTime ? (randomEvents.getEventId() === "rapid-time" ? "Video playing at normal speed…" : "Video playing in slow mode…") : playingStatus; randomEvents.startPlayback(currentSlowTime ? .8 : 1, currentSlowTime); els.video.play().then(monitorVideoSegment).catch(handleStartError); }; const handleStartError = (error) => { if (error?.name === "AbortError" || state !== playState || state.question !== playQuestion || els.game.hidden) return; restoreBackgroundMusic(); if (!isOverride) state.videoPlays -= 1; updateWatchCounter(state.videoPlays); els.answerNow.hidden = true; els.answerNow.disabled = true; els.playVideo.hidden = false; els.fallback.hidden = false; els.videoStatus.textContent = "The video could not start. Try again."; }; if (!studentMode) { els.videoStatus.textContent = "Loading video…"; waitForVideoReady(Math.max(0, startAt)).then(startSegment).catch(handleStartError); } else if (els.video.readyState >= HTMLMediaElement.HAVE_METADATA) startSegment(); else els.video.addEventListener("loadedmetadata", startSegment, { once: true }); }
function beginAnswerPhase(withSubtitles) { if (withSubtitles) { revealSubtitles(state); showTranscript(state.question.blankTranscript || state.question.transcript); } else chooseNoSubtitles(state); els.decisionOverlay.hidden = true; els.answerOverlay.hidden = false; els.answers.hidden = true; els.videoStatus.textContent = "Get ready…"; clearTimeout(answerRevealTimer); answerRevealTimer = setTimeout(() => { answerRevealTimer = 0; if (!state || state.phase !== "answer" || state.answered) return; showAnswers(state.question, state.difficulty); if (isDirectAnswerMode()) updateWatchCounter(state.videoPlays); startTimer(); }, 1000); }
function announceToast(message, type) { window.ToastManager?.show(message, type, 3600); }
function announceStreak(group, streakResult) { if (streakResult.bonusPoints) announceToast(`🔥 ${group.name}: 3 LISTENING STREAK · +${streakResult.bonusPoints} BONUS!`); if (streakResult.freeJoker) announceToast(`⚡ ${group.name}: 5 LISTENING STREAK · ONE FREE JOKER!`); }
function startTimer(reset = true) { clearInterval(state.timerId); if (reset) state.secondsLeft = state.phase === "bonus" ? 10 : GAME_CONFIG.answerSeconds; setTimer(state.secondsLeft); state.timerId = setInterval(() => { state.secondsLeft -= 1; setTimer(state.secondsLeft); if (state.secondsLeft <= 0) { clearInterval(state.timerId); state.timerId = null; if (state.phase === "bonus") return finishBonusAnswer("__timeout__", true); const result = answerQuestion(state, "__timeout__"); randomEvents.applyMainScore(state, result); if (studentMode) state.itemPicker.complete?.(state.question.id); const streakResult = applyListeningStreak(state, result); if (studentMode) { window.StudentGame?.onListeningWrong?.(); window.OliviaMemoryJourney?.recordResult?.({ correct: false, subtitlesShown: state.subtitlesShown, points: 0, bonusPoints: 0, streak: activePlayer(state).group.streak }); } playAnswerSound(false); showFeedback(state.question, result, true); renderJokers(state); announceStreak(activePlayer(state).group, streakResult); if (!studentMode) setTimeout(() => showLeaderboard(state), 2000); } }, 1000); renderJokers(state); }
async function runEvidenceReplay() { const snapshot = suspendQuestionOverlays(); const fullTranscriptEvidence = state.question?.evidenceStart == null && state.question?.evidenceEnd == null && state.question?.evidenceSentence == null; const playbackRate = els.video.playbackRate; els.evidenceReplay.disabled = true; els.next.hidden = true; showEvidenceView(getEvidenceLine(state.question), fullTranscriptEvidence, state.question.correctOptionQuestion?.target); els.videoStatus.textContent = !hasCompleteEvidence(state.question) ? "Full video evidence replay…" : "Evidence replay…"; randomEvents.suspendPlayback(); els.video.playbackRate = 1; await playEvidenceSegment(els.video, state.question); els.video.playbackRate = playbackRate; restoreBackgroundMusic(); hideEvidenceView(); restoreQuestionOverlays(snapshot); activateTranscriptEvidenceHighlight(state.question); activateAnswerEvidenceHighlight(state.question, state.question.correctOptionId); els.evidenceReplay.disabled = false; els.evidenceReplay.textContent = "▶ EVIDENCE REPLAY"; els.next.hidden = false; els.next.disabled = false; els.next.textContent = "CONTINUE →"; els.videoStatus.textContent = "Evidence replay complete."; }
function selectAnswer(event) { if (state?.phase === "bonus") return finishBonusAnswer(event.currentTarget.dataset.answer, false, event.currentTarget); const optionId = event.currentTarget.dataset.answer; clearInterval(state.timerId); state.timerId = null; const result = answerQuestion(state, optionId); if (result) { result.selectedOptionId = optionId; evidencePlayed = false; evidenceAdvancePending = false; const group = activePlayer(state).group; if (studentMode && result.correct) { const teacherPoints = result.points; result.points = (state.subtitlesShown ? 1 : 2) * (result.doubleOrNothing ? 2 : 1); group.score += result.points - teacherPoints; activePlayer(state).student.score += result.points - teacherPoints; } else if (result.correct) { const timeBonus = Math.max(0, state.secondsLeft); result.points += timeBonus; group.score += timeBonus; activePlayer(state).student.score += timeBonus; } randomEvents.applyMainScore(state, result, result.correct ? Math.max(0, state.secondsLeft) : 0); const streakResult = applyListeningStreak(state, result); if (studentMode) { if (result.correct) window.StudentGame?.onListeningCorrect?.(result.points); else window.StudentGame?.onListeningWrong?.(); if (streakResult.bonusPoints) { group.score -= streakResult.bonusPoints; streakResult.bonusPoints = 1; window.StudentGame?.awardListeningBonus?.(1); } window.OliviaMemoryJourney?.recordResult?.({ correct: result.correct, subtitlesShown: state.subtitlesShown, points: result.points, bonusPoints: streakResult.bonusPoints || 0, streak: group.streak }); } playAnswerSound(result.correct); if (result.correct) { animateScoreAward(event.currentTarget, state.groupIndex, result.points, group.score); celebrateActivePortrait(); } showFeedback(state.question, result); renderJokers(state); announceStreak(group, streakResult); if (!studentMode && state.gameMode === "correct-option" && result.correct) beginBonusPhase(result.points); else state.itemPicker.complete?.(state.question.id); } }
function beginBonusPhase(normalPoints) {
  const question = window.LeagueListening.createCorrectOptionBonus(state.question);
  if (!question) return;
  state.question = question;
  state.phase = "bonusWaiting";
  state.answered = false;
  state.doubleOrNothing = false;
  els.feedback.hidden = true;
  els.evidenceReplay.hidden = true;
  els.next.hidden = true;
  showAnswers(question, state.difficulty);
  els.answers.hidden = true;
  els.answers.querySelectorAll("button").forEach((button) => { button.disabled = true; });
  els.timer.hidden = true;
  els.videoStatus.textContent = `+${normalPoints} POINTS earned · BONUS! Correct answer +50`;
  renderJokers(state);
  clearTimeout(answerRevealTimer);
  answerRevealTimer = setTimeout(() => {
    answerRevealTimer = 0;
    if (!state || state.question !== question || state.phase !== "bonusWaiting" || els.game.hidden) return;
    state.phase = "bonus";
    els.answers.hidden = false;
    els.answers.querySelectorAll("button").forEach((button) => { button.disabled = false; });
    startTimer();
  }, 500);
}
function finishBonusAnswer(optionId, timedOut = false, source = null) {
  if (!state || state.phase !== "bonus" || state.answered) return;
  clearInterval(state.timerId);
  state.timerId = null;
  state.answered = true;
  state.phase = "answered";
  if (!timedOut) state.itemPicker.complete?.(state.question.id);
  const correct = !timedOut && optionId === state.question.correctOptionId;
  const points = correct ? 50 : 0;
  const { group, student } = activePlayer(state);
  group.score += points;
  student.score += points;
  playAnswerSound(correct);
  if (correct) { if (source) animateScoreAward(source, state.groupIndex, points, group.score); celebrateActivePortrait(); }
  showFeedback(state.question, { correct, points, correctOptionId: state.question.correctOptionId, doubleOrNothing: false }, timedOut);
  renderJokers(state);
}
async function handleEvidenceControl() { if (!state?.answered || evidenceAdvancePending) return; if (window.LeagueListening.revealCorrectOption(state.question)) return; evidenceSkipRequested = false; await runEvidenceReplay(); evidencePlayed = true; if (evidenceSkipRequested) { evidenceSkipRequested = false; handleNextControl(); } }
function handleNextControl() { if (!state?.answered || !evidencePlayed) return nextTurn(); if (evidenceAdvancePending) return; evidenceAdvancePending = true; els.evidenceReplay.disabled = true; els.next.disabled = true; els.feedback.hidden = true; if (studentMode) return nextTurn(); showLeaderboard(state, nextTurn); }
async function useEchoJoker() { if (pendingVideoStart || !canUseJoker(state, "echo") || state.videoPlays < 1 || !["video", "answer"].includes(state.phase)) return; const previousPhase = state.phase; const timerWasRunning = previousPhase === "answer" && Boolean(state.timerId); if (!consumeJoker(state, "echo")) return; if (timerWasRunning) { clearInterval(state.timerId); state.timerId = null; } els.overrideReplay.disabled = true; const snapshot = suspendQuestionOverlays(); state.phase = "jokerEcho"; renderJokers(state); showVideoPlayback(); randomEvents.startPlayback(els.video.playbackRate, state.slowTime); els.videoStatus.textContent = "Echo Joker replay…"; announceToast(`🔊 ${activePlayer(state).group.name}: ECHO JOKER!`); await playEchoSegment(els.video, state.question); restoreBackgroundMusic(); concealVideo(); state.phase = previousPhase; restoreQuestionOverlays(snapshot); if (previousPhase === "video") els.overrideReplay.disabled = false; els.videoStatus.textContent = previousPhase === "answer" ? "Choose your answer." : "Choose how to answer."; if (timerWasRunning) startTimer(false); else renderJokers(state); }
function useTimeFreezeJoker() { if (state?.phase !== "answer" || !state.timerId || !consumeJoker(state, "timeFreeze")) return; state.secondsLeft += GAME_CONFIG.timeFreezeSeconds; setTimer(state.secondsLeft); renderJokers(state); announceToast(`⏱ ${activePlayer(state).group.name}: TIME FREEZE · +${GAME_CONFIG.timeFreezeSeconds} SECONDS!`); }
function useDoubleOrNothingJoker() { if (state?.phase !== "answer" || state.answered || !consumeJoker(state, "doubleOrNothing")) return; state.doubleOrNothing = true; renderJokers(state); announceToast(`×2 ${activePlayer(state).group.name}: DOUBLE OR NOTHING!`); }
function useSlowTimeJoker() { if (randomEvents.getEventId() === "slow-time") return; if (!state || state.answered || state.slowTime || !(state.phase === "video" || (!studentMode && state.phase === "answer")) || !els.video.paused || !consumeJoker(state, "slowTime")) return; state.slowTime = true; const speed = randomEvents.getEventId() === "rapid-time" ? 1 : .8; els.video.playbackRate = speed; renderJokers(state); announceToast(`◔ ${activePlayer(state).group.name}: SLOW TIME · ${Math.round(speed * 100)}% VIDEO SPEED!`); }
function nextTurn() { cancelPendingVideoStart(); randomEvents.resetTurn(); if (state?.gameMode === "omni") state.omniType = null; if (studentMode) { if (window.OliviaMemoryJourney?.shouldComplete?.()) { clearInterval(state?.timerId); restoreBackgroundMusic(); showScreen("setup"); window.OliviaMemoryJourney.complete(); return; } showAnnouncement(); return; } const next = advanceTurn(state); if (next === "roundComplete") { showScreen("round"); els.roundTitle.textContent = `ROUND ${state.round} COMPLETE`; els.roundMessage.textContent = "Every player has had one turn. Start another round or finish the game."; renderRoundScores(state); } else showAnnouncement(); }
function finalRosterPointRatio() { const completedRounds = state.round - (state.turnsInRound >= state.turnOrder.length ? 0 : 1); return { ...GAME_CONFIG.rosterPointRatio, gamePoints: completedRounds >= 2 ? 250 : 500 }; }
function finishGame() { cancelPendingVideoStart(); omniSelector?.cancel(); randomEvents.resetTurn(); showScreen("final"); renderFinal(state, getRosterPointAwards(state.groups, finalRosterPointRatio())); duckBackgroundMusic(); finalAudio.currentTime = 0; finalAudio.play().catch(() => {}); if (typeof FinalScreen !== "undefined") { FinalScreen.start(); FinalScreen.applyRays(document.querySelector(".winner-ann")); } }

document.querySelectorAll("[data-group-count]").forEach((button) => button.addEventListener("click", () => { groupCount = Number(button.dataset.groupCount); document.querySelectorAll("[data-group-count]").forEach((item) => item.classList.toggle("is-selected", item === button)); syncSetup(); }));
els.groupNameFields.addEventListener("change", (event) => { if (!event.target.matches("[data-group-name]")) return; groupNames[Number(event.target.dataset.groupName)] = event.target.value.toUpperCase() || `TEAM ${Number(event.target.dataset.groupName) + 1}`; syncSetup(); });
els.teamEditor.addEventListener("click", (event) => { const target = event.target.closest("[data-remove-student]"); if (!target) return; const [groupIndex, studentIndex] = target.dataset.removeStudent.split(":").map(Number); setupGroups[groupIndex].splice(studentIndex, 1); syncSetup(); });
$("#open-roster-button").addEventListener("click", openRosterPicker); document.querySelectorAll("[data-close-roster]").forEach((button) => button.addEventListener("click", () => { els.rosterDialog.hidden = true; }));
$("#add-student-button").addEventListener("click", () => { const name = els.manualName.value.trim(); const team = Number(els.manualTeam.value); if (!name) return; setupGroups[team].push(name); els.manualName.value = ""; syncSetup(); });
els.start.addEventListener("click", beginGame); els.difficultyButtons.forEach((button) => button.addEventListener("click", () => { if (setDifficulty(state, button.dataset.difficulty)) { window.LeagueListening.dismissCharacterIntro(() => { setDifficultySelection(state.difficulty); playVideo(); }); } })); els.playVideo.addEventListener("click", () => playVideo()); els.replay.addEventListener("click", () => playVideo()); els.answerNow.addEventListener("click", finishVideoSegment); els.overrideReplay.addEventListener("click", () => { if (state?.phase === "video" && els.video.paused && !els.decisionOverlay.hidden) playVideo(true); }); els.video.addEventListener("play", () => { duckBackgroundMusic(); els.playVideo.hidden = true; els.fallback.hidden = true; els.replay.disabled = true; els.answerNow.disabled = false; els.overrideReplay.disabled = true; renderJokers(state); }); els.video.addEventListener("ended", finishVideoSegment); els.video.addEventListener("error", () => { stopSegmentMonitor(); restoreBackgroundMusic(); if (!retryVideoFromR2()) replaceMissingVideo(); });
els.videoVolume.addEventListener("input", () => { els.video.volume = Number(els.videoVolume.value); });
els.characterGrid.addEventListener("click", (event) => { const choice = event.target.closest("[data-character-id]"); if (!choice || !state || !isCharacterBasedMode()) return; const item = state.itemPicker.pickForCharacter?.(choice.dataset.characterId, state.gameMode === "omni" ? state.omniType : undefined); if (!item) return showCharacterSelection("No unused videos remain for that character. Choose another one."); els.characterDialog.hidden = true; loadCurrentQuestion(startQuestion(state, item)); });
els.characterRandom.addEventListener("click", () => { if (!state || !isCharacterBasedMode()) return; const item = state.gameMode === "omni" ? state.itemPicker.pickForQuestionType(state.omniType) : state.itemPicker(); els.characterDialog.hidden = true; loadCurrentQuestion(startQuestion(state, item)); });
els.characterScores.addEventListener("click", () => { if (!state) return; renderRoundScores(state, els.liveScores); els.scoreDialog.hidden = false; });
$("#reset-video-history-button").addEventListener("click", () => { $("#reset-video-history-dialog").hidden = false; }); document.querySelectorAll("[data-close-video-history-reset]").forEach((button) => button.addEventListener("click", closeVideoHistoryResetDialog)); $("#confirm-video-history-reset").addEventListener("click", resetVideoHistory);
$("#lite-mode-button").addEventListener("click", () => setLiteMode(!document.body.classList.contains("lite-mode")));
$("#scores-button").addEventListener("click", () => { if (!state) return; renderRoundScores(state, els.liveScores); els.scoreDialog.hidden = false; }); document.querySelectorAll("[data-close-score-dialog]").forEach((button) => button.addEventListener("click", () => { els.scoreDialog.hidden = true; }));
els.jokerButtons.forEach((button) => button.addEventListener("click", () => { if (button.dataset.joker === "echo") useEchoJoker(); else if (button.dataset.joker === "timeFreeze") useTimeFreezeJoker(); else if (button.dataset.joker === "slowTime") useSlowTimeJoker(); else useDoubleOrNothingJoker(); }));
function renderMusicControl(isMuted) { const button = $("#mute-music-button"); button.textContent = isMuted ? "🔇" : "♫"; button.setAttribute("aria-label", isMuted ? "Unmute background music" : "Mute background music"); button.setAttribute("aria-pressed", String(isMuted)); button.title = isMuted ? "Unmute music" : "Mute music"; }
$("#previous-track-button").addEventListener("click", previousBackgroundTrack); $("#next-track-button").addEventListener("click", nextBackgroundTrack); $("#mute-music-button").addEventListener("click", () => renderMusicControl(toggleBackgroundMusic()));
$("#no-subtitle-button").addEventListener("click", () => beginAnswerPhase(false)); $("#show-subtitle-button").addEventListener("click", () => beginAnswerPhase(true)); els.answers.addEventListener("click", (event) => { const button = event.target.closest("[data-answer]"); if (button && els.answers.contains(button) && !button.disabled) { if (state?.phase === "answer" && !randomEvents.acceptAnswerClick(button, state.question)) return; selectAnswer({ currentTarget: button }); } }); els.evidenceReplay.addEventListener("click", handleEvidenceControl); els.next.addEventListener("click", handleNextControl);
els.evidence.addEventListener("click", (event) => { if (event.button !== 0 || els.evidence.hidden || !state?.answered) return; evidenceSkipRequested = true; els.video.dispatchEvent(new Event("evidence-skip")); });
$("#continue-round-button").addEventListener("click", () => { if (continueRound(state)) { showScreen("game"); showAnnouncement(); } else finishGame(); }); $("#finish-game-button").addEventListener("click", finishGame); $("#transfer-points-button").addEventListener("click", (event) => { const result = transferRosterPoints(state.groups, classroomId, finalRosterPointRatio()); event.currentTarget.disabled = true; event.currentTarget.textContent = result.awarded?.length ? "✓ POINTS TRANSFERRED" : "NO POINTS TO TRANSFER"; }); $("#new-game-button").addEventListener("click", () => location.reload()); $("#exit-game-button").addEventListener("click", () => { if (confirm("Exit the game and return to setup?")) { clearInterval(state?.timerId); clearTimeout(answerRevealTimer); cancelPendingVideoStart(); els.video.pause(); omniSelector?.cancel(); randomEvents.resetTurn(); showScreen("setup"); } });

prepareStudentMode();
document.querySelectorAll("[data-video-grade]").forEach((box) => box.addEventListener("change", syncSetup));
els.gameMode.addEventListener("change", syncOmniSettings);
syncOmniSettings();
renderMusicControl(window.LeagueListening.isBackgroundMusicMuted());
setLiteMode(localStorage.getItem(liteModeStorageKey) === "1");
syncSetup();
})();
