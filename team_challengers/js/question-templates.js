(() => {
  const TC = window.TeamChallengers;

  const TEMPLATE_INDEX = Object.freeze({
    dialogue: Object.freeze({ label: "Dialogue", description: "Portrait-supported conversation with one or more speakers.", requiredFields: ["lines"] }),
    situation: Object.freeze({ label: "Situation", description: "A real-life communication task presented as a scenario.", requiredFields: ["situation"] }),
    classification: Object.freeze({ label: "Classification", description: "Classify a sentence by its communicative function.", requiredFields: ["statement"] }),
    structure: Object.freeze({ label: "Language Structure", description: "Focus on the form of a target expression.", requiredFields: ["formula", "example"] }),
    sequence: Object.freeze({ label: "Conversation Flow", description: "Choose the line that logically completes a conversation sequence.", requiredFields: ["lines"] }),
    writingExercise: Object.freeze({ label: "Writing Exercise", description: "A canon character gives a writing task before students choose the matching paragraph.", requiredFields: ["speaker", "instruction"] }),
    friendOpinions: Object.freeze({ label: "Friend Opinions", description: "Four canon characters share opinions about their friendships.", requiredFields: ["opinions"] }),
    friendMessages: Object.freeze({ label: "Friend Messages", description: "Canon characters send messages that learners compare for meaning.", requiredFields: ["messages"] })
  });

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function portraitCandidates(speaker) {
    const slug = String(speaker || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (!slug) return [];
    return [
      `../olivias_movie_memories/assets/portraits/${slug}.webp`,
      `../OYUN_SITESI/olivias_movie_memories/assets/portraits/${slug}.webp`
    ];
  }

  function attachPortrait(image, speaker) {
    const candidates = portraitCandidates(speaker);
    let index = 0;
    image.hidden = !candidates.length;
    image.alt = candidates.length ? `${speaker} portrait` : "";
    image.onerror = () => {
      index += 1;
      if (index < candidates.length) image.src = candidates[index];
      else { image.hidden = true; image.removeAttribute("src"); }
    };
    if (candidates.length) image.src = candidates[0];
  }

  function appendDialogueText(container, value) {
    String(value || "").split(/(_{2,}|-{4,}|\n)/g).forEach((part) => {
      if (part === "\n") { container.appendChild(document.createElement("br")); return; }
      if (/^(_{2,}|-{4,})$/.test(part)) {
        const gap = makeElement("span", "question-gap question-spinner");
        gap.setAttribute("aria-label", "Missing expression");
        container.appendChild(gap);
        return;
      }
      container.appendChild(document.createTextNode(part));
    });
  }

  function createDialogueLine(line, numbered, index) {
    const row = makeElement("div", `dialogue-line${line.tone ? ` tone-${line.tone}` : ""}`);
    if (numbered) row.appendChild(makeElement("span", "dialogue-order", String(index + 1)));
    const portrait = makeElement("img", "dialogue-portrait");
    attachPortrait(portrait, line.speaker);
    const copy = makeElement("div", "dialogue-copy");
    const text = makeElement("p", "dialogue-text");
    appendDialogueText(text, line.text);
    copy.append(makeElement("strong", "dialogue-speaker", line.speaker), text);
    row.append(portrait, copy);
    return row;
  }

  function renderDialogue(container, question, numbered = false) {
    const dialogue = makeElement("div", numbered ? "dialogue-card sequence-card" : "dialogue-card");
    question.lines.forEach((line, index) => dialogue.appendChild(createDialogueLine(line, numbered, index)));
    container.appendChild(dialogue);
  }

  function renderSituation(container, question) {
    const card = makeElement("div", "situation-card");
    card.append(makeElement("span", "situation-icon", "🎭"), makeElement("div", "situation-copy", question.situation));
    container.appendChild(card);
  }

  function renderClassification(container, question) {
    const card = makeElement("div", "classification-card");
    card.append(makeElement("span", "classification-label", "WHAT DOES THIS EXPRESS?"), makeElement("blockquote", "classification-statement", `“${question.statement}”`));
    container.appendChild(card);
  }

  function renderStructure(container, question) {
    const card = makeElement("div", "structure-card");
    const formula = makeElement("div", "structure-formula");
    String(question.formula).split("+").forEach((part, index, parts) => {
      formula.appendChild(makeElement("span", "structure-token", part.trim()));
      if (index < parts.length - 1) formula.appendChild(makeElement("b", "structure-plus", "+"));
    });
    card.append(formula, makeElement("p", "structure-example", question.example));
    container.appendChild(card);
  }

  function renderWritingExercise(container, question) {
    const card = makeElement("div", "writing-exercise-card");
    const speaker = makeElement("div", "writing-exercise-speaker");
    const portrait = makeElement("img", "writing-exercise-portrait");
    attachPortrait(portrait, question.speaker);
    const name = makeElement("strong", "writing-exercise-name", question.speaker);
    const role = makeElement("span", "writing-exercise-role", "WRITING TASK");
    const speech = makeElement("p", "writing-exercise-speech", question.instruction);
    speaker.append(portrait, makeElement("div", "writing-exercise-identity"));
    speaker.lastElementChild.append(role, name);
    card.append(speaker, speech);
    container.appendChild(card);
  }

  function renderFriendOpinions(container, question) {
    const grid = makeElement("div", "friend-opinions-grid");
    question.opinions.forEach((opinion) => {
      const card = makeElement("article", "friend-opinion-card");
      const portrait = makeElement("img", "friend-opinion-portrait");
      attachPortrait(portrait, opinion.speaker);
      const heading = makeElement("div", "friend-opinion-heading");
      heading.append(portrait, makeElement("strong", "friend-opinion-name", opinion.speaker));
      card.append(heading, makeElement("p", "friend-opinion-text", opinion.text));
      grid.appendChild(card);
    });
    container.appendChild(grid);
  }

  function renderFriendMessages(container, question) {
    const grid = makeElement("div", "friend-messages-grid");
    question.messages.forEach((message) => {
      const phone = makeElement("article", "friend-message-phone");
      const top = makeElement("div", "friend-message-top");
      const portrait = makeElement("img", "friend-message-portrait");
      attachPortrait(portrait, message.speaker);
      top.append(portrait, makeElement("strong", "friend-message-name", message.speaker));
      phone.append(top, makeElement("p", "friend-message-bubble", message.text), makeElement("span", "friend-message-home"));
      grid.appendChild(phone);
    });
    container.appendChild(grid);
  }

  function renderQuestionTemplate(container, question) {
    container.replaceChildren();
    const template = question.template || "dialogue";
    if (!TEMPLATE_INDEX[template]) return;
    if (template === "dialogue") renderDialogue(container, question);
    else if (template === "situation") renderSituation(container, question);
    else if (template === "classification") renderClassification(container, question);
    else if (template === "structure") renderStructure(container, question);
    else if (template === "sequence") renderDialogue(container, question, true);
    else if (template === "writingExercise") renderWritingExercise(container, question);
    else if (template === "friendOpinions") renderFriendOpinions(container, question);
    else if (template === "friendMessages") renderFriendMessages(container, question);
  }

  function validateQuestionTemplates(questions) {
    return questions.flatMap((question) => {
      const definition = TEMPLATE_INDEX[question.template];
      if (!definition) return [`${question.id}: unknown template '${question.template}'`];
      const errors = definition.requiredFields.filter((field) => question[field] === undefined).map((field) => `${question.id}: missing '${field}'`);
      if (question.optionPortraits !== undefined && (!Array.isArray(question.optionPortraits) || question.optionPortraits.length !== question.options.length)) errors.push(`${question.id}: 'optionPortraits' must match the options length`);
      return errors;
    });
  }

  Object.assign(TC, { QUESTION_TEMPLATE_INDEX: TEMPLATE_INDEX, attachPortrait, renderQuestionTemplate, validateQuestionTemplates });
})();
