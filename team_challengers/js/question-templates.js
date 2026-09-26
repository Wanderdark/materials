(() => {
  const TC = window.TeamChallengers;

  const TEMPLATE_INDEX = Object.freeze({
    dialogue: Object.freeze({ label: "Dialogue", description: "Portrait-supported conversation with one or more speakers.", requiredFields: ["lines"] }),
    situation: Object.freeze({ label: "Situation", description: "A real-life communication task presented as a scenario.", requiredFields: ["situation"] }),
    classification: Object.freeze({ label: "Classification", description: "Classify a sentence by its communicative function.", requiredFields: ["statement"] }),
    sequence: Object.freeze({ label: "Conversation Flow", description: "Choose the line that logically completes a conversation sequence.", requiredFields: ["lines"] }),
    writingExercise: Object.freeze({ label: "Writing Exercise", description: "A canon character gives a writing task before students choose the matching paragraph.", requiredFields: ["speaker", "instruction"] }),
    friendOpinions: Object.freeze({ label: "Friend Opinions", description: "Four canon characters share opinions about their friendships.", requiredFields: ["opinions"] }),
    personalityProfiles: Object.freeze({ label: "Personality Profiles", description: "Four canon characters describe behaviour that reveals their personality traits.", requiredFields: ["profiles"] }),
    friendMessages: Object.freeze({ label: "Friend Messages", description: "Canon characters send messages that learners compare for meaning.", requiredFields: ["messages"] }),
    chatThread: Object.freeze({ label: "Chat Thread", description: "A canon character conversation displayed as one phone messaging thread.", requiredFields: ["messages"] }),
    invitationCard: Object.freeze({ label: "Invitation Card", description: "A formal invitation card with event details that learners read for information.", requiredFields: ["host", "event", "message", "date", "venue", "time", "fee", "contact", "replyBy"] }),
    dataTable: Object.freeze({ label: "Data Table", description: "A reusable labelled table for comparing any set of rows and columns.", requiredFields: ["columns", "rows"] })
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
      `../func_presenter/images/avatars/v2/${slug}.webp`
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
    card.append(makeElement("blockquote", "classification-statement", `“${question.statement}”`));
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

  function renderPersonalityProfiles(container, question) {
    const grid = makeElement("div", "friend-opinions-grid personality-profiles-grid");
    question.profiles.forEach((profile) => {
      const card = makeElement("article", "friend-opinion-card personality-profile-card");
      const portrait = makeElement("img", "friend-opinion-portrait");
      attachPortrait(portrait, profile.speaker);
      const heading = makeElement("div", "friend-opinion-heading");
      heading.append(portrait, makeElement("strong", "friend-opinion-name", profile.speaker));
      card.append(heading, makeElement("p", "friend-opinion-text", profile.text));
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

  function renderChatThread(container, question) {
    const phone = makeElement("article", "chat-thread-phone");
    const top = makeElement("div", "chat-thread-top");
    const participants = [...new Set(question.messages.map((message) => message.speaker))];
    const avatar = makeElement("img", "chat-thread-top-portrait");
    attachPortrait(avatar, participants[0]);
    top.append(avatar, makeElement("strong", "chat-thread-title", participants.join(" & ")), makeElement("span", "chat-thread-status", "ONLINE"));
    const messages = makeElement("div", "chat-thread-messages");
    question.messages.forEach((message) => {
      const side = message.side === "outgoing" ? "outgoing" : "incoming";
      const row = makeElement("div", `chat-thread-message ${side}`);
      if (side === "incoming") {
        const portrait = makeElement("img", "chat-thread-portrait");
        attachPortrait(portrait, message.speaker);
        row.appendChild(portrait);
      }
      const bubble = makeElement("div", "chat-thread-bubble");
      bubble.append(makeElement("strong", "chat-thread-speaker", message.speaker));
      const text = makeElement("p", "chat-thread-text");
      appendDialogueText(text, message.text);
      bubble.appendChild(text);
      row.appendChild(bubble);
      messages.appendChild(row);
    });
    phone.append(top, messages, makeElement("span", "chat-thread-home"));
    container.appendChild(phone);
  }

  function renderInvitationCard(container, question) {
    const card = makeElement("article", "invitation-card");
    card.append(makeElement("p", "invitation-host", question.host), makeElement("h3", "invitation-event", question.event), makeElement("p", "invitation-message", question.message));
    const details = makeElement("dl", "invitation-details");
    [["DATE", question.date], ["PLACE", question.venue], ["TIME", question.time], ["FEE", question.fee], ["E-MAIL", question.contact], ["REPLY BY", question.replyBy]].forEach(([label, value]) => {
      details.append(makeElement("dt", "invitation-detail-label", label), makeElement("dd", "invitation-detail-value", value));
    });
    card.appendChild(details);
    container.appendChild(card);
  }

  function renderDataTable(container, question) {
    const wrapper = makeElement("div", "data-table-wrap");
    const table = makeElement("table", "data-table");
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    headRow.appendChild(makeElement("th", "data-table-corner"));
    question.columns.forEach((column) => headRow.appendChild(makeElement("th", "data-table-heading", column)));
    head.appendChild(headRow);
    const body = document.createElement("tbody");
    question.rows.forEach((row) => {
      const tableRow = document.createElement("tr");
      tableRow.appendChild(makeElement("th", "data-table-row-label", row.label));
      row.values.forEach((value) => tableRow.appendChild(makeElement("td", `data-table-cell${value ? " is-marked" : ""}`, value ? "✓" : "")));
      body.appendChild(tableRow);
    });
    table.append(head, body);
    wrapper.appendChild(table);
    container.appendChild(wrapper);
  }

  function renderQuestionTemplate(container, question) {
    container.replaceChildren();
    const template = question.template || "dialogue";
    if (!TEMPLATE_INDEX[template]) return;
    if (template === "dialogue") renderDialogue(container, question);
    else if (template === "situation") renderSituation(container, question);
    else if (template === "classification") renderClassification(container, question);
    else if (template === "sequence") renderDialogue(container, question, true);
    else if (template === "writingExercise") renderWritingExercise(container, question);
    else if (template === "friendOpinions") renderFriendOpinions(container, question);
    else if (template === "personalityProfiles") renderPersonalityProfiles(container, question);
    else if (template === "friendMessages") renderFriendMessages(container, question);
    else if (template === "chatThread") renderChatThread(container, question);
    else if (template === "invitationCard") renderInvitationCard(container, question);
    else if (template === "dataTable") renderDataTable(container, question);
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
