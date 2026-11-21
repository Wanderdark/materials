(() => {
  'use strict';
  const views = new Map();
  const observer = new MutationObserver(records => {
    new Set(records.map(record => record.target)).forEach(update);
  });

  function update(root) {
    const mode = views.get(root);
    const visible = mode === 'style' ? root.style.display !== 'none'
      : mode === 'hidden' ? !root.classList.contains('hidden') : root.classList.contains(mode);
    root.classList.toggle('gm-motion-visible', visible);
    root.inert = !visible;
  }

  function register(root, mode, panels) {
    if (!root || views.has(root)) return;
    views.set(root, mode);
    root.classList.add('gm-motion-root');
    panels.forEach(panel => panel.setAttribute('data-gm-motion-panel', ''));
    update(root);
    observer.observe(root, { attributes: true, attributeFilter: ['class', 'style'] });
  }

  document.querySelectorAll('#app > .screen:not(#game-screen)').forEach(root => {
    if (root.id === 'hub-screen') {
      register(root, 'open', root.querySelectorAll('.menu-hub > *'));
      return;
    }
    const panels = root.querySelectorAll(':scope > .wo-panel, :scope > .sc-modal, :scope > .result-shell');
    register(root, 'open', panels.length ? panels : [...root.children]);
  });
  document.querySelectorAll('#app > .overlay').forEach(root => {
    register(root, 'hidden', root.querySelectorAll(':scope > .modal-panel'));
  });
  [
    ['cat-preview-overlay', 'open', '.cp-modal'],
    ['adv-joker-overlay', 'style', '.adv-joker-panel'],
    ['adv-exit-confirm-overlay', 'open', '.adv-exit-confirm-panel'],
    ['adv-shop-overlay', 'open', '.adv-shop-panel'],
    ['adv-completed-overlay', 'open', '.adv-completed-panel'],
    ['adv-run-failed-overlay', 'open', '.adv-run-failed-panel'],
    ['adv-preview-overlay', 'open', '.adv-prev-panel'],
    ['wc-badge-reveal', 'open', '.wo-badge-reveal-panel'],
    ['auto-lb', 'show']
  ].forEach(([id, mode, selector]) => {
    const root = document.getElementById(id);
    if (root) register(root, mode, selector ? root.querySelectorAll(selector) : [root]);
  });
})();
