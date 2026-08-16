const physicalAppearanceVideoCharacters = [
  { name: "AVA", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_ava.mp4", lines: [{ speaker: "AVA", parts: [{ text: "Hi, I'm Ava, I have shoulder-length " }, { answer: "curly", choices: ["curly", "straight"] }, { text: " black hair and " }, { answer: "green", choices: ["blue", "green"] }, { text: " eyes." }] }] },
  { name: "BENJAMIN", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_benjamin.mp4", lines: [{ speaker: "BENJAMIN", parts: [{ text: "Hi, I'm Benjamin, I have short straight " }, { answer: "blonde", choices: ["brown", "blonde"] }, { text: " hair and " }, { answer: "blue", choices: ["black", "blue"] }, { text: " eyes." }] }] },
  { name: "CHLOE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_chloe.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "Hi, I'm Chloe, I have " }, { answer: "long", choices: ["long", "short"] }, { text: " curly blonde hair and " }, { answer: "blue", choices: ["blue", "brown"] }, { text: " eyes." }] }] },
  { name: "DANIEL", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_daniel.mp4", lines: [{ speaker: "DANIEL", parts: [{ text: "Hi, I'm Daniel, I have " }, { answer: "shoulder-length", choices: ["shoulder-length", "long"] }, { text: " straight " }, { answer: "black", choices: ["blonde", "black"] }, { text: " hair and thick eyebrows." }] }] },
  { name: "DAVID", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_david.mp4", lines: [{ speaker: "DAVID", parts: [{ text: "Hi, I'm David, I have " }, { answer: "very short", choices: ["very short", "long"] }, { text: " black hair and " }, { answer: "brown", choices: ["brown", "blue"] }, { text: " eyes." }] }] },
  { name: "ELLA", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_ella.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "Hi, I'm Ella, I have shoulder-length " }, { answer: "wavy", choices: ["wavy", "straight"] }, { text: " blonde hair and " }, { answer: "green", choices: ["green", "brown"] }, { text: " eyes." }] }] },
  { name: "EMMA", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_emma.mp4", lines: [{ speaker: "EMMA", parts: [{ text: "Hi, I'm Emma, I have long " }, { answer: "straight", choices: ["straight", "wavy"] }, { text: " black hair and " }, { answer: "brown", choices: ["blue", "brown"] }, { text: " eyes." }] }] },
  { name: "ETHAN", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_ethan.mp4", lines: [{ speaker: "ETHAN", parts: [{ text: "Hi, I'm Ethan, I have " }, { answer: "short curly", choices: ["short curly", "long wavy"] }, { text: " blonde hair and " }, { answer: "blue", choices: ["blue", "green"] }, { text: " eyes." }] }] },
  { name: "HANNAH", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_hannah.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "Hi, I'm Hannah, I have " }, { answer: "long", choices: ["short", "long"] }, { text: " straight " }, { answer: "blonde", choices: ["blonde", "brown"] }, { text: " hair and blue eyes." }] }] },
  { name: "JACK", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_jack.mp4", lines: [{ speaker: "JACK", parts: [{ text: "Hi, I'm Jack, I have short straight black " }, { answer: "hair", choices: ["hair", "eyes"] }, { text: " and brown " }, { answer: "eyes", choices: ["hair", "eyes"] }, { text: "." }] }] },
  { name: "LUCAS", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_lucas.mp4", lines: [{ speaker: "LUCAS", parts: [{ text: "Hi, I'm Lucas, I have short " }, { answer: "curly", choices: ["curly", "straight"] }, { text: " black hair and " }, { answer: "brown", choices: ["green", "brown"] }, { text: " eyes." }] }] },
  { name: "MIA", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_mia.mp4", lines: [{ speaker: "MIA", parts: [{ text: "Hi, I'm Mia, I have long " }, { answer: "wavy", choices: ["straight", "wavy"] }, { text: " brown hair and " }, { answer: "blue", choices: ["brown", "blue"] }, { text: " eyes." }] }] },
  { name: "NOAH", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_noah.mp4", lines: [{ speaker: "NOAH", parts: [{ text: "Hi, I'm Noah, I have " }, { answer: "short", choices: ["long", "short"] }, { text: " straight brown hair, green eyes, and rectangular " }, { answer: "glasses", choices: ["eyes", "glasses"] }] }] },
  { name: "OLIVIA", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_olivia.mp4", lines: [{ speaker: "OLIVIA", parts: [{ text: "Hi, I'm Olivia, I have a chin-length brown " }, { answer: "bob", choices: ["eyes", "bob"] }, { text: " and green " }, { answer: "eyes", choices: ["hair", "eyes"] }] }] },
  { name: "VICTORIA", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_victoria.mp4", lines: [{ speaker: "VICTORIA", parts: [{ text: "Hi, I'm Victoria, I have long wavy " }, { answer: "black", choices: ["black", "blonde"] }, { text: " hair, blue eyes, and " }, { answer: "round", choices: ["round", "rectangular"] }, { text: " glasses." }] }] },
  { name: "ZOE", videoUrl: "https://media.adilhoca.com/video/5_personal_life_appearance_zoe.mp4", lines: [{ speaker: "ZOE", parts: [{ text: "Hi, I'm Zoe, I have long " }, { answer: "curly", choices: ["straight", "curly"] }, { text: " black hair and " }, { answer: "brown", choices: ["blue", "brown"] }, { text: " eyes." }] }] }
];

function buildAppearanceVideoHubItems(characters) {
  const withCenter = [...characters.slice(0, 4), { name: "CHOOSE\nONE", passive: true }, ...characters.slice(4)];
  return withCenter.map((character) => ({
    kind: "category-list",
    parts: [{ text: character.name }],
    ...(character.passive ? {} : { appearanceVideoCharacter: character })
  }));
}

const physicalAppearanceFunction = {
  id: "physical-appearance",
  grade: 5,
  unit: 3,
  title: "Describing Physical Appearance",
  description: "Describing height, weight, hair, eyes, accessories, and clothing.",
  returnToSetupOnComplete: true,
  exercises: ["physical-appearance-paragraph-combined", "physical-appearance-true-false-combined", "physical-appearance-student-match"],
  sentences: [
    {
      id: "physical-appearance-categories",
      presenceSlide: true,
      noVisual: true,
      kicker: "CATEGORIES",
      title: "Physical Appearance",
      note: "We will describe people step by step.",
      listClass: "category-grid-list",
      showAllItems: true,
      items: [
        { kind: "category-list", targetId: "height-alex-linda", parts: [{ text: "HEIGHT" }] },
        { kind: "category-list", targetId: "weight-alex-linda", parts: [{ text: "WEIGHT" }] },
        { kind: "category-list", targetId: "hair-alex", parts: [{ text: "HAIR" }] },
        { kind: "category-list", targetId: "eye-color-alex", parts: [{ text: "EYES" }] },
        { kind: "category-list", targetId: "clothing-example", parts: [{ text: "ACCESSORIES" }] },
        { kind: "category-list", targetId: "clothing-example", parts: [{ text: "CLOTHING" }] }
      ]
    },
    {
      id: "height-alex-linda",
      presenceSlide: true,
      kicker: "HEIGHT",
      title: "HEIGHT",
      imagePath: "images/physical-appearance/alexandlinda.webp",
      visualBrief: "Alex and Linda standing together.",
      showAllItems: true,
      items: [
        {
          kind: "keyword-row",
          parts: [
            { text: "TALL" },
            { text: "MEDIUM HEIGHT" },
            { text: "SHORT" }
          ]
        },
        {
          parts: [
            { text: "Alex is " },
            { text: "tall", className: "presence-height-tall" },
            { text: " and Linda is " },
            { text: "medium height", className: "presence-height-medium" },
            { text: "." }
          ]
        },
        {
          parts: [
            { text: "They are not " },
            { text: "short", className: "presence-height-short" },
            { text: "." }
          ]
        }
      ]
    },
    {
      id: "weight-alex-linda",
      presenceSlide: true,
      kicker: "WEIGHT",
      title: "WEIGHT",
      imagePath: "images/physical-appearance/alexandlinda.webp",
      visualBrief: "Alex and Linda standing together.",
      showAllItems: true,
      items: [
        {
          kind: "keyword-row",
          parts: [
            { text: "WELL BUILT" },
            { text: "OVERWEIGHT" },
            { text: "FAT" },
            { text: "MEDIUM-WEIGHT" },
            { text: "SLIM (THIN)" }
          ]
        },
        {
          parts: [
            { text: "Alex is " },
            { text: "medium weight", className: "presence-weight-medium" },
            { text: " and Linda is " },
            { text: "slim", className: "presence-weight-slim" },
            { text: "." }
          ]
        }
      ]
    },
    {
      id: "hair-alex",
      presenceSlide: true,
      compactTitle: true,
      kicker: "HAIR STYLE / COLOR",
      title: "HAIR STYLE / COLOR",
      imagePath: "images/physical-appearance/alex.webp",
      visualBrief: "A close-up portrait of Alex.",
      showAllItems: true,
      items: [
        {
          kind: "keyword-row",
          parts: [
            { text: "STRAIGHT" },
            { text: "WAVY" },
            { text: "CURLY" },
            { text: "BALD" },
            { text: "SHORT" },
            { text: "LONG" }
          ]
        },
        {
          parts: [
            { text: "Alex " },
            { text: "has got", className: "presence-have-got" },
            { text: " " },
            { text: "short", className: "presence-hair-length" },
            { text: " " },
            { text: "curly", className: "presence-hair-style" },
            { text: " " },
            { text: "blonde", className: "presence-hair-color" },
            { text: " hair." }
          ]
        }
      ]
    },
    {
      id: "hair-linda",
      presenceSlide: true,
      compactTitle: true,
      kicker: "HAIR STYLE / COLOR",
      title: "HAIR STYLE / COLOR",
      imagePath: "images/physical-appearance/linda.webp",
      visualBrief: "A close-up portrait of Linda.",
      showAllItems: true,
      items: [
        {
          kind: "keyword-row",
          parts: [
            { text: "STRAIGHT" },
            { text: "WAVY" },
            { text: "CURLY" },
            { text: "BALD" },
            { text: "SHORT" },
            { text: "LONG" }
          ]
        },
        {
          parts: [
            { text: "Linda " },
            { text: "has got", className: "presence-have-got" },
            { text: " " },
            { text: "long", className: "presence-hair-length" },
            { text: " " },
            { text: "straight", className: "presence-hair-style" },
            { text: " " },
            { text: "dark", className: "presence-hair-color" },
            { text: " hair." }
          ]
        }
      ]
    },
    {
      id: "hair-style-match",
      presenceSlide: true,
      noVisual: true,
      compactTitle: true,
      kicker: "HAIR STYLE / COLOR",
      title: "Match the Hair Styles",
      showAllItems: true,
      items: [
        {
          kind: "style-match",
          imagePath: "images/physical-appearance/alexstyles.webp",
          visualBrief: "Four hair style examples for Alex.",
          slots: [
            { answer: "CURLY" },
            { answer: "STRAIGHT" },
            { answer: "WAVY" },
            { answer: "BALD" }
          ],
          words: ["BALD", "WAVY", "STRAIGHT", "CURLY"]
        }
      ]
    },
    {
      id: "hair-style-match-linda",
      presenceSlide: true,
      noVisual: true,
      compactTitle: true,
      kicker: "HAIR STYLE / COLOR",
      title: "Match Linda's Hair Styles",
      showAllItems: true,
      items: [
        {
          kind: "style-match",
          imagePath: "images/physical-appearance/lindastyles.webp",
          visualBrief: "Three hair style examples for Linda.",
          slots: [
            { answer: "STRAIGHT" },
            { answer: "CURLY" },
            { answer: "WAVY" }
          ],
          words: ["WAVY", "STRAIGHT", "CURLY"]
        }
      ]
    },
    {
      id: "hair-color-alex",
      presenceSlide: true,
      compactTitle: true,
      kicker: "HAIR COLORS",
      title: "HAIR COLORS",
      imagePath: "images/physical-appearance/alex.webp",
      visualBrief: "A close-up portrait of Alex.",
      showAllItems: true,
      items: [
        {
          kind: "keyword-row",
          parts: [
            { text: "BLACK" },
            { text: "BROWN" },
            { text: "BLONDE (FAIR)" },
            { text: "RED" }
          ]
        },
        {
          parts: [
            { text: "Alex " },
            { text: "has got", className: "presence-have-got" },
            { text: " " },
            { text: "short", className: "presence-hair-length" },
            { text: " " },
            { text: "blonde", className: "presence-hair-color" },
            { text: " " },
            { text: "curly", className: "presence-hair-style" },
            { text: " hair." }
          ]
        }
      ]
    },
    {
      id: "hair-color-match-alex",
      presenceSlide: true,
      noVisual: true,
      compactTitle: true,
      kicker: "HAIR COLORS",
      title: "Match Alex's Hair Colors",
      showAllItems: true,
      items: [
        {
          kind: "style-match",
          imagePath: "images/physical-appearance/alexcolors.webp",
          visualBrief: "Four hair color examples for Alex.",
          slots: [
            { answer: "BLACK" },
            { answer: "BROWN" },
            { answer: "BLONDE" },
            { answer: "RED" }
          ],
          words: ["RED", "BLONDE", "BLACK", "BROWN"]
        }
      ]
    },
    {
      id: "hair-color-linda",
      presenceSlide: true,
      compactTitle: true,
      kicker: "HAIR COLORS",
      title: "HAIR COLORS",
      imagePath: "images/physical-appearance/linda.webp",
      visualBrief: "A close-up portrait of Linda.",
      showAllItems: true,
      items: [
        {
          kind: "keyword-row",
          parts: [
            { text: "BLACK" },
            { text: "BROWN" },
            { text: "BLONDE (FAIR)" },
            { text: "RED" }
          ]
        },
        {
          parts: [
            { text: "Linda " },
            { text: "has got", className: "presence-have-got" },
            { text: " " },
            { text: "long", className: "presence-hair-length" },
            { text: " " },
            { text: "straight", className: "presence-hair-style" },
            { text: " " },
            { text: "blonde", className: "presence-hair-color" },
            { text: " hair." }
          ]
        }
      ]
    },
    {
      id: "hair-color-match-linda",
      presenceSlide: true,
      noVisual: true,
      compactTitle: true,
      kicker: "HAIR COLORS",
      title: "Match Linda's Hair Colors",
      showAllItems: true,
      items: [
        {
          kind: "style-match",
          imagePath: "images/physical-appearance/lindacolors.webp",
          visualBrief: "Four hair color examples for Linda.",
          slots: [
            { answer: "BLACK" },
            { answer: "BROWN" },
            { answer: "BLONDE" },
            { answer: "RED" }
          ],
          words: ["BLONDE", "RED", "BROWN", "BLACK"]
        }
      ]
    },
    {
      id: "hair-description-check-1",
      presenceSlide: true,
      compactTitle: true,
      imageClass: "physical-quiz-image",
      listClass: "description-choice-list",
      kicker: "CHECK THE DESCRIPTION",
      title: "Choose the correct sentence.",
      imagePath: "images/physical-appearance/linda-long-straight-blonde.webp",
      visualBrief: "Linda with long straight blonde hair.",
      items: [
        {
          hidePrompt: true,
          shuffleChoices: true,
          choices: [
            "Linda has got long straight blonde hair.",
            "Linda has got short wavy blonde hair.",
            "Linda has got long curly red hair."
          ],
          answer: "Linda has got long straight blonde hair."
        }
      ]
    },
    {
      id: "hair-description-check-2",
      presenceSlide: true,
      compactTitle: true,
      imageClass: "physical-quiz-image",
      listClass: "description-choice-list",
      kicker: "CHECK THE DESCRIPTION",
      title: "Choose the correct sentence.",
      imagePath: "images/physical-appearance/alex-black-short-curly.webp",
      visualBrief: "Alex with short curly black hair.",
      items: [
        {
          hidePrompt: true,
          shuffleChoices: true,
          choices: [
            "Alex has got short curly black hair.",
            "Alex has got long straight brown hair.",
            "Alex has got short straight red hair."
          ],
          answer: "Alex has got short curly black hair."
        }
      ]
    },
    {
      id: "hair-description-check-3",
      presenceSlide: true,
      compactTitle: true,
      imageClass: "physical-quiz-image",
      listClass: "description-choice-list",
      kicker: "CHECK THE DESCRIPTION",
      title: "Choose the correct sentence.",
      imagePath: "images/physical-appearance/linda-short-wavy-blonde.webp",
      visualBrief: "Linda with short wavy blonde hair.",
      items: [
        {
          hidePrompt: true,
          shuffleChoices: true,
          choices: [
            "Linda has got short wavy blonde hair.",
            "Linda has got long straight blonde hair.",
            "Linda has got short wavy black hair."
          ],
          answer: "Linda has got short wavy blonde hair."
        }
      ]
    },
    {
      id: "hair-description-check-4",
      presenceSlide: true,
      compactTitle: true,
      imageClass: "physical-quiz-image",
      listClass: "description-choice-list",
      kicker: "CHECK THE DESCRIPTION",
      title: "Choose the correct sentence.",
      imagePath: "images/physical-appearance/alex-blonde-long-wavy.webp",
      visualBrief: "Alex with long wavy blonde hair.",
      items: [
        {
          hidePrompt: true,
          shuffleChoices: true,
          choices: [
            "Alex has got long wavy blonde hair.",
            "Alex has got short curly black hair.",
            "Alex has got long straight brown hair."
          ],
          answer: "Alex has got long wavy blonde hair."
        }
      ]
    },
    {
      id: "hair-description-check-5",
      presenceSlide: true,
      compactTitle: true,
      imageClass: "physical-quiz-image",
      listClass: "description-choice-list",
      kicker: "CHECK THE DESCRIPTION",
      title: "Choose the correct sentence.",
      imagePath: "images/physical-appearance/linda-long-wavy-red.webp",
      visualBrief: "Linda with long wavy red hair.",
      items: [
        {
          hidePrompt: true,
          shuffleChoices: true,
          choices: [
            "Linda has got long wavy red hair.",
            "Linda has got long straight blonde hair.",
            "Linda has got short wavy black hair."
          ],
          answer: "Linda has got long wavy red hair."
        }
      ]
    },
    {
      id: "hair-description-check-6",
      presenceSlide: true,
      compactTitle: true,
      imageClass: "physical-quiz-image",
      listClass: "description-choice-list",
      kicker: "CHECK THE DESCRIPTION",
      title: "Choose the correct sentence.",
      imagePath: "images/physical-appearance/alex-red-short-straight.webp",
      visualBrief: "Alex with short straight red hair.",
      items: [
        {
          hidePrompt: true,
          shuffleChoices: true,
          choices: [
            "Alex has got short straight red hair.",
            "Alex has got long wavy blonde hair.",
            "Alex has got short curly black hair."
          ],
          answer: "Alex has got short straight red hair."
        }
      ]
    },
    {
      id: "hair-description-check-7",
      presenceSlide: true,
      compactTitle: true,
      imageClass: "physical-quiz-image",
      listClass: "description-choice-list",
      kicker: "CHECK THE DESCRIPTION",
      title: "Choose the correct sentence.",
      imagePath: "images/physical-appearance/linda-short-wavy-black.webp",
      visualBrief: "Linda with short wavy black hair.",
      items: [
        {
          hidePrompt: true,
          shuffleChoices: true,
          choices: [
            "Linda has got short wavy black hair.",
            "Linda has got long wavy red hair.",
            "Linda has got short wavy blonde hair."
          ],
          answer: "Linda has got short wavy black hair."
        }
      ]
    },
    {
      id: "hair-description-check-8",
      presenceSlide: true,
      compactTitle: true,
      imageClass: "physical-quiz-image",
      listClass: "description-choice-list",
      kicker: "CHECK THE DESCRIPTION",
      title: "Choose the correct sentence.",
      imagePath: "images/physical-appearance/alex-brown-long-straight.webp",
      visualBrief: "Alex with long straight brown hair.",
      items: [
        {
          hidePrompt: true,
          shuffleChoices: true,
          choices: [
            "Alex has got long straight brown hair.",
            "Alex has got short straight red hair.",
            "Alex has got long wavy blonde hair."
          ],
          answer: "Alex has got long straight brown hair."
        }
      ]
    },
    {
      id: "eye-color-alex",
      presenceSlide: true,
      compactTitle: true,
      kicker: "EYE COLORS",
      title: "EYE COLORS",
      imagePath: "images/physical-appearance/alexeyes.webp",
      visualBrief: "A close-up of Alex's eyes.",
      showAllItems: true,
      items: [
        {
          kind: "keyword-row",
          parts: [
            { text: "BLACK" },
            { text: "BROWN" },
            { text: "BLUE" },
            { text: "GREEN" },
            { text: "HAZEL" }
          ]
        },
        {
          parts: [
            { text: "Alex " },
            { text: "has got", className: "presence-have-got" },
            { text: " " },
            { text: "blue", className: "presence-eye-blue" },
            { text: " eyes." }
          ]
        },
        {
          parts: [
            { text: "He " },
            { text: "wears", className: "presence-eye-wears" },
            { text: " eye glasses." }
          ]
        }
      ]
    },
    {
      id: "eye-color-linda",
      presenceSlide: true,
      compactTitle: true,
      kicker: "EYE COLORS",
      title: "EYE COLORS",
      imagePath: "images/physical-appearance/lindaeyes.webp",
      visualBrief: "A close-up of Linda's eyes.",
      showAllItems: true,
      items: [
        {
          kind: "keyword-row",
          parts: [
            { text: "BLACK" },
            { text: "BROWN" },
            { text: "BLUE" },
            { text: "GREEN" },
            { text: "HAZEL" }
          ]
        },
        {
          parts: [
            { text: "Linda " },
            { text: "has got", className: "presence-have-got" },
            { text: " " },
            { text: "brown", className: "presence-eye-brown" },
            { text: " eyes." }
          ]
        },
        {
          parts: [
            { text: "She " },
            { text: "doesn't wear", className: "presence-negative-doesnt" },
            { text: " eye glasses." }
          ]
        }
      ]
    },
    {
      id: "eye-color-match-alex",
      presenceSlide: true,
      noVisual: true,
      compactTitle: true,
      kicker: "EYE COLORS",
      title: "Match Alex's Eye Colors",
      showAllItems: true,
      items: [
        {
          kind: "style-match",
          imagePath: "images/physical-appearance/alex-eye-colors.webp",
          visualBrief: "Four eye color examples for Alex.",
          slots: [
            { answer: "BROWN" },
            { answer: "BLUE" },
            { answer: "GREEN" },
            { answer: "BLACK" }
          ],
          words: ["BLACK", "GREEN", "BROWN", "BLUE"]
        }
      ]
    },
    {
      id: "eye-color-match-linda",
      presenceSlide: true,
      noVisual: true,
      compactTitle: true,
      kicker: "EYE COLORS",
      title: "Match Linda's Eye Colors",
      showAllItems: true,
      items: [
        {
          kind: "style-match",
          imagePath: "images/physical-appearance/linda-eye-colors.webp",
          visualBrief: "Four eye color examples for Linda.",
          slots: [
            { answer: "BROWN" },
            { answer: "GREEN" },
            { answer: "BLACK" },
            { answer: "BLUE" }
          ],
          words: ["BLUE", "BLACK", "BROWN", "GREEN"]
        }
      ]
    },
    {
      id: "physical-appearance-video-hub-1",
      presenceSlide: true,
      appearanceVideoHub: true,
      focus: "CHOOSE ONE",
      kicker: "PHYSICAL APPEARANCE",
      title: "Click a character to watch and complete the description.",
      compactTitle: true,
      imagePath: "images/common/collage-photo-2.webp",
      imageClass: "hub-collage-visual",
      visualBrief: "Choose a character.",
      showAllItems: true,
      listClass: "character-hub-grid",
      items: buildAppearanceVideoHubItems(physicalAppearanceVideoCharacters.slice(0, 8))
    },
    {
      id: "physical-appearance-video-hub-2",
      presenceSlide: true,
      appearanceVideoHub: true,
      focus: "CHOOSE ONE",
      kicker: "PHYSICAL APPEARANCE",
      title: "Click a character to watch and complete the description.",
      compactTitle: true,
      imagePath: "images/common/collage-photo-2.webp",
      imageClass: "hub-collage-visual",
      visualBrief: "Choose a character.",
      showAllItems: true,
      listClass: "character-hub-grid",
      items: buildAppearanceVideoHubItems(physicalAppearanceVideoCharacters.slice(8, 16))
    },
    {
      id: "clothing-example",
      presenceSlide: true,
      compactTitle: true,
      kicker: "CLOTHING",
      title: "CLOTHING",
      imagePath: "images/physical-appearance/clothing1.webp",
      visualBrief: "Alex and Linda wearing different clothes.",
      showAllItems: true,
      items: [
        {
          parts: [
            { text: "Alex " },
            { text: "wears", className: "presence-eye-wears" },
            { text: " a blue T-shirt, blue jeans, white socks and white shoes." }
          ]
        },
        {
          parts: [
            { text: "Linda " },
            { text: "wears", className: "presence-eye-wears" },
            { text: " a pink T-shirt, a blue skirt, white socks and white shoes." }
          ]
        }
      ]
    },
    {
      id: "clothing-alex-2",
      presenceSlide: true,
      compactTitle: true,
      kicker: "CLOTHING",
      title: "Choose the correct words.",
      imageClass: "inline-choice-visual",
      listClass: "inline-choice-list",
      imagePath: "images/physical-appearance/clothing2.webp",
      visualBrief: "Alex wearing a green jumper and brown trousers.",
      showAllItems: true,
      items: [
        {
          kind: "inline-choice",
          segments: [
            { text: "Alex wears a green " },
            { options: ["jumper", "sweater"], answer: "jumper" },
            { text: " and a " },
            { options: ["white", "black"], answer: "white" },
            { text: " shirt." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "He wears brown " },
            { options: ["trousers", "shorts"], answer: "trousers" },
            { text: ", a black " },
            { options: ["belt", "scarf"], answer: "belt" },
            { text: " and brown shoes." }
          ]
        }
      ]
    },
    {
      id: "clothing-alex-linda-3",
      presenceSlide: true,
      compactTitle: true,
      kicker: "CLOTHING",
      title: "Choose the correct words.",
      imageClass: "inline-choice-visual",
      listClass: "inline-choice-list",
      imagePath: "images/physical-appearance/clothing3.webp",
      visualBrief: "Alex and Linda wearing different clothes.",
      showAllItems: true,
      items: [
        {
          kind: "inline-choice",
          segments: [
            { text: "Alex wears a " },
            { options: ["jacket", "coat"], answer: "jacket" },
            { text: ", a white T-shirt, black " },
            { options: ["pants", "shorts"], answer: "pants" },
            { text: ", white shoes, a watch and a blue " },
            { options: ["backpack", "handbag"], answer: "backpack" },
            { text: "." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "Linda wears a " },
            { options: ["coat", "jacket"], answer: "coat" },
            { text: ", a pink " },
            { options: ["dress", "skirt"], answer: "dress" },
            { text: ", " },
            { options: ["white", "black"], answer: "white" },
            { text: " shoes, earrings, a necklace and a brown handbag." }
          ]
        }
      ]
    },
    {
      id: "clothing-alex-linda-4",
      presenceSlide: true,
      compactTitle: true,
      kicker: "CLOTHING",
      title: "Choose the correct words.",
      imageClass: "inline-choice-visual",
      listClass: "inline-choice-list",
      imagePath: "images/physical-appearance/clothing4.webp",
      visualBrief: "Alex and Linda wearing summer clothes and accessories.",
      showAllItems: true,
      items: [
        {
          kind: "inline-choice",
          segments: [
            { text: "Alex wears a white " },
            { options: ["shirt", "T-shirt"], answer: "shirt" },
            { text: ", blue " },
            { options: ["shorts", "jeans"], answer: "shorts" },
            { text: ", white shoes, a " },
            { options: ["hat", "scarf"], answer: "hat" },
            { text: ", sunglasses and a watch." }
          ]
        },
        {
          kind: "inline-choice",
          segments: [
            { text: "Linda wears a yellow " },
            { options: ["T-shirt", "shirt"], answer: "T-shirt" },
            { text: ", blue jeans, white shoes, a pink " },
            { options: ["bow", "ring"], answer: "bow" },
            { text: ", a ring and a red " },
            { options: ["bag", "handbag"], answer: "bag" },
            { text: "." }
          ]
        }
      ]
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(physicalAppearanceFunction);
