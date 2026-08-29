const haveGotHasGotFunction = {
  id: "have-got-has-got",
  grade: 5,
  unit: 6,
  title: "Have Got / Has Got: Expressing Possession",
  description: "Choose a character and teleport into their room.",
  exercises: ["have-got-has-got-appearance-choice"],
  sentences: [
    {
      id: "have-got-character-hub",
      presenceSlide: true,
      focus: "CHOOSE ONE",
      kicker: "OUR CLASSROOM UNIVERSE",
      title: "Click a character to visit their room.",
      compactTitle: true,
      imagePath: "images/havegot-hasgot/collage.webp",
      imageClass: "hub-collage-visual",
      visualBrief: "Characters and their rooms.",
      showAllItems: true,
      listClass: "character-hub-grid",
      items: [
        {
          kind: "category-list",
          parts: [{ text: "BENJAMIN" }],
          nameTag: { x: 130, y: 150, baseWidth: 650, baseHeight: 370 },
          room: {
            name: "BENJAMIN",
            gender: "male",
            pitch: 0.8,
            imagePath: "images/havegot-hasgot/benjamin-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 1332, y: 250 },
            noSentenceBubble: true,
            exitLine: "See you later!",
            videoTrueFalse: {
              name: "BENJAMIN",
              videoUrl: "https://media.adilhoca.com/video/5_possesions_benjamin.mp4",
              questions: [
                { text: "Benjamin has got a scooter and a skateboard.", answer: true },
                { text: "Benjamin has got a PlayStation, but he wants another one.", answer: false, correction: "Benjamin hasn't got a PlayStation, but he wants one." },
                { text: "Benjamin has got swimming goggles.", answer: true },
                { text: "Benjamin hasn't got a swimming medal.", answer: false, correction: "Benjamin has got a swimming medal." },
                { text: "Benjamin loves swimming.", answer: true },
                { text: "Benjamin hasn't got a skateboard.", answer: false, correction: "Benjamin has got a skateboard." }
              ]
            },
            targets: [
              {
                sentence: 'Benjamin has got a "scooter".',
                showIntro: true,
                hitAreas: [{ type: "polygon", points: [[1360, 410], [1560, 410], [1560, 810], [1360, 810]] }]
              },
              {
                sentence: 'He has got a "skateboard".',
                hitAreas: [{ type: "polygon", points: [[1525, 525], [1645, 525], [1645, 765], [1525, 765]] }]
              },
              {
                sentence: 'Benjamin has got a "swimming bag".',
                hitAreas: [{ type: "polygon", points: [[1415, 770], [1655, 770], [1655, 890], [1415, 890]] }]
              },
              {
                sentence: 'He has got "goggles".',
                hitAreas: [{ type: "circle", x: 380, y: 515, r: 30 }]
              },
              {
                sentence: 'Benjamin has got a "school bag".',
                hitAreas: [{ type: "circle", x: 105, y: 815, r: 80 }]
              },
              {
                sentence: 'He has got a "beach hat".',
                hitAreas: [{ type: "circle", x: 1530, y: 365, r: 50 }]
              },
              { type: "choice", sentence: "I ____ a glass of orange juice.", options: ["have got", "haven't got"], answer: "have got" },
              { type: "choice", sentence: "Benjamin ____ a camera.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "He ____ a guitar.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "I ____ a playstation.", options: ["have got", "haven't got"], answer: "haven't got" },
              { type: "choice", sentence: "He ____ a desk lamp.", options: ["has got", "have got"], answer: "has got" },
              { type: "choice", sentence: "Benjamin ____ a beach hat.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "Benjamin ____ goggles.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "Benjamin ____ a karaoke microphone.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "yesno", question: "Has Benjamin got a piano?", options: ["Yes, he has", "No, he hasn't"], answer: "No, he hasn't" },
              { type: "yesno", question: "Has he got a scooter?", options: ["Yes, he has", "No, he hasn't"], answer: "Yes, he has" },
              { type: "yesno", question: "Has Benjamin got a swimming medal?", options: ["Yes, he has", "No, he hasn't"], answer: "Yes, he has" },
              { type: "yesno", question: "Has Benjamin got a wardrobe?", options: ["Yes, he has", "No, he hasn't"], answer: "Yes, he has" },
              { type: "yesno", question: "Has Benjamin got ballet shoes?", options: ["Yes, he has", "No, he hasn't"], answer: "No, he hasn't" }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "VICTORIA" }],
          nameTag: { x: 480, y: 170, baseWidth: 650, baseHeight: 370 },
          room: {
            name: "VICTORIA",
            gender: "female",
            pitch: 1.1,
            imagePath: "images/havegot-hasgot/victoria-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 1260, y: 190 },
            noSentenceBubble: true,
            exitLine: "Let's play chess someday, Bye",
            videoTrueFalse: { name: "VICTORIA", videoUrl: "https://media.adilhoca.com/video/5_possesions_victoria.mp4", questions: [{ text: "Victoria has got a laptop.", answer: true }, { text: "Victoria has got a television.", answer: false, correction: "Victoria hasn't got a television." }, { text: "Victoria has got a hamster called Pixel.", answer: true }, { text: "Victoria has got a robot.", answer: true }, { text: "Victoria likes watching TV.", answer: false, correction: "Victoria doesn't like watching TV." }, { text: "Pixel is Victoria's robot.", answer: false, correction: "Pixel is Victoria's hamster." }] },
            targets: [
              {
                sentence: 'Victoria has got a "laptop".',
                showIntro: true,
                hitAreas: [{ type: "circle", x: 1135, y: 425, r: 60 }]
              },
              {
                sentence: 'She has got a "robot".',
                hitAreas: [{ type: "circle", x: 900, y: 170, r: 40 }]
              },
              {
                sentence: 'Victoria has got a "Rubik\'s cube".',
                hitAreas: [{ type: "polygon", points: [[870, 262], [900, 262], [900, 278], [870, 278]] }]
              },
              {
                sentence: 'She has got a "chess clock".',
                hitAreas: [{ type: "circle", x: 895, y: 360, r: 45 }]
              },
              {
                sentence: 'Victoria has got a "school bag".',
                hitAreas: [{ type: "circle", x: 195, y: 785, r: 80 }]
              },
              {
                sentence: 'She has got an "aquarium".',
                hitAreas: [{ type: "circle", x: 1520, y: 530, r: 60 }]
              },
              { type: "choice", sentence: "I ____ a fish.", options: ["have got", "haven't got"], answer: "have got" },
              { type: "choice", sentence: "Victoria ____ glasses.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "She ____ a piano.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "She ____ a computer.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "She ____ a skateboard.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "She ____ goggles.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "She ____ an alarm clock.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "She ____ a television.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "yesno", question: "Has Victoria got a medal?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" },
              { type: "yesno", question: "Has she got a scooter?", options: ["Yes, she has", "No, she hasn't"], answer: "No, she hasn't" },
              { type: "yesno", question: "Has Victoria got a cat?", options: ["Yes, she has", "No, she hasn't"], answer: "No, she hasn't" },
              { type: "yesno", question: "Has Victoria got a wardrobe?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" },
              { type: "yesno", question: "Has Victoria got chess pieces?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "LUCAS" }],
          nameTag: { x: 110, y: 30, baseWidth: 650, baseHeight: 370 },
          room: {
            name: "LUCAS",
            gender: "male",
            pitch: 0.6,
            imagePath: "images/havegot-hasgot/lucas-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 1310, y: 105 },
            exitLine: "Come again, BYE!",
            videoTrueFalse: { name: "LUCAS", videoUrl: "https://media.adilhoca.com/video/5_possesions_lucas.mp4", questions: [{ text: "Lucas has got a guitar.", answer: false, correction: "Lucas hasn't got a guitar." }, { text: "Lucas has got a football and football boots.", answer: true }, { text: "Lucas has got a sports bag.", answer: true }, { text: "Lucas hasn't got a football medal.", answer: false, correction: "Lucas has got a football medal." }, { text: "Lucas has got a football trophy.", answer: true }, { text: "Lucas hasn't got a football jersey.", answer: false, correction: "Lucas has got a football jersey." }] },
            targets: [
              {
                sentence: 'Lucas has got a "foot ball".',
                showIntro: true,
                hitAreas: [{ type: "circle", x: 1075, y: 385, r: 30 }]
              },
              {
                sentence: 'I have got "football boots".',
                hitAreas: [{ type: "circle", x: 1045, y: 540, r: 30 }]
              },
              {
                sentence: 'He has got a "sports bag".',
                hitAreas: [{ type: "circle", x: 990, y: 485, r: 60 }]
              },
              {
                sentence: 'Lucas has got a "blue hoodie".',
                hitAreas: [{ type: "circle", x: 985, y: 295, r: 120 }]
              },
              {
                sentence: 'I have got an "alarm clock".',
                hitAreas: [{ type: "circle", x: 90, y: 540, r: 30 }]
              },
              { type: "choice", sentence: "I ____ a television.", options: ["have got", "haven't got"], answer: "haven't got" },
              { type: "choice", sentence: "Lucas ____ a football trophy.", options: ["have got", "has got"], answer: "has got" },
              { type: "choice", sentence: "He ____ a guitar.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "I ____ a basketball.", options: ["have got", "haven't got"], answer: "haven't got" },
              { type: "choice", sentence: "He ____ a lamp.", options: ["has got", "have got"], answer: "has got" },
              { type: "choice", sentence: "Lucas ____ a white coat.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "He ____ a medal.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "He ____ a teddy bear.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "yesno", question: "Has Lucas got a piano?", options: ["Yes, he has", "No, he hasn't"], answer: "No, he hasn't" },
              { type: "yesno", question: "Has he got a television?", options: ["Yes, he has", "No, he hasn't"], answer: "No, he hasn't" },
              { type: "yesno", question: "Has Lucas got a sports bag?", options: ["Yes, he has", "No, he hasn't"], answer: "Yes, he has" },
              { type: "yesno", question: "Has Lucas got ballet shoes?", options: ["Yes, he has", "No, he hasn't"], answer: "No, he hasn't" },
              { type: "yesno", question: "Has Lucas got a foot ball?", options: ["Yes, he has", "No, he hasn't"], answer: "Yes, he has" }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "CHLOE" }],
          nameTag: { x: 250, y: 30, baseWidth: 650, baseHeight: 370 },
          room: {
            name: "CHLOE",
            gender: "female",
            pitch: 1.27,
            imagePath: "images/havegot-hasgot/chloe-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 370, y: 75 },
            exitLine: "Nice to see you, BYE!",
            videoTrueFalse: { name: "CHLOE", videoUrl: "https://media.adilhoca.com/video/5_possesions_chloe.mp4", questions: [{ text: "Chloe has got a piano.", answer: true }, { text: "Chloe has got a television.", answer: false, correction: "Chloe hasn't got a television." }, { text: "Chloe has got ballet shoes and a dancing medal.", answer: true }, { text: "Chloe has got a cat called Luna.", answer: true }, { text: "Chloe has got a computer.", answer: false, correction: "Chloe hasn't got a computer." }, { text: "Chloe's cat is called Coco.", answer: false, correction: "Chloe's cat is called Luna." }] },
            exitSound: "sounds/luna.mp3",
            exitSoundDelay: 2000,
            exitDelay: 4000,
            easterEggs: [
              { id: "cat", line: "Its name is Luna! Luna, say hi to our guest!", duration: 5000, sound: "sounds/luna.mp3", soundDelay: 1000 }
            ],
            targets: [
              {
                sentence: 'I have got a "piano".',
                showIntro: true,
                hitAreas: [{ type: "polygon", points: [[5, 465], [285, 415], [291, 496], [10, 565]] }]
              },
              {
                sentence: 'Chloe has got "ballet shoes".',
                hitAreas: [
                  { type: "circle", x: 235, y: 770, r: 60 },
                  { type: "circle", x: 1375, y: 165, r: 35 }
                ]
              },
              {
                sentence: 'Chloe has got a "pet cat".',
                easterEggId: "cat",
                hitAreas: [{ type: "circle", x: 1465, y: 490, r: 50 }]
              },
              {
                sentence: 'I have got a "schoolbag".',
                hitAreas: [{ type: "circle", x: 715, y: 530, r: 60 }]
              },
              {
                sentence: 'Chloe has got a "teddy bear".',
                hitAreas: [{ type: "circle", x: 1350, y: 455, r: 50 }]
              },
              {
                sentence: 'Chloe has got a "study desk".',
                hitAreas: [{ type: "circle", x: 945, y: 465, r: 150 }]
              },
              {
                sentence: 'She has got a "dancing medal".',
                hitAreas: [{ type: "circle", x: 1445, y: 155, r: 50 }]
              },
              {
                sentence: 'Chloe has got a "dancing trophy".',
                hitAreas: [{ type: "circle", x: 597, y: 161, r: 20 }]
              },
              { type: "choice", sentence: "I ____ a television.", options: ["have got", "haven't got"], answer: "haven't got" },
              { type: "choice", sentence: "Chloe ____ a book case.", options: ["have got", "has got"], answer: "has got" },
              { type: "choice", sentence: "She ____ a lot of pencils.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "Chloe ____ a football.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "She ____ some books.", options: ["has got", "have got"], answer: "has got" },
              { type: "choice", sentence: "Chloe ____ a skateboard.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "She ____ a pencil case.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "She ____ a guitar.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "yesno", question: "Has Chloe got a piano?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" },
              { type: "yesno", question: "Has Chloe got a television?", options: ["Yes, she has", "No, she hasn't"], answer: "No, she hasn't" },
              { type: "yesno", question: "Has Chloe got ballet shoes?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" },
              { type: "yesno", question: "Has Chloe got a school bag?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" },
              { type: "yesno", question: "Has Chloe got a football?", options: ["Yes, she has", "No, she hasn't"], answer: "No, she hasn't" }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "CHOOSE\nONE" }]
        },
        {
          kind: "category-list",
          parts: [{ text: "NOAH" }],
          nameTag: { x: 390, y: 155, baseWidth: 650, baseHeight: 370 },
          room: {
            name: "NOAH",
            gender: "male",
            pitch: 0.7,
            imagePath: "images/havegot-hasgot/noah-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 1060, y: 130 },
            noSentenceBubble: true,
            exitLine: "I must study Maths, see you.",
            videoTrueFalse: { name: "NOAH", videoUrl: "https://media.adilhoca.com/video/5_possesions_noah.mp4", questions: [{ text: "Noah has got a television.", answer: false, correction: "Noah hasn't got a television." }, { text: "Noah has got a chess set.", answer: true }, { text: "Noah doesn't like studying.", answer: false, correction: "Noah prefers studying." }, { text: "Noah has got lots of books.", answer: true }, { text: "Noah has got a desk lamp.", answer: true }, { text: "Noah hasn't got a globe.", answer: false, correction: "Noah has got a globe." }] },
            targets: [
              {
                sentence: 'Noah has got a "chessboard".',
                showIntro: true,
                hitAreas: [{ type: "circle", x: 1450, y: 835, r: 100 }]
              },
              {
                sentence: 'He has got a "Maths book".',
                hitAreas: [{ type: "circle", x: 1610, y: 465, r: 40 }]
              },
              {
                sentence: 'Noah has got a "Maths trophy".',
                hitAreas: [{ type: "polygon", points: [[1105, 72], [1175, 72], [1175, 98], [1105, 98]] }]
              },
              {
                sentence: 'He has got a "medal".',
                hitAreas: [{ type: "circle", x: 1375, y: 180, r: 45 }]
              },
              {
                sentence: 'Noah has got a "school bag".',
                hitAreas: [{ type: "circle", x: 150, y: 815, r: 100 }]
              },
              {
                sentence: 'He has got a "globe".',
                hitAreas: [{ type: "circle", x: 820, y: 270, r: 40 }]
              },
              { type: "choice", sentence: "I ____ a fish.", options: ["have got", "haven't got"], answer: "haven't got" },
              { type: "choice", sentence: "Noah ____ glasses.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "He ____ lots of books.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "He ____ a computer.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "He ____ a geometry set.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "He ____ a robot.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "He ____ an alarm clock.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "He ____ a studying desk.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "yesno", question: "Has Noah got a skateboard?", options: ["Yes, he has", "No, he hasn't"], answer: "No, he hasn't" },
              { type: "yesno", question: "Has he got a lot of trophies?", options: ["Yes, he has", "No, he hasn't"], answer: "Yes, he has" },
              { type: "yesno", question: "Has Noah got a pet?", options: ["Yes, he has", "No, he hasn't"], answer: "No, he hasn't" },
              { type: "yesno", question: "Has Noah got a wardrobe?", options: ["Yes, he has", "No, he hasn't"], answer: "No, he hasn't" },
              { type: "yesno", question: "Has Noah got a desk lamp?", options: ["Yes, he has", "No, he hasn't"], answer: "Yes, he has" }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "MIA" }],
          nameTag: { x: 280, y: 155, baseWidth: 650, baseHeight: 370 },
          room: {
            name: "MIA",
            gender: "female",
            pitch: 1.34,
            imagePath: "images/havegot-hasgot/mia-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 390, y: 160 },
            speechLift: 50,
            exitLine: "Thanks for coming, bye.",
            videoTrueFalse: { name: "MIA", videoUrl: "https://media.adilhoca.com/video/5_possesions_mia.mp4", questions: [{ text: "Mia has got an armchair.", answer: true }, { text: "Mia has got a telescope.", answer: false, correction: "Mia hasn't got a telescope, but she wants one." }, { text: "Mia doesn't like reading.", answer: false, correction: "Mia loves reading." }, { text: "Mia has got a diary.", answer: true }, { text: "Mia has got a rabbit called Coco.", answer: true }, { text: "Coco is Mia's cat.", answer: false, correction: "Coco is Mia's rabbit." }] },
            easterEggs: [
              { id: "diary", line: "Don't touch my diary please", duration: 4000 },
              { id: "petRabbit", line: "Its name is Coco!", duration: 3000 },
              { id: "hotChocolate", line: "It's my favorite drink.", duration: 3000 }
            ],
            targets: [
              {
                sentence: 'Mia has got a "diary".',
                showIntro: true,
                easterEggId: "diary",
                hitAreas: [{ type: "circle", x: 995, y: 420, r: 50 }]
              },
              {
                sentence: 'She has got an "armchair".',
                hitAreas: [{ type: "polygon", points: [[15, 250], [515, 250], [515, 750], [15, 750]] }]
              },
              {
                sentence: 'Mia has got a "school newspaper".',
                hitAreas: [{ type: "circle", x: 1455, y: 570, r: 60 }]
              },
              {
                sentence: 'She has got a "bookshelf".',
                hitAreas: [{ type: "circle", x: 1400, y: 180, r: 80 }]
              },
              {
                sentence: 'Mia has got a "pet rabbit".',
                easterEggId: "petRabbit",
                hitAreas: [{ type: "circle", x: 1110, y: 830, r: 80 }]
              },
              {
                sentence: 'She has got a cup of "hot chocolate".',
                easterEggId: "hotChocolate",
                hitAreas: [{ type: "circle", x: 125, y: 555, r: 40 }]
              },
              { type: "choice", sentence: "She ____ a pet rabbit.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "Mia ____ glasses.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "She ____ lots of books.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "She ____ a laptop.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "Mia ____ a telescope.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "She ____ a school bag.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "Mia ____ an alarm clock.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "She ____ a heart-shaped pillow.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "yesno", question: "Has Mia got a robot?", options: ["Yes, she has", "No, she hasn't"], answer: "No, she hasn't" },
              { type: "yesno", question: "Has she got toy rabbits?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" },
              { type: "yesno", question: "Has Mia got a pet?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" },
              { type: "yesno", question: "Has she got a wardrobe?", options: ["Yes, she has", "No, she hasn't"], answer: "No, she hasn't" },
              { type: "yesno", question: "Has Mia got a bookcase?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "ELLA" }],
          nameTag: { x: 375, y: 40, baseWidth: 650, baseHeight: 370 },
          room: {
            name: "ELLA",
            gender: "female",
            pitch: 1.15,
            imagePath: "images/havegot-hasgot/ella-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 355, y: 125 },
            speechLift: 98,
            exitLine: "Thanks for visiting!",
            videoTrueFalse: { name: "ELLA", videoUrl: "https://media.adilhoca.com/video/5_possesions_ella.mp4", questions: [{ text: "Ella hasn't got a television.", answer: false, correction: "Ella has got a karaoke corner and a television." }, { text: "Ella has got a guitar.", answer: true }, { text: "Ella has got a music trophy.", answer: true }, { text: "Ella has got a piano.", answer: false, correction: "Ella has got a guitar." }, { text: "Sunny is Ella's cat.", answer: false, correction: "Sunny is Ella's colourful parrot." }, { text: "Ella has got a colourful parrot called Sunny.", answer: true }] },
            targets: [
              {
                sentence: 'Ella has got a "guitar".',
                showIntro: true,
                hitAreas: [{ type: "circle", x: 670, y: 270, r: 100 }]
              },
              {
                sentence: 'Ella has got a "karaoke microphone".',
                hitAreas: [{ type: "circle", x: 760, y: 320, r: 30 }]
              },
              {
                sentence: 'Ella has got a "television".',
                hitAreas: [{ type: "circle", x: 840, y: 325, r: 60 }]
              },
              {
                sentence: 'Ella has got a "music trophy".',
                hitAreas: [{ type: "circle", x: 820, y: 145, r: 30 }]
              },
              {
                sentence: 'I have got a "school backpack".',
                hitAreas: [{ type: "circle", x: 105, y: 780, r: 100 }]
              },
              {
                sentence: 'I have got a "teddy bear".',
                hitAreas: [{ type: "circle", x: 1505, y: 530, r: 60 }]
              },
              {
                sentence: 'Ella has got a "sofa".',
                hitAreas: [{ type: "polygon", points: [[1011, 361], [1411, 361], [1411, 561], [1011, 561]] }]
              },
              { type: "choice", sentence: "I ____ a television.", options: ["have got", "haven't got"], answer: "have got" },
              { type: "choice", sentence: "Ella ____ a chessboard.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "She ____ a guitar.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "I ____ a computer.", options: ["have got", "haven't got"], answer: "haven't got" },
              { type: "choice", sentence: "She ____ a desk lamp.", options: ["has got", "have got"], answer: "has got" },
              { type: "choice", sentence: "Ella ____ a sofa near the window.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "She ____ a piano.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "She ____ a karaoke microphone.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "yesno", question: "Has Ella got a guitar?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" },
              { type: "yesno", question: "Has she got an aquarium?", options: ["Yes, she has", "No, she hasn't"], answer: "No, she hasn't" },
              { type: "yesno", question: "Has Ella got football boots?", options: ["Yes, she has", "No, she hasn't"], answer: "No, she hasn't" },
              { type: "yesno", question: "Has Ella got a wardrobe?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" },
              { type: "yesno", question: "Has she got ballet shoes?", options: ["Yes, she has", "No, she hasn't"], answer: "No, she hasn't" }
            ]
          }
        },
        {
          kind: "category-list",
          parts: [{ text: "HANNAH" }],
          nameTag: { x: 500, y: 30, baseWidth: 650, baseHeight: 370 },
          room: {
            name: "HANNAH",
            gender: "female",
            pitch: 1.25,
            imagePath: "images/havegot-hasgot/hannah-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 400, y: 75 },
            exitLine: "Hey, let's ride bike together this weekend.",
            videoTrueFalse: { name: "HANNAH", videoUrl: "https://media.adilhoca.com/video/5_possesions_hannah.mp4", questions: [{ text: "Hannah has got a pink bike and a helmet.", answer: true }, { text: "Hannah has got hiking boots and a backpack.", answer: true }, { text: "Hannah has got a television in her room.", answer: false, correction: "Hannah hasn't got a television in her room." }, { text: "Hannah has got a computer in her room.", answer: false, correction: "Hannah hasn't got a computer in her room." }, { text: "Hannah has got a horse called Storm.", answer: true }, { text: "Storm is Hannah's dog.", answer: false, correction: "Storm is Hannah's horse." }] },
            exitDelay: 4000,
            easterEggs: [
              { id: "bicycle", line: "Let's go cycling!", duration: 3000 },
              { id: "horse", line: "Its name is Storm!", duration: 3000 }
            ],
            targets: [
              {
                sentence: 'Hannah has got a "bicycle".',
                showIntro: true,
                easterEggId: "bicycle",
                hitAreas: [{ type: "polygon", points: [[40, 250], [540, 250], [540, 750], [40, 750]] }]
              },
              {
                sentence: 'She has got a "helmet".',
                hitAreas: [{ type: "circle", x: 285, y: 425, r: 35 }]
              },
              {
                sentence: 'Hannah has got "hiking boots".',
                hitAreas: [{ type: "circle", x: 170, y: 830, r: 60 }]
              },
              {
                sentence: 'She has got a "hiking backpack".',
                hitAreas: [{ type: "circle", x: 285, y: 750, r: 100 }]
              },
              {
                sentence: 'Hannah has got two "lanterns".',
                hitAreas: [
                  { type: "circle", x: 1550, y: 765, r: 80 },
                  { type: "circle", x: 75, y: 885, r: 60 }
                ]
              },
              {
                sentence: 'She has got two "water bottles".',
                hitAreas: [
                  { type: "circle", x: 1350, y: 310, r: 30 },
                  { type: "circle", x: 1425, y: 710, r: 60 }
                ]
              },
              { type: "choice", sentence: "She ____ a hat.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "Hannah ____ a bookshelf.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "She ____ a medal.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "She ____ a computer.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "Hannah ____ a horse.", options: ["has got", "hasn't got"], answer: "has got", easterEggId: "horse" },
              { type: "choice", sentence: "She ____ glasses.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "choice", sentence: "Hannah ____ blonde hair.", options: ["has got", "hasn't got"], answer: "has got" },
              { type: "choice", sentence: "She ____ an alarm clock.", options: ["has got", "hasn't got"], answer: "hasn't got" },
              { type: "yesno", question: "Has Hannah got a compass?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" },
              { type: "yesno", question: "Has she got toy rabbits?", options: ["Yes, she has", "No, she hasn't"], answer: "No, she hasn't" },
              { type: "yesno", question: "Has Hannah got a map?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" },
              { type: "yesno", question: "Has she got a wardrobe?", options: ["Yes, she has", "No, she hasn't"], answer: "No, she hasn't" },
              { type: "yesno", question: "Has Hannah got a bookcase?", options: ["Yes, she has", "No, she hasn't"], answer: "Yes, she has" }
            ]
          }
        }
      ]
    },
    {
      id: "have-got-video-ella-olivia-strawberries",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_ella_olivia.mp4",
        lines: [
          { speaker: "ELLA", parts: [{ text: "Have you got the strawberries?" }] },
          { speaker: "OLIVIA", parts: [{ text: "Yep, I " }, { answer: "have got", choices: ["have got", "has got"] }, { text: " them right here." }] }
        ]
      }
    },
    {
      id: "have-got-video-david-valeria-honey",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_david_valeria.mp4",
        lines: [
          { speaker: "DAVID", parts: [{ text: "Mom, " }, { answer: "have we got", choices: ["have we got", "has we got"] }, { text: " any honey?" }] },
          { speaker: "VALERIA", parts: [{ text: "Yes, I've got some right here." }] }
        ]
      }
    },
    {
      id: "have-got-video-mia-giulia-strawberries",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_mia_giulia.mp4",
        lines: [
          { speaker: "MIA", parts: [{ text: "Mom, have we got everything?" }] },
          { speaker: "GIULIA", parts: [{ text: "Almost, we " }, { answer: "haven't got", choices: ["have got", "haven't got"] }, { text: " any strawberries." }] },
          { speaker: "MIA", parts: [{ text: "They've got some over there!" }] }
        ]
      }
    },
    {
      id: "have-got-video-noah-victoria-napkins",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_noah_victoria.mp4",
        lines: [
          { speaker: "NOAH", parts: [{ text: "Have you got any napkins?" }] },
          { speaker: "VICTORIA", parts: [{ text: "Yeah, I " }, { answer: "have got", choices: ["have got", "don't have got"] }, { text: " some." }] },
          { speaker: "NOAH", parts: [{ text: "Thanks." }] }
        ]
      }
    },
    {
      id: "have-got-video-chloe-emma-photos",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_chloe_emma.mp4",
        lines: [
          { speaker: "CHLOE", parts: [{ answer: "Have you", choices: ["Have you", "has you"] }, { text: " got any photos from yesterday?" }] },
          { speaker: "EMMA", parts: [{ text: "Yeah, I " }, { answer: "have got", choices: ["have got", "haven't got"] }, { text: " loads!" }] },
          { speaker: "CHLOE", parts: [{ text: "Show me!" }] },
          { speaker: "CHLOE", parts: [{ text: "Delete this quickly!" }] }
        ]
      }
    },
    {
      id: "have-got-video-benjamin-ethan-popcorn",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_benjamin_ethan.mp4",
        lines: [
          { speaker: "BENJAMIN", parts: [{ text: "Have we got everything?" }] },
          { speaker: "ETHAN", parts: [{ text: "Wait, we " }, { answer: "haven't got", choices: ["have got", "haven't got"] }, { text: " the popcorn." }] }
        ]
      }
    },
    {
      id: "have-got-video-hannah-chloe-chocolate",
      videoDialogue: {
        title: "WATCH, THEN COMPLETE THE DIALOGUE",
        videoUrl: "https://media.adilhoca.com/video/5_life_in_the_world_hannah_chloe.mp4",
        lines: [
          { speaker: "CHLOE", parts: [{ text: "Mine " }, { answer: "hasn't got", choices: ["has got", "hasn't got"] }, { text: " any chocolate." }] },
          { speaker: "HANNAH", parts: [{ text: "Here." }] },
          { speaker: "HANNAH", parts: [{ text: "Stop, stop, stop!" }] },
          { speaker: "CHLOE", parts: [{ text: "Perfect." }] }
        ]
      }
    }
  ]
};

const haveGotHasGotVideoStartIndex = haveGotHasGotFunction.sentences.findIndex(
  (item) => item.id === "have-got-video-ella-olivia-strawberries"
);
const haveGotHasGotVideoItems = haveGotHasGotFunction.sentences
  .slice(haveGotHasGotVideoStartIndex, haveGotHasGotVideoStartIndex + 7)
  .map((item) => ({
    id: item.id,
    speakers: [...new Set((item.videoDialogue.lines || []).map((line) => line.speaker).filter(Boolean))],
    videoDialogue: item.videoDialogue
  }));

haveGotHasGotFunction.sentences.splice(haveGotHasGotVideoStartIndex, haveGotHasGotVideoItems.length, {
  id: "have-got-has-got-video-hub",
  noVisual: true,
  simplePresentVideoHub: {
    title: "WATCH AND COMPLETE",
    items: haveGotHasGotVideoItems
  }
});

window.functionModules = window.functionModules || [];
window.functionModules.push(haveGotHasGotFunction);
