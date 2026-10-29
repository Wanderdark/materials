const followingPhoneConversationsGrade8Function = {
  id: "following-phone-conversations",
  grade: 8,
  unit: 4,
  title: "Following phone conversations",
  compactPresentationTitle: true,
  description: "",
  exercises: [],
  sentences: [
    {
      id: "following-phone-conversations-index",
      presenceSlide: true,
      noVisual: true,
      simpleProcessIndex: {
        title: "UNIT INDEX",
        persistProgress: true,
        items: [
          { label: "COMMUNICATION METHODS", targetId: "communication-methods-split-image-word-match", endId: "communication-methods-emma-face-to-face-test" },
          { label: "HANDLING PHONE CONVERSATIONS", targetId: "phone-conversations-introducing", endId: "phone-mother-out-situation-test" },
          { label: "UNDERSTANDING SIMPLE GRAPHS", targetId: "simple-graphs-all-instagram", endId: "simple-graphs-internet-habits-test" },
          { label: "EXPRESSING CONCERN AND SYMPATHY", targetId: "concern-sympathy-expressions", endId: "concern-sympathy-olivia-ella-test" },
          { label: "MAKING SIMPLE INQUIRIES", targetId: "phone-inquiries-question-words-1", endId: "phone-inquiries-situation-not-well" }
        ]
      }
    },
    {
      id: "communication-methods-split-image-word-match",
      presenceSlide: true,
      imagePath: "images/following-phone-conversations/write-letters.webp",
      visualBrief: "Match the communication methods with their pictures.",
      splitImageWordMatch: {
        title: "COMMUNICATION METHODS",
        items: [
          { id: "write-letters", label: "write letters", imagePath: "images/following-phone-conversations/write-letters.webp" },
          { id: "send-text-messages", label: "send text messages", imagePath: "images/following-phone-conversations/send-text-messages.webp" },
          { id: "speak-face-to-face", label: "speak face to face", imagePath: "images/following-phone-conversations/speak-face-to-face.webp" },
          { id: "send-emails", label: "send e-mails", imagePath: "images/following-phone-conversations/send-emails.webp" },
          { id: "leave-message-notes", label: "leave message notes", imagePath: "images/following-phone-conversations/leave-message-notes.webp" },
          { id: "use-sign-language", label: "use sign language", imagePath: "images/following-phone-conversations/use-sign-language.webp" },
          { id: "make-phone-calls", label: "make phone calls", imagePath: "images/following-phone-conversations/make-phone-calls.webp" },
          { id: "send-faxes", label: "send faxes", imagePath: "images/following-phone-conversations/send-faxes.webp" },
          { id: "send-postcards", label: "send postcards", imagePath: "images/following-phone-conversations/send-postcards.webp" },
          { id: "use-social-networks", label: "use social networks", imagePath: "images/following-phone-conversations/use-social-networks.webp" }
        ]
      }
    },
    {
      id: "communication-methods-keep-in-touch",
      presenceSlide: true,
      noVisual: true,
      suggestionDialogue: {
        heading: "COMMUNICATION METHODS",
        portraitConversation: true,
        bubbles: [
          {
            type: "question",
            speaker: "BENJAMIN",
            portraitPath: "images/common/students/benjamin.webp",
            parts: [
              { text: "How do you ", className: "presence-white" },
              { text: "keep in touch", className: "presence-yellow" },
              { text: " with your buddies?", className: "presence-white" }
            ],
            note: "keep in touch → haberleşmek"
          },
          {
            type: "answer",
            speaker: "DAVID",
            portraitPath: "images/common/students/david.webp",
            text: "I usually text them. Sometimes, I call them, too."
          }
        ]
      }
    },
    {
      id: "communication-methods-keep-in-touch-test",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "Which question completes the conversation?",
        lines: [
          { speaker: "Teacher", text: "________?" },
          { speaker: "Ella", speakerImage: "images/common/students/ella.webp", text: "I usually call my friends." },
          { speaker: "Mia", speakerImage: "images/common/students/mia.webp", text: "I prefer texting them." },
          { speaker: "Emma", speakerImage: "images/common/students/emma.webp", text: "I enjoy talking to them face to face." }
        ],
        randomizeChoices: false,
        choices: [
          "When do you usually meet your friends?",
          "How many messages do you send each day?",
          "How do you keep in touch with your friends?",
          "What do you talk about with your friends?"
        ],
        answer: "How do you keep in touch with your friends?"
      }
    },
    {
      id: "communication-methods-emails-picture-test",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "Which picture best represents the statement?",
        targetExpression: "\"I dislike talking on mobile phones so I usually keep in touch with friends by sending emails.\"",
        hideQuestionTitle: true,
        randomizeChoices: false,
        choices: ["speak-face-to-face", "write-letters", "make-phone-calls", "send-emails"],
        choiceImages: {
          "speak-face-to-face": "images/following-phone-conversations/speak-face-to-face.webp",
          "write-letters": "images/following-phone-conversations/write-letters.webp",
          "make-phone-calls": "images/following-phone-conversations/make-phone-calls.webp",
          "send-emails": "images/following-phone-conversations/send-emails.webp"
        },
        answer: "send-emails"
      }
    },
    {
      id: "communication-methods-chat-online-test",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "Which question completes the conversation?",
        lines: [
          { speaker: "Benjamin", speakerImage: "images/common/students/benjamin.webp", text: "________?" },
          { speaker: "Emma", speakerImage: "images/common/students/emma.webp", text: "Never. I prefer face-to-face interaction." }
        ],
        randomizeChoices: false,
        choices: [
          "When do you go out with your parents",
          "What are its technical specifications",
          "What kind of films do you watch",
          "How often do you chat online"
        ],
        answer: "How often do you chat online"
      }
    },
    {
      id: "communication-methods-ella-preferences-test",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "Ella ——.",
        lines: [
          {
            speaker: "Ella",
            speakerImage: "images/common/students/ella.webp",
            text: "I keep in touch with my friends in different ways. My favorite one is making voice calls, but I sometimes send text messages, too. I never write e-mails because I think it is boring."
          }
        ],
        randomizeChoices: false,
        choices: [
          "is keen on making phone calls",
          "never sends text messages",
          "thinks writing mails is fun.",
          "thinks sending mails isn’t cheap"
        ],
        answer: "is keen on making phone calls"
      }
    },
    {
      id: "communication-methods-benjamin-social-networks-test",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "Benjamin ——.",
        lines: [
          {
            speaker: "Benjamin",
            speakerImage: "images/common/students/benjamin.webp",
            text: "I love using social networks most. My friends are members of social networks, so I can keep in touch with them easily. I love using the Net, but I never send emails. I think, it is really boring."
          }
        ],
        randomizeChoices: false,
        choices: [
          "seldom uses the Internet to communicate",
          "uses social networks, but his friends don’t",
          "believes writing emails is fast and fun",
          "would rather use social networks than send emails"
        ],
        answer: "would rather use social networks than send emails"
      }
    },
    {
      id: "communication-methods-emma-face-to-face-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "Emma ——.",
        lines: [
          {
            speaker: "Emma",
            speakerImage: "images/common/students/emma.webp",
            text: "In my opinon, speaking face-to-face is the best way of communication. I always meet my friends face to face and spend time together. I don’t like using Internet to keep in touch with them. I believe, technology has many negative effects."
          }
        ],
        randomizeChoices: false,
        choices: [
          "doesn’t have many friends",
          "never meets her friends face to face.",
          "enjoys keeping in touch with her friends in person",
          "believes the Internet is the best way of communication"
        ],
        answer: "enjoys keeping in touch with her friends in person"
      }
    },
    {
      id: "phone-conversations-introducing",
      presenceSlide: true,
      noVisual: true,
      suggestionDialogue: {
        heading: "HANDLING PHONE CONVERSATIONS",
        layoutClass: "phone-expressions",
        intro: "Expressions for introducing yourself and asking to speak to someone on the phone.",
        bubbles: [
          { type: "question", text: "Hi! It's Benjamin calling." },
          { type: "question", text: "Hello. This is David speaking." },
          { type: "question", text: "How is it going?" },
          { type: "question", text: "Is Emma there?" },
          { type: "question", text: "Is Noah in?" },
          { type: "question", text: "Can I / could I talk to Jack please?" },
          { type: "question", text: "May I speak to Jack please?" }
        ]
      }
    },
    {
      id: "phone-conversations-positive-responses",
      presenceSlide: true,
      noVisual: true,
      suggestionDialogue: {
        heading: "HANDLING PHONE CONVERSATIONS",
        layoutClass: "phone-expressions",
        intro: "Positive responses when someone asks to speak to another person.",
        bubbles: [
          { type: "accepting", parts: [{ text: "Hang on", className: "suggestion-dialogue-highlight" }, { text: " a minute. I'll get him." }] },
          { type: "accepting", parts: [{ text: "Just a moment. I'll " }, { text: "put him through", className: "suggestion-dialogue-highlight" }, { text: "." }] },
          { type: "accepting", parts: [{ text: "Hold on", className: "suggestion-dialogue-highlight" }, { text: " a second." }] },
          { type: "accepting", parts: [{ text: "Hold the line", className: "suggestion-dialogue-highlight" }, { text: ", please." }] },
          { type: "accepting", text: "How can I help you?" },
          { type: "accepting", text: "Can I take your name and number please?" },
          { type: "accepting", parts: [{ text: "May I ask " }, { text: "who is calling", className: "suggestion-dialogue-highlight" }, { text: "?" }] }
        ]
      }
    },
    {
      id: "phone-conversations-negative-responses",
      presenceSlide: true,
      noVisual: true,
      suggestionDialogue: {
        heading: "HANDLING PHONE CONVERSATIONS",
        layoutClass: "phone-expressions",
        intro: "Negative responses when someone asks to speak to another person.",
        bubbles: [
          { type: "answer", parts: [{ text: "He is not " }, { text: "available", className: "suggestion-dialogue-highlight" }, { text: " at the moment. He has " }, { text: "gone out", className: "suggestion-dialogue-highlight" }, { text: "." }] },
          { type: "answer", parts: [{ text: "I'm afraid he is " }, { text: "busy", className: "suggestion-dialogue-highlight" }, { text: " right now." }] },
          { type: "answer", parts: [{ text: "Would you like to " }, { text: "leave a message", className: "suggestion-dialogue-highlight" }, { text: "?" }] },
          { type: "answer", parts: [{ text: "I can't hear you. It's a " }, { text: "bad line", className: "suggestion-dialogue-highlight" }, { text: "." }] },
          { type: "answer", parts: [{ text: "Could you " }, { text: "repeat", className: "suggestion-dialogue-highlight" }, { text: " that please?" }] },
          { type: "answer", parts: [{ text: "Can you " }, { text: "speak up", className: "suggestion-dialogue-highlight" }, { text: " a little please?" }] },
          { type: "answer", parts: [{ text: "I'm sorry but he is " }, { text: "engaged", className: "suggestion-dialogue-highlight" }, { text: " at the moment." }] }
        ]
      }
    },
    {
      id: "phone-conversations-other-expressions",
      presenceSlide: true,
      noVisual: true,
      keepNextLabel: true,
      suggestionDialogue: {
        heading: "HANDLING PHONE CONVERSATIONS",
        layoutClass: "phone-expressions",
        intro: "Other useful expressions for phone conversations.",
        bubbles: [
          { type: "accepting", parts: [{ text: "I'll " }, { text: "get back", className: "suggestion-dialogue-highlight" }, { text: " to you in an hour." }] },
          { type: "accepting", text: "Could you tell / ask him to call me?" },
          { type: "accepting", text: "Call me as soon as possible." },
          { type: "accepting", text: "What's it about?" },
          { type: "accepting", text: "Thanks for calling. See you." },
          { type: "accepting", text: "I will call again later." }
        ]
      }
    },
    {
      id: "phone-order-olivia-ella",
      presenceSlide: true,
      focus: "PHONE CONVERSATION",
      kicker: "OLIVIA – ELLA",
      title: "Put the sentences into correct order.",
      compactTitle: true,
      disablePresenceSpeech: true,
      imagePath: "images/following-phone-conversations/ella-olivia-speaking.webp",
      dialogueImageReveal: true,
      dialogueVideoUrl: "https://media.adilhoca.com/video/8_phone_conversation_ella_olivia.mp4",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Phone conversation thumbnail; space reserved for the dialogue visual or video.",
      scrambledDialogue: true,
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "Olivia",
          speakerImage: "images/common/students/olivia.webp",
          parts: [{ text: "Olivia: ", className: "presence-yellow" }, { text: "Hello, Olivia speaking." }]
        },
        {
          speaker: "Ella",
          speakerImage: "images/common/students/ella.webp",
          parts: [{ text: "Ella: ", className: "presence-yellow" }, { text: "Hi, Olivia. This is Ella. Would you like to go to the cinema?" }]
        },
        {
          speaker: "Olivia",
          speakerImage: "images/common/students/olivia.webp",
          parts: [{ text: "Olivia: ", className: "presence-yellow" }, { text: "I’d love to. What time?" }]
        },
        {
          speaker: "Ella",
          speakerImage: "images/common/students/ella.webp",
          parts: [{ text: "Ella: ", className: "presence-yellow" }, { text: "At 2 p.m." }]
        }
      ]
    },
    {
      id: "phone-order-sophie-hannah",
      presenceSlide: true,
      focus: "PHONE CONVERSATION",
      kicker: "SOPHIE – HANNAH",
      title: "Put the sentences into correct order.",
      compactTitle: true,
      disablePresenceSpeech: true,
      imagePath: "images/following-phone-conversations/hannah-sophie-speaking.webp",
      dialogueImageReveal: true,
      dialogueVideoUrl: "https://media.adilhoca.com/video/8_phone_conversation_hannah_sophie.mp4",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Phone conversation thumbnail; space reserved for the dialogue visual or video.",
      scrambledDialogue: true,
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "Sophie",
          speakerImage: "../olivias_movie_memories/assets/portraits/sophie.webp",
          parts: [{ text: "Sophie: ", className: "presence-yellow" }, { text: "Hello, Sophie speaking." }]
        },
        {
          speaker: "Hannah",
          speakerImage: "images/common/students/hannah.webp",
          parts: [{ text: "Hannah: ", className: "presence-yellow" }, { text: "This is Hannah. Is Emma in?" }]
        },
        {
          speaker: "Sophie",
          speakerImage: "../olivias_movie_memories/assets/portraits/sophie.webp",
          parts: [{ text: "Sophie: ", className: "presence-yellow" }, { text: "I’m afraid she’s not available. She has gone out. Would you like to leave a message?" }]
        },
        {
          speaker: "Hannah",
          speakerImage: "images/common/students/hannah.webp",
          parts: [{ text: "Hannah: ", className: "presence-yellow" }, { text: "Yes, please. Could you ask her to call me? My number is 555 0102." }]
        }
      ]
    },
    {
      id: "phone-order-benjamin-callum",
      presenceSlide: true,
      focus: "PHONE CONVERSATION",
      kicker: "BENJAMIN – CALLUM",
      title: "Put the sentences into correct order.",
      compactTitle: true,
      disablePresenceSpeech: true,
      imagePath: "images/following-phone-conversations/benjamin-callum-speaking.webp",
      dialogueImageReveal: true,
      dialogueVideoUrl: "https://media.adilhoca.com/video/8_phone_conversation_benjamin_callum.mp4",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Phone conversation thumbnail; space reserved for the dialogue visual or video.",
      scrambledDialogue: true,
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "Benjamin",
          speakerImage: "images/common/students/benjamin.webp",
          parts: [{ text: "Benjamin: ", className: "presence-yellow" }, { text: "Hello, Benjamin speaking." }]
        },
        {
          speaker: "Callum",
          speakerImage: "../olivias_movie_memories/assets/portraits/callum.webp",
          parts: [{ text: "Callum: ", className: "presence-yellow" }, { text: "Hi, Benjamin. This is Callum. Is your father in?" }]
        },
        {
          speaker: "Benjamin",
          speakerImage: "images/common/students/benjamin.webp",
          parts: [{ text: "Benjamin: ", className: "presence-yellow" }, { text: "Hang on a minute, please. I’ll get him." }]
        },
        {
          speaker: "Callum",
          speakerImage: "../olivias_movie_memories/assets/portraits/callum.webp",
          parts: [{ text: "Callum: ", className: "presence-yellow" }, { text: "Thank you." }]
        }
      ]
    },
    {
      id: "phone-order-elodie-ava",
      presenceSlide: true,
      focus: "PHONE CONVERSATION",
      kicker: "ÉLODIE – AVA",
      title: "Put the sentences into correct order.",
      compactTitle: true,
      disablePresenceSpeech: true,
      imagePath: "images/following-phone-conversations/ava-elodie-speaking.webp",
      dialogueImageReveal: true,
      dialogueVideoUrl: "https://media.adilhoca.com/video/8_phone_conversation_ava_elodie.mp4",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Phone conversation thumbnail; space reserved for the dialogue visual or video.",
      scrambledDialogue: true,
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "Élodie",
          speakerImage: "../olivias_movie_memories/assets/portraits/elodie.png",
          parts: [{ text: "Élodie: ", className: "presence-yellow" }, { text: "Hello, Élodie speaking." }]
        },
        {
          speaker: "Ava",
          speakerImage: "images/common/students/ava.webp",
          parts: [{ text: "Ava: ", className: "presence-yellow" }, { text: "Hi, Élodie. This is Ava. Could I speak to Chloe, please?" }]
        },
        {
          speaker: "Élodie",
          speakerImage: "../olivias_movie_memories/assets/portraits/elodie.png",
          parts: [{ text: "Élodie: ", className: "presence-yellow" }, { text: "I’m sorry. She isn’t available at the moment. Would you like to leave a message?" }]
        },
        {
          speaker: "Ava",
          speakerImage: "images/common/students/ava.webp",
          parts: [{ text: "Ava: ", className: "presence-yellow" }, { text: "No, thanks. I’ll call back later." }]
        }
      ]
    },
    {
      id: "phone-order-david-ethan",
      presenceSlide: true,
      focus: "PHONE CONVERSATION",
      kicker: "DAVID – ETHAN",
      title: "Put the sentences into correct order.",
      compactTitle: true,
      disablePresenceSpeech: true,
      imagePath: "images/following-phone-conversations/ethan-david-speaking.webp",
      dialogueImageReveal: true,
      dialogueVideoUrl: "https://media.adilhoca.com/video/8_phone_conversation_david_ethan.mp4",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Phone conversation thumbnail; space reserved for the dialogue visual or video.",
      scrambledDialogue: true,
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "David",
          speakerImage: "images/common/students/david.webp",
          parts: [{ text: "David: ", className: "presence-yellow" }, { text: "Hello, David speaking." }]
        },
        {
          speaker: "Ethan",
          speakerImage: "images/common/students/ethan.webp",
          parts: [{ text: "Ethan: ", className: "presence-yellow" }, { text: "Hello, David. This is Ethan. My mother wants to speak to your mother. Can you put her through?" }]
        },
        {
          speaker: "David",
          speakerImage: "images/common/students/david.webp",
          parts: [{ text: "David: ", className: "presence-yellow" }, { text: "Can you hold on a moment, please." }]
        },
        {
          speaker: "Ethan",
          speakerImage: "images/common/students/ethan.webp",
          parts: [{ text: "Ethan: ", className: "presence-yellow" }, { text: "Okay." }]
        }
      ]
    },
    {
      id: "phone-order-emily-jack",
      presenceSlide: true,
      keepNextLabel: true,
      focus: "PHONE CONVERSATION",
      kicker: "EMILY – JACK",
      title: "Put the sentences into correct order.",
      compactTitle: true,
      disablePresenceSpeech: true,
      imagePath: "images/following-phone-conversations/jack-emily-speaking.webp",
      dialogueImageReveal: true,
      dialogueVideoUrl: "https://media.adilhoca.com/video/8_phone_conversation_jack_emily.mp4",
      imageAspect: "1 / 1",
      imageFit: "cover",
      visualBrief: "Phone conversation thumbnail; space reserved for the dialogue visual or video.",
      scrambledDialogue: true,
      listClass: "permission-dialogue-list",
      items: [
        {
          speaker: "Emily",
          speakerImage: "../olivias_movie_memories/assets/portraits/emily.webp",
          parts: [{ text: "Emily: ", className: "presence-yellow" }, { text: "Hello, Emily speaking." }]
        },
        {
          speaker: "Jack",
          speakerImage: "images/common/students/jack.webp",
          parts: [{ text: "Jack: ", className: "presence-yellow" }, { text: "Hello, Mrs. Waters. Is Benjamin there?" }]
        },
        {
          speaker: "Emily",
          speakerImage: "../olivias_movie_memories/assets/portraits/emily.webp",
          parts: [{ text: "Emily: ", className: "presence-yellow" }, { text: "May I ask who is calling?" }]
        },
        {
          speaker: "Jack",
          speakerImage: "images/common/students/jack.webp",
          parts: [{ text: "Jack: ", className: "presence-yellow" }, { text: "I’m sorry. This is his friend, Jack." }]
        }
      ]
    },
    {
      id: "phone-message-refusal-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "Which sentence completes the conversation?",
        lines: [
          { speaker: "Hannah", speakerImage: "images/common/students/hannah.webp", text: "Hello, this is Hannah. Could I speak to Emma, please?" },
          { speaker: "Haruto", speakerImage: "../olivias_movie_memories/assets/portraits/emma_father_haruto_casual.webp", text: "I’m sorry. She isn’t available at the moment. Would you like to leave a message?" },
          { speaker: "Hannah", speakerImage: "images/common/students/hannah.webp", text: "——. I’ll call back later." }
        ],
        randomizeChoices: false,
        choices: [
          "Please ask her to call me",
          "No, thanks",
          "Sure, call me back please",
          "That would be great"
        ],
        answer: "No, thanks"
      }
    },
    {
      id: "phone-call-order-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "Which option shows the correct order of the conversation?",
        lines: [
          { speaker: "I", speakerImage: "images/common/students/jack.webp", text: "Hi, this is Jack calling. Could I speak to Benjamin?" },
          { speaker: "II", speakerImage: "images/common/students/jack.webp", text: "I’m sorry to hear that. I hope he gets well soon." },
          { speaker: "III", speakerImage: "../olivias_movie_memories/assets/portraits/emily.webp", text: "Hello, Emily speaking." },
          { speaker: "IV", speakerImage: "../olivias_movie_memories/assets/portraits/emily.webp", text: "I’m afraid he isn’t available. He doesn’t feel well." }
        ],
        randomizeChoices: false,
        choices: [
          "III – IV – I – II",
          "I – IV – II – III",
          "III – I – IV – II",
          "IV – III – II – I"
        ],
        answer: "III – I – IV – II"
      }
    },
    {
      id: "phone-bad-line-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "Which sentence completes the conversation?",
        lines: [
          { speaker: "Ella", speakerImage: "images/common/students/ella.webp", text: "Are you free on Sunday evening?" },
          { speaker: "Olivia", speakerImage: "images/common/students/olivia.webp", text: "I can’t hear you clearly. ——. Could you say that again, please?" },
          { speaker: "Ella", speakerImage: "images/common/students/ella.webp", text: "Do you have any plans for Sunday evening?" },
          { speaker: "Olivia", speakerImage: "images/common/students/olivia.webp", text: "No, I think I’m free." }
        ],
        randomizeChoices: false,
        choices: [
          "I’m really busy.",
          "It’s a bad line.",
          "I’m sorry to hear that.",
          "We’ll meet up later, then."
        ],
        answer: "It’s a bad line."
      }
    },
    {
      id: "phone-caller-identity-order-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "How should the numbered sentences be ordered to make a meaningful dialogue?",
        lines: [
          { speaker: "I", speakerImage: "../olivias_movie_memories/assets/portraits/emily.webp", text: "Hello, I’m Emily." },
          { speaker: "II", speakerImage: "../olivias_movie_memories/assets/portraits/oliver.webp", text: "Oh, sorry Emily. This is Benjamin’s father." },
          { speaker: "III", speakerImage: "../olivias_movie_memories/assets/portraits/emily.webp", text: "Could I ask who is calling?" },
          { speaker: "IV", speakerImage: "../olivias_movie_memories/assets/portraits/oliver.webp", text: "Hi, Emily. Could I speak to Benjamin?" }
        ],
        randomizeChoices: false,
        choices: [
          "I – IV – III – II",
          "IV – II – III – I",
          "I – II – IV – III",
          "IV – III – I – II"
        ],
        answer: "I – IV – III – II"
      }
    },
    {
      id: "phone-leave-message-order-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "The lines of a phone conversation are given in the wrong order above. How should the numbered sentences be ordered to make a meaningful dialogue?",
        lines: [
          { speaker: "I", speakerImage: "images/common/students/benjamin.webp", text: "Sorry, she isn’t available now. Would you like to leave a message?" },
          { speaker: "II", speakerImage: "images/common/students/benjamin.webp", text: "Hello, Benjamin speaking." },
          { speaker: "III", speakerImage: "images/common/students/jack.webp", text: "Sure, could you tell her to contact me soon?" },
          { speaker: "IV", speakerImage: "images/common/students/jack.webp", text: "Hi, this is Jack. Is Mrs. Waters in?" }
        ],
        randomizeChoices: false,
        choices: [
          "II – III – IV – I",
          "II – IV – I – III",
          "IV – III – II – I",
          "IV – III – I – II"
        ],
        answer: "II – IV – I – III"
      }
    },
    {
      id: "phone-leave-message-situation-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "SITUATION",
        lines: [
          { speaker: "Situation", text: "You call your friend, Benjamin. His mother answers the phone and says he isn’t at home. What do you say?" }
        ],
        randomizeChoices: false,
        choices: [
          "Can I leave a message?",
          "I’ll get him.",
          "Could you repeat that, please?"
        ],
        answer: "Can I leave a message?"
      }
    },
    {
      id: "phone-bad-line-situation-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "SITUATION",
        lines: [
          { speaker: "Situation", text: "You are talking to your friend on the phone, but the line is bad and you can’t hear clearly. What do you say?" }
        ],
        randomizeChoices: false,
        choices: [
          "Could you repeat that, please?",
          "Can I give you my number?",
          "Could you tell me your address?"
        ],
        answer: "Could you repeat that, please?"
      }
    },
    {
      id: "phone-mother-out-situation-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "SITUATION",
        lines: [
          { speaker: "Situation", text: "A friend of your mother’s calls to speak to her, but your mother isn’t at home. What do you say?" }
        ],
        randomizeChoices: false,
        choices: [
          "I’ll get her.",
          "Hang on a minute.",
          "I'm sorry, she's not here. She has gone out."
        ],
        answer: "I'm sorry, she's not here. She has gone out."
      }
    },
    {
      id: "simple-graphs-all-instagram",
      presenceSlide: true,
      noVisual: true,
      keepNextLabel: true,
      simpleGraph: {
        heading: "UNDERSTANDING SIMPLE GRAPHS",
        chartTitle: "Teens’ Communication Preferences",
        segments: [{ label: "Instagram", value: 100, color: "#65e6b8" }],
        quantifier: "ALL",
        translation: "Hepsi",
        percentage: "100%",
        sentenceParts: [
          { text: "All", highlight: true },
          { text: " teenagers prefer " },
          { text: "Instagram.", highlight: true }
        ]
      }
    },
    {
      id: "simple-graphs-half",
      presenceSlide: true,
      noVisual: true,
      keepNextLabel: true,
      simpleGraph: {
        heading: "UNDERSTANDING SIMPLE GRAPHS",
        chartTitle: "Teens’ Communication Preferences",
        segments: [
          { label: "WhatsApp", value: 50, color: "#6e90ff" },
          { label: "Instagram", value: 50, color: "#65e6b8" }
        ],
        quantifier: "HALF",
        translation: "Yarısı",
        percentage: "50%",
        sentences: [
          [{ text: "Half of teenagers prefer WhatsApp.", highlight: true }],
          [{ text: "Half of teenagers prefer Instagram.", highlight: true }]
        ]
      }
    },
    {
      id: "simple-graphs-most",
      presenceSlide: true,
      noVisual: true,
      keepNextLabel: true,
      simpleGraph: {
        heading: "UNDERSTANDING SIMPLE GRAPHS",
        chartTitle: "Teens’ Communication Preferences",
        segments: [
          { label: "Social networks", value: 72, color: "#65e6b8" },
          { label: "Text messages", value: 28, color: "#ff947e" }
        ],
        quantifier: "MOST OF",
        translation: "Çoğu",
        percentage: "72%",
        sentences: [
          [{ text: "Most teenagers prefer social networks.", highlight: true }]
        ]
      }
    },
    {
      id: "simple-graphs-nearly-half",
      presenceSlide: true,
      noVisual: true,
      keepNextLabel: true,
      simpleGraph: {
        heading: "UNDERSTANDING SIMPLE GRAPHS",
        chartTitle: "Teens’ Communication Preferences",
        segments: [
          { label: "Social networks", value: 48, color: "#65e6b8" },
          { label: "Text messages", value: 28, color: "#ff947e" },
          { label: "Voice calls", value: 20, color: "#ffd84d" },
          { label: "Emails", value: 4, color: "#b79aff" }
        ],
        introTerms: ["NEARLY / APPROXIMATELY","Yaklaşık"],
        quantifier: "NEARLY HALF",
        translation: "Yaklaşık yarısı",
        percentage: "48%",
        sentences: [
          [{ text: "Nearly half of teenagers prefer social networks.", highlight: true }]
        ]
      }
    },
    {
      id: "simple-graphs-more-than-half",
      presenceSlide: true,
      noVisual: true,
      keepNextLabel: true,
      simpleGraph: {
        heading: "UNDERSTANDING SIMPLE GRAPHS",
        chartTitle: "Teens’ Communication Preferences",
        segments: [
          { label: "Social networks", value: 55, color: "#65e6b8" },
          { label: "Text messages", value: 25, color: "#ff947e" },
          { label: "Voice calls", value: 20, color: "#ffd84d" }
        ],
        introTerms: ["MORE THAN …","…den fazla"],
        quantifier: "MORE THAN HALF",
        translation: "Yarıdan fazla",
        percentage: "55%",
        sentences: [
          [{ text: "More than half of teenagers prefer social networks.", highlight: true }]
        ]
      }
    },
    {
      id: "simple-graphs-less-than-half",
      presenceSlide: true,
      noVisual: true,
      keepNextLabel: true,
      simpleGraph: {
        heading: "UNDERSTANDING SIMPLE GRAPHS",
        chartTitle: "Teens’ Communication Preferences",
        segments: [
          { label: "Social networks", value: 48, color: "#65e6b8" },
          { label: "Text messages", value: 28, color: "#ff947e" },
          { label: "Voice calls", value: 20, color: "#ffd84d" },
          { label: "Emails", value: 4, color: "#b79aff" }
        ],
        introTerms: ["LESS THAN …","…den az"],
        quantifier: "LESS THAN HALF",
        translation: "Yarıdan az",
        percentage: "48%",
        sentences: [
          [{ text: "Less than half of teenagers prefer social networks.", highlight: true }]
        ]
      }
    },
    {
      id: "simple-graphs-two-in-ten",
      presenceSlide: true,
      noVisual: true,
      keepNextLabel: true,
      simpleGraph: {
        heading: "UNDERSTANDING SIMPLE GRAPHS",
        chartTitle: "Teens’ Communication Preferences",
        segments: [
          { label: "Social networks", value: 55, color: "#65e6b8" },
          { label: "Text messages", value: 25, color: "#ff947e" },
          { label: "Voice calls", value: 20, color: "#ffd84d" }
        ],
        quantifier: "TWO IN TEN / 2 IN 10",
        translation: "On kişiden ikisi",
        percentage: "20%",
        sentences: [
          [{ text: "Two in ten teenagers prefer voice calls.", highlight: true }]
        ]
      }
    },
    {
      id: "simple-graphs-none",
      presenceSlide: true,
      noVisual: true,
      keepNextLabel: true,
      simpleGraph: {
        heading: "UNDERSTANDING SIMPLE GRAPHS",
        chartTitle: "Teens’ Communication Preferences",
        segments: [
          { label: "Social networks", value: 55, color: "#65e6b8" },
          { label: "Text messages", value: 25, color: "#ff947e" },
          { label: "Voice calls", value: 20, color: "#ffd84d" },
          { label: "Emails", value: 0, color: "#b79aff" }
        ],
        quantifier: "NONE",
        translation: "Hiçbiri",
        percentage: "0%",
        sentences: [
          [{ text: "None of the teenagers prefer emails.", highlight: true }]
        ]
      }
    },
    {
      id: "simple-graphs-practice",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        randomizeChoices: false,
        questions: [
          {
            promptLabel: "GRAPH PRACTICE · 1 / 8",
            graph: {
              segments: [
                { label: "Social networks", value: 50, color: "#65e6b8" },
                { label: "Voice calls", value: 50, color: "#ffd84d" }
              ],
              sentence: "Half of the teenagers prefer social networks.",
              question: "What percentage of teenagers prefer social networks?"
            },
            choices: ["70%","50%","0%"],
            answer: "50%"
          },
          {
            promptLabel: "GRAPH PRACTICE · 2 / 8",
            graph: {
              segments: [
                { label: "Social networks", value: 70, color: "#65e6b8" },
                { label: "Voice calls", value: 30, color: "#ffd84d" }
              ],
              sentence: "Teenagers prefer social networks most.",
              question: "What percentage of teenagers prefer social networks?"
            },
            choices: ["30%","0%","70%"],
            answer: "70%"
          },
          {
            promptLabel: "GRAPH PRACTICE · 3 / 8",
            graph: {
              segments: [
                { label: "Social networks", value: 75, color: "#65e6b8" },
                { label: "Voice calls", value: 25, color: "#ffd84d" }
              ],
              sentence: "Most of the teenagers prefer social networks.",
              question: "What percentage of teenagers prefer social networks?"
            },
            choices: ["75%","25%","0%"],
            answer: "75%"
          },
          {
            promptLabel: "GRAPH PRACTICE · 4 / 8",
            graph: {
              segments: [
                { label: "Social networks", value: 100, color: "#65e6b8" },
                { label: "Voice calls", value: 0, color: "#ffd84d" }
              ],
              sentence: "All teenagers prefer social networks.",
              question: "What percentage of teenagers prefer social networks?"
            },
            choices: ["0%","50%","100%"],
            answer: "100%"
          },
          {
            promptLabel: "GRAPH PRACTICE · 5 / 8",
            graph: {
              segments: [
                { label: "Social networks", value: 48, color: "#65e6b8" },
                { label: "Voice calls", value: 52, color: "#ffd84d" }
              ],
              sentence: "Nearly half of the teenagers prefer social networks.",
              question: "What percentage of teenagers prefer social networks?"
            },
            choices: ["62%","48%","20%"],
            answer: "48%"
          },
          {
            promptLabel: "GRAPH PRACTICE · 6 / 8",
            graph: {
              segments: [
                { label: "Social networks", value: 60, color: "#65e6b8" },
                { label: "Voice calls", value: 40, color: "#ffd84d" }
              ],
              sentence: "More than half of the teenagers prefer social networks.",
              question: "What percentage of teenagers prefer social networks?"
            },
            choices: ["40%","60%","0%"],
            answer: "60%"
          },
          {
            promptLabel: "GRAPH PRACTICE · 7 / 8",
            graph: {
              segments: [
                { label: "Social networks", value: 40, color: "#65e6b8" },
                { label: "Voice calls", value: 60, color: "#ffd84d" }
              ],
              sentence: "Less than half of the teenagers prefer social networks.",
              question: "What percentage of teenagers prefer social networks?"
            },
            choices: ["40%","60%","100%"],
            answer: "40%"
          },
          {
            promptLabel: "GRAPH PRACTICE · 8 / 8",
            graph: {
              segments: [
                { label: "Social networks", value: 0, color: "#65e6b8" },
                { label: "Voice calls", value: 100, color: "#ffd84d" }
              ],
              sentence: "None of the teenagers prefer social networks.",
              question: "What percentage of teenagers prefer social networks?"
            },
            choices: ["100%","30%","0%"],
            answer: "0%"
          }
        ]
      }
    },
    {
      id: "simple-graphs-summary",
      presenceSlide: true,
      noVisual: true,
      keepNextLabel: true,
      simpleGraph: {
        heading: "UNDERSTANDING SIMPLE GRAPHS · SUMMARY",
        summary: [
          ["ALL OF","Hepsi"],
          ["MOST OF","Çoğu"],
          ["HALF OF","Yarısı"],
          ["NEARLY HALF OF","Yaklaşık yarısı"],
          ["NEARLY QUARTER OF","Yaklaşık çeyreği"],
          ["NONE OF","Hiçbiri"],
          ["MORE THAN …","…den fazla"],
          ["LESS THAN …","…den az"],
          ["TWO IN TEN","On kişiden ikisi"],
          ["MOST","En çok"],
          ["LEAST","En az"]
        ]
      }
    },
    {
      id: "simple-graphs-true-false",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        advanceAfterWrong: true,
        randomizeChoices: false,
        questions: [
          {
            promptLabel: "READ THE GRAPH · 1 / 10",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "Nearly 30% of teenagers prefer sending text messages.",
            choices: ["True", "False"],
            answer: "True"
          },
          {
            promptLabel: "READ THE GRAPH · 2 / 10",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "Voice calls are teenagers’ favourite communication method.",
            choices: ["True", "False"],
            answer: "False"
          },
          {
            promptLabel: "READ THE GRAPH · 3 / 10",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "None of the teenagers prefer sending emails.",
            choices: ["True", "False"],
            answer: "False"
          },
          {
            promptLabel: "READ THE GRAPH · 4 / 10",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "About two in ten teenagers prefer voice calls.",
            choices: ["True", "False"],
            answer: "True"
          },
          {
            promptLabel: "READ THE GRAPH · 5 / 10",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "Nearly half of teenagers prefer social networks.",
            choices: ["True", "False"],
            answer: "True"
          },
          {
            promptLabel: "READ THE GRAPH · 6 / 10",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "More than 30% of teenagers prefer texting.",
            choices: ["True", "False"],
            answer: "False"
          },
          {
            promptLabel: "READ THE GRAPH · 7 / 10",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "Sending emails is the least popular communication method.",
            choices: ["True", "False"],
            answer: "True"
          },
          {
            promptLabel: "READ THE GRAPH · 8 / 10",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "All teenagers prefer using social networks.",
            choices: ["True", "False"],
            answer: "False"
          },
          {
            promptLabel: "READ THE GRAPH · 9 / 10",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "Fewer than three in ten teenagers prefer text messages.",
            choices: ["True", "False"],
            answer: "True"
          },
          {
            promptLabel: "READ THE GRAPH · 10 / 10",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "Text messages are less popular than emails.",
            choices: ["True", "False"],
            answer: "False"
          }
        ]
      }
    },
    {
      id: "simple-graphs-multiple-choice",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        randomizeChoices: false,
        questions: [
          {
            promptLabel: "READ THE GRAPH · 1 / 5",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "Teens prefer .......... the least.",
            choices: ["sending emails","using social networks","making voice calls","sending text messages"],
            answer: "sending emails"
          },
          {
            promptLabel: "READ THE GRAPH · 2 / 5",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "Teens prefer .......... the most.",
            choices: ["sending text messages","making voice calls","using social networks","sending emails"],
            answer: "using social networks"
          },
          {
            promptLabel: "READ THE GRAPH · 3 / 5",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "22% of teens prefer .......... .",
            choices: ["using social networks","sending emails","sending text messages","making voice calls"],
            answer: "making voice calls"
          },
          {
            promptLabel: "READ THE GRAPH · 4 / 5",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "Approximately 30% of teens prefer .......... .",
            choices: ["making voice calls","sending text messages","using social networks","sending emails"],
            answer: "sending text messages"
          },
          {
            promptLabel: "READ THE GRAPH · 5 / 5",
            graph: {
              showValues: true, type: "pie",
              segments: [
                { label: "Social networks", value: 46, color: "#65e6b8" },
                { label: "Text messages", value: 27, color: "#ff947e" },
                { label: "Voice calls", value: 22, color: "#ffd84d" },
                { label: "Emails", value: 5, color: "#b79aff" }
              ]
            },
            graphStatement: "Nearly 5 in 10 teens prefer .......... .",
            choices: ["sending text messages","using social networks","making voice calls","sending emails"],
            answer: "using social networks"
          }
        ]
      }
    },
    {
      id: "simple-graphs-free-time-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "READ THE GRAPH",
        graph: {
          chartTitle: "Teens’ Free-Time Preferences",
          showValues: true, type: "pie",
          segments: [
            { label: "Playing basketball", value: 44, color: "#65e6b8" },
            { label: "Riding a bike", value: 31, color: "#ff947e" },
            { label: "Taking photos", value: 18, color: "#ffd84d" },
            { label: "Playing chess", value: 7, color: "#b79aff" }
          ]
        },
        graphStatement: "Which one is TRUE?",
        randomizeChoices: false,
        choices: [
          "All teens play basketball with their friends.",
          "Teens enjoy riding a bike more than playing chess.",
          "Less than 7% of the teens prefer riding a bike.",
          "More than 35% of the teens prefer riding a bike."
        ],
        answer: "Teens enjoy riding a bike more than playing chess."
      }
    },
    {
      id: "simple-graphs-free-time-least-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "READ THE GRAPH",
        graph: {
          chartTitle: "Teens’ Free-Time Preferences",
          showValues: true, type: "pie",
          segments: [
            { label: "Playing basketball", value: 44, color: "#65e6b8" },
            { label: "Riding a bike", value: 31, color: "#ff947e" },
            { label: "Taking photos", value: 18, color: "#ffd84d" },
            { label: "Playing chess", value: 7, color: "#b79aff" }
          ]
        },
        graphStatement: "Teens enjoy ----- the least.",
        randomizeChoices: false,
        choices: [
          "playing basketball",
          "taking photos",
          "playing chess",
          "riding a bike"
        ],
        answer: "playing chess"
      }
    },
    {
      id: "simple-graphs-equivalent-meaning-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "Which option has the same meaning as the sentence above?",
        targetExpression: "“48% of the teens prefer sending text messages.”",
        randomizeChoices: false,
        choices: [
          "Nearly half of the teens send and receive text messages.",
          "Half of teens enjoy sending emails.",
          "3 in 10 teens would rather send emails.",
          "More than half of the teens send and receive emails."
        ],
        answer: "Nearly half of the teens send and receive text messages."
      }
    },
    {
      id: "simple-graphs-teog-2016-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "2016 Nisan TEOG",
        graph: {
          chartTitle: "Teens’ Communication Preferences",
          showValues: true, type: "pie",
          segments: [
            { label: "Text message", value: 55, color: "#65e6b8" },
            { label: "Phone call", value: 20, color: "#ffd84d" },
            { label: "Email", value: 15, color: "#ff947e" },
            { label: "Fax message", value: 10, color: "#b79aff" }
          ]
        },
        graphStatement: "13. Teens ..... .",
        randomizeChoices: false,
        choices: [
          "make phone calls most",
          "never prefer sending fax messages",
          "enjoy sending text messages the least",
          "send text messages more than emails"
        ],
        answer: "send text messages more than emails"
      }
    },
    {
      id: "simple-graphs-internet-habits-test",
      presenceSlide: true,
      keepNextLabel: true,
      testQuestion: {
        promptLabel: "READ THE GRAPH",
        graph: {
          chartTitle: "Teens’ Internet Habits",
          showValues: true, type: "pie",
          segments: [
            { label: "making new friends and live chats", value: 50, color: "#65e6b8" },
            { label: "searching for information", value: 25, color: "#ffd84d" },
            { label: "doing online shopping", value: 15, color: "#ff947e" },
            { label: "watching movies and videos", value: 10, color: "#b79aff" }
          ]
        },
        graphStatement: "Verilen grafiğe göre aşağıdakilerden hangisi doğrudur?",
        randomizeChoices: false,
        choices: [
          "All teens use the Net to research a topic.",
          "Most of the teens do shopping on the Net.",
          "Teens never watch movies and videos on the Net.",
          "Half of the teens prefer communicating with people on the Net."
        ],
        answer: "Half of the teens prefer communicating with people on the Net."
      }
    },
    {
      "id": "concern-sympathy-expressions",
      "presenceSlide": true,
      "noVisual": true,
      "suggestionDialogue": {
        "heading": "EXPRESSING CONCERN AND SYMPATHY",
        "layoutClass": "phone-expressions",
        "intro": "Let's review some expressions we use to share someone's feelings and show understanding.",
        "bubbles": [
          {
            "type": "question",
            "text": "I'm sorry to hear that."
          },
          {
            "type": "question",
            "text": "I hope you feel better soon."
          },
          {
            "type": "question",
            "text": "Oh, you poor thing."
          },
          {
            "type": "question",
            "text": "Poor you."
          },
          {
            "type": "question",
            "text": "Is there anything I can do to help?"
          },
          {
            "type": "question",
            "text": "Get well soon."
          },
          {
            "type": "question",
            "text": "I can understand how you feel."
          },
          {
            "type": "question",
            "text": "That's so bad."
          }
        ]
      }
    },
    {
      "id": "concern-sympathy-cycling-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which sentence completes the conversation?",
        "lines": [
          {
            "speaker": "Hannah",
            "speakerImage": "images/common/students/hannah.webp",
            "text": "We are going cycling. How about joining us?"
          },
          {
            "speaker": "Emma",
            "speakerImage": "images/common/students/emma.webp",
            "text": "I'm sorry but my mother feels bad, so I have to stay at home."
          },
          {
            "speaker": "Hannah",
            "speakerImage": "images/common/students/hannah.webp",
            "text": "_____. I'm sorry to hear that."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "Sounds great.",
          "I'm glad to hear that.",
          "That's so bad.",
          "See you later."
        ],
        "answer": "That's so bad."
      }
    },
    {
      "id": "concern-sympathy-ministry-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which sentence completes the conversation?",
        "lines": [
          {
            "speaker": "Chloe",
            "speakerImage": "images/common/students/chloe.webp",
            "text": "I argued with my best friend last week."
          },
          {
            "speaker": "Emma",
            "speakerImage": "images/common/students/emma.webp",
            "text": "Oh really? _____."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "I'm sorry to hear that",
          "I guess you can come",
          "I hope to see you there",
          "I'm sure you are available"
        ],
        "answer": "I'm sorry to hear that"
      }
    },
    {
      "id": "concern-sympathy-mia-zoe-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which sentence completes the conversation?",
        "lines": [
          {
            "speaker": "Mia",
            "speakerImage": "images/common/students/mia.webp",
            "text": "I have a bad cold and can't read my book today."
          },
          {
            "speaker": "Zoe",
            "speakerImage": "images/common/students/zoe.webp",
            "text": "_____."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "That sounds like fun.",
          "Poor you. I hope you feel better soon.",
          "Thanks for inviting me.",
          "I'm glad to hear that."
        ],
        "answer": "Poor you. I hope you feel better soon."
      }
    },
    {
      "id": "concern-sympathy-ava-emma-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which sentence completes the conversation?",
        "lines": [
          {
            "speaker": "Ava",
            "speakerImage": "images/common/students/ava.webp",
            "text": "My dog, Buddy, is ill. I'm worried about him."
          },
          {
            "speaker": "Emma",
            "speakerImage": "images/common/students/emma.webp",
            "text": "I'm sorry to hear that. _____"
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "Is there anything I can do to help?",
          "Would you like to watch a comedy?",
          "That sounds great!",
          "I'm happy to hear that."
        ],
        "answer": "Is there anything I can do to help?"
      }
    },
    {
      "id": "concern-sympathy-olivia-ella-test",
      "presenceSlide": true,
      "keepNextLabel": true,
      "testQuestion": {
        "promptLabel": "Which sentence completes the conversation?",
        "lines": [
          {
            "speaker": "Olivia",
            "speakerImage": "images/common/students/olivia.webp",
            "text": "I lost my camera and feel really upset."
          },
          {
            "speaker": "Ella",
            "speakerImage": "images/common/students/ella.webp",
            "text": "Oh, you poor thing. _____"
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "Congratulations!",
          "I'm sure you had a great time.",
          "That sounds exciting!",
          "I can understand how you feel."
        ],
        "answer": "I can understand how you feel."
      }
    },
    {
      "id": "phone-inquiries-question-words-1",
      "presenceSlide": true,
      "sequentialBoxes": {
        "interaction": "inquiry-reveal",
        "layoutClass": "inquiry-reveal-large",
        "questionBubbleOnClick": true,
        "items": [
          {
            "word": "Who",
            "example": "Who is calling?",
            "tone": "#e9f900",
            "textColor": "#0b1e52"
          },
          {
            "word": "What",
            "example": "What do you need to write emails?",
            "tone": "#1515ae"
          },
          {
            "word": "What time",
            "example": "What time is it going to start?",
            "tone": "#ee1b13"
          },
          {
            "word": "When",
            "example": "When did people first start sending emails?",
            "tone": "#f6c68f",
            "textColor": "#0b1e52"
          }
        ]
      }
    },
    {
      "id": "phone-inquiries-question-words-2",
      "presenceSlide": true,
      "sequentialBoxes": {
        "interaction": "inquiry-reveal",
        "layoutClass": "inquiry-reveal-large",
        "questionBubbleOnClick": true,
        "items": [
          {
            "word": "Where",
            "example": "Where do you go on holidays?",
            "tone": "#118f08"
          },
          {
            "word": "Why",
            "example": "Why do you prefer texting?",
            "tone": "#7a0d0d"
          },
          {
            "word": "How",
            "example": "How do you keep in touch with your friends?",
            "tone": "#1515ae"
          },
          {
            "word": "How many",
            "example": "How many messages do you send a month?",
            "tone": "#99128c"
          }
        ]
      }
    },
    {
      "id": "phone-inquiries-examples-1",
      "presenceSlide": true,
      "sequentialBoxes": {
        "interaction": "inquiry-reveal",
        "layoutClass": "inquiry-reveal-large inquiry-reveal-compact",
        "answerOnly": true,
        "items": [
          {
            "word": "Can I ask who is calling?",
            "meaning": "(Kimin aradığını öğrenebilir miyim?)",
            "example": "This is Jack speaking.",
            "tone": "#e9f900",
            "textColor": "#0b1e52"
          },
          {
            "word": "Would you like to leave a message?",
            "meaning": "(Mesaj bırakmak ister misiniz?)",
            "example": "No, that's OK. I'll call back later.",
            "tone": "#1515ae"
          },
          {
            "word": "Could you tell him to call me back?",
            "meaning": "(Beni aramasını söyler misin?)",
            "example": "Sure. I'll ask him to call you back.",
            "tone": "#ee1b13"
          },
          {
            "word": "Can you call again later?",
            "meaning": "(Sonra arayabilir misiniz?)",
            "example": "Of course. I'll call back this evening.",
            "tone": "#f6c68f",
            "textColor": "#0b1e52"
          }
        ]
      }
    },
    {
      "id": "phone-inquiries-examples-2",
      "presenceSlide": true,
      "sequentialBoxes": {
        "interaction": "inquiry-reveal",
        "layoutClass": "inquiry-reveal-large inquiry-reveal-compact",
        "answerOnly": true,
        "items": [
          {
            "word": "Can you tell him Jack called?",
            "meaning": "(Jack aradı der misiniz?)",
            "example": "Sure, I'll let him know.",
            "tone": "#118f08"
          },
          {
            "word": "Can I take your name and number?",
            "meaning": "(Adınızı ve numaranızı alabilir miyim?)",
            "example": "This is Jack calling. My number is 555 0102.",
            "tone": "#7a0d0d"
          },
          {
            "word": "Can you give me the address?",
            "meaning": "(Adresi verebilir misin?)",
            "example": "Sure. I'll send you the address in a text message.",
            "tone": "#1515ae"
          },
          {
            "word": "How do you keep in touch with your friends?",
            "meaning": "(Arkadaşlarınla nasıl haberleşirsin?)",
            "example": "I usually use social networks.",
            "tone": "#99128c"
          }
        ]
      }
    },
    {
      "id": "phone-inquiries-keep-in-touch-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which word completes the conversation?",
        "lines": [
          {
            "speaker": "Benjamin",
            "speakerImage": "images/common/students/benjamin.webp",
            "text": "_____ do you keep in touch with your friend?"
          },
          {
            "speaker": "Jack",
            "speakerImage": "images/common/students/jack.webp",
            "text": "I send text messages."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "How",
          "What",
          "Why",
          "When"
        ],
        "answer": "How"
      }
    },
    {
      "id": "phone-inquiries-caller-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which word completes the conversation?",
        "lines": [
          {
            "speaker": "Sophie",
            "speakerImage": "../olivias_movie_memories/assets/portraits/sophie.webp",
            "text": "_____ is calling?"
          },
          {
            "speaker": "Hannah",
            "speakerImage": "images/common/students/hannah.webp",
            "text": "This is Hannah."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "Where",
          "Why",
          "Who",
          "How"
        ],
        "answer": "Who"
      }
    },
    {
      "id": "phone-inquiries-start-time-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which word completes the conversation?",
        "lines": [
          {
            "speaker": "Ava",
            "speakerImage": "images/common/students/ava.webp",
            "text": "_____ is it going to start?"
          },
          {
            "speaker": "Chloe",
            "speakerImage": "images/common/students/chloe.webp",
            "text": "At 4."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "Where",
          "What",
          "Why",
          "What time"
        ],
        "answer": "What time"
      }
    },
    {
      "id": "phone-inquiries-letter-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which word completes the conversation?",
        "lines": [
          {
            "speaker": "Mia",
            "speakerImage": "images/common/students/mia.webp",
            "text": "_____ do you need to write a letter?"
          },
          {
            "speaker": "Zoe",
            "speakerImage": "images/common/students/zoe.webp",
            "text": "A pencil and some paper."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "Where",
          "What",
          "When",
          "Why"
        ],
        "answer": "What"
      }
    },
    {
      "id": "phone-inquiries-first-text-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which word completes the conversation?",
        "lines": [
          {
            "speaker": "Ella",
            "speakerImage": "images/common/students/ella.webp",
            "text": "_____ did you first send a text message?"
          },
          {
            "speaker": "Olivia",
            "speakerImage": "images/common/students/olivia.webp",
            "text": "In 2025."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "Where",
          "Why",
          "When",
          "How"
        ],
        "answer": "When"
      }
    },
    {
      "id": "phone-inquiries-texting-reason-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which word completes the conversation?",
        "lines": [
          {
            "speaker": "Emma",
            "speakerImage": "images/common/students/emma.webp",
            "text": "_____ do you prefer sending text messages?"
          },
          {
            "speaker": "Hannah",
            "speakerImage": "images/common/students/hannah.webp",
            "text": "It is fast and fun."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "Where",
          "Why",
          "Who",
          "What time"
        ],
        "answer": "Why"
      }
    },
    {
      "id": "phone-inquiries-number-of-people-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which word completes the conversation?",
        "lines": [
          {
            "speaker": "Noah",
            "speakerImage": "images/common/students/noah.webp",
            "text": "_____ people in your class prefer writing letters to communicate?"
          },
          {
            "speaker": "Victoria",
            "speakerImage": "images/common/students/victoria.webp",
            "text": "Less than ten people because text messages are more popular."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "How often",
          "How many",
          "Where",
          "Why"
        ],
        "answer": "How many"
      }
    },
    {
      "id": "phone-inquiries-greeting-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which word completes the conversation?",
        "lines": [
          {
            "speaker": "Ella",
            "speakerImage": "images/common/students/ella.webp",
            "text": "_____ is it going?"
          },
          {
            "speaker": "Olivia",
            "speakerImage": "images/common/students/olivia.webp",
            "text": "Great, fine."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "What",
          "Why",
          "How",
          "Where"
        ],
        "answer": "How"
      }
    },
    {
      "id": "phone-inquiries-message-notes-test",
      "presenceSlide": true,
      "testQuestion": {
        "promptLabel": "Which word completes the conversation?",
        "lines": [
          {
            "speaker": "Hannah",
            "speakerImage": "images/common/students/hannah.webp",
            "text": "_____ leaves message notes in your family?"
          },
          {
            "speaker": "Emma",
            "speakerImage": "images/common/students/emma.webp",
            "text": "My mother."
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "What",
          "Who",
          "Why",
          "How"
        ],
        "answer": "Who"
      }
    },
    {
      "id": "phone-inquiries-situation-address",
      "presenceSlide": true,
      "keepNextLabel": true,
      "testQuestion": {
        "promptLabel": "SITUATION",
        "lines": [
          {
            "speaker": "Situation",
            "text": "Your friend, Chloe, invites you to a tea party at her home, but you don't know the address. What do you say?"
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "Can I ask who is calling?",
          "Can I leave a message?",
          "Can you give me the address?"
        ],
        "answer": "Can you give me the address?"
      }
    },
    {
      "id": "phone-inquiries-situation-caller-name",
      "presenceSlide": true,
      "keepNextLabel": true,
      "testQuestion": {
        "promptLabel": "SITUATION",
        "lines": [
          {
            "speaker": "Situation",
            "text": "Somebody wants to talk to your brother, but you don't know the caller's name. What do you say?"
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "Could I speak to Emma?",
          "Can I ask who is calling?",
          "Can you tell me your number?"
        ],
        "answer": "Can I ask who is calling?"
      }
    },
    {
      "id": "phone-inquiries-situation-not-well",
      "presenceSlide": true,
      "keepNextLabel": true,
      "testQuestion": {
        "promptLabel": "SITUATION",
        "lines": [
          {
            "speaker": "Situation",
            "text": "You call your friend, Olivia, to meet up, but she is not feeling well. What do you say?"
          }
        ],
        "randomizeChoices": false,
        "choices": [
          "I'm sorry to hear that.",
          "I'll call back later.",
          "Hang on a minute, please."
        ],
        "answer": "I'm sorry to hear that."
      }
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(followingPhoneConversationsGrade8Function);
