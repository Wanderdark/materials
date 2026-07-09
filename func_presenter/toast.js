(function () {
  const CSS = `
#wo-toast-stack{position:fixed;z-index:9800;display:flex;flex-direction:column;gap:10px;pointer-events:none;width:370px}
.wo-toast{border-radius:10px;padding:13px 18px 13px 15px;font-family:'Barlow Condensed',sans-serif;font-size:18px;letter-spacing:.08em;pointer-events:all;cursor:pointer;white-space:normal;word-break:break-word;opacity:0;transition:transform .38s cubic-bezier(.175,.885,.32,1.275),opacity .3s}
#wo-toast-stack.left .wo-toast{transform:translateX(calc(-100% - 30px))}
#wo-toast-stack.right .wo-toast{transform:translateX(calc(100% + 30px))}
#wo-toast-stack.left .wo-toast.show{transform:translateX(0);opacity:1}
#wo-toast-stack.right .wo-toast.show{transform:translateX(0);opacity:1}
#wo-toast-stack.left .wo-toast.hiding{transform:translateX(calc(-100% - 30px));opacity:0}
#wo-toast-stack.right .wo-toast.hiding{transform:translateX(calc(100% + 30px));opacity:0}
.wo-toast.wt-navy{background:#0d1b4b;border:1px solid #f5c518;border-left:4px solid #f5c518;color:#f5c518}
.wo-toast.wt-red{background:#7a0c0c;border:1px solid #f5c518;border-left:4px solid #f5c518;color:#f5c518}
.wo-toast.wt-black{background:#111;border:1px solid #aaa;border-left:4px solid #aaa;color:#fff}
.wo-toast.wt-green{background:#0a4a1f;border:1px solid #4ade80;border-left:4px solid #4ade80;color:#fff}
.wo-toast.warn{background:rgba(60,0,0,.97);border:1px solid #f87171;border-left:4px solid #f87171;color:#fca5a5;font-size:19px;letter-spacing:.12em;font-family:'Bebas Neue',sans-serif}
`;

  let stack = null;
  let cssInjected = false;
  let defaultDuration = 10000;
  let lastThemeIndex = -1;
  const themes = ["wt-navy", "wt-red", "wt-black", "wt-green"];

  function injectCss() {
    if (cssInjected) {
      return;
    }

    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    cssInjected = true;
  }

  function ensureStack(position = "left", top = "80px") {
    if (stack && document.contains(stack)) {
      return;
    }

    stack = document.createElement("div");
    stack.id = "wo-toast-stack";
    stack.className = position === "right" ? "right" : "left";
    stack.style.top = top;

    if (position === "right") {
      stack.style.right = "20px";
    } else {
      stack.style.left = "20px";
    }

    document.body.appendChild(stack);
  }

  function pickTheme() {
    let index;
    do {
      index = Math.floor(Math.random() * themes.length);
    } while (index === lastThemeIndex);

    lastThemeIndex = index;
    return themes[index];
  }

  function init(options = {}) {
    injectCss();
    defaultDuration = options.duration ?? 10000;
    ensureStack(options.position, options.top);

    if (options.global) {
      window.showToast = (message, type, duration) => show(message, type, duration);
    }
  }

  function show(message, type, duration) {
    if (!stack) {
      injectCss();
      ensureStack("left", "80px");
    }

    const toast = document.createElement("div");
    toast.className = `wo-toast ${type === "warn" ? "warn" : pickTheme()}`;
    toast.textContent = message;
    stack.appendChild(toast);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => toast.classList.add("show"));
    });

    function dismiss() {
      toast.classList.add("hiding");
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 400);
    }

    const timer = setTimeout(dismiss, duration ?? defaultDuration);
    toast.addEventListener("click", () => {
      clearTimeout(timer);
      dismiss();
    }, { once: true });
  }

  window.ToastManager = {
    init,
    show
  };

  init({ top: "80px", duration: 10000, global: true });
})();
