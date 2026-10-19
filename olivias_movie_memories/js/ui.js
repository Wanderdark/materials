(() => {
window.LeagueListening = window.LeagueListening || {};
const { GAME_CONFIG, resolveLocalVideoSrc, resolveVideoSrc } = window.LeagueListening;

function displayCharacterNames(text) { return String(text ?? "").replace(/\bamina\b/gi, "ANNA"); }
const $ = (selector) => document.querySelector(selector);
const els = Object.freeze({
  setup: $("#setup-screen"), game: $("#game-screen"), round: $("#round-screen"), final: $("#final-screen"),
  teamEditor: $("#team-editor"), groupNameFields: $("#group-name-fields"), rosterStatus: $("#roster-status"), manualName: $("#manual-student-input"), manualTeam: $("#manual-student-team"), gameMode: $("#game-mode"), start: $("#start-game-button"),
  scoreboard: $("#scoreboard"), roundLabel: $("#round-label"), turnLabel: $("#turn-label"), dialogueCharacters: $("#dialogue-characters"), videoFunction: $("#video-function"), videoFunctionName: $("#video-function-name"), teamChip: $("#active-team-chip"), studentName: $("#active-student-name"), studentPortrait: $("#active-student-portrait"), studentAvatar: $("#active-student-avatar"), studentLevel: $("#active-student-level"), instruction: $("#turn-instruction"), jokerRemaining: $("#joker-remaining"), jokerButtons: document.querySelectorAll("[data-joker]"), noSubtitle: $("#no-subtitle-button"), showSubtitle: $("#show-subtitle-button"), videoWrap: $("#video-wrap"), video: $("#listening-video"), fallback: $("#video-fallback"), difficultySelector: $("#difficulty-selector"), difficultyButtons: document.querySelectorAll("[data-difficulty]"), playVideo: $("#play-video-button"), watchCounter: $("#watch-counter"), videoStatus: $("#video-status"), videoVolume: $("#video-volume"), replay: $("#replay-button"), answerNow: $("#answer-now-button"), overrideReplay: $("#override-replay-button"), decisionOverlay: $("#decision-overlay"), answerOverlay: $("#answer-overlay"), evidence: $("#evidence-overlay"), evidenceText: $("#evidence-text"), transcript: $("#transcript-panel"), transcriptText: $("#transcript-text"), answers: $("#answer-panel"), feedback: $("#feedback-panel"), feedbackTitle: $("#feedback-title"), feedbackMessage: $("#feedback-message"), evidenceReplay: $("#evidence-replay-button"), next: $("#next-turn-button"), timer: $("#answer-timer"),
  rosterDialog: $("#roster-dialog"), classroomList: $("#classroom-list"), classroomMessage: $("#classroom-message"), characterDialog: $("#character-selection-dialog"), characterMessage: $("#character-selection-message"), characterGrid: $("#character-selection-grid"), characterRandom: $("#character-random-button"), characterScores: $("#character-scores-button"), roundTitle: $("#round-complete-title"), roundMessage: $("#round-complete-message"), roundScores: $("#round-scoreboard"), scoreDialog: $("#score-dialog"), liveScores: $("#live-scoreboard"), winnerName: $("#winner-team-name"), winnerScore: $("#winner-team-score"), finalTeams: $("#final-team-scores"), finalStudents: $("#final-student-scores")
});
els.studentAvatar.addEventListener("error", () => { els.studentPortrait.hidden = true; els.studentAvatar.removeAttribute("src"); });

function showScreen(name) { ["setup", "game", "round", "final"].forEach((key) => { els[key].hidden = key !== name; }); }
function renderSetup(groups, names) { const selectedTeam = els.manualTeam.value; els.groupNameFields.innerHTML = groups.map((_, i) => `<label class="field-label">Team ${i + 1}<input data-group-name="${i}" maxlength="16" value="${names[i] || `TEAM ${i + 1}`}"></label>`).join(""); els.manualTeam.innerHTML = groups.map((_, i) => `<option value="${i}">${names[i] || `TEAM ${i + 1}`}</option>`).join(""); if ([...els.manualTeam.options].some((option) => option.value === selectedTeam)) els.manualTeam.value = selectedTeam; renderTeams(groups, names); }
function renderTeams(groups, names) { els.teamEditor.innerHTML = groups.map((students, groupIndex) => `<div class="team-edit-card team-${groupIndex}"><strong>${names[groupIndex] || `TEAM ${groupIndex + 1}`}</strong><div>${students.map((student, index) => `<button type="button" class="student-pill" data-remove-student="${groupIndex}:${index}" title="Click to remove">${typeof student === "string" ? student : student.name} ×</button>`).join("") || "<span class=\"muted\">No players yet</span>"}</div></div>`).join(""); }
let portraitAmbientTimer = null;
function portraitTier(level) { return level >= 13 ? 7 : level >= 11 ? 6 : level >= 9 ? 5 : level >= 7 ? 4 : level >= 5 ? 3 : level >= 3 ? 2 : 1; }
function celebrateActivePortrait() { if (els.studentPortrait.hidden || document.body.classList.contains("lite-mode")) return; const level = Number(els.studentPortrait.dataset.level || 1); const count = level >= 10 ? 10 : level >= 8 ? 8 : level >= 5 ? 6 : level >= 3 ? 4 : 0; els.studentPortrait.querySelectorAll(".portrait-spark").forEach((spark) => spark.remove()); for (let index = 0; index < count; index += 1) { const spark = document.createElement("span"); spark.className = "portrait-spark"; spark.style.setProperty("--spark-angle", `${index * (360 / count)}deg`); els.studentPortrait.append(spark); spark.addEventListener("animationend", () => spark.remove(), { once: true }); } }
function portraitAmbientSpec(level) { return level >= 13 ? { interval: 900, count: 3 } : level >= 11 ? { interval: 2000, count: 3 } : level >= 9 ? { interval: 3000, count: 3 } : level >= 7 ? { interval: 4000, count: 2 } : level >= 5 ? { interval: 6000, count: 1 } : null; }
function emitPortraitAmbientStars(level) { const spec = portraitAmbientSpec(level); if (!spec || els.studentPortrait.hidden || document.body.classList.contains("lite-mode")) return; for (let index = 0; index < spec.count; index += 1) { const spark = document.createElement("span"); spark.className = "portrait-ambient-spark"; spark.textContent = "✦"; spark.style.setProperty("--spark-angle", `${Math.random() * 360}deg`); spark.style.setProperty("--spark-distance", `${50 + Math.random() * 13}px`); els.studentPortrait.append(spark); spark.addEventListener("animationend", () => spark.remove(), { once: true }); } }
function schedulePortraitAmbientStars(level) { clearInterval(portraitAmbientTimer); portraitAmbientTimer = null; const spec = portraitAmbientSpec(level); if (!spec || document.body.classList.contains("lite-mode")) return; emitPortraitAmbientStars(level); portraitAmbientTimer = setInterval(() => emitPortraitAmbientStars(level), spec.interval); }
function renderGame(state, player) { const total = state.groups.reduce((sum, group) => sum + group.students.length, 0); els.roundLabel.textContent = `ROUND ${state.round}`; els.turnLabel.textContent = `${state.turnsInRound + 1} / ${total}`; els.scoreboard.innerHTML = state.groups.map((group) => `<div class="score-card ${group.color} ${group.id === state.groupIndex ? "active" : ""}" data-group-id="${group.id}"><span>${group.name}${group.streak ? ` · 🔥${group.streak}` : ""}</span><strong>${group.score}</strong></div>`).join(""); els.dialogueCharacters.replaceChildren(); (state.question?.characterIds || []).forEach((id) => { const character = document.createElement("div"); const portrait = document.createElement("img"); const name = document.createElement("span"); character.className = "dialogue-character"; portrait.src = `assets/portraits/${id}.webp`; portrait.alt = displayCharacterNames(`${id} portrait`); portrait.addEventListener("error", () => character.remove()); name.textContent = displayCharacterNames(`${id.charAt(0).toUpperCase()}${id.slice(1)}`); character.append(portrait, name); els.dialogueCharacters.append(character); }); const functionKeys = Array.isArray(state.question?.functions) ? state.question.functions : [state.question?.functions]; const functions = functionKeys.filter(Boolean).map((key) => window.LEAGUE_OF_LISTENING_FUNCTIONS?.[key] || key).join("\n"); els.videoFunction.hidden = !functions; els.videoFunctionName.textContent = functions; els.teamChip.className = `team-chip ${player.group.color}`; els.teamChip.textContent = player.group.name; els.studentName.textContent = player.student.name; els.studentPortrait.hidden = !player.student.avatarPath; els.studentPortrait.className = `active-student-portrait level-tier-${portraitTier(player.student.level)}`; els.studentPortrait.dataset.level = player.student.level; els.studentLevel.textContent = `LV. ${player.student.level}`; els.studentAvatar.removeAttribute("src"); if (player.student.avatarPath) { els.studentAvatar.src = player.student.avatarPath; els.studentAvatar.alt = `${player.student.name} avatar`; } schedulePortraitAmbientStars(player.student.level); renderJokers(state); }
function renderJokers(state) { const group = state?.groups?.[state.groupIndex]; const jokers = group?.jokers; if (!jokers) return; els.jokerRemaining.textContent = `${jokers.remaining} LEFT`; els.jokerButtons.forEach((button) => { const type = button.dataset.joker; const phaseAllowed = type === "echo" ? state.videoPlays > 0 && els.video.paused && ["video", "answer"].includes(state.phase) : type === "timeFreeze" ? state.phase === "answer" && Boolean(state.timerId) : type === "slowTime" ? (state.phase === "video" || (!window.__oliviasMovieMemoriesStudentMode && state.phase === "answer")) && els.video.paused && !state.slowTime : state.phase === "answer" && !state.doubleOrNothing; button.disabled = jokers.remaining <= 0 || !phaseAllowed || state.answered || (type === "slowTime" && window.LeagueListening.randomEvents?.getEventId() === "slow-time"); button.classList.remove("is-used"); button.classList.toggle("is-active", (type === "doubleOrNothing" && state.doubleOrNothing) || (type === "slowTime" && state.slowTime)); }); }
function animateScoreAward(source, groupId, points, score) { const target = els.scoreboard.querySelector(`[data-group-id="${groupId}"]`); if (!source || !target || points <= 0) return; const sourceRect = source.getBoundingClientRect(); const targetRect = target.getBoundingClientRect(); const token = document.createElement("div"); let completed = false; const complete = () => { if (completed) return; completed = true; target.querySelector("strong").textContent = score; target.classList.add("score-pulse"); setTimeout(() => { target.classList.remove("score-pulse"); token.remove(); }, 420); }; token.className = "score-fly"; token.textContent = `+${points}`; token.style.left = `${sourceRect.left + sourceRect.width / 2}px`; token.style.top = `${sourceRect.top + sourceRect.height / 2}px`; token.addEventListener("transitionend", (event) => { if (event.propertyName === "left") complete(); }); document.body.append(token); requestAnimationFrame(() => { token.style.left = `${targetRect.left + targetRect.width / 2}px`; token.style.top = `${targetRect.top + targetRect.height / 2}px`; }); setTimeout(complete, 1000); }
function resetQuestionView() { els.decisionOverlay.hidden = true; els.answerOverlay.hidden = true; els.evidence.hidden = true; els.transcript.hidden = true; els.answers.hidden = true; els.answers.querySelectorAll("button").forEach((button) => { button.textContent = ""; button.disabled = true; button.className = "answer-card"; }); els.feedback.hidden = true; els.evidenceReplay.hidden = true; els.next.hidden = true; els.timer.hidden = true; els.replay.hidden = true; els.replay.disabled = true; els.answerNow.hidden = true; els.answerNow.disabled = true; els.overrideReplay.disabled = true; els.playVideo.hidden = true; els.fallback.hidden = false; els.video.hidden = false; els.video.playbackRate = 1; els.videoWrap.classList.remove("is-black-stage", "is-dark-stage"); els.video.removeAttribute("src"); els.video.load(); }
let characterIntroTimer = 0;
function showCharacterIntro(item) {
  clearTimeout(characterIntroTimer);
  document.querySelectorAll(".character-intro-flight").forEach((image) => image.remove());
  els.dialogueCharacters.closest(".turn-panel")?.classList.remove("character-intro-active");
  els.videoWrap.append(els.difficultySelector);
  els.videoWrap.querySelector(".video-character-intro")?.remove();
  if (window.__oliviasMovieMemoriesStudentMode) return;
  const ids = [...new Set(item.characterIds || [])].filter((id) => !["buddy", "luna", "sunny", "storm"].includes(id)).slice(0, 2);
  if (!ids.length) return;
  els.dialogueCharacters.closest(".turn-panel")?.classList.add("character-intro-active");
  const intro = document.createElement("div");
  intro.className = "video-character-intro";
  const heading = document.createElement("p");
  heading.className = "video-character-intro-heading";
  heading.textContent = "APPEARING IN THIS VIDEO:";
  intro.append(heading);
  ids.forEach((id) => {
    const card = document.createElement("div");
    const image = document.createElement("img");
    const name = document.createElement("strong");
    image.alt = displayCharacterNames(id);
    image.src = `assets/portraits/v2/${encodeURIComponent(id)}.webp`;
    image.addEventListener("error", () => { image.src = `assets/portraits/${encodeURIComponent(id)}.webp`; }, { once: true });
    name.textContent = displayCharacterNames(id.replace(/_/g, " ").toUpperCase());
    card.append(image, name);
    intro.append(card);
  });
  els.difficultySelector.hidden = false;
  intro.append(els.difficultySelector);
  els.videoWrap.append(intro);
  els.videoStatus.textContent = item.correctOptionQuestion ? "Press CONTINUE to start." : "Choose a difficulty to start.";
}
window.LeagueListening.dismissCharacterIntro = (onComplete) => {
  const intro = els.videoWrap.querySelector(".video-character-intro");
  if (!intro) { onComplete(); return; }
  if (intro.classList.contains("is-leaving")) return;
  const reduceMotion = document.body.classList.contains("lite-mode") || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const flights = [];
  if (!reduceMotion) intro.querySelectorAll("img").forEach((image) => {
    const target = [...els.dialogueCharacters.querySelectorAll("img")].find((portrait) => portrait.alt === `${image.alt} portrait`);
    if (!target) return;
    const from = image.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    if (!to.width || !to.height) return;
    const flight = image.cloneNode();
    flight.className = "character-intro-flight";
    Object.assign(flight.style, { left: `${from.left}px`, top: `${from.top}px`, width: `${from.width}px`, height: `${from.height}px` });
    document.body.append(flight);
    flights.push(flight);
    flight.animate([
      { transform: "translate(0, 0) scale(1)", borderRadius: "24px" },
      { transform: `translate(${to.left - from.left}px, ${to.top - from.top}px) scale(${to.width / from.width}, ${to.height / from.height})`, borderRadius: "50%" }
    ], { duration: 750, easing: "cubic-bezier(.25,.65,.25,1)", fill: "forwards" });
  });
  intro.classList.add("is-leaving");
  els.difficultyButtons.forEach((button) => { button.disabled = true; });
  characterIntroTimer = setTimeout(() => {
    if (!intro.isConnected) return;
    flights.forEach((image) => image.remove());
    els.dialogueCharacters.closest(".turn-panel")?.classList.remove("character-intro-active");
    els.videoWrap.append(els.difficultySelector);
    intro.remove();
    els.difficultyButtons.forEach((button) => { button.disabled = false; });
    characterIntroTimer = 0;
    onComplete();
  }, reduceMotion ? 0 : 750);
};
let videoTimelineStart = 0;
let videoTimelineVisible = false;
function updateVideoTimeline() {
  const label = els.videoWrap.querySelector(".video-timeline");
  if (label) label.hidden = !videoTimelineVisible || !label.textContent || els.video.currentTime < videoTimelineStart || els.video.currentTime >= videoTimelineStart + 5;
}
els.video.addEventListener("timeupdate", updateVideoTimeline);
els.video.addEventListener("seeked", updateVideoTimeline);
function setVideoTimeline(item) {
  videoTimelineVisible = false;
  let label = els.videoWrap.querySelector(".video-timeline");
  const match = String(item.timeline || "").match(/^(past|future)(?:_(\d+(?:\.\d+)?))?$/);
  videoTimelineStart = match ? Number(match[2] || 0) : 0;
  const text = match ? (match[1] === "past" ? "6 years ago" : "Many years later") : "";
  if (!label && text) { label = document.createElement("span"); label.className = "video-timeline"; els.videoWrap.append(label); }
  if (label) { label.textContent = text; label.hidden = true; }
}
function configureQuestionStart(item) {
  const correctOption = !window.__oliviasMovieMemoriesStudentMode && Boolean(item.correctOptionQuestion || item.omniQuestionType);
  els.difficultySelector.querySelector("span").hidden = correctOption;
  els.transcript.querySelector(":scope > span").hidden = correctOption;
  els.difficultyButtons.forEach((button) => {
    button.hidden = correctOption && button.dataset.difficulty !== "medium";
    button.textContent = correctOption ? "CONTINUE" : button.dataset.difficulty === "easy" ? "EASY MODE" : "MEDIUM MODE";
  });
}
function loadQuestion(item) { resetQuestionView(); setVideoTimeline(item); configureQuestionStart(item); const rating = $("#video-rating"); rating.hidden = Boolean(window.__oliviasMovieMemoriesStudentMode); rating.textContent = `${window.LeagueListening.getVideoRating(item)} ★`; rating.title = `Video rating: ${window.LeagueListening.getVideoRating(item)}/10`; els.video.dataset.remoteFallbackSrc = item.remoteVideoSrc || resolveVideoSrc(item.videoSrc); delete els.video.dataset.remoteFallbackUsed; els.video.src = location.protocol === "file:" ? (item.localVideoSrc || resolveLocalVideoSrc(item.videoSrc)) : els.video.dataset.remoteFallbackSrc; els.video.hidden = true; els.fallback.hidden = true; els.videoWrap.classList.add("is-black-stage"); els.difficultySelector.hidden = false; els.playVideo.hidden = true; els.playVideo.disabled = true; els.videoStatus.textContent = (item.correctOptionQuestion || item.omniQuestionType) ? "Press CONTINUE to start." : "Choose a difficulty to start."; showCharacterIntro(item); }
function setDifficultySelection(difficulty) { els.difficultyButtons.forEach((button) => button.classList.toggle("is-selected", button.dataset.difficulty === difficulty)); els.difficultySelector.hidden = Boolean(difficulty); els.playVideo.disabled = !difficulty; }
function showVideoPlayback() { els.video.hidden = false; videoTimelineVisible = true; updateVideoTimeline(); els.videoWrap.classList.remove("is-black-stage", "is-dark-stage"); }
function concealVideo() { els.video.hidden = false; videoTimelineVisible = false; updateVideoTimeline(); els.fallback.hidden = true; els.videoWrap.classList.remove("is-black-stage"); els.videoWrap.classList.add("is-dark-stage"); }
function updateWatchCounter(plays) { const replaysLeft = GAME_CONFIG.maxVideoPlays - plays; els.watchCounter.textContent = plays === 0 ? "REGULAR REPLAY AVAILABLE: 1" : replaysLeft > 0 ? "REGULAR REPLAY LEFT: 1" : "REGULAR REPLAY LIMIT REACHED"; els.replay.disabled = plays === 0 || replaysLeft <= 0; }
function showDecision(item = null) { const omniTranslation = item?.omniQuestionType === "translation"; els.noSubtitle.querySelector("span").textContent = omniTranslation ? "+125 POINTS" : "2× POINTS · +200"; els.showSubtitle.querySelector("span").textContent = omniTranslation ? "+100 POINTS" : "1× POINTS · +100"; els.decisionOverlay.hidden = false; els.replay.hidden = false; els.videoStatus.textContent = "Choose how to answer."; }
function appendMarkedText(container, text, highlightStyle = "none") { String(text || "").split(/(\/[^/]+\/)/g).forEach((part) => { if (!part) return; const marked = part.startsWith("/") && part.endsWith("/"); if (marked && highlightStyle !== "none") { const highlight = document.createElement("span"); highlight.className = highlightStyle === "evidence" ? "evidence-target" : "answer-highlight"; highlight.textContent = part.slice(1, -1); container.append(highlight); return; } container.append(document.createTextNode(marked ? part.slice(1, -1) : part)); }); }
function renderDialogueText(container, text, speakerClass, highlightStyle = "none") { const lines = displayCharacterNames(text).replace(/([.!?])\s+/g, "$1\n").split("\n"); container.replaceChildren(); lines.forEach((line, index) => { const match = line.match(/^([^:]+:)\s*/); if (match) { const speaker = document.createElement("span"); speaker.className = speakerClass; speaker.textContent = match[1]; container.append(speaker); appendMarkedText(container, line.slice(match[0].length), highlightStyle); } else appendMarkedText(container, line, highlightStyle); if (index < lines.length - 1) container.append(document.createElement("br")); }); }
function showTranscript(text) { els.transcript.hidden = false; renderDialogueText(els.transcriptText, text, "transcript-speaker"); }
function showAnswers(item, difficulty) { const correctOption = Boolean(item.correctOptionQuestion) || item.omniQuestionType === "true-false"; els.transcript.classList.toggle("bonus-word", Boolean(item.isBonusQuestion) && !item.isTrueFalseBonus); els.answers.classList.toggle("correct-option-answers", correctOption); if (correctOption) { els.answers.replaceChildren(); item.answerOptions.forEach((option) => { const button = document.createElement("button"); button.type = "button"; button.dataset.answer = option.id; els.answers.append(button); }); showTranscript(item.blankTranscript); } else els.answers.querySelectorAll('[data-answer="c"],[data-answer="d"]').forEach((button) => button.remove()); const distractor = !correctOption && window.LEAGUE_OF_LISTENING_DIFFICULTY_DISTRACTORS?.[item.id]?.[difficulty]; els.decisionOverlay.hidden = true; els.replay.hidden = !correctOption || Boolean(item.isBonusQuestion); els.replay.disabled = true; els.answerNow.disabled = true; els.overrideReplay.disabled = true; els.videoWrap.classList.remove("is-dark-stage"); els.answerOverlay.hidden = false; els.answers.hidden = false; item.answerOptions.forEach((option) => { const button = els.answers.querySelector(`[data-answer="${option.id}"]`); if (button) { renderDialogueText(button, option.id === item.correctOptionId ? option.text : distractor || option.text, "answer-speaker"); button.disabled = false; button.className = correctOption ? `answer-card correct-option-choice choice-${option.id}` : "answer-card"; } }); window.LeagueListening.randomEvents?.prepareAnswers(item); }
function showFeedback(item, result, timedOut = false) { window.LeagueListening.randomEvents?.clearAnswerMask(); els.transcript.classList.remove("bonus-word"); const needsReveal = Boolean(item.correctOptionQuestion) && !item.isBonusQuestion && !result.correct; showTranscript(needsReveal ? item.blankTranscript : item.transcript); els.answers.querySelectorAll("button").forEach((button) => { button.disabled = true; button.classList.toggle("correct", !needsReveal && button.dataset.answer === result.correctOptionId); button.classList.toggle("wrong-answer", needsReveal && button.dataset.answer === result.selectedOptionId); if (!needsReveal && !timedOut && !result.correct && button.dataset.answer !== result.correctOptionId) button.classList.add("incorrect"); }); const correctOption = item.answerOptions.find((option) => option.id === result.correctOptionId); const correctButton = els.answers.querySelector(`[data-answer="${result.correctOptionId}"]`); if (!needsReveal && correctOption && correctButton) renderDialogueText(correctButton, correctOption.text, "answer-speaker", "answer"); const isWrong = !timedOut && !result.correct; const feedbackText = (timedOut ? "Time ran out. The answer was not scored." : result.correct ? item.explanation || "" : "") + (result.teamPenalty ? " TEAM −100 POINTS · DOUBLE JEOPARDY" : ""); els.feedbackTitle.textContent = timedOut ? "TIME'S UP" : result.correct ? `${result.doubleOrNothing || result.doubleJeopardy ? "DOUBLE! " : ""}CORRECT! +${result.points}` : "NOT THIS TIME"; els.feedbackMessage.textContent = feedbackText; els.feedbackMessage.hidden = !feedbackText; els.feedback.classList.toggle("not-this-time", isWrong); els.evidenceReplay.dataset.revealPending = needsReveal ? "true" : ""; els.evidenceReplay.hidden = needsReveal ? false : timedOut; els.evidenceReplay.disabled = false; els.evidenceReplay.textContent = needsReveal ? "REVEAL" : "▶ EVIDENCE REPLAY"; els.next.hidden = needsReveal || !timedOut; els.next.disabled = false; els.next.textContent = "NEXT →"; els.feedback.hidden = false; }
window.LeagueListening.revealCorrectOption = (item) => {
  if (els.evidenceReplay.dataset.revealPending !== "true") return false;
  const button = els.answers.querySelector(`[data-answer="${item.correctOptionId}"]`);
  if (button) button.classList.add("correct", "revealed-answer");
  delete els.evidenceReplay.dataset.revealPending;
  els.evidenceReplay.textContent = "▶ EVIDENCE REPLAY";
  return true;
};
function activateAnswerEvidenceHighlight(item, correctOptionId) { const correctOption = item.answerOptions.find((option) => option.id === correctOptionId); const correctButton = els.answers.querySelector(`[data-answer="${correctOptionId}"]`); if (correctOption && correctButton) renderDialogueText(correctButton, correctOption.text, "answer-speaker", "evidence"); }
function activateTranscriptEvidenceHighlight(item) { renderDialogueText(els.transcriptText, item.transcript, "transcript-speaker", "evidence"); }
function setTimer(seconds) { els.timer.hidden = false; els.timer.textContent = seconds; els.timer.classList.toggle("danger", seconds <= 5); }
function suspendQuestionOverlays() { const snapshot = { decision: els.decisionOverlay.hidden, answer: els.answerOverlay.hidden, feedback: els.feedback.hidden }; els.decisionOverlay.hidden = true; els.answerOverlay.hidden = true; els.feedback.hidden = true; return snapshot; }
function restoreQuestionOverlays(snapshot) { els.decisionOverlay.hidden = snapshot.decision; els.answerOverlay.hidden = snapshot.answer; els.feedback.hidden = snapshot.feedback; }
function appendEvidenceText(container, text) { const value = String(text || ""); const hasHighlight = /\/[^/]+\//.test(value); const appendPart = (part, highlighted) => { if (!part) return; const span = document.createElement(highlighted ? "mark" : "span"); if (highlighted) span.className = "evidence-target"; span.textContent = part; container.append(span); }; value.replace(/([.!?])\s+/g, "$1\n").split("\n").forEach((line, index, lines) => { const speakerMatch = line.match(/^([^:]+:)\s*/); if (speakerMatch) { const speaker = document.createElement("span"); speaker.className = "evidence-speaker"; speaker.textContent = `${speakerMatch[1]} `; container.append(speaker); line = line.slice(speakerMatch[0].length); } if (hasHighlight) { line.split(/(\/[^/]+\/)/g).forEach((part) => { const marked = part.startsWith("/") && part.endsWith("/"); appendPart(marked ? part.slice(1, -1) : part, marked); }); } else appendPart(line, true); if (index < lines.length - 1) container.append(document.createElement("br")); }); }
function highlightEvidenceWord(text, targetWord) {
  const escaped = targetWord.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
  return String(text || "").replace(/\//g, "").replace(new RegExp("(?<![\\p{L}\\p{N}])" + escaped + "(?![\\p{L}\\p{N}])", "giu"), (word) => "/" + word + "/");
}
function showEvidenceView(text, fullTranscript = false, targetWord = "") { text = displayCharacterNames(text); targetWord = displayCharacterNames(targetWord); els.evidenceText.replaceChildren(); if (targetWord) renderDialogueText(els.evidenceText, highlightEvidenceWord(text, targetWord), "evidence-speaker", "evidence"); else if (fullTranscript) renderDialogueText(els.evidenceText, text, "evidence-speaker"); else { const match = String(text || "").match(/^([^:]+:)\s*(.*)$/); if (match) { const speaker = document.createElement("span"); speaker.className = "evidence-speaker"; speaker.textContent = `${match[1]} `; els.evidenceText.append(speaker); appendEvidenceText(els.evidenceText, match[2]); } else appendEvidenceText(els.evidenceText, text); } els.evidence.hidden = false; showVideoPlayback(); }
function hideEvidenceView() { els.evidence.hidden = true; concealVideo(); }
function renderRoundScores(state, container = els.roundScores) { const liveScores = container === els.liveScores; const currentTurn = state.turnOrder?.[state.turnsInRound]; const nextTurn = state.turnOrder?.[state.turnsInRound + 1]; container.innerHTML = state.groups.map((group, groupIndex) => { const students = liveScores ? group.students : [...group.students].sort((left, right) => right.score - left.score || left.name.localeCompare(right.name)); const topScore = Math.max(...group.students.map((student) => student.score)); return `<article class="round-score-team ${group.color}"><header><strong>${group.name}</strong><span>${group.score} PTS</span></header><div>${students.map((student, displayedIndex) => { const studentIndex = liveScores ? displayedIndex : group.students.indexOf(student); const classes = ["round-score-student"]; if (topScore > 0 && student.score === topScore) classes.push("is-leading"); if (liveScores && currentTurn?.groupIndex === groupIndex && currentTurn.studentIndex === studentIndex) classes.push("is-current"); if (liveScores && nextTurn?.groupIndex === groupIndex && nextTurn.studentIndex === studentIndex) classes.push("is-next"); return `<div class="${classes.join(" ")}"><strong>${student.name}</strong><span>${student.score} PTS</span></div>`; }).join("")}</div></article>`; }).join(""); }
function renderFinal(state, hudAwards = []) { const awardsByName = new Map(hudAwards.map((award) => [award.name, award.points])); const rankedGroups = [...state.groups].sort((a, b) => b.score - a.score); const topScore = rankedGroups[0]?.score ?? 0; const winners = rankedGroups.filter((group) => group.score === topScore); els.winnerName.textContent = winners.length > 1 ? `${winners.map((group) => group.name).join(" & ")} DRAW!` : `${winners[0].name} WINS!`; els.winnerScore.textContent = winners.length > 1 ? `${topScore} game points each` : `${topScore} game points`; els.finalTeams.innerHTML = rankedGroups.map((group) => `<div class="summary-row"><span>${group.name}</span><strong>${group.score}</strong></div>`).join(""); els.finalStudents.innerHTML = state.groups.flatMap((group) => group.students.map((student) => ({ ...student, groupName: group.name }))).sort((left, right) => right.score - left.score || left.name.localeCompare(right.name)).map((student) => `<div class="summary-row"><span>${student.name} <small>${student.groupName} · <b class="hud-award">+${awardsByName.get(student.name) || 0} POINTS</b></small></span><strong>${student.score}</strong></div>`).join(""); }

Object.assign(window.LeagueListening, { activateAnswerEvidenceHighlight, activateTranscriptEvidenceHighlight, animateScoreAward, celebrateActivePortrait, concealVideo, els, hideEvidenceView, loadQuestion, renderFinal, renderGame, renderJokers, renderRoundScores, renderSetup, resetQuestionView, restoreQuestionOverlays, setDifficultySelection, setTimer, showAnswers, showDecision, showEvidenceView, showFeedback, showScreen, showTranscript, showVideoPlayback, suspendQuestionOverlays, updateWatchCounter });
})();
