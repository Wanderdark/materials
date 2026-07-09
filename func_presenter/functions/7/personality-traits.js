const personalityTraitsGrade7Function = {
  id: "personality-traits",
  grade: 7,
  unit: 1,
  title: "Describing Personality",
  description: "Describing people's personality traits.",
  returnToSetupOnComplete: true,
  exercises: ["personality-traits-choice", "personality-traits-fill-blank"],
  sentences: [
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
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(personalityTraitsGrade7Function);
