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
    const starThresholds = [2500, 5000, 7500];
    const starMessages = ["⭐ 1 STAR REACHED", "⭐⭐ 2 STARS REACHED", "⭐⭐⭐ 3 STARS REACHED"];
    const maxScore = starThresholds[2];
    const progressPct = Math.min(100, Math.round((state.score / maxScore) * 1000) / 10);

    if (state.runType === "campaign") {
      setText("sp-hud-q", `LEVEL ${state.campaignLevel || state.levelNumber || 1}/${state.campaignTotalLevels || 10}`);
    } else {
      setText("sp-hud-q", "QUICK GAME");
    }
    setText("sp-hud-mode-label", "");
    setText("sp-hud-score", String(state.score));
    setText("sp-hud-lives", formatTime(state.secondsLeft));
    setText("sp-hud-streak", String(state.comboBest || 0));

    const pauseButton = document.getElementById("pause-btn");
    if (pauseButton) {
      pauseButton.textContent = state.isPaused ? "▶" : "Ⅱ";
      pauseButton.title = state.isPaused ? "Resume" : "Pause";
    }

    const fill = document.getElementById("wo-hud-progress");
    if (fill) {
      fill.style.width = `${progressPct}%`;
      fill.className = "wo-progress-fill";
      if (state.score >= starThresholds[2]) fill.classList.add("s3");
      else if (state.score >= starThresholds[1]) fill.classList.add("s2");
      else if (state.score >= starThresholds[0]) fill.classList.add("s1");
    }

    starThresholds.forEach((threshold, index) => {
      const mark = document.getElementById(`wo-pmark-${index + 1}`);
      const star = document.getElementById(`wo-pstar-${index + 1}`);
      const left = `${Math.min(100, Math.round((threshold / maxScore) * 1000) / 10)}%`;

      if (mark) {
        mark.style.left = left;
      }

      if (star) {
        star.style.left = left;
        star.classList.toggle("lit", state.score >= threshold);
      }

      if (state.score >= threshold && state.reachedStars && !state.reachedStars[index]) {
        state.reachedStars[index] = true;
        triggerStarPulse(`wo-pstar-${index + 1}`);
        if (window.WordCrushAudio) {
          window.WordCrushAudio.play("star");
        }
        if (window.ToastManager) {
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

    const completed = (state.turkishCards || []).length === 0;
    if (completed) {
      const stars = window.WordCrushCampaign?.starsForScore?.(state.score) ?? 0;
      if (stars >= 3) {
        try { new Audio("sounds/finalcheer2.mp3").play().catch(() => {}); } catch (_) {}
      } else if (stars >= 2) {
        try { new Audio("sounds/finalcheer.mp3").play().catch(() => {}); } catch (_) {}
      }
    }
  }

  function floatScore(text, x, y) {
    const layer = document.getElementById("float-layer");
    if (!layer) {
      return;
    }

    const item = document.createElement("div");
    item.className = "score-float";
    item.textContent = text;
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    layer.appendChild(item);
    setTimeout(() => item.remove(), 1050);
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
