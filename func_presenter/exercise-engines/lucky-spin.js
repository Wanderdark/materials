// APP-ANCHOR: Lucky-spin exercise flow.
function startLuckySpin(exercise) {
  const items = exercise.buildItems?.(state.module) || [];
  if (!items.length) return;
  state.exercise = exercise;
  state.luckyItems = items.map((item, index) => ({ ...item, label: item.label || String(index + 1) }));
  state.luckyRemaining = state.luckyItems.map((_, index) => index);
  state.luckyCurrent = null;
  state.luckyScore = 0;
  state.luckyRotation = 0;
  state.luckySpinning = false;
  clearTimeout(state.luckyTickTimer);
  clearTimeout(state.luckyFinishTimer);
  hideAllScreens();
  els.luckySpin.classList.remove("hidden");
  els.luckySpinGrade.textContent = `GRADE ${state.grade}`;
  els.luckySpinScore.textContent = "0";
  els.luckySpinEnd.classList.add("hidden");
  els.luckySpinJudge.classList.add("hidden");
  els.luckySpinVisualPanel.classList.add("hidden");
  els.luckySpinButton.disabled = false;
  els.luckySpinPrompt.textContent = "Spin the wheel to get a task.";
  renderLuckySpin();
}

function luckySegmentCenterAngle(activeIndex, segmentCount) {
  return -90 + (activeIndex + .5) * (360 / segmentCount);
}

function renderLuckySpin() {
  const remainingCount = state.luckyRemaining.length;
  els.luckySpinProgress.textContent = remainingCount;
  els.luckySpinMeta.textContent = `Remaining sections: ${remainingCount} / ${state.luckyItems.length}`;
  const colors = ["#ffd84d", "#65e6b8", "#6688ff", "#ff8066", "#9f7aea", "#38bdf8", "#f472b6", "#a3e635"];
  const activeItems = state.luckyRemaining.map((itemIndex) => ({
    itemIndex,
    item: state.luckyItems[itemIndex]
  }));
  const size = activeItems.length || 1;
  const gradient = activeItems.map(({ itemIndex }, activeIndex) => {
    const start = (activeIndex / size) * 100;
    const end = ((activeIndex + 1) / size) * 100;
    return `${colors[itemIndex % colors.length]} ${start}% ${end}%`;
  }).join(", ");
  els.luckyWheel.style.background = `conic-gradient(from -90deg, ${gradient})`;
  els.luckyWheel.style.setProperty("--wheel-counter-rotation", `${-state.luckyRotation}deg`);
  els.luckyWheel.style.transform = `rotate(${state.luckyRotation}deg)`;
  els.luckyWheel.replaceChildren(...activeItems.map(({ item }, activeIndex) => {
    const label = document.createElement("span");
    label.className = "lucky-segment-label";
    const segmentAngle = luckySegmentCenterAngle(activeIndex, size);
    label.style.setProperty("--segment-angle", `${segmentAngle}deg`);
    label.style.setProperty("--segment-counter-angle", `${-segmentAngle}deg`);
    label.textContent = item.label || String(activeIndex + 1);
    return label;
  }));
}

function spinLuckyWheel() {
  if (state.luckySpinning || !state.luckyRemaining.length) return;
  state.luckySpinning = true;
  state.luckyCurrent = null;
  els.luckySpinButton.disabled = true;
  els.luckySpinJudge.classList.add("hidden");
  els.luckySpinVisualPanel.classList.add("hidden");
  els.luckySpinPrompt.textContent = "Spinning...";
  const activeSegments = [...state.luckyRemaining];
  const activeTargetIndex = Math.floor(Math.random() * activeSegments.length);
  const targetItemIndex = activeSegments[activeTargetIndex];
  const centerAngle = luckySegmentCenterAngle(activeTargetIndex, activeSegments.length);
  const normalizedRotation = ((state.luckyRotation % 360) + 360) % 360;
  const targetRotation = ((-centerAngle % 360) + 360) % 360;
  state.luckyRotation = state.luckyRotation + 1440 + targetRotation - normalizedRotation;
  startLuckySpinTicks(2500);
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
  els.luckySpinPrompt.textContent = `${item.prompt} (${item.points || 0} Pts)`;
  els.luckySpinMeta.textContent = "Mark the answer.";
  if (item.imagePath) {
    els.luckySpinImage.src = item.imagePath;
    els.luckySpinVisualPanel.classList.remove("hidden");
  } else {
    els.luckySpinVisualPanel.classList.add("hidden");
  }
  els.luckySpinJudge.classList.remove("hidden");
}

function judgeLuckySpin(isCorrect) {
  if (state.luckyCurrent === null || state.luckySpinning) return;
  const item = state.luckyItems[state.luckyCurrent];
  if (isCorrect) {
    state.luckyScore += item.points || 0;
    els.luckySpinScore.textContent = state.luckyScore;
    showLuckyFloatingText(item.points || 0);
  }
  playFeedbackSound(isCorrect);
  state.luckyRemaining = state.luckyRemaining.filter((index) => index !== state.luckyCurrent);
  state.luckyCurrent = null;
  els.luckySpinJudge.classList.add("hidden");
  els.luckySpinVisualPanel.classList.add("hidden");
  renderLuckySpin();
  if (!state.luckyRemaining.length) {
    els.luckySpinButton.disabled = true;
    els.luckySpinPrompt.textContent = "This wheel is complete.";
    els.luckySpinMeta.textContent = "Great work! No more prompts left.";
    els.luckySpinEndKicker.textContent = "GAME COMPLETE";
    els.luckySpinFinalScore.textContent = `${state.luckyScore} POINTS`;
    els.luckySpinEnd.classList.remove("hidden");
  } else {
    els.luckySpinButton.disabled = false;
    els.luckySpinPrompt.textContent = isCorrect ? "Correct! Spin again." : "Wrong. Spin again.";
    els.luckySpinMeta.textContent = `Remaining sections: ${state.luckyRemaining.length} / ${state.luckyItems.length}`;
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

function openLuckyImageOverlay() {
  const src = els.luckySpinImage.getAttribute("src");
  if (!src || els.luckySpinVisualPanel.classList.contains("hidden")) return;
  els.luckyImageOverlayImage.src = src;
  els.luckyImageOverlay.classList.remove("hidden");
}

function closeLuckyImageOverlay() {
  els.luckyImageOverlay.classList.add("hidden");
  els.luckyImageOverlayImage.removeAttribute("src");
}
