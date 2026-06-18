(function () {
  const BOARD_WORD_COUNT = 15;
  let translationLookupCache = null;
  let conflictMapCache = null;

  function getWordBank() {
    try {
      if (typeof WORD_BANK !== "undefined" && Array.isArray(WORD_BANK)) {
        return WORD_BANK;
      }
    } catch (error) {}

    return Array.isArray(window.WORD_BANK) ? window.WORD_BANK : [];
  }

  function getQuestions() {
    try {
      if (typeof QUESTIONS !== "undefined" && Array.isArray(QUESTIONS)) {
        return QUESTIONS;
      }
    } catch (error) {}

    return Array.isArray(window.QUESTIONS) ? window.QUESTIONS : [];
  }

  function getCategoryMeta() {
    try {
      if (typeof WC_CATEGORY_META !== "undefined" && WC_CATEGORY_META) {
        return WC_CATEGORY_META;
      }
    } catch (error) {}

    try {
      if (typeof CATEGORIES !== "undefined" && CATEGORIES) {
        return Object.fromEntries(
          Object.entries(CATEGORIES).map(([unit, label]) => [unit, { label, icon: "" }])
        );
      }
    } catch (error) {}

    return window.WC_CATEGORY_META || window.CATEGORIES || {};
  }

  function getGrades() {
    return unique(
      getWordBank()
        .filter((word) => Number(word.grade) > 0)
        .map((word) => Number(word.grade))
    ).sort((a, b) => a - b);
  }

  function getUnits(grades) {
    const selected = new Set(grades.map(Number));
    return unique(
      getWordBank()
        .filter((word) => Number(word.grade) > 0 && selected.has(Number(word.grade)))
        .map((word) => Number(word.unit))
    ).sort((a, b) => a - b);
  }

  function getCategories() {
    const meta = getCategoryMeta();
    const wordsByUnit = new Map();

    getWordBank()
      .filter((word) => Number(word.grade) === 0)
      .forEach((word) => {
        const unit = Number(word.unit);
        wordsByUnit.set(unit, (wordsByUnit.get(unit) || 0) + 1);
      });

    getQuestions()
      .filter((question) => Number(question[3]) === 0 && Number(question[5]) > 0)
      .forEach((question) => {
        const unit = Number(question[5]);
        wordsByUnit.set(unit, Math.max(wordsByUnit.get(unit) || 0, 1));
      });

    return unique([...Object.keys(meta).map(Number), ...wordsByUnit.keys()])
      .filter((unit) => Number.isFinite(unit))
      .sort((a, b) => a - b)
      .map((unit) => {
        const entry = meta[unit] || meta[String(unit)] || {};
        const label = typeof entry === "string" ? entry : entry.label;
        const icon = typeof entry === "string" ? "" : entry.icon || "";
        return {
          unit,
          label: label || `CATEGORY ${unit}`,
          icon,
          count: countCategoryWords(unit, getGrades())
        };
      });
  }

  function buildWordPool(filters = {}) {
    const grades = new Set((filters.grades || getGrades()).map(Number));
    const units = new Set((filters.units || getUnits([...grades])).map(Number));
    const categories = new Set((filters.categories || []).map(Number));
    const minGrade = grades.size ? Math.min(...grades) : 99;
    const rows = [];

    getWordBank().forEach((word, index) => {
      const grade = Number(word.grade);
      const unit = Number(word.unit);
      const isNormal = grade > 0 && grades.has(grade) && units.has(unit);
      const isCategory = grade === 0 && categories.has(unit) && categoryAllowedForGrade(word, minGrade);

      if (isNormal || isCategory) {
        rows.push(normalizeBankWord(word, index));
      }
    });

    getQuestions().forEach((question, index) => {
      const grade = Number(question[3]);
      const unit = Number(question[5]);
      if (grade === 0 && categories.has(unit) && questionAllowedForGrade(question, minGrade)) {
        rows.push(normalizeQuestionWord(question, index));
      }
    });

    return dedupeWords(rows);
  }

  function getSynonymPairs() {
    try {
      if (typeof SYNONYM_PAIRS !== "undefined" && Array.isArray(SYNONYM_PAIRS)) {
        return SYNONYM_PAIRS;
      }
    } catch (error) {}

    return Array.isArray(window.SYNONYM_PAIRS) ? window.SYNONYM_PAIRS : [];
  }

  function getOppositePairs() {
    try {
      if (typeof OPPOSITE_PAIRS !== "undefined" && Array.isArray(OPPOSITE_PAIRS)) {
        return OPPOSITE_PAIRS;
      }
    } catch (error) {}

    return Array.isArray(window.OPPOSITE_PAIRS) ? window.OPPOSITE_PAIRS : [];
  }

  function getTranslationLookup() {
    if (translationLookupCache) {
      return translationLookupCache;
    }

    const map = new Map();
    getWordBank().forEach((word) => {
      const key = normalizeTerm(word.en);
      if (key && word.tr && !map.has(key)) {
        map.set(key, displayText(word.tr));
      }
    });
    translationLookupCache = map;
    return translationLookupCache;
  }

  function getConflictMap() {
    if (conflictMapCache) {
      return conflictMapCache;
    }

    const map = new Map();

    [...getSynonymPairs(), ...getOppositePairs()].filter(Array.isArray).forEach((group) => {
      const terms = group.slice(2).map(normalizeTerm).filter(Boolean);
      terms.forEach((term) => addConflictGroup(map, term, terms));
    });

    getQuestions().forEach((question) => {
      const terms = [question[2], ...(Array.isArray(question[7]) ? question[7] : [])]
        .map(normalizeTerm)
        .filter(Boolean);
      terms.forEach((term) => addConflictGroup(map, term, terms));
    });

    conflictMapCache = map;
    return conflictMapCache;
  }

  function countPool(filters = {}) {
    return buildWordPool(filters).length;
  }

  function countUnitWords(unit, grades) {
    const selected = new Set(grades.map(Number));
    return getWordBank().filter((word) => {
      return Number(word.grade) > 0 && selected.has(Number(word.grade)) && Number(word.unit) === Number(unit);
    }).length;
  }

  function countCategoryWords(unit, grades) {
    return buildWordPool({
      grades: grades && grades.length ? grades : getGrades(),
      units: [],
      categories: [unit]
    }).length;
  }

  function getCategoryPreview(unit, grades) {
    const minGrade = grades && grades.length ? Math.min(...grades.map(Number)) : 99;
    const bankWords = getWordBank()
      .filter((word) => Number(word.grade) === 0 && Number(word.unit) === Number(unit) && categoryAllowedForGrade(word, minGrade))
      .map((word, index) => normalizeBankWord(word, index));
    const questionWords = getQuestions()
      .filter((question) => Number(question[3]) === 0 && Number(question[5]) === Number(unit) && questionAllowedForGrade(question, minGrade))
      .map((question, index) => normalizeQuestionWord(question, index));

    return dedupeWords([...bankWords, ...questionWords]);
  }

  function normalizeBankWord(word, index) {
    const en = displayText(word.en);
    const conflictTerms = conflictTermsFor(en);
    return {
      id: slug(`${word.grade}-${word.unit}-${word.en}-${index}`),
      en,
      tr: displayText(word.tr),
      grade: Number(word.grade),
      unit: Number(word.unit),
      diff: Number(word.diff) || 1,
      img: word.img || "",
      conflictTerms
    };
  }

  function normalizeQuestionWord(question, index) {
    const en = displayText(question[2]);
    const translations = getTranslationLookup();
    const aliases = Array.isArray(question[7]) ? question[7] : [];
    const conflictTerms = conflictTermsFor(en, aliases);
    return {
      id: slug(`q-${question[3]}-${question[5]}-${question[2]}-${index}`),
      en,
      tr: translations.get(normalizeTerm(en)) || en,
      grade: Number(question[3]),
      unit: Number(question[5]),
      diff: Number(question[4]) || 1,
      img: question[6] || "",
      conflictTerms
    };
  }

  function categoryAllowedForGrade(word, minGrade) {
    const diff = Number(word.diff) || 1;
    return diff <= minGrade;
  }

  function questionAllowedForGrade(question, minGrade) {
    const diff = Number(question[4]) || 1;
    return diff <= minGrade;
  }

  function dedupeWords(words) {
    const seen = new Set();
    return words.filter((word) => {
      const key = `${word.en.toUpperCase()}::${word.tr.toUpperCase()}`;
      if (!word.en || !word.tr || seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  function conflictTermsFor(word, aliases = []) {
    const conflictMap = getConflictMap();
    const direct = [word, ...aliases].map(normalizeTerm).filter(Boolean);
    const terms = new Set(direct);

    direct.forEach((term) => {
      (conflictMap.get(term) || []).forEach((item) => terms.add(item));
    });

    return [...terms];
  }

  function addConflictGroup(map, term, terms) {
    if (!map.has(term)) {
      map.set(term, new Set());
    }

    terms.forEach((item) => map.get(term).add(item));
  }

  function displayText(value) {
    return String(value || "").trim();
  }

  function normalizeTerm(value) {
    return String(value || "")
      .trim()
      .toLocaleUpperCase("en-US")
      .replace(/\s+/g, " ");
  }

  function slug(value) {
    return String(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function unique(items) {
    return [...new Set(items)];
  }

  window.WordCrushAdapter = {
    BOARD_WORD_COUNT,
    getGrades,
    getUnits,
    getCategories,
    buildWordPool,
    getConflictMap,
    countPool,
    countUnitWords,
    countCategoryWords,
    getCategoryPreview
  };
})();
