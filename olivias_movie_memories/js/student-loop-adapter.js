(() => {
  if (!window.__oliviasMovieMemoriesStudentMode) return;

  const setup = document.querySelector("#setup-screen");
  const title = document.querySelector("#setup-title");
  const brand = document.querySelector(".brand-lockup .eyebrow");
  const start = document.querySelector("#start-game-button");
  const exit = document.querySelector("#exit-game-button");
  const scoreboard = document.querySelector("#scoreboard");
  const roundProgress = document.querySelector(".round-progress");
  const overrideReplay = document.querySelector("#override-replay-button");
  const leaderboard = document.querySelector("#auto-lb");
  const noSubtitles = document.querySelector("#no-subtitle-button span");
  const showSubtitles = document.querySelector("#show-subtitle-button span");
  const items = (window.LEAGUE_OF_LISTENING_ITEMS || []).filter((item) => item.status === "published");
  const watchedKey = "oliviasMovieMemoriesWatchedV1";
  const journeyKey = "oliviasMovieMemoriesJourneyV1";
  const journeyLength = 10;
  const journeyTasks = [
    { id: "complete", label: "Complete a Memory Journey", type: "complete", target: 1 },
    { id: "streak", label: "Reach a 3 correct streak", type: "streak", target: 3 },
    { id: "no-subtitles", label: "Complete 3 memories without subtitles", type: "noSubtitles", target: 3 },
    { id: "mistakes", label: "Finish with no more than 3 mistakes", type: "mistakes", target: 3 },
    { id: "correct", label: "Answer 6 memories correctly", type: "correct", target: 6 },
    { id: "points", label: "Earn 10 Memory Points", type: "points", target: 10 }
  ];
  const memoriesPerSpread = 8;
  const minimumSpreadsPerChapter = 3;
  const chapters = [
    { id: "introductions", title: "INTRODUCTIONS", themes: ["introduction"] },
    { id: "school-life", title: "SCHOOL LIFE", themes: ["school_life"] },
    { id: "classroom-life", title: "CLASSROOM LIFE", themes: ["classroom_life"] },
    { id: "personal-life", title: "PERSONAL LIFE", themes: ["personal_life"] },
    { id: "family-life", title: "FAMILY LIFE", themes: ["family_life"] },
    { id: "life-in-the-city", title: "LIFE IN THE CITY", themes: ["city_life", "life_in_the_city"] },
    { id: "life-in-the-world", title: "LIFE IN THE WORLD", themes: ["world_life", "countries"] },
    { id: "life-in-nature", title: "LIFE IN THE NATURE", themes: ["nature_life", "life_in_nature"] },
    { id: "life-in-the-future", title: "LIFE IN THE FUTURE", themes: ["future_life", "life_in_the_future"] }
  ];
  const albumLayouts = [
    [{ side: "left", x: 7, y: 13, w: 39, r: -4 }, { side: "left", x: 53, y: 12, w: 37, r: 3 }, { side: "left", x: 9, y: 54, w: 37, r: 3 }, { side: "left", x: 53, y: 55, w: 38, r: -3 }, { side: "right", x: 8, y: 14, w: 37, r: 4 }, { side: "right", x: 53, y: 12, w: 38, r: -3 }, { side: "right", x: 9, y: 55, w: 39, r: -2 }, { side: "right", x: 54, y: 54, w: 36, r: 4 }],
    [{ side: "left", x: 8, y: 12, w: 37, r: 3 }, { side: "left", x: 52, y: 15, w: 39, r: -4 }, { side: "left", x: 8, y: 55, w: 39, r: -3 }, { side: "left", x: 55, y: 53, w: 35, r: 4 }, { side: "right", x: 8, y: 13, w: 39, r: -3 }, { side: "right", x: 54, y: 14, w: 36, r: 4 }, { side: "right", x: 10, y: 54, w: 36, r: 3 }, { side: "right", x: 53, y: 54, w: 38, r: -4 }],
    [{ side: "left", x: 9, y: 14, w: 39, r: -3 }, { side: "left", x: 54, y: 12, w: 36, r: 4 }, { side: "left", x: 8, y: 54, w: 36, r: 4 }, { side: "left", x: 52, y: 55, w: 39, r: -3 }, { side: "right", x: 9, y: 13, w: 36, r: 3 }, { side: "right", x: 52, y: 12, w: 39, r: -4 }, { side: "right", x: 9, y: 55, w: 39, r: -3 }, { side: "right", x: 55, y: 54, w: 35, r: 4 }]
  ];
  let bookChapterIndex = 0;
  let bookPage = 0;
  const escape = (value) => String(value || "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);

  function profile() {
    try { return JSON.parse(localStorage.getItem("fpStudentProfile") || "{}"); } catch (_) { return {}; }
  }
  function watchedIds() {
    try { return new Set(JSON.parse(localStorage.getItem(watchedKey) || "[]")); } catch (_) { return new Set(); }
  }
  function journeyDayKey() { return new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString().slice(0, 10); }
  function nextJourneyReset() {
    const now = new Date();
    const reset = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 3));
    if (now >= reset) reset.setUTCDate(reset.getUTCDate() + 1);
    return reset;
  }
  function resetCountdown() {
    const left = Math.max(0, nextJourneyReset() - Date.now());
    return Math.floor(left / 3600000) + "h " + Math.ceil((left % 3600000) / 60000) + "m";
  }
  function journeySeed(value) {
    return [...value].reduce((total, character) => ((total * 31) + character.charCodeAt(0)) >>> 0, 7);
  }
  function newJourneyDay() {
    const seed = journeySeed(journeyDayKey());
    const selected = [];
    for (let offset = 0; selected.length < 3; offset += 1) {
      const task = journeyTasks[(seed + offset * 5) % journeyTasks.length];
      if (!selected.some((entry) => entry.id === task.id)) selected.push({ ...task, claimed: false });
    }
    return { day: journeyDayKey(), tasks: selected, session: null, allRewarded: false };
  }
  function readJourneyDay() {
    try {
      const saved = JSON.parse(localStorage.getItem(journeyKey) || "null");
      if (saved?.day === journeyDayKey() && Array.isArray(saved.tasks)) return saved;
    } catch (_) { /* start a fresh journey day */ }
    const fresh = newJourneyDay();
    localStorage.setItem(journeyKey, JSON.stringify(fresh));
    return fresh;
  }
  function saveJourneyDay(day) { localStorage.setItem(journeyKey, JSON.stringify(day)); }
  function sessionFor(day) { return day.session || { answers: 0, correct: 0, withoutSubtitles: 0, mistakes: 0, points: 0, bestStreak: 0, newMemories: 0 }; }
  function taskProgress(task, session) {
    if (task.type === "complete") return session.completed ? 1 : 0;
    if (task.type === "streak") return session.bestStreak || 0;
    if (task.type === "noSubtitles") return session.withoutSubtitles || 0;
    if (task.type === "mistakes") return session.completed && session.mistakes <= task.target ? task.target : 0;
    return session[task.type] || 0;
  }
  function taskDone(task, session) { return taskProgress(task, session) >= task.target; }
  function awardJourneyTasks(day) {
    const session = sessionFor(day);
    day.tasks.forEach((task) => {
      if (!task.claimed && taskDone(task, session)) {
        task.claimed = true;
        window.StudentGame?.awardListeningBonus?.(5);
        window.ToastManager?.show?.(`DAILY TASK COMPLETE · +5 POINTS`, "success", 3200);
      }
    });
    if (!day.allRewarded && day.tasks.every((task) => task.claimed)) {
      day.allRewarded = true;
      window.StudentGame?.awardListeningBonus?.(25);
      window.ToastManager?.show?.(`DAILY TASK BOARD COMPLETE · +25 POINTS`, "success", 4200);
    }
  }
  function renderJourneyHeader(day, session) {
    const header = document.querySelector("#omm-daily-game-tasks");
    if (!header) return;
    header.innerHTML = '<div class="omm-daily-game-title"><span>DAILY TASKS</span><strong>' + day.tasks.filter((task) => task.claimed).length + ' / 3</strong></div><div class="omm-daily-game-list">' + day.tasks.map((task) => {
      const progress = Math.min(task.target, taskProgress(task, session));
      return '<div class="omm-daily-game-task' + (task.claimed ? ' is-complete' : '') + '"><span>' + escape(task.label) + '</span><strong>' + progress + '/' + task.target + '</strong></div>';
    }).join("") + '</div>';
  }
  function renderJourneyScore(day, session) {
    const score = scoreboard?.querySelector(".score-card strong");
    const progress = Math.min(journeyLength, session.answers || 0) + " / " + journeyLength;
    if (score && score.textContent !== progress) score.textContent = progress;
  }
  function renderJourneyLanding() {
    const day = readJourneyDay();
    const session = sessionFor(day);
    renderJourneyHeader(day, session);
    renderJourneyScore(day, session);
    const button = document.querySelector("#omm-watch-button");
    const titleEl = button?.querySelector(".omm-action-title");
    const subtitleEl = button?.querySelector(".omm-action-subtitle");
    if (button) button.disabled = Boolean(session.completed);
    if (session.completed) {
      titleEl.textContent = "MEMORY JOURNEY COMPLETE";
      subtitleEl.textContent = "Next journey opens in " + resetCountdown();
    } else if (session.active) {
      titleEl.textContent = "CONTINUE MEMORY JOURNEY";
      subtitleEl.textContent = session.answers + " / " + journeyLength + " memories complete";
    } else {
      titleEl.textContent = "START A MEMORY JOURNEY";
      subtitleEl.textContent = "Discover " + journeyLength + " memories in one journey";
    }
    const board = document.querySelector("#omm-daily-board");
    if (!board) return;
    board.innerHTML = '<div class="omm-daily-head"><div><p class="eyebrow">DAILY TASK BOARD</p><h2>YOUR DAILY MISSIONS</h2></div><strong>' + (day.tasks.filter((task) => task.claimed).length) + ' / 3 COMPLETE</strong></div><div class="omm-daily-tasks">' + day.tasks.map((task) => {
      const progress = Math.min(task.target, taskProgress(task, session));
      return '<article class="omm-daily-task' + (task.claimed ? ' is-complete' : '') + '"><span class="omm-daily-reward">+5</span><div><strong>' + escape(task.label) + '</strong><small>' + progress + ' / ' + task.target + (task.claimed ? ' · COMPLETE' : '') + '</small></div></article>';
    }).join("") + '</div><p class="omm-daily-master">Complete all three missions for <strong>+25 BONUS POINTS</strong>.</p>';
  }
  function showJourneyComplete() {
    const day = readJourneyDay();
    const session = sessionFor(day);
    const result = document.querySelector("#omm-journey-complete");
    if (!result) return;
    result.querySelector("#omm-journey-stats").innerHTML = [
      ["MEMORIES DISCOVERED", session.answers],
      ["CORRECT ANSWERS", session.correct + " / " + journeyLength],
      ["WITHOUT SUBTITLES", session.withoutSubtitles],
      ["MEMORY POINTS EARNED", session.points],
      ["BEST STREAK", session.bestStreak],
      ["NEW MEMORIES UNLOCKED", session.newMemories]
    ].map(([label, value]) => '<div><span>' + label + '</span><strong>' + value + '</strong></div>').join("");
    result.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function closeJourneyComplete() {
    const result = document.querySelector("#omm-journey-complete");
    if (result) result.hidden = true;
    document.body.style.overflow = "";
  }
  window.OliviaMemoryJourney = {
    begin() {
      const day = readJourneyDay();
      if (day.session?.completed) { renderJourneyLanding(); return false; }
      if (!day.session?.active) {
        day.session = { active: true, completed: false, answers: 0, correct: 0, withoutSubtitles: 0, mistakes: 0, points: 0, bestStreak: 0, newMemories: 0, watchedAtStart: watchedIds().size };
        saveJourneyDay(day);
      }
      renderJourneyLanding();
      return true;
    },
    recordResult(result) {
      const day = readJourneyDay();
      const session = day.session;
      if (!session?.active || session.answers >= journeyLength) return;
      session.answers += 1;
      session.correct += result.correct ? 1 : 0;
      session.withoutSubtitles += result.correct && !result.subtitlesShown ? 1 : 0;
      session.mistakes += result.correct ? 0 : 1;
      session.points += Math.max(0, Number(result.points) || 0) + Math.max(0, Number(result.bonusPoints) || 0);
      session.bestStreak = Math.max(session.bestStreak, Number(result.streak) || 0);
      session.newMemories = Math.max(0, watchedIds().size - (session.watchedAtStart || 0));
      awardJourneyTasks(day);
      saveJourneyDay(day);
      renderJourneyLanding();
    },
    shouldComplete() { const session = readJourneyDay().session; return Boolean(session?.active && session.answers >= journeyLength); },
    complete() {
      const day = readJourneyDay();
      if (!day.session?.active) return;
      day.session.active = false;
      day.session.completed = true;
      awardJourneyTasks(day);
      saveJourneyDay(day);
      renderJourneyLanding();
      renderLandingStats();
      showJourneyComplete();
    }
  };
  function parseTimestamp(value) {
    const match = String(value || "0:00.000").match(/^(\d+):(\d{2}(?:\.\d{1,3})?)$/);
    return match ? Number(match[1]) * 60 + Number(match[2]) : 0;
  }
  function seekThumbnail(video) {
    const time = parseTimestamp(video.dataset.thumbnail);
    const seek = () => { video.currentTime = Math.min(time, Math.max(0, (video.duration || 0) - .05)); };
    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) seek();
    else video.addEventListener("loadedmetadata", seek, { once: true });
  }
  function renderLandingStats() {
    const student = profile();
    const watched = watchedIds();
    const unlocked = items.filter((item) => watched.has(item.id)).length;
    const stats = document.querySelector("#omm-progress");
    if (!stats) return;
    stats.innerHTML = [
      ["MEMORIES UNLOCKED", unlocked + " / " + items.length],
      ["BEST STREAK", String(student.bestStreak || 0)],
      ["JOKERS", "2"]
    ].map(([label, value]) => '<div class="omm-progress-card"><span>' + label + '</span><strong>' + value + '</strong></div>').join("");
  }
  function normalizeTheme(value) {
    return String(value || "").trim().toLowerCase().replace(/[\s-]+/g, "_");
  }
  function chapterMemories(chapter) {
    return items.filter((item) => chapter.themes.includes(normalizeTheme(item.theme)));
  }
  function chapterSpreadCount(chapter) {
    return Math.max(minimumSpreadsPerChapter, Math.ceil(chapterMemories(chapter).length / memoriesPerSpread));
  }
  function renderBookSpread() {
    const book = document.querySelector("#omm-book");
    const pages = document.querySelector("#omm-book-pages");
    const chapter = chapters[bookChapterIndex];
    if (!book || !pages || !chapter) return;
    const watched = watchedIds();
    const chapterItems = chapterMemories(chapter);
    const startAt = bookPage * memoriesPerSpread;
    const layout = albumLayouts[bookPage % albumLayouts.length];
    const spreadCount = chapterSpreadCount(chapter);
    const lastChapter = bookChapterIndex === chapters.length - 1;
    pages.innerHTML = layout.map((slot, index) => {
      const item = chapterItems[startAt + index];
      const pageLeft = slot.side === "left" ? 7.5 : 52.4;
      const pageWidth = slot.side === "left" ? 40.1 : 39.2;
      const style = '--x:' + (pageLeft + slot.x * pageWidth / 100) + '%;--y:' + (7.4 + slot.y * .84) + '%;--w:' + (slot.w * pageWidth / 100) + '%;--r:' + slot.r + 'deg;';
      if (!item) return '<div class="omm-memory-empty omm-memory-slot omm-memory-' + slot.side + '" style="' + style + '" aria-hidden="true"><span>NEW MEMORY</span></div>';
      const unlocked = watched.has(item.id);
      return '<button class="omm-memory-slot omm-memory-' + slot.side + (unlocked ? "" : " is-locked") + '" style="' + style + '" type="button" data-memory-id="' + escape(item.id) + '" aria-label="' + escape(unlocked ? "Replay " + item.title : "Locked memory") + '"' + (unlocked ? "" : " disabled") + '><video class="omm-memory-thumb" muted playsinline preload="metadata" data-thumbnail="' + escape(item.thumbnail || "0:00.000") + '" src="' + escape(item.videoSrc) + '"></video><span class="omm-memory-caption">' + (unlocked ? escape(item.title) : "LOCKED") + '</span></button>';
    }).join("");
    pages.querySelectorAll(".omm-memory-thumb").forEach(seekThumbnail);
    pages.querySelectorAll("[data-memory-id]").forEach((button) => button.addEventListener("click", () => openMemoryViewer(button.dataset.memoryId)));
    document.querySelector("#omm-book-chapter").textContent = chapter.title;
    document.querySelector("#omm-book-meta").textContent = chapterItems.filter((item) => watched.has(item.id)).length + " / " + chapterItems.length + " memories unlocked";
    document.querySelector("#omm-book-page-number").textContent = "PAGE " + (bookPage + 1) + " / " + spreadCount;
    document.querySelector("#omm-book-chapters").innerHTML = chapters.map((entry, index) => '<button type="button" data-chapter-index="' + index + '"' + (index === bookChapterIndex ? ' aria-current="page"' : "") + ">" + entry.title + "</button>").join("");
    document.querySelector("#omm-book-chapters [aria-current=\"page\"]")?.scrollIntoView({ block: "nearest", inline: "center" });
    document.querySelector("[data-book-prev]").disabled = bookChapterIndex === 0 && bookPage === 0;
    document.querySelector("[data-book-next]").disabled = lastChapter && bookPage === spreadCount - 1;
  }
  function turnBook(direction) {
    const chapter = chapters[bookChapterIndex];
    const spreadCount = chapterSpreadCount(chapter);
    if (direction > 0 && bookPage < spreadCount - 1) bookPage += 1;
    else if (direction > 0 && bookChapterIndex < chapters.length - 1) { bookChapterIndex += 1; bookPage = 0; }
    else if (direction < 0 && bookPage > 0) bookPage -= 1;
    else if (direction < 0 && bookChapterIndex > 0) { bookChapterIndex -= 1; bookPage = chapterSpreadCount(chapters[bookChapterIndex]) - 1; }
    else return;
    renderBookSpread();
  }
  function openBook() {
    const book = document.querySelector("#omm-book");
    if (!book) return;
    bookChapterIndex = 0;
    bookPage = 0;
    renderBookSpread();
    book.hidden = false;
    document.body.style.overflow = "hidden";
    book.querySelector("[data-close-book]")?.focus();
  }
  function closeBook() {
    const book = document.querySelector("#omm-book");
    if (!book) return;
    book.hidden = true;
    document.body.style.overflow = "";
    document.querySelector("#omm-book-button")?.focus();
  }
  function openMemoryViewer(id) {
    const item = items.find((entry) => entry.id === id);
    const viewer = document.querySelector("#omm-viewer");
    if (!item || !viewer) return;
    const video = viewer.querySelector("video");
    const transcript = viewer.querySelector("#omm-viewer-script");
    video.src = item.videoSrc;
    video.currentTime = 0;
    transcript.textContent = item.transcript.replaceAll("/", "");
    viewer.hidden = false;
    video.play().catch(() => {});
    viewer.querySelector("[data-close-viewer]")?.focus();
  }
  function closeMemoryViewer() {
    const viewer = document.querySelector("#omm-viewer");
    if (!viewer) return;
    viewer.querySelector("video")?.pause();
    viewer.hidden = true;
  }

  if (setup) {
    document.body.classList.add("omm-landing-active");
    setup.classList.add("student-memory-setup");
    setup.insertAdjacentHTML("afterbegin", [
      '<section class="omm-landing" aria-labelledby="omm-title"><a class="omm-zone-back" href="../student-zone/" aria-label="Back to Student Zone">🔙</a><div class="omm-landing-grid">',
      '<div class="omm-landing-copy"><p class="eyebrow">ADILHOCA · STUDENT ZONE</p><h1 id="omm-title">OLIVIA’S MOVIE MEMORIES</h1>',
       '<div class="omm-actions"><button id="omm-watch-button" class="omm-action omm-action-primary" type="button"><span class="omm-action-icon" aria-hidden="true">▶</span><span><span class="omm-action-title">START A MEMORY JOURNEY</span><span class="omm-action-subtitle">Discover 10 memories in one journey</span></span><span class="omm-action-arrow" aria-hidden="true">→</span></button>',
      '<button id="omm-book-button" class="omm-action" type="button"><span class="omm-action-icon" aria-hidden="true">▤</span><span><span class="omm-action-title">MEMORY BOOK</span><span class="omm-action-subtitle">See the memories you unlocked</span></span><span class="omm-action-arrow" aria-hidden="true">→</span></button></div></div>',
       '<div class="omm-hero"><img src="assets/ui/olivia_magic_memories.webp" alt="Olivia looking through a glowing memory album"></div><section id="omm-daily-board" class="omm-daily-board" aria-label="Daily task board"></section></div></section>',
      '<section id="omm-book" class="omm-book" hidden role="dialog" aria-modal="true" aria-labelledby="omm-book-title"><div class="omm-book-card"><div class="omm-book-head"><div><p class="eyebrow">YOUR COLLECTION</p><h2 id="omm-book-title">MEMORY BOOK</h2><p id="omm-book-meta">0 memories unlocked</p></div><button class="omm-book-close" type="button" data-close-book aria-label="Close Memory Book">×</button></div><div class="omm-book-chapter-nav"><button type="button" data-chapter-scroll="-1" aria-label="Show previous themes">‹</button><div id="omm-book-chapters" class="omm-book-chapters" aria-label="Memory Book chapters"></div><button type="button" data-chapter-scroll="1" aria-label="Show next themes">›</button></div><div class="omm-book-stage"><div class="omm-book-page-title"><span id="omm-book-chapter">SCHOOL LIFE</span><small id="omm-book-page-number">PAGE 1 / 3</small></div><div id="omm-book-pages" class="omm-book-pages"></div><button class="omm-book-turn omm-book-turn-prev" type="button" data-book-prev aria-label="Previous book page">‹</button><button class="omm-book-turn omm-book-turn-next" type="button" data-book-next aria-label="Next book page">›</button></div></div></section>'
       ,'<section id="omm-viewer" class="omm-book omm-viewer" hidden role="dialog" aria-modal="true" aria-labelledby="omm-viewer-title"><div class="omm-book-card"><div class="omm-book-head"><div><p class="eyebrow">MEMORY REPLAY</p><h2 id="omm-viewer-title">WATCH THE MEMORY</h2></div><button class="omm-book-close" type="button" data-close-viewer aria-label="Close memory replay">×</button></div><video class="omm-viewer-video" controls playsinline></video><div class="omm-viewer-script"><span>FULL SCRIPT</span><p id="omm-viewer-script"></p></div></div></section>'
       ,'<section id="omm-journey-complete" class="omm-book omm-journey-complete" hidden role="dialog" aria-modal="true" aria-labelledby="omm-journey-title"><div class="omm-book-card"><p class="eyebrow">TODAY’S LISTENING SESSION</p><h2 id="omm-journey-title">MEMORY JOURNEY COMPLETE</h2><div id="omm-journey-stats" class="omm-journey-stats"></div><div class="omm-journey-actions"><button type="button" class="omm-action omm-action-primary" data-open-book-from-result><span class="omm-action-icon">▤</span><span><span class="omm-action-title">OPEN MEMORY BOOK</span><span class="omm-action-subtitle">See today’s unlocked memories</span></span><span class="omm-action-arrow">→</span></button><button type="button" class="omm-action" data-back-student-zone><span class="omm-action-icon">←</span><span><span class="omm-action-title">BACK TO STUDENT ZONE</span><span class="omm-action-subtitle">Return to your activities</span></span><span class="omm-action-arrow">→</span></button></div></div></section>'
    ].join(""));
  }

  if (title) title.textContent = "Olivia's Movie Memories";
  if (brand) brand.textContent = "AdilHoca · Student Zone";
  if (start) start.innerHTML = 'START A MEMORY JOURNEY <span>→</span>';
  if (exit) exit.title = "Back to Olivia's Movie Memories";
  if (scoreboard) scoreboard.hidden = true;
  if (overrideReplay) overrideReplay.hidden = true;
  if (scoreboard) {
    new MutationObserver(() => {
      const day = readJourneyDay();
      renderJourneyScore(day, sessionFor(day));
    }).observe(scoreboard, { childList: true, subtree: true });
  }
  if (roundProgress) {
    roundProgress.classList.add("omm-daily-game-header");
    roundProgress.innerHTML = '<div id="omm-daily-game-tasks" aria-label="Daily tasks"></div>';
  }
  const gameScreen = document.querySelector("#game-screen");
  if (gameScreen) {
    const syncGameBackground = () => document.body.classList.toggle("omm-game-active", !gameScreen.hidden);
    new MutationObserver(syncGameBackground).observe(gameScreen, { attributes: true, attributeFilter: ["hidden"] });
    syncGameBackground();
  }
  if (leaderboard) leaderboard.hidden = true;
  if (noSubtitles) noSubtitles.textContent = "2× POINTS · +2";
  if (showSubtitles) showSubtitles.textContent = "1× POINTS · +1";

  document.querySelector("#omm-watch-button")?.addEventListener("click", () => start?.click());
  document.querySelector("#omm-book-button")?.addEventListener("click", openBook);
  document.querySelector("[data-open-book-from-result]")?.addEventListener("click", () => { closeJourneyComplete(); openBook(); });
  document.querySelector("[data-back-student-zone]")?.addEventListener("click", () => { location.href = "../student-zone/"; });
  document.querySelector("[data-close-book]")?.addEventListener("click", closeBook);
  document.querySelector("[data-close-viewer]")?.addEventListener("click", closeMemoryViewer);
  document.querySelector("[data-book-prev]")?.addEventListener("click", () => turnBook(-1));
  document.querySelector("[data-book-next]")?.addEventListener("click", () => turnBook(1));
  document.querySelector("#omm-book-chapters")?.addEventListener("click", (event) => {
    const chapterButton = event.target.closest("[data-chapter-index]");
    if (!chapterButton) return;
    bookChapterIndex = Number(chapterButton.dataset.chapterIndex);
    bookPage = 0;
    renderBookSpread();
  });
  document.querySelectorAll("[data-chapter-scroll]").forEach((button) => button.addEventListener("click", () => {
    document.querySelector("#omm-book-chapters")?.scrollBy({ left: Number(button.dataset.chapterScroll) * 260, behavior: "smooth" });
  }));
  document.querySelector("#omm-book")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) closeBook(); });
  document.querySelector("#omm-viewer")?.addEventListener("click", (event) => { if (event.target === event.currentTarget) closeMemoryViewer(); });
  document.addEventListener("keydown", (event) => {
    if (!document.querySelector("#omm-viewer")?.hidden) { if (event.key === "Escape") closeMemoryViewer(); return; }
    if (!document.querySelector("#omm-book")?.hidden) {
      if (event.key === "Escape") closeBook();
      else if (event.key === "ArrowLeft") { event.preventDefault(); turnBook(-1); }
      else if (event.key === "ArrowRight") { event.preventDefault(); turnBook(1); }
    }
  });
  window.addEventListener("studentprofilechange", () => { renderLandingStats(); renderJourneyLanding(); });
  renderLandingStats();
  renderJourneyLanding();
  setInterval(renderJourneyLanding, 60000);
})();
