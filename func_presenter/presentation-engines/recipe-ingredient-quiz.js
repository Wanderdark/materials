function clearRecipeIngredientQuiz() {
  document.getElementById("recipeIngredientCard")?.remove();
  document.getElementById("recipeIngredientQuiz")?.remove();
  els.exampleCard?.classList.remove("recipe-ingredient-quiz-slide");
}

function renderRecipeIngredientQuiz(example) {
  const data = example.recipeIngredientQuiz;
  if (!data) return;
  els.image.classList.add("hidden");
  els.fallback.classList.add("hidden");
  els.presenceView.replaceChildren();
  els.exampleCard.classList.add("recipe-ingredient-quiz-slide");

  const card = document.createElement("section");
  card.id = "recipeIngredientCard";
  card.className = "recipe-ingredient-card";
  const recipeName = document.createElement("h2");
  recipeName.textContent = data.recipeName;
  const ingredientsLabel = document.createElement("p");
  ingredientsLabel.textContent = "INGREDIENTS";
  const ingredients = document.createElement("ul");
  data.ingredients.forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    ingredients.append(item);
  });
  card.append(recipeName, ingredientsLabel, ingredients);
  els.exampleVisualPanel.append(card);

  const quiz = document.createElement("section");
  quiz.id = "recipeIngredientQuiz";
  quiz.className = "recipe-ingredient-quiz";
  const prompt = document.createElement("h2");
  prompt.textContent = data.question;
  const options = document.createElement("div");
  options.className = "recipe-ingredient-options";
  let firstAttempt = true;

  shuffle(data.choices).forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `recipe-ingredient-choice choice-${index + 1}`;
    button.dataset.choiceId = choice.id;
    const visual = document.createElement("span");
    visual.className = "recipe-ingredient-choice-visual";
    const images = choice.images || [{ imagePath: choice.imagePath, label: choice.label }];
    images.forEach((imageData) => {
      const image = document.createElement("img");
      image.src = imageData.imagePath;
      image.alt = imageData.label || choice.label;
      visual.append(image);
    });
    const label = document.createElement("span");
    label.className = "recipe-ingredient-choice-label";
    label.textContent = `${String.fromCharCode(65 + index)})`;
    button.append(visual, label);
    button.addEventListener("click", () => {
      if (button.disabled) return;
      const isCorrect = choice.id === data.answerId;
      playFeedbackSound(isCorrect);
      if (!isCorrect) {
        firstAttempt = false;
        button.disabled = true;
        button.classList.add("removed");
        return;
      }
      options.querySelectorAll("button").forEach((option) => {
        option.disabled = true;
        if (option !== button) option.classList.add("removed");
      });
      button.classList.add("correct");
      if (firstAttempt) window.StudentGame?.onCorrect();
      window.TeacherControl?.onCorrect();
    });
    options.append(button);
  });
  quiz.append(prompt, options);
  els.presenceView.append(quiz);
}
