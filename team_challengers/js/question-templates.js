(() => {
  const TC = window.TeamChallengers;

  const TEMPLATE_INDEX = Object.freeze({
    dialogue: Object.freeze({ label: "Dialogue", description: "Portrait-supported conversation with one or more speakers.", requiredFields: ["lines"] }),
    dialogueSplit: Object.freeze({ label: "Split Dialogue", description: "A conversation on the left with answer choices on the right.", requiredFields: ["lines"] }),
    portraitSpeech: Object.freeze({ label: "Portrait Speech", description: "A large character portrait beside a speech bubble for a single-speaker passage.", requiredFields: ["lines"] }),
    interestCards: Object.freeze({ label: "Interest Cards", description: "Compare two characters' activity lists and choose a suitable shared club.", requiredFields: ["interests"] }),
    blogReviews: Object.freeze({ label: "Blog Reviews", description: "Read a character's band reviews and select a review card as the answer.", requiredFields: ["speaker", "passage", "reviews"] }),
    blogPost: Object.freeze({ label: "Blog Post", description: "Read one character's blog post and select a matching statement or question.", requiredFields: ["speaker", "passage"] }),
    venueReviews: Object.freeze({ label: "Venue Reviews", description: "Compare characters' reviews of different venues to identify a shared feature.", requiredFields: ["passage", "reviews"] }),
    learningWall: Object.freeze({ label: "Learning Wall", description: "Read addressed friendship notes and identify which ones follow the wall's rules.", requiredFields: ["passage", "notes"] }),
    ticketChoice: Object.freeze({ label: "Ticket Choice", description: "Compare two preferences and choose a matching event ticket.", requiredFields: ["opinions", "tickets"] }),
    reading: Object.freeze({ label: "Reading", description: "Read a passage and choose the matching statement.", requiredFields: ["passage"] }),
    emailMessage: Object.freeze({ label: "E-mail Message", description: "Read an e-mail with sender, recipient and subject fields and interpret its message.", requiredFields: ["sender", "recipient", "subject", "paragraphs"] }),
    pieChart: Object.freeze({ label: "Pie Chart", description: "Compare labelled percentage slices and interpret the chart.", requiredFields: ["chartTitle", "chartData"] }),
    traitMap: Object.freeze({ label: "Trait Map", description: "A character portrait surrounded by personality traits.", requiredFields: ["speaker", "traits"] }),
    scheduleDialogue: Object.freeze({ label: "Schedule Dialogue", description: "Use a character's schedule to complete a conversation.", requiredFields: ["speaker", "schedule", "lines"] }),
    scheduleInvitation: Object.freeze({ label: "Plans and Event Ticket", description: "Compare a character's plans with an event ticket and choose an appropriate invitation response.", requiredFields: ["speaker", "day", "passage", "schedule", "ticket"] }),
    situation: Object.freeze({ label: "Situation", description: "A real-life communication task presented as a scenario.", requiredFields: ["situation"] }),
    classification: Object.freeze({ label: "Classification", description: "Classify a sentence by its communicative function.", requiredFields: ["statement"] }),
    sequence: Object.freeze({ label: "Conversation Flow", description: "Choose the line that logically completes a conversation sequence.", requiredFields: ["lines"] }),
    writingExercise: Object.freeze({ label: "Writing Exercise", description: "A canon character gives a writing task before students choose the matching paragraph.", requiredFields: ["speaker", "instruction"] }),
    friendOpinions: Object.freeze({ label: "Friend Opinions", description: "Four canon characters share opinions about their friendships.", requiredFields: ["opinions"] }),
    personalityProfiles: Object.freeze({ label: "Personality Profiles", description: "Four canon characters describe behaviour that reveals their personality traits.", requiredFields: ["profiles"] }),
    friendMessages: Object.freeze({ label: "Friend Messages", description: "Canon characters send messages that learners compare for meaning.", requiredFields: ["messages"] }),
    chatThread: Object.freeze({ label: "Chat Thread", description: "A canon character conversation displayed as one phone messaging thread.", requiredFields: ["messages"] }),
    invitationCard: Object.freeze({ label: "Invitation Card", description: "A formal invitation card with event details that learners read for information.", requiredFields: ["host", "event", "message", "date", "venue", "time", "fee", "contact", "replyBy"] }),
    imageInvitation: Object.freeze({ label: "Image Invitation", description: "Read an illustrated invitation and identify the missing event information.", requiredFields: ["passage", "image", "imageAlt"] }),
    invitationChoices: Object.freeze({ label: "Invitation Card Choices", description: "Compare four clickable invitation cards and identify the one matching the specified information.", requiredFields: ["passage"] }),
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
      `../olivias_movie_memories/assets/portraits/${slug}.webp`
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

  function renderPortraitSpeech(container, question) {
    const line = question.lines[0];
    const card = makeElement("article", "portrait-speech-card");
    const identity = makeElement("div", "portrait-speech-identity");
    const portrait = makeElement("img", "portrait-speech-image");
    attachPortrait(portrait, line.speaker);
    identity.append(portrait, makeElement("strong", "portrait-speech-name", line.speaker));
    const bubble = makeElement("div", "portrait-speech-bubble");
    const text = makeElement("p", "portrait-speech-text");
    appendDialogueText(text, line.text);
    bubble.appendChild(text); card.append(identity, bubble); container.appendChild(card);
  }

  function renderInterestCards(container, question) {
    const grid = makeElement("div", "interest-cards");
    question.interests.forEach((interest) => {
      const card = makeElement("article", "interest-card");
      const portrait = makeElement("img", "interest-card-portrait");
      attachPortrait(portrait, interest.speaker);
      const copy = makeElement("div", "interest-card-copy");
      copy.appendChild(makeElement("h3", "interest-card-title", interest.speaker + "'s interests"));
      const list = makeElement("ul", "interest-card-list");
      interest.activities.forEach((activity) => list.appendChild(makeElement("li", "", activity)));
      copy.appendChild(list); card.append(portrait, copy); grid.appendChild(card);
    });
    container.appendChild(grid);
  }

  function renderTicketChoice(container, question) {
    if (question.passage) { container.appendChild(makeElement("p", "ticket-passage", question.passage)); return; }
    const grid = makeElement("div", "ticket-speakers");
    question.opinions.forEach((opinion) => {
      const card = makeElement("article", "ticket-speaker");
      const portrait = makeElement("img", "ticket-portrait");
      attachPortrait(portrait, opinion.speaker);
      const copy = makeElement("div", "ticket-speech");
      copy.append(makeElement("strong", "ticket-speaker-name", opinion.speaker), makeElement("p", "ticket-speech-text", opinion.text));
      card.append(portrait, copy); grid.appendChild(card);
    });
    container.appendChild(grid);
  }

  function renderLearningWall(container, question) {
    const intro = makeElement("p", "learning-wall-intro");
    const index = question.passageHighlight ? question.passage.indexOf(question.passageHighlight) : -1;
    if (index < 0) intro.textContent = question.passage;
    else intro.append(document.createTextNode(question.passage.slice(0, index)), makeElement("span", "learning-wall-emphasis", question.passageHighlight), document.createTextNode(question.passage.slice(index + question.passageHighlight.length)));
    const board = makeElement("section", "learning-wall-board");
    board.appendChild(makeElement("h3", "learning-wall-title", "OUR OPINIONS WALL"));
    const grid = makeElement("div", "learning-wall-notes");
    question.notes.forEach((note) => {
      const card = makeElement("article", "learning-wall-note");
      card.appendChild(makeElement("p", "learning-wall-message", note.text));
      const sender = makeElement("div", "learning-wall-sender");
      const portrait = makeElement("img", "learning-wall-portrait");
      attachPortrait(portrait, note.sender);
      sender.append(portrait, makeElement("strong", "", note.sender));
      card.append(sender, makeElement("p", "learning-wall-recipient", "To " + note.recipient)); grid.appendChild(card);
    });
    board.appendChild(grid); container.append(intro, board);
  }

  function renderVenueReviews(container, question) {
    container.appendChild(makeElement("p", "venue-review-intro", question.passage));
    const list = makeElement("div", "venue-review-list");
    question.reviews.forEach((review) => {
      const card = makeElement("article", "venue-review-card");
      const identity = makeElement("div", "venue-review-identity");
      const portrait = makeElement("img", "venue-review-portrait");
      attachPortrait(portrait, review.speaker);
      identity.append(portrait, makeElement("strong", "venue-review-name", review.speaker));
      const copy = makeElement("div", "venue-review-copy");
      copy.append(makeElement("h3", "venue-review-title", review.venue), makeElement("p", "venue-review-text", review.text));
      card.append(identity, copy); list.appendChild(card);
    });
    container.appendChild(list);
  }

  function renderBlogPost(container, question) {
    const card = makeElement("article", "blog-post-card");
    card.appendChild(makeElement("div", "blog-review-address", question.speaker.toLowerCase() + ".example/books"));
    const author = makeElement("div", "blog-review-author");
    const portrait = makeElement("img", "blog-review-portrait");
    attachPortrait(portrait, question.speaker);
    author.append(portrait, makeElement("h3", "blog-review-title", question.speaker + "'s Blog"));
    const text = makeElement("p", "blog-post-text");
    appendDialogueText(text, question.passage);
    card.append(author, text); container.appendChild(card);
  }

  function renderBlogReviews(container, question) {
    container.appendChild(makeElement("p", "blog-review-intro", question.passage));
    const header = makeElement("div", "blog-review-header");
    header.appendChild(makeElement("div", "blog-review-address", question.speaker.toLowerCase() + ".example/bands"));
    const author = makeElement("div", "blog-review-author");
    const portrait = makeElement("img", "blog-review-portrait");
    attachPortrait(portrait, question.speaker);
    author.append(portrait, makeElement("h3", "blog-review-title", question.speaker + "'s comments"));
    header.appendChild(author); container.appendChild(header);
  }

  function renderTicketOptions(container, question) {
    if (question.template === "invitationChoices") {
      [...container.children].forEach((button, index) => {
        const [greeting, ...body] = question.options[index].split("\n");
        const heading = makeElement("div", "invitation-choice-heading");
        heading.append(button.firstElementChild, makeElement("strong", "", greeting));
        button.classList.add("invitation-choice");
        button.replaceChildren(heading, makeElement("p", "invitation-choice-text", body.join("\n")));
      });
      return;
    }
    if (question.template === "blogReviews") {
      [...container.children].forEach((button, index) => {
        const review = question.reviews.find((item) => item.band === question.options[index]);
        if (!review) return;
        const letter = button.firstElementChild;
        const heading = makeElement("div", "blog-review-band");
        heading.append(letter, makeElement("strong", "", review.band));
        button.classList.add("blog-review-option");
        button.replaceChildren(heading, makeElement("p", "blog-review-text", review.text));
      });
      return;
    }
    if (question.pictureChoices) {
      [...container.children].forEach((button, index) => {
        const choice = question.pictureChoices.find((item) => item.label === question.options[index]);
        if (!choice) return;
        const label = button.firstElementChild;
        label.removeAttribute("style");
        button.replaceChildren(label);
        button.classList.add("picture-answer");
        button.setAttribute("aria-label", label.textContent + ": " + choice.label);
        button.style.backgroundImage = 'url("' + choice.image + '")';
        button.style.backgroundPosition = choice.position;
      });
      return;
    }
    if (question.template !== "ticketChoice") return;
    [...container.children].forEach((button, index) => {
      const ticket = question.tickets.find((item) => item.title === question.options[index]);
      if (!ticket) return;
      button.classList.add("concert-ticket", "ticket-" + ticket.theme);
      const copy = button.lastElementChild;
      copy.className = "ticket-copy"; copy.replaceChildren();
      copy.append(makeElement("small", "ticket-genre", ticket.genre), makeElement("strong", "ticket-title", ticket.title));
      if (Number.isInteger(ticket.minimumAge)) copy.appendChild(makeElement("span", "ticket-details", `Age: ${ticket.minimumAge}+`));
      if (ticket.day || ticket.time) copy.appendChild(makeElement("span", "ticket-details", [ticket.day, ticket.time].filter(Boolean).join(" · ")));
      if (ticket.image) {
        const image = makeElement("img", "ticket-image");
        image.src = ticket.image; image.alt = ticket.genre + " concert";
        button.insertBefore(image, copy); button.classList.add("has-ticket-image");
      }
      button.appendChild(makeElement("span", "ticket-stub", "ADMIT ONE"));
    });
  }

  function renderTraitMap(container, question) {
    const card = makeElement("div", "trait-map");
    const identity = makeElement("div", "trait-map-identity");
    const portrait = makeElement("img", "trait-map-portrait");
    attachPortrait(portrait, question.speaker);
    identity.append(portrait, makeElement("strong", "trait-map-name", question.speaker));
    card.appendChild(identity);
    question.traits.forEach((trait) => card.appendChild(makeElement("span", "trait-map-label", trait)));
    container.appendChild(card);
  }

  function renderScheduleInvitation(container, question) {
    container.appendChild(makeElement("p", "reading-passage", question.passage));
    const context = makeElement("section", "schedule-invitation");
    context.appendChild(makeElement("h3", "schedule-invitation-heading", question.speaker + "'s Plans for " + question.day));
    const plans = makeElement("div", "schedule-invitation-plans");
    question.schedule.forEach((item) => {
      const card = makeElement("article", "schedule-invitation-plan");
      card.append(makeElement("strong", "schedule-invitation-time", item.time), makeElement("p", "schedule-invitation-activity", item.activity));
      plans.appendChild(card);
    });
    const ticket = makeElement("article", "schedule-invitation-ticket");
    if (question.ticket.image) {
      const image = makeElement("img", "schedule-invitation-ticket-image");
      image.src = question.ticket.image;
      image.alt = [question.ticket.title, question.ticket.venue, question.ticket.day, question.ticket.time].join(" · ");
      ticket.classList.add("has-ticket-image");
      ticket.appendChild(image);
    } else {
      ticket.append(makeElement("strong", "", question.ticket.title), makeElement("span", "", question.ticket.venue), makeElement("span", "", question.ticket.day), makeElement("strong", "", question.ticket.time));
    }
    context.append(plans, ticket);
    container.appendChild(context);
  }

  function renderScheduleDialogue(container, question) {
    const context = makeElement("div", "schedule-dialogue");
    context.appendChild(makeElement("strong", "schedule-owner", question.speaker + "'s schedule"));
    const schedule = makeElement("div", "schedule-grid");
    question.schedule.forEach((item) => {
      const card = makeElement("article", "schedule-day");
      card.append(makeElement("strong", "schedule-day-name", item.day), makeElement("span", "schedule-time", item.time), makeElement("p", "schedule-activity", item.activity));
      schedule.appendChild(card);
    });
    context.appendChild(schedule);
    renderDialogue(context, question);
    container.appendChild(context);
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
    if (question.passage) container.appendChild(makeElement("p", "reading-passage", question.passage));
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

  function renderInlineFriendOptions(container, question) {
    const items = question.template === "friendOpinions" ? question.opinions : question.template === "friendMessages" ? question.messages : null;
    if (!items || items.length !== question.options.length || new Set(question.options).size !== items.length || !question.options.every((name) => items.some((item) => item.speaker === name))) return false;
    const ordered = question.options.map((name) => items.find((item) => item.speaker === name));
    const preview = makeElement("div");
    const isPhone = question.template === "friendMessages";
    if (isPhone) renderFriendMessages(preview, { ...question, messages: ordered });
    else renderFriendOpinions(preview, { ...question, passage: "", opinions: ordered });
    [...preview.firstElementChild.children].forEach((card, index) => {
      const button = container.children[index];
      const letter = button.firstElementChild;
      card.firstElementChild.insertBefore(letter, card.firstElementChild.firstElementChild);
      button.classList.remove("has-option-portrait");
      button.classList.add("inline-friend-option", isPhone ? "friend-message-phone" : "friend-opinion-card");
      button.replaceChildren(...card.children);
    });
    return true;
  }

  function renderChatThread(container, question) {
    const phone = makeElement("article", question.groupTitle ? "chat-thread-phone chat-thread-group" : "chat-thread-phone");
    const top = makeElement("div", "chat-thread-top");
    const participants = [...new Set(question.messages.map((message) => message.speaker))];
    const avatar = makeElement("img", "chat-thread-top-portrait");
    attachPortrait(avatar, participants[0]);
    top.append(avatar, makeElement("strong", "chat-thread-title", question.groupTitle || participants.join(" & ")), makeElement("span", "chat-thread-status", "ONLINE"));
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

  function renderEmailMessage(container, question) {
    const card = makeElement("article", "email-message");
    card.appendChild(makeElement("div", "email-message-bar", "New Message"));
    const fields = makeElement("div", "email-message-fields");
    [["To", question.recipient], ["From", question.sender], ["Subject", question.subject]].forEach(([label, value]) => {
      fields.append(makeElement("strong", "email-message-field-label", label + ":"), makeElement("span", "email-message-field-value", value));
    });
    const body = makeElement("div", "email-message-body");
    question.paragraphs.forEach((text) => body.appendChild(makeElement("p", "", text)));
    card.append(fields, body);
    container.appendChild(card);
  }

  function renderImageInvitation(container, question) {
    const passage = makeElement("p", "reading-passage", question.passage);
    if (question.introPortraits?.length === 2) {
      const intro = makeElement("div", "image-invitation-intro");
      question.introPortraits.forEach((speaker, index) => {
        if (index === 1) intro.appendChild(passage);
        const frame = makeElement("div", "image-invitation-portrait-frame");
        const portrait = makeElement("img", "image-invitation-portrait");
        attachPortrait(portrait, speaker);
        frame.appendChild(portrait);
        intro.appendChild(frame);
      });
      container.appendChild(intro);
    } else container.appendChild(passage);
    const image = makeElement("img", "image-invitation");
    image.src = question.image;
    image.alt = question.imageAlt;
    container.appendChild(image);
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

  function renderPieChart(container, question) {
    const card = makeElement("figure", "pie-chart-card");
    card.appendChild(makeElement("figcaption", "pie-chart-title", question.chartTitle));
    const svgElement = (tag, attributes, text) => {
      const element = document.createElementNS("http://www.w3.org/2000/svg", tag);
      Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, String(value)));
      if (text !== undefined) element.textContent = text;
      return element;
    };
    const svg = svgElement("svg", { viewBox: "0 0 360 360", class: "pie-chart-svg", role: "img", "aria-label": question.chartTitle + ". " + question.chartData.map((slice) => slice.label + ": " + slice.percentage + "%").join(", ") });
    const point = (angle, radius) => [180 + radius * Math.cos(angle), 180 + radius * Math.sin(angle)];
    let angle = -Math.PI / 2;
    question.chartData.forEach((slice) => {
      const end = angle + slice.percentage / 100 * Math.PI * 2;
      const startPoint = point(angle, 164), endPoint = point(end, 164);
      svg.appendChild(svgElement("path", { d: `M 180 180 L ${startPoint.join(" ")} A 164 164 0 ${slice.percentage > 50 ? 1 : 0} 1 ${endPoint.join(" ")} Z`, fill: slice.color, stroke: "#11153d", "stroke-width": 2 }));
      const [x, y] = point((angle + end) / 2, 105);
      svg.appendChild(svgElement("text", { x, y, class: "pie-chart-percentage", "text-anchor": "middle", "aria-hidden": "true" }, slice.percentage + "%"));
      svg.appendChild(svgElement("text", { x, y: y + 20, class: "pie-chart-genre", "text-anchor": "middle", "aria-hidden": "true" }, slice.label));
      angle = end;
    });
    card.appendChild(svg); container.appendChild(card);
  }

  function renderDataTable(container, question) {
    if (question.passage) container.appendChild(makeElement("p", "reading-passage", question.passage));
    const wrapper = makeElement("div", "data-table-wrap");
    const table = makeElement("table", `data-table${question.rows.some((row) => row.values.some((value) => typeof value === "string")) ? " data-table-text" : ""}`);
    if (question.tableTitle) table.appendChild(makeElement("caption", "data-table-heading", question.tableTitle));
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    headRow.appendChild(makeElement("th", "data-table-corner", question.rowHeading || ""));
    question.columns.forEach((column) => headRow.appendChild(makeElement("th", "data-table-heading", column)));
    head.appendChild(headRow);
    const body = document.createElement("tbody");
    question.rows.forEach((row) => {
      const tableRow = document.createElement("tr");
      tableRow.appendChild(makeElement("th", "data-table-row-label", row.label));
      row.values.forEach((value) => tableRow.appendChild(makeElement("td", `data-table-cell${typeof value !== "string" && value ? " is-marked" : ""}`, typeof value === "string" ? value : value ? "✓" : "")));
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
    if (template === "dialogue" || template === "dialogueSplit") renderDialogue(container, question);
    else if (template === "portraitSpeech") renderPortraitSpeech(container, question);
    else if (template === "interestCards") renderInterestCards(container, question);
    else if (template === "blogReviews") renderBlogReviews(container, question);
    else if (template === "blogPost") renderBlogPost(container, question);
    else if (template === "venueReviews") renderVenueReviews(container, question);
    else if (template === "learningWall") renderLearningWall(container, question);
    else if (template === "ticketChoice") renderTicketChoice(container, question);
    else if (template === "reading" || template === "invitationChoices") container.appendChild(makeElement("p", "reading-passage", question.passage));
    else if (template === "emailMessage") renderEmailMessage(container, question);
    else if (template === "traitMap") renderTraitMap(container, question);
    else if (template === "scheduleDialogue") renderScheduleDialogue(container, question);
    else if (template === "scheduleInvitation") renderScheduleInvitation(container, question);
    else if (template === "situation") renderSituation(container, question);
    else if (template === "classification") renderClassification(container, question);
    else if (template === "sequence") renderDialogue(container, question, true);
    else if (template === "writingExercise") renderWritingExercise(container, question);
    else if (template === "friendOpinions") renderFriendOpinions(container, question);
    else if (template === "personalityProfiles") renderPersonalityProfiles(container, question);
    else if (template === "friendMessages") renderFriendMessages(container, question);
    else if (template === "chatThread") renderChatThread(container, question);
    else if (template === "invitationCard") renderInvitationCard(container, question);
    else if (template === "imageInvitation") renderImageInvitation(container, question);
    else if (template === "dataTable") renderDataTable(container, question);
    else if (template === "pieChart") renderPieChart(container, question);
  }

  function validateQuestionTemplates(questions) {
    return questions.flatMap((question) => {
      const definition = TEMPLATE_INDEX[question.template];
      if (!definition) return [`${question.id}: unknown template '${question.template}'`];
      const errors = definition.requiredFields.filter((field) => question[field] === undefined).map((field) => `${question.id}: missing '${field}'`);
      if (question.template === "learningWall" && (!Array.isArray(question.notes) || !question.notes.length || question.notes.some((note) => !note?.sender || !note.recipient || typeof note.text !== "string" || !note.text.trim()))) errors.push(`${question.id}: learning wall notes require senders, recipients and text`);
      if (question.template === "venueReviews" && (!Array.isArray(question.reviews) || question.reviews.length < 2 || question.reviews.some((review) => !review?.speaker || !review.venue || typeof review.text !== "string" || !review.text.trim()))) errors.push(`${question.id}: venue reviews require speakers, venue names and review text`);
      if (question.template === "blogReviews" && (!Array.isArray(question.reviews) || question.reviews.length !== question.options.length || new Set(question.options).size !== question.options.length || !question.options.every((band) => question.reviews.some((review) => review?.band === band && typeof review.text === "string" && review.text.trim())))) errors.push(`${question.id}: blog reviews must match all answer options`);
      if (question.template === "interestCards" && (!Array.isArray(question.interests) || question.interests.length !== 2 || question.interests.some((interest) => !interest?.speaker || !Array.isArray(interest.activities) || !interest.activities.length || interest.activities.some((activity) => typeof activity !== "string" || !activity.trim())))) errors.push(`${question.id}: interest cards require two speakers with non-empty activity lists`);
      if (question.template === "portraitSpeech" && (!Array.isArray(question.lines) || question.lines.length !== 1 || !question.lines[0]?.speaker || typeof question.lines[0]?.text !== "string")) errors.push(`${question.id}: portrait speech requires exactly one speaker and text`);
      if (question.template === "pieChart" && (!Array.isArray(question.chartData) || question.chartData.length < 2 || question.chartData.some((slice) => !slice.label || !Number.isFinite(slice.percentage) || slice.percentage <= 0 || !/^#[0-9a-f]{6}$/i.test(slice.color)) || Math.abs(question.chartData.reduce((sum, slice) => sum + slice.percentage, 0) - 100) > 0.001)) errors.push(`${question.id}: pie chart slices must be positive and total 100%`);
      if (question.optionPortraits !== undefined && (!Array.isArray(question.optionPortraits) || question.optionPortraits.length !== question.options.length)) errors.push(`${question.id}: 'optionPortraits' must match the options length`);
      if (question.pictureChoices !== undefined && (!Array.isArray(question.pictureChoices) || question.pictureChoices.length !== question.options.length || !question.options.every((label) => question.pictureChoices.some((choice) => choice.label === label && choice.image && choice.position)))) errors.push(`${question.id}: 'pictureChoices' must match the options`);
      return errors;
    });
  }

  Object.assign(TC, { QUESTION_TEMPLATE_INDEX: TEMPLATE_INDEX, attachPortrait, renderInlineFriendOptions, renderQuestionTemplate, renderTicketOptions, validateQuestionTemplates });
})();
