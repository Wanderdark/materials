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

  let muted = false;
  let comboSoundIndex = 0;
  let bgMusic = null;
  let bgStarted = false;

  function play(name) {
    if (muted || !SOUNDS[name]) {
      return;
    }

    try {
      const audio = new Audio(resolveSource(name));
      audio.volume = volumes[name] ?? 0.7;
      audio.play().catch(() => {});
    } catch (error) {
      // Audio playback can be blocked until the first user gesture.
    }
  }

  function resolveSource(name) {
    const source = SOUNDS[name];

    if (!Array.isArray(source)) {
      return source;
    }

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
      bgMusic.volume = muted ? 0 : 0.3;
      bgMusic.play().catch(() => {});
    } catch (_) {}
  }

  function toggleMute() {
    muted = !muted;
    if (bgMusic) bgMusic.volume = muted ? 0 : 0.3;
    return muted;
  }

  function isMuted() {
    return muted;
  }

  window.WordCrushAudio = {
    play,
    startMusic,
    toggleMute,
    isMuted
  };
})();
