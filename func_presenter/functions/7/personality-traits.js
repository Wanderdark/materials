const personalityWordRevealWords = [
  { word: "polite", definition: "always uses kind words and good manners.", imagePath: "images/personality/ava_polite.webp" },
  { word: "patient", definition: "can wait without getting angry.", imagePath: "images/personality/jack_patient.webp" },
  { word: "thoughtful", definition: "thinks about other people's feelings.", imagePath: "images/personality/ava.webp" },
  { word: "responsible", definition: "always does his/her duties.", imagePath: "images/personality/responsibe.webp" },
  { word: "easy-going", definition: "is relaxed and not easily upset.", imagePath: "images/personality/benjamin_easygoing.webp" },
  { word: "laid-back", definition: "is very relaxed and never worries much.", imagePath: "images/goingto-plans/benjamin-seaside.webp" },
  { word: "friendly", definition: "is kind and easy to talk to.", imagePath: "images/personality/benjamin.webp" },
  { word: "funny", definition: "makes people laugh.", imagePath: "images/personality/benjamin.webp" },
  { word: "sensitive", definition: "easily gets hurt or upset.", imagePath: "images/personality/chloe_sensitive.webp" },
  { word: "clumsy", definition: "often drops or breaks things.", imagePath: "images/personality/daniel.webp" },
  { word: "energetic", definition: "has a lot of energy.", imagePath: "images/common/skiing-daniel-1.webp" },
  { word: "confident", definition: "believes in himself/herself.", imagePath: "images/common/ride-rollercoaster-daniel-1.webp" },
  { word: "honest", definition: "always tells the truth and never tells lies.", imagePath: "images/personality/david_honest.webp" },
  { word: "reliable", definition: "always keeps secrets and promises.", imagePath: "images/personality/ava.webp" },
  { word: "cheerful", definition: "is usually happy and smiling.", imagePath: "images/common/sing-ella-2.webp" },
  { word: "outgoing", definition: "likes meeting and enjoys spending time with others.", imagePath: "images/personality/ella_sociable.webp" },
  { word: "sociable", definition: "likes meeting and enjoys spending time with others.", imagePath: "images/personality/ella_sociable.webp" },
  { word: "forgetful", definition: "often forgets things.", imagePath: "images/personality/ella_forgetful.webp" },
  { word: "helpful", definition: "always helps and encourages others.", imagePath: "images/common/cook-emma-1.webp" },
  { word: "generous", definition: "likes giving and sharing with others.", imagePath: "images/personality/emma_generous.webp" },
  { word: "determined", definition: "never gives up easily.", imagePath: "images/personality/ethan_lucas_determined.webp" },
  { word: "punctual", definition: "always arrives on time.", imagePath: "images/personality/ethan_punctual.webp" },
  { word: "adventurous", definition: "likes trying new and exciting things.", imagePath: "images/goingto-plans/hannah-valley.webp" },
  { word: "selfish", definition: "only thinks about himself/herself.", imagePath: "images/personality/jack_selfish.webp" },
  { word: "stubborn", definition: "never changes his/her mind.", imagePath: "images/personality/jack_stubborn.webp" },
  { word: "shy", definition: "feels nervous around new people.", imagePath: "images/personality/mia_shy.webp" },
  { word: "intelligent", definition: "learns and understands things quickly.", imagePath: "images/common/solve-puzzles-noah-1.webp" },
  { word: "hardworking", definition: "works hard and never gives up easily.", imagePath: "images/common/study-noah-1.webp" },
  { word: "creative", definition: "has lots of new and original ideas.", imagePath: "images/common/paint-olivia-1.webp" },
  { word: "stingy", definition: "doesn't like sharing or spending money.", imagePath: "images/personality/victoria_stingy.webp" }
];

const personalityWordRevealSlides = [0, 6, 12, 18, 24].map((start, index) => ({
  id: `personality-words-${index + 1}`,
  presenceSlide: true,
  personalityWordReveal: {
    kicker: `PERSONALITY WORDS ${index + 1} / 5`,
    title: "Click each word to discover its meaning.",
    words: personalityWordRevealWords.slice(start, start + 6)
  }
}));

const personalityBestFriendVideoCharacters = [
  { name: "AVA", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_chloe.mp4", lines: [{ speaker: "AVA", parts: [{ text: "Ava is thoughtful and " }, { answer: "responsible", choices: ["responsible", "forgetful"] }, { text: "." }] }] },
  { name: "BENJAMIN", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_jack.mp4", lines: [{ speaker: "BENJAMIN", parts: [{ text: "Benjamin is " }, { answer: "friendly", choices: ["friendly", "selfish"] }, { text: " and funny." }] }] },
  { name: "CHLOE", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_ava.mp4", lines: [{ speaker: "CHLOE", parts: [{ text: "Chloe is a " }, { answer: "polite", choices: ["polite", "rude"] }, { text: " and " }, { answer: "sensitive", choices: ["sensitive", "stubborn"] }, { text: " person." }] }] },
  { name: "DANIEL", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_lucas.mp4", lines: [{ speaker: "DANIEL", parts: [{ text: "Daniel is confident, energetic, and a bit " }, { answer: "clumsy", choices: ["clumsy", "punctual"] }, { text: "." }] }] },
  { name: "DAVID", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_ethan.mp4", lines: [{ speaker: "DAVID", parts: [{ text: "David is thoughtful and " }, { answer: "reliable", choices: ["reliable", "stubborn"] }, { text: "." }] }] },
  { name: "ELLA", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_olivia.mp4", lines: [{ speaker: "ELLA", parts: [{ text: "Ella is " }, { answer: "cheerful", choices: ["cheerful", "shy"] }, { text: " and " }, { answer: "outgoing", choices: ["outgoing", "selfish"] }, { text: "." }] }] },
  { name: "EMMA", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_hannah.mp4", lines: [{ speaker: "EMMA", parts: [{ text: "Emma is " }, { answer: "helpful", choices: ["helpful", "clumsy"] }, { text: " and " }, { answer: "generous", choices: ["generous", "stingy"] }, { text: "." }] }] },
  { name: "ETHAN", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_david.mp4", lines: [{ speaker: "ETHAN", parts: [{ text: "Ethan is determined and " }, { answer: "punctual", choices: ["punctual", "forgetful"] }, { text: "." }] }] },
  { name: "HANNAH", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_emma.mp4", lines: [{ speaker: "HANNAH", parts: [{ text: "Hannah is " }, { answer: "adventurous", choices: ["adventurous", "shy"] }, { text: " and cheerful." }] }] },
  { name: "JACK", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_benjamin.mp4", lines: [{ speaker: "JACK", parts: [{ text: "Jack can be a bit " }, { answer: "stubborn", choices: ["stubborn", "patient"] }, { text: " at times." }] }] },
  { name: "LUCAS", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_daniel.mp4", lines: [{ speaker: "LUCAS", parts: [{ text: "Lucas is " }, { answer: "determined", choices: ["determined", "sensitive"] }, { text: " and energetic." }] }] },
  { name: "MIA", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_zoe.mp4", lines: [{ speaker: "MIA", parts: [{ text: "Mia is " }, { answer: "shy", choices: ["shy", "outgoing"] }, { text: " and " }, { answer: "thoughtful", choices: ["thoughtful", "selfish"] }, { text: "." }] }] },
  { name: "NOAH", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_victoria.mp4", lines: [{ speaker: "NOAH", parts: [{ text: "Noah is intelligent and " }, { answer: "hardworking", choices: ["hardworking", "forgetful"] }, { text: "." }] }] },
  { name: "OLIVIA", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_ella.mp4", lines: [{ speaker: "OLIVIA", parts: [{ text: "Olivia is funny and " }, { answer: "creative", choices: ["creative", "clumsy"] }, { text: "." }] }] },
  { name: "VICTORIA", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_noah.mp4", lines: [{ speaker: "VICTORIA", parts: [{ text: "Victoria is " }, { answer: "intelligent", choices: ["intelligent", "stingy"] }, { text: " and great at coding." }] }] },
  { name: "ZOE", videoUrl: "https://media.adilhoca.com/video/introduce_best_friend_mia.mp4", lines: [{ speaker: "ZOE", parts: [{ text: "Zoe is thoughtful, " }, { answer: "patient", choices: ["patient", "stubborn"] }, { text: ", and a bit " }, { answer: "shy", choices: ["shy", "selfish"] }, { text: "." }] }] }
];

function buildPersonalityBestFriendVideoHubItems(characters) {
  const withCenter = [...characters.slice(0, 4), { name: "CHOOSE\nONE", passive: true }, ...characters.slice(4)];
  return withCenter.map((character) => ({
    kind: "category-list",
    parts: [{ text: character.name }],
    ...(character.passive ? {} : { appearanceVideoCharacter: character })
  }));
}

const personalityBestFriendFirstHubNames = ["BENJAMIN", "CHLOE", "DANIEL", "HANNAH", "LUCAS", "NOAH", "VICTORIA", "ZOE"];
const personalityBestFriendFirstHubCharacters = personalityBestFriendVideoCharacters.filter(({ name }) => personalityBestFriendFirstHubNames.includes(name));
const personalityBestFriendSecondHubCharacters = personalityBestFriendVideoCharacters.filter(({ name }) => !personalityBestFriendFirstHubNames.includes(name));

const personalityTraitsGrade7Function = {
  id: "personality-traits",
  grade: 7,
  unit: 1,
  title: "Describing Personality",
  description: "Describing people's personality traits.",
  returnToSetupOnComplete: true,
  exercises: ["personality-traits-choice", "personality-traits-fill-blank"],
  sentences: [
    ...personalityWordRevealSlides,
    {
      id: "personality-traits-hub",
      presenceSlide: true,
      personalityHub: true,
      kicker: "PERSONALITY",
      title: "Choose a personality trait.",
      compactTitle: true,
      visualBrief: "Characters linked to the selected personality trait.",
      traits: [
        { key: "polite", label: "polite" },
        { key: "patient", label: "patient" },
        { key: "thoughtful", label: "thoughtful" },
        { key: "responsible", label: "responsible" },
        { key: "easyGoing", label: "easy-going" },
        { key: "laidBack", label: "laid-back" },
        { key: "friendly", label: "friendly" },
        { key: "funny", label: "funny" },
        { key: "sensitive", label: "sensitive" },
        { key: "clumsy", label: "clumsy" },
        { key: "energetic", label: "energetic" },
        { key: "confident", label: "confident" },
        { key: "honestReliable", label: "honest (reliable)", keys: ["honest", "reliable"] },
        { key: "cheerful", label: "cheerful" },
        { key: "outgoingSociable", label: "outgoing (sociable)", keys: ["outgoing", "sociable"] },
        { key: "forgetful", label: "forgetful" },
        { key: "helpful", label: "helpful" },
        { key: "generous", label: "generous" },
        { key: "determined", label: "determined" },
        { key: "punctual", label: "punctual" },
        { key: "adventurous", label: "adventurous" },
        { key: "selfish", label: "selfish" },
        { key: "stubborn", label: "stubborn" },
        { key: "shy", label: "shy" },
        { key: "intelligent", label: "intelligent" },
        { key: "hardworking", label: "hardworking" },
        { key: "creative", label: "creative" },
        { key: "stingy", label: "stingy" }
      ],
      displayNames: {
        easyGoing: "easy-going",
        laidBack: "laid-back"
      },
      definitions: {
        polite: "always uses kind words and good manners.",
        patient: "can wait without getting angry.",
        thoughtful: "thinks about other people's feelings.",
        responsible: "always does his/her duties.",
        easyGoing: "is relaxed and not easily upset.",
        laidBack: "is very relaxed and never worries much.",
        friendly: "is kind and easy to talk to.",
        funny: "makes people laugh.",
        sensitive: "easily gets hurt or upset.",
        clumsy: "often drops or breaks things.",
        energetic: "has a lot of energy.",
        confident: "believes in himself/herself.",
        honest: "always tells the truth and never tells lies.",
        reliable: "always keeps secrets and promises.",
        cheerful: "is usually happy and smiling.",
        outgoing: "likes meeting and enjoys spending time with others.",
        sociable: "likes meeting and enjoys spending time with others.",
        forgetful: "often forgets things.",
        helpful: "always helps and encourages others.",
        generous: "likes giving and sharing with others.",
        determined: "never gives up easily.",
        punctual: "always arrives on time.",
        adventurous: "likes trying new and exciting things.",
        selfish: "only thinks about himself/herself.",
        stubborn: "never changes his/her mind.",
        shy: "feels nervous around new people.",
        intelligent: "learns and understands things quickly.",
        hardworking: "works hard and never gives up easily.",
        creative: "has lots of new and original ideas.",
        stingy: "doesn't like sharing or spending money."
      },
      characters: [
        {
          name: "Ava", gender: "girl", imagePath: "images/common/students/13/ava.webp",
          traits: ["polite", "thoughtful", "responsible"],
          traitImages: {
            polite: "images/personality/ava_polite.webp",
            thoughtful: "images/personality/ava.webp",
            responsible: "images/personality/ava.webp"
          }
        },
        {
          name: "Benjamin", gender: "boy", imagePath: "images/common/students/13/benjamin.webp",
          traits: ["easyGoing", "laidBack", "friendly", "funny"],
          traitImages: {
            easyGoing: "images/personality/benjamin_easygoing.webp",
            laidBack: "images/goingto-plans/benjamin-seaside.webp",
            friendly: "images/personality/benjamin.webp",
            funny: "images/personality/benjamin.webp"

          }
        },
        {
          name: "Chloe", gender: "girl", imagePath: "images/common/students/13/chloe.webp",
          traits: ["sensitive", "polite"],
          traitImages: {
            sensitive: "images/personality/chloe_sensitive.webp",
            polite: "images/personality/chloe.webp"
          }
        },
        {
          name: "Daniel", gender: "boy", imagePath: "images/common/students/13/daniel.webp",
          traits: ["clumsy", "energetic", "confident"],
          traitImages: {
            clumsy: "images/personality/daniel.webp",
            energetic: "images/common/skiing-daniel-1.webp",
            confident: "images/common/ride-rollercoaster-daniel-1.webp"
          }
        },
        {
          name: "David", gender: "boy", imagePath: "images/common/students/13/david.webp",
          traits: ["honest", "thoughtful", "responsible", "reliable"],
          traitImages: {
            honest: "images/personality/david_honest.webp",
            thoughtful: "images/personality/david_thoughtful.webp",
            responsible: "images/common/students/13/david.webp",
            reliable: "images/common/students/13/david.webp"
          }
        },
        {
          name: "Ella", gender: "girl", imagePath: "images/common/students/13/ella.webp",
          traits: ["cheerful", "outgoing", "sociable", "forgetful"],
          traitImages: {
            cheerful: "images/common/sing-ella-2.webp",
            outgoing: "images/personality/ella_sociable.webp",
            sociable: "images/personality/ella_sociable.webp",
            forgetful: "images/personality/ella_forgetful.webp"
          }
        },
        {
          name: "Emma", gender: "girl", imagePath: "images/common/students/13/emma.webp",
          traits: ["friendly", "helpful", "generous", "reliable"],
          traitImages: {
            friendly: "images/personality/emma_friendly.webp",
            helpful: "images/common/cook-emma-1.webp",
            generous: "images/personality/emma_generous.webp",
            reliable: "images/common/students/13/emma.webp"
          }
        },
        {
          name: "Ethan", gender: "boy", imagePath: "images/common/students/13/ethan.webp",
          traits: ["determined", "punctual"],
          traitImages: {
            determined: "images/personality/ethan_lucas_determined.webp",
            punctual: "images/personality/ethan_punctual.webp"
          }
        },
        {
          name: "Hannah", gender: "girl", imagePath: "images/common/students/13/hannah.webp",
          traits: ["adventurous", "energetic", "cheerful"],
          traitImages: {
            adventurous: "images/goingto-plans/hannah-valley.webp",
            energetic: "images/common/climb-mountain-hannah-1.webp",
            cheerful: "images/common/students/13/hannah.webp"
          }
        },
        {
          name: "Jack", gender: "boy", imagePath: "images/common/students/13/jack.webp",
          traits: ["selfish", "stubborn", "patient"],
          traitImages: {
            selfish: "images/personality/jack_selfish.webp",
            stubborn: "images/personality/jack_stubborn.webp",
            patient: "images/personality/jack_patient.webp"
          }
        },
        {
          name: "Lucas", gender: "boy", imagePath: "images/common/students/13/lucas.webp",
          traits: ["determined", "energetic"],
          traitImages: {
            determined: "images/personality/ethan_lucas_determined.webp",
            energetic: "images/common/play-football-lucas-1.webp"
          }
        },
        {
          name: "Mia", gender: "girl", imagePath: "images/common/students/13/mia.webp",
          traits: ["shy", "thoughtful"],
          traitImages: {
            shy: "images/personality/mia_shy.webp",
            thoughtful: "images/personality/mia_thoughtful.webp"
          }
        },
        {
          name: "Noah", gender: "boy", imagePath: "images/common/students/13/noah.webp",
          traits: ["intelligent", "hardworking"],
          traitImages: {
            intelligent: "images/common/solve-puzzles-noah-1.webp",
            hardworking: "images/common/study-noah-1.webp"
          }
        },
        {
          name: "Olivia", gender: "girl", imagePath: "images/common/students/13/olivia.webp",
          traits: ["funny", "creative"],
          traitImages: {
            funny: "images/common/students/13/olivia.webp",
            creative: "images/common/paint-olivia-1.webp"
          }
        },
        {
          name: "Victoria", gender: "girl", imagePath: "images/common/students/13/victoria.webp",
          traits: ["intelligent", "stingy"],
          traitImages: {
            intelligent: "images/simple-present-like/noah-victoria-chess.webp",
            stingy: "images/personality/victoria_stingy.webp"
          }
        },
        {
          name: "Zoe", gender: "girl", imagePath: "images/common/students/13/zoe.webp",
          traits: ["shy", "patient"],
          traitImages: {
            shy: "images/common/students/13/zoe.webp",
            patient: "images/personality/zoe_patient.webp"
          }
        }
      ]
    },
    {
      id: "personality-best-friend-video-hub-1",
      presenceSlide: true,
      appearanceVideoHub: true,
      focus: "CHOOSE ONE",
      kicker: "PERSONALITY",
      title: "Click a character to watch and complete the description.",
      compactTitle: true,
      imagePath: "images/common/collage-photo-4.webp",
      imageClass: "hub-collage-visual",
      visualBrief: "Choose a character.",
      showAllItems: true,
      listClass: "character-hub-grid",
      items: buildPersonalityBestFriendVideoHubItems(personalityBestFriendFirstHubCharacters)
    },
    {
      id: "personality-best-friend-video-hub-2",
      presenceSlide: true,
      appearanceVideoHub: true,
      focus: "CHOOSE ONE",
      kicker: "PERSONALITY",
      title: "Click a character to watch and complete the description.",
      compactTitle: true,
      imagePath: "images/common/collage-photo-5.webp",
      imageClass: "hub-collage-visual",
      visualBrief: "Choose a character.",
      showAllItems: true,
      listClass: "character-hub-grid",
      items: buildPersonalityBestFriendVideoHubItems(personalityBestFriendSecondHubCharacters)
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(personalityTraitsGrade7Function);
