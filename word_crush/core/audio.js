(function () {
  const SOUNDS = {
    gemShatter: "sounds/gemshatter.mp3",
    combo: ["sounds/combo.mp3", "sounds/combo2.mp3"],
    star: "sounds/star.mp3",
    rumble: "sounds/rumble.mp3"
  };

  const volumes = {
    gemShatter: 0.72,
    combo: 0.78,
    star: 0.8,
    rumble: 1
  };

  const MUSIC_VOL_KEY = 'wc_music_vol';

  let muted = false;
  let comboSoundIndex = 0;
  let bgMusic = null;
  let bgStarted = false;
  let rumbleTimer = null;
  let rumbleAudio = null;
  let musicSuppressed = false;
  let timeWarpMusicActive = false;
  let _musicVol = Math.max(0, Math.min(100, Number(localStorage.getItem(MUSIC_VOL_KEY)) || 30));

  function applyMusicVolume() {
    if (bgMusic) bgMusic.volume = muted || musicSuppressed ? 0 : _musicVol / 100;
  }

  function applyMusicPlaybackRate() {
    if (!bgMusic) return;
    bgMusic.playbackRate = timeWarpMusicActive ? 0.45 : 1;
    ["preservesPitch", "mozPreservesPitch", "webkitPreservesPitch"].forEach((property) => {
      if (property in bgMusic) bgMusic[property] = !timeWarpMusicActive;
    });
  }

  function play(name) {
    if (!SOUNDS[name]) return;
    try {
      const audio = new Audio(resolveSource(name));
      audio.volume = volumes[name] ?? 0.7;
      audio.play().catch(() => {});
    } catch (_) {}
  }

  function resolveSource(name) {
    const source = SOUNDS[name];
    if (!Array.isArray(source)) return source;
    const selected = source[comboSoundIndex % source.length];
    comboSoundIndex += 1;
    return selected;
  }

  function startMusic() {
    if (bgStarted) return;
    bgStarted = true;
    try {
      bgMusic = new Audio("sounds/main.mp3");
      bgMusic.loop = true;
      applyMusicVolume();
      applyMusicPlaybackRate();
      bgMusic.play().catch(() => {});
    } catch (_) {}
  }

  function setMusicVolume(v) {
    _musicVol = Math.max(0, Math.min(100, Number(v) || 0));
    localStorage.setItem(MUSIC_VOL_KEY, _musicVol);
    applyMusicVolume();
  }

  function getMusicVolume() {
    return _musicVol;
  }

  function toggleMute() {
    muted = !muted;
    applyMusicVolume();
    return muted;
  }

  function isMuted() {
    return muted;
  }

  function playRumble() {
    musicSuppressed = true;
    applyMusicVolume();
    if (rumbleTimer) window.clearTimeout(rumbleTimer);
    if (rumbleAudio) {
      rumbleAudio.pause();
      rumbleAudio.currentTime = 0;
    }

    try {
      rumbleAudio = new Audio("sounds/rumble.mp3");
      rumbleAudio.volume = 1;
      rumbleAudio.play().catch(() => {});
    } catch (_) {}

    rumbleTimer = window.setTimeout(() => {
      rumbleAudio = null;
      musicSuppressed = false;
      rumbleTimer = null;
      applyMusicVolume();
    }, 10000);
  }

  function stopRumble() {
    if (rumbleTimer) window.clearTimeout(rumbleTimer);
    rumbleTimer = null;
    if (rumbleAudio) {
      rumbleAudio.pause();
      rumbleAudio.currentTime = 0;
      rumbleAudio = null;
    }
    musicSuppressed = false;
    applyMusicVolume();
  }

  function setTimeWarpMusic(active) {
    timeWarpMusicActive = Boolean(active);
    applyMusicPlaybackRate();
  }

  window.WordCrushAudio = {
    play,
    startMusic,
    setMusicVolume,
    getMusicVolume,
    toggleMute,
    isMuted,
    playRumble,
    stopRumble,
    setTimeWarpMusic
  };
})();
