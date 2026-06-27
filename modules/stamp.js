/**
 * Stamp Module
 * Host dependencies: none (self-contained)
 * Usage:
 *   Stamp.show(targetEl, type, options?)
 *   Stamp.hide()
 *
 * type:    'correct' | 'wrong' | 'bonus' | 'used'
 * options: { text, duration (ms, default 950; 0 = permanent), onEnd }
 *
 * Positions a stamp badge centered over targetEl using fixed coords.
 * Font: Bebas Neue → Barlow Condensed → Arial Narrow (fallback chain).
 */
(function () {
  if (window.Stamp) return;

  const css = `
@keyframes _stampDrop {
  0%   { opacity:0; transform:scale(1.6) rotate(-12deg); }
  35%  { opacity:1; transform:scale(.95)  rotate(-6deg);  }
  60%  {            transform:scale(1.04) rotate(-6deg);  }
  80%  {            transform:scale(.98)  rotate(-6deg);  }
  100% { opacity:1; transform:scale(1)    rotate(-6deg);  }
}
._stamp-overlay {
  position: fixed;
  z-index: 9700;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
._stamp-badge {
  font-family: 'Bebas Neue','Barlow Condensed','Arial Narrow',sans-serif;
  font-size: clamp(28px, 7vw, 88px);
  letter-spacing: .12em;
  border-width: 6px;
  border-style: solid;
  border-radius: 10px;
  padding: 6px 20px;
  opacity: 0;
  transform: scale(1.6) rotate(-12deg);
  animation: _stampDrop .55s cubic-bezier(.2,.85,.4,1.1) forwards;
}
._stamp-badge.stamp-correct {
  color: rgba(74,222,128,.92);
  border-color: rgba(74,222,128,.85);
  text-shadow: 0 0 32px rgba(74,222,128,.6);
  box-shadow: 0 0 50px rgba(74,222,128,.25);
}
._stamp-badge.stamp-wrong {
  color: rgba(248,113,113,.92);
  border-color: rgba(248,113,113,.85);
  text-shadow: 0 0 32px rgba(248,113,113,.6);
  box-shadow: 0 0 50px rgba(248,113,113,.25);
}
._stamp-badge.stamp-bonus {
  color: rgba(200,130,255,.95);
  border-color: rgba(180,100,255,.85);
  text-shadow: 0 0 30px rgba(180,100,255,.9), 0 0 60px rgba(200,130,255,.5);
  box-shadow: 0 0 70px rgba(160,80,255,.35);
}
._stamp-badge.stamp-used {
  color: rgba(248,113,113,.92);
  border-color: rgba(248,113,113,.85);
  text-shadow: 0 0 32px rgba(248,113,113,.7);
  box-shadow: 0 0 50px rgba(248,113,113,.3);
}`;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  const overlay = document.createElement('div');
  overlay.className = '_stamp-overlay';
  document.body.appendChild(overlay);

  let _timer = null;

  const DEFAULT_LABELS = { correct: 'CORRECT', wrong: 'WRONG', bonus: 'BONUS!', used: 'USED!' };

  window.Stamp = {
    show(targetEl, type = 'correct', { text, duration = 950, onEnd } = {}) {
      clearTimeout(_timer);

      const rect = targetEl.getBoundingClientRect();
      overlay.style.left   = rect.left   + 'px';
      overlay.style.top    = rect.top    + 'px';
      overlay.style.width  = rect.width  + 'px';
      overlay.style.height = rect.height + 'px';

      overlay.innerHTML = '';
      const badge = document.createElement('div');
      badge.className = `_stamp-badge stamp-${type}`;
      badge.textContent = text ?? DEFAULT_LABELS[type] ?? type.toUpperCase();
      overlay.appendChild(badge);

      if (duration > 0) {
        _timer = setTimeout(() => {
          overlay.innerHTML = '';
          onEnd?.();
        }, duration);
      } else {
        onEnd?.();
      }
    },

    hide() {
      clearTimeout(_timer);
      overlay.innerHTML = '';
    }
  };
})();
