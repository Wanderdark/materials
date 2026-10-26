// Reusable graph explanation page for percentages and quantifiers.
function clearSimpleGraphs() {
  document.getElementById("simpleGraphs")?.remove();
  els.exampleCard?.classList.remove("simple-graphs-slide");
}

function renderSimpleGraphs(example) {
  const data = example.simpleGraph;
  if (!data) return;
  if (data.summary) {
    renderSimpleGraphSummary(data);
    return;
  }
  els.exampleCard.classList.add("simple-graphs-slide");
  const root = document.createElement("section");
  root.id = "simpleGraphs";
  root.className = "simple-graphs";
  const heading = document.createElement("h2");
  heading.textContent = data.heading;
  const body = document.createElement("div");
  body.className = "simple-graphs-body";
  const figure = document.createElement("figure");
  figure.className = "simple-graphs-figure";
  const caption = document.createElement("figcaption");
  caption.textContent = data.chartTitle;
  const legend = document.createElement("div");
  legend.className = "simple-graphs-legend";
  let offset = 0;
  const total = data.segments.reduce((sum, segment) => sum + segment.value, 0);
  const stops = data.segments.map((segment) => {
    const start = offset;
    offset += segment.value / total * 100;
    const item = document.createElement("span");
    const swatch = document.createElement("i");
    swatch.style.backgroundColor = segment.color;
    item.append(swatch, document.createTextNode(`${segment.label} — ${segment.value}%`));
    legend.append(item);
    return `${segment.color} ${start}% ${offset}%`;
  });
  const pie = document.createElement("div");
  pie.className = "simple-graphs-pie";
  pie.style.background = `conic-gradient(${stops.join(", ")})`;
  pie.setAttribute("role", "img");
  pie.setAttribute("aria-label", data.segments.map((segment) =>
    `${segment.label}: ${segment.value}%`).join(", "));
  const percentage = document.createElement("strong");
  percentage.textContent = data.percentage;
  if (data.segments.length === 1) pie.append(percentage);
  else {
    let start = 0;
    data.segments.forEach((segment) => {
      const share = segment.value / total;
      if (share > 0) {
        const angle = (start + share / 2) * Math.PI * 2;
        const radius = share < .06 ? 40 : 29;
        const label = document.createElement("span");
        label.className = "simple-graphs-slice-label";
        label.textContent = `${segment.value}%`;
        label.style.left = `${50 + Math.sin(angle) * radius}%`;
        label.style.top = `${50 - Math.cos(angle) * radius}%`;
        pie.append(label);
      }
      start += share;
    });
  }
  figure.append(caption, legend, pie);
  const explanation = document.createElement("div");
  explanation.className = "simple-graphs-explanation";
  const meanings = document.createElement("div");
  meanings.className = "simple-graphs-meanings";
  const intro = document.createElement("div");
  intro.className = "simple-graphs-meanings simple-graphs-intro";
  const introCells = (data.introTerms || []).map((text) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.textContent = text;
    intro.append(cell);
    return cell;
  });
  const cells = [data.quantifier, data.translation, data.percentage].map((text, index) => {
    const cell = document.createElement("button");
    cell.type = "button";
    cell.classList.toggle("simple-graphs-unrevealed", index > 0);
    cell.setAttribute("aria-expanded", "false");
    cell.textContent = text;
    meanings.append(cell);
    return cell;
  });
  const sentence = document.createElement("p");
  sentence.className = "simple-graphs-sentence simple-graphs-unrevealed";
  const revealCells = [...introCells, ...cells];
  revealCells.forEach((cell, index) => {
    cell.classList.toggle("simple-graphs-unrevealed", index > 0);
    cell.setAttribute("aria-expanded", "false");
    cell.addEventListener("click", () => {
      (revealCells[index + 1] || sentence).classList.remove("simple-graphs-unrevealed");
      cell.setAttribute("aria-expanded", "true");
    });
  });
  (data.sentences || [data.sentenceParts]).forEach((parts, index) => {
    if (index > 0) sentence.append(document.createElement("br"));
    appendSimpleGraphSentence(sentence, parts);
  });
  if (introCells.length) explanation.append(intro);
  explanation.append(meanings, sentence);
  body.append(figure, explanation);
  root.append(heading, body);
  els.presenceView.replaceChildren(root);
}

function appendSimpleGraphSentence(container, parts) {
  parts.forEach((part) => {
    part.text.split(/(Nearly half of|More than half of|Less than half of|Half of|Most of|None of|All of|Most|All|More than|Less than|Two in ten)/gi).forEach((text) => {
      const span = document.createElement("span");
      span.textContent = text;
      span.className = /^(Nearly half of|More than half of|Less than half of|Half of|Most of|None of|All of|Most|All|More than|Less than|Two in ten)$/i.test(text)
        ? "simple-graphs-quantifier" : part.highlight ? "simple-graphs-highlight" : "";
      container.append(span);
    });
  });
}

function renderSimpleGraphSummary(data) {
  els.exampleCard.classList.add("simple-graphs-slide");
  const root = document.createElement("section");
  root.id = "simpleGraphs";
  root.className = "simple-graphs simple-graphs-summary";
  const heading = document.createElement("h2");
  heading.textContent = data.heading;
  const list = document.createElement("div");
  list.className = "simple-graphs-summary-list";
  data.summary.forEach(([english, turkish], index) => {
    const row = document.createElement("div");
    row.className = "simple-graphs-summary-row";
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = english;
    button.setAttribute("aria-expanded", "false");
    const meaning = document.createElement("span");
    meaning.id = `graphSummaryMeaning${index}`;
    meaning.textContent = turkish;
    meaning.className = "simple-graphs-unrevealed";
    button.setAttribute("aria-controls", meaning.id);
    button.addEventListener("click", () => {
      meaning.classList.remove("simple-graphs-unrevealed");
      button.setAttribute("aria-expanded", "true");
    });
    row.append(button, meaning);
    list.append(row);
  });
  root.append(heading, list);
  els.presenceView.replaceChildren(root);
}
