(() => {
  const root = document.getElementById("lucasGameRoot");
  const launcher = document.querySelector(".lucas-card");
  const timeScreen = document.getElementById("timeSetterScreen");
  const verbScreen = document.getElementById("verbCardScreen");
  const timeNodes = {
    grade: document.getElementById("timeSetterGradeLabel"),
    round: document.getElementById("timeSetterRoundText"),
    score: document.getElementById("timeSetterScore"),
    target: document.getElementById("timeSetterTarget"),
    digital: document.getElementById("timeSetterDigital"),
    feedback: document.getElementById("timeSetterFeedback"),
    hourUp: document.getElementById("timeSetterHourUp"),
    hourDown: document.getElementById("timeSetterHourDown"),
    minuteUp: document.getElementById("timeSetterMinuteUp"),
    minuteDown: document.getElementById("timeSetterMinuteDown"),
    check: document.getElementById("timeSetterCheckButton")
  };
  const timeState = { score: 0, round: 1, hour: 12, minute: 0, target: null, locked: false };
  const params = new URLSearchParams(window.location.search);
  const returnUrl = params.get("return") || "../../../student-zone/index.html";
  const isStudentLaunch = params.get("launcher") === "student-zone";
  let timeStepAudio = null;

  function updateStudentScore(isCorrect) {
    if (!isStudentLaunch) return;
    if (isCorrect) window.StudentGame?.onCorrect?.();
    else window.StudentGame?.onWrong?.();
  }

  function awardStudentGoal(result) {
    if (isStudentLaunch && result?.scored) window.StudentGame?.onCorrect?.();
  }

  function playFeedbackSound(isCorrect) {
    const audio = new Audio(`../../sounds/${isCorrect ? "correct" : "wrong"}.mp3`);
    audio.play().catch(() => {});
  }

  function showFeedbackStamp(isCorrect, target) {
    window.Stamp?.show(target, isCorrect ? "correct" : "wrong");
  }

  window.playFeedbackSound = playFeedbackSound;
  window.exerciseActivityModules = {
    ...(window.exerciseActivityModules || {}),
    showStamp(isCorrect) {
      showFeedbackStamp(isCorrect, document.getElementById("verbCardPlayPanel"));
      updateStudentScore(isCorrect);
    }
  };

  function openPenalty(state, stateLabel, onClose) {
    window.PenaltyShootout.open({
      state,
      stateLabel,
      soundBase: "../../../sounds/",
      imageBase: "../../images/minigames/",
      onClose: (result) => {
        awardStudentGoal(result);
        onClose?.(result);
      }
    });
  }

  function showLauncher() {
    timeScreen.classList.add("hidden");
    verbScreen.classList.add("hidden");
    launcher.hidden = false;
    showMenu();
  }

  function showMenu() {
    root.innerHTML = `
      <div class="mission-grid">
        <button class="mission-button" type="button" data-mode="time">SET THE TIME<small>Use the real digital-clock exercise, then take a penalty.</small></button>
        <button class="mission-button" type="button" data-mode="verb">VERB CHARTS<small>Use the visual V1/V2 card exercise, then take a penalty.</small></button>
      </div>`;
    root.querySelectorAll("[data-mode]").forEach((button) => button.addEventListener("click", async () => {
      await window.__lucasStudentHudReady;
      button.dataset.mode === "time" ? startTimeSetter() : startVerbCards();
    }));
  }

  function createTarget(previousTarget = null, round = 1) {
    const guidedMinutes = [0, 15, 30, 0, 15];
    const minuteChoices = round <= guidedMinutes.length ? [guidedMinutes[round - 1]] : [0, 5, 10, 15, 20, 30, 45];
    let target;
    do {
      target = { hour: Math.floor(Math.random() * 12) + 1, minute: minuteChoices[Math.floor(Math.random() * minuteChoices.length)] };
    } while (previousTarget && target.hour === previousTarget.hour && target.minute === previousTarget.minute);
    return target;
  }

  function describeTarget({ hour, minute }) {
    const words = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    if (minute === 0) return `It is ${words[hour]} o'clock.`;
    if (minute === 15) return `It is quarter past ${words[hour]}.`;
    if (minute === 30) return `It is half past ${words[hour]}.`;
    if (minute === 45) return `It is quarter to ${words[hour === 12 ? 1 : hour + 1]}.`;
    return `It is ${words[minute]} past ${words[hour]}.`;
  }

  function updateDigitalClock() {
    const value = `${String(timeState.hour).padStart(2, "0")}:${String(timeState.minute).padStart(2, "0")}`;
    timeNodes.digital.setAttribute("aria-label", value);
    timeNodes.digital.replaceChildren(...value.split("").map(createDigitalClockGlyph));
  }

  function createDigitalClockGlyph(character) {
    const glyph = document.createElement("span");
    if (character === ":") {
      glyph.className = "digital-colon";
      glyph.append(document.createElement("i"), document.createElement("i"));
      return glyph;
    }
    const segmentsByDigit = {
      0: ["a", "b", "c", "d", "e", "f"], 1: ["b", "c"], 2: ["a", "b", "g", "e", "d"],
      3: ["a", "b", "g", "c", "d"], 4: ["f", "g", "b", "c"], 5: ["a", "f", "g", "c", "d"],
      6: ["a", "f", "g", "e", "c", "d"], 7: ["a", "b", "c"], 8: ["a", "b", "c", "d", "e", "f", "g"],
      9: ["a", "b", "c", "d", "f", "g"]
    };
    glyph.className = "digital-digit";
    const active = new Set(segmentsByDigit[character] || []);
    ["a", "b", "c", "d", "e", "f", "g"].forEach((segment) => {
      const bar = document.createElement("i");
      bar.className = `segment segment-${segment}${active.has(segment) ? " active" : ""}`;
      glyph.append(bar);
    });
    return glyph;
  }

  function setTimeControlsDisabled(disabled) {
    [timeNodes.hourUp, timeNodes.hourDown, timeNodes.minuteUp, timeNodes.minuteDown, timeNodes.check].forEach((button) => { button.disabled = disabled; });
  }

  function renderTimeSetter(shake = false) {
    timeNodes.grade.textContent = "GRADE 5";
    timeNodes.round.textContent = `ROUND ${timeState.round}`;
    timeNodes.score.textContent = String(timeState.score);
    timeNodes.target.textContent = describeTarget(timeState.target);
    timeNodes.feedback.textContent = "Set the clock, then press OK.";
    timeNodes.feedback.className = "exercise-feedback";
    updateDigitalClock();
    setTimeControlsDisabled(false);
    if (shake) {
      timeNodes.target.classList.remove("ts-shake");
      void timeNodes.target.offsetWidth;
      timeNodes.target.classList.add("ts-shake");
    }
  }

  function startTimeSetter() {
    launcher.hidden = true;
    verbScreen.classList.add("hidden");
    timeScreen.classList.remove("hidden");
    timeState.score = 0;
    timeState.round = 1;
    timeState.target = createTarget();
    timeState.hour = 12;
    timeState.minute = 0;
    timeState.locked = false;
    renderTimeSetter(true);
  }

  function advanceTimeRound() {
    timeState.round += 1;
    timeState.target = createTarget(timeState.target, timeState.round);
    timeState.hour = 12;
    timeState.minute = 0;
    timeState.locked = false;
    renderTimeSetter(true);
  }

  function checkTimeSetter() {
    if (timeState.locked) return;
    const isCorrect = timeState.hour === timeState.target.hour && timeState.minute === timeState.target.minute;
    timeState.locked = true;
    setTimeControlsDisabled(true);
    if (isCorrect) {
      timeState.score += 1;
      timeNodes.score.textContent = String(timeState.score);
      timeNodes.feedback.textContent = "Correct! Lucas is ready to shoot.";
      timeNodes.feedback.className = "exercise-feedback correct";
      updateStudentScore(true);
      playFeedbackSound(true);
      showFeedbackStamp(true, document.getElementById("timeSetterCard"));
      window.setTimeout(() => openPenalty("correct", "✅ CORRECT TIME — FULL POWER!", advanceTimeRound), 900);
      return;
    }
    timeNodes.feedback.textContent = "Not quite. Lucas still gets a low-power shot.";
    timeNodes.feedback.className = "exercise-feedback wrong";
    updateStudentScore(false);
    playFeedbackSound(false);
    showFeedbackStamp(false, document.getElementById("timeSetterCard"));
    window.setTimeout(() => openPenalty("wrong", "❌ WRONG TIME", () => { timeState.locked = false; setTimeControlsDisabled(false); }), 600);
  }

  function startVerbCards() {
    launcher.hidden = true;
    timeScreen.classList.add("hidden");
    window.startSimplePastVerbCards({
      title: "PLAY SOCCER WITH LUCAS",
      assetBase: "../../../images/snapwords",
      penaltyOptions: {
        soundBase: "../../../sounds/",
        imageBase: "../../images/minigames/",
        onClose: awardStudentGoal
      }
    }, {
      state: { grade: 7 },
      hideAllScreens() {
        launcher.hidden = true;
        verbScreen.classList.add("hidden");
      },
      returnToSetup: showLauncher
    });
  }

  function playTimeStep(isIncrease) {
    timeStepAudio?.pause();
    timeStepAudio = new Audio(`../../sounds/digital_${isIncrease ? "up" : "down"}.mp3`);
    timeStepAudio.play().catch(() => {});
  }

  timeNodes.hourUp.addEventListener("click", () => { if (!timeState.locked) { timeState.hour = (timeState.hour % 12) + 1; updateDigitalClock(); playTimeStep(true); } });
  timeNodes.hourDown.addEventListener("click", () => { if (!timeState.locked) { timeState.hour = ((timeState.hour + 10) % 12) + 1; updateDigitalClock(); playTimeStep(false); } });
  timeNodes.minuteUp.addEventListener("click", () => { if (!timeState.locked) { timeState.minute = (timeState.minute + 15) % 60; updateDigitalClock(); playTimeStep(true); } });
  timeNodes.minuteDown.addEventListener("click", () => { if (!timeState.locked) { timeState.minute = (timeState.minute + 45) % 60; updateDigitalClock(); playTimeStep(false); } });
  timeNodes.check.addEventListener("click", checkTimeSetter);
  document.getElementById("timeSetterExitButton").addEventListener("click", showLauncher);
  document.getElementById("timeSetterInlineExitButton").addEventListener("click", showLauncher);
  document.querySelector(".back-link").href = returnUrl;
  showMenu();
})();
