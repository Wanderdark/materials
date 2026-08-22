const invitationLettersGrade8Function = {
  id: "invitation-letters",
  grade: 8,
  unit: 1,
  title: "Understand Short and Simple Invitation Letters",
  compactPresentationTitle: true,
  description: "",
  exercises: [],
  sentences: [
    {
      id: "read-an-invitation-letter",
      presenceSlide: true,
      invitationLetter: {
        heading: "READ THE INVITATION",
        lines: [
          { text: "Hi, Hannah,", field: "receiver" },
          { text: "I hope all is well in your world." },
          { text: "Do you have any plans on Saturday?", field: "date" },
          { text: "A great romance is playing at the movie theatre.", field: "event" },
          { text: "Chloe, Olivia and I are going to watch it together." },
          { text: "Would you like to join us? We will meet at the Max Shopping Mall.", field: "place" },
          { text: "See you there at 4:30 p.m.", field: "time" },
          { text: "Cheers," },
          { text: "Emma", field: "sender" }
        ],
        fields: [
          { id: "sender", label: "SENDER", color: "white" },
          { id: "receiver", label: "RECEIVER", color: "yellow" },
          { id: "event", label: "EVENT", color: "red" },
          { id: "date", label: "DATE", color: "green" },
          { id: "place", label: "PLACE", color: "peach" },
          { id: "time", label: "TIME", color: "blue" }
        ]
      }
    },
    {
      id: "answer-questions-about-the-invitation",
      presenceSlide: true,
      invitationLetter: {
        heading: "READ THE INVITATION",
        questionMode: true,
        lines: [
          { text: "Hi, Hannah,", field: "receiver" },
          { text: "I hope all is well in your world." },
          { text: "Do you have any plans on Saturday?", field: "date" },
          { text: "A great romance is playing at the movie theatre.", field: "event" },
          { text: "Chloe, Olivia and I are going to watch it together." },
          { text: "Would you like to join us? We will meet at the Max Shopping Mall.", field: "place" },
          { text: "See you there at 4:30 p.m.", field: "time" },
          { text: "Cheers," },
          { text: "Emma", field: "sender" }
        ],
        fields: [
          { id: "sender", label: "Who is the sender of the invitation?", answer: "Emma", color: "white" },
          { id: "receiver", label: "Who is the receiver of the invitation?", answer: "It's for Hannah.", color: "yellow" },
          { id: "event", label: "What is the event?", answer: "Watching a romance movie.", color: "red" },
          { id: "date", label: "When is the event?", answer: "It's on Saturday.", color: "green" },
          { id: "place", label: "Where will they meet?", answer: "They'll meet at the Max Shopping Mall.", color: "peach" },
          { id: "time", label: "What time will they meet?", answer: "They'll meet at 4:30 p.m.", color: "blue" }
        ]
      }
    },
    {
      id: "read-a-sports-tournament-invitation",
      presenceSlide: true,
      invitationLetter: {
        heading: "READ THE INVITATION",
        lines: [
          { text: "Dear Noah,", field: "receiver" },
          { parts: [{ text: "Jack and I are going to organize a " }, { text: "basketball tournament", field: "event" }, { text: " on " }, { text: "22nd May", field: "date" }, { text: " on Thursday." }] },
          { text: "It is going to start at 3 p.m.,", field: "time" },
          { text: "in AdilHoca Sports Center.", field: "place" },
          { text: "Our classmates Benjamin, Lucas and Ethan are also going to join us." },
          { text: "Would you like to play for our team? Please bring something to drink." },
          { text: "I hope to see you there." },
          { text: "Love," },
          { text: "Daniel", field: "sender" }
        ],
        fields: [
          { id: "sender", label: "SENDER", color: "white" },
          { id: "receiver", label: "RECEIVER", color: "yellow" },
          { id: "event", label: "EVENT", color: "red" },
          { id: "date", label: "DATE", color: "green" },
          { id: "place", label: "PLACE", color: "peach" },
          { id: "time", label: "TIME", color: "blue" }
        ]
      }
    },
    {
      id: "answer-questions-about-the-sports-tournament-invitation",
      presenceSlide: true,
      invitationLetter: {
        heading: "READ THE INVITATION",
        questionMode: true,
        lines: [
          { text: "Dear Noah,", field: "receiver" },
          { parts: [{ text: "Jack and I are going to organize a " }, { text: "basketball tournament", field: "event" }, { text: " on " }, { text: "22nd May", field: "date" }, { text: " on Thursday." }] },
          { text: "It is going to start at 3 p.m.,", field: "time" },
          { text: "in AdilHoca Sports Center.", field: "place" },
          { text: "Our classmates Benjamin, Lucas and Ethan are also going to join us." },
          { text: "Would you like to play for our team? Please bring something to drink." },
          { text: "I hope to see you there." },
          { text: "Love," },
          { text: "Daniel", field: "sender" }
        ],
        fields: [
          { id: "sender", label: "Who is the sender of the invitation?", answer: "Daniel", color: "white" },
          { id: "receiver", label: "Who is the receiver of the invitation?", answer: "It's for Noah.", color: "yellow" },
          { id: "event", label: "What is the event?", answer: "A basketball tournament.", color: "red" },
          { id: "date", label: "When is the event?", answer: "It's on 22nd May.", color: "green" },
          { id: "place", label: "Where will they meet?", answer: "They'll meet at AdilHoca Sports Center.", color: "peach" },
          { id: "time", label: "What time will they meet?", answer: "They'll meet at 3 p.m.", color: "blue" }
        ]
      }
    },
    {
      id: "test-question-chloe-emma-science-party",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "READ THE INVITATION",
        lines: [
          { speaker: "Invitation", text: "Dear Hannah, Emma and I are organizing a science experiment party on Friday, on 14th May. It is going to start at 3 p.m. at my home. I guess you know the address. I hope you can come. Chloe" },
          { speaker: "Question", text: "The _____ of the party is Chloe's home." }
        ],
        answer: "place",
        choices: ["date", "time", "event", "place"]
      }
    },
    {
      id: "test-question-benjamin-noah-chess-tournament",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "READ THE INVITATION",
        lines: [
          { speaker: "Invitation", text: "Dear Ethan, Noah and I are organizing a chess tournament on Saturday, on 21st May. It is going to start at 2 p.m. at AdilHoca Library. I hope you can come. Benjamin" },
          { speaker: "Question", text: "The _____ is a chess tournament." }
        ],
        answer: "event",
        choices: ["place", "time", "event", "date"]
      }
    },
    {
      id: "test-question-ella-olivia-karaoke-party",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "READ THE INVITATION",
        lines: [
          { speaker: "Invitation", text: "Dear Olivia, Chloe and I are organizing a karaoke party on Sunday, on 8th June. It is going to start at 5 p.m. at my home. I hope you can come. Ella" },
          { speaker: "Question", text: "The _____ of the party is 8th June." }
        ],
        answer: "date",
        choices: ["event", "place", "date", "time"]
      }
    },
    {
      id: "test-question-daniel-lucas-football-match",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "READ THE INVITATION",
        lines: [
          { speaker: "Invitation", text: "Dear Lucas, Benjamin and I are organizing a football match on Tuesday, on 18th March. It is going to start at 4 p.m. at AdilHoca Sports Center. I hope you can come. Daniel" },
          { speaker: "Question", text: "The _____ of the match is 4 p.m." }
        ],
        answer: "time",
        choices: ["time", "date", "event", "place"]
      }
    },
    {
      id: "test-question-olivia-zoe-photography-exhibition",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "READ THE INVITATION",
        lines: [
          { speaker: "Invitation", text: "Dear Zoe, Ava and I are organizing a photography exhibition on Thursday, on 12th September. It is going to start at 6 p.m. at City Art Gallery. I hope you can come. Olivia" },
          { speaker: "Question", text: "The _____ of the invitation is Olivia." }
        ],
        answer: "sender",
        choices: ["receiver", "event", "sender", "place"]
      }
    },
    {
      id: "test-question-mia-zoe-book-club",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "READ THE INVITATION",
        lines: [
          { speaker: "Invitation", text: "Dear Zoe, Mia and I are organizing a book club meeting on Wednesday, on 6th November. It is going to start at 4 p.m. at AdilHoca Library. Please bring your favourite book. I hope you can come. Chloe" },
          { speaker: "Question", text: "Zoe is the _____ of the invitation." }
        ],
        answer: "receiver",
        choices: ["sender", "event", "place", "receiver"]
      }
    },
    {
      id: "test-question-victoria-emma-coding-workshop",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "READ THE INVITATION",
        lines: [
          { speaker: "Invitation", text: "Dear Emma, Victoria and I are organizing a coding workshop on Monday, on 16th October. It is going to start at 3 p.m. in the school computer lab. I hope you can come. Mia" },
          { speaker: "Question", text: "The _____ of the workshop is 16th October." }
        ],
        answer: "date",
        choices: ["event", "time", "place", "date"]
      }
    },
    {
      id: "test-question-ava-chloe-animal-shelter-visit",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "READ THE INVITATION",
        lines: [
          { speaker: "Invitation", text: "Dear Chloe, Ava and I are organizing an animal shelter visit on Saturday, on 9th March. It is going to start at 11 a.m. at Happy Paws Animal Shelter. I hope you can come. Hannah" },
          { speaker: "Question", text: "The _____ is an animal shelter visit." }
        ],
        answer: "event",
        choices: ["time", "receiver", "place", "event"]
      }
    },
    {
      id: "test-question-ethan-david-golf-practice",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "READ THE INVITATION",
        lines: [
          { speaker: "Invitation", text: "Dear David, Ethan and I are organizing golf practice on Friday, on 24th May. It is going to start at 5 p.m. at Green Valley Golf Club. I hope you can come. Lucas" },
          { speaker: "Question", text: "The _____ of the golf practice is Green Valley Golf Club." }
        ],
        answer: "place",
        choices: ["sender", "date", "place", "receiver"]
      }
    },
    {
      id: "test-question-jack-benjamin-fishing-trip",
      presenceSlide: true,
      testQuestion: {
        promptLabel: "READ THE INVITATION",
        lines: [
          { speaker: "Invitation", text: "Dear Benjamin, Jack and I are organizing a fishing trip on Sunday, on 2nd June. It is going to start at 9 a.m. at Lake Blue. Please bring a snack and a bottle of water. I hope you can come. Noah" },
          { speaker: "Question", text: "The _____ of the fishing trip is 9 a.m." }
        ],
        answer: "time",
        choices: ["event", "date", "time", "receiver"]
      }
    },
    {
      id: "test-question-girls-refuse-the-tea-party",
      presenceSlide: true,
      noVisual: true,
      messageComprehension: {
        promptLabel: "READ THE MESSAGES",
        messages: [
          { speaker: "Ava", text: "Hi, I am going to organize a tea party at 1 o'clock at my home. Would you like to join?" },
          { speaker: "Chloe", text: "I'd love to, but I have to stay at home because I have guests." },
          { speaker: "Hannah", text: "Sounds great to join, but I have to refuse it because we are going to go on a picnic." },
          { speaker: "Ella", text: "I am so busy, but I can't refuse because I like parties so much." },
          { speaker: "Olivia", text: "That'd be great. See you there." }
        ],
        question: "Who refuses to join the party?",
        answer: "Chloe & Hannah",
        choices: ["Ella & Olivia", "Chloe & Hannah", "Hannah & Olivia", "Chloe & Ella"]
      }
    },
    {
      id: "test-question-olivia-accepts-the-tea-party",
      presenceSlide: true,
      noVisual: true,
      messageComprehension: {
        promptLabel: "READ THE MESSAGES",
        messages: [
          { speaker: "Ava", text: "Hi, I am going to organize a tea party at 1 o'clock at my home. Would you like to join?" },
          { speaker: "Chloe", text: "I'd love to, but I have to stay at home because I have guests." },
          { speaker: "Hannah", text: "Sounds great to join, but I have to refuse it because we are going to go on a picnic." },
          { speaker: "Ella", text: "I am so busy, but I can't refuse because I like parties so much." },
          { speaker: "Olivia", text: "That'd be great. See you there." }
        ],
        question: "Olivia _____.",
        answer: "is going to join it.",
        choices: ["refuses to go to the tea party.", "is going to join it.", "can't accept the invitation.", "has an excuse."]
      }
    },
    {
      id: "test-question-tea-party-event",
      presenceSlide: true,
      noVisual: true,
      messageComprehension: {
        promptLabel: "READ THE MESSAGES",
        messages: [
          { speaker: "Ava", text: "Hi, I am going to organize a tea party at 1 o'clock at my home. Would you like to join?" },
          { speaker: "Chloe", text: "I'd love to, but I have to stay at home because I have guests." },
          { speaker: "Hannah", text: "Sounds great to join, but I have to refuse it because we are going to go on a picnic." },
          { speaker: "Ella", text: "I am so busy, but I can't refuse because I like parties so much." },
          { speaker: "Olivia", text: "That'd be great. See you there." }
        ],
        question: "What is the event?",
        answer: "Tea party",
        choices: ["Picnic", "Tea party", "Volleyball tournament", "Barbecue party"]
      }
    },
    {
      id: "test-question-chloe-refuses-barbecue",
      presenceSlide: true,
      noVisual: true,
      messageComprehension: {
        promptLabel: "READ THE MESSAGES",
        messages: [
          { speaker: "Ava", text: "Hi! It's Ava. I'm going to have a barbecue party with friends on Saturday. Would you like to join us?" },
          { speaker: "Chloe", text: "I'd love to, but I can't go to the gym on Saturdays and Sundays." },
          { speaker: "Ella", text: "Great idea! I'm not going to do anything on Saturday. See you then." },
          { speaker: "Hannah", text: "I'm sorry, but I can't. To be honest, I don't really enjoy barbecues. I'm also not feeling well. So, I prefer staying at home." }
        ],
        question: "Chloe refuses the invitation because _____.",
        answer: "she goes to the gym at the weekends",
        choices: ["she will go to another party", "she has nothing better to do", "she is going to meet her friends", "she goes to the gym at the weekends"]
      }
    },
    {
      id: "test-question-ella-accepts-barbecue",
      presenceSlide: true,
      noVisual: true,
      messageComprehension: {
        promptLabel: "READ THE MESSAGES",
        messages: [
          { speaker: "Ava", text: "Hi! It's Ava. I'm going to have a barbecue party with friends on Saturday. Would you like to join us?" },
          { speaker: "Chloe", text: "I'd love to, but I can't go to the gym on Saturdays and Sundays." },
          { speaker: "Ella", text: "Great idea! I'm not going to do anything on Saturday. See you then." },
          { speaker: "Hannah", text: "I'm sorry, but I can't. To be honest, I don't really enjoy barbecues. I'm also not feeling well. So, I prefer staying at home." }
        ],
        question: "Who accepts the invitation?",
        answer: "Ella",
        choices: ["Ava", "Chloe", "Hannah", "Ella"]
      }
    },
    {
      id: "test-question-hannah-refuses-barbecue",
      presenceSlide: true,
      noVisual: true,
      messageComprehension: {
        promptLabel: "READ THE MESSAGES",
        messages: [
          { speaker: "Ava", text: "Hi! It's Ava. I'm going to have a barbecue party with friends on Saturday. Would you like to join us?" },
          { speaker: "Chloe", text: "I'd love to, but I can't go to the gym on Saturdays and Sundays." },
          { speaker: "Ella", text: "Great idea! I'm not going to do anything on Saturday. See you then." },
          { speaker: "Hannah", text: "I'm sorry, but I can't. To be honest, I don't really enjoy barbecues. I'm also not feeling well. So, I prefer staying at home." }
        ],
        question: "Hannah isn't going to attend the party because _____.",
        answer: "she really dislikes barbecues",
        choices: ["she is always very honest", "she is busy at the weekend", "she really dislikes barbecues", "she feels quite good at home"]
      }
    },
    {
      id: "test-question-emma-hannah-birthday-date",
      presenceSlide: true,
      noVisual: true,
      messageComprehension: {
        promptLabel: "READ THE EMAILS",
        messages: [
          { speaker: "Email from Emma", text: "To: Hannah. Date: 02/01/2015. Subject: Birthday Party! Hi, Hannah. I'm having a birthday party at my house on 5th January. It starts at 8 p.m. You know my address. It is not far away from your house. I hope you can come. See you soon. Emma" },
          { speaker: "Email from Hannah", text: "To: Emma. Date: 03/01/2015. Subject: Birthday Party! Hi, Emma. Thanks for your invitation. Actually, I really like birthday parties. I'd like to come but we're having friends over at 7 p.m. on Sunday. So, I can't attend. I hope you have great fun. See you soon. Hannah" }
        ],
        question: "When is the birthday party?",
        answer: "on 5th January",
        choices: ["at 7 p.m.", "on 5th January", "in the morning", "at Emma's house"]
      }
    },
    {
      id: "test-question-emma-hannah-birthday-true",
      presenceSlide: true,
      noVisual: true,
      messageComprehension: {
        promptLabel: "READ THE EMAILS",
        messages: [
          { speaker: "Email from Emma", text: "To: Hannah. Date: 02/01/2015. Subject: Birthday Party! Hi, Hannah. I'm having a birthday party at my house on 5th January. It starts at 8 p.m. You know my address. It is not far away from your house. I hope you can come. See you soon. Emma" },
          { speaker: "Email from Hannah", text: "To: Emma. Date: 03/01/2015. Subject: Birthday Party! Hi, Emma. Thanks for your invitation. Actually, I really like birthday parties. I'd like to come but we're having friends over at 7 p.m. on Sunday. So, I can't attend. I hope you have great fun. See you soon. Hannah" }
        ],
        question: "Which is TRUE about the text?",
        answer: "Emma invites Hannah to her birthday party.",
        choices: ["Emma's house is far away from Hannah's.", "Hannah is going to visit Emma.", "Emma invites Hannah to her birthday party.", "Hannah has a birthday party."]
      }
    },
    {
      id: "test-question-hannah-refuses-emma-birthday",
      presenceSlide: true,
      noVisual: true,
      messageComprehension: {
        promptLabel: "READ THE EMAILS",
        messages: [
          { speaker: "Email from Emma", text: "To: Hannah. Date: 02/01/2015. Subject: Birthday Party! Hi, Hannah. I'm having a birthday party at my house on 5th January. It starts at 8 p.m. You know my address. It is not far away from your house. I hope you can come. See you soon. Emma" },
          { speaker: "Email from Hannah", text: "To: Emma. Date: 03/01/2015. Subject: Birthday Party! Hi, Emma. Thanks for your invitation. Actually, I really like birthday parties. I'd like to come but we're having friends over at 7 p.m. on Sunday. So, I can't attend. I hope you have great fun. See you soon. Hannah" }
        ],
        question: "Hannah's friends are going to visit her so _____.",
        answer: "she refuses the invitation",
        choices: ["she refuses the invitation", "her friends will go out with Emma", "she likes joining birthday parties", "her house is far away from Emma's"]
      }
    }
  ]
};

window.functionModules.push(invitationLettersGrade8Function);
