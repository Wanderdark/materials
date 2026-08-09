/*
  LEAGUE OF LISTENING CONTENT
  Her video kaydı yalnızca bu dosyada tutulur; arayüz veya oyun mantığına
  eğitim içeriği yazılmaz. Bir kaydın oyuna girmesi için transcript / iki
  seçenek / correctOptionId alanları dolu olmalıdır.
*/
window.LEAGUE_OF_LISTENING_ITEMS = [
{
    id: "countries_ava",
    status: "published",
    videoSrc: "assets/video/countries_ava.mp4",
    title: "Ava introduces herself and shares a fact about the Netherlands.",
    transcript: "Ava : Hi, I'm Ava, I'm from the /Netherlands/, People /ride bikes/ everywhere there!",
    answerOptions: [
      { id: "a", text: "Ava : Merhaba, Ben Ava, /Hollanda/'danım, Orada insanlar her yere /bisikletle/ gider." },
      { id: "b", text: "Ava : Merhaba, Ben Ava, İsviçre'denim, Orada insanlar her yere yürüyerek gider." }
    ],
    easyDistractor: "Ava : Merhaba, Ben Ava, Almanya'danım, Orada insanlar her yere koşarak gider.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ava"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation","countries"],
    theme: "introduction",
   evidenceStart: "0:01.983",
evidenceEnd: null,
evidenceSentence: "I'm from the /Netherlands/, People /ride bikes/ everywhere there!",
  },

{
    id: "countries_benjamin",
    status: "published",
    videoSrc: "assets/video/countries_benjamin.mp4",
    title: "Benjamin introduces himself and shares a fact about Denmark.",
    transcript: "Benjamin : Hi, I'm Benjamin, I'm from Denmark, LEGO was invented in Denmark!",
    answerOptions: [
      { id: "a", text: "Benjamin : Merhaba, Ben Benjamin, Almanya'danım, LEGO Almanya'da icat edildi!" },
      { id: "b", text: "Benjamin : Merhaba, Ben Benjamin, /Danimarka/'danım, LEGO Danimarka'da icat edildi!" }
    ],
    easyDistractor: "Benjamin : Merhaba, Ben Benjamin, Fransa'danım, LEGO Fransa'da icat edildi!",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["benjamin"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation","countries"],
    theme: "introduction",
    evidenceStart: "0:01.922",
evidenceEnd: "0:03.502",
evidenceSentence: "I'm from Denmark",
  },

{
    id: "countries_chloe",
    status: "published",
    videoSrc: "assets/video/countries_chloe.mp4",
    title: "Chloe introduces herself and shares a fact about France.",
    transcript: "Chloe : Hi, I'm Chloe, I'm from France, The Eiffel Tower gets a little taller in /summer/!",
    answerOptions: [
      { id: "a", text: "Chloe : Merhaba, Ben Chloe, Fransa'danım, Eyfel Kulesi /yazın/ biraz daha uzar!" },
      { id: "b", text: "Chloe : Merhaba, Ben Chloe, Fransa'danım, Eyfel Kulesi kışın biraz daha uzar!" }
    ],
    easyDistractor: "Chloe : Merhaba, Ben Chloe, Fransa'danı, Eyfel Kulesi sadece yazın açık!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["chloe"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation"],
    theme: "introduction",
    evidenceStart: "0:02.876",
evidenceEnd: null,
evidenceSentence: "The Eiffel Tower gets a little taller in /summer/!",
  },

{
    id: "countries_daniel",
    status: "published",
    videoSrc: "assets/video/countries_daniel.mp4",
    title: "Daniel introduces himself and shares a fact about Spain.",
    transcript: "Daniel : Hi, I'm Daniel, I'm from Spain, Spain has the world's largest /tomato fight/!",
    answerOptions: [
      { id: "a", text: "Daniel : Merhaba, Ben Daniel, İspanya'danım, İspanya'da dünyanın en büyük boğa dövüşleri yapılır!" },
      { id: "b", text: "Daniel : Merhaba, Ben Daniel, İspanya'danım, İspanya'da dünyanın en büyük /domates savaşı/ yapılır!" }
    ],
    easyDistractor: "Daniel : Merhaba, Ben Daniel, İspanya'danım, İspanya'da portakal savaşı yapılır!",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["daniel"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation"],
    theme: "introduction",
    evidenceStart: "0:02.820",
evidenceEnd: null,
evidenceSentence: "Spain has the world's largest /tomato fight/!",
  },

  {
    id: "countries_david",
    status: "published",
    videoSrc: "assets/video/countries_david.mp4",
    title: "David introduces himself and shares a fact about Mexico.",
    transcript: "David : Hi, I'm David, I'm from /Mexico/, Mexico has more pyramids than Egypt!",
    answerOptions: [
      { id: "a", text: "David : Merhaba, Ben David, /Meksika/'danım, Meksika'da Mısır'dan daha fazla piramit vardır!" },
      { id: "b", text: "David : Merhaba, Ben David, Mısır'danım, Mısır'da Meksika'dan daha fazla piramit vardır!" }
    ],
    easyDistractor: "David : Merhaba, Ben David, Meksika'danım, Meksika'da hiç piramit yoktur!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["david"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation","countries"],
    theme: "introduction",
    evidenceStart: "0:01.621",
evidenceEnd: "0:03.228",
evidenceSentence: "I'm from /Mexico/",
  },

  {
    id: "5_personal_life_appearance_zoe",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_zoe.mp4",
    title: "Zoe describes her physical appearance.",
    transcript: "Zoe : Hi, I'm Zoe, I have /long curly/ black hair and brown eyes.",
    answerOptions: [
      { id: "a", text: "Zoe : Merhaba, ben Zoe, kısa kıvırcık kahverengi saçlarım ve mavi gözlerim var." },
      { id: "b", text: "Zoe : Merhaba, ben Zoe, /uzun kıvırcık/ siyah saçlarım ve kahverengi gözlerim var." }
    ],
    easyDistractor: "Zoe : Merhaba, ben Zoe, uzun siyah saçlarım ve yeşil gözlerim var.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["zoe"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
  evidenceStart: "0:02.552",
evidenceEnd: "0:05.101",
evidenceSentence: "I have /long curly/ black hair.",
  },

{
    id: "countries_ella",
    status: "published",
    videoSrc: "assets/video/countries_ella.mp4",
    title: "Ella introduces herself and shares a fact about Australia.",
    transcript: "Ella : Hi, I'm Ella, I/'m from Australia/, Australia is home to kangaroos and koalas!",
    answerOptions: [
      { id: "a", text: "Ella : Merhaba, Ben Ella, Avusturya'lıyım, Avustralya kanguruların ve koalaların ülkesidir!" },
      { id: "b", text: "Ella : Merhaba, Ben Ella, /Avustralya'danım/, Avustralya kanguruların ve koalaların ülkesidir!" }
    ],
    easyDistractor: "Ella : Merhaba, Ben Ella, Avustralya'danım, Avustralya kutup ayılarının ülkesidir!",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ella"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation","countries"],
    theme: "introduction",
    evidenceStart: "0:01.502",
evidenceEnd: "0:02.642",
evidenceSentence: "I/'m from Australia/",
  },

{
    id: "countries_emma",
    status: "published",
    videoSrc: "assets/video/countries_emma.mp4",
    title: "Emma introduces herself and shares a fact about Japan.",
    transcript: "Emma : Hi, I'm Emma, I'm from Japan, Japan has /more than six thousand/ islands!",
    answerOptions: [
      { id: "a", text: "Emma : Merhaba, Ben Emma, Japonya'danım, Japonya'da /6.000'den fazla/ ada vardır!" },
      { id: "b", text: "Emma : Merhaba, Ben Emma, Japonya'danım, Japonya'da 600 civarı ada vardır!" }
    ],
    easyDistractor: "Emma : Merhaba, Ben Emma, Japonya'danım, Japonya'da hiç ada yoktur!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["emma"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation","numbers"],
    theme: "introduction",
    evidenceStart: "0:03.054",
evidenceEnd: null,
evidenceSentence: "Japan has /more than six thousand/ islands!",
  },

{
    id: "countries_ethan",
    status: "published",
    videoSrc: "assets/video/countries_ethan.mp4",
    title: "Ethan shares facts about England and London.",
    transcript: "Ethan : Hi, I'm Ethan, England is famous for Big Ben, And did you know that London has more than /one hundred and seventy/ museums?",
    answerOptions: [
      { id: "a", text: "Ethan : Merhaba, Ben Ethan, İngiltere Big Ben ile ünlüdür, Londra'da 17'den fazla müze olduğunu biliyor muydun?" },
      { id: "b", text: "Ethan : Merhaba, Ben Ethan, İngiltere Big Ben ile ünlüdür, Londra'da /170/'ten fazla müze olduğunu biliyor muydun?" }
    ],
    easyDistractor: "Ethan : Merhaba, Ben Ethan, Big Ben Amerika'dadır, Londra'da 10 müze vardır!",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ethan"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation","numbers"],
    theme: "introduction",
    evidenceStart: "0:03.544",
evidenceEnd: null,
evidenceSentence: "And did you know that London has more than /a hundred and seventy/ museums?",
  },

  {
    id: "countries_hannah",
    status: "published",
    videoSrc: "assets/video/countries_hannah.mp4",
    title: "Hannah introduces herself and shares a fact about Norway.",
    transcript: "Hannah : Hi, I'm Hannah, I'm from Norway, In /summer/, the sun doesn't set /for weeks/ in some parts of Norway!",
    answerOptions: [
      { id: "a", text: "Hannah : Merhaba, Ben Hannah, Norveç'tenim, /Yazın/, Norveç'in bazı bölgelerinde güneş /haftalarca/ batmaz!" },
      { id: "b", text: "Hannah : Merhaba, Ben Hannah, Norveç'tenim, Kışın, Norveç'in bazı bölgelerinde güneş aylarca batmaz!" }
    ],
    easyDistractor: "Hannah : Merhaba, Ben Hannah, Norveç'tenim, Norveç'te güneş hiç batmaz!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["hannah"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation","expressingtime"],
    theme: "introduction",
    evidenceStart: "0:02.591",
evidenceEnd: null,
evidenceSentence: "In /summer/, the sun doesn't set for weeks in some parts of Norway!",
  },
  {
    id: "5_personal_life_appearance_victoria",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_victoria.mp4",
    title: "Victoria describes her physical appearance.",
    transcript: "Victoria : Hi, I'm Victoria, I have long wavy black hair, blue eyes, and /round glasses/.",
    answerOptions: [
      { id: "a", text: "Victoria : Merhaba, ben Victoria, uzun dalgalı siyah saçlarım, mavi gözlerim ve dikdörtgen gözlüklerim var." },
      { id: "b", text: "Victoria : Merhaba, ben Victoria, uzun dalgalı siyah saçlarım, mavi gözlerim ve /yuvarlak gözlüklerim/ var." }
    ],
    easyDistractor: "Victoria : Merhaba, ben Victoria, kısa siyah saçlarım, yeşil gözlerim ve dikdörtgen gözlüklerim var.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["victoria"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
 evidenceStart: "0:02.606",
evidenceEnd: null,
evidenceSentence: "I have long wavy black hair, blue eyes, and /round glasses/.",
  },

{
    id: "countries_jack",
    status: "published",
    videoSrc: "assets/video/countries_jack.mp4",
    title: "Jack introduces himself and shares a fact about Scotland.",
    transcript: "Jack : Hi, I'm Jack, I'm from /Scotland/, Scotland's national animal is the unicorn!",
    answerOptions: [
      { id: "a", text: "Jack : Merhaba, Ben Jack, İsviçre'liyim, İsviçrenin ulusal hayvanı tek boynuzlu attır!" },
      { id: "b", text: "Jack : Merhaba, Ben Jack, /İskoçya/'danım, İskoçya'nın ulusal hayvanı tek boynuzlu attır!" }
    ],
    easyDistractor: "Jack : Merhaba, Ben Jack, İskoçya'danım, İskoçya'nın ulusal hayvanı boz ayıdır!",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["jack"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation","countries"],
    theme: "introduction",
    evidenceStart: "0:01.547",
evidenceEnd: "0:02.888",
evidenceSentence: "I'm from /Scotland/",
  },

{
    id: "countries_lucas",
    status: "published",
    videoSrc: "assets/video/countries_lucas.mp4",
    title: "Lucas introduces himself and shares a fact about Brazil.",
    transcript: "Lucas : Hi, I'm Lucas, I'm from Brazil, Brazil has won the World Cup /five times/!",
    answerOptions: [
      { id: "a", text: "Lucas : Merhaba, Ben Lucas, Brezilya'danım, Brezilya Dünya Kupası'nı /beş kez/ kazandı!" },
      { id: "b", text: "Lucas : Merhaba, Ben Lucas, Brezilya'danım, Brezilya Dünya Kupası'nı beş yıl önce kazandı!" }
    ],
    easyDistractor: "Lucas : Merhaba, Ben Lucas, Brezilya'danım, Brezilya Dünya Kupası'nı hiç kazanamadı!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["lucas"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation","frequency_adverbs"],
    theme: "introduction",
    evidenceStart: "0:02.521",
evidenceEnd: null,
evidenceSentence: "Brazil has won the World Cup /five times/",
  },

{
    id: "countries_mia",
    status: "published",
    videoSrc: "assets/video/countries_mia.mp4",
    title: "Mia introduces herself and shares a fact about Türkiye.",
    transcript: "Mia : Hi, I'm Mia, I'm from Türkiye, Türkiye is the only country in the /world/ on two continents!",
    answerOptions: [
      { id: "a", text: "Mia : Merhaba, Ben Mia, Türkiye'denim, Türkiye avrupada iki kıta üzerinde bulunan tek ülkedir!" },
      { id: "b", text: "Mia : Merhaba, Ben Mia, Türkiye'denim, Türkiye /dünyada/ iki kıta üzerinde bulunan tek ülkedir!" }
    ],
    easyDistractor: "Mia : Merhaba, Ben Mia, Türkiye'denim, Türkiye dünyada üç kıta üzerinde bulunan tek ülkedir!",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["mia"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation"],
    theme: "introduction",
    evidenceStart: "0:02.642",
evidenceEnd: null,
evidenceSentence: "Türkiye is the only country in the /world/ on two continents!",
  },

{
    id: "countries_noah",
    status: "published",
    videoSrc: "assets/video/countries_noah.mp4",
    title: "Noah introduces himself and shares a fact about Germany.",
    transcript: "Noah : Hi, I'm Noah, I'm from /Germany, Germany/ has more than 25,000 /castles/!",
    answerOptions: [
      { id: "a", text: "Noah : Merhaba, Ben Noah, /Almanya'danım, Almanya/'da 25.000'den fazla /kale/ vardır!" },
      { id: "b", text: "Noah : Merhaba, Ben Noah, Romanya'danım, Romanya'da 25.000'den fazla kilise vardır!" }
    ],
    easyDistractor: "Noah : Merhaba, Ben Noah, Almanya'danım, Almanya'da 25.000'den fazla cami vardır!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["noah"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation"],
    theme: "introduction",
  evidenceStart: "0:01.579",
evidenceEnd: null,
evidenceSentence: "I'm from /Germany, Germany/ has more than 25,000 /castles/!",
  },

{
    id: "countries_olivia",
    status: "published",
    videoSrc: "assets/video/countries_olivia.mp4",
    title: "Olivia introduces herself and shares a fact about Sweden.",
    transcript: "Olivia : Hi, I'm Olivia, I'm from Sweden, /The Nobel Prize/ comes from Sweden!",
    answerOptions: [
      { id: "a", text: "Olivia : Merhaba, Ben Olivia, İsveç'tenim, Fotoğraf makinasi İsveç'te icat edilmiştir!" },
      { id: "b", text: "Olivia : Merhaba, Ben Olivia, İsveç'tenim, /Nobel Ödülü/ İsveç'ten gelir!" }
    ],
    easyDistractor: "Olivia : Merhaba, Ben Olivia, İsveç'tenim, Nobel Ödülü Almanya'dan gelir!",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["olivia"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation"],
    theme: "introduction",
   evidenceStart: "0:03.445",
evidenceEnd: "0:06.077",
evidenceSentence: "/The Nobel Prize/ comes from Sweden!",
  },

{
    id: "countries_victoria",
    status: "published",
    videoSrc: "assets/video/countries_victoria.mp4",
    title: "Victoria introduces herself and shares a fact about the United Kingdom.",
    transcript: "Victoria : Hi, I'm Victoria, I'm from the /United Kingdom/, The world's oldest passenger railway is in the United Kingdom!",
    answerOptions: [
      { id: "a", text: "Victoria : Merhaba, Ben Victoria, /Birleşik Krallık/'tanım, Dünyanın en eski yolcu demiryolu Birleşik Krallık'tadır!" },
      { id: "b", text: "Victoria : Merhaba, Ben Victoria, Amerika Birleşik Devletlerin'denim, Dünyanın en eski yolcu demiryolu ABD'dedir!" }
    ],
    easyDistractor: "Victoria : Merhaba, Ben Victoria, Birleşik Krallık'tanım, Dünyanın en eski yolcu demiryolu Avustralya'dadır!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["victoria"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation","countries"],
    theme: "introduction",
evidenceStart: "0:01.326",
evidenceEnd: "0:02.889",
evidenceSentence: "I'm from the /United Kingdom/",
  },

{
    id: "countries_zoe",
    status: "published",
    videoSrc: "assets/video/countries_zoe.mp4",
    title: "Zoe introduces herself and shares a fact about Greece.",
    transcript: "Zoe : Hi, I'm Zoe, I'm from Greece, /The Olympic Games/ began in Greece!",
    answerOptions: [
      { id: "a", text: "Zoe : Merhaba, Ben Zoe, Yunanistan'danım, ilk bilgisayar oyunu Yunanistan'da üretildi!" },
      { id: "b", text: "Zoe : Merhaba, Ben Zoe, Yunanistan'danım, /Olimpiyat Oyunları/ Yunanistan'da başladı!" }
    ],
    easyDistractor: "Zoe : Merhaba, Ben Zoe, Yunanistan'danım, Olimpiyat Oyunları İtalya'da başladı!",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["zoe"],
    grades: [5, 6],
    functions: ["introductions", "givinglocationinformation"],
    theme: "introduction",
   evidenceStart: "0:03.438",
evidenceEnd: null,
evidenceSentence: "/The Olympic Games/ began in Greece!",
  },

{
    id: "introduce_olivia",
    status: "published",
    videoSrc: "assets/video/introduce_olivia.mp4",
    title: "Olivia introduces herself",
    transcript: "Hi, I'm Olivia, I'm from /Sweden/. I /love/ taking photos, I also enjoy painting and art.",
    answerOptions: [
      { id: "a", text: "Olivia : Selam, ben Olivia, /İsveç/'denim, fotoğraf çekmeyi /severim/, ayrıca resim yapmaktan ve sanattan hoşlanırım." },
      { id: "b", text: "Olivia : Selam, ben Olivia, İsviçre'denim, fotoğraf çekmeye bayılırım, ayrıca resim yapmayı ve sanatı severim." }
    ],
    easyDistractor: "Olivia : Selam, Ben Olivia, İsveç'tenim, Futbol oynamayı severim.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["olivia"],
    grades: [5, 6],
    functions: ["talking_about_hobbies","countries"],
    theme: "introduction",
    evidenceStart: "0:01.486",
evidenceEnd: "0:08.696",
evidenceSentence: "I'm from /Sweden/. I /love/ taking photos",
  },

 {
    id: "5_personal_life_appearance_olivia",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_olivia.mp4",
    title: "Olivia describes her physical appearance.",
    transcript: "Olivia : Hi, I'm Olivia, I have a chin-length brown bob and /green eyes/.",
    answerOptions: [
      { id: "a", text: "Olivia : Merhaba, ben Olivia, çene hizasında kahverengi küt saçlarım ve /yeşil gözlerim/ var." },
      { id: "b", text: "Olivia : Merhaba, ben Olivia, çene hizasında kahverengi küt saçlarım ve mavi gözlerim var." }
    ],
    easyDistractor: "Olivia : Merhaba, ben Olivia, çene hizasında siyah saçlarım ve yeşil gözlerim var.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["olivia"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:02.818",
evidenceEnd: "0:07.062",
evidenceSentence: "I have a chin-length brown bob and /green eyes/.",
  },
  {
    id: "5_school_life_olivia_ella",
    status: "published",
    videoSrc: "assets/video/5_school_life_olivia_ella.mp4",
    title: "Olivia asks Ella whether she is ready for the concert.",
    transcript: "Olivia : /Are you ready/ for the concert? Ella : Yes, I am, I'm really /excited/!",
    answerOptions: [
      { id: "a", text: "Olivia : Konser vakti geldi mi? Ella : Evet, öyle, Çok gerginim." },
      { id: "b", text: "Olivia : Konser için /hazır mısın/? Ella : Evet, Hazırım, Gerçekten /heyecanlıyım/!" }
    ],
    easyDistractor: "Olivia : Yarın için hazır mısın? Ella : Evet, Hazırım.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["olivia", "ella"],
    grades: [5, 6],
    functions: ["asking_about_condition", "expressing_feelings"],
    theme: "School_life",
   evidenceStart: "0:00.479",
evidenceEnd: "0:04.598",
evidenceSentence: "Olivia : /Are you ready/ for the concert? Ella : Yes, I am, I'm really /excited/!",
  },

  {
    id: "5_personal_life_appearance_noah",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_noah.mp4",
    title: "Noah describes his physical appearance.",
    transcript: "Noah : Hi, I'm Noah, I have short straight brown hair, /green/ eyes, and /rectangular glasses/.",
    answerOptions: [
      { id: "a", text: "Noah : Merhaba, ben Noah, kısa düz kahverengi saçlarım, mavi gözlerim ve yuvarlak gözlüklerim var." },
      { id: "b", text: "Noah : Merhaba, ben Noah, kısa düz kahverengi saçlarım, yeşil gözlerim ve /dikdörtgen gözlüklerim/ var." }
    ],
    easyDistractor: "Noah : Merhaba, ben Noah, kısa kahverengi saçlarım, yeşil gözlerim ve yuvarlak gözlüklerim var.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["noah"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
 evidenceStart: "0:01.782",
evidenceEnd: null,
evidenceSentence: "I have short straight brown hair, /green/ eyes, and /rectangular glasses/.",
  },

{
    id: "5_personal_life_appearance_mia",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_mia.mp4",
    title: "Mia describes her physical appearance.",
    transcript: "Mia : Hi, I'm Mia, I have long /wavy brown/ hair and blue eyes.",
    answerOptions: [
      { id: "a", text: "Mia : Merhaba, ben Mia, uzun /dalgalı kahverengi/ saçlarım/ ve mavi gözlerim var." },
      { id: "b", text: "Mia : Merhaba, ben Mia, uzun kıvırcık siyah saçlarım ve mavi gözlerim var." }
    ],
    easyDistractor: "Mia : Merhaba, ben Mia, uzun kahverengi saçlarım ve kahverengi gözlerim var.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["mia"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:03.139",
evidenceEnd: "0:07.207",
evidenceSentence: "I have long /wavy brown/ hair and blue eyes.",
  },

  {
    id: "5_personal_life_appearance_lucas",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_lucas.mp4",
    title: "Lucas describes his physical appearance.",
    transcript: "Lucas : Hi, I'm Lucas, I have short /curly black/ hair and brown eyes.",
    answerOptions: [
      { id: "a", text: "Lucas : Merhaba, ben Lucas, kısa /kıvırcık siyah/ saçlarım ve /kahverengi/ gözlerim var." },
      { id: "b", text: "Lucas : Merhaba, ben Lucas, kısa dalgalı siyah saçlarım ve siyah gözlerim var." }
    ],
    easyDistractor: "Lucas : Merhaba, ben Lucas, kısa siyah saçlarım ve yeşil gözlerim var.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["lucas"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:02.626",
evidenceEnd: null,
evidenceSentence: "I have short /curly black/ hair and brown eyes",
  },

  {
    id: "5_personal_life_appearance_jack",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_jack.mp4",
    title: "Jack describes his physical appearance.",
    transcript: "Jack : Hi, I'm Jack, I have short /straight black/ hair and brown eyes.",
    answerOptions: [
      { id: "a", text: "Jack : Merhaba, ben Jack, kısa /düz siyah/ saçlarım ve kahverengi gözlerim var." },
      { id: "b", text: "Jack : Merhaba, ben Jack, kısa kıvırcık siyah saçlarım ve kahverengi gözlerim var." }
    ],
    easyDistractor: "Jack : Merhaba, ben Jack, kısa siyah saçlarım ve yeşil gözlerim var.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["jack"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:02.543",
evidenceEnd: null,
evidenceSentence: "I have short /straight black/ hair and brown eyes",
  },

  {
    id: "introduce_mia_part2",
    status: "published",
    videoSrc: "assets/video/introduce_mia.mp4",
    videoStart: "0:06.9",
    title: "Mia talks about her favourite activities.",
    transcript: "/Fairy tales/ are my favorite, I love /writing in my diary/ in the evenings, Nice to meet you, bye.",
    answerOptions: [
      { id: "a", text: "Mia : /Peri masalları/ favorimdir, Akşamları günlüğüme yazmayı çok severim." },
      { id: "b", text: "Mia : Macera kitapları favorimdir, Akşamları günlüğümü okumayı çok severim." }
    ],
    easyDistractor: "Mia : Selam, Ben Mia, Okumayı sevmiyorum, Macera filmleri favorimdir.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["mia"],
    grades: [5, 6],
    functions: ["introductions"],
    theme: "introduction",
   evidenceStart: "0:06.985",
evidenceEnd: "0:12.976",
evidenceSentence: "/Fairy tales/ are my favorite, I love /writing in my diary/ in the evenings, Nice to meet you, bye",
  },

 {
    id: "introduce_mia_part1",
    status: "published",
    videoSrc: "assets/video/introduce_mia.mp4",
    videoStart: "0:00.000",
    videoEnd: "0:05.100",
    title: "Mia introduces herself and Coco.",
    transcript: "Hi, I'm Mia, /I was born/ in Turkiye, This is my rabbit, Coco.",
    answerOptions: [
      { id: "a", text: "Mia : Selam, Ben Mia, Türk'üm, Bu benim tavşanım, Coco." },
      { id: "b", text: "Mia : Selam, Ben Mia, /Türkiye'de doğdum/, Bu benim /tavşanım/, Coco." }
    ],
    easyDistractor: "Mia : Selam, Ben Mia, Türkiye'de yaşıyorum, Bu benim kedim, Luna.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["mia"],
    grades: [5, 6],
    functions: ["introductions"],
    theme: "introduction",
    evidenceStart: "0:01.795",
evidenceEnd: "0:03.489",
evidenceSentence: "/I was born/ in Turkiye",
  },

  {
    id: "introduce_ella_part1",
    status: "published",
    videoSrc: "assets/video/introduce_ella.mp4",
    videoStart: "0:00.000",
    videoEnd: "0:06.17",
    title: "Ella introduces herself",
    transcript: "Hi, I'm Ella, I was born in /Australia/, I enjoy /singing/.",
    answerOptions: [
      { id: "a", text: "Ella : Selam, Ben Ella, Avusturya'da doğdum, Şarkı dinlemekten hoşlanırım." },
      { id: "b", text: "Ella : Selam, Ben Ella, /Avustralya/'da doğdum, /Şarkı söylemek/ten hoşlanırım." }
    ],
    easyDistractor: "Mia : Selam, Ben Ella, Avusturya'da yaşıyorum, Şarkı söylemeyi sevmem.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ella"],
    grades: [5, 6],
    functions: ["talking_about_hobbies","countries"],
    theme: "introduction",
    evidenceStart: "0:01.648",
evidenceEnd: "0:06.341",
evidenceSentence: "I was born in /Australia/, I enjoy /singing/",
  },

{
    id: "introduce_ella_part2",
    status: "published",
    videoSrc: "assets/video/introduce_ella.mp4",
    videoStart: "0:08",
    title: "Ella introduces herself.",
    transcript: "I enjoy /spending time/ with my friends, Nice to meet you, Let's sing together someday.",
    answerOptions: [
      { id: "a", text: "Ella : Arkadaşlarımla /zaman geçirmekten/ hoşlanırım, Tanıştığımıza sevindim, Bir gün beraber şarkı söyleyelim" },
      { id: "b", text: "Ella : Arkadaşlarımla buluşmaktan hoşlanırım, Tanıştığımıza sevindim, Bir gün beraber şarkı söyleyelim" }
    ],
    easyDistractor: "Ella : Arkadaşlarımla zaman geçirmeyi pek sevmem, Tanıştığımıza sevindim, Bir gün beraber şarkı dinleyelim.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ella"],
    grades: [5, 6],
    functions: ["introductions"],
    theme: "introduction",
    evidenceStart: "0:08.321",
evidenceEnd: "0:10.585",
evidenceSentence: "I enjoy /spending time/ with my friends",
  },

{
    id: "introduce_chloe_part1",
    status: "published",
    videoSrc: "assets/video/introduce_chloe.mp4",
    videoEnd: "0:04.06",
    title: "Chloe introduces herself",
    transcript: "Hi I'm Chloe, I'm twelve years old and /I'm from/ France.",
    answerOptions: [
      { id: "a", text: "Chloe : Ben 12 yaşındayım ve Fransa'/lıyım/." },
      { id: "b", text: "Chloe : Ben 12 yıldır Fransa'dayım." }
    ],
    easyDistractor: "Chloe : Ben 11 yaşındayım ve Fransa'lıyım.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["chloe"],
    grades: [5, 6],
    functions: "introductions",
    theme: "introduction",
   evidenceStart: "0:02.920",
evidenceEnd: "0:04.102",
evidenceSentence: "/I'm from/ France",
  },
 {
    id: "introduce_chloe_part2",
    status: "published",
    videoSrc: "assets/video/introduce_chloe.mp4",
    videoStart: "0:04.06",
    title: "Chloe introduces herself",
    transcript: "Chloe : I love playing the piano, I'm a /sixth/ grade student, My favorite lesson is English, See you soon.",
    answerOptions: [
      { id: "a", text: "Chloe : Piyano çalmayı severim, /altıncı/ sınıf öğrenciyim, favori dersim ingilizce, görüşürüz!" },
      { id: "b", text: "Chloe : Piyano çalmayı severim, beşinci sınıf öğrenciyim, favori dersim ingilizce, görüşürüz!" }
    ],
    easyDistractor: "Chloe : Piyano çalmayı severim, altıncı sınıf öğrenciyim, en başarılı dersim ingilizce, görüşürüz!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["chloe"],
    grades: [5, 6],
    functions: "introductions",
    theme: "introduction",
   evidenceStart: "0:09.188",
evidenceEnd: "0:10.995",
evidenceSentence: "I'm a /sixth/ grade student",
  },

  {
    id: "5_personal_life_appearance_hannah",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_hannah.mp4",
    title: "Hannah describes her physical appearance.",
    transcript: "Hannah : Hi, I'm Hannah, I have /long straight/ blonde hair and /blue/ eyes.",
    answerOptions: [
      { id: "a", text: "Hannah : Merhaba, ben Hannah, orta uzunlukta düz sarı saçlarım ve yeşil gözlerim var." },
      { id: "b", text: "Hannah : Merhaba, ben Hannah, /uzun düz/ sarı saçlarım ve /mavi/ gözlerim var." }
    ],
    easyDistractor: "Hannah : Merhaba, ben Hannah, uzun sarı saçlarım ve kahverengi gözlerim var.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["hannah"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:02.336",
evidenceEnd: "0:07.155",
evidenceSentence: "I have /long straight/ blonde hair and /blue/ eyes.",
  },

{
    id: "introduce_hannah_part1",
    status: "published",
    videoSrc: "assets/video/introduce_hannah.mp4",
    videoEnd: "0:09.10",
    title: "Hannah introduces herself",
    transcript: "Hi I'm Hannah, I was born in Norway,I love /cycling and exploring outdoors/.",
    answerOptions: [
      { id: "a", text: "Hannah : Selam, ben Hannah, Norveç'te doğdum, /Bisiklet sürmeyi ve açıkhava keşiflerini/ çok severim." },
      { id: "b", text: "Hannah : Selam, ben Hannah, Norveç'te doğdum, At sürmeyi ve keşif yapmayı çok severim." }
    ],
    easyDistractor: "Hannah : Selam, ben Hannah. İsveç'te doğdum. At sürmeyi ve açıkhava keşiflerini çok severim.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["hannah"],
    grades: [5, 6],
    functions: "talking_about_hobbies",
    theme: "introduction",
    evidenceStart: "0:05.031",
evidenceEnd: "0:08.266",
evidenceSentence: "I love /cycling and exploring outdoors/",
  },

{
    id: "introduce_hannah_part2",
    status: "published",
    videoSrc: "assets/video/introduce_hannah.mp4",
    videoStart: "0:09.5",
    title: "Hannah introduces herself",
    transcript: "Hannah : This is my horse, Storm, /Hope to see you soon/.",
    answerOptions: [
      { id: "a", text: "Hannah : Bu benim atım Storm, /Umarım en kısa sürede tekrar görüşürüz!/" },
      { id: "b", text: "Hannah : Bu benim atım Storm, Şimdi ata bineceğim!" }
    ],
    easyDistractor: "Hannah : Bu benim atım Storm, Kendine iyi bak!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["hannah"],
    grades: [5, 6],
    functions: "expressing_hopes",
    theme: "introduction",
    evidenceStart: "0:13.487",
evidenceEnd: null,
evidenceSentence: "/Hope to see you soon/",
  },

{
    id: "introduce_victoria_part1",
    status: "published",
    videoSrc: "assets/video/introduce_victoria.mp4",
    videoEnd: "0:06.11",
    title: "Victoria introduces herself",
    transcript: "Hi I'm Victoria, I was born in /United Kingdom/, This is my hamster, Pixel.",
    answerOptions: [
      { id: "a", text: "Victoria : Selam, ben Victoria, /Birleşik Krallık/'da doğdum, Bu benim hamster'im, Pixel." },
      { id: "b", text: "Victoria : Selam, ben Victoria, Amerika Birleşik Devletlerin'de doğdum, Bu benim hamster'im, Pixel." }
    ],
    easyDistractor: "Victoria : Selam, ben Victoria, İtalya'de doğdum, Bu benim hamster'im, Pixel.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["victoria"],
    grades: [5, 6],
    functions: "introductions",
    theme: "introduction",
    evidenceStart: "0:01.848",
evidenceEnd: "0:04.201",
evidenceSentence: "I was born in /United Kingdom/",
  },

{
    id: "introduce_victoria_part2",
    status: "published",
    videoSrc: "assets/video/introduce_victoria.mp4",
    videoStart: "0:07.05",
    videoEnd: "0:09.55",
    title: "Victoria introduces herself",
    transcript: "Victoria : I love /coding/ and /building new things./",
    answerOptions: [
      { id: "a", text: "Victoria : Bilgisayar oynamayı ve yeni yerler keşfetmeyi çok severim." },
      { id: "b", text: "Victoria : /Kodlamayı/ ve /yeni şeyler inşa etmeyi/ çok severim." }
    ],
    easyDistractor: "Victoria : Bilgisayar oynamayı ve LEGO ile uğramayı çok severim.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["victoria"],
    grades: [5, 6],
    functions: "talking_about_hobbies",
    theme: "introduction",
    evidenceStart: "0:07.037",
evidenceEnd: "0:09.523",
evidenceSentence: "Victoria : I love /coding/ and /building new things./",
  },

{
    id: "introduce_victoria_part3",
    status: "published",
    videoSrc: "assets/video/introduce_victoria.mp4",
    videoStart: "0:10",
    title: "Victoria introduces herself",
    transcript: "Victoria : I enjoy /solving puzzles/ and playing chess.",
    answerOptions: [
      { id: "a", text: "Victoria : Tahta oyunlarından ve satranç oynamaktan hoşlanırım." },
      { id: "b", text: "Victoria : /Bulmaca çözmekten/ ve satranç oynamaktan hoşlanırım." }
    ],
    easyDistractor: "Victoria : Bulmaca çözmeyi ve satranç oynamayı hiç sevmem.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["victoria"],
    grades: [5, 6],
    functions: "talking_about_hobbies",
    theme: "introduction",
   evidenceStart: "0:10.710",
evidenceEnd: "0:13.574",
evidenceSentence: "Victoria : I enjoy /solving puzzles/ and playing chess.",
  },

{
    id: "introduce_ava_part1",
    status: "published",
    videoSrc: "assets/video/introduce_ava.mp4",
    videoEnd: "0:06.11",
    title: "Ava introduces herself",
    transcript: "Hi I'm Ava, I was born in /Netherlands/, This is my dog, His name is Buddy.",
    answerOptions: [
      { id: "a", text: "Ava : Selam, ben Ava, İsviçre'de doğdum, Bu benim köpeğim, onun adı Buddy." },
      { id: "b", text: "Ava : Selam, ben Ava, /Hollanda/'da doğdum, Bu benim köpeğim, onun adı Buddy.." }
    ],
    easyDistractor: "Ava : Selam, ben Ava, İsviçre'de doğdum, Bu benim köpeğim, onun adı Max..",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ava"],
    grades: [5, 6],
    functions: "introductions",
    theme: "introduction",
   evidenceStart: "0:01.540",
evidenceEnd: "0:03.435",
evidenceSentence: "I was born in /Netherlands/",
  },

{
    id: "introduce_ava_part2",
    status: "published",
    videoSrc: "assets/video/introduce_ava.mp4",
    videoStart: "0:07.5",
    title: "Ava introduces herself",
    transcript: "Ava : I enjoy /taking care of animals/, and I enjoy /spending time in nature/.",
    answerOptions: [
      { id: "a", text: "Ava : Hayvanlarla oynamaktan ve açıkhavada dolaşmaktan hoşlanırım." },
      { id: "b", text: "Ava : /Hayvanlarla ilgilenmekten/ ve /doğada vakit geçirmekten/ hoşlanırım." }
    ],
    easyDistractor: "Ava : Hayvanlarla ilgilenmeyi ve doğada vakit geçirmeyi hiç sevmem.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ava"],
    grades: [5, 6],
    functions: "talking_about_hobbies",
    theme: "introduction",
    evidenceStart: "0:07.660",
evidenceEnd: "0:13.174",
evidenceSentence: "Ava : I enjoy /taking care of animals/, and I enjoy /spending time in nature/.",
  },

{
    id: "introduce_zoe_part1",
    status: "published",
    videoSrc: "assets/video/introduce_zoe.mp4",
    videoEnd: "0:03.7",
    title: "Zoe introduces herself",
    transcript: "Hi I'm Zoe, I was born in /Greece/.",
    answerOptions: [
      { id: "a", text: "Zoe : Selam, ben Zoe, /Yunanistan/'da doğdum." },
      { id: "b", text: "Zoe : Selam, ben Zoe, Bulgaristan'da doğdum." }
    ],
    easyDistractor: "Zoe : Selam, ben Zoe, Kenya'da doğdum.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["zoe"],
    grades: [5, 6],
    functions: "introductions",
    theme: "introduction",
    evidenceStart: "0:02.012",
evidenceEnd: "0:03.709",
evidenceSentence: "Hi I'm Zoe, I was born in /Greece/.",
  },
{
    id: "introduce_zoe_part2",
    status: "published",
    videoSrc: "assets/video/introduce_zoe.mp4",
    videoStart: "0:06.2",
    title: "Zoe introduces herself",
    transcript: "Zoe : I love solving /crossword puzzles/. I enjoy /stargazing/",
    answerOptions: [
      { id: "a", text: "Zoe: Yapboz çözmeyi çok severim. Gecenin sessizliğini dinlemeyi severim." },
      { id: "b", text: "Zoe: /Bulmaca çözmeyi/ çok severim. /Yıldızları izleme/kten hoşlanırım." }
    ],
    easyDistractor: "Zoe: Yapboz çözmeyi çok severim. Bir gün yıldızlara gitmeyi hayal ediyorum.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["zoe"],
    grades: [5, 6],
    functions: "talking_about_hobbies",
    theme: "introduction",
   evidenceStart: "0:07.001",
evidenceEnd: "0:13.535",
evidenceSentence: "Zoe : I love solving /crossword puzzles/. I enjoy /stargazing/",

  },

{
    id: "introduce_benjamin_part1",
    status: "published",
    videoSrc: "assets/video/introduce_benjamin.mp4",
    videoEnd: "0:04.3",
    title: "Benjamin introduces herself",
    transcript: "Hi I'm Benjamin, I was born in /Denmark/.",
    answerOptions: [
      { id: "a", text: "Benjamin : Selam, ben Benjamin, Hollanda'da doğdum." },
      { id: "b", text: "Benjamin : Selam, ben Benjamin, /Danimarka'da/ doğdum." }
    ],
    easyDistractor: "Benjamin : Selam, ben Benjamin, Türkiye'de doğdum.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["benjamin"],
    grades: [5, 6],
    functions: "introductions",
    theme: "introduction",
    evidenceStart: "0:02.224",
evidenceEnd: "0:04.030",
    evidenceSentence: "/Danimarka'da/ doğdum.",
  },

{
    id: "introduce_benjamin_part2",
    status: "published",
    videoSrc: "assets/video/introduce_benjamin.mp4",
    videoStart: "0:04",
    title: "Benjamin introduces himself",
    transcript: "Benjamin : I love /riding my scooter/. I also enjoy /swimming/.",
    answerOptions: [
      { id: "a", text: "Benjamin : /Scooter'ımı sürmeyi/ çok severim. Ayrıca /yüzmekten de hoşlanıyorum/." },
      { id: "b", text: "Benjamin : Scooter'ımı hızlı sürmeyi seviyorum. Ayrıca yüzmede de iyiyim." }
    ],
    easyDistractor: "Benjamin : Scooter sürmeyi sevmem ama hergün düzenli olarak yüzerim.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["benjamin"],
    grades: [5, 6],
    functions: "talking_about_hobbies",
    theme: "introduction",
    evidenceStart: "0:05.638",
evidenceEnd: "0:13.511",
    evidenceSentence: "Benjamin : I love /riding my scooter/. I also enjoy /swimming/ ",
  },

  {
    id: "introduce_emma",
    status: "published",
    videoSrc: "assets/video/introduce_emma.mp4",
    title: "Emma introduces herself and her favourite activities.",
    transcript: "Emma : Hi, I'm Emma, I was born in /Japan/, I love /cooking and baking/, I enjoy doing science experiments and helping my friends, Hope to see you soon.",
    answerOptions: [
      { id: "a", text: "Emma : Selam, Ben Emma, Çin'de doğdum, Futbol oynamayı ve yüzmeyi seviyorum." },
      { id: "b", text: "Emma : Selam, Ben Emma, /Japonya'da/ doğdum, /Yemek yapmayı ve pasta yapmayı/ seviyorum"},    ],
    easyDistractor: "Emma : Selam, Ben Emma, Japonya'da doğdum, Yemek yapmayı seviyorum, Dans etmekten hoşlanıyorum.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["emma"],
    grades: [5, 6],
    functions: ["introductions","talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:01.925",
evidenceEnd: "0:07.674",
evidenceSentence: "I was born in /Japan/, I love /cooking and baking/",
  },

{
    id: "5_classroom_life_ella_olivia",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_ella_olivia.mp4",
    title: "Ella asks Olivia about a dictionary in her bag.",
    transcript: "Ella : /Is there/ a dictionary in your bag? Olivia : Yes, there is, You can borrow it.",
    answerOptions: [
      { id: "a", text: "Ella : Çantanda bir sözlük /var mı/? Olivia : Evet, Var, Ödünç alabilirsin." },
      { id: "b", text: "Ella : Sözlüğünü getirdin mi? Olivia : Evet getirdim, Ödünç alabilirsin." }
    ],
    easyDistractor: "Ella : Çantanda cetvel var mı? Olivia : Evet, Var, Ödünç alabilirsin.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ella", "olivia"],
    grades: [5, 6],
    functions: ["use_of_there_is_there_are"],
    theme: "Classroom_life",
    evidenceStart: "0:00.331",
evidenceEnd: "0:02.592",
    evidenceSentence: "Ella : /Is there/ a dictionary in your bag?",
  },

  {
    id: "introduce_daniel",
    status: "published",
    videoSrc: "assets/video/introduce_daniel.mp4",
    title: "Daniel introduces himself and his favourite activities.",
    transcript: "Daniel : Hi, I'm Daniel, I was born in Spain, I love riding my /scooter/, I love /skiing and snowboarding/, Hope to see you soon.",
    answerOptions: [
      { id: "a", text: "Daniel : Selam, Ben Daniel, İspanya'da doğdum, Scooter sürmeyi seviyorum, Kayak yapmayı ve snowboard yapmayı seviyorum, Yakında görüşmek üzere." },
      { id: "b", text: "Daniel : Selam, Ben Daniel, İspanya'da doğdum, Bisiklete binmeyi seviyorum, Paten kaymayı ve kartopu oynamayı seviyorum, Yakında görüşmek üzere." }
    ],
    easyDistractor: "Daniel : Selam, Ben Daniel, İspanya'da doğdum, Scooter sürmeyi seviyorum, Kayak yapmayı ve yüzmeyi seviyorum, Yakında görüşmek üzere.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["daniel"],
    grades: [5, 6],
    functions: ["introductions","talking_about_hobbies"],
    theme: "introduction",
   evidenceStart: "0:05.402",
evidenceEnd: "0:13.644",
evidenceSentence: "I love riding my /scooter/, I love /skiing and snowboarding/",
  },

  {
    id: "introduce_david",
    status: "published",
    videoSrc: "assets/video/introduce_david.mp4",
    title: "David introduces himself and his favourite activities.",
    transcript: "David : Hi, I'm David, I was born in Mexico, I love travelling and discovering new places, I enjoy /camping/ with my friends, Hope to see you soon.",
    answerOptions: [
      { id: "a", text: "David : Selam, Ben David, Meksika'da doğdum, Seyahat etmeyi ve yeni yerler keşfetmeyi seviyorum, Arkadaşlarımla yürüyüş yapmaktan hoşlanıyorum, Yakında görüşmek üzere." },
      { id: "b", text: "David : Selam, Ben David, Meksika'da doğdum, Seyahat etmeyi ve yeni yerler keşfetmeyi seviyorum, Arkadaşlarımla /kamp yapmaktan/ hoşlanıyorum, Yakında görüşmek üzere." }
    ],
    easyDistractor: "David : Selam, Ben David, Meksika'da doğdum, Seyahat etmeyi seviyorum, Arkadaşlarımla kamp yapmaktan hoşlanıyorum, Yakında görüşmek üzere.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["david"],
    grades: [5, 6],
    functions: ["introductions","talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:11.434",
evidenceEnd: "0:13.692",
    evidenceSentence: "I enjoy /camping/ with my friends",
  },

{
    id: "5_personal_life_appearance_ethan",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_ethan.mp4",
    title: "Ethan describes his physical appearance.",
    transcript: "Ethan : Hi, I'm Ethan, I have short /curly/ blonde hair and /blue/ eyes.",
    answerOptions: [
      { id: "a", text: "Ethan : Merhaba, ben Ethan, kısa /kıvırcık/ sarı saçlarım ve /mavi/ gözlerim var." },
      { id: "b", text: "Ethan : Merhaba, ben Ethan, kısa dalgalı sarı saçlarım ve yeşil gözlerim var." }
    ],
    easyDistractor: "Ethan : Merhaba, ben Ethan, kısa sarı saçlarım ve yeşil gözlerim var.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ethan"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:02.424",
evidenceEnd: null,
evidenceSentence: "I have short /curly/ blonde hair and /blue/ eyes",
  },

{
    id: "introduce_ethan",
    status: "published",
    videoSrc: "assets/video/introduce_ethan.mp4",
    title: "Ethan introduces himself and his favourite activities.",
    transcript: "Ethan : Hi, I'm Ethan, I was born in England, I enjoy /playing the violin/ and /listening to classical music/, I also love playing golf, Hope to see you soon.",
    answerOptions: [
      { id: "a", text: "Ethan : Selam, Ben Ethan, İngiltere'de doğdum, Gitar çalmaktan ve pop müzik dinlemekten hoşlanıyorum, Golf oynamayı da seviyorum, Yakında görüşmek üzere." },
      { id: "b", text: "Ethan : Selam, Ben Ethan, İngiltere'de doğdum, /Keman çalmaktan/ ve /klasik müzik dinlemekten/ hoşlanıyorum, Golf oynamayı da seviyorum, Yakında görüşmek üzere." }
    ],
    easyDistractor: "Ethan : Selam, Ben Ethan, İngiltere'de doğdum, Keman çalmaktan ve klasik müzik dinlemekten hoşlanıyorum, Futbol oynamayı da seviyorum, Yakında görüşmek üzere.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ethan"],
    grades: [5, 6],
    functions: ["introductions","talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:05.993",
evidenceEnd: "0:09.450",
    evidenceSentence: "I enjoy /playing the violin/ and /listening to classical music/",
  },

 {
    id: "5_classroom_life_chloe_ella",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_chloe_ella.mp4",
    title: "Ella checks the time before music begins.",
    transcript: "Ella : Is it /two o'clock/ already? Chloe : Yes, it is, Music starts now.",
    answerOptions: [
      { id: "a", text: "Ella : Saat /iki/ oldu mu? Chloe : Evet, Oldu, Müzik şimdi başlıyor." },
      { id: "b", text: "Ella : Saat ikiyi çeyrek geçti mi? Chloe : Evet, geçti, Müzik biraz sonra başlıyor." }
    ],
    easyDistractor: "Ella : Saat üç oldu mu bile? Chloe : Evet, Oldu, Müzik şimdi başlıyor.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["chloe", "ella"],
    grades: [5, 6],
    functions: ["telling_time"],
    theme: "Classroom_life",
    evidenceStart: "0:00.636",
evidenceEnd: "0:02.406",
    evidenceSentence: "Ella : Is it /two o'clock/ already?",
  },
  {
    id: "5_personal_life_appearance_emma",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_emma.mp4",
    title: "Emma describes her physical appearance.",
    transcript: "Emma : Hi, I'm Emma, I have /long straight/ black hair and /brown/ eyes.",
    answerOptions: [
      { id: "a", text: "Emma : Merhaba, ben Emma, orta uzunlukta düz siyah saçlarım ve yeşil gözlerim var." },
      { id: "b", text: "Emma : Merhaba, ben Emma, /uzun düz/ siyah saçlarım ve /kahverengi/ gözlerim var." }
    ],
    easyDistractor: "Emma : Merhaba, ben Emma, uzun siyah saçlarım ve mavi gözlerim var.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["emma"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:02.591",
evidenceEnd: "0:06.352",
    evidenceSentence: "I have /long straight/ black hair and /brown/ eyes.",
  },

 {
    id: "5_classroom_life_hannah_mia",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_hannah_mia.mp4",
    title: "Hannah and Mia check the time before hurrying.",
    transcript: "Hannah : What time is it now? Mia : It's /twenty past ten/. Hannah : We should hurry!",
    answerOptions: [
      { id: "a", text: "Hannah : Şimdi saat kaç? Mia : Saat /onu yirmi geçiyor/. Hannah : Acele etmeliyiz!" },
      { id: "b", text: "Hannah : Şimdi saat kaç? Mia : Saat onu çeyrek geçiyor. Hannah : Acele etmeliyiz!" }
    ],
    easyDistractor: "Hannah : Şimdi saat kaç? Mia : Saat on. Hannah : Acele etmeliyiz!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["hannah", "mia"],
    grades: [5, 6],
    functions: ["telling_time"],
    theme: "Classroom_life",
    evidenceStart: "0:01.677",
evidenceEnd: "0:03.137",
    evidenceSentence: "Mia : It's /twenty past ten/",
  },

  {
    id: "introduce_jack",
    status: "published",
    videoSrc: "assets/video/introduce_jack.mp4",
    title: "Jack introduces himself and his favourite outdoor activities.",
    transcript: "Jack : Hi, I'm Jack, I was born in Scotland, I love gardening, I enjoy fishing and /hiking/, Hope to see you soon.",
    answerOptions: [
      { id: "a", text: "Jack : Selam, Ben Jack, İskoçya'da doğdum, Bahçıvanlık yapmayı seviyorum, Balık tutmaktan ve kamp yapmaktan hoşlanıyorum, Yakında görüşmek üzere." },
      { id: "b", text: "Jack : Selam, Ben Jack, İskoçya'da doğdum, Bahçıvanlık yapmayı seviyorum, Balık tutmaktan ve /yürüyüş yapmaktan/ hoşlanıyorum, Yakında görüşmek üzere." }
    ],
    easyDistractor: "Jack : Selam, Ben Jack, İskoçya'da doğdum, Bahçıvanlık yapmayı seviyorum, Balık tutmaktan hoşlanıyorum, Yakında görüşmek üzere.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["jack"],
    grades: [5, 6],
    functions: ["introductions","talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:09.330",
evidenceEnd: "0:11.999",
    evidenceSentence: "I enjoy fishing and /hiking/",
  },

{
    id: "introduce_lucas",
    status: "published",
    videoSrc: "assets/video/introduce_lucas.mp4",
    title: "Lucas introduces himself and his favourite sports.",
    transcript: "Lucas : Hi, I'm Lucas, I was born in Brazil, I love playing /football/, I also enjoy swimming, Hope to see you soon.",
    answerOptions: [
      { id: "a", text: "Lucas : Selam, Ben Lucas, Brezilya'da doğdum, /Futbol/ oynamayı seviyorum, Yüzmekten de hoşlanıyorum, Yakında görüşmek üzere." },
      { id: "b", text: "Lucas : Selam, Ben Lucas, Brezilya'da doğdum, Basketbol oynamayı seviyorum, Yüzmekten de hoşlanıyorum, Yakında görüşmek üzere." }
    ],
    easyDistractor: "Lucas : Selam, Ben Lucas, Brezilya'da doğdum, Futbol oynamayı seviyorum, Koşmaktan da hoşlanıyorum, Yakında görüşmek üzere.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["lucas"],
    grades: [5, 6],
    functions: ["introductions","talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:05.203",
evidenceEnd: "0:07.013",
    evidenceSentence: "I love playing /football/",
  },

  {
    id: "5_classroom_zoe_hannah",
    status: "published",
    videoSrc: "assets/video/5_classroom_zoe_hannah.mp4",
    title: "Hannah asks Zoe when lunch break begins.",
    transcript: "Hannah : /What time/ does lunch break start? Zoe : At /ten past twelve/. Hannah : Great! I'm so hungry.",
    answerOptions: [
      { id: "a", text: "Hannah : Öğle arası /saat kaçta/ başlıyor? Zoe : /On ikiyi on geçe/. Hannah : Harika, Çok acıktım." },
      { id: "b", text: "Hannah : Öğle arası ne zaman başlıyor? Zoe : Onu oniki geçe. Hannah : Harika, Çok acıktım." }
    ],
    easyDistractor: "Hannah : Öğle arası kaçta başlıyor? Zoe : Saat on ikide. Hannah : Harika, Çok acıktım.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["hannah", "zoe"],
    grades: [5, 6],
    functions: ["use_of_wh_questions_what_time","telling_time"],
    theme: "Classroom_life",
    evidenceStart: "0:00.621",
evidenceEnd: "0:03.976",
    evidenceSentence: "Hannah : /What time/ does lunch break start? Zoe : At /ten past twelve/.",
  },

 {
    id: "5_classroom_life_chloe_noah",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_chloe_noah.mp4",
    title: "Chloe and Noah check when double science starts.",
    transcript: "Chloe : /What time/ does double science start? Noah : At /half past ten/. Chloe : Oh no, That's now, Thanks!",
    answerOptions: [
      { id: "a", text: "Chloe : Çift fen dersi ne zaman başlıyor? Noah : Saat onu yirmi geçe. Chloe : Oh hayır, Şimdi başlıyor, Teşekkürler!" },
      { id: "b", text: "Chloe : Çift fen dersi /saat kaçta/ başlıyor? Noah : Saat /on buçukta/. Chloe : Oh hayır, Şimdi başlıyor, Teşekkürler!" }
    ],
    easyDistractor: "Chloe : Çift fen dersi kaçta başlıyor? Noah : Saat onda. Chloe : Oh hayır, Şimdi başlıyor, Teşekkürler!",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["chloe", "noah"],
    grades: [5, 6],
    functions: ["use_of_wh_questions_what_time","telling_time"],
    theme: "Classroom_life",
    evidenceStart: "0:00.000",
evidenceEnd: "0:03.680",
    evidenceSentence: "Chloe : /What time/ does double science start? Noah : At /half past ten/",
  },

  {
    id: "5_personal_life_appearance_ella",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_ella.mp4",
    title: "Ella describes her physical appearance.",
    transcript: "Ella : Hi, I'm Ella, I have shoulder-length /wavy blonde/ hair and green eyes.",
    answerOptions: [
      { id: "a", text: "Ella : Merhaba, ben Ella, /omuz hizasında dalgalı/ sarı saçlarım ve yeşil gözlerim var." },
      { id: "b", text: "Ella : Merhaba, ben Ella, uzun düz sarı saçlarım ve yeşil gözlerim var." }
    ],
    easyDistractor: "Ella : Merhaba, ben Ella, kısa sarı saçlarım ve mavi gözlerim var.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ella"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:02.015",
evidenceEnd: "0:04.748",
    evidenceSentence: "I have shoulder-length /wavy blonde/ hair",
  },

  {
    id: "introduce_noah",
    status: "published",
    videoSrc: "assets/video/introduce_noah.mp4",
    title: "Noah introduces himself and his favourite activities.",
    transcript: "Noah : Hi, I'm Noah, I was born in Germany, I love studying and learning new things, I enjoy /playing chess/ and solving puzzles, Hope to see you soon.",
    answerOptions: [
      { id: "a", text: "Noah : Selam, Ben Noah, Almanya'da doğdum, Ders çalışmayı ve yeni şeyler öğrenmeyi seviyorum, /satranç oynamaktan/ ve bulmaca çözmekten hoşlanıyorum, Yakında görüşmek üzere." },
      { id: "b", text: "Noah : Selam, Ben Noah, Almanya'da doğdum, Ders çalışmayı ve yeni şeyler öğrenmeyi seviyorum, futbol oynamaktan ve bulmaca çözmekten hoşlanıyorum, Yakında görüşmek üzere." }
    ],
    easyDistractor: "Noah : Selam, Ben Noah, Almanya'da doğdum, Ders çalışmayı ve yeni şeyler öğrenmeyi seviyorum, Satranç oynamaktan hoşlanıyorum, Yakında görüşmek üzere.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["noah"],
    grades: [5, 6],
    functions: ["introductions","talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:09.851",
evidenceEnd: "0:13.098",
    evidenceSentence: "I enjoy /playing chess/ and solving puzzles",
  },

{
    id: "classroom_life_emma_david",
    status: "published",
    videoSrc: "assets/video/classroom_life_emma_david.mp4",
    title: "Emma and David collect worksheets in the classroom.",
    transcript: "Emma : The worksheets /are/ fly/ing/ everywhere, David : I've got the last one!",
    answerOptions: [
      { id: "a", text: "Emma : Çalışma kağıtları dışarı uçtu, David : Sonuncusunu bende!" },
      { id: "b", text: "Emma : Çalışma kağıtları her yere uçuşu/yor/, David : Sonuncusu bende!" }
    ],
    easyDistractor: "Emma : Çalışma kağıtları her yere uçuşuyor! David : İlkini aldım!",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["emma", "david"],
    grades: [5, 6],
    functions: ["present_progressive"],
    theme: "Classroom_life",
    evidenceStart: "0:04.820",
evidenceEnd: "0:07.188",
    evidenceSentence: "Emma : The worksheets /are/ fly/ing/ everywhere,",
  },

  {
    id: "5_personal_life_chloe_emma",
    status: "published",
    videoSrc: "assets/video/5_personal_life_chloe_emma.mp4",
    title: "Emma asks Chloe about her piano habit.",
    transcript: "Emma : You play the piano every evening, /don't you/? Chloe : Yes, I do.",
    answerOptions: [
      { id: "a", text: "Emma : Her akşam piyano çalarsın, /öyle değil mi/? Chloe : Evet, çalarım." },
      { id: "b", text: "Emma : Her akşam piyano çalar mısın? Chloe : Evet, çalarım." }
    ],
    easyDistractor: "Emma : Her akşam piyano çalarsın, öyle değil mi? Chloe : Hayır, çalmam.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["chloe", "emma", "luna"],
    grades: [5, 6],
    functions: ["use_of_simple_present_tense_for_habbits","tag_questions"],
    theme: "personal_life",
    evidenceStart: "0:00.000",
evidenceEnd: "0:03.146",
    evidenceSentence: "Emma : You play the piano every evening, /don't you/?",
  },
 {
    id: "5_personal_life_appearance_david",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_david.mp4",
    title: "David describes his physical appearance.",
    transcript: "David : Hi, I'm David, I have very short /black/ hair and /brown/ eyes.",
    answerOptions: [
      { id: "a", text: "David : Merhaba, ben David, çok kısa kahverengi saçlarım ve siyah gözlerim var." },
      { id: "b", text: "David : Merhaba, ben David, çok kısa /siyah/ saçlarım ve /kahverengi/ gözlerim var." }
    ],
    easyDistractor: "David : Merhaba, ben David, kısa siyah saçlarım ve yeşil gözlerim var.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["david"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:02.551",
evidenceEnd: "0:06.523",
    evidenceSentence: "I have very short /black/ hair and /brown/ eyes",
  },

 {
    id: "5_personal_life_daniel_benjamin",
    status: "published",
    videoSrc: "assets/video/5_personal_life_daniel_benjamin.mp4",
    title: "Benjamin asks Daniel about his scooter routine.",
    transcript: "Benjamin : How often do you ride your scooter? Daniel : I ride it /every afternoon/.",
    answerOptions: [
      { id: "a", text: "Benjamin : Scooterını ne sıklıkla sürersin? Daniel : /Her öğleden sonra/ sürerim." },
      { id: "b", text: "Benjamin : Scooterını ne sıklıkla sürersin? Daniel : Bazen öğleden sonraları sürerim." }
    ],
    easyDistractor: "Benjamin : Scooterını ne sıklıkla sürersin? Daniel : Bazen sabahları sürerim.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["daniel", "benjamin"],
    grades: [5, 6],
    functions: ["frequency_adverbs"],
    theme: "personal_life",
    evidenceStart: "0:02.015",
evidenceEnd: "0:04.158",
    evidenceSentence: "Daniel : I ride it /every afternoon/",
  },

  {
    id: "5_personal_life_ella_chloe",
    status: "published",
    videoSrc: "assets/video/5_personal_life_ella_chloe.mp4",
    title: "Ella asks Chloe about eating cupcakes for breakfast.",
    transcript: "Ella : Do you eat cupcakes for breakfast? Chloe : No, I /rarely/ eat /them/ in the morning.",
    answerOptions: [
      { id: "a", text: "Ella : Kahvaltıda cupcake yer misin? Chloe : Hayır, sabahları onu bazen yerim." },
      { id: "b", text: "Ella : Kahvaltıda cupcake yer misin? Chloe : Hayır, sabahları /onları nadiren/ yerim." }
    ],
    easyDistractor: "Ella : Kahvaltıda cupcake yer misin? Chloe : Hayır, onları sadece akşam yerim.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ella", "chloe"],
    grades: [5, 6],
    functions: ["frequency_adverbs","use_of_object_pronouns"],
    theme: "personal_life",
  evidenceStart: "0:02.314",
evidenceEnd: "0:05.711",
    evidenceSentence: "Chloe : No, I /rarely/ eat /them/ in the morning.",
  },

  {
    id: "5_personal_life_appearance_daniel",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_daniel.mp4",
    title: "Daniel describes his physical appearance.",
    transcript: "Daniel : Hi, I'm Daniel, I have /shoulder-length/ straight black hair and /thick eyebrows/.",
    answerOptions: [
      { id: "a", text: "Daniel : Merhaba, ben Daniel, kısa düz siyah saçlarım ve ince kaşlarım var." },
      { id: "b", text: "Daniel : Merhaba, ben Daniel, /omuz hizasında/ düz siyah saçlarım ve /gür kaşlarım/ var." }
    ],
    easyDistractor: "Daniel : Merhaba, ben Daniel, omuz hizasında siyah saçlarım ve ince kaşlarım var.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["daniel"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:01.986",
    evidenceSentence: "I have /shoulder-length/ straight black hair and /thick eyebrows/.",
  },

  {
    id: "5_personal_life_appearance_ava",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_ava.mp4",
    title: "Ava describes her physical appearance.",
    transcript: "Ava : Hi, I'm Ava, I have /shoulder-length/ curly black hair and /green/ eyes.",
    answerOptions: [
      { id: "a", text: "Ava : Merhaba, ben Ava, uzun kıvırcık kahverengi saçlarım ve mavi gözlerim var." },
      { id: "b", text: "Ava : Merhaba, ben Ava, /omuz hizasında/ kıvırcık siyah saçlarım ve /yeşil/ gözlerim var." }
    ],
    easyDistractor: "Ava : Merhaba, ben Ava, kısa siyah saçlarım ve yeşil gözlerim var.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ava"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
  evidenceStart: "0:01.957",
    evidenceSentence: "I have /shoulder-length/ curly black hair and /green/ eyes.",
  },

  {
    id: "5_personal_life_appearance_chloe",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_chloe.mp4",
    title: "Chloe describes her physical appearance.",
    transcript: "Chloe : Hi, I'm Chloe, I have long /curly/ blonde hair and blue eyes.",
    answerOptions: [
      { id: "a", text: "Chloe : Merhaba, ben Chloe, kısa düz sarı saçlarım ve yeşil gözlerim var." },
      { id: "b", text: "Chloe : Merhaba, ben Chloe, uzun /kıvırcık/ sarı saçlarım ve mavi gözlerim var." }
    ],
    easyDistractor: "Chloe : Merhaba, ben Chloe, kısa düz sarı saçlarım ve mavi gözlerim var.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["chloe"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:02.243",
evidenceEnd: "0:04.777",
    evidenceSentence: "I have long /curly/ blonde hair",
  },

{
    id: "5_personal_life_appearance_benjamin",
    status: "published",
    videoSrc: "assets/video/5_personal_life_appearance_benjamin.mp4",
    title: "Benjamin describes his physical appearance.",
    transcript: "Benjamin : Hi, I'm Benjamin, I have /short straight blonde hair/ and /blue/ eyes.",
    answerOptions: [
      { id: "a", text: "Benjamin : Merhaba, ben Benjamin, kısa kıvırcık sarı saçlarım ve kahverengi gözlerim var." },
      { id: "b", text: "Benjamin : Merhaba, ben Benjamin, /kısa düz sarı saçlarım/ ve /mavi/ gözlerim var." }
    ],
    easyDistractor: "Benjamin : Merhaba, ben Benjamin, kısa sarı saçlarım ve yeşil gözlerim var.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["benjamin"],
    grades: [5, 6],
    functions: ["describing_physical_appearance"],
    theme: "introduction",
    evidenceStart: "0:02.402",
    evidenceEnd: null,
    evidenceSentence: "Benjamin : I have /short straight blonde hair/ and /blue/ eyes.",
  },

  {
    id: "5_personal_life_ava_olivia",
    status: "published",
    videoSrc: "assets/video/5_personal_life_ava_olivia.mp4",
    title: "Ava notices yellow paint on Olivia's nose.",
    transcript: "Ava : Do you paint in the evenings? Olivia : I sometimes paint before bed. Ava : There is a yellow paint on your nose.",
    answerOptions: [
      { id: "a", text: "Ava : Akşamları resim yapar mısın? Olivia : /Bazen/ yatmadan önce resim yaparım. Ava : Burnunda sarı boya /var/." },
      { id: "b", text: "Ava : Akşamları resim yapar mısın? Olivia : Her sabah resim yaparım. Ava : Burnun sarıya boyanmış." }
    ],
    easyDistractor: "Ava : Akşamları resim yapar mısın? Olivia : Hiç resim yapmam. Ava : Burnunda boya yok.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["ava", "olivia"],
    grades: [5, 6],
    functions: ["use_of_there_is_there_are","frequency adverbs"],
    theme: "personal_life",
    evidenceStart: "0:05.669",
evidenceEnd: "0:08.614",
    evidenceSentence: "Ava : /There is/ a yellow paint on your nose.",
  },

  {
    id: "5_personal_life_emma_mia",
    status: "published",
    videoSrc: "assets/video/5_personal_life_emma_mia.mp4",
    title: "Mia asks Emma about baking cookies.",
    transcript: "Mia : How often do you bake cookies? Emma : I usually bake on Sundays. Mia : What's that smell? Emma : Oh my god it is burning!",
    answerOptions: [
      { id: "a", text: "Mia : Ne sıklıkla kurabiye yaparsın? Emma : Genellikle /pazar/ günleri yaparım. Mia : Bu koku ne? Emma : Aman Tanrım, yanıyor!" },
      { id: "b", text: "Mia : Ne sıklıkla kurabiye yaparsın? Emma : Genellikle pazartesi günleri yaparım. Mia : Bu koku ne? Emma : Aman Tanrım, yanıyor!" }
    ],
    easyDistractor: "Mia : Ne sıklıkla kurabiye yaparsın? Emma : Genellikle pazar günleri yaparım. Mia : Bu koku ne? Emma : Aman Tanrım, fırın kapalı!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["emma", "mia"],
    grades: [5, 6],
    functions: ["frequency_adverbs"],
    theme: "personal_life",
    evidenceStart: "0:02.243",
evidenceEnd: "0:04.299",
    evidenceSentence: "Emma : I usually bake on /Sundays/.",
  },

  {
    id: "5_personal_life_olivia_chloe",
    status: "published",
    videoSrc: "assets/video/5_personal_life_olivia_chloe.mp4",
    title: "Olivia asks Chloe about Luna's toy mouse.",
    transcript: "Olivia : Is that Luna's toy mouse? Chloe : Yes, it's her favorite toy.",
    answerOptions: [
      { id: "a", text: "Olivia : Bu Luna'nın oyuncağı mı? Chloe : Hayır, o benim en sevdiğim oyuncak." },
      { id: "b", text: "Olivia : Bu Luna'nın oyuncak faresi mi? Chloe : Evet, /onun/ en sevdiği oyuncak." }
    ],
    easyDistractor: "Olivia : Bu Luna'nın oyuncak faresi mi? Chloe : Hayır, onun en sevdiği oyuncak değil.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["chloe", "olivia", "luna"],
    grades: [5, 6],
    functions: ["possessive_adjective"],
    theme: "personal_life",
    evidenceStart: "0:02.520",
evidenceEnd: "0:04.524",
    evidenceSentence: "Chloe : Yes, it's /her/ favorite toy.",
  },
 {
    id: "5_personal_life_zoe_mia",
    status: "published",
    videoSrc: "assets/video/5_personal_life_zoe_mia.mp4",
    title: "Mia asks Zoe about her telescope.",
    transcript: "Mia : Is this your telescope? Zoe : Yes, my father bought it. Mia : Can I use it? Zoe : sure",
    answerOptions: [
      { id: "a", text: "Mia : Bu senin teleskobun mu? Zoe : Evet, /babam/ aldı. Mia : Kullanabilir miyim? Zoe : Tabii." },
      { id: "b", text: "Mia : Bu senin teleskobun mu? Zoe : Evet, arkadaşım aldı. Mia : Kullanabilir miyim? Zoe : Tabii." }
    ],
    easyDistractor: "Mia : Bu senin teleskobun mu? Zoe : Evet, babam aldı. Mia : Kullanabilir miyim? Zoe : Hayır.",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["zoe", "mia"],
    grades: [5, 6],
    functions: ["possessive_adjective"],
    theme: "personal_life",
    evidenceStart: "0:02",
    evidenceEnd: "0:03",
    evidenceSentence: "Yes, /my father/ bought it",
  },

  {
    id: "5_personal_life_david_daniel",
    status: "published",
    videoSrc: "assets/video/5_personal_life_david_daniel.mp4",
    title: "Daniel asks David about his holiday photos.",
    transcript: "Daniel : Are these your photos? David : Yes, I was 7 years old in that picture. Daniel : You were very cute",
    answerOptions: [
      { id: "a", text: "Daniel : Bunlar senin fotoğrafların mı? David : Evet, o fotoğrafta 12 yaşındaydım. Daniel : Çok şirinmişsin." },
      { id: "b", text: "Daniel : Bunlar senin fotoğrafların mı? David : Evet, o fotoğrafta /7/ yaşındaydım. Daniel : Çok şirinmişsin." }
    ],
    easyDistractor: "Daniel : Bunlar senin fotoğrafların mı? David : Evet, o fotoğrafta 7 yaşındaydım. Daniel : Çok uzunmuşsun.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["david", "daniel"],
    grades: [5, 6],
    functions: ["possessive_adjective"],
    theme: "personal_life",
    evidenceStart: "0:02",
    evidenceEnd: "0:04.5",
    evidenceSentence: "Yes,I was /seven/ years old in that picture",
  },

  {
    id: "5_family_life_hannah_lars",
    status: "published",
    videoSrc: "assets/video/5_family_life_hannah_lars.mp4",
    title: "Hannah asks Lars about the camping bags.",
    transcript: "Hannah : What are you packing, Dad? Lars : I'm /preparing/ our camping bags. Hannah : We /are going/ camping, Yeyy!",
    answerOptions: [
      { id: "a", text: "Hannah : Ne hazırlıyorsun, baba? Lars : Kamp çantalarımızı /hazırlıyorum/. Hannah : Kamp yapacağız, Yaşasın!" },
      { id: "b", text: "Hannah : Ne hazırlıyorsun, baba? Lars : Kamp çantalarımızı hazırlayacağım. Hannah : Kampa gidiyoruz, Yaşasın!" }
    ],
    easyDistractor: "Hannah : Ne hazırlıyorsun, baba? Lars : Kamp çantalarımızı hazırlıyorum. Hannah : Evde mi kalıyoruz, Yaşasın!",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["hannah", "lars"],
    grades: [5, 6],
    functions: ["present_progressive"],
    theme: "family_life",
    evidenceStart: "0:02.857",
evidenceEnd: "0:07.665",
    evidenceSentence: "Lars : I'm /preparing/ our camping bags. Hannah : We /are going/ camping, Yeyy!",
  },

  {
    id: "5_classroom_life_olivia",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_olivia.mp4",
    title: "Olivia hurries to finish her drawing but pours the paint bottle.",
    transcript: "Olivia : /What time/ does the lesson finish? Teacher : At quarter past two. Olivia : I must hurry!",
    answerOptions: [
      { id: "a", text: "Olivia : Ders /saat kaçta/ bitecek? Öğretmen : İkiyi çeyrek geçe. Olivia : Acele etmeliyim!" },
      { id: "b", text: "Olivia : Sonraki ders ne zaman başlayacak? Öğretmen : İkiyi çeyrek geçe. Olivia : Acele etmeliyim!" }
    ],
    easyDistractor: "Öğretmen : Olivia, Konuşmak için ayağa kalk. Olivia : Tamam!",
    correctOptionId: "a", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["olivia"],
    grades: [5, 6],
    functions: ["askinginformationabouttime"],
    theme: "School_life",
    evidenceStart: "0:01.344",
evidenceEnd: "0:02.985",
    evidenceSentence: "Olivia : /What time/ does the lesson finish?",
  },

  {
    id: "introduce_family_chloe_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_chloe.mp4",
    title: "Chloe introduces her family and Luna.",
videoStart: "0:00",
videoEnd: "0:07",
    transcript: "Chloe : Hi, this is my family, my mum is Camille, she’s a /baker/, and she loves /growing flowers/.",
    answerOptions: [
      { id: "a", text: "Chloe : Merhaba, bu benim ailem, annem Camille, o bir öğretmen ve çiçekleri çok seviyor." },
      { id: "b", text: "Chloe : Merhaba, bu benim ailem, annem Camille, o bir /fırıncı/ ve /çiçek yetiştirmeyi/ seviyor." }
    ],
    easyDistractor: "Chloe : Merhaba, bu benim ailem, annem Camille, o bir öğretmen ve müzeleri ziyaret etmeyi seviyor.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["chloe", "camille", "julien"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:02.383",
evidenceEnd: "0:06.700",
    evidenceSentence: "Chloe : My mum is Camille, she’s a /baker/, and she loves /growing flowers/.",
  },

{
    id: "introduce_family_chloe_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_chloe.mp4",
    title: "Chloe introduces her family and Luna.",
videoStart: "0:07",
videoEnd: "0:15",
    transcript: "Chloe : My dad is Julien, he’s an /interior designer/, and he loves /visiting museums/, and this is Luna, my cat.",
    answerOptions: [
      { id: "a", text: "Chloe : Babam Julien, o bir aşçı ve müzeleri ziyaret etmeyi seviyor, bu da kedim Luna." },
      { id: "b", text: "Chloe : Babam Julien, o bir /iç mimar/ ve /müzeleri ziyaret etmeyi/ seviyor, bu da kedim Luna." }
    ],
    easyDistractor: "Chloe :Babam Julien, o bir iç mimar ve çiçek yetiştirmeyi seviyor, bu da köpeğim Luna.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["chloe", "camille", "julien"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
evidenceStart: "0:07.130",
evidenceEnd: "0:12.435",
evidenceSentence: "Chloe : My dad is Julien, he’s an /interior designer/, and he loves /visiting museums/",
  },

{
    id: "introduce_family_benjamin_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_benjamin.mp4",
    title: "Benjamin introduces his family.",
videoStart: "0:00",
videoEnd: "0:08.192",

    transcript: "Benjamin : Hi, this is my family, my mum is Emily, she’s a /travel agent/, and she loves /taking photos/.",
    answerOptions: [
      { id: "a", text: "Benjamin : Merhaba, bu benim ailem, annem Emily, o bir /seyahat acentesi/ ve /fotoğraf çekmeyi/ seviyor." },
      { id: "b", text: "Benjamin : Merhaba, bu benim ailem, annem Emily, o bir yüzme antrenörü ve bisiklete binmeyi seviyor." }
    ],
    easyDistractor: "Benjamin : Merhaba, bu benim ailem, annem Emily, o bir öğretmen ve yüzmeyi seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["benjamin", "emily","oliver"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
   evidenceStart: "0:02.451",
evidenceEnd: "0:08.192",
evidenceSentence: "Benjamin : My mum is Emily, she’s a /travel agent/, and she loves /taking photos/.",
  },

{
    id: "introduce_family_benjamin_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_benjamin.mp4",
    title: "Benjamin introduces his family.",
videoStart: "0:08.192",
videoEnd: "0:15",

    transcript: "Benjamin : My dad is Oliver, he’s a /swimming coach/, and he loves /cycling/.",
    answerOptions: [
      { id: "a", text: "Benjamin : Babam Oliver, o bir /yüzme antrenörü/ ve /bisiklete binmeyi/ seviyor." },
      { id: "b", text: "Benjamin : Babam Oliver, o bir seyahat acentesi ve fotoğraf çekmeyi seviyor." }
    ],
    easyDistractor: "Benjamin : Babam Oliver, o bir muhasebeci ve fotoğraf çekmeyi seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["benjamin", "emily", "oliver"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
   evidenceStart: "0:08.634",
evidenceEnd: null,
evidenceSentence: "Benjamin : My dad is Oliver, he’s a /swimming coach/, and he loves /cycling/.",
  },

{
    id: "introduce_family_ava_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_ava.mp4",
    title: "Ava introduces her family and Buddy.",
videoStart: "0:00",
videoEnd: "0:06.602",
    transcript: "Ava : Hi, this is my family, My mum is Amina, She’s a /veterinarian/.",
    answerOptions: [
      { id: "a", text: "Ava : Merhaba, bu benim ailem, annem Amina, o bir eczacı." },
      { id: "b", text: "Ava : Merhaba, bu benim ailem, annem Amina, o bir /veteriner/." }
    ],
    easyDistractor: "Ava : Merhaba, bu benim ailem, annem Amina, o bir öğretmen.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ava", "amina"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
evidenceStart: "0:02.566",
evidenceEnd: "0:05.744",
evidenceSentence: "My mum is Amina, She’s a /veterinarian/.",
  },

  {
    id: "introduce_family_ava_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_ava.mp4",
    title: "Ava introduces her family and Buddy.",
videoStart: "0:06.602",
videoEnd: "0:15",
    transcript: "Ava : My dad is David, he’s a /wildlife photographer/, and this is our dog, Buddy.",
    answerOptions: [
      { id: "a", text: "Ava : Babam David, o bir veteriner, bu da köpeğimiz Buddy." },
      { id: "b", text: "Ava : Babam David, o bir /vahşi yaşam fotoğrafçısı/, bu da köpeğimiz Buddy." }
    ],
    easyDistractor: "Ava : Babam David, o bir kasap, bu bizim köpeğimiz Buddy.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ava", "amina", "david_ava"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
  evidenceStart: "0:06.544",
evidenceEnd: "0:10.301",
    evidenceSentence: "Ava : My dad is David, he’s a /wildlife photographer/.",
  },
  {
    id: "introduce_family_daniel_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_daniel.mp4",
    videoStart: "0:01",
    videoEnd: "0:10",
    title: "Daniel introduces his mother.",
    transcript: "Daniel : Hi, this is my family, my mum is Elena, she’s a /drama teacher/, and she loves /singing songs/.",
    answerOptions: [
      { id: "a", text: "Daniel : Merhaba, bu benim ailem, annem Elena, o bir /drama öğretmeni/ ve /şarkı söylemeyi/ seviyor." },
      { id: "b", text: "Daniel : Merhaba, bu benim ailem, annem Elena, o bir müzik öğretmeni ve şarkı yazmayı seviyor." }
    ],
    easyDistractor: "Daniel : Merhaba, bu benim ailem, annem Elena, o bir drama öğretmeni ve balık tutmayı seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["daniel", "elena", "javier"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
   evidenceStart: "0:01.294",
evidenceEnd: "0:09.874",
    evidenceSentence: "My mum is Elena, she’s a /drama teacher/, and she loves /singing songs/.",
  },

  {
    id: "introduce_family_daniel_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_daniel.mp4",
    videoStart: "0:10",
    videoEnd: "0:15.083",
    title: "Daniel introduces his father.",
    transcript: "Daniel : My dad is Javier, he’s a /mechanic/, and he loves /fishing/.",
    answerOptions: [
      { id: "a", text: "Daniel : Babam Javier, o bir drama öğretmeni ve şarkı söylemeyi seviyor." },
      { id: "b", text: "Daniel : Babam Javier, o bir /tamirci/ ve /balık tutmayı/ seviyor." }
    ],
    easyDistractor: "Daniel : Babam Javier, o bir tamirci ve bisiklete binmeyi seviyor.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["daniel", "javier","elena"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:10",
    evidenceEnd: null,
    evidenceSentence: "Daniel : My dad is Javier, he’s a /mechanic/, and he loves /fishing/.",
  },

  {
    id: "introduce_family_david_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_david.mp4",
    videoStart: "0:00",
    videoEnd: "0:07.456",
    title: "David introduces his mother.",
    transcript: "David : Hi, this is my family, my mum is Valeria, she’s a /hotel manager/, and she loves /dancing/.",
    answerOptions: [
      { id: "a", text: "David : Merhaba, bu benim ailem, annem Valeria, o bir /otel müdürü/ ve /dans etmeyi/ seviyor." },
      { id: "b", text: "David : Merhaba, bu benim ailem, annem Valeria, o bir deniz kaptanı ve gitar çalmayı seviyor." }
    ],
    easyDistractor: "David : Merhaba, bu benim ailem, annem Valeria, o bir otel müdürü ve gitar çalmayı seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["david", "valeria"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:02.615",
evidenceEnd: "0:07.370",
evidenceSentence: "My mum is Valeria, she’s a /hotel manager/, and she loves /dancing/.",
  },

  {
    id: "introduce_family_david_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_david.mp4",
    videoStart: "0:07.456",
    videoEnd: "0:15.083",
    title: "David introduces his father.",
    transcript: "David : My dad was Alejandro, he was a /sea captain/, and he loved /playing the guitar/.",
    answerOptions: [
      { id: "a", text: "David : Babam Alejandro idi, o bir otel müdürüydü ve dans etmeyi severdi." },
      { id: "b", text: "David : Babam Alejandro idi, o bir /kaptandı/ ve /gitar çalmayı/ severdi." }
    ],
    easyDistractor: "David : Babam Alejandro idi, o bir deniz kaptanıydı ve balık tutmayı severdi.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["david", "alejandro"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:09.894",
evidenceEnd: null,
    evidenceSentence: "My dad was Alejandro, he was a /sea captain/, and he loved /playing the guitar/.",
  },

 {
    id: "introduce_family_ella_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_ella.mp4",
    videoStart: "0:00",
    videoEnd: "0:06.861",
    title: "Ella introduces her mother.",
    transcript: "Ella : Hi, this is my family, my mum is Charlotte, she’s a /music teacher/ and loves /playing the piano/.",
    answerOptions: [
      { id: "a", text: "Ella : Merhaba, bu benim ailem, annem Charlotte, o bir /müzik öğretmeni/ ve /piyano çalmayı/ seviyor." },
      { id: "b", text: "Ella : Merhaba, bu benim ailem, annem Charlotte, o bir drama öğretmeni ve müzik dinlemeyi seviyor." }
    ],
    easyDistractor: "Ella : Merhaba, bu benim ailem, annem Charlotte, o bir müzik öğretmeni ve gitar çalmayı seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "charlotte"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:02.504",
evidenceEnd: "0:06.807",
evidenceSentence: "My mum is Charlotte, she’s a /music teacher/ and loves /playing the piano/.",
  },

  {
    id: "introduce_family_ella_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_ella.mp4",
    videoStart: "0:06.861",
    videoEnd: "0:15.083",
    title: "Ella introduces her father and Sunny.",
    transcript: "Ella : My dad is Liam, he’s a /radio presenter/ and loves /listening to music/, and this is Sunny, my parrot.",
    answerOptions: [
      { id: "a", text: "Ella : Babam Liam, o bir müzik öğretmeni ve piyano çalmayı seviyor, bu da kedim Sunny." },
      { id: "b", text: "Ella : Babam Liam, o bir /radyo sunucusu/ ve /müzik dinlemeyi/ seviyor, bu da papağanım Sunny." }
    ],
    easyDistractor: "Ella : Babam Liam, o bir radyo sunucusu ve bisiklete binmeyi seviyor, bu da papağanım Sunny.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "liam","sunny"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:07.139",
evidenceEnd: "0:11.757",
    evidenceSentence: "Ella : My dad is Liam, he’s a /radio presenter/ and loves /listening to music/.",
  },

   {
    id: "introduce_family_emma_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_emma.mp4",
    videoStart: "0:00",
    videoEnd: "0:07.199",
    title: "Emma introduces her mother.",
    transcript: "Emma : Hi, this is my family, my mum is Sophie, she’s a /nurse/ and loves /gardening/.",
    answerOptions: [
      { id: "a", text: "Emma : Merhaba, bu benim ailem, annem Sophie, o bir /hemşire/ ve /bahçeyle ilgilenmeyi/ seviyor." },
      { id: "b", text: "Emma : Merhaba, bu benim ailem, annem Sophie, o bir eczacı ve kutu oyunları oynamayı seviyor." }
    ],
    easyDistractor: "Emma : Merhaba, bu benim ailem, annem Sophie, o bir hemşire ve kutu oyunları oynamayı seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["emma", "sophie"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
   evidenceStart: "0:02.758",
evidenceEnd: "0:07.217",
    evidenceSentence: "My mum is Sophie, she’s a /nurse/ and loves /gardening/.",
  },

  {
    id: "introduce_family_emma_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_emma.mp4",
    videoStart: "0:08.174",
    videoEnd: "0:15.083",
    title: "Emma introduces her father.",
    transcript: "Emma : My dad is Haruto, he’s a /school principal/ and loves playing /board games./",
    answerOptions: [
      { id: "a", text: "Emma : Babam Haruto, o bir müdür yardımcısı ve bilardo oynamayı seviyor." },
      { id: "b", text: "Emma : Babam Haruto, o bir /okul müdürü/ ve /kutu oyunları/ oynamayı seviyor." }
    ],
    easyDistractor: "Emma : Babam Haruto, o bir okul müdürü ve fotoğraf çekmeyi seviyor.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["emma", "haruto"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
   evidenceStart: "0:09.930",
evidenceEnd: "0:13.885",
    evidenceSentence: "My mum is Sophie, she’s a /nurse/ and loves /gardening/.",
  },

{
    id: "introduce_family_ethan_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_ethan.mp4",
    videoStart: "0:00",
    videoEnd: "0:09.358",
    title: "Ethan introduces his mother.",
    transcript: "Ethan : Hi, this is my family, my mum is Elizabeth, she’s an /architect/ and loves /painting/.",
    answerOptions: [
      { id: "a", text: "Ethan : Merhaba, bu benim ailem, annem Elizabeth, o bir /mimar/ ve /resim yapmayı/ seviyor." },
      { id: "b", text: "Ethan : Merhaba, bu benim ailem, annem Elizabeth, o bir mühendis ve koşmayı seviyor." }
    ],
    easyDistractor: "Ethan : Merhaba, bu benim ailem, annem Elizabeth, o bir mimar ve golf oynamayı seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ethan", "elizabeth"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:04.081",
evidenceEnd: "0:09.358",
    evidenceSentence: "My mum is Elizabeth, she’s an /architect/ and loves /painting/.",
  },

  {
    id: "introduce_family_ethan_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_ethan.mp4",
    videoStart: "0:09.358",
    videoEnd: "0:15.083",
    title: "Ethan introduces his father.",
    transcript: "Ethan : My dad is James, he’s an /engineer/ and loves /playing golf/.",
    answerOptions: [
      { id: "a", text: "Ethan : Babam James, o bir mimar ve bowling oynamayı seviyor." },
      { id: "b", text: "Ethan : Babam James, o bir /mühendis/ ve /golf oynamayı/ seviyor." }
    ],
    easyDistractor: "Ethan : Babam James, o bir mühendis ve balık tutmayı seviyor.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ethan", "james"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:11.889",
evidenceEnd: null,
    evidenceSentence: "He’s an /engineer/ and loves /playing golf/.",
  },
  {
    id: "introduce_family_hannah_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_hannah.mp4",
    videoStart: "0:00",
    videoEnd: "0:06.593",
    title: "Hannah introduces her mother.",
    transcript: "Hannah : Hi, this is my family, my mum is Ingrid, she’s a /waiter/ and loves /barbecue/.",
    answerOptions: [
      { id: "a", text: "Hannah : Merhaba, bu benim ailem, annem Ingrid, o bir /garson/ ve /barbekü yapmayı/ seviyor." },
      { id: "b", text: "Hannah : Merhaba, bu benim ailem, annem Ingrid, o bir garson ve barda çalışıyor." }
    ],
    easyDistractor: "Hannah : Merhaba, bu benim ailem, annem Ingrid, o bir garson ve yürüyüş yapmayı seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["hannah", "ingrid"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:02.379",
evidenceEnd: "0:06.593",
    evidenceSentence: "My mum is Ingrid, she’s a /waiter/ and loves /barbecue/.",
  },

  {
    id: "introduce_family_hannah_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_hannah.mp4",
    videoStart: "0:06.593",
    videoEnd: "0:15.083",
    title: "Hannah introduces her father.",
    transcript: "Hannah : My dad is Lars, he /owns a camping store/ and loves /hiking/.",
    answerOptions: [
      { id: "a", text: "Hannah : Babam Lars, o kamp mağazasında çalışıyor ve barbekü yapmayı seviyor." },
      { id: "b", text: "Hannah : Babam Lars, bir /kamp mağazası sahibi/ ve /yürüyüş yapmayı/ seviyor." }
    ],
    easyDistractor: "Hannah : Babam Lars, bir kamp mağazası sahibi ve golf oynamayı seviyor.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "lars"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:09.570",
evidenceEnd: "0:12.792",
    evidenceSentence: "He /owns a camping store/ and loves /hiking/.",
  },

{
    id: "introduce_family_lucas_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_lucas.mp4",
    videoStart: "0:00",
    videoEnd: "0:06.723",
    title: "Lucas introduces his mother.",
    transcript: "Lucas : Hi, this is my family, my mum is Jessica, she’s a /police officer/ and loves /running/.",
    answerOptions: [
      { id: "a", text: "Lucas : Merhaba, bu benim ailem, annem Jessica, o bir /polis memuru/ ve /koşmayı/ seviyor." },
      { id: "b", text: "Lucas : Merhaba, bu benim ailem, annem Jessica, o bir itfaiyeci ve süzmeyi seviyor." }
    ],
    easyDistractor: "Lucas : Merhaba, bu benim ailem, annem Jessica, o bir polis memuru ve golf oynamayı seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["lucas", "jessica"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:04.112",
evidenceEnd: "0:06.735",
    evidenceSentence: "She’s a /police officer/ and loves /running/.",
  },

  {
    id: "introduce_family_lucas_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_lucas.mp4",
    videoStart: "0:06.723",
    videoEnd: "0:11.625",
    title: "Lucas introduces his father.",
    transcript: "Lucas : My dad is Gabriel, he’s a /firefighter/ and loves /barbecue/.",
    answerOptions: [
      { id: "a", text: "Lucas : Babam Gabriel, o barda çalışıyor ve dövüşmeyi seviyor." },
      { id: "b", text: "Lucas : Babam Gabriel, o bir /itfaiyeci/ ve /barbekü yapmayı/ seviyor." }
    ],
    easyDistractor: "Lucas : Babam Gabriel, o bir itfaiyeci ve balık tutmayı seviyor.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["lucas", "gabriel"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:08.603",
evidenceEnd: null,
    evidenceSentence: "He’s a /firefighter/ and loves /barbecue/.",
  },

  {
    id: "introduce_family_jack_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_jack.mp4",
    videoStart: "0:00",
    videoEnd: "0:05.745",
    title: "Jack introduces his mother.",
    transcript: "Jack : Hi, this is my family, My mum is Isla, she’s a /postwoman/ and loves /gardening/.",
    answerOptions: [
      { id: "a", text: "Jack : Merhaba, bu benim ailem, annem Isla, o bir çiftçi ve balık tutmayı seviyor." },
      { id: "b", text: "Jack : Merhaba, bu benim ailem, annem Isla, o bir posta memuru ve bahçeyle ilgilenmeyi seviyor." }
    ],
    easyDistractor: "Jack : Merhaba, bu benim ailem, annem Isla, o bir posta memuru ve balık tutmayı seviyor.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["jack", "isla"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:02.066",
evidenceEnd: "0:05.745",
    evidenceSentence: "My mum is Isla, she’s a /postwoman/ and loves /gardening/.",
  },
  {
    id: "introduce_family_jack_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_jack.mp4",
    videoStart: "0:05.745",
    videoEnd: "0:10.125",
    title: "Jack introduces his father.",
    transcript: "Jack : My dad is Callum, he’s a /farmer/ and loves /fishing/.",
    answerOptions: [
      { id: "a", text: "Jack : Babam Callum, o bir çiftçi ve balık tutmayı seviyor." },
      { id: "b", text: "Jack : Babam Callum, o bir posta memuru ve bahçeyle ilgilenmeyi seviyor." }
    ],
    easyDistractor: "Jack : Babam Callum, o bir çiftçi ve golf oynamayı seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["jack", "callum"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
   evidenceStart: "0:05.696",
evidenceEnd: "0:09.509",
evidenceSentence: "He’s a /farmer/ and loves /fishing/.",
  },

  {
    id: "introduce_family_mia",
    status: "published",
    videoSrc: "assets/video/introduce_family_mia.mp4",
    title: "Mia introduces her mother and Coco.",
    transcript: "Mia : Hi, this is my family, My mum is Giulia, she’s a /chef/ and loves /reading books/, and this is my rabbit, Coco.",
    answerOptions: [
      { id: "a", text: "Mia : Merhaba, bu benim ailem, annem Giulia, o bir /aşçı/ ve /kitap okumayı/ seviyor, bu da tavşanım Coco." },
      { id: "b", text: "Mia : Merhaba, bu benim ailem, annem Giulia, o bir doktor ve bahçeyle ilgilenmeyi seviyor, bu da köpeğim Coco." }
    ],
    easyDistractor: "Mia : Merhaba, bu benim ailem, annem Giulia, o bir aşçı ve resim yapmayı seviyor, bu da tavşanım Coco.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["mia", "giulia", "coco"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:04.027",
evidenceEnd: "0:06.495",
evidenceSentence: "She’s a /chef/ and loves /reading books/.",
  },

 {
    id: "introduce_family_noah_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_noah.mp4",
    videoStart: "0:00",
    videoEnd: "0:06.285",
    title: "Noah introduces his mother.",
    transcript: "Noah : Hi, this is my family, My mum is Katharina, She’s a /doctor/ and loves /gardening/.",
    answerOptions: [
      { id: "a", text: "Noah : Merhaba, bu benim ailem, annem Katharina, o bir /doktor/ ve /bahçeyle ilgilenmeyi/ seviyor." },
      { id: "b", text: "Noah : Merhaba, bu benim ailem, annem Katharina, o bir diş hekimi ve bulmaca çözmeyi seviyor." }
    ],
    easyDistractor: "Noah : Merhaba, bu benim ailem, annem Katharina, o bir doktor ve bulmaca çözmeyi seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["noah", "katharina"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
   evidenceStart: "0:03.863",
evidenceEnd: "0:06.248",
evidenceSentence: "My mum is Katharina, She’s a /doctor/ and loves /gardening/.",
  },

{
    id: "introduce_family_noah_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_noah.mp4",
    videoStart: "0:06.248",
    videoEnd: "0:10.125",
    title: "Noah introduces his father.",
    transcript: "Noah : My dad is Victor, he’s a /dentist/ and loves /doing puzzles/.",
    answerOptions: [
      { id: "a", text: "Noah : Babam Victor, o bir doktor ve bahçeyle ilgilenmeyi seviyor." },
      { id: "b", text: "Noah : Babam Victor, o bir /diş hekimi/ ve /bulmaca çözmeyi/ seviyor." }
    ],
    easyDistractor: "Noah : Babam Victor, o bir diş hekimi ve golf oynamayı seviyor.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["noah", "victor"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
   evidenceStart: "0:06.120",
evidenceEnd: null,
evidenceSentence: "He’s a /dentist/ and loves /doing puzzles/.",
  },

{
    id: "introduce_family_olivia_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_olivia.mp4",
    videoStart: "0:00",
    videoEnd: "0:08.062",
    title: "Olivia introduces her mother.",
    transcript: "Olivia : Hi, this is my family, My mum is Fiona, She’s a /hairdresser/ and loves /watching films/.",
    answerOptions: [
      { id: "a", text: "Olivia : Merhaba, bu benim ailem, annem Fiona, o bir /kuaför/ ve /film izlemeyi/ seviyor." },
      { id: "b", text: "Olivia : Merhaba, bu benim ailem, annem Fiona, o bir pilot ve uçmayı seviyor." }
    ],
    easyDistractor: "Olivia : Merhaba, bu benim ailem, annem Fiona, o bir kuaför ve kitap okumayı seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["olivia", "fiona"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:04.807",
evidenceEnd: "0:08.062",
evidenceSentence: "She’s a /hairdresser/ and loves /watching films/.",
  },
{
    id: "introduce_family_olivia_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_olivia.mp4",
    videoStart: "0:08.062",
    videoEnd: "0:11.542",
    title: "Olivia introduces her father.",
    transcript: "Olivia : My dad was Patrick, he was a /pilot/.",
    answerOptions: [
      { id: "a", text: "Olivia : Babam Patrick idi, o bir kuafördü." },
      { id: "b", text: "Olivia : Babam Patrick idi, o bir /pilottu/." }
    ],
    easyDistractor: "Olivia : Babam Patrick idi, o bir otobüs şoförüydü.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["olivia", "patrick"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations"],
    theme: "introduction",
    evidenceStart: "0:07.932",
evidenceEnd: null,
evidenceSentence: "Olivia : My dad was Patrick, he was a /pilot/.",
  },

  {
    id: "introduce_family_victoria_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_victoria.mp4",
    videoStart: "0:00",
    videoEnd: "0:06.467",
    title: "Victoria introduces her mother.",
    transcript: "Victoria : Hi, this is my family, My mum is Monica, She’s a /lawyer/ and loves /reading books/.",
    answerOptions: [
      { id: "a", text: "Victoria : Merhaba, bu benim ailem, annem Monica, o bir /avukat/ ve /kitap okumayı/ seviyor." },
      { id: "b", text: "Victoria : Merhaba, bu benim ailem, annem Monica, o bir muhasebeci ve yemek yapmayı seviyor." }
    ],
    easyDistractor: "Victoria : Merhaba, bu benim ailem, annem Monica, o bir avukat ve resim yapmayı seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["victoria", "monica"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:03.770",
evidenceEnd: "0:06.467",
evidenceSentence: "She’s a /lawyer/ and loves /reading books/.",
  },

  {
    id: "introduce_family_victoria_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_victoria.mp4",
    videoStart: "0:06.467",
    videoEnd: "0:14.419",
    title: "Victoria introduces her father and Pixel.",
    transcript: "Victoria : My dad is Arthur, He’s a /bus driver/ and loves /playing board games/, and this is my hamster, Pixel.",
    answerOptions: [
      { id: "a", text: "Victoria : Babam Arthur, o bir avukat ve kitap okumayı seviyor, bu da kedim Pixel." },
      { id: "b", text: "Victoria : Babam Arthur, o bir /otobüs şoförü/ ve /kutu oyunları oynamayı/ seviyor, bu da hamsterım Pixel." }
    ],
    easyDistractor: "Victoria : Babam Arthur, o bir otobüs şoförü ve golf oynamayı seviyor, bu da hamsterım Pixel.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["victoria", "arthur"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
   evidenceStart: "0:06.604",
evidenceEnd: "0:11.492",
evidenceSentence: "He’s a /bus driver/ and loves /playing board games/.",
  },

 {
    id: "introduce_family_zoe_1",
    status: "published",
    videoSrc: "assets/video/introduce_family_zoe.mp4",
    videoStart: "0:00",
    videoEnd: "0:07.630",
    title: "Zoe introduces her mother.",
    transcript: "Zoe : Hi, this is my family, My mum is Eleni, She’s a /saleswoman/ and loves /cooking/.",
    answerOptions: [
      { id: "a", text: "Zoe : Merhaba, bu benim ailem, annem Eleni, o bir /satış elemanı/ ve /yemek yapmayı/ seviyor." },
      { id: "b", text: "Zoe : Merhaba, bu benim ailem, annem Eleni, o bir avukat ve kitap okumayı seviyor." }
    ],
    easyDistractor: "Zoe : Merhaba, bu benim ailem, annem Eleni, o bir satış elemanı ve yıldız gözlemi yapmayı seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["zoe", "eleni"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:04.945",
evidenceEnd: "0:07.630",
evidenceSentence: "She’s a /saleswoman/ and loves /cooking/.",
  },

  {
    id: "introduce_family_zoe_2",
    status: "published",
    videoSrc: "assets/video/introduce_family_zoe.mp4",
    videoStart: "0:07.630",
    videoEnd: "0:13.667",
    title: "Zoe introduces her father.",
    transcript: "Zoe : My dad is Nikos, He’s a /salesman/ and loves /stargazing/.",
    answerOptions: [
      { id: "a", text: "Zoe : Babam Nikos, o bir aşçı ve yemek yapmayı seviyor." },
      { id: "b", text: "Zoe : Babam Nikos, o bir /satış elemanı/ ve /yıldız gözlemi/ yapmayı seviyor." }
    ],
    easyDistractor: "Zoe : Babam Nikos, o bir satış elemanı ve bisiklete binmeyi seviyor.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["zoe", "nikos"],
    grades: [5, 6],
    functions: ["introducing_others", "occupations", "talking_about_hobbies"],
    theme: "introduction",
    evidenceStart: "0:07.926",
evidenceEnd: "0:12.700",
    evidenceSentence: "He’s a /salesman/ and loves /stargazing/.",
  },
];

window.LEAGUE_OF_LISTENING_DIFFICULTY_DISTRACTORS = Object.freeze(
  Object.fromEntries(window.LEAGUE_OF_LISTENING_ITEMS.filter((item) => item.easyDistractor).map((item) => [item.id, Object.freeze({
    easy: item.easyDistractor,
    medium: item.answerOptions.find((option) => option.id !== item.correctOptionId)?.text || ""
  })]))
);

window.LEAGUE_OF_LISTENING_FUNCTIONS = Object.freeze({
  accepting: "Accepting",
  agree_disagree: "Agreeing and Disagreeing",
  asking_about: "Asking about people, things, actions, time and ideas",
  asking_about_condition: "Asking About one's condition",
  asking_for_price: "Asking for price",
  asking_permission: "Asking Permission",
  asking_preferences_about_activities: "Asking Preferences About Activities",
  askingaboutlocation: "Asking About Location",
  askingaboutsomeone: "Asking About Someone",
  askingfordirections: "Asking for directions",
  askingforhelp: "Asking for Help",
  askinginformationabouttime: "Asking for Information About Time",
  confirming_information: "Confirming Information",
  comparatives_of_adjectives: "Expressing comparisons between two people, objects, or ideas",
  correcting_behaviour: "Correcting Behaviour",
  countries: "Naming countries",
  describing_a_regular_habit: "Describing a Regular Habit",
  describing_physical_appearance: "Describing Physical Appearance",
  describing_roles: "Describing the responsibilities of different roles in the classroom",
  describing_study_routines: "Describing study routines",
  expressing_a_favorite_activity: "Expressing a Favorite Activity",
  expressing_a_preference: "Expressing a Preference",
  expressing_a_school_rule: "Expressing a School Rule",
  expressing_and_comparing_personal_preferences: "Expressing and Comparing Personal Preferences",
  expressing_feelings: "Expressing Feelings",
  expressing_hopes: "Expressing hopes",
  expressing_obligations_or_rules: "Expressing Obligations or Rules",
  expressing_prohibition: "Expressing Prohibition",
  expressingsurprise: "Expressing Surprise",
  expressingtime: "Time expressions",
  frequency_adverbs: "Frequency Adverbs",
  future_response_ill: "Future Response with 'will'",
  giving_a_warning: "Giving a Warning",
  giving_commands: "Imperatives : Giving Commands",
  givingdirections: "Giving directions",
  givinginformation: "Giving Information",
  givinglocationinformation: "Giving Location Information",
  imperatives: "Giving Instructions",
  introductions: "Introducing Yourself",
  introducing_others: "Introducing people",
  makingasuggestion: "Making a Suggestion",
  makingrequests: "Making Requests",
  numbers: "Numbers",
  occupations: "Talking about occupations",
  offeringhelp: "Offering Help",
  ordering_something: "Ordering something",
  permission: "Asking for and Giving Permission",
  possessive_adjective: "Possessive 's: Indicating ownership or relationship.",
  present_progressive: "Present Progressive Tense",
  present_progressive_vs_present_simple: "Use of Present Progressive vs Present Simple",
  present_progressive_for_planned_future: "Use of Present Progressive for planned future",
  refusing: "Refusing",
  responding_appropriately: "Responding Appropriately",
  suggesting: "Making Suggestions",
  tag_questions: "Tag questions",
  talking_about_hobbies: "Talking about hobbies",
  telling_time: "Telling time",
  use_of_modals_mustnt_and_cant_prohibition: "Use of Modals Mustn't and Can't (Prohibition)",
  use_of_object_pronouns: "Use of Object Pronouns",
  use_of_simple_present_tense: "Use of the Simple Present Tense",
  use_of_simple_present_tense_for_habbits: "Use of the Simple Present Tense For Habits",
  use_of_there_is_there_are: "Use of 'There is/There are': Indicating existence or location.",
  use_of_to_be_for_time: "Use of To Be for Time",
  use_of_to_be_present: "Use of To Be Present",
  use_of_wh_questions_what_time: "Use of Wh- Questions (What Time)",
  use_of_wh_questions_who_what: "Use of Wh- Questions (Who, What)",

});
