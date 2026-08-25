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
  const isStudentMode = new URLSearchParams(window.location.search).get("mode") === "student";
  const PRIVATE_MEDIA_ORIGIN = "https://private-media.adilhoca.com";
  const ARTIST_SPOTIFY = {
    Ella: "https://open.spotify.com/artist/5bMPXxCpR4PFSQSHzu0BLK"
  };

  const els = {
    library: $("libraryScreen"), activity: $("activityScreen"), complete: $("completeScreen"),
    songGrid: $("songGrid"),
    filterBar: $("libraryFilterBar"), artistFilterName: $("artistFilterName"), artistBackButton: $("artistBackButton"),
    backButton: $("backButton"), fullscreenButton: $("fullscreenButton"), liteButton: $("liteButton"),
    artistLabel: $("songArtistLabel"), titleLabel: $("songTitleLabel"),
    stages: [$("preStage"), $("duringStage"), $("trainingStage")],
    prevButton: $("prevStageButton"), nextButton: $("nextStageButton"), stageStatus: $("stageStatus"),
    preWordBank: $("preWordBank"), preImageGrid: $("preImageGrid"),
    playerVisual: $("playerVisual"), playerTitle: $("playerSongTitle"), playerArtist: $("playerSongArtist"), spotifyButton: $("spotifyButton"),
    playerProgress: $("playerProgress"), playerProgressBar: $("playerProgressBar"),
    playerTimeNow: $("playerTimeNow"), playerTimeTotal: $("playerTimeTotal"),
    playButton: $("playButton"), videoButton: $("videoButton"), micButton: $("micButton"), replayButton: $("replayButton"),
    duringWordBank: $("duringWordBank"), autofillButton: $("autofillButton"), lyricsBox: $("lyricsBox"),
    trainingVideo: $("trainingVideo"), trainingPrompt: $("trainingPrompt"), trainingLine: $("trainingLine"),
    trainingChoices: $("trainingChoices"), trainingRehearButton: $("trainingRehearButton"), trainingReplayPrompt: $("trainingReplayPrompt"), trainingReplayTitle: $("trainingReplayTitle"), trainingReplayMessage: $("trainingReplayMessage"), trainingReplayYesButton: $("trainingReplayYesButton"), trainingReplayFinishButton: $("trainingReplayFinishButton"),
    duelReadyOverlay: $("duelReadyOverlay"), duelCurrentPlayer: $("duelCurrentPlayer"), duelReadyPlayer: $("duelReadyPlayer"), duelReadyTeams: $("duelReadyTeams"), duelBeginButton: $("duelBeginButton"),
    duelScoreboard: $("duelScoreboard"), teamAScore: $("teamAScore"), teamBScore: $("teamBScore"),
    teamAPlayer: $("teamAPlayer"), teamBPlayer: $("teamBPlayer"), duelTurnName: $("duelTurnName"), duelNextPlayer: $("duelNextPlayer"),
    duelSetupOverlay: $("duelSetupOverlay"), duelSetupSubtitle: $("duelSetupSubtitle"), duelTeamInputs: $("duelTeamInputs"), duelTempoPicker: $("duelTempoPicker"), duelModePicker: $("duelModePicker"), duelSetupMessage: $("duelSetupMessage"),
    duelRosterButton: $("duelRosterButton"), duelAddAButton: $("duelAddAButton"), duelAddBButton: $("duelAddBButton"), duelSetupStartButton: $("duelSetupStartButton"), duelTempoSlowButton: $("duelTempoSlowButton"), duelTempoNormalButton: $("duelTempoNormalButton"), duelModeNormalButton: $("duelModeNormalButton"), duelModeFastButton: $("duelModeFastButton"),
    duelRosterOverlay: $("duelRosterOverlay"), duelRosterCloseButton: $("duelRosterCloseButton"), duelRosterClassList: $("duelRosterClassList"), duelRosterMessage: $("duelRosterMessage"),
    restartButton: $("restartButton"), libraryButton: $("libraryButton"), resetProgressButton: $("resetProgressButton"),
    privateLibraryButton: $("privateLibraryButton"),
    menuReturnButton: $("menuReturnButton"), cornerMenuReturnButton: $("cornerMenuReturnButton"),
    completeSummary: $("completeSummary"), duelFinalScores: $("duelFinalScores"), duelFinalResult: $("duelFinalResult"), duelFinalWinnerPoints: $("duelFinalWinnerPoints"), duelFinalScoreSummary: $("duelFinalScoreSummary"), duelFinalHighScores: $("duelFinalHighScores"), duelFinalTeamLists: $("duelFinalTeamLists"), duelFinalTransferNote: $("duelFinalTransferNote"), duelFinalTransferButton: $("duelFinalTransferButton"),
    audio: $("songAudio")
  };

  /* ── Ses efektleri ── */
  const sfxCorrect = new Audio("sounds/correct.mp3");
  const sfxWrong   = new Audio("sounds/wrong.mp3");
  function playSfx(a) { try { a.currentTime = 0; a.play(); } catch (_) {} }
  let songPlaybackRate = 1;
  let trainingMode = "normal";
  function applySongTempo(media) {
    media.playbackRate = songPlaybackRate;
    media.defaultPlaybackRate = songPlaybackRate;
    media.preservesPitch = true;
    media.webkitPreservesPitch = true;
  }

  /* ── Durum ── */
  let song = null;            // aktif şarkı verisi
  let stage = 0;              // 0=pre 1=during
  let stageDone = [false, false, false];
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
  let privateSongs = [];
  let privateLibraryLoaded = false;
  let karaokeLines = [];      // zamanlı söz satırları: {from, to, el}
  let karaokeIdx = -1;        // aktif satır indeksi
  let trainingTasks = [];
  let trainingTaskIndex = -1;
  let trainingStarted = false;
  let trainingWaiting = false;
  let trainingAnswered = false;
  let trainingAnsweredCount = 0;
  let trainingRound = 1;
  let trainingBlockSet = 0;
  let duelRoundNumber = 1;
  let duelRoundEnding = false;
  let trainingFadeFrame = null;
  let trainingPauseTimer = null;
  let duelTeams = [[], []];
  let duelPlayerIndex = [0, 0];
  let duelScores = [0, 0];
  let duelStudentScores = [[], []];
  let duelRoundPending = [new Set(), new Set()];
  let duelFinalScoresTransferred = false;
  let duelTurn = 0;
  let duelReady = false;
  let duelPausedPoints = 10;
  let duelPenaltyTimer = null;
  let duelReadyOverlayTimer = null;
  let duelRosterClassroomId = "";
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
    els.activity.classList.toggle("duel-stage", n === 2 && !isStudentMode);
    els.duelScoreboard.classList.toggle("hidden", n !== 2 || !duelReady);
    els.prevButton.classList.toggle("invisible", n === 0);
    els.nextButton.textContent = n === 2 ? "FINISH ✓" : "NEXT →";
    els.nextButton.disabled = n === 2 && !stageDone[2];
    if (n !== 1 && mediaEl && !mediaEl.paused) mediaEl.pause();
    if (n === 2 && !trainingStarted && !stageDone[2]) {
      if (isStudentMode || duelReady) startTraining();
      else openDuelSetup();
    }
    if (n !== 2) stopTraining();
    updateStatus();
  }

  function updateStatus() {
    let txt = "";
    if (stage === 0) {
      const done = els.preImageGrid.querySelectorAll(".pre-item.done").length;
      txt = done + " / " + song.words.length + " MATCHED";
    } else if (stage === 1) {
      const gaps = els.lyricsBox.querySelectorAll(".lyric-gap");
      const filled = els.lyricsBox.querySelectorAll(".lyric-gap.filled");
      txt = filled.length + " / " + gaps.length + " GAPS FILLED";
    } else {
      txt = trainingAnsweredCount + " / " + trainingTasks.length + " ROUNDS ANSWERED";
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
     TEAM DUEL · roster, challengers and score
     ════════════════════════════════════════════════════════════════════ */
  function resetDuel() {
    duelTeams = [[""], [""]];
    duelPlayerIndex = [0, 0];
    duelScores = [0, 0];
    duelStudentScores = [[], []];
    duelRoundPending = [new Set(), new Set()];
    duelFinalScoresTransferred = false;
    duelTurn = 0;
    duelReady = false;
    duelPausedPoints = 10;
    songPlaybackRate = 1;
    trainingMode = "normal";
    trainingBlockSet = 0;
    duelRoundNumber = 1;
    duelRosterClassroomId = "";
    clearDuelPenalty();
    if (duelReadyOverlayTimer) clearTimeout(duelReadyOverlayTimer);
    duelReadyOverlayTimer = null;
    renderDuelReadyTeams();
    els.duelReadyOverlay.classList.remove("hidden");
    els.duelScoreboard.classList.add("hidden");
    els.duelFinalScores.classList.add("hidden");
  }

  function rosterTodayKey() {
    const now = new Date();
    return new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  }

  function rosterScore(student) { return (Number(student?.points) || 0) + ((Number(student?.stars) || 0) * 10); }

  function renderDuelTeamInputs() {
    els.duelTeamInputs.innerHTML = "";
    [0, 1].forEach((team) => {
      const column = document.createElement("section");
      column.className = "duel-team-column team-" + (team === 0 ? "a" : "b");
      column.innerHTML = `<h3>TEAM ${team === 0 ? "A" : "B"}</h3>`;
      duelTeams[team].forEach((name, index) => {
        const input = document.createElement("input");
        input.className = "duel-student-input";
        input.placeholder = "Student name";
        input.value = name;
        input.addEventListener("input", () => { duelTeams[team][index] = input.value; });
        column.appendChild(input);
      });
      els.duelTeamInputs.appendChild(column);
    });
  }

  function openDuelSetup() {
    els.duelSetupOverlay.classList.remove("hidden");
    els.duelSetupSubtitle.textContent = "Create Team A and Team B. Students will play in the order shown.";
    els.duelTempoPicker.classList.add("hidden");
    els.duelModePicker.classList.add("hidden");
    els.duelTeamInputs.classList.remove("hidden");
    els.duelRosterButton.hidden = false;
    els.duelAddAButton.hidden = false;
    els.duelAddBButton.hidden = false;
    els.duelSetupStartButton.hidden = false;
    els.duelSetupStartButton.textContent = "START TEAM DUEL →";
    els.duelSetupMessage.textContent = "";
    renderDuelTeamInputs();
  }

  function cleanDuelTeams() { duelTeams = duelTeams.map((team) => team.map((name) => String(name || "").trim()).filter(Boolean)); }

  function showTempoPicker() {
    cleanDuelTeams();
    if (!duelTeams[0].length || !duelTeams[1].length) { els.duelSetupMessage.textContent = "Add at least one student to both teams."; return; }
    els.duelSetupSubtitle.textContent = "Choose the tempo for this team duel.";
    els.duelTeamInputs.classList.add("hidden");
    els.duelTempoPicker.classList.remove("hidden");
    els.duelModePicker.classList.add("hidden");
    els.duelRosterButton.hidden = true;
    els.duelAddAButton.hidden = true;
    els.duelAddBButton.hidden = true;
    els.duelSetupStartButton.hidden = true;
    els.duelSetupMessage.textContent = "";
  }

  function showModePicker() {
    els.duelSetupSubtitle.textContent = "Choose how often students answer during the song.";
    els.duelTempoPicker.classList.add("hidden");
    els.duelModePicker.classList.remove("hidden");
  }

  function duelPlayer(team) { return duelTeams[team][duelPlayerIndex[team]] || null; }

  function updateDuelScoreboard() {
    els.teamAScore.textContent = duelScores[0];
    els.teamBScore.textContent = duelScores[1];
    els.teamAPlayer.textContent = duelPlayer(0) || "OUT";
    els.teamBPlayer.textContent = duelPlayer(1) || "OUT";
    const active = duelPlayer(duelTurn) || "TEAM " + (duelTurn === 0 ? "A" : "B");
    const next = duelPlayer(duelTurn === 0 ? 1 : 0) || "—";
    els.duelTurnName.textContent = active.toUpperCase();
    els.duelNextPlayer.textContent = "NEXT PLAYER: " + next.toUpperCase();
  }

  function renderDuelReadyTeams() {
    const nextTeam = duelTurn === 0 ? 1 : 0;
    els.duelReadyTeams.innerHTML = [0, 1].map((team) => `<section><h4>TEAM ${team === 0 ? "A" : "B"}</h4>${duelTeams[team].map((name, index) => `<span class="${team === duelTurn && index === duelPlayerIndex[team] ? "active" : team === nextTeam && index === duelPlayerIndex[team] ? "next" : ""}"><b>${name}</b><em>${duelStudentScores[team]?.[index] || 0} PTS</em></span>`).join("")}</section>`).join("");
  }

  function startDuel() {
    cleanDuelTeams();
    if (!duelTeams[0].length || !duelTeams[1].length) { els.duelSetupMessage.textContent = "Add at least one student to both teams."; return; }
    duelReady = true;
    duelScores = [0, 0];
    duelStudentScores = duelTeams.map((team) => team.map(() => 0));
    duelRoundPending = duelTeams.map((team) => new Set(team.map((_, index) => index)));
    trainingBlockSet = 0;
    buildTrainingStage();
    duelRoundNumber = 1;
    duelFinalScoresTransferred = false;
    duelTurn = 0;
    duelPausedPoints = 10;
    els.duelSetupOverlay.classList.add("hidden");
    els.duelScoreboard.classList.remove("hidden");
    updateDuelScoreboard();
    els.duelCurrentPlayer.textContent = duelPlayer(duelTurn) || "PLAYER";
    els.duelReadyPlayer.textContent = duelPlayer(duelTurn === 0 ? 1 : 0) || "PLAYER";
    renderDuelReadyTeams();
    els.duelReadyOverlay.classList.add("duel-intro");
    els.duelReadyOverlay.classList.remove("hidden");
  }

  function switchDuelTurn() {
    duelTurn = duelTurn === 0 ? 1 : 0;
    duelPausedPoints = 10;
    updateDuelScoreboard();
    announceDuelPlayer();
  }

  function announceDuelPlayer() {
    if (!duelReady) return;
    if (duelReadyOverlayTimer) clearTimeout(duelReadyOverlayTimer);
    els.duelReadyOverlay.classList.remove("duel-intro");
    els.duelCurrentPlayer.textContent = duelPlayer(duelTurn) || "PLAYER";
    els.duelReadyPlayer.textContent = duelPlayer(duelTurn === 0 ? 1 : 0) || "PLAYER";
    renderDuelReadyTeams();
    els.duelReadyOverlay.classList.remove("hidden");
    if (!videoSrc) return;
    duelReadyOverlayTimer = setTimeout(() => {
      els.duelReadyOverlay.classList.add("hidden");
      duelReadyOverlayTimer = null;
    }, 2000);
  }

  function eliminateCurrentDuelPlayer() {
    duelPlayerIndex[duelTurn] = (duelPlayerIndex[duelTurn] + 1) % duelTeams[duelTurn].length;
    return false;
  }

  function markDuelRoundTurn() { duelRoundPending[duelTurn].delete(duelPlayerIndex[duelTurn]); }
  function hasFullDuelRound() { return duelRoundPending.every((pending) => pending.size === 0); }

  function getDuelFinalAwards() {
    const isDraw = duelScores[0] === duelScores[1];
    const winningTeam = duelScores[0] > duelScores[1] ? 0 : 1;
    const overallTop = Math.max(0, ...duelStudentScores.flat());
    return [0, 1].flatMap((team) => {
      const teamTop = Math.max(0, ...(duelStudentScores[team] || []));
      return duelTeams[team].map((name, index) => {
        const points = Number(duelStudentScores[team][index]) || 0;
        let stars;
        if (isDraw) stars = points > 0 ? 3 : 1;
        else stars = points > 0 ? (team === winningTeam ? 3 : 2) : (team === winningTeam ? 1 : 0);
        if (points > 0 && points === teamTop) stars += 1;
        if (!isDraw && points > 0 && points === overallTop && team !== winningTeam) stars += 1;
        return { team, name, points, stars };
      });
    });
  }

  function renderDuelFinalScores() {
    if (!duelReady) { els.duelFinalScores.classList.add("hidden"); return; }
    const awards = getDuelFinalAwards();
    const isDraw = duelScores[0] === duelScores[1];
    const winningTeam = duelScores[0] > duelScores[1] ? 0 : 1;
    const winner = winningTeam === 0 ? "TEAM A WINS!" : "TEAM B WINS!";
    els.duelFinalResult.textContent = isDraw ? "IT'S A DRAW!" : winner;
    els.duelFinalWinnerPoints.textContent = isDraw ? duelScores[0] : duelScores[winningTeam];
    els.duelFinalScoreSummary.innerHTML = [0, 1].map((team) => `<p class="${!isDraw && team === winningTeam ? "w-top" : ""}"><span>TEAM ${team === 0 ? "A" : "B"}</span><strong>${duelScores[team]} pts</strong></p>`).join("");
    const rankedAwards = [...awards].sort((a, b) => b.points - a.points || b.stars - a.stars || a.name.localeCompare(b.name));
    els.duelFinalHighScores.innerHTML = rankedAwards.map((award, index) => {
      const medal = index === 0 ? "sp-gold" : index === 1 ? "sp-silver" : index === 2 ? "sp-bronze" : "";
      return `<div class="sp-row ${medal}"><span class="sp-rk">${index + 1}</span><div class="sp-info"><div class="sp-name">${award.name}</div><div class="sp-grp">TEAM ${award.team === 0 ? "A" : "B"}</div></div><strong class="sp-pts">${award.points}</strong></div>`;
    }).join("");
    els.duelFinalTeamLists.innerHTML = [0, 1].map((team) => {
      const teamAwards = awards.filter((award) => award.team === team).sort((a, b) => b.points - a.points || a.name.localeCompare(b.name));
      const teamTop = Math.max(0, ...teamAwards.map((award) => award.points));
      return `<section class="sg-col"><div class="sg-hdr">TEAM ${team === 0 ? "A" : "B"}</div><div class="sg-total">${duelScores[team]} POINTS</div>${teamAwards.map((award, index) => `<div class="sg-row ${award.points > 0 && award.points === teamTop ? "sg-top" : ""}"><span class="sg-rank">${index + 1}</span><strong class="sg-sname">${award.name}</strong><span class="sg-stars">${"★".repeat(award.stars)}</span><strong class="sg-spts">${award.points}</strong></div>`).join("")}</section>`;
    }).join("");
    const canTransfer = !!duelRosterClassroomId && typeof window.TeacherControl?.awardFinalPoints === "function";
    els.duelFinalTransferButton.hidden = !canTransfer;
    els.duelFinalTransferButton.disabled = duelFinalScoresTransferred;
    els.duelFinalTransferButton.textContent = duelFinalScoresTransferred ? "✓ PUANLAR AKTARILDI" : "⭐ YILDIZLARI PUANA AKTAR";
    els.duelFinalTransferNote.textContent = canTransfer ? "Each star transfers as 5 roster points." : "Roster transfer is available when the class is imported from the roster.";
    els.duelFinalScores.classList.remove("hidden");
  }

  function transferDuelFinalScores() {
    if (duelFinalScoresTransferred || !duelRosterClassroomId || typeof window.TeacherControl?.awardFinalPoints !== "function") return;
    const awards = getDuelFinalAwards().filter((award) => award.name && award.stars > 0).map((award) => ({ name: award.name, points: award.stars * 5 }));
    const result = window.TeacherControl.awardFinalPoints(awards, duelRosterClassroomId);
    if (!result?.awarded?.length) { ToastManager.show("NO MATCHING ROSTER STUDENTS FOUND", "warn", 3000); return; }
    duelFinalScoresTransferred = true;
    renderDuelFinalScores();
  }

  function clearDuelPenalty() {
    if (duelPenaltyTimer) clearInterval(duelPenaltyTimer);
    duelPenaltyTimer = null;
    duelPausedPoints = 10;
  }

  function showTrainingCountdown(points) {
    const spinner = els.trainingLine.querySelector(".training-spinner");
    if (!spinner) return;
    spinner.classList.add("countdown");
    spinner.textContent = points;
  }

  function setRehearEnabled(enabled) {
    els.trainingRehearButton.disabled = !enabled;
  }

  function forfeitDuelTurn(waitForBlockEnd = false, target = "", playSound = true) {
    clearDuelPenalty();
    if (playSound) playSfx(sfxWrong);
    markDuelRoundTurn();
    eliminateCurrentDuelPlayer();
    switchDuelTurn();
    const finishAfterLine = hasFullDuelRound() && waitForBlockEnd && !trainingWaiting;
    if (hasFullDuelRound() && !finishAfterLine) { finishDuelRound(); return; }
    if (finishAfterLine) duelRoundEnding = true;
    if (waitForBlockEnd) {
      trainingAnswered = true;
      els.trainingChoices.querySelectorAll("button").forEach((choiceButton) => { choiceButton.disabled = true; });
      const gap = els.trainingLine.querySelector(".training-gap");
      if (gap) {
        gap.classList.remove("training-spinner");
        gap.textContent = target;
      }
      els.trainingPrompt.textContent = "Wrong answer — listen to the end of the block.";
      return;
    }
    advanceTrainingTask();
  }

  function finishDuelRound() {
    duelRoundEnding = false;
    if (duelReadyOverlayTimer) clearTimeout(duelReadyOverlayTimer);
    duelReadyOverlayTimer = null;
    els.duelReadyOverlay.classList.add("hidden");
    trainingWaiting = true;
    els.trainingVideo.pause();
    showTrainingReplayPrompt();
  }

  function beginDuelPausePenalty() {
    if (!duelReady) return;
    clearDuelPenalty();
    duelPausedPoints = 10;
    showTrainingCountdown(duelPausedPoints);
    updateDuelScoreboard();
    duelPenaltyTimer = setInterval(() => {
      duelPausedPoints--;
      showTrainingCountdown(duelPausedPoints);
      updateDuelScoreboard();
      if (duelPausedPoints <= 0) forfeitDuelTurn();
    }, 1000);
  }

  function openDuelRosterPicker() {
    const classrooms = window.TeacherControl?.getClassrooms?.() || [];
    const usable = classrooms.filter((classroom) => Array.isArray(classroom.roster) && classroom.roster.some((student) => String(student?.name || "").trim()));
    els.duelRosterClassList.innerHTML = "";
    els.duelRosterMessage.textContent = "";
    els.duelRosterOverlay.classList.remove("hidden");
    if (!usable.length) { els.duelRosterMessage.textContent = "Create or sync a class roster from the teacher HUD first."; return; }
    usable.forEach((classroom) => {
      const absent = classroom.attendanceDate === rosterTodayKey() ? new Set(classroom.absentStudentIds || []) : new Set();
      const present = (classroom.roster || []).filter((student) => String(student?.name || "").trim() && !absent.has(student.id));
      const button = document.createElement("button");
      button.type = "button";
      button.className = "duel-roster-class";
      button.innerHTML = `<strong>${classroom.name || "CLASS"}</strong><span>${present.length} present students</span>`;
      button.addEventListener("click", () => importDuelRoster(classroom, present));
      els.duelRosterClassList.appendChild(button);
    });
  }

  function importDuelRoster(classroom, present) {
    if (!present.length) { els.duelRosterMessage.textContent = "There are no present students in this class today."; return; }
    const sorted = present.slice().sort((a, b) => rosterScore(b) - rosterScore(a) || String(a.name).localeCompare(String(b.name), "tr", { sensitivity: "base" }));
    const order = [0, 1, 1, 0];
    duelTeams = [[], []];
    sorted.forEach((student, index) => duelTeams[order[index % order.length]].push(String(student.name).trim()));
    duelRosterClassroomId = classroom.id;
    els.duelRosterOverlay.classList.add("hidden");
    renderDuelTeamInputs();
    els.duelSetupMessage.textContent = `${classroom.name}: ${present.length} present students balanced across Team A and Team B.`;
  }

  els.duelAddAButton.addEventListener("click", () => { duelTeams[0].push(""); renderDuelTeamInputs(); });
  els.duelAddBButton.addEventListener("click", () => { duelTeams[1].push(""); renderDuelTeamInputs(); });
  els.duelRosterButton.addEventListener("click", openDuelRosterPicker);
  els.duelRosterCloseButton.addEventListener("click", () => els.duelRosterOverlay.classList.add("hidden"));
  els.duelSetupStartButton.addEventListener("click", () => {
    showTempoPicker();
  });
  els.duelTempoSlowButton.addEventListener("click", () => { songPlaybackRate = 0.85; showModePicker(); });
  els.duelTempoNormalButton.addEventListener("click", () => { songPlaybackRate = 1; showModePicker(); });
  els.duelModeNormalButton.addEventListener("click", () => { trainingMode = "normal"; startDuel(); });
  els.duelModeFastButton.addEventListener("click", () => { trainingMode = "fast"; startDuel(); });
  els.duelFinalTransferButton.addEventListener("click", transferDuelFinalScores);
  els.duelBeginButton.addEventListener("click", () => {
    if (!duelReady || !els.duelReadyOverlay.classList.contains("duel-intro")) return;
    els.duelReadyOverlay.classList.remove("duel-intro");
    if (videoSrc) els.duelReadyOverlay.classList.add("hidden");
    startTraining();
  });

  /* ════════════════════════════════════════════════════════════════════
     LIBRARY
     ════════════════════════════════════════════════════════════════════ */
  function getLibrarySongs() {
    return [...(window.SONGS || []), ...privateSongs];
  }

  function privateMediaUrl(value) {
    if (!value || /^(?:https?:)?\/\//i.test(value)) return value;
    return `${PRIVATE_MEDIA_ORIGIN}/media/${value.replace(/^\/+/, "")}`;
  }

  function normalizePrivateSong(songData) {
    const privateSong = { ...songData };
    ["audio", "video", "karaoke", "image"].forEach((field) => {
      privateSong[field] = privateMediaUrl(privateSong[field]);
    });
    privateSong.words = (privateSong.words || []).map((word) => ({
      ...word,
      image: privateMediaUrl(word.image)
    }));
    return privateSong;
  }

  async function loadPrivateLibrary() {
    if (isStudentMode || privateLibraryLoaded) return;
    try {
      const response = await fetch(`${PRIVATE_MEDIA_ORIGIN}/api/library`, { credentials: "include" });
      if (!response.ok) throw new Error(`Private library request failed: ${response.status}`);
      const catalog = await response.json();
      const songs = Array.isArray(catalog) ? catalog : catalog.songs;
      if (!Array.isArray(songs)) throw new Error("Invalid private library catalog.");
      privateSongs = songs.map(normalizePrivateSong);
      privateLibraryLoaded = true;
      els.privateLibraryButton.hidden = true;
      renderLibrary();
    } catch (_) {}
  }

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

  function getArtistCoverPath(artist) {
    const fileName = String(artist || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    return fileName ? `thumbnails/${fileName}.webp` : "";
  }

  function addArtistCard(artist, list) {
    const card = document.createElement("div");
    card.className = "song-card artist-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    const withImage = list.find((s) => s.image);
    const artistCover = getArtistCoverPath(artist);
    const cover = artistCover
      ? `<img src="${artistCover}" alt="${artist}" data-fallback="${withImage?.image || ""}" onerror="if(this.dataset.fallback){this.onerror=null;this.src=this.dataset.fallback}else{this.remove()}">`
      : withImage
      ? `<img src="${withImage.image}" alt="${artist}">`
      : `<span class="cover-note">♪♫</span>`;
    const spotifyUrl = ARTIST_SPOTIFY[artist];
    const spotifyLink = spotifyUrl
      ? `<a class="artist-spotify-button" href="${spotifyUrl}" target="_blank" rel="noopener noreferrer" aria-label="Listen to ${artist} on Spotify">
          <img src="thumbnails/spotify.webp" alt="" onerror="this.nextElementSibling.hidden = false; this.remove();">
          <span hidden>LISTEN ON SPOTIFY</span>
        </a>`
      : "";
    card.innerHTML = `
      <div class="song-cover">${cover}<span class="artist-count">${list.length} SONGS</span></div>
      <div class="song-card-body">
        <span>ARTIST</span>
        <strong>${artist}</strong>
      </div>${spotifyLink}`;
    card.addEventListener("click", (event) => {
      if (event.target.closest(".artist-spotify-button")) return;
      if (!document.fullscreenElement) document.documentElement.requestFullscreen().catch(() => {});
      artistFilter = artist;
      renderLibrary();
    });
    card.addEventListener("keydown", (event) => {
      if (event.target.closest(".artist-spotify-button")) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      card.click();
    });
    els.songGrid.appendChild(card);
  }

  function renderLibrary() {
    els.songGrid.innerHTML = "";
    const songs = getLibrarySongs();
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
    stageDone = [false, false, false];
    resetDuel();
    els.artistLabel.textContent = (s.artist || "SONG").toUpperCase();
    els.titleLabel.textContent = s.title.toUpperCase();
    buildPreStage();
    buildDuringStage();
    buildTrainingStage();
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
  function getVideoTimingDelay(s) {
    const delay = Number(s?.videotimingdelay);
    return Number.isFinite(delay) ? delay : 0;
  }

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
    syncVideoLyricOverlay();
  }

  function addVideoLyricOverlay() {
    const overlay = document.createElement("p");
    overlay.className = "video-lyric-overlay hidden";
    els.playerVisual.appendChild(overlay);
  }

  function syncVideoLyricOverlay() {
    const overlay = els.playerVisual.querySelector(".video-lyric-overlay");
    const card = document.querySelector(".during-card");
    const line = karaokeLines[karaokeIdx];
    const visible = overlay && card && playerMode === "video" && !autoZoomActive &&
      card.classList.contains("karaoke-mode") && line;
    if (!overlay) return;
    overlay.classList.toggle("hidden", !visible);
    if (visible) {
      const lyric = line.el.cloneNode(true);
      lyric.querySelectorAll(".lyric-gap").forEach((gap) => { gap.textContent = gap.dataset.word; });
      overlay.textContent = lyric.textContent.trim();
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
    applySongTempo(el);
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
      if (karaokeLines.length) updateKaraoke(playerMode === "video" ? t + getVideoTimingDelay(song) : t);
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
    syncVideoLyricOverlay();
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
      addVideoLyricOverlay();
      videoEl = v;
      mediaEl = v;
      attachPlayerEvents(mediaEl);
      playerMode = mode;
      syncVideoLyricOverlay();
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
    addVideoLyricOverlay();
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
    syncVideoLyricOverlay();
    els.videoButton.classList.toggle("active", show);
    if (!show) { setKaraokeLayout(false); autoZoomActive = false; }
  }

  /* Video modundan kaldığı yerden, karaoke modundan BAŞTAN audio'ya dönülür */
  function switchToAudio() {
    const fromKaraoke = playerMode === "karaoke";
    const wasPlaying = mediaEl && !mediaEl.paused;
    const t = mediaEl ? mediaEl.currentTime : 0;
    if (videoIsSource) {
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
    const spotifyUrl = typeof song.spotify === "string" ? song.spotify.trim() : "";
    els.spotifyButton.classList.toggle("hidden", !spotifyUrl);
    if (spotifyUrl) els.spotifyButton.href = spotifyUrl;
    else els.spotifyButton.removeAttribute("href");
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
      /* Video bulunduysa şarkı VID modunda başlar. */
      enterVideoMode([videoSrc], "video");
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

  function buildTrainingStage() {
    const lyricLines = song.lyrics.map((raw) => {
      const item = typeof raw === "string" ? { text: raw } : raw;
      const from = parseTime(item.from);
      const to = parseTime(item.to);
      const manualTraining = item.training;
      const hasCompleteManualTraining = manualTraining?.target
        && Array.isArray(manualTraining.choices)
        && manualTraining.choices.length === 4;
      return from == null || to == null ? null : {
        from,
        to,
        text: item.text,
        training: hasCompleteManualTraining ? manualTraining : makeAutomaticTraining(item.text)
      };
    }).filter(Boolean);
    trainingTasks = [];
    const linesPerTask = trainingMode === "fast" ? 1 : 2;
    for (let start = 0; start < lyricLines.length; start += linesPerTask) {
      const lines = lyricLines.slice(start, start + linesPerTask);
      trainingTasks.push({ from: lines[0].from, to: lines[lines.length - 1].to, lines, target: "", targetLine: 0, choices: [], active: false });
    }
    setTrainingBlockSet(trainingBlockSet);
    trainingTaskIndex = -1;
    trainingStarted = false;
    trainingWaiting = false;
    trainingAnswered = false;
    duelRoundEnding = false;
    clearDuelPenalty();
    trainingAnsweredCount = 0;
    els.trainingReplayPrompt.classList.add("hidden");
    els.trainingVideo.pause();
    els.trainingVideo.removeAttribute("src");
    setRehearEnabled(false);
    els.trainingLine.textContent = "";
    els.trainingChoices.innerHTML = "";
    els.trainingPrompt.textContent = trainingTasks.length
      ? "Listen and choose the missing word before the line ends."
      : "No lyric training has been prepared for this song yet.";
  }

  function makeAutomaticTraining(text) {
    const plainText = text.replace(/<([^>]+)>/g, "$1");
    const words = plainText.match(/[A-Za-z']+/g) || [];
    const isValidTarget = (word) => word.length >= 4 && !word.includes("'");
    const taggedTarget = Array.from(text.matchAll(/<([^>]+)>/g))
      .map((match) => match[1])
      .find((word) => isValidTarget(word) && new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(plainText));
    const target = taggedTarget
      || words.slice(1).find(isValidTarget)
      || words.find(isValidTarget)
      || words.slice(1).find((word) => word.length >= 2 && !word.includes("'"))
      || words.find((word) => word.length >= 2 && !word.includes("'"));
    if (!target) return null;
    const normalizedTarget = target.toLowerCase();
    const choices = (song.words || []).map((entry) => entry.word)
      .filter((word) => word.toLowerCase() !== normalizedTarget && !word.toLowerCase().startsWith(normalizedTarget) && !normalizedTarget.startsWith(word.toLowerCase()));
    const fallback = ["forest", "kitchen", "future", "memory", "laughter", "journey"];
    fallback.forEach((word) => {
      if (!choices.some((choice) => choice.toLowerCase() === word) && word !== normalizedTarget) choices.push(word);
    });
    const distractors = shuffle(choices).slice(0, 3);
    return distractors.length === 3 ? { target, choices: [target, ...distractors] } : null;
  }

  function setTrainingBlockSet(blockSet) {
    trainingBlockSet = blockSet;
    trainingTasks.forEach((task) => {
      const targetLine = trainingMode === "fast" ? 0 : Math.min(trainingBlockSet, task.lines.length - 1);
      const training = task.lines[targetLine].training;
      task.target = training?.target || "";
      task.targetLine = targetLine;
      task.choices = Array.isArray(training?.choices) ? training.choices : [];
      const hasQuestion = task.target && task.choices.length === 4;
      task.active = Boolean(hasQuestion);
    });
  }

  function renderTrainingTask(task) {
    els.trainingLine.innerHTML = "";
    els.trainingChoices.classList.remove("correct-exit", "wrong-exit");
    els.trainingChoices.closest(".training-panel")?.classList.remove("training-shake");
    task.lines.forEach((line, lineIndex) => {
      const row = document.createElement("div");
      const lineText = line.text.replace(/<([^>]+)>/g, "$1");
      const targetPattern = task.active ? new RegExp(`\\b${task.target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i") : null;
      const match = lineIndex === task.targetLine && targetPattern ? targetPattern.exec(lineText) : null;
      if (match) {
        row.append(document.createTextNode(lineText.slice(0, match.index)));
        const gap = document.createElement("span");
        gap.className = "training-gap training-spinner";
        gap.setAttribute("aria-label", "Missing word");
        row.append(gap, document.createTextNode(lineText.slice(match.index + match[0].length)));
      } else {
        row.textContent = lineText;
      }
      els.trainingLine.appendChild(row);
    });
    els.trainingChoices.innerHTML = "";
    if (!task.active) return;
    shuffle([...task.choices]).forEach((choice) => {
      const button = document.createElement("button");
      button.className = "training-choice";
      button.type = "button";
      button.textContent = choice;
      button.addEventListener("click", () => answerTrainingChoice(button, choice, task));
      els.trainingChoices.appendChild(button);
    });
  }

  function playTrainingTask(index, continuePlayback = false, startFromIntro = false) {
    const task = trainingTasks[index];
    if (!task) return;
    const keepDuelPenalty = Boolean(duelPenaltyTimer);
    trainingTaskIndex = index;
    trainingWaiting = false;
    trainingAnswered = false;
    setRehearEnabled(false);
    if (trainingFadeFrame) { cancelAnimationFrame(trainingFadeFrame); trainingFadeFrame = null; }
    if (trainingPauseTimer !== null) { clearTimeout(trainingPauseTimer); trainingPauseTimer = null; }
    els.trainingVideo.volume = 1;
    if (startFromIntro) {
      els.trainingLine.textContent = "";
      els.trainingChoices.innerHTML = "";
      els.trainingPrompt.textContent = "Listen to the song introduction.";
    } else {
      renderTrainingTask(task);
      els.trainingPrompt.textContent = task.active ? "Choose the missing word before the line ends." : "Listen closely to the next lines.";
    }
    const playLine = () => {
      const scheduleLineEnd = (lyricStart) => {
        const lineDuration = Math.max(0, (task.to - lyricStart) * 1000 / (els.trainingVideo.playbackRate || 1));
        trainingPauseTimer = setTimeout(() => {
          trainingPauseTimer = null;
          if (!task.active) { if (trainingTaskIndex === index && !stageDone[2]) advanceTrainingTask(true); return; }
          if (trainingTaskIndex !== index || trainingWaiting || trainingAnswered || stageDone[2]) return;
          trainingWaiting = true;
          setRehearEnabled(true);
          if (!keepDuelPenalty) beginDuelPausePenalty();
          els.trainingPrompt.textContent = "The line is over — choose an answer to continue.";
          fadeOutTrainingAtLineEnd();
        }, task.active ? Math.max(0, lineDuration - 420) : lineDuration);
      };
      if (continuePlayback) {
        scheduleLineEnd(els.trainingVideo.currentTime + getVideoTimingDelay(song));
        return;
      }
      const sourceTime = Math.max(0, task.from - getVideoTimingDelay(song));
      if (startFromIntro) {
        els.trainingVideo.currentTime = 0;
        const startTask = () => {
          trainingPauseTimer = setTimeout(() => {
            if (trainingTaskIndex !== index || stageDone[2]) return;
            renderTrainingTask(task);
            els.trainingPrompt.textContent = task.active ? "Choose the missing word before the line ends." : "Listen closely to the next lines.";
            scheduleLineEnd(task.from);
          }, sourceTime * 1000 / (els.trainingVideo.playbackRate || 1));
        };
        const playback = els.trainingVideo.play();
        if (playback?.then) playback.then(startTask).catch(() => {});
        else startTask();
        return;
      }
      els.trainingVideo.currentTime = sourceTime;
      const playback = els.trainingVideo.play();
      if (playback?.then) playback.then(() => scheduleLineEnd(task.from)).catch(() => {});
      else scheduleLineEnd(task.from);
    };
    if (continuePlayback || els.trainingVideo.readyState >= 1) playLine();
    else els.trainingVideo.onloadedmetadata = playLine;
  }

  function startTraining() {
    trainingStarted = true;
    if (!trainingTasks.length) { completeStage(); return; }
    const source = videoSrc || song.audio;
    if (!source) { els.trainingPrompt.textContent = "No media source found for this training."; return; }
    els.trainingVideo.src = source;
    applySongTempo(els.trainingVideo);
    els.trainingVideo.load();
    els.trainingReplayPrompt.classList.add("hidden");
    playTrainingTask(0, false, true);
  }

  function stopTraining() {
    els.trainingVideo.pause();
    if (trainingFadeFrame) { cancelAnimationFrame(trainingFadeFrame); trainingFadeFrame = null; }
    if (trainingPauseTimer !== null) { clearTimeout(trainingPauseTimer); trainingPauseTimer = null; }
    clearDuelPenalty();
    setRehearEnabled(false);
    els.trainingVideo.volume = 1;
    trainingStarted = false;
  }

  function advanceTrainingTask(continuePlayback = false) {
    const nextIndex = trainingTaskIndex + 1;
    if (nextIndex >= trainingTasks.length) {
      finishTrainingPassAfterMedia();
      return;
    }
    playTrainingTask(nextIndex, continuePlayback);
  }

  function finishTrainingPassAfterMedia() {
    const finishPass = () => {
      if (duelReady) {
        if (hasFullDuelRound()) finishDuelRound();
        else startTrainingReplay(true);
        return;
      }
      if (trainingRound === 1 || duelReady) { showTrainingReplayPrompt(); return; }
      completeStage();
    };
    els.trainingPrompt.textContent = "Listen to the end of the song.";
    els.trainingChoices.innerHTML = "";
    if (els.trainingVideo.ended) { finishPass(); return; }
    els.trainingVideo.addEventListener("ended", finishPass, { once: true });
    const playback = els.trainingVideo.play();
    if (playback?.catch) playback.catch(() => {});
  }

  function showTrainingReplayPrompt() {
    els.trainingVideo.pause();
    clearDuelPenalty();
    setRehearEnabled(false);
    els.trainingChoices.innerHTML = "";
    els.trainingLine.textContent = "ROUND COMPLETE";
    els.trainingPrompt.textContent = "Every student has played. Play another round?";
    els.trainingReplayTitle.textContent = duelReady ? "NEXT ROUND?" : "REPLAY SONG?";
    els.trainingReplayMessage.textContent = "";
    els.trainingReplayYesButton.textContent = duelReady ? `YES, PLAY ROUND ${duelRoundNumber + 1}` : "YES, PLAY AGAIN";
    els.trainingReplayPrompt.classList.remove("hidden");
  }

  function startTrainingReplay(restartFromIntro = true) {
    if (duelReady && hasFullDuelRound()) {
      duelRoundPending = duelTeams.map((team) => new Set(team.map((_, index) => index)));
      duelRoundNumber++;
    }
    if (restartFromIntro) setTrainingBlockSet(trainingBlockSet === 0 ? 1 : 0);
    trainingWaiting = false;
    trainingAnswered = false;
    els.trainingReplayPrompt.classList.add("hidden");
    if (!restartFromIntro && trainingTaskIndex + 1 < trainingTasks.length) {
      playTrainingTask(trainingTaskIndex + 1);
      return;
    }
    trainingTaskIndex = -1;
    els.trainingVideo.currentTime = 0;
    playTrainingTask(0);
  }

  function fadeOutTrainingAtLineEnd() {
    const video = els.trainingVideo;
    const initialVolume = video.volume;
    const startedAt = performance.now();
    const forcePause = () => {
      if (trainingFadeFrame) cancelAnimationFrame(trainingFadeFrame);
      video.pause();
      video.volume = initialVolume;
      trainingFadeFrame = null;
      trainingPauseTimer = null;
    };
    const hardPause = setTimeout(forcePause, 460);
    const fade = (now) => {
      const progress = Math.min(1, (now - startedAt) / 420);
      video.volume = initialVolume * (1 - progress);
      if (progress < 1) trainingFadeFrame = requestAnimationFrame(fade);
      else {
        clearTimeout(hardPause);
        forcePause();
      }
    };
    trainingFadeFrame = requestAnimationFrame(fade);
  }

  function answerTrainingChoice(button, choice, task) {
    if (trainingTaskIndex < 0 || stageDone[2]) return;
    if (choice.toLowerCase() !== task.target.toLowerCase()) {
      button.classList.add("wrong");
      els.trainingChoices.classList.add("wrong-exit");
      els.trainingChoices.closest(".training-panel")?.classList.add("training-shake");
      playSfx(sfxWrong);
      setTimeout(() => button.classList.remove("wrong"), 420);
      if (duelReady) {
        setTimeout(() => forfeitDuelTurn(!trainingWaiting, task.target, false), 480);
        return;
      }
      window.StudentGame?.onWrong();
      setTimeout(() => advanceTrainingTask(), 480);
      return;
    }
    const wasWaiting = trainingWaiting;
    playSfx(sfxCorrect);
    let duelRoundComplete = false;
    if (duelReady) {
      const earned = duelPausedPoints;
      clearDuelPenalty();
      duelScores[duelTurn] += earned;
      duelStudentScores[duelTurn][duelPlayerIndex[duelTurn]] += earned;
      markDuelRoundTurn();
      eliminateCurrentDuelPlayer();
      switchDuelTurn();
      duelRoundComplete = hasFullDuelRound();
    } else {
      window.TeacherControl?.onCorrect();
      window.StudentGame?.onCorrect();
    }
    button.classList.add("correct");
    els.trainingChoices.classList.add("correct-exit");
    trainingAnswered = true;
    els.trainingChoices.querySelectorAll("button").forEach((choiceButton) => { choiceButton.disabled = true; });
    const gap = els.trainingLine.querySelector(".training-gap");
    if (gap) {
      gap.classList.remove("training-spinner");
      gap.textContent = task.target;
    }
    els.trainingPrompt.textContent = "Correct! Listen to the end of the line.";
    trainingAnsweredCount++;
    updateStatus();
    if (duelRoundComplete) {
      if (wasWaiting) { setTimeout(finishDuelRound, 420); return; }
      duelRoundEnding = true;
      return;
    }
    if (wasWaiting) setTimeout(() => advanceTrainingTask(), 420);
  }

  els.trainingVideo.addEventListener("timeupdate", () => {
    const task = trainingTasks[trainingTaskIndex];
    if (!task || trainingWaiting || stageDone[2]) return;
    if (!task.active) return;
    const lyricTime = els.trainingVideo.currentTime + getVideoTimingDelay(song);
    if (lyricTime >= task.to) {
      if (trainingAnswered) {
        if (duelRoundEnding) { finishDuelRound(); return; }
        advanceTrainingTask(true);
        return;
      }
      trainingWaiting = true;
      setRehearEnabled(true);
      beginDuelPausePenalty();
      els.trainingPrompt.textContent = "The line is over — choose an answer to continue.";
      fadeOutTrainingAtLineEnd();
    }
  });

  els.trainingRehearButton.addEventListener("click", () => {
    if (trainingWaiting && trainingTaskIndex >= 0) {
      playTrainingTask(trainingTaskIndex);
    }
  });
  els.trainingReplayYesButton.addEventListener("click", () => startTrainingReplay(false));
  els.trainingReplayFinishButton.addEventListener("click", () => { completeStage(); finishSongActivity(); });

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
  function finishSongActivity() {
    els.completeSummary.textContent =
      `"${song.title}" — you matched the words, filled the lyrics and completed lyric training. 👏`;
    renderDuelFinalScores();
    if (mediaEl) mediaEl.pause();
    stopTraining();
    showScreen("complete");
  }

  els.nextButton.addEventListener("click", () => {
    if (stage === 2 && !stageDone[2]) return;
    if (stage === 2) finishSongActivity();
    else setStage(stage + 1);
  });
  els.prevButton.addEventListener("click", () => { if (stage > 0) setStage(stage - 1); });
  function stopSongPlayback() {
    if (mediaEl) mediaEl.pause();
    if (videoEl && videoEl !== mediaEl) videoEl.pause();
    stopTraining();
  }

  els.backButton.addEventListener("click", () => { stopSongPlayback(); showScreen("library"); });
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

  els.privateLibraryButton.addEventListener("click", () => {
    if (privateLibraryLoaded) return;
    window.open(`${PRIVATE_MEDIA_ORIGIN}/login`, "privateMediaLogin", "noopener");
  });
  window.addEventListener("focus", loadPrivateLibrary);

  function returnToMenu() {
    stopSongPlayback();
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
  if (!isStudentMode) {
    els.privateLibraryButton.hidden = false;
    loadPrivateLibrary();
  }
  renderLibrary();
})();
