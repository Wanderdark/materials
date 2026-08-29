// APP-ANCHOR: Grade 5 Simple Present video hub.

function clearSimplePresentVideoHubPractice() {
  els.exampleCard?.classList.remove("simple-present-video-hub-open");
  document.getElementById("simplePresentVideoHub")?.remove();
  els.exampleVisualPanel?.classList.remove("hidden");
  els.presenceView?.closest(".sentence-panel")?.classList.remove("hidden");
}

function getSimplePresentVideoHubState(example) {
  if (!example._simplePresentVideoHubState) example._simplePresentVideoHubState = { completed: {} };
  return example._simplePresentVideoHubState;
}

function simplePresentVideoHubPortrait(name) {
  return `../olivias_movie_memories/assets/portraits/${String(name).toLowerCase()}.webp`;
}

function simplePresentVideoHubSpeakers(item) {
  const portraitNames = new Set(["alejandro", "amina", "arthur", "ava", "benjamin", "buddy", "callum", "camille", "charlotte", "chloe", "daniel", "david", "david_ava", "elena", "eleni", "ella", "emily", "emma", "ethan", "fiona", "gabriel", "giulia", "hannah", "ingrid", "jack", "james", "javier", "jessica", "julien", "katharina", "lars", "liam", "lucas", "luna", "mia", "monica", "nikos", "noah", "oliver", "olivia", "sophie", "storm", "sunny", "valeria", "victor", "victoria", "zoe"]);
  const animalNames = new Set(["sunny", "pixel", "storm", "buddy", "luna"]);
  const dialogueSpeakers = item.speakers || [];
  const idSpeakers = String(item.id || "").split(/[-_]/);
  return [...new Set([...dialogueSpeakers, ...idSpeakers]
    .map((speaker) => String(speaker).toLowerCase())
    .filter((speaker) => portraitNames.has(speaker) && !animalNames.has(speaker)))].slice(0, 2);
}

function renderSimplePresentVideoHub(example) {
  const data = example.simplePresentVideoHub;
  if (!data) return;

  const sentencePanel = els.presenceView.closest(".sentence-panel");
  els.exampleVisualPanel.classList.add("hidden");
  sentencePanel?.classList.add("hidden");

  const stateForHub = getSimplePresentVideoHubState(example);
  const hub = document.createElement("section");
  hub.id = "simplePresentVideoHub";
  hub.className = "simple-present-video-hub";
  const title = document.createElement("h2");
  title.className = "simple-present-video-hub-title";
  title.textContent = data.title || "WATCH AND COMPLETE";
  const grid = document.createElement("div");
  grid.className = "simple-present-video-hub-grid";

  data.items.forEach((item) => {
    const completed = Boolean(stateForHub.completed[item.id]);
    const portraitSpeakers = simplePresentVideoHubSpeakers(item);
    const card = document.createElement("button");
    card.type = "button";
    card.className = `simple-present-video-hub-card${completed ? " is-completed" : ""}${portraitSpeakers.length === 1 ? " is-solo" : ""}`;
    card.disabled = completed;
    card.setAttribute("aria-label", `${portraitSpeakers.join(" and ") || "Video"} video`);

    const portraits = document.createElement("span");
    portraits.className = "simple-present-video-hub-portraits";
    portraitSpeakers.forEach((speaker) => {
      const portrait = document.createElement("img");
      portrait.src = simplePresentVideoHubPortrait(speaker);
      portrait.alt = speaker;
      portraits.append(portrait);
    });
    const play = document.createElement("span");
    play.className = "simple-present-video-hub-play";
    play.setAttribute("aria-hidden", "true");
    play.textContent = "▶";
    card.append(portraits, play);

    if (completed) {
      const tick = document.createElement("span");
      tick.className = "simple-present-video-hub-tick";
      tick.textContent = "✓";
      card.append(tick);
    } else {
      card.addEventListener("click", () => {
        clearSimplePresentVideoHubPractice();
        sentencePanel?.classList.remove("hidden");
        els.exampleCard.classList.remove("no-visual-slide", "simple-present-video-hub-slide");
        els.exampleCard.classList.add("video-dialogue-slide");
        els.exampleVisualPanel.classList.remove("hidden");
        els.presenceView.classList.remove("hidden");
        renderVideoDialoguePractice({
          videoDialogue: {
            ...item.videoDialogue,
            autoplay: true,
            onHubReturn: () => renderExample(),
            onComplete: (isCorrect) => {
              if (isCorrect) stateForHub.completed[item.id] = true;
            }
          }
        });
      });
    }
    grid.append(card);
  });

  hub.append(title, grid);
  els.exampleCard.classList.add("simple-present-video-hub-open");
  els.exampleCard.append(hub);
}
