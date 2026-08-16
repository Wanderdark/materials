// APP-ANCHOR: Physical-appearance video character hubs.
function getAppearanceVideoHubState(example) {
  if (!example._appearanceVideoHubState) example._appearanceVideoHubState = { completed: {} };
  return example._appearanceVideoHubState;
}

function renderAppearanceVideoHub(example) {
  const hubState = getAppearanceVideoHubState(example);
  const rows = els.presenceView.querySelectorAll(".presence-row.category-list");
  rows.forEach((row, index) => {
    const character = example.items?.[index]?.appearanceVideoCharacter;
    if (!character) return;
    const completed = Boolean(hubState.completed[character.name]);
    row.classList.add("clickable");
    row.tabIndex = completed ? -1 : 0;
    row.setAttribute("role", "button");
    row.setAttribute("aria-pressed", completed ? "true" : "false");
    if (completed) row.classList.add("visited");

    const openVideo = () => {
      if (hubState.completed[character.name]) return;
      els.exampleCard.classList.remove("presence-slide");
      els.exampleCard.classList.add("video-dialogue-slide");
      renderVideoDialoguePractice({
        videoDialogue: {
          title: "WATCH, THEN COMPLETE THE DIALOGUE",
          videoUrl: character.videoUrl,
          lines: character.lines,
          onComplete: () => {
            hubState.completed[character.name] = true;
            setTimeout(renderExample, 550);
          }
        }
      });
    };
    row.addEventListener("click", openVideo);
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openVideo();
      }
    });
  });
}
