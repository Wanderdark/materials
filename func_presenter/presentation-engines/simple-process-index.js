function clearSimpleProcessIndex() {
  document.getElementById("simpleProcessIndex")?.remove();
}

function getSimpleProcessProgressKey(module) {
  return `fpPresentationSections:v1:${module.grade}:${module.unit}:${module.id}`;
}

function getSimpleProcessCompletedSections(module) {
  const completed = module._simpleProcessCompletedSections || {};
  try {
    const stored = JSON.parse(localStorage.getItem(getSimpleProcessProgressKey(module)) || "{}");
    if (stored && typeof stored === "object" && !Array.isArray(stored)) {
      Object.keys(stored).forEach((id) => {
        if (stored[id] === true) completed[id] = true;
      });
    }
  } catch {}
  module._simpleProcessCompletedSections = completed;
  return completed;
}

function completeSimpleProcessSection(example) {
  const module = state.module;
  const indexSlide = module?.sentences.find((slide) =>
    slide.simpleProcessIndex?.persistProgress &&
    slide.simpleProcessIndex.items.some((item) => item.endId === example?.id)
  );
  if (!indexSlide) return false;
  const item = indexSlide.simpleProcessIndex.items.find((item) => item.endId === example.id);
  const completed = getSimpleProcessCompletedSections(module);
  completed[item.targetId] = true;
  try {
    localStorage.setItem(getSimpleProcessProgressKey(module), JSON.stringify(completed));
  } catch {}
  goToSlideById(indexSlide.id);
  return true;
}

function renderSimpleProcessIndex(example) {
  const data = example.simpleProcessIndex;
  if (!data) return;
  const completedSections = data.persistProgress ? getSimpleProcessCompletedSections(state.module) : {};

  els.next.disabled = false;
  syncHeaderNextButton();

  const root = document.createElement("section");
  root.id = "simpleProcessIndex";
  root.className = "simple-process-index";
  if (data.items.length === 5) root.classList.add("simple-process-index--items-5");
  const starPanel = document.createElement("div");
  starPanel.className = "simple-process-index-star-panel";
  const star = document.createElement("span");
  star.className = "simple-process-index-star";
  star.textContent = "★";
  const starNote = document.createElement("p");
  starNote.textContent = "CHOOSE A TOPIC";
  starPanel.append(star, starNote);

  const menu = document.createElement("nav");
  menu.className = "simple-process-index-menu";
  const heading = document.createElement("h2");
  heading.textContent = data.title || "UNIT INDEX";
  const list = document.createElement("div");
  list.className = "simple-process-index-list";
  data.items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "simple-process-index-item";
    button.disabled = Boolean(item.disabled);
    const number = document.createElement("span");
    number.className = "simple-process-index-number";
    number.textContent = String(index + 1);
    const label = document.createElement("span");
    label.textContent = item.label;
    button.append(number, label);
    if (completedSections[item.targetId]) {
      button.classList.add("completed");
      const tick = document.createElement("span");
      tick.className = "simple-process-index-tick";
      tick.textContent = "✓";
      tick.setAttribute("aria-label", "Completed");
      button.append(tick);
    }
    button.addEventListener("click", () => goToSlideById(item.targetId));
    list.append(button);
  });
  menu.append(heading, list);
  root.append(starPanel, menu);
  els.presenceView.replaceChildren(root);
}
