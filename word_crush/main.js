(function () {
  function bind() {
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
      window.WordCrushCampaign.showCampaign();
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

    document.getElementById("profile-btn").addEventListener("click", () => {
      window.WordCrushProfile.showProfile();
    });

    document.getElementById("result-back-btn").addEventListener("click", () => {
      if (window.WordCrushGame?.getLastResultRoute?.() === "campaign" && window.WordCrushCampaign) {
        window.WordCrushCampaign.showCampaign();
        return;
      }

      window.WordCrushProfile.showHub();
    });

    document.getElementById("pause-btn").addEventListener("click", () => {
      window.WordCrushGame.togglePause();
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
      button.textContent = muted ? "Mute" : "Sound";
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
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }

  document.addEventListener("pointerdown", startMusicOnce);
})();
