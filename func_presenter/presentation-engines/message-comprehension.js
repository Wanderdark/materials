function clearMessageComprehension() {
  document.getElementById("messageComprehension")?.remove();
  els.exampleCard?.classList.remove("message-comprehension-shake");
}

function shuffleMessageComprehensionChoices(choices) {
  const shuffled = [...choices];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled;
}

function playMessageComprehensionSound(isCorrect) {
  new Audio(`sounds/${isCorrect ? "correct" : "wrong"}.mp3`).play().catch(() => {});
}

function getMessageComprehensionPortrait(speaker) {
  const name = String(speaker || "").trim().toLowerCase();
  const names = new Set([
    "ava", "benjamin", "chloe", "daniel", "david", "ella", "emma", "ethan",
    "hannah", "jack", "lucas", "mia", "noah", "olivia", "victoria", "zoe"
  ]);
  return names.has(name) ? `images/dialogue/${name}_front.webp` : "";
}

function renderMessageComprehension(example) {
  const data = example.messageComprehension;
  if (!data) return;

  const root = document.createElement("section");
  root.id = "messageComprehension";
  root.className = "message-comprehension";

  const messages = document.createElement("div");
  messages.className = "message-comprehension-messages";
  messages.style.setProperty("--message-count", data.messages.length);

  data.messages.forEach((message) => {
    const card = document.createElement("article");
    card.className = "message-comprehension-card";

    const portrait = getMessageComprehensionPortrait(message.speaker);
    if (portrait) {
      const image = document.createElement("img");
      image.className = "message-comprehension-portrait";
      image.src = portrait;
      image.alt = message.speaker;
      card.appendChild(image);
    }

    const speaker = document.createElement("h3");
    speaker.textContent = message.speaker;
    card.appendChild(speaker);

    const text = document.createElement("p");
    text.textContent = message.text;
    card.appendChild(text);
    messages.appendChild(card);
  });

  const answerPanel = document.createElement("section");
  answerPanel.className = "message-comprehension-answer";

  const label = document.createElement("p");
  label.className = "message-comprehension-label";
  label.textContent = data.promptLabel || "CHOOSE THE BEST ANSWER";
  answerPanel.appendChild(label);

  const question = document.createElement("h2");
  question.className = "message-comprehension-question";
  question.textContent = data.question;
  answerPanel.appendChild(question);

  const choices = document.createElement("div");
  choices.className = "message-comprehension-choices";
  const colors = ["navy", "yellow", "red", "orange"];
  let firstAttempt = true;

  shuffleMessageComprehensionChoices(data.choices).forEach((choice, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = `message-comprehension-choice ${colors[index % colors.length]}`;
    option.textContent = choice;

    option.addEventListener("click", () => {
      if (option.disabled) return;
      const isCorrect = choice === data.answer;

      if (!isCorrect) {
        firstAttempt = false;
        option.disabled = true;
        option.classList.add("removed");
        playMessageComprehensionSound(false);
        els.exampleCard.classList.remove("message-comprehension-shake");
        void els.exampleCard.offsetWidth;
        els.exampleCard.classList.add("message-comprehension-shake");
        return;
      }

      choices.querySelectorAll("button").forEach((button) => {
        button.disabled = true;
        button.classList.toggle("removed", button !== option);
      });
      option.classList.add("correct");
      playMessageComprehensionSound(true);
      if (firstAttempt) StudentGame?.onCorrect?.();
      TeacherControl?.onCorrect?.();
    });
    choices.appendChild(option);
  });

  answerPanel.appendChild(choices);
  root.append(messages, answerPanel);
  els.presenceView.replaceChildren(root);
}
