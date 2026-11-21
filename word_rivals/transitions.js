(() => {
  'use strict';

  const views = [
    ['main-menu', 'hidden', null, true],
    ['gm-overlay', 'hidden', '.gm-modal'],
    ['name-overlay', 'hidden', '.name-modal'],
    ['student-overlay', 'hidden', '.std-modal'],
    ['attendance-overlay', 'hidden', '.att-modal'],
    ['rvr-roster-class-overlay', 'hidden', '.rvr-roster-modal'],
    ['avatar-select-overlay', 'hidden', '.avs-modal'],
    ['avs-confirm-dialog', 'hidden'],
    ['settings-overlay', 'open', '.sc-modal'],
    ['content-selection-overlay', 'open', '.sc-modal'],
    ['cat-preview-overlay', 'open', '.cp-modal'],
    ['joker-overlay', 'open', '.joker-modal'],
    ['duel-start-overlay', 'open', '.dso-modal'],
    ['duel-result-overlay', 'open', '.dro-modal'],
    ['round-over-overlay', 'open', '.rov-modal'],
    ['countdown-overlay', 'open', '#countdown-text'],
    ['coinflip-overlay', 'open', '.cf-modal'],
    ['scores-overlay', 'open', '.scores-wrapper'],
    ['tb-result-overlay', 'open', '.tbr-wrapper'],
    ['auto-lb', 'show'],
    ['round-announce', 'show', '#ra-text'],
    ['rb-wheel-a', 'rb-show'],
    ['rb-wheel-b', 'rb-show'],
    ['rb-win-card-a', 'show'],
    ['rb-win-card-b', 'show'],
    ['rb-last-chance-a', 'rb-lc-show', '.rb-lc-text'],
    ['rb-last-chance-b', 'rb-lc-show', '.rb-lc-text'],
    ['tb-gr-a', 'show', null, true],
    ['tb-gr-b', 'show', null, true]
  ];
  const states = new Map();
  const viewClasses = {
    hidden: 'rvr-hidden-view',
    open: 'rvr-open-view',
    show: 'rvr-show-view',
    'rb-show': 'rvr-wheel-view',
    'rb-lc-show': 'rvr-last-view'
  };

  function updateInteraction(root) {
    const stateClass = states.get(root);
    const active = root.classList.contains(stateClass);
    root.inert = stateClass === 'hidden' ? active : !active;
  }

  const observer = new MutationObserver(records => {
    records.forEach(record => updateInteraction(record.target));
  });

  views.forEach(([id, stateClass, panelSelector, wrapContent]) => {
    const root = document.getElementById(id);
    if (!root) return;
    let panel = panelSelector ? root.querySelector(panelSelector) : root;
    if (wrapContent) {
      panel = document.createElement('div');
      panel.className = 'rvr-motion-content';
      panel.append(...root.childNodes);
      root.append(panel);
    }
    root.classList.add('rvr-motion-root', viewClasses[stateClass]);
    (panel || root).setAttribute('data-rvr-motion-panel', '');
    if (id === 'countdown-overlay' && panel) panel.setAttribute('data-rvr-keep-animation', '');
    states.set(root, stateClass);
    updateInteraction(root);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
  });

  const imageEntries = new WeakMap();
  let gameEntry = null;
  window.RvrTransitions = {
    revealImage(img, src) {
      imageEntries.get(img)?.cancel();
      img.style.opacity = '0';
      img.onload = () => {
        img.style.opacity = '';
        if (document.body.classList.contains('lite') || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !img.animate) return;
        imageEntries.set(img, img.animate([
          { opacity: 0, scale: '.7' },
          { opacity: 1, scale: '1' }
        ], { duration: 450, easing: 'cubic-bezier(.2, .7, .25, 1)' }));
      };
      img.src = src;
    },
    revealGame() {
      const game = document.getElementById('game-wrap');
      gameEntry?.cancel();
      if (!game || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !game.animate) return;
      gameEntry = game.animate([
        { opacity: 0, scale: '.86' },
        { opacity: 1, scale: '1' }
      ], { duration: 450, easing: 'cubic-bezier(.2, .7, .25, 1)' });
    }
  };
})();
