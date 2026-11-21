(() => {
  'use strict';
  const selector = '.modal, .omni-mode-dialog, #decision-overlay, #answer-overlay, #evidence-overlay, #setup-screen, #round-screen, #final-screen, #transcript-panel, #answer-panel';
  const registered = new WeakSet();
  const stateObserver = new MutationObserver(records => {
    records.forEach(({ target }) => { target.inert = target.hidden; });
  });
  function register(root) {
    if (registered.has(root)) return;
    registered.add(root);
    root.classList.add('ll-motion-root');
    const panels = root.matches('.modal') ? root.querySelectorAll(':scope > .modal-card')
      : root.matches('.omni-mode-dialog') ? root.querySelectorAll(':scope > .omni-selector-card')
      : [...root.children];
    panels.forEach(panel => panel.setAttribute('data-ll-motion-panel', ''));
    root.inert = root.hidden;
    stateObserver.observe(root, { attributes: true, attributeFilter: ['hidden'] });
  }
  function scan(node) {
    if (node.nodeType !== 1) return;
    if (node.matches(selector)) register(node);
    node.querySelectorAll(selector).forEach(register);
  }
  document.querySelectorAll(selector).forEach(register);
  new MutationObserver(records => {
    records.forEach(record => record.addedNodes.forEach(scan));
  }).observe(document.body, { childList: true, subtree: true });
  window.LeagueListeningTransitions = {
    closeNative(dialog) {
      dialog.close();
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.setTimeout(() => dialog.remove(), reduced ? 0 : 360);
    }
  };
})();
