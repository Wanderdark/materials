(() => {
  const ITEMS = (window.LEAGUE_OF_LISTENING_ITEMS || []).filter((item) => item.status === "published");
  const FUNCTIONS = window.LEAGUE_OF_LISTENING_FUNCTIONS || {};
  const $ = (id) => document.getElementById(id);
  const elements = {
    landing: $("memory-landing"), game: $("memory-game"), book: $("memory-book"),
    video: $("memory-video"), startOverlay: $("video-start-overlay"), modeOverlay: $("answer-mode-overlay"),
    answerOverlay: $("answer-overlay"), feedback: $("feedback-overlay"), subtitle: $("subtitle-display"),
    options: $("answer-options"), status: $("video-status"), timer: $("timer"), listens: $("listens-left"),
    replay: $("replay-video"), answerNow: $("answer-now"), points: $("memory-points"), streak: $("memory-streak"),
    bookPoints: $("book-points"), bookStreak: $("book-streak"), jokers: $("joker-charges"),
    unlocked: $("unlocked-count"), name: $("student-name"), avatar: $("student-avatar"),
    portraits: $("character-portraits"), functions: $("memory-functions"), tabs: $("album-tabs"),
    grid: $("memory-grid"), modal: $("memory-modal"), toast: $("toast-region")
  };
  let current = null;
  let timerId = null;
  let seconds = 20;
  let plays = 0;
  let stage = "idle";
  let subtitleMode = null;
  let doubleOrNothing = false;
  let excluded = new Set();

  const escape = (value) => String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[char]);
  const portrait = (id) => `assets/portraits/${id}.webp`;
  function transcriptMarkup(value) {
    const clean = escape(value).replace(/\/(.*?)\//g, '<span class="highlight">$1</span>');
    return clean.replace(/(^|[.!?]\s+)([A-Za-zğüşöçıİĞÜŞÖÇ ]{2,32}:)/g, '$1<span class="speaker">$2</span>');
  }
  function toast(message) {
    elements.toast.innerHTML = `<div class="toast">${escape(message)}</div>`;
    window.setTimeout(() => { elements.toast.innerHTML = ""; }, 2500);
  }
  function progress() { return window.OliviaMemoryProgress.get(); }
  function countUnlocked() { return Object.values(progress().memories).filter(Boolean).length; }
  function renderStats() {
    const state = progress();
    elements.points.textContent = state.totalMemoryPoints;
    elements.streak.textContent = state.activeStreak;
    elements.bookPoints.textContent = state.totalMemoryPoints;
    elements.bookStreak.textContent = state.bestStreak;
    elements.jokers.textContent = state.jokerCharges;
    elements.unlocked.textContent = `${countUnlocked()} / ${ITEMS.length}`;
    document.querySelectorAll("[data-joker]").forEach((button) => {
      button.disabled = state.jokerCharges < 1 || stage === "feedback" || stage === "idle";
    });
  }
  function show(screen) {
    elements.landing.hidden = screen !== "landing";
    elements.game.hidden = screen !== "game";
    elements.book.hidden = screen !== "book";
    renderStats();
  }
  function profileAvatar(profile) {
    const candidate = [profile.avatar, profile.avatarUrl, profile.photo, profile.photoUrl]
      .find((value) => typeof value === "string" && value.trim() && !value.startsWith("data:"));
    return candidate || portrait("olivia");
  }
  function renderProfile() {
    const profile = window.OliviaMemoryProgress.getStudentProfile();
    const name = profile.name || profile.studentName || profile.displayName || "STUDENT";
    elements.name.textContent = String(name).toUpperCase();
    elements.avatar.src = profileAvatar(profile);
    elements.avatar.onerror = () => { elements.avatar.hidden = true; };
  }
  function renderMemoryMeta(item) {
    elements.portraits.innerHTML = "";
    item.characterIds.forEach((id) => {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = portrait(id); image.alt = id; image.onerror = () => figure.remove();
      const label = document.createElement("figcaption"); label.textContent = id.toUpperCase();
      figure.append(image, label); elements.portraits.append(figure);
    });
    elements.functions.innerHTML = (Array.isArray(item.functions) ? item.functions : [item.functions])
      .filter(Boolean).map((key) => `<span>${escape(FUNCTIONS[key] || key)}</span>`).join("");
  }
  function clearTimer() { if (timerId) window.clearInterval(timerId); timerId = null; elements.timer.hidden = true; }
  function updateControls() {
    elements.replay.disabled = stage !== "after-video" || plays >= 2;
    elements.answerNow.disabled = stage !== "playing";
    elements.listens.textContent = `LISTENS LEFT: ${Math.max(0, 2 - plays)}`;
  }
  function startTimer() {
    clearTimer(); seconds = 20; elements.timer.hidden = false; elements.timer.textContent = seconds;
    timerId = window.setInterval(() => {
      seconds -= 1; elements.timer.textContent = seconds;
      if (seconds <= 0) {
        clearTimer();
        answer(false, null, true);
      }
    }, 1000);
  }
  function resetOverlays() {
    elements.startOverlay.hidden = true; elements.modeOverlay.hidden = true;
    elements.answerOverlay.hidden = true; elements.feedback.hidden = true;
    elements.options.innerHTML = ""; elements.subtitle.innerHTML = "";
  }
  function loadCurrent() {
    clearTimer(); resetOverlays(); stage = "idle"; subtitleMode = null; doubleOrNothing = false; plays = 0;
    current = window.OliviaMemorySelector.next(ITEMS, progress(), excluded);
    if (!current) { excluded.clear(); current = window.OliviaMemorySelector.next(ITEMS, progress()); }
    if (!current) return;
    renderMemoryMeta(current);
    elements.video.src = current.videoSrc;
    elements.video.load();
    elements.startOverlay.hidden = false;
    elements.status.textContent = "Start the memory.";
    updateControls(); renderStats();
  }
  function playVideo({ echo = false } = {}) {
    if (!current) return;
    clearTimer(); resetOverlays();
    if (!echo) plays += 1;
    stage = "playing";
    elements.video.currentTime = Number(current.videoStart || 0) || 0;
    elements.video.play().catch(() => {
      stage = "idle"; elements.startOverlay.hidden = false; elements.status.textContent = "Tap play to start.";
      updateControls();
    });
    window.LeagueListening?.duckBackgroundMusic?.();
    elements.status.textContent = echo ? "Echo replay..." : "Video playing...";
    updateControls(); renderStats();
  }
  function showAnswerMode() {
    stage = "after-video";
    elements.modeOverlay.hidden = false;
    elements.status.textContent = plays >= 2 ? "Choose how to answer." : "Replay or choose how to answer.";
    window.LeagueListening?.restoreBackgroundMusic?.();
    updateControls(); renderStats();
  }
  function beginAnswer(mode) {
    subtitleMode = mode; stage = "answer"; elements.modeOverlay.hidden = true; elements.answerOverlay.hidden = false;
    elements.subtitle.innerHTML = mode === "show" ? transcriptMarkup(current.transcript) : "";
    window.setTimeout(() => {
      const correct = current.answerOptions.find((option) => option.id === current.correctOptionId);
      const wrong = current.answerOptions.find((option) => option.id !== current.correctOptionId);
      const options = mode === "show"
        ? current.answerOptions
        : [correct, { id: "distractor", text: current.easyDistractor || wrong?.text || "" }];
      elements.options.innerHTML = options.map((option) => `<button type="button" data-answer="${escape(option.id)}">${transcriptMarkup(option.text)}</button>`).join("");
      elements.options.querySelectorAll("[data-answer]").forEach((button) => {
        button.addEventListener("click", () => answer(button.dataset.answer === current.correctOptionId, button.dataset.answer));
      });
      startTimer(); updateControls(); renderStats();
    }, 1000);
  }
  function rankFor(correct) { return correct ? (subtitleMode === "hide" ? 3 : 2) : 1; }
  function answer(correct, choiceId, isTimeout = false) {
    if (stage !== "answer") return;
    clearTimer(); stage = "feedback";
    [...elements.options.querySelectorAll("button")].forEach((button) => { button.disabled = true; });
    const base = subtitleMode === "hide" ? 2 : 1;
    const gained = correct ? base * (doubleOrNothing ? 2 : 1) : 0;
    if (correct) {
      const before = progress().activeStreak;
      window.OliviaMemoryProgress.correct({ points: gained, subtitleMode });
      const streak = before + 1;
      if (streak === 3) { window.OliviaMemoryProgress.award(1); toast("3 correct answers in a row! +1 Memory Point"); }
      if (streak === 5) { window.OliviaMemoryProgress.addJoker(); toast("5 correct answers in a row! +1 Joker Charge"); }
      window.LeagueListening?.playAnswerSound?.(true);
    } else {
      window.OliviaMemoryProgress.resetStreak();
      window.LeagueListening?.playAnswerSound?.(false);
    }
    window.OliviaMemoryProgress.unlock(current.id, rankFor(correct));
    renderStats();
    const title = isTimeout ? "TIME UP" : correct ? `CORRECT! +${gained}` : "NOT THIS TIME";
    const detail = correct ? "Memory updated." : "Memory unlocked — try it again later.";
    elements.feedback.innerHTML = `<div class="feedback-card"><h2>${title}</h2><p>${detail}</p><button id="next-memory" type="button">NEXT MEMORY →</button></div>`;
    elements.feedback.hidden = false;
    elements.feedback.querySelector("#next-memory").addEventListener("click", () => {
      excluded.add(current.id); loadCurrent();
    });
    updateControls();
  }
  function useJoker(type) {
    if (!current || progress().jokerCharges < 1 || stage === "feedback" || stage === "idle") return;
    if (type === "freeze" && stage !== "answer") { toast("Use Time Freeze while answering."); return; }
    if (type === "double" && stage === "answer") { toast("Choose Double or Nothing before the answers appear."); return; }
    window.OliviaMemoryProgress.useJoker();
    if (type === "echo") {
      toast("Echo Joker used.");
      playVideo({ echo: true });
    } else if (type === "freeze") {
      seconds += 15; elements.timer.textContent = seconds; toast("+15 seconds");
    } else {
      doubleOrNothing = !doubleOrNothing;
      toast(doubleOrNothing ? "Double or Nothing is active." : "Double or Nothing cancelled.");
    }
    renderStats();
  }
  function bookThumbnail(item) {
    const id = item.characterIds?.[0] || "olivia";
    return portrait(id);
  }
  function renderBook(theme = null) {
    const themes = [...new Set(ITEMS.map((item) => item.theme || "Other"))];
    const active = theme || themes[0];
    elements.tabs.innerHTML = themes.map((entry) => `<button type="button" data-theme="${escape(entry)}" class="${entry === active ? "active" : ""}">${escape(entry.replace(/_/g, " "))}</button>`).join("");
    elements.tabs.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => renderBook(button.dataset.theme)));
    const memories = progress().memories;
    elements.grid.innerHTML = ITEMS.filter((item) => item.theme === active).map((item) => {
      const rank = memories[item.id] || 0;
      return `<button class="memory-card ${rank ? "" : "locked"}" type="button" data-memory="${item.id}" ${rank ? "" : "disabled"}>
        <img src="${bookThumbnail(item)}" alt="" onerror="this.hidden=true">
        <div><strong>${rank ? escape(item.title) : "LOCKED MEMORY"}</strong><small>${rank ? ["", "Unlocked", "Correct with subtitles", "Correct without subtitles"][rank] : "Watch to unlock"}</small></div>
      </button>`;
    }).join("");
    elements.grid.querySelectorAll("[data-memory]").forEach((button) => button.addEventListener("click", () => openMemory(button.dataset.memory)));
  }
  function openMemory(id) {
    const item = ITEMS.find((entry) => entry.id === id); if (!item) return;
    elements.modal.innerHTML = `<article class="memory-modal-card"><button id="close-memory-modal" type="button" aria-label="Close">×</button><video controls playsinline src="${item.videoSrc}"></video><div class="modal-copy"><p class="eyebrow">${escape((item.theme || "").replace(/_/g, " "))}</p><h2>${escape(item.title)}</h2><p>${transcriptMarkup(item.transcript)}</p></div></article>`;
    elements.modal.hidden = false;
    elements.modal.querySelector("#close-memory-modal").addEventListener("click", () => { elements.modal.hidden = true; });
  }

  $("watch-memories-btn").addEventListener("click", () => { show("game"); renderProfile(); loadCurrent(); window.LeagueListening?.startBackgroundMusic?.(); });
  $("memory-book-btn").addEventListener("click", () => { show("book"); renderBook(); });
  $("back-to-landing").addEventListener("click", () => { clearTimer(); elements.video.pause(); show("landing"); });
  $("book-back").addEventListener("click", () => show("landing"));
  $("start-video").addEventListener("click", () => playVideo());
  $("replay-video").addEventListener("click", () => { if (plays < 2) playVideo(); });
  $("answer-now").addEventListener("click", () => { if (stage === "playing") { elements.video.pause(); showAnswerMode(); } });
  $("hide-subtitles").addEventListener("click", () => beginAnswer("hide"));
  $("show-subtitles").addEventListener("click", () => beginAnswer("show"));
  document.querySelectorAll("[data-joker]").forEach((button) => button.addEventListener("click", () => useJoker(button.dataset.joker)));
  elements.video.addEventListener("ended", () => { if (stage === "playing") showAnswerMode(); });
  elements.video.addEventListener("error", () => {
    if (!current) return;
    excluded.add(current.id); toast("This memory is unavailable. Loading another one...");
    window.setTimeout(loadCurrent, 350);
  });
  renderStats();
})();
