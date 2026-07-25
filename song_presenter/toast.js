/**
 * Toast Notification Module
 * ─────────────────────────
 * Self-contained, auto-injects CSS and container.
 * Extracted from WORD OVERLORD (2026-06).
 *
 * Usage:
 *   ToastManager.init()                        // call once, usually on DOMContentLoaded
 *   ToastManager.show('message')               // 10s, default style
 *   ToastManager.show('message', 'warn')       // 10s, red warning style
 *   ToastManager.show('message', null, 5000)   // custom duration ms
 *
 * To wire up a global showToast() compatible with old games:
 *   ToastManager.init({ global: true });
 *   // now window.showToast(msg, duration, type) works
 *
 * Host dependencies:
 *   - Fonts: 'Barlow Condensed', 'Bebas Neue' (fallback to sans-serif)
 *
 * Options passed to init():
 *   global   {boolean} — expose window.showToast()          default: false
 *   position {string}  — 'left' | 'right'                   default: 'left'
 *   top      {string}  — CSS top value for stack             default: '80px'
 *   duration {number}  — default ms before auto-dismiss      default: 10000
 *
 * Color themes (cycle automatically, never repeats consecutive):
 *   wt-navy  : navy bg, yellow text
 *   wt-red   : red bg, yellow text
 *   wt-black : black bg, white text
 *   wt-green : green bg, white text
 *   warn     : dark red bg, pink text (always used for type='warn')
 */

const ToastManager = (() => {

  /* ── CSS ──────────────────────────────────────────────────────────── */
  const CSS = `
#wo-toast-stack {
  position: fixed;
  z-index: 9800;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
  width: 370px;
}
.wo-toast {
  border-radius: 10px;
  padding: 13px 18px 13px 15px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 18px;
  letter-spacing: .08em;
  pointer-events: all;
  cursor: pointer;
  white-space: normal;
  word-break: break-word;
  opacity: 0;
  transition: transform .38s cubic-bezier(.175,.885,.32,1.275), opacity .3s;
}
#wo-toast-stack.left  .wo-toast        { transform: translateX(calc(-100% - 30px)); }
#wo-toast-stack.right .wo-toast        { transform: translateX(calc(100% + 30px)); }
#wo-toast-stack.left  .wo-toast.show   { transform: translateX(0); opacity: 1; }
#wo-toast-stack.right .wo-toast.show   { transform: translateX(0); opacity: 1; }
#wo-toast-stack.left  .wo-toast.hiding { transform: translateX(calc(-100% - 30px)); opacity: 0; }
#wo-toast-stack.right .wo-toast.hiding { transform: translateX(calc(100% + 30px)); opacity: 0; }
.wo-toast.wt-navy  { background:#0d1b4b; border:1px solid #f5c518; border-left:4px solid #f5c518; color:#f5c518; }
.wo-toast.wt-red   { background:#7a0c0c; border:1px solid #f5c518; border-left:4px solid #f5c518; color:#f5c518; }
.wo-toast.wt-black { background:#111;    border:1px solid #aaa;    border-left:4px solid #aaa;    color:#fff; }
.wo-toast.wt-green { background:#0a4a1f; border:1px solid #4ade80; border-left:4px solid #4ade80; color:#fff; }
.wo-toast.warn {
  background: rgba(60,0,0,.97);
  border: 1px solid #f87171;
  border-left: 4px solid #f87171;
  color: #fca5a5;
  font-size: 19px;
  letter-spacing: .12em;
  font-family: 'Bebas Neue', sans-serif;
}
`;

  /* ── State ────────────────────────────────────────────────────────── */
  let _stack = null;
  let _cssInjected = false;
  let _defaultDuration = 10000;
  let _lastThemeIdx = -1;
  const _THEMES = ['wt-navy', 'wt-red', 'wt-black', 'wt-green'];

  /* ── Internals ────────────────────────────────────────────────────── */
  function _injectCSS() {
    if (_cssInjected) return;
    const style = document.createElement('style');
    style.id = 'wo-toast-styles';
    style.textContent = CSS;
    document.head.appendChild(style);
    _cssInjected = true;
  }

  function _ensureStack(position, top) {
    if (_stack && document.contains(_stack)) return;
    _stack = document.createElement('div');
    _stack.id = 'wo-toast-stack';
    _stack.className = position === 'right' ? 'right' : 'left';
    _stack.style.top = top || '80px';
    if (position === 'right') {
      _stack.style.right = '20px';
    } else {
      _stack.style.left = '20px';
    }
    document.body.appendChild(_stack);
  }

  function _pickTheme() {
    let idx;
    do { idx = Math.floor(Math.random() * _THEMES.length); } while (idx === _lastThemeIdx);
    _lastThemeIdx = idx;
    return _THEMES[idx];
  }

  /* ── Public API ───────────────────────────────────────────────────── */

  /**
   * Initialize the module. Call once on page load.
   * @param {object} [opts]
   * @param {boolean} [opts.global=false]    — expose window.showToast()
   * @param {string}  [opts.position='left'] — 'left' | 'right'
   * @param {string}  [opts.top='80px']      — CSS top for the stack
   * @param {number}  [opts.duration=10000]  — default auto-dismiss ms
   */
  function init(opts = {}) {
    _injectCSS();
    _defaultDuration = opts.duration ?? 10000;
    _ensureStack(opts.position, opts.top);

    if (opts.global) {
      window.showToast = (msg, duration, type) => show(msg, type, duration);
    }
  }

  /**
   * Show a toast notification.
   * @param {string} msg          — message text
   * @param {string} [type]       — 'warn' for red style, omit for auto color theme
   * @param {number} [duration]   — override auto-dismiss ms
   */
  function show(msg, type, duration) {
    if (!_stack) {
      _injectCSS();
      _ensureStack('left', '80px');
    }

    const t = document.createElement('div');
    t.className = 'wo-toast ' + (type === 'warn' ? 'warn' : _pickTheme());
    t.textContent = msg;
    _stack.appendChild(t);

    // Double rAF ensures the browser has painted the initial state before transitioning
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));

    function dismiss() {
      t.classList.add('hiding');
      t.classList.remove('show');
      setTimeout(() => t.remove(), 400);
    }

    const timer = setTimeout(dismiss, duration ?? _defaultDuration);
    t.addEventListener('click', () => { clearTimeout(timer); dismiss(); }, { once: true });
  }

  return { init, show };

})();
