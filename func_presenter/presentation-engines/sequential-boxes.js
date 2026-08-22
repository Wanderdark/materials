function clearSequentialBoxes() {
  document.getElementById("sequentialBoxesVisual")?.remove();
  els.presenceView.replaceChildren();
}

function renderSequentialBoxes(example) {
  const data = example.sequentialBoxes;
  if (!data) return;
  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");

  const root = document.createElement("section");
  const isSplit = Number.isInteger(data.splitAt) && data.splitAt > 0;
  root.className = `sequential-boxes ${isSplit ? "split" : ""}`;
  const list = document.createElement("div");
  list.className = "sequential-boxes-list";
  let visualList = null;
  if (isSplit) {
    const visualRoot = document.createElement("section");
    visualRoot.id = "sequentialBoxesVisual";
    visualRoot.className = "sequential-boxes split";
    visualList = document.createElement("div");
    visualList.className = "sequential-boxes-list";
    visualRoot.append(visualList);
    els.exampleVisualPanel.append(visualRoot);
  } else {
    const heading = document.createElement("h2");
    heading.className = "sequential-boxes-heading";
    heading.textContent = data.heading;
    root.append(heading);
  }
  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "sequential-boxes-next";
  nextButton.textContent = ">";
  nextButton.setAttribute("aria-label", "Show the next quality");

  let visibleCount = 0;
  const showNextBox = () => {
    const boxData = data.boxes[visibleCount];
    if (!boxData) return;
    const box = document.createElement("p");
    box.className = `sequential-boxes-item ${data.numbered ? "numbered" : ""}`;
    if (data.numbered) {
      const number = document.createElement("span");
      number.className = "sequential-boxes-number";
      number.textContent = visibleCount + 1;
      box.append(number);
    }
    if (boxData.parts) {
      const parts = boxData.parts.map(({ text, className = "" }) => {
        const part = document.createElement("span");
        part.className = className;
        part.textContent = text;
        return part;
      });
      box.append(...parts);
    } else {
      const text = document.createElement("span");
      text.textContent = boxData;
      box.append(text);
    }
    (isSplit && visibleCount < data.splitAt ? visualList : list).append(box);
    visibleCount += 1;
    if (visibleCount === data.boxes.length) nextButton.classList.add("hidden");
  };

  nextButton.addEventListener("click", showNextBox);
  showNextBox();
  root.append(list, nextButton);
  els.presenceView.replaceChildren(root);
}
