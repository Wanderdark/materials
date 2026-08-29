// APP-ANCHOR: Grade 8 preference video hub.
let preferenceVideoHubReturnTimer = null;

function clearPreferenceVideoHubPractice() {
  if (preferenceVideoHubReturnTimer) {
    window.clearTimeout(preferenceVideoHubReturnTimer);
    preferenceVideoHubReturnTimer = null;
  }
  els.exampleCard?.classList.remove("preference-video-hub-open");
  document.getElementById("preferenceVideoHub")?.remove();
  // The hub temporarily hides both base panels. Restore them before the next
  // slide is rendered so NEXT, LAST, and PREVIOUS cannot inherit that state.
  els.exampleVisualPanel?.classList.remove("hidden");
  els.presenceView?.closest(".sentence-panel")?.classList.remove("hidden");
}

function getPreferenceVideoHubState(example) {
  if (!example._preferenceVideoHubState) example._preferenceVideoHubState = { completed: {} };
  return example._preferenceVideoHubState;
}

function renderPreferenceVideoHub(example) {
  const data = example.preferenceVideoHub;
  if (!data) return;

  const sentencePanel = els.presenceView.closest(".sentence-panel");
  els.exampleVisualPanel.classList.add("hidden");
  sentencePanel?.classList.add("hidden");

  const hubState = getPreferenceVideoHubState(example);
  const hub = document.createElement("section");
  hub.id = "preferenceVideoHub";
  hub.className = "preference-video-hub";

  const title = document.createElement("h2");
  title.className = "preference-video-hub-title";
  title.textContent = data.title;
  const grid = document.createElement("div");
  grid.className = "preference-video-hub-grid";

  data.items.forEach((character) => {
    const completed = Boolean(hubState.completed[character.name]);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `preference-video-hub-card${completed ? " is-completed" : ""}`;
    card.disabled = completed;
    card.setAttribute("aria-label", `${character.name}'s preference video`);

    const image = document.createElement("img");
    image.src = character.avatarPath;
    image.alt = character.name;
    const label = document.createElement("span");
    label.textContent = character.name;
    card.append(image, label);

    if (completed) {
      const tick = document.createElement("span");
      tick.className = "preference-video-hub-tick";
      tick.textContent = "✓";
      card.append(tick);
    } else {
      card.addEventListener("click", () => {
        clearPreferenceVideoHubPractice();
        sentencePanel?.classList.remove("hidden");
        els.exampleCard.classList.remove("no-visual-slide", "preference-video-hub-slide");
        els.exampleCard.classList.add("video-dialogue-slide");
        els.exampleVisualPanel.classList.remove("hidden");
        els.presenceView.classList.remove("hidden");
        renderVideoDialoguePractice({
          videoDialogue: {
            ...character.videoDialogue,
            portraitPath: character.avatarPath,
            portraitAlt: character.name,
            onComplete: () => {
              hubState.completed[character.name] = true;
              preferenceVideoHubReturnTimer = window.setTimeout(() => {
                preferenceVideoHubReturnTimer = null;
                renderExample();
              }, 550);
            }
          }
        });
      });
    }
    grid.append(card);
  });

  hub.append(title, grid);
  els.exampleCard.classList.add("preference-video-hub-open");
  els.exampleCard.append(hub);
}
