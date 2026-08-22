function clearInvitationLetter() {
  document.getElementById("invitationLetterVisual")?.remove();
  els.presenceView.replaceChildren();
  els.exampleCard?.classList.remove("invitation-letter-active");
}

function renderInvitationLetter(example) {
  const data = example.invitationLetter;
  if (!data) return;

  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");
  els.exampleCard.classList.add("invitation-letter-active");

  const letter = document.createElement("section");
  letter.id = "invitationLetterVisual";
  letter.className = "invitation-letter";
  const heading = document.createElement("h2");
  heading.textContent = data.heading || "READ THE INVITATION";
  const paper = document.createElement("article");
  paper.className = "invitation-letter-paper";
  const targetLines = [];
  data.lines.forEach((line) => {
    const row = document.createElement("p");
    if (line.parts) {
      line.parts.forEach((part) => {
        if (!part.field) {
          row.append(part.text);
          return;
        }
        const targetPart = document.createElement("span");
        targetPart.textContent = part.text;
        targetPart.dataset.field = part.field;
        targetLines.push(targetPart);
        row.append(targetPart);
      });
    } else {
      row.textContent = line.text;
      if (line.field) {
        row.dataset.field = line.field;
        targetLines.push(row);
      }
    }
    paper.append(row);
  });
  letter.append(heading, paper);
  els.exampleVisualPanel.append(letter);

  const panel = document.createElement("section");
  panel.className = "invitation-letter-fields";
  const panelHeading = document.createElement("h2");
  panelHeading.textContent = data.questionMode ? "ANSWER THE QUESTIONS" : "FIND THE INFORMATION";
  const buttons = document.createElement("div");
  buttons.className = `invitation-letter-buttons ${data.questionMode ? "questions" : ""}`;
  const fieldsById = new Map(data.fields.map((field) => [field.id, field]));
  const completedFields = new Set();
  let selectedField = null;
  let selectedNumber = null;
  let firstAttempt = true;

  const removeTargets = () => {
    paper.querySelectorAll(".invitation-letter-target").forEach((target) => target.remove());
    targetLines.forEach((line) => line.classList.remove("selectable"));
  };

  const shakeLetter = () => {
    els.exampleCard.classList.remove("invitation-letter-shake");
    requestAnimationFrame(() => els.exampleCard.classList.add("invitation-letter-shake"));
  };

  const playFeedback = (isCorrect) => {
    new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.mp3`).play().catch(() => {});
  };

  const showTargets = () => {
    removeTargets();
    targetLines.forEach((line) => {
      const target = document.createElement("button");
      target.type = "button";
      target.className = "invitation-letter-target";
      target.setAttribute("aria-label", "Select this part of the letter");
      target.addEventListener("click", () => {
        const isCorrect = line.dataset.field === selectedField;
        playFeedback(isCorrect);
        if (!isCorrect) {
          firstAttempt = false;
          shakeLetter();
          return;
        }
        line.classList.add("correct-answer");
        const matchedNumber = document.createElement("span");
        matchedNumber.className = "invitation-letter-match-number";
        matchedNumber.textContent = ` (${selectedNumber})`;
        line.append(matchedNumber);
        completedFields.add(selectedField);
        buttons.querySelector(`[data-field="${selectedField}"]`)?.classList.add("completed");
        buttons.querySelector(`[data-field="${selectedField}"]`).disabled = true;
        const selectedData = fieldsById.get(selectedField);
        if (selectedData?.answer) {
          const answer = document.createElement("p");
          answer.className = "invitation-letter-answer";
          answer.textContent = selectedData.answer;
          buttons.querySelector(`[data-field="${selectedField}"]`)?.insertAdjacentElement("afterend", answer);
        }
        if (firstAttempt) window.StudentGame?.onCorrect();
        window.TeacherControl?.onCorrect();
        selectedField = null;
        selectedNumber = null;
        removeTargets();
        buttons.querySelectorAll("button").forEach((button) => button.classList.remove("active"));
      });
      line.classList.add("selectable");
      line.append(target);
    });
  };

  data.fields.forEach((field, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `invitation-letter-button ${field.color}`;
    const number = document.createElement("span");
    number.className = "invitation-letter-button-number";
    number.textContent = index + 1;
    const label = document.createElement("span");
    label.textContent = field.label;
    button.append(number, label);
    button.dataset.field = field.id;
    button.addEventListener("click", () => {
      if (completedFields.has(field.id)) return;
      buttons.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      selectedField = field.id;
      selectedNumber = index + 1;
      firstAttempt = true;
      showTargets();
    });
    buttons.append(button);
  });
  panel.append(panelHeading, buttons);
  els.presenceView.replaceChildren(panel);
}
