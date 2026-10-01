(() => {
  const curriculum = Object.freeze({
    grade: 8,
    unit: 1
  });

  const questionHighlights = Object.freeze({
    "g8u1-friendship-01": ["CANNOT"],
    "g8u1-friendship-02": ["correctly"],
    "g8u1-friendship-03": ["mean"],
    "g8u1-friendship-04": ["correctly"],
    "g8u1-friendship-05": ["best describes"],
    "g8u1-friendship-06": ["similar"],
    "g8u1-friendship-07": ["best follows"],
    "g8u1-personality-01": ["determined"],
    "g8u1-ara-01": ["completes"],
    "g8u1-ara-02": ["opening question"],
    "g8u1-ara-03": ["suggestion"],
    "g8u1-ara-04": ["best reply"],
    "g8u1-ara-05": ["do"],
    "g8u1-ara-06": ["suitable reason"],
    "g8u1-ara-07": ["make a suggestion"],
    "g8u1-ara-08": ["accepts"],
    "g8u1-ara-09": ["should you say"],
    "g8u1-ara-10": ["express"],
    "g8u1-ara-11": ["alternative"],
    "g8u1-ara-12": ["should you say"],
    "g8u1-ara-13": ["politely","refusal"],
    "g8u1-ara-14": ["most suitable"],
    "g8u1-ara-15": ["classified"],
    "g8u1-ara-16": ["first"],
    "g8u1-ara-17": ["polite and logical"],
    "g8u1-ara-18": ["suggestion"],
    "g8u1-ara-19": ["refuses","without giving a reason"],
    "g8u1-ara-20": ["respond"],
    "g8u1-ara-21": ["function"],
    "g8u1-ara-22": ["refusal","clear reason"],
    "g8u1-ara-23": ["invite"],
    "g8u1-ara-24": ["refusal polite"],
    "g8u1-ara-25": ["first"],
    "g8u1-ara-26": ["classified"],
    "g8u1-ara-27": ["logical excuse"],
    "g8u1-ara-28": ["invitation"],
    "g8u1-ara-29": ["acceptance"],
    "g8u1-ara-30": ["final response"],
    "g8u1-friendship-priority-01": ["only good things"],
    "g8u1-friendship-priority-02": ["positive"],
    "g8u1-friendship-priority-03": ["NOT invite"],
    "g8u1-friendship-chat-01": ["Lucas"],
    "g8u1-invitation-card-01": ["cannot be answered"],
    "g8u1-personality-table-01": ["NOT true"],
    "g8u1-football-invitation-01": ["completes"],
    "g8u1-true-friends-dialogue-01": ["NOT complete"],
    "g8u1-emma-friend-opinions-01": ["bad"],
    "g8u1-similar-friend-opinions-01": ["similar"],
  });

  const question = (data) => Object.freeze({ ...curriculum, ...data, questionHighlights: Object.freeze(data.questionHighlights || questionHighlights[data.id] || []), options: Object.freeze(data.options) });

  window.TEAM_CHALLENGERS_QUESTIONS = Object.freeze([
    question({
      id: "g8u1-friendship-01", difficulty: 2, template: "dialogue", category: "Friendship",
      lines: [{ speaker: "Ethan", text: "David always keeps his promises. I can ____ him." }],
      question: "Which option CANNOT complete Ethan's sentence?",
      options: ["trust", "count on", "rely on", "apologize"], answer: 3
    }),
    question({
      id: "g8u1-friendship-02", difficulty: 1, template: "dialogue", category: "Friendship",
      lines: [{ speaker: "Ella", text: "Olivia and I both enjoy music and art. We have a lot in ____." }],
      question: "Which option completes Ella's sentence correctly?",
      options: ["common", "together", "reliable", "secrets"], answer: 0
    }),
    question({
      id: "g8u1-friendship-03", difficulty: 2, template: "dialogue", category: "Friendship",
      lines: [{ speaker: "Zoe", text: "Mia and I rarely argue because we listen to each other." }],
      question: "What does Zoe mean?",
      options: ["They get on well.", "They tell lies.", "They have nothing in common.", "They never support each other."], answer: 0
    }),
    question({
      id: "g8u1-friendship-04", difficulty: 1, template: "dialogue", category: "Friendship",
      lines: [{ speaker: "Jack", text: "Benjamin always ____ me up when I have a problem." }],
      question: "Which option completes the sentence correctly?",
      options: ["backs", "counts", "apologizes", "accepts"], answer: 0
    }),
    question({
      id: "g8u1-friendship-05", difficulty: 1, template: "situation", category: "Friendship",
      situation: "Hannah is planning a school camping event. Emma stays after school to help her organize it.",
      question: "Which sentence best describes Emma as a friend?",
      options: ["She supports Hannah.", "She tells Hannah lies.", "She never keeps promises.", "She always argues with Hannah."], answer: 0
    }),
    question({
      id: "g8u1-friendship-06", difficulty: 2, template: "friendOpinions", category: "Friendship",
      opinions: [{ speaker: "Ava", text: "Chloe always keeps her promises." }, { speaker: "Benjamin", text: "Jack and I have a lot in common. We both enjoy outdoor activities." }, { speaker: "Noah", text: "Victoria helps me solve difficult problems." }, { speaker: "Ella", text: "Olivia and I rarely argue." }],
      question: "Who talks about having similar likes, dislikes and interests?",
      options: ["Ava", "Benjamin", "Noah", "Ella"], optionPortraits: ["Ava", "Benjamin", "Noah", "Ella"], answer: 1
    }),
    question({
      id: "g8u1-friendship-07", difficulty: 2, template: "writingExercise", category: "Friendship",
      speaker: "Elena",
      instruction: "Write two sentences about a close friend. Mention one thing you have in common and one quality that makes your friendship strong.",
      question: "Which paragraph best follows Elena's instruction?",
      options: ["Olivia and Ella both enjoy music and art. Ella is cheerful, and they always get on well.", "Olivia is creative. She is going to the cinema after school.", "Olivia and Ella both enjoy music and art. They never help each other.", "Ella is cheerful. Olivia doesn't know what she likes."], answer: 0
    }),
    question({
      id: "g8u1-personality-01", difficulty: 2, template: "personalityProfiles", category: "Personality",
      profiles: [
        { speaker: "Ava", text: "I always consider other people's feelings before I speak." },
        { speaker: "Daniel", text: "I often drop things and bump into chairs." },
        { speaker: "Ethan", text: "I never give up, even when a task is difficult." },
        { speaker: "Ella", text: "I enjoy meeting new people and talking to them." }
      ],
      question: "Which student is determined?",
      options: ["Ava", "Daniel", "Ethan", "Ella"], optionPortraits: ["Ava", "Daniel", "Ethan", "Ella"], answer: 2
    }),
    question({
      id: "g8u1-ara-01", difficulty: 1, template: "dialogue", category: "Accepting",
      lines: [{ speaker: "Olivia", text: "Would you like to see a movie with me on Saturday?" }, { speaker: "Ella", text: "____ I love going to the cinema." }],
      question: "Which response completes the dialogue?",
      options: ["I'm sorry, but I can't.", "Great idea!", "Maybe some other time.", "I don't really enjoy it."], answer: 1
    }),
    question({
      id: "g8u1-ara-02", difficulty: 2, template: "sequence", category: "Before a Suggestion",
      lines: [{ speaker: "Emma", text: "____" }, { speaker: "Hannah", text: "Nothing special. Why do you ask?" }, { speaker: "Emma", text: "How about baking some cookies together?" }],
      question: "Which opening question makes the conversation flow naturally?",
      options: ["Do you like cookies?", "Why don't you bake?", "Are you doing anything on Sunday?", "What did you bake yesterday?"], answer: 2
    }),
    question({
      id: "g8u1-ara-03", difficulty: 1, template: "dialogue", category: "Making Suggestions",
      lines: [{ speaker: "Victoria", text: "Are you doing anything after school?" }, { speaker: "Zoe", text: "No, I don't have any plans. Why?" }, { speaker: "Victoria", text: "____" }],
      question: "Which suggestion completes the dialogue naturally?",
      options: ["I was busy yesterday.", "Do you have a computer?", "You should finish it alone.", "How about solving a coding puzzle together?"], answer: 3
    }),
    question({
      id: "g8u1-ara-04", difficulty: 1, template: "situation", category: "Refusing Politely",
      situation: "Your friend invites you to a concert, but you must finish your science project tonight.",
      question: "What is the best reply?",
      options: ["I'm sorry, but I can't. I have to finish my project.", "That sounds fun! What time?", "Why not? Sure.", "I can't refuse this invitation."], answer: 0
    }),
    question({
      id: "g8u1-ara-05", difficulty: 1, template: "classification", category: "Language Function", statement: "Would you like to come to my birthday party?",
      question: "What does the speaker do?",
      options: ["Accepts an invitation", "Makes an excuse", "Makes an invitation", "Apologizes for being late"], answer: 2
    }),
    question({
      id: "g8u1-ara-06", difficulty: 1, template: "dialogue", category: "Giving Reasons",
      lines: [{ speaker: "Benjamin", text: "Let's go skateboarding after school." }, { speaker: "Noah", text: "I'd like to, but I can't because ____." }],
      question: "Which option is a suitable reason?",
      options: ["that would be great", "I have to study for the maths exam", "why not", "I can't refuse"], answer: 1
    }),
    question({
      id: "g8u1-ara-07", difficulty: 1, template: "sequence", category: "Conversation Flow",
      lines: [{ speaker: "David", text: "What are you doing on Saturday?" }, { speaker: "Ethan", text: "Nothing special. Why do you ask?" }, { speaker: "David", text: "____" }],
      question: "Which line should David say next to make a suggestion?",
      options: ["I was at home yesterday.", "You don't like music.", "Nothing special, either.", "Why don't we go to a rock concert?"], answer: 3
    }),
    question({
      id: "g8u1-ara-08", difficulty: 2, template: "dialogue", category: "Accepting",
      lines: [{ speaker: "Lucas", text: "Do you want to play football with us?" }, { speaker: "Jack", text: "I'm busy, but ____." }],
      question: "Which phrase shows that Jack accepts the invitation?",
      options: ["I can't refuse", "maybe some other time", "I'm not into football", "I have another plan"], answer: 0
    }),
    question({
      id: "g8u1-ara-09", difficulty: 1, template: "situation", category: "Making Invitations",
      situation: "You know that your friend enjoys stargazing. You want to invite her to watch the stars tonight.",
      question: "What should you say?",
      options: ["Do you watch the stars every night?", "I don't feel well tonight.", "Would you like to watch the stars together?", "Thanks for inviting me."], answer: 2
    }),
    question({
      id: "g8u1-ara-10", difficulty: 2, template: "classification", category: "Making Excuses", statement: "I'm going to visit my grandparents this weekend.",
      question: "In response to an invitation, what does this sentence express?",
      options: ["A suggestion", "A reason for refusing", "An acceptance", "A request for details"], answer: 1
    }),
    question({
      id: "g8u1-ara-11", difficulty: 1, template: "dialogue", category: "Offering an Alternative",
      lines: [{ speaker: "Mia", text: "Shall we watch an action film?" }, { speaker: "Chloe", text: "I don't really enjoy action films. ____" }],
      question: "Which response asks for an alternative?",
      options: ["That would be great!", "I can't refuse.", "Let's watch it now.", "Do we have another choice?"], answer: 3
    }),
    question({
      id: "g8u1-ara-12", difficulty: 1, template: "situation", category: "Making Suggestions",
      situation: "Your friend is free after school and you want to suggest playing table tennis together.",
      question: "What should you say?",
      options: ["Let's play table tennis after school.", "Did you play table tennis yesterday?", "I have to play table tennis.", "Thanks for inviting me to play."], answer: 0
    }),
    question({
      id: "g8u1-ara-13", difficulty: 1, template: "dialogue", category: "Apologizing",
      lines: [{ speaker: "Ava", text: "Would you like to help me at the animal shelter?" }, { speaker: "Emma", text: "____ I have to help my mother in the kitchen." }],
      question: "Which phrase politely introduces Emma's refusal?",
      options: ["Of course.", "That sounds amazing.", "I'm sorry, but I can't.", "Why not?"], answer: 2
    }),
    question({
      id: "g8u1-ara-14", difficulty: 2, template: "situation", category: "Refusing",
      situation: "A friend asks you to join a barbecue. You dislike barbecue parties and want to refuse without inventing another plan.",
      question: "Which reply is the most suitable?",
      options: ["I'm going to visit my grandparents.", "No, thanks. I don't really enjoy barbecue parties.", "That would be great!", "Why don't we have a barbecue?"], answer: 1
    }),
    question({
      id: "g8u1-ara-15", difficulty: 2, template: "classification", category: "Accepting", statement: "I'm busy, but I can't refuse.",
      question: "How should this response be classified?",
      options: ["Making a suggestion", "Refusing with an excuse", "Checking availability", "Accepting"], answer: 3
    }),
    question({
      id: "g8u1-ara-16", difficulty: 2, template: "dialogue", category: "Checking Availability",
      lines: [{ speaker: "Victoria", text: "____" }, { speaker: "Emma", text: "Not at all. Why?" }, { speaker: "Victoria", text: "Would you like to work on a coding project together?" }],
      question: "Which question should Victoria ask first?",
      options: ["Are you busy on Saturday afternoon?", "Why are you busy?", "Do you enjoy coding projects?", "Did you finish the project?"], answer: 0
    }),
    question({
      id: "g8u1-ara-17", difficulty: 2, template: "sequence", category: "Conversation Flow",
      lines: [{ speaker: "Daniel", text: "Do you have any plans after school?" }, { speaker: "David", text: "I'm going to visit my grandparents. Why?" }, { speaker: "Daniel", text: "I wanted to invite you to play basketball." }, { speaker: "David", text: "____" }],
      question: "Which final line is polite and logical?",
      options: ["Great idea! I'll be there.", "I don't have any plans.", "Thanks for inviting me. Maybe some other time.", "Let's visit them together."], answer: 2
    }),
    question({
      id: "g8u1-ara-18", difficulty: 1, template: "dialogue", category: "Making Suggestions",
      lines: [{ speaker: "Daniel", text: "The weather will be great on Sunday." }, { speaker: "David", text: "Yes, and I don't have any plans." }, { speaker: "Daniel", text: "____" }],
      question: "Which line is an appropriate suggestion?",
      options: ["I went hiking last Sunday.", "Why don't we go hiking?", "Are you hiking every day?", "Thanks for the invitation."], answer: 1
    }),
    question({
      id: "g8u1-ara-19", difficulty: 2, template: "dialogue", category: "Refusing",
      lines: [{ speaker: "Hannah", text: "How about cycling by the lake tomorrow?" }, { speaker: "Zoe", text: "____" }],
      question: "Which answer refuses the suggestion without giving a reason?",
      options: ["That sounds fun!", "I'm going to study for an exam.", "Why not? Sure.", "I'd like to, but I can't."], answer: 3
    }),
    question({
      id: "g8u1-ara-20", difficulty: 1, template: "situation", category: "Accepting",
      situation: "Your friend invites you to a photography exhibition. You are free and very interested in photography.",
      question: "How should you respond?",
      options: ["That would be great!", "I'm sorry, but I can't.", "I'm not into photography.", "Maybe some other time."], answer: 0
    }),
    question({
      id: "g8u1-ara-21", difficulty: 1, template: "classification", category: "Making Suggestions", statement: "Shall we meet after four?",
      question: "What is the function of this sentence?",
      options: ["Giving a reason", "Refusing", "Making a suggestion", "Accepting"], answer: 2
    }),
    question({
      id: "g8u1-ara-22", difficulty: 1, template: "dialogue", category: "Refusing with a Reason",
      lines: [{ speaker: "Chloe", text: "Would you like to come to the dance show tonight?" }, { speaker: "Mia", text: "I'd love to, but ____." }],
      question: "Which option completes the refusal with a clear reason?",
      options: ["that sounds fun", "my favourite author's book signing is tonight", "why not", "I can't refuse"], answer: 1
    }),
    question({
      id: "g8u1-ara-23", difficulty: 1, template: "situation", category: "Making Invitations",
      situation: "You are going to the school festival with your friends and want Noah to come with you.",
      question: "How do you invite him?",
      options: ["Are you at the school festival?", "Why did you miss the festival?", "I enjoyed the school festival.", "Would you like to join us?"], answer: 3
    }),
    question({
      id: "g8u1-ara-24", difficulty: 1, template: "dialogue", category: "Polite Refusal",
      lines: [{ speaker: "Benjamin", text: "We are going to a concert on Sunday. Would you like to join us?" }, { speaker: "Noah", text: "I have to study for an exam. ____" }],
      question: "Which closing phrase makes Noah's refusal polite?",
      options: ["Thanks for inviting me. Maybe some other time.", "I can't refuse your invitation.", "That sounds great. See you there.", "Let's go to the concert."], answer: 0
    }),
    question({
      id: "g8u1-ara-25", difficulty: 2, template: "situation", category: "Checking Availability",
      situation: "You want to suggest going camping with a friend this weekend. Before making the suggestion, you need to learn whether your friend is free.",
      question: "What should you ask first?",
      options: ["Why don't we go camping?", "Do you enjoy camping?", "Do you have any plans this weekend?", "Where did you camp last year?"], answer: 2
    }),
    question({
      id: "g8u1-ara-26", difficulty: 1, template: "classification", category: "Refusing", statement: "I'm a bit busy. Maybe later.",
      question: "How should this response be classified?",
      options: ["Accepting", "Refusing with an excuse", "Making an invitation", "Asking about a plan"], answer: 1
    }),
    question({
      id: "g8u1-ara-27", difficulty: 1, template: "dialogue", category: "Giving Reasons",
      lines: [{ speaker: "Ethan", text: "Why don't we listen to the new rock album tonight?" }, { speaker: "Daniel", text: "I'm sorry, but I can't. ____" }],
      question: "Which sentence is a logical excuse?",
      options: ["Rock music sounds fun.", "Why not?", "I can't refuse.", "I have basketball practice tonight."], answer: 3
    }),
    question({
      id: "g8u1-ara-28", difficulty: 1, template: "dialogue", category: "Making Invitations",
      lines: [{ speaker: "Benjamin", text: "I am free after school." }, { speaker: "Noah", text: "Me too." }, { speaker: "Benjamin", text: "____" }],
      question: "Which invitation should Benjamin make?",
      options: ["Do you want to play chess?", "Did you play chess yesterday?", "Why are you studying chess?", "You don't enjoy chess."], answer: 0
    }),
    question({
      id: "g8u1-ara-29", difficulty: 1, template: "dialogue", category: "Accepting",
      lines: [{ speaker: "Ella", text: "Let's sing together at the school event." }, { speaker: "Olivia", text: "____ I can take photos after our performance, too." }],
      question: "Which response shows acceptance?",
      options: ["I'm sorry, but I can't.", "I don't really enjoy singing.", "Why not? Sure.", "Do we have another choice?"], answer: 2
    }),
    question({
      id: "g8u1-ara-30", difficulty: 2, template: "sequence", category: "Understanding a Dialogue",
      lines: [{ speaker: "Lucas", text: "Are you doing anything on Saturday?" }, { speaker: "Jack", text: "Not at all. Why?" }, { speaker: "Lucas", text: "Shall we play football in the park?" }, { speaker: "Jack", text: "I don't really enjoy football. Do we have another choice?" }],
      question: "What does Jack do in his final response?",
      options: ["He accepts the suggestion.", "He refuses and asks for an alternative.", "He makes an excuse about being busy.", "He invites Lucas to the park."], answer: 1
    }),
    question({
      id: "g8u1-friendship-priority-01", difficulty: 2, priority: 1, template: "writingExercise", category: "Friendship",
      speaker: "Elena", instruction: "Hi, everyone! Today, I want you to write a sentence describing your friendship with a person in your life.",
      question: "In which paragraph are only good things mentioned?",
      options: ["I sometimes spend time with Victoria, but I can't trust her because she shares my secrets with other people.", "Whenever I invite Ethan to go out, he always has an excuse. We never spend time together.", "Lucas never keeps his promises. It is too bad that he never backs me up.", "Jack and I have similar interests. We count on and respect each other. He is always there whenever I need."],
      optionPortraits: ["Victoria", "Ethan", "Lucas", "Jack"], answer: 3
    }),
    question({
      id: "g8u1-friendship-priority-02", difficulty: 1, priority: 1, template: "friendOpinions", category: "Friendship",
      opinions: [{ speaker: "Olivia", text: "Ella always remembers my birthday and prepares a celebration." }, { speaker: "Ethan", text: "I don't enjoy spending time with Daniel." }, { speaker: "Mia", text: "I don't trust Hannah, so I don't share my secrets with her." }, { speaker: "Lucas", text: "Noah doesn't support me when I need him." }],
      question: "Which student says something positive about his or her friend?",
      options: ["Olivia", "Ethan", "Mia", "Lucas"], optionPortraits: ["Olivia", "Ethan", "Mia", "Lucas"], answer: 0
    }),
    question({
      id: "g8u1-friendship-priority-03", difficulty: 2, priority: 1, template: "friendMessages", category: "Friendship",
      messages: [{ speaker: "Lucas", text: "I have two tickets for a football match at the city stadium. Would you like to go together?" }, { speaker: "Daniel", text: "We are going ice-skating on Wednesday. Would you like to come with us?" }, { speaker: "Mia", text: "Thanks for the invitation. Six o'clock is okay for me, too. See you there." }, { speaker: "Ella", text: "Hannah and I are having a movie night on Sunday. I would be glad if you join us." }],
      question: "Olivia has received messages from her friends. Who did NOT invite Olivia to an event?",
      options: ["Lucas", "Daniel", "Mia", "Ella"], optionPortraits: ["Lucas", "Daniel", "Mia", "Ella"], answer: 2
    }),
    question({
      id: "g8u1-friendship-chat-01", difficulty: 2, priority: 2, template: "chatThread", category: "Accepting an Invitation",
      messages: [{ speaker: "Jack", side: "incoming", text: "Hi, Lucas, how are you?" }, { speaker: "Lucas", side: "outgoing", text: "Thanks, Jack, and you?" }, { speaker: "Jack", side: "incoming", text: "Thanks. I'm organizing a farewell party for Daniel. Would you like to join us?" }, { speaker: "Lucas", side: "outgoing", text: "Oh! He is my best friend. I can't refuse this invitation. Can you text me the time and place, please?" }, { speaker: "Jack", side: "incoming", text: "Sure." }],
      question: "According to the conversation, Lucas ...",
      options: ["invites Jack to Daniel's farewell party.", "asks for some details about the event.", "refuses the invitation.", "cannot join the event."], answer: 1
    }),
    question({
      id: "g8u1-invitation-card-01", difficulty: 2, priority: 2, template: "invitationCard", category: "Reading an Invitation",
      host: "NORTHBRIDGE SECONDARY SCHOOL", event: "GRADUATION PARTY",
      message: "Let’s celebrate our wonderful memories together. We hope you can join us!",
      date: "Friday, June 12", venue: "Skyline Terrace", time: "6:30 p.m. – 10:30 p.m.", fee: "$25 per person",
      contact: "graduation@northbridge.edu", replyBy: "June 5",
      question: "Which question cannot be answered from this invitation?",
      options: ["How much is the fee?", "What is the deadline for replying?", "What time does the party start?", "How many people will join the party?"], answer: 3
    }),
    question({
      id: "g8u1-personality-table-01", difficulty: 2, priority: 2, template: "dataTable", category: "Personality",
      columns: ["David", "Emma", "Ethan", "Jack"],
      rows: [{ label: "Honest", values: [true, false, false, false] }, { label: "Generous", values: [false, true, false, false] }, { label: "Punctual", values: [false, false, true, false] }, { label: "Thoughtful", values: [true, false, false, false] }, { label: "Stubborn", values: [false, false, false, true] }],
      question: "Which statement is NOT true according to the table?",
      options: ["David always tells the truth and cares about his friends.", "You can count on Emma. She likes sharing, too.", "Jack never changes his mind.", "Ethan never comes to meetings on time."], answer: 3
    }),
    question({
      id: "g8u1-football-invitation-01", difficulty: 2, priority: 2, template: "dialogue", category: "Refusing with a Reason",
      lines: [{ speaker: "Daniel", text: "Hi, Ethan. I have two tickets for the football match tonight. Shall we watch together?" }, { speaker: "Ethan", text: "____" }, { speaker: "Daniel", text: "I am sorry to hear that." }, { speaker: "Ethan", text: "You know Lucas is interested in football. You can invite him." }],
      question: "Which of the following sentences completes the dialogue?",
      options: ["I'd love to, but my dad is ill. I must look after him.", "I don't want to miss this opportunity. I'll definitely be there.", "That would be awesome.", "You are wonderful. I'll come with you."], answer: 0
    }),
    question({
      id: "g8u1-true-friends-dialogue-01", difficulty: 2, priority: 2, template: "dialogue", category: "Friendship",
      lines: [{ speaker: "Elena", text: "Hi, everybody! We are going to talk about friendship. What do you think about true friends and what qualities should friendship have?" }, { speaker: "Emma", text: "True friends support and trust each other." }, { speaker: "David", text: "I think ____" }, { speaker: "Elena", text: "That's all true. I agree with you." }],
      question: "Which of the following sentences does NOT complete the dialogue?",
      options: ["A true friend shows his or her love in times of trouble.", "A true friend never keeps secrets.", "Friends are always honest.", "You have similar likes and dislikes with a true friend."], answer: 1
    }),
    question({
      id: "g8u1-emma-friend-opinions-01", difficulty: 1, priority: 2, template: "friendOpinions", category: "Friendship",
      opinions: [{ speaker: "Mia", text: "Emma is an arrogant girl. She never apologizes for being rude." }, { speaker: "Zoe", text: "Emma is an honest, understanding and sincere girl." }, { speaker: "Hannah", text: "I have a strong bond with Emma. She is really caring." }, { speaker: "David", text: "She helps you in times of trouble. I always count on her." }],
      question: "Who says something bad about Emma?",
      options: ["Mia", "Zoe", "Hannah", "David"], optionPortraits: ["Mia", "Zoe", "Hannah", "David"], answer: 0
    }),
    question({
      id: "g8u1-similar-friend-opinions-01", difficulty: 2, priority: 2, template: "friendOpinions", category: "Friendship",
      opinions: [{ speaker: "Emma", text: "I think a true friend always supports me when I am in trouble." }, { speaker: "Zoe", text: "To me, a true friend should be tolerant." }, { speaker: "David", text: "A true friend shouldn't tell lies." }, { speaker: "Ethan", text: "From my point of view, a true friend should be reliable." }],
      question: "According to the opinions, which two students express a similar idea about a true friend?", questionHighlights: ["similar"],
      options: ["Emma and Zoe", "Zoe and David", "David and Ethan", "Emma and Ethan"], answer: 3
    }),
    question({
      id: "g8u1-concert-tickets-01", difficulty: 2, priority: 2, template: "ticketChoice", category: "Common Interests",
      opinions: [{ speaker: "Daniel", text: "I am crazy about rap and rock music. I also love pop music. I find classical music unbearable." }, { speaker: "Ella", text: "I usually listen to classical and pop music. I don't like rock music because it is too noisy." }],
      question: "Which concert can Daniel and Ella go to together?", questionHighlights: ["together"],
      options: ["Classical Music Show", "Rhythm Night: Pop Concert", "Rock Storm", "Rap Vibes"],
      tickets: [{ title: "Classical Music Show", genre: "CLASSICAL", theme: "gold" }, { title: "Rhythm Night: Pop Concert", genre: "POP", theme: "purple" }, { title: "Rock Storm", genre: "ROCK", theme: "red" }, { title: "Rap Vibes", genre: "RAP", theme: "green" }], answer: 1
    }),
    question({
      id: "g8u1-noah-free-time-01", difficulty: 2, priority: 2, template: "dialogue", category: "Likes and Dislikes",
      lines: [{ speaker: "Chloe", text: "What do you like doing in your free time?" }, { speaker: "Noah", text: "I'm fond of reading books and solving math puzzles. I am also keen on playing chess, but I can't stand doing sports activities." }],
      question: "Which of the following is NOT correct according to the dialogue?", questionHighlights: ["NOT correct"],
      options: ["Playing chess is unbearable for Noah.", "Noah hates doing sports activities.", "Solving math puzzles is one of Noah's free-time activities.", "Noah likes reading books."], answer: 0
    }),
    question({
      id: "g8u1-supportive-profiles-01", difficulty: 2, priority: 2, template: "personalityProfiles", category: "Personality",
      profiles: [{ speaker: "David", text: "Has a good relationship with his friends. Always backs his friends up. Never tells lies." }, { speaker: "Jack", text: "Doesn't like wasting resources. Is always there when his friends are in trouble. Never changes his mind." }],
      question: "Which of the following describes both of them?", questionHighlights: ["both"],
      options: ["Stubborn", "Generous", "Supportive", "Mean"], answer: 2
    }),
    question({
      id: "g8u2-concert-reading-01", difficulty: 1, unit: 2, priority: 2, template: "ticketChoice", category: "Teen Life",
      opinions: [],
      passage: "Daniel and Ethan want to go to a concert together. Daniel's favourite type of music is rock. He thinks it is terrific, and he wants to hear a rock band perform live. Ethan loves playing the drums and likes listening to rock music. He also enjoys classical music. They want to choose a concert that matches both of their interests.",
      question: "According to the information, which concert should they go to together?", questionHighlights: ["together"],
      options: ["Rock Music Concert", "Pop Music Concert", "Classical Music Concert", "Jazz Music Concert"],
      tickets: [{ title: "Rock Music Concert", genre: "ROCK", theme: "red", image: "assets/images/rock_music.webp", day: "Friday", time: "6:30 p.m." }, { title: "Pop Music Concert", genre: "POP", theme: "purple", image: "assets/images/pop_music.webp", day: "Sunday", time: "5:15 p.m." }, { title: "Classical Music Concert", genre: "CLASSICAL", theme: "gold", image: "assets/images/classical_music.webp", day: "Thursday", time: "7:30 p.m." }, { title: "Jazz Music Concert", genre: "JAZZ", theme: "green", image: "assets/images/jazz_music.webp", day: "Saturday", time: "8:45 p.m." }], answer: 0
    }),
    question({
      id: "g8u1-emma-event-messages-01", difficulty: 2, priority: 2, template: "friendMessages", category: "Invitations",
      messages: [{ speaker: "Chloe", text: "I'm having a small birthday party on Friday at my house. Would you like to come?" }, { speaker: "Hannah", text: "We're having a picnic this Sunday. We'll do a barbeque and enjoy the nature. I hope you can come." }, { speaker: "Ella", text: "Thank you so much for your dinner invitation. I'll be there at 6:30 p.m. See you tomorrow evening." }, { speaker: "Olivia", text: "Are you free on Thursday evening? Why don't we go to the cinema and watch a movie?" }],
      question: "Emma has received messages from her friends. Who did NOT invite Emma to an event?", questionHighlights: ["NOT"],
      options: ["Chloe", "Hannah", "Ella", "Olivia"], optionPortraits: ["Chloe", "Hannah", "Ella", "Olivia"], answer: 2
    }),
    question({
      id: "g8u2-teen-activities-reading-01", difficulty: 2, unit: 2, priority: 2, template: "reading", category: "Teen Life",
      passage: "Teenagers spend much of their free time surfing the Internet, messaging one another and going to the cinema. They are also into shopping and buying fashionable clothes. They seldom watch TV or read books. They would rather hang out with their friends than stay at home watching TV or reading.",
      question: "According to the text, teenagers ____.",
      options: ["are keen on watching TV", "would rather read books than hang out with friends", "don't like spending time online", "keep up with the latest fashion"], answer: 3
    }),
    question({
      id: "g8u1-benjamin-characteristics-01", difficulty: 2, priority: 2, template: "dialogue", category: "Personality",
      lines: [{ speaker: "Emma", text: "Hi! I'm Emma. I want to tell you about my best friend, Hannah. I usually take everything too seriously, but Hannah doesn't. She never panics. She likes giving little presents and sharing. She keeps my secrets and backs me up when I need. She is a true friend. I love her." }],
      question: "Which of the following is NOT one of the characteristics of Hannah according to the information below?", questionHighlights: ["NOT"],
      options: ["generous", "punctual", "reliable", "supportive"], optionPortraits: ["Hannah", "Hannah", "Hannah", "Hannah"], optionPortraitScale: 0.8, answer: 1
    }),
    question({
      id: "g8u1-emma-trait-map-01", difficulty: 2, priority: 2, template: "traitMap", category: "Personality",
      speaker: "Emma", traits: ["Responsible", "Honest", "Generous", "Helpful", "Kind"],
      question: "Which of the following is NOT related to Emma's personality?", questionHighlights: ["NOT"],
      options: ["She always says 'please' and tells the truth.", "She buys presents for her friends.", "She supports her friends whenever they need her.", "She never changes her mind."], answer: 3
    }),
    question({
      id: "g8u1-cafe-birthday-chat-01", difficulty: 2, priority: 2, template: "chatThread", category: "Accepting an Invitation",
      messages: [{ speaker: "Ella", side: "outgoing", text: "Hi, David. How are you?" }, { speaker: "David", side: "incoming", text: "Thank you, Ella. What about you?" }, { speaker: "Ella", side: "outgoing", text: "We are meeting at a café for Chloe's birthday on Friday evening. Can you come?" }, { speaker: "David", side: "incoming", text: "I am really busy, but I will be there. I don't know where the café is. Can you text me its address, please?" }, { speaker: "Ella", side: "outgoing", text: "Sure." }],
      question: "According to the conversation, David ____.",
      options: ["tells Ella what he is doing now", "makes an excuse for not going there", "cannot go there because he is busy", "asks for some details about the event"], answer: 3
    }),
    question({
      id: "g8u1-daniel-schedule-dialogue-01", difficulty: 2, priority: 2, template: "scheduleDialogue", category: "Invitations",
      speaker: "Daniel",
      schedule: [{ day: "Friday", time: "5:30–7:30 p.m.", activity: "Going to the table tennis course" }, { day: "Saturday", time: "6–8 p.m.", activity: "Attending Chloe's party" }, { day: "Sunday", time: "4–7 p.m.", activity: "Helping my family" }, { day: "Monday", time: "3–5 p.m.", activity: "Training for the tournament" }],
      lines: [{ speaker: "Lucas", text: "We are planning to gather on Friday. Will you come?" }, { speaker: "Daniel", text: "What time?" }, { speaker: "Lucas", text: "At 3:30 p.m." }, { speaker: "Daniel", text: "____." }],
      question: "Which of the following completes the conversation?", questionHighlights: ["completes"],
      options: ["It is awesome, but I will be at Chloe's party.", "I'd love to, but I have to leave before five thirty.", "That sounds great, but I have to train for the tournament.", "I am sorry, but I am helping my family at that time."], answer: 1
    })
  ]);
})();
