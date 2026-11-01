/* TUG OF WORDS: independent questions, one shared rope. */
(() => {
  'use strict';

  const shuffle = (items, random = Math.random) => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  const TeamNamePool = globalThis.TeamNamePool;

  const wordKey = word => String(word).trim().toLocaleLowerCase('en');
  const alternatives = (question, pool) => {
    const seen = new Set([question.image]);
    return pool.filter(item => {
      if (seen.has(item.image) || item.key === question.key ||
          question.synonyms.includes(item.key) || item.synonyms.includes(question.key)) return false;
      seen.add(item.image);
      return true;
    });
  };

  function readQuestions(rows) {
    const seen = new Set();
    return rows.flatMap(row => {
      const image = row[row.length - 1];
      if (!row[0] || typeof image !== 'string' || !image.trim()) return [];
      const key = wordKey(row[0]);
      const identity = `${row[1]}:${row[2]}:${key}`;
      if (seen.has(identity)) return [];
      seen.add(identity);
      return [{ word: row[0], key, grade: row[1], unit: row[2], image,
        synonyms: row.slice(3, -1).filter(item => typeof item === 'string').map(wordKey) }];
    });
  }

  function buildPool(catalog, grade, units, categories = {}) {
    const selected = new Set(units.map(Number));
    const seen = new Set();
    return catalog.filter(question => {
      if (!selected.has(Number(question.unit)) || seen.has(question.key) ||
          (Object.hasOwn(categories, question.unit) ? Number(question.grade) > grade : Number(question.grade) !== grade)) return false;
      seen.add(question.key);
      return true;
    });
  }

  const hudPoints = match => Math.min(4, Math.floor(Math.max(0, match.activeMs) / 300000) + 1);
  const studentKey = name => String(name || '').trim().replace(/\s+/g, ' ').toLocaleUpperCase('tr-TR');
  function winnerAwards(teams, winner, points, classroom) {
    const awards = [];
    const missing = [];
    const seen = new Set();
    for (const player of winner === null ? teams.flat() : teams[winner] || []) {
      const roster = classroom?.roster || [];
      const student = player.id ? roster.find(item => item.id === player.id) : roster.find(item => studentKey(item.name) === studentKey(player.name));
      const key = studentKey(student?.name);
      if (!student || roster.filter(item => studentKey(item.name) === key).length !== 1) { missing.push(player.name); continue; }
      if (!seen.has(key)) { awards.push({ name: student.name, points }); seen.add(key); }
    }
    return { awards, missing };
  }

  class Match {
    constructor(pool, options = {}, random = Math.random) {
      this.pool = pool.filter(question => alternatives(question, pool).length >= 3);
      if (this.pool.length < 4) throw new Error('Choose a unit with at least four distinct picture choices.');
      // Distractors stay in the selected curriculum, including questions not used as targets.
      this.choicePool = pool;
      this.limit = Math.max(1, Number(options.limit) || 5);
      this.correctDelay = Math.max(0, Number(options.correctDelay) || 800);
      this.wrongDelay = Math.max(0, Number(options.wrongDelay) || 1500);
      this.random = random;
      this.position = 0;
      this.phase = 'playing';
      this.paused = false;
      this.pausedAt = 0;
      this.winner = null;
      this.pending = [];
      this.activeMs = 0;
      this.timerEndMs = null;
      this.finishReason = '';
      this.clockAt = null;
      this.clockRunning = false;
      this.sides = [0, 1].map(() => ({ question: null, choices: [], deck: [], readyAt: 0,
        correct: 0, wrong: 0, turn: 0, feedback: '', token: 0 }));
      this.next(0);
      this.next(1);
    }

    next(team) {
      const side = this.sides[team];
      const previous = side.question?.key;
      const other = this.sides[1 - team].question?.key;
      if (!side.deck.length) side.deck = shuffle(this.pool, this.random);
      let index = side.deck.findIndex(question => question.key !== previous && question.key !== other);
      if (index < 0) {
        // A nearly exhausted deck must not force the same word as the opponent.
        side.deck = shuffle(this.pool, this.random);
        index = side.deck.findIndex(question => question.key !== previous && question.key !== other);
      }
      side.question = side.deck.splice(index < 0 ? 0 : index, 1)[0];
      const wrong = shuffle(alternatives(side.question, this.choicePool), this.random).slice(0, 3);
      side.choices = shuffle([{ ...side.question, correct: true }, ...wrong.map(item => ({ ...item, correct: false }))], this.random);
      side.feedback = '';
      side.readyAt = 0;
      side.token++;
    }

    answer(team, choice, token, now) {
      const side = this.sides[team];
      if (this.phase !== 'playing' || this.paused || !side || side.readyAt ||
          token !== side.token || !Number.isInteger(choice) || !side.choices[choice]) return null;
      this.trackTime(now);
      if (this.timerEndMs !== null && this.activeMs >= this.timerEndMs) {
        this.settle();
        this.finish('timer');
        return null;
      }
      const correct = side.choices[choice].correct;
      side[correct ? 'correct' : 'wrong']++;
      side.feedback = correct ? 'correct' : 'wrong';
      side.readyAt = now + (correct ? this.correctDelay : this.wrongDelay);
      if (correct) this.pending.push(team === 0 ? -1 : 1);
      return { correct, correctIndex: side.choices.findIndex(item => item.correct) };
    }

    settle() {
      if (this.phase !== 'playing' || this.paused || !this.pending.length) return false;
      // Both contacts in the same animation frame count before checking the finish line.
      this.position = Math.max(-this.limit, Math.min(this.limit,
        this.position + this.pending.reduce((sum, value) => sum + value, 0)));
      this.pending = [];
      if (Math.abs(this.position) >= this.limit) {
        this.finish('rope');
      }
      return true;
    }

    tick(now) {
      if (this.phase !== 'playing' || this.paused) return [];
      const changed = [];
      this.sides.forEach((side, team) => {
        if (side.readyAt && now >= side.readyAt) {
          side.turn++;
          this.next(team);
          changed.push(team);
        }
      });
      return changed;
    }

    finish(reason) {
      if (this.phase !== 'playing') return false;
      this.winner = this.position === 0 ? null : this.position < 0 ? 0 : 1;
      this.finishReason = reason;
      this.phase = 'finished';
      this.clockRunning = false;
      return true;
    }

    startTimer(minutes) {
      if (this.phase !== 'playing' || ![5, 10, 15, 20].includes(minutes)) return false;
      this.timerEndMs = this.activeMs + minutes * 60000;
      return true;
    }

    pause(now) {
      if (this.phase !== 'playing' || this.paused) return;
      this.trackTime(now, false);
      this.paused = true;
      this.pausedAt = now;
    }

    resume(now) {
      if (!this.paused) return;
      const elapsed = now - this.pausedAt;
      this.sides.forEach(side => { if (side.readyAt) side.readyAt += elapsed; });
      this.paused = false;
      this.clockAt = now;
      this.clockRunning = this.phase === 'playing';
    }

    trackTime(now, active = true) {
      if (this.clockRunning && this.clockAt !== null) {
        this.activeMs += Math.max(0, now - this.clockAt);
        if (this.timerEndMs !== null) this.activeMs = Math.min(this.activeMs, this.timerEndMs);
      }
      this.clockAt = now;
      this.clockRunning = active && this.phase === 'playing' && !this.paused;
    }
  }

  // Source height, grip x/y, sole y, left edge and optional width/head x.
  const crewSprites = {
    ava: [781, 875, 313, 735, 334],
    benjamin: [768, 840, 310, 716, 331],
    chloe: [768, 850, 301, 723, 248],
    daniel: [807, 855, 350, 743, 337],
    david: [768, 855, 301, 736, 345],
    ella: [768, 853, 309, 740, 268],
    emma: [768, 850, 310, 725, 295],
    ethan: [768, 838, 309, 730, 327],
    hannah: [768, 850, 304, 735, 259],
    jack: [768, 850, 310, 743, 344],
    lucas: [807, 890, 329, 751, 272],
    mia: [768, 850, 302, 732, 237],
    noah: [768, 840, 303, 736, 330],
    olivia: [768, 850, 306, 727, 302],
    victoria: [768, 930, 301, 727, 295],
    zoe: [784, 885, 302, 751, 271],
    blaze: [768, 823, 310, 756, 251, 1376, 450],
    frost: [768, 825, 325, 759, 235, 1376, 470],
    grace: [768, 832, 310, 732, 194, 1376, 450],
    louis: [768, 825, 320, 756, 213, 1376, 430],
    mara: [768, 900, 319, 754, 307, 1376, 570],
    nova: [768, 840, 322, 764, 207, 1376, 480],
    orion: [768, 815, 324, 756, 276, 1376, 440],
    pixie: [768, 835, 323, 751, 191, 1376, 475],
    rex: [768, 813, 325, 755, 292, 1376, 435],
    terra: [768, 840, 335, 756, 197, 1376, 475]
  };

  const animeCharacters = ['blaze', 'frost', 'grace', 'louis', 'mara', 'nova', 'orion', 'pixie', 'rex', 'terra'];
  const canonicalCharacters = Object.keys(crewSprites).filter(character => !animeCharacters.includes(character));

  const crewStepSprites = {
    ava: [875, 300, 722], benjamin: [840, 310, 724], chloe: [850, 300, 731],
    daniel: [855, 330, 740], david: [855, 300, 734], hannah: [850, 300, 722],
    ella: [850, 305, 740], emma: [850, 300, 742], ethan: [840, 305, 725],
    jack: [850, 315, 741], lucas: [890, 305, 715], mia: [860, 305, 730],
    noah: [850, 305, 735], olivia: [850, 305, 727], victoria: [930, 300, 717],
    zoe: [890, 295, 737],
    blaze: [823, 310, 760], frost: [825, 322, 736], grace: [835, 310, 760],
    louis: [825, 320, 761], mara: [900, 319, 755], nova: [848, 305, 747],
    orion: [815, 324, 760], pixie: [835, 323, 746], rex: [813, 325, 764],
    terra: [840, 335, 759]
  };

  function crewSprite(player) {
    const avatarPath = String(player.avatarPath || '').replace(/\\/g, '/');
    const character = (avatarPath.match(/(?:^|\/)AV_Anime_([a-z]+)_head\.webp(?:[?#].*)?$/i)?.[1] ||
      avatarPath.match(/(?:^|\/)([a-z]+)\.webp(?:[?#].*)?$/i)?.[1])?.toLowerCase();
    const source = Object.prototype.hasOwnProperty.call(crewSprites, character) ? crewSprites[character] : null;
    if (!source) return null;
    const [height, gripX, gripY, footY, left, width = 1360, headX = width * .35] = source;
    const scale = (144 - 84) / (footY - gripY) * 1.56;
    const step = crewStepSprites[character];
    const stepScale = step ? 93.6 / (step[2] - step[1]) : 0;
    return { character, src: `assets/sprites/${character}.webp`, width: width * scale, height: height * scale,
      step: step ? { src: `assets/sprites/${character}2.webp`, width: 1376 * stepScale, height: 768 * stepScale,
        offsetX: 20 - step[0] * stepScale, y: 84 - step[1] * stepScale } : null,
      headX: 20 + (headX - gripX) * scale,
      offsetX: 20 - gripX * scale, y: 84 - gripY * scale, rear: Math.ceil((gripX - left) * scale - 20) };
  }

  function crewLayout(count, rearExtents = []) {
    const gap = 143;
    const positions = Array.from({ length: count }, (_, index) => 350 - (count - 1 - index) * gap);
    return { positions, travel: Math.max(270, ...positions.map((x, index) => 501 - x + (rearExtents[index] || 81))) };
  }

  function assignMatchCharacters(groups, random = Math.random) {
    const teams = groups.map(team => team.map(player => ({ ...player })));
    const used = new Set(teams.flat().map(player => crewSprite(player)?.character).filter(Boolean));
    const canonical = shuffle(canonicalCharacters.filter(character => !used.has(character)), random);
    const anime = ['orion', 'frost', 'louis', 'rex', 'terra', 'nova', 'mara', 'pixie', 'grace']
      .filter(character => !used.has(character));
    teams.flat().forEach(player => {
      const original = crewSprite(player);
      player.showCrewArrow = !!original && canonicalCharacters.includes(original.character);
      if (original) return;
      const character = canonical.shift() || anime.shift();
      if (!character) return;
      player.avatarPath = canonicalCharacters.includes(character)
        ? `../func_presenter/images/avatars/v2/${character}.webp`
        : `../word_quest/avatars/AV_Anime_${character[0].toUpperCase() + character.slice(1)}_head.webp`;
    });
    return teams;
  }

  function questionMode(turn, playerCount) {
    // Flip each roster lap so even-sized teams also change each student's mode.
    const count = Math.max(1, Number(playerCount) || 1);
    return (turn % count + Math.floor(turn / count)) % 2 ? 'words' : 'pictures';
  }

  globalThis.TugCore = { Match, readQuestions, alternatives, buildPool, hudPoints, studentKey, winnerAwards, crewLayout, crewSprite, assignMatchCharacters, questionMode, TeamNamePool };
})();

(() => {
  'use strict';
  if (typeof document === 'undefined') return;
  const { Match, readQuestions, alternatives, buildPool, hudPoints, studentKey, winnerAwards, crewLayout, crewSprite, assignMatchCharacters, questionMode, TeamNamePool } = globalThis.TugCore;
  const $ = id => document.getElementById(id);
  const catalog = readQuestions(typeof QUESTIONS === 'undefined' ? [] : QUESTIONS);
  const categories = typeof CATEGORIES === 'undefined' ? {} : CATEGORIES;
  const groups = [[], []];
  const media = [null, null];
  let match = null;
  let frame = 0;
  let finishTimer = 0;
  let toastTimer = 0;
  let currentScreen = 'setup';
  let pacePausedMatch = false;
  let finishArmed = false;
  let lastRopePosition = 0;
  let names = ['TEAM BLUE', 'TEAM PINK'];
  const teamNamePool = new TeamNamePool();
  let importedClassroomId = '';
  const selectedUnits = new Set([1]);
  const preferenceKey = 'wordTugOfWar:settings:v1';
  const musicVolumePreferenceKey = 'wordTugOfWar:musicVolume:v1';
  let musicVolume = 75;
  const musicTracks = ['ashorrain', 'inmyownway', 'learningtogether', 'sidebyside', 'thenoiseofhome', 'thepriceyouneverpay'];
  let music = null;
  let musicIndex = -1;
  let musicFailures = 0;
  const finalMusicTracks = ['../word_master/sounds/final.mp3'];
  let finalMusic = null;
  let finalMusicPending = false;

  function playFinalMusic() {
    if (currentScreen !== 'result' || !finalMusic) return;
    const playing = finalMusic;
    finalMusicPending = false;
    playing.volume = 0.3;
    playing.play().then(() => {
      if (finalMusic !== playing || currentScreen !== 'result') playing.pause();
    }).catch(error => {
      if (finalMusic === playing) finalMusicPending = error.name === 'NotAllowedError';
    });
  }

  function stopFinalPresentation() {
    finalMusicPending = false;
    if (finalMusic) {
      finalMusic.pause();
      finalMusic.currentTime = 0;
      finalMusic.remove();
      finalMusic = null;
    }
    if (typeof FinalScreen !== 'undefined') FinalScreen.stop();
    document.querySelectorAll('.win-conf, .win-star').forEach(particle => particle.remove());
  }

  function startFinalPresentation() {
    stopFinalPresentation();
    if (music) { music.pause(); music.currentTime = 0; }
    if (typeof FinalScreen !== 'undefined') FinalScreen.start({ stars: false });
    finalMusic = new Audio(finalMusicTracks[Math.floor(Math.random() * finalMusicTracks.length)]);
    finalMusic.hidden = true;
    finalMusic.loop = false;
    document.body.append(finalMusic);
    playFinalMusic();
  }

  function playMusic(nextTrack = false) {
    if (currentScreen !== 'game' || match?.phase !== 'playing' || match.paused || musicVolume === 0 || musicFailures >= musicTracks.length) return;
    if (!music) {
      music = new Audio();
      music.hidden = true;
      music.preload = 'metadata';
      document.body.append(music);
      music.addEventListener('playing', () => { musicFailures = 0; });
      music.addEventListener('ended', () => playMusic(true));
      music.addEventListener('error', () => { musicFailures++; playMusic(true); });
    }
    if (nextTrack || !music.getAttribute('src') || music.ended || music.error) {
      musicIndex = (musicIndex + 1) % musicTracks.length;
      music.src = `../song_presenter/kareoke/${musicTracks[musicIndex]}.mp3`;
    }
    music.volume = musicVolume / 250;
    music.play()?.catch(() => {});
  }

  function element(tag, text, className) {
    const item = document.createElement(tag);
    if (text !== undefined) item.textContent = text;
    if (className) item.className = className;
    return item;
  }

  function toast(message) {
    clearTimeout(toastTimer);
    $('toast').textContent = message;
    $('toast').hidden = false;
    toastTimer = setTimeout(() => { $('toast').hidden = true; }, 4500);
  }

  function showScreen(screen) {
    clearCrewReactions();
    $('game-over-dialog').close();
    document.body.classList.remove('game-over');
    const enteringResult = screen === 'result' && currentScreen !== 'result';
    if (screen !== 'result') stopFinalPresentation();
    currentScreen = screen;
    $('pause').hidden = screen !== 'game';
    $('match-timer').hidden = screen !== 'game';
    $('finish').hidden = screen !== 'game';
    if (screen !== 'game') finishArmed = false;
    document.querySelector('.brand-sub').textContent = screen === 'game' ? 'TUG OF WORDS' : 'CLASSROOM GAMES';
    if (screen !== 'game') music?.pause();
    ['setup', 'selection', 'game', 'result'].forEach(name => { $(`${name}-screen`).hidden = name !== screen; });
    window.scrollTo(0, 0);
    if (enteringResult) startFinalPresentation();
  }

  function settings() {
    return { correctDelay: Number($('correct-delay').value), wrongDelay: Number($('wrong-delay').value),
      limit: Number($('rope-limit').value) };
  }

  function updateSettings() {
    $('correct-value').textContent = `${(Number($('correct-delay').value) / 1000).toFixed(1)} s`;
    $('wrong-value').textContent = `${(Number($('wrong-delay').value) / 1000).toFixed(1)} s`;
    if (match?.phase === 'playing') {
      match.correctDelay = settings().correctDelay;
      match.wrongDelay = settings().wrongDelay;
    }
    try { localStorage.setItem(preferenceKey, JSON.stringify(settings())); } catch {}
  }

  function setLiteMode(enabled) {
    if (enabled) clearCrewReactions();
    document.body.classList.toggle('tug-lite', enabled);
    $('lite').setAttribute('aria-pressed', String(enabled));
  }

  function setMusicVolume(value, save = true) {
    const level = Number(value);
    musicVolume = [0, 25, 50, 75, 100].includes(level) ? level : 75;
    if (music) {
      music.volume = musicVolume / 250;
      music.muted = musicVolume === 0;
      if (musicVolume === 0) music.pause();
    }
    $('music-volume-options').querySelectorAll('[data-music-volume]').forEach(button => {
      button.setAttribute('aria-pressed', String(Number(button.dataset.musicVolume) === musicVolume));
    });
    if (save) {
      try { localStorage.setItem(musicVolumePreferenceKey, String(musicVolume)); } catch {}
    }
  }

  function loadSettings() {
    setLiteMode(false);
    try {
      setMusicVolume(localStorage.getItem(musicVolumePreferenceKey) ?? 75, false);
      const saved = JSON.parse(localStorage.getItem(preferenceKey) || 'null');
      if (!saved) return;
      if (saved.correctDelay >= 400 && saved.correctDelay <= 2500) $('correct-delay').value = saved.correctDelay;
      if (saved.wrongDelay >= 800 && saved.wrongDelay <= 3500) $('wrong-delay').value = saved.wrongDelay;
      if ([3, 5, 7, 10].includes(saved.limit)) $('rope-limit').value = saved.limit;
    } catch {}
  }

  function avatar(student) {
    if (!student.avatarPath) return null;
    const image = element('img');
    image.src = student.avatarPath;
    image.alt = '';
    image.addEventListener('error', () => image.remove(), { once: true });
    return image;
  }

  function renderTeams() {
    names = [0, 1].map(team => $(`name-${team}`).value.trim() || (team === 0 ? 'TEAM BLUE' : 'TEAM PINK'));
    $('team-lists').replaceChildren();
    groups.forEach((students, team) => {
      const list = element('div', undefined, 'team-list');
      list.append(element('h3', `${names[team]} · ${students.length}`));
      if (!students.length) list.append(element('p', 'No players yet.', 'muted small'));
      students.forEach((student, index) => {
        const row = element('div', undefined, 'student-row');
        const image = avatar(student);
        if (image) row.append(image);
        row.append(element('span', student.name));
        const move = element('button', team === 0 ? '→' : '←');
        move.type = 'button';
        move.setAttribute('aria-label', `Move ${student.name} to ${names[1 - team]}`);
        move.addEventListener('click', () => { groups[1 - team].push(students.splice(index, 1)[0]); renderTeams(); });
        const remove = element('button', '×');
        remove.type = 'button';
        remove.setAttribute('aria-label', `Remove ${student.name}`);
        remove.addEventListener('click', () => { students.splice(index, 1); renderTeams(); });
        row.append(move, remove);
        list.append(row);
      });
      $('team-lists').append(list);
      $('student-team').options[team].textContent = names[team];
    });
    const ready = groups.every(group => group.length);
    $('to-selection').disabled = !ready;
    $('balance').disabled = groups.flat().length < 2;
    $('setup-status').textContent = ready ? `${groups.flat().length} players ready to pull.` : 'Add at least one student to each team.';
  }

  function addStudent(event) {
    event.preventDefault();
    const name = $('student-name').value.trim();
    if (!name) return;
    if (groups.flat().some(student => student.name.toLocaleLowerCase('tr') === name.toLocaleLowerCase('tr'))) {
      toast('That student is already in a team.'); return;
    }
    groups[Number($('student-team').value)].push({ name, avatarPath: '', balanceScore: 0 });
    $('student-name').value = '';
    renderTeams();
    $('student-name').focus();
  }

  function importRoster() {
    const teacher = window.TeacherControl;
    const id = teacher?.isActiveClassroomLocked?.() ? teacher.getActiveClassroomId?.() : '';
    const room = teacher?.getClassrooms?.().find(item => item.id === id);
    if (!room) { toast('Open Teacher HUD and lock a classroom first. You can also add students manually.'); return; }
    const now = new Date();
    const today = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    const absent = new Set(room.attendanceDate === today ? room.absentStudentIds || [] : []);
    const students = (room.roster || []).filter(student => student.name?.trim() && !absent.has(student.id)).map(student => ({
      id: student.id, name: student.name.trim(), balanceScore: window.TeamBalance.score(student),
      avatarPath: student.avatarPath ? new URL(student.avatarPath, new URL('../func_presenter/teacher-control.js', location.href)).href : ''
    }));
    if (students.length < 2) { toast('At least two present students are needed.'); return; }
    const teams = window.TeamBalance.distribute(students, 2);
    importedClassroomId = room.id;
    groups.forEach((group, index) => group.splice(0, group.length, ...teams[index]));
    $('roster-status').textContent = `${room.name || 'Classroom'} · ${students.length} present students balanced into two teams.`;
    renderTeams();
  }

  function option(select, value, label) {
    const item = element('option', label);
    item.value = value;
    select.append(item);
  }

  function selectedPool() {
    const grade = Number($('grade').value);
    return buildPool(catalog, grade, [...selectedUnits], categories);
  }

  function updatePool() {
    const pool = selectedPool();
    const playable = pool.filter(question => alternatives(question, pool).length >= 3).length;
    $('pool-status').textContent = playable >= 4 ? `${playable} words ready. Different questions, the same learning pool.` : 'This pool needs at least four words with distinct picture choices.';
    $('start').disabled = playable < 4;
  }

  function updateUnits() {
    const grade = Number($('grade').value);
    $('unit-checks').replaceChildren();
    $('category-checks').replaceChildren();
    const choices = [[0, 'REVISION 1'], [9, 'REVISION 2'], ...Array.from({ length: 8 }, (_, index) => [index + 1, `UNIT ${index + 1}`])].concat(Object.entries(categories).map(([unit, label]) => [Number(unit), label]));
    choices.forEach(([unit, label]) => {
      const available = catalog.some(question => Number(question.unit) === unit && (Object.hasOwn(categories, unit) ? Number(question.grade) <= grade : Number(question.grade) === grade));
      if (!available) selectedUnits.delete(unit);
      const row = element('label', undefined, 'unit-option');
      const input = element('input');
      input.type = 'checkbox';
      input.value = unit;
      input.checked = available && selectedUnits.has(unit);
      input.disabled = !available;
      input.addEventListener('change', () => { if (input.checked) selectedUnits.add(unit); else selectedUnits.delete(unit); updatePool(); });
      row.append(element('span', label), input);
      if (!available) row.title = 'No words available for this grade.';
      if (unit <= 9 || available) $(unit <= 9 ? 'unit-checks' : 'category-checks').append(row);
    });
    $('category-options').hidden = !$('category-checks').children.length;
    updatePool();
  }

  function initializeCatalog() {
    const grades = [...new Set(catalog.filter(question => Number(question.grade) > 0 && !Object.hasOwn(categories, question.unit)).map(question => Number(question.grade)))].sort((a, b) => a - b);
    grades.forEach(grade => option($('grade'), grade, `GRADE ${grade}`));
    const practiceValue = new URLSearchParams(location.search).get('practiceUnit');
    const practiceUnit = Number(practiceValue);
    if (practiceValue !== null && Number.isInteger(practiceUnit) && practiceUnit >= 0 && practiceUnit <= 9) { selectedUnits.clear(); selectedUnits.add(practiceUnit); }
    updateUnits();
  }

  function syncInputs(team) {
    const side = match?.sides[team];
    const card = $(`side-${team}`);
    if (!side || !card) return;
    const enabled = match.phase === 'playing' && !match.paused && !side.readyAt && media[team]?.ready;
    card.querySelectorAll('.picture-choice').forEach(button => { button.disabled = !enabled; });
  }

  function renderSide(team) {
    const side = match.sides[team];
    const players = match.players[team];
    const student = players[side.turn % players.length];
    const mode = questionMode(side.turn, players.length);
    const wordMode = mode === 'words';
    const token = side.token;
    const roundMedia = { ready: false, count: 0, failed: false };
    media[team] = roundMedia;
    const card = element('article', undefined, 'play-side');
    card.id = `side-${team}`;
    card.dataset.team = team;
    card.dataset.mode = mode;
    card.setAttribute('aria-label', `${names[team]} question`);
    const header = element('div', undefined, 'player-heading');
    const player = element('div', undefined, 'player-label');
    const image = avatar(student);
    if (image) player.append(image);
    player.append(element('strong', student.name));
    const count = element('span', `${side.correct} correct`);
    count.id = `correct-count-${team}`;
    header.append(player);
    if (!wordMode) header.append(element('h2', side.question.word, 'side-word'));
    header.append(count);
    const grid = element('div', undefined, 'picture-grid');
    const questionLayout = wordMode ? element('div', undefined, 'word-question-layout') : grid;
    const prompt = wordMode ? element('div', undefined, 'word-prompt') : null;
    if (wordMode) {
      grid.classList.add('word-options');
      questionLayout.append(prompt, grid);
    }
    const feedback = element('div', 'Loading pictures…', 'side-feedback');
    feedback.id = `feedback-${team}`;
    feedback.setAttribute('aria-live', 'polite');
    side.choices.forEach((choice, index) => {
      const button = element('button', undefined, 'picture-choice');
      button.type = 'button';
      button.disabled = true;
      button.setAttribute('aria-label', wordMode ? `Option ${index + 1}: ${choice.word}` : `Picture ${index + 1}`);
      if (!wordMode || index === 0) {
        const picture = element('img');
        picture.alt = '';
        picture.draggable = false;
        picture.addEventListener('load', () => {
          if (media[team] !== roundMedia) return;
          roundMedia.count++;
          if (roundMedia.count === (wordMode ? 1 : 4) && !roundMedia.failed) {
            roundMedia.ready = true;
            feedback.textContent = '';
            syncInputs(team);
          }
        });
        picture.addEventListener('error', () => {
          if (media[team] !== roundMedia || roundMedia.failed) return;
          roundMedia.failed = true;
          feedback.replaceChildren();
          const retry = element('button', 'Picture unavailable · Skip this word', 'quiet');
          retry.type = 'button';
          retry.addEventListener('click', () => {
            if (match?.phase !== 'playing' || match.paused || side.token !== token) return;
            match.next(team);
            renderSide(team);
          });
          feedback.append(retry);
          syncInputs(team);
        });
        picture.src = wordMode ? side.question.image : choice.image;
        if (wordMode) prompt.append(picture); else button.append(picture);
      }
      if (wordMode) button.append(element('strong', choice.word, 'choice-word'));
      button.append(element('span', String(index + 1)));
      const answer = () => submitAnswer(team, index, token);
      button.addEventListener('pointerdown', event => {
        if (event.button !== 0) return;
        event.preventDefault();
        answer();
      });
      // Keyboard and assistive activation only; pointer answers are handled at first contact.
      button.addEventListener('click', event => { if (event.detail === 0) answer(); });
      grid.append(button);
    });
    card.append(header, questionLayout, feedback);
    const previous = $(`side-${team}`);
    if (previous) previous.replaceWith(card); else $('play-sides').append(card);
    renderActiveCrew(team);
  }

  function submitAnswer(team, index, token) {
    if (!media[team]?.ready) return;
    const result = match?.answer(team, index, token, performance.now());
    if (!result) return;
    $(`correct-count-${team}`).textContent = `${match.sides[team].correct} correct`;
    const buttons = $(`side-${team}`).querySelectorAll('.picture-choice');
    const panel = $(`side-${team}`);
    panel.classList.add(result.correct ? 'answer-correct' : 'answer-wrong');
    panel.querySelector('.picture-grid').classList.add('is-answered');
    buttons.forEach((button, choiceIndex) => {
      if (choiceIndex !== result.correctIndex && (result.correct || choiceIndex !== index)) {
        button.classList.add('answer-hidden');
        return;
      }
      const isCorrect = choiceIndex === result.correctIndex;
      const mark = element('span', undefined, `answer-mark ${isCorrect ? 'mark-correct' : 'mark-wrong'}`);
      const shape = isCorrect ? 'M10 52 37 80 90 16' : 'M12 12 88 88 M88 12 12 88';
      mark.setAttribute('aria-hidden', 'true');
      mark.innerHTML = `<svg viewBox="0 0 100 100" focusable="false"><path d="${shape}" fill="none" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><path d="${shape}" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
      button.append(mark);
      const answerLabel = isCorrect ? 'Correct answer' : 'Your answer: incorrect';
      button.setAttribute('aria-label', panel.dataset.mode === 'words' ? `${answerLabel}: ${match.sides[team].choices[choiceIndex].word}` : answerLabel);
    });
    buttons[index].classList.add(result.correct ? 'correct' : 'wrong');
    if (!result.correct) buttons[result.correctIndex].classList.add('correct');
    const feedback = $(`feedback-${team}`);
    feedback.dataset.kind = result.correct ? 'correct' : 'wrong';
    feedback.textContent = result.correct ? 'Correct! Pull together.' : 'Have a look. Next word coming up…';
    syncInputs(team);
  }

  function renderActiveCrew(team) {
    const crew = document.querySelector(team === 0 ? '.blue-crew' : '.orange-crew');
    const marker = crew.querySelector('.crew-active-marker');
    if (!marker || !match) return;
    const players = match.players[team];
    const index = match.sides[team].turn % players.length;
    const sprite = crew.children[index]?.querySelector('.crew-body > use') ? null : crewSprite(players[index]);
    marker.style.display = players[index].showCrewArrow && sprite ? '' : 'none';
    const layout = crewLayout(players.length, players.map(player => crewSprite(player)?.rear || 81));
    const headX = sprite ? sprite.headX : -52;
    const headY = sprite ? sprite.y - 3 : 2;
    marker.setAttribute('transform', `translate(${layout.positions[index] + headX} ${headY})`);
    marker.setAttribute('data-player-index', index);
  }

  function sizeGenericCrew(person, x) {
    person.setAttribute('x', 0);
    person.setAttribute('transform', `translate(${x + 20} 84) scale(1.5) translate(-33 -84)`);
  }

  function alignCrewGrip(body) {
    const bounds = body.getBBox();
    body.style.transformOrigin = `${Number(body.dataset.gripX) - bounds.x}px ${84 - bounds.y}px`;
  }

  function clearCrewReactions() {
    document.querySelectorAll('.crew-idle-member').forEach(member => member.classList.remove('crew-pulling', 'crew-stumbling'));
  }

  function reactCrews(direction) {
    if (!direction || match?.phase !== 'playing' || document.body.classList.contains('tug-lite') || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    clearCrewReactions();
    // Flush once for the whole scene so consecutive pulls restart the short reactions.
    document.querySelector('.arena svg').getBoundingClientRect();
    const pullingTeam = direction < 0 ? 0 : 1;
    ['.blue-crew', '.orange-crew'].forEach((selector, team) => {
      document.querySelector(selector).querySelectorAll('.crew-idle-member').forEach(member => {
        member.classList.add(team === pullingTeam ? 'crew-pulling' : 'crew-stumbling');
      });
    });
  }

  function renderCrews() {
    const svgNS = 'http://www.w3.org/2000/svg';
    const layouts = match.players.map(players => crewLayout(players.length, players.map(player => crewSprite(player)?.rear || 81)));
    const scene = document.querySelector('.arena svg');
    const bounds = scene.getBoundingClientRect();
    const widthPadding = Math.max(0, (bounds.width / Math.max(1, bounds.height) * 220 - 1000) / 2);
    const extra = Math.max(widthPadding, ...layouts.flatMap((layout, team) => layout.positions.map((x, index) =>
      -x + (crewSprite(match.players[team][index])?.rear || 81) + 24)));
    // Widen the camera for large teams instead of squeezing figures together.
    scene.setAttribute('viewBox', `${-extra} -30 ${1000 + extra * 2} 220`);
    document.querySelectorAll('.arena svg > rect').forEach(rect => {
      rect.setAttribute('x', -extra);
      rect.setAttribute('width', 1000 + extra * 2);
    });
    const ropePaths = document.querySelectorAll('#pull-world > path');
    ropePaths[0].setAttribute('d', `M${-350 - extra} 85Q500 78 ${1350 + extra} 85`);
    ropePaths[1].setAttribute('d', `M${-350 - extra} 83Q500 76 ${1350 + extra} 83`);
    ['.blue-crew', '.orange-crew'].forEach((selector, team) => {
      const crew = document.querySelector(selector);
      const layout = layouts[team];
      crew.replaceChildren(...match.players[team].map((player, index) => {
        const sprite = crewSprite(player);
        const person = document.createElementNS(svgNS, sprite ? 'image' : 'use');
        person.setAttribute('href', sprite ? sprite.src : '#puller');
        person.setAttribute('x', layout.positions[index] + (sprite?.offsetX || 0));
        if (sprite) {
          person.setAttribute('y', sprite.y);
          person.setAttribute('width', sprite.width);
          person.setAttribute('height', sprite.height);
          person.setAttribute('data-character', sprite.character);
          person.addEventListener('error', () => {
            const fallback = document.createElementNS(svgNS, 'use');
            fallback.setAttribute('href', '#puller');
            sizeGenericCrew(fallback, layout.positions[index]);
            fallback.append(title.cloneNode(true));
            person.replaceWith(fallback);
            body.querySelector('.crew-frame-step')?.remove();
            member.classList.remove('crew-has-step');
            alignCrewGrip(body);
            renderActiveCrew(team);
          }, { once: true });
        } else sizeGenericCrew(person, layout.positions[index]);
        const title = document.createElementNS(svgNS, 'title');
        title.textContent = player.name;
        person.append(title);
        const member = document.createElementNS(svgNS, 'g');
        member.setAttribute('class', 'crew-idle-member');
        member.style.setProperty('--idle-duration', `${1.6 + (index % 4) * .18}s`);
        member.style.setProperty('--idle-delay', `${-(index * .37 + team * .23)}s`);
        member.style.setProperty('--react-delay', `${Math.min(index, 7) * 28}ms`);
        const groundY = sprite ? 177.6 : 174;
        const shadow = document.createElementNS(svgNS, 'ellipse');
        shadow.setAttribute('class', 'crew-shadow');
        shadow.setAttribute('cx', layout.positions[index] - 25);
        shadow.setAttribute('cy', groundY + 2);
        shadow.setAttribute('rx', 54);
        shadow.setAttribute('ry', 5);
        const body = document.createElementNS(svgNS, 'g');
        body.setAttribute('class', 'crew-body');
        body.dataset.gripX = layout.positions[index] + 20;
        body.append(person);
        if (sprite?.step) {
          person.setAttribute('class', 'crew-frame-base');
          const step = document.createElementNS(svgNS, 'image');
          step.setAttribute('class', 'crew-frame-step');
          step.setAttribute('x', layout.positions[index] + sprite.step.offsetX);
          step.setAttribute('y', sprite.step.y);
          step.setAttribute('width', sprite.step.width);
          step.setAttribute('height', sprite.step.height);
          step.addEventListener('load', () => {
            if (person.isConnected) member.classList.add('crew-has-step');
          }, { once: true });
          step.addEventListener('error', () => {
            member.classList.remove('crew-has-step');
            step.remove();
            alignCrewGrip(body);
          }, { once: true });
          body.append(step);
          step.setAttribute('href', sprite.step.src);
        }
        body.addEventListener('animationend', () => member.classList.remove('crew-pulling', 'crew-stumbling'));
        const dust = document.createElementNS(svgNS, 'g');
        dust.setAttribute('class', 'crew-dust');
        dust.setAttribute('transform', `translate(${layout.positions[index] - 25} ${groundY})`);
        for (let puffIndex = 0; puffIndex < 3; puffIndex++) {
          const puff = document.createElementNS(svgNS, 'ellipse');
          puff.setAttribute('class', 'crew-dust-puff');
          puff.setAttribute('cx', (puffIndex - 1) * 25);
          puff.setAttribute('cy', -2 - puffIndex % 2 * 3);
          puff.setAttribute('rx', 8 + puffIndex * 2);
          puff.setAttribute('ry', 4 + puffIndex);
          dust.append(puff);
        }
        member.append(shadow, body, dust);
        return member;
      }));
      crew.querySelectorAll('.crew-body').forEach(alignCrewGrip);
      const marker = document.createElementNS(svgNS, 'g');
      marker.setAttribute('class', 'crew-active-marker');
      const arrow = document.createElementNS(svgNS, 'path');
      arrow.setAttribute('class', 'crew-active-arrow');
      arrow.setAttribute('d', 'M-4-16H4V-9H11L0 0-11-9H-4Z');
      marker.append(arrow);
      crew.append(marker);
      renderActiveCrew(team);
    });
    document.querySelector('.arena').setAttribute('aria-label', `${names[0]}: ${match.players[0].length} players; ${names[1]}: ${match.players[1].length} players pulling the rope.`);
  }

  function renderRope() {
    const direction = match.position - lastRopePosition;
    lastRopePosition = match.position;
    const losingTeam = match.position < 0 ? 1 : 0;
    const players = match.players[losingTeam];
    const travel = crewLayout(players.length, players.map(player => crewSprite(player)?.rear || 81)).travel;
    $('pull-world').style.transform = `translateX(${match.position / match.limit * travel}px)`;
    reactCrews(direction);
    const lead = Math.abs(match.position);
    $('rope-status').textContent = lead ? `${names[match.position < 0 ? 0 : 1]} · ${lead}/${match.limit} PULLS` : 'EVENLY MATCHED';
    finishArmed = false;
    syncMatchControls();
  }

  function syncMatchControls() {
    const playing = currentScreen === 'game' && match?.phase === 'playing';
    $('finish').disabled = !playing || match.paused || match.position === 0;
    $('finish').textContent = finishArmed ? 'SURE?' : 'FINISH';
    $('finish').setAttribute('aria-pressed', String(finishArmed));
    $('match-timer').disabled = !playing || match.paused;
    $('pause').disabled = !playing;
    const seconds = match?.timerEndMs === null || !match ? null : Math.ceil(Math.max(0, match.timerEndMs - match.activeMs) / 1000);
    const label = seconds === null ? 'TIMER' : `TIMER · ${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
    if ($('match-timer').textContent !== label) $('match-timer').textContent = label;
  }

  function updateMatch(now) {
    match.trackTime(now);
    if (match.settle()) renderRope();
    if (match.phase === 'playing' && match.timerEndMs !== null && match.activeMs >= match.timerEndMs) match.finish('timer');
    syncMatchControls();
  }

  function completeMatch() {
    if (!match || match.phase !== 'finished' || $('game-over-dialog').open) return;
    cancelAnimationFrame(frame);
    clearTimeout(finishTimer);
    music?.pause();
    [0, 1].forEach(syncInputs);
    syncMatchControls();
    document.body.classList.add('game-over');
    $('game-over-dialog').showModal();
    const completed = match;
    finishTimer = setTimeout(() => { if (match === completed && currentScreen === 'game') showResult(); }, 3000);
  }

  function finishMatch() {
    if (currentScreen !== 'game' || match?.phase !== 'playing' || match.paused) return;
    updateMatch(performance.now());
    if (match.phase === 'finished') { completeMatch(); return; }
    if (!match.position) return;
    if (!finishArmed) { finishArmed = true; syncMatchControls(); return; }
    match.finish('manual');
    completeMatch();
  }

  function openTimer() {
    if (currentScreen !== 'game' || match?.phase !== 'playing' || match.paused) return;
    const now = performance.now();
    updateMatch(now);
    if (match.phase === 'finished') { completeMatch(); return; }
    finishArmed = false;
    match.pause(now);
    music?.pause();
    [0, 1].forEach(syncInputs);
    syncMatchControls();
    $('timer-dialog').showModal();
  }

  function runFrame(now) {
    if (!match || currentScreen !== 'game') return;
    if (!match.paused) {
      updateMatch(now);
      if (match.phase === 'finished') {
        completeMatch();
        return;
      }
      match.tick(now).forEach(renderSide);
    }
    frame = requestAnimationFrame(runFrame);
  }

  function startMatch() {
    if (groups.some(group => !group.length)) { toast('Add at least one student to each team.'); return; }
    try { match = new Match(selectedPool(), settings()); }
    catch (error) { toast(error.message); return; }
    const teacher = window.TeacherControl;
    match.classroomId = importedClassroomId || (teacher?.isActiveClassroomLocked?.() ? teacher.getActiveClassroomId?.() : '');
    match.players = assignMatchCharacters(groups);
    match.hudAwarded = new Set();
    match.hudBusy = false;
    lastRopePosition = 0;
    finishArmed = false;
    clearTimeout(finishTimer);
    cancelAnimationFrame(frame);
    media.fill(null);
    $('play-sides').replaceChildren();
    [0, 1].forEach(team => { $(`arena-name-${team}`).textContent = names[team]; renderSide(team); });
    showScreen('game');
    renderCrews();
    musicFailures = 0;
    playMusic(true);
    renderRope();
    match.trackTime(performance.now());
    frame = requestAnimationFrame(runFrame);
  }

  function showResult() {
    const draw = match.winner === null;
    const winner = names[match.winner];
    $('winner-name').textContent = draw ? 'DRAW' : `${winner} WINS!`;
    $('winner-name').style.color = draw ? '#ff8c00' : match.winner === 0 ? 'var(--blue)' : 'var(--orange)';
    $('result-stats').replaceChildren();
    match.sides.forEach((side, team) => {
      const card = element('div', undefined, 'result-stat');
      card.append(element('strong', names[team], team === 0 ? 'blue-text' : 'orange-text'),
        element('p', `${side.correct} correct · ${side.wrong} wrong`));
      $('result-stats').append(card);
    });
    const seconds = Math.floor(match.activeMs / 1000);
    const points = hudPoints(match);
    $('reward-summary').textContent = `+${points} HUD ${points === 1 ? 'POINT' : 'POINTS'} · ${draw ? 'EVERY PLAYER IN BOTH TEAMS' : `EVERY PLAYER IN ${winner}`}`;
    const ending = match.finishReason === 'timer' ? 'Time is up.' : match.finishReason === 'manual' ? 'Match finished.' : 'The other team crossed the centre line.';
    $('result-copy').textContent = `${ending} ${draw ? 'Both teams share the reward. ' : ''}${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')} active play.`;
    updateTransferButton();
    showScreen('result');
  }

  function updateTransferButton(message = '') {
    const classroom = window.TeacherControl?.getClassrooms?.().find(room => room.id === match.classroomId);
    const plan = winnerAwards(match.players, match.winner, hudPoints(match), classroom);
    const pending = plan.awards.filter(award => !match.hudAwarded.has(studentKey(award.name)));
    const done = match.hudAwarded.size > 0 && !pending.length && !plan.missing.length;
    $('transfer-points').disabled = done || match.hudBusy || match.hudUnconfirmed || !classroom || typeof window.TeacherControl?.awardFinalPoints !== 'function';
    $('transfer-points').textContent = done ? '✓ PUANLAR AKTARILDI' : "PUANLARI HUD'A AKTAR";
    $('transfer-status').textContent = message || (done ? 'Match points have reached the classroom roster.' : !classroom ? 'Import or lock a Teacher HUD classroom before starting a match to transfer points.' : `Target classroom: ${classroom.name || 'Classroom'}. Under 5 min: +1 · 5–10 min: +2 · 10–15 min: +3 · 15+ min: +4.`);
  }

  function transferPoints() {
    if (!match || match.phase !== 'finished' || currentScreen !== 'result' || match.hudBusy || match.hudUnconfirmed) return;
    const teacher = window.TeacherControl;
    const classroom = teacher?.getClassrooms?.().find(room => room.id === match.classroomId);
    if (!classroom || typeof teacher?.awardFinalPoints !== 'function') { updateTransferButton(); return; }
    const plan = winnerAwards(match.players, match.winner, hudPoints(match), classroom);
    if (plan.missing.length) { updateTransferButton(`Check these students in the original classroom roster: ${plan.missing.join(', ')}. No new points transferred.`); return; }
    const awards = plan.awards.filter(award => !match.hudAwarded.has(studentKey(award.name)));
    if (!awards.length) { updateTransferButton(); return; }
    match.hudBusy = true;
    updateTransferButton();
    let message = '';
    try {
      const result = teacher.awardFinalPoints(awards, match.classroomId);
      (result?.awarded || []).forEach(award => match.hudAwarded.add(studentKey(award.name)));
      if (result?.missing?.length) message = `Some students could not be matched: ${result.missing.join(', ')}. Already transferred students will not be awarded twice.`;
      else if (!result?.awarded?.length) message = 'No points were transferred. Check the original classroom roster and try again.';
    } catch { match.hudUnconfirmed = true; message = 'The HUD did not confirm the transfer. Check the roster. Transfer is locked for this match to prevent duplicate points.'; }
    finally { match.hudBusy = false; updateTransferButton(message); }
  }

  function pauseMatch() {
    if (currentScreen !== 'game' || match?.phase !== 'playing' || $('pace-dialog').open || $('pause-dialog').open || $('timer-dialog').open) return;
    const now = performance.now();
    updateMatch(now);
    if (match.phase === 'finished') { completeMatch(); return; }
    match.pause(now);
    finishArmed = false;
    music?.pause();
    [0, 1].forEach(syncInputs);
    syncMatchControls();
    $('music-volume-options').hidden = true;
    $('music-volume-toggle').setAttribute('aria-expanded', 'false');
    $('pause-dialog').showModal();
  }

  function resumeMatch() {
    if (currentScreen !== 'game' || match?.phase !== 'playing') return;
    if (match?.paused) match.resume(performance.now());
    playMusic();
    [0, 1].forEach(syncInputs);
    syncMatchControls();
    if (document.hidden) pauseMatch();
  }

  function leaveMatch() {
    cancelAnimationFrame(frame);
    clearTimeout(finishTimer);
    match = null;
    media.fill(null);
    $('pause-dialog').close();
    showScreen('setup');
    renderTeams();
  }

  $('add-form').addEventListener('submit', addStudent);
  [0, 1].forEach(team => $(`name-${team}`).addEventListener('input', renderTeams));
  document.querySelectorAll('[data-random-team-name]').forEach(button => button.addEventListener('click', () => {
    if (currentScreen !== 'setup') return;
    const team = Number(button.dataset.randomTeamName);
    const name = teamNamePool.next(team, names[1 - team], names[team]);
    if (!name) return;
    const input = $(`name-${team}`);
    input.value = name;
    input.title = name;
    renderTeams();
  }));
  $('import-roster').addEventListener('click', () => {
    if (!document.fullscreenElement) {
      try {
        document.documentElement.requestFullscreen().catch(() => toast('Full screen is not available in this window.'));
      } catch { toast('Full screen is not available in this window.'); }
    }
    importRoster();
  });
  $('balance').addEventListener('click', () => {
    const teams = window.TeamBalance.distribute(groups.flat(), 2);
    groups.forEach((group, index) => group.splice(0, group.length, ...teams[index]));
    renderTeams();
  });
  $('to-selection').addEventListener('click', () => { if (groups.every(group => group.length)) showScreen('selection'); });
  $('back-setup').addEventListener('click', () => showScreen('setup'));
  $('grade').addEventListener('change', updateUnits);
  $('all-units').addEventListener('click', () => {
    $('unit-checks').querySelectorAll('input:not(:disabled)').forEach(input => { input.checked = true; selectedUnits.add(Number(input.value)); }); updatePool();
  });
  $('clear-units').addEventListener('click', () => { selectedUnits.clear(); updateUnits(); });
  $('start').addEventListener('click', startMatch);
  $('pause').addEventListener('click', pauseMatch);
  $('finish').addEventListener('click', finishMatch);
  $('game-over-dialog').addEventListener('cancel', event => event.preventDefault());
  $('match-timer').addEventListener('click', openTimer);
  $('close-timer').addEventListener('click', () => $('timer-dialog').close());
  $('timer-dialog').addEventListener('close', resumeMatch);
  $('timer-dialog').querySelectorAll('[data-minutes]').forEach(button => button.addEventListener('click', () => {
    if (currentScreen !== 'game' || match?.phase !== 'playing' || !match.paused) return;
    if (match.startTimer(Number(button.dataset.minutes))) $('timer-dialog').close();
  }));
  $('resume').addEventListener('click', () => $('pause-dialog').close());
  $('music-volume-toggle').addEventListener('click', () => {
    const options = $('music-volume-options');
    options.hidden = !options.hidden;
    $('music-volume-toggle').setAttribute('aria-expanded', String(!options.hidden));
  });
  $('music-volume-options').querySelectorAll('[data-music-volume]').forEach(button => button.addEventListener('click', () => {
    setMusicVolume(button.dataset.musicVolume);
  }));
  $('pause-dialog').addEventListener('close', resumeMatch);
  $('leave-match').addEventListener('click', leaveMatch);
  $('new-teams').addEventListener('click', leaveMatch);
  $('rematch').addEventListener('click', startMatch);
  $('transfer-points').addEventListener('click', transferPoints);
  document.querySelectorAll('.pace-button').forEach(button => button.addEventListener('click', () => {
    if (currentScreen === 'game' && match?.phase !== 'playing') return;
    pacePausedMatch = currentScreen === 'game' && !match.paused;
    if (pacePausedMatch) { match.pause(performance.now()); music?.pause(); [0, 1].forEach(syncInputs); }
    $('rope-limit').disabled = currentScreen === 'game';
    $('pace-dialog').showModal();
  }));
  $('pace-dialog').addEventListener('close', () => {
    updateSettings();
    if (pacePausedMatch) resumeMatch();
    pacePausedMatch = false;
    if (document.hidden) pauseMatch();
  });
  ['correct-delay', 'wrong-delay', 'rope-limit'].forEach(id => $(id).addEventListener('input', updateSettings));
  $('lite').addEventListener('click', () => setLiteMode(!document.body.classList.contains('tug-lite')));
  $('fullscreen').addEventListener('click', async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch { toast('Full screen is not available in this window.'); }
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pauseMatch(); });
  let crewResizeFrame = 0;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(crewResizeFrame);
    crewResizeFrame = requestAnimationFrame(() => {
      if (currentScreen === 'game' && match) { renderCrews(); renderRope(); }
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') pauseMatch();
    if (finalMusicPending) playFinalMusic();
  });
  document.addEventListener('pointerdown', () => {
    if (finalMusicPending) playFinalMusic();
    else if (music?.paused) playMusic();
  });
  window.addEventListener('pagehide', () => { music?.pause(); stopFinalPresentation(); });
  window.addEventListener('pageshow', () => { if (currentScreen === 'result') startFinalPresentation(); });
  loadSettings();
  updateSettings();
  renderTeams();
  initializeCatalog();
})();
