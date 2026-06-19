(function () {
  const SOUNDS = {
    gemShatter: "sounds/gemshatter.mp3",
    combo: ["sounds/combo.mp3", "sounds/combo2.mp3"],
    star: "sounds/star.mp3"
  };

  const volumes = {
    gemShatter: 0.72,
    combo: 0.78,
    star: 0.8
  };

  const MUSIC_VOL_KEY = 'wc_music_vol';

  let muted = false;
  let comboSoundIndex = 0;
  let bgMusic = null;
  let bgStarted = false;
  let rumbleTimer = null;
  let musicSuppressed = false;
  let _musicVol = Math.max(0, Math.min(100, Number(localStorage.getItem(MUSIC_VOL_KEY)) || 30));

  function applyMusicVolume() {
    if (bgMusic) bgMusic.volume = muted || musicSuppressed ? 0 : _musicVol / 100;
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

    try {
      const rumble = new Audio("sounds/rumble.mp3");
      rumble.volume = 1;
      rumble.play().catch(() => {});
    } catch (_) {}

    rumbleTimer = window.setTimeout(() => {
      musicSuppressed = false;
      rumbleTimer = null;
      applyMusicVolume();
    }, 10000);
  }

  window.WordCrushAudio = {
    play,
    startMusic,
    setMusicVolume,
    getMusicVolume,
    toggleMute,
    isMuted,
    playRumble
  };
})();
