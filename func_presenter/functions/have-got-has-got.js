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
            imagePath: "images/havegot-hasgot/benjamin-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 1332, y: 250 },
            noSentenceBubble: true,
            exitLine: "See you later!",
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
            imagePath: "images/havegot-hasgot/victoria-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 1260, y: 190 },
            noSentenceBubble: true,
            exitLine: "Let's play chess someday, Bye",
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
            imagePath: "images/havegot-hasgot/lucas-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 1310, y: 105 },
            exitLine: "Come again, BYE!",
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
            imagePath: "images/havegot-hasgot/chloe-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 370, y: 75 },
            exitLine: "Nice to see you, BYE!",
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
            imagePath: "images/havegot-hasgot/noah-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 1060, y: 130 },
            noSentenceBubble: true,
            exitLine: "I must study Maths, see you.",
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
            imagePath: "images/havegot-hasgot/mia-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 390, y: 160 },
            speechLift: 50,
            exitLine: "Thanks for coming, bye.",
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
            imagePath: "images/havegot-hasgot/ella-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 355, y: 125 },
            speechLift: 98,
            exitLine: "Thanks for visiting!",
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
            imagePath: "images/havegot-hasgot/hannah-room.webp",
            imageWidth: 1672,
            imageHeight: 941,
            speechPoint: { x: 400, y: 75 },
            exitLine: "Hey, let's ride bike together this weekend.",
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
    }
  ]
};

window.functionModules = window.functionModules || [];
window.functionModules.push(haveGotHasGotFunction);
