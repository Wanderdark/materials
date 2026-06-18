(function () {
  const Adapter = window.WordCrushAdapter;
  let selectedGrades = new Set();
  let selectedUnits = new Set();
  let selectedCategories = new Set();

  function initDefaults() {
    const grades = Adapter.getGrades();
    const profile = window.WordCrushProfile?.getProfile?.();
    const profileGrade = profile ? Number(profile.grade) : null;
    const defaultGrades = profileGrade && grades.includes(profileGrade) ? [profileGrade] : grades;
    selectedGrades = new Set(defaultGrades);
    selectedUnits = new Set(Adapter.getUnits(defaultGrades));
    selectedCategories = new Set();
  }

  function show() {
    if (!selectedGrades.size) {
      initDefaults();
    }

    buildSettingsUI();
    window.WordCrushScreens.showScreen("setup-screen");
  }

  function buildSettingsUI() {
    buildClassButtons();
    buildUnitButtons();
    buildCategoryButtons();
    updateWordCount();
  }

  function buildClassButtons() {
    const grid = document.getElementById("sc-class-grid");
    if (!grid) return;

    const grades = Adapter.getGrades();
    grid.innerHTML = "";
    grades.forEach((grade) => {
      const button = document.createElement("button");
      button.className = `sc-class-btn${selectedGrades.has(grade) ? " active" : ""}`;
      button.textContent = String(grade);
      button.addEventListener("click", () => {
        if (selectedGrades.has(grade) && selectedGrades.size === 1 && selectedCategories.size === 0) {
          warn("sc-class-warn", "En az bir sinif secili olmali!");
          return;
        }

        selectedGrades.has(grade) ? selectedGrades.delete(grade) : selectedGrades.add(grade);
        selectedUnits = new Set([...selectedUnits].filter((unit) => Adapter.getUnits([...selectedGrades]).includes(unit)));
        if (!selectedUnits.size && !selectedCategories.size) {
          selectedUnits = new Set(Adapter.getUnits([...selectedGrades]));
        }
        buildSettingsUI();
      });
      grid.appendChild(button);
    });
  }

  function buildUnitButtons() {
    const grid = document.getElementById("sc-unit-grid");
    if (!grid) return;

    const units = Adapter.getUnits([...selectedGrades]);
    grid.innerHTML = "";
    units.forEach((unit) => {
      const count = Adapter.countUnitWords(unit, [...selectedGrades]);
      const button = document.createElement("button");
      button.className = `sc-unit-btn${selectedUnits.has(unit) ? " active" : ""}`;
      button.innerHTML = `Unite ${unit}<small>${count}</small>`;
      button.addEventListener("click", () => {
        if (selectedUnits.has(unit) && selectedUnits.size === 1 && selectedCategories.size === 0) {
          warn("sc-unit-warn", "En az bir unite veya kategori secili olmali!");
          return;
        }

        selectedUnits.has(unit) ? selectedUnits.delete(unit) : selectedUnits.add(unit);
        button.classList.toggle("active");
        updateWordCount();
      });
      grid.appendChild(button);
    });
  }

  function buildCategoryButtons() {
    const section = document.getElementById("sc-cat-section");
    const grid = document.getElementById("sc-cat-grid");
    if (!section || !grid) return;

    const categories = Adapter.getCategories();
    section.style.display = categories.length ? "" : "none";
    grid.innerHTML = "";
    categories.forEach((category) => {
      const count = Adapter.countCategoryWords(category.unit, [...selectedGrades]);
      const button = document.createElement("button");
      button.className = `sc-unit-btn${selectedCategories.has(category.unit) ? " active" : ""}`;
      button.innerHTML = `${category.icon ? `${category.icon} ` : ""}${category.label}<small>${count}</small>`;
      button.addEventListener("click", () => {
        selectedCategories.has(category.unit)
          ? selectedCategories.delete(category.unit)
          : selectedCategories.add(category.unit);
        button.classList.toggle("active");
        updateWordCount();
      });
      button.addEventListener("dblclick", (event) => {
        event.stopPropagation();
        showCategoryPreview(category.unit, category.label);
      });
      grid.appendChild(button);
    });
  }

  function updateWordCount() {
    const count = Adapter.countPool(currentFilters());
    const element = document.getElementById("sc-word-count");
    if (!element) return;
    element.textContent = `${count} kelime mevcut`;
    element.className = `sc-word-count${count < Adapter.BOARD_WORD_COUNT ? " sc-warn-low" : ""}`;
  }

  function clearAll() {
    selectedUnits.clear();
    selectedCategories.clear();
    buildSettingsUI();
  }

  function startSelectedGame() {
    const words = Adapter.buildWordPool(currentFilters());
    if (words.length < Adapter.BOARD_WORD_COUNT) {
      warn("sc-unit-warn", `Bu secim icin en az ${Adapter.BOARD_WORD_COUNT} kelime gerekli.`);
      return;
    }

    window.WordCrushGame.startGame({
      words,
      profile: window.WordCrushProfile.getProfile(),
      filters: currentFilters()
    });
  }

  function currentFilters() {
    return {
      grades: [...selectedGrades],
      units: [...selectedUnits],
      categories: [...selectedCategories]
    };
  }

  function showCategoryPreview(unit, label) {
    const title = document.getElementById("cp-title");
    const grid = document.getElementById("cp-grid");
    if (!title || !grid) return;

    const words = Adapter.getCategoryPreview(unit, [...selectedGrades]);
    title.textContent = `${label} - ${words.length} kelime`;
    grid.innerHTML = "";
    words.forEach((word) => {
      const card = document.createElement("div");
      card.className = "cp-card";
      const image = document.createElement("img");
      image.src = word.img || "assets/gems/gem-purple.png";
      image.alt = word.en;
      image.loading = "lazy";
      const en = document.createElement("div");
      en.className = "cp-card-word";
      en.textContent = word.en;
      const tr = document.createElement("div");
      tr.className = "cp-card-grade";
      tr.textContent = word.tr;
      card.append(image, en, tr);
      grid.appendChild(card);
    });

    document.getElementById("cat-preview-overlay")?.classList.add("open");
  }

  function closeCategoryPreview() {
    document.getElementById("cat-preview-overlay")?.classList.remove("open");
  }

  function warn(id, text) {
    const element = document.getElementById(id);
    if (!element) return;
    element.textContent = text;
    window.setTimeout(() => {
      element.textContent = "";
    }, 2200);
  }

  window.WordCrushSetup = {
    show,
    buildSettingsUI,
    clearAll,
    startSelectedGame,
    closeCategoryPreview
  };

  window._scClearAll = clearAll;
  window._closeCatPreview = closeCategoryPreview;
})();
