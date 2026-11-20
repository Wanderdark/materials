(() => {
  "use strict";
  const params = new URLSearchParams(location.search);
  if (params.get("mode") === "student" || params.get("password-reset") === "1") return;
  const key = "oliviasMovieMemoriesQuickPlayTutorialDoneV1";
  const dismissedKey = "oliviasMovieMemoriesQuickPlayTutorialDismissedV1";
  try { if (localStorage.getItem(key) === "1" || localStorage.getItem(dismissedKey) === "1") return; } catch (_) {}
  // Defer HUD onboarding for this visit, without dismissing its saved prompts.
  window.__oliviaQuickPlayTutorialPending = true;

  function offerTutorial() {
    const offer = document.createElement("dialog");
    offer.className = "qpt-offer";
    offer.setAttribute("aria-label", "Quick-play tutorial");
    offer.innerHTML = '<p>Would you like to see a quick-play tutorial?</p><label class="qpt-dismiss"><input type="checkbox"> Don’t show this again</label><button type="button" data-qpt-yes>YES</button><button type="button" data-qpt-no>NO</button>';
    document.body.append(offer);
    function enterFullscreen() {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
    }
    offer.querySelector("[data-qpt-yes]").onclick = () => { enterFullscreen(); offer.close(); offer.remove(); startTutorial(); };
    offer.querySelector("[data-qpt-no]").onclick = () => {
      enterFullscreen();
      if (offer.querySelector("input").checked) {
        try { localStorage.setItem(dismissedKey, "1"); } catch (_) {}
      }
      offer.close(); offer.remove();
    };
    offer.addEventListener("cancel", () => { offer.close(); offer.remove(); });
    offer.showModal();
  }

  function startTutorial() {
    const steps = [
      ['[data-group-count="2"]', "Choose how many teams will play"],
      ['[data-team-name-dice="0"]', "Click dice to give random names to teams"],
      ['[data-team-name-dice="1"]', "Click dice to give random names to teams"],
      [".qpc-launch", "Click here to quickly name your students"],
      ["#start-game-button", "Click here to start the game"]
    ];
    let step = 0, target = null, frame = 0, stopped = false, quickDialog = null;
    const shield = document.createElement("div");
    shield.className = "qpt-shield";
    for (let i = 0; i < 4; i++) shield.append(document.createElement("div"));
    const coach = document.createElement("aside");
    coach.className = "qpt-coach";
    coach.setAttribute("role", "status");
    coach.innerHTML = '<small></small><span></span><button type="button" class="qpt-close" aria-label="Close tutorial">×</button>';
    document.body.append(shield, coach);
    coach.querySelector("button").onclick = cleanup;

    function cleanup() {
      stopped = true;
      cancelAnimationFrame(frame);
      target?.classList.remove("qpt-focus");
      coach.remove();
      shield.remove();
      observer.disconnect();
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("keydown", onKey, true);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("scroll", schedule, true);
    }

    function schedule() {
      if (stopped || frame) return;
      frame = requestAnimationFrame(() => { frame = 0; render(); });
    }

    function render() {
      if (stopped) return;
      const dialog = document.querySelector(".qpc-dialog");
      if (dialog && dialog !== quickDialog) {
        quickDialog = dialog;
        observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
      }
      const enteringPlayers = step === 3 && dialog?.open;
      if (step === 3 && !enteringPlayers && window.ClassQuickPlay?.isActive()) step = 4;
      target?.classList.remove("qpt-focus");
      target = enteringPlayers ? null : document.querySelector(steps[step][0]);
      coach.querySelector("small").textContent = "QUICK PLAY · " + (step + 1) + " / 5";
      coach.querySelector("span").textContent = enteringPlayers
        ? "Choose an even number of players, then click CREATE CLASS."
        : steps[step][1];
      shield.hidden = !!enteringPlayers;
      if (enteringPlayers) {
        if (coach.parentElement !== dialog) dialog.prepend(coach);
        return;
      }
      if (coach.parentElement !== document.body) document.body.append(coach);
      if (!target) return;
      target.classList.add("qpt-focus");
      const rect = target.getBoundingClientRect();
      const w = innerWidth, h = innerHeight, pad = 9;
      const left = Math.max(0, rect.left - pad), right = Math.min(w, rect.right + pad);
      const top = Math.max(0, rect.top - pad), bottom = Math.min(h, rect.bottom + pad);
      const boxes = [[0, 0, w, top], [0, bottom, w, h - bottom], [0, top, left, bottom - top], [right, top, w - right, bottom - top]];
      [...shield.children].forEach((box, i) => {
        const [x, y, width, height] = boxes[i];
        Object.assign(box.style, { left: x + "px", top: y + "px", width: Math.max(0, width) + "px", height: Math.max(0, height) + "px" });
      });
      const ch = coach.offsetHeight, cw = coach.offsetWidth;
      coach.style.left = Math.max(12, Math.min(w - cw - 12, rect.left)) + "px";
      coach.style.top = Math.max(12, Math.min(h - ch - 12, bottom + ch + 12 <= h ? bottom + 12 : top - ch - 12)) + "px";
    }

    function advance() {
      target?.classList.remove("qpt-focus");
      target = null;
      step++;
      requestAnimationFrame(() => {
        if (stopped) return;
        document.querySelector(steps[step][0])?.scrollIntoView({ block: "center", behavior: "instant" });
        schedule();
      });
    }

    function onClick(event) {
      if (coach.contains(event.target)) return;
      if (step === 3 && document.querySelector(".qpc-dialog")?.open) return;
      if (!target?.contains(event.target)) {
        event.preventDefault(); event.stopImmediatePropagation(); return;
      }
      if (step === 4) {
        requestAnimationFrame(() => {
          if (!document.getElementById("game-screen").hidden) {
            try { localStorage.setItem(key, "1"); } catch (_) {}
            cleanup();
          }
        });
      } else if (step === 3) schedule();
      else advance();
    }

    function onKey(event) {
      if (event.key === "Escape") { cleanup(); return; }
      if (step === 3 && document.querySelector(".qpc-dialog")?.open) return;
      if (event.key === "Tab" || event.key === "Enter" || event.key === " ") {
        if (coach.contains(event.target)) return;
        if (event.key === "Tab") { event.preventDefault(); target?.focus(); }
        else if (!target?.contains(event.target)) { event.preventDefault(); event.stopImmediatePropagation(); }
      }
    }
    const observer = new MutationObserver(schedule);
    observer.observe(document.getElementById("group-name-fields"), { childList: true, subtree: true });
    document.addEventListener("click", onClick, true);
    document.addEventListener("keydown", onKey, true);
    window.addEventListener("resize", schedule);
    document.addEventListener("scroll", schedule, true);
    document.querySelector(steps[0][0])?.scrollIntoView({ block: "center", behavior: "instant" });
    schedule();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", offerTutorial, { once: true });
  else offerTutorial();
})();
