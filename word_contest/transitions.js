(() => {
  'use strict';

  const views = {
    'main-menu': { panel: '.mm-wrap', display: 'flex' },
    'settings-overlay': { panel: '.settings-modal', display: 'flex' },
    'name-overlay': { panel: '.name-modal', display: 'flex' },
    'student-overlay': { panel: '.std-modal', display: 'flex' },
    'content-selection-overlay': { panel: '.settings-modal', display: 'flex' },
    'diff-overlay': { panel: '.diff-modal', display: 'flex' },
    'wc-roster-class-overlay': { panel: '.wc-roster-modal', className: 'hidden', display: 'flex' },
    'attendance-overlay': { panel: '.att-modal', className: 'hidden', display: 'flex' },
    'overlay': { panel: '.modal', className: 'open', display: 'flex' },
    'joker-overlay': { panel: '.joker-modal', className: 'open', display: 'flex' },
    'askfriend-confirm': { panel: '.afc-modal', className: 'open', display: 'flex' },
    'img-joker-overlay': { panel: '.ij-modal', className: 'open', display: 'flex' },
    'multichoice-overlay': { className: 'open', display: 'block' },
    'override-overlay': { panel: '.override-modal', className: 'open', display: 'flex' },
    'scores-overlay': { panel: '.scores-wrapper', className: 'open', display: 'flex' },
    'winner-overlay': { panel: '.winner-wrapper', className: 'open', display: 'flex' },
    'end-confirm': { className: 'open', display: 'block' },
    'correct-img-overlay': { panel: 'img', className: 'show', display: 'flex' },
    'wrong-img-overlay': { panel: 'img', className: 'show', display: 'flex' },
    'round-popup': { panel: '#round-popup-text', className: 'show', display: 'flex' },
    'auto-lb': { className: 'show', display: 'block' },
    'toast': { className: 'show', display: 'block' },
    'app': { display: 'flex' }
  };
  const states = new WeakMap();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function resolve(view) {
    const root = typeof view === 'string' ? document.getElementById(view) : view;
    if (!root || !views[root.id]) return null;
    if (!states.has(root)) {
      const config = views[root.id];
      const panel = root.querySelector(config.panel || ':scope') || root;
      root.classList.add('wc-motion-root');
      panel.classList.add('wc-motion-panel');
      root.style.setProperty('--wc-motion-display', config.display);
      states.set(root, { config, panel, inert: root.inert, visible: false, animations: [], finish: null });
    }
    return root;
  }

  function updateVisibility(root, config, visible) {
    if (config.className) {
      root.classList.toggle(config.className, config.className === 'hidden' ? !visible : visible);
    } else {
      root.style.display = visible ? config.display : 'none';
    }
  }

  function setVisible(view, visible) {
    const root = resolve(view);
    if (!root) return Promise.resolve();
    const state = states.get(root);
    if (state.visible === visible) return state.pending || Promise.resolve();

    const { config, panel } = state;
    const opacity = state.animations.length ? getComputedStyle(root).opacity : (visible ? '0' : '1');
    const scale = state.animations.length ? getComputedStyle(panel).scale : (visible ? '.86' : '1');
    state.finish?.();
    state.visible = visible;
    updateVisibility(root, config, visible);

    const previousOpacity = root.style.opacity;
    root.style.opacity = '1';
    root.inert = !visible || state.inert;
    root.toggleAttribute('data-wc-closing', !visible);

    let complete;
    state.pending = new Promise(resolve => { complete = resolve; });
    const finish = () => {
      state.animations.forEach(animation => animation.cancel());
      state.animations = [];
      root.removeAttribute('data-wc-closing');
      root.style.opacity = previousOpacity;
      root.inert = !visible || state.inert;
      state.finish = null;
      complete();
    };
    state.finish = finish;

    if (reducedMotion.matches || typeof root.animate !== 'function') {
      finish();
      if (!visible) root.dispatchEvent(new Event('wc-motion-hidden'));
      return state.pending;
    }

    const timing = {
      duration: visible ? 450 : 360,
      easing: visible ? 'cubic-bezier(.2, .7, .25, 1)' : 'cubic-bezier(.55, 0, .8, .4)',
      fill: 'both'
    };
    const fade = root.animate([{ opacity }, { opacity: visible ? 1 : 0 }], timing);
    const zoom = panel.animate([{ scale: scale === 'none' ? '1' : scale }, { scale: visible ? '1' : '.86' }], timing);
    state.animations = [fade, zoom];
    Promise.all(state.animations.map(animation => animation.finished)).then(() => {
      if (state.finish !== finish) return;
      finish();
      if (!visible) root.dispatchEvent(new Event('wc-motion-hidden'));
    }, () => {});
    return state.pending;
  }

  window.WcTransitions = {
    show: view => setVisible(view, true),
    hide: view => setVisible(view, false),
    toggle(view) {
      const root = resolve(view);
      return root ? setVisible(root, !states.get(root).visible) : Promise.resolve();
    }
  };

  Object.keys(views).forEach(resolve);
})();
