(function () {
  function syncOrientationWarning() {
    const width = window.visualViewport?.width || window.innerWidth || document.documentElement.clientWidth;
    const height = window.visualViewport?.height || window.innerHeight || document.documentElement.clientHeight;
    const isSmallScreen = Math.min(width, height) <= 820;
    document.body.classList.toggle("needs-landscape", isSmallScreen && height > width);
  }

  function bind() {
    syncOrientationWarning();

    document.getElementById("new-game-btn").addEventListener("click", () => {
      document.getElementById("new-game-confirm").classList.add("open");
    });

    document.getElementById("cancel-new-game-btn").addEventListener("click", () => {
      document.getElementById("new-game-confirm").classList.remove("open");
    });

    document.getElementById("confirm-new-game-btn").addEventListener("click", () => {
      document.getElementById("new-game-confirm").classList.remove("open");
      window.WordCrushProfile.resetProgress();
      window.WordCrushProfile.showCharacterCreate();
    });

    document.getElementById("continue-btn").addEventListener("click", () => {
      window.WordCrushProfile.showHub();
    });

    document.getElementById("quick-game-btn").addEventListener("click", openQuickGame);

    document.getElementById("campaign-btn").addEventListener("click", () => {
      window.WordCrushCampaign.showCampaignSelect();
    });

    document.getElementById("daily-board-btn").addEventListener("click", () => {
      window.WordCrushDaily.showDailyBoard("hub");
    });

    document.getElementById("daily-claim-btn").addEventListener("click", () => {
      window.WordCrushDaily.claimDailyReward();
    });

    document.getElementById("achievements-btn").addEventListener("click", () => {
      window.WCAchievements.show('hub');
    });

    document.getElementById("leaderboard-btn").addEventListener("click", () => {
      window.WordCrushFirebase.showLeaderboard('hub');
    });

    document.getElementById("settings-btn").addEventListener("click", openSettings);

    document.getElementById("adv-run-btn").addEventListener("click", () => {
      window.AdvRun.startRun();
    });

    const volSlider = document.getElementById("wc-music-vol-slider");
    if (volSlider) {
      volSlider.addEventListener("input", () => {
        const v = Number(volSlider.value);
        window.WordCrushAudio?.setMusicVolume(v);
        document.getElementById("wc-music-vol-val").textContent = v;
        document.getElementById("wc-music-mute-badge").style.display = v === 0 ? "" : "none";
      });
    }

    document.getElementById("profile-btn").addEventListener("click", () => {
      window.WordCrushProfile.showProfile();
    });

    document.getElementById("result-back-btn").addEventListener("click", () => {
      const route = window.WordCrushGame?.getLastResultRoute?.();
      if (route === "campaign" && window.WordCrushCampaign) {
        window.WordCrushCampaign.showCampaign();
        return;
      }
      if (route === "adventure" && window.AdvRun) {
        window.AdvRun.returnToMap();
        return;
      }
      window.WordCrushProfile.showHub();
    });

document.getElementById("mute-btn").addEventListener("click", toggleMute);
    document.getElementById("menu-mute-btn").addEventListener("click", toggleMute);
    document.getElementById("lite-btn").addEventListener("click", toggleLite);
    document.getElementById("menu-lite-btn").addEventListener("click", toggleLite);
    document.getElementById("fs-btn").addEventListener("click", toggleFullscreen);
    document.getElementById("menu-fs-btn").addEventListener("click", toggleFullscreen);
  }

  function openQuickGame() {
    if (!window.WordCrushProfile.getProfile()) {
      window.WordCrushProfile.showCharacterCreate();
      return;
    }

    window.WordCrushProfile.applyProfileToHud();
    window.WordCrushSetup.show();
  }

  function openSettings() {
    const vol = window.WordCrushAudio?.getMusicVolume() ?? 30;
    const slider = document.getElementById("wc-music-vol-slider");
    const valEl = document.getElementById("wc-music-vol-val");
    const badge = document.getElementById("wc-music-mute-badge");
    if (slider) slider.value = vol;
    if (valEl) valEl.textContent = vol;
    if (badge) badge.style.display = vol === 0 ? "" : "none";
    const isLite = document.body.classList.contains("lite-mode");
    document.getElementById("wc-lite-on-btn")?.classList.toggle("active", isLite);
    document.getElementById("wc-lite-off-btn")?.classList.toggle("active", !isLite);
    window.WordCrushScreens.showScreen("settings-screen");
  }

  window.wcSetLite = function (on) {
    document.body.classList.toggle("lite-mode", on);
    document.getElementById("wc-lite-on-btn")?.classList.toggle("active", on);
    document.getElementById("wc-lite-off-btn")?.classList.toggle("active", !on);
    ["lite-btn", "menu-lite-btn"].forEach(id => {
      document.getElementById(id)?.classList.toggle("active", on);
    });
  };

  function toggleLite() {
    document.body.classList.toggle("lite-mode");
    const active = document.body.classList.contains("lite-mode");
    ["lite-btn", "menu-lite-btn"].forEach((id) => {
      const button = document.getElementById(id);
      if (button) button.classList.toggle("active", active);
    });
    window.WordCrushScreens.setMessage(active ? "Lite mode on." : "Lite mode off.");
  }

  function toggleMute() {
    if (!window.WordCrushAudio) {
      window.WordCrushScreens.setMessage("Sound system is not ready.");
      return;
    }

    const muted = window.WordCrushAudio.toggleMute();
    syncMuteButtons(muted);
    window.WordCrushScreens.setMessage(muted ? "Sound muted." : "Sound on.");
  }

  function syncMuteButtons(muted) {
    ["mute-btn", "menu-mute-btn"].forEach((id) => {
      const button = document.getElementById(id);
      if (!button) return;
      button.textContent = muted ? "🔇" : "🔊";
      button.classList.toggle("muted", muted);
    });
  }

  async function toggleFullscreen() {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  }

  function startMusicOnce() {
    window.WordCrushAudio?.startMusic?.();
    document.removeEventListener("pointerdown", startMusicOnce);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { bind(); window.WordCrushFirebase?.ensureUUID(); });
  } else {
    bind();
    window.WordCrushFirebase?.ensureUUID();
  }

  window.addEventListener("load", syncOrientationWarning);
  window.addEventListener("resize", syncOrientationWarning);
  window.addEventListener("orientationchange", () => window.setTimeout(syncOrientationWarning, 80));
  window.visualViewport?.addEventListener("resize", syncOrientationWarning);

  document.addEventListener("pointerdown", startMusicOnce);
})();
