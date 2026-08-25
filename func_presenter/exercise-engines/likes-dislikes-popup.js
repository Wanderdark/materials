// APP-ANCHOR: Grade 8 likes and dislikes popup practice.
let likesDislikesPopupClose = null;

function clearLikesDislikesPopup() {
  document.getElementById("likesDislikesPopupVisual")?.remove();
  document.getElementById("likesDislikesPopup")?.remove();
  els.exampleCard?.classList.remove("likes-dislikes-popup-open");
  if (likesDislikesPopupClose) {
    document.removeEventListener("click", likesDislikesPopupClose, true);
    likesDislikesPopupClose = null;
  }
}

function renderLikesDislikesPopup(example) {
  const data = example.likesDislikesPopup;
  if (!data?.items?.length) return;

  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");
  els.exampleCard.classList.add("likes-dislikes-popup-open");

  const state = example._likesDislikesPopupState || (example._likesDislikesPopupState = { index: 0 });
  const visual = document.createElement("div");
  visual.id = "likesDislikesPopupVisual";
  visual.className = "likes-dislikes-popup-visual";
  const image = document.createElement("img");
  image.className = "likes-dislikes-popup-image";
  visual.append(image);
  els.exampleVisualPanel.append(visual);

  const root = document.createElement("section");
  root.id = "likesDislikesPopup";
  root.className = "likes-dislikes-popup";
  els.presenceView.replaceChildren(root);

  const renderItem = () => {
    const item = data.items[state.index];
    image.src = item.imagePath;
    image.alt = item.alt || "Likes and dislikes practice";
    root.replaceChildren();

    const heading = document.createElement("p");
    heading.className = "likes-dislikes-popup-heading";
    heading.textContent = data.heading;
    const count = document.createElement("p");
    count.className = "likes-dislikes-popup-count";
    count.textContent = `${state.index + 1} / ${data.items.length}`;
    const sentence = document.createElement("p");
    sentence.className = "likes-dislikes-popup-sentence";
    let choiceCount = 0;
    let answeredCount = 0;
    let allCorrect = true;

    const updateNext = () => {
      if (answeredCount !== choiceCount) return;
      nextButton.disabled = false;
      nextButton.textContent = state.index === data.items.length - 1 ? "START OVER" : "NEXT";
      nextButton.classList.toggle("all-correct", allCorrect);
    };

    item.parts.forEach((part) => {
      if (!part.choices) {
        sentence.append(document.createTextNode(part));
        return;
      }
      choiceCount += 1;
      const group = document.createElement("span");
      group.className = "likes-dislikes-popup-choice";
      const trigger = document.createElement("button");
      trigger.type = "button";
      trigger.className = "likes-dislikes-popup-trigger";
      trigger.textContent = "?";
      const options = document.createElement("div");
      options.className = "likes-dislikes-popup-options hidden";
      const closeOptions = () => {
        options.classList.add("hidden");
        if (likesDislikesPopupClose) {
          document.removeEventListener("click", likesDislikesPopupClose, true);
          likesDislikesPopupClose = null;
        }
      };
      [...part.choices].sort(() => Math.random() - .5).forEach((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "likes-dislikes-popup-option";
        button.textContent = option;
        button.addEventListener("click", () => {
          const correct = option === part.answer;
          closeOptions();
          trigger.disabled = true;
          trigger.textContent = part.answer;
          trigger.classList.add(correct ? "correct" : "wrong");
          allCorrect &&= correct;
          answeredCount += 1;
          playFeedbackSound(correct);
          updateNext();
        });
        options.append(button);
      });
      trigger.addEventListener("click", (event) => {
        if (trigger.disabled) return;
        event.stopPropagation();
        const shouldOpen = options.classList.contains("hidden");
        closeOptions();
        if (!shouldOpen) return;
        options.classList.remove("hidden");
        likesDislikesPopupClose = (clickEvent) => {
          if (!group.contains(clickEvent.target)) closeOptions();
        };
        document.addEventListener("click", likesDislikesPopupClose, true);
      });
      group.append(trigger, options);
      sentence.append(group);
    });

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className = "primary-button likes-dislikes-popup-next";
    nextButton.disabled = true;
    nextButton.textContent = "NEXT";
    nextButton.addEventListener("click", () => {
      state.index = state.index === data.items.length - 1 ? 0 : state.index + 1;
      renderItem();
    });
    root.append(heading, count, sentence, nextButton);
  };

  renderItem();
}
