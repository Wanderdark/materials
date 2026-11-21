(() => {
  'use strict';
  const grid = document.getElementById('songGrid');
  let libraryTimer;
  let launchingSong = false;
  window.SongPresenterTransitions = {
    flyWord(chip, slot) {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const from = chip.getBoundingClientRect();
      const to = slot.getBoundingClientRect();
      if (!from.width || !from.height || !to.width || !to.height) return;
      const copy = chip.cloneNode(true);
      copy.className = 'word-chip sp-word-flight';
      copy.setAttribute('aria-hidden', 'true');
      copy.style.cssText = `left:${from.left}px;top:${from.top}px;width:${from.width}px;height:${from.height}px;--word-x:${to.left - from.left}px;--word-y:${to.top - from.top}px;--word-sx:${to.width / from.width};--word-sy:${to.height / from.height};`;
      document.body.appendChild(copy);
      chip.classList.add('sp-word-source');
      slot.classList.add('sp-word-arriving');
      setTimeout(() => {
        copy.remove();
        chip.classList.remove('sp-word-source');
        slot.classList.remove('sp-word-arriving');
      }, 520);
    },
    launchSong(card, start) {
      if (launchingSong) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) { start(); return; }
      launchingSong = true;
      clearTimeout(libraryTimer);
      grid.classList.remove('sp-library-enter', 'sp-library-exit');
      grid.classList.add('sp-song-departing');
      const library = document.getElementById('libraryScreen');
      const rect = card.getBoundingClientRect();
      const layer = document.createElement('div');
      layer.className = 'sp-song-launch-layer';
      layer.setAttribute('aria-hidden', 'true');
      const copy = card.cloneNode(true);
      card.classList.add('sp-song-selected');
      copy.classList.add('sp-song-launch');
      copy.tabIndex = -1;
      copy.style.cssText = `left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;--launch-x:${innerWidth / 2 - rect.left - rect.width / 2}px;--launch-y:${innerHeight / 2 - rect.top - rect.height / 2}px;--launch-scale:${Math.max(3, Math.hypot(innerWidth, innerHeight) / Math.max(1, Math.min(rect.width, rect.height)) * 1.05)};`;
      layer.appendChild(copy);
      document.body.appendChild(layer);
      library.inert = true;
      setTimeout(() => {
        layer.remove();
        library.inert = false;
        launchingSong = false;
        start();
      }, 900);
    },
    changeLibrary(render) {
      clearTimeout(libraryTimer);
      grid.classList.remove('sp-library-enter', 'sp-library-exit');
      if (!grid.childElementCount || matchMedia('(prefers-reduced-motion: reduce)').matches) {
        grid.inert = false;
        render();
        return;
      }
      grid.inert = true;
      grid.classList.add('sp-library-exit');
      libraryTimer = setTimeout(() => {
        render();
        grid.classList.replace('sp-library-exit', 'sp-library-enter');
        grid.inert = false;
        libraryTimer = setTimeout(() => grid.classList.remove('sp-library-enter'), 450);
      }, 360);
    }
  };
  const views = [
    ['libraryScreen', ':scope > *'],
    ['activityScreen', false],
    ['completeScreen', '.complete-card > :not(#duelFinalScores)'],
    ['duelSetupOverlay', '.duel-modal'],
    ['duelRosterOverlay', '.duel-modal'],
    ['duelReadyOverlay'],
    ['trainingReplayPrompt'],
    ['duelFinalScores', '.winner-wrapper']
  ];
  function sync(root) {
    root.inert = root.hidden || root.classList.contains('hidden');
    if (root.id === 'libraryScreen' && !root.inert) {
      grid.classList.remove('sp-song-departing');
      grid.querySelectorAll('.sp-song-selected').forEach(card => card.classList.remove('sp-song-selected'));
    }
  }
  const observer = new MutationObserver(records => {
    records.forEach(({ target }) => sync(target));
  });
  views.forEach(([id, selector]) => {
    const root = document.getElementById(id);
    if (!root) return;
    root.classList.add('sp-motion-root');
    const panels = selector === false ? [] : selector ? root.querySelectorAll(selector) : [root];
    panels.forEach(panel => panel.setAttribute('data-sp-motion-panel', ''));
    sync(root);
    observer.observe(root, { attributes: true, attributeFilter: ['class', 'hidden'] });
  });
})();
