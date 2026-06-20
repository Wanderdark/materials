(function () {
  function showScreen(id) {
    document.querySelectorAll(".screen").forEach((screen) => {
      screen.classList.toggle("open", screen.id === id);
    });
  }

  function setMessage(text) {
    const message = document.getElementById("message-line");
    if (message) {
      message.textContent = text || "";
    }
  }

  function updateHud(state) {
    const totalWords = state.boardSize || 15;
    const starsEnabled = state.runType !== "adventure" && !state.disableStars;
    const starThresholds = state.starThresholds || state.campaignStarThresholds || [200, 400, 650];
    const starMessages = ["⭐ 1 STAR REACHED", "⭐⭐ 2 STARS REACHED", "⭐⭐⭐ 3 STARS REACHED"];
    const maxScore = starThresholds[2];
    const progressPct = starsEnabled ? Math.min(100, Math.round((state.score / maxScore) * 1000) / 10) : 100;

    if (state.runType === "campaign") {
      setText("sp-hud-q", `LEVEL ${state.campaignLevel || state.levelNumber || 1}/${state.campaignTotalLevels || 10}`);
    } else if (state.runType === "adventure") {
      setText("sp-hud-q", "ADVENTURE");
    } else {
      setText("sp-hud-q", state.customGame ? "CUSTOM GAME" : "QUICK GAME");
    }
    setText("sp-hud-mode-label", "");
    setText("sp-hud-score", String(state.score));
    setText("sp-hud-lives", state.endlessTime ? "ENDLESS" : formatTime(state.secondsLeft));
    setText("sp-hud-streak", String(state.comboBest || 0));

    const jokerBtn = document.getElementById("adv-joker-btn");
    if (jokerBtn) jokerBtn.style.display = state.runType === "adventure" ? "" : "none";

    const advLivesCell = document.getElementById("sp-hud-adv-lives");
    if (advLivesCell) {
      if (state.runType === "adventure" && state.advMaxLives) {
        advLivesCell.style.display = "";
        const filled = Math.max(0, state.advLives || 0);
        const empty  = Math.max(0, (state.advMaxLives || 0) - filled);
        setText("sp-hud-adv-lives-val", "♥".repeat(filled) + "♡".repeat(empty));
      } else {
        advLivesCell.style.display = "none";
      }
    }

const fill = document.getElementById("wo-hud-progress");
    if (fill) {
      if (state.runType === "adventure" && state.advEnemyMaxHp) {
        const hpPct = Math.max(0, Math.round((state.advEnemyHp / state.advEnemyMaxHp) * 100));
        fill.style.width = `${hpPct}%`;
        fill.className = "wo-progress-fill adv-hp-bar";
      } else {
        fill.style.width = `${progressPct}%`;
        fill.className = starsEnabled ? "wo-progress-fill" : "wo-progress-fill locked";
        if (starsEnabled && state.score >= starThresholds[2]) fill.classList.add("s3");
        else if (starsEnabled && state.score >= starThresholds[1]) fill.classList.add("s2");
        else if (starsEnabled && state.score >= starThresholds[0]) fill.classList.add("s1");
      }
    }

    const starsVisible = starsEnabled;
    starThresholds.forEach((threshold, index) => {
      const mark = document.getElementById(`wo-pmark-${index + 1}`);
      const star = document.getElementById(`wo-pstar-${index + 1}`);
      const left = `${Math.min(100, Math.round((threshold / maxScore) * 1000) / 10)}%`;

      if (mark) {
        mark.style.left = left;
        mark.style.display = starsVisible ? "" : "none";
      }

      if (star) {
        star.style.left = left;
        star.style.display = starsVisible ? "" : "none";
        star.classList.toggle("lit", state.score >= threshold);
      }

      if (starsEnabled && state.score >= threshold && state.reachedStars && !state.reachedStars[index]) {
        state.reachedStars[index] = true;
        triggerStarPulse(`wo-pstar-${index + 1}`);
        if (window.WordCrushAudio) {
          window.WordCrushAudio.play("star");
        }
        if (window.ToastManager && state.runType !== "adventure") {
          window.ToastManager.show(starMessages[index]);
        }
      }
    });
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = text;
    }
  }

  function triggerStarPulse(id) {
    if (document.body.classList.contains("lite-mode")) {
      return;
    }
    const el = document.getElementById(id);
    if (!el) {
      return;
    }

    el.classList.remove("pulsing");
    void el.offsetWidth;
    el.classList.add("pulsing");

    setTimeout(() => {
      el.classList.remove("pulsing");
    }, 820);
  }

  function showResult(state) {
    const completed = state.runType === "adventure"
      ? state.advEnemyHp <= 0
      : (state.turkishCards || []).length === 0;
    const titleEl = document.getElementById("result-title");
    if (titleEl) {
      if (state.runType === "adventure") {
        titleEl.textContent = completed ? "SUCCESS!" : "GAME OVER";
        titleEl.style.color = completed ? "#4ade80" : "";
      } else {
        titleEl.textContent = "GAME OVER";
        titleEl.style.color = "";
      }
    }
    document.getElementById("final-score").textContent = String(state.score);
    document.getElementById("final-stats").innerHTML = [
      ["WORD SCORE", state.wordScore],
      ["COMBO SCORE", state.comboScore],
      ["NO MISTAKE BONUS", state.boardBonus],
      ["TIME BONUS", state.timeBonus],
      ["MATCHES", state.matches],
      ["WRONGS", state.wrongs],
      ["BEST CHAIN", state.comboBest]
    ].map(([label, value]) => (
      `<div><strong>${value}</strong><span>${label}</span></div>`
    )).join("");
    showScreen("result-screen");

    if (completed && !state.disableStars) {
      const stars = window.WordCrushCampaign?.starsForScore?.(state.score, state.starThresholds || state.campaignStarThresholds) ?? 0;
      if (stars >= 3) {
        try { new Audio("sounds/finalcheer2.mp3").play().catch(() => {}); } catch (_) {}
      } else if (stars >= 2) {
        try { new Audio("sounds/finalcheer.mp3").play().catch(() => {}); } catch (_) {}
      }
    }
  }

  function floatScore(text, x, y, options = {}) {
    if (document.body.classList.contains("lite-mode") && options.className !== "black-combo-float") {
      return;
    }
    const layer = document.getElementById("float-layer");
    if (!layer) {
      return;
    }

    const item = document.createElement("div");
    item.className = `score-float ${options.className || ""}`.trim();
    item.textContent = text;
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    layer.appendChild(item);
    setTimeout(() => item.remove(), options.duration ?? 1050);
  }

  function formatTime(totalSeconds) {
    const safe = Math.max(0, totalSeconds);
    const minutes = Math.floor(safe / 60);
    const seconds = safe % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  window.WordCrushScreens = {
    showScreen,
    setMessage,
    updateHud,
    showResult,
    floatScore
  };
})();
