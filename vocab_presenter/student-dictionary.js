(() => {
  "use strict";

  const isStudentMode = new URLSearchParams(window.location.search).get("mode") === "student";
  if (!isStudentMode) return;

  const $ = (id) => document.getElementById(id);
  const overlay = $("studentGradeOverlay");
  const form = $("studentDictionaryForm");
  const input = $("studentDictionaryInput");
  const suggestions = $("studentDictionarySuggestions");
  const hint = $("studentDictionaryHint");
  const result = $("studentDictionaryResult");
  const image = $("studentDictionaryImage");
  const imageFallback = $("studentDictionaryImageFallback");
  const word = $("studentDictionaryWord");
  const grade = $("studentDictionaryGrade");
  const unit = $("studentDictionaryUnit");
  const definition = $("studentDictionaryDefinition");
  const meaning = $("studentDictionaryMeaning");
  const example = $("studentDictionaryExample");
  const translation = $("studentDictionaryTranslation");
  let selectedGrade = null;
  let visibleRecord = null;

  const normalize = (value) => String(value || "").trim().toLocaleUpperCase("en-US");
  const source = typeof QUESTIONS === "undefined" ? [] : QUESTIONS;
  const records = source
    .filter((record) => record?.[2] && record?.[3] >= 5 && record?.[3] <= 8)
    .map((record) => ({
      definition: record[0] || "Definition coming soon.",
      word: record[2],
      grade: record[3],
      unit: record[5],
      image: record[6],
      meaning: record[8] || record[1] || "Turkish meaning coming soon.",
      example: record[9] && record[9] !== "placeholder" ? record[9] : "Example sentence coming soon.",
      translation: record[10] && record[10] !== "placeholder" ? record[10] : "Example translation coming soon."
    }));

  function speak(text, repeat = 1) {
    if (!("speechSynthesis" in window) || !text) return;
    window.speechSynthesis.cancel();
    let remaining = repeat;
    const say = () => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      utterance.rate = 0.78;
      utterance.onend = () => {
        remaining -= 1;
        if (remaining > 0) say();
      };
      window.speechSynthesis.speak(utterance);
    };
    say();
  }

  function highlightExample(sentence, target) {
    example.replaceChildren();
    const pattern = new RegExp(`(${target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    let lastIndex = 0;
    for (const match of sentence.matchAll(pattern)) {
      example.append(document.createTextNode(sentence.slice(lastIndex, match.index)));
      const mark = document.createElement("mark");
      mark.className = "student-dictionary-highlight";
      mark.textContent = match[0];
      example.append(mark);
      lastIndex = match.index + match[0].length;
    }
    example.append(document.createTextNode(sentence.slice(lastIndex)));
  }

  function display(record) {
    visibleRecord = record;
    word.textContent = record.word;
    grade.textContent = `Grade ${record.grade}`;
    unit.textContent = `Unit ${record.unit}`;
    definition.textContent = record.definition;
    meaning.textContent = record.meaning;
    highlightExample(record.example, record.word);
    translation.textContent = record.translation;
    image.alt = record.word;
    imageFallback.hidden = true;
    image.hidden = !record.image;
    image.src = record.image || "";
    result.hidden = false;
    hint.textContent = selectedGrade === record.grade
      ? `Showing the Grade ${selectedGrade} version of this word.`
      : `This word belongs to Grade ${record.grade}.`;
  }

  function findRecord(query) {
    const key = normalize(query);
    if (!key) return null;
    const prioritized = [...records].sort((a, b) => Number(a.grade === selectedGrade) - Number(b.grade === selectedGrade));
    const unique = [...new Map(prioritized.map((record) => [normalize(record.word), record])).values()];
    return unique.find((record) => normalize(record.word) === key)
      || unique.find((record) => normalize(record.word).startsWith(key))
      || unique.find((record) => normalize(record.word).includes(key));
  }

  function search() {
    const found = findRecord(input.value);
    if (!found) {
      result.hidden = true;
      hint.textContent = input.value.trim() ? "We could not find that word. Try another English word." : "Type an English word to search.";
      return;
    }
    display(found);
  }

  function getSuggestions(query) {
    const key = normalize(query);
    if (!key) return [];
    const prioritized = [...records].sort((a, b) => Number(a.grade === selectedGrade) - Number(b.grade === selectedGrade));
    const unique = [...new Map(prioritized.map((record) => [normalize(record.word), record])).values()];
    return unique
      .filter((record) => normalize(record.word).startsWith(key) || normalize(record.word).includes(key))
      .slice(0, 6);
  }

  function renderSuggestions() {
    if (!input.value.trim()) {
      suggestions.hidden = true;
      suggestions.style.display = "none";
      return;
    }
    const matches = getSuggestions(input.value);
    suggestions.replaceChildren();
    matches.forEach((record) => {
      const button = document.createElement("button");
      const label = document.createElement("strong");
      const meta = document.createElement("span");
      button.type = "button";
      label.textContent = record.word;
      meta.textContent = `Grade ${record.grade} · Unit ${record.unit}`;
      button.append(label, meta);
      button.addEventListener("click", () => {
        input.value = record.word;
        suggestions.hidden = true;
        display(record);
      });
      suggestions.append(button);
    });
    if (matches.length) {
      suggestions.hidden = false;
      suggestions.style.display = "grid";
    } else {
      suggestions.hidden = true;
      suggestions.style.display = "none";
    }
  }

  function chooseGrade(value) {
    const gradeButton = [...document.querySelectorAll("#gradeOptions .grade-visual-button")]
      .find((button) => button.textContent.trim() === String(value));
    if (!gradeButton) return;
    selectedGrade = Number(value);
    gradeButton.click();
    overlay.hidden = true;
    hint.textContent = `Grade ${selectedGrade} selected. Search any English word.`;
    input.focus();
  }

  document.body.classList.add("student-vocab-mode");
  overlay.hidden = false;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    suggestions.hidden = true;
    search();
  });
  input.addEventListener("input", renderSuggestions);
  input.addEventListener("keyup", renderSuggestions);
  input.addEventListener("search", renderSuggestions);
  input.addEventListener("focus", renderSuggestions);
  input.oninput = renderSuggestions;
  $("studentDictionaryOpenPage").addEventListener("click", () => {
    if (selectedGrade) sessionStorage.setItem("dictionaryGrade", selectedGrade);
  });
  $("studentDictionaryWordSpeak").addEventListener("click", () => speak(visibleRecord?.word, 2));
  $("studentDictionaryExampleSpeak").addEventListener("click", () => speak(visibleRecord?.example, 1));
  image.addEventListener("error", () => {
    image.hidden = true;
    imageFallback.hidden = false;
  });
  document.querySelectorAll("[data-student-grade]").forEach((button) => {
    button.addEventListener("click", () => chooseGrade(button.dataset.studentGrade));
  });
})();
