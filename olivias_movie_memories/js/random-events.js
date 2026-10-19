(() => {
  window.LeagueListening = window.LeagueListening || {};
  const EVENTS = Object.freeze([
    { id: "complete-silence", name: "COMPLETE SILENCE", description: "The video has NO SOUND" },
    { id: "slow-time", name: "SLOW TIME", description: "This video plays slower." },
    { id: "rapid-time", name: "RAPID TIME", description: "This video plays faster." },
    { id: "hidden-word", name: "HIDDEN WORD", description: "The answer words are hidden! Click to reveal one word. Click it again to answer. Opening another word hides the previous one." },
    { id: "double-jeopardy", name: "DOUBLE JEOPARDY", description: "CORRECT : YOU and TEAM get DOUBLE points\nWRONG : TEAM LOSES 100 points.\nRefuse to play normally." }
  ]);
  function createRandomEventPicker(config) {
    const bags = new Map();
    return (mode) => {
      if (!config.enabled || mode === "student") return null;
      const chance = config.testMode ? config.testChance : config.normalChance;
      if (Math.random() >= chance) return null;
      const key = mode === "correct-option" || mode === "omni-word" ? "correct-option" : mode === "omni-translation" ? "omni-translation" : "classic";
      let bag = bags.get(key);
      if (!bag?.length) {
        bag = EVENTS.filter((event) => (key === "correct-option" || event.id !== "hidden-word") && (key !== "omni-translation" || event.id !== "complete-silence"));
        for (let i = bag.length - 1; i > 0; i -= 1) {
          const swap = Math.floor(Math.random() * (i + 1));
          [bag[i], bag[swap]] = [bag[swap], bag[i]];
        }
        bags.set(key, bag);
      }
      return bag.shift();
    };
  }
  function createRandomEventController(els, config) {
    const dialog = document.querySelector("#random-event-dialog");
    const name = document.querySelector("#random-event-name");
    const description = document.querySelector("#random-event-description");
    const continueButton = document.querySelector("#random-event-continue");
    const acceptButton = document.querySelector("#random-event-accept");
    const refuseButton = document.querySelector("#random-event-refuse");
    let jeopardyAccepted = false;
    let pick = createRandomEventPicker(config);
    let current = null;
    let continueTurn = null;
    let blackoutTimer = 0;
    let effectsPlaying = false;
    let originalMuted = els.video.muted;
    const stopBlackout = () => {
      clearTimeout(blackoutTimer);
      blackoutTimer = 0;
      els.videoWrap.classList.remove("event-blackout");
    };
    function startBlackout() {
      stopBlackout();
      if (current?.id !== "blackout" || !effectsPlaying || els.video.paused) return;
      const flash = () => {
        if (!effectsPlaying || els.video.paused || current?.id !== "blackout") return stopBlackout();
        els.videoWrap.classList.add("event-blackout");
        blackoutTimer = setTimeout(() => {
          els.videoWrap.classList.remove("event-blackout");
          blackoutTimer = setTimeout(flash, 1400 + Math.random() * 600);
        }, 1000);
      };
      blackoutTimer = setTimeout(flash, 1200);
    }
    function clearAnswerMask() {
      els.answers.querySelectorAll("button").forEach((button) => {
        button.classList.remove("hidden-word-card", "hidden-word-open");
        delete button.dataset.hiddenWordOpen;
        button.removeAttribute("aria-label");
      });
    }
    function resetTurn() {
      stopBlackout();
      clearAnswerMask();
      effectsPlaying = false;
      current = null;
      jeopardyAccepted = false;
      continueTurn = null;
      dialog.hidden = true;
      els.video.muted = originalMuted;
      els.video.playbackRate = 1;
    }
    function startTurn(mode, onContinue) {
      resetTurn();
      originalMuted = els.video.muted;
      current = pick(mode);
      if (!current) return onContinue();
      name.textContent = current.name;
      description.replaceChildren(...current.description.split("\n").flatMap((line, index) => index ? [document.createElement("br"), document.createTextNode(line)] : [document.createTextNode(line)]));
      continueTurn = onContinue;
      const jeopardy = current.id === "double-jeopardy";
      continueButton.hidden = jeopardy;
      acceptButton.hidden = refuseButton.hidden = !jeopardy;
      dialog.hidden = false;
      (jeopardy ? acceptButton : continueButton).focus();
    }
    continueButton.addEventListener("click", () => {
      if (current?.id === "double-jeopardy") return;
      const resume = continueTurn;
      if (!resume) return;
      continueTurn = null;
      dialog.hidden = true;
      resume();
    });
    function decideJeopardy(accepted) {
      if (current?.id !== "double-jeopardy" || !continueTurn) return;
      jeopardyAccepted = accepted;
      const resume = continueTurn;
      continueTurn = null;
      dialog.hidden = true;
      resume();
    }
    acceptButton.addEventListener("click", () => decideJeopardy(true));
    refuseButton.addEventListener("click", () => decideJeopardy(false));
    function applyMainScore(state, result, timeBonus = 0) {
      if (!result || !jeopardyAccepted || state.question?.isBonusQuestion || window.__oliviasMovieMemoriesStudentMode) return;
      const { group, student } = window.LeagueListening.activePlayer(state);
      result.doubleJeopardy = true;
      if (result.correct) {
        group.score += result.points;
        student.score += (result.points - timeBonus) / (result.doubleOrNothing ? 2 : 1) + timeBonus;
        result.points *= 2;
      } else {
        group.score -= 100;
        result.teamPenalty = 100;
        const score = els.scoreboard.querySelector(`[data-group-id="${state.groupIndex}"] strong`);
        if (score) score.textContent = group.score;
      }
    }
    els.video.addEventListener("play", startBlackout);
    els.video.addEventListener("pause", stopBlackout);
    els.video.addEventListener("ended", stopBlackout);
    function startPlayback(baseRate = 1, slowTimeJoker = false) {
      effectsPlaying = true;
      els.video.muted = current?.id === "complete-silence" || originalMuted;
      els.video.playbackRate = current?.id === "slow-time" ? .7 : current?.id === "rapid-time" ? (slowTimeJoker ? 1 : 1.3) : baseRate;
    }
    function suspendPlayback() {
      effectsPlaying = false;
      stopBlackout();
      els.video.muted = originalMuted;
      els.video.playbackRate = 1;
    }
    function prepareAnswers(item) {
      clearAnswerMask();
      if (current?.id !== "hidden-word" || item.isBonusQuestion) return;
      els.answers.querySelectorAll("button").forEach((button) => {
        button.classList.add("hidden-word-card");
        button.dataset.hiddenWordOpen = "false";
        button.setAttribute("aria-label", "Hidden word. Click to reveal.");
      });
    }
    function acceptAnswerClick(button, item) {
      if (current?.id !== "hidden-word" || item.isBonusQuestion) return true;
      if (button.dataset.hiddenWordOpen === "true") return true;
      els.answers.querySelectorAll("button").forEach((choice) => {
        choice.classList.remove("hidden-word-open");
        choice.dataset.hiddenWordOpen = "false";
        choice.setAttribute("aria-label", "Hidden word. Click to reveal.");
      });
      button.classList.add("hidden-word-open");
      button.dataset.hiddenWordOpen = "true";
      button.setAttribute("aria-label", button.textContent + ". Click again to answer.");
      return false;
    }
    return { startTurn, resetTurn, startPlayback, suspendPlayback, prepareAnswers, acceptAnswerClick, clearAnswerMask, applyMainScore,
      resetGame() { resetTurn(); pick = createRandomEventPicker(config); },
      getEventId: () => current?.id || "",
      hasSpeedEvent: () => current?.id === "slow-time" || current?.id === "rapid-time" };
  }
  Object.assign(window.LeagueListening, { createRandomEventPicker, createRandomEventController });
})();
