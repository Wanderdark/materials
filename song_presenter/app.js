/* ═══════════════════════════════════════════════════════════════════════
   SONG PRESENTER — app.js
   2 aşamalı şarkı sunum aracı: PRE (kelime-görsel eşleştirme),
   DURING (şarkı + boşluk doldurma).
   Veriler songs.js içindeki window.SONGS'tan gelir.
   ═══════════════════════════════════════════════════════════════════════ */
(() => {
  "use strict";

  /* ── DOM kısayolu ── */
  const $ = (id) => document.getElementById(id);

  const els = {
    library: $("libraryScreen"), activity: $("activityScreen"), complete: $("completeScreen"),
    songGrid: $("songGrid"),
    filterBar: $("libraryFilterBar"), artistFilterName: $("artistFilterName"), artistBackButton: $("artistBackButton"),
    backButton: $("backButton"), fullscreenButton: $("fullscreenButton"), liteButton: $("liteButton"),
    artistLabel: $("songArtistLabel"), titleLabel: $("songTitleLabel"),
    stepper: $("stageStepper"),
    stages: [$("preStage"), $("duringStage")],
    prevButton: $("prevStageButton"), nextButton: $("nextStageButton"), stageStatus: $("stageStatus"),
    preWordBank: $("preWordBank"), preImageGrid: $("preImageGrid"),
    playerVisual: $("playerVisual"), playerTitle: $("playerSongTitle"), playerArtist: $("playerSongArtist"),
    playerProgress: $("playerProgress"), playerProgressBar: $("playerProgressBar"),
    playerTimeNow: $("playerTimeNow"), playerTimeTotal: $("playerTimeTotal"),
    playButton: $("playButton"), videoButton: $("videoButton"), micButton: $("micButton"), replayButton: $("replayButton"),
    duringWordBank: $("duringWordBank"), autofillButton: $("autofillButton"), lyricsBox: $("lyricsBox"),
    restartButton: $("restartButton"), libraryButton: $("libraryButton"), resetProgressButton: $("resetProgressButton"),
    menuReturnButton: $("menuReturnButton"), cornerMenuReturnButton: $("cornerMenuReturnButton"),
    completeSummary: $("completeSummary"),
    audio: $("songAudio")
  };

  /* ── Ses efektleri ── */
  const sfxCorrect = new Audio("sounds/correct.mp3");
  const sfxWrong   = new Audio("sounds/wrong.mp3");
  function playSfx(a) { try { a.currentTime = 0; a.play(); } catch (_) {} }

  /* ── Durum ── */
  let song = null;            // aktif şarkı verisi
  let stage = 0;              // 0=pre 1=during
  let stageDone = [false, false];
  let mediaEl = null;         // audio veya video elementi — o an aktif olan
  let videoEl = null;
  let playerMode = "audio";   // "audio" | "video" | "karaoke"
  let karaokeSrc = null;      // kareoke/ klasöründe bulunan video (yoksa null)
  let videoSrc = null;        // videos/ klasöründe bulunan video (yoksa null)
  let videoIsSource = false;  // ses kaynağı mp3 değil videonun kendisi mi
  let videoCloseAt = null;    // songs.js "videoclose" — video bu anda kapanır
  let lastMediaT = 0;         // videoclose eşiğini yakalamak için önceki zaman
  let liteMode = false;       // düşük performans modu — her açılışta kapalı başlar
  let artistFilter = null;    // library'de aktif sanatçı filtresi
  let karaokeLines = [];      // zamanlı söz satırları: {from, to, el}
  let karaokeIdx = -1;        // aktif satır indeksi
  let autoZoomWindows = [];   // uzun enstrümantal aralıklar: {start, end}
  let autoZoomActive = false; // otomatik büyüme şu an devrede mi
  let autoZoomGap = 8;        // şarkıya göre ayarlanır (songs.js "zoomgap")
  const AUTOZOOM_LEAD = 2;    // sonraki satıra bu kadar kala geri küçülür
  let climaxMoments = [];        // {at, duration} — mp3/video timeline'ı için
  let karaokeClimaxMoments = []; // {at, duration} — karaoke videosunun kendi timeline'ı için
  let climaxTimer = null;        // aktif emitter interval'i
  let climaxLayer = null;        // emoji overlay katmanı
  let censoredWindows = [];      // {at, end} — ana video/VID timeline'ı için (songs.js "censored")
  let karaokeCensoredWindows = []; // {at, end} — karaoke videosunun kendi timeline'ı için
  let censorActive = false;      // şu an sansür penceresinde miyiz
  let coverBaseHidden = false;   // sansür yokken kapak gizli mi (video görünür mü) olmalı

  /* ── Yardımcılar ── */
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function fmtTime(s) {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60), r = Math.floor(s % 60);
    return m + ":" + String(r).padStart(2, "0");
  }
  /* "1:23" / "1:23.5" / 83 → saniye. Geçersizse null. */
  function parseTime(v) {
    if (v == null) return null;
    if (typeof v === "number") return v;
    const m = String(v).trim().match(/^(\d+):(\d+(?:\.\d+)?)$/);
    if (m) return (+m[1]) * 60 + (+m[2]);
    const n = parseFloat(v);
    return isNaN(n) ? null : n;
  }
  /* ── Dinlenmiş şarkı takibi (localStorage) ── */
  const LISTENED_KEY = "sp_listened";
  function getListenedSet() {
    try { return new Set(JSON.parse(localStorage.getItem(LISTENED_KEY) || "[]")); }
    catch (_) { return new Set(); }
  }
  function markListened(id) {
    if (!id) return;
    const set = getListenedSet();
    if (set.has(id)) return;
    set.add(id);
    localStorage.setItem(LISTENED_KEY, JSON.stringify([...set]));
  }

  /* videos/ klasöründe, şarkının audio dosyasıyla aynı isimde video arar.
     Uzantı fark etmez — mp4/webm/mov/ogv sırayla denenir, ilk bulunan çalışır. */
  function getVideoCandidates(s) {
    if (s.video) return [s.video];
    const base = s.audio.split("/").pop().replace(/\.[a-zA-Z0-9]+$/, "");
    return ["mp4", "webm", "mov", "ogv"].map((ext) => "videos/" + base + "." + ext);
  }
  /* kareoke/ klasöründe aynı isimli karaoke videosu arar */
  function getKaraokeCandidates(s) {
    const base = s.audio.split("/").pop().replace(/\.[a-zA-Z0-9]+$/, "");
    return ["mp3"].map((ext) => "kareoke/" + base + "." + ext);
  }

  /* ════════════════════════════════════════════════════════════════════
     POINTER TABANLI SÜRÜKLEME (dokunmatik smartboard uyumlu)
     Küçük hareket = tıklama (onTap), büyük hareket = sürükleme.
     ════════════════════════════════════════════════════════════════════ */
  function makeDraggable(el, opts) {
    el.addEventListener("pointerdown", (ev) => {
      if (opts.canDrag && !opts.canDrag()) return;
      ev.preventDefault();
      const startX = ev.clientX, startY = ev.clientY;
      let ghost = null, dragging = false, lastTarget = null;

      const onMove = (mv) => {
        if (!dragging && Math.hypot(mv.clientX - startX, mv.clientY - startY) > 9) {
          dragging = true;
          ghost = el.cloneNode(true);
          ghost.id = "dragGhost";
          ghost.classList.remove("selected", "dragging");
          ghost.style.width = el.offsetWidth + "px";
          document.body.appendChild(ghost);
          el.classList.add("dragging");
          if (opts.onDragStart) opts.onDragStart();
        }
        if (!dragging) return;
        ghost.style.left = mv.clientX + "px";
        ghost.style.top = mv.clientY + "px";
        const under = document.elementFromPoint(mv.clientX, mv.clientY);
        const target = under ? (opts.findTarget ? opts.findTarget(under, mv) : under.closest(opts.targetSelector)) : null;
        if (target !== lastTarget) {
          if (lastTarget && opts.onHover) opts.onHover(lastTarget, false);
          if (target && opts.onHover) opts.onHover(target, true);
          lastTarget = target;
        }
        if (opts.onDragMove) opts.onDragMove(mv);
      };

      const onUp = (up) => {
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("pointercancel", onUp);
        if (dragging) {
          if (ghost) ghost.remove();
          el.classList.remove("dragging");
          if (lastTarget && opts.onHover) opts.onHover(lastTarget, false);
          const under = document.elementFromPoint(up.clientX, up.clientY);
          const target = under ? (opts.findTarget ? opts.findTarget(under, up) : under.closest(opts.targetSelector)) : null;
          if (opts.onDrop) opts.onDrop(target, up);
        } else if (opts.onTap) {
          opts.onTap();
        }
      };

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
      window.addEventListener("pointercancel", onUp);
    });
  }

  /* ════════════════════════════════════════════════════════════════════
     EKRAN GEÇİŞLERİ
     ════════════════════════════════════════════════════════════════════ */
  function showScreen(name) {
    els.library.classList.toggle("hidden", name !== "library");
    els.activity.classList.toggle("hidden", name !== "activity");
    els.complete.classList.toggle("hidden", name !== "complete");
  }

  function setStage(n) {
    stage = n;
    els.stages.forEach((s, i) => s.classList.toggle("hidden", i !== n));
    [...els.stepper.querySelectorAll("span[data-stage]")].forEach((sp) => {
      const i = +sp.dataset.stage;
      sp.classList.toggle("active", i === n);
      sp.classList.toggle("done", stageDone[i] && i !== n);
    });
    els.prevButton.classList.toggle("invisible", n === 0);
    els.nextButton.textContent = n === 1 ? "FINISH ✓" : "NEXT →";
    els.nextButton.disabled = n === 0 ? false : !stageDone[n];
    if (n !== 1 && mediaEl && !mediaEl.paused) mediaEl.pause();
    updateStatus();
  }

  function updateStatus() {
    let txt = "";
    if (stage === 0) {
      const done = els.preImageGrid.querySelectorAll(".pre-item.done").length;
      txt = done + " / " + song.words.length + " MATCHED";
    } else {
      const gaps = els.lyricsBox.querySelectorAll(".lyric-gap");
      const filled = els.lyricsBox.querySelectorAll(".lyric-gap.filled");
      txt = filled.length + " / " + gaps.length + " GAPS FILLED";
    }
    if (stageDone[stage]) txt += " · COMPLETE ✓";
    els.stageStatus.textContent = txt;
    els.stageStatus.classList.toggle("complete", stageDone[stage]);
  }

  function completeStage() {
    if (stageDone[stage]) return;
    stageDone[stage] = true;
    els.nextButton.disabled = false;
    setStage(stage); // stepper + status tazele
  }

  /* ════════════════════════════════════════════════════════════════════
     LIBRARY
     ════════════════════════════════════════════════════════════════════ */
  function addSongCard(s) {
    const listened = getListenedSet().has(s.id);
    const card = document.createElement("button");
    card.className = "song-card" + (s.image ? " has-cover" : "") + (listened ? " listened" : "");
    card.type = "button";
    const cover = s.image
      ? `<img src="${s.image}" alt="${s.title}">`
      : `<span class="cover-note">♪♫</span>`;
    card.innerHTML = `
      <div class="song-cover">${cover}${listened ? '<span class="listened-badge">✓</span>' : ""}</div>
      <div class="song-card-body">
        <span>${(s.artist || "SONG").toUpperCase()}</span>
        <strong>${s.title}</strong>
      </div>`;
    card.addEventListener("click", () => {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
      startSong(s);
    });
    els.songGrid.appendChild(card);
  }

  function addArtistCard(artist, list) {
    const card = document.createElement("button");
    card.className = "song-card artist-card";
    card.type = "button";
    const artistCover = window.ARTIST_COVERS?.[artist];
    const withImage = list.find((s) => s.image);
    const cover = artistCover
      ? `<img src="${artistCover}" alt="${artist}">`
      : withImage
      ? `<img src="${withImage.image}" alt="${artist}">`
      : `<span class="cover-note">♪♫</span>`;
    card.innerHTML = `
      <div class="song-cover">${cover}<span class="artist-count">${list.length} SONGS</span></div>
      <div class="song-card-body">
        <span>ARTIST</span>
        <strong>${artist}</strong>
      </div>`;
    card.addEventListener("click", () => {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
      artistFilter = artist;
      renderLibrary();
    });
    els.songGrid.appendChild(card);
  }

  function renderLibrary() {
    els.songGrid.innerHTML = "";
    const songs = window.SONGS || [];
    els.filterBar.classList.toggle("hidden", !artistFilter);

    /* Sanatçı filtresi aktif → sadece o sanatçının şarkıları */
    if (artistFilter) {
      els.artistFilterName.textContent = artistFilter.toUpperCase();
      songs.filter((s) => (s.artist || "") === artistFilter).forEach(addSongCard);
      return;
    }

    /* Sanatçıya göre grupla: tek şarkısı olan direkt kart,
       birden fazla şarkısı olan sanatçı klasör kartı olur */
    const groups = new Map();
    songs.forEach((s) => {
      const key = s.artist || "";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(s);
    });
    groups.forEach((list, artist) => {
      if (!artist || list.length === 1) list.forEach(addSongCard);
      else addArtistCard(artist, list);
    });
  }

  els.artistBackButton.addEventListener("click", () => { artistFilter = null; renderLibrary(); });

  function startSong(s) {
    song = s;
    stageDone = [false, false];
    els.artistLabel.textContent = (s.artist || "SONG").toUpperCase();
    els.titleLabel.textContent = s.title.toUpperCase();
    buildPreStage();
    buildDuringStage();
    showScreen("activity");
    setStage(0);
  }

  /* ════════════════════════════════════════════════════════════════════
     SAYFA 1 — PRE-LISTENING (kelime → görsel eşleştirme)
     ════════════════════════════════════════════════════════════════════ */
  let selectedChip = null;

  function selectChip(chip) {
    if (selectedChip) selectedChip.classList.remove("selected");
    selectedChip = (selectedChip === chip) ? null : chip;
    if (selectedChip) selectedChip.classList.add("selected");
  }

  function buildPreStage() {
    selectedChip = null;
    els.preWordBank.innerHTML = "";
    els.preImageGrid.innerHTML = "";

    /* Görsel ızgarası kelime sayısına göre dengeli satırlara bölünür —
       1-4 kelime tek satır, 5-8 kelime iki dengeli satır. Sabit 8 şartı yok. */
    const n = song.words.length;
    const cols = n <= 4 ? Math.max(1, n) : Math.ceil(n / 2);
    els.preImageGrid.style.setProperty("--pre-cols", cols);

    /* Sol rail — karışık sırayla kelime çipleri */
    shuffle(song.words).forEach((w) => {
      const chip = document.createElement("div");
      chip.className = "word-chip";
      chip.textContent = w.word;
      chip.dataset.word = w.word;
      makeDraggable(chip, {
        canDrag: () => !chip.classList.contains("placed"),
        findTarget: (under) => {
          const item = under.closest(".pre-item:not(.done)");
          return item ? item.querySelector(".pre-slot") : null;
        },
        onHover: (t, on) => { t.classList.toggle("hover", on); t.closest(".pre-item").classList.toggle("drop-hover", on); },
        onDrop: (t) => { if (t) tryPlacePre(chip, t); },
        onTap: () => selectChip(chip)
      });
      els.preWordBank.appendChild(chip);
    });

    /* Sağ grid — karışık sırayla görsel + boşluk */
    shuffle(song.words).forEach((w) => {
      const item = document.createElement("div");
      item.className = "pre-item";
      const visual = w.image
        ? `<div class="pre-visual"><img src="${w.image}" alt="${w.word}"></div>`
        : `<div class="pre-visual tr-card"><span>TÜRKÇESİ</span><p>${w.tr}</p></div>`;
      item.innerHTML = visual + `<div class="pre-slot" data-word="${w.word}">?</div>`;
      const slot = item.querySelector(".pre-slot");
      item.addEventListener("click", () => {
        if (selectedChip && !slot.classList.contains("filled")) {
          const chip = selectedChip;
          selectChip(chip); // seçimi kaldır
          tryPlacePre(chip, slot);
        }
      });
      els.preImageGrid.appendChild(item);
    });
  }

  function tryPlacePre(chip, slot) {
    if (slot.dataset.word === chip.dataset.word) {
      slot.textContent = chip.dataset.word;
      slot.classList.add("filled");
      slot.closest(".pre-item").classList.add("done");
      chip.classList.remove("selected");
      chip.classList.add("placed");
      if (selectedChip === chip) selectedChip = null;
      playSfx(sfxCorrect);
      window.TeacherControl?.onCorrect();
      window.StudentGame?.onCorrect();
      if (els.preImageGrid.querySelectorAll(".pre-item.done").length === song.words.length) {
        completeStage();
        ToastManager.show("🎉 ALL WORDS MATCHED! PRESS NEXT.", null, 4000);
      }
    } else {
      playSfx(sfxWrong);
      window.StudentGame?.onWrong();
      ToastManager.show("❌ TRY AGAIN!", "warn", 2200);
      slot.classList.add("wrong");
      setTimeout(() => slot.classList.remove("wrong"), 420);
    }
    updateStatus();
  }

  /* ════════════════════════════════════════════════════════════════════
     SAYFA 2 — DURING-LISTENING (player + boşluk doldurma)
     ════════════════════════════════════════════════════════════════════ */
  /* ── Karaoke: aktif satırı vurgula + satır içi ilerleme dolgusu ── */
  function updateKaraoke(t) {
    let idx = -1;
    for (let i = 0; i < karaokeLines.length; i++) {
      /* Satır, from'dan AUTOZOOM_LEAD (2 sn) önce BOŞ dolumla vurgulanır —
         video otomatik küçüldüğünde göz sıradaki satırı hazır bulur,
         from gelince şerit dolmaya başlar. (Önceki satır hâlâ sürüyorsa
         öncelik onda; döngü sırası bunu garantiler.) */
      if (t >= karaokeLines[i].from - AUTOZOOM_LEAD && t < karaokeLines[i].to) { idx = i; break; }
    }
    if (idx !== karaokeIdx) {
      if (karaokeIdx >= 0 && karaokeLines[karaokeIdx]) {
        const old = karaokeLines[karaokeIdx].el;
        old.classList.remove("karaoke-active");
        old.style.removeProperty("--kp");
      }
      karaokeIdx = idx;
      if (idx >= 0) {
        karaokeLines[idx].el.classList.add("karaoke-active");
        karaokeLines[idx].el.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
    if (idx >= 0 && isFinite(karaokeLines[idx].to)) {
      const k = karaokeLines[idx];
      const p = Math.min(100, Math.max(0, (t - k.from) / (k.to - k.from) * 100));
      k.el.style.setProperty("--kp", p.toFixed(1) + "%");
    }
  }

  /* ── Climax: belirtilen anlarda yukarı süzülen emoji notalar ── */
  const CLIMAX_EMOJIS = ["🎵", "🎶", "🎤", "🎧", "🎸", "🎹", "🥁", "🎺", "⭐", "✨", "💫", "🌟"];

  function spawnClimaxEmoji() {
    if (document.hidden || !climaxLayer) return;
    if (climaxLayer.childElementCount > 26) return; // smartboard için üst sınır
    const e = document.createElement("span");
    e.className = "climax-emoji";
    e.textContent = CLIMAX_EMOJIS[Math.floor(Math.random() * CLIMAX_EMOJIS.length)];
    e.style.left = (3 + Math.random() * 92) + "vw";
    e.style.fontSize = (26 + Math.random() * 32) + "px";
    e.style.setProperty("--cd", (3.4 + Math.random() * 2.2) + "s");
    e.style.setProperty("--cx1", (Math.random() * 140 - 70) + "px");
    e.style.setProperty("--cx2", (Math.random() * 200 - 100) + "px");
    e.style.setProperty("--cr1", (Math.random() * 44 - 22) + "deg");
    e.style.setProperty("--cr2", (Math.random() * 70 - 35) + "deg");
    e.addEventListener("animationend", () => e.remove());
    climaxLayer.appendChild(e);
  }
  function startClimax() {
    if (climaxTimer) return;
    if (!climaxLayer) {
      climaxLayer = document.createElement("div");
      climaxLayer.id = "climaxLayer";
      document.body.appendChild(climaxLayer);
    }
    climaxTimer = setInterval(spawnClimaxEmoji, 150);
  }
  function stopClimax() {
    if (climaxTimer) { clearInterval(climaxTimer); climaxTimer = null; }
    /* uçuştaki emojiler animasyonlarını bitirip kendilerini siler */
  }
  function updateClimax(t) {
    if (liteMode) { stopClimax(); return; }
    /* Karaoke videosunun timing'i mp3'ten farklı — kendi climax listesi kullanılır */
    const list = playerMode === "karaoke" ? karaokeClimaxMoments : climaxMoments;
    const active = list.some((c) => t >= c.at && t < c.end);
    if (active && mediaEl && !mediaEl.paused) startClimax();
    else stopClimax();
  }

  /* Aktif medya elementine (audio veya video) ortak dinleyicileri bağlar */
  function attachPlayerEvents(el) {
    el.onloadedmetadata = () => { els.playerTimeTotal.textContent = fmtTime(el.duration); };
    el.ontimeupdate = () => {
      const t = el.currentTime;
      els.playerTimeNow.textContent = fmtTime(t);
      if (el.duration) els.playerProgressBar.style.width = (t / el.duration * 100) + "%";
      /* videoclose: eşik AŞILDIĞI anda video kapanır, mp3 + kapak görseline dönülür.
         Öğretmen eşikten SONRA videoyu bilerek tekrar açarsa bir daha kapanmaz.
         (Sadece VID modunda — karaoke'nin timing'i farklı olduğundan ona karışmaz) */
      if (videoCloseAt != null && playerMode === "video" && lastMediaT < videoCloseAt && t >= videoCloseAt) {
        lastMediaT = t;
        /* video kaynaklıysa sadece kapağa dön, mp3'lüyse mp3'e geç */
        if (videoIsSource) setVideoVisible(false);
        else switchToAudio();
        return;
      }
      lastMediaT = t;
      if (karaokeLines.length) updateKaraoke(t);
      if (climaxMoments.length || karaokeClimaxMoments.length) updateClimax(t);
      if (playerMode === "video" && autoZoomWindows.length) updateAutoZoom(t);
      if (censoredWindows.length || karaokeCensoredWindows.length) updateCensor(t);
    };
    el.onplay = () => { updatePlayIcon(true); const n = $("coverNote"); if (n) n.classList.add("playing"); };
    el.onpause = () => { updatePlayIcon(false); stopClimax(); const n = $("coverNote"); if (n) n.classList.remove("playing"); };
    el.onended = () => {
      updatePlayIcon(false);
      stopClimax();
      const n = $("coverNote"); if (n) n.classList.remove("playing");
      markListened(song?.id);
      if (playerMode === "karaoke") window.StudentGame?.onKaraokeComplete();
      else window.StudentGame?.onSongListened(song?.id);
      /* Video kaynaklı şarkıda video bitince kapak (thumbnail) geri gelir */
      if (videoIsSource && playerMode === "video") setVideoVisible(false);
    };
  }
  function updatePlayIcon(playing) {
    els.playButton.textContent = playing ? "⏸" : "▶";
    els.playButton.title = playing ? "Pause" : "Play";
  }
  function showCoverVisual() {
    els.playerVisual.innerHTML = song.image
      ? `<img src="${song.image}" alt="${song.title}">`
      : `<span class="cover-note" id="coverNote">♪♫♪</span>`;
  }

  /* Karaoke modunda sağ panel (word bank + sözler) komple gizlenir */
  function setKaraokeLayout(on) {
    const card = document.querySelector(".during-card");
    const wasOn = card.classList.contains("karaoke-mode");
    card.classList.toggle("karaoke-mode", on);
    /* Büyük videodan (manuel ya da otomatik autozoom) çıkınca, panel tekrar
       görünür olduğunda o anki söz satırını ortaya kaydır — göz nerede
       kaldığını hemen bulsun */
    if (wasOn && !on && karaokeIdx >= 0 && karaokeLines[karaokeIdx]) {
      const line = karaokeLines[karaokeIdx].el;
      requestAnimationFrame(() => line.scrollIntoView({ block: "center", behavior: "smooth" }));
    }
  }

  function revealKaraokeLyrics() {
    els.lyricsBox.querySelectorAll(".lyric-gap:not(.filled)").forEach((gap) => {
      gap.textContent = gap.dataset.word;
      gap.classList.add("filled");
    });
    els.duringWordBank.querySelectorAll(".word-chip").forEach((chip) => {
      chip.classList.remove("selected");
      chip.classList.add("placed");
    });
    selectedChip = null;
    completeStage();
  }

  function autofillLyrics() {
    els.lyricsBox.querySelectorAll(".lyric-gap:not(.filled)").forEach((gap) => {
      gap.textContent = gap.dataset.word;
      gap.classList.add("filled", "auto-filled");
    });
    els.duringWordBank.classList.add("hidden");
    els.autofillButton.disabled = true;
    selectedChip = null;
    completeStage();
    updateStatus();
  }

  function enterKaraokeAudio(src) {
    if (videoEl) { videoEl.pause(); videoEl.remove(); videoEl = null; }
    els.audio.pause();
    els.audio.src = src;
    els.audio.load();
    showCoverVisual();
    mediaEl = els.audio;
    attachPlayerEvents(mediaEl);
    playerMode = "karaoke";
    videoIsSource = false;
    els.videoButton.classList.remove("active");
    els.micButton.classList.add("active");
    setKaraokeLayout(false);
    autoZoomActive = false;
    censorActive = false;
    revealKaraokeLyrics();
    els.audio.play().catch(() => {});
  }

  /* Video üzerine binen kapak (thumbnail) katmanı — hem "VID'i göster/gizle"
     toggle'ı hem de sansür penceresi bu TEK elementi paylaşır */
  function makeCoverOverlay() {
    const cover = document.createElement("div");
    cover.className = "cover-overlay";
    cover.id = "coverOverlay";
    cover.innerHTML = song.image
      ? `<img src="${song.image}" alt="${song.title}">`
      : `<span class="cover-note" id="coverNote">♪♫♪</span>`;
    return cover;
  }
  /* Sansür anlarında videonun üstüne binen simsiyah katman */
  function makeCensorOverlay() {
    const cen = document.createElement("div");
    cen.className = "censor-overlay hidden";
    cen.id = "censorOverlay";
    return cen;
  }
  /* Kapağın gerçek görünürlüğü iki şeyin birleşimi: kullanıcının VID/🎤
     tercihi (coverBaseHidden) VE o an sansür penceresinde olup olmadığımız.
     Sansür varsa kullanıcı ne yaparsa yapsın kapak zorla görünür. */
  function refreshCoverOverlay() {
    const cover = $("coverOverlay");
    if (cover) cover.classList.toggle("hidden", coverBaseHidden);
    /* Sansür: video görünürken (coverBaseHidden) devreye girer, ekran simsiyah olur */
    const cen = $("censorOverlay");
    if (cen) cen.classList.toggle("hidden", !(censorActive && coverBaseHidden));
  }

  /* VID/🎤 modunda, songs.js'te tanımlı zaman aralıklarında video otomatik
     kapağa döner (hassas sahneleri atlamak için), aralık bitince kaldırılır. */
  function updateCensor(t) {
    const list = playerMode === "karaoke" ? karaokeCensoredWindows : censoredWindows;
    const active = list.some((w) => t >= w.at && t < w.end);
    if (active !== censorActive) {
      censorActive = active;
      refreshCoverOverlay();
    }
  }

  /* VID modunda uzun enstrümantal aralarda otomatik büyü / satır gelmeden küçül.
     Kenar tetiklemeli: pencere sınırları arasında öğretmenin elle yaptığı
     büyütme/küçültmeye karışmaz. */
  function updateAutoZoom(t) {
    const inGap = autoZoomWindows.some((w) => {
      /* Outro penceresi: şarkının kalan süresi eşikten kısaysa sayma */
      if (w.end === Infinity && mediaEl && isFinite(mediaEl.duration) &&
          mediaEl.duration - w.start <= autoZoomGap) return false;
      return t >= w.start && t < w.end;
    });
    if (inGap !== autoZoomActive) {
      autoZoomActive = inGap;
      setKaraokeLayout(inGap);
    }
  }

  /* Video moduna kaldığı yerden, karaoke moduna BAŞTAN geçilir.
     mode: "video" → videos/ klasörü, "karaoke" → kareoke/ klasörü
     (Karaoke videolarının timing'i mp3 ile aynı olmadığından senkron yok) */
  function enterVideoMode(candidates, mode) {
    const wasPlaying = mediaEl && !mediaEl.paused;
    const t = mediaEl ? mediaEl.currentTime : 0;
    const v = document.createElement("video");
    v.playsInline = true;
    v.preload = "auto";
    candidates.forEach((src) => {
      const source = document.createElement("source");
      source.src = src;
      v.appendChild(source);
    });
    v.onerror = () => { ToastManager.show("❌ NO VIDEO FOUND FOR THIS SONG", "warn", 3000); };
    v.onloadedmetadata = () => {
      els.audio.pause();
      if (videoEl && videoEl !== v) { videoEl.pause(); videoEl.remove(); }
      v.currentTime = (mode !== "karaoke" && isFinite(v.duration) && t < v.duration) ? t : 0;
      els.playerVisual.innerHTML = "";
      els.playerVisual.appendChild(v);
      els.playerVisual.appendChild(makeCoverOverlay());
      els.playerVisual.appendChild(makeCensorOverlay());
      videoEl = v;
      mediaEl = v;
      attachPlayerEvents(mediaEl);
      playerMode = mode;
      els.videoButton.classList.toggle("active", mode === "video");
      els.micButton.classList.toggle("active", mode === "karaoke");
      setKaraokeLayout(mode === "karaoke");
      autoZoomActive = false;
      coverBaseHidden = true; // bu modda video baştan görünür, sadece sansürde kapanır
      censorActive = false;
      refreshCoverOverlay();
      if (mode === "karaoke") {
        /* videoya dokununca 16:9 tam ekran aç/kapat */
        v.addEventListener("click", () => {
          if (document.fullscreenElement === v) document.exitFullscreen();
          else v.requestFullscreen().catch(() => {});
        });
      } else {
        /* VID modu: videoya dokununca geniş ekran düzeni aç/kapat
           (karaoke moduyla aynı yerleşim — sağ panel gizli, kompakt tuşlar) */
        v.addEventListener("click", () => {
          const card = document.querySelector(".during-card");
          setKaraokeLayout(!card.classList.contains("karaoke-mode"));
        });
      }
      const autoplay = wasPlaying || mode === "karaoke"; // karaoke her zaman baştan çalar
      if (autoplay) v.play();
      updatePlayIcon(autoplay);
    };
    v.load();
  }

  /* ── Video kaynaklı kurulum: mp3 yerine videonun sesi çalar,
       görsel panelde kapak (thumbnail) durur, VID sadece kapağı kaldırır ── */
  function mountMainVideo(autoplay) {
    els.audio.pause();
    els.audio.removeAttribute("src");
    if (videoEl) { videoEl.pause(); videoEl.remove(); videoEl = null; }
    const v = document.createElement("video");
    v.src = videoSrc;
    v.playsInline = true;
    v.preload = "auto";
    els.playerVisual.innerHTML = "";
    els.playerVisual.appendChild(v);
    els.playerVisual.appendChild(makeCoverOverlay());
    els.playerVisual.appendChild(makeCensorOverlay());
    v.addEventListener("click", () => {
      const card = document.querySelector(".during-card");
      setKaraokeLayout(!card.classList.contains("karaoke-mode"));
    });
    videoEl = v;
    mediaEl = v;
    videoIsSource = true;
    playerMode = "audio";
    els.videoButton.classList.remove("active");
    els.micButton.classList.remove("active");
    setKaraokeLayout(false);
    autoZoomActive = false;
    coverBaseHidden = false; // audio modunda kapak her zaman görünür
    censorActive = false;
    refreshCoverOverlay();
    attachPlayerEvents(v);
    if (autoplay) v.play();
    updatePlayIcon(!!autoplay);
  }

  /* Video kaynaklı şarkıda VID: kapağı kaldır (video görünür) / geri koy */
  function setVideoVisible(show) {
    coverBaseHidden = show;
    refreshCoverOverlay();
    playerMode = show ? "video" : "audio";
    els.videoButton.classList.toggle("active", show);
    if (!show) { setKaraokeLayout(false); autoZoomActive = false; }
  }

  /* Video modundan kaldığı yerden, karaoke modundan BAŞTAN audio'ya dönülür */
  function switchToAudio() {
    const fromKaraoke = playerMode === "karaoke";
    const wasPlaying = mediaEl && !mediaEl.paused;
    const t = mediaEl ? mediaEl.currentTime : 0;
    if (videoIsSource || (videoSrc && fromKaraoke)) {
      /* video kaynaklı şarkı: kapak görünümüyle baştan kur */
      mountMainVideo(wasPlaying || fromKaraoke);
      return;
    }
    if (videoEl) { videoEl.pause(); videoEl.remove(); videoEl = null; }
    if (fromKaraoke) {
      els.audio.pause();
      els.audio.src = song.audio;
      els.audio.load();
    }
    els.audio.currentTime = (!fromKaraoke && isFinite(els.audio.duration) && t < els.audio.duration) ? t : 0;
    showCoverVisual();
    mediaEl = els.audio;
    attachPlayerEvents(mediaEl);
    playerMode = "audio";
    els.videoButton.classList.remove("active");
    els.micButton.classList.remove("active");
    setKaraokeLayout(false);
    autoZoomActive = false;
    const autoplay = wasPlaying || fromKaraoke; // karaoke'den çıkınca mp3 baştan çalar
    if (autoplay) els.audio.play();
    updatePlayIcon(autoplay);
  }

  function buildDuringStage() {
    /* — Player — */
    els.playerTitle.textContent = song.title;
    els.playerArtist.textContent = song.artist || "";
    if (videoEl) { videoEl.pause(); videoEl.remove(); videoEl = null; }
    playerMode = "audio";
    videoIsSource = false;
    els.videoButton.classList.remove("active");
    els.micButton.classList.remove("active");
    setKaraokeLayout(false);
    showCoverVisual();
    els.audio.pause();
    els.audio.src = song.audio;
    els.audio.load();
    mediaEl = els.audio;
    els.playerProgressBar.style.width = "0";
    els.playerTimeNow.textContent = "0:00";
    els.playerTimeTotal.textContent = "0:00";
    updatePlayIcon(false);
    attachPlayerEvents(mediaEl);

    /* — Video / karaoke dosyaları var mı? Bulunursa ilgili buton aktifleşir — */
    const probeFor = (candidates, onFound) => {
      const probe = document.createElement("video");
      probe.preload = "metadata";
      candidates.forEach((src) => {
        const source = document.createElement("source");
        source.src = src;
        probe.appendChild(source);
      });
      probe.onloadedmetadata = () => onFound(probe.currentSrc);
      probe.load();
    };
    const probeAudioFor = (candidates, onFound) => {
      const probe = document.createElement("audio");
      probe.preload = "metadata";
      candidates.forEach((src) => {
        const source = document.createElement("source");
        source.src = src;
        probe.appendChild(source);
      });
      probe.onloadedmetadata = () => onFound(probe.currentSrc);
      probe.load();
    };
    const thisSong = song; // probe geç dönerse şarkı değişmiş olabilir
    videoSrc = null;
    els.videoButton.disabled = true;
    probeFor(getVideoCandidates(song), (src) => {
      if (song !== thisSong) return;
      videoSrc = src;
      els.videoButton.disabled = false;
      /* Video varsa mp3'e gerek yok: çalma henüz başlamadıysa ses
         kaynağını videoya devret (görselde kapak durur) */
      if (mediaEl === els.audio && els.audio.paused && els.audio.currentTime < 0.3 && playerMode === "audio") {
        mountMainVideo(false);
      }
    });
    karaokeSrc = null;
    els.micButton.disabled = true;
    probeAudioFor(getKaraokeCandidates(song), (src) => {
      if (song !== thisSong) return;
      karaokeSrc = src;
      els.micButton.disabled = false;
    });

    /* — Sözler + boşluklar — */
    selectedChip = null;
    els.lyricsBox.innerHTML = "";
    karaokeLines = [];
    karaokeIdx = -1;
    const gapCount = {}; // kelime → kaç boşlukta geçiyor

    song.lyrics.forEach((raw) => {
      /* Satır düz string ("...") veya zamanlı obje ({from, to, text}) olabilir */
      const item = typeof raw === "string" ? { text: raw } : raw;
      const line = item.text;
      const p = document.createElement("p");
      p.className = "lyric-line";
      line.split(/(<[^>]+>)/).forEach((tok) => {
        if (tok.startsWith("<") && tok.endsWith(">")) {
          const word = tok.slice(1, -1).trim();
          gapCount[word.toLowerCase()] = (gapCount[word.toLowerCase()] || 0) + 1;
          const gap = document.createElement("span");
          gap.className = "lyric-gap";
          gap.dataset.word = word.toLowerCase();
          gap.textContent = "· · ·";
          gap.addEventListener("click", () => {
            if (selectedChip && !gap.classList.contains("filled")) {
              const chip = selectedChip;
              selectChip(chip);
              tryFillGap(chip, gap, word);
            }
          });
          p.appendChild(gap);
        } else if (tok) {
          p.appendChild(document.createTextNode(tok));
        }
      });
      els.lyricsBox.appendChild(p);
      const from = parseTime(item.from);
      if (from != null) karaokeLines.push({ from, to: parseTime(item.to), el: p });
    });
    /* to yazılmamışsa satır bir sonraki satırın başlangıcına kadar sürer */
    karaokeLines.forEach((k, i) => {
      if (k.to == null) k.to = karaokeLines[i + 1] ? karaokeLines[i + 1].from : Infinity;
    });
    /* FALLBACK: ilk satırda from ve to ikisi de 0 ise karaoke devre dışı */
    const firstLine = song.lyrics[0];
    if (firstLine && typeof firstLine !== "string" &&
        parseTime(firstLine.from) === 0 && parseTime(firstLine.to) === 0) {
      karaokeLines = [];
    }

    /* — VID otomatik büyüme pencereleri: satırlar arası uzun enstrümantal
         aralıklarda (> AUTOZOOM_GAP sn) video kendiliğinden geniş ekrana
         geçer, sonraki satıra AUTOZOOM_LEAD sn kala geri küçülür — */
    autoZoomWindows = [];
    autoZoomActive = false;
    autoZoomGap = (typeof song.zoomgap === "number") ? song.zoomgap : 8;
    const zoomEnabled = song.zoomfactor !== false; // songs.js'te yazmazsan/true ise açık
    if (zoomEnabled && karaokeLines.length) {
      const first = karaokeLines[0];
      if (first.from > autoZoomGap) autoZoomWindows.push({ start: 0, end: first.from - AUTOZOOM_LEAD });
      for (let i = 0; i < karaokeLines.length - 1; i++) {
        const gap = karaokeLines[i + 1].from - karaokeLines[i].to;
        if (gap > autoZoomGap) {
          autoZoomWindows.push({ start: karaokeLines[i].to, end: karaokeLines[i + 1].from - AUTOZOOM_LEAD });
        }
      }
      const last = karaokeLines[karaokeLines.length - 1];
      if (isFinite(last.to)) autoZoomWindows.push({ start: last.to, end: Infinity }); // outro
    }

    /* — Climax anları: {at, to} → saniyeye çevir.
         to = bitiş anı; eski format {at, duration} da desteklenir — */
    stopClimax();
    const parseClimax = (arr) => (arr || [])
      .map((c) => {
        const at = parseTime(c.at);
        let end = parseTime(c.to);
        if (end == null) end = at != null ? at + (parseTime(c.duration) ?? 5) : null;
        return { at, end };
      })
      .filter((c) => c.at != null && c.end != null && c.end > c.at);
    climaxMoments = parseClimax(song.climax);
    karaokeClimaxMoments = parseClimax(song.kareoke_climax);

    /* — Sansür pencereleri: {at, to} → aynı parseClimax mantığıyla — */
    censoredWindows = parseClimax(song.censored);
    karaokeCensoredWindows = parseClimax(song.kareoke_censored);
    censorActive = false;

    /* — videoclose: bu saniyede video kapanıp mp3 + kapağa dönülür — */
    videoCloseAt = parseTime(song.videoclose);
    lastMediaT = 0;

    /* — Kelime bankası: 8 kelime + (varsa) sözlerde geçen ekstra boşluk kelimeleri — */
    els.duringWordBank.innerHTML = "";
    els.duringWordBank.classList.remove("hidden");
    els.autofillButton.disabled = false;
    const bankWords = song.words.map((w) => w.word);
    Object.keys(gapCount).forEach((w) => {
      if (!bankWords.some((b) => b.toLowerCase() === w)) bankWords.push(w);
    });
    shuffle(bankWords).forEach((word) => {
      const chip = document.createElement("div");
      chip.className = "word-chip";
      chip.textContent = word;
      chip.dataset.word = word.toLowerCase();
      if (!gapCount[word.toLowerCase()]) chip.classList.add("placed"); // sözlerde boşluğu yoksa pasif
      makeDraggable(chip, {
        canDrag: () => !chip.classList.contains("placed"),
        targetSelector: ".lyric-gap:not(.filled)",
        onHover: (t, on) => t.classList.toggle("hover", on),
        onDrop: (t) => { if (t) tryFillGap(chip, t, chip.textContent); },
        onTap: () => selectChip(chip)
      });
      els.duringWordBank.appendChild(chip);
    });
  }

  function tryFillGap(chip, gap, displayWord) {
    if (gap.dataset.word === chip.dataset.word) {
      /* Aynı kelimenin TÜM boşlukları birlikte dolar — böylece kelime
         sözlerin başka yerinde açıkta görünüp cevabı ele vermez */
      const family = els.lyricsBox.querySelectorAll(
        `.lyric-gap[data-word="${CSS.escape(chip.dataset.word)}"]:not(.filled)`
      );
      family.forEach((g) => {
        g.textContent = g.dataset.word;
        g.classList.add("filled");
        if (g !== gap) g.classList.add("auto-filled"); // kardeş boşluklara pop efekti
      });
      playSfx(sfxCorrect);
      window.TeacherControl?.onCorrect();
      window.StudentGame?.onCorrect();
      chip.classList.add("placed");
      chip.classList.remove("selected");
      if (selectedChip === chip) selectedChip = null;
      const gaps = els.lyricsBox.querySelectorAll(".lyric-gap");
      const filled = els.lyricsBox.querySelectorAll(".lyric-gap.filled");
      if (gaps.length === filled.length) {
        completeStage();
        ToastManager.show("🎉 ALL GAPS FILLED! PRESS FINISH.", null, 4000);
      }
    } else {
      ToastManager.show("❌ TRY AGAIN!", "warn", 2200);
      window.StudentGame?.onWrong();
      gap.classList.add("wrong");
      setTimeout(() => gap.classList.remove("wrong"), 420);
    }
    updateStatus();
  }

  /* — Player kontrolleri — */
  els.playButton.addEventListener("click", () => {
    if (!mediaEl) return;
    if (mediaEl.paused) mediaEl.play(); else mediaEl.pause();
  });
  els.videoButton.addEventListener("click", () => {
    if (playerMode === "karaoke") return;
    if (videoIsSource) { setVideoVisible(playerMode !== "video"); return; }
    if (playerMode === "video") switchToAudio();
    else if (videoSrc) enterVideoMode([videoSrc], "video");
  });
  els.micButton.addEventListener("click", () => {
    if (playerMode === "karaoke") switchToAudio();
    else if (karaokeSrc) enterKaraokeAudio(karaokeSrc);
  });
  els.autofillButton.addEventListener("click", autofillLyrics);
  els.replayButton.addEventListener("click", () => { if (mediaEl) { mediaEl.currentTime = 0; mediaEl.play(); } });
  els.playerProgress.addEventListener("click", (ev) => {
    if (!mediaEl || !mediaEl.duration) return;
    const r = els.playerProgress.getBoundingClientRect();
    mediaEl.currentTime = ((ev.clientX - r.left) / r.width) * mediaEl.duration;
  });

  /* ════════════════════════════════════════════════════════════════════
     NAVİGASYON
     ════════════════════════════════════════════════════════════════════ */
  els.nextButton.addEventListener("click", () => {
    if (stage !== 0 && !stageDone[stage]) return;
    if (stage === 1) {
      els.completeSummary.textContent =
        `"${song.title}" — you matched all ${song.words.length} words and filled every gap. 👏`;
      if (mediaEl) mediaEl.pause();
      showScreen("complete");
    } else {
      setStage(stage + 1);
    }
  });
  els.prevButton.addEventListener("click", () => { if (stage > 0) setStage(stage - 1); });
  els.backButton.addEventListener("click", () => { if (mediaEl) mediaEl.pause(); showScreen("library"); });
  els.libraryButton.addEventListener("click", () => showScreen("library"));
  els.restartButton.addEventListener("click", () => startSong(song));

  els.fullscreenButton.addEventListener("click", () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen();
  });

  /* LITE: düşük performans modu — climax emoji efektlerini kapatır */
  function applyLite() {
    els.liteButton.classList.toggle("lite-on", liteMode);
    if (liteMode) stopClimax();
  }
  els.liteButton.addEventListener("click", () => {
    liteMode = !liteMode;
    applyLite();
  });

  els.resetProgressButton.addEventListener("click", () => {
    localStorage.removeItem(LISTENED_KEY);
    renderLibrary();
    ToastManager.show("✅ LISTENING HISTORY RESET", null, 3000);
  });

  function returnToMenu() {
    if (mediaEl) mediaEl.pause();
    location.href = new URLSearchParams(location.search).get("mode") === "student"
      ? "../student-zone/index.html"
      : "../index.html";
  }
  els.menuReturnButton.addEventListener("click", returnToMenu);
  els.cornerMenuReturnButton.addEventListener("click", returnToMenu);

  /* Sekme gizlenince müziği durdur (smartboard performansı) */
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && mediaEl && !mediaEl.paused) mediaEl.pause();
  });

  /* ── Başlat ── */
  ToastManager.init({ top: "84px", position: "left" });
  renderLibrary();
})();
