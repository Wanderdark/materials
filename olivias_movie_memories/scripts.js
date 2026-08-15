/*
  LEAGUE OF LISTENING CONTENT
  Her video kaydı yalnızca bu dosyada tutulur; arayüz veya oyun mantığına
  eğitim içeriği yazılmaz. Bir kaydın oyuna girmesi için transcript / iki
  seçenek / correctOptionId alanları dolu olmalıdır.
*/
window.LEAGUE_OF_LISTENING_ITEMS = [


    {
    id: "5_life_in_the_city_benjamin_lucas",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_benjamin_lucas.mp4",
    title: "Lucas notices Daniel's sports bag.",
    transcript: "Lucas : /Daniel's/ sports bag is still here. Benjamin : Again? Lucas : Yep, He'll be back in a minute.",
    answerOptions: [
      { id: "a", text: "Lucas : /Daniel'ın/ spor çantası hâlâ burada. Benjamin : Yine mi? Lucas : Evet, birazdan geri döner." },
      { id: "b", text: "Lucas : Daniel'ın tenis raketi hala burda. Benjamin : Yine mi? Lucas : Evet, birazdan geri döner." }
    ],
    easyDistractor: "Lucas : Daniel'ın spor çantası okulda. Benjamin : Yine mi? Lucas : Evet, birazdan geri döner.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["lucas", "benjamin"],
    grades: [5, 6],
    functions: ["possessive_adjective"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.826",
    evidenceSentence: "Lucas : /Daniel's/ sports bag is still here.",
  },
  {
    id: "5_life_in_the_city_mia_zoe",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_mia_zoe.mp4",
    title: "Mia and Zoe compare the castle's courtyard and tower.",
    transcript: "Zoe : The castle's courtyard is huge. Mia : And the tower's even tall/er/ from here.",
    answerOptions: [
      { id: "a", text: "Zoe : Kalenin avlusu çok büyük. Mia : Ve kule buradan bakınca daha da büyük." },
      { id: "b", text: "Zoe : Kalenin avlusu çok büyük. Mia : Ve kule buradan bakınca /daha da uzun/." }
    ],
    easyDistractor: "Zoe : Kalenin avlusu çok büyük. Mia : Ve kule buradan daha da küçük.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["mia", "zoe"],
    grades: [5, 6],
    functions: ["possessive_adjective", "comparatives_of_adjectives"],
    theme: "life_in_the_city",
   evidenceStart: "0:03.263",
evidenceEnd: "0:06.507",
    evidenceSentence: "Mia : And the tower's even tall/er/ from here.",
  },
  {
    id: "5_life_in_the_city_hannah_emma",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_hannah_emma.mp4",
    title: "Hannah and Emma hear the street fair getting closer.",
    transcript: "Hannah : The street fair's music is getting loud/er/. Emma : Good, we must be getting clos/er/.",
    answerOptions: [
      { id: "a", text: "Hannah : Sokak fuarının müziği gittikçe /daha yüksek sesli/ oluyor. Emma : Güzel, /daha da yaklaşıyor/ olmalıyız." },
      { id: "b", text: "Hannah : Sokak fuarının müziği kulağa hoş geliyor. Emma : Güzel, daha da yaklaşıyor olmalıyız." }
    ],
    easyDistractor: "Hannah : Sokak fuarının müziği gittikçe daha yüksek sesli oluyor. Emma : Güzel, daha da uzaklaşıyor olmalıyız.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["hannah", "emma"],
    grades: [5, 6],
    functions: ["possessive_adjective", "comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.319",
evidenceEnd: "0:02.672",
    evidenceSentence: "Hannah : The street fair's music is getting loud/er/.",
  },
  {
    id: "5_life_in_the_city_zoe_mia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_zoe_mia.mp4",
    title: "Mia and Zoe compare a wooden house and a flat.",
    transcript: "Mia : This wooden house looks /more/ beautiful /than/ that flat. Zoe : Yes, but the flat is /more/ modern.",
    answerOptions: [
      { id: "a", text: "Mia : Bu ahşap ev şu apartman dairesinden daha az güzel görünüyor. Zoe : Evet, ama apartman dairesi daha eski." },
      { id: "b", text: "Mia : Bu ahşap ev şu apartman dairesi/nden daha/ güzel görünüyor. Zoe : Evet, ama apartman dairesi /daha/ modern." }
    ],
    easyDistractor: "Mia : Bu ahşap ev şu apartman dairesinden daha güzel görünüyor. Zoe : Evet, ama apartman dairesi daha eski.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["zoe", "mia"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.336",
evidenceEnd: "0:05.891",
    evidenceSentence: "Mia : This wooden house looks /more/ beautiful /than/ that flat. Zoe : Yes, but the flat is /more/ modern.",
  },
  {
    id: "5_life_in_the_city_zoe_mia2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_zoe_mia2.mp4",
    title: "Mia and Zoe compare the height and style of two homes.",
    transcript: "Mia : That flat is much tall/er than/ the wooden house. Zoe : True, but the wooden house looks /more/ traditional.",
    answerOptions: [
      { id: "a", text: "Mia : O apartman ahşap evden çok daha yüksek. Zoe : Doğru, ama ahşap ev daha geleneksel görünüyor." },
      { id: "b", text: "Mia : O apartman ahşap evden çok daha kısa. Zoe : Doğru, ama ahşap ev daha modern görünüyor." }
    ],
    easyDistractor: "Mia : O apartman ahşap evden çok daha yüksek. Zoe : Doğru, ama ahşap ev daha modern görünüyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["zoe", "mia"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:05.788",
    evidenceSentence: "Mia : That flat is much tall/er than/ the wooden house. Zoe : True, but the wooden house looks /more/ traditional.",
  },
  {
    id: "5_life_in_the_city_noah_ethan",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_noah_ethan.mp4",
    title: "Noah and Ethan compare two televisions.",
    transcript: "Noah : This TV is bigg/er than/ that one. Ethan : Yes, but that one is /more/ advanced and /more/ expensive.",
    answerOptions: [
      { id: "a", text: "Noah : Bu televizyon şundan daha küçük. Ethan : Evet, ama şu daha az gelişmiş ve daha ucuz." },
      { id: "b", text: "Noah : Bu televizyon şundan /daha/ büyük. Ethan : Evet, ama şu /daha/ gelişmiş ve /daha/ pahalı." }
    ],
    easyDistractor: "Noah : Bu televizyon şundan daha büyük. Ethan : Evet, ama şu daha az gelişmiş ve daha ucuz.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["noah", "ethan"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:06.027",
    evidenceSentence: "Noah : This TV is bigg/er than/ that one. Ethan : Yes, but that one is /more/ advanced and /more/ expensive.",
  },
  {
    id: "5_life_in_the_city_chloe_ava",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_chloe_ava.mp4",
    title: "Ava and Chloe compare a giraffe and a zebra.",
    transcript: "Ava : The giraffe is tall/er than/ the zebra. Chloe : Yes, and it has only seven bones in its neck, just like us.",
    answerOptions: [
      { id: "a", text: "Ava : Zürafa zebradan /daha/ uzun. Chloe : Evet, ve boynunda tıpkı bizimki gibi yalnızca yedi kemik var." },
      { id: "b", text: "Ava : Zürafa zebradan daha büyük. Chloe : Evet, ve boynunda tıpkı bizimki gibi yalnızca yedi kemik var." }
    ],
    easyDistractor: "Ava : Zürafa zebradan daha akıllı. Chloe : Evet, ve boynunda tıpkı bizimki gibi yalnızca beş kemik var.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["chloe", "ava"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.480",
    evidenceSentence: "Ava : The giraffe is tall/er than/ the zebra.",
  },
 {
    id: "5_life_in_the_city_lucas_jack",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_lucas_jack.mp4",
    title: "Lucas and Jack share facts about sharks.",
    transcript: "Lucas : /There are/ no bones in a shark’s body. Jack : Yes, and sharks are old/er than/ trees.",
    answerOptions: [
      { id: "a", text: "Lucas : Köpekbalığının vücudunda kemik /yoktur/. Jack : Evet, ve köpekbalıkları ağaçlardan /daha/ eskidir." },
      { id: "b", text: "Lucas : Köpekbalığının vücudunda kemikler vardır. Jack : Evet, ve köpekbalıkları ağaçlardan daha büyüktür." }
    ],
    easyDistractor: "Lucas : Köpekbalığının vücudunda kemik yoktur. Jack : Evet, ve köpekbalıkları ağaçlardan daha yenidir.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["lucas", "jack"],
    grades: [5, 6],
    functions: ["use_of_there_is_there_are", "comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:05.114",
evidenceSentence: "Lucas : /There are/ no bones in a shark’s body. Jack : Yes, and sharks are old/er than/ trees.",
  },
  {
    id: "5_life_in_the_city_emma_hannah",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_emma_hannah.mp4",
    title: "Emma and Hannah share facts about an octopus.",
    transcript: "Emma : /There are/ three hearts in an octopus. Hannah : Yes, and its blood is blue.",
    answerOptions: [
      { id: "a", text: "Emma : Ahtapotun kalbi yoktur. Hannah : Evet, ve kanı da mavidir." },
      { id: "b", text: "Emma : Bir ahtapotun üç kalbi /vardır/. Hannah : Evet, ve kanı mavidir." }
    ],
    easyDistractor: "Emma : Bir ahtapotun bir kalbi vardır. Hannah : Evet, ve kanı kırmızıdır.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["emma", "hannah"],
    grades: [5, 6],
    functions: ["use_of_there_is_there_are"],
    theme: "life_in_the_city",
  evidenceStart: "0:00.000",
evidenceEnd: "0:02.398",
    evidenceSentence: "Emma : /There are/ three hearts in an octopus.",
  },
  {
    id: "5_life_in_the_city_olivia_ella",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_olivia_ella.mp4",
    title: "Olivia and Ella share facts about an elephant.",
    transcript: "Olivia : There are more than 40,000 muscles in an elephant’s trunk. Ella : Yes, and the elephant is heav/ier than/ the rhinoceros.",
    answerOptions: [
      { id: "a", text: "Olivia : Bir filin hortumunda 40.000'den fazla kas vardır. Ella : Evet, ve fil gergedandan daha ağırdır." },
      { id: "b", text: "Olivia : Bir filin hortumunda 40.000'den fazla kas vardır. Ella : Evet, ve gergedan filden daha akıllıdır." }
    ],
    easyDistractor: "Olivia : Bir filin hortumunda 40.000'den fazla kas vardır. Ella : Evet, ve fil gergedandan daha hafiftir.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["olivia", "ella"],
    grades: [5, 6],
    functions: ["use_of_there_is_there_are", "comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:03.176",
evidenceEnd: null,
    evidenceSentence: "Ella : Yes, and the elephant is heav/ier than/ the rhinoceros.",
  },
  {
    id: "5_life_in_the_city_chloe_emma",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_chloe_emma.mp4",
    title: "Chloe and Emma share facts about koalas and kangaroos.",
    transcript: "Chloe : /There are/ fingerprints on a koala’s fingertips, just like ours. Emma : Yes, and the kangaroo is much taller than the koala.",
    answerOptions: [
      { id: "a", text: "Chloe : Bir koalanın parmak uçlarında parmak izi yoktur. Emma : Evet, ve kanguru koaladan çok daha uzundur." },
      { id: "b", text: "Chloe : Bir koalanın parmak uçlarında tıpkı bizimkiler gibi parmak izleri /vardır/. Emma : Evet, ve kanguru koaladan çok daha uzundur." }
    ],
    easyDistractor: "Chloe : Bir koalanın parmak uçlarında tıpkı bizimkiler gibi parmak izleri vardır. Emma : Evet, ve kanguru koaladan daha kısadır.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["chloe", "emma"],
    grades: [5, 6],
    functions: ["use_of_there_is_there_are", "comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: null,
    evidenceEnd: null,
    evidenceSentence: "Chloe : /There are/ fingerprints on a koala’s fingertips, just like ours.",
  },





 
  {
    id: "5_life_in_the_city_ella_daniel",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_ella_daniel.mp4",
    title: "Ella and Daniel compare rides at the fair.",
    transcript: "Daniel : The roller coaster is fast/er than/ the bumper cars. Ella : I agree, but the bumper cars are funn/ier/. Daniel : Wow!",
    answerOptions: [
      { id: "a", text: "Daniel : Hız treni çarpışan arabalar kadar hızlı. Ella : Katılıyorum, ama çarpışan arabalar daha eğlenceli : Vay!" },
      { id: "b", text: "Daniel : Hız treni çarpışan arabalardan /daha/ hızlı. Ella : Katılıyorum, ama çarpışan arabalar /daha/ eğlenceli. Daniel : Vay!" }
    ],
    easyDistractor: "Daniel : Hız treni çarpışan arabalardan daha hızlı. Ella : Katılmıyorum, çarpışan arabalar daha sıkıcı. Daniel : Vay!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "daniel"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives", "agree_disagree"],
    theme: "life_in_the_city",
   evidenceStart: "0:00.000",
evidenceEnd: "0:03.070",
evidenceSentence: "Daniel : The roller coaster is fast/er than/ the bumper cars.",
  },
  {
    id: "5_life_in_the_city_ella_daniel2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_ella_daniel2.mp4",
    title: "Ella agrees with Daniel about the faster ride.",
    transcript: "Ella : You were right! This is really /faster/ and funn/ier than/ the bumper cars! Daniel : Told you so!",
    answerOptions: [
      { id: "a", text: "Ella : Haklıydın! Bu gerçekten çarpışan arabalardan daha heyecanlı ve daha keyifli! Daniel : Sana söylemiştim!" },
      { id: "b", text: "Ella : Haklıydın! Bu gerçekten çarpışan arabalardan /daha hızlı/ ve /daha eğlenceli/! Daniel : Sana söylemiştim!" }
    ],
    easyDistractor: "Ella : Haklıydın! Bu gerçekten çarpışan arabalardan daha hızlı ve daha sıkıcı! Daniel : Sana söylemiştim!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "daniel"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives", "agree_disagree"],
    theme: "life_in_the_city",
    evidenceStart: "0:01.062",
evidenceEnd: "0:04.163",
evidenceSentence: "Ella : You were right! This is really /faster/ and funn/ier than/ the bumper cars!",
  },
  {
    id: "5_life_in_the_city_mia_zoe2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_mia_zoe2.mp4",
    title: "Mia and Zoe find rides at the fair.",
    transcript: "Mia : /There is/ a giant Ferris wheel over there. Zoe : And there are bumper cars near the gate. Mia : /Let’s/ try the bumper cars first! Zoe : Let’s!",
    answerOptions: [
      { id: "a", text: "Mia : Şurada dev bir dönme dolap var. Zoe : Ve kapının yanında çarpışan arabalar var. Mia : Önce çarpışan arabaları deneyelim! Zoe : Hadi!" },
      { id: "b", text: "Mia : Şurada dev bir atlıkarınca var. Zoe : Ve kapının yanında dönme dolap var. Mia : /Hadi/ önce atlıkarıncayı deneyelim! Zoe : Hadi!" }
    ],
    easyDistractor: "Mia : Şurada dev bir dönme dolap var. Zoe : Ve kapının yanında çarpışan arabalar var. Mia : Önce dönme dolaba binelim! Zoe : Hadi!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["mia", "zoe"],
    grades: [5, 6],
    functions: ["use_of_there_is_there_are","makingasuggestion"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:03.422",
    evidenceSentence: "Mia : /There is/ a giant Ferris wheel over there.",
  },

  {
    id: "5_life_in_the_city_hannah_lars",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_hannah_lars.mp4",
    title: "Hannah and Lars compare two bridges.",
    transcript: "Hannah : This bridge is high/er than/ I expected! Lars : And /more/ dangerous /than/ the last one! Hannah : Whoa!",
    answerOptions: [
      { id: "a", text: "Hannah : Bu köprü beklediğimden daha alçak! Lars : Ve son köprüden daha güvenli! Hannah : Hay aksi!" },
      { id: "b", text: "Hannah : Bu köprü beklediğimden /daha yüksek/! Lars : Ve son köprüden /daha tehlikeli/! Hannah : Hay aksi!" }
    ],
    easyDistractor: "Hannah : Bu köprü beklediğimden daha yüksek! Lars : Ve son köprüden daha güvenli! Hannah : Vay canına!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "lars"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:06.551",
    evidenceSentence: "Hannah : This bridge is high/er than/ I expected! Lars : And /more/ dangerous /than/ the last one.",
  },
  {
    id: "5_life_in_the_city_chloe_olivia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_chloe_olivia.mp4",
    title: "Chloe and Olivia disagree about two fair rides.",
    transcript: "Olivia : The carousel is /more/ beautiful /than/ the Ferris wheel. Chloe : /I don’t think so/, the Ferris wheel is bright/er/.",
    answerOptions: [
      { id: "a", text: "Olivia : Dönme dolap, Atlıkarıncadan daha güzel. Chloe : Katılıyorum, atlıkarınca daha güzel." },
      { id: "b", text: "Olivia : Atlıkarınca dönme dolaptan /daha/ güzel. Chloe : Öyle düşünmüyorum, dönme dolap /daha/ parlak." }
    ],
    easyDistractor: "Olivia : Atlıkarınca dönme dolaptan daha güzel. Chloe : Katılıyorum, atlıkarınca daha parlak.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["chloe", "olivia"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives", "agree_disagree"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:06.633",
evidenceSentence: "Olivia : The carousel is /more/ beautiful /than/ the Ferris wheel. Chloe : /I don’t think so/, the Ferris wheel is bright/er/.",

 },
  {
    id: "5_life_in_the_city_daniel_javier",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_daniel_javier.mp4",
    title: "Daniel and Javier compare two wrenches.",
    transcript: "Daniel : This wrench is bigg/er than/ the other one. Javier : Yes, but the small/er/ one is /better/ for this.",
    answerOptions: [
      { id: "a", text: "Daniel : Bu anahtar diğerinden /daha büyük/. Javier : Evet, ama daha küçüğü bunun için daha iyi." },
      { id: "b", text: "Daniel : Bu anahtar diğerinden daha küçük. Javier : Evet, ama daha büyüğü bunun için daha iyi." }
    ],
    easyDistractor: "Daniel : Bu anahtar diğerinden daha büyük. Javier : Evet, ama daha büyüğü bunun için daha iyi.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["daniel", "javier"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
   evidenceStart: "0:00.000",
evidenceEnd: "0:02.571",
evidenceSentence: "Daniel : This wrench is bigg/er than/ the other one.",
  },
  {
    id: "5_life_in_the_city_jack_callum",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_jack_callum.mp4",
    title: "Jack tries to catch a bigger fish.",
    transcript: "Jack : I can catch a bigg/er/ fish /than/ that. Callum : Then prove it. Jack : I got one!",
    answerOptions: [
      { id: "a", text: "Jack : Bundan daha lezzetli bir balık yakalayabilirim. Callum : O zaman kanıtla. Jack : Bir tane yakaladım!" },
      { id: "b", text: "Jack : Bundan /daha büyük/ bir balık yakalayabilirim. Callum : O zaman kanıtla. Jack : Bir tane yakaladım!" }
    ],
    easyDistractor: "Jack : Bundan daha büyük bir balık yakalayabilirim. Callum : O zaman vazgeç. Jack : Bir tane yakaladım!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["jack", "callum"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.539",
evidenceSentence: "Jack : I can catch a bigg/er/ fish /than/ that.",
  },

  {
    id: "5_life_in_the_city_chloe_julien",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_chloe_julien.mp4",
    title: "Chloe and Julien compare a T. rex.",
    transcript: "Chloe : T rex is bigg/er than/ I expected! Julien : And its teeth are long/er than/ your hand.",
    answerOptions: [
      { id: "a", text: "Chloe : T. rex beklediğimden daha korkunç! Julien : Ve dişleri nerdeyse elin kadar." },
      { id: "b", text: "Chloe : T. rex beklediğimden /daha büyük/! Julien : Ve dişleri elinden /daha uzun/." }
    ],
    easyDistractor: "Chloe : T. rex beklediğimden daha büyük! Julien : Ve dişleri elinden daha kısa.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["chloe", "julien"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:05.951",
    evidenceSentence: "Chloe : T rex is bigg/er than/ I expected! Julien : And its teeth are long/er than/ your hand.",
  },

  {
    id: "5_life_in_the_city_daniel_elena",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_daniel_elena.mp4",
    title: "Daniel compares his sled with Elena's.",
    transcript: "Daniel : Mom, my sled is fast/er than/ yours! Elena : You think so? Daniel : I know so!",
    answerOptions: [
      { id: "a", text: "Daniel : Anne, kızağım seninkinden /daha hızlı/! Elena : Öyle mi düşünüyorsun? Daniel : Düşünmüyorum, biliyorum!" },
      { id: "b", text: "Daniel : Anne, kızağım çok hızlı! Elena : Öyle mi düşünüyorsun? Daniel : Düşünmüyorum, biliyorum!" }
    ],
    easyDistractor: "Daniel : Anne, kızağım seninkinden daha hızlı! Elena : Öyle mi düşünüyorsun? Daniel : Emin değilim!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["daniel", "elena"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.771",
evidenceSentence: "Daniel : Mom, my sled is fast/er than/ yours!",
  },
  {
    id: "5_life_in_the_city_mia_giulia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_mia_giulia.mp4",
    title: "Mia and Giulia compare two pizzas.",
    transcript: "Mia : Your pizza is bigg/er than/ mine. Giulia : But yours looks /more/ delicious.",
    answerOptions: [
      { id: "a", text: "Mia : Pizzan benimkinden daha lezzetli görünüyor. Giulia : Seninki daha küçük görünüyor." },
      { id: "b", text: "Mia : Pizzan benimkinden /daha büyük/. Giulia : Ama seninki /daha/ lezzetli görünüyor." }
    ],
    easyDistractor: "Mia : Pizzan benimkinden daha büyük. Giulia : Ama seninki daha az lezzetli görünüyor.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["mia", "giulia"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.232",
evidenceSentence: "Mia : Your pizza is bigg/er than/ mine. Giulia : But yours looks /more/ delicious.",
  },

  {
    id: "5_life_in_the_city_chloe_camille",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_chloe_camille.mp4",
    title: "Chloe and Camille compare their flowers.",
    transcript: "Chloe : Mom, my flower is tall/er than/ yours. Camille : Yes, but mine has /more/ flowers.",
    answerOptions: [
      { id: "a", text: "Chloe : Anne, çiçeğim seninkinden /daha uzun/. Camille : Evet, ama benimkinin /daha çok/ çiçeği var." },
      { id: "b", text: "Chloe : Anne, çiçeğin beninkinden daha kısa. Camille : Evet, ama benimkinin daha az çiçeği var." }
    ],
    easyDistractor: "Chloe : Anne, çiçeğim seninkinden daha uzun. Camille : Evet, ama benimkinin daha az çiçeği var.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["chloe", "camille"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
   evidenceStart: "0:00.000",
evidenceEnd: "0:05.950",
evidenceSentence: "Chloe : Mom, my flower is tall/er than/ yours. Camille : Yes, but mine has /more/ flowers.",

  },
  {
    id: "5_life_in_the_city_ava_david",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_ava_david.mp4",
    title: "Ava and her father compare an animal's abilities.",
    transcript: "Ava : It’s tall/er than/ I expected! David : And it can run fast/er than/ you!",
    answerOptions: [
      { id: "a", text: "Ava : Beklediğim kadar uzun! David : Ve senin kadar hızlı koşamaz!" },
      { id: "b", text: "Ava : Beklediğimden /daha uzun/! David : Ve senden /daha hızlı/ koşabilir!" }
    ],
    easyDistractor: "Ava : Beklediğimden daha uzun! David : Ve senden daha yavaş koşabilir!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ava", "david_ava"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
   evidenceStart: "0:00.000",
evidenceEnd: "0:05.426",
evidenceSentence: "Ava : It’s tall/er than/ I expected! David : And it can run fast/er than/ you!",
  },
  {
    id: "5_life_in_the_city_lucas_gabriel",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_lucas_gabriel.mp4",
    title: "Lucas and Gabriel compare a fire truck with their car.",
    transcript: "Lucas : Wow! The fire truck is bigg/er than/ our car! Gabriel : And much loud/er/!",
    answerOptions: [
      { id: "a", text: "Lucas : Vay canına! İtfaiye aracı arabamızdan /daha büyük/! Gabriel : Ve çok /daha gürültülü/!" },
      { id: "b", text: "Lucas : Vay canına! İtfaiye aracı sandığım kadar büyük değil! Gabriel : Ama çok daha sesli!" }
    ],
    easyDistractor: "Lucas : Vay canına! İtfaiye aracı arabamızdan daha büyük! Gabriel : Ve çok daha sessiz!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["lucas", "gabriel"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.873",
evidenceSentence: "Lucas : Wow! The fire truck is bigg/er than/ our car! Gabriel : And much loud/er/!",
  },
  {
    id: "5_life_in_the_city_ava_amina",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_ava_amina.mp4",
    title: "Ava and Amina identify the puppy's belongings.",
    transcript: "Ava : Is that the puppy/’s X-ray/? Amina : Yes, and this is the puppy/’s toy/.",
    answerOptions: [
      { id: "a", text: "Ava : Bu kimin röntgeni? Amina : Bu yavru köpeğin röntgeni." },
      { id: "b", text: "Ava : Bu yavru köpeğ/in röntgeni/ mi? Amina : Evet, bu da yavru köpeğ/in oyuncağı./" }
    ],
    easyDistractor: "Ava : Bu yavru köpeğin röntgeni mi? Amina : Evet, bu da kedinin oyuncağı.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ava", "amina"],
    grades: [5, 6],
    functions: ["possessive_adjective"],
    theme: "life_in_the_city",
  evidenceStart: "0:00.649",
evidenceEnd: "0:06.700",
evidenceSentence: "Ava : Is that the puppy/’s X-ray/? Amina : Yes, and this is the puppy/’s toy/.",
  },

{
    id: "5_classroom_life_benjamin_ava",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_benjamin_ava.mp4",
    title: "Benjamin asks Ava about her morning routine.",
    transcript: "Benjamin : What do you do /everymorning/? Ava : I check my /timetable/ and /pack my schoolbag/.",
    answerOptions: [
      { id: "a", text: "Benjamin : Her akşam ne yaparsın? Ava : Okul çantamı kontrol eder ve hazırlarım." },
      { id: "b", text: "Benjamin : Her /sabah/ ne yaparsın? Ava : /Ders programımı kontrol eder/ ve okul çantamı hazırlarım." }
    ],
    easyDistractor: "Her sabah ne yaparsın? Ava : Dişlerimi fırçalar ve kahvaltı yaparım.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["chloe"],
    grades: [5, 6],
    functions: ["describing_a_regular_habit"],
    theme: "Classroom_life",
    evidenceStart: "0:00",
evidenceEnd: "0:05.631",
evidenceSentence: "Benjamin : What do you do /everymorning/? Ava : I check my /timetable/ and pack my schoolbag.",
  },

{
    id: "5_classroom_life_emma_ethan",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_emma_ethan.mp4",
    title: "Emma asks Ethan about his routine.",
    transcript: "Emma : /When/ do you study science? Ethan : I study it /every afternoon/.",
    answerOptions: [
      { id: "a", text: "Emma : Saat kaçta fen dersi çalışırsın ? Ethan : Her akşam çalışırım." },
      { id: "b", text: "Emma : /Ne zaman/ fen dersi çalışırsın ? Ethan : Her /öğleden sonra/ çalışırım." }
    ],
    easyDistractor: "Emma : Saat kaçta sosyal bilgiler dersi çalışırsın ? Ethan : Her gece çalışırım.",
    correctOptionId: "b", // TODO: "a" veya "b"
    explanation: "",
    characterIds: ["chloe"],
    grades: [5, 6],
    functions: ["describing_a_regular_habit"],
    theme: "Classroom_life",
    evidenceStart: "0:00.673",
evidenceEnd: "0:05.048",
evidenceSentence: "Emma : /When/ do you study science? Ethan : I study it /every afternoon/.",
  },

  {
    id: "5_life_in_the_world_ella_olivia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_ella_olivia.mp4",
    title: "Ella asks Olivia about strawberries.",
    transcript: "Ella : /Have you got/ the strawberries? Olivia : Yep, I/’ve got/ them right here.",
    answerOptions: [
      { id: "a", text: "Ella : Çilekleri verir misin? Olivia : Tabi, işte burda." },
      { id: "b", text: "Ella : Çilekler sende mi? Olivia : Evet, işte /burada/ bende." }
    ],
    easyDistractor: "Ella : Çilekler sende mi? Olivia : Evet, ama çantamda değil.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "olivia"],
    grades: [5, 6],
    functions: ["have_got_has_got"],
    theme: "life_in_the_world",
    evidenceStart: "0:00.000",
evidenceEnd: "0:03.722",
    evidenceSentence: "Ella : /Have you got/ the strawberries? Olivia : Yep, I/’ve got/ them right here.",
  },

  {
    id: "5_life_in_the_world_david_valeria",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_david_valeria.mp4",
    title: "David asks Valeria about honey.",
    transcript: "David : Mom, have we got any honey? Valeria : Yes, I/’ve got some/ right here.",
    answerOptions: [
      { id: "a", text: "David : Anne, balımız var mı? Valeria : Evet, tam burada /biraz var/." },
      { id: "b", text: "David : Anne, balımız var mı? Valeria : Hayır, hiç balımız yok." }
    ],
    easyDistractor: "David : Anne, balımız var mı? Valeria : Evet, ama mutfakta.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["david", "valeria"],
    grades: [5, 6],
    functions: ["have_got_has_got","countable_uncountable"],
    theme: "life_in_the_world",
   evidenceStart: "0:01.928",
evidenceEnd: "0:04.226",
    evidenceSentence: "Valeria : Yes, I/’ve got some/ right here.",
  },

  {
    id: "5_life_in_the_world_mia_giulia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_mia_giulia.mp4",
    title: "Mia and Giulia check their shopping bag for strawberries.",
    transcript: "Mia : Mom, have we got everything? Giulia : Almost, we /haven't got/ any strawberries. Mia : They've got some over there!",
    answerOptions: [
      { id: "a", text: "Mia : Anne, her şeyi aldık mı? Giulia : Evet çileğimiz de var. Mia : Harika hadi gidelim!" },
      { id: "b", text: "Mia : Anne, her şeyi aldık mı? Giulia : Neredeyse, ama hiç çileğimiz yok. Mia : Şurada var, alalım!" }
    ],
    easyDistractor: "Mia : Anne, her şeyimiz var mı? Giulia : Neredeyse, çileğimiz var. Mia : Şurada biraz var!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["mia", "giulia"],
    grades: [5, 6],
    functions: ["have_got_has_got"],
    theme: "life_in_the_world",
   evidenceStart: "0:02.031",
evidenceEnd: "0:04.794",
    evidenceSentence: "Giulia : Almost, we /haven't got/ any strawberries.",
  },
  {
    id: "5_life_in_the_world_daniel_lucas",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_daniel_lucas.mp4",
    title: "Daniel asks Lucas for some fries.",
    transcript: "Daniel : /Can I/ have /some/ of your fries? Lucas : Sure, just /a few/.",
    answerOptions: [
      { id: "a", text: "Daniel : Patates kızartmalarından biraz /alabilir miyim/? Lucas : Tabii, ama sadece birkaç tane." },
      { id: "b", text: "Daniel : Patates kızartmalarından biraz yiyebilir miyim? Lucas : Tabii, çokça al." }
    ],
    easyDistractor: "Daniel : Patates kızartmalarından biraz alabilir miyim? Lucas : Tabii, hepsini al.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["daniel", "lucas"],
    grades: [5, 6],
    functions: ["permission","countable_uncountable"],
    theme: "life_in_the_world",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.165",
    evidenceSentence: "Daniel : /Can I/ have /some/ of your fries? Lucas : Sure, just /a few/.",
  },

  {
    id: "5_life_in_the_world_noah_victoria",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_noah_victoria.mp4",
    title: "Noah asks Victoria for napkins.",
    transcript: "Noah : /Have you got/ any napkins? Victoria : Yeah, I/’ve got some/. Noah : Thanks.",
    answerOptions: [
      { id: "a", text: "Noah : Peçeten /var mı/? Victoria : Evet, /biraz var/. Noah : Teşekkürler." },
      { id: "b", text: "Noah : Peçeteni verir misin? Victoria : Evet, buyur. Noah : Teşekkürler." }
    ],
    easyDistractor: "Noah : Peçeten var mı? Victoria : Evet, ama çantamda değil. Noah : Teşekkürler.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["noah", "victoria"],
    grades: [5, 6],
    functions: ["have_got_has_got"],
    theme: "life_in_the_world",
   evidenceStart: "0:00.000",
evidenceEnd: "0:03.852",
    evidenceSentence: "Noah : /Have you got/ any napkins? Victoria : Yeah, I/’ve got some/.",
  },

  {
    id: "5_life_in_the_world_emma_sophie",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_emma_sophie.mp4",
    title: "Emma asks Sophie for permission to add cheese.",
    transcript: "Emma : Mom, /can I/ add some more cheese? Sophie : Sure, but /just a little/.",
    answerOptions: [
      { id: "a", text: "Emma : Anne, biraz daha peynir ekleyebilir misin? Sophie : Evet bolca ekle." },
      { id: "b", text: "Emma : Anne, biraz daha peynir /ekleyebilir miyim/? Sophie : Tabii, ama /sadece biraz/." }
    ],
    easyDistractor: "Emma : Anne, biraz daha peynir ekleyebilir miyim? Sophie : Tabii, ama çok fazla ekle.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["emma", "sophie"],
    grades: [5, 6],
    functions: ["permission"],
    theme: "life_in_the_world",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.508",
    evidenceSentence: "Emma : Mom, /can I/ add some more cheese? Sophie : Sure, but /just a little/.",
  },
  {
    id: "5_life_in_the_world_lucas_gabriel",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_lucas_gabriel.mp4",
    title: "Lucas asks Gabriel for permission to flip one.",
    transcript: "Lucas : Dad, /can I/ flip one? Gabriel : Sure, use the tongs.",
    answerOptions: [
      { id: "a", text: "Lucas : Baba, bir tanesini /çevirebilir miyim/? Gabriel : Tabii, maşayı kullan." },
      { id: "b", text: "Lucas : Baba, maşayı verir misin? Gabriel : Tabii, al bakalım." }
    ],
    easyDistractor: "Lucas : Baba, bir tanesini çevirebilir miyim? Gabriel : Tabii, ellerini kullan.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["lucas", "gabriel"],
    grades: [5, 6],
    functions: ["permission"],
    theme: "life_in_the_world",
    evidenceStart: "0:00.000",
evidenceEnd: "0:01.844",
    evidenceSentence: "Lucas : Dad, /can I/ flip one?",
  },

  {
    id: "5_life_in_the_world_ava_amina",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_ava_amina.mp4",
    title: "Ava asks a vendor to try a fruit sample.",
    transcript: "Ava : /Can I try/ one of those? Vendor : Of course, take one.",
    answerOptions: [
      { id: "a", text: "Ava : Şunlardan yemek istiyorum.? Esnaf : Tabi, buyur." },
      { id: "b", text: "Ava : Şunlardan birini /deneyebilir miyim/? Esnaf : Elbette, bir tane al." }
    ],
    easyDistractor: "Ava : Şunlardan birini deneyebilir miyim? Vendor : Elbette, hepsini al.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ava", "amina"],
    grades: [5, 6],
    functions: ["permission"],
    theme: "life_in_the_world",
   evidenceStart: "0:00.000",
evidenceEnd: "0:01.696",
    evidenceSentence: "Ava : /Can I try/ one of those?",
  },
  {
    id: "5_life_in_the_world_mia_zoe",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_mia_zoe.mp4",
    title: "Mia and Zoe check muffins and milk.",
    transcript: "Mia : /How many/ muffins have we got? Zoe : Four. Mia : And /how much/ milk have we got? Zoe : Not much. Mia : That’s not enough.",
    answerOptions: [
      { id: "a", text: "Mia : Ne kadar muffinimiz var? Zoe : Dört. Mia : Peki kaç tane sütümüz var? Zoe : Çok fazla. Mia : Bu yeterli." },
      { id: "b", text: "Mia : /Kaç tane/ muffinimiz var? Zoe : Dört. Mia : Peki /ne kadar/ sütümüz var? Zoe : Çok değil. Mia : Bu yeterli değil." }
    ],
    easyDistractor: "Mia : Kaç muffinimiz var? Zoe : Dört. Mia : Peki ne kadar sütümüz var? Zoe : Çok fazla. Mia : Bu yeterli değil.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["mia", "zoe"],
    grades: [5, 6],
    functions: ["countable_uncountable"],
    theme: "life_in_the_world",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.266",
    evidenceSentence: "Mia : /How many/ muffins have we got? Zoe : Four. Mia : And /how much/ milk have we got?",
  },
  {
    id: "5_life_in_the_world_lucas_daniel",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_lucas_daniel.mp4",
    title: "Lucas and Daniel count sandwiches.",
    transcript: "Lucas : /How many/ sandwiches /do we need/? Daniel : Five. Daniel : Hey! Lucas : And /some/ lemonade, please. Vendor : Sure.",
    answerOptions: [
      { id: "a", text: "Lucas : /Kaç tane/ sandviçe ihtiyacımız var? Daniel : Beş. Daniel : Hey! Lucas : Ve /biraz/ limonata, lütfen. Vendor : Tabii." },
      { id: "b", text: "Lucas : Sandviçe ihtiyacımız var mı? Daniel : Evet, İki tane. Daniel : Hey! Lucas : Ve bolca limonata, lütfen. Vendor : Tabii." }
    ],
    easyDistractor: "Lucas : Kaç sandviçe ihtiyacımız var? Daniel : Beş. Daniel : Hey! Lucas : Ve biraz süt, lütfen. Vendor : Tabii.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["lucas", "daniel"],
    grades: [5, 6],
    functions: ["countable_uncountable","expressing_needs"],
    theme: "life_in_the_world",
    evidenceStart: "0:00.000",
evidenceEnd: "0:08.096",
    evidenceSentence: "Lucas : /How many/ sandwiches /do we need/? Daniel : Five. Daniel : Hey! Lucas : And /some/ lemonade, please.",
  },
  {
    id: "5_life_in_the_world_chloe_emma",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_chloe_emma.mp4",
    title: "Chloe asks Emma to show her photos.",
    transcript: "Chloe : /Have you got/ any photos from yesterday? Emma : Yeah, I/’ve got loads/! Chloe : Show me! Chloe : Delete this quickly!",
    answerOptions: [
      { id: "a", text: "Chloe : Dünden fotoğrafların /var mı/? Emma : Evet, /bir sürü var/! Chloe : Göster bana! Chloe : Bunu hemen sil!" },
      { id: "b", text: "Chloe : Dünden fotoğrafların var mı? Emma : Hayır, hiç yok! Chloe : Göster bana! Chloe : Bunu hemen sil!" }
    ],
    easyDistractor: "Chloe : Dünden fotoğrafların var mı? Emma : Evet, bir sürü var! Chloe : Göster bana! Chloe : Bunu sakla.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["chloe", "emma"],
    grades: [5, 6],
    functions: ["have_got_has_got"],
    theme: "life_in_the_world",
 evidenceStart: "0:00.000",
evidenceEnd: "0:04.639",
    evidenceSentence: "Chloe : /Have you got/ any photos from yesterday? Emma : Yeah, I/’ve got loads/",
  },

  {
    id: "5_life_in_the_world_chloe_camille",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_chloe_camille.mp4",
    title: "Chloe asks Camille for permission to decorate one.",
    transcript: "Chloe : Mom, /can I/ decorate one? Camille : Sure, but don’t shake it too much.",
    answerOptions: [
      { id: "a", text: "Chloe : Anne, bir tanesini /süsleyebilir miyim/? Camille : Tabii, ama onu çok fazla sallama." },
      { id: "b", text: "Chloe : Anne, bir tanesini süsleyebilir misin? Camille : Hayır, ona hiç dokunma." }
    ],
    easyDistractor: "Chloe : Anne, bir tanesini süsleyebilir miyim? Camille : Tabii, ama onu yere bırak.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["chloe", "camille"],
    grades: [5, 6],
    functions: ["permission"],
    theme: "life_in_the_world",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.261",
    evidenceSentence: "Chloe : Mom, /can I/ decorate one? ",
  },

  {
    id: "5_life_in_the_city_hannah_benjamin",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_hannah_benjamin.mp4",
    title: "Hannah and Benjamin spot each other in traffic.",
    transcript: "Hannah : Mom, there’s Benjamin in that blue car! Benjamin : And there are /no cars/ between us!",
    answerOptions: [
      { id: "a", text: "Hannah : Anne, Benjamin o mavi arabanın içinde! Benjamin : Ve aramızda kimse yok!" },
      { id: "b", text: "Hannah : Anne, Benjamin o mavi arabanın içinde! Benjamin : Ve aramızda /hiç araba/ yok!" }
    ],
    easyDistractor: "Hannah : Anne, Benjamin o mavi arabanın içinde! Benjamin : Ve aramızda bir otobüs var!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "benjamin"],
    grades: [5, 6],
    functions: ["use_of_there_is_there_are"],
    theme: "life_in_the_city",
    evidenceStart: "0:02.776",
evidenceEnd: "0:04.898",
    evidenceSentence: "Benjamin : And there are /no cars/ between us!",
  },
  {
    id: "5_life_in_the_city_olivia_fiona",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_olivia_fiona.mp4",
    title: "Olivia and Fiona identify a wig.",
    transcript: "Olivia : Mom, is that the /customer’s/ wig? Fiona : No, it’s the /mannequin’s/.",
    answerOptions: [
      { id: "a", text: "Olivia : Anne, bu senin peruğun mu? Fiona : Hayır, /mankenin/." },
      { id: "b", text: "Olivia : Anne, bu müşterinin peruğu mu? Fiona : Evet, benim." }
    ],
    easyDistractor: "Olivia : Anne, bu müşterinin peruğu mu? Fiona : Hayır, saç tasarımcısının.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["olivia", "fiona"],
    grades: [5, 6],
    functions: ["possessive_adjective"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.843",
    evidenceSentence: "Olivia : Mom, is that the /customer’s/ wig? Fiona : No, it’s the /mannequin’s/.",
  },
  {
    id: "5_life_in_the_city_hannah_lars2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_hannah_lars2.mp4",
    title: "Hannah and Lars notice wildlife in a valley.",
    transcript: "Hannah : Dad, there’s a /waterfall/ down there! Lars : And there are /eagles/ above the valley. Hannah : Where?",
    answerOptions: [
      { id: "a", text: "Hannah : Baba, aşağıdaki bir mağara mı! Lars : Evet ve vadinin üzerinde de şahinler var. Hannah : Nerede?" },
      { id: "b", text: "Hannah : Baba, aşağıda bir /şelale/ var! Lars : Ve vadinin üzerinde /kartallar/ var. Hannah : Nerede?" }
    ],
    easyDistractor: "Hannah : Baba, aşağıda bir şelale var! Lars : Ve vadinin içinde ayılar var. Hannah : Nerede?",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "lars"],
    grades: [5, 6],
    functions: ["use_of_there_is_there_are"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.857",
    evidenceSentence: "Hannah : Dad, there’s a /waterfall/ down there! Lars : And there are /eagles/ above the valley.",
  },
  {
    id: "5_life_in_the_city_david_valeria",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_city_david_valeria.mp4",
    title: "David and Valeria identify a suitcase.",
    transcript: "David : Mom, is that the /guest’s/ suitcase? Valeria : Yes, it’s the /magician’s/.",
    answerOptions: [
      { id: "a", text: "David : Anne, bu otel /misafirinin/ valizi mi? Valeria : Evet, /sihirbazın/." },
      { id: "b", text: "David : Anne, bu otel aşçısının valizi mi? Valeria : Hayır, müşterinin." }
    ],
    easyDistractor: "David : Anne, bu misafirin valizi mi? Valeria : Evet, otel müdürünün.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["david", "valeria"],
    grades: [5, 6],
    functions: ["possessive_adjective"],
    theme: "life_in_the_city",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.949",
    evidenceSentence: "David : Mom, is that the /guest’s/ suitcase? Valeria : Yes, it’s the /magician’s/.",
  },
  {
    id: "5_life_in_the_world_hannah_emma",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_hannah_emma.mp4",
    title: "Hannah asks a vendor to try a sauce.",
    transcript: "Hannah : /Can I try/ that sauce? Vendor : Of course, but it's really /spicy/.",
    answerOptions: [
      { id: "a", text: "Hannah : Şu sostan istiyorum. Vendor : Elbette, ama çok ekşi." },
      { id: "b", text: "Hannah : Şu sosu deneyebilir miyim? Vendor : Elbette, ama çok /baharatlı./" }
    ],
    easyDistractor: "Hannah : Şu sostan deneyebilir miyim? Vendor : Elbette, ama hepsini iç.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "emma", "vendor"],
    grades: [5, 6],
    functions: ["permission"],
    theme: "life_in_the_world",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.314",
    evidenceSentence: "Hannah : /Can I try/ that sauce? Vendor : Of course, but it's really /spicy/.",
  },
  {
    id: "5_life_in_the_world_benjamin_ethan",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_benjamin_ethan.mp4",
    title: "Benjamin and Ethan collect their popcorn.",
    transcript: "Benjamin : /Have we got/ everything? Ethan : Wait, we /haven’t got/ the popcorn.",
    answerOptions: [
      { id: "a", text: "Benjamin : Her şeyimiz var mı? Ethan : Dur, popcornumuz /yok/!" },
      { id: "b", text: "Benjamin : Her şeyimiz tamam mı? Ethan : Dur, içeceklerimiz yok! " }
    ],
    easyDistractor: "Benjamin : Her şeyimiz var mı? Ethan : Dur, makarnamız yok! ",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["benjamin", "ethan"],
    grades: [5, 6],
    functions: ["have_got_has_got"],
    theme: "life_in_the_world",
   evidenceStart: "0:00.000",
evidenceEnd: "0:04.706",
    evidenceSentence: "Benjamin : /Have we got/ everything? Ethan : Wait, we /haven’t got/ the popcorn.",
  },
  {
    id: "5_life_in_the_world_hannah_chloe",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_hannah_chloe.mp4",
    title: "Hannah helps Chloe add chocolate topping.",
    transcript: "Chloe : Mine /hasn’t got any/ chocolate. Hannah : Here. Hannah : Stop, stop, stop! Chloe : Perfect.",
    answerOptions: [
      { id: "a", text: "Chloe : Benimkinde çok çikolata yok. İşte. Hannah : Dur, dur, dur! Chloe : Mükemmel." },
      { id: "b", text: "Chloe : Benimkinde /hiç çikolata yok/. Hannah : Dur, dur, dur! Chloe : Mükemmel." }
    ],
    easyDistractor: "Chloe : Benimkinde hiç çikolata yok. Hannah : Hayır. Hannah : Dur, dur, dur! Chloe : Mükemmel.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "chloe"],
    grades: [5, 6],
    functions: ["have_got_has_got"],
    theme: "life_in_the_world",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.575",
    evidenceSentence: "Chloe : Mine /hasn’t got any/ chocolate.",
  },
  {
    id: "5_life_in_the_world_hannah_emma2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_hannah_emma2.mp4",
    title: "Hannah and Emma check sandwiches and juice.",
    transcript: "Hannah : How many sandwiches have we got? Emma : /Eight/. Hannah : And how much juice have we got? Emma : /Plenty/! Emma : Not yet! Hannah : I’m hungry! Emma : Wait for the others.",
    answerOptions: [
      { id: "a", text: "Hannah : Kaç sandviçimiz var? Emma : Sekiz. Hannah : Peki ne kadar meyve suyumuz var? Emma : Bolca! Emma : Henüz değil! Hannah : Acıktım! Emma : Diğerlerini bekle." },
      { id: "b", text: "Hannah : Kaç sandviçimiz var? Emma : İki. Hannah : Peki ne kadar meyve suyumuz var? Emma : Çok az! Emma : Henüz değil! Hannah : Acıktım! Emma : Diğerlerini bekle." }
    ],
    easyDistractor: "Hannah : Kaç sandviçimiz var? Emma : Sekiz. Hannah : Peki ne kadar meyve suyumuz var? Emma : Çok az! Emma : Henüz değil! Hannah : Acıktım! Emma : Diğerlerini bekle.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["hannah", "emma"],
    grades: [5, 6],
    functions: ["countable_uncountable"],
    theme: "life_in_the_world",
    evidenceStart: "0:01.822",
evidenceEnd: "0:05.176",
    evidenceSentence: "Hannah : How many sandwiches have we got? Emma : /Eight/. Hannah : And how much juice have we got? Emma : /Plenty/!",
  },
  {
    id: "5_life_in_the_world_ava_zoe",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_ava_zoe.mp4",
    title: "Ava and Zoe check apples and rice.",
    transcript: "Zoe : How many apples /do we need/? Ava : Six. Zoe : And /how much/ rice? Ava : One bag is enough, okay, your turn. Zoe : Nice try.",
    answerOptions: [
      { id: "a", text: "Zoe : Kaç elma alacağız? Ava : Altı. Zoe : Peki kaç paket pirinç? Ava : Bir paket yeter, tamam, sıra sende. Zoe : Güzel deneme." },
      { id: "b", text: "Zoe : Kaç elmaya /ihtiyacımız var/? Ava : Altı. Zoe : Peki /ne kadar/ pirinç? Ava : Bir paket yeter, tamam, sıra sende. Zoe : Güzel deneme." }
    ],
    easyDistractor: "Zoe : Kaç elmaya ihtiyacımız var? Ava : Altı. Zoe : Peki ne kadar pirinç? Ava : İki paket gerek, tamam... sıra sende. Zoe : Güzel deneme.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ava", "zoe"],
    grades: [5, 6],
    functions: ["countable_uncountable","expressing_needs"],
    theme: "life_in_the_world",
   evidenceStart: "0:00.000",
evidenceEnd: "0:03.907",
    evidenceSentence: "Zoe : How many apples /do we need/? Ava : Six. Zoe : And /how much/ rice?",
  },
  {
    id: "5_life_in_the_world_chloe_emma_olivia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_chloe_emma_olivia.mp4",
    title: "Chloe, Emma, and Olivia order desserts.",
    transcript: "Chloe : I’d like a /cupcake/, please. Emma : Can I have a /slice of chocolate cake/? Olivia : And I’d like an /iced chocolate/, please.",
    answerOptions: [
      { id: "a", text: "Chloe : Bir /cupcake/ istiyorum, lütfen. Emma : Bir /dilim çikolatalı kek/ alabilir miyim? Olivia : Ben de /buzlu çikolata/ istiyorum, lütfen." },
      { id: "b", text: "Chloe : Bir sandviç istiyorum, lütfen. Emma : Bir dilim limonlu kek alabilir miyim? Olivia : Ben de su istiyorum, lütfen." }
    ],
    easyDistractor: "Chloe : Bir cupcake istiyorum, lütfen. Emma : Bir dilim çikolatalı kek alabilir miyim? Olivia : Ben de sıcak çikolata istiyorum, lütfen.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["chloe", "emma", "olivia"],
    grades: [5, 6],
    functions: ["ordering_something"],
    theme: "life_in_the_world",
    evidenceStart: "0:00.970",
evidenceEnd: "0:06.474",
    evidenceSentence: "Chloe : I’d like a /cupcake/, please. Emma : Can I have a /slice of chocolate cake/? Olivia : And I’d like an /iced chocolate/, please.",
  },
  {
    id: "5_life_in_the_world_mia_zoe2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_mia_zoe2.mp4",
    title: "Mia and Zoe order food and water.",
    transcript: "Mia : /Can I have/ a chicken sandwich, please? Zoe : /I’d like/ a cheese toast, please.",
    answerOptions: [
      { id: "a", text: "Mia : Bir tavuklu sandviç var mı? Zoe : Bana da peynirli sphagetti." },
      { id: "b", text: "Mia : Bir tavuklu sandviç /alabilir miyim/, lütfen? Zoe : Bir peynirli tost /istiyorum/, lütfen." }
    ],
    easyDistractor: "Waiter : Ne istersiniz, genç hanımlar? Mia : Bir tavuklu sandviç alabilir miyim, lütfen? Zoe : Bir peynirli tost istiyorum, lütfen. Waiter : İçecek bir şey? Zoe : Ben portakal suyu istiyorum, lütfen.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["mia", "zoe"],
    grades: [5, 6],
    functions: ["ordering_something"],
    theme: "life_in_the_world",
    evidenceStart: "0:02.261",
evidenceEnd: "0:06.450",
    evidenceSentence: "Mia : /Can I have/ a chicken sandwich, please? Zoe : /I’d like/ a cheese toast, please.",
  },
  {
    id: "5_life_in_the_world_ethan_jack_benjamin",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_ethan_jack_benjamin.mp4",
    title: "Benjamin, Jack, and Ethan order sandwiches.",
    transcript: "Benjamin : I’d like a chicken wrap, please. Jack : Can I have a tuna sandwich? Ethan : A cheese sandwich for me, please.",
    answerOptions: [
      { id: "a", text: "Benjamin : Bir /tavuk dürüm/ istiyorum, lütfen. Jack : Bir /ton balıklı sandviç/ alabilir miyim? Ethan : Bana bir peynirli sandviç, lütfen." },
      { id: "b", text: "Benjamin : Bir tavuk burger istiyorum, lütfen. Jack : Bir tavuk sandviç alabilir miyim? Ethan : Bana bir peynirli tost, lütfen." }
    ],
    easyDistractor: "Benjamin : Bir tavuklu dürüm istiyorum, lütfen. Jack : Bir ton balıklı sandviç alabilir miyim? Ethan : Bana bir peynirli sandviç, lütfen.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ethan", "jack", "benjamin"],
    grades: [5, 6],
    functions: ["ordering_something"],
    theme: "life_in_the_world",
    evidenceStart: "0:01.221",
evidenceEnd: "0:06.324",
    evidenceSentence: "Benjamin : I’d like a chicken wrap, please. Jack : Can I have a tuna sandwich? Ethan : A cheese sandwich for me, please.",

  },
  {
    id: "5_life_in_the_world_hannah_ingrid_lars",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_world_hannah_ingrid_lars.mp4",
    title: "Hannah and Lars order while Ingrid chooses.",
    transcript: "Hannah : Yes, I’d like the /chicken and rice/, please. Lars : And I’d like the /grilled fish/, please.",
    answerOptions: [
      { id: "a", text: "Hannah : Evet, tavuklu sandviç ve kola istiyorum, lütfen. Lars : Ben de ton balığı istiyorum, lütfen." },
      { id: "b", text: "Hannah : Evet, /tavuk ve pilav/ istiyorum, lütfen. Lars : Ben de /ızgara balık/ istiyorum, lütfen." }
    ],
    easyDistractor: "Hannah : Evet, tavuk burger ve ayran, lütfen. Lars : Ben de ton balığı istiyorum, lütfen.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "ingrid", "lars"],
    grades: [5, 6],
    functions: ["ordering_something"],
    theme: "life_in_the_world",
    evidenceStart: "0:01.908",
evidenceEnd: "0:07.292",
    evidenceSentence: "Hannah : Yes, I’d like the /chicken and rice/, please. Lars : And I’d like the /grilled fish/, please.",
  },
  {
    id: "5_family_life_chloe_ella_olivia",
    status: "published",
    videoSrc: "assets/video/5_family_life_chloe_ella_olivia.mp4",
    title: "Olivia asks Chloe what she is doing.",
    transcript: "Olivia : Chloe, what are you doing? Chloe : Just hav/ing/ fun.",
    answerOptions: [
      { id: "a", text: "Olivia : Chloe, ne yapıyorsun? Chloe : Sadece eğleni/yor/um." },
      { id: "b", text: "Olivia : Chloe, ne yapıyorsun? Chloe : Sadece fotoğraf çekiliyorum." }
    ],
    easyDistractor: "Olivia : Chloe, ne yapıyorsun? Chloe : Ödev yapıyorum.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["chloe", "ella", "olivia"],
    grades: [5, 6],
    functions: ["present_progressive","fun"],
    theme: "family_life",
    evidenceStart: "0:02.696",
evidenceEnd: "0:04.101",
    evidenceSentence: "Chloe : Just /having fun/.",
  },
  {
    id: "5_family_life_hannah",
    status: "published",
    videoSrc: "assets/video/5_family_life_hannah.mp4",
    title: "Hannah tells Storm that an item is hers.",
    transcript: "Hannah : Storm, That /was mine/!",
    answerOptions: [
      { id: "a", text: "Hannah : Storm, O senindi!" },
      { id: "b", text: "Hannah : Storm, O /benimdi/!" }
    ],
    easyDistractor: "Hannah : Storm! O bizimkiydi!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "storm"],
    grades: [5, 6],
    functions: ["possessive_pronouns","fun"],
    theme: "family_life",
  evidenceStart: "0:03.228",
evidenceEnd: "0:05.340",
    evidenceSentence: "Hannah : Storm! That /was mine/!",
  },
  {
    id: "5_family_life_chloe_luna",
    status: "published",
    videoSrc: "assets/video/5_family_life_chloe_luna.mp4",
    title: "Chloe asks Luna what she is doing.",
    transcript: "Chloe : Luna, /what’re you doing/, fine, you play it, I’ll listen.",
    answerOptions: [
      { id: "a", text: "Chloe : Luna, /ne yapıyorsun/, tamam, sen çal, ben dinleyeceğim." },
      { id: "b", text: "Chloe : Luna, nereye gidiyorsun, tamam, sen çal, ben dışarı çıkacağım." }
    ],
    easyDistractor: "Chloe : Luna, ne yapıyorsun, tamam, sen onu bırak, ben oynayacağım.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["chloe", "luna"],
    grades: [5, 6],
    functions: ["present_progressive","fun"],
    theme: "family_life",
    evidenceStart: "0:01.451",
evidenceEnd: "0:03.232",
    evidenceSentence: "Chloe : Luna, /what’re you doing/",
  },
  {
    id: "5_classroom_life_ella",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_ella.mp4",
    title: "Ella asks Sunny to repeat something.",
    transcript: "Ella : Sunny, /can you repeat/, Okay, /you win/.",
    answerOptions: [
      { id: "a", text: "Ella : Sunny, susar mısın, tamam, ben kazandım." },
      { id: "b", text: "Ella : Sunny, /tekrar eder misin/, tamam, /sen kazandın./" }
    ],
    easyDistractor: "Ella : Sunny, tekrar eder misin, tamam, ben kazandım.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "sunny"],
    grades: [5, 6],
    functions: ["asking_for_repetition","fun"],
    theme: "Classroom_life",
    evidenceStart: "0:00.000",
evidenceEnd: "0:06.080",
    evidenceSentence: "Ella : Sunny, /can you repeat/, Okay, /you win/.",
  },
  {
    id: "5_school_life_ella_olivia3",
    status: "published",
    videoSrc: "assets/video/5_school_life_ella_olivia3.mp4",
    title: "Olivia gives Ella directions.",
    transcript: "Olivia : A little to the /left/, no, my left, perfect, perfect.",
    answerOptions: [
      { id: "a", text: "Olivia : Biraz /sola/, hayır, benim soluma, mükemmel, mükemmel." },
      { id: "b", text: "Olivia : Biraz sağa, hayır, benim sağıma, mükemmel, mükemmel." }
    ],
    easyDistractor: "Olivia : Biraz sola, hayır, benim soluma, dur, dur.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "olivia"],
    grades: [5, 6],
    functions: ["giving_commands","fun"],
    theme: "School_life",
   evidenceStart: "0:00.000",
evidenceEnd: "0:01.359",
    evidenceSentence: "Olivia : A little to the /left/",
  },
  {
    id: "5_classroom_life_ava2",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_ava2.mp4",
    title: "Ava calls Buddy back.",
    transcript: "Ava : Buddy, /wrong way/, Buddy, /come back/!",
    answerOptions: [
      { id: "a", text: "Ava : Buddy, koş oğlum, Buddy, devam et!" },
      { id: "b", text: "Ava : Buddy, yanlış yoldasın, Buddy, geri gel!" }
    ],
    easyDistractor: "Ava : Buddy, yanlış yoldasın, Buddy, orada kal!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ava", "buddy"],
    grades: [5, 6],
    functions: ["giving_commands"],
    theme: "Classroom_life",
    evidenceStart: "0:04.476",
evidenceEnd: "0:08.011",
    evidenceSentence: "Ava : Buddy, /wrong way/, Buddy, /come back/!",
  },

  {
    id: "race_hannah_daniel_part1",
    status: "published",
    videoSrc: "assets/video/race_hannah_daniel.mp4",
    title: "Hannah and Daniel race with Storm.",
    transcript: "Daniel : You’re not catching me. Hannah : We’ll see about that.",
    answerOptions: [
      { id: "a", text: "Daniel : Benim kadar hızlı gidemezsin. Hannah : Bundan emin misin?"},
      { id: "b", text: "Daniel : Beni yakalayamazsın. Hannah : Göreceğiz bakalım." }
    ],
    easyDistractor: "Daniel : Beni yakalayamazsın. Hannah : Göreceğiz bakalım.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "daniel", "storm"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "race",
    evidenceStart: "0:00.448",
evidenceEnd: "0:03.678",
    evidenceSentence: "Daniel : You’re not catching me. Hannah : We’ll see about that.",
  },

  {
    id: "race_hannah_daniel_part2",
    status: "published",
    videoSrc: "assets/video/race_hannah_daniel.mp4",
    title: "Hannah and Daniel race with Storm.",
    videoStart: "0:21.153",
    videoEnd: "0:29.898",
    transcript: "Daniel : Okey, that was /fast/. Hannah : Good boy Storm. Daniel : Rematch? Hannah: /Anytime/.",
    answerOptions: [
      { id: "a", text: "Daniel : Pekala, bu gerçekten çılgıncaydı. Hannah: Aferin, Storm. Daniel: Tekrar kapışalım mı? Hannah: Belki."},
      { id: "b", text: "Daniel : Pekala, bu gerçekten /hızlıydı/. Hannah: Aferin, Storm. Daniel: Tekrar kapışalım mı? Hannah: /Her zaman/!" }
    ],
    easyDistractor: "Daniel : Pekala, bu hiç hızlı değildi. Hannah: Aferin, Storm. Daniel: Tekrar kapışalım mı? Hannah: Yok kalsın.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "daniel", "storm"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "race",
    evidenceStart: "0:21.153",
evidenceEnd: "0:29.898",
    evidenceSentence: "Daniel : Okey, that was /fast/. Hannah : Good boy Storm. Daniel : Rematch? Hannah: /Anytime/.",
  },
  {
    id: "5_classroom_life_victoria",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_victoria.mp4",
    title: "Victoria gives Pixel a firm command.",
    transcript: "Victoria : Pixel, /don’t even think about it/, good choice.",
    answerOptions: [
      { id: "a", text: "Victoria : Pixel, /aklından bile geçirme/, iyi seçim." },
      { id: "b", text: "Victoria : Pixel, bunu deneme, kötü seçim." }
    ],
    easyDistractor: "Victoria : Pixel, aklından bile geçirme, kötü seçim.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["victoria", "pixel"],
    grades: [5, 6],
    functions: ["giving_commands", "fun"],
    theme: "Classroom_life",
    evidenceStart: "0:01.228",
evidenceEnd: "0:03.444",
    evidenceSentence: "Victoria : Pixel, /don’t even think about it/.",
  },
  {
    id: "6_life_in_the_nature_mia",
    status: "published",
    videoSrc: "assets/video/6_life_in_the_nature_mia.mp4",
    title: "Coco eats Mia’s homework.",
    transcript: "Mia : Coco, it’s my homework, I need that, great, my rabbit /ate/ my homework.",
    answerOptions: [
      { id: "a", text: "Mia : Coco, o benim ödevim, ona ihtiyacım var, harika, tavşanım ödevimi yiyecek." },
      { id: "b", text: "Mia : Coco, o benim ödevim, ona ihtiyacım var, harika, tavşanım ödevimi /yedi/." }
    ],
    easyDistractor: "Mia : Coco, o benim ödevim, ona ihtiyacım var, tavşanım ödevimi sakladı.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["mia", "coco"],
    grades: [5, 6],
    functions: ["simple_past_tense", "fun"],
    theme: "life_in_nature",
    evidenceStart: "0:03.849",
evidenceEnd: null,
    evidenceSentence: "Great, My rabbit /ate/ my homework.",
  },
  {
    id: "5_benjamin_jack",
    status: "published",
    videoSrc: "assets/video/5_benjamin_jack.mp4",
    title: "Benjamin blames the wind.",
    transcript: "Jack : /I can’t believe it/. Benjamin : It’s talent. Jack : Talent? Benjamin : It’s just wind.",
    answerOptions: [
      { id: "a", text: "Jack : /İnanamıyorum/. Benjamin : Bu yetenek. Jack : Yetenek mi? Benjamin : Sadece rüzgâr." },
      { id: "b", text: "Jack : Çok yeteneklisin. Benjamin : Sadece şans. Jack : Şans mı? Benjamin : Evet, iyi şans." }
    ],
    easyDistractor: "Jack : Çok ilginç. Benjamin : Bu yetenek. Jack : Yetenek mi? Benjamin : Sadece kötü şans.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["benjamin", "jack"],
    grades: [5, 6],
    functions: ["expressingsurprise", "fun"],
    theme: "personal_life",
    evidenceStart: "0:01.061",
evidenceEnd: "0:02.439",
    evidenceSentence: "Jack : /I can’t believe it/.",
  },
  {
    id: "5_hannah_storm",
    status: "published",
    videoSrc: "assets/video/5_hannah_storm.mp4",
    title: "Storm returns Hannah’s hat.",
    transcript: "Hannah : My /hat/, thank you, Storm.",
    answerOptions: [
      { id: "a", text: "Hannah : koş Storm, getir, teşekkür ederim, Storm." },
      { id: "b", text: "Hannah : /Şapkam/, teşekkür ederim, Storm." }
    ],
    easyDistractor: "Hannah : Şapkam, üzgünüm, Storm.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "storm"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "life_in_nature",
    evidenceStart: "0:02.170",
evidenceEnd: "0:03.615",
    evidenceSentence: "Hannah : My /hat/",
  },
  {
    id: "5_chloe_emma_luna",
    status: "published",
    videoSrc: "assets/video/5_chloe_emma_luna.mp4",
    title: "Chloe and Emma react to Luna’s opinion.",
    transcript: "Chloe : Just like this, well, /what do you think/? Emma : She /hated/ it. Chloe : She has no taste.",
    answerOptions: [
      { id: "a", text: "Chloe : Tam böyle, peki, ne düşünüyorsun? Emma : O bundan /nefret etti/. Chloe : Onun zevki yok." },
      { id: "b", text: "Chloe : Tam böyle, peki, neye bakıyorsun? Emma : O buna bayıldı. Chloe : Onun zevki yok." }
    ],
    easyDistractor: "Chloe : Tam böyle, peki, sence ne düşünüyorsun? Emma : O bundan nefret etti. Chloe : Onun çok iyi zevki var.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["chloe", "emma", "luna"],
    grades: [5, 6],
    functions: ["asking_about_opinions", "expressing_likes_and_dislikes", "fun"],
    theme: "personal_life",
    evidenceStart: "0:06.175",
evidenceEnd: "0:10.400",
    evidenceSentence: "Chloe : Well, /what do you think/? Emma : She /hated/ it.",
  },
  {
    id: "5_personal_life_ella_sunny",
    status: "published",
    videoSrc: "assets/video/5_personal_life_ella_sunny.mp4",
    title: "Ella admits that Sunny always wins.",
    transcript: "Ella : No, still no, fine, you always win.",
    answerOptions: [
      { id: "a", text: "Ella : Evet, peki, sen genellikle kazanıyorsun." },
      { id: "b", text: "Ella : Hayır, hâlâ hayır, peki, sen /hep/ kazanıyorsun." }
    ],
    easyDistractor: "Ella : Hayır, hâlâ hayır, peki, sen bazen kazanıyorsun.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "sunny"],
    grades: [5, 6],
    functions: ["frequency_adverbs", "fun"],
    theme: "personal_life",
   evidenceStart: "0:06.160",
evidenceEnd: null,
    evidenceSentence: "You /always/ win.",
  },
  {
    id: "5_school_life_mia_zoe2",
    status: "published",
    videoSrc: "assets/video/5_school_life_mia_zoe2.mp4",
    title: "Zoe tells Mia not to laugh.",
    transcript: "Zoe : /Don't laugh/, Mia!",
    answerOptions: [
      { id: "a", text: "Zoe : /Gülme/, Mia!" },
      { id: "b", text: "Zoe : Bakma, Mia!" }
    ],
    easyDistractor: "Zoe : Mia, çok gül!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["mia", "zoe"],
    grades: [5, 6],
    functions: ["giving_commands", "fun"],
    theme: "School_life",
    evidenceStart: "0:02.360",
evidenceEnd: "0:03.478",
    evidenceSentence: "Zoe : /Don't laugh/, Mia!",
  },
  {
    id: "5_life_in_the_nature_ella_sunny",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ella_sunny.mp4",
    title: "Ella shows how Sunny can imitate sounds.",
    transcript: "Ella : Parrots /can imitate/ sounds, listen, hello. Sunny : Hello, hello, hello, hello. Ella : Okay, we get it.",
    answerOptions: [
      { id: "a", text: "Ella : Papağanlar sesleri duyabilirler, dinle, merhaba. Sunny : Merhaba, merhaba. Ella : Tamam, anladık." },
      { id: "b", text: "Ella : Papağanlar sesleri /taklit edebilir/, dinle, merhaba. Sunny : Merhaba, merhaba, merhaba, merhaba. Ella : Tamam, anladık." }
    ],
    easyDistractor: "Ella : Papağanlar sesleri unutabilir, dinle, merhaba. Sunny : Merhaba, merhaba, merhaba, merhaba. Ella : Tamam, anladık.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "sunny"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.053",
    evidenceSentence: "Ella : Parrots /can imitate/ sounds",
  },
  {
    id: "5_life_in_the_nature_hannah_storm",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_hannah_storm.mp4",
    title: "Hannah praises Storm for jumping high.",
    transcript: "Hannah : Storm /can jump really high/, good boy, what? you want an apple now?",
    answerOptions: [
      { id: "a", text: "Hannah : Storm gerçekten /çok yükseğe zıplayabilir/, aferin oğlum, noldu, elma mı istiyorsun?" },
      { id: "b", text: "Hannah : Storm gerçekten çok uzağa zıplayabilir, aferin oğlum, noldu, elma mı istiyorsun?" }
    ],
    easyDistractor: "Hannah : Storm gerçekten çok hızlı koşabilir, aferin oğlum, noldu, armut mu istiyorsun?",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["hannah", "storm"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:01.958",
    evidenceSentence: "Hannah : Storm /can jump really high/",
  },
  {
    id: "5_life_in_the_nature_hannah",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_hannah.mp4",
    title: "Hannah learns that elephants can swim.",
    transcript: "Hannah : Can elephants really swim? Guide : Yes, they /can swim/ very well. Hannah : Even with that huge body? Guide : Yes. Hannah : That’s amazing!",
    answerOptions: [
      { id: "a", text: "Hannah : Filler gerçekten yüzebilir mi? Guide : Hayır, hiç yüzemezler. Hannah : O kocaman vücutlarıyla mı? Guide : Hayır. Hannah : Bu inanılmaz!" },
      { id: "b", text: "Hannah : Filler gerçekten yüzebilir mi? Guide : Evet, çok iyi /yüzebilirler/. Hannah : O kocaman vücutlarıyla mı? Guide : Evet. Hannah : Bu inanılmaz!" }
    ],
    easyDistractor: "Hannah : Filler gerçekten yüzebilir mi? Guide : Evet, ama çok iyi yüzemezler. Hannah : O kocaman vücutlarıyla mı? Guide : Evet. Hannah : Bu inanılmaz!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability"],
    theme: "life_in_nature",
    evidenceStart: "0:01.761",
evidenceEnd: "0:03.962",
    evidenceSentence: "Guide : Yes, they /can swim/ very well.",
  },
  {
    id: "5_life_in_the_nature_ella_olivia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ella_olivia.mp4",
    title: "Ella and Olivia discuss what penguins can do.",
    transcript: "Ella : Wow, penguins /can swim/ so fast. Olivia : Yes, but they /can’t fly/. Ella : But they can walk like that!",
    answerOptions: [
      { id: "a", text: "Ella : Vay, penguenler çok hızlı /yüzebilir/. Olivia : Evet, ama /uçamazlar/. Ella : Ama şöyle yürüyebilirler!" },
      { id: "b", text: "Ella : Vay, penguenler çok hızlı uçar. Olivia : Evet, ama yüzemezler. Ella : Ama şöyle yürüyebilirler!" }
    ],
    easyDistractor: "Ella : Vay, penguenler çok hızlı koşabilir. Olivia : Evet, ama uçamazlar. Ella : Ama şöyle yürüyemezler!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "olivia"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability"],
    theme: "life_in_nature",
    evidenceStart: "0:01.243",
evidenceEnd: "0:05.404",
    evidenceSentence: "Ella : Wow, penguins /can swim/ so fast. Olivia : Yes, but they /can’t fly/.",
  },
  {
    id: "5_life_in_the_nature_benjamin_lucas",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_benjamin_lucas.mp4",
    title: "Benjamin learns how fast cheetahs can run.",
    transcript: "Benjamin : Can cheetahs really run that fast? Lucas : Yes, they /can run/ so fast. Benjamin : Okay, that’s fast.",
    answerOptions: [
      { id: "a", text: "Benjamin : Çitalar gerçekten o kadar hızlı koşamaz mı? Lucas : O kadar da hızlı koşamazlar. Benjamin : Tamam, bu hızlı." },
      { id: "b", text: "Benjamin : Çitalar gerçekten o kadar hızlı koşabilir mi? Lucas : Evet, çok /hızlı koşabilirler/. Benjamin : Tamam, bu hızlı." }
    ],
    easyDistractor: "Benjamin : Çitalar gerçekten o kadar hızlı koşabilir mi? Lucas : Evet, ama yavaş koşabilirler. Benjamin : Tamam, bu hızlı.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["benjamin", "lucas"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability"],
    theme: "life_in_nature",
    evidenceStart: "0:01.699",
evidenceEnd: "0:03.813",
    evidenceSentence: "Lucas : Yes, they /can run/ incredibly fast.",
  },
  {
    id: "5_life_in_the_nature_noah_lucas",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_noah_lucas.mp4",
    title: "Noah and Lucas compare what they can lift.",
    transcript: "Noah : So, can you lift that? Lucas : Well, /I can’t/. Noah : I /can lift/ it! Lucas : No way!",
    answerOptions: [
      { id: "a", text: "Noah : Peki, onu kaldırabilir misin? Lucas : Şey, /kaldıramam/. Noah : Ben /kaldırabilirim/! Lucas : Olamaz!" },
      { id: "b", text: "Noah : Peki, onu kaldıramaz mısın? Lucas : Şey, kaldırabilirim. Noah : Ben de kaldıramam! Lucas : Olamaz!" }
    ],
    easyDistractor: "Noah : Peki, onu kaldırabilir misin? Lucas : Şey, kaldırabilirim. Noah : Ben kaldırabilirim! Lucas : Olamaz!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["noah", "lucas"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability"],
    theme: "life_in_nature",
    evidenceStart: "0:01.821",
evidenceEnd: "0:06.304",
    evidenceSentence: "Noah : So, can you lift that? Lucas : Well, /I can’t/. Noah : I /can lift/ it!",
  },
  {
    id: "5_life_in_the_nature_mia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_mia.mp4",
    title: "Mia compares crocodiles’ abilities with her own.",
    transcript: "Mia : Crocodiles /can live/ for months without food, but I /can’t live/ two minutes without it.",
    answerOptions: [
      { id: "a", text: "Mia : Timsahlar yemek olmadan yaşayamazlar, ben de gofretsiz yaşayamıyorum." },
      { id: "b", text: "Mia : Timsahlar yemek olmadan aylarca /yaşayabilir/, ama ben gofretsiz iki dakika /yaşayamıyorum/." }
    ],
    easyDistractor: "Mia : Timsahlar yemek olmadan sadece birkaç gün yaşayabilir, ama ben onsuz iki dakika yaşayamam.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["mia"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability"],
    theme: "life_in_nature",
    evidenceStart: "0:00.958",
evidenceEnd: null,
    evidenceSentence: "Mia : Crocodiles /can live/ for months without food, but I /can’t live/ two minutes without it.",
  },
  {
    id: "5_life_in_the_nature_ava",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ava.mp4",
    title: "Ava shares how strong gorillas can be.",
    transcript: "Ava : Gorillas /can be ten times/ stronger than people!",
    answerOptions: [
      { id: "a", text: "Ava : Goriller insanlardan on kat daha güçlü olabilir!" },
      { id: "b", text: "Ava : Goriller insanlardan beş kat daha güçlü olabilir!" }
    ],
    easyDistractor: "Ava : Goriller insanlardan iki kat daha güçlü olamaz!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ava"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability","comparatives_of_adjectives"],
    theme: "life_in_nature",
    evidenceStart: "0:03.300",
evidenceEnd: null,
    evidenceSentence: "Ava : Gorillas /can be ten times/ stronger than people!",
  },
  {
    id: "5_life_in_the_nature_daniel",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_daniel.mp4",
    title: "Daniel explains how snakes can smell.",
    transcript: "Daniel : Snakes /can smell/ with their tongue, well, I can’t.",
    answerOptions: [
      { id: "a", text: "Daniel : Yılanlar dilleriyle tat alabilir, şey galiba ben alamıyorum." },
      { id: "b", text: "Daniel : Yılanlar dilleriyle koku alabilir, şey galiba ben alamıyorum." }
    ],
    easyDistractor: "Daniel : Yılanlar gözleriyle koku alabilir, şey, ben alamam.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["daniel"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.337",
    evidenceSentence: "Daniel : Snakes /can smell/ with their tongue, well, I can’t.",
  },
  {
    id: "5_life_in_the_nature_ella_sunny_olivia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ella_sunny_olivia.mp4",
    title: "Ella explains that some parrots can learn many words.",
    transcript: "Ella : Some parrots /can learn/ hundreds of words. Sunny : Hello! Ella : But it seems my parrot /can’t/.",
    answerOptions: [
      { id: "a", text: "Ella : Bazı papağanlar yüzlerce kelime /öğrenebilir/. Sunny : Merhaba! Ella : Ama görünüşe göre benim papağanım /öğrenemiyor./" },
      { id: "b", text: "Ella : Bazı papağanlar hiç kelime öğrenemez. Sunny : Merhaba! Ella : Ama görünüşe göre benim papağanım öğrenebiliyor." }
    ],
    easyDistractor: "Ella : Bazı papağanlar onlarca kelime öğrenebilir. Sunny : Merhaba! Ella : Ama görünüşe göre benim papağanım öğrenemiyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "sunny", "olivia"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability", "fun"],
    theme: "life_in_nature",
   evidenceStart: "0:00.000",
evidenceEnd: "0:07.141",
    evidenceSentence: "Ella : Some parrots /can learn/ hundreds of words. Sunny : Hello! Ella : But it seems my parrot /can’t/.",
  },
  {
    id: "5_life_in_the_nature_chloe",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_chloe.mp4",
    title: "Chloe shares what chameleons can do with their eyes.",
    transcript: "Chloe : Chameleons /can move/ their eyes in different directions!",
    answerOptions: [
      { id: "a", text: "Chloe : Bukalemunlar gözlerini hep aynı yönde tutmak zorundadır!" },
      { id: "b", text: "Chloe : Bukalemunlar gözlerini farklı yönlere /hareket ettirebilir/!" }
    ],
    easyDistractor: "Chloe : Bukalemunlar gözlerini aynı yöne hareket ettirebilir!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["chloe"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability"],
    theme: "life_in_nature",
    evidenceStart: "0:03.788",
evidenceEnd: "0:07.196",
    evidenceSentence: "Chloe : Chameleons /can move/ their eyes in different directions!",
  },

  {
    id: "5_life_in_the_nature_emma_hannah",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_emma_hannah.mp4",
    title: "Emma reminds Hannah not to pick flowers in nature.",
    transcript: "Emma : Wait, we /must not/ pick the flowers here. Hannah : Right, they must stay in nature.",
    answerOptions: [
      { id: "a", text: "Emma : Dur, burada çiçekleri /koparmamalıyız/. Hannah : Doğru, doğada kalmalılar." },
      { id: "b", text: "Emma : Dur, şurdan biraz çiçek toplayalım. Hannah : Evet, ama önce selfi çekilelim." }
    ],
    easyDistractor: "Emma : Dur, burada çiçeklere dokunmamalıyız. Hannah : Doğru, doğada kalmalılar.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["emma", "hannah"],
    grades: [5, 6],
    functions: ["use_of_modal_must_for_external_obligation"],
    theme: "life_in_nature",
   evidenceStart: "0:00.362",
evidenceEnd: "0:03.568",
    evidenceSentence: "Emma : Wait, we /must not/ pick the flowers here." ,
  },
  {
    id: "5_life_in_the_nature_olivia_ava",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_olivia_ava.mp4",
    title: "Olivia and Ava try to stay quiet near the birds.",
    transcript: "Ava : We /must be/ quiet here. Olivia : Okay, the birds are very close, oops, sorry.",
    answerOptions: [
      { id: "a", text: "Ava : Burada çok gürültü yapmamalıyız. Olivia : Tamam, kuşlar çok yakında, oops, üzgünüm." },
      { id: "b", text: "Ava : Burada /sessiz olmalıyız/. Olivia : Tamam, kuşlar çok yakında, oops, üzgünüm." }
    ],
    easyDistractor: "Ava : Burada gürültülü olmalıyız. Olivia : Tamam, kuşlar çok yakında, harika.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["olivia", "ava"],
    grades: [5, 6],
    functions: ["use_of_modal_must_for_external_obligation"],
    theme: "life_in_nature",
    evidenceStart: "0:01.198",
evidenceEnd: "0:03.308",
    evidenceSentence: "Ava : We /must be/ quiet here.",
  },
  {
    id: "5_life_in_the_nature_benjamin_jack",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_benjamin_jack.mp4",
    title: "Benjamin reminds Jack to keep the park clean.",
    transcript: "Benjamin : We /must keep the park clean/, Jack. Jack : Of course, we /must protect/ animals’ habitat.",
    answerOptions: [
      { id: "a", text: "Benjamin : Parkı /temiz tutmalıyız/, Jack. Jack : Tabii, hayvanların yaşam alanını /korumalıyız/." },
      { id: "b", text: "Benjamin : Parkı kirletmemeliyiz, Jack. Jack : Tabii, hayvanların yaşam alanını temizlemeliyiz." }
    ],
    easyDistractor: "Benjamin : Parkı temiz tutmalıyız, Jack. Jack : Tabii, hayvanların yaşam alanını bozmalıyız.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["benjamin", "jack"],
    grades: [5, 6],
    functions: ["use_of_modal_must_for_external_obligation"],
    theme: "life_in_nature",
    evidenceStart: "0:02.130",
evidenceEnd: "0:07.300",
    evidenceSentence: "Benjamin : We /must keep the park clean/, Jack. Jack : Of course, we /must protect/ animals’ habitat.",
  },
  {
    id: "5_life_in_the_nature_ethan_noah",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ethan_noah.mp4",
    title: "Ethan and Noah protect a wild animal.",
    transcript: "Ethan : We /must never feed/ wild animals. Noah : Right, they must find their own food.",
    answerOptions: [
      { id: "a", text: "Ethan : Vahşi hayvanları her zaman beslemeliyiz. Noah : Doğru, yiyeceklerini kendileri bulamazlar." },
      { id: "b", text: "Ethan : Vahşi hayvanları /asla beslememeliyiz/. Noah : Doğru, kendi yiyeceklerini bulmalılar." }
    ],
    easyDistractor: "Ethan : Vahşi hayvanları asla beslememeliyiz. Noah : Doğru, yiyeceklerini biz bulmalıyız.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ethan", "noah"],
    grades: [5, 6],
    functions: ["use_of_modal_must_for_external_obligation"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.524",
    evidenceSentence: "Ethan : We /must never feed/ wild animals.",
  },
  {
    id: "5_life_in_the_nature_mia_zoe",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_mia_zoe.mp4",
    title: "Mia and Zoe leave a bird’s nest alone.",
    transcript: "Mia : We /must not touch/ wild animals or their homes. Zoe : You’re right, let’s leave it alone.",
    answerOptions: [
      { id: "a", text: "Mia : Vahşi hayvanlara veya yuvalarına /dokunmamalıyız/. Zoe : Haklısın, onu yalnız bırakalım." },
      { id: "b", text: "Mia : Vahşi hayvanlara ve yuvalarını korumalıyız. Zoe : Haklısın, onu yanımıza alalım." }
    ],
    easyDistractor: "Mia : Vahşi hayvanlara veya yuvalarına dokunmamalıyız. Zoe : Haklısın, onu yanımıza alalım.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["mia", "zoe"],
    grades: [5, 6],
    functions: ["use_of_modal_must_for_external_obligation","suggesting"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:03.270",
    evidenceSentence: "Mia : We /must not touch/ wild animals or their homes.",
  },
  {
    id: "5_life_in_the_nature_daniel_lucas",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_daniel_lucas.mp4",
    title: "Daniel learns how much a tiger can eat.",
    transcript: "Daniel : /What/ do they eat? Lucas : Meat, a tiger can eat about forty kilos in one meal! Daniel : Forty kilos?!",
    answerOptions: [
      { id: "a", text: "Daniel : Onlar nerede yaşar? Lucas : Et, bir kaplan tek öğünde yaklaşık kırk kilo yiyebilir! Daniel : Kırk kilo mu?!" },
      { id: "b", text: "Daniel : Onlar /ne/ yer? Lucas : Et, bir kaplan tek öğünde yaklaşık kırk kilo yiyebilir! Daniel : Kırk kilo mu?!" }
    ],
    easyDistractor: "Daniel : Onlar ne yer? Lucas : Ot, bir kaplan tek öğünde yaklaşık kırk kilo yiyebilir! Daniel : Kırk kilo mu?!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["daniel", "lucas"],
    grades: [5, 6],
    functions: ["use_of_wh_questions_who_what"],
    theme: "life_in_nature",
    evidenceStart: "0:03.277",
evidenceEnd: "0:04.355",
    evidenceSentence: "Daniel : /What/ do they eat?",
  },
  {
    id: "5_life_in_the_nature_mia_zoe2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_mia_zoe2.mp4",
    title: "Mia learns where gorillas live.",
    transcript: "Mia : /Where/ do gorillas live? Zoe : They live in forests in Africa, they build a new bed every night! Mia : Every night?!",
    answerOptions: [
      { id: "a", text: "Mia : Goriller /nerede/ yaşar? Zoe : Afrika’daki ormanlarda yaşarlar, her gece yeni bir yatak yaparlar! Mia : Her gece mi?!" },
      { id: "b", text: "Mia : Goriller ne yer? Zoe : Ormandaki ağaçları yer, her gece farklı bir ağaçtan yerler! Mia : Her gece mı?!" }
    ],
    easyDistractor: "Mia : Goriller nerede yaşar? Zoe : Afrika’daki ormanlarda yaşarlar, her yıl yeni bir yatak yaparlar! Mia : Her yıl mı?!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["mia", "zoe"],
    grades: [5, 6],
    functions: ["askingaboutlocation"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:01.549",
    evidenceSentence: "Mia : /Where/ do gorillas live?",
  },
  {
    id: "5_family_life_victoria_pixel",
    status: "published",
    videoSrc: "assets/video/5_family_life_victoria_pixel.mp4",
    title: "Victoria notices Pixel coding.",
    transcript: "Victoria : Great, you /are coding/ now?",
    answerOptions: [
      { id: "a", text: "Victoria : Harika, şimdi de oyun mu oynuyorsun?" },
      { id: "b", text: "Victoria : Harika, şimdi de /kod mu yazıyorsun/?" }
    ],
    easyDistractor: "Victoria : Harika, şimdi de resim mi çiziyorsun?",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["victoria", "pixel"],
    grades: [5, 6],
    functions: ["present_progressive", "fun"],
    theme: "family_life",
    evidenceStart: "0:03.040",
evidenceEnd: "0:05.652",
    evidenceSentence: "Victoria : Great, you /are coding/ now?",
  },
  {
    id: "5_life_in_the_nature_ella_olivia2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ella_olivia2.mp4",
    title: "Ella learns where whales live.",
    transcript: "Ella : /Where/ do whales /live/? Olivia : They live in oceans all around the world, they travel thousands of kilometres every year! Ella : That’s a long trip!",
    answerOptions: [
      { id: "a", text: "Ella : Balinalar nerede yaşar? Olivia : Dünya çapındaki okyanuslarda yaşarlar, her yıl binlerce kilometre yolculuk ederler! Ella : Bu çok uzun bir yolculuk!" },
      { id: "b", text: "Ella : Balinalar ne yer? Olivia : Okyanusta yolculuk ederken ne bulurlarsa yerler! Ella : Bu çok zor olmalı!" }
    ],
    easyDistractor: "Ella : Balinalar nerede yaşar? Olivia : Dünya çapındaki okyanuslarda yaşarlar, her yıl birkaç metre yüzerler! Ella : Bu çok uzun bir yolculuk!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "olivia"],
    grades: [5, 6],
    functions: ["askingaboutlocation"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:01.425",
    evidenceSentence: "Ella : /Where/ do whales /live/?",
  },
  {
    id: "5_family_life_chloe_luna2",
    status: "published",
    videoSrc: "assets/video/5_family_life_chloe_luna2.mp4",
    title: "Chloe is interrupted while reading.",
    transcript: "Chloe : Heyyy, I’m read/ing/ here.",
    answerOptions: [
      { id: "a", text: "Chloe : Heyyy, kitap okumam lazım." },
      { id: "b", text: "Chloe : Heyyy, kitap oku/yor/um." }
    ],
    easyDistractor: "Chloe : Heyyy, burada oyun oynuyorum.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["chloe", "luna"],
    grades: [5, 6],
    functions: ["present_progressive", "fun"],
    theme: "family_life",
    evidenceStart: "0:02.972",
evidenceEnd: "0:06.247",
    evidenceSentence: "Chloe : Heyyy, I’m read/ing/ here.",
  },
  {
    id: "5_family_life_mia_coco",
    status: "published",
    videoSrc: "assets/video/5_family_life_mia_coco.mp4",
    title: "Mia tells Coco that it was hers.",
    transcript: "Mia : That /was mine/!",
    answerOptions: [
      { id: "a", text: "Mia : O /benimdi/!" },
      { id: "b", text: "Mia : Onu yiyecektim!" }
    ],
    easyDistractor: "Mia : O onundu!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["mia", "coco"],
    grades: [5, 6],
    functions: ["possessive_pronouns","simple_past_tense_was_were","fun"],
    theme: "family_life",
   evidenceStart: "0:05.712",
evidenceEnd: "0:07.104",
    evidenceSentence: "Mia : That /was mine/!",
  },
  {
    id: "5_life_in_the_nature_ava_buddy",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ava_buddy.mp4",
    title: "Ava looks for her cookie.",
    transcript: "Ava : Heyyy, /where/ is my cookie?",
    answerOptions: [
      { id: "a", text: "Ava : Heyyy, kurabiyemi kim aldı?" },
      { id: "b", text: "Ava : Heyyy, kurabiyem nerede?" }
    ],
    easyDistractor: "Ava : Heyyy, çantam nerede?",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ava", "buddy"],
    grades: [5, 6],
    functions: ["askingaboutlocation","fun"],
    theme: "life_in_nature",
   evidenceStart: "0:04.337",
evidenceEnd: "0:06.497",
    evidenceSentence: "Ava : Heyyy, /where/ is my cookie?",
  },
  {
    id: "5_life_in_the_nature_chloe_olivia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_chloe_olivia.mp4",
    title: "Chloe learns where crocodiles sleep.",
    transcript: "Chloe : /Where/ do crocodiles sleep? Olivia : Sometimes underwater, they can stay there for hours! Chloe : They sleep underwater?",
    answerOptions: [
      { id: "a", text: "Chloe : Timsahlar /nerede/ uyur? Olivia : Bazen suyun altında, saatlerce orada kalabilirler! Chloe : Su altında mı uyurlar?" },
      { id: "b", text: "Chloe : Timsahlar neden uyur? Olivia : Enerjileri tükendiğinde, saatlerce uyuyabilirler! Chloe : Su altında mı uyurlar?" }
    ],
    easyDistractor: "Chloe : Timsahlar nerede uyur? Olivia : Bazen suyun altında, yalnızca birkaç dakika orada kalabilirler! Chloe : Su altında mı uyurlar?",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["chloe", "olivia"],
    grades: [5, 6],
    functions: ["askingaboutlocation"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:01.813",
    evidenceSentence: "Chloe : /Where/ do crocodiles sleep?",
  },
  {
    id: "5_life_in_the_nature_ella_sunny2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ella_sunny2.mp4",
    title: "Ella learns how cold penguin habitats can be.",
    transcript: "Presenter : Some penguins can live in places /colder than/ minus fifty degrees! Ella : That cold?",
    answerOptions: [
      { id: "a", text: "Sunucu : Bazı penguenler eksi elli dereceden daha sıcak yerlerde yaşayabilir! Ella : Bu kadar sıcak mı?" },
      { id: "b", text: "Sunucu : Bazı penguenler eksi elli dereceden /daha soğuk/ yerlerde yaşayabilir! Ella : Bu kadar soğuk mu?" }
    ],
    easyDistractor: "Sunucu : Bazı penguenler eksi elli derecede yaşayamaz! Ella : Bu kadar soğuk mu?",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "sunny"],
    grades: [5, 6],
    functions: ["comparatives_of_adjectives"],
    theme: "life_in_nature",
    evidenceStart: "0:01.900",
evidenceEnd: "0:06.041",
    evidenceSentence: "Presenter : Some penguins can live in places /colder than/ minus fifty degrees!",
  },
  {
    id: "5_life_in_the_nature_ella_olivia3",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ella_olivia3.mp4",
    title: "Ella and Olivia watch a giraffe.",
    transcript: "Ella : The giraffe is the /tallest/ animal in the world, right? Olivia : Yep, it can be almost six metres tall! Ella : Six metres? Wow.",
    answerOptions: [
      { id: "a", text: "Ella : Zürafa dünyadaki /en uzun/ hayvan, değil mi? Olivia : Evet, neredeyse altı metre uzunluğunda olabilir! Ella : Altı metre mi, Vay canına." },
      { id: "b", text: "Ella : Zürafa tüm hayvanlardan daha uzun, değil mi? Olivia : Evet, neredeyse altı metre uzunluğunda olabilir! Ella : Altı metre mi, Vay canına." }
    ],
    easyDistractor: "Ella : Zürafa dünyadaki en uzun hayvan, değil mi? Olivia : Evet, neredeyse altı santimetre uzunluğunda olabilir! Ella : Altı santimetre mi? Vay canına.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "olivia"],
    grades: [5, 6],
    functions: ["superlative_adjectives"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.940",
    evidenceSentence: "Ella : The giraffe is the /tallest/ animal in the world, right?",
  },
  {
    id: "5_life_in_the_nature_benjamin_jack2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_benjamin_jack2.mp4",
    title: "Benjamin learns how far a lion’s roar can travel.",
    transcript: "Benjamin : Lions have one of /the loudest/ roars, right? Jack : Yep, you can hear a lion’s roar from eight kilometres away! Benjamin : Eight kilometres?!",
    answerOptions: [
      { id: "a", text: "Benjamin : Aslanlar en güçlü hayvanlardan biridir değil mi? Jack : Evet, bir aslanın gücü sekiz kaplana eşittir! Benjamin : Sekiz mi?!" },
      { id: "b", text: "Benjamin : Aslanlar /en yüksek/ kükremeye sahip, değil mi? Jack : Evet, bir aslanın kükremesini sekiz kilometre öteden duyabilirsin! Benjamin : Sekiz kilometre mi?!" }
    ],
    easyDistractor: "Benjamin : Aslanlar en yüksek kükremelerden birine sahip, değil mi? Jack : Evet, bir aslanın kükremesini sekiz metreden duyabilirsin! Benjamin : Sekiz metre mi?!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["benjamin", "jack"],
    grades: [5, 6],
    functions: ["superlative_adjectives"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.349",
    evidenceSentence: "Benjamin : Lions have one of /the loudest/ roars, right?",
  },
  {
    id: "5_life_in_the_nature_ava_chloe",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ava_chloe.mp4",
    title: "Ava tells Chloe about great white shark teeth.",
    transcript: "Chloe : Which animal has /the biggest/ teeth? Ava : The great white shark has some of the biggest, their teeth are seven centimetres long! Chloe : Grrrrrr, I have the sharpest teeth.",
    answerOptions: [
      { id: "a", text: "Chloe : Hangi hayvanın /en büyük/ dişleri var? Ava : Büyük beyaz köpek balığının en büyük dişleri vardır, dişleri yedi santimetre uzunluğundadır! Chloe : Grrrrrr, benim en keskin dişlerim var." },
      { id: "b", text: "Chloe : Hangi hayvanın en küçük dişleri var? Ava : Büyük beyaz köpek balığının en küçük dişleri vardır, dişleri yedi milimetre uzunluğundadır! Chloe : Grrrrrr, benim en keskin dişlerim var." }
    ],
    easyDistractor: "Chloe : Hangi hayvanın en büyük dişleri var? Ava : Büyük beyaz köpek balığının en büyük dişlerden bazıları vardır, dişleri yedi milimetre uzunluğundadır! Chloe : Grrrrrr, benim en keskin dişlerim var.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ava", "chloe"],
    grades: [5, 6],
    functions: ["superlative_adjectives"],
    theme: "life_in_nature",
   evidenceStart: "0:00.099",
evidenceEnd: "0:02.014",
    evidenceSentence: "Chloe : Which animal has /the biggest/ teeth?",
  },
  {
    id: "5_life_in_the_nature_chloe_luna",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_chloe_luna.mp4",
    title: "Chloe compares Luna to an African elephant.",
    transcript: "Presenter : The African elephant is /the heaviest/ land animal in the world, it can weigh over six thousand kilos. Chloe : Luna, you are heavier than an African elephant.",
    answerOptions: [
      { id: "a", text: "Sunucu : Afrika fili dünyadaki en hafif kara hayvanıdır, altı bin kilodan az gelir. Chloe : Luna, sen bir Afrika filinden daha ağırsın." },
      { id: "b", text: "Sunucu : Afrika fili dünyadaki /en ağır/ kara hayvanıdır, altı bin kilodan fazla gelebilir. Chloe : Luna, sen bir Afrika filinden daha ağırsın." }
    ],
    easyDistractor: "Sunucu : Afrika fili dünyadaki en ağır kara hayvanıdır, altı bin kilodan fazla gelebilir. Chloe : Luna, sen bir Afrika filinden daha hafifsin.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["chloe", "luna"],
    grades: [5, 6],
    functions: ["comparative_and_superlative_adjectives"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:03.594",
    evidenceSentence: "Presenter : The African elephant is /the heaviest/ land animal in the world.",
  },
  {
    id: "5_life_in_the_nature_benjamin_oliver",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_benjamin_oliver.mp4",
    title: "Benjamin compares himself to dolphins.",
    transcript: "Presenter : Dolphins are /the most intelligent/ animals in the ocean, they can learn, play and work together! Benjamin : Well, they seem smart/er than me.",
    answerOptions: [
      { id: "a", text: "Sunucu : Yunuslar okyanustaki /en zeki/ hayvanlardır, öğrenebilir, oynayabilir ve birlikte çalışabilirler! Benjamin : Şey, benden /daha zeki/ görünüyorlar." },
      { id: "b", text: "Sunucu : Yunuslar okyanustaki en yavaş hayvanlardır, öğrenemez, oynayamaz ve birlikte çalışamazlar! Benjamin : Şey, benden daha yavaş görünüyorlar." }
    ],
    easyDistractor: "Sunucu : Yunuslar okyanustaki en zeki hayvanlardır, öğrenebilir, oynayabilir ve birlikte çalışabilirler! Benjamin : Şey, benden daha yavaş görünüyorlar.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["benjamin", "oliver"],
    grades: [5, 6],
    functions: ["comparative_and_superlative_adjectives"],
    theme: "life_in_nature",
    evidenceStart: "0:00.644",
evidenceEnd: "0:08.268",
    evidenceSentence: "Presenter : Dolphins are /the most intelligent/ animals in the ocean, they can learn, play and work together! Benjamin : Well, they seem smart/er than me.",
  },
  {
    id: "5_life_in_the_nature_hannah_ingrid",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_hannah_ingrid.mp4",
    title: "Hannah praises Storm’s eyes.",
    transcript: "Presenter : Horses have /the biggest/ eyes of all land animals! Hannah : Storm has the most beautiful eyes. Ingrid : See, he agrees.",
    answerOptions: [
      { id: "a", text: "Sunucu : Atların tüm kara hayvanları arasında en küçük gözleri vardır! Hannah : Storm’un en güzel gözleri var. Ingrid : Görüyor musun, o da aynı fikirde." },
      { id: "b", text: "Sunucu : Atların tüm kara hayvanları arasında /en büyük/ gözleri vardır! Hannah : Storm’un en güzel gözleri var. Ingrid : Görüyor musun, o da aynı fikirde." }
    ],
    easyDistractor: "Sunucu : Atların tüm kara memelileri arasında en büyük gözleri vardır! Hannah : Storm’un en kötü gözleri var. Ingrid : Görüyor musun, o da aynı fikirde.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["hannah", "ingrid", "storm"],
    grades: [5, 6],
    functions: ["superlative_adjectives"],
    theme: "life_in_nature",
    evidenceStart: "0:01.932",
evidenceEnd: "0:05.661",
    evidenceSentence: "Presenter : Horses have /the biggest/ eyes of all land animals!",
  },
  {
    id: "5_classroom_life_lucas2",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_lucas2.mp4",
    title: "Lucas counts onward.",
    transcript: "Lucas : /Fifty-six, fifty-seven/.",
    answerOptions: [
      { id: "a", text: "Lucas : /Elli altı, elli yedi/." },
      { id: "b", text: "Lucas : Altmış altı, altmış yedi." }
    ],
    easyDistractor: "Lucas : Elli yedi, elli sekiz.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["lucas"],
    grades: [5, 6],
    functions: ["numbers"],
    theme: "Classroom_life",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.987",
    evidenceSentence: "Lucas : /Fifty-six, fifty-seven/.",
  },
  {
    id: "5_life_in_the_nature_jack",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_jack.mp4",
    title: "Jack sees a huge fish approaching.",
    transcript: "Jack : /The biggest/ fish is coming, /luckiest/ catch ever.",
    answerOptions: [
      { id: "a", text: "Jack : En küçük balık geliyor, şimdiye kadarki en şanslı çocuğum." },
      { id: "b", text: "Jack : /En büyük/ balık geliyor, şimdiye kadarki /en şanslı/ av." }
    ],
    easyDistractor: "Jack : En büyük balık geliyor, şimdiye kadarki en şanssız av.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["jack"],
    grades: [5, 6],
    functions: ["superlative_adjectives"],
    theme: "life_in_nature",
   evidenceStart: "0:00.000",
evidenceEnd: "0:07.581",
    evidenceSentence: "Jack : /The biggest/ fish is coming, luckiest catch ever.",
  },
  {
    id: "5_classroom_life_ava3",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_ava3.mp4",
    title: "Ava gives Buddy a command.",
    transcript: "Ava : Sit, /don’t stand/, sit, well, almost.",
    answerOptions: [
      { id: "a", text: "Ava : Otur, /ayağa kalkma/, otur, eh işte, neredeyse oldu." },
      { id: "b", text: "Ava : Ayağa kalk, oturma, ayağa kalk, eh işte, neredeyse oldu" }
    ],
    easyDistractor: "Ava : Otur, ayağa kalk, otur, işte, neredeyse.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ava", "buddy"],
    grades: [5, 6],
    functions: ["giving_commands"],
    theme: "Classroom_life",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.389",
    evidenceSentence: "Ava : Sit, /don’t stand/.",
  },
  {
    id: "5_life_in_the_nature_emma",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_emma.mp4",
    title: "Emma looks for the pancake.",
    transcript: "Emma : /Where/ is the pancake?",
    answerOptions: [
      { id: "a", text: "Emma : Krep /nerede/?" },
      { id: "b", text: "Emma : Krepe ne oldu?" }
    ],
    easyDistractor: "Emma : Krep ne renk?",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["emma"],
    grades: [5, 6],
    functions: ["askingaboutlocation"],
    theme: "life_in_nature",
    evidenceStart: "0:03.897",
evidenceEnd: "0:06.725",
    evidenceSentence: "Emma : /Where/ is the pancake?",
  },
  {
    id: "5_life_in_the_universe_hannah_emma",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_hannah_emma.mp4",
    title: "Hannah plans to explore the valley.",
    transcript: "Emma : What are you /going to/ do? Hannah : I/’m going to/ explore the valley!",
    answerOptions: [
      { id: "a", text: "Emma : Ne yap/acaksın/? Hannah : Vadiyi keşfed/eceğim/!" },
      { id: "b", text: "Emma : Ne yaptın? Hannah : Vadiyi keşfettim!" }
    ],
    easyDistractor: "Emma : Ne yapacaksın? Hannah : Vadiyi keşfettim!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["hannah", "emma"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:02.080",
evidenceEnd: "0:07.083",
    evidenceSentence: "Emma : What are you /going to/ do? Hannah : I/’m going to/ explore the valley!",
  },
  {
    id: "5_life_in_the_universe_benjamin_jack",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_benjamin_jack.mp4",
    title: "Benjamin and Jack plan to snorkel near a coral reef.",
videostart : "0:01.124",    
transcript: "Benjamin : Are we going to see the /coral reef/? Jack : Yes, we’re going to go snorkelling!",
    answerOptions: [
      { id: "a", text: "Benjamin : Kum tepelerini görecek miyiz? Jack : Evet, ayrıca şnorkelle dalış yapacağız!" },
      { id: "b", text: "Benjamin : /Mercan resifini/ görecek miyiz? Jack : Evet, şnorkelle dalış yapacağız!" }
    ],
    easyDistractor: "Benjamin : Mercan resifini görecek miyiz? Jack : Hayır, şnorkelle dalış yapmayacağız!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["benjamin", "jack"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
   evidenceStart: "0:00.826",
evidenceEnd: "0:03.075",
    evidenceSentence: "Benjamin : Are we going to see the /coral reef/?",
  },
  {
    id: "5_life_in_the_universe_daniel_lucas",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_daniel_lucas.mp4",
    title: "Daniel and Lucas plan a camel ride.",
    transcript: "Lucas : What are we going to do in the desert? Daniel : We’re going to /ride a camel/!",
    answerOptions: [
      { id: "a", text: "Lucas : Çölde ne yapacağız? Daniel : /Deveye bineceğiz/!" },
      { id: "b", text: "Lucas : Çölde ne yapacağız? Daniel : Ata bineceğiz!" }
    ],
    easyDistractor: "Lucas : Çölde ne yapacağız? Daniel : Deveyi besleyeceğiz!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["daniel", "lucas"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:02.162",
evidenceEnd: "0:04.249",
    evidenceSentence: "Daniel : We’re going to /ride a camel/!",
  },
  {
    id: "5_life_in_the_universe_benjamin_david",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_benjamin_david.mp4",
    title: "Benjamin and David plan to explore a canyon.",
    transcript: "Benjamin : What are we going to do on our trip? David : We’re going to /explore/ this amazing canyon!",
    answerOptions: [
      { id: "a", text: "Benjamin : Gezimizde ne yapacağız? David : Bu harika kanyonu /keşfedeceğiz/!" },
      { id: "b", text: "Benjamin : Gezimizde ne yağacağız? David : Bu harika kanyona gideceğiz!" }
    ],
    easyDistractor: "Benjamin : Gezimizde ne yapacağız? David : Bu harika kanyonu fotoğraflayacağız!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["benjamin", "david"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:01.836",
evidenceEnd: "0:04.295",
    evidenceSentence: "David : We’re going to /explore/ this amazing canyon!",
  },
  {
    id: "5_life_in_the_universe_ella_charlotte",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_ella_charlotte.mp4",
    title: "Ella and Charlotte plan island sightseeing.",
    transcript: "Ella : What are we going to do on the island? Charlotte : We’re going to go sightseeing! Ella : Great!",
    answerOptions: [
      { id: "a", text: "Ella : Adada ne yapacağız? Charlotte : /Geziye çıkacağız/! Ella : Harika!" },
      { id: "b", text: "Ella : Adada ne yaptık? Charlotte : Adada uyuduk! Ella : Harika!" }
    ],
    easyDistractor: "Ella : Adada ne yapacağız? Charlotte : Denizde yüzeceğiz! Ella : Harika!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "charlotte"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.497",
    evidenceSentence: "Ella : What are we going to do on the island? Charlotte : We’re going to go sightseeing! Ella : Great!",
  },
  {
    id: "5_life_in_the_universe_chloe_emma",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_chloe_emma.mp4",
    title: "Chloe and Emma discuss their half-term plans.",
    videoEnd : "0:06.644",
    transcript: "Chloe : What are you /going to/ do at half term? Emma : I’m /going to/ visit my grandparents!",
    answerOptions: [
      { id: "a", text: "Chloe : Ara tatilde ne yapacaksın? Emma : Büyükannemi ve büyükbabamı ziyaret edeceğim!" },
      { id: "b", text: "Chloe : Ara tatilde ne yaptın? Emma : Büyükannemi ve büyükbabamı ziyaret ettim!" },
    ],
    easyDistractor: "Chloe : Ara tatilde ne yapacaksın? Emma : Evde kalacağım!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["chloe", "emma"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
   evidenceStart: "0:00.000",
evidenceEnd: "0:04.977",
    evidenceSentence: "Chloe : What are you /going to/ do at half term? Emma : I’m /going to/ visit my grandparents!",
  },
  {
    id: "5_life_in_the_universe_ella_olivia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_ella_olivia.mp4",
    title: "Ella plans a beach vacation.",
    transcript: "Olivia : Are you /going to/ the beach on vacation? Ella : Yes, I’m /going to/ swim every day! Hey, where is my swimsuit?",
    answerOptions: [
      { id: "a", text: "Olivia : Tatilde plaja gidecek misin? Ella : Evet, her gün yüzeceğim! Hey, mayom nerede?" },
      { id: "b", text: "Olivia : Tatilde plaja gittin mi? Ella : Evet, her gün yüzdüm! Hey, havlum nerede?" }
    ],
    easyDistractor: "Olivia : Tatilde plaja gidecek misin? Ella : Evet, her gün yüzeceğim! Hey, havlum nerede?",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "olivia"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.231",
    evidenceSentence: "Olivia : Are you /going to/ the beach on vacation? Ella : Yes, I’m /going to/ swim every day!" ,
  },
  {
    id: "5_life_in_the_universe_mia_victoria",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_mia_victoria.mp4",
    title: "Victoria plans to visit London.",
    transcript: "Mia : /Where/ are you going to go this mid-term holiday? Victoria : We /are going to/ visit London! Mia : I like this one.",
    answerOptions: [
      { id: "a", text: "Mia : Bu ara tatilde ne yapacaksın? Victoria : Londra'yı ziyaret edeceğim! Mia : Bunu beğendim." },
      { id: "b", text: "Mia : Bu ara tatilde /nereye/ gideceksin? Victoria : Londra’yı ziyaret edeceğiz! Mia : Bunu beğendim." }
    ],
    easyDistractor: "Mia : Bu ara tatilde nereye gideceksin? Victoria : Londra’yı ziyaret etmeyeceğiz! Mia : Bunu beğendim.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["mia", "victoria"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
   evidenceStart: "0:00.684",
evidenceEnd: "0:05.484",
    evidenceSentence: "Mia : /Where/ are you going to go this mid-term holiday? Victoria : We /are going to/ visit London!",
  },
  {
    id: "5_life_in_the_universe_ava_hannah",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_ava_hannah.mp4",
    title: "Hannah plans a cold trip to Norway.",
    transcript: "Ava : Where are you going to go on /vacation/? Hannah : I’m going to Norway, it’s cold there! Hannah : I /need/ a jacket.",
    answerOptions: [
      { id: "a", text: "Ava : Tatilde nereye gideceksin? Hannah : Norveç’e gideceğim, orası soğuk! Hannah : Bir cekete /ihtiyacım var/." },
      { id: "b", text: "Ava : Bayramda nereye gideceksin? Hannah : Norveç'e gideceğim, orası soğuk! Hannah : Bir ceket alacağım." }
    ],
    easyDistractor: "Ava : Tatilde nereye gideceksin? Hannah : Norveç’e gideceğim, orası soğuk! Hannah : Bir şapkaya ihtiyacım var.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ava", "hannah"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans","expressing_needs"],
    theme: "life_in_the_universe",
    evidenceStart: "0:00.000",
evidenceEnd: "0:07.742",
    evidenceSentence: "Ava : Where are you going to go on /vacation/? Hannah : I’m going to Norway, it’s cold there! Hannah : I /need/ a jacket.",
  },
  {
    id: "5_life_in_the_universe_ethan_noah",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_ethan_noah.mp4",
    title: "Ethan plans to climb a hill.",
    transcript: "Noah : What are we going to do there? Ethan : We’re going to /climb that hill/!",
    answerOptions: [
      { id: "a", text: "Noah : Orada ne yapacağız? Ethan : Şu tepeden aşağı ineceğiz!" },
      { id: "b", text: "Noah : Orada ne yapacağız? Ethan : Şu tepeye tırmanacağız!" }
    ],
    easyDistractor: "Noah : Orada ne yapacağız? Ethan : Şu tepenin yanında bekleyeceğiz!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["noah", "ethan"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:02.085",
evidenceEnd: "0:04.354",
    evidenceSentence: "Ethan : We’re going to /climb that hill/!",
  },
  {
    id: "5_life_in_the_universe_daniel_jack",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_daniel_jack.mp4",
    title: "Daniel plans a road trip.",
Videoend : "0:04.230",
    transcript: "Jack : What are you going to do on the mid-term holiday? Daniel : I’m going to go on a /road trip/!",
    answerOptions: [
      { id: "a", text: "Jack : Ara tatilinde ne yapacaksın? Daniel : /Yolculuğa çıkacağım/!" },
      { id: "b", text: "Jack : Ara tatilinde ne yapacaksın? Daniel : Evde kalacağım!" }
    ],
    easyDistractor: "Jack : Okul tatilinde ne yapacaksın? Daniel : Yolculuğa çıkmayacağım!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["daniel", "jack"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:02.495",
evidenceEnd: null,
    evidenceSentence: "Daniel : I’m going to go on a /road trip/!",
  },
  {
    id: "5_life_in_the_universe_mia_zoe",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_mia_zoe.mp4",
    title: "Mia plans a seaside holiday.",
    transcript: "Zoe : Where are you going to go this summer? Mia : I’m going to /stay at/ the seaside!",
    answerOptions: [
      { id: "a", text: "Zoe : Bu yaz nereye gideceksin? Mia : Şehirde kalacağım!" },
      { id: "b", text: "Zoe : Bu yaz nereye gideceksin? Mia : /Sahilde/ kalacağım!" }
    ],
    easyDistractor: "Zoe : Bu yaz nereye gideceksin? Mia : Dağlarda kalacağım!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["mia", "zoe"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:02.043",
evidenceEnd: "0:04.467",
    evidenceSentence: "Mia : I’m going to /stay at/ the seaside!",
  },
  {
    id: "5_life_in_the_universe_ethan_lucas",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_ethan_lucas.mp4",
    title: "Lucas plans an amusement-park visit.",
VideoEnd : "0:05.624",
    transcript: "Ethan : What are /you/ going to do this weekend? Lucas : I’m going to visit the /amusement park/!",
    answerOptions: [
      { id: "a", text: "Ethan : Bu hafta sonu ne yapacaksın? Lucas : /Lunaparkı/ ziyaret edeceğim!" },
      { id: "b", text: "Ethan : Bu hafta sonu ne yapacağız? Lucas : Müzeleri ziyaret edeceğiz!" }
    ],
    easyDistractor: "Ethan : Bu hafta sonu ne yapacaksın? Lucas : Evde kalacağım!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ethan", "lucas"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.213",
    evidenceSentence: "Ethan : What are /you/ going to do this weekend? Lucas : I’m going to visit the /amusement park/!",
  },
  {
    id: "5_life_in_the_universe_emma_sophie",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_emma_sophie.mp4",
    title: "Emma and Sophie plan a zoo visit.",
    transcript: "Emma : /What/ are we going to do this weekend? Sophie : We’re going to /visit the zoo/!",
    answerOptions: [
      { id: "a", text: "Emma : Bu hafta sonu nereye gideceğiz? Sophie : Lunaparka gideceğiz!" },
      { id: "b", text: "Emma : Bu hafta sonu ne yapacağız? Sophie : Hayvanat bahçesini ziyaret edeceğiz!" }
    ],
    easyDistractor: "Emma : Bu hafta sonu ne yapacağız? Sophie : Evde kalacağız!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["emma", "sophie"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:00.171",
evidenceEnd: "0:04.143",
    evidenceSentence: "Emma : /What/ are we going to do this weekend? Sophie : We’re going to /visit the zoo/!",
  },
  {
    id: "5_life_in_the_universe_benjamin_oliver",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_benjamin_oliver.mp4",
    title: "Benjamin plans to play beach volleyball.",
    transcript: "Oliver : What are you /going to do/ at the beach? Benjamin : I’m /going to/ play beach volleyball! Oliver : Good plan!",
    answerOptions: [
      { id: "a", text: "Oliver : Sahilde ne /yapacaksın/? Benjamin : Plaj voleybolu /oynayacağım/! Oliver : İyi plan!" },
      { id: "b", text: "Oliver : Sahilde ne yaptın? Benjamin : Plaj voleybolu oynadım! Oliver : İyiymiş!" }
    ],
    easyDistractor: "Oliver : Sahilde ne yapacaksın? Benjamin : Kumdan kale yapacağım! Oliver : İyi plan!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["benjamin", "oliver"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:00.000",
evidenceEnd: "0:04.823",
    evidenceSentence: "Oliver : What are you /going to do/ at the beach? Benjamin : I’m /going to/ play beach volleyball!",
  },
  {
    id: "5_life_in_the_universe_olivia_fiona",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_olivia_fiona.mp4",
    title: "Olivia and Fiona plan to go sightseeing.",
    transcript: "Fiona : What are we going to do tomorrow? Olivia : We’re going to /go sightseeing/!",
    answerOptions: [
      { id: "a", text: "Fiona : Yarın ne yapacağız? Olivia : Müzeleri ziyaret edeceğiz!" },
      { id: "b", text: "Fiona : Yarın ne yapacağız? Olivia : /Geziye çıkacağız/!" }
    ],
    easyDistractor: "Fiona : Yarın ne yapacağız? Olivia : Evde kalacağız!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["olivia", "fiona"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:04.468",
evidenceEnd: null,
    evidenceSentence: "Olivia : We’re going to /go sightseeing/!",
  },
  {
    id: "5_life_in_the_universe_ava_amina_buddy",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_ava_amina_buddy.mp4",
    title: "Ava asks if Buddy can join the Kenya trip.",
    transcript: "Ava : /Where/ are we going to go this summer? Amina : We’re going to visit Kenya! Ava : /Can/ Buddy come too?",
    answerOptions: [
      { id: "a", text: "Ava : Bu yaz /nereye/ gideceğiz? Amina : Kenya’yı ziyaret edeceğiz! Ava : Buddy de gelebilir mi?" },
      { id: "b", text: "Ava : Bu yaz ne yapacağız? Amina : Kenya’yı ziyaret edeceğiz! Ava : Buddy de gelecek!" }
    ],
    easyDistractor: "Ava : Bu yaz nereye gideceğiz? Amina : Kenya’yı ziyaret edeceğiz! Ava : Buddy evde kalacak mı?",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ava", "amina", "buddy"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans","permission"],
    theme: "life_in_the_universe",
    evidenceStart: "0:00.000",
evidenceEnd: "0:05.027",
    evidenceSentence: "Ava : /Where/ are we going to go this summer? Amina : We’re going to visit Kenya! Ava : /Can/ Buddy come too?",
  },
  {
    id: "5_life_in_the_universe_chloe_julien_camille",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_chloe_julien_camille.mp4",
    title: "Chloe plans to build a giant sandcastle.",
    transcript: "Julien : What are you going to do today? Chloe : I’m going to build a giant /sandcastle/, Bigger!",
    answerOptions: [
      { id: "a", text: "Julien : Bugün ne yapacaksın? Chloe : Dev deniz kabuğu bulacağım, Dev gibi!" },
      { id: "b", text: "Julien : Bugün ne yapacaksın? Chloe : Dev bir /kumdan kale/ yapacağım, Daha büyük!" }
    ],
    easyDistractor: "Julien : Bugün ne yaptın? Chloe : Küçük bir kumdan kale yaptım! Kocaman!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["chloe", "julien", "camille"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:01.647",
evidenceEnd: "0:04.687",
    evidenceSentence: "Chloe : I’m going to build a giant /sandcastle/, Bigger!",
  },
  {
    id: "5_life_in_the_universe_mia_giulia",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_mia_giulia.mp4",
    title: "Mia plans to collect seashells.",
    transcript: "Giulia : /What/ are you going to do now? Mia : I’m going to /collect seashells/!",
    answerOptions: [
      { id: "a", text: "Giulia : Şimdi ne yapacaksın? Mia : /Deniz kabukları toplayacağım/!" },
      { id: "b", text: "Giulia : Şimdi nereye gideceğiz? Mia : Kumdan kale yapmaya!" }
    ],
    easyDistractor: "Giulia : Şimdi ne yapacaksın? Mia : Denize girmeyeceğim!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["mia", "giulia"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
  evidenceStart: "0:00.476",
evidenceEnd: "0:04.354",
    evidenceSentence: "Giulia : /What/ are you going to do now? Mia : I’m going to /collect seashells/!",
  },
  {
    id: "5_life_in_the_universe_ella_charlotte2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_ella_charlotte2.mp4",
    title: "Ella plans to ride the roller coaster.",
    transcript: "Charlotte : What are you going to ride first? Ella : I’m going to ride the /roller coaster/!",
    answerOptions: [
      { id: "a", text: "Charlotte : Önce neye bineceksin? Ella : /Hız trenine/ bineceğim!" },
      { id: "b", text: "Charlotte : Önce neye bineceksin? Ella : Dönme dolaba bindim!" }
    ],
    easyDistractor: "Charlotte : Önce neye bineceksin? Ella : Dönme dolaba bineceğim!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "charlotte"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:02.974",
evidenceEnd: "0:05.842",
    evidenceSentence: "Ella : I’m going to ride the /roller coaster/!",
  },
  {
    id: "5_life_in_the_universe_david_valeria",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_david_valeria.mp4",
    title: "David and Valeria choose a camping place.",
    transcript: "David : /Where/ are we going to camp? Valeria : Where do you want? David : By the lake!",
    answerOptions: [
      { id: "a", text: "David : Ne zaman kamp yapacağız? Valeria : Ne zaman istiyorsun? David : Hemen!" },
      { id: "b", text: "David : /Nerede/ kamp yapacağız? Valeria : /Nerede/ istiyorsun? David : Gölün yanında!" }
    ],
    easyDistractor: "David : Nerede kamp yapacağız? Valeria : Nerede istiyorsun? David : Şehrin içinde!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["david", "valeria"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:00.742",
evidenceEnd: "0:02.602",
    evidenceSentence: "David : /Where/ are we going to camp?",
  },
  {
    id: "5_life_in_the_universe_hannah_ingrid",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_hannah_ingrid.mp4",
    title: "Hannah plans to sleep.",
    transcript: "Ingrid : So, /what/ are you going to do now? Hannah : I’m going to sleep!",
    answerOptions: [
      { id: "a", text: "Ingrid : Peki, şimdi /ne/ yapacaksın? Hannah : Uyuyacağım!" },
      { id: "b", text: "Ingrid : Peki, şimdi nereye gideceksin? Hannah : Uyumayacağım!" }
    ],
    easyDistractor: "Ingrid : Peki, şimdi ne yapacaksın? Hannah : Koşacağım!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["hannah", "ingrid"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:04.693",
evidenceEnd: "0:07.077",
    evidenceSentence: "Ingrid : So, /what/ are you going to do now?",
  },
  {
    id: "5_life_in_the_universe_zoe_nikos",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_universe_zoe_nikos.mp4",
    title: "Zoe and Nikos plan to watch a meteor shower.",
    transcript: "Zoe : /What/ are we going to watch tonight? Nikos : We’re going to watch a meteor shower! Nikos : There, look, make a wish!",
    answerOptions: [
      { id: "a", text: "Zoe : Bu gece /ne/ izleyeceğiz? Nikos : Bir meteor yağmuru izleyeceğiz! Nikos : İşte, bak, bir dilek tut!" },
      { id: "b", text: "Zoe : Buraya neden geldik? Nikos : Yıldızları izleyeceğiz! Nikos : İşte, bak, bir yıldız kaydı!" }
    ],
    easyDistractor: "Zoe : Bu gece ne izleyeceğiz? Nikos : Bir film izleyeceğiz! Nikos : İşte, bak, bir dilek tut!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["zoe", "nikos"],
    grades: [5, 6],
    functions: ["be_going_to_future_tense_for_plans"],
    theme: "life_in_the_universe",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.629",
    evidenceSentence: "Zoe : /What/ are we going to watch tonight?",
  },
  {
    id: "5_classroom_life_hannah_storm",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_hannah_storm.mp4",
    title: "Hannah asks Storm to look at the camera.",
    transcript: "Hannah : Storm, /look at the camera/, just one photo!",
    answerOptions: [
      { id: "a", text: "Hannah : Storm, /kameraya bak/, sadece bir fotoğraf!" },
      { id: "b", text: "Hannah : Storm, kameradan uzaklaş, sadece bir fotoğraf!" }
    ],
    easyDistractor: "Hannah : Storm, kameraya bak, hiç fotoğraf yok!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["hannah", "storm"],
    grades: [5, 6],
    functions: ["giving_commands", "fun"],
    theme: "Classroom_life",
    evidenceStart: "0:02.192",
evidenceEnd: "0:06.185",
    evidenceSentence: "Hannah : Storm, /look at the camera/",
  },
  {
    id: "fun_ella_sunny",
    status: "published",
    videoSrc: "assets/video/fun_ella_sunny.mp4",
    title: "Sunny comments on Ella’s reflection.",
    transcript: "Ella : Perfect. Sunny : /Not/ so perfect!",
    answerOptions: [
      { id: "a", text: "Ella : Mükemmel. Sunny : Hiç de /mükemmel değil/!" },
      { id: "b", text: "Ella : Mükemmel. Sunny : Gerçekten mükemmel!" }
    ],
    easyDistractor: "Ella : Mükemmel. Sunny : Kesinlikle mükemmel!",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "sunny"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "fun",
    evidenceStart: "0:01.757",
evidenceEnd: "0:05.847",
    evidenceSentence: "Ella : Perfect. Sunny : /Not/ so perfect!",
  },
  {
    id: "5_life_in_the_nature_victoria",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_victoria.mp4",
    title: "Victoria finds Pixel on her shoulder.",
    transcript: "Victoria : Pixel, /where/ are you? Victoria : How did you get there?",
    answerOptions: [
      { id: "a", text: "Victoria : Pixel, /neredesin/? Victoria : Oraya nasıl çıktın?" },
      { id: "b", text: "Victoria : Pixel, ne yapıyorsun? Victoria : Oraya ne zaman çıktın?" }
    ],
    easyDistractor: "Victoria : Pixel, neredesin? Victoria : Oraya neden çıktın?",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["victoria", "pixel"],
    grades: [5, 6],
    functions: ["askingaboutlocation", "fun"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:03.834",
    evidenceSentence: "Victoria : Pixel, /where/ are you?",
  },
  {
    id: "5_classroom_life_ella_sunny",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_ella_sunny.mp4",
    title: "Sunny loudly repeats Ella’s secret.",
    transcript: "Ella : /Don’t tell/ anyone. Sunny : I will tell everyone!",
    answerOptions: [
      { id: "a", text: "Ella : Herkese söyle. Sunny : Kimseye söylemeyeceğim!" },
      { id: "b", text: "Ella : Kimseye /söyleme/. Sunny : Herkese söyleyeceğim!" }
    ],
    easyDistractor: "Ella : Kimseye söyleme. Sunny : Kimseye söylemeyeceğim!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "sunny"],
    grades: [5, 6],
    functions: ["giving_commands", "fun"],
    theme: "Classroom_life",
    evidenceStart: "0:00.000",
evidenceEnd: "0:02.174",
    evidenceSentence: "Ella : /Don’t tell/ anyone.",
  },
  {
    id: "fun_chloe_luna",
    status: "published",
    videoSrc: "assets/video/fun_chloe_luna.mp4",
    title: "Chloe tells Luna that the homework was hers.",
    transcript: "Chloe : Luna, that /was my homework/.",
    answerOptions: [
      { id: "a", text: "Chloe : Luna, o benim /ödevimdi/." },
      { id: "b", text: "Chloe : Luna, o benim defterim." }
    ],
    easyDistractor: "Chloe : Luna, o senin ödevindi.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["chloe", "luna"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "fun",
    evidenceStart: "0:04.509",
evidenceEnd: "0:06.761",
    evidenceSentence: "Chloe : Luna, that /was my homework/.",
  },
  {
    id: "fun_chloe_luna2",
    status: "published",
    videoSrc: "assets/video/fun_chloe_luna2.mp4",
    title: "Chloe asks Luna to move.",
    transcript: "Chloe : Can you /move/?",
    answerOptions: [
      { id: "a", text: "Chloe : Durabilir misin?" },
      { id: "b", text: "Chloe : /Yer değiştirebilir misin/?" }
    ],
    easyDistractor: "Chloe : Bana bakabilir misin?",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["chloe", "luna"],
    grades: [5, 6],
    functions: ["makingrequests", "fun"],
    theme: "fun",
    evidenceStart: "0:01.044",
evidenceEnd: "0:02.558",
    evidenceSentence: "Chloe : Can you /move/?",
  },
  {
    id: "5_classroom_life_ella_sunny2",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_ella_sunny2.mp4",
    title: "Ella asks Sunny to improve the attempt.",
    transcript: "Ella : /Try again/, but try /better/.",
    answerOptions: [
      { id: "a", text: "Ella : /Tekrar dene/, ama /daha iyi/ dene." },
      { id: "b", text: "Ella : Tekrar deneme, belli ki ben daha iyiyim." }
    ],
    easyDistractor: "Ella : Tekrar dene, ama daha yavaş dene.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "sunny"],
    grades: [5, 6],
    functions: ["giving_commands","comparatives_of_adjectives","fun"],
    theme: "Classroom_life",
    evidenceStart: "0:02.125",
evidenceEnd: "0:05.450",
    evidenceSentence: "Ella : /Try again/, but try /better/.",
  },
  {
    id: "5_classroom_life_mia_coco",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_mia_coco.mp4",
    title: "Mia tells Coco to eat the lettuce.",
    transcript: "Mia : Eat your /lettuce/, I knew you would do that.",
    answerOptions: [
      { id: "a", text: "Mia : Havuçunu ye, bunu yapacağını biliyordum." },
      { id: "b", text: "Mia : /Marulunu/ ye, bunu yapacağını biliyordum." }
    ],
    easyDistractor: "Mia : Marulunu ye, bunu yapmayacağını biliyordum.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["mia", "coco"],
    grades: [5, 6],
    functions: ["giving_commands", "fun"],
    theme: "Classroom_life",
   evidenceStart: "0:00.000",
evidenceEnd: "0:05.522",
    evidenceSentence: "Mia : Eat your /lettuce/, I knew you would do that.",
  },
  {
    id: "fun_benjamin_jack",
    status: "published",
    videoSrc: "assets/video/fun_benjamin_jack.mp4",
    title: "Benjamin and Jack play rock, paper, scissors.",
    transcript: "Benjamin and Jack : Rock, paper, scissors! Benjamin : This could /take a while/.",
    answerOptions: [
      { id: "a", text: "Benjamin ve Jack : Taş, kâğıt, makas! Benjamin : Bu /biraz uzun sürebilir./" },
      { id: "b", text: "Benjamin ve Jack : Taş, kâğıt, makas! Benjamin : Bu çok kolay olmayacak." }
    ],
    easyDistractor: "Benjamin ve Jack : Taş, kâğıt, makas! Benjamin : Bu hemen bitecek.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["benjamin", "jack"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "fun",
    evidenceStart: "0:03.372",
evidenceEnd: "0:07.498",
    evidenceSentence: "Benjamin and Jack : Rock, paper, scissors! Benjamin : This could /take a while/.",
  },
  {
    id: "fun_olivia",
    status: "published",
    videoSrc: "assets/video/fun_olivia.mp4",
    title: "Olivia's perfect photo is ruined by the wind.",
    transcript: "Olivia : Just one /perfect shot/, Just perfect.",
    answerOptions: [
      { id: "a", text: "Olivia : Sadece tek bir /mükemmel/ fotoğraf, Evet, çok mükemmel." },
      { id: "b", text: "Olivia : Sadece tek bir güzel fotoğraf, Evet, çok güzel." }
    ],
    easyDistractor: "Olivia : Sadece bir mükemmel fotoğraf, Çok güzel oldu.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["olivia"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "fun",
    evidenceStart: "0:00.000",
evidenceEnd: null,
    evidenceSentence: "Olivia : Just one /perfect shot/, Just perfect.",
  },
  {
    id: "5_classroom_life_ava_buddy",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_ava_buddy.mp4",
    title: "Ava resists Buddy's pleading look.",
    transcript: "Ava : That face won't work, Okay, /stop looking/ at me.",
    answerOptions: [
      { id: "a", text: "Ava : O yüz işe yaramayacak, Tamam, bana /bakmayı bırak/." },
      { id: "b", text: "Ava : O yüz işe yaramayacak, Tamam, al ye bakalım." }
    ],
    easyDistractor: "Ava : O yüz işe yaramayacak, Tamam, bana yaklaş.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ava", "buddy"],
    grades: [5, 6],
    functions: ["imperatives", "fun"],
    theme: "Classroom_life",
  evidenceStart: "0:01.122",
evidenceEnd: "0:06.950",
    evidenceSentence: "Ava : That face won't work, Okay, /stop looking/ at me.",
  },
  {
    id: "song_ella_chloe_ethan",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan.mp4",
    title: "Ella sings about being herself.",
    transcript: "Ella : No /pretending/, no forced dreams, life is /my own/.",
    answerOptions: [
      { id: "a", text: "Ella : /Rol yapmak yok/, zoraki hayaller yok, bu hayat benim /kendi hayatım./" },
      { id: "b", text: "Ella : İyi rol yapıyoruz, zoraki hayallerle, hayat hepimizin." }
    ],
    easyDistractor: "Ella : Rol yapmak yok, zoraki hayaller yok, hayat başkasının.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
    evidenceStart: null,
    evidenceEnd: null,
    evidenceSentence: "Ella : No /pretending/, no forced dreams, life is /my own/.",
  },
  {
    id: "5_classroom_life_emma_chloe",
    status: "published",
    videoSrc: "assets/video/5_classroom_life_emma_chloe.mp4",
    title: "Emma asks Chloe for an honest opinion.",
    transcript: "Emma : /What do you think/, Be honest. Chloe : Please /make more/.",
    answerOptions: [
      { id: "a", text: "Emma : Şunu bir tadar mısın, Dürüst ol. Chloe : Lütfen bir tane daha." },
      { id: "b", text: "Emma : /Ne düşünüyorsun/, Dürüst ol. Chloe : Lütfen /daha fazla yap/." }
    ],
    easyDistractor: "Emma : Ne düşünüyorsun, Dürüst ol. Chloe : Lütfen bunu yapma.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["emma", "chloe"],
    grades: [5, 6],
    functions: ["asking_about_opinions", "fun"],
    theme: "Classroom_life",
    evidenceStart: "0:00.000",
evidenceEnd: "0:06.953",
    evidenceSentence: "Emma : /What do you think/, Be honest. Chloe : Please /make more/.",
  },
  {
    id: "fun_lucas",
    status: "published",
    videoSrc: "assets/video/fun_lucas.mp4",
    title: "Lucas reacts to a missed shot.",
    transcript: "Lucas : Best shot ever, Watch, /Perhaps next time/.",
    answerOptions: [
      { id: "a", text: "Lucas : Dünyanın en iyi şutu, İzle, Aha kediyi kurtardım." },
      { id: "b", text: "Lucas : Dünyanın en iyi şutu, İzle, /Belki bir dahaki sefere/." }
    ],
    easyDistractor: "Lucas : En iyi atış, İzle, Bu sefer oldu.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["lucas"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "fun",
    evidenceStart: "0:00.000",
evidenceEnd: "0:07.929",
    evidenceSentence: "Lucas : Best shot ever, Watch, /Perhaps next time/.",
  },
  {
    id: "5_life_in_the_nature_victoria_pixel",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_victoria_pixel.mp4",
    title: "Victoria cannot remember her password.",
    transcript: "Victoria : I /can't remember/ my password, How?",
    answerOptions: [
      { id: "a", text: "Victoria : Şifremi değiştirmişler, Nasıl ya?" },
      { id: "b", text: "Victoria : Şifremi /hatırlayamıyorum/, Nasıl ya?" }
    ],
    easyDistractor: "Victoria : Şifremi değiştiremiyorum, Nasıl ya!",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["victoria", "pixel"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability", "fun"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:06.109",
    evidenceSentence: "Victoria : I /can't remember/ my password, How?",
  },
  {
    id: "5_life_in_the_nature_jack_benjamin",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_jack_benjamin.mp4",
    title: "Benjamin admits that he cannot catch everything.",
    transcript: "Benjamin : I /can catch/ anything, Well, not /everything/.",
    answerOptions: [
      { id: "a", text: "Benjamin : Her şeyi atabilirim, ama topu tutamadım." },
      { id: "b", text: "Benjamin : Her şeyi /yakalayabilirim/, belli ki /her şeyi/ değil." }
    ],
    easyDistractor: "Benjamin : Hiçbir şeyi yakalayamam, Şey, her şeyi değil.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["jack", "benjamin"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability"],
    theme: "life_in_nature",
    evidenceStart: "0:00.718",
evidenceEnd: "0:07.583",
    evidenceSentence: "Benjamin : I /can catch/ anything, Well, not /everything/.",
  },
  {
    id: "song_ella_chloe_ethan2",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan2.mp4",
    title: "Ella sings about finding where she belongs.",
    transcript: "Ella : Maybe I'm not all that /strong/, still I know where I /belong/.",
    answerOptions: [
      { id: "a", text: "Ella : Belki o kadar /güçlü/ değilim, yine de nereye /ait olduğumu/ biliyorum." },
      { id: "b", text: "Ella : Belki çok güçlüyüm, yine de nereye gittiğimi biliyorum." }
    ],
    easyDistractor: "Ella : Belki o kadar güçlü değilim, yine de nerede kaybolduğumu biliyorum.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
   evidenceStart: "0:00.000",
evidenceEnd: "0:11.801",
    evidenceSentence: "Ella : Maybe I'm not all that /strong/, still I know where I /belong/.",
  },
  {
    id: "song_ella_chloe_ethan3",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan3.mp4",
    title: "Ella sings about finding her own path.",
    transcript: "Ella : /Same paths/, same styles, but /none of them/ feels like me.",
    answerOptions: [
      { id: "a", text: "Ella : /Aynı yollar/, aynı tarzlar, ama /hiçbiri/ bana iyi hissettirmiyor." },
      { id: "b", text: "Ella : Farklı yollar, farklı tarzlar, hepsi kendimi iyi hissettiriyor." }
    ],
    easyDistractor: "Ella : Aynı yollar, aynı tarzlar, hepsi bana benziyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
    evidenceStart: "0:00.000",
evidenceEnd: "0:11.180",
    evidenceSentence: "Ella : Same /paths/, same styles, but /none of them/ feels like me.",
  },
  {
    id: "5_personal_life_hannah_storm",
    status: "published",
    videoSrc: "assets/video/5_personal_life_hannah_storm.mp4",
    title: "Hannah calls Storm with confidence.",
    transcript: "Hannah : Storm /always/ listens to me, Storm, come here, Well, /usually/.",
    answerOptions: [
      { id: "a", text: "Hannah : Storm beni /her zaman/ dinler, Storm, buraya gel, Şey, /genellikle/ dinler." },
      { id: "b", text: "Hannah : Storm beni genellikle dinler, Storm, buraya gel, Şey, bazen dinler." }
    ],
    easyDistractor: "Hannah : Storm beni her zaman dinler, Storm, Uzaklaş, Şey, genellikle.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["hannah", "storm"],
    grades: [5, 6],
    functions: ["imperatives","frequency_adverbs","fun"],
    theme: "Classroom_life",
    evidenceStart: "0:00.000",
evidenceEnd: null,
    evidenceSentence: "Hannah : Storm /always/ listens to me, Storm, come here, Well, /usually/.",
  },
 
  {
    id: "song_ella_chloe_ethan4_part1",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan4.mp4",
    videoStart: "0:00.000",
videoEnd: "0:06.431",
    title: "Ella sings about a new journey.",
    transcript: "Ella : A new /journey/ starts today, New adventures /on the way/.",
    answerOptions: [
      { id: "a", text: "Ella : Yeni bir gün bugün başlıyor, Yeni maceralar geride kaldı." },
      { id: "b", text: "Ella : Yeni bir /yolculuk/ bugün başlıyor, Yeni maceralar /yolda/." }
    ],
    easyDistractor: "Ella : Yeni bir yolculuk bugün başlıyor, Yeni maceralar geride kaldı.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
    evidenceStart: "0:00.000",
    evidenceEnd: "0:06.431",
    evidenceSentence: "Ella : A new /journey/ starts today, New adventures /on the way/.",
  },
  {
    id: "song_ella_chloe_ethan4_part2",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan4.mp4",
    videoStart: "0:06.431",
    title: "Ella sings about taking each step.",
    transcript: "Ella : One more /word/ and one more /smile/, Every step is worth the try.",
    answerOptions: [
      { id: "a", text: "Ella : Bir /kelime/ ve bir /gülümseme/ daha, Her adım denemeye değer." },
      { id: "b", text: "Ella : Bir kelime ve bir gülümseme daha yok, Her adım denemeye değer." }
    ],
    easyDistractor: "Ella : Bir kelime ve bir gülümseme daha, Her adım denemeye değmez.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
    evidenceStart: "0:06.507",
evidenceEnd: "0:10.021",
    evidenceSentence: "Ella : One more /word/ and one more /smile/",
  },
  {
    id: "song_ella_chloe_ethan5_part1",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan5.mp4",
    videoStart: "0:00.000",
    videoEnd: "0:06.850",
    title: "Ella sings about books and dreams.",
    transcript: "Ella : /Books and dreams/ are side by side, /With my friends/, I learn with pride.",
    answerOptions: [
      { id: "a", text: "Ella : Öğretmenler ve öğrenciler yan yana, hep birlikte gururla öğreniyoruz." },
      { id: "b", text: "Ella : /Kitaplar ve hayaller/ yan yana, Arkadaşlarımla gururla öğreniyorum." }
    ],
    easyDistractor: "Ella : Kitaplar ve hayaller yan yana, Arkadaşlarımla sessizce öğreniyorum.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
    evidenceStart: "0:00.000",
evidenceEnd: "0:06.850",
    evidenceSentence: "Ella : /Books and dreams/ are side by side, /With my friends/, I learn with pride.",
  },
  {
    id: "song_ella_chloe_ethan5_part2",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan5.mp4",
    videoStart: "0:06.850",
    videoEnd: "",
    title: "Ella sings about little moments.",
    transcript: "Ella : Little moments, /day by day/, Help me find another way.",
    answerOptions: [
      { id: "a", text: "Ella : Küçük anlar, gün be gün, Başka bir yol bulmama yardım ediyor." },
      { id: "b", text: "Ella : Küçük anlar, her yıl, Başka bir yol bulmama yardım ediyor." }
    ],
    easyDistractor: "Ella : Küçük anlar, gün be gün, Eski yolu bulmama yardım ediyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
   evidenceStart: "0:06.847",
evidenceEnd: "0:09.690",
    evidenceSentence: "Ella : Little moments, /day by day/",
  },
  {
    id: "song_ella_chloe_ethan6",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan6.mp4",
    title: "Ella sings about learning and growing.",
    transcript: "Ella : I can /learn/, I can /grow/, There's so much I want to know.",
    answerOptions: [
      { id: "a", text: "Ella : Öğrenemeyebilirim, unutabilirim, Bilmek istediğim çok fazla şey var." },
      { id: "b", text: "Ella : /Öğrenebilirim, gelişebilirim/, Bilmek istediğim çok fazla şey var." }
    ],
    easyDistractor: "Ella : Öğrenebilirim, gelişebilirim, Bildiğim her şey değerli.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
    evidenceStart: "0:00.000",
evidenceEnd: "0:03.736",
    evidenceSentence: "Ella : I can /learn/, I can /grow/",
  },
  {
    id: "song_ella_chloe_ethan7_part1",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan7.mp4",
    videoStart: "0:00.000",
    videoEnd: "0:07.188",
    title: "Ella sings about learning and shining.",
    transcript: "Ella : /Learn today, shine tomorrow/, Leave behind every /sorrow/.",
    answerOptions: [
      { id: "a", text: "Ella : /Bugün öğren, yarın parla/, Her /üzüntüyü/ geride bırak." },
      { id: "b", text: "Ella : Yarın öğren, bugün parla, Her mutluluğu geride bırak." }
    ],
    easyDistractor: "Ella : Bugün öğren, yarın parla, Her üzüntüyü yanında taşı.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
   evidenceStart: "0:00.000",
evidenceEnd: "0:07.188",
    evidenceSentence: "Ella : /Learn today, shine tomorrow/, Leave behind every /sorrow/.",
  },
  {
    id: "song_ella_chloe_ethan7_part2",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan7.mp4",
    videoStart: "0:07.188",
    title: "Ella sings about becoming stronger.",
    transcript: "Ella : Word by word, step by step, I am /stronger than yesterday/.",
    answerOptions: [
      { id: "a", text: "Ella : Kelime kelime, adım adım, Dünden daha çalışkanım." },
      { id: "b", text: "Ella : Kelime kelime, adım adım, /Dünden daha güçlüyüm/." }
    ],
    easyDistractor: "Ella : Kelime kelime, adım adım, Bugün dünden daha tembelim.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
    evidenceStart: "0:07.215",
evidenceEnd: "0:13.946",
    evidenceSentence: "Ella : Word by word, step by step, I am /stronger than yesterday/.",
  },
  {
    id: "fun_victoria_pixel",
    status: "published",
    videoSrc: "assets/video/fun_victoria_pixel.mp4",
    title: "Victoria is surprised by Pixel.",
    transcript: "Victoria : What /am I doing/ wrong, How did you do that?",
    answerOptions: [
      { id: "a", text: "Victoria : Neyi /yanlış yapıyorum/, Bunu nasıl yaptın?" },
      { id: "b", text: "Victoria : Pixel gel buraya nerdesin, Bunu sen mi yaptın?" }
    ],
    easyDistractor: "Victoria : Neyi yanlış yapıyorum, Bunu neden yaptın?",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["victoria", "pixel"],
    grades: [5, 6],
    functions: ["present_progressive", "fun"],
    theme: "personal_life",
    evidenceStart: "0:01.336",
evidenceEnd: null,
    evidenceSentence: "Victoria : What /am I doing/ wrong, How did you do that?",
  },
  {
    id: "5_life_in_the_nature_ava_buddy2",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ava_buddy2.mp4",
    title: "Ava looks for her keys with Buddy.",
    transcript: "Ava : /Where/ are my keys, Thank you?",
    answerOptions: [
      { id: "a", text: "Ava : Anahtarlarımı kim aldı, Teşekkür ederim?" },
      { id: "b", text: "Ava : Anahtarlarım /nerede/, Teşekkür ederim?" }
    ],
    easyDistractor: "Ava : Anahtarlarım nerede, Özür dilerim?",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ava", "buddy"],
    grades: [5, 6],
    functions: ["askingaboutlocation"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:01.591",
    evidenceSentence: "Ava : /Where/ are my keys, Thank you?",
  },
  {
    id: "fun_ella_sunny2",
    status: "published",
    videoSrc: "assets/video/fun_ella_sunny2.mp4",
    title: "Sunny helps Ella remember the next line.",
    transcript: "Ella : /Learning together/, what was the next line? Sunny : /Growing Together/.",
    answerOptions: [
      { id: "a", text: "Ella : /Birlikte öğrenmek/, sonraki satır neydi? Sunny : /Birlikte Büyümek/." },
      { id: "b", text: "Ella : Birlikte şarkı söylemek, sonraki satır neydi? Sunny : Birlikte Dans Etmek." }
    ],
    easyDistractor: "Ella : Birlikte öğrenmek, sonraki satır neydi? Sunny : Birlikte Öğrenmek.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "sunny"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "personal_life",
    evidenceStart: "0:00.000",
evidenceEnd: "0:07.742",
    evidenceSentence: "Ella : /Learning together/, what was the next line? Sunny : /Growing Together/.",
  },
  {
    id: "fun_ava_buddy",
    status: "published",
    videoSrc: "assets/video/fun_ava_buddy.mp4",
    title: "Ava is surprised by Buddy.",
    transcript: "Ava : How am I going to /open/ this, How can you do that?",
    answerOptions: [
      { id: "a", text: "Ava : Bunu kim açacak, Bunu neden yapabiliyorsun?" },
      { id: "b", text: "Ava : Bunu nasıl /açacağım/, Bunu nasıl yapabiliyorsun?" }
    ],
    easyDistractor: "Ava : Bunu nasıl açacağım, Bunu ne zaman yapıyorsun?",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ava", "buddy"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "personal_life",
    evidenceStart: "0:00.000",
evidenceEnd: "0:01.997",
    evidenceSentence: "Ava : How am I going to /open/ this, How can you do that?",
  },
  {
    id: "fun_hannah",
    status: "published",
    videoSrc: "assets/video/fun_hannah.mp4",
    title: "Hannah gives directions.",
    transcript: "Hannah : /Turn left/ from here, Ok, go right then.",
    answerOptions: [
      { id: "a", text: "Hannah : Buradan /sola dön/, Tamam, o zaman sağa git." },
      { id: "b", text: "Hannah : Buradan düz git, Tamam, o zaman dur." }
    ],
    easyDistractor: "Hannah : Buradan sola dön, Tamam, o zaman düz git.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["hannah"],
    grades: [5, 6],
    functions: ["givingdirections", "fun"],
    theme: "personal_life",
    evidenceStart: "0:01.455",
evidenceEnd: "0:03.031",
    evidenceSentence: "Hannah : /Turn left/ from here, Ok, go right then.",
  },
  {
    id: "fun_ella_olivia",
    status: "published",
    videoSrc: "assets/video/fun_ella_olivia.mp4",
    title: "Ella shares a song with Olivia.",
    transcript: "Ella : /Listen/ to this new song I wrote. Olivia : /greatest/ song ever.",
    answerOptions: [
      { id: "a", text: "Ella : Bu yeni yazdığım şarkıya bak, Olivia : Gelmiş geçmiş en kötü şarkı." },
      { id: "b", text: "Ella : Yazdığım yeni şarkıyı /dinle/, Olivia : Gelmiş geçmiş en güzel şarkı." }
    ],
    easyDistractor: "Ella : Yazdığım bu yeni şarkıyı dinle, Olivia : Güzel bir şarkı.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "olivia"],
    grades: [5, 6],
    functions: ["imperatives", "fun"],
    theme: "personal_life",
    evidenceStart: "0:00.000",
evidenceEnd: "0:07.994",
    evidenceSentence: "Ella : /Listen/ to this new song I wrote. Olivia : /Greatest/ song ever.",
  },
  {
    id: "fun_hannah_storm",
    status: "published",
    videoSrc: "assets/video/fun_hannah_storm.mp4",
    title: "Hannah talks about brushing Storm.",
    transcript: "Hannah : Storm loves /being brushed/, It seems he loves the brush only.",
    answerOptions: [
      { id: "a", text: "Hannah : Storm /taranmayı/ seviyor, Görünüşe göre yalnızca fırçayı seviyor." },
      { id: "b", text: "Hannah : Storm koşmayı seviyor, Görünüşe göre yalnızca fırçayı seviyor." }
    ],
    easyDistractor: "Hannah : Storm taranmayı seviyor, Görünüşe göre yalnızca yemeği seviyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["hannah", "storm"],
    grades: [5, 6],
    functions: ["gerunds_and_infinitives"],
    theme: "life_in_nature",
   evidenceStart: "0:00.000",
evidenceEnd: "0:02.407",
    evidenceSentence: "Hannah : Storm loves /being brushed/.",
  },
  {
    id: "5_life_in_the_nature_chloe_emma",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_chloe_emma.mp4",
    title: "Chloe tries to catch something.",
    transcript: "Chloe : I can /catch it/ with my mouth, Well, it was close.",
    answerOptions: [
      { id: "a", text: "Chloe : Onu hemen yiyebilirim, Şey, çok yaklaşmıştım." },
      { id: "b", text: "Chloe : Onu ağzımla /yakalayabilirim/, Şey, çok yaklaşmıştım." }
    ],
    easyDistractor: "Chloe : Onu ağzımla yakalayabilirim, Şey, çok kolaydı.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["chloe", "emma"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability", "fun"],
    theme: "life_in_nature",
    evidenceStart: "0:00.000",
evidenceEnd: "0:01.987",
    evidenceSentence: "Chloe : I can /catch it/ with my mouth.",
  },
  {
    id: "5_life_in_the_nature_ella_sunny3",
    status: "published",
    videoSrc: "assets/video/5_life_in_the_nature_ella_sunny3.mp4",
    title: "Ella is surprised that Sunny can read.",
    transcript: "Ella : I wonder who it is, Sunny : She is Olivia, Ella : You /can read/ now?",
    answerOptions: [
      { id: "a", text: "Ella : Acaba kim? Sunny : O Olivia, Ella : Artık /okuyabiliyor/ musun?" },
      { id: "b", text: "Ella : Acaba kim? Sunny : O Olivia, Ella : Artık konuşabiliyor musun?" }
    ],
    easyDistractor: "Ella : Kim olduğunu merak ediyorum, Sunny : O Olivia, Ella : Artık konuşabiliyor musun?",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "sunny", "olivia"],
    grades: [5, 6],
    functions: ["use_of_modal_can_for_capability_and_ability", "fun"],
    theme: "life_in_nature",
    evidenceStart: "0:06.588",
evidenceEnd: null,
    evidenceSentence: "Ella : I wonder who it is, Sunny : She is Olivia, Ella : You /can read/ now?",
  },
  {
    id: "song_ella_chloe_ethan8_part1",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan8.mp4",
    videoStart: "0:00.000",
    videoEnd: "0:06.981",
    title: "Ella sings about learning and dreaming.",
    transcript: "Ella : Learn today, /dream so high/, Nothing to fear, When we try.",
    answerOptions: [
      { id: "a", text: "Ella : Bugün öğren, çok çalış, Denemezsek korkacak çok şey var." },
      { id: "b", text: "Ella : Bugün öğren, /Çok büyük hayaller kur/, Denediğimizde korkacak hiçbir şey yok." }
    ],
    easyDistractor: "Ella : Bugün öğren, Çok yüksek hayaller kur, Denemeden önce kork.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
    evidenceStart: "0:00.000",
evidenceEnd: "0:06.981",
    evidenceSentence: "Ella : Learn today, /dream so high/, Nothing to fear, When we try.",
  },
  {
    id: "song_ella_chloe_ethan8_part2",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan8.mp4",
    videoStart: "0:06.981",
    title: "Ella sings about moving toward her goal.",
    transcript: "Ella : Every lesson, Every /smile/, Brings me closer to my /goal/.",
    answerOptions: [
      { id: "a", text: "Ella : Her ders, Her /gülümseme/, Beni /hedefime/ yaklaştırıyor." },
      { id: "b", text: "Ella : Her ders, Her üzüntü, Beni biraz daha büyütüyor." }
    ],
    easyDistractor: "Ella : Her ders, Her gülümseme, Beni hedefimden uzaklaştırıyor.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
   evidenceStart: "0:06.995",
evidenceEnd: "0:14.255",
    evidenceSentence: "Ella : Every lesson, Every /smile/, Brings me closer to my /goal/.",
  },
  {
    id: "song_ella_chloe_ethan9_part1",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan9.mp4",
    videoStart: "0:00.000",
    videoEnd: "0:06.950",
    title: "Ella sings about finding who she wants to be.",
    transcript: "Ella : Every /answer/ helps me see, Who I really want to be.",
    answerOptions: [
      { id: "a", text: "Ella : Her soru görmeme yardım ediyor, Gerçekten kim olmak istediğimi." },
      { id: "b", text: "Ella : Her /cevap/ görmeme yardım ediyor, Gerçekten kim olmak istediğimi." }
    ],
    easyDistractor: "Ella : Her konuşma görmeme yardım ediyor, Gerçekte kim olduğumu.",
    correctOptionId: "b",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
    evidenceStart: "0:00.000",
evidenceEnd: "0:06.950",
    evidenceSentence: "Ella : Every /answer/ helps me see, Who I really want to be.",
  },
  {
    id: "song_ella_chloe_ethan9_part2",
    status: "published",
    videoSrc: "assets/video/song_ella_chloe_ethan9.mp4",
    videoStart: "0:06.950",
    videoEnd: "0:14",
    title: "Ella sings about rising again.",
    transcript: "Ella : If I fall, I rise again, That's the way I always /win/.",
    answerOptions: [
      { id: "a", text: "Ella : Düşersem, yeniden ayağa kalkarım, işte hep bu şekilde /kazanırım/." },
      { id: "b", text: "Ella : Düşersem, yeniden ayağa kalkamam, işte hep bu yüzden kaybederim." }
    ],
    easyDistractor: "Ella : Düşersem, yeniden ayağa kalkarım, Ben bazen böyle kazanırım.",
    correctOptionId: "a",
    explanation: "",
    characterIds: ["ella", "chloe", "ethan"],
    grades: [5, 6],
    functions: ["fun"],
    theme: "song",
    evidenceStart: "0:07.114",
evidenceEnd: "0:14",
    evidenceSentence: "Ella : If I fall, I rise again, That's the way I always /win/.",
  },
  {
    "id": "countries_ava",
    "status": "published",
    "videoSrc": "assets/video/countries_ava.mp4",
    "title": "Ava introduces herself and shares a fact about the Netherlands.",
    "transcript": "Ava : Hi, I'm Ava, I'm from the /Netherlands/, People /ride bikes/ everywhere there!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Merhaba, Ben Ava, /Hollanda/'danım, Orada insanlar her yere /bisikletle/ gider."
      },
      {
        "id": "b",
        "text": "Ava : Merhaba, Ben Ava, İsviçre'denim, Orada insanlar her yere yürüyerek gider."
      }
    ],
    "easyDistractor": "Ava : Merhaba, Ben Ava, Almanya'danım, Orada insanlar her yere koşarak gider.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ava"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation",
      "countries"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.983",
    "evidenceEnd": null,
    "evidenceSentence": "I'm from the /Netherlands/, People /ride bikes/ everywhere there!"
  },
  {
    "id": "countries_benjamin",
    "status": "published",
    "videoSrc": "assets/video/countries_benjamin.mp4",
    "title": "Benjamin introduces himself and shares a fact about Denmark.",
    "transcript": "Benjamin : Hi, I'm Benjamin, I'm from Denmark, LEGO was invented in Denmark!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Merhaba, Ben Benjamin, Almanya'danım, LEGO Almanya'da icat edildi!"
      },
      {
        "id": "b",
        "text": "Benjamin : Merhaba, Ben Benjamin, /Danimarka/'danım, LEGO Danimarka'da icat edildi!"
      }
    ],
    "easyDistractor": "Benjamin : Merhaba, Ben Benjamin, Fransa'danım, LEGO Fransa'da icat edildi!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "benjamin"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation",
      "countries"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.922",
    "evidenceEnd": "0:03.502",
    "evidenceSentence": "I'm from Denmark"
  },
  {
    "id": "countries_chloe",
    "status": "published",
    "videoSrc": "assets/video/countries_chloe.mp4",
    "title": "Chloe introduces herself and shares a fact about France.",
    "transcript": "Chloe : Hi, I'm Chloe, I'm from France, The Eiffel Tower gets a little taller in /summer/!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Merhaba, Ben Chloe, Fransa'danım, Eyfel Kulesi /yazın/ biraz daha uzar!"
      },
      {
        "id": "b",
        "text": "Chloe : Merhaba, Ben Chloe, Fransa'danım, Eyfel Kulesi kışın biraz daha uzar!"
      }
    ],
    "easyDistractor": "Chloe : Merhaba, Ben Chloe, Fransa'danı, Eyfel Kulesi sadece yazın açık!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "chloe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.876",
    "evidenceEnd": null,
    "evidenceSentence": "The Eiffel Tower gets a little taller in /summer/!"
  },
  {
    "id": "countries_daniel",
    "status": "published",
    "videoSrc": "assets/video/countries_daniel.mp4",
    "title": "Daniel introduces himself and shares a fact about Spain.",
    "transcript": "Daniel : Hi, I'm Daniel, I'm from Spain, Spain has the world's largest /tomato fight/!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Merhaba, Ben Daniel, İspanya'danım, İspanya'da dünyanın en büyük boğa dövüşleri yapılır!"
      },
      {
        "id": "b",
        "text": "Daniel : Merhaba, Ben Daniel, İspanya'danım, İspanya'da dünyanın en büyük /domates savaşı/ yapılır!"
      }
    ],
    "easyDistractor": "Daniel : Merhaba, Ben Daniel, İspanya'danım, İspanya'da portakal savaşı yapılır!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "daniel"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.820",
    "evidenceEnd": null,
    "evidenceSentence": "Spain has the world's largest /tomato fight/!"
  },
  {
    "id": "countries_david",
    "status": "published",
    "videoSrc": "assets/video/countries_david.mp4",
    "title": "David introduces himself and shares a fact about Mexico.",
    "transcript": "David : Hi, I'm David, I'm from /Mexico/, Mexico has more pyramids than Egypt!",
    "answerOptions": [
      {
        "id": "a",
        "text": "David : Merhaba, Ben David, /Meksika/'danım, Meksika'da Mısır'dan daha fazla piramit vardır!"
      },
      {
        "id": "b",
        "text": "David : Merhaba, Ben David, Mısır'danım, Mısır'da Meksika'dan daha fazla piramit vardır!"
      }
    ],
    "easyDistractor": "David : Merhaba, Ben David, Meksika'danım, Meksika'da hiç piramit yoktur!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "david"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation",
      "countries"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.621",
    "evidenceEnd": "0:03.228",
    "evidenceSentence": "I'm from /Mexico/"
  },
  {
    "id": "5_personal_life_appearance_zoe",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_zoe.mp4",
    "title": "Zoe describes her physical appearance.",
    "transcript": "Zoe : Hi, I'm Zoe, I have /long curly/ black hair and brown eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : Merhaba, ben Zoe, kısa kıvırcık kahverengi saçlarım ve mavi gözlerim var."
      },
      {
        "id": "b",
        "text": "Zoe : Merhaba, ben Zoe, /uzun kıvırcık/ siyah saçlarım ve kahverengi gözlerim var."
      }
    ],
    "easyDistractor": "Zoe : Merhaba, ben Zoe, uzun siyah saçlarım ve yeşil gözlerim var.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "zoe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.552",
    "evidenceEnd": "0:05.101",
    "evidenceSentence": "I have /long curly/ black hair."
  },
  {
    "id": "countries_ella",
    "status": "published",
    "videoSrc": "assets/video/countries_ella.mp4",
    "title": "Ella introduces herself and shares a fact about Australia.",
    "transcript": "Ella : Hi, I'm Ella, I/'m from Australia/, Australia is home to kangaroos and koalas!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Merhaba, Ben Ella, Avusturya'lıyım, Avustralya kanguruların ve koalaların ülkesidir!"
      },
      {
        "id": "b",
        "text": "Ella : Merhaba, Ben Ella, /Avustralya'danım/, Avustralya kanguruların ve koalaların ülkesidir!"
      }
    ],
    "easyDistractor": "Ella : Merhaba, Ben Ella, Avustralya'danım, Avustralya kutup ayılarının ülkesidir!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ella"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation",
      "countries"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.502",
    "evidenceEnd": "0:02.642",
    "evidenceSentence": "I/'m from Australia/"
  },
  {
    "id": "countries_emma",
    "status": "published",
    "videoSrc": "assets/video/countries_emma.mp4",
    "title": "Emma introduces herself and shares a fact about Japan.",
    "transcript": "Emma : Hi, I'm Emma, I'm from Japan, Japan has /more than six thousand/ islands!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Merhaba, Ben Emma, Japonya'danım, Japonya'da /6.000'den fazla/ ada vardır!"
      },
      {
        "id": "b",
        "text": "Emma : Merhaba, Ben Emma, Japonya'danım, Japonya'da 600 civarı ada vardır!"
      }
    ],
    "easyDistractor": "Emma : Merhaba, Ben Emma, Japonya'danım, Japonya'da hiç ada yoktur!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "emma"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation",
      "numbers"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.054",
    "evidenceEnd": null,
    "evidenceSentence": "Japan has /more than six thousand/ islands!"
  },
  {
    "id": "countries_ethan",
    "status": "published",
    "videoSrc": "assets/video/countries_ethan.mp4",
    "title": "Ethan shares facts about England and London.",
    "transcript": "Ethan : Hi, I'm Ethan, England is famous for Big Ben, And did you know that London has more than /one hundred and seventy/ museums?",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ethan : Merhaba, Ben Ethan, İngiltere Big Ben ile ünlüdür, Londra'da 17'den fazla müze olduğunu biliyor muydun?"
      },
      {
        "id": "b",
        "text": "Ethan : Merhaba, Ben Ethan, İngiltere Big Ben ile ünlüdür, Londra'da /170/'ten fazla müze olduğunu biliyor muydun?"
      }
    ],
    "easyDistractor": "Ethan : Merhaba, Ben Ethan, Big Ben Amerika'dadır, Londra'da 10 müze vardır!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ethan"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation",
      "numbers"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.544",
    "evidenceEnd": null,
    "evidenceSentence": "And did you know that London has more than /a hundred and seventy/ museums?"
  },
  {
    "id": "countries_hannah",
    "status": "published",
    "videoSrc": "assets/video/countries_hannah.mp4",
    "title": "Hannah introduces herself and shares a fact about Norway.",
    "transcript": "Hannah : Hi, I'm Hannah, I'm from Norway, In /summer/, the sun doesn't set /for weeks/ in some parts of Norway!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Merhaba, Ben Hannah, Norveç'tenim, /Yazın/, Norveç'in bazı bölgelerinde güneş /haftalarca/ batmaz!"
      },
      {
        "id": "b",
        "text": "Hannah : Merhaba, Ben Hannah, Norveç'tenim, Kışın, Norveç'in bazı bölgelerinde güneş aylarca batmaz!"
      }
    ],
    "easyDistractor": "Hannah : Merhaba, Ben Hannah, Norveç'tenim, Norveç'te güneş hiç batmaz!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "hannah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation",
      "expressingtime"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.591",
    "evidenceEnd": null,
    "evidenceSentence": "In /summer/, the sun doesn't set for weeks in some parts of Norway!"
  },
  {
    "id": "5_personal_life_appearance_victoria",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_victoria.mp4",
    "title": "Victoria describes her physical appearance.",
    "transcript": "Victoria : Hi, I'm Victoria, I have long wavy black hair, blue eyes, and /round glasses/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Victoria : Merhaba, ben Victoria, uzun dalgalı siyah saçlarım, mavi gözlerim ve dikdörtgen gözlüklerim var."
      },
      {
        "id": "b",
        "text": "Victoria : Merhaba, ben Victoria, uzun dalgalı siyah saçlarım, mavi gözlerim ve /yuvarlak gözlüklerim/ var."
      }
    ],
    "easyDistractor": "Victoria : Merhaba, ben Victoria, kısa siyah saçlarım, yeşil gözlerim ve dikdörtgen gözlüklerim var.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.606",
    "evidenceEnd": null,
    "evidenceSentence": "I have long wavy black hair, blue eyes, and /round glasses/."
  },
  {
    "id": "countries_jack",
    "status": "published",
    "videoSrc": "assets/video/countries_jack.mp4",
    "title": "Jack introduces himself and shares a fact about Scotland.",
    "transcript": "Jack : Hi, I'm Jack, I'm from /Scotland/, Scotland's national animal is the unicorn!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Jack : Merhaba, Ben Jack, İsviçre'liyim, İsviçrenin ulusal hayvanı tek boynuzlu attır!"
      },
      {
        "id": "b",
        "text": "Jack : Merhaba, Ben Jack, /İskoçya/'danım, İskoçya'nın ulusal hayvanı tek boynuzlu attır!"
      }
    ],
    "easyDistractor": "Jack : Merhaba, Ben Jack, İskoçya'danım, İskoçya'nın ulusal hayvanı boz ayıdır!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "jack"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation",
      "countries"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.547",
    "evidenceEnd": "0:02.888",
    "evidenceSentence": "I'm from /Scotland/"
  },
  {
    "id": "countries_lucas",
    "status": "published",
    "videoSrc": "assets/video/countries_lucas.mp4",
    "title": "Lucas introduces himself and shares a fact about Brazil.",
    "transcript": "Lucas : Hi, I'm Lucas, I'm from Brazil, Brazil has won the World Cup /five times/!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Lucas : Merhaba, Ben Lucas, Brezilya'danım, Brezilya Dünya Kupası'nı /beş kez/ kazandı!"
      },
      {
        "id": "b",
        "text": "Lucas : Merhaba, Ben Lucas, Brezilya'danım, Brezilya Dünya Kupası'nı beş yıl önce kazandı!"
      }
    ],
    "easyDistractor": "Lucas : Merhaba, Ben Lucas, Brezilya'danım, Brezilya Dünya Kupası'nı hiç kazanamadı!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "lucas"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation",
      "frequency_adverbs"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.521",
    "evidenceEnd": null,
    "evidenceSentence": "Brazil has won the World Cup /five times/"
  },
  {
    "id": "countries_mia",
    "status": "published",
    "videoSrc": "assets/video/countries_mia.mp4",
    "title": "Mia introduces herself and shares a fact about Türkiye.",
    "transcript": "Mia : Hi, I'm Mia, I'm from Türkiye, Türkiye is the only country in the /world/ on two continents!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Merhaba, Ben Mia, Türkiye'denim, Türkiye avrupada iki kıta üzerinde bulunan tek ülkedir!"
      },
      {
        "id": "b",
        "text": "Mia : Merhaba, Ben Mia, Türkiye'denim, Türkiye /dünyada/ iki kıta üzerinde bulunan tek ülkedir!"
      }
    ],
    "easyDistractor": "Mia : Merhaba, Ben Mia, Türkiye'denim, Türkiye dünyada üç kıta üzerinde bulunan tek ülkedir!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.642",
    "evidenceEnd": null,
    "evidenceSentence": "Türkiye is the only country in the /world/ on two continents!"
  },
  {
    "id": "countries_noah",
    "status": "published",
    "videoSrc": "assets/video/countries_noah.mp4",
    "title": "Noah introduces himself and shares a fact about Germany.",
    "transcript": "Noah : Hi, I'm Noah, I'm from /Germany, Germany/ has more than 25,000 /castles/!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : Merhaba, Ben Noah, /Almanya'danım, Almanya/'da 25.000'den fazla /kale/ vardır!"
      },
      {
        "id": "b",
        "text": "Noah : Merhaba, Ben Noah, Romanya'danım, Romanya'da 25.000'den fazla kilise vardır!"
      }
    ],
    "easyDistractor": "Noah : Merhaba, Ben Noah, Almanya'danım, Almanya'da 25.000'den fazla cami vardır!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "noah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.579",
    "evidenceEnd": null,
    "evidenceSentence": "I'm from /Germany, Germany/ has more than 25,000 /castles/!"
  },
  {
    "id": "countries_olivia",
    "status": "published",
    "videoSrc": "assets/video/countries_olivia.mp4",
    "title": "Olivia introduces herself and shares a fact about Sweden.",
    "transcript": "Olivia : Hi, I'm Olivia, I'm from Sweden, /The Nobel Prize/ comes from Sweden!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : Merhaba, Ben Olivia, İsveç'tenim, Fotoğraf makinasi İsveç'te icat edilmiştir!"
      },
      {
        "id": "b",
        "text": "Olivia : Merhaba, Ben Olivia, İsveç'tenim, /Nobel Ödülü/ İsveç'ten gelir!"
      }
    ],
    "easyDistractor": "Olivia : Merhaba, Ben Olivia, İsveç'tenim, Nobel Ödülü Almanya'dan gelir!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.445",
    "evidenceEnd": "0:06.077",
    "evidenceSentence": "/The Nobel Prize/ comes from Sweden!"
  },
  {
    "id": "countries_victoria",
    "status": "published",
    "videoSrc": "assets/video/countries_victoria.mp4",
    "title": "Victoria introduces herself and shares a fact about the United Kingdom.",
    "transcript": "Victoria : Hi, I'm Victoria, I'm from the /United Kingdom/, The world's oldest passenger railway is in the United Kingdom!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Victoria : Merhaba, Ben Victoria, /Birleşik Krallık/'tanım, Dünyanın en eski yolcu demiryolu Birleşik Krallık'tadır!"
      },
      {
        "id": "b",
        "text": "Victoria : Merhaba, Ben Victoria, Amerika Birleşik Devletlerin'denim, Dünyanın en eski yolcu demiryolu ABD'dedir!"
      }
    ],
    "easyDistractor": "Victoria : Merhaba, Ben Victoria, Birleşik Krallık'tanım, Dünyanın en eski yolcu demiryolu Avustralya'dadır!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation",
      "countries"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.326",
    "evidenceEnd": "0:02.889",
    "evidenceSentence": "I'm from the /United Kingdom/"
  },
  {
    "id": "countries_zoe",
    "status": "published",
    "videoSrc": "assets/video/countries_zoe.mp4",
    "title": "Zoe introduces herself and shares a fact about Greece.",
    "transcript": "Zoe : Hi, I'm Zoe, I'm from Greece, /The Olympic Games/ began in Greece!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : Merhaba, Ben Zoe, Yunanistan'danım, ilk bilgisayar oyunu Yunanistan'da üretildi!"
      },
      {
        "id": "b",
        "text": "Zoe : Merhaba, Ben Zoe, Yunanistan'danım, /Olimpiyat Oyunları/ Yunanistan'da başladı!"
      }
    ],
    "easyDistractor": "Zoe : Merhaba, Ben Zoe, Yunanistan'danım, Olimpiyat Oyunları İtalya'da başladı!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "zoe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "givinglocationinformation"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.438",
    "evidenceEnd": null,
    "evidenceSentence": "/The Olympic Games/ began in Greece!"
  },
  {
    "id": "introduce_olivia",
    "status": "published",
    "videoSrc": "assets/video/introduce_olivia.mp4",
    "title": "Olivia introduces herself",
    "transcript": "Hi, I'm Olivia, I'm from /Sweden/. I /love/ taking photos, I also enjoy painting and art.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : Selam, ben Olivia, /İsveç/'denim, fotoğraf çekmeyi /severim/, ayrıca resim yapmaktan ve sanattan hoşlanırım."
      },
      {
        "id": "b",
        "text": "Olivia : Selam, ben Olivia, İsviçre'denim, fotoğraf çekmeye bayılırım, ayrıca resim yapmayı ve sanatı severim."
      }
    ],
    "easyDistractor": "Olivia : Selam, Ben Olivia, İsveç'tenim, Futbol oynamayı severim.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "talking_about_hobbies",
      "countries"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.486",
    "evidenceEnd": "0:08.696",
    "evidenceSentence": "I'm from /Sweden/. I /love/ taking photos"
  },
  {
    "id": "5_personal_life_appearance_olivia",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_olivia.mp4",
    "title": "Olivia describes her physical appearance.",
    "transcript": "Olivia : Hi, I'm Olivia, I have a chin-length brown bob and /green eyes/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : Merhaba, ben Olivia, çene hizasında kahverengi küt saçlarım ve /yeşil gözlerim/ var."
      },
      {
        "id": "b",
        "text": "Olivia : Merhaba, ben Olivia, çene hizasında kahverengi küt saçlarım ve mavi gözlerim var."
      }
    ],
    "easyDistractor": "Olivia : Merhaba, ben Olivia, çene hizasında siyah saçlarım ve yeşil gözlerim var.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.818",
    "evidenceEnd": "0:07.062",
    "evidenceSentence": "I have a chin-length brown bob and /green eyes/."
  },
  {
    "id": "5_school_life_olivia_ella",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_olivia_ella.mp4",
    "title": "Olivia asks Ella whether she is ready for the concert.",
    "transcript": "Olivia : /Are you ready/ for the concert? Ella : Yes, I am, I'm really /excited/!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : Konser vakti geldi mi? Ella : Evet, öyle, Çok gerginim."
      },
      {
        "id": "b",
        "text": "Olivia : Konser için /hazır mısın/? Ella : Evet, Hazırım, Gerçekten /heyecanlıyım/!"
      }
    ],
    "easyDistractor": "Olivia : Yarın için hazır mısın? Ella : Evet, Hazırım.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "olivia",
      "ella"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_about_condition",
      "expressing_feelings"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.479",
    "evidenceEnd": "0:04.598",
    "evidenceSentence": "Olivia : /Are you ready/ for the concert? Ella : Yes, I am, I'm really /excited/!"
  },
  {
    "id": "5_personal_life_appearance_noah",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_noah.mp4",
    "title": "Noah describes his physical appearance.",
    "transcript": "Noah : Hi, I'm Noah, I have short straight brown hair, /green/ eyes, and /rectangular glasses/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : Merhaba, ben Noah, kısa düz kahverengi saçlarım, mavi gözlerim ve yuvarlak gözlüklerim var."
      },
      {
        "id": "b",
        "text": "Noah : Merhaba, ben Noah, kısa düz kahverengi saçlarım, yeşil gözlerim ve /dikdörtgen gözlüklerim/ var."
      }
    ],
    "easyDistractor": "Noah : Merhaba, ben Noah, kısa kahverengi saçlarım, yeşil gözlerim ve yuvarlak gözlüklerim var.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "noah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.782",
    "evidenceEnd": null,
    "evidenceSentence": "I have short straight brown hair, /green/ eyes, and /rectangular glasses/."
  },
  {
    "id": "5_personal_life_appearance_mia",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_mia.mp4",
    "title": "Mia describes her physical appearance.",
    "transcript": "Mia : Hi, I'm Mia, I have long /wavy brown/ hair and blue eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Merhaba, ben Mia, uzun /dalgalı kahverengi/ saçlarım/ ve mavi gözlerim var."
      },
      {
        "id": "b",
        "text": "Mia : Merhaba, ben Mia, uzun kıvırcık siyah saçlarım ve mavi gözlerim var."
      }
    ],
    "easyDistractor": "Mia : Merhaba, ben Mia, uzun kahverengi saçlarım ve kahverengi gözlerim var.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.139",
    "evidenceEnd": "0:07.207",
    "evidenceSentence": "I have long /wavy brown/ hair and blue eyes."
  },
  {
    "id": "5_personal_life_appearance_lucas",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_lucas.mp4",
    "title": "Lucas describes his physical appearance.",
    "transcript": "Lucas : Hi, I'm Lucas, I have short /curly black/ hair and brown eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Lucas : Merhaba, ben Lucas, kısa /kıvırcık siyah/ saçlarım ve /kahverengi/ gözlerim var."
      },
      {
        "id": "b",
        "text": "Lucas : Merhaba, ben Lucas, kısa dalgalı siyah saçlarım ve siyah gözlerim var."
      }
    ],
    "easyDistractor": "Lucas : Merhaba, ben Lucas, kısa siyah saçlarım ve yeşil gözlerim var.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "lucas"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.626",
    "evidenceEnd": null,
    "evidenceSentence": "I have short /curly black/ hair and brown eyes"
  },
  {
    "id": "5_personal_life_appearance_jack",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_jack.mp4",
    "title": "Jack describes his physical appearance.",
    "transcript": "Jack : Hi, I'm Jack, I have short /straight black/ hair and brown eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Jack : Merhaba, ben Jack, kısa /düz siyah/ saçlarım ve kahverengi gözlerim var."
      },
      {
        "id": "b",
        "text": "Jack : Merhaba, ben Jack, kısa kıvırcık siyah saçlarım ve kahverengi gözlerim var."
      }
    ],
    "easyDistractor": "Jack : Merhaba, ben Jack, kısa siyah saçlarım ve yeşil gözlerim var.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "jack"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.543",
    "evidenceEnd": null,
    "evidenceSentence": "I have short /straight black/ hair and brown eyes"
  },
  {
    "id": "introduce_mia_part2",
    "status": "published",
    "videoSrc": "assets/video/introduce_mia.mp4",
    "videoStart": "0:06.9",
    "title": "Mia talks about her favourite activities.",
    "transcript": "/Fairy tales/ are my favorite, I love /writing in my diary/ in the evenings, Nice to meet you, bye.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : /Peri masalları/ favorimdir, Akşamları günlüğüme yazmayı çok severim."
      },
      {
        "id": "b",
        "text": "Mia : Macera kitapları favorimdir, Akşamları günlüğümü okumayı çok severim."
      }
    ],
    "easyDistractor": "Mia : Selam, Ben Mia, Okumayı sevmiyorum, Macera filmleri favorimdir.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions"
    ],
    "theme": "introduction",
    "evidenceStart": "0:06.985",
    "evidenceEnd": "0:12.976",
    "evidenceSentence": "/Fairy tales/ are my favorite, I love /writing in my diary/ in the evenings, Nice to meet you, bye"
  },
  {
    "id": "introduce_mia_part1",
    "status": "published",
    "videoSrc": "assets/video/introduce_mia.mp4",
    "videoStart": "0:00.000",
    "videoEnd": "0:05.100",
    "title": "Mia introduces herself and Coco.",
    "transcript": "Hi, I'm Mia, /I was born/ in Turkiye, This is my rabbit, Coco.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Selam, Ben Mia, Türk'üm, Bu benim tavşanım, Coco."
      },
      {
        "id": "b",
        "text": "Mia : Selam, Ben Mia, /Türkiye'de doğdum/, Bu benim /tavşanım/, Coco."
      }
    ],
    "easyDistractor": "Mia : Selam, Ben Mia, Türkiye'de yaşıyorum, Bu benim kedim, Luna.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.795",
    "evidenceEnd": "0:03.489",
    "evidenceSentence": "/I was born/ in Turkiye"
  },
  {
    "id": "introduce_ella_part1",
    "status": "published",
    "videoSrc": "assets/video/introduce_ella.mp4",
    "videoStart": "0:00.000",
    "videoEnd": "0:06.17",
    "title": "Ella introduces herself",
    "transcript": "Hi, I'm Ella, I was born in /Australia/, I enjoy /singing/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Selam, Ben Ella, Avusturya'da doğdum, Şarkı dinlemekten hoşlanırım."
      },
      {
        "id": "b",
        "text": "Ella : Selam, Ben Ella, /Avustralya/'da doğdum, /Şarkı söylemek/ten hoşlanırım."
      }
    ],
    "easyDistractor": "Mia : Selam, Ben Ella, Avusturya'da yaşıyorum, Şarkı söylemeyi sevmem.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ella"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "talking_about_hobbies",
      "countries"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.648",
    "evidenceEnd": "0:06.341",
    "evidenceSentence": "I was born in /Australia/, I enjoy /singing/"
  },
  {
    "id": "introduce_ella_part2",
    "status": "published",
    "videoSrc": "assets/video/introduce_ella.mp4",
    "videoStart": "0:08",
    "title": "Ella introduces herself.",
    "transcript": "I enjoy /spending time/ with my friends, Nice to meet you, Let's sing together someday.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Arkadaşlarımla /zaman geçirmekten/ hoşlanırım, Tanıştığımıza sevindim, Bir gün beraber şarkı söyleyelim"
      },
      {
        "id": "b",
        "text": "Ella : Arkadaşlarımla buluşmaktan hoşlanırım, Tanıştığımıza sevindim, Bir gün beraber şarkı söyleyelim"
      }
    ],
    "easyDistractor": "Ella : Arkadaşlarımla zaman geçirmeyi pek sevmem, Tanıştığımıza sevindim, Bir gün beraber şarkı dinleyelim.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ella"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions"
    ],
    "theme": "introduction",
    "evidenceStart": "0:08.321",
    "evidenceEnd": "0:10.585",
    "evidenceSentence": "I enjoy /spending time/ with my friends"
  },
  {
    "id": "introduce_chloe_part1",
    "status": "published",
    "videoSrc": "assets/video/introduce_chloe.mp4",
    "videoEnd": "0:04.06",
    "title": "Chloe introduces herself",
    "transcript": "Hi I'm Chloe, I'm twelve years old and /I'm from/ France.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Ben 12 yaşındayım ve Fransa'/lıyım/."
      },
      {
        "id": "b",
        "text": "Chloe : Ben 12 yıldır Fransa'dayım."
      }
    ],
    "easyDistractor": "Chloe : Ben 11 yaşındayım ve Fransa'lıyım.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "chloe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "introductions",
    "theme": "introduction",
    "evidenceStart": "0:02.920",
    "evidenceEnd": "0:04.102",
    "evidenceSentence": "/I'm from/ France"
  },
  {
    "id": "introduce_chloe_part2",
    "status": "published",
    "videoSrc": "assets/video/introduce_chloe.mp4",
    "videoStart": "0:04.06",
    "title": "Chloe introduces herself",
    "transcript": "Chloe : I love playing the piano, I'm a /sixth/ grade student, My favorite lesson is English, See you soon.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Piyano çalmayı severim, /altıncı/ sınıf öğrenciyim, favori dersim ingilizce, görüşürüz!"
      },
      {
        "id": "b",
        "text": "Chloe : Piyano çalmayı severim, beşinci sınıf öğrenciyim, favori dersim ingilizce, görüşürüz!"
      }
    ],
    "easyDistractor": "Chloe : Piyano çalmayı severim, altıncı sınıf öğrenciyim, en başarılı dersim ingilizce, görüşürüz!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "chloe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "introductions",
    "theme": "introduction",
    "evidenceStart": "0:09.188",
    "evidenceEnd": "0:10.995",
    "evidenceSentence": "I'm a /sixth/ grade student"
  },
  {
    "id": "5_personal_life_appearance_hannah",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_hannah.mp4",
    "title": "Hannah describes her physical appearance.",
    "transcript": "Hannah : Hi, I'm Hannah, I have /long straight/ blonde hair and /blue/ eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Merhaba, ben Hannah, orta uzunlukta düz sarı saçlarım ve yeşil gözlerim var."
      },
      {
        "id": "b",
        "text": "Hannah : Merhaba, ben Hannah, /uzun düz/ sarı saçlarım ve /mavi/ gözlerim var."
      }
    ],
    "easyDistractor": "Hannah : Merhaba, ben Hannah, uzun sarı saçlarım ve kahverengi gözlerim var.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "hannah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.336",
    "evidenceEnd": "0:07.155",
    "evidenceSentence": "I have /long straight/ blonde hair and /blue/ eyes."
  },
  {
    "id": "introduce_hannah_part1",
    "status": "published",
    "videoSrc": "assets/video/introduce_hannah.mp4",
    "videoEnd": "0:09.10",
    "title": "Hannah introduces herself",
    "transcript": "Hi I'm Hannah, I was born in Norway,I love /cycling and exploring outdoors/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Selam, ben Hannah, Norveç'te doğdum, /Bisiklet sürmeyi ve açıkhava keşiflerini/ çok severim."
      },
      {
        "id": "b",
        "text": "Hannah : Selam, ben Hannah, Norveç'te doğdum, At sürmeyi ve keşif yapmayı çok severim."
      }
    ],
    "easyDistractor": "Hannah : Selam, ben Hannah. İsveç'te doğdum. At sürmeyi ve açıkhava keşiflerini çok severim.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "hannah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "talking_about_hobbies",
    "theme": "introduction",
    "evidenceStart": "0:05.031",
    "evidenceEnd": "0:08.266",
    "evidenceSentence": "I love /cycling and exploring outdoors/"
  },
  {
    "id": "introduce_hannah_part2",
    "status": "published",
    "videoSrc": "assets/video/introduce_hannah.mp4",
    "videoStart": "0:09.5",
    "title": "Hannah introduces herself",
    "transcript": "Hannah : This is my horse, Storm, /Hope to see you soon/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Bu benim atım Storm, /Umarım en kısa sürede tekrar görüşürüz!/"
      },
      {
        "id": "b",
        "text": "Hannah : Bu benim atım Storm, Şimdi ata bineceğim!"
      }
    ],
    "easyDistractor": "Hannah : Bu benim atım Storm, Kendine iyi bak!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "hannah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "expressing_hopes",
    "theme": "introduction",
    "evidenceStart": "0:13.487",
    "evidenceEnd": null,
    "evidenceSentence": "/Hope to see you soon/"
  },
  {
    "id": "introduce_victoria_part1",
    "status": "published",
    "videoSrc": "assets/video/introduce_victoria.mp4",
    "videoEnd": "0:06.11",
    "title": "Victoria introduces herself",
    "transcript": "Hi I'm Victoria, I was born in /United Kingdom/, This is my hamster, Pixel.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Victoria : Selam, ben Victoria, /Birleşik Krallık/'da doğdum, Bu benim hamster'im, Pixel."
      },
      {
        "id": "b",
        "text": "Victoria : Selam, ben Victoria, Amerika Birleşik Devletlerin'de doğdum, Bu benim hamster'im, Pixel."
      }
    ],
    "easyDistractor": "Victoria : Selam, ben Victoria, İtalya'de doğdum, Bu benim hamster'im, Pixel.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "introductions",
    "theme": "introduction",
    "evidenceStart": "0:01.848",
    "evidenceEnd": "0:04.201",
    "evidenceSentence": "I was born in /United Kingdom/"
  },
  {
    "id": "introduce_victoria_part2",
    "status": "published",
    "videoSrc": "assets/video/introduce_victoria.mp4",
    "videoStart": "0:07.05",
    "videoEnd": "0:09.55",
    "title": "Victoria introduces herself",
    "transcript": "Victoria : I love /coding/ and /building new things./",
    "answerOptions": [
      {
        "id": "a",
        "text": "Victoria : Bilgisayar oynamayı ve yeni yerler keşfetmeyi çok severim."
      },
      {
        "id": "b",
        "text": "Victoria : /Kodlamayı/ ve /yeni şeyler inşa etmeyi/ çok severim."
      }
    ],
    "easyDistractor": "Victoria : Bilgisayar oynamayı ve LEGO ile uğramayı çok severim.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "talking_about_hobbies",
    "theme": "introduction",
    "evidenceStart": "0:07.037",
    "evidenceEnd": "0:09.523",
    "evidenceSentence": "Victoria : I love /coding/ and /building new things./"
  },
  {
    "id": "introduce_victoria_part3",
    "status": "published",
    "videoSrc": "assets/video/introduce_victoria.mp4",
    "videoStart": "0:10",
    "title": "Victoria introduces herself",
    "transcript": "Victoria : I enjoy /solving puzzles/ and playing chess.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Victoria : Tahta oyunlarından ve satranç oynamaktan hoşlanırım."
      },
      {
        "id": "b",
        "text": "Victoria : /Bulmaca çözmekten/ ve satranç oynamaktan hoşlanırım."
      }
    ],
    "easyDistractor": "Victoria : Bulmaca çözmeyi ve satranç oynamayı hiç sevmem.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "talking_about_hobbies",
    "theme": "introduction",
    "evidenceStart": "0:10.710",
    "evidenceEnd": "0:13.574",
    "evidenceSentence": "Victoria : I enjoy /solving puzzles/ and playing chess."
  },
  {
    "id": "introduce_ava_part1",
    "status": "published",
    "videoSrc": "assets/video/introduce_ava.mp4",
    "videoEnd": "0:06.11",
    "title": "Ava introduces herself",
    "transcript": "Hi I'm Ava, I was born in /Netherlands/, This is my dog, His name is Buddy.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Selam, ben Ava, İsviçre'de doğdum, Bu benim köpeğim, onun adı Buddy."
      },
      {
        "id": "b",
        "text": "Ava : Selam, ben Ava, /Hollanda/'da doğdum, Bu benim köpeğim, onun adı Buddy.."
      }
    ],
    "easyDistractor": "Ava : Selam, ben Ava, İsviçre'de doğdum, Bu benim köpeğim, onun adı Max..",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ava"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "introductions",
    "theme": "introduction",
    "evidenceStart": "0:01.540",
    "evidenceEnd": "0:03.435",
    "evidenceSentence": "I was born in /Netherlands/"
  },
  {
    "id": "introduce_ava_part2",
    "status": "published",
    "videoSrc": "assets/video/introduce_ava.mp4",
    "videoStart": "0:07.5",
    "title": "Ava introduces herself",
    "transcript": "Ava : I enjoy /taking care of animals/, and I enjoy /spending time in nature/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Hayvanlarla oynamaktan ve açıkhavada dolaşmaktan hoşlanırım."
      },
      {
        "id": "b",
        "text": "Ava : /Hayvanlarla ilgilenmekten/ ve /doğada vakit geçirmekten/ hoşlanırım."
      }
    ],
    "easyDistractor": "Ava : Hayvanlarla ilgilenmeyi ve doğada vakit geçirmeyi hiç sevmem.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ava"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "talking_about_hobbies",
    "theme": "introduction",
    "evidenceStart": "0:07.660",
    "evidenceEnd": "0:13.174",
    "evidenceSentence": "Ava : I enjoy /taking care of animals/, and I enjoy /spending time in nature/."
  },
  {
    "id": "introduce_zoe_part1",
    "status": "published",
    "videoSrc": "assets/video/introduce_zoe.mp4",
    "videoEnd": "0:03.7",
    "title": "Zoe introduces herself",
    "transcript": "Hi I'm Zoe, I was born in /Greece/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : Selam, ben Zoe, /Yunanistan/'da doğdum."
      },
      {
        "id": "b",
        "text": "Zoe : Selam, ben Zoe, Bulgaristan'da doğdum."
      }
    ],
    "easyDistractor": "Zoe : Selam, ben Zoe, Kenya'da doğdum.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "zoe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "introductions",
    "theme": "introduction",
    "evidenceStart": "0:02.012",
    "evidenceEnd": "0:03.709",
    "evidenceSentence": "Hi I'm Zoe, I was born in /Greece/."
  },
  {
    "id": "introduce_zoe_part2",
    "status": "published",
    "videoSrc": "assets/video/introduce_zoe.mp4",
    "videoStart": "0:06.2",
    "title": "Zoe introduces herself",
    "transcript": "Zoe : I love solving /crossword puzzles/. I enjoy /stargazing/",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe: Yapboz çözmeyi çok severim. Gecenin sessizliğini dinlemeyi severim."
      },
      {
        "id": "b",
        "text": "Zoe: /Bulmaca çözmeyi/ çok severim. /Yıldızları izleme/kten hoşlanırım."
      }
    ],
    "easyDistractor": "Zoe: Yapboz çözmeyi çok severim. Bir gün yıldızlara gitmeyi hayal ediyorum.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "zoe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "talking_about_hobbies",
    "theme": "introduction",
    "evidenceStart": "0:07.001",
    "evidenceEnd": "0:13.535",
    "evidenceSentence": "Zoe : I love solving /crossword puzzles/. I enjoy /stargazing/"
  },
  {
    "id": "introduce_benjamin_part1",
    "status": "published",
    "videoSrc": "assets/video/introduce_benjamin.mp4",
    "videoEnd": "0:04.3",
    "title": "Benjamin introduces herself",
    "transcript": "Hi I'm Benjamin, I was born in /Denmark/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Selam, ben Benjamin, Hollanda'da doğdum."
      },
      {
        "id": "b",
        "text": "Benjamin : Selam, ben Benjamin, /Danimarka'da/ doğdum."
      }
    ],
    "easyDistractor": "Benjamin : Selam, ben Benjamin, Türkiye'de doğdum.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "benjamin"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "introductions",
    "theme": "introduction",
    "evidenceStart": "0:02.224",
    "evidenceEnd": "0:04.030",
    "evidenceSentence": "/Danimarka'da/ doğdum."
  },
  {
    "id": "introduce_benjamin_part2",
    "status": "published",
    "videoSrc": "assets/video/introduce_benjamin.mp4",
    "videoStart": "0:04",
    "title": "Benjamin introduces himself",
    "transcript": "Benjamin : I love /riding my scooter/. I also enjoy /swimming/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : /Scooter'ımı sürmeyi/ çok severim. Ayrıca /yüzmekten de hoşlanıyorum/."
      },
      {
        "id": "b",
        "text": "Benjamin : Scooter'ımı hızlı sürmeyi seviyorum. Ayrıca yüzmede de iyiyim."
      }
    ],
    "easyDistractor": "Benjamin : Scooter sürmeyi sevmem ama hergün düzenli olarak yüzerim.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "benjamin"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "talking_about_hobbies",
    "theme": "introduction",
    "evidenceStart": "0:05.638",
    "evidenceEnd": "0:13.511",
    "evidenceSentence": "Benjamin : I love /riding my scooter/. I also enjoy /swimming/ "
  },
  {
    "id": "introduce_emma",
    "status": "published",
    "videoSrc": "assets/video/introduce_emma.mp4",
    "title": "Emma introduces herself and her favourite activities.",
    "transcript": "Emma : Hi, I'm Emma, I was born in /Japan/, I love /cooking and baking/, I enjoy doing science experiments and helping my friends, Hope to see you soon.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Selam, Ben Emma, Çin'de doğdum, Futbol oynamayı ve yüzmeyi seviyorum."
      },
      {
        "id": "b",
        "text": "Emma : Selam, Ben Emma, /Japonya'da/ doğdum, /Yemek yapmayı ve pasta yapmayı/ seviyorum"
      }
    ],
    "easyDistractor": "Emma : Selam, Ben Emma, Japonya'da doğdum, Yemek yapmayı seviyorum, Dans etmekten hoşlanıyorum.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "emma"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.925",
    "evidenceEnd": "0:07.674",
    "evidenceSentence": "I was born in /Japan/, I love /cooking and baking/"
  },
  {
    "id": "5_classroom_life_ella_olivia",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_ella_olivia.mp4",
    "title": "Ella asks Olivia about a dictionary in her bag.",
    "transcript": "Ella : /Is there/ a dictionary in your bag? Olivia : Yes, there is, You can borrow it.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Çantanda bir sözlük /var mı/? Olivia : Evet, Var, Ödünç alabilirsin."
      },
      {
        "id": "b",
        "text": "Ella : Sözlüğünü getirdin mi? Olivia : Evet getirdim, Ödünç alabilirsin."
      }
    ],
    "easyDistractor": "Ella : Çantanda cetvel var mı? Olivia : Evet, Var, Ödünç alabilirsin.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ella",
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_there_is_there_are"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:00.331",
    "evidenceEnd": "0:02.592",
    "evidenceSentence": "Ella : /Is there/ a dictionary in your bag?"
  },
  {
    "id": "introduce_daniel",
    "status": "published",
    "videoSrc": "assets/video/introduce_daniel.mp4",
    "title": "Daniel introduces himself and his favourite activities.",
    "transcript": "Daniel : Hi, I'm Daniel, I was born in Spain, I love riding my /scooter/, I love /skiing and snowboarding/, Hope to see you soon.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Selam, Ben Daniel, İspanya'da doğdum, Scooter sürmeyi seviyorum, Kayak yapmayı ve snowboard yapmayı seviyorum, Yakında görüşmek üzere."
      },
      {
        "id": "b",
        "text": "Daniel : Selam, Ben Daniel, İspanya'da doğdum, Bisiklete binmeyi seviyorum, Paten kaymayı ve kartopu oynamayı seviyorum, Yakında görüşmek üzere."
      }
    ],
    "easyDistractor": "Daniel : Selam, Ben Daniel, İspanya'da doğdum, Scooter sürmeyi seviyorum, Kayak yapmayı ve yüzmeyi seviyorum, Yakında görüşmek üzere.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "daniel"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:05.402",
    "evidenceEnd": "0:13.644",
    "evidenceSentence": "I love riding my /scooter/, I love /skiing and snowboarding/"
  },
  {
    "id": "introduce_david",
    "status": "published",
    "videoSrc": "assets/video/introduce_david.mp4",
    "title": "David introduces himself and his favourite activities.",
    "transcript": "David : Hi, I'm David, I was born in Mexico, I love travelling and discovering new places, I enjoy /camping/ with my friends, Hope to see you soon.",
    "answerOptions": [
      {
        "id": "a",
        "text": "David : Selam, Ben David, Meksika'da doğdum, Seyahat etmeyi ve yeni yerler keşfetmeyi seviyorum, Arkadaşlarımla yürüyüş yapmaktan hoşlanıyorum, Yakında görüşmek üzere."
      },
      {
        "id": "b",
        "text": "David : Selam, Ben David, Meksika'da doğdum, Seyahat etmeyi ve yeni yerler keşfetmeyi seviyorum, Arkadaşlarımla /kamp yapmaktan/ hoşlanıyorum, Yakında görüşmek üzere."
      }
    ],
    "easyDistractor": "David : Selam, Ben David, Meksika'da doğdum, Seyahat etmeyi seviyorum, Arkadaşlarımla kamp yapmaktan hoşlanıyorum, Yakında görüşmek üzere.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "david"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:11.434",
    "evidenceEnd": "0:13.692",
    "evidenceSentence": "I enjoy /camping/ with my friends"
  },
  {
    "id": "5_personal_life_appearance_ethan",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_ethan.mp4",
    "title": "Ethan describes his physical appearance.",
    "transcript": "Ethan : Hi, I'm Ethan, I have short /curly/ blonde hair and /blue/ eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ethan : Merhaba, ben Ethan, kısa /kıvırcık/ sarı saçlarım ve /mavi/ gözlerim var."
      },
      {
        "id": "b",
        "text": "Ethan : Merhaba, ben Ethan, kısa dalgalı sarı saçlarım ve yeşil gözlerim var."
      }
    ],
    "easyDistractor": "Ethan : Merhaba, ben Ethan, kısa sarı saçlarım ve yeşil gözlerim var.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ethan"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.424",
    "evidenceEnd": null,
    "evidenceSentence": "I have short /curly/ blonde hair and /blue/ eyes"
  },
  {
    "id": "introduce_ethan",
    "status": "published",
    "videoSrc": "assets/video/introduce_ethan.mp4",
    "title": "Ethan introduces himself and his favourite activities.",
    "transcript": "Ethan : Hi, I'm Ethan, I was born in England, I enjoy /playing the violin/ and /listening to classical music/, I also love playing golf, Hope to see you soon.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ethan : Selam, Ben Ethan, İngiltere'de doğdum, Gitar çalmaktan ve pop müzik dinlemekten hoşlanıyorum, Golf oynamayı da seviyorum, Yakında görüşmek üzere."
      },
      {
        "id": "b",
        "text": "Ethan : Selam, Ben Ethan, İngiltere'de doğdum, /Keman çalmaktan/ ve /klasik müzik dinlemekten/ hoşlanıyorum, Golf oynamayı da seviyorum, Yakında görüşmek üzere."
      }
    ],
    "easyDistractor": "Ethan : Selam, Ben Ethan, İngiltere'de doğdum, Keman çalmaktan ve klasik müzik dinlemekten hoşlanıyorum, Futbol oynamayı da seviyorum, Yakında görüşmek üzere.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ethan"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:05.993",
    "evidenceEnd": "0:09.450",
    "evidenceSentence": "I enjoy /playing the violin/ and /listening to classical music/"
  },
  {
    "id": "5_classroom_life_chloe_ella",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_chloe_ella.mp4",
    "title": "Ella checks the time before music begins.",
    "transcript": "Ella : Is it /two o'clock/ already? Chloe : Yes, it is, Music starts now.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Saat /iki/ oldu mu? Chloe : Evet, Oldu, Müzik şimdi başlıyor."
      },
      {
        "id": "b",
        "text": "Ella : Saat ikiyi çeyrek geçti mi? Chloe : Evet, geçti, Müzik biraz sonra başlıyor."
      }
    ],
    "easyDistractor": "Ella : Saat üç oldu mu bile? Chloe : Evet, Oldu, Müzik şimdi başlıyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "chloe",
      "ella"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "telling_time"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:00.636",
    "evidenceEnd": "0:02.406",
    "evidenceSentence": "Ella : Is it /two o'clock/ already?"
  },
  {
    "id": "5_personal_life_appearance_emma",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_emma.mp4",
    "title": "Emma describes her physical appearance.",
    "transcript": "Emma : Hi, I'm Emma, I have /long straight/ black hair and /brown/ eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Merhaba, ben Emma, orta uzunlukta düz siyah saçlarım ve yeşil gözlerim var."
      },
      {
        "id": "b",
        "text": "Emma : Merhaba, ben Emma, /uzun düz/ siyah saçlarım ve /kahverengi/ gözlerim var."
      }
    ],
    "easyDistractor": "Emma : Merhaba, ben Emma, uzun siyah saçlarım ve mavi gözlerim var.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "emma"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.591",
    "evidenceEnd": "0:06.352",
    "evidenceSentence": "I have /long straight/ black hair and /brown/ eyes."
  },
  {
    "id": "5_classroom_life_hannah_mia",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_hannah_mia.mp4",
    "title": "Hannah and Mia check the time before hurrying.",
    "transcript": "Hannah : What time is it now? Mia : It's /twenty past ten/. Hannah : We should hurry!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Şimdi saat kaç? Mia : Saat /onu yirmi geçiyor/. Hannah : Acele etmeliyiz!"
      },
      {
        "id": "b",
        "text": "Hannah : Şimdi saat kaç? Mia : Saat onu çeyrek geçiyor. Hannah : Acele etmeliyiz!"
      }
    ],
    "easyDistractor": "Hannah : Şimdi saat kaç? Mia : Saat on. Hannah : Acele etmeliyiz!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "hannah",
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "telling_time"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:01.677",
    "evidenceEnd": "0:03.137",
    "evidenceSentence": "Mia : It's /twenty past ten/"
  },
  {
    "id": "introduce_jack",
    "status": "published",
    "videoSrc": "assets/video/introduce_jack.mp4",
    "title": "Jack introduces himself and his favourite outdoor activities.",
    "transcript": "Jack : Hi, I'm Jack, I was born in Scotland, I love gardening, I enjoy fishing and /hiking/, Hope to see you soon.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Jack : Selam, Ben Jack, İskoçya'da doğdum, Bahçıvanlık yapmayı seviyorum, Balık tutmaktan ve kamp yapmaktan hoşlanıyorum, Yakında görüşmek üzere."
      },
      {
        "id": "b",
        "text": "Jack : Selam, Ben Jack, İskoçya'da doğdum, Bahçıvanlık yapmayı seviyorum, Balık tutmaktan ve /yürüyüş yapmaktan/ hoşlanıyorum, Yakında görüşmek üzere."
      }
    ],
    "easyDistractor": "Jack : Selam, Ben Jack, İskoçya'da doğdum, Bahçıvanlık yapmayı seviyorum, Balık tutmaktan hoşlanıyorum, Yakında görüşmek üzere.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "jack"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:09.330",
    "evidenceEnd": "0:11.999",
    "evidenceSentence": "I enjoy fishing and /hiking/"
  },
  {
    "id": "introduce_lucas",
    "status": "published",
    "videoSrc": "assets/video/introduce_lucas.mp4",
    "title": "Lucas introduces himself and his favourite sports.",
    "transcript": "Lucas : Hi, I'm Lucas, I was born in Brazil, I love playing /football/, I also enjoy swimming, Hope to see you soon.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Lucas : Selam, Ben Lucas, Brezilya'da doğdum, /Futbol/ oynamayı seviyorum, Yüzmekten de hoşlanıyorum, Yakında görüşmek üzere."
      },
      {
        "id": "b",
        "text": "Lucas : Selam, Ben Lucas, Brezilya'da doğdum, Basketbol oynamayı seviyorum, Yüzmekten de hoşlanıyorum, Yakında görüşmek üzere."
      }
    ],
    "easyDistractor": "Lucas : Selam, Ben Lucas, Brezilya'da doğdum, Futbol oynamayı seviyorum, Koşmaktan da hoşlanıyorum, Yakında görüşmek üzere.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "lucas"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:05.203",
    "evidenceEnd": "0:07.013",
    "evidenceSentence": "I love playing /football/"
  },
  {
    "id": "5_classroom_zoe_hannah",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_zoe_hannah.mp4",
    "title": "Hannah asks Zoe when lunch break begins.",
    "transcript": "Hannah : /What time/ does lunch break start? Zoe : At /ten past twelve/. Hannah : Great! I'm so hungry.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Öğle arası /saat kaçta/ başlıyor? Zoe : /On ikiyi on geçe/. Hannah : Harika, Çok acıktım."
      },
      {
        "id": "b",
        "text": "Hannah : Öğle arası ne zaman başlıyor? Zoe : Onu oniki geçe. Hannah : Harika, Çok acıktım."
      }
    ],
    "easyDistractor": "Hannah : Öğle arası kaçta başlıyor? Zoe : Saat on ikide. Hannah : Harika, Çok acıktım.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "hannah",
      "zoe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_wh_questions_what_time",
      "telling_time"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:00.621",
    "evidenceEnd": "0:03.976",
    "evidenceSentence": "Hannah : /What time/ does lunch break start? Zoe : At /ten past twelve/."
  },
  {
    "id": "5_classroom_life_chloe_noah",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_chloe_noah.mp4",
    "title": "Chloe and Noah check when double science starts.",
    "transcript": "Chloe : /What time/ does double science start? Noah : At /half past ten/. Chloe : Oh no, That's now, Thanks!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Çift fen dersi ne zaman başlıyor? Noah : Saat onu yirmi geçe. Chloe : Oh hayır, Şimdi başlıyor, Teşekkürler!"
      },
      {
        "id": "b",
        "text": "Chloe : Çift fen dersi /saat kaçta/ başlıyor? Noah : Saat /on buçukta/. Chloe : Oh hayır, Şimdi başlıyor, Teşekkürler!"
      }
    ],
    "easyDistractor": "Chloe : Çift fen dersi kaçta başlıyor? Noah : Saat onda. Chloe : Oh hayır, Şimdi başlıyor, Teşekkürler!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe",
      "noah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_wh_questions_what_time",
      "telling_time"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:03.680",
    "evidenceSentence": "Chloe : /What time/ does double science start? Noah : At /half past ten/"
  },
  {
    "id": "5_personal_life_appearance_ella",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_ella.mp4",
    "title": "Ella describes her physical appearance.",
    "transcript": "Ella : Hi, I'm Ella, I have shoulder-length /wavy blonde/ hair and green eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Merhaba, ben Ella, /omuz hizasında dalgalı/ sarı saçlarım ve yeşil gözlerim var."
      },
      {
        "id": "b",
        "text": "Ella : Merhaba, ben Ella, uzun düz sarı saçlarım ve yeşil gözlerim var."
      }
    ],
    "easyDistractor": "Ella : Merhaba, ben Ella, kısa sarı saçlarım ve mavi gözlerim var.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ella"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.015",
    "evidenceEnd": "0:04.748",
    "evidenceSentence": "I have shoulder-length /wavy blonde/ hair"
  },
  {
    "id": "introduce_noah",
    "status": "published",
    "videoSrc": "assets/video/introduce_noah.mp4",
    "title": "Noah introduces himself and his favourite activities.",
    "transcript": "Noah : Hi, I'm Noah, I was born in Germany, I love studying and learning new things, I enjoy /playing chess/ and solving puzzles, Hope to see you soon.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : Selam, Ben Noah, Almanya'da doğdum, Ders çalışmayı ve yeni şeyler öğrenmeyi seviyorum, /satranç oynamaktan/ ve bulmaca çözmekten hoşlanıyorum, Yakında görüşmek üzere."
      },
      {
        "id": "b",
        "text": "Noah : Selam, Ben Noah, Almanya'da doğdum, Ders çalışmayı ve yeni şeyler öğrenmeyi seviyorum, futbol oynamaktan ve bulmaca çözmekten hoşlanıyorum, Yakında görüşmek üzere."
      }
    ],
    "easyDistractor": "Noah : Selam, Ben Noah, Almanya'da doğdum, Ders çalışmayı ve yeni şeyler öğrenmeyi seviyorum, Satranç oynamaktan hoşlanıyorum, Yakında görüşmek üzere.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "noah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introductions",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:09.851",
    "evidenceEnd": "0:13.098",
    "evidenceSentence": "I enjoy /playing chess/ and solving puzzles"
  },
  {
    "id": "classroom_life_emma_david",
    "status": "published",
    "videoSrc": "assets/video/classroom_life_emma_david.mp4",
    "title": "Emma and David collect worksheets in the classroom.",
    "transcript": "Emma : The worksheets /are/ fly/ing/ everywhere, David : I've got the last one!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Çalışma kağıtları dışarı uçtu, David : Sonuncusunu bende!"
      },
      {
        "id": "b",
        "text": "Emma : Çalışma kağıtları her yere uçuşu/yor/, David : Sonuncusu bende!"
      }
    ],
    "easyDistractor": "Emma : Çalışma kağıtları her yere uçuşuyor! David : İlkini aldım!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "emma",
      "david"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:04.820",
    "evidenceEnd": "0:07.188",
    "evidenceSentence": "Emma : The worksheets /are/ fly/ing/ everywhere,"
  },
  {
    "id": "5_personal_life_chloe_emma",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_chloe_emma.mp4",
    "title": "Emma asks Chloe about her piano habit.",
    "transcript": "Emma : You play the piano every evening, /don't you/? Chloe : Yes, I do.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Her akşam piyano çalarsın, /öyle değil mi/? Chloe : Evet, çalarım."
      },
      {
        "id": "b",
        "text": "Emma : Her akşam piyano çalar mısın? Chloe : Evet, çalarım."
      }
    ],
    "easyDistractor": "Emma : Her akşam piyano çalarsın, öyle değil mi? Chloe : Hayır, çalmam.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "chloe",
      "emma",
      "luna"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_simple_present_tense_for_habbits",
      "tag_questions"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:03.146",
    "evidenceSentence": "Emma : You play the piano every evening, /don't you/?"
  },
  {
    "id": "5_personal_life_appearance_david",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_david.mp4",
    "title": "David describes his physical appearance.",
    "transcript": "David : Hi, I'm David, I have very short /black/ hair and /brown/ eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "David : Merhaba, ben David, çok kısa kahverengi saçlarım ve siyah gözlerim var."
      },
      {
        "id": "b",
        "text": "David : Merhaba, ben David, çok kısa /siyah/ saçlarım ve /kahverengi/ gözlerim var."
      }
    ],
    "easyDistractor": "David : Merhaba, ben David, kısa siyah saçlarım ve yeşil gözlerim var.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "david"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.551",
    "evidenceEnd": "0:06.523",
    "evidenceSentence": "I have very short /black/ hair and /brown/ eyes"
  },
  {
    "id": "5_personal_life_daniel_benjamin",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_daniel_benjamin.mp4",
    "title": "Benjamin asks Daniel about his scooter routine.",
    "transcript": "Benjamin : How often do you ride your scooter? Daniel : I ride it /every afternoon/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Scooterını ne sıklıkla sürersin? Daniel : /Her öğleden sonra/ sürerim."
      },
      {
        "id": "b",
        "text": "Benjamin : Scooterını ne sıklıkla sürersin? Daniel : Bazen öğleden sonraları sürerim."
      }
    ],
    "easyDistractor": "Benjamin : Scooterını ne sıklıkla sürersin? Daniel : Bazen sabahları sürerim.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "daniel",
      "benjamin"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "frequency_adverbs"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:02.015",
    "evidenceEnd": "0:04.158",
    "evidenceSentence": "Daniel : I ride it /every afternoon/"
  },
  {
    "id": "5_personal_life_ella_chloe",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_ella_chloe.mp4",
    "title": "Ella asks Chloe about eating cupcakes for breakfast.",
    "transcript": "Ella : Do you eat cupcakes for breakfast? Chloe : No, I /rarely/ eat /them/ in the morning.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Kahvaltıda cupcake yer misin? Chloe : Hayır, sabahları onu bazen yerim."
      },
      {
        "id": "b",
        "text": "Ella : Kahvaltıda cupcake yer misin? Chloe : Hayır, sabahları /onları nadiren/ yerim."
      }
    ],
    "easyDistractor": "Ella : Kahvaltıda cupcake yer misin? Chloe : Hayır, onları sadece akşam yerim.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ella",
      "chloe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "frequency_adverbs",
      "use_of_object_pronouns"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:02.314",
    "evidenceEnd": "0:05.711",
    "evidenceSentence": "Chloe : No, I /rarely/ eat /them/ in the morning."
  },
  {
    "id": "5_personal_life_appearance_daniel",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_daniel.mp4",
    "title": "Daniel describes his physical appearance.",
    "transcript": "Daniel : Hi, I'm Daniel, I have /shoulder-length/ straight black hair and /thick eyebrows/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Merhaba, ben Daniel, kısa düz siyah saçlarım ve ince kaşlarım var."
      },
      {
        "id": "b",
        "text": "Daniel : Merhaba, ben Daniel, /omuz hizasında/ düz siyah saçlarım ve /gür kaşlarım/ var."
      }
    ],
    "easyDistractor": "Daniel : Merhaba, ben Daniel, omuz hizasında siyah saçlarım ve ince kaşlarım var.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "daniel"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.986",
    "evidenceSentence": "I have /shoulder-length/ straight black hair and /thick eyebrows/."
  },
  {
    "id": "5_personal_life_appearance_ava",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_ava.mp4",
    "title": "Ava describes her physical appearance.",
    "transcript": "Ava : Hi, I'm Ava, I have /shoulder-length/ curly black hair and /green/ eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Merhaba, ben Ava, uzun kıvırcık kahverengi saçlarım ve mavi gözlerim var."
      },
      {
        "id": "b",
        "text": "Ava : Merhaba, ben Ava, /omuz hizasında/ kıvırcık siyah saçlarım ve /yeşil/ gözlerim var."
      }
    ],
    "easyDistractor": "Ava : Merhaba, ben Ava, kısa siyah saçlarım ve yeşil gözlerim var.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ava"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.957",
    "evidenceSentence": "I have /shoulder-length/ curly black hair and /green/ eyes."
  },
  {
    "id": "5_personal_life_appearance_chloe",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_chloe.mp4",
    "title": "Chloe describes her physical appearance.",
    "transcript": "Chloe : Hi, I'm Chloe, I have long /curly/ blonde hair and blue eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Merhaba, ben Chloe, kısa düz sarı saçlarım ve yeşil gözlerim var."
      },
      {
        "id": "b",
        "text": "Chloe : Merhaba, ben Chloe, uzun /kıvırcık/ sarı saçlarım ve mavi gözlerim var."
      }
    ],
    "easyDistractor": "Chloe : Merhaba, ben Chloe, kısa düz sarı saçlarım ve mavi gözlerim var.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.243",
    "evidenceEnd": "0:04.777",
    "evidenceSentence": "I have long /curly/ blonde hair"
  },
  {
    "id": "5_personal_life_appearance_benjamin",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_appearance_benjamin.mp4",
    "title": "Benjamin describes his physical appearance.",
    "transcript": "Benjamin : Hi, I'm Benjamin, I have /short straight blonde hair/ and /blue/ eyes.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Merhaba, ben Benjamin, kısa kıvırcık sarı saçlarım ve kahverengi gözlerim var."
      },
      {
        "id": "b",
        "text": "Benjamin : Merhaba, ben Benjamin, /kısa düz sarı saçlarım/ ve /mavi/ gözlerim var."
      }
    ],
    "easyDistractor": "Benjamin : Merhaba, ben Benjamin, kısa sarı saçlarım ve yeşil gözlerim var.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "benjamin"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_physical_appearance"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.402",
    "evidenceEnd": null,
    "evidenceSentence": "Benjamin : I have /short straight blonde hair/ and /blue/ eyes."
  },
  {
    "id": "5_personal_life_ava_olivia",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_ava_olivia.mp4",
    "title": "Ava notices yellow paint on Olivia's nose.",
    "transcript": "Ava : Do you paint in the evenings? Olivia : I sometimes paint before bed. Ava : There is a yellow paint on your nose.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Akşamları resim yapar mısın? Olivia : /Bazen/ yatmadan önce resim yaparım. Ava : Burnunda sarı boya /var/."
      },
      {
        "id": "b",
        "text": "Ava : Akşamları resim yapar mısın? Olivia : Her sabah resim yaparım. Ava : Burnun sarıya boyanmış."
      }
    ],
    "easyDistractor": "Ava : Akşamları resim yapar mısın? Olivia : Hiç resim yapmam. Ava : Burnunda boya yok.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ava",
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_there_is_there_are",
      "frequency adverbs"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:05.669",
    "evidenceEnd": "0:08.614",
    "evidenceSentence": "Ava : /There is/ a yellow paint on your nose."
  },
  {
    "id": "5_personal_life_emma_mia",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_emma_mia.mp4",
    "title": "Mia asks Emma about baking cookies.",
    "transcript": "Mia : How often do you bake cookies? Emma : I usually bake on Sundays. Mia : What's that smell? Emma : Oh my god it is burning!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Ne sıklıkla kurabiye yaparsın? Emma : Genellikle /pazar/ günleri yaparım. Mia : Bu koku ne? Emma : Aman Tanrım, yanıyor!"
      },
      {
        "id": "b",
        "text": "Mia : Ne sıklıkla kurabiye yaparsın? Emma : Genellikle pazartesi günleri yaparım. Mia : Bu koku ne? Emma : Aman Tanrım, yanıyor!"
      }
    ],
    "easyDistractor": "Mia : Ne sıklıkla kurabiye yaparsın? Emma : Genellikle pazar günleri yaparım. Mia : Bu koku ne? Emma : Aman Tanrım, fırın kapalı!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "emma",
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "frequency_adverbs"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:02.243",
    "evidenceEnd": "0:04.299",
    "evidenceSentence": "Emma : I usually bake on /Sundays/."
  },
  {
    "id": "5_personal_life_olivia_chloe",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_olivia_chloe.mp4",
    "title": "Olivia asks Chloe about Luna's toy mouse.",
    "transcript": "Olivia : Is that Luna's toy mouse? Chloe : Yes, it's her favorite toy.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : Bu Luna'nın oyuncağı mı? Chloe : Hayır, o benim en sevdiğim oyuncak."
      },
      {
        "id": "b",
        "text": "Olivia : Bu Luna'nın oyuncak faresi mi? Chloe : Evet, /onun/ en sevdiği oyuncak."
      }
    ],
    "easyDistractor": "Olivia : Bu Luna'nın oyuncak faresi mi? Chloe : Hayır, onun en sevdiği oyuncak değil.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe",
      "olivia",
      "luna"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "possessive_adjective"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:02.520",
    "evidenceEnd": "0:04.524",
    "evidenceSentence": "Chloe : Yes, it's /her/ favorite toy."
  },
  {
    "id": "5_personal_life_zoe_mia",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_zoe_mia.mp4",
    "title": "Mia asks Zoe about her telescope.",
    "transcript": "Mia : Is this your telescope? Zoe : Yes, my father bought it. Mia : Can I use it? Zoe : sure",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Bu senin teleskobun mu? Zoe : Evet, /babam/ aldı. Mia : Kullanabilir miyim? Zoe : Tabii."
      },
      {
        "id": "b",
        "text": "Mia : Bu senin teleskobun mu? Zoe : Evet, arkadaşım aldı. Mia : Kullanabilir miyim? Zoe : Tabii."
      }
    ],
    "easyDistractor": "Mia : Bu senin teleskobun mu? Zoe : Evet, babam aldı. Mia : Kullanabilir miyim? Zoe : Hayır.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "zoe",
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "possessive_adjective"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:02",
    "evidenceEnd": "0:03",
    "evidenceSentence": "Yes, /my father/ bought it"
  },
  {
    "id": "5_personal_life_david_daniel",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_david_daniel.mp4",
    "title": "Daniel asks David about his holiday photos.",
    "transcript": "Daniel : Are these your photos? David : Yes, I was 7 years old in that picture. Daniel : You were very cute",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Bunlar senin fotoğrafların mı? David : Evet, o fotoğrafta 12 yaşındaydım. Daniel : Çok şirinmişsin."
      },
      {
        "id": "b",
        "text": "Daniel : Bunlar senin fotoğrafların mı? David : Evet, o fotoğrafta /7/ yaşındaydım. Daniel : Çok şirinmişsin."
      }
    ],
    "easyDistractor": "Daniel : Bunlar senin fotoğrafların mı? David : Evet, o fotoğrafta 7 yaşındaydım. Daniel : Çok uzunmuşsun.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "david",
      "daniel"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "possessive_adjective"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:02",
    "evidenceEnd": "0:04.5",
    "evidenceSentence": "Yes,I was /seven/ years old in that picture"
  },
  {
    "id": "5_family_life_hannah_lars",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_hannah_lars.mp4",
    "title": "Hannah asks Lars about the camping bags.",
    "transcript": "Hannah : What are you packing, Dad? Lars : I'm /preparing/ our camping bags. Hannah : We /are going/ camping, Yeyy!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Ne hazırlıyorsun, baba? Lars : Kamp çantalarımızı /hazırlıyorum/. Hannah : Kamp yapacağız, Yaşasın!"
      },
      {
        "id": "b",
        "text": "Hannah : Ne hazırlıyorsun, baba? Lars : Kamp çantalarımızı hazırlayacağım. Hannah : Kampa gidiyoruz, Yaşasın!"
      }
    ],
    "easyDistractor": "Hannah : Ne hazırlıyorsun, baba? Lars : Kamp çantalarımızı hazırlıyorum. Hannah : Evde mi kalıyoruz, Yaşasın!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "hannah",
      "lars"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive"
    ],
    "theme": "family_life",
    "evidenceStart": "0:02.857",
    "evidenceEnd": "0:07.665",
    "evidenceSentence": "Lars : I'm /preparing/ our camping bags. Hannah : We /are going/ camping, Yeyy!"
  },
  {
    "id": "5_classroom_life_olivia",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_olivia.mp4",
    "title": "Olivia hurries to finish her drawing but pours the paint bottle.",
    "transcript": "Olivia : /What time/ does the lesson finish? Teacher : At quarter past two. Olivia : I must hurry!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : Ders /saat kaçta/ bitecek? Öğretmen : İkiyi çeyrek geçe. Olivia : Acele etmeliyim!"
      },
      {
        "id": "b",
        "text": "Olivia : Sonraki ders ne zaman başlayacak? Öğretmen : İkiyi çeyrek geçe. Olivia : Acele etmeliyim!"
      }
    ],
    "easyDistractor": "Öğretmen : Olivia, Konuşmak için ayağa kalk. Olivia : Tamam!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "askinginformationabouttime"
    ],
    "theme": "School_life",
    "evidenceStart": "0:01.344",
    "evidenceEnd": "0:02.985",
    "evidenceSentence": "Olivia : /What time/ does the lesson finish?"
  },
  {
    "id": "introduce_family_chloe_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_chloe.mp4",
    "title": "Chloe introduces her family and Luna.",
    "videoStart": "0:00",
    "videoEnd": "0:07",
    "transcript": "Chloe : Hi, this is my family, my mum is Camille, she’s a /baker/, and she loves /growing flowers/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Merhaba, bu benim ailem, annem Camille, o bir öğretmen ve çiçekleri çok seviyor."
      },
      {
        "id": "b",
        "text": "Chloe : Merhaba, bu benim ailem, annem Camille, o bir /fırıncı/ ve /çiçek yetiştirmeyi/ seviyor."
      }
    ],
    "easyDistractor": "Chloe : Merhaba, bu benim ailem, annem Camille, o bir öğretmen ve müzeleri ziyaret etmeyi seviyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe",
      "camille",
      "julien"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.383",
    "evidenceEnd": "0:06.700",
    "evidenceSentence": "Chloe : My mum is Camille, she’s a /baker/, and she loves /growing flowers/."
  },
  {
    "id": "introduce_family_chloe_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_chloe.mp4",
    "title": "Chloe introduces her family and Luna.",
    "videoStart": "0:07",
    "videoEnd": "0:15",
    "transcript": "Chloe : My dad is Julien, he’s an /interior designer/, and he loves /visiting museums/, and this is Luna, my cat.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Babam Julien, o bir aşçı ve müzeleri ziyaret etmeyi seviyor, bu da kedim Luna."
      },
      {
        "id": "b",
        "text": "Chloe : Babam Julien, o bir /iç mimar/ ve /müzeleri ziyaret etmeyi/ seviyor, bu da kedim Luna."
      }
    ],
    "easyDistractor": "Chloe :Babam Julien, o bir iç mimar ve çiçek yetiştirmeyi seviyor, bu da köpeğim Luna.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe",
      "camille",
      "julien"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:07.130",
    "evidenceEnd": "0:12.435",
    "evidenceSentence": "Chloe : My dad is Julien, he’s an /interior designer/, and he loves /visiting museums/"
  },
  {
    "id": "introduce_family_benjamin_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_benjamin.mp4",
    "title": "Benjamin introduces his family.",
    "videoStart": "0:00",
    "videoEnd": "0:08.192",
    "transcript": "Benjamin : Hi, this is my family, my mum is Emily, she’s a /travel agent/, and she loves /taking photos/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Merhaba, bu benim ailem, annem Emily, o bir /seyahat acentesi/ ve /fotoğraf çekmeyi/ seviyor."
      },
      {
        "id": "b",
        "text": "Benjamin : Merhaba, bu benim ailem, annem Emily, o bir yüzme antrenörü ve bisiklete binmeyi seviyor."
      }
    ],
    "easyDistractor": "Benjamin : Merhaba, bu benim ailem, annem Emily, o bir öğretmen ve yüzmeyi seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "benjamin",
      "emily",
      "oliver"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.451",
    "evidenceEnd": "0:08.192",
    "evidenceSentence": "Benjamin : My mum is Emily, she’s a /travel agent/, and she loves /taking photos/."
  },
  {
    "id": "introduce_family_benjamin_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_benjamin.mp4",
    "title": "Benjamin introduces his family.",
    "videoStart": "0:08.192",
    "videoEnd": "0:15",
    "transcript": "Benjamin : My dad is Oliver, he’s a /swimming coach/, and he loves /cycling/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Babam Oliver, o bir /yüzme antrenörü/ ve /bisiklete binmeyi/ seviyor."
      },
      {
        "id": "b",
        "text": "Benjamin : Babam Oliver, o bir seyahat acentesi ve fotoğraf çekmeyi seviyor."
      }
    ],
    "easyDistractor": "Benjamin : Babam Oliver, o bir muhasebeci ve fotoğraf çekmeyi seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "benjamin",
      "emily",
      "oliver"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:08.634",
    "evidenceEnd": null,
    "evidenceSentence": "Benjamin : My dad is Oliver, he’s a /swimming coach/, and he loves /cycling/."
  },
  {
    "id": "introduce_family_ava_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_ava.mp4",
    "title": "Ava introduces her family and Buddy.",
    "videoStart": "0:00",
    "videoEnd": "0:06.602",
    "transcript": "Ava : Hi, this is my family, My mum is Amina, She’s a /veterinarian/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Merhaba, bu benim ailem, annem Amina, o bir eczacı."
      },
      {
        "id": "b",
        "text": "Ava : Merhaba, bu benim ailem, annem Amina, o bir /veteriner/."
      }
    ],
    "easyDistractor": "Ava : Merhaba, bu benim ailem, annem Amina, o bir öğretmen.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ava",
      "amina"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.566",
    "evidenceEnd": "0:05.744",
    "evidenceSentence": "My mum is Amina, She’s a /veterinarian/."
  },
  {
    "id": "introduce_family_ava_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_ava.mp4",
    "title": "Ava introduces her family and Buddy.",
    "videoStart": "0:06.602",
    "videoEnd": "0:15",
    "transcript": "Ava : My dad is David, he’s a /wildlife photographer/, and this is our dog, Buddy.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Babam David, o bir veteriner, bu da köpeğimiz Buddy."
      },
      {
        "id": "b",
        "text": "Ava : Babam David, o bir /vahşi yaşam fotoğrafçısı/, bu da köpeğimiz Buddy."
      }
    ],
    "easyDistractor": "Ava : Babam David, o bir kasap, bu bizim köpeğimiz Buddy.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ava",
      "amina",
      "david_ava"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:06.544",
    "evidenceEnd": "0:10.301",
    "evidenceSentence": "Ava : My dad is David, he’s a /wildlife photographer/."
  },
  {
    "id": "introduce_family_daniel_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_daniel.mp4",
    "videoStart": "0:01",
    "videoEnd": "0:10",
    "title": "Daniel introduces his mother.",
    "transcript": "Daniel : Hi, this is my family, my mum is Elena, she’s a /drama teacher/, and she loves /singing songs/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Merhaba, bu benim ailem, annem Elena, o bir /drama öğretmeni/ ve /şarkı söylemeyi/ seviyor."
      },
      {
        "id": "b",
        "text": "Daniel : Merhaba, bu benim ailem, annem Elena, o bir müzik öğretmeni ve şarkı yazmayı seviyor."
      }
    ],
    "easyDistractor": "Daniel : Merhaba, bu benim ailem, annem Elena, o bir drama öğretmeni ve balık tutmayı seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "daniel",
      "elena",
      "javier"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:01.294",
    "evidenceEnd": "0:09.874",
    "evidenceSentence": "My mum is Elena, she’s a /drama teacher/, and she loves /singing songs/."
  },
  {
    "id": "introduce_family_daniel_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_daniel.mp4",
    "videoStart": "0:10",
    "videoEnd": "0:15.083",
    "title": "Daniel introduces his father.",
    "transcript": "Daniel : My dad is Javier, he’s a /mechanic/, and he loves /fishing/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Babam Javier, o bir drama öğretmeni ve şarkı söylemeyi seviyor."
      },
      {
        "id": "b",
        "text": "Daniel : Babam Javier, o bir /tamirci/ ve /balık tutmayı/ seviyor."
      }
    ],
    "easyDistractor": "Daniel : Babam Javier, o bir tamirci ve bisiklete binmeyi seviyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "daniel",
      "javier",
      "elena"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:10",
    "evidenceEnd": null,
    "evidenceSentence": "Daniel : My dad is Javier, he’s a /mechanic/, and he loves /fishing/."
  },
  {
    "id": "introduce_family_david_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_david.mp4",
    "videoStart": "0:00",
    "videoEnd": "0:07.456",
    "title": "David introduces his mother.",
    "transcript": "David : Hi, this is my family, my mum is Valeria, she’s a /hotel manager/, and she loves /dancing/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "David : Merhaba, bu benim ailem, annem Valeria, o bir /otel müdürü/ ve /dans etmeyi/ seviyor."
      },
      {
        "id": "b",
        "text": "David : Merhaba, bu benim ailem, annem Valeria, o bir deniz kaptanı ve gitar çalmayı seviyor."
      }
    ],
    "easyDistractor": "David : Merhaba, bu benim ailem, annem Valeria, o bir otel müdürü ve gitar çalmayı seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "david",
      "valeria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.615",
    "evidenceEnd": "0:07.370",
    "evidenceSentence": "My mum is Valeria, she’s a /hotel manager/, and she loves /dancing/."
  },
  {
    "id": "introduce_family_david_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_david.mp4",
    "videoStart": "0:07.456",
    "videoEnd": "0:15.083",
    "title": "David introduces his father.",
    "transcript": "David : My dad was Alejandro, he was a /sea captain/, and he loved /playing the guitar/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "David : Babam Alejandro idi, o bir otel müdürüydü ve dans etmeyi severdi."
      },
      {
        "id": "b",
        "text": "David : Babam Alejandro idi, o bir /kaptandı/ ve /gitar çalmayı/ severdi."
      }
    ],
    "easyDistractor": "David : Babam Alejandro idi, o bir deniz kaptanıydı ve balık tutmayı severdi.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "david",
      "alejandro"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:09.894",
    "evidenceEnd": null,
    "evidenceSentence": "My dad was Alejandro, he was a /sea captain/, and he loved /playing the guitar/."
  },
  {
    "id": "introduce_family_ella_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_ella.mp4",
    "videoStart": "0:00",
    "videoEnd": "0:06.861",
    "title": "Ella introduces her mother.",
    "transcript": "Ella : Hi, this is my family, my mum is Charlotte, she’s a /music teacher/ and loves /playing the piano/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Merhaba, bu benim ailem, annem Charlotte, o bir /müzik öğretmeni/ ve /piyano çalmayı/ seviyor."
      },
      {
        "id": "b",
        "text": "Ella : Merhaba, bu benim ailem, annem Charlotte, o bir drama öğretmeni ve müzik dinlemeyi seviyor."
      }
    ],
    "easyDistractor": "Ella : Merhaba, bu benim ailem, annem Charlotte, o bir müzik öğretmeni ve gitar çalmayı seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ella",
      "charlotte"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.504",
    "evidenceEnd": "0:06.807",
    "evidenceSentence": "My mum is Charlotte, she’s a /music teacher/ and loves /playing the piano/."
  },
  {
    "id": "introduce_family_ella_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_ella.mp4",
    "videoStart": "0:06.861",
    "videoEnd": "0:15.083",
    "title": "Ella introduces her father and Sunny.",
    "transcript": "Ella : My dad is Liam, he’s a /radio presenter/ and loves /listening to music/, and this is Sunny, my parrot.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Babam Liam, o bir müzik öğretmeni ve piyano çalmayı seviyor, bu da kedim Sunny."
      },
      {
        "id": "b",
        "text": "Ella : Babam Liam, o bir /radyo sunucusu/ ve /müzik dinlemeyi/ seviyor, bu da papağanım Sunny."
      }
    ],
    "easyDistractor": "Ella : Babam Liam, o bir radyo sunucusu ve bisiklete binmeyi seviyor, bu da papağanım Sunny.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ella",
      "liam",
      "sunny"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:07.139",
    "evidenceEnd": "0:11.757",
    "evidenceSentence": "Ella : My dad is Liam, he’s a /radio presenter/ and loves /listening to music/."
  },
  {
    "id": "introduce_family_emma_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_emma.mp4",
    "videoStart": "0:00",
    "videoEnd": "0:07.199",
    "title": "Emma introduces her mother.",
    "transcript": "Emma : Hi, this is my family, my mum is Sophie, she’s a /nurse/ and loves /gardening/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Merhaba, bu benim ailem, annem Sophie, o bir /hemşire/ ve /bahçeyle ilgilenmeyi/ seviyor."
      },
      {
        "id": "b",
        "text": "Emma : Merhaba, bu benim ailem, annem Sophie, o bir eczacı ve kutu oyunları oynamayı seviyor."
      }
    ],
    "easyDistractor": "Emma : Merhaba, bu benim ailem, annem Sophie, o bir hemşire ve kutu oyunları oynamayı seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "emma",
      "sophie"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.758",
    "evidenceEnd": "0:07.217",
    "evidenceSentence": "My mum is Sophie, she’s a /nurse/ and loves /gardening/."
  },
  {
    "id": "introduce_family_emma_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_emma.mp4",
    "videoStart": "0:08.174",
    "videoEnd": "0:15.083",
    "title": "Emma introduces her father.",
    "transcript": "Emma : My dad is Haruto, he’s a /school principal/ and loves playing /board games./",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Babam Haruto, o bir müdür yardımcısı ve bilardo oynamayı seviyor."
      },
      {
        "id": "b",
        "text": "Emma : Babam Haruto, o bir /okul müdürü/ ve /kutu oyunları/ oynamayı seviyor."
      }
    ],
    "easyDistractor": "Emma : Babam Haruto, o bir okul müdürü ve fotoğraf çekmeyi seviyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "emma",
      "haruto"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:09.930",
    "evidenceEnd": "0:13.885",
    "evidenceSentence": "My mum is Sophie, she’s a /nurse/ and loves /gardening/."
  },
  {
    "id": "introduce_family_ethan_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_ethan.mp4",
    "videoStart": "0:00",
    "videoEnd": "0:09.358",
    "title": "Ethan introduces his mother.",
    "transcript": "Ethan : Hi, this is my family, my mum is Elizabeth, she’s an /architect/ and loves /painting/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ethan : Merhaba, bu benim ailem, annem Elizabeth, o bir /mimar/ ve /resim yapmayı/ seviyor."
      },
      {
        "id": "b",
        "text": "Ethan : Merhaba, bu benim ailem, annem Elizabeth, o bir mühendis ve koşmayı seviyor."
      }
    ],
    "easyDistractor": "Ethan : Merhaba, bu benim ailem, annem Elizabeth, o bir mimar ve golf oynamayı seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ethan",
      "elizabeth"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:04.081",
    "evidenceEnd": "0:09.358",
    "evidenceSentence": "My mum is Elizabeth, she’s an /architect/ and loves /painting/."
  },
  {
    "id": "introduce_family_ethan_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_ethan.mp4",
    "videoStart": "0:09.358",
    "videoEnd": "0:15.083",
    "title": "Ethan introduces his father.",
    "transcript": "Ethan : My dad is James, he’s an /engineer/ and loves /playing golf/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ethan : Babam James, o bir mimar ve bowling oynamayı seviyor."
      },
      {
        "id": "b",
        "text": "Ethan : Babam James, o bir /mühendis/ ve /golf oynamayı/ seviyor."
      }
    ],
    "easyDistractor": "Ethan : Babam James, o bir mühendis ve balık tutmayı seviyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ethan",
      "james"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:11.889",
    "evidenceEnd": null,
    "evidenceSentence": "He’s an /engineer/ and loves /playing golf/."
  },
  {
    "id": "introduce_family_hannah_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_hannah.mp4",
    "videoStart": "0:00",
    "videoEnd": "0:06.593",
    "title": "Hannah introduces her mother.",
    "transcript": "Hannah : Hi, this is my family, my mum is Ingrid, she’s a /waiter/ and loves /barbecue/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Merhaba, bu benim ailem, annem Ingrid, o bir /garson/ ve /barbekü yapmayı/ seviyor."
      },
      {
        "id": "b",
        "text": "Hannah : Merhaba, bu benim ailem, annem Ingrid, o bir garson ve barda çalışıyor."
      }
    ],
    "easyDistractor": "Hannah : Merhaba, bu benim ailem, annem Ingrid, o bir garson ve yürüyüş yapmayı seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "hannah",
      "ingrid"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.379",
    "evidenceEnd": "0:06.593",
    "evidenceSentence": "My mum is Ingrid, she’s a /waiter/ and loves /barbecue/."
  },
  {
    "id": "introduce_family_hannah_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_hannah.mp4",
    "videoStart": "0:06.593",
    "videoEnd": "0:15.083",
    "title": "Hannah introduces her father.",
    "transcript": "Hannah : My dad is Lars, he /owns a camping store/ and loves /hiking/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Babam Lars, o kamp mağazasında çalışıyor ve barbekü yapmayı seviyor."
      },
      {
        "id": "b",
        "text": "Hannah : Babam Lars, bir /kamp mağazası sahibi/ ve /yürüyüş yapmayı/ seviyor."
      }
    ],
    "easyDistractor": "Hannah : Babam Lars, bir kamp mağazası sahibi ve golf oynamayı seviyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "hannah",
      "lars"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:09.570",
    "evidenceEnd": "0:12.792",
    "evidenceSentence": "He /owns a camping store/ and loves /hiking/."
  },
  {
    "id": "introduce_family_lucas_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_lucas.mp4",
    "videoStart": "0:00",
    "videoEnd": "0:06.723",
    "title": "Lucas introduces his mother.",
    "transcript": "Lucas : Hi, this is my family, my mum is Jessica, she’s a /police officer/ and loves /running/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Lucas : Merhaba, bu benim ailem, annem Jessica, o bir /polis memuru/ ve /koşmayı/ seviyor."
      },
      {
        "id": "b",
        "text": "Lucas : Merhaba, bu benim ailem, annem Jessica, o bir itfaiyeci ve süzmeyi seviyor."
      }
    ],
    "easyDistractor": "Lucas : Merhaba, bu benim ailem, annem Jessica, o bir polis memuru ve golf oynamayı seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "lucas",
      "jessica"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:04.112",
    "evidenceEnd": "0:06.735",
    "evidenceSentence": "She’s a /police officer/ and loves /running/."
  },
  {
    "id": "introduce_family_lucas_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_lucas.mp4",
    "videoStart": "0:06.723",
    "videoEnd": "0:11.625",
    "title": "Lucas introduces his father.",
    "transcript": "Lucas : My dad is Gabriel, he’s a /firefighter/ and loves /barbecue/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Lucas : Babam Gabriel, o barda çalışıyor ve dövüşmeyi seviyor."
      },
      {
        "id": "b",
        "text": "Lucas : Babam Gabriel, o bir /itfaiyeci/ ve /barbekü yapmayı/ seviyor."
      }
    ],
    "easyDistractor": "Lucas : Babam Gabriel, o bir itfaiyeci ve balık tutmayı seviyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "lucas",
      "gabriel"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:08.603",
    "evidenceEnd": null,
    "evidenceSentence": "He’s a /firefighter/ and loves /barbecue/."
  },
  {
    "id": "introduce_family_jack_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_jack.mp4",
    "videoStart": "0:00",
    "videoEnd": "0:05.745",
    "title": "Jack introduces his mother.",
    "transcript": "Jack : Hi, this is my family, My mum is Isla, she’s a /postwoman/ and loves /gardening/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Jack : Merhaba, bu benim ailem, annem Isla, o bir çiftçi ve balık tutmayı seviyor."
      },
      {
        "id": "b",
        "text": "Jack : Merhaba, bu benim ailem, annem Isla, o bir posta memuru ve bahçeyle ilgilenmeyi seviyor."
      }
    ],
    "easyDistractor": "Jack : Merhaba, bu benim ailem, annem Isla, o bir posta memuru ve balık tutmayı seviyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "jack",
      "isla"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.066",
    "evidenceEnd": "0:05.745",
    "evidenceSentence": "My mum is Isla, she’s a /postwoman/ and loves /gardening/."
  },
  {
    "id": "introduce_family_jack_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_jack.mp4",
    "videoStart": "0:05.745",
    "videoEnd": "0:10.125",
    "title": "Jack introduces his father.",
    "transcript": "Jack : My dad is Callum, he’s a /farmer/ and loves /fishing/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Jack : Babam Callum, o bir çiftçi ve balık tutmayı seviyor."
      },
      {
        "id": "b",
        "text": "Jack : Babam Callum, o bir posta memuru ve bahçeyle ilgilenmeyi seviyor."
      }
    ],
    "easyDistractor": "Jack : Babam Callum, o bir çiftçi ve golf oynamayı seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "jack",
      "callum"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:05.696",
    "evidenceEnd": "0:09.509",
    "evidenceSentence": "He’s a /farmer/ and loves /fishing/."
  },
  {
    "id": "introduce_family_mia",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_mia.mp4",
    "title": "Mia introduces her mother and Coco.",
    "transcript": "Mia : Hi, this is my family, My mum is Giulia, she’s a /chef/ and loves /reading books/, and this is my rabbit, Coco.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Merhaba, bu benim ailem, annem Giulia, o bir /aşçı/ ve /kitap okumayı/ seviyor, bu da tavşanım Coco."
      },
      {
        "id": "b",
        "text": "Mia : Merhaba, bu benim ailem, annem Giulia, o bir doktor ve bahçeyle ilgilenmeyi seviyor, bu da köpeğim Coco."
      }
    ],
    "easyDistractor": "Mia : Merhaba, bu benim ailem, annem Giulia, o bir aşçı ve resim yapmayı seviyor, bu da tavşanım Coco.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "mia",
      "giulia",
      "coco"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:04.027",
    "evidenceEnd": "0:06.495",
    "evidenceSentence": "She’s a /chef/ and loves /reading books/."
  },
  {
    "id": "introduce_family_noah_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_noah.mp4",
    "videoStart": "0:00",
    "videoEnd": "0:06.285",
    "title": "Noah introduces his mother.",
    "transcript": "Noah : Hi, this is my family, My mum is Katharina, She’s a /doctor/ and loves /gardening/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : Merhaba, bu benim ailem, annem Katharina, o bir /doktor/ ve /bahçeyle ilgilenmeyi/ seviyor."
      },
      {
        "id": "b",
        "text": "Noah : Merhaba, bu benim ailem, annem Katharina, o bir diş hekimi ve bulmaca çözmeyi seviyor."
      }
    ],
    "easyDistractor": "Noah : Merhaba, bu benim ailem, annem Katharina, o bir doktor ve bulmaca çözmeyi seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "noah",
      "katharina"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.863",
    "evidenceEnd": "0:06.248",
    "evidenceSentence": "My mum is Katharina, She’s a /doctor/ and loves /gardening/."
  },
  {
    "id": "introduce_family_noah_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_noah.mp4",
    "videoStart": "0:06.248",
    "videoEnd": "0:10.125",
    "title": "Noah introduces his father.",
    "transcript": "Noah : My dad is Victor, he’s a /dentist/ and loves /doing puzzles/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : Babam Victor, o bir doktor ve bahçeyle ilgilenmeyi seviyor."
      },
      {
        "id": "b",
        "text": "Noah : Babam Victor, o bir /diş hekimi/ ve /bulmaca çözmeyi/ seviyor."
      }
    ],
    "easyDistractor": "Noah : Babam Victor, o bir diş hekimi ve golf oynamayı seviyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "noah",
      "victor"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:06.120",
    "evidenceEnd": null,
    "evidenceSentence": "He’s a /dentist/ and loves /doing puzzles/."
  },
  {
    "id": "introduce_family_olivia_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_olivia.mp4",
    "videoStart": "0:00",
    "videoEnd": "0:08.062",
    "title": "Olivia introduces her mother.",
    "transcript": "Olivia : Hi, this is my family, My mum is Fiona, She’s a /hairdresser/ and loves /watching films/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : Merhaba, bu benim ailem, annem Fiona, o bir /kuaför/ ve /film izlemeyi/ seviyor."
      },
      {
        "id": "b",
        "text": "Olivia : Merhaba, bu benim ailem, annem Fiona, o bir pilot ve uçmayı seviyor."
      }
    ],
    "easyDistractor": "Olivia : Merhaba, bu benim ailem, annem Fiona, o bir kuaför ve kitap okumayı seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "olivia",
      "fiona"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:04.807",
    "evidenceEnd": "0:08.062",
    "evidenceSentence": "She’s a /hairdresser/ and loves /watching films/."
  },
  {
    "id": "introduce_family_olivia_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_olivia.mp4",
    "videoStart": "0:08.062",
    "videoEnd": "0:11.542",
    "title": "Olivia introduces her father.",
    "transcript": "Olivia : My dad was Patrick, he was a /pilot/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : Babam Patrick idi, o bir kuafördü."
      },
      {
        "id": "b",
        "text": "Olivia : Babam Patrick idi, o bir /pilottu/."
      }
    ],
    "easyDistractor": "Olivia : Babam Patrick idi, o bir otobüs şoförüydü.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "olivia",
      "patrick"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations"
    ],
    "theme": "introduction",
    "evidenceStart": "0:07.932",
    "evidenceEnd": null,
    "evidenceSentence": "Olivia : My dad was Patrick, he was a /pilot/."
  },
  {
    "id": "introduce_family_victoria_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_victoria.mp4",
    "videoStart": "0:00",
    "videoEnd": "0:06.467",
    "title": "Victoria introduces her mother.",
    "transcript": "Victoria : Hi, this is my family, My mum is Monica, She’s a /lawyer/ and loves /reading books/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Victoria : Merhaba, bu benim ailem, annem Monica, o bir /avukat/ ve /kitap okumayı/ seviyor."
      },
      {
        "id": "b",
        "text": "Victoria : Merhaba, bu benim ailem, annem Monica, o bir muhasebeci ve yemek yapmayı seviyor."
      }
    ],
    "easyDistractor": "Victoria : Merhaba, bu benim ailem, annem Monica, o bir avukat ve resim yapmayı seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "victoria",
      "monica"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.770",
    "evidenceEnd": "0:06.467",
    "evidenceSentence": "She’s a /lawyer/ and loves /reading books/."
  },
  {
    "id": "introduce_family_victoria_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_victoria.mp4",
    "videoStart": "0:06.467",
    "videoEnd": "0:14.419",
    "title": "Victoria introduces her father and Pixel.",
    "transcript": "Victoria : My dad is Arthur, He’s a /bus driver/ and loves /playing board games/, and this is my hamster, Pixel.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Victoria : Babam Arthur, o bir avukat ve kitap okumayı seviyor, bu da kedim Pixel."
      },
      {
        "id": "b",
        "text": "Victoria : Babam Arthur, o bir /otobüs şoförü/ ve /kutu oyunları oynamayı/ seviyor, bu da hamsterım Pixel."
      }
    ],
    "easyDistractor": "Victoria : Babam Arthur, o bir otobüs şoförü ve golf oynamayı seviyor, bu da hamsterım Pixel.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "victoria",
      "arthur"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:06.604",
    "evidenceEnd": "0:11.492",
    "evidenceSentence": "He’s a /bus driver/ and loves /playing board games/."
  },
  {
    "id": "introduce_family_zoe_1",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_zoe.mp4",
    "videoStart": "0:00",
    "videoEnd": "0:07.630",
    "title": "Zoe introduces her mother.",
    "transcript": "Zoe : Hi, this is my family, My mum is Eleni, She’s a /saleswoman/ and loves /cooking/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : Merhaba, bu benim ailem, annem Eleni, o bir /satış elemanı/ ve /yemek yapmayı/ seviyor."
      },
      {
        "id": "b",
        "text": "Zoe : Merhaba, bu benim ailem, annem Eleni, o bir avukat ve kitap okumayı seviyor."
      }
    ],
    "easyDistractor": "Zoe : Merhaba, bu benim ailem, annem Eleni, o bir satış elemanı ve yıldız gözlemi yapmayı seviyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "zoe",
      "eleni"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:04.945",
    "evidenceEnd": "0:07.630",
    "evidenceSentence": "She’s a /saleswoman/ and loves /cooking/."
  },
  {
    "id": "introduce_family_zoe_2",
    "status": "published",
    "videoSrc": "assets/video/introduce_family_zoe.mp4",
    "videoStart": "0:07.630",
    "videoEnd": "0:13.667",
    "title": "Zoe introduces her father.",
    "transcript": "Zoe : My dad is Nikos, He’s a /salesman/ and loves /stargazing/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : Babam Nikos, o bir aşçı ve yemek yapmayı seviyor."
      },
      {
        "id": "b",
        "text": "Zoe : Babam Nikos, o bir /satış elemanı/ ve /yıldız gözlemi/ yapmayı seviyor."
      }
    ],
    "easyDistractor": "Zoe : Babam Nikos, o bir satış elemanı ve bisiklete binmeyi seviyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "zoe",
      "nikos"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "introducing_others",
      "occupations",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:07.926",
    "evidenceEnd": "0:12.700",
    "evidenceSentence": "He’s a /salesman/ and loves /stargazing/."
  },
  {
    "id": "benjamin_hannah",
    "status": "published",
    "videoSrc": "assets/video/benjamin_hannah.mp4",
    "title": "Benjamin talks to Hannah",
    "transcript": "Benjamin: /Can I borrow your bike/ please? Hannah: Sorry, I need it.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : /Bisikletini ödünç alabilir miyim/? Hannah : Üzgünüm, bana lazım."
      },
      {
        "id": "b",
        "text": "Benjamin : Bisikletimi ister misin? Hannah : Üzgünüm, Üzgünüm, bana lazım."
      }
    ],
    "easyDistractor": "Benjamin : Bisikletini ödünç alabilir miyim? Hannah : Tabi ki.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "benjamin",
      "hannah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "permission",
    "theme": "general",
    "evidenceStart": "0:00.750",
    "evidenceEnd": "0:03.138",
    "evidenceSentence": "Benjamin: /Can I borrow your bike/ please?"
  },
  {
    "id": "chloe_ella",
    "status": "published",
    "videoSrc": "assets/video/chloe_ella.mp4",
    "title": "Ella and Chloe talks",
    "transcript": "Ella : /Can I play your piano/? Chloe : Sure, you can.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Piano çalmak ister misin? Chloe : Tabi, çalabilirsin."
      },
      {
        "id": "b",
        "text": "Ella : /Pianonu çalabilir miyim/? Chloe : Tabi, çalabilirsin."
      }
    ],
    "easyDistractor": "Ella : Pianonu çalabilir miyim? Chloe : Üzgünüm, olmaz.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe",
      "ella"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "permission",
    "theme": "general",
    "evidenceStart": "0:00.127",
    "evidenceEnd": "0:01.857",
    "evidenceSentence": "Ella : /Can I play your piano/?"
  },
  {
    "id": "school_trip_lunch_time_emma_chloe",
    "status": "published",
    "videoSrc": "assets/video/school_trip_lunch_time_emma_chloe.mp4",
    "title": "Emma offers Chloe half of her sandwich.",
    "transcript": "Emma : /Would you like/ half of my sandwich? Chloe : Yes, please, I'm still a bit hungry.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Sandviçimin yarısını /ister misin/? Chloe : Evet, lütfen, Hâlâ biraz açım."
      },
      {
        "id": "b",
        "text": "Emma : Sandviçimin yarısını yemeye ne dersin? Chloe : Evet, lütfen, hâlâ biraz açım."
      }
    ],
    "easyDistractor": "Emma : Sandviçimin hepsini ister misin? Chloe : Evet, lütfen, Hâlâ biraz açım.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "emma",
      "chloe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "suggesting",
      "accepting"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:02.355",
    "evidenceEnd": "0:04.290",
    "evidenceSentence": "Emma : /Would you like/ half of my sandwich?"
  },
  {
    "id": "5_school_life_chloe_emma",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_chloe_emma.mp4",
    "title": "Chloe asks Emma about her preference for science experiments.",
    "transcript": "Chloe : Do you like /doing science experiments/? Emma : Yes, I do, They're exciting!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Fen fuarlarına gitmeyi sever misin? Emma : Evet, severim, Çok heyecan vericiler!"
      },
      {
        "id": "b",
        "text": "Chloe : /Fen deneyleri yapmayı/ sever misin? Emma : Evet, severim, Çok heyecan vericiler!"
      }
    ],
    "easyDistractor": "Chloe : Fen fuarlarına gitmeyi sever misin? Emma : Hayır, sevmem, Çok sıkıcılar!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe",
      "emma"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_preferences_about_activities",
      "expressing_a_preference"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.344",
    "evidenceSentence": "Chloe : Do you like /doing science experiments/?"
  },
  {
    "id": "5_school_life_victoria_noah",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_victoria_noah.mp4",
    "title": "Noah asks to use a USB drive at school.",
    "transcript": "Noah : /Can I/ use my USB drive? Victoria : /No/, /we can't use/ them here.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : USB belleğimi kullanabilir miyim? Victoria : /Hayır/, Burada onları /kullanamayız/."
      },
      {
        "id": "b",
        "text": "Noah : USB belleğin var mı? Victoria : Evet, Burada kullanabilirsin."
      }
    ],
    "easyDistractor": "Noah : USB belleğimi görebilir miyim? Victoria : Evet, Görebilirsin.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "victoria",
      "noah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_permission",
      "expressing_a_school_rule",
      "refusing"
    ],
    "theme": "School_life",
    "evidenceStart": null,
    "evidenceEnd": "0:04",
    "evidenceSentence": "Noah : /Can I/ use my USB drive? Victoria : /No/, /we can't use/ them here."
  },
  {
    "id": "5_school_life_ella",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_ella.mp4",
    "title": "The teacher reminds Ella not to make noise in class.",
    "transcript": "Teacher : Ella, you /mustn't/ make noise in the lesson. Ella : Sorry, I'll stop.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Öğretmen : Ella, Derste gürültü yapamazsın. Ella : Özür dilerim, bilmiyordum."
      },
      {
        "id": "b",
        "text": "Öğretmen : Ella, Derste gürültü /yapmamalısın/. Ella : Özür dilerim, Duracağım."
      }
    ],
    "easyDistractor": "Öğretmen : Ella, Derste konuşmamalısın. Ella : Özür dilerim, Sessiz olacağım.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ella"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "expressing_obligations_or_rules"
    ],
    "theme": "School_life",
    "evidenceStart": "0:01.609",
    "evidenceEnd": "0:04.723",
    "evidenceSentence": "Teacher : Ella, you /mustn't/ make noise in the lesson."
  },
  {
    "id": "5_school_life_mia2",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_mia2.mp4",
    "title": "The librarian reminds Mia to speak quietly.",
    "transcript": "Librarian : You /mustn't/ shout in the library. Mia : Oops, sorry, I'll speak quietly.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Kütüphaneci : Kütüphanede yüksek sesle konuşma. Mia : Aa, tamam, Yüksek sesle konuşmayacağım."
      },
      {
        "id": "b",
        "text": "Kütüphaneci : Kütüphanede bağır/mamalısın/. Mia : Aa, Özür dilerim, Sessiz konuşacağım."
      }
    ],
    "easyDistractor": "Kütüphaneci : Kütüphanede şarkı söyleyemezsin. Mia : Aa, Özür dilerim, Şarkı söylemeyeceğim.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_modals_mustnt_and_cant_prohibition"
    ],
    "theme": "School_life",
    "evidenceStart": "0:01.103",
    "evidenceEnd": "0:03.227",
    "evidenceSentence": "Librarian : You /mustn't/ shout in the library."
  },
  {
    "id": "school_life_emma_chloe",
    "status": "published",
    "videoSrc": "assets/video/school_life_emma_chloe.mp4",
    "title": "Emma and Chloe react to a science experiment.",
    "transcript": "Emma : The foam /is/ ris/ing/ too fast, Chloe : I'll move the books!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Köpük çok hızlı yükseldi, Chloe : Kitapları taşıyacağım!"
      },
      {
        "id": "b",
        "text": "Emma : Köpük çok hızlı yükseli/yor/, Chloe : Kitapları taşıyacağım!"
      }
    ],
    "easyDistractor": "Emma : Köpük çok hızlı yükseliyor! Chloe : Kitapları temizleyeceğim!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "emma",
      "chloe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive"
    ],
    "theme": "School_life",
    "evidenceStart": "0:04.589",
    "evidenceEnd": "0:06.880",
    "evidenceSentence": "Emma : The foam /is/ ris/ing/ too fast"
  },
  {
    "id": "school_life_olivia_ella_sunny",
    "status": "published",
    "videoSrc": "assets/video/school_life_olivia_ella_sunny.mp4",
    "title": "Ella and Olivia react as Sunny flies toward the fountain.",
    "transcript": "Ella : Sunny took /my/ ribbon! Olivia : He's fly/ing/ toward the fountain!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Sunny kurdele/mi/ aldı, Olivia : O çeşmeye doğru uçu/yor/!"
      },
      {
        "id": "b",
        "text": "Ella : Sunny kurdeleni aldı, Olivia : O çeşmeye doğru uçtu!"
      }
    ],
    "easyDistractor": "Ella : Sunny kurdelemi aldı! Olivia : O ağaca doğru uçuyor!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ella",
      "olivia",
      "sunny"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive",
      "possessive_adjective"
    ],
    "theme": "School_life",
    "evidenceStart": "0:02.970",
    "evidenceEnd": "0:06.755",
    "evidenceSentence": "Ella : Sunny took /my/ ribbon! Olivia : He's fly/ing/ toward the fountain!"
  },
  {
    "id": "5_personal_life_ella_ethan",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_ella_ethan.mp4",
    "title": "Ethan asks Ella about her evening bag routine.",
    "transcript": "Ethan : Do you pack your bag at night? Ella : /Usually/, but I forgot my notebook again!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ethan : Çantanı gece hazırlar mısın? Ella : /Genellikle/, Ama defterimi yine unuttum!"
      },
      {
        "id": "b",
        "text": "Ethan : Çantanı gece hazırlar mısın? Ella : Bazen, Ama defterimi yine unuttum!"
      }
    ],
    "easyDistractor": "Ethan : Çantanı gece mi hazırlarsın? Ella : Genellikle, Ama kalemimi yine unuttum!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ella",
      "ethan"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_simple_present_tense",
      "frequency_adverbs"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:04.066",
    "evidenceEnd": "0:06.934",
    "evidenceSentence": "Ella : /Usually/, but I forgot my notebook again!"
  },
  {
    "id": "5_personal_life_chloe_ava2",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_chloe_ava2.mp4",
    "title": "Chloe and Ava talk about Buddy's morning walk.",
    "transcript": "Chloe : You walk Buddy every morning, /don't you/? Ava : Yes, I do, He likes walking very much.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Buddy'yi her sabah gezdiriyor musun? Ava : Evet, gezdiriyorum, O yürümeyi çok seviyor."
      },
      {
        "id": "b",
        "text": "Chloe : Buddy'yi her sabah gezdiriyorsun, /öyle değil mi/? Ava : Evet, gezdiriyorum, O yürümeyi çok seviyor."
      }
    ],
    "easyDistractor": "Chloe : Buddy'yi her sabah gezdiriyorsun, öyle değil mi? Ava : Evet, gezdiriyorum, O koşmayı çok seviyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe",
      "ava",
      "buddy"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_simple_present_tense_for_habbits",
      "tag_questions"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:01.014",
    "evidenceEnd": "0:03.258",
    "evidenceSentence": "Chloe : You walk Buddy every morning, /don't you/?"
  },
  {
    "id": "5_personal_life_mia_zoe",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_mia_zoe.mp4",
    "title": "Zoe asks Mia about watching television in the afternoon.",
    "transcript": "Zoe : Do you watch television in the afternoon? Mia : I /seldom/ watch it, I /usually/ read.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : Öğleden sonra televizyon izler misin? Mia : /Nadiren/ izlerim, /genellikle/ kitap okurum."
      },
      {
        "id": "b",
        "text": "Zoe : Öğleden sonra televizyon izler misin? Mia : Her gün izlerim, bazen de kitap okurum."
      }
    ],
    "easyDistractor": "Zoe : Öğleden sonra televizyon izler misin? Mia : Bazen televizyon izlerim, hiç kitap okumam.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "mia",
      "zoe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "frequency_adverbs"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:02.658",
    "evidenceEnd": "0:06.207",
    "evidenceSentence": "Mia : I /seldom/ watch it, I /usually/ read."
  },
  {
    "id": "5_family_life_ella_charlotte_sunny",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_ella_charlotte_sunny.mp4",
    "title": "Ella asks Charlotte about the new song she is practising.",
    "transcript": "Ella : What are you playing, Mum? Charlotte : I/'m practising/ a new song.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Ne çalıyorsun, anne? Charlotte : Yeni bir şarkı /prova ediyorum/."
      },
      {
        "id": "b",
        "text": "Ella : Ne çalıyorsun, anne? Charlotte : Eski bir şarkıyı çalıyorum."
      }
    ],
    "easyDistractor": "Ella : Ne çalıyorsun, anne? Charlotte : Yeni bir şarkı yazıyorum.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ella",
      "charlotte",
      "sunny"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive"
    ],
    "theme": "family_life",
    "evidenceStart": "0:04.651",
    "evidenceEnd": "0:06.606",
    "evidenceSentence": "Charlotte : Yeni bir şarkı /prova ediyorum/."
  },
  {
    "id": "5_family_life_ava_amina",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_ava_amina.mp4",
    "title": "Ava asks Amina about the visiting bird.",
    "transcript": "Ava : Why is the bird stay/ing/ with us? Amina : I/'m taking/ care of it this week.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Kuş neden bizimle kalı/yor/? Amina : Bu hafta onunla /ilgileniyorum/."
      },
      {
        "id": "b",
        "text": "Ava : Kuş neden bizimle kalmıyor? Amina : Bugün onu evine götüreceğim."
      }
    ],
    "easyDistractor": "Ava : Kuş neden bizimle kalıyor? Amina : Bu hafta onu beslemiyorum.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ava",
      "amina",
      "bird"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive_for_planned_future"
    ],
    "theme": "family_life",
    "evidenceStart": "0:01.581",
    "evidenceEnd": "0:05.867",
    "evidenceSentence": "Ava : Why is the bird stay/ing/ with us? Amina : I/'m taking/ care of it this week."
  },
  {
    "id": "5_family_life_mia_giulia",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_mia_giulia.mp4",
    "title": "Mia asks Giulia about her usual cooking time.",
    "transcript": "Mia : You /usually/ cook at this time, Mum. Giulia : Yes, but I/'m/ read/ing/ the newspaper now. Mia : Should I cook then?",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Anne, genellikle bu saatte yemek yaparsın. Giulia : Evet, ama bazen gazete de okurum. Mia : O zaman beraber okuyalım?"
      },
      {
        "id": "b",
        "text": "Mia : Anne, /genellikle/ bu saatte yemek yaparsın. Giulia : Evet, ama şimdi gazete oku/yor/um. Mia : O zaman yemeği ben mi yapayım?"
      }
    ],
    "easyDistractor": "Mia : Anne, genellikle bu saatte yemek yaparsın. Giulia : Evet, ama şimdi uyuyorum. Mia : O zaman ben mi yemek yapayım?",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "mia",
      "giulia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive_vs_present_simple",
      "frequency_adverbs"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:05.117",
    "evidenceSentence": "Mia : You /usually/ cook at this time, Mum. Giulia : Yes, but I/'m/ read/ing/ the newspaper now."
  },
  {
    "id": "5_family_life_hannah_lars_ingrid",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_hannah_lars_ingrid.mp4",
    "title": "Hannah's family drives to the forest.",
    "transcript": "Ingrid : We're driving to the forest, /aren't we/? Lars : Yes, we are, we're almost there. Hannah : Yeyyy, Babeque time!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ingrid : Ormana gitmiyor muyuz? Lars : Evet, ama daha çok uzağız. Hannah : Yaşasın, daha çok gezeceğiz!"
      },
      {
        "id": "b",
        "text": "Ingrid : Ormana gidiyoruz, /öyle değil mi/? Lars : Evet, neredeyse vardık. Hannah : Yaşasın, mangal zamanı!"
      }
    ],
    "easyDistractor": "Ingrid : Ormana gidiyoruz, değil mi? Lars : Hayır, eve dönüyoruz. Hannah : Yaşasın, mangal zamanı!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "hannah",
      "lars",
      "ingrid"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive",
      "tag_questions"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.638",
    "evidenceSentence": "Ingrid : We're driving to the forest, /aren't we/?"
  },
  {
    "id": "5_family_life_victoria_monica",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_victoria_monica.mp4",
    "title": "Victoria checks whether Monica is working at home.",
    "transcript": "Victoria : You/'re/ work/ing/ at home today, /aren't you/, Mum? Monica : Yes, I/'m/ finish/ing/ an important task. Victoria : Do you need any help?",
    "answerOptions": [
      {
        "id": "a",
        "text": "Victoria : Anne, bugün evde dinleniyorsun, değil mi? Monica : Evet, önemli bir kitabı okuyorum. Victoria : Yardıma ihtiyacın var mı?"
      },
      {
        "id": "b",
        "text": "Victoria : Anne, bugün evde çalışı/yor/sun, /değil mi/? Monica : Evet, önemli bir işi bitiriyorum. Victoria : Yardıma ihtiyacın var mı?"
      }
    ],
    "easyDistractor": "Victoria : Anne, bugün evde çalışıyorsun, değil mi? Monica : Hayır, dışarıda alışveriş yapıyorum. Victoria : Yardıma ihtiyacın var mı?",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "victoria",
      "monica"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive",
      "tag_questions"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.735",
    "evidenceSentence": "Victoria : You/'re/ work/ing/ at home today, /aren't you/, Mum?"
  },
  {
    "id": "5_family_life_ethan_james",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_ethan_james.mp4",
    "title": "Ethan asks James about the sports page.",
    "transcript": "Ethan : You're reading the sports page, /aren't you/, Dad? James : Yes, I am, I'm checking the golf results.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ethan : Baba, spor sayfasını okuyorsun, /değil mi/? James : Evet, golf sonuçlarını kontrol ediyorum."
      },
      {
        "id": "b",
        "text": "Ethan : Baba, spor yapmaya gidelim mi? James : Hayır, gazete okuyacağım."
      }
    ],
    "easyDistractor": "Ethan : Baba, spor sayfasını okuyorsun, değil mi? James : Hayır, bulmaca çözüyorum.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ethan",
      "james"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive",
      "tag_questions"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.791",
    "evidenceEnd": "0:03.263",
    "evidenceSentence": "Ethan : You're reading the sports page, /aren't you/, Dad?"
  },
  {
    "id": "5_family_life_emma_haruto_sophie",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_emma_haruto_sophie.mp4",
    "title": "Emma asks Haruto about their game night plans.",
    "transcript": "Emma : Are we playing this game tonight, Dad? Haruto : Yes, we/'re/ play/ing/ after dinner. Emma : Nice!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Baba, bu oyunu bu akşam oynuyor muyuz? Haruto : Hayır, oyunu yarın oynuyoruz. Emma : Harika!"
      },
      {
        "id": "b",
        "text": "Emma : Baba, bu akşam bu oyunu mu oynuyoruz? Haruto : Evet, akşam yemeğinden sonra oynu/yor/uz. Emma : Harika!"
      }
    ],
    "easyDistractor": "Emma : Baba, bu oyunu bu akşam oynuyor muyuz? Haruto : Evet, kahvaltıdan sonra oynuyoruz. Emma : Harika!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "emma",
      "haruto",
      "sophie"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive_for_planned_future"
    ],
    "theme": "family_life",
    "evidenceStart": "0:03.170",
    "evidenceEnd": "0:07.066",
    "evidenceSentence": "Haruto : Yes, we/'re/ play/ing/ after dinner. Emma : Nice!"
  },
  {
    "id": "5_family_life_chloe_camille_julien",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_chloe_camille_julien.mp4",
    "title": "Chloe asks Camille about making pancakes.",
    "transcript": "Chloe : You /usually/ bake cakes, Mum. Camille : Yes, but I/'m/ mak/ing/ pancakes now.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Anne, genellikle pasta yaparsın. Camille : Evet, ama şimdi kurabiye yapıyorum."
      },
      {
        "id": "b",
        "text": "Chloe : Anne, genellikle pasta yaparsın. Camille : Evet, ama şimdi pankek yapı/yor/um."
      }
    ],
    "easyDistractor": "Chloe : Anne, genellikle pasta yaparsın. Camille : Hayır, şimdi yemek yapmıyorum.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe",
      "camille",
      "julien"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive_vs_present_simple"
    ],
    "theme": "family_life",
    "evidenceStart": "0:02.726",
    "evidenceEnd": "0:05.360",
    "evidenceSentence": "Camille : Yes, but I/'m/ mak/ing/ pancakes now."
  },
  {
    "id": "zoe_mia_1",
    "status": "published",
    "videoSrc": "assets/video/zoe_mia_1.mp4",
    "title": "Zoe and Mia talking",
    "transcript": "Zoe : Hi Mia, Can you /lend me/ your new novel please? Mia : Sure, you can have it.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : Selam Mia, yeni romanını /ödünç verir misin/? Mia : Tabi, alabilirsin."
      },
      {
        "id": "b",
        "text": "Zoe : Selam Mia, yeni romanını okuyabilir miyim? Mia : Tabi, alabilirsin."
      }
    ],
    "easyDistractor": "Zoe : Selam Mia, yeni romanını okuyabilir miyim? Mia : Üzgünüm, olmaz.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "zoe",
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "permission",
    "theme": "general",
    "evidenceStart": "0:00.802",
    "evidenceEnd": "0:03.864",
    "evidenceSentence": "Hi Mia, Can you /lend me/ your new novel please?"
  },
  {
    "id": "zoe_mia_2",
    "status": "published",
    "videoSrc": "assets/video/zoe_mia_2.mp4",
    "title": "Zoe and Mia talking",
    "transcript": "Zoe : Your /diary/ is cute, /Can I have a look/? Mia : No way !",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : /Günlüğün/ çok şirin, /bakabilir miyim/? Mia : Asla olmaz!"
      },
      {
        "id": "b",
        "text": "Zoe : Kitabın çok şirin, okuyabilir miyim? Mia : Asla olmaz!"
      }
    ],
    "easyDistractor": "Zoe : Kitabın çok güzel, bakabilir miyim? Mia : Tabi, al.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "zoe",
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "permission",
    "theme": "general",
    "evidenceStart": "0:00.488",
    "evidenceEnd": "0:04.507",
    "evidenceSentence": "Zoe : Your /diary/ is cute, /Can I have a look/? Mia : No way !"
  },
  {
    "id": "noah_benjamin_school_trip",
    "status": "published",
    "videoSrc": "assets/video/school_trip_noah_benjamin.mp4",
    "title": "Noah and Benjamin talking",
    "transcript": "Noah : I think this is my seat. Benjamin : Sorry /You’re right/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : Sanırım bu benim koltuğum. Benjamin : /Üzgünüm haklısın/"
      },
      {
        "id": "b",
        "text": "Noah : Kalkar mısın lütfen. Benjamin : Üzgünüm tabi ki."
      }
    ],
    "easyDistractor": "Noah : Sanırım bu benim koltuğum. Benjamin : Hayır benim koltuğum.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "noah",
      "benjamin"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "agree_disagree",
    "theme": "school-trip",
    "evidenceStart": "0:02.091",
    "evidenceEnd": "0:04.798",
    "evidenceSentence": "Benjamin : Sorry /You’re right/."
  },
  {
    "id": "jack_school_trip",
    "status": "published",
    "videoSrc": "assets/video/school_trip_jack.mp4",
    "title": "Jack is late for bus",
    "transcript": "Jack: Hey Wait /I'm almost there/!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Jack : Hey Bekleyin, geliyorum."
      },
      {
        "id": "b",
        "text": "Jack : Hey Bekleyin, /nerdeyse geldim/!"
      }
    ],
    "easyDistractor": "Jack : Hey durun, nereye gidiyorsunuz!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "jack"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "imperatives",
    "theme": "school-trip",
    "evidenceStart": "0:01.077",
    "evidenceEnd": "0:03.627",
    "evidenceSentence": "Jack: Hey Wait /I'm almost there/!"
  },
  {
    "id": "chloe_david_school_trip",
    "status": "published",
    "videoSrc": "assets/video/school_trip_david_chloe.mp4",
    "title": "Chloe warns Jack to fasten his seat belt",
    "transcript": "Chloe : /Don't forget to fasten your seat belt/! David : Ah, you're right Thanks!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : /Emniyet kemerini bağlamayı unutma/!"
      },
      {
        "id": "b",
        "text": "Chloe : Biraz sağa doğru kayar mısın?"
      }
    ],
    "easyDistractor": "Chloe : Pencereyi açmayı unutma!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "chloe",
      "david"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "imperatives",
    "theme": "school-trip",
    "evidenceStart": "0:00.057",
    "evidenceEnd": "0:02.437",
    "evidenceSentence": "Chloe : /Don't forget to fasten your seat belt/!"
  },
  {
    "id": "mia_olivia_school_trip",
    "status": "published",
    "videoSrc": "assets/video/school_trip_olivia_mia.mp4",
    "title": "Mia comments on the view in school tour bus.",
    "transcript": "Mia : Look at those /hills/! Olivia : They're so beautiful!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Şu dağlara bak! Olivia : Çok güzeller."
      },
      {
        "id": "b",
        "text": "Mia : Şu /tepelere/ bak! Olivia : Çok güzeller."
      }
    ],
    "easyDistractor": "Mia : Şu denize bak! Olivia : Çok güzel.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "mia",
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "imperatives",
    "theme": "school-trip",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:01.912",
    "evidenceSentence": "Mia : Look at those /hills/!"
  },
  {
    "id": "ella_ava_school_trip",
    "status": "published",
    "videoSrc": "assets/video/school_trip_ella_ava.mp4",
    "title": "Ella feels bad and Ava tries to help her",
    "transcript": "Ella : I don't feel well. Ava : /Would you like/ some water?",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Biraz su /ister misin/?"
      },
      {
        "id": "b",
        "text": "Ava : Biraz suya ne dersin?"
      }
    ],
    "easyDistractor": "Ava : Biraz süt ister misin?",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ella",
      "ava"
    ],
    "grades": [
      5,
      6
    ],
    "functions": "suggesting",
    "theme": "school-trip",
    "evidenceStart": "0:03.106",
    "evidenceEnd": "0:05.246",
    "evidenceSentence": "Ava : /Would you like/ some water?"
  },
  {
    "id": "benjamin_emma_school_trip",
    "status": "published",
    "videoSrc": "assets/video/school_trip_benjamin_emma.mp4",
    "title": "Emma requests Benjamin to open the window",
    "transcript": "Emma : /Can you/ open the window please? Benjamin : Oh sure, Why not.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Pencereyi aç/abilir misin/ lütfen?"
      },
      {
        "id": "b",
        "text": "Emma : Pencereyi açabilir miyim?"
      }
    ],
    "easyDistractor": "Emma : Pencereyi kapatır mısın lütfen?",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "emma",
      "benjamin"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "makingrequests",
      "accepting"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.221",
    "evidenceSentence": "Emma : /Can you/ open the window please?"
  },
  {
    "id": "chloe_hannah_school_trip_arrival",
    "status": "published",
    "videoSrc": "assets/video/school_trip_arrival_chloe_hannah.mp4",
    "title": "Chloe asks about where emma is",
    "transcript": "Chloe : Have you seen Emma? Hannah: Yes, She's /near the entrance/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Emma nerede? Hannah: Evet, orada, karşıda."
      },
      {
        "id": "b",
        "text": "Chloe : Emma'yı gördün mü? Hannah: Evet, /girişin yakınında/."
      }
    ],
    "easyDistractor": "Chloe : Emma'yı gördün mü? Hannah : Hayır, onu hiç görmedim.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe",
      "hannah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "askingaboutsomeone",
      "givinglocationinformation"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:03.550",
    "evidenceEnd": null,
    "evidenceSentence": "Hannah: Yes, She's /near the entrance/."
  },
  {
    "id": "school_trip_arrival_benjamin_david",
    "status": "published",
    "videoSrc": "assets/video/school_trip_arrival_benjamin_david.mp4",
    "title": "Benjamin suggests to wait for the teacher.",
    "transcript": "Benjamin : /Let's/ wait for the teacher. David : Good idea.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Hadi öğretmeni bekleyelim. David : İyi fikir."
      },
      {
        "id": "b",
        "text": "Benjamin : Neden öğretmeni beklemiyoruz? David : İyi fikir."
      }
    ],
    "easyDistractor": "Benjamin : Hadi öğretmeni çağıralım. David : İyi fikir.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "benjamin",
      "david"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "makingasuggestion",
      "accepting"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:01.402",
    "evidenceEnd": "0:03.195",
    "evidenceSentence": "Benjamin : /Let's/ wait for the teacher."
  },
  {
    "id": "5_family_life_emma_sophie",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_emma_sophie.mp4",
    "title": "Emma asks Sophie about the soup she is making.",
    "transcript": "Emma : What are you /cooking/, Mum? Sophie : I/'m cooking/ vegetable soup, dear.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Ne yapıyorsun, anne? Sophie : Sebze çorbası yapacağım."
      },
      {
        "id": "b",
        "text": "Emma : Ne /pişiriyorsun/, anne? Sophie : Sebze çorbası /pişiriyorum/."
      }
    ],
    "easyDistractor": "Emma : Ne yapıyorsun, anne? Sophie : Mercimek çorbası yapıyorum.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "emma",
      "sophie"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.384",
    "evidenceEnd": "0:04.390",
    "evidenceSentence": "Emma : What are you /cooking/, Mum? Sophie : I/'m cooking/ vegetable soup."
  },
  {
    "id": "school_trip_arrival_ella_olivia",
    "status": "published",
    "videoSrc": "assets/video/school_trip_arrival_ella_olivia.mp4",
    "title": "Ella can't find her ticket and asks for help.",
    "transcript": "Ella : /I can't find my ticket/. Olivia : Oh, Did you forget, You gave it to me, Here it is.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Biletim nerede?. Olivia : Aa, yanında getirmedin mi yoksa?"
      },
      {
        "id": "b",
        "text": "Ella : /Biletimi bulamıyorum/. Olivia : Aa, Unuttun mu, bana vermiştin, İşte burada."
      }
    ],
    "easyDistractor": "Ella : Biletimi bulamıyorum. Olivia : Biletin yok.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ella",
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "askingforhelp"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:00.734",
    "evidenceEnd": "0:02.753",
    "evidenceSentence": "Ella : /I can't find my ticket/."
  },
  {
    "id": "school_trip_museum_benjamin_david",
    "status": "published",
    "videoSrc": "assets/video/school_trip_museum_benjamin_david.mp4",
    "title": "Benjamin and David looking at some",
    "transcript": "Benjamin : Wow, Look at that, It's /amazing/! David : I've never seen one before.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Vav, şuna bak, /Muhteşem/! David : Daha önce hiç böyle birşey görmedim"
      },
      {
        "id": "b",
        "text": "Benjamin : Vav, şuna bak, Çok büyük! David : Daha önce hiç böyle birşey görmedim."
      }
    ],
    "easyDistractor": "Benjamin : Vay, şuna bak, Çok küçük! David : Daha önce hiç böyle bir şey görmedim.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "benjamin",
      "david"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "expressingsurprise"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:01.963",
    "evidenceEnd": "0:05.779",
    "evidenceSentence": "Benjamin : Wow, Look at that, It's /amazing/!"
  },
  {
    "id": "school_trip_museum_mia",
    "status": "published",
    "videoSrc": "assets/video/school_trip_museum_mia.mp4",
    "title": "Mia tries to touch a sculpture but security office warns her.",
    "transcript": "Mia : /Can I touch/ it? Security : Sorry, /Don't touch/, please, It is forbidden.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : /Dokunabilir miyim/? Güvenlik : Üzgünüm, /dokunma/ lütfen, Yasak."
      },
      {
        "id": "b",
        "text": "Mia : Bunu alacağım. Güvenlik : Üzgünüm, alma lütfen, Yasak."
      }
    ],
    "easyDistractor": "Mia : Dokunabilir miyim? Güvenlik : Evet, sorun yok.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_permission",
      "expressing_prohibition"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:01.418",
    "evidenceEnd": "0:05.342",
    "evidenceSentence": "Mia : /Can I touch/ it? Security : Sorry, /Don't touch/, please, It is forbidden."
  },
  {
    "id": "school_trip_museum_victoria_noah",
    "status": "published",
    "videoSrc": "assets/video/school_trip_museum_victoria_noah.mp4",
    "title": "Victoria shares a dinosaur fact with Noah at the museum.",
    "transcript": "Victoria : This dinosaur lived /millions of years ago/. Noah : Really, Wow, That's so interesting.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Victoria : Bu dinozor milyonlarca yıl yaşadı. Noah : Gerçekten mi, Vay canına, Bu çok ilginç."
      },
      {
        "id": "b",
        "text": "Victoria : Bu dinozor /milyonlarca yıl önce/ yaşadı. Noah : Gerçekten mi, Vay canına, Bu çok ilginç."
      }
    ],
    "easyDistractor": "Victoria : Bu dinozor geçen yıl yaşıyordu. Noah : Gerçekten mi, Vay canına, Bu çok ilginç.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "victoria",
      "noah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "givinginformation",
      "expressingtime"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:03.296",
    "evidenceSentence": "Victoria : This dinosaur lived /millions of years ago/."
  },
  {
    "id": "school_trip_museum_chloe",
    "status": "published",
    "videoSrc": "assets/video/school_trip_museum_chloe.mp4",
    "title": "Chloe asks a teacher for directions to the exit.",
    "transcript": "Chloe : Where's the exit? Teacher : Go straight ahead, /Turn left/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Çıkış nerede? Öğretmen : Dümdüz ilerle, /Sola dön/."
      },
      {
        "id": "b",
        "text": "Chloe : Çıkış nerede? Öğretmen : Dümdüz ilerle, Sağa dön."
      }
    ],
    "easyDistractor": "Chloe : Çıkış nerede? Öğretmen : Sağ dön, Dümdüz git.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "chloe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "askingfordirections",
      "givingdirections"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:01.697",
    "evidenceEnd": null,
    "evidenceSentence": "Teacher : Go straight ahead, /Turn left/."
  },
  {
    "id": "school_trip_museum_olivia",
    "status": "published",
    "videoSrc": "assets/video/school_trip_museum_olivia.mp4",
    "title": "Olivia asks a teacher for permission to take a photo.",
    "transcript": "Olivia : /May I/ take a photo? Generic Teacher : Yes, but don't use the flash. Olivia : Oh, sure.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : Fotoğraf çekmek istiyorum. Öğretmen : Olur, ama flaş kullanma. Olivia : Tabii."
      },
      {
        "id": "b",
        "text": "Olivia : Fotoğraf çekebilir /miyim/? Öğretmen : Evet, ama flaş kullanma. Olivia : Tabii."
      }
    ],
    "easyDistractor": "Olivia : Resim çizebilir miyim? Öğretmen : Evet, sulu boya kullan. Olivia : Tabii.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "permission"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:01.624",
    "evidenceSentence": "Olivia : /May I/ take a photo?"
  },
  {
    "id": "school_trip_lunch_time_ella_olivia",
    "status": "published",
    "videoSrc": "assets/video/school_trip_lunch_time_ella_olivia.mp4",
    "title": "Olivia offers to share her water with Ella.",
    "transcript": "Ella : I forgot my /water bottle/. Olivia : No problem, Ella, You can /share/ mine. Ella : Oh, thanks!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Su almayı unuttum. Olivia : Sorun değil, Ella, Benimkini alabilirsin. Ella : Teşekkürler!"
      },
      {
        "id": "b",
        "text": "Ella : /Su şişemi/ unuttum. Olivia : Sorun değil, Ella, Benimkini /paylaşabilirsin/. Ella : Teşekkürler!"
      }
    ],
    "easyDistractor": "Ella : Su şişemi unuttum. Olivia : Sorun değil, Ella, Şuradaki büfeden alabilirsin. Ella : Teşekkürler!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ella",
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "offeringhelp"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:00.159",
    "evidenceEnd": "0:05.305",
    "evidenceSentence": "Ella : I forgot my water bottle. Olivia : No problem, Ella, You can /share/ mine."
  },
  {
    "id": "school_trip_lunch_time_ava_benjamin",
    "status": "published",
    "videoSrc": "assets/video/school_trip_lunch_time_ava_benjamin.mp4",
    "title": "Ava asks Benjamin where the rubbish bin is.",
    "transcript": "Ava : /Where's/ the rubbish bin? Benjamin : It's /behind/ that tree.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Çöp kutusu nerede? Benjamin : Şu ağacın /arkasında/."
      },
      {
        "id": "b",
        "text": "Ava : Çöp kutusunu gördün mü? Benjamin : Şu ağacın karşısında."
      }
    ],
    "easyDistractor": "Ava : Çöp kutusu nerede? Benjamin : Ağacın üstünde.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ava",
      "benjamin"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "askingaboutlocation",
      "givinglocationinformation"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:05.456",
    "evidenceSentence": "Ava : /Where's/ the rubbish bin? Benjamin : It's /behind/ that tree."
  },
  {
    "id": "school_trip_hannah_victoria_1",
    "status": "published",
    "videoSrc": "assets/video/school_trip_hannah_victoria_1.mp4",
    "title": "Hannah asks Victoria about journey.",
    "transcript": "Hannah : /How long/ is the journey? Victoria : About an hour.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Yolculuk /ne kadar/ sürecek? Victoria : Bir saat kadar"
      },
      {
        "id": "b",
        "text": "Hannah : Ne zamandır yoldayız? Victoria : Bir saat kadardır"
      }
    ],
    "easyDistractor": "Hannah : Yolculuk nasıl geçiyor? Victoria: Gayet iyi.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "hannah",
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "askingaboutlocation",
      "givinglocationinformation"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.302",
    "evidenceSentence": "Hannah : /How long/ is the journey? Victoria : About an hour."
  },
  {
    "id": "school_trip_lunch_time_mia_zoe",
    "status": "published",
    "videoSrc": "assets/video/school_trip_lunch_time_mia_zoe.mp4",
    "title": "Mia suggests eating a hamburger and Zoe agrees.",
    "transcript": "Mia : /How about/ eat/ing/ a hamburger? Zoe : Great idea, Let's.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Neden hamburger yemiyoruz? Zoe : Harika fikir, Hadi yiyelim."
      },
      {
        "id": "b",
        "text": "Mia : Hamburger yemeye /ne dersin/? Zoe : Harika fikir, Hadi yiyelim."
      }
    ],
    "easyDistractor": "Mia : Neden hamburger yemiyoruz? Zoe : Hiç sanmıyorum, Aç değilim.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "mia",
      "zoe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "makingasuggestion",
      "accepting"
    ],
    "theme": "school-trip",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.053",
    "evidenceSentence": "Mia : /How about/ eat/ing/ a hamburger?"
  },
  {
    "id": "school_trip_lunch_time_ella",
    "status": "published",
    "videoSrc": "assets/video/school_trip_lunch_time_ella.mp4",
    "title": "Olivia buys an ice-cream and asks the price",
    "transcript": "Shopkeeper : What would you like, young lady? Ella : /I'd like/ a chocolate ice cream, please. Shopkeeper : Sure. Ella : Thanks, /How much is it/? Shopkeeper : It's one dollar.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Esnaf : Ne isterdiniz, küçük hanım? Ella : Çikolatalı dondurma istiyorum, lütfen. Esnaf : Tabi. Ella : Güzel mi? Esnaf : Tabi ki"
      },
      {
        "id": "b",
        "text": "Esnaf : Ne isterdiniz, küçük hanım? Ella : Çikolatalı dondurma seviyorum. Esnaf : Tabi. Ella : Ne kadar? Esnaf : 1 dolar"
      }
    ],
    "easyDistractor": "Esnaf : Ne isterdiniz, küçük hanım? Ella : Çikolatalı süt lütfen. Esnaf : Tabi. Ella : Ne kadar? Esnaf : Bedava.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "ordering_something",
      "asking_for_price"
    ],
    "theme": "school_trip",
    "evidenceStart": "0:01.792",
    "evidenceEnd": "0:12.122",
    "evidenceSentence": "Ella : /I'd like/ a chocolate ice cream, please. Shopkeeper : Sure. Ella : Thanks, /How much is it/?"
  },
  {
    "id": "5_school_life_noah_victoria",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_noah_victoria.mp4",
    "title": "Noah asks Victoria about her puzzle-solving habit.",
    "transcript": "Noah : Do you like solving puzzles? Victoria : Yes, I solve one /every day/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : Yapboz çözmeyi sever misin? Victoria : Evet, /Her gün/ bir tane çözerim."
      },
      {
        "id": "b",
        "text": "Noah : Yapboz çözmeyi sever misin? Victoria : Evet, Haftada bir tane çözerim."
      }
    ],
    "easyDistractor": "Noah : Yapboz çözmeyi sever misin? Victoria : Hayır, Hiç yapmam.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "noah",
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_preferences_about_activities",
      "frequency_adverbs"
    ],
    "theme": "School_life",
    "evidenceStart": "0:02.055",
    "evidenceEnd": "0:05.242",
    "evidenceSentence": "Noah : Do you like solving puzzles? Victoria : Yes, I solve one /every day/."
  },
  {
    "id": "5_school_life_ella_olivia",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_ella_olivia.mp4",
    "title": "Ella and Olivia compare their after-school activity preferences.",
    "transcript": "Ella : /Do you like/ drawing after school? Olivia : Yes, but I like taking photos /more/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Okuldan sonra resim çizmeyi tercih eder misin? Olivia : Severim, ama fotoğraf çekmek favorim."
      },
      {
        "id": "b",
        "text": "Ella : Okuldan sonra resim çizmeyi /sever misin/? Olivia : Evet, ama fotoğraf çekmeyi /daha çok/ severim."
      }
    ],
    "easyDistractor": "Ella : Okuldan sonra futbol oynamayı sever misin? Olivia : Hayır, Futbol oynamayı hiç sevmem.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ella",
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_preferences_about_activities",
      "expressing_and_comparing_personal_preferences"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.666",
    "evidenceEnd": "0:05.508",
    "evidenceSentence": "Ella : /Do you like/ drawing after school? Olivia : Yes, but I like taking photos /more/."
  },
  {
    "id": "5_school_life_lucas_daniel",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_lucas_daniel.mp4",
    "title": "Lucas and Daniel compare their sports preferences.",
    "transcript": "Lucas : /Do you like/ playing basketball? Daniel : Yes, but table tennis is my favorite.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Lucas : Basketbol oynamayı /sever misin/? Daniel : Evet, ama masa tenisi favorim."
      },
      {
        "id": "b",
        "text": "Lucas : Basketbolda iyi misin? Daniel : Evet, ama masa tenisi favorim."
      }
    ],
    "easyDistractor": "Lucas : Basketbol oynamayı sever misin? Daniel : Hayır, Basketbol oynamayı hiç sevmem.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "lucas",
      "daniel"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_preferences_about_activities",
      "expressing_and_comparing_personal_preferences"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.151",
    "evidenceEnd": "0:02.247",
    "evidenceSentence": "Lucas : /Do you like/ playing basketball?"
  },
  {
    "id": "5_school_life_daniel_emma",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_daniel_emma.mp4",
    "title": "Daniel asks permission to touch a hot object.",
    "transcript": "Daniel : /Can I/ touch this? Emma : No, /you mustn't, It's very hot/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Buna dokunacağım. Emma : Evet, Dokunabilirsin, Çok soğuk."
      },
      {
        "id": "b",
        "text": "Daniel : Buna /dokunabilir miyim/? Emma : Hayır, /Dokunmamalısın, Çok sıcak/."
      }
    ],
    "easyDistractor": "Daniel : Buna bakabilir miyim? Emma : Evet, Bakabilirsin.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "daniel",
      "emma"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_permission",
      "giving_a_warning"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:05.174",
    "evidenceSentence": "Daniel : /Can I/ touch this? Emma : No, /you mustn't, It's very hot/."
  },
  {
    "id": "5_school_life_mia_zoe",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_mia_zoe.mp4",
    "title": "Zoe reminds Mia about a library rule.",
    "transcript": "Zoe : We /can't eat/ in the library. Mia : Okay, I'll put it away.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : Kütüphanede /yemek yiyemeyiz/. Mia : Tamam, Onu kaldıracağım."
      },
      {
        "id": "b",
        "text": "Zoe : Kütüphanede yemek yiyebiliriz. Mia : Tamam, Onu çıkaracağım."
      }
    ],
    "easyDistractor": "Zoe : Kütüphanede sessiz konuşmalıyız. Mia : Tamam, Daha yüksek sesle konuşacağım.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "mia",
      "zoe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "expressing_a_school_rule"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.876",
    "evidenceEnd": "0:02.827",
    "evidenceSentence": "Zoe : We /can't eat/ in the library."
  },
  {
    "id": "5_school_life_hannah_emma",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_hannah_emma.mp4",
    "title": "Emma corrects Hannah's behaviour in school.",
    "transcript": "Emma : Hannah, you /mustn't run/ here. Hannah : You're right, I'll walk.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Hannah, Burada koşabilirsin. Hannah : Haklısın, Koşacağım."
      },
      {
        "id": "b",
        "text": "Emma : Hannah, Burada /koşmamalısın/. Hannah : Haklısın, Yürüyeceğim."
      }
    ],
    "easyDistractor": "Emma : Hannah, Burada oturmamalısın. Hannah : Haklısın, Oturacağım.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "hannah",
      "emma"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "expressing_prohibition",
      "correcting_behaviour",
      "accepting"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.389",
    "evidenceEnd": "0:02.679",
    "evidenceSentence": "Emma : Hannah, you /mustn't run/ here."
  },
  {
    "id": "5_school_life_mia_david",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_mia_david.mp4",
    "title": "Mia asks David where the library is.",
    "transcript": "Mia : /Where is/ the library? David : It's next to the art room.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : /Kütüphane nerede/ ? David : Sanat odasının bitişiğinde."
      },
      {
        "id": "b",
        "text": "Mia : Kütüphane burası mı? David : Sanat salonunun karşısında."
      }
    ],
    "easyDistractor": "Mia : Kütüphane nerede? David : Sınıfın içinde.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "mia",
      "david"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "askingaboutlocation",
      "givinglocationinformation"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.617",
    "evidenceEnd": "0:01.836",
    "evidenceSentence": "Mia : /Where is/ the library?"
  },
  {
    "id": "5_school_life_emma_chloe",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_emma_chloe.mp4",
    "title": "Chloe checks whether she is at the science club.",
    "transcript": "Chloe : Is this the /science club/? Emma : Yes, it is, Come in!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Burası spor kulübü mü? Emma : Evet, Öyle, İçeri gel!"
      },
      {
        "id": "b",
        "text": "Chloe : Burası /bilim kulübü/ mü? Emma : Evet, Öyle, İçeri gel!"
      }
    ],
    "easyDistractor": "Chloe : Burası bilim kulübü mü? Emma : Hayır, Burası kütüphane.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "emma",
      "chloe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "askingaboutlocation"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:01.905",
    "evidenceSentence": "Chloe : Is this the /science club/?"
  },
  {
    "id": "5_school_life_ava_ethan",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_ava_ethan.mp4",
    "title": "Ethan asks Ava about a wildlife poster.",
    "transcript": "Ethan : Is that the /wildlife poster/? Ava : Yes, it is, These are birds from our school garden.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ethan : Şu /yaban hayatı posteri/ mi? Ava : Evet, Öyle, Bunlar okul bahçemizdeki kuşlar."
      },
      {
        "id": "b",
        "text": "Ethan : Şu spor posteri mi? Ava : Evet, Öyle, Bunlar okul takımımızdaki öğrenciler."
      }
    ],
    "easyDistractor": "Ethan : Şu yaban hayatı posteri mi? Ava : Hayır, Bu bir spor posteri.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ava",
      "ethan"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_about"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.240",
    "evidenceSentence": "Ethan : Is that the /wildlife poster/?"
  },
  {
    "id": "5_school_life_hannah",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_hannah.mp4",
    "title": "The teacher reminds Hannah about the class rule on chewing gum.",
    "transcript": "Teacher : Hannah, you /mustn't chew gum/ in class. Hannah : Sorry, I'll throw it away.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Öğretmen : Hannah, Sınıfa sakız getirmemelisin. Hannah : Özür dilerim, Onu evde bırakacağım"
      },
      {
        "id": "b",
        "text": "Öğretmen : Hannah, Sınıfta /sakız çiğnememelisin/. Hannah : Özür dilerim, Onu çöpe atacağım."
      }
    ],
    "easyDistractor": "Öğretmen : Hannah, Sınıfta sakız çiğneyebilirsin. Hannah : Özür dilerim, Sakızımı yiyeceğim.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "hannah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "expressing_obligations_or_rules"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:03.242",
    "evidenceSentence": "Teacher : Hannah, you /mustn't chew gum/ in class."
  },
  {
    "id": "5_school_life_lucas",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_lucas.mp4",
    "title": "The teacher reminds Lucas about the classroom food and drink rule.",
    "transcript": "Teacher : You /can't eat or drink/ in the lesson. Lucas : Okay, I'll put it away.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Öğretmen : Derste /yemek yiyip içemezsin/. Lucas : Tamam, çantama koyacağım."
      },
      {
        "id": "b",
        "text": "Öğretmen : Yemek yiyip içeceksen dışarı çık. Lucas : Tamam, Sonra yerim."
      }
    ],
    "easyDistractor": "Öğretmen : Derste yemek yiyebilirsin. Lucas : Tamam, o zaman devam ediyim.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "lucas"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "expressing_obligations_or_rules"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.571",
    "evidenceEnd": "0:03.032",
    "evidenceSentence": "Teacher : You /can't eat or drink/ in the lesson."
  },
  {
    "id": "5_school_life_emma",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_emma.mp4",
    "title": "The teacher asks Emma to keep the classroom tidy.",
    "transcript": "Teacher : Please /keep your classroom tidy/. Emma : Of course, I'll put these books away.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Öğretmen : Lütfen /sınıfını düzenli tut/. Emma : Tabii, Bu kitapları rafa koyacağım."
      },
      {
        "id": "b",
        "text": "Öğretmen : Lütfen sıranı düzenli tut. Emma : Tabii, Bu defterleri rafa koyacağım."
      }
    ],
    "easyDistractor": "Öğretmen : Lütfen sınıfını düzenli tut. Emma : Hayır, Kitapları yere atacağım.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "emma"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "giving_commands"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.207",
    "evidenceSentence": "Teacher : Please /keep your classroom tidy/"
  },
  {
    "id": "5_school_life_jack",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_jack.mp4",
    "title": "The assistant headmaster reminds Jack not to litter.",
    "transcript": "Assistant Headmaster : Jack, you /can't/ throw rubbish around. Jack : Okay, I'll pick it up.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Müdür Yardımcısı : Jack, Çöpleri etrafa atman yanlış. Jack : Tamam, atmayacağım."
      },
      {
        "id": "b",
        "text": "Müdür Yardımcısı : Jack, Çöpleri etrafa /atamazsın/. Jack : Tamam, Onu yerden alıp çöp kutusuna atacağım."
      }
    ],
    "easyDistractor": "Müdür Yardımcısı : Jack, Çöpleri etrafa atamazsın. Jack : Hayır, Onu yerde bırakacağım.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "jack"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "expressing_obligations_or_rules"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.288",
    "evidenceEnd": "0:03.062",
    "evidenceSentence": "Assistant Headmaster : Jack, you /can't/ throw rubbish around."
  },
  {
    "id": "5_school_life_olivia",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_olivia.mp4",
    "title": "The teacher reminds Olivia to raise her hand before speaking.",
    "transcript": "Teacher : Olivia, /raise your hand to speak/. Olivia : Okay!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Öğretmen : Olivia, /Konuşacak için elini kaldır/. Olivia : Tamam!"
      },
      {
        "id": "b",
        "text": "Öğretmen : Olivia, Konuşma lütfen. Olivia : Tamam!"
      }
    ],
    "easyDistractor": "Öğretmen : Olivia, Konuşmak için ayağa kalk. Olivia : Tamam!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "giving_commands"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.991",
    "evidenceSentence": "Teacher : Olivia, /raise your hand to speak/"
  },
  {
    "id": "5_school_life_jack_ethan",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_jack_ethan.mp4",
    "title": "Jack asks Ethan about the new basketball coach.",
    "transcript": "Jack : /Who/ is that man? Ethan : He's our new basketball coach.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Jack : Şu adamın işi ne? Ethan : O bizim yeni basketbol koçumuz."
      },
      {
        "id": "b",
        "text": "Jack : Şu adam /kim/? Ethan : O bizim yeni basketbol koçumuz."
      }
    ],
    "easyDistractor": "Jack : Şu adam öğretmen mi? Ethan : Evet, O bizim yeni basketbol koçumuz.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "jack",
      "ethan"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_about"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:01.427",
    "evidenceSentence": "Jack : /Who/ is that man?"
  },
  {
    "id": "5_school_life_benjamin_david_victoria",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_benjamin_david_victoria.mp4",
    "title": "Benjamin asks David who leads the technology club.",
    "transcript": "Benjamin : /Who/ is the technology club leader? David : Victoria is, She's near the computers.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Teknoloji kulübü lideri /kim/? David : Victoria, Bilgisayarların yanında."
      },
      {
        "id": "b",
        "text": "Benjamin : Ben teknoloji kulübü lideriyim. O kim? David : Onun adı Victoria."
      }
    ],
    "easyDistractor": "Benjamin : Teknoloji kulübü lideri sen misin? David : Evet, benim.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "benjamin",
      "david",
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_about"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.642",
    "evidenceSentence": "Benjamin : /Who/ is the technology club leader?"
  },
  {
    "id": "5_school_life_mia",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_mia.mp4",
    "title": "Mia asks the librarian what a book is about.",
    "transcript": "Mia : /What/ is this book /about/? Librarian : It's about planets and space.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Bu kitap /ne hakkında/? Kütüphaneci : Gezegenler ve uzay hakkında."
      },
      {
        "id": "b",
        "text": "Mia : Bu kitabın yazarı kim? Kütüphaneci : Ünlü bir uzay profesörü."
      }
    ],
    "easyDistractor": "Mia : Bu kitap ne hakkında? Kütüphaneci : Hayvanlar ve vahşi yaşam.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "asking_about"
    ],
    "theme": "School_life",
    "evidenceStart": "0:00.251",
    "evidenceEnd": "0:01.927",
    "evidenceSentence": "Mia : /What/ is this book /about/?"
  },
  {
    "id": "5_classroom_life_david",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_david.mp4",
    "title": "David describes his classroom responsibility before class.",
    "transcript": "Teacher : What do you do before class? David : I /open the windows/ and /check the desks/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Öğretmen : Dersten önce ne yaparsın? David : Pencereleri kapatırım, Sıraları dağıtırım."
      },
      {
        "id": "b",
        "text": "Öğretmen : Dersten önce ne yaparsın? David : /Pencereleri açarım/, /Sıraları kontrol ederim/."
      }
    ],
    "easyDistractor": "Öğretmen : Dersten önce ne yaparsın? David : Pencereleri açarım, Kitap okurum.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "david"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_roles"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:02.068",
    "evidenceEnd": "0:04.717",
    "evidenceSentence": "David : I /open the windows/ and /check the desks/"
  },
  {
    "id": "5_classroom_life_mia_noah",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_mia_noah.mp4",
    "title": "Mia asks Noah about his English study routine.",
    "transcript": "Mia : Do you study English every day? Noah : Yes, I /review my notes/ after school.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Her gün İngilizce çalışır mısın? Noah : Evet, Okuldan sonra /notlarımı gözden geçiririm/."
      },
      {
        "id": "b",
        "text": "Mia : Her gün İngilizce çalışır mısın? Noah : Hayır, Okuldan sonra ders çalışırım."
      }
    ],
    "easyDistractor": "Mia : Her gün İngilizce çalışır mısın? Noah : Evet, İngilizce şarkılar dinlerim.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "mia",
      "noah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_study_routines"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:02.659",
    "evidenceEnd": null,
    "evidenceSentence": "Noah : Yes, I /review my notes/ after school"
  },
  {
    "id": "5_classroom_life_chloe",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_chloe.mp4",
    "title": "Chloe asks the art teacher about scissors.",
    "transcript": "Chloe : /Are there/ any scissors in the bookcase? Art Teacher : /Yes, there are/, They're next to the glue.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Kitaplıktan makas alabilir miyim? Resim Öğretmeni : Evet alabilirsin Yapıştırıcının yanında."
      },
      {
        "id": "b",
        "text": "Chloe : Kitaplıkta makas /var mı/? Resim Öğretmeni : /Evet, Var/, Yapıştırıcının yanında."
      }
    ],
    "easyDistractor": "Chloe : Kitaplıkta kalem var mı? Resim Öğretmeni : Evet, Var, Yapıştırıcının yanında.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_there_is_there_are"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:00.304",
    "evidenceEnd": "0:03.446",
    "evidenceSentence": "Chloe : /Are there/ any scissors in the bookcase? Art Teacher : /Yes, there are/"
  },
  {
    "id": "5_classroom_life_daniel_victoria",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_daniel_victoria.mp4",
    "title": "Daniel asks Victoria about free seats near the smartboard.",
    "transcript": "Daniel : /Are there/ any free seats near the smartboard? Victoria : Yes, there are two.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Akıllı tahtanın yakınında boş yer /var mı/? Victoria : Evet, İki tane var."
      },
      {
        "id": "b",
        "text": "Daniel : Daniel : Akıllı tahta çalışıyor mu? Victoria : Evet, çalışıyor."
      }
    ],
    "easyDistractor": "Sınıfta akıllı tahta var mı? Victoria : Evet, bir tane var.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "daniel",
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_there_is_there_are"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.703",
    "evidenceSentence": "Daniel : /Are there/ any free seats near the smartboard?"
  },
  {
    "id": "5_classroom_life_ava",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_ava.mp4",
    "title": "Ava asks the assistant headmaster about a teacher in the classroom.",
    "transcript": "Ava : /Is there/ a teacher in the classroom? Assistant Headmaster : Yes, /there is/, She's beside the bookcase.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Öğretmen içeride mi? Müdür yardımcısı : Evet, içeride, Kitaplığın yanında."
      },
      {
        "id": "b",
        "text": "Ava : Sınıfta bir öğretmen /var mı/? Müdür yardımcısı : Evet, /Var/, Kitaplığın yanında."
      }
    ],
    "easyDistractor": "Ava : Sınıfta bir öğretmen var mı? Müdür yardımcısı : Evet, Var, Tahtanın yanında.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ava"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_there_is_there_are"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.775",
    "evidenceSentence": "Ava : /Is there/ a teacher in the classroom? Assistant Headmaster : Yes, /there is/"
  },
  {
    "id": "5_classroom_life_mia",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_mia.mp4",
    "title": "Mia asks her English teacher to borrow a dictionary.",
    "transcript": "Mia : /Can I borrow/ the dictionary? English Teacher : Yes, Take it. Mia : Thank you.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Sözlüğü /ödünç alabilir miyim/? İngilizce Öğretmeni : Evet, Alabilirsin. Mia : Teşekkür ederim."
      },
      {
        "id": "b",
        "text": "Mia : Sözlüğü kullanabilirim, değil mi? İngilizce Öğretmeni : Evet, Tabi ki. Mia : Teşekkürler."
      }
    ],
    "easyDistractor": "Mia : Sözlüğü ödünç alabilir miyim? İngilizce Öğretmeni : Evet, Masanın üstüne koy. Mia : Neden ki.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_object_pronouns"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:00.652",
    "evidenceEnd": "0:02.836",
    "evidenceSentence": "Mia : Sözlüğü /ödünç alabilir miyim/?"
  },
  {
    "id": "5_classroom_life_emma",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_emma.mp4",
    "title": "Emma agrees to hand worksheets out to the class.",
    "transcript": "Science Teacher : Emma, give these sheets to the class, please. Emma : Sure, I'll hand /them/ out. Science Teacher : Thank you.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Fen Öğretmeni : Emma, Bu kağıdı arkadaşına ver, lütfen. Emma : Tabii, bunu vereceğim. Fen Öğretmeni : Teşekkür ederim."
      },
      {
        "id": "b",
        "text": "Fen Öğretmeni : Emma, Bu kağıtları sınıfa dağıt, lütfen. Emma : Tabii, /Onları/ dağıtacağım. Fen Öğretmeni : Teşekkür ederim."
      }
    ],
    "easyDistractor": "Fen Öğretmeni : Emma, Bu kitapları sınıfa dağıt, lütfen. Emma : Tabii, Onları dağıtacağım. Fen Öğretmeni : Teşekkür ederim.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "emma"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_object_pronouns"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:02.586",
    "evidenceEnd": "0:04.785",
    "evidenceSentence": "Emma : Sure, I'll hand /them/ out."
  },
  {
    "id": "5_classroom_life_lucas",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_lucas.mp4",
    "title": "Lucas agrees to bring the balls to his coach.",
    "transcript": "Coach : Lucas, bring me the balls, please. Lucas : Okay, I'll get /them/. Coach : Thanks.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Antrenör : Lucas, Topları bana getir, lütfen. Lucas : Tamam, Onları getireceğim. Antrenör : Teşekkürler."
      },
      {
        "id": "b",
        "text": "Antrenör : Lucas, Topları bana getir, lütfen. Lucas : Tamam, Onu getireceğim. Antrenör : Teşekkürler."
      }
    ],
    "easyDistractor": "Antrenör : Lucas, Raketleri bana getir, lütfen. Lucas : Tamam, Onları getireceğim. Antrenör : Teşekkürler.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "lucas"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_object_pronouns"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:01.945",
    "evidenceEnd": "0:04.048",
    "evidenceSentence": "Lucas : Okay, I'll get /them/"
  },
  {
    "id": "5_classroom_life_daniel",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_daniel.mp4",
    "title": "Daniel politely asks for permission to go to the restroom.",
    "transcript": "Daniel : /May I/ go to the restroom? Teacher : Yes, but come back quickly. Daniel : Thank you, I will.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Lavaboya gideceğim. Öğretmen : Evet, Ama çabuk geri gel. Daniel : Teşekkür ederim, Geleceğim."
      },
      {
        "id": "b",
        "text": "Daniel : Lavaboya /gidebilir miyim/? Öğretmen : Evet, Ama çabuk geri gel. Daniel : Teşekkür ederim, Geleceğim."
      }
    ],
    "easyDistractor": "Daniel : Tuvalete gidebilir miyim? Öğretmen : Evet, Ama sessiz ol. Daniel : Teşekkür ederim, Olacağım.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "daniel"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "permission"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:00.365",
    "evidenceEnd": "0:02.257",
    "evidenceSentence": "Daniel : /May I/ go to the restroom?"
  },
  {
    "id": "5_classroom_life_benjamin_jack",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_benjamin_jack.mp4",
    "title": "Benjamin asks Jack for the time at breaktime.",
    "transcript": "Benjamin : What time is it? Jack : It's /half past ten/, It's breaktime!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Saat kaç? Jack : Saat on buçuk, Teneffüs zamanı!"
      },
      {
        "id": "b",
        "text": "Benjamin : Saat kaç? Jack : Saat /onu çeyrek geçiyor/, Tenefüs zamanı!"
      }
    ],
    "easyDistractor": "Benjamin : Saat kaç? Jack : Saat onu çeyrek geçiyor, Ders başlıyor!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "benjamin",
      "jack"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "telling_time"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:01.703",
    "evidenceEnd": "0:03.196",
    "evidenceSentence": "Jack : It's /half past/ ten"
  },
  {
    "id": "5_classroom_life_noah",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_noah.mp4",
    "title": "Noah asks the school secretary for the time.",
    "transcript": "Noah : Excuse me, What time is it? School Secretary : It's /quarter past one/. Noah : Thank you.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : Affedersiniz, Saat kaç? Okul Sekreteri : Saat bir buçuk. Noah : Teşekkür ederim."
      },
      {
        "id": "b",
        "text": "Noah : Affedersiniz, Saat kaç? Okul Sekreteri : Saat /biri çeyrek geçiyor/. Noah : Teşekkür ederim."
      }
    ],
    "easyDistractor": "Noah : Affedersiniz, Saat kaç? Okul Sekreteri : Saat bir. Noah : Teşekkür ederim.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "noah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "telling_time"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:03.331",
    "evidenceEnd": "0:04.859",
    "evidenceSentence": "Secretary : It's /quarter past one/"
  },
  {
    "id": "5_classroom_life_victoria_ethan",
    "status": "published",
    "videoSrc": "assets/video/5_classroom_life_victoria_ethan.mp4",
    "title": "Ethan asks Victoria when information technology begins.",
    "transcript": "Ethan : What time does information technology start? Victoria : It starts at /nine/ o'clock.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ethan : Bilişim teknolojisi saat kaçta başlıyor? Victoria : Saat sekizde başlıyor."
      },
      {
        "id": "b",
        "text": "Ethan : Bilişim teknolojisi saat kaçta başlıyor? Victoria : Saat /dokuzda/ başlıyor."
      }
    ],
    "easyDistractor": "Ethan : Bilişim teknolojisi kaçta başlıyor? Victoria : Saat onda başlıyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "victoria",
      "ethan"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_wh_questions_what_time",
      "telling_time"
    ],
    "theme": "Classroom_life",
    "evidenceStart": "0:02.765",
    "evidenceEnd": "0:04.541",
    "evidenceSentence": "Victoria : It starts at /nine/ o'clock."
  },
  {
    "id": "life_in_neighborhood_ava_benjamin_buddy",
    "status": "published",
    "videoSrc": "assets/video/life_in_neighborhood_ava_benjamin_buddy.mp4",
    "title": "Ava calls Buddy back while Benjamin holds the leash.",
    "transcript": "Ava : Buddy, /come back/! Benjamin : Don't worry, I've got the leash!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Buddy, Orada kal, Benjamin : Endişelenme, Tasmayı tuttum!"
      },
      {
        "id": "b",
        "text": "Ava : Buddy, /Geri gel/, Benjamin : Endişelenme, Tasmayı tuttum!"
      }
    ],
    "easyDistractor": "Ava : Buddy, Yavaşla! Benjamin : Endişelenme, Tasmayı tuttum!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ava",
      "benjamin",
      "buddy"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "imperatives"
    ],
    "theme": "life_in_neighborhood",
    "evidenceStart": "0:04.309",
    "evidenceEnd": "0:05.931",
    "evidenceSentence": "Ava : Buddy, /come back/!"
  },
  {
    "id": "life_in_nature_emma_hannah_storm",
    "status": "published",
    "videoSrc": "assets/video/life_in_nature_emma_hannah_storm.mp4",
    "title": "Emma helps Storm by moving a branch.",
    "transcript": "Hannah : Storm is afraid of the branch! Emma : Hold on, I/will/ move it!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Storm daldan korktu, Emma : Bekle, Onu kaldır/acağım/!"
      },
      {
        "id": "b",
        "text": "Hannah : Storm daldan korktu, Emma : Bekle, Onu kaldırmam lazım!"
      }
    ],
    "easyDistractor": "Hannah : Storm daldan korktu! Emma : Bekle, Onu daha yakına getireceğim!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "emma",
      "hannah",
      "storm"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_to_be_present",
      "future_response_ill"
    ],
    "theme": "life_in_nature",
    "evidenceStart": "0:05.374",
    "evidenceEnd": "0:07.647",
    "evidenceSentence": "Emma : Hold on, I/will/ move it"
  },
  {
    "id": "5_personal_life_mia_hannah",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_mia_hannah.mp4",
    "title": "Mia asks Hannah how she travels to school.",
    "transcript": "Mia : How do you go to school? Hannah : I /ride my bike/ every morning.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Okula nasıl gidersin? Hannah : Her sabah otobüse binerim."
      },
      {
        "id": "b",
        "text": "Mia : Okula nasıl gidersin? Hannah : Her sabah /bisikletime binerim./"
      }
    ],
    "easyDistractor": "Mia : Okula nasıl gidersin? Hannah : Her sabah yürüyerek giderim.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "mia",
      "hannah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_simple_present_tense_for_habbits"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:02.857",
    "evidenceEnd": "0:04.738",
    "evidenceSentence": "Hannah : I /ride my bike/ every morning."
  },
  {
    "id": "5_personal_life_chloe_ava",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_chloe_ava.mp4",
    "title": "Chloe asks Ava about her morning routine before school.",
    "transcript": "Chloe : What do you do before school? Ava : I /feed/ Buddy and /fill his bowl/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Okuldan önce ne yaparsın? Ava : Buddy'yi /beslerim/ ve onun kabını doldururum."
      },
      {
        "id": "b",
        "text": "Chloe : Okuldan önce ne yaparsın? Ava : Buddy'yi gezdiririm ve onun tasmasını hazırlarım."
      }
    ],
    "easyDistractor": "Chloe : Okuldan önce ne yaparsın? Ava : Buddy'yi beslerim ve onun oyuncağını doldururum.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "chloe",
      "ava",
      "buddy"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_simple_present_tense_for_habbits"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:02.288",
    "evidenceEnd": "0:04.744",
    "evidenceSentence": "Ava : I /feed/ Buddy and /fill his bowl/."
  },
  {
    "id": "5_school_life_ella_olivia_2",
    "status": "published",
    "videoSrc": "assets/video/5_school_life_ella_olivia_2.mp4",
    "title": "Olivia catches Ella's balloon string.",
    "transcript": "Olivia : My balloon is gett/ing/ away, I caught the string!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : Balonum kaçtı, onu yakaladım!"
      },
      {
        "id": "b",
        "text": "Olivia : Balonum kaçı/yor/, ipi yakaladım!"
      }
    ],
    "easyDistractor": "Ella : Balonum kaçıyor! Olivia : Balonumu yakaladım!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ella",
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive"
    ],
    "theme": "School_life",
    "evidenceStart": "0:03.609",
    "evidenceEnd": "0:05.693",
    "evidenceSentence": "Olivia : My balloon is gett/ing/ away"
  },
  {
    "id": "5_personal_life_zoe_lucas",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_zoe_lucas.mp4",
    "title": "Zoe asks Lucas about his football routine.",
    "transcript": "Zoe : You stretch your legs before football, /don't you/? Lucas : Yes, every time.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : Futboldan önce bacaklarını esnetirsin, /değil mi/? Lucas : Evet, her seferinde."
      },
      {
        "id": "b",
        "text": "Zoe : Futboldan önce hep bunu mu yapıyorsun? Lucas : Evet, her seferinde."
      }
    ],
    "easyDistractor": "Zoe : Futboldan önce bacaklarını esnetirsin, değil mi? Lucas : Hayır, hiç esnetmem.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "zoe",
      "lucas"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_simple_present_tense_for_habbits",
      "tag_questions"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:03.136",
    "evidenceSentence": "Zoe : You stretch your legs before football, /don't you/?"
  },
  {
    "id": "5_personal_life_olivia_victoria",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_olivia_victoria.mp4",
    "title": "Victoria asks Olivia how often she takes photos.",
    "transcript": "Victoria : /How often/ do you take photos? Olivia : I take photos everytime!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Victoria : Ne zaman fotoğraf çekersin? Olivia : Sürekli fotoğraf çekerim!"
      },
      {
        "id": "b",
        "text": "Victoria : /Ne sıklıkla/ fotoğraf çekersin? Olivia : Sürekli fotoğraf çekerim!"
      }
    ],
    "easyDistractor": "Victoria : Ne sıklıkla fotoğraf çekersin? Olivia : Hiç fotoğraf çekmem!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "olivia",
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "frequency_adverbs"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:00.403",
    "evidenceEnd": "0:02.228",
    "evidenceSentence": "Victoria : /How often/ do you take photos?"
  },
  {
    "id": "5_personal_life_noah_victoria",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_noah_victoria.mp4",
    "title": "Noah asks Victoria about her chess move.",
    "transcript": "Noah : Do you always use that move? Victoria : No, I /rarely/ use it.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : O hamleyi her zaman kullanır mısın? Victoria : Evet, onu her oyunda kullanırım."
      },
      {
        "id": "b",
        "text": "Noah : O hamleyi her zaman kullanır mısın? Victoria : Hayır, onu /nadiren/ kullanırım."
      }
    ],
    "easyDistractor": "Noah : O hamleyi her zaman kullanır mısın? Victoria : Hayır, satranç oynamam.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "noah",
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "frequency_adverbs"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:03.614",
    "evidenceEnd": "0:06.104",
    "evidenceSentence": "Victoria : No, I /rarely/ use it."
  },
  {
    "id": "5_personal_life_ava_hannah",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_ava_hannah.mp4",
    "title": "Hannah asks Ava about bringing a hiking map.",
    "transcript": "Hannah : You bring a map when you hike, /don't you/? Ava : /Always/, so I never get lost.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Doğa yürüyüşü yaparken harita getirir misin? Ava : Bazen, ama yine de yolumu bulurum."
      },
      {
        "id": "b",
        "text": "Hannah : Doğa yürüyüşü yaparken harita getirirsin, /öyle değil mi/? Ava : /Her zaman/, böylece asla kaybolmam."
      }
    ],
    "easyDistractor": "Hannah : Doğa yürüyüşü yaparken harita getirirsin, değil mi? Ava : Her zaman, böylece hızlı yürürüm.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ava",
      "hannah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "use_of_simple_present_tense",
      "frequency_adverbs",
      "tag_questions"
    ],
    "theme": "life_in_nature",
    "evidenceStart": null,
    "evidenceEnd": null,
    "evidenceSentence": "Hannah : You bring a map when you hike, /don't you/? Ava : /Always/, so I never get lost."
  },
  {
    "id": "5_personal_life_ella_benjamin",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_ella_benjamin.mp4",
    "title": "Ella asks Benjamin about walking in the park.",
    "transcript": "Ella : Do you walk in the park? Benjamin : I often come here after dinner.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Parkta yürüyüş yapar mısın? Benjamin : Akşam yemeğinden sonra /sık sık/ buraya gelirim."
      },
      {
        "id": "b",
        "text": "Ella : Parkta yürüyüş yapar mısın? Benjamin : Akşam yemeğinden sonra nadiren buraya gelirim."
      }
    ],
    "easyDistractor": "Ella : Parkta yürüyüş yapar mısın? Benjamin : Buraya nadiren gelirim.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ella",
      "benjamin"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "frequency_adverbs"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:01.854",
    "evidenceEnd": "0:03.734",
    "evidenceSentence": "Benjamin : I /often/ come here after dinner."
  },
  {
    "id": "5_personal_life_emma_hannah",
    "status": "published",
    "videoSrc": "assets/video/5_personal_life_emma_hannah.mp4",
    "title": "Emma asks Hannah about her raincoat.",
    "transcript": "Emma : Is this your raincoat? Hannah : Yes, my mother bought it for hiking.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : Bu /senin/ yağmurluğun mu? Hannah : Evet, annem bana doğa yürüyüşü için aldı."
      },
      {
        "id": "b",
        "text": "Emma : Bu onun yağmurluğu mu? Hannah : Evet, babam ona yürüyüşü için aldı."
      }
    ],
    "easyDistractor": "Emma : Bu senin yağmurluğun mu? Hannah : Evet, annem onu okul için aldı.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "emma",
      "hannah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "possessive_adjective"
    ],
    "theme": "personal_life",
    "evidenceStart": "0:00.406",
    "evidenceEnd": "0:01.90",
    "evidenceSentence": "Emma : Is this /your/ raincoat?"
  },
  {
    "id": "5_family_life_chloe_julien",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_chloe_julien.mp4",
    "title": "Chloe asks Julien about organising the living room.",
    "transcript": "Chloe : What are you do/ing/, Dad? Julien : I/'m organising/ the living room.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : Ne yapacaksın, baba? Julien : Biraz dinleneceğim."
      },
      {
        "id": "b",
        "text": "Chloe : Ne yapıyorsun, baba? Julien : Oturma odasını /düzenliyorum/."
      }
    ],
    "easyDistractor": "Chloe : Ne yapıyorsun, baba? Julien : Oturma odasını temizleyeceğim.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "chloe",
      "julien",
      "luna"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.331",
    "evidenceEnd": "0:04.482",
    "evidenceSentence": "Chloe : What are you do/ing/, Dad? Julien : I/'m organising/ the living room."
  },
  {
    "id": "5_family_life_olivia_fiona",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_olivia_fiona.mp4",
    "title": "Olivia asks Fiona about their museum plans.",
    "transcript": "Olivia : /Are/ we visit/ing/ the museum /tomorrow/? Fiona : Yes, we/'re seeing/ the photography exhibition.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : /Yarın/ müzeye gidiyor muyuz? Fiona : Evet, fotoğraf sergisini gezi/yor/uz."
      },
      {
        "id": "b",
        "text": "Olivia : Bugün müzeye gidecek miyiz? Fiona : Hayır, akvaryuma gidiyoruz."
      }
    ],
    "easyDistractor": "Olivia : Yarın müzeyi ziyaret ediyor muyuz? Fiona : Evet, hayvanat bahçesini geziyoruz.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "olivia",
      "fiona"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive_for_planned_future"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:04.550",
    "evidenceSentence": "Olivia : /Are/ we visit/ing/ the museum /tomorrow/? Fiona : Yes, we/'re seeing/ the photography exhibition."
  },
  {
    "id": "5_family_life_benjamin_oliver",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_benjamin_oliver.mp4",
    "title": "Benjamin asks Oliver about his morning swimming routine.",
    "transcript": "Benjamin : You /usually/ swim in the morning, Dad. Oliver : Yes, but I/'m/ rest/ing/ today.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Baba, /genellikle/ sabahları yüzersin. Oliver : Evet, ama bugün dinleni/yor/um."
      },
      {
        "id": "b",
        "text": "Benjamin : Baba, her gün sabahları yüzersin. Oliver : Evet, ama bugün yüzmeye gitmiyorum."
      }
    ],
    "easyDistractor": "Benjamin : Baba, genellikle sabahları yüzersin. Oliver : Hayır, hiç yüzmem.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "benjamin",
      "oliver"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive_vs_present_simple",
      "frequency_adverbs"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:05.311",
    "evidenceSentence": "Benjamin : You /usually/ swim in the morning, Dad. Oliver : Yes, but I/'m/ rest/ing/ today."
  },
  {
    "id": "5_family_life_jack_callum",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_jack_callum.mp4",
    "title": "Jack asks Callum about their afternoon plans.",
    "transcript": "Jack : What are we do/ing/ this afternoon? Callum : We/'re/ visit/ing/ your grandparents.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Jack : Öğlenleri ne yaparsın, baba? Callum : Genellikle büyükanne büyükbabanı ziyaret ederim."
      },
      {
        "id": "b",
        "text": "Jack : Bu öğleden sonra ne yapı/yor/uz? Callum : Büyükannenle büyükbabanı ziyaret edi/yor/uz."
      }
    ],
    "easyDistractor": "Jack : Bu öğleden sonra ne yapıyoruz? Callum : Evde televizyon izliyoruz.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "jack",
      "callum"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive_for_planned_future"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.797",
    "evidenceEnd": "0:04.876",
    "evidenceSentence": "Jack : What are we do/ing/ this afternoon? Callum : We/'re/ visit/ing/ your grandparents."
  },
  {
    "id": "5_family_life_daniel_javier",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_daniel_javier.mp4",
    "title": "Daniel asks Javier about fixing his bicycle.",
    "transcript": "Daniel : You /usually/ fix cars, Dad. Javier : Yes, but I/'m/ fix/ing/ my bicycle today.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Baba, /genellikle/ arabaları tamir edersin. Javier : Evet, ama bugün bisikletimi tamir edi/yor/um."
      },
      {
        "id": "b",
        "text": "Daniel : Baba, sık sık bisikleti tamir ediyorsun. Javier : Evet, ama birazdan arabamı onaracağım."
      }
    ],
    "easyDistractor": "Daniel : Baba, genellikle arabaları tamir edersin. Javier : Hayır, bugün hiçbir şey yapmıyorum.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "daniel",
      "javier"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive_vs_present_simple",
      "frequency_adverbs"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:05.596",
    "evidenceSentence": "Daniel : You /usually/ fix cars, Dad. Javier : Yes, but I/'m/ fix/ing/ my bicycle today."
  },
  {
    "id": "5_family_life_lucas_gabriel",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_lucas_gabriel.mp4",
    "title": "Lucas learns that Gabriel is having a picnic today.",
    "transcript": "Lucas : You /usually/ work on Saturdays, Dad. Gabriel : Yes, but we/'re/ hav/ing/ a picnic today. Lucas : Yesss!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Lucas : Baba, /genellikle/ cumartesileri çalışırsın. Gabriel : Evet, ama bugün piknik yapı/yor/uz. Lucas : Yaşasın!"
      },
      {
        "id": "b",
        "text": "Lucas : Baba, her zaman cumartesileri çalışırsın. Gabriel : Evet, ama bugün çalışmıyorum. Lucas : Yaşasın!"
      }
    ],
    "easyDistractor": "Lucas : Baba, genellikle cumartesileri çalışırsın. Gabriel : Evet, ama bugün evde kalıyoruz. Lucas : Yaşasın!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "lucas",
      "gabriel"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive_vs_present_simple",
      "frequency_adverbs"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.831",
    "evidenceEnd": "0:05.992",
    "evidenceSentence": "Lucas : You /usually/ work on Saturdays, Dad. Gabriel : Yes, but we/'re/ hav/ing/ a picnic today."
  },
  {
    "id": "5_family_life_zoe_eleni",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_zoe_eleni.mp4",
    "title": "Zoe checks whether Eleni is planting flowers for spring.",
    "transcript": "Zoe : /You're/ plant/ing/ flowers for spring, /aren't you/, Mum? Eleni : Yes, I am, I'm planting the last one.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : Anne, bahar için çiçek dikiyorsun, /değil mi/? Eleni : Evet, sonuncusunu dikiyorum."
      },
      {
        "id": "b",
        "text": "Zoe : Anne, bahar için çiçek mi dikiyorsun? Eleni : Çoktan diktim şimdi suluyorum."
      }
    ],
    "easyDistractor": "Zoe : Anne, bahar için çiçek dikiyorsun, değil mi? Eleni : Hayır, sebze ekiyorum.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "zoe",
      "eleni"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive",
      "tag_questions"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:03.419",
    "evidenceSentence": "Zoe : /You're/ plant/ing/ flowers for spring, /aren't you/, mum?"
  },
  {
    "id": "5_family_life_ava_david",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_ava_david.mp4",
    "title": "Ava checks whether David is photographing the birds.",
    "transcript": "Ava : You're taking photos of the birds, /aren't you/, Dad? David : Yes, I/'m/ wait/ing/ for the perfect shot.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : Baba, kuşların fotoğrafını çekiyorsun, /değil mi/? David : Evet, mükemmel kareyi bekli/yor/um."
      },
      {
        "id": "b",
        "text": "Ava : Baba, kuşun havalanmasını mı bekliyorsun? David : Evet, o zaman mükemmel olacak."
      }
    ],
    "easyDistractor": "Ava : Baba, kuşların fotoğrafını çekiyorsun, değil mi? David : Hayır, onları izlemiyorum.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ava",
      "david_ava"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive",
      "tag_questions"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:03.007",
    "evidenceSentence": "Ava : You're taking photos of the birds, /aren't you/, Dad?"
  },
  {
    "id": "5_family_life_benjamin_oliver_emily",
    "status": "published",
    "videoSrc": "assets/video/5_family_life_benjamin_oliver_emily.mp4",
    "title": "Benjamin learns that Emily is planning their family holiday.",
    "transcript": "Benjamin : You /always/ plan holidays for other people, Mum. Emily : Yes, but I/'m/ plann/ing/ for us today. Benjamin : This one looks so cool!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Anne, /hep/ başka insanlar için tatil planlarsın. Emily : Evet, ama bugün bizim için planlı/yor/um. Benjamin : Bu çok harika görünüyor!"
      },
      {
        "id": "b",
        "text": "Benjamin : Anne, genellikle başkaları için tatil planlarsın. Emily : Evet, ama bugün bizim için çalışıyorum. Benjamin : Bu çok harika görünüyor!"
      }
    ],
    "easyDistractor": "Benjamin : Anne, her zaman başka insanlar için tatil planlarsın. Emily : Hayır, bugün tatil planlamıyorum. Benjamin : Bu çok harika görünüyor!",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "benjamin",
      "emily",
      "oliver"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "present_progressive_vs_present_simple"
    ],
    "theme": "family_life",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:05.661",
    "evidenceSentence": "Benjamin : Anne, /hep/ başka insanlar için tatil planlarsın. Emily : Evet, ama bugün bizim için planlı/yor/um."
  },
  {
    "id": "5_life_in_the_city_ella_olivia2",
    "status": "published",
    "videoSrc": "assets/video/5_life_in_the_city_ella_olivia2.mp4",
    "title": "Ella and Olivia compare a skyscraper and an old tower.",
    "transcript": "Ella : That skyscraper is tall/er than/ the tower. Olivia : Yes, but the tower is much old/er/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : O gökdelen kuleden daha güzel. Olivia : Evet, ama kule çok daha eski."
      },
      {
        "id": "b",
        "text": "Ella : O gökdelen kuleden /daha uzun/. Olivia : Evet, ama kule çok daha eski."
      }
    ],
    "easyDistractor": "Ella : O gökdelen kuleden daha uzun. Olivia : Evet, ama kule çok daha yeni.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ella",
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "comparatives_of_adjectives"
    ],
    "theme": "life_in_the_city",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.959",
    "evidenceSentence": "Ella : That skyscraper is tall/er than/ the tower."
  },
  {
    "id": "5_life_in_the_city_ella_olivia",
    "status": "published",
    "videoSrc": "assets/video/5_life_in_the_city_ella_olivia.mp4",
    "title": "Ella and Olivia compare two pairs of shoes.",
    "transcript": "Ella : I like those shoes. Olivia : Me too, but these are cheap/er/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Şu ayakkabıları beğendim. Olivia : Ben de, ama bunlar /daha ucuz/."
      },
      {
        "id": "b",
        "text": "Ella : O ayakkabıları beğendim. Olivia : Ben de, ama bunlar daha pahalı."
      }
    ],
    "easyDistractor": "Ella : O ayakkabıları beğenmiyorum. Olivia : Ben de, ama bunlar daha ucuz.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ella",
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "comparatives_of_adjectives",
      "agreeing"
    ],
    "theme": "life_in_the_city",
    "evidenceStart": "0:01.965",
    "evidenceEnd": "0:04.365",
    "evidenceSentence": "Olivia : Me too, but these are cheap/er/."
  },
  {
    "id": "5_life_in_the_city_benjamin_jack",
    "status": "published",
    "videoSrc": "assets/video/5_life_in_the_city_benjamin_jack.mp4",
    "title": "Benjamin and Jack enjoy a quieter place for fishing.",
    "transcript": "Benjamin : It’s quiet/er/ here /than/ in town. Jack : Much /better/ for fishing.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Burası şehir merkezi gibi güzel. Jack : Balık tutmak için çok iyi."
      },
      {
        "id": "b",
        "text": "Benjamin : Burası şehirden /daha sessiz/. Jack : Balık tutmak için çok /daha iyi/."
      }
    ],
    "easyDistractor": "Benjamin : Burası şehirden daha sessiz. Jack : Balık tutmak için çok daha kötü.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "benjamin",
      "jack"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "comparatives_of_adjectives"
    ],
    "theme": "life_in_the_city",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:03.380",
    "evidenceSentence": "Benjamin : It’s quiet/er/ here /than/ in town. Jack : Much /better/ for fishing."
  },
  {
    "id": "5_life_in_the_city_daniel_lucas",
    "status": "published",
    "videoSrc": "assets/video/5_life_in_the_city_daniel_lucas.mp4",
    "title": "Daniel and Lucas visit a larger sports centre.",
    "transcript": "Daniel : This place is bigg/er than/ our school gym. Lucas : Yeah, I already feel strong/er/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Burası okul spor salonumuzdan /daha büyük/. Lucas : Evet, şimdiden /daha güçlü/ hissediyorum."
      },
      {
        "id": "b",
        "text": "Daniel : Burası okul spor salonumuzdan daha pahalı. Lucas : Evet, şimdiden daha fakir hissediyorum."
      }
    ],
    "easyDistractor": "Daniel : Burası okul spor salonumuzdan daha büyük. Lucas : Evet, şimdiden daha yorgun hissediyorum.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "daniel",
      "lucas"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "comparatives_of_adjectives"
    ],
    "theme": "life_in_the_city",
    "evidenceStart": "0:00.043",
    "evidenceEnd": "0:05.838",
    "evidenceSentence": "Daniel : This place is bigg/er than/ our school gym. Lucas : Yeah, I already feel strong/er/."
  },
  {
    "id": "5_life_in_the_city_victoria_noah",
    "status": "published",
    "videoSrc": "assets/video/5_life_in_the_city_victoria_noah.mp4",
    "title": "Victoria and Noah compare two art galleries.",
    "transcript": "Noah : This gallery looks brand new. Victoria : Yeah, it’s /more/ modern /than/ the old one, Ah, it's clean/er/ now.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : Bu galeri çok eski görünüyor. Victoria : Evet, ama eskisinden daha az modern, ah, şimdi temiz oldu."
      },
      {
        "id": "b",
        "text": "Noah : Bu galeri yepyeni görünüyor. Victoria : Evet, eskisinden /daha modern/, Ah, şimdi /daha temiz/."
      }
    ],
    "easyDistractor": "Noah : Bu galeri yepyeni görünüyor. Victoria : Evet, ama eskisinden çok daha eski, ah, şimdi daha temiz.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "victoria",
      "noah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "comparatives_of_adjectives"
    ],
    "theme": "life_in_the_city",
    "evidenceStart": "0:01.946",
    "evidenceEnd": "0:07.090",
    "evidenceSentence": "Victoria : Yeah, it’s /more/ modern /than/ the old one, Ah, it's clean/er/ now."
  },
  {
    "id": "5_life_in_the_city_hannah",
    "status": "published",
    "videoSrc": "assets/video/5_life_in_the_city_hannah.mp4",
    "title": "Hannah's family compares two places to visit.",
    "transcript": "Hannah : Are we going to street fair first? Ingrid : Yes, it's clos/er than/ the sports center. Lars : And hopefully /less/ crowded.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : Önce sokak fuarına mı gidiyoruz? Ingrid : Evet, spor merkezinden /daha yakın/. Lars : Ve umarım /daha az/ kalabalık."
      },
      {
        "id": "b",
        "text": "Hannah : Önce sokak fuarına mı gidiyoruz? Ingrid : Evet, spor merkezinden daha uzak. Lars : Ve umarım daha kalabalık."
      }
    ],
    "easyDistractor": "Hannah : Önce sokak fuarına mı gidiyoruz? Ingrid : Hayır, spor merkezi daha yakın. Lars : Ve umarım daha az kalabalık.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "hannah",
      "ingrid",
      "lars"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "comparatives_of_adjectives"
    ],
    "theme": "life_in_the_city",
    "evidenceStart": "0:03.990",
    "evidenceEnd": "0:09.383",
    "evidenceSentence": "Ingrid : Yes, it's clos/er than/ the sports center. Lars : And hopefully /less/ crowded."
  },
  {
    "id": "5_life_in_the_city_daniel_hannah",
    "status": "published",
    "videoSrc": "assets/video/5_life_in_the_city_daniel_hannah.mp4",
    "title": "Daniel and Hannah compare the speed of a scooter and Storm.",
    "transcript": "Daniel : My scooter is so fast! Hannah : But Storm is /faster/!",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : Scooterım çok hızlı! Hannah : Ama Storm en hızlı!"
      },
      {
        "id": "b",
        "text": "Daniel : Scooterım çok hızlı! Hannah : Ama Storm /daha hızlı/!"
      }
    ],
    "easyDistractor": "Daniel : Scooterım çok yavaş! Hannah : Ama Storm daha hızlı!",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "daniel",
      "hannah",
      "storm"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "comparatives_of_adjectives"
    ],
    "theme": "life_in_the_city",
    "evidenceStart": "0:02.689",
    "evidenceEnd": "0:05.359",
    "evidenceSentence": "Hannah : But Storm is /faster/"
  },
  {
    "id": "5_life_in_the_city_ava_chloe",
    "status": "published",
    "videoSrc": "assets/video/5_life_in_the_city_ava_chloe.mp4",
    "title": "Ava and Chloe help a woman notice her bag.",
    "transcript": "Chloe : That /woman's bag/ is still on the bench. Ava : She hasn't noticed, excuse me! Woman : Thank you, sweetie.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : O /kadının çantası/ hâlâ bankta. Ava : Fark etmedi, affedersiniz! Woman : Teşekkür ederim, tatlım."
      },
      {
        "id": "b",
        "text": "Chloe : O kadın çantasısını bankta unuttu. Ava : Fark etmedi, affedersiniz! Woman : Teşekkür ederim, tatlım."
      }
    ],
    "easyDistractor": "Chloe : O kadının çantası bankın altında. Ava : Fark etmedi, affedersiniz! Woman : Teşekkür ederim, tatlım.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ava",
      "chloe",
      "woman"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "possessive_adjective"
    ],
    "theme": "life_in_the_city",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:02.460",
    "evidenceSentence": "Chloe : That /woman's bag/ is still on the bench."
  },
  {
    "id": "5_life_in_the_city_jack_david",
    "status": "published",
    "videoSrc": "assets/video/5_life_in_the_city_jack_david.mp4",
    "title": "David comments on Jack's dad's fishing rod.",
    "transcript": "David : Your /dad's/ fishing rod is tall/er than/ you. Jack : Yeah, and he still expects me to carry it.",
    "answerOptions": [
      {
        "id": "a",
        "text": "David : Babanın oltası senden daha büyük. Jack : Evet, ve hâlâ onu taşımamı istiyor."
      },
      {
        "id": "b",
        "text": "David : /Babanın/ oltası senden /daha uzun/. Jack : Evet, ve hernedense onu taşımamı bekliyor."
      }
    ],
    "easyDistractor": "David : Babanın olta kamışı senden daha uzun. Jack : Evet, ve hâlâ onunla balık tutmamı bekliyor.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "jack",
      "david"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "possessive_adjective",
      "comparatives_of_adjectives"
    ],
    "theme": "life_in_the_city",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:03.100",
    "evidenceSentence": "David : Your dad's fishing rod is tall/er than/ you."
  },
  {
    "id": "introduce_best_friend_ava",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_ava.mp4",
    "title": "Ava introduces her best friend, Chloe.",
    "transcript": "Ava : She is a polite and /sensitive/ person, We like /going shopping/ together.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ava : O kibar ve sabırsız bir insan, Birlikte internete girmeyi seviyoruz."
      },
      {
        "id": "b",
        "text": "Ava : O kibar ve /hassas/ bir insan, Birlikte /alışverişe gitmeyi/ seviyoruz."
      }
    ],
    "easyDistractor": "Ava : Merhaba! En iyi arkadaşım Chloe. O kibar ve hassas bir insan. Birlikte futbol oynamayı seviyoruz.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ava",
      "chloe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "talking_about_hobbies",
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.491",
    "evidenceEnd": "0:07.053",
    "evidenceSentence": "Ava : She is a polite and /sensitive/ person. We like /going shopping/ together."
  },
  {
    "id": "introduce_best_friend_benjamin",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_benjamin.mp4",
    "title": "Benjamin talks about his best friend, Jack.",
    "transcript": "Benjamin : We like /going fishing/ together, but he can be a bit /stubborn/ at times.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Benjamin : Birlikte /balık tutmaya gitmeyi/ seviyoruz, ama o bazen biraz /inatçı/ olabiliyor."
      },
      {
        "id": "b",
        "text": "Benjamin : Birlikte yüzmeye gitmeyi seviyoruz, o her zaman çok sabırlı biridir."
      }
    ],
    "easyDistractor": "Benjamin : Birlikte ağaca çıkmayı seviyoruz, ama o bazen biraz inatçı olabiliyor.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "benjamin",
      "jack"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "talking_about_hobbies",
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:06.374",
    "evidenceEnd": null,
    "evidenceSentence": "Benjamin : We like /going fishing/ together, but he can be a bit /stubborn/ at times."
  },
  {
    "id": "introduce_best_friend_chloe",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_chloe.mp4",
    "title": "Chloe talks about her best friend, Ava.",
    "transcript": "Chloe : She is a thoughtful and /responsible/ girl, We like /going to the zoo/ together.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Chloe : O düşünceli ve /sorumlu/ bir kız, Birlikte /hayvanat bahçesine gitmeyi/ seviyoruz."
      },
      {
        "id": "b",
        "text": "Chloe : O düşünceli ve unutkan bir kız, Birlikte milli parka gitmeyi seviyoruz."
      }
    ],
    "easyDistractor": "Chloe : O düşünceli ve sorumlu bir kız, Birlikte alışverişe gitmeyi seviyoruz.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "chloe",
      "ava"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "talking_about_hobbies",
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:04.010",
    "evidenceEnd": "0:09.020",
    "evidenceSentence": "Chloe : She is a thoughtful and /responsible/ girl, We like /going to the zoo/ together."
  },
  {
    "id": "introduce_best_friend_daniel",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_daniel.mp4",
    "title": "Daniel talks about his best friend, Lucas.",
    "transcript": "Daniel : He is /determined/ and energetic, We always have fun /playing sports/ together.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Daniel : O sabırlı ve enerjik, Birlikte her zaman idman yaparken eğleniriz."
      },
      {
        "id": "b",
        "text": "Daniel : O /kararlı/ ve enerjik, Birlikte her zaman spor yaparken eğleniriz."
      }
    ],
    "easyDistractor": "Daniel : O kararlı ve enerjik, Birlikte bazen spor yaparken eğleniriz.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "daniel",
      "lucas"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "talking_about_hobbies",
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.490",
    "evidenceEnd": "0:09.042",
    "evidenceSentence": "Daniel : He is /determined/ and energetic, We always have fun /playing sports/ together."
  },
  {
    "id": "introduce_best_friend_ella_part1",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_ella.mp4",
    "videoEnd": "0:04.500",
    "title": "Ella talks about Olivia's personality.",
    "transcript": "Ella : Hi, my /best friend/ is Olivia, She is funny and /creative/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : Selam, bu benim yakın arkadaşım Olivia, O komik ve utangaçtır."
      },
      {
        "id": "b",
        "text": "Ella : Selam, benim /en iyi arkadaşım/ Olivia'dır, O komik ve /yaratıcıdır/."
      }
    ],
    "easyDistractor": "Ella : O komik ve unutkan.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "ella",
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "talking_about_hobbies",
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:00.000",
    "evidenceEnd": "0:04.511",
    "evidenceSentence": "Ella : Hi, my best friend is Olivia, She is funny and /creative/."
  },
  {
    "id": "introduce_best_friend_ella_part2",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_ella.mp4",
    "videoStart": "0:04.563",
    "title": "Ella talks about making art with Olivia.",
    "transcript": "Ella : She is great at painting, better than me, We love /looking at art/ together.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ella : O resim yapmada çok iyi, benden daha iyi, Birlikte resim yapmayı seviyoruz."
      },
      {
        "id": "b",
        "text": "Ella : O /resim yapmada/ çok iyi, benden daha iyi, Birlikte /resimlere bakmayı/ seviyoruz."
      }
    ],
    "easyDistractor": "Ella : O resim yapmada çok iyi, benden daha iyi, Birlikte spor yapmayı seviyoruz.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ella",
      "olivia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "talking_about_hobbies",
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:07.223",
    "evidenceEnd": "0:09.631",
    "evidenceSentence": "We love /looking at art/ together."
  },
  {
    "id": "introduce_best_friend_emma",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_emma.mp4",
    "title": "Emma talks about her best friend, Hannah.",
    "transcript": "Emma : She is /adventurous/ and cheerful, We enjoy /spending time in nature/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Emma : O /maceracı/ ve neşeli, Doğada /vakit geçirmekten/ hoşlanıyoruz."
      },
      {
        "id": "b",
        "text": "Emma : O temkinli ve sessiz, Evde vakit geçirmekten hoşlanıyoruz."
      }
    ],
    "easyDistractor": "Emma : O maceracı ve neşeli, Alışverişe gitmekten hoşlanıyoruz.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "emma",
      "hannah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "talking_about_hobbies",
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.634",
    "evidenceEnd": null,
    "evidenceSentence": "Emma : She is /adventurous/ and cheerful, We enjoy /spending time in nature/."
  },
  {
    "id": "introduce_best_friend_hannah",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_hannah.mp4",
    "title": "Hannah talks about her best friend, Emma.",
    "transcript": "Hannah : She is helpful and /generous/, She is always /there when I need her/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Hannah : O yardımsever ve kibar, bana karşı hep naziktir."
      },
      {
        "id": "b",
        "text": "Hannah : O yardımsever ve /cömert/, Ona /ihtiyacım olduğunda her zaman yanımdadır/."
      }
    ],
    "easyDistractor": "Hannah : O yardımsever ve cömert, Ona ihtiyacım olduğunda bazen yanımdadır.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "hannah",
      "emma"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "talking_about_hobbies",
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.303",
    "evidenceEnd": "0:08.888",
    "evidenceSentence": "Hannah : She is helpful and /generous/, She is always /there when I need her/."
  },
  {
    "id": "introduce_best_friend_david",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_david.mp4",
    "title": "David talks about his best friend, Ethan.",
    "transcript": "David : He is determined and /punctual/, We always /get on well/ with each other.",
    "answerOptions": [
      {
        "id": "a",
        "text": "David : O kararlı ve azimlidir, Birbirimize bazen birşeyler ısmarlarız."
      },
      {
        "id": "b",
        "text": "David : O kararlı ve /dakiktir/, Birbirimizle her zaman /iyi anlaşırız/."
      }
    ],
    "easyDistractor": "David : O kararlı ve dakik, Birbirimizle bazen iyi anlaşırız.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "david",
      "ethan"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.100",
    "evidenceEnd": "0:09.215",
    "evidenceSentence": "David : He is determined and /punctual/, We always /get on well/ with each other."
  },
  {
    "id": "introduce_best_friend_lucas",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_lucas.mp4",
    "title": "Lucas talks about his best friend, Daniel.",
    "transcript": "Lucas : He is confident, energetic, and a bit /clumsy/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Lucas : O komik, enerjik ve çok dikkatlidir."
      },
      {
        "id": "b",
        "text": "Lucas : O özgüvenli, enerjik ve biraz /sakardır/."
      }
    ],
    "easyDistractor": "Lucas : O kendine güvenen, sakin ve çok dikkatli.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "lucas",
      "daniel"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.640",
    "evidenceEnd": "0:06.497",
    "evidenceSentence": "Lucas : He is confident, energetic, and a bit /clumsy/."
  },
  {
    "id": "introduce_best_friend_jack",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_jack.mp4",
    "title": "Jack talks about his best friend, Benjamin.",
    "transcript": "Jack : He is /friendly/ and funny, He always /backs me up/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Jack : O güvenilir ve ciddidir, Bena hiç yalan söylemez."
      },
      {
        "id": "b",
        "text": "Jack : O /arkadaş canlısı/ ve komik, Beni her zaman /destekler/."
      }
    ],
    "easyDistractor": "Jack : O arkadaş canlısı ve komik, Beni bazen destekler.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "jack",
      "benjamin"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:05.113",
    "evidenceEnd": "0:08.923",
    "evidenceSentence": "Jack : He is /friendly/ and funny, He always /backs me up/."
  },
  {
    "id": "introduce_best_friend_mia_part1",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_mia.mp4",
    "videoEnd": "0:06.189",
    "title": "Mia introduces Zoe's personality.",
    "transcript": "Mia : Hi, my best friend is Zoe, She is thoughtful, /patient/, and a bit /shy/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : Merhaba, en iyi arkadaşım Zoe, O düşünceli, /sabırlı/ ve biraz /utangaç/."
      },
      {
        "id": "b",
        "text": "Mia : Merhaba, en iyi arkadaşım Zoe, O yardımsever, sabırsız ve düşünceli."
      }
    ],
    "easyDistractor": "Mia : Merhaba, en iyi arkadaşım Zoe, O düşünceli, sabırsız ve biraz utangaç.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "mia",
      "zoe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.704",
    "evidenceEnd": "0:06.189",
    "evidenceSentence": "Mia : Hi, my best friend is Zoe, She is thoughtful, /patient/, and a bit /shy/."
  },
  {
    "id": "introduce_best_friend_mia_part2",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_mia.mp4",
    "videoStart": "0:06.189",
    "title": "Mia talks about stargazing with Zoe.",
    "transcript": "Mia : She always /keeps my secrets/, We enjoy /looking at stars/ together.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Mia : O sırlarını bana anlatır, Birlikte film izlemekten hoşlanıyoruz."
      },
      {
        "id": "b",
        "text": "Mia : O her zaman /sırlarımı saklar/, Birlikte /yıldızlara bakmaktan/ hoşlanıyoruz."
      }
    ],
    "easyDistractor": "Mia : O her zaman sırlarımı saklar, Birlikte alışverişe gitmekten hoşlanıyoruz.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "mia",
      "zoe"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:06.117",
    "evidenceEnd": null,
    "evidenceSentence": "Mia : She always /keeps my secrets/, We enjoy /looking at stars/ together."
  },
  {
    "id": "introduce_best_friend_noah",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_noah.mp4",
    "title": "Noah talks about his best friend, Victoria.",
    "transcript": "Noah : She is /intelligent/ and great at /coding/, We really enjoy playing chess together.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Noah : O /zeki/ ve kod yazmada çok iyi."
      },
      {
        "id": "b",
        "text": "Noah : O çalışkan ve satranta çok iyi."
      }
    ],
    "easyDistractor": "Noah : O zeki ve kod yazmada çok iyi, Birlikte film izlemekten gerçekten hoşlanıyoruz.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "noah",
      "victoria"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.902",
    "evidenceEnd": "0:07.035",
    "evidenceSentence": "Noah : She is /intelligent/ and great at /coding/."
  },
  {
    "id": "introduce_best_friend_olivia",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_olivia.mp4",
    "title": "Olivia talks about her best friend, Ella.",
    "videoend": "0:08.048",
    "transcript": "Olivia : She is /cheerful/ and /outgoing/, And she always /cheers me up/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Olivia : O utangaç ve sessiz, Beni her zaman üzgün hissettirir."
      },
      {
        "id": "b",
        "text": "Olivia : O /neşeli/ ve /dışa dönük/, Beni her zaman /neşelendirir/."
      }
    ],
    "easyDistractor": "Olivia : O neşeli ve dışa dönük, Beni bazen neşelendirir.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "olivia",
      "ella"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:02.947",
    "evidenceEnd": null,
    "evidenceSentence": "Olivia : She is /cheerful/ and /outgoing/, And she always /cheers me up/."
  },
  {
    "id": "introduce_best_friend_victoria",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_victoria.mp4",
    "title": "Victoria talks about her best friend, Noah.",
    "transcript": "Victoria : He is intelligent and /hardworking/, We /enjoy/ solving puzzles together.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Victoria : O zeki ve /çalışkan/, Birlikte bulmaca çözmekten /hoşlanıyoruz/."
      },
      {
        "id": "b",
        "text": "Victoria : O akıllı ama dikkatsiz, Birlikte bulmaca çözmede çok iyiyiz."
      }
    ],
    "easyDistractor": "Victoria : O zeki ve çalışkan, Birlikte film izlemekten hoşlanıyoruz.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "victoria",
      "noah"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_personality",
      "talking_about_hobbies"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.187",
    "evidenceEnd": "0:08.221",
    "evidenceSentence": "Victoria : He is intelligent and /hardworking/, We /enjoy/ solving puzzles together."
  },
  {
    "id": "introduce_best_friend_zoe",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_zoe.mp4",
    "title": "Zoe talks about her best friend, Mia.",
    "transcript": "Zoe : She is /shy/ and /thoughtful/, I can always /rely on her/, She is my best friend.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Zoe : O dışa dönük ve dikkatsiz, Ona her zaman güvenemem, O benim sınıf arkadaşım."
      },
      {
        "id": "b",
        "text": "Zoe : O /utangaç/ ve /düşünceli/, Ona her zaman /güvenebilirim/, O benim en iyi arkadaşım."
      }
    ],
    "easyDistractor": "Zoe : O utangaç ve düşünceli, Ona bazen güvenebilirim, O benim en iyi arkadaşım.",
    "correctOptionId": "b",
    "explanation": "",
    "characterIds": [
      "zoe",
      "mia"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": null,
    "evidenceEnd": null,
    "evidenceSentence": "Zoe : She is /shy/ and /thoughtful/, I can always /rely on her/, She is my best friend."
  },
  {
    "id": "introduce_best_friend_ethan",
    "status": "published",
    "videoSrc": "assets/video/introduce_best_friend_ethan.mp4",
    "title": "Ethan talks about his best friend, David.",
    "transcript": "Ethan : He is thoughtful and /reliable/, I can always /count on him/.",
    "answerOptions": [
      {
        "id": "a",
        "text": "Ethan : O düşünceli ve /güvenilir/, Ona her zaman /güvenebilirim/."
      },
      {
        "id": "b",
        "text": "Ethan : O düşünceli ve sabırldır, Ona sırlarımı anlatabilirim."
      }
    ],
    "easyDistractor": "Ethan : O düşünceli ve güvenilir, Ona bazen güvenebilirim.",
    "correctOptionId": "a",
    "explanation": "",
    "characterIds": [
      "ethan",
      "david"
    ],
    "grades": [
      5,
      6
    ],
    "functions": [
      "describing_personality"
    ],
    "theme": "introduction",
    "evidenceStart": "0:03.363",
    "evidenceEnd": "0:10.557",
    "evidenceSentence": "Ethan : He is thoughtful and /reliable/, I can always /count on him/."
  },
];

/* Difficulty mode distractors live in their own video records. */
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
  asking_about_opinions: "Asking about opinions",
  asking_about_condition: "Asking About one's condition",
  asking_for_price: "Asking for price",
  asking_for_repetition: "Asking for Repetition",
  asking_permission: "Asking Permission",
  asking_preferences_about_activities: "Asking Preferences About Activities",
  askingaboutlocation: "Asking About Location",
  be_going_to_future_tense_for_plans: "Use of Be Going to Future Tense for plans",
  askingaboutsomeone: "Asking About Someone",
  askingfordirections: "Asking for directions",
  askingforhelp: "Asking for Help",
  askinginformationabouttime: "Asking for Information About Time",
  confirming_information: "Confirming Information",
  comparatives_of_adjectives: "Expressing comparisons between two people, objects, or ideas",
  comparative_and_superlative_adjectives: "Use of Comparative and Superlative Adjectives: Comparing characteristics of animals, things, and/or people.",
  correcting_behaviour: "Correcting Behaviour",
  countable_uncountable: "Use of Countable and Uncountable nouns: Expressing the quantity of nouns.",
  countries: "Naming countries",
  describing_a_regular_habit: "Describing a Regular Habit",
  describing_physical_appearance: "Describing Physical Appearance",
  describing_personality: "Describing Personality",
  describing_roles: "Describing the responsibilities of different roles in the classroom",
  describing_study_routines: "Describing study routines",
  expressing_a_favorite_activity: "Expressing a Favorite Activity",
  expressing_a_preference: "Expressing a Preference",
  expressing_a_school_rule: "Expressing a School Rule",
  expressing_and_comparing_personal_preferences: "Expressing and Comparing Personal Preferences",
  expressing_feelings: "Expressing Feelings",
  expressing_hopes: "Expressing hopes",
  expressing_likes_and_dislikes: "Expressing likes and dislikes",
  expressing_needs: "Expressing needs",
  expressing_obligations_or_rules: "Expressing Obligations or Rules",
  expressing_prohibition: "Expressing Prohibition",
  expressingsurprise: "Expressing Surprise",
  expressingtime: "Time expressions",
  frequency_adverbs: "Frequency Adverbs",
  gerunds_and_infinitives: "Use of Gerunds and Infinitives: Talking about likes, dislikes, plans, and actions.",
  fun: "",
  future_response_ill: "Future Response with 'will'",
  have_got_has_got: "Use of Modal 'Have got/Has got' for Expressing possession.",
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
  simple_past_tense_was_were: "Use of 'was/were' for Describing past events, states, or conditions.",
  simple_past_tense: "Use of The Simple Past Tense: Expressing actions, events, or situations that started and finished at a specific time in the past.",
  possessive_adjective: "Possessive 's: Indicating ownership or relationship.",
  possessive_pronouns: "Use of Possessive Pronouns: Showing ownership.",
  present_progressive: "Present Progressive Tense",
  present_progressive_vs_present_simple: "Use of Present Progressive vs Present Simple",
  present_progressive_for_planned_future: "Use of Present Progressive for planned future",
  refusing: "Refusing",
  responding_appropriately: "Responding Appropriately",
  suggesting: "Making Suggestions",
  superlative_adjectives: "Use of Superlative Adjectives: Comparing characteristics of animals, things, and/or people.",
  tag_questions: "Tag questions",
  talking_about_hobbies: "Talking about hobbies",
  telling_time: "Telling time",
  use_of_modals_mustnt_and_cant_prohibition: "Use of Modals Mustn't and Can't (Prohibition)",
  use_of_modal_can_for_capability_and_ability: "Use of Modal Can for Capability and Ability",
  use_of_modal_must_for_external_obligation: "Use of Modal Must for External Obligation",
  use_of_object_pronouns: "Use of Object Pronouns",
  use_of_simple_present_tense: "Use of the Simple Present Tense",
  use_of_simple_present_tense_for_habbits: "Use of the Simple Present Tense For Habits",
  use_of_there_is_there_are: "Use of 'There is/There are': Indicating existence or location.",
  use_of_to_be_for_time: "Use of To Be for Time",
  use_of_to_be_present: "Use of To Be Present",
  use_of_wh_questions_what_time: "Use of Wh- Questions (What Time)",
  use_of_wh_questions_who_what: "Use of Wh- Questions (Who, What)",

});
