// Reusable table-based preference test for presentation slides.
function clearPreferenceTableTest() {
  document.getElementById("preferenceTableTest")?.remove();
  document.getElementById("preferenceTableQuestion")?.remove();
  els.exampleCard?.classList.remove("preference-table-test-slide");
}

function shufflePreferenceTableChoices(choices) {
  const shuffled = [...choices];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function renderPreferenceTableTest(example) {
  const data = example.preferenceTableTest;
  if (!data) return;

  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");
  els.presenceView.replaceChildren();
  els.presenceView.classList.add("hidden");
  els.exampleCard.classList.add("preference-table-test-slide");

  const tableWrap = document.createElement("section");
  tableWrap.id = "preferenceTableTest";
  tableWrap.className = "preference-table-test";
  const table = document.createElement("table");
  table.setAttribute("aria-label", data.tableLabel || "Character preferences");
  const colGroup = document.createElement("colgroup");
  const nameColumn = document.createElement("col");
  nameColumn.style.width = "25%";
  colGroup.append(nameColumn);
  (data.columns || []).forEach(() => {
    const column = document.createElement("col");
    column.style.width = `${75 / (data.columns || []).length}%`;
    colGroup.append(column);
  });
  const head = document.createElement("thead");
  const body = document.createElement("tbody");
  const header = document.createElement("tr");
  header.append(document.createElement("th"));
  (data.columns || []).forEach((column) => {
    const cell = document.createElement("th");
    cell.scope = "col";
    cell.textContent = column;
    header.append(cell);
  });
  head.append(header);
  (data.rows || []).forEach((row) => {
    const tableRow = document.createElement("tr");
    const name = document.createElement("th");
    name.scope = "row";
    const portrait = document.createElement("img");
    portrait.className = "preference-table-portrait";
    portrait.src = row.portraitPath || `../olivias_movie_memories/assets/portraits/${String(row.name).toLowerCase()}.webp`;
    portrait.alt = row.name;
    const label = document.createElement("span");
    label.className = "preference-table-name";
    label.textContent = row.name;
    name.append(portrait, label);
    tableRow.append(name);
    (data.columns || []).forEach((column) => {
      const cell = document.createElement("td");
      const preference = row.preferences?.[column];
      if (preference === true || preference === false) {
        const mark = document.createElement("span");
        mark.className = preference ? "preference-table-tick" : "preference-table-cross";
        mark.textContent = preference ? "✓" : "✕";
        mark.setAttribute("aria-label", preference ? "likes" : "does not like");
        cell.append(mark);
      }
      tableRow.append(cell);
    });
    body.append(tableRow);
  });
  table.append(colGroup, head, body);
  tableWrap.append(table);
  els.exampleVisualPanel.append(tableWrap);

  const question = document.createElement("section");
  question.id = "preferenceTableQuestion";
  question.className = "test-question preference-table-question";
  const title = document.createElement("h2");
  title.textContent = data.prompt || "CHOOSE THE CORRECT SENTENCE";
  const options = document.createElement("div");
  options.className = "test-question-options";
  const colors = ["navy", "yellow", "red", "orange"];
  let firstAttempt = true;
  shufflePreferenceTableChoices(data.choices || []).forEach((choice, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = `test-question-choice ${colors[index]}`;
    option.textContent = choice.text;
    option.addEventListener("click", () => {
      if (option.disabled) return;
      if (!choice.correct) {
        firstAttempt = false;
        new Audio("sounds/wrong.mp3").play().catch(() => {});
        option.disabled = true;
        option.classList.add("removed");
        return;
      }
      new Audio("sounds/correct.mp3").play().catch(() => {});
      options.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
        if (button !== option) button.classList.add("removed");
      });
      option.classList.add("correct");
      if (firstAttempt) window.StudentGame?.onCorrect();
      window.TeacherControl?.onCorrect();
    });
    options.append(option);
  });
  question.append(title, options);
  els.exampleCard.querySelector(".sentence-panel")?.append(question);
}
