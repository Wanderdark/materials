(() => {
  const TC = window.TeamChallengers;
  const feedbackSounds = {
    correct: new Audio("sounds/correct.mp3"),
    wrong: new Audio("sounds/wrong.mp3"),
    cheer: new Audio("sounds/cheer.mp3"),
    cheer2: new Audio("sounds/cheer2.mp3"),
    final: new Audio("sounds/final.mp3")
  };
  const timerSound = new Audio("sounds/timer.mp3");
  Object.values(feedbackSounds).concat(timerSound).forEach((sound) => { sound.preload = "auto"; });
  let audioContext = null;
  let tickTimer = 0;
  let tickRun = 0;

  function getAudioContext() {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === "suspended") audioContext.resume().catch(() => {});
    return audioContext;
  }

  function playFeedbackSound(type) {
    const sound = feedbackSounds[type];
    if (!sound) return;
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }

  function stopBackgroundMusic() {
    TC.backgroundMusic?.pause?.();
  }

  function playTimerSound() {
    timerSound.currentTime = 0;
    timerSound.play().catch(() => {});
  }

  function stopTimerSound() {
    timerSound.pause();
    timerSound.currentTime = 0;
  }

  function playWheelTick(progress) {
    const context = getAudioContext();
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(980 - progress * 260, now);
    gain.gain.setValueAtTime(0.055, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);
    oscillator.connect(gain); gain.connect(context.destination);
    oscillator.start(now); oscillator.stop(now + 0.03);
  }

  function startWheelTicks(duration) {
    stopWheelTicks();
    const runId = ++tickRun;
    const startedAt = performance.now();
    const tick = () => {
      if (runId !== tickRun) return;
      const progress = Math.min(1, (performance.now() - startedAt) / duration);
      playWheelTick(progress);
      if (progress >= 1) return;
      const delay = 42 + Math.pow(progress, 2.15) * 390;
      tickTimer = window.setTimeout(tick, delay);
    };
    tick();
  }

  function stopWheelTicks() {
    tickRun += 1;
    clearTimeout(tickTimer);
    tickTimer = 0;
  }

  Object.assign(TC, { playFeedbackSound, playTimerSound, startWheelTicks, stopBackgroundMusic, stopTimerSound, stopWheelTicks });
})();
