// APP-ANCHOR: Time-setter exercise flow.
function createTimeSetterTarget(previousTarget = null, round = 1, exercise = {}) {
  const defaultTypes = [{ minutes: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55] }];
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
  if (minute > 30) return `It is ${words[60 - minute]} to ${words[hour === 12 ? 1 : hour + 1]}.`;
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
      const advanceRound = () => {
        state.timeSetterRound += 1;
        state.timeSetterTarget = createTimeSetterTarget(state.timeSetterTarget, state.timeSetterRound, state.timeSetterExercise);
        state.timeSetterHour = 12;
        state.timeSetterMinute = 0;
        state.timeSetterLocked = false;
        renderTimeSetter(true);
      };
      if (window.PenaltyShootout) {
        window.PenaltyShootout.open({
          state: "correct",
          stateLabel: "✅ CORRECT TIME — FULL POWER!",
          onClose: (result) => {
            if (result?.scored) window.StudentGame?.onCorrect();
            advanceRound();
          }
        });
      } else {
        advanceRound();
      }
    }, 1200);
    return;
  }
  playWavFeedback(false);
  window.exerciseActivityModules.showStamp(false);
  els.timeSetterFeedback.textContent = "Not quite. Try the same target again.";
  els.timeSetterFeedback.className = "exercise-feedback wrong";
  if (window.PenaltyShootout) {
    setTimeout(() => {
      window.PenaltyShootout.open({ state: "wrong", stateLabel: "❌ WRONG TIME" });
    }, 600);
  }
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
