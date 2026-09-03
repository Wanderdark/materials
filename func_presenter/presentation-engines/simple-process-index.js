function clearSimpleProcessIndex() {
  document.getElementById("simpleProcessIndex")?.remove();
}

function renderSimpleProcessIndex(example) {
  const data = example.simpleProcessIndex;
  if (!data) return;

  els.next.disabled = false;
  syncHeaderNextButton();

  const root = document.createElement("section");
  root.id = "simpleProcessIndex";
  root.className = "simple-process-index";
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
    const number = document.createElement("span");
    number.className = "simple-process-index-number";
    number.textContent = String(index + 1);
    const label = document.createElement("span");
    label.textContent = item.label;
    button.append(number, label);
    button.addEventListener("click", () => goToSlideById(item.targetId));
    list.append(button);
  });
  menu.append(heading, list);
  root.append(starPanel, menu);
  els.presenceView.replaceChildren(root);
}
