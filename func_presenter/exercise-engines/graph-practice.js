// Graph exercise prompt; answers and scoring use the existing test-question engine.
function renderGraphPracticePrompt(prompt, data) {
  prompt.classList.add("graph-practice-prompt");
  const figure = document.createElement("figure");
  figure.className = "graph-practice-chart";
  const title = document.createElement("figcaption");
  title.textContent = data.chartTitle || "Teens’ Communication Preferences";
  figure.append(title);
  if (data.type === "pie") renderGraphPracticePie(figure, data);
  else data.segments.forEach((segment) => {
    const row = document.createElement("div");
    row.className = "graph-practice-bar-row";
    const label = document.createElement("span");
    label.textContent = segment.label;
    const track = document.createElement("div");
    track.className = "graph-practice-track";
    const bar = document.createElement("div");
    bar.className = "graph-practice-bar";
    bar.style.width = `${segment.value}%`;
    bar.style.backgroundColor = segment.color;
    track.append(bar);
    row.append(label, track);
    if (data.showValues) {
      row.classList.add("graph-practice-bar-row-with-value");
      const value = document.createElement("strong");
      value.textContent = `${segment.value}%`;
      row.append(value);
    }
    figure.append(row);
  });
  const sentence = document.createElement("p");
  sentence.className = "graph-practice-sentence";
  if (data.sentence) appendSimpleGraphSentence(sentence, [{ text: data.sentence, highlight: true }]);
  const question = document.createElement("p");
  question.className = "graph-practice-question";
  question.textContent = data.question;
  prompt.append(figure);
  if (data.sentence) prompt.append(sentence);
  if (data.question) prompt.append(question);
}

function renderGraphPracticeStatement(question, text, options) {
  const statement = document.createElement("p");
  statement.className = "graph-practice-statement";
  appendSimpleGraphSentence(statement, [{ text, highlight: true }]);
  question.insertBefore(statement, options);
}

function renderGraphPracticePie(figure, data) {
  const pie = document.createElement("div");
  pie.className = "graph-practice-pie";
  pie.setAttribute("role", "img");
  pie.setAttribute("aria-label", data.segments.map((segment) => `${segment.label}: ${segment.value}%`).join(", "));
  const legend = document.createElement("div");
  legend.className = "graph-practice-pie-legend";
  let offset = 0;
  const stops = data.segments.map((segment) => {
    const start = offset;
    offset += segment.value;
    const angle = (start + segment.value / 2) / 100 * Math.PI * 2;
    const label = document.createElement("span");
    label.className = "graph-practice-pie-value";
    label.textContent = `${segment.value}%`;
    const radius = segment.value <= 5 ? 40 : 29;
    label.style.left = `${50 + Math.sin(angle) * radius}%`;
    label.style.top = `${50 - Math.cos(angle) * radius}%`;
    if (segment.value > 0) pie.append(label);
    const item = document.createElement("span");
    const swatch = document.createElement("i");
    swatch.style.backgroundColor = segment.color;
    item.append(swatch, document.createTextNode(segment.label));
    legend.append(item);
    return `${segment.color} ${start}% ${offset}%`;
  });
  pie.style.background = `conic-gradient(${stops.join(", ")})`;
  figure.append(legend, pie);
}
