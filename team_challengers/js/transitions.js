(() => {
  'use strict';
  const views = [
    ['setup-screen', '.brand-lockup, .setup-grid'],
    ['selection-screen', '.selection-heading, .curriculum-grid, .selection-actions'],
    ['game-screen', false],
    ['round-screen', '.decision-card'],
    ['roster-dialog', '.modal-card'],
    ['team-scores-overlay', '.team-scores-card'],
    ['questions-exhausted-overlay', '.questions-exhausted-card'],
    ['tc-joker-overlay', '.tc-joker-modal'],
    ['winner-overlay', '.winner-wrapper', 'open'],
    ['award-breakdown-overlay', '.award-breakdown-card', 'open'],
    ['auto-lb', null, 'show'],
    ['wheel-zone'],
    ['difficulty-zone'],
    ['question-zone']
  ];
  views.forEach(([id, selector, visibleClass]) => {
    const root = document.getElementById(id);
    if (!root) return;
    root.classList.add('tc-motion-root');
    const panels = selector === false ? [] : selector ? root.querySelectorAll(selector) : [root];
    panels.forEach(panel => panel.setAttribute('data-tc-motion-panel', ''));
    function sync() {
      const closed = root.hidden || (visibleClass && !root.classList.contains(visibleClass));
      root.dataset.tcMotionState = closed ? 'closed' : 'open';
      root.inert = !!closed;
    }
    sync();
    new MutationObserver(sync).observe(root, { attributes: true, attributeFilter: ['hidden', 'class'] });
  });
})();
