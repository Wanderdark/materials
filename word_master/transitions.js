(() => {
  'use strict';
  const views = [
    ['main-menu', 'style', ':scope > *'],
    ['settings-overlay', 'style', '.diff-modal'],
    ['content-selection-overlay', 'style', '.diff-modal'],
    ['student-overlay', 'style', '.std-modal'],
    ['name-overlay', 'style', '.name-modal'],
    ['attendance-overlay', 'hidden', '.att-modal'],
    ['roster-class-overlay', 'hidden', '.roster-class-modal'],
    ['letter-overlay', 'open', '.letter-modal'],
    ['q-overlay', 'open', '.q-ov-header, .q-ov-body'],
    ['joker-overlay', 'open', '.joker-modal'],
    ['overlay', 'open', '.modal'],
    ['winner-overlay', 'open', '.winner-wrapper'],
    ['scores-overlay', 'open', '.scores-wrapper'],
    ['override-overlay', 'open', '.override-modal'],
    ['end-confirm', 'open'],
    ['round-overlay', 'hidden', ':scope > *'],
    ['goforit-overlay', 'style'],
    ['auto-lb', 'show'],
    ['wheel-overlay', 'style', ':scope > *'],
    ['wheel-spin-phase', 'style'],
    ['wheel-word-challenge', 'style'],
    ['wheel-challenge-box', 'style'],
    ['correct-img-overlay', 'show', 'img'],
    ['wrong-img-overlay', 'show', 'img']
  ];
  const modes = new Map();
  function update(root) {
    const mode = modes.get(root);
    const visible = mode === 'style' ? root.style.display !== 'none' && !root.classList.contains('hidden')
      : mode === 'hidden' ? !root.classList.contains('hidden') : root.classList.contains(mode);
    root.classList.toggle('wm-motion-visible', visible);
    root.inert = !visible;
  }
  const observer = new MutationObserver(records => {
    new Set(records.map(record => record.target)).forEach(update);
  });
  views.forEach(([id, mode, selector]) => {
    const root = document.getElementById(id);
    if (!root) return;
    modes.set(root, mode);
    root.classList.add('wm-motion-root');
    const panels = selector ? root.querySelectorAll(selector) : [root];
    panels.forEach(panel => panel.setAttribute('data-wm-motion-panel', ''));
    update(root);
    observer.observe(root, { attributes: true, attributeFilter: ['class', 'style'] });
  });

  const wordAnimations = new WeakMap();
  const wordMotion = () => !document.body.classList.contains('lite-mode')
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.WmTransitions = {
    enterWords(node) {
      if (!node) return;
      wordAnimations.get(node)?.cancel();
      if (!wordMotion() || !node.animate) return;
      wordAnimations.set(node, node.animate([{ opacity: 0, scale: '.7' }, { opacity: 1, scale: '1' }],
        { duration: 450, easing: 'cubic-bezier(.2, .7, .25, 1)' }));
    },
    leaveWords(node) {
      if (!node || (!node.textContent.trim() && !node.children.length) || !wordMotion() || !node.animate) return;
      const rect = node.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const clone = node.cloneNode(true);
      clone.removeAttribute('id');
      clone.querySelectorAll('[id]').forEach(child => child.removeAttribute('id'));
      clone.setAttribute('aria-hidden', 'true');
      clone.classList.add('wm-word-exit');
      const style = getComputedStyle(node);
      Object.assign(clone.style, {
        left: rect.left + 'px', top: rect.top + 'px', width: rect.width + 'px', height: rect.height + 'px',
        font: style.font, color: style.color, textAlign: style.textAlign,
        letterSpacing: style.letterSpacing, lineHeight: style.lineHeight,
        display: style.display, gap: style.gap, alignItems: style.alignItems, justifyContent: style.justifyContent,
        animation: 'none', transform: 'none', scale: '1'
      });
      document.body.append(clone);
      clone.animate([{ opacity: 1, scale: '1' }, { opacity: 0, scale: '.7' }],
        { duration: 360, easing: 'cubic-bezier(.55, 0, .8, .4)', fill: 'forwards' })
        .finished.then(() => clone.remove(), () => clone.remove());
    }
  };
})();
