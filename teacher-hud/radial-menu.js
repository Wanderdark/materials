(() => {
  "use strict";

  const entry = document.currentScript;
  const base = new URL(".", entry.src);
  const launchDuration = 900;
  const closeDuration = 350;
  const lockSelector = "[data-radial-lock]";
  // Each game already exposes its setup, play and result screens in the DOM.
  const gameScreens = {
    "word_master/index.html": { play: "#app", final: "#winner-overlay.open" },
    "word_overlord/index.html": { play: "#app", final: "#winner-overlay.open" },
    "word_contest/index.html": { play: "#scores-btn.visible", final: "#winner-overlay.open" },
    "word_rivals/index.html": { play: "body.game-active", final: "#tb-result-overlay.open" },
    "word_reveal/index.html": { play: "body.game-active", final: "#winner-overlay.open" },
    "word_reveal/sp.html": { play: "body.game-active", final: "#final-overlay" },
    "word_quest/index.html": { play: "body.game-active", final: "#sp-gameover" },
    "word_duel/index.html": { play: "#game-screen", final: "#win-overlay.open, #tournament-champion" },
    "word_tug_of_war/index.html": { play: "#game-screen", final: "#result-screen" },
    "team_challengers/index.html": { play: "#game-screen, #round-screen", final: "#winner-overlay.open" },
    "olivias_movie_memories/index.html": { play: "#game-screen, #round-screen", final: "#final-screen" },
    "song_presenter/index.html": { play: "#duelScoreboard", final: "#duelFinalScores" },
    "word_hunt/clash_of_words_v7.html": { play: "#screen-game", final: "#overlay-game-over" },
    "word_crush/index.html": { play: "#game-screen, #adv-run-screen", final: "#result-screen" },
    "word_crush/gemoria_class.html": { play: "#game-screen, #adv-run-screen, #overlay-student-current, #auto-lb.show, #result-screen", final: "#overlay-final-scores" },
    "word_builder/index.html": {
      play: "body:has(#menu-overlay.hidden)", final: "#tb-result-overlay.open, #result-overlay",
      setup: "#name-overlay, #student-overlay, #diff-overlay, #avatar-select-overlay, #attendance-overlay, #tutorial-overlay"
    },
    "wordopia/index.html": {
      play: "body:has(#menu-overlay.hidden)", final: "#tb-result-overlay.open, #result-overlay",
      setup: "#name-overlay, #student-overlay, #diff-overlay, #avatar-select-overlay, #attendance-overlay, #app.tutorial-active"
    },
    "func_presenter/mini-games/play_soccer_with_lucas/index.html": { play: "#timeSetterScreen, #verbCardPlayPanel, .ps-overlay" },
    "func_presenter/mini-games/ride_with_hannah/index.html": { play: "#gameFrame:has(#rideChoice[hidden])", setup: "#assetLoader:not([hidden])" }
  };
  const sitePath = location.pathname.slice(new URL("../", base).pathname.length).toLowerCase();
  const screens = gameScreens[sitePath.endsWith("/") ? sitePath + "index.html" : sitePath || "index.html"];
  const ignore = [
    "a", "button", "input", "select", "textarea", "label", "summary", "canvas", "video", "audio",
    "[tabindex]", "[contenteditable]", "[onclick]", "[onpointerdown]", "[onmousedown]", "[draggable=true]",
    "[role=button]", "[role=link]", "[role=slider]", "[role=menuitem]", "[data-radial-ignore]",
    "dialog", ".tc-hud", ".tc-overlay", ".tc-confirm-overlay", ".tc-student"
  ].join(",");
  const css = `
    .hud-launcher {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      max-width: none;
      max-height: none;
      margin: 0;
      padding: 0;
      border: 0;
      overflow: hidden;
      background: transparent;
    }
    .radial-tutorial-notice {
      position: fixed;
      right: 16px;
      bottom: 16px;
      z-index: 1000;
      box-sizing: border-box;
      width: min(340px, calc(100% - 32px));
      padding: 16px;
      border: 1px solid #6888ca;
      border-radius: 14px;
      background: #142854;
      color: #f4f7ff;
      box-shadow: 0 8px 24px rgb(3 10 29 / 32%);
      font: 600 14px/1.5 system-ui, sans-serif;
    }
    .radial-tutorial-notice p { margin: 0 0 10px; }
    .radial-tutorial-notice label {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 10px;
      font-size: 12px;
      cursor: pointer;
    }
    .radial-tutorial-notice button {
      border: 0;
      border-radius: 8px;
      padding: 7px 12px;
      background: #ffdc58;
      color: #142854;
      font: inherit;
      cursor: pointer;
    }
    .hud-launcher::backdrop { background: rgb(3 10 29 / 78%); }
    .hud-launcher, .hud-launcher * {
      -webkit-user-select: none;
      user-select: none;
    }
    .hud-launcher.is-closing,
    .hud-launcher.is-closing::backdrop {
      animation: radial-dismiss ${closeDuration}ms ease-out both;
    }
    .hud-launcher.is-launching-menu:not(.is-closing)::backdrop,
    .hud-launcher.is-launching-menu :is(.radial-center, .radial-games, a:not(.is-launching)) {
      animation: radial-dismiss ${launchDuration}ms ease-out both;
    }
    @keyframes radial-dismiss {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    .hud-launcher a, .hud-launcher button {
      position: absolute;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      display: grid;
      place-items: center;
      padding: 0;
      border: 1px solid #6888ca;
      border-radius: 50%;
      background: #142854;
      color: #f4f7ff;
      text-align: center;
      text-decoration: none;
      font: 700 clamp(11px, 2.3vw, 15px)/1.12 var(--font-ui, system-ui, sans-serif);
      cursor: pointer;
    }
    .hud-launcher :is(a, .radial-games) {
      width: var(--item-size);
      height: var(--item-size);
      background: radial-gradient(circle at 50% 35%, #284574, #101e3c 76%);
      transition: transform 140ms ease-out, box-shadow 140ms ease-out;
    }
    .hud-launcher :is(a, .radial-games):is(:hover, :focus-visible) {
      z-index: 1;
      transform: translate(-50%, -50%) scale(1.2);
      box-shadow: 0 0 22px #6888ca88;
    }
    .hud-launcher a.is-launching {
      z-index: 2;
      animation: radial-launch ${launchDuration}ms cubic-bezier(.3, .15, .25, 1) both;
    }
    @keyframes radial-launch {
      from { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
      to {
        transform: translate(calc(-50% + var(--launch-x)), calc(-50% + var(--launch-y))) scale(calc(var(--launch-scale) * 1.2));
        opacity: 0;
      }
    }
    .hud-launcher .is-launching :is(img, .book-icon) {
      animation: radial-cover-center ${launchDuration}ms cubic-bezier(.3, .15, .25, 1) both;
    }
    @keyframes radial-cover-center {
      from { transform: translateY(0); }
      to { transform: translateY(14.52%); }
    }
    .hud-launcher img, .hud-launcher .book-icon {
      position: absolute;
      top: 10%;
      left: 19%;
      width: 62%;
      height: 62%;
      border-radius: 50%;
    }
    .hud-launcher img { object-fit: cover; }
    .hud-launcher .book-icon {
      display: grid;
      place-items: center;
      background: #213c74;
      font-size: calc(var(--item-size) * .27);
      line-height: 1;
    }
    .hud-launcher .radial-games .book-icon { background: transparent; }
    .hud-launcher .radial-label { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
    .hud-launcher .radial-label path { fill: none; }
    .hud-launcher .radial-label text { fill: currentColor; font-family: system-ui, sans-serif; font-weight: 750; }
    .hud-launcher .radial-center { width: 40px; height: 40px; font-size: 24px; }
    .hud-launcher [hidden] { display: none; }
    .hud-launcher a:hover, .hud-launcher a:focus-visible,
    .hud-launcher button:hover, .hud-launcher button:focus-visible {
      border-color: #ffdc58;
      background: #213c74;
      color: #ffdc58;
    }
    .hud-launcher a.is-launching {
      border-color: transparent;
      box-shadow: none;
      outline: none;
    }
    .radial-fallback-lock {
      position: fixed;
      right: 10px;
      bottom: 10px;
      z-index: 11004;
      width: 38px;
      height: 38px;
      border: 1px solid #6888ca;
      border-radius: 9px;
      background: #142854;
      color: #f4f7ff;
      font: 17px system-ui, sans-serif;
      cursor: pointer;
    }
    body:has(.tc-hud [data-radial-lock]) .radial-fallback-lock { display: none; }
    [data-radial-lock][aria-pressed="true"] { border-color: #ffdc58; }
    .radial-lock-feedback {
      position: fixed;
      z-index: 12020;
      pointer-events: none;
      color: #ffe078;
      white-space: nowrap;
      text-shadow: 0 2px 8px #030a1d, 0 0 4px #030a1d;
      font: 800 clamp(11px, 2.7vw, 15px)/1 system-ui, sans-serif;
      animation: radial-lock-float 1.1s ease-out both;
    }
    @keyframes radial-lock-float {
      from { transform: translate(-50%, -100%); opacity: 1; }
      55% { opacity: 1; }
      to { transform: translate(-50%, calc(-100% - 18px)); opacity: 0; }
    }
    @media (prefers-reduced-motion: reduce) {
      .hud-launcher a { transition: none; }
      .radial-lock-feedback { animation: radial-lock-fade 1.1s ease-out both; }
    }
    @keyframes radial-lock-fade {
      from, 55% { transform: translate(-50%, -100%); opacity: 1; }
      to { transform: translate(-50%, -100%); opacity: 0; }
    }
  `;
  const markup = `
  <dialog id="hud-launcher" class="hud-launcher" aria-label="Classroom shortcuts">
    <button class="radial-center" type="button" aria-label="Close shortcuts" autofocus>×</button>
    <a href="../vocab_presenter/index.html?mode=teacher" target="_top"><img src="../images/thumbnails/word_presenter.webp" alt="">Word Presenter</a>
    <a href="../func_presenter/index.html?mode=teacher" target="_top"><img src="../images/thumbnails/func_presenter.webp" alt="">Grammar Presenter</a>
    <a href="../word_duel/index.html" target="_top"><img src="../images/thumbnails/word_tournament.webp" alt="">Word Tournament</a>
    <a href="index.html" target="_top"><img src="../images/thumbnails/teacherhud.webp" alt="">MY CLASS</a>
    <button class="radial-games" type="button"><span class="book-icon" aria-hidden="true">🎮</span>Games</button>
    <a data-games href="../word_contest/index.html" target="_top"><img src="../images/thumbnails/w_contest_thmb.webp" alt="">Word Contest</a>
    <a data-games href="../word_rivals/index.html" target="_top"><img src="../images/thumbnails/w_rivals_thmb.webp" alt="">Word Rivals</a>
    <a data-games href="../word_tug_of_war/index.html?mode=teacher" target="_top"><img src="../images/thumbnails/tug_of_w_thmb.webp" alt="">Tug of Words</a>
    <a data-games href="../word_master/index.html" target="_top"><img src="../images/thumbnails/w_master_thmb.webp" alt="">Word Master</a>
    <a data-games href="../word_crush/gemoria_class.html" target="_top"><img src="../images/thumbnails/w_gemoria_thmb.webp" alt="">Word Gemoria</a>
    <a data-games href="../word_reveal/index.html" target="_top"><img src="../images/thumbnails/w_reveal_thmb.webp" alt="">Word Reveal</a>
    <a data-games href="../song_presenter/index.html" target="_top"><img src="../images/thumbnails/song_presenter.webp" alt="">Song Presenter</a>
    <a data-games href="../olivias_movie_memories/index.html?mode=teacher" target="_top"><img src="../images/thumbnails/league_of_listening_featured.png" alt="">League of Listening</a>
  </dialog>
  `;

  let launcher;
  let launcherOrigin;
  let showingGames = false;
  const arrivals = new Map();
  let hold = null;
  let outsidePress = false;
  let audio;
  let launching = false;
  let replayingClick = false;
  let closeTimer;
  let dismissalAnimations = [];
  let locked = false;
  let lockFeedback;

  function fadeCloseLauncher() {
    if (!launcher.open || closeTimer !== undefined) return;
    playCue(true, true);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      launcher.close();
      return;
    }
    launcher.classList.add("is-closing");
    if (!launching) dismissalAnimations = reverseArrivals(closeDuration);
    closeTimer = setTimeout(() => launcher.close(), closeDuration);
  }

  function reverseArrivals(duration, selected = null) {
    const departures = [];
    for (const [shortcut, entrance] of arrivals) {
      if (shortcut === selected) continue;
      const progress = entrance.effect.getComputedTiming().progress ?? 1;
      const currentPosition = getComputedStyle(shortcut).translate;
      const reverseFrames = entrance.effect.getKeyframes()
        .filter(frame => frame.computedOffset < progress)
        .reverse()
        .map(frame => ({ translate: frame.translate }));
      entrance.cancel();
      if (!reverseFrames.length) continue;
      departures.push(shortcut.animate([{ translate: currentPosition }, ...reverseFrames], {
        duration, easing: "ease-in-out", fill: "both"
      }));
    }
    return departures;
  }

  function prepareAudio() {
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      audio ||= new Audio();
      if (audio.state === "suspended") audio.resume().catch(() => {});
    } catch { /* The menu also works without audio. */ }
  }

  function playCue(selected, reverse = false) {
    if (audio?.state !== "running") return;
    const start = audio.currentTime;
    const duration = selected ? .18 : .07;
    const tone = audio.createOscillator();
    const volume = audio.createGain();
    tone.type = selected ? "triangle" : "sine";
    const pitches = selected ? [420, 940] : [1380, 1200];
    const [firstPitch, lastPitch] = reverse ? pitches.reverse() : pitches;
    tone.frequency.setValueAtTime(firstPitch, start);
    tone.frequency.exponentialRampToValueAtTime(lastPitch, start + duration);
    volume.gain.setValueAtTime(.001, start);
    volume.gain.exponentialRampToValueAtTime(selected ? .07 : .035, start + (reverse ? duration - .01 : .01));
    volume.gain.exponentialRampToValueAtTime(.001, start + duration);
    tone.connect(volume);
    volume.connect(audio.destination);
    tone.start(start);
    tone.stop(start + duration);
  }

  function hasVisibleScreen(selector) {
    if (!selector) return false;
    return [...document.querySelectorAll(selector)].some(screen =>
      !screen.closest("[hidden], .hidden") && screen.getClientRects().length && getComputedStyle(screen).visibility === "visible");
  }

  function isGamePlaying() {
    return screens && !hasVisibleScreen(screens.final) && !hasVisibleScreen(screens.setup) && hasVisibleScreen(screens.play);
  }

  function showLockFeedback(button) {
    lockFeedback?.remove();
    const message = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const inset = Math.min(112, window.innerWidth / 2);
    const center = Math.min(window.innerWidth - inset, Math.max(inset, rect.left + rect.width / 2));
    message.className = "radial-lock-feedback";
    message.textContent = locked ? "RADIAL MENU LOCKED" : "RADIAL MENU UNLOCKED";
    message.style.left = center + "px";
    message.style.top = (rect.top - 5) + "px";
    message.addEventListener("animationend", () => message.remove(), { once: true });
    (document.fullscreenElement || document.body).appendChild(message);
    lockFeedback = message;
  }

  function updateLockButtons() {
    const label = locked ? "Unlock radial menu" : "Lock radial menu";
    document.querySelectorAll(lockSelector).forEach(button => {
      button.textContent = locked ? "🔒" : "🔓";
      button.title = label;
      button.setAttribute("aria-label", label);
      button.setAttribute("aria-pressed", String(locked));
    });
  }

  function cancelHold() {
    if (hold) clearTimeout(hold.timer);
    hold = null;
  }

  function isBlankArea(target) {
    if (!(target instanceof Element) || target.closest(ignore)) return false;
    if ([...target.childNodes].some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim())) return false;
    for (let node = target; node && node !== document.body; node = node.parentElement) {
      if (node.onclick || node.onpointerdown || node.onmousedown) return false;
    }
    return !["pointer", "grab", "grabbing", "move", "crosshair", "text"].includes(getComputedStyle(target).cursor);
  }

  function createLauncher() {
    const template = document.createElement("template");
    template.innerHTML = markup.replace(/(href|src)="([^"]+)"/g,
      (_, attr, path) => attr + '="' + new URL(path, base).href + '"');
    launcher = template.content.querySelector("dialog");
    launcher.querySelectorAll("a, .radial-games").forEach((link, index) => {
      const label = link.lastChild.textContent.trim();
      link.lastChild.remove();
      link.setAttribute("aria-label", label);
      const pathId = "hud-launcher-label-" + index;
      link.insertAdjacentHTML("beforeend", `
        <svg class="radial-label" viewBox="0 0 100 100" aria-hidden="true">
          <path id="${pathId}" d="M 7 49 A 43 42 0 0 0 93 49"/>
          <text font-size="${Math.min(11, 156 / label.length)}" text-anchor="middle">
            <textPath href="#${pathId}" startOffset="50%"></textPath>
          </text>
        </svg>
      `);
      link.querySelector("textPath").textContent = label;
      link.addEventListener("pointerenter", event => {
        if (!launching && event.pointerType === "mouse") playCue(false);
      });
      link.addEventListener("click", event => {
        if (closeTimer !== undefined) { event.preventDefault(); return; }
        if (replayingClick || event.defaultPrevented ||
          event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        if (launching) { event.preventDefault(); return; }
        prepareAudio();
        playCue(true);
        if (link.matches(".radial-games")) {
          event.preventDefault();
          layoutLauncher(true);
          launcher.querySelector(".radial-center").focus();
          return;
        }
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        event.preventDefault();
        launching = true;
        const arrival = arrivals.get(link);
        if (arrival?.playState === "running") arrival.pause();
        const viewport = launcher.getBoundingClientRect();
        const shortcut = link.getBoundingClientRect();
        link.style.setProperty("--launch-x", (viewport.left + viewport.width / 2 - shortcut.left - shortcut.width / 2) + "px");
        link.style.setProperty("--launch-y", (viewport.top + viewport.height / 2 - shortcut.top - shortcut.height / 2) + "px");
        const coverDiameter = link.querySelector("img, .book-icon").offsetWidth;
        const viewportDiagonal = Math.hypot(viewport.width, viewport.height);
        link.style.setProperty("--launch-scale", Math.max(3, viewportDiagonal / Math.max(1, coverDiameter) * 1.05));
        link.classList.add("is-launching");
        launcher.classList.add("is-launching-menu");
        const departures = reverseArrivals(launchDuration, link);
        setTimeout(() => {
          arrival?.cancel();
          departures.forEach(animation => animation.cancel());
          launcher.classList.remove("is-launching-menu");
          link.classList.remove("is-launching");
          launching = false;
          if (!launcher.open || closeTimer !== undefined) return;
          replayingClick = true;
          try { link.click(); } finally { replayingClick = false; }
        }, launchDuration);
      });
    });
    launcher.addEventListener("dragstart", event => event.preventDefault());
    launcher.addEventListener("pointerdown", event => { outsidePress = event.target === launcher; });
    launcher.addEventListener("click", event => {
      if (outsidePress && event.target === launcher) fadeCloseLauncher();
    });
    launcher.addEventListener("close", () => {
      clearTimeout(closeTimer);
      closeTimer = undefined;
      dismissalAnimations.forEach(animation => animation.cancel());
      dismissalAnimations = [];
      launcher.classList.remove("is-closing");
    });
    launcher.querySelector(".radial-center").addEventListener("click", () => {
      if (launching || closeTimer !== undefined) return;
      if (!showingGames) { fadeCloseLauncher(); return; }
      playCue(true, true);
      layoutLauncher(false, -1);
      launcher.querySelector(".radial-games").focus();
    });
    document.body.appendChild(launcher);
  }

  function layoutLauncher(games, direction = 1) {
    arrivals.forEach(animation => animation.cancel());
    arrivals.clear();
    showingGames = games;
    const { x, y } = launcherOrigin;
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const itemSize = Math.min(100, width * .195, height * .195);
    const radiusX = Math.min(244, (width - itemSize) / 2 - 8);
    const radiusY = Math.min(184, (height - itemSize) / 2 - 8);
    const insetX = radiusX + itemSize / 2 + 8;
    const insetY = radiusY + itemSize / 2 + 8;
    const centerX = Math.max(insetX, Math.min(width - insetX, x));
    const centerY = Math.max(insetY, Math.min(height - insetY, y));
    launcher.style.setProperty("--item-size", itemSize + "px");
    const links = [...launcher.querySelectorAll("a, .radial-games")].filter(link => {
      link.hidden = link.hasAttribute("data-games") !== games;
      return !link.hidden;
    });
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    links.forEach((link, index) => {
      const angle = index * 2 * Math.PI / links.length - Math.PI / 2;
      const finalX = Math.cos(angle) * radiusX;
      const finalY = Math.sin(angle) * radiusY;
      link.style.left = (centerX + finalX) + "px";
      link.style.top = (centerY + finalY) + "px";
      if (reduceMotion || !link.animate) return;
      const keyframes = Array.from({ length: 13 }, (_, step) => {
        const progress = step / 12;
        const orbitAngle = angle - direction * (1 - progress) * Math.PI * .65;
        const orbitRadius = .18 + .82 * progress;
        const dx = Math.cos(orbitAngle) * radiusX * orbitRadius - finalX;
        const dy = Math.sin(orbitAngle) * radiusY * orbitRadius - finalY;
        return { translate: `${dx}px ${dy}px` };
      });
      arrivals.set(link, link.animate(keyframes, { duration: 540, easing: "cubic-bezier(.16, .72, .25, 1)" }));
    });
    const close = launcher.querySelector(".radial-center");
    close.textContent = games ? "←" : "×";
    close.setAttribute("aria-label", games ? "Back to classroom shortcuts" : "Close shortcuts");
    close.style.left = centerX + "px";
    close.style.top = centerY + "px";
  }

  let tutorialNotice;
  const tutorialPreferenceKey = "adilhocaRadialTutorialDismissedV1";

  function showTutorialNotice() {
    if (tutorialNotice?.isConnected) return;
    try {
      if (localStorage.getItem(tutorialPreferenceKey) === "1") return;
    } catch { /* Show the notice when storage is unavailable. */ }
    tutorialNotice = document.createElement("aside");
    tutorialNotice.className = "radial-tutorial-notice";
    tutorialNotice.innerHTML = `
      <p>Hold the left mouse button on an empty area for <strong>1 second</strong> to open the radial menu.</p>
      <label><input type="checkbox"> Don’t show this again</label>
      <button type="button">Got it</button>
    `;
    const hideNextTime = tutorialNotice.querySelector("input");
    tutorialNotice.querySelector("button").addEventListener("click", () => {
      if (hideNextTime.checked) {
        try { localStorage.setItem(tutorialPreferenceKey, "1"); } catch { /* Dismiss for this visit. */ }
      }
      tutorialNotice.remove();
    });
    document.body.appendChild(tutorialNotice);
  }

  function openLauncher(x, y) {
    if (!launcher) createLauncher();
    launcherOrigin = { x, y };
    layoutLauncher(false);
    outsidePress = false;
    launcher.showModal();
    playCue(true);
    tutorialNotice?.remove();
  }

  function init() {
    if (typeof HTMLDialogElement === "undefined" || !HTMLDialogElement.prototype.showModal) return;
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    if (!sitePath || sitePath === "index.html") {
      showTutorialNotice();
      window.addEventListener("pageshow", event => { if (event.persisted) showTutorialNotice(); });
    }

    if (screens && !document.querySelector(lockSelector)) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "radial-fallback-lock";
      button.setAttribute("data-radial-lock", "");
      document.body.appendChild(button);
    }
    updateLockButtons();
    document.addEventListener("classroom-radial-control-ready", updateLockButtons);
    document.addEventListener("click", event => {
      const button = event.target.closest?.(lockSelector);
      if (!button) return;
      locked = !locked;
      cancelHold();
      updateLockButtons();
      showLockFeedback(button);
      if (locked && launcher?.open) fadeCloseLauncher();
    });

    const roster = document.getElementById("tc-standalone-roster");
    const delay = roster ? 480 : 700;
    document.addEventListener("selectstart", event => {
      if (hold || launcher?.open) event.preventDefault();
    }, true);
    document.addEventListener("pointerdown", event => {
      if (locked || hold || launcher?.open || event.defaultPrevented ||
        event.isPrimary === false || event.pointerType !== "mouse" || event.button !== 0) return;
      const target = event.target;
      if (!isBlankArea(target) || target.hasPointerCapture?.(event.pointerId)) return;
      if (isGamePlaying()) return;
      if (roster && target !== roster && target !== document.body && target !== document.documentElement &&
        !(target.parentElement === roster && target.matches(".tc-student-grid, .tc-actions"))) return;
      prepareAudio();
      const { clientX: x, clientY: y, pointerId } = event;
      hold = { x, y, pointerId, timer: setTimeout(() => {
        cancelHold();
        const currentTarget = document.elementFromPoint(x, y);
        if (!locked && isBlankArea(currentTarget) && !isGamePlaying() && !target.hasPointerCapture?.(pointerId)) openLauncher(x, y);
      }, delay) };
    });
    document.addEventListener("pointermove", event => {
      if (hold?.pointerId === event.pointerId &&
        (!(event.buttons & 1) || Math.hypot(event.clientX - hold.x, event.clientY - hold.y) > 10)) cancelHold();
    });
    window.addEventListener("pointerup", cancelHold, true);
    window.addEventListener("pointercancel", cancelHold, true);
    window.addEventListener("blur", cancelHold);
    window.addEventListener("scroll", cancelHold, true);
    window.addEventListener("resize", () => {
      cancelHold();
      if (launcher?.open) launcher.close();
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
