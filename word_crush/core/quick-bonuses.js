(function () {
  const FIRST_DROP_DELAY_MIN = 16000;
  const FIRST_DROP_DELAY_MAX = 24000;
  const BONUS_LIFETIME = 6000;
  const EFFECT_DURATION = 30000;
  const EARTHQUAKE_DURATION = 10000;
  const FADE_TO_BLACK_DURATION = 20000;
  const TUTORIAL_KEY = "wc_surprise_tutorial_seen";
  // Each effect is drawn once per shuffled pool before the next pool is created.
  const EFFECTS = ["wordFog", "fadeToBlack", "displace", "timeWarp", "picturePanic", "earthquake", "colorLink"];

  let spawnTimer = null;
  let expiryTimer = null;
  let activeDrop = null;
  let activeState = null;
  let effectTimer = null;
  let onStateChange = null;
  let onDisplace = null;
  let effectPool = [];
  let tutorialBubble = null;

  function start(state, renderBoard, handlers = {}) {
    stop();
    if (state.runType !== "quick") return;

    activeState = state;
    onStateChange = renderBoard;
    onDisplace = handlers.onDisplace || null;
    scheduleSpawn(randomFirstDropDelay());
  }

  function stop() {
    if (spawnTimer) window.clearTimeout(spawnTimer);
    if (expiryTimer) window.clearTimeout(expiryTimer);
    if (effectTimer) window.clearTimeout(effectTimer);
    spawnTimer = null;
    expiryTimer = null;
    effectTimer = null;
    activeDrop?.remove();
    activeDrop = null;
    tutorialBubble?.remove();
    tutorialBubble = null;
    clearVisualEffects();
    activeState = null;
    onStateChange = null;
    onDisplace = null;
    effectPool = [];
  }

  function scheduleSpawn(delay) {
    spawnTimer = window.setTimeout(spawnSurprise, delay);
  }

  function spawnSurprise() {
    spawnTimer = null;
    if (!activeState?.isRunning || activeState.quickBonusEffect) return;

    if (activeState.isPaused || activeState.isResolving) {
      scheduleSpawn(2500);
      return;
    }

    const panel = document.querySelector(".english-panel");
    if (!panel) return;

    const bonus = document.createElement("button");
    bonus.type = "button";
    bonus.className = "quick-bonus-drop";
    bonus.textContent = "SURPRISE";
    bonus.style.setProperty("--bonus-lane", `${18 + Math.random() * 58}%`);
    bonus.style.setProperty("--bonus-drift", `${Math.round(22 + Math.random() * 34)}px`);
    bonus.addEventListener("click", collectSurprise, { once: true });
    panel.appendChild(bonus);
    activeDrop = bonus;

    if (shouldShowTutorial()) {
      showTutorial(bonus, panel);
      return;
    }

    armDropExpiry();
  }

  function armDropExpiry() {
    expiryTimer = window.setTimeout(() => {
      activeDrop?.remove();
      activeDrop = null;
      expiryTimer = null;
      scheduleSpawn(randomFirstDropDelay());
    }, BONUS_LIFETIME);
  }

  async function collectSurprise() {
    if (!activeState?.isRunning || activeState.isPaused || activeState.isResolving) return;

    if (expiryTimer) window.clearTimeout(expiryTimer);
    expiryTimer = null;
    activeDrop?.remove();
    activeDrop = null;
    const effect = pickEffect();
    activeState.quickBonusEffect = effect;
    activeState.quickColorHintActive = effect === "colorLink";
    activeState.quickEnglishBlurActive = effect === "wordFog";
    activeState.quickTimeWarpActive = effect === "timeWarp";
    activeState.quickPictureCardsActive = effect === "picturePanic";
    activeState.quickFadeToBlackActive = effect === "fadeToBlack";
    activeState.quickEffectKind = scoreEffectKind(effect);
    document.body.classList.toggle("time-warp-active", effect === "timeWarp");
    document.body.classList.toggle("earthquake-active", effect === "earthquake");
    window.WordCrushAudio?.setTimeWarpMusic(effect === "timeWarp");
    window.WordCrushAudio?.play(effect === "earthquake" ? "rumble" : "star");
    announceEffect(effect);
    onStateChange?.();

    if (effect === "displace") {
      await onDisplace?.();
      finishEffect(effect);
      return;
    }

    effectTimer = window.setTimeout(() => {
      finishEffect(effect);
    }, durationFor(effect));
  }

  function pickEffect() {
    if (!effectPool.length) {
      effectPool = shuffleEffects(EFFECTS);
    }

    return effectPool.pop();
  }

  function shuffleEffects(effects) {
    const pool = [...effects];
    for (let index = pool.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
    }
    return pool;
  }

  function announceEffect(effect) {
    const message = effect === "fadeToBlack"
      ? "FADE TO BLACK ACTIVE! 20 SECONDS"
      : effect === "picturePanic"
      ? "PICTURE PANIC ACTIVE! 30 SECONDS"
      : effect === "displace"
        ? "DISPLACE ACTIVE!"
      : effect === "timeWarp"
      ? "TIME WARP ACTIVE! 30 SECONDS"
      : effect === "earthquake"
        ? "EARTHQUARE ACTIVE! 10 SECONDS"
      : effect === "colorLink"
        ? "COLOR LINK ACTIVE! 30 SECONDS"
        : "BLURRED VISION ACTIVE! 30 SECONDS";
    const label = {
      fadeToBlack: "FADE TO BLACK",
      picturePanic: "PICTURE PANIC",
      displace: "DISPLACE",
      colorLink: "COLOR LINK",
      wordFog: "BLURRED VISION",
      timeWarp: "TIME WARP",
      earthquake: "EARTHQUARE"
    }[effect];
    window.WordCrushScreens?.setMessage(message);
    window.ToastManager?.show(label);
  }

  function durationFor(effect) {
    if (effect === "earthquake") return EARTHQUAKE_DURATION;
    if (effect === "fadeToBlack") return FADE_TO_BLACK_DURATION;
    return EFFECT_DURATION;
  }

  function finishEffect(effect) {
    if (!activeState?.isRunning) return;
    activeState.quickBonusEffect = null;
    activeState.quickColorHintActive = false;
    activeState.quickEnglishBlurActive = false;
    activeState.quickTimeWarpActive = false;
    activeState.quickPictureCardsActive = false;
    activeState.quickFadeToBlackActive = false;
    activeState.quickEffectKind = null;
    clearVisualEffects();
    effectTimer = null;
    onStateChange?.();
    scheduleSpawn(randomFirstDropDelay());
  }

  function isCurse(effect) {
    return ["picturePanic", "earthquake", "wordFog"].includes(effect);
  }

  function scoreEffectKind(effect) {
    if (["displace", "timeWarp", "colorLink"].includes(effect)) return null;
    return isCurse(effect) ? "curse" : "bonus";
  }

  function shouldShowTutorial() {
    try {
      return localStorage.getItem(TUTORIAL_KEY) !== "1";
    } catch (_) {
      return true;
    }
  }

  function showTutorial(bonus, panel) {
    activeState.isPaused = true;
    bonus.classList.add("tutorial-hold");

    const bubble = document.createElement("aside");
    bubble.className = "surprise-tutorial";
    bubble.innerHTML = `
      <strong>SURPRISE!</strong>
      <p>Catch these cards to trigger a bonus or a curse.</p>
      <p>Curses make each matched word worth <b>15 points</b>. FADE TO BLACK multiplies score gains by <b>1.5</b>.</p>
      <button type="button">GOT IT</button>
    `;
    bubble.querySelector("button").addEventListener("click", () => {
      try { localStorage.setItem(TUTORIAL_KEY, "1"); } catch (_) {}
      tutorialBubble?.remove();
      tutorialBubble = null;
      bonus.classList.remove("tutorial-hold");
      activeState.isPaused = false;
      window.WordCrushScreens?.setMessage("Catch the SURPRISE!");
      onStateChange?.();
      armDropExpiry();
    }, { once: true });
    panel.appendChild(bubble);
    tutorialBubble = bubble;
  }

  function clearVisualEffects() {
    document.body.classList.remove("time-warp-active", "earthquake-active");
    window.WordCrushAudio?.setTimeWarpMusic(false);
  }

  function randomFirstDropDelay() {
    return FIRST_DROP_DELAY_MIN + Math.floor(Math.random() * (FIRST_DROP_DELAY_MAX - FIRST_DROP_DELAY_MIN + 1));
  }

  window.WordCrushQuickBonuses = {
    start,
    stop
  };
})();
