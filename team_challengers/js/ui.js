(() => {
  const TC = window.TeamChallengers;
  const $ = (selector) => document.querySelector(selector);
  const els = {
    setup: $("#setup-screen"), selection: $("#selection-screen"), game: $("#game-screen"), round: $("#round-screen"), groupNames: $("#group-name-fields"), teamEditor: $("#team-editor"), manualName: $("#manual-student-input"), manualTeam: $("#manual-student-team"), proceed: $("#proceed-selection-button"), start: $("#start-game-button"), gradeSelect: $("#grade-select"), unitSelect: $("#unit-select"), poolStatus: $("#question-pool-status"), rosterDialog: $("#roster-dialog"), classroomList: $("#classroom-list"), classroomMessage: $("#classroom-message"), rosterStatus: $("#roster-status"), scoreboard: $("#scoreboard"), activePortrait: $("#active-portrait"), activeAvatar: $("#active-avatar"), activeLevel: $("#active-student-level"), activeTeam: $("#active-team-chip"), activeName: $("#active-student-name"), jokerStatus: $("#joker-status"), answerTimer: $("#answer-timer"), answerTimerValue: $("#answer-timer-value"), nextTurn: $("#next-turn-button"), wheelZone: $("#wheel-zone"), spinResultActions: $("#spin-result-actions"), spinResultValue: $("#spin-result-value"), spinAgain: $("#spin-again-button"), useJoker: $("#use-joker-button"), questionControls: $("#question-controls"), questionPointsBadge: $("#question-points-badge"), questionZone: $("#question-zone"), questionContext: $("#question-context"), startTimer: $("#start-timer-button"), questionPoints: $("#question-points"), questionText: $("#question-text"), answers: $("#answer-grid"), roundMessage: $("#round-message"), roundScores: $("#round-scoreboard"), winner: $("#winner-overlay"), toast: $("#toast")
  };

  let portraitAmbientTimer = null;
  let portraitAmbientKey = "";

  function portraitTier(level) { return level >= 13 ? 7 : level >= 11 ? 6 : level >= 9 ? 5 : level >= 7 ? 4 : level >= 5 ? 3 : level >= 3 ? 2 : 1; }
  function portraitMotionDisabled() { return document.body.classList.contains("lite-mode") || window.matchMedia?.("(prefers-reduced-motion: reduce)").matches; }
  function clearPortraitAmbient() { clearInterval(portraitAmbientTimer); portraitAmbientTimer = null; portraitAmbientKey = ""; els.activePortrait.querySelectorAll(".portrait-ambient-spark").forEach((spark) => spark.remove()); }
  function portraitAmbientSpec(level) { return level >= 13 ? { interval: 900, count: 3 } : level >= 11 ? { interval: 2000, count: 3 } : level >= 9 ? { interval: 3000, count: 3 } : level >= 7 ? { interval: 4000, count: 2 } : level >= 5 ? { interval: 6000, count: 1 } : null; }
  function emitPortraitAmbientStars(level) {
    const spec = portraitAmbientSpec(level);
    if (!spec || els.activePortrait.hidden || portraitMotionDisabled()) return;
    for (let index = 0; index < spec.count; index += 1) {
      const spark = document.createElement("span");
      spark.className = "portrait-ambient-spark"; spark.textContent = "✦";
      spark.style.setProperty("--spark-angle", `${Math.random() * 360}deg`); spark.style.setProperty("--spark-distance", `${50 + Math.random() * 13}px`);
      els.activePortrait.appendChild(spark); spark.addEventListener("animationend", () => spark.remove(), { once: true });
    }
  }
  function schedulePortraitAmbientStars(level, key, force = false) {
    if (!force && portraitAmbientKey === key) return;
    clearPortraitAmbient(); portraitAmbientKey = key;
    const spec = portraitAmbientSpec(level);
    if (!spec || els.activePortrait.hidden || portraitMotionDisabled()) return;
    emitPortraitAmbientStars(level); portraitAmbientTimer = setInterval(() => emitPortraitAmbientStars(level), spec.interval);
  }
  function refreshPortraitEffects() {
    els.activePortrait.querySelectorAll(".portrait-spark").forEach((spark) => spark.remove());
    schedulePortraitAmbientStars(Number(els.activePortrait.dataset.level || 1), els.activePortrait.dataset.playerKey || "", true);
  }
  function celebrateActivePortrait() {
    if (els.activePortrait.hidden || portraitMotionDisabled()) return;
    const level = Number(els.activePortrait.dataset.level || 1);
    const count = level >= 10 ? 10 : level >= 8 ? 8 : level >= 5 ? 6 : level >= 3 ? 4 : 0;
    els.activePortrait.querySelectorAll(".portrait-spark").forEach((spark) => spark.remove());
    for (let index = 0; index < count; index += 1) {
      const spark = document.createElement("span"); spark.className = "portrait-spark"; spark.style.setProperty("--spark-angle", `${index * (360 / count)}deg`);
      els.activePortrait.appendChild(spark); spark.addEventListener("animationend", () => spark.remove(), { once: true });
    }
  }

  function showScreen(name) {
    els.setup.hidden = name !== "setup"; els.selection.hidden = name !== "selection"; els.game.hidden = name !== "game"; els.round.hidden = name !== "round";
    if (name !== "game") clearPortraitAmbient();
  }

  function renderSetup(groupCount, names, groups) {
    els.groupNames.replaceChildren(); els.manualTeam.replaceChildren(); els.teamEditor.replaceChildren();
    for (let index = 0; index < groupCount; index += 1) {
      const field = document.createElement("div"); field.className = "field-shell";
      const label = document.createElement("label"); label.htmlFor = `group-name-${index}`; label.textContent = `TEAM ${index + 1} NAME`;
      const input = document.createElement("input"); input.id = `group-name-${index}`; input.maxLength = 24; input.value = names[index]; input.dataset.groupName = index; field.append(label, input); els.groupNames.appendChild(field);
      const option = document.createElement("option"); option.value = index; option.textContent = names[index]; els.manualTeam.appendChild(option);
      const team = document.createElement("div"); team.className = "editor-team"; team.dataset.color = TC.CONFIG.groupColors[index];
      const heading = document.createElement("h3"); heading.textContent = names[index]; team.appendChild(heading);
      if (!groups[index].length) { const empty = document.createElement("p"); empty.className = "empty-team"; empty.textContent = "Add at least one challenger."; team.appendChild(empty); }
      groups[index].forEach((student, studentIndex) => { const chip = document.createElement("div"); chip.className = "student-chip"; const text = document.createElement("span"); text.textContent = student.name; const remove = document.createElement("button"); remove.type = "button"; remove.textContent = "×"; remove.dataset.removeGroup = index; remove.dataset.removeStudent = studentIndex; remove.setAttribute("aria-label", `Remove ${student.name}`); chip.append(text, remove); team.appendChild(chip); });
      els.teamEditor.appendChild(team);
    }
    els.proceed.disabled = groups.slice(0, groupCount).some((group) => !group.length);
  }

  function renderGame(state) {
    const active = TC.activeTurn(state);
    els.scoreboard.replaceChildren();
    state.groups.forEach((group) => { const card = document.createElement("div"); card.className = `score-card${group.id === active.group.id ? " is-active" : ""}`; card.dataset.groupId = group.id; card.style.setProperty("--team-color", `var(--${group.color})`); const name = document.createElement("span"); name.textContent = group.name; const score = document.createElement("strong"); score.textContent = group.score; card.append(name, score); els.scoreboard.appendChild(card); });
    const level = Math.max(1, Number(active.student.level) || 1); const playerKey = `${active.groupIndex}:${active.studentIndex}:${active.student.id}:${level}`;
    els.activeTeam.textContent = active.group.name; els.activeTeam.style.setProperty("--team-color", `var(--${active.group.color})`); els.activeName.textContent = active.student.name;
    els.activePortrait.hidden = !active.student.avatarPath; els.activePortrait.className = `active-portrait level-tier-${portraitTier(level)}`; els.activePortrait.dataset.level = level; els.activePortrait.dataset.playerKey = playerKey; els.activeLevel.textContent = `LV. ${level}`;
    els.activeAvatar.removeAttribute("src");
    els.activeAvatar.alt = "";
    els.activeAvatar.onerror = () => { els.activePortrait.hidden = true; els.activeAvatar.removeAttribute("src"); clearPortraitAmbient(); };
    if (active.student.avatarPath) { els.activeAvatar.src = active.student.avatarPath; els.activeAvatar.alt = `${active.student.name} photo`; }
    renderJokers(state);
    schedulePortraitAmbientStars(level, playerKey);
  }

  function renderJokers(state) {
    const { group } = TC.activeTurn(state);
    const { capacity, remaining } = group.jokers;
    els.jokerStatus.hidden = capacity === 0;
    els.jokerStatus.textContent = `🃏 JOKERS ${remaining} / ${capacity}`;
    els.spinAgain.disabled = !TC.canUseJoker(state, "spinAgain");
    const canUseQuestionJoker = TC.canUseJoker(state, "fiftyFifty") || TC.canUseJoker(state, "doublePoints");
    els.useJoker.disabled = !canUseQuestionJoker;
    els.useJoker.textContent = canUseQuestionJoker ? "🃏 USE JOKER" : "🃏 JOKER USED";
  }

  function resetAnswerTimerView() {
    els.answerTimer.hidden = true; els.answerTimer.className = "header-answer-timer"; els.answerTimerValue.textContent = String(TC.CONFIG.answerTimerSeconds);
    els.startTimer.disabled = false; els.startTimer.textContent = "⌛ START TIMER";
  }

  function startAnswerTimerView() {
    els.startTimer.disabled = true; els.startTimer.textContent = "⏳ TIMER RUNNING";
  }

  function updateAnswerTimerView(seconds) {
    els.answerTimer.hidden = false; els.answerTimerValue.textContent = String(seconds); els.answerTimer.classList.toggle("is-danger", seconds <= 5);
  }

  function showWheel() {
    els.wheelZone.hidden = false; els.questionZone.hidden = true; els.questionControls.hidden = true; els.questionPointsBadge.hidden = true; els.spinResultActions.hidden = true; els.spinResultValue.textContent = ""; els.nextTurn.hidden = true; resetAnswerTimerView();
  }

  function showSpinResult(points) {
    els.spinResultValue.textContent = `${points} POINTS`;
    els.spinResultActions.hidden = false;
  }

  function showQuestion(question, points, onAnswer) {
    els.wheelZone.hidden = true; els.questionZone.hidden = false; els.questionControls.hidden = false; els.questionPointsBadge.hidden = false; els.spinResultActions.hidden = true; els.nextTurn.hidden = true; resetAnswerTimerView();
    els.questionPoints.textContent = points; TC.renderQuestionTemplate(els.questionContext, question); els.questionText.textContent = question.question; els.answers.replaceChildren();
    question.options.forEach((optionText, index) => { const button = document.createElement("button"); button.type = "button"; button.className = "answer-button"; button.dataset.answerIndex = index; const letter = document.createElement("span"); letter.className = "answer-option-label"; letter.textContent = String.fromCharCode(65 + index); letter.style.cssText = "display:grid;place-items:center;flex:0 0 36px;height:36px;border-radius:10px;background:linear-gradient(145deg,#7c3aed,#db2777);color:#fff;font:800 17px/1 'Barlow Condensed',sans-serif"; const portraitName = question.optionPortraits?.[index]; if (portraitName) { const portrait = document.createElement("img"); portrait.className = "answer-option-portrait"; TC.attachPortrait(portrait, portraitName); button.classList.add("has-option-portrait"); button.append(letter, portrait); } else button.append(letter); const text = document.createElement("span"); text.textContent = optionText; button.append(text); button.addEventListener("click", () => onAnswer(index)); els.answers.appendChild(button); });
  }

  function eliminateAnswers(indices) {
    indices.forEach((index) => { const button = els.answers.children[index]; if (button) { button.disabled = true; button.classList.add("is-eliminated"); } });
  }

  function activateDoublePoints(points) {
    els.questionPoints.textContent = points; els.spinResultValue.textContent = `${points} POINTS`;
  }

  function showFeedback(result, selectedIndex, correctIndex, timedOut = false) {
    [...els.answers.children].forEach((button, index) => { button.disabled = true; if (result.correct && index === correctIndex) button.classList.add("is-correct"); else if (!result.correct && index === selectedIndex) button.classList.add("is-wrong"); });
    els.startTimer.disabled = true; els.startTimer.textContent = timedOut ? "⌛ TIME'S UP" : "ANSWERED"; els.answerTimer.hidden = true;
    els.nextTurn.hidden = false; els.nextTurn.disabled = false; els.nextTurn.dataset.action = result.correct ? "next" : "reveal"; els.nextTurn.textContent = result.correct ? "NEXT CHALLENGER →" : "REVEAL ANSWER";
  }

  function revealAnswer(correctIndex) {
    const correctButton = els.answers.children[correctIndex];
    if (correctButton) correctButton.classList.add("is-correct");
    els.nextTurn.disabled = true; els.nextTurn.textContent = "ANSWER REVEALED";
    clearTimeout(revealAnswer.timer);
    revealAnswer.timer = setTimeout(() => { els.nextTurn.disabled = false; els.nextTurn.dataset.action = "next"; els.nextTurn.textContent = "NEXT CHALLENGER →"; }, 1000);
  }

  function animateScoreFlight(points, answerIndex, groupId) {
    const source = els.answers.children[answerIndex];
    const target = els.scoreboard.querySelector(`[data-group-id="${groupId}"]`);
    if (!source || !target) return;
    const sourceRect = source.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const startX = sourceRect.left + sourceRect.width / 2;
    const startY = sourceRect.top + sourceRect.height / 2;
    const endX = targetRect.left + targetRect.width / 2;
    const endY = targetRect.top + targetRect.height / 2;
    const midX = (startX + endX) / 2;
    const midY = Math.min(startY, endY) - Math.max(110, Math.abs(endX - startX) * 0.16);
    const score = document.createElement("div");
    score.className = `score-flight ${points > 0 ? "is-positive" : "is-zero"}`;
    score.textContent = `+${points}`;
    document.body.appendChild(score);
    const animation = score.animate([
      { transform: `translate(${startX}px,${startY}px) translate(-50%,-50%) scale(.65)`, opacity: 0 },
      { transform: `translate(${startX}px,${startY}px) translate(-50%,-50%) scale(1.15)`, opacity: 1, offset: .12 },
      { transform: `translate(${midX}px,${midY}px) translate(-50%,-50%) scale(1.05)`, opacity: 1, offset: .55 },
      { transform: `translate(${endX}px,${endY}px) translate(-50%,-50%) scale(.55)`, opacity: .2 }
    ], { duration: 1750, easing: "cubic-bezier(.2,.72,.22,1)", fill: "forwards" });
    animation.onfinish = () => { score.remove(); target.classList.add("score-hit"); setTimeout(() => target.classList.remove("score-hit"), 460); };
  }

  function launchJackpotConfetti() {
    const layer = document.createElement("div");
    layer.className = "jackpot-confetti-layer";
    const emojis = ["🎉", "✨", "⭐", "💯", "🎊", "🔥"];
    document.body.appendChild(layer);
    let pieceIndex = 0;
    const emitBatch = () => {
      for (let batchIndex = 0; batchIndex < 4; batchIndex += 1) {
        const piece = document.createElement("span");
        piece.textContent = emojis[pieceIndex % emojis.length];
        piece.style.left = `${2 + Math.random() * 96}%`;
        piece.style.setProperty("--drift", `${-130 + Math.random() * 260}px`);
        piece.style.setProperty("--spin", `${-420 + Math.random() * 840}deg`);
        piece.style.setProperty("--rise-duration", `${1.05 + Math.random() * .35}s`);
        piece.style.fontSize = `${18 + Math.random() * 24}px`;
        piece.addEventListener("animationend", () => piece.remove(), { once: true });
        layer.appendChild(piece); pieceIndex += 1;
      }
    };
    emitBatch();
    const emitter = setInterval(emitBatch, 100);
    setTimeout(() => clearInterval(emitter), 1600);
    setTimeout(() => layer.remove(), 3100);
  }

  function renderRound(state) {
    els.roundMessage.textContent = `Round ${state.round} is complete. Continue with the same line-up or finish the game.`; els.roundScores.replaceChildren();
    state.groups.forEach((group) => { const card = document.createElement("div"); card.className = "round-score"; const name = document.createElement("span"); name.textContent = group.name; const score = document.createElement("strong"); score.textContent = group.score; card.append(name, score); els.roundScores.appendChild(card); });
  }

  function showToast(message) { els.toast.textContent = message; els.toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 2600); }

  Object.assign(TC, { activateDoublePoints, animateScoreFlight, celebrateActivePortrait, eliminateAnswers, els, launchJackpotConfetti, refreshPortraitEffects, renderGame, renderRound, renderSetup, resetAnswerTimerView, revealAnswer, showFeedback, showQuestion, showScreen, showSpinResult, showToast, showWheel, startAnswerTimerView, stopPortraitEffects: clearPortraitAmbient, updateAnswerTimerView });
})();
