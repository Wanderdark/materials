function clearSplitImageWordMatch() {
  document.getElementById("splitImageWordMatch")?.remove();
}

function renderSplitImageWordMatch(example) {
  const data = example.splitImageWordMatch;
  if (!data) return;

  els.next.disabled = false;
  syncHeaderNextButton();

  const root = document.createElement("section");
  root.id = "splitImageWordMatch";
  root.className = `split-image-word-match split-image-word-match--items-${data.items.length}`;
  const heading = document.createElement("h2");
  heading.className = "split-image-word-match-title";
  heading.textContent = data.title;
  const layout = document.createElement("div");
  layout.className = "split-image-word-match-layout";
  const images = document.createElement("div");
  images.className = "split-image-word-match-images";
  const labels = document.createElement("div");
  labels.className = "split-image-word-match-labels";
  let selectedLabel = null;
  let selectedImage = null;

  const updateSelection = () => {
    labels.querySelectorAll(".split-image-word-match-label").forEach((button) => button.classList.toggle("selected", button === selectedLabel));
    images.querySelectorAll(".split-image-word-match-image").forEach((button) => button.classList.toggle("selected", button === selectedImage));
  };

  const checkMatch = () => {
    if (!selectedLabel || !selectedImage) return;
    if (selectedLabel.dataset.itemId === selectedImage.dataset.itemId) {
      selectedLabel.disabled = true;
      selectedImage.disabled = true;
      selectedLabel.classList.remove("selected");
      selectedImage.classList.remove("selected");
      selectedLabel.classList.add("correct");
      selectedImage.classList.add("correct");
      selectedLabel = null;
      selectedImage = null;
      playFeedbackSound(true);
      return;
    }
    selectedLabel.classList.add("wrong");
    selectedImage.classList.add("wrong");
    playFeedbackSound(false);
    const labelToReset = selectedLabel;
    const imageToReset = selectedImage;
    selectedLabel = null;
    selectedImage = null;
    setTimeout(() => {
      labelToReset.classList.remove("wrong", "selected");
      imageToReset.classList.remove("wrong", "selected");
    }, 700);
  };

  data.items.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "split-image-word-match-image";
    button.dataset.itemId = item.id;
    const image = document.createElement("img");
    image.src = item.imagePath;
    image.alt = item.label;
    button.append(image);
    button.addEventListener("click", () => {
      if (button.disabled) return;
      selectedImage = button;
      updateSelection();
      checkMatch();
    });
    images.append(button);
  });

  shuffle(data.items).forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `split-image-word-match-label${item.compactLabel ? " compact-label" : ""}`;
    button.dataset.itemId = item.id;
    button.textContent = item.label;
    button.addEventListener("click", () => {
      if (button.disabled) return;
      selectedLabel = button;
      updateSelection();
      checkMatch();
    });
    labels.append(button);
  });

  layout.append(images, labels);
  root.append(heading, layout);
  els.presenceView.replaceChildren(root);
}
