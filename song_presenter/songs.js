/* ═══════════════════════════════════════════════════════════════════════
   SONG PRESENTER — ŞARKI VERİ DOSYASI
   ═══════════════════════════════════════════════════════════════════════
   Yeni şarkı eklemek için aşağıdaki listeye yeni bir { ... } blok ekle.
   Library ekranında otomatik görünür.

   ALAN REHBERİ
   ────────────
   id     : benzersiz kısa isim (boşluksuz, küçük harf)
   title  : şarkının adı (library kartında görünür)
   artist : sanatçı / kaynak (library kartında görünür)
   artist cover : Aynı sanatçının birden fazla şarkısı varsa ana ekrandaki
            albüm klasöründe görünür. Aşağıdaki ARTIST_COVERS'a ekle,
            ör. Ella: "thumbnails/ella.webp".
   audio  : mp3 dosyası — songs/ klasörüne koy, ör. "songs/dosya.mp3"
            ÖNEMLİ: videos/ klasöründe aynı isimli video varsa mp3
            KOYMANA GEREK YOK — ses otomatik videodan çalınır, ekranda
            kapak görünür. Bu alanı yine de yaz (ör. "songs/dosya.mp3"),
            çünkü video/karaoke dosyaları bu isimden bulunur.
   video  : genelde null bırak — VID tuşu videos/ klasöründe mp3 ile
            AYNI İSİMLİ videoyu zaten otomatik bulur (mp4/webm/mov/ogv
            hepsini dener). Bu alanı SADECE video dosyanın ismi mp3'le
            uyuşmuyorsa veya videos/ dışında bir yerdeyse doldur, ör.
            "ozel/klasor/video.mp4" — o zaman otomatik aramayı atlar
            ve direkt bu yolu kullanır.
   videotimingdelay : yalnızca VID modundaki söz zamanlaması için saniye
            cinsinden + / - ince ayar. Ör. 0.35 veya -0.20. Boş "" ise 0
            kabul edilir; MP3 ve karaoke zamanlamasını etkilemez.
   image  : şarkı kapak görseli, ör. "images/kapak.webp" — yoksa: null
   spotify : Spotify şarkı adresi, ör. "https://open.spotify.com/track/..." — yoksa: ""

   videoclose : (isteğe bağlı) ör. "3:20" — video veya karaoke oynarken
            bu saniyeye gelinince video otomatik kapanır, ekranda
            şarkının imajı (kapak) görünür, ses kesilmeden devam eder.
            (Klip sonundaki jenerik/reklam kısmını atlamak için ideal.)
            İstemiyorsan: null. Eşikten SONRA videoyu elle tekrar
            açarsan bir daha kapanmaz. Video kendiliğinden bitince de
            (videoclose yazılmasa dahi) otomatik kapak görünümüne döner.

   zoomfactor : (isteğe bağlı) true veya false — VID modunda uzun
            enstrümantal aralarda videonun otomatik büyüyüp sonraki
            satıra 2 sn kala küçülmesini AÇAR/KAPATIR. Yazmazsan: true
            (açık). Bu şarkıda hiç istemiyorsan: false yaz.
   zoomgap    : (isteğe bağlı) sayı, saniye cinsinden — iki söz satırı
            arasındaki boşluk kaç saniyeyi geçerse otomatik büyümenin
            tetikleneceği eşik. Yazmazsan: 8. Ör. daha sık büyümesini
            istiyorsan 5 yaz, daha nadir istiyorsan 12 yaz.

   KARAOKE VİDEOSU: kareoke/ klasörüne mp3 ile aynı isimli video
   koyarsan (ör. kareoke/faded.mp4) player'da 🎤 tuşu aktifleşir —
   basınca sözler paneli kapanır, karaoke videosu geniş ekranda oynar,
   videoya dokununca tam ekran olur. Dosya yoksa 🎤 sönük görünür.

   words  : PRE-LISTENING için kelime listesi — EN FAZLA 8, istediğin
            kadar yazabilirsin (mecburen 8 olmak zorunda değil, aynı
            kelimeyi tekrar tekrar yazıp doldurmana gerek yok).
            word  → İngilizce kelime (sürüklenecek etiket)
            tr    → Türkçe anlamı
            image → görsel yolu, ör. "images/sun.webp"
                    null ise görsel yerine Türkçe anlam kartı gösterilir.

   lyrics : Şarkının TÜM sözleri, satır satır tek liste.
            Boşluk olacak kelimeleri <kelime> içine al. Ör: "The <sun> is out"

            ÇOKLU BOŞLUK: Aynı kelime şarkıda birden çok yerde geçiyorsa
            HEPSİNİ <> içine al (yoksa açıkta kalan, cevabı ele verir).
            Öğrenci kelimeyi boşlukların HERHANGİ BİRİNE doğru
            yerleştirdiğinde diğerlerinin tamamı otomatik dolar.

            ── KARAOKE (isteğe bağlı) ──
            Satırı şu şekilde yazarsan şarkı çalarken o satır sarı yanar
            ve süresi boyunca soldan dolan bir şeritle ilerler:
              { from: "0:11", to: "0:14", text: "You were the <shadow>..." },
            from → satırın söylenmeye başladığı an  (dakika:saniye)
            to   → satırın bittiği an — YAZMAK ZORUNDA DEĞİLSİN;
                   yazmazsan bir sonraki satırın from'una kadar sürer.
                   Enstrümantal boşluk öncesi son satıra to yazman yeterli.
            Zamansız düz satır da yazabilirsin ("..." şeklinde) — o satır
            karaoke'ye katılmaz ama normal görünür.

            KARAOKE'Yİ KAPATMAK: İlk satıra from: "0:00", to: "0:00"
            yazarsan takip sistemi o şarkı için tamamen devre dışı kalır.

   climax : (isteğe bağlı) Şarkının coştuğu anlarda ekranda yukarı
            süzülen rengarenk emoji notalar çıkar. 🎵🎶✨
              climax: [
                { at: "1:16", to: "1:24" },
                { at: "2:48", to: "3:02" }
              ],
            at → patlamanın başlayacağı an (dakika:saniye)
            to → biteceği an (dakika:saniye)
            İstediğin kadar an ekleyebilirsin. Alanı hiç yazmazsan
            hiçbir şey olmaz.

   kareoke_climax : (isteğe bağlı) climax ile aynı format, ama sadece
            🎤 KARAOKE modunda devreye girer. Karaoke videosunun
            timing'i mp3'ten farklı olduğundan zamanları KARAOKE
            VİDEOSUNA göre gir. Bu alanı boş bırakırsan / yazmazsan
            karaoke modunda hiç climax çıkmaz (normal climax listesi
            karaoke'de KULLANILMAZ).

   censored : (isteğe bağlı) VID modunda, çocuklar için sakıncalı
            olabilecek sahnelerin zaman aralığı. O aralıkta ekran
            SİMSİYAH olur — ses kesilmeden devam eder — aralık
            bitince video kendiliğinden geri gelir.
              censored: [
                { at: "0:23", to: "0:25" },
                { at: "1:40", to: "1:44" }
              ],
            at → sahnenin başladığı an, to → bittiği an. İstediğin
            kadar aralık ekleyebilirsin. Yazmazsan hiç devreye girmez.
   kareoke_censored : (isteğe bağlı) censored ile aynı format, ama
            sadece 🎤 KARAOKE modunda devreye girer — zamanları KARAOKE
            VİDEOSUNA göre gir (mp3/VID ile aynı olmayabilir).
   ═══════════════════════════════════════════════════════════════════════ */

window.ARTIST_COVERS = {
  Ella: "thumbnails/ella.webp"
};

window.SONGS = [

  /* ── ŞARKI 1 — LEARNING TOGETHER GROWING TOGETHER ───────────────────────────────────── */
  {
    id: "learningtogether",
    title: "Learning together, growing together",
    artist: "Ella",
    audio: "songs/learningtogether.mp3",
    video: "https://media.adilhoca.com/video/learningtogethergrowingtogether.mp4",
    videotimingdelay: "",
    image: "thumbnails/learningtogether.webp",
    spotify: "https://open.spotify.com/track/5iegMmeMo4dnq0KsaSKFgC",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:51", to: "1:18" },
      { at: "2:32", to: "3:00" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:51", to: "1:18" },
      { at: "2:32", to: "3:00" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "journey",    tr: "yolculuk",          image: "images/journey.webp" },
      { word: "smile",   tr: "gülümseme",         image: "images/smile.webp" },
      { word: "dreams",  tr: "rüya",      image: "images/dream.webp" },
      { word: "grow", tr: "büyümek",        image: "images/grow.webp" },
      { word: "fear",  tr: "korku",     image: "images/fear.webp" },
      { word: "sorrow",   tr: "üzüntü", image: "images/sorrow.webp" },
      { word: "laugh",  tr: "gülmek",           image: "images/laugh.webp" },
      { word: "world",   tr: "dünya",         image: "images/world.webp" }
    ],

    lyrics: [
      { from: "0:16.532", to: "0:19.315", text: "A new <journey> starts today,", training: { target: "journey", choices: ["journey", "lesson", "memory", "smile"] } },
      { from: "0:20.339", to: "0:22.987", text: "New adventures on the way." , training: {"target":"adventures","choices":["adventures","journey","smile","dreams"]} },
      { from: "0:23.644", to: "0:26.555", text: "One more word and one more <smile>,", training: { target: "smile", choices: ["smile", "journey", "forest", "future"] } },
      { from: "0:27.124", to: "0:30.195", text: "Every step is worth the try." , training: {"target":"step","choices":["step","journey","smile","dreams"]} },
      { from: "0:31.321", to: "0:34.082", text: "Books and <dreams> are side by side,", training: { target: "dreams", choices: ["dreams", "kitchen", "storm", "sorrow"] } },
      { from: "0:34.993", to: "0:37.649", text: "With my friends, I learn with <pride>." , training: {"target":"pride","choices":["pride","journey","smile","dreams"]} },
      { from: "0:37.779", to: "0:40.155", text: "Little moments, day by day,", training: { target: "moments", choices: ["moments", "cities", "forest", "speech"] } },
      { from: "0:41.307", to: "0:43.803", text: "Help me find another way." , training: {"target":"find","choices":["find","journey","smile","dreams"]} },
      { from: "0:44.851", to: "0:47.683", text: "I can learn, I can <grow>,", training: { target: "learn", choices: ["learn", "laugh", "shine", "follow"] } },
      { from: "0:48.403", to: "0:52.270", text: "There's so much I want to know." , training: {"target":"much","choices":["much","journey","smile","dreams"]} },

      { from: "0:52.702", to: "0:55.974", text: "Learn today, shine tomorrow,", training: { target: "shine", choices: ["shine", "storm", "stone", "speech"] } },
      { from: "0:56.254", to: "0:59.666", text: "Leave behind, every <sorrow>" , training: {"target":"sorrow","choices":["sorrow","journey","smile","dreams"]} },
      { from: "0:59.914", to: "1:02.418", text: "Word by word, step by step,", training: { target: "step", choices: ["step", "smile", "dreams", "world"] } },
      { from: "1:02.787", to: "1:06.210", text: "I am stronger than yesterday" , training: {"target":"stronger","choices":["stronger","journey","smile","dreams"]} },
 
      { from: "1:06.818", to: "1:08.234", text: "Learn today,", training: { target: "today", choices: ["today", "forest", "sorrow", "memory"] } },
      { from: "1:08.402", to: "1:09.994", text: "Dream so high," , training: {"target":"high","choices":["high","journey","smile","dreams"]} },
      { from: "1:10.170", to: "1:11.835", text: "Nothing to <fear>", training: { target: "fear", choices: ["fear", "pride", "world", "future"] } },
      { from: "1:12.139", to: "1:13.331", text: "When we try." , training: {"target":"When","choices":["When","journey","smile","dreams"]} },

      { from: "1:13.994", to: "1:15.511", text: "Every lesson,", training: { target: "lesson", choices: ["lesson", "journey", "storm", "kitchen"] } },
      { from: "1:15.767", to: "1:17.031", text: "Every smile," , training: {"target":"smile","choices":["smile","journey","dreams","grow"]} },
      { from: "1:17.312", to: "1:18.465", text: "Brings me closer,", training: { target: "closer", choices: ["closer", "sorrow", "cities", "smile"] } },
      { from: "1:18.608", to: "1:19.974", text: "To my goal." , training: {"target":"goal","choices":["goal","journey","smile","dreams"]} },

      { from: "1:35.806", to: "1:38.295", text: "Every answer helps me see,", training: { target: "answer", choices: ["answer", "forest", "dreams", "future"] } },
      { from: "1:39.350", to: "1:41.926", text: "Who I really want to be." , training: {"target":"really","choices":["really","journey","smile","dreams"]} },
      { from: "1:42.838", to: "1:45.334", text: "If I fall, I rise again,", training: { target: "rise", choices: ["rise", "laugh", "shine", "follow"] } },
      { from: "1:45.974", to: "1:48.926", text: "That's the way I always win." , training: {"target":"always","choices":["always","journey","smile","dreams"]} },
      { from: "1:49.478", to: "1:50.598", text: "With my friends,", training: { target: "friends", choices: ["friends", "cities", "sorrow", "stone"] } },
      { from: "1:50.766", to: "1:52.350", text: "We <laugh> and play," , training: {"target":"laugh","choices":["laugh","journey","smile","dreams"]} },
      { from: "1:53.158", to: "1:58.582", text: "Learning gets better day by day.", training: { target: "better", choices: ["better", "lonely", "future", "storm"] } },
      { from: "2:03.742", to: "2:07.126", text: "Learning together,", training: { target: "together", choices: ["together", "forest", "speech", "memory"] } },
      { from: "2:07.526", to: "2:10.438", text: "Growing together,", training: { target: "together", choices: ["together", "forest", "speech", "memory"] } },
      { from: "2:11.086", to: "2:14.190", text: "For better tomorrows,", training: { target: "better", choices: ["better", "sorrow", "kitchen", "storm"] } },
      { from: "2:14.366", to: "2:19.238", text: "With our <dreams> to guide us.", training: { target: "dreams", choices: ["dreams", "storm", "kitchen", "future"] } },

      { from: "2:19.486", to: "2:22.654", text: "Learn today, shine tomorrow,", training: { target: "shine", choices: ["shine", "grave", "forest", "memory"] } },
      { from: "2:22.806", to: "2:26.118", text: "Every dream is ours to follow.", training: { target: "dream", choices: ["dream", "cities", "sorrow", "forest"] } },
  
      { from: "2:26.294", to: "2:29.005", text: "Word by word, day by day,", training: { target: "word", choices: ["word", "storm", "future", "smile"] } },
      { from: "2:29.284", to: "2:34.653", text: "I believe we'll find our way.", training: { target: "believe", choices: ["believe", "storm", "memory", "smile"] } },
   
      { from: "2:33.401", to: "2:34.548", text: "Learn today,", training: { target: "today", choices: ["today", "cities", "sorrow", "journey"] } },
      { from: "2:34.763", to: "2:36.315", text: "Dream so high,", training: { target: "high", choices: ["high", "forest", "journey", "cities"] } },
      { from: "2:36.795", to: "2:38.003", text: "Nothing to <fear>", training: { target: "fear", choices: ["fear", "pride", "forest", "smile"] } },
      { from: "2:38.171", to: "2:39.587", text: "When we try.", training: { target: "try", choices: ["try", "sorrow", "storm", "future"] } },

      { from: "2:39.858", to: "2:41.314", text: "Together we can", training: { target: "Together", choices: ["Together", "grow", "dream", "weather"] } },
      { from: "2:41.795", to: "2:42.994", text: "Learn and <grow>,", training: { target: "grow", choices: ["grow", "laugh", "shine", "follow"] } },
      { from: "2:43.147", to: "2:44.219", text: "We have so much", training: { target: "much", choices: ["much", "world", "dreams", "touch"] } },
      { from: "2:44.595", to: "2:48.019", text: "To show the <world>.", training: { target: "world", choices: ["world", "dreams", "forest", "sorrow"] } },]
  },

/* ── ŞARKI 2 — SIDE BY SIDE ───────────────────────────────────── */
  {
    id: "sidebyside",
    title: "Side by side",
    artist: "Ella",
    audio: "songs/sidebyside.mp3",
    video: "https://media.adilhoca.com/video/sidebyside.mp4",
    videotimingdelay: "1",
    image: "thumbnails/sidebyside.webp",
    spotify: "https://open.spotify.com/track/5SO7bP1vjAX70oZ5DMlDKc",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "1:02", to: "1:27" },
      { at: "2:12", to: "2:38" },
      { at: "3:10", to: "3:49" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [
      { at: "1:02", to: "1:27" },
      { at: "2:12", to: "2:38" },
      { at: "3:10", to: "3:49" }
],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "lonely",    tr: "yalnız",          image: "images/alone.webp" },
      { word: "shine",   tr: "parlamak",         image: "images/shine.webp" },
      { word: "roads",  tr: "yollar",      image: "images/roads.webp" },
      { word: "memories", tr: "anılar",        image: "images/memories.webp" },
      { word: "storm",  tr: "fırtına",     image: "images/storm.webp" },
      { word: "tears",   tr: "gözyaşları", image: "images/tears.webp" },
      { word: "mind",  tr: "zihin",           image: "images/mind.webp" },
      { word: "secrets",   tr: "sırlar",         image: "images/secret.webp" }
    ],

    lyrics: [
      { from: "0:16.423", to: "0:19.055", text: "Some mornings feel so gray,", training: { target: "mornings", choices: ["mornings", "kitchen", "future", "secrets"] } },
      { from: "0:19.887", to: "0:22.447", text: "Feeling <lonely> on my way." , training: {"target":"lonely","choices":["lonely","shine","roads","memories"]} },
      { from: "0:23.359", to: "0:27.991", text: "Then you wave, it fades away.", training: { target: "wave", choices: ["wave", "forest", "smile", "speech"] } },
      { from: "0:30.175", to: "0:33.215", text: "One little joke, one little smile," , training: {"target":"little","choices":["little","lonely","shine","roads"]} },
      { from: "0:33.823", to: "0:36.799", text: "Makes a dark day <shine> so bright.", training: { target: "dark", choices: ["dark", "future", "laughter", "journey"] } },
      { from: "0:37.239", to: "0:38.774", text: "Walking through the school ," , training: {"target":"through","choices":["through","lonely","shine","roads"]} },
      { from: "0:38.966", to: "0:42.126", text: "Sharing dreams along the way,", training: { target: "dreams", choices: ["dreams", "cities", "grave", "plate"] } },
      { from: "0:42.766", to: "0:45.895", text: "Making <memories> day by day." , training: {"target":"memories","choices":["memories","lonely","shine","roads"]} },
      { from: "0:48.126", to: "0:50.318", text: "Even when the <storm> comes,", training: { target: "storm", choices: ["storm", "smile", "kitchen", "memory"] } },
      { from: "0:51.494", to: "0:54.847", text: "I'll still be around." , training: {"target":"still","choices":["still","lonely","shine","roads"]} },
      { from: "0:55.717", to: "1:02.294", text: "There's one thing I want you to know...", training: { target: "thing", choices: ["thing", "forest", "journey", "laughter"] } },
      { from: "1:02.445", to: "1:07.062", text: "Side by side, I'm here for you." , training: {"target":"side","choices":["side","lonely","shine","roads"]} },
      { from: "1:08.949", to: "1:12.197", text: "You're not alone,", training: { target: "alone", choices: ["alone", "bright", "future", "smile"] } },
      { from: "1:12.565", to: "1:14.053", text: "We'll make it through." , training: {"target":"make","choices":["make","lonely","shine","roads"]} },
      { from: "1:16.350", to: "1:21.229", text: "Side by side, I'm here for you.", training: { target: "here", choices: ["here", "storm", "cities", "dreams"] } },
      { from: "1:23.086", to: "1:26.525", text: "You're not alone," , training: {"target":"alone","choices":["alone","lonely","shine","roads"]} },
      { from: "1:26.725", to: "1:28.181", text: "We'll make it through.", training: { target: "make", choices: ["make", "laugh", "shine", "follow"] } },
      { from: "1:30.645", to: "1:33.501", text: "Sometimes we don't see eye to eye,", training: { target: "eye", choices: ["eye", "forest", "memory", "journey"] } },
      { from: "1:33.773", to: "1:37.133", text: "<Tears> may fall, we may cry.", training: { target: "fall", choices: ["fall", "storm", "future", "kitchen"] } },
      { from: "1:37.525", to: "1:40.693", text: "But one small sorry changes it all,", training: { target: "sorry", choices: ["sorry", "storm", "kitchen", "future"] } },
      { from: "1:41.013", to: "1:44.165", text: "And we don't let each other fall.", training: { target: "other", choices: ["other", "cities", "forest", "memory"] } },
      { from: "1:44.517", to: "1:46.741", text: "You keep my <secrets>,", training: { target: "keep", choices: ["keep", "shine", "laugh", "follow"] } },
      { from: "1:47.846", to: "1:49.750", text: "I keep yours too.", training: { target: "keep", choices: ["keep", "shine", "laugh", "follow"] } },
      { from: "1:51.118", to: "1:53.590", text: "No matter what,", training: { target: "matter", choices: ["matter", "cities", "smile", "forest"] } },
      { from: "1:54.733", to: "1:56.645", text: "I'll stand by you.", training: { target: "stand", choices: ["stand", "forest", "smile", "future"] } },
      { from: "1:58.981", to: "2:01.603", text: "Even when the <storm> comes,", training: { target: "storm", choices: ["storm", "laughter", "journey", "plate"] } },
      { from: "2:02.120", to: "2:05.329", text: "I'll still be around.", training: { target: "still", choices: ["still", "storm", "cities", "memory"] } },
      { from: "2:06.329", to: "2:12.841", text: "There's one thing I want you to know...", training: { target: "thing", choices: ["thing", "forest", "smile", "cities"] } },
      { from: "2:13.056", to: "2:17.609", text: "Side by side, I'm here for you.", training: { target: "here", choices: ["here", "forest", "future", "laughter"] } },
      { from: "2:19.377", to: "2:22.768", text: "You're not alone,", training: { target: "alone", choices: ["alone", "bright", "memory", "storm"] } },
      { from: "2:23.017", to: "2:24.664", text: "We'll make it through.", training: { target: "make", choices: ["make", "laugh", "shine", "follow"] } },
      { from: "2:26.833", to: "2:31.536", text: "Side by side, I'm here for you.", training: { target: "here", choices: ["here", "future", "kitchen", "secrets"] } },
      { from: "2:33.617", to: "2:36.745", text: "You're not alone,", training: { target: "alone", choices: ["alone", "storm", "cities", "memory"] } },
      { from: "2:37.096", to: "2:38.520", text: "We'll make it through." , training: {"target":"make","choices":["make","lonely","shine","roads"]} },
      { from: "2:41.753", to: "2:45.304", text: "Years may pass, hair turns white.", training: { target: "pass", choices: ["pass", "dreams", "storm", "forest"] } },
      { from: "2:45.504", to: "2:48.664", text: "Different <roads>, different lives." , training: {"target":"roads","choices":["roads","lonely","shine","memories"]} },
      { from: "2:48.880", to: "2:52.208", text: "No matter where life may lead,", training: { target: "life", choices: ["life", "smile", "cities", "memory"] } },
      { from: "2:52.408", to: "2:55.609", text: "In <mind> and heart, we will meet." , training: {"target":"mind","choices":["mind","lonely","shine","roads"]} },
      { from: "2:56.817", to: "2:59.257", text: "Even when the <storm> comes,", training: { target: "storm", choices: ["storm", "plate", "journey", "laughter"] } },
      { from: "3:00.073", to: "3:03.185", text: "I'll still be around." , training: {"target":"still","choices":["still","lonely","shine","roads"]} },
      { from: "3:04.177", to: "3:10.674", text: "There's one thing I want you to know...", training: { target: "thing", choices: ["thing", "forest", "smile", "future"] } },
      { from: "3:10.833", to: "3:15.258", text: "Side by side, I'm here for you." , training: {"target":"side","choices":["side","lonely","shine","roads"]} },
      { from: "3:17.377", to: "3:20.609", text: "You're not alone,", training: { target: "alone", choices: ["alone", "cities", "kitchen", "memory"] } },
      { from: "3:20.841", to: "3:22.561", text: "We'll make it through." , training: {"target":"make","choices":["make","lonely","shine","roads"]} },
      { from: "3:24.601", to: "3:29.465", text: "Side by side, I'm here for you.", training: { target: "here", choices: ["here", "storm", "journey", "plate"] } },
      { from: "3:31.145", to: "3:34.417", text: "You're not alone,", training: { target: "alone", choices: ["alone", "storm", "future", "kitchen"] } },
      { from: "3:34.809", to: "3:36.281", text: "We'll make it through...", training: { target: "make", choices: ["make", "forest", "smile", "future"] } },
      { from: "3:38.506", to: "3:40.025", text: "Side by side,", training: { target: "side", choices: ["side", "forest", "memory", "future"] } },
      { from: "3:41.889", to: "3:43.386", text: "Side by side,", training: { target: "side", choices: ["side", "storm", "cities", "memory"] } },
      { from: "3:45.550", to: "3:48.846", text: "Side by side,", training: { target: "side", choices: ["side", "kitchen", "smile", "cities"] } },
      { from: "3:49.134", to: "3:53.534", text: "We'll make it through.", training: { target: "make", choices: ["make", "laugh", "shine", "follow"] } },
      { from: "", to: "", text: "Written by Adil Fırat Oktav." , training: {"target":"Adil","choices":["Adil","lonely","shine","roads"]} },
      { from: "", to: "", text: "Thanks for listening..." , training: {"target":"listening","choices":["listening","lonely","shine","roads"]} },]
  },

/* ── ŞARKI 3 — IN MY OWN WAY - ELLA ───────────────────────────────────── */
  {
    id: "inmyownway",
    title: "In my own way",
    artist: "Ella",
    audio: "songs/inmyownway.mp3",
    video: "https://media.adilhoca.com/video/inmyownway.mp4",
    videotimingdelay: "1",
    image: "thumbnails/inmyownway.webp",
    spotify: "https://open.spotify.com/track/4frUoNmfs5j7BnlDsZXggt",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "1:05", to: "1:27" },
      { at: "1:55", to: "2:34" },
      { at: "2:58", to: "3:44" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [
      { at: "1:05", to: "1:27" },
      { at: "1:55", to: "2:34" },
      { at: "2:58", to: "3:44" }
],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "voices",    tr: "sesler",          image: "images/voices.webp" },
      { word: "pretending",   tr: "rol yapmak",         image: "images/pretend.webp" },
      { word: "scorn",  tr: "küçümsemek",      image: "images/scorn.webp" },
      { word: "stare", tr: "dik dik bakmak",        image: "images/stare.webp" },
      { word: "belong",  tr: "ait olmak",     image: "images/belong.webp" },
      { word: "paths",   tr: "yollar", image: "images/roads.webp" },
      { word: "shine",  tr: "parlamak",     image: "images/shine.webp" },
      { word: "forced",   tr: "zoraki", image: "images/forced.webp" },
    ],

    lyrics: [
      { from: "0:29.758", to: "0:31.767", text: "Different <voices>", training: { target: "voices", choices: ["voices", "forest", "journey", "kitchen"] } },
      { from: "0:32.919", to: "0:34.272", text: "In my head," , training: {"target":"head","choices":["head","voices","pretending","scorn"]} },
      { from: "0:35.879", to: "0:37.584", text: "'Be like us',", training: { target: "like", choices: ["like", "shine", "storm", "smile"] } },
      { from: "0:38.839", to: "0:40.496", text: "That's what they said." , training: {"target":"what","choices":["what","voices","pretending","scorn"]} },
      { from: "0:42.336", to: "0:43.871", text: "The same <paths>,", training: { target: "paths", choices: ["paths", "cities", "speech", "memory"] } },
      { from: "0:45.255", to: "0:47.367", text: "The same styles," , training: {"target":"same","choices":["same","voices","pretending","scorn"]} },
      { from: "0:48.527", to: "0:49.801", text: "But none of them", training: { target: "none", choices: ["none", "dreams", "storm", "future"] } },
      { from: "0:51.057", to: "0:53.166", text: "Feels like me." , training: {"target":"like","choices":["like","voices","pretending","scorn"]} },
      { from: "0:55.481", to: "0:59.777", text: "Maybe I'm not all that strong.", training: { target: "strong", choices: ["strong", "lonely", "fallen", "bright"] } },
      { from: "1:01.145", to: "1:07.617", text: "Still I know, Where I <belong>." , training: {"target":"belong","choices":["belong","voices","pretending","scorn"]} },
      { from: "1:07.824", to: "1:09.249", text: "No <pretending>,", training: { target: "pretending", choices: ["pretending", "journey", "forest", "kitchen"] } },
      { from: "1:10.721", to: "1:13.465", text: "No <forced> dreams," , training: {"target":"forced","choices":["forced","voices","pretending","scorn"]} },
      { from: "1:13.832", to: "1:16.929", text: "Life is my own,", training: { target: "own", choices: ["own", "storm", "smile", "cities"] } },
      { from: "1:17.361", to: "1:19.713", text: "To live in my way.", training: { target: "live", choices: ["live", "shine", "laugh", "follow"] } },
      { from: "1:20.249", to: "1:21.585", text: "No <pretending>,", training: { target: "pretending", choices: ["pretending", "future", "memory", "laughter"] } },
      { from: "1:26.434", to: "1:29.122", text: "No <forced> dreams.", training: { target: "forced", choices: ["forced", "forest", "future", "memory"] } },
      { from: "1:32.586", to: "1:33.963", text: "Some will <scorn>,", training: { target: "scorn", choices: ["scorn", "laugh", "follow", "shine"] } },
      { from: "1:35.218", to: "1:37.058", text: "Some will not care." , training: {"target":"will","choices":["will","voices","pretending","scorn"]} },
      { from: "1:38.634", to: "1:40.058", text: "Some will stop", training: { target: "stop", choices: ["stop", "dreams", "storm", "forest"] } },
      { from: "1:41.628", to: "1:43.428", text: "And simply <stare>." , training: {"target":"stare","choices":["stare","voices","pretending","scorn"]} },
      { from: "1:45.092", to: "1:47.892", text: "But all their noise helps me see,", training: { target: "noise", choices: ["noise", "journey", "cities", "smile"] } },
      { from: "1:48.204", to: "1:51.036", text: "The only one I should be" , training: {"target":"only","choices":["only","voices","pretending","scorn"]} },
      { from: "1:51.724", to: "1:57.052", text: "Is me...", training: { target: "me", choices: ["me", "life", "way", "sea"] } },
      { from: "1:57.388", to: "1:58.931", text: "No <pretending>," , training: {"target":"pretending","choices":["pretending","voices","scorn","stare"]} },
      { from: "2:00.476", to: "2:03.132", text: "No <forced> dreams,", training: { target: "forced", choices: ["forced", "lonely", "bright", "fallen"] } },
      { from: "2:03.508", to: "2:06.548", text: "Life is my own,", training: { target: "own", choices: ["own", "cities", "journey", "storm"] } },
      { from: "2:06.939", to: "2:09.420", text: "To live in my way.", training: { target: "live", choices: ["live", "shine", "laugh", "follow"] } },
      { from: "2:09.796", to: "2:11.275", text: "No <pretending>,", training: { target: "pretending", choices: ["pretending", "kitchen", "future", "memory"] } },
      { from: "2:16.404", to: "2:19.036", text: "No <forced> dreams,", training: { target: "forced", choices: ["forced", "forest", "future", "memory"] } },
      { from: "2:35.810", to: "2:38.207", text: "The night gets darker,", training: { target: "night", choices: ["night", "forest", "smile", "cities"] } },
      { from: "2:38.414", to: "2:41.151", text: "Yet each star <shine>s,", training: { target: "star", choices: ["star", "storm", "cities", "kitchen"] } },
      { from: "2:41.423", to: "2:43.983", text: "And in each one,", training: { target: "each", choices: ["each", "storm", "journey", "memory"] } },
      { from: "2:44.879", to: "2:47.679", text: "Another world cries.", training: { target: "world", choices: ["world", "forest", "smile", "memory"] } },
      { from: "2:48.270", to: "2:52.111", text: "Maybe I'm not all that strong.", training: { target: "strong", choices: ["strong", "future", "kitchen", "laughter"] } },
      { from: "2:53.719", to: "3:00.063", text: "Still I know, where I <belong>.", training: { target: "belong", choices: ["belong", "future", "storm", "laughter"] } },
      { from: "3:00.222", to: "3:01.807", text: "No <pretending>,", training: { target: "pretending", choices: ["pretending", "forest", "cities", "smile"] } },
      { from: "3:03.190", to: "3:05.807", text: "No <forced> dreams,", training: { target: "forced", choices: ["forced", "cities", "forest", "memory"] } },
      { from: "3:06.246", to: "3:09.303", text: "Life is my own,", training: { target: "own", choices: ["own", "storm", "memory", "journey"] } },
      { from: "3:09.935", to: "3:18.054", text: "To live in my way.", training: { target: "live", choices: ["live", "shine", "laugh", "follow"] } },
      { from: "3:18.686", to: "3:21.126", text: "In my own way…", training: { target: "own", choices: ["own", "future", "forest", "smile"] } },
      { from: "3:24.814", to: "3:26.694", text: "In my own way…", training: { target: "own", choices: ["own", "storm", "future", "kitchen"] } },
      { from: "3:30.958", to: "3:33.142", text: "In my own way…", training: { target: "own", choices: ["own", "cities", "storm", "memory"] } },
      { from: "3:37", to: "3:39", text: "In my own way…", training: { target: "own", choices: ["own", "forest", "cities", "memory"] } },
      { from: "", to: "", text: "Written by Adil Fırat Oktav." , training: {"target":"Adil","choices":["Adil","voices","pretending","scorn"]} },
      { from: "", to: "", text: "Thanks for listening..." , training: {"target":"listening","choices":["listening","voices","pretending","scorn"]} },]
  },

/* ── ŞARKI 4 — ASH OR RAIN - ELLA ───────────────────────────────────── */
  {
    id: "ashorrain",
    title: "Ash or Rain?",
    artist: "Ella",
    audio: "songs/ashorrain.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/ashorrain.webp",
    spotify: "https://open.spotify.com/track/5vGBSL2Oqit2tb9Y84bT9N",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:55", to: "1:25" },
      { at: "2:48", to: "3:17" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [
      { at: "0:55", to: "1:25" },
      { at: "2:48", to: "3:17" }
],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "sparrow",    tr: "sesler",          image: "images/sparrow.webp" },
      { word: "sky",   tr: "gökyüzü",         image: "images/sky.webp" },
      { word: "forest",  tr: "orman",      image: "images/forest.webp" },
      { word: "fallen", tr: "devrilmiş",        image: "images/fallen.webp" },
      { word: "stone",  tr: "taş",     image: "images/stone.webp" },
      { word: "future",   tr: "gelecek", image: "images/future.webp" },
      { word: "cities",  tr: "şehirler",     image: "images/city.webp" },
      { word: "dream",   tr: "hayal", image: "images/dream.webp" },
    ],

    lyrics: [
      { from: "0:13.730", to: "0:15.058", text: "You told us,", training: { target: "told", choices: ["told", "forest", "kitchen", "memory"] } },
      { from: "0:17.330", to: "0:18.794", text: "'Reach the <sky>'" , training: {"target":"sky","choices":["sky","sparrow","forest","fallen"]} },
      { from: "0:20.858", to: "0:22.386", text: "So we learned", training: { target: "learned", choices: ["learned", "shine", "laugh", "follow"] } },
      { from: "0:24.178", to: "0:25.842", text: "To <dream> so high." , training: {"target":"dream","choices":["dream","sparrow","sky","forest"]} },
      { from: "0:27.786", to: "0:29.482", text: "But each year", training: { target: "year", choices: ["year", "storm", "smile", "cities"] } },
      { from: "0:31.130", to: "0:33.139", text: "The <forest>s fall." , training: {"target":"fall","choices":["fall","forest","sparrow","call"]} },
      { from: "0:34.931", to: "0:36.659", text: "Who will hear", training: { target: "hear", choices: ["hear", "dreams", "stone", "future"] } },
      { from: "0:38.195", to: "0:40.035", text: "The <sparrow>'s call?" , training: {"target":"sparrow","choices":["sparrow","sky","forest","fallen"]} },
      { from: "0:42.019", to: "0:45.171", text: "You gave us dreams,", training: { target: "dreams", choices: ["dreams", "forest", "speech", "plate"] } },
      { from: "0:45.028", to: "0:47.029", text: "And told us to follow." , training: {"target":"told","choices":["told","sparrow","sky","forest"]} },
      { from: "0:48.632", to: "0:52.184", text: "So leave us a world", training: { target: "world", choices: ["world", "kitchen", "storm", "memory"] } },
      { from: "0:52.480", to: "0:56.256", text: "To live tomorrow." , training: {"target":"live","choices":["live","sparrow","sky","forest"]} },
      { from: "0:56.464", to: "0:57.720", text: "We're holding on", training: { target: "holding", choices: ["holding", "fallen", "lonely", "bright"] } },
      { from: "0:59.392", to: "1:01.017", text: "To every tree." , training: {"target":"every","choices":["every","sparrow","sky","forest"]} },
      { from: "1:03.285", to: "1:06.726", text: "Will you stand here", training: { target: "stand", choices: ["stand", "shine", "laugh", "follow"] } },
      { from: "1:08.397", to: "1:09.645", text: "Next to me?" , training: {"target":"Next","choices":["Next","sparrow","sky","forest"]} },
      { from: "1:12.182", to: "1:13.589", text: "We're holding on", training: { target: "holding", choices: ["holding", "cities", "future", "smile"] } },
      { from: "1:15.245", to: "1:16.950", text: "To every tree." , training: {"target":"every","choices":["every","sparrow","sky","forest"]} },
      { from: "1:18.901", to: "1:22.478", text: "Will you stand here", training: { target: "stand", choices: ["stand", "forest", "journey", "memory"] } },
      { from: "1:24.376", to: "1:25.536", text: "Next to me?" , training: {"target":"Next","choices":["Next","sparrow","sky","forest"]} },
      { from: "1:31.543", to: "1:33.159", text: "You built <cities>,", training: { target: "built", choices: ["built", "dreams", "storm", "laughter"] } },
      { from: "1:34.743", to: "1:36.295", text: "<Stone> on <stone>." , training: {"target":"Stone","choices":["Stone","sparrow","sky","forest"]} },
      { from: "1:38.423", to: "1:40.023", text: "Now we're scared", training: { target: "scared", choices: ["scared", "future", "forest", "smile"] } },
      { from: "1:41.511", to: "1:43.599", text: "To call them home." , training: {"target":"call","choices":["call","sparrow","sky","forest"]} },
      { from: "1:45.263", to: "1:47.543", text: "Plastic oceans.", training: { target: "oceans", choices: ["oceans", "cities", "memory", "journey"] } },
      { from: "1:48.495", to: "1:50.375", text: "A <fallen> tree." , training: {"target":"fallen","choices":["fallen","sparrow","sky","forest"]} },
      { from: "1:51.895", to: "1:54.351", text: "Is this the <future>", training: { target: "future", choices: ["future", "storm", "kitchen", "laughter"] } },
      { from: "1:55.423", to: "1:57.295", text: "We'll have to see?" , training: {"target":"have","choices":["have","sparrow","sky","forest"]} },
      { from: "1:59.415", to: "2:02.487", text: "You gave us dreams,", training: { target: "dreams", choices: ["dreams", "forest", "stone", "smile"] } },
      { from: "2:02.751", to: "2:04.703", text: "And told us to follow." , training: {"target":"told","choices":["told","sparrow","sky","forest"]} },
      { from: "2:06.054", to: "2:09.358", text: "So leave us a world", training: { target: "world", choices: ["world", "cities", "memory", "storm"] } },
      { from: "2:09.566", to: "2:14.646", text: "To live tomorrow." , training: {"target":"live","choices":["live","sparrow","sky","forest"]} },
      { from: "2:22.070", to: "2:23.246", text: "If the <future>", training: { target: "future", choices: ["future", "forest", "smile", "kitchen"] } },
      { from: "2:24.054", to: "2:25.502", text: "Calls our name..." , training: {"target":"name","choices":["name","sparrow","sky","forest"]} },
      { from: "2:26.902", to: "2:28.966", text: "What will we aim?", training: { target: "aim", choices: ["aim", "dreams", "cities", "stone"] } },
      { from: "2:32.213", to: "2:36.701", text: "Ash… Or rain?" , training: {"target":"rain","choices":["rain","sparrow","sky","forest"]} },
      { from: "2:48.489", to: "2:49.961", text: "We're holding on", training: { target: "holding", choices: ["holding", "future", "memory", "forest"] } },
      { from: "2:51.513", to: "2:53.217", text: "To every tree." , training: {"target":"every","choices":["every","sparrow","sky","forest"]} },
      { from: "2:55.409", to: "2:55.817", text: "Will you", training: { target: "you", choices: ["you", "me", "they", "blue"] } },
      { from: "2:56.652", to: "2:58.756", text: "Stand here" , training: {"target":"here","choices":["here","sparrow","sky","forest"]} },
      { from: "3:00.508", to: "3:01.644", text: "Next to me?", training: { target: "me", choices: ["me", "future", "forest", "memory"] } },
      { from: "3:07.556", to: "3:13.940", text: "Next to me..." , training: {"target":"Next","choices":["Next","sparrow","sky","forest"]} },
      { from: "3:14.329", to: "3:15.953", text: "Next to me...", training: { target: "me", choices: ["me", "storm", "kitchen", "cities"] } },
      { from: "", to: "", text: "Written by Adil Fırat Oktav." , training: {"target":"Adil","choices":["Adil","sparrow","sky","forest"]} },
      { from: "", to: "", text: "Thanks for listening..." , training: {"target":"listening","choices":["listening","sparrow","sky","forest"]} },]

  },

/* ── ŞARKI 5 — THE PRICE YOU NEVER PAY - ELLA ───────────────────────────────────── */
  {
    id: "thepriceyouneverpay",
    title: "The Price you never pay",
    artist: "Ella",
    audio: "songs/thepriceyouneverpay.mp3",
    video: "https://media.adilhoca.com/video/thepriceyouneverpay.mp4",
    videotimingdelay: "",
    image: "thumbnails/thepriceyouneverpay.webp",
    spotify: "https://open.spotify.com/track/2bI8TPvYhZyeoHrUwxJvhH",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:00", to: "0:00" },
      { at: "0:00", to: "0:00" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [
      { at: "0:00", to: "0:00" },
      { at: "0:00", to: "0:00" }
],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "speech",    tr: "nutuk",          image: "images/speech.webp" },
      { word: "lie",   tr: "yalan",         image: "images/lie.webp" },
      { word: "pain",  tr: "acı",      image: "images/pain.webp" },
      { word: "sign", tr: "imzalamak",        image: "images/sign.webp" },
      { word: "grave",  tr: "mezar",     image: "images/grave.webp" },
      { word: "crumb",   tr: "ekmek kırıntısı", image: "images/crumb.webp" },
      { word: "war",  tr: "savaş",     image: "images/war.webp" },
      { word: "starve",   tr: "açlık", image: "images/starve.webp" },
    ],

    lyrics: [
      { from: "0:20.401", to: "0:21.857", text: "Another <speech>.", training: { target: "speech", choices: ["speech", "forest", "kitchen", "memory"] } },
      { from: "0:23.145", to: "0:24.617", text: "Another <lie>." , training: {"target":"lie","choices":["lie","speech","pain","sign"]} },
      { from: "0:25.633", to: "0:27.321", text: "Another mother", training: { target: "mother", choices: ["mother", "storm", "journey", "cities"] } },
      { from: "0:27.985", to: "0:29.713", text: "Starts to cry." , training: {"target":"Starts","choices":["Starts","speech","lie","pain"]} },
      { from: "0:30.880", to: "0:32.840", text: "Another sunrise.", training: { target: "sunrise", choices: ["sunrise", "forest", "laughter", "future"] } },
      { from: "0:33.327", to: "0:35.016", text: "Another town." , training: {"target":"town","choices":["town","speech","lie","pain"]} },
      { from: "0:35.968", to: "0:37.448", text: "Another school", training: { target: "school", choices: ["school", "storm", "memory", "smile"] } },
      { from: "0:37.992", to: "0:39.936", text: "Burning down." , training: {"target":"down","choices":["down","speech","lie","pain"]} },
      { from: "0:42.302", to: "0:44.374", text: "You write the future", training: { target: "future", choices: ["future", "kitchen", "sorrow", "cities"] } },
      { from: "0:44.829", to: "0:46.517", text: "With others' <pain>s." , training: {"target":"pains","choices":["pains","speech","lie","chains"]} },
      { from: "0:47.245", to: "0:49.081", text: "You build your empires", training: { target: "empires", choices: ["empires", "dreams", "forest", "laughter"] } },
      { from: "0:49.312", to: "0:51.640", text: "On others' remains." , training: {"target":"remains","choices":["remains","speech","lie","pain"]} },
      { from: "0:52.632", to: "0:54.704", text: "You shake your hands.", training: { target: "hands", choices: ["hands", "storm", "smile", "future"] } },
      { from: "0:54.944", to: "0:57.057", text: "You <sign> the page." , training: {"target":"sign","choices":["sign","speech","lie","pain"]} },
      { from: "0:57.505", to: "0:59.025", text: "Then send the young", training: { target: "young", choices: ["young", "cities", "kitchen", "memory"] } },
      { from: "0:59.385", to: "1:02.257", text: "To another <grave>." , training: {"target":"grave","choices":["grave","speech","lie","pain"]} },
      { from: "1:02.593", to: "1:04.633", text: "You call it peace.", training: { target: "peace", choices: ["peace", "storm", "forest", "laughter"] } },
      { from: "1:05.185", to: "1:07.241", text: "You call it <pride>." , training: {"target":"pride","choices":["pride","speech","lie","pain"]} },
      { from: "1:07.214", to: "1:09.934", text: "Children still", training: { target: "still", choices: ["still", "dreams", "future", "cities"] } },
      { from: "1:11.126", to: "1:12.918", text: "Pay the price." , training: {"target":"price","choices":["price","speech","lie","pain"]} },
      { from: "1:21.515", to: "1:23.155", text: "The gold you piled", training: { target: "gold", choices: ["gold", "forest", "smile", "storm"] } },
      { from: "1:24.139", to: "1:25.753", text: "To wage the <war>." , training: {"target":"war","choices":["war","speech","lie","pain"]} },
      { from: "1:26.657", to: "1:28.129", text: "Another child", training: { target: "child", choices: ["child", "memory", "kitchen", "laughter"] } },
      { from: "1:28.257", to: "1:30.865", text: "Woke up to <starve>." , training: {"target":"starve","choices":["starve","speech","lie","pain"]} },
      { from: "1:31.537", to: "1:33.834", text: "One more banquet.", training: { target: "banquet", choices: ["banquet", "journey", "storm", "forest"] } },
      { from: "1:33.618", to: "1:35.546", text: "With golden wine." , training: {"target":"golden","choices":["golden","speech","lie","pain"]} },
      { from: "1:36.154", to: "1:37.978", text: "Not even a <crumb>", training: { target: "crumb", choices: ["crumb", "cities", "future", "smile"] } },
      { from: "1:38.306", to: "1:40.986", text: "For those in line." , training: {"target":"those","choices":["those","speech","lie","pain"]} },
      { from: "1:42.883", to: "1:44.611", text: "You never hear", training: { target: "hear", choices: ["hear", "dreams", "forest", "memory"] } },
      { from: "1:45.019", to: "1:47.306", text: "The bombs at night." , training: {"target":"bombs","choices":["bombs","speech","lie","pain"]} },
      { from: "1:48.194", to: "1:49.738", text: "Yet somehow", training: { target: "somehow", choices: ["somehow", "storm", "kitchen", "cities"] } },
      { from: "1:49.922", to: "1:52.474", text: "Decide what's right." , training: {"target":"right","choices":["right","speech","lie","pain"]} },
      { from: "1:53.306", to: "1:55.418", text: "You shake your hands.", training: { target: "hands", choices: ["hands", "future", "laughter", "forest"] } },
      { from: "1:55.626", to: "1:57.802", text: "You sign the page." , training: {"target":"sign","choices":["sign","speech","lie","pain"]} },
      { from: "1:58.330", to: "1:59.834", text: "Then send the young", training: { target: "young", choices: ["young", "storm", "smile", "memory"] } },
      { from: "2:00.130", to: "2:02.946", text: "To another <grave>." , training: {"target":"grave","choices":["grave","speech","lie","pain"]} },
      { from: "2:03.210", to: "2:05.418", text: "You call it peace.", training: { target: "peace", choices: ["peace", "cities", "forest", "journey"] } },
      { from: "2:05.610", to: "2:08.106", text: "You call it <pride>." , training: {"target":"pride","choices":["pride","speech","lie","pain"]} },
      { from: "2:08.306", to: "2:10.786", text: "Children still", training: { target: "still", choices: ["still", "kitchen", "future", "laughter"] } },
      { from: "2:11.813", to: "2:13.661", text: "Pay the price." , training: {"target":"price","choices":["price","speech","lie","pain"]} },
      { from: "2:19.395", to: "2:21.707", text: "When all are gone...", training: { target: "gone", choices: ["gone", "storm", "forest", "smile"] } },
      { from: "2:21.948", to: "2:24.083", text: "What remains?" , training: {"target":"remains","choices":["remains","speech","lie","pain"]} },
      { from: "2:27.428", to: "2:29.244", text: "Empty homes...", training: { target: "homes", choices: ["homes", "cities", "memory", "journey"] } },
      { from: "2:30.451", to: "2:38.893", text: "And names on <grave>s." , training: {"target":"graves","choices":["graves","speech","lie","waves"]} },
      { from: "2:54.423", to: "2:56.335", text: "You shake your hands.", training: { target: "hands", choices: ["hands", "dreams", "kitchen", "future"] } },
      { from: "2:56.879", to: "2:58.871", text: "You <sign> the page." , training: {"target":"sign","choices":["sign","speech","lie","pain"]} },
      { from: "2:59.383", to: "3:00.831", text: "Then send the young", training: { target: "young", choices: ["young", "forest", "smile", "cities"] } },
      { from: "3:01.039", to: "3:04.007", text: "To another <grave>." , training: {"target":"grave","choices":["grave","speech","lie","pain"]} },
      { from: "3:04.191", to: "3:06.263", text: "You call it peace.", training: { target: "peace", choices: ["peace", "storm", "journey", "memory"] } },
      { from: "3:06.807", to: "3:08.887", text: "You call it <pride>." , training: {"target":"pride","choices":["pride","speech","lie","pain"]} },
      { from: "3:09.167", to: "3:11.790", text: "Children still", training: { target: "still", choices: ["still", "forest", "future", "laughter"] } },
      { from: "3:13.006", to: "3:14.830", text: "Pay the price." , training: {"target":"price","choices":["price","speech","lie","pain"]} },
      { from: "", to: "", text: "Written by Adil Fırat Oktav." , training: {"target":"Adil","choices":["Adil","speech","lie","pain"]} },
      { from: "", to: "", text: "Thanks for listening..." , training: {"target":"listening","choices":["listening","speech","lie","pain"]} },]

  },
/* ── ŞARKI 6 — THE NOISE OF HOME ───────────────────────────────────── */
  {
    id: "thenoiseofhome",
    title: "The noise of home",
    artist: "Ella",
    audio: "songs/thenoiseofhome.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/thenoiseofhome.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:58", to: "1:18" },
      { at: "1:47", to: "2:14" },
{ at: "2:47", to: "3:26" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:58", to: "1:18" },
      { at: "1:47", to: "2:14" },
{ at: "2:47", to: "3:26" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "kitchen",    tr: "mutfak",          image: "images/kitchen.webp" },
      { word: "plate",   tr: "tabak",         image: "images/plate.webp" },
      { word: "grin",  tr: "sırıtmak",      image: "images/grin.webp" },
      { word: "loneliness", tr: "yanlızlık",        image: "images/alone.webp" },
      { word: "key",  tr: "anahtar",     image: "images/key.webp" },
      { word: "familiar",   tr: "tanıdık", image: "images/familiar.webp" },
      { word: "wide",  tr: "geniş",           image: "images/wide.webp" },
      { word: "laughter",   tr: "kahkaha",         image: "images/laughter.webp" }
    ],

    lyrics: [
      { from: "0:16.686", to: "0:19.662", text: "Someone's talking down the hall,", training: { target: "talking", choices: ["talking", "forest", "journey", "memory"] } },
      { from: "0:20.173", to: "0:23.078", text: "Someone's laughing way too loud." , training: {"target":"laughing","choices":["laughing","kitchen","plate","grin"]} },
      { from: "0:23.614", to: "0:26.742", text: "Someone left the <kitchen> light on,", training: { target: "kitchen", choices: ["kitchen", "storm", "cities", "smile"] } },
      { from: "0:27.246", to: "0:29.918", text: "Someone's music shakes the house." , training: {"target":"music","choices":["music","kitchen","plate","grin"]} },
      { from: "0:30.726", to: "0:33.477", text: "We fight about the little things,", training: { target: "fight", choices: ["fight", "shine", "laugh", "follow"] } },
      { from: "0:33.866", to: "0:37.109", text: "Then laugh at what the morning brings." , training: {"target":"laugh","choices":["laugh","kitchen","plate","grin"]} },
      { from: "0:37.306", to: "0:40.289", text: "We slam our doors and walk away,", training: { target: "doors", choices: ["doors", "forest", "future", "laughter"] } },
      { from: "0:40.822", to: "0:43.738", text: "Then laugh about it anyway." , training: {"target":"laugh","choices":["laugh","kitchen","plate","grin"]} },
      { from: "0:44.518", to: "0:46.874", text: "I used to wish the noise away,", training: { target: "noise", choices: ["noise", "storm", "cities", "memory"] } },
      { from: "0:48.086", to: "0:50.588", text: "Dreaming of a quieter day." , training: {"target":"quieter","choices":["quieter","kitchen","plate","grin"]} },
      { from: "0:51.107", to: "0:53.729", text: "Now I know I'll miss the sound,", training: { target: "sound", choices: ["sound", "forest", "journey", "smile"] } },
      { from: "0:54.611", to: "0:58.013", text: "When there's no one else around." , training: {"target":"else","choices":["else","kitchen","plate","grin"]} },
      { from: "0:58.006", to: "1:00.910", text: "So let the whole house make some noise,", training: { target: "house", choices: ["house", "storm", "future", "laughter"] } },
      { from: "1:01.648", to: "1:04.521", text: "Let every room be full of voice." , training: {"target":"every","choices":["every","kitchen","plate","grin"]} },
      { from: "1:05.140", to: "1:07.834", text: "Let them call my name once more,", training: { target: "name", choices: ["name", "cities", "forest", "memory"] } },
      { from: "1:08.662", to: "1:12.716", text: "Like a thousand times before." , training: {"target":"thousand","choices":["thousand","kitchen","plate","grin"]} },
      { from: "1:19.719", to: "1:22.584", text: "Dinner waiting on my <plate>,", training: { target: "plate", choices: ["plate", "storm", "journey", "smile"] } },
      { from: "1:22.974", to: "1:25.823", text: "Someone asking why I'm late." , training: {"target":"asking","choices":["asking","kitchen","plate","grin"]} },
      { from: "1:26.333", to: "1:29.366", text: "Same old stories wear me thin,", training: { target: "stories", choices: ["stories", "kitchen", "future", "laughter"] } },
      { from: "1:29.725", to: "1:32.634", text: "Same bad joke still makes me <grin>." , training: {"target":"grin","choices":["grin","kitchen","plate","loneliness"]} },
      { from: "1:33.618", to: "1:35.916", text: "I used to dream of being grown,", training: { target: "dream", choices: ["dream", "forest", "storm", "cities"] } },
      { from: "1:36.510", to: "1:39.318", text: "Couldn't wait to be left alone." , training: {"target":"wait","choices":["wait","kitchen","plate","grin"]} },
      { from: "1:39.537", to: "1:42.656", text: "Now each and every passing night,", training: { target: "night", choices: ["night", "future", "memory", "smile"] } },
      { from: "1:43.034", to: "1:46.731", text: "Feeds the <loneliness> that I fight." , training: {"target":"loneliness","choices":["loneliness","kitchen","plate","grin"]} },
      { from: "1:46.852", to: "1:49.667", text: "So let the whole house make some noise,", training: { target: "house", choices: ["house", "kitchen", "storm", "laughter"] } },
      { from: "1:50.363", to: "1:53.035", text: "Let every room be full of voice." , training: {"target":"every","choices":["every","kitchen","plate","grin"]} },
      { from: "1:53.829", to: "1:56.463", text: "Let them call my name once more,", training: { target: "name", choices: ["name", "forest", "journey", "cities"] } },
      { from: "1:57.327", to: "2:01.427", text: "Like a thousand times before." , training: {"target":"thousand","choices":["thousand","kitchen","plate","grin"]} },
      { from: "2:15.690", to: "2:18.657", text: "One day I'll turn this old <key>,", training: { target: "key", choices: ["key", "storm", "future", "smile"] } },
      { from: "2:19.305", to: "2:22.475", text: "And nothing will sound the same." , training: {"target":"nothing","choices":["nothing","kitchen","plate","grin"]} },
      { from: "2:22.991", to: "2:25.394", text: "No <familiar> face to see,", training: { target: "familiar", choices: ["familiar", "forest", "cities", "memory"] } },
      { from: "2:26.252", to: "2:29.341", text: "No one calling out my name." , training: {"target":"calling","choices":["calling","kitchen","plate","grin"]} },
      { from: "2:29.893", to: "2:32.978", text: "So tonight I'll leave my door,", training: { target: "tonight", choices: ["tonight", "journey", "storm", "laughter"] } },
      { from: "2:33.428", to: "2:36.258", text: "Open <wide>r than before." , training: {"target":"wider","choices":["wider","open","large","rider"]} },
      { from: "2:36.834", to: "2:39.990", text: "Let the noise keep coming through,", training: { target: "noise", choices: ["noise", "future", "kitchen", "smile"] } },
      { from: "2:40.998", to: "2:46.222", text: "Someday I'll be missing all of you." , training: {"target":"missing","choices":["missing","kitchen","plate","grin"]} },
      { from: "2:49.189", to: "2:51.921", text: "Let the whole house make some noise,", training: { target: "house", choices: ["house", "forest", "cities", "memory"] } },
      { from: "2:52.515", to: "2:55.252", text: "Let every room be full of voice." , training: {"target":"every","choices":["every","kitchen","plate","grin"]} },
      { from: "2:55.948", to: "2:59.045", text: "Let them call my name once more,", training: { target: "name", choices: ["name", "storm", "journey", "laughter"] } },
      { from: "2:59.382", to: "3:04.136", text: "Like a thousand times before." , training: {"target":"thousand","choices":["thousand","kitchen","plate","grin"]} },
      { from: "3:04.213", to: "3:07.126", text: "Let the <laughter> fill these walls,", training: { target: "laughter", choices: ["laughter", "future", "forest", "kitchen"] } },
      { from: "3:07.795", to: "3:10.743", text: "Let me hear them down the halls." , training: {"target":"hear","choices":["hear","kitchen","plate","grin"]} },
      { from: "3:11.199", to: "3:14.309", text: "I don't know where I may roam,", training: { target: "roam", choices: ["roam", "cities", "storm", "memory"] } },
      { from: "3:14.427", to: "3:19.773", text: "I'll always know the noise of home." , training: {"target":"always","choices":["always","kitchen","plate","grin"]} }]
  },

/* ── GRADE 5 UNIT 1 - SCHOOL IS COOL ───────────────────────────────────── */
  {
    id: "5_1_schooliscool",
    title: "School is Cool",
    artist: "Grade5",
    audio: "songs/5_1_schooliscool.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/5_1_schooliscool.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:38", to: "0:52" },
      { at: "1:08", to: "1:22" },
{ at: "1:49", to: "2:12" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:58", to: "1:18" },
      { at: "1:47", to: "2:14" },
{ at: "2:47", to: "3:26" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "Science lab",    tr: "Fen laboratuarı",          image: "images/science_lab.webp" },
      { word: "Notice board",   tr: "İlan panosu",         image: "images/notice_board.webp" },
      { word: "field",  tr: "saha",      image: "images/field.webp" },
      { word: "shout", tr: "bağırmak",        image: "images/shout.webp" },
      { word: "obey the rules",  tr: "kurallara uymak",     image: "images/obey_the_rules.webp" },
      { word: "art club",   tr: "sanat kulübü", image: "images/art_club.webp" },
      { word: "no fighting",  tr: "kavga yok",           image: "images/no_fighting.webp" },
      { word: "respect",   tr: "saygı",         image: "images/respect.webp" }
    ],

    lyrics: [
      { from: "0:07.762", to: "0:10.672", text: "This is my school, come with me,", training: { target: "school", choices: ["school", "secretary", "exhibition", "fountain"] } },
      { from: "0:11.608", to: "0:14.643", text: "There are many things to see.", training: { target: "things", choices: ["things", "ancient", "historical", "uniform"] } },
      { from: "0:15.307", to: "0:18.540", text: "This is the library, quiet please,", training: { target: "library", choices: ["library", "headmaster", "coach", "administration department"] } },
      { from: "0:19.019", to: "0:21.979", text: "This is the canteen, sit with me.", training: { target: "canteen", choices: ["canteen", "conference hall", "notice board", "science lab"] } },
      { from: "0:23.163", to: "0:26.315", text: "<Science lab>, conference hall,", training: { target: "Science lab", choices: ["Science lab", "music club", "ballet club", "folk dance club"] } },
      { from: "0:26.931", to: "0:30.147", text: "<Notice board> upon the wall.", training: { target: "Notice board", choices: ["Notice board", "gate", "field", "fountain"] } },
      { from: "0:30.659", to: "0:33.963", text: "There is a <field> beside the gate,", training: { target: "field", choices: ["field", "exhibition", "technology club", "environment club"] } },
      { from: "0:34.555", to: "0:37.707", text: "Come to school, don't be late!", training: { target: "late", choices: ["late", "organize", "arrange", "solve"] } },
      { from: "0:38.595", to: "0:41.611", text: "At our school, we learn and play,", training: { target: "learn", choices: ["learn", "ancient", "national day", "species"] } },
      { from: "0:42.467", to: "0:45.451", text: "We <obey the rules> each day.", training: { target: "obey the rules", choices: ["obey the rules", "no shouting", "no fighting", "chew gum"] } },
      { from: "0:46.123", to: "0:49.019", text: "No <shout>ing, no fighting too,", training: { target: "shouting", choices: ["shouting", "high heels", "law", "outing"] } },
      { from: "0:50.249", to: "0:52.944", text: "Keep it safe for me and you!", training: { target: "safe", choices: ["safe", "protect", "respect", "own"] } },
      { from: "0:54.411", to: "0:56.787", text: "Do you like playing chess?", training: { target: "chess", choices: ["chess", "maths club", "science club", "film club"] } },
      { from: "0:57.347", to: "1:00.684", text: "Yes, I do! The <chess club>'s best!", training: { target: "chess club", choices: ["chess club", "drama club", "sports club", "art club"] } },
      { from: "1:01.987", to: "1:04.635", text: "Do you like making art?", training: { target: "art", choices: ["art", "secretary", "assistant to the headmaster", "headmaster"] } },
      { from: "1:04.907", to: "1:08.347", text: "Join the <art club>, come and start!", training: { target: "art club", choices: ["art club", "music club", "science club", "technology club"] } },
      { from: "1:08.955", to: "1:12.067", text: "At our school, we learn and play,", training: { target: "learn", choices: ["learn", "organize", "arrange", "solve"] } },
      { from: "1:13.051", to: "1:15.907", text: "We obey the rules each day.", training: { target: "obey", choices: ["obey", "respect", "protect", "own"] } },
      { from: "1:16.587", to: "1:19.427", text: "No shouting, <no fighting> too,", training: { target: "no fighting", choices: ["no fighting", "no shouting", "chew gum", "high heels"] } },
      { from: "1:20.723", to: "1:23.219", text: "Keep it safe for me and you!", training: { target: "safe", choices: ["safe", "law", "national day", "historical"] } },
      { from: "1:25.081", to: "1:26.737", text: "Music club and science club,", training: { target: "Music club", choices: ["Music club", "chess club", "drama club", "environment club"] } },
      { from: "1:27.129", to: "1:28.705", text: "Sports club and the drama club.", training: { target: "Sports club", choices: ["Sports club", "ballet club", "folk dance club", "art club"] } },
      { from: "1:28.879", to: "1:30.736", text: "Technology, maths and film,", training: { target: "Technology", choices: ["Technology", "science lab", "conference hall", "administration department"] } },
      { from: "1:31.015", to: "1:36.912", text: "Choose a club and join the fun!", training: { target: "club", choices: ["club", "field", "gate", "uniform"] } },
      { from: "1:36.903", to: "1:37.752", text: "Don't shout!", training: { target: "shout", choices: ["shout", "noise", "utterance", "fountain"] } },
      { from: "1:38.943", to: "1:39.719", text: "Don't fight!", training: { target: "fight", choices: ["fight", "no fighting", "no shouting", "safe"] } },
      { from: "1:40.155", to: "1:41.603", text: "Obey the rules,", training: { target: "Obey", choices: ["Obey", "organize", "arrange", "solve"] } },
      { from: "1:41.877", to: "1:43.443", text: "<Respect> your friends,", training: { target: "Respect", choices: ["Respect", "protect", "own", "obey the rules"] } },
      { from: "1:43.921", to: "1:49.807", text: "Keep our school safe and clear!", training: { target: "safe", choices: ["safe", "ancient", "historical", "exhibition"] } },
      { from: "1:50.779", to: "1:53.515", text: "At our school, we learn and play,", training: { target: "school", choices: ["school", "library", "canteen", "notice board"] } },
      { from: "1:54.385", to: "1:57.373", text: "We obey the rules each day.", training: { target: "rules", choices: ["rules", "law", "national day", "secretary"] } },
      { from: "1:58.164", to: "2:00.936", text: "No shouting, no fighting too,", training: { target: "shouting", choices: ["shouting", "noise", "chew gum", "high heels"] } },
      { from: "2:02.124", to: "2:04.854", text: "Keep it safe for me and you!", training: { target: "safe", choices: ["safe", "species", "utterance", "uniform"] } },
      { from: "2:05.760", to: "2:09.102", text: "At our school, side by side,", training: { target: "school", choices: ["school", "coach", "headmaster", "assistant to the headmaster"] } },
      { from: "2:09.708", to: "2:13.068", text: "Learn the rules and learn with pride!", training: { target: "rules", choices: ["rules", "respect", "protect", "obey the rules"] } },]
  },

/* ── GRADE 5 UNIT 1 - AROUND THE WORLD ───────────────────────────────────── */
  {
    id: "5_1_aroundtheworld",
    title: "Around the World",
    artist: "Grade5",
    audio: "songs/5_1_aroundtheworld.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/5_1_aroundtheworld.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:16", to: "0:31" },
      { at: "1:02", to: "1:50" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:58", to: "1:18" },
      { at: "1:47", to: "2:14" },
{ at: "2:47", to: "3:26" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "National Days",    tr: "Milli bayramlar",          image: "images/national_day.webp" },
      { word: "country",   tr: "ülke",         image: "images/country.webp" },
      { word: "flag",  tr: "bayrak",      image: "images/flag.webp" },
      { word: "Spain", tr: "İspanya",        image: "images/spain.webp" },
      { word: "Germany",  tr: "Almanya",     image: "images/germany.webp" },
      { word: "United Kingdom",   tr: "Birleşik Krallık", image: "images/united_kingdom.webp" },
      { word: "South Korea",  tr: "Güney Kore",           image: "images/south_korea.webp" },
      { word: "Japan",   tr: "Japonya",         image: "images/japan.webp" }
    ],

    lyrics: [
      { from: "0:00.881", to: "0:03.808", text: "Where are you from? Come sing with me,", training: { target: "from", choices: ["from", "country", "flag", "school"] } },
      { from: "0:04.504", to: "0:07.631", text: "I'm from Türkiye, that's me!", training: { target: "Türkiye", choices: ["Türkiye", "France", "Spain", "Japan"] } },
      { from: "0:08.527", to: "0:11.647", text: "Where is she from? She's from France,", training: { target: "France", choices: ["France", "Spain", "Germany", "Canada"] } },
      { from: "0:12.391", to: "0:15.487", text: "He's from <Spain>, come on, let's dance!", training: { target: "Spain", choices: ["Spain", "France", "Italy", "Japan"] } },
      { from: "0:16.273", to: "0:19.204", text: "Different countries, different days,", training: { target: "days", choices: ["days", "countries", "national days", "friends"] } },
      { from: "0:19.901", to: "0:22.837", text: "We celebrate in different ways.", training: { target: "ways", choices: ["ways", "days", "countries", "flags"] } },
      { from: "0:23.633", to: "0:27.119", text: "<National days> for me and you,", training: { target: "National days", choices: ["National days", "country", "flag", "friends"] } },
      { from: "0:27.503", to: "0:31.547", text: "Every <country> has one too.", training: { target: "one", choices: ["one", "country", "flag", "friends"] } },
      { from: "0:33.094", to: "0:36.358", text: "<Japan> and China, come this way,", training: { target: "Japan", choices: ["Japan", "China", "France", "Spain"] } },
      { from: "0:36.900", to: "0:40.164", text: "Mexico and Brazil today.", training: { target: "today", choices: ["today", "Mexico", "Brazil", "Canada"] } },
      { from: "0:40.655", to: "0:43.877", text: "<Germany>, Greece, come sing with me,", training: { target: "Germany", choices: ["Germany", "Greece", "Italy", "France"] } },
      { from: "0:44.279", to: "0:47.722", text: "The <United Kingdom>, one, two, three!", training: { target: "three", choices: ["three", "United Kingdom", "South Korea", "Australia"] } },
      { from: "0:48.083", to: "0:51.418", text: "Australia, Canada, let's go,", training: { target: "Canada", choices: ["Canada", "Australia", "Mexico", "Brazil"] } },
      { from: "0:52.096", to: "0:55.301", text: "Italy and <Spain> say hello.", training: { target: "Spain", choices: ["Spain", "Italy", "France", "Germany"] } },
      { from: "0:55.643", to: "0:59.015", text: "France, <South Korea>, sing with me,", training: { target: "South Korea", choices: ["South Korea", "Japan", "China", "Canada"] } },
      { from: "0:59.824", to: "1:03.037", text: "Different countries, one, two, three!", training: { target: "three", choices: ["three", "countries", "national days", "friends"] } },
      { from: "1:03.655", to: "1:06.521", text: "Different countries, different days,", training: { target: "days", choices: ["days", "countries", "flag", "national days"] } },
      { from: "1:07.229", to: "1:10.323", text: "We celebrate in different ways.", training: { target: "ways", choices: ["ways", "days", "friends", "flags"] } },
      { from: "1:11.025", to: "1:14.218", text: "<National days> for me and you,", training: { target: "days", choices: ["days", "country", "flag", "friends"] } },
      { from: "1:14.908", to: "1:18.956", text: "Every <country> has one too.", training: { target: "one", choices: ["one", "national days", "flag", "friends"] } },
      { from: "1:19.286", to: "1:22.070", text: "<Flag>s are here, it's our day,", training: { target: "Flags", choices: ["Flags", "country", "national days", "bags"] } },
      { from: "1:22.574", to: "1:25.958", text: "We celebrate in our own way.", training: { target: "way", choices: ["way", "day", "country", "flag"] } },
      { from: "1:26.324", to: "1:29.573", text: "Friends are here, come out and say,", training: { target: "Friends", choices: ["Friends", "flags", "countries", "national days"] } },
      { from: "1:29.927", to: "1:33.360", text: "We celebrate our national day!", training: { target: "day", choices: ["day", "flag", "country", "friends"] } },
      { from: "1:33.865", to: "1:36.833", text: "Different countries, different days,", training: { target: "days", choices: ["days", "flags", "national days", "friends"] } },
      { from: "1:37.367", to: "1:40.607", text: "We celebrate in different ways.", training: { target: "ways", choices: ["ways", "days", "country", "flag"] } },
      { from: "1:41.117", to: "1:44.244", text: "National days for me and you,", training: { target: "days", choices: ["days", "countries", "flags", "friends"] } },
      { from: "1:44.856", to: "1:49.727", text: "Every country has one too.", training: { target: "one", choices: ["one", "national days", "flag", "friends"] } },]
  },

/* ── GRADE 5 UNIT 2 - SCHOOL DAYS ───────────────────────────────────── */
  {
    id: "5_2_schooldays",
    title: "School Days",
    artist: "Grade5",
    audio: "songs/5_2_schooldays.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/5_2_schooldays.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:36", to: "0:52" },
      { at: "1:04", to: "1:19" },
{ at: "1:35", to: "2:10" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:58", to: "1:18" },
      { at: "1:47", to: "2:14" },
{ at: "2:47", to: "3:26" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "Science",    tr: "Fen",          image: "images/science.webp" },
      { word: "timetable",   tr: "ders programı",         image: "images/timetable.webp" },
      { word: "ruler",  tr: "cetvel",      image: "images/ruler.webp" },
      { word: "Arts", tr: "Görsel sanatlar",        image: "images/arts.webp" },
      { word: "Weekend",  tr: "haftasonu",     image: "images/weekend.webp" },
      { word: "School bag",   tr: "okul çantası", image: "images/schoolbag.webp" },
      { word: "P.E.",  tr: "Beden eğitimi",           image: "images/pe.webp" },
      { word: "I.T.",   tr: "Bilişim teknolojileri",         image: "images/it.webp" }
    ],

    lyrics: [
      { from: "0:00.428", to: "0:04.022", text: "Monday morning, Maths will start,", training: { target: "Maths", choices: ["Maths", "Music", "Science", "paths"] } },
      { from: "0:05.110", to: "0:08.566", text: "Tuesday, English, then some <Arts>.", training: { target: "Arts", choices: ["Arts", "Music", "English", "hearts"] } },
      { from: "0:09.999", to: "0:13.112", text: "Wednesday, <Science>, books in sight,", training: { target: "Science", choices: ["Science", "English", "Maths", "silence"] } },
      { from: "0:14.431", to: "0:17.647", text: "Read my notebook, write it right.", training: { target: "right", choices: ["right", "notebook", "read", "flight"] } },
      { from: "0:18.791", to: "0:21.575", text: "Monday morning, Maths will start,", training: { target: "Monday", choices: ["Monday", "Tuesday", "Friday", "someday"] } },
      { from: "0:22.919", to: "0:26.391", text: "Tuesday, English, then some <Arts>.", training: { target: "English", choices: ["English", "Turkish", "Arts", "finish"] } },
      { from: "0:27.743", to: "0:30.990", text: "Wednesday, <Science>, books in sight,", training: { target: "books", choices: ["books", "Science", "Maths", "looks"] } },
      { from: "0:32.221", to: "0:35.493", text: "Read my notebook, write it right.", training: { target: "notebook", choices: ["notebook", "ruler", "pencil", "cookbook"] } },
      { from: "0:36.666", to: "0:40.281", text: "Check my <timetable>, come and see,", training: { target: "timetable", choices: ["timetable", "notebook", "ruler", "fairytale"] } },
      { from: "0:41.278", to: "0:44.766", text: "Maths and <Science>, time for <P.E.>", training: { target: "P.E.", choices: ["P.E.", "I.T.", "Science", "T.V."] } },
      { from: "0:45.814", to: "0:49.246", text: "Music, English, <Arts> and <I.T.>,", training: { target: "I.T.", choices: ["I.T.", "P.E.", "Arts", "E.T."] } },
      { from: "0:50.382", to: "0:53.710", text: "That's my school week, now come with me!", training: { target: "school", choices: ["school", "week", "Music", "pool"] } },
      { from: "0:55.526", to: "0:57.606", text: "Thursday, Turkish, read and write,", training: { target: "write", choices: ["write", "read", "Turkish", "flight"] } },
      { from: "0:57.893", to: "1:00.085", text: "Friday, Music feels just right.", training: { target: "right", choices: ["right", "Music", "Friday", "flight"] } },
      { from: "1:00.188", to: "1:02.108", text: "Pencil, <ruler>, book in hand,", training: { target: "ruler", choices: ["ruler", "pencil", "book", "cooler"] } },
      { from: "1:02.388", to: "1:04.292", text: "<School bag> ready, now I stand.", training: { target: "stand", choices: ["stand", "ready", "School bag", "land"] } },
      { from: "1:04.155", to: "1:07.291", text: "Check my <timetable>, come and see,", training: { target: "come", choices: ["come", "see", "Check", "drum"] } },
      { from: "1:08.435", to: "1:11.651", text: "Maths and <Science>, time for <P.E.>", training: { target: "Science", choices: ["Science", "Maths", "P.E.", "silence"] } },
      { from: "1:13.011", to: "1:16.315", text: "Music, English, <Arts> and <I.T.>,", training: { target: "Arts", choices: ["Arts", "Music", "English", "hearts"] } },
      { from: "1:16.809", to: "1:20.808", text: "That's my school week, now come with me!", training: { target: "week", choices: ["week", "school", "Music", "cheek"] } },
      { from: "1:22.608", to: "1:24.448", text: "Monday, Tuesday, Wednesday flow,", training: { target: "flow", choices: ["flow", "Monday", "Wednesday", "snow"] } },
      { from: "1:25.032", to: "1:26.848", text: "Thursday, Friday, off we go.", training: { target: "go", choices: ["go", "Friday", "Thursday", "snow"] } },
      { from: "1:27.296", to: "1:29.890", text: "Saturday and Sunday we play,", training: { target: "play", choices: ["play", "Sunday", "Saturday", "grey"] } },
      { from: "1:31.216", to: "1:35.728", text: "<Weekend> time is here to stay!", training: { target: "stay", choices: ["stay", "Weekend", "time", "sleigh"] } },
      { from: "1:35.730", to: "1:38.970", text: "Check my <timetable>, come and see,", training: { target: "see", choices: ["see", "come", "Check", "tea"] } },
      { from: "1:40.066", to: "1:43.299", text: "Maths and <Science>, time for <P.E.>", training: { target: "Maths", choices: ["Maths", "Science", "P.E.", "paths"] } },
      { from: "1:44.554", to: "1:47.970", text: "Music, English, <Arts> and <I.T.>,", training: { target: "English", choices: ["English", "Arts", "Music", "finish"] } },
      { from: "1:48.842", to: "1:52.378", text: "That's my school week, now come with me!", training: { target: "come", choices: ["come", "school", "week", "drum"] } },
      { from: "1:52.914", to: "1:56.042", text: "Check my <timetable>, come and see,", training: { target: "Check", choices: ["Check", "come", "see", "deck"] } },
      { from: "1:57.130", to: "2:00.578", text: "Maths and <Science>, time for <P.E.>", training: { target: "time", choices: ["time", "Maths", "Science", "rhyme"] } },
      { from: "2:01.576", to: "2:05.072", text: "Music, English, <Arts> and <I.T.>,", training: { target: "Music", choices: ["Music", "English", "Arts", "mystic"] } },
      { from: "2:06.272", to: "2:09.555", text: "That's my school week, now come with me!", training: { target: "me", choices: ["me", "school", "week", "sea"] } },]
  },

/* ── GRADE 5 UNIT 2 - A DAY IN MY LIFE ───────────────────────────────────── */
  {
    id: "5_2_adayinmylife",
    title: "A Day In My Life",
    artist: "Grade5",
    audio: "songs/5_2_adayinmylife.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/5_2_adayinmylife.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:24", to: "0:40" },
      { at: "1:00", to: "1:17" },
{ at: "1:37", to: "2:20" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:58", to: "1:18" },
      { at: "1:47", to: "2:14" },
{ at: "2:47", to: "3:26" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "get up",    tr: "uyanmak",          image: "images/get_up.webp" },
      { word: "Quarter past",   tr: "çeyrek geçe",         image: "images/quarter_past.webp" },
      { word: "Breakfast",  tr: "kahvaltı",      image: "images/breakfast.webp" },
      { word: "Half past", tr: "buçuk geçe",        image: "images/half_past.webp" },
      { word: "seat",  tr: "sıra",     image: "images/seat.webp" },
      { word: "Quarter to",   tr: "çeyrek kala", image: "images/quarter_to.webp" },
      { word: "dinner",  tr: "akşam yemeği",           image: "images/dinner.webp" },
      { word: "bright",   tr: "parlak",         image: "images/bright.webp" }
    ],

    lyrics: [
      { from: "0:09.071", to: "0:10.433", text: "What time is it?", training: { target: "What", choices: ["What", "When", "Where", "hot"] } },
      { from: "0:11.051", to: "0:12.455", text: "Seven o'clock,", training: { target: "Seven", choices: ["Seven", "Eight", "Nine", "heaven"] } },
      { from: "0:13.277", to: "0:14.333", text: "I <get up>", training: { target: "get up", choices: ["get up", "sit down", "go home", "fed up"] } },
      { from: "0:14.519", to: "0:16.409", text: "And check the clock.", training: { target: "clock", choices: ["clock", "book", "ruler", "rock"] } },
      { from: "0:16.787", to: "0:18.965", text: "<Quarter past> seven", training: { target: "Quarter past", choices: ["Quarter past", "Quarter to", "Half past", "quarter glass"] } },
      { from: "0:19.133", to: "0:20.531", text: "<Breakfast> time,", training: { target: "Breakfast", choices: ["Breakfast", "dinner", "homework", "fast test"] } },
      { from: "0:21.149", to: "0:22.169", text: "Eight o'clock,", training: { target: "Eight", choices: ["Eight", "Seven", "Ten", "weight"] } },
      { from: "0:22.517", to: "0:24.551", text: "I feel just fine.", training: { target: "fine", choices: ["fine", "full", "bright", "wine"] } },
      { from: "0:24.755", to: "0:25.853", text: "What time is it?", training: { target: "time", choices: ["time", "clock", "school", "rhyme"] } },
      { from: "0:26.399", to: "0:27.881", text: "Look and see,", training: { target: "Look", choices: ["Look", "Tell", "Read", "book"] } },
      { from: "0:28.277", to: "0:29.873", text: "Tell the time", training: { target: "Tell", choices: ["Tell", "Look", "Read", "bell"] } },
      { from: "0:30.023", to: "0:31.943", text: "And sing with me.", training: { target: "sing", choices: ["sing", "tell", "look", "wing"] } },
      { from: "0:32.153", to: "0:33.605", text: "<Half past> eight,", training: { target: "Half past", choices: ["Half past", "Quarter past", "Quarter to", "hall pass"] } },
      { from: "0:33.878", to: "0:35.834", text: "I leave for school,", training: { target: "leave", choices: ["leave", "come", "read", "weave"] } },
      { from: "0:36.176", to: "0:39.518", text: "Learning there", training: { target: "Learning", choices: ["Learning", "Breakfast", "homework", "yearning"] } },
      { from: "0:39.884", to: "0:41.708", text: "Is really cool!", training: { target: "cool", choices: ["cool", "bright", "fine", "school"] } },
      { from: "0:45.236", to: "0:48.713", text: "Nine o'clock, I'm at my <seat>,", training: { target: "seat", choices: ["seat", "ruler", "clock", "street"] } },
      { from: "0:49.043", to: "0:50.580", text: "<Half past> twelve,", training: { target: "twelve", choices: ["twelve", "nine", "four", "shelves"] } },
      { from: "0:50.729", to: "0:53.015", text: "It's time to eat.", training: { target: "eat", choices: ["eat", "read", "sleep", "seat"] } },
      { from: "0:53.171", to: "0:54.461", text: "<Quarter to> four,", training: { target: "Quarter to", choices: ["Quarter to", "Quarter past", "Half past", "water"] } },
      { from: "0:55.018", to: "0:56.470", text: "School is done,", training: { target: "done", choices: ["done", "fun", "school", "sun"] } },
      { from: "0:57.178", to: "0:58.402", text: "Four o'clock,", training: { target: "Four", choices: ["Four", "Nine", "Ten", "floor"] } },
      { from: "0:58.551", to: "1:00.574", text: "It's time for fun.", training: { target: "fun", choices: ["fun", "done", "homework", "sun"] } },
      { from: "1:00.747", to: "1:01.839", text: "What time is it?", training: { target: "is", choices: ["is", "it", "time", "quiz"] } },
      { from: "1:02.225", to: "1:03.797", text: "Look and see,", training: { target: "see", choices: ["see", "look", "tell", "tea"] } },
      { from: "1:04.277", to: "1:05.825", text: "Tell the time", training: { target: "the", choices: ["the", "time", "tell", "tree"] } },
      { from: "1:06.065", to: "1:07.967", text: "And sing with me.", training: { target: "with", choices: ["with", "sing", "me", "myth"] } },
      { from: "1:08.153", to: "1:09.653", text: "<Quarter to> five,", training: { target: "five", choices: ["five", "four", "nine", "drive"] } },
      { from: "1:10.193", to: "1:11.609", text: "Fun is done,", training: { target: "Fun", choices: ["Fun", "School", "Time", "sun"] } },
      { from: "1:12.154", to: "1:14.122", text: "Time for homework,", training: { target: "homework", choices: ["homework", "Breakfast", "dinner", "classwork"] } },
      { from: "1:16.180", to: "1:17.632", text: "Here I come!", training: { target: "Here", choices: ["Here", "There", "School", "cheer"] } },
      { from: "1:21.328", to: "1:22.768", text: "<Half past> six,", training: { target: "six", choices: ["six", "five", "ten", "mix"] } },
      { from: "1:23.122", to: "1:25.211", text: "It's <dinner> time,", training: { target: "dinner", choices: ["dinner", "Breakfast", "homework", "winner"] } },
      { from: "1:25.328", to: "1:26.450", text: "Belly full,", training: { target: "Belly", choices: ["Belly", "Breakfast", "dinner", "jelly"] } },
      { from: "1:26.654", to: "1:29.270", text: "I feel just fine.", training: { target: "feel", choices: ["feel", "fine", "full", "meal"] } },
      { from: "1:29.338", to: "1:30.754", text: "<Quarter past> nine,", training: { target: "nine", choices: ["nine", "seven", "eight", "vine"] } },
      { from: "1:31.401", to: "1:32.554", text: "Read at night,", training: { target: "night", choices: ["night", "light", "read", "kite"] } },
      { from: "1:33.328", to: "1:34.540", text: "Ten o'clock,", training: { target: "Ten", choices: ["Ten", "Nine", "Four", "pen"] } },
      { from: "1:34.738", to: "1:36.820", text: "Turn off the light.", training: { target: "Turn", choices: ["Turn", "Read", "Tell", "learn"] } },
      { from: "1:36.673", to: "1:37.736", text: "What time is it?", training: { target: "it", choices: ["it", "is", "What", "bit"] } },
      { from: "1:38.325", to: "1:39.669", text: "Look and see,", training: { target: "and", choices: ["and", "Look", "see", "hand"] } },
      { from: "1:40.221", to: "1:41.757", text: "Tell the time", training: { target: "time", choices: ["time", "Tell", "the", "rhyme"] } },
      { from: "1:41.925", to: "1:43.923", text: "And sing with me.", training: { target: "me", choices: ["me", "sing", "with", "sea"] } },
      { from: "1:44.133", to: "1:45.369", text: "Ten o'clock,", training: { target: "o'clock", choices: ["o'clock", "time", "school", "rock"] } },
      { from: "1:45.981", to: "1:47.626", text: "The stars are <bright>,", training: { target: "bright", choices: ["bright", "stars", "night", "kite"] } },
      { from: "1:48.142", to: "1:49.666", text: "Time for bed,", training: { target: "bed", choices: ["bed", "dinner", "school", "head"] } },
      { from: "1:50.003", to: "1:52.834", text: "So say good night!", training: { target: "good", choices: ["good", "night", "bright", "wood"] } },
      { from: "1:52.954", to: "1:53.843", text: "What time is it?", training: { target: "What time", choices: ["What time", "Look and see", "Tell the time", "bedtime"] } },
      { from: "1:54.209", to: "1:55.823", text: "Look and see,", training: { target: "Look and see", choices: ["Look and see", "Tell the time", "Sing with me", "book and tea"] } },
      { from: "1:56.285", to: "1:57.792", text: "Tell the time", training: { target: "Tell the time", choices: ["Tell the time", "Look and see", "Sing with me", "bell and rhyme"] } },
      { from: "1:57.892", to: "1:59.800", text: "And sing with me.", training: { target: "And sing", choices: ["And sing", "Look and see", "Tell the time", "hand wing"] } },
      { from: "2:00.184", to: "2:01.432", text: "Ten o'clock,", training: { target: "Ten o'clock", choices: ["Ten o'clock", "Eight o'clock", "Seven o'clock", "pen and rock"] } },
      { from: "2:02.044", to: "2:03.586", text: "The stars are <bright>,", training: { target: "stars", choices: ["stars", "bright", "night", "cars"] } },
      { from: "2:04.161", to: "2:07.551", text: "Time for bed,", training: { target: "Time for", choices: ["Time for", "School is", "Fun is", "rhyme door"] } },
      { from: "2:07.917", to: "2:10.191", text: "So say good night!", training: { target: "night", choices: ["night", "bright", "good", "kite"] } },]
  },

/* ── GRADE 5 UNIT 3 - ME IN EVERY WAY ───────────────────────────────────── */
  {
    id: "5_3_meineveryway",
    title: "Me in Every Way",
    artist: "Grade5",
    audio: "songs/5_3_meineveryway.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/5_3_meineveryway.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:33", to: "0:41" },
      { at: "1:08", to: "1:21" },
{ at: "1:55", to: "2:24" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:58", to: "1:18" },
      { at: "1:47", to: "2:14" },
{ at: "2:47", to: "3:26" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "nose",    tr: "burun",          image: "images/nose.webp" },
      { word: "curly",   tr: "kıvırcık",         image: "images/curly.webp" },
      { word: "straight",  tr: "düz",      image: "images/straight.webp" },
      { word: "round", tr: "yuvarlak",        image: "images/round.webp" },
      { word: "clothes",  tr: "kıyafetler",     image: "images/clothes.webp" },
      { word: "blonde",   tr: "sarışın", image: "images/blonde.webp" },
      { word: "long",  tr: "uzun",           image: "images/long.webp" },
      { word: "eye",   tr: "göz",         image: "images/eye.webp" }
    ],

    lyrics: [

      { from: "0:00.831", to: "0:04.487", text: "My hair is <long>, my eyes are blue,", training: { target: "long", choices: ["long", "short", "straight", "wrong"] } },
      { from: "0:05.165", to: "0:08.489", text: "I've got a little <nose> here too.", training: { target: "nose", choices: ["nose", "eyes", "mouth", "goes"] } },
      { from: "0:09.201", to: "0:12.433", text: "My hair is <curly>, soft and bright,", training: { target: "curly", choices: ["curly", "straight", "long", "early"] } },
      { from: "0:13.057", to: "0:16.425", text: "My <eye>s are shining in the light.", training: { target: "eyes", choices: ["eyes", "hair", "nose", "rise"] } },
      { from: "0:17.041", to: "0:20.353", text: "My hair is short, my eyes are brown,", training: { target: "short", choices: ["short", "long", "curly", "sport"] } },
      { from: "0:21.153", to: "0:24.377", text: "My <straight> black hair falls softly down.", training: { target: "straight", choices: ["straight", "curly", "round", "great"] } },
      { from: "0:24.881", to: "0:28.385", text: "I've got a <round> and cheerful face,", training: { target: "round", choices: ["round", "square", "long", "sound"] } },
      { from: "0:28.656", to: "0:32.248", text: "My smile can brighten any place.", training: { target: "smile", choices: ["smile", "face", "eyes", "style"] } },
      { from: "0:33.116", to: "0:36.532", text: "Look at me now, what can you see?", training: { target: "look", choices: ["look", "see", "hear", "foot"] } },
      { from: "0:37.028", to: "0:40.380", text: "All my features are part of me.", training: { target: "features", choices: ["features", "clothes", "hair", "creatures"] } },
      { from: "0:40.940", to: "0:44.348", text: "The <clothes> I wear can change each day,", training: { target: "clothes", choices: ["clothes", "shoes", "jackets", "shows"] } },
      { from: "0:44.877", to: "0:49.125", text: "But I am me in every way.", training: { target: "way", choices: ["way", "day", "style", "maze"] } },
      { from: "0:52.813", to: "0:56.206", text: "Today a red T-shirt I wear,", training: { target: "today", choices: ["today", "tomorrow", "yesterday", "away"] } },
      { from: "0:56.219", to: "1:00.003", text: "Next day it's white, I do not care.", training: { target: "white", choices: ["white", "red", "blue", "night"] } },
      { from: "1:00.274", to: "1:04.035", text: "Sometimes I like to change my style,", training: { target: "style", choices: ["style", "clothes", "hair", "while"] } },
      { from: "1:04.259", to: "1:08.010", text: "But I never wear a fake smile.", training: { target: "fake", choices: ["fake", "real", "true", "ache"] } },
      { from: "1:08.914", to: "1:12.090", text: "Look at me now, what can you see?", training: { target: "see", choices: ["see", "look", "me", "sea"] } },
      { from: "1:12.514", to: "1:15.802", text: "All my features are part of me.", training: { target: "part", choices: ["part", "features", "hair", "heart"] } },
      { from: "1:16.313", to: "1:19.568", text: "The <clothes> I wear can change each day,", training: { target: "wear", choices: ["wear", "clothes", "shirt", "there"] } },
      { from: "1:20.465", to: "1:24.776", text: "But I am me in every way.", training: { target: "every", choices: ["every", "way", "day", "heavy"] } },
      { from: "1:40.240", to: "1:43.464", text: "Her hair is <blonde>, her jacket's blue,", training: { target: "blonde", choices: ["blonde", "brown", "black", "pond"] } },
      { from: "1:44.048", to: "1:47.496", text: "His eyes are green, his shirt is new.", training: { target: "shirt", choices: ["shirt", "jacket", "trousers", "dirt"] } },
      { from: "1:48.144", to: "1:51.536", text: "Her shoes are white, his jeans are gray,", training: { target: "shoes", choices: ["shoes", "jeans", "shirt", "news"] } },
      { from: "1:52.040", to: "1:55.520", text: "Different styles from day to day.", training: { target: "different", choices: ["different", "same", "unique", "distant"] } },
      { from: "1:55.984", to: "1:59.472", text: "Look at me now, what can you see?", training: { target: "me", choices: ["me", "you", "look", "sea"] } },
      { from: "2:03.163", to: "2:03.109", text: "All my features are part of me.", training: { target: "all my", choices: ["all my", "features", "part", "fall by"] } },
      { from: "2:03.557", to: "2:06.789", text: "My clothes may change from day to day,", training: { target: "change", choices: ["change", "clothes", "style", "strange"] } },
      { from: "2:07.465", to: "2:11.889", text: "But I am me in every way.", training: { target: "me", choices: ["me", "way", "every", "sea"] } },
      { from: "2:12.161", to: "2:15.161", text: "Look at me now, what can you see?", training: { target: "you", choices: ["you", "me", "see", "blue"] } },
      { from: "2:15.641", to: "2:18.817", text: "All my features are part of me.", training: { target: "of me", choices: ["of me", "features", "part", "on sea"] } },
      { from: "2:19.049", to: "2:22.954", text: "My <clothes> may change from day to day,", training: { target: "day", choices: ["day", "clothes", "change", "maze"] } },
      { from: "2:23.369", to: "2:27.746", text: "But I am me in every way.", training: { target: "every way", choices: ["every way", "me", "day", "heavy maze"] } },

  ]
  },

/* ── GRADE 5 UNIT 4 - HOME TOGETHER ───────────────────────────────────── */
  {
    id: "5_4_hometogether",
    title: "Home Together",
    artist: "Grade5",
    audio: "songs/5_4_hometogether.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/5_4_hometogether.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:58", to: "1:18" },
      { at: "1:47", to: "2:14" },
{ at: "2:47", to: "3:26" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:44", to: "1:06" },
      { at: "1:23", to: "1:57" },
{ at: "2:17", to: "2:40" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "rest",    tr: "dinlenmek",          image: "images/rest.webp" },
      { word: "cook",   tr: "yemek pişirmek",         image: "images/cook.webp" },
      { word: "play",  tr: "çalmak",      image: "images/play.webp" },
      { word: "read", tr: "okumak",        image: "images/read.webp" },
      { word: "share",  tr: "paylaşmak",     image: "images/share.webp" },
      { word: "bread",   tr: "ekmek", image: "images/bread.webp" },
      { word: "watering",  tr: "sulamak",           image: "images/watering.webp" },
      { word: "chess",   tr: "satranç",         image: "images/chess.webp" }
    ],

    lyrics: [

      { from: "0:11.167", to: "0:14.224", text: "Mum is baking us some <bread>,", training: { target: "bread", choices: ["bread", "cake", "cheese", "red"] } },
      { from: "0:15.652", to: "0:18.804", text: "Sister's <read>ing on her bed.", training: { target: "reading", choices: ["reading", "writing", "sleeping", "bleeding"] } },
      { from: "0:20.061", to: "0:23.276", text: "Dad is working on his car,", training: { target: "working", choices: ["working", "washing", "driving", "walking"] } },
      { from: "0:24.548", to: "0:27.716", text: "I am <play>ing my guitar.", training: { target: "playing", choices: ["playing", "reading", "cooking", "saying"] } },
      { from: "0:28.924", to: "0:32.140", text: "Brother's playing by the stair,", training: { target: "stair", choices: ["stair", "garden", "chair", "share"] } },
      { from: "0:33.403", to: "0:36.507", text: "Grandma's <rest>ing in her chair.", training: { target: "resting", choices: ["resting", "cooking", "reading", "nesting"] } },
      { from: "0:37.812", to: "0:40.907", text: "Grandpa's <watering> the tree,", training: { target: "watering", choices: ["watering", "planting", "cleaning", "catering"] } },
      { from: "0:41.945", to: "0:45.121", text: "I am just watching these three.", training: { target: "watching", choices: ["watching", "reading", "sleeping", "walking"] } },
      { from: "0:46.401", to: "0:49.905", text: "We're all doing different things,", training: { target: "doing", choices: ["doing", "reading", "playing", "brewing"] } },
      { from: "0:50.473", to: "0:54.249", text: "And we enjoy what each one brings.", training: { target: "enjoy", choices: ["enjoy", "share", "help", "a boy"] } },
      { from: "0:54.985", to: "0:58.577", text: "My whole family is at home,", training: { target: "whole", choices: ["whole", "small", "happy", "goal"] } },
      { from: "0:59.321", to: "1:01.897", text: "Family means I'm not alone.", training: { target: "family", choices: ["family", "friends", "parents", "melody"] } },
      { from: "1:06.937", to: "1:09.889", text: "Mum <cook>s dinner every night,", training: { target: "cooks", choices: ["cooks", "reads", "rests", "books"] } },
      { from: "1:10.553", to: "1:14.153", text: "Now she's <read>ing by the light.", training: { target: "light", choices: ["light", "book", "bed", "kite"] } },
      { from: "1:15.561", to: "1:18.993", text: "Dad goes walking every day,", training: { target: "walking", choices: ["walking", "working", "cooking", "talking"] } },
      { from: "1:19.465", to: "1:23.273", text: "Now he's playing <chess> today.", training: { target: "chess", choices: ["chess", "cards", "football", "dress"] } },
      { from: "1:23.905", to: "1:27.601", text: "We're all doing different things,", training: { target: "different", choices: ["different", "same", "fun", "distant"] } },
      { from: "1:28.377", to: "1:31.953", text: "And we enjoy what each one brings.", training: { target: "one", choices: ["one", "two", "three", "won"] } },
      { from: "1:32.624", to: "1:36.369", text: "My whole family is at home,", training: { target: "family", choices: ["family", "friends", "parents", "melody"] } },
      { from: "1:36.896", to: "1:39.601", text: "Family means I'm not alone.", training: { target: "means", choices: ["means", "says", "asks", "scenes"] } },
      { from: "1:41.084", to: "1:44.588", text: "At our home we work and play,", training: { target: "work", choices: ["work", "read", "rest", "fork"] } },
      { from: "1:45.332", to: "1:48.860", text: "Things can change from day to day.", training: { target: "change", choices: ["change", "stay", "stop", "strange"] } },
      { from: "1:49.932", to: "1:53.420", text: "We can laugh and we can <share>,", training: { target: "share", choices: ["share", "laugh", "cry", "chair"] } },
      { from: "1:54.158", to: "1:59.157", text: "We can cry but still we care.", training: { target: "cry", choices: ["cry", "laugh", "share", "sky"] } },
      { from: "1:59.830", to: "2:03.158", text: "We're all doing different things,", training: { target: "things", choices: ["things", "games", "tasks", "rings"] } },
      { from: "2:03.603", to: "2:07.595", text: "And we enjoy what each one brings.", training: { target: "brings", choices: ["brings", "helps", "takes", "wings"] } },
      { from: "2:08.115", to: "2:11.995", text: "My whole family is at home,", training: { target: "home", choices: ["home", "school", "garden", "alone"] } },
      { from: "2:12.603", to: "2:15.251", text: "Family means I'm not alone.", training: { target: "alone", choices: ["alone", "happy", "together", "stone"] } },
      { from: "2:17.275", to: "2:20.883", text: "We're all doing different things,", training: { target: "we're all", choices: ["we're all", "my family", "at home", "fur ball"] } },
      { from: "2:21.819", to: "2:25.443", text: "And we enjoy what each one brings.", training: { target: "each", choices: ["each", "every", "some", "beach"] } },
      { from: "2:26.227", to: "2:29.786", text: "My whole family is at home,", training: { target: "at home", choices: ["at home", "at school", "outside", "a poem"] } },
      { from: "2:30.539", to: "2:35.515", text: "Family means I'm not alone.", training: { target: "family means", choices: ["family means", "family name", "my friends", "melody scenes"] } },

  ]
  },

/* ── GRADE 5 UNIT 5 - EXPLORE WITH ME ───────────────────────────────────── */
  {
    id: "5_5_explorewithme",
    title: "Explore With Me",
    artist: "Grade5",
    audio: "songs/5_5_explorewithme.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/5_5_explorewithme.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:44", to: "1:06" },
      { at: "1:34", to: "1:55" },
{ at: "2:11", to: "3:26" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:44", to: "1:06" },
      { at: "1:23", to: "1:57" },
{ at: "2:17", to: "2:55" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "street",    tr: "cadde",          image: "images/street.webp" },
      { word: "square",   tr: "meydan",         image: "images/square.webp" },
      { word: "crowded",  tr: "kalabalık",      image: "images/crowded.webp" },
      { word: "explore", tr: "keşfetmek",        image: "images/explore.webp" },
      { word: "playground",  tr: "oyun bahçesi",     image: "images/playground.webp" },
      { word: "gym",   tr: "spor salonu", image: "images/gym.webp" },
      { word: "train",  tr: "antrenman yapmak",           image: "images/train.webp" },
      { word: "castle",   tr: "kale",         image: "images/castle.webp" }
    ],

    lyrics: [

      { from: "0:03.343", to: "0:06.273", text: "On our <street>, the kids ride by,", training: { target: "street", choices: ["street", "road", "square", "beat"] } },
      { from: "0:07.035", to: "0:09.836", text: "Small houses stand under the sky.", training: { target: "houses", choices: ["houses", "gardens", "shops", "buses"] } },
      { from: "0:10.928", to: "0:13.888", text: "There are gardens here and there,", training: { target: "gardens", choices: ["gardens", "houses", "parks", "hardens"] } },
      { from: "0:14.675", to: "0:17.667", text: "Tall apartments everywhere.", training: { target: "apartments", choices: ["apartments", "houses", "shops", "departments"] } },
      { from: "0:18.381", to: "0:21.244", text: "This house is bigger than that one,", training: { target: "bigger", choices: ["bigger", "smaller", "taller", "figure"] } },
      { from: "0:22.216", to: "0:25.119", text: "That block is taller in the sun.", training: { target: "taller", choices: ["taller", "smaller", "bigger", "caller"] } },
      { from: "0:26.040", to: "0:28.799", text: "This <street> is quieter today,", training: { target: "quieter", choices: ["quieter", "busier", "louder", "writer"] } },
      { from: "0:29.855", to: "0:32.943", text: "That road is busier all day.", training: { target: "busier", choices: ["busier", "quieter", "smaller", "buzzer"] } },
      { from: "0:33.663", to: "0:35.319", text: "From our <street> to the <square>,", training: { target: "street", choices: ["street", "road", "park", "beat"] } },
      { from: "0:35.591", to: "0:37.207", text: "Something new everywhere.", training: { target: "something", choices: ["something", "nothing", "places", "sunbeam"] } },
      { from: "0:37.391", to: "0:39.959", text: "Every corner, a place to see,", training: { target: "corner", choices: ["corner", "square", "street", "former"] } },
      { from: "0:40.298", to: "0:43.986", text: "Come and <explore> with me.", training: { target: "explore", choices: ["explore", "walk", "roam", "before"] } },
      { from: "0:44.665", to: "0:47.585", text: "Block by block, we walk around,", training: { target: "block", choices: ["block", "street", "park", "clock"] } },
      { from: "0:48.449", to: "0:51.793", text: "Fun new places can be found.", training: { target: "fun", choices: ["fun", "new", "places", "sun"] } },
      { from: "0:52.096", to: "0:55.505", text: "Parks and <playground>s, shops and more,", training: { target: "parks", choices: ["parks", "shops", "houses", "marks"] } },
      { from: "0:56.113", to: "0:59.745", text: "There are places to <explore>.", training: { target: "places", choices: ["places", "parks", "shops", "faces"] } },
      { from: "0:59.880", to: "1:03.025", text: "Block by block, we like to roam,", training: { target: "block", choices: ["block", "street", "square", "clock"] } },
      { from: "1:03.593", to: "1:06.433", text: "Every street can feel like home.", training: { target: "street", choices: ["street", "road", "home", "beat"] } },
      { from: "1:09.344", to: "1:12.025", text: "At the park, we laugh and play,", training: { target: "park", choices: ["park", "gym", "cinema", "shark"] } },
      { from: "1:12.945", to: "1:15.840", text: "At the <gym>, we <train> today.", training: { target: "gym", choices: ["gym", "park", "school", "him"] } },
      { from: "1:16.385", to: "1:19.953", text: "Cinema lights shine so bright,", training: { target: "cinema", choices: ["cinema", "castle", "gym", "sinner"] } },
      { from: "1:20.408", to: "1:24.233", text: "<Castle> walls glow late at night.", training: { target: "castle", choices: ["castle", "cinema", "park", "parcel"] } },
      { from: "1:24.130", to: "1:25.849", text: "From our <street> to the <square>,", training: { target: "square", choices: ["square", "street", "park", "chair"] } },
      { from: "1:26.049", to: "1:27.697", text: "Something new everywhere.", training: { target: "new", choices: ["new", "old", "busy", "blue"] } },
      { from: "1:27.969", to: "1:30.705", text: "Every corner, a place to see,", training: { target: "see", choices: ["see", "corner", "place", "sea"] } },
      { from: "1:30.646", to: "1:35.159", text: "Come and <explore> with me.", training: { target: "me", choices: ["me", "you", "explore", "sea"] } },
      { from: "1:35.382", to: "1:38.238", text: "Block by block, we walk around,", training: { target: "walk", choices: ["walk", "roam", "run", "talk"] } },
      { from: "1:38.622", to: "1:42.110", text: "Fun new places can be found.", training: { target: "new", choices: ["new", "fun", "old", "blue"] } },
      { from: "1:42.375", to: "1:45.710", text: "Parks and <playground>s, shops and more,", training: { target: "playgrounds", choices: ["playgrounds", "parks", "shops", "play sounds"] } },
      { from: "1:46.142", to: "1:50.086", text: "There are places to <explore>.", training: { target: "explore", choices: ["explore", "walk", "roam", "before"] } },
      { from: "1:49.977", to: "1:53.904", text: "Block by block, we like to roam,", training: { target: "like", choices: ["like", "walk", "roam", "bike"] } },
      { from: "1:54.143", to: "1:56.735", text: "Every <street> can feel like home.", training: { target: "every", choices: ["every", "street", "home", "heavy"] } },
      { from: "1:57.326", to: "2:00.694", text: "Some <street>s are quiet, some are loud,", training: { target: "quiet", choices: ["quiet", "loud", "busy", "diet"] } },
      { from: "2:01.230", to: "2:04.390", text: "Some places calm, some places <crowded>.", training: { target: "crowded", choices: ["crowded", "quiet", "empty", "clouded"] } },
      { from: "2:04.974", to: "2:08.198", text: "Some homes are older, some are new,", training: { target: "older", choices: ["older", "new", "crowded", "shoulder"] } },
      { from: "2:08.726", to: "2:12.310", text: "Every place has something for you.", training: { target: "place", choices: ["place", "street", "home", "face"] } },
      { from: "2:12.486", to: "2:15.382", text: "Block by block, we walk around,", training: { target: "around", choices: ["around", "walk", "block", "sound"] } },
      { from: "2:15.774", to: "2:19.142", text: "Fun new places can be found.", training: { target: "places", choices: ["places", "parks", "shops", "faces"] } },
      { from: "2:19.462", to: "2:22.710", text: "Parks and <playground>s, shops and more,", training: { target: "shops", choices: ["shops", "parks", "houses", "props"] } },
      { from: "2:23.372", to: "2:27.060", text: "There are places to <explore>.", training: { target: "there", choices: ["there", "places", "explore", "chair"] } },
      { from: "2:27.095", to: "2:31.035", text: "Block by block, we like to roam,", training: { target: "roam", choices: ["roam", "walk", "block", "home"] } },
      { from: "2:31.235", to: "2:33.700", text: "Every <street> can feel like home.", training: { target: "home", choices: ["home", "street", "park", "alone"] } },
      { from: "2:34.138", to: "2:37.594", text: "Block by block, we walk around,", training: { target: "by block", choices: ["by block", "by street", "walk around", "bike clock"] } },
      { from: "2:37.954", to: "2:41.204", text: "Fun new places can be found.", training: { target: "found", choices: ["found", "lost", "new", "sound"] } },
      { from: "2:41.484", to: "2:44.932", text: "Parks and <playground>s, shops and more,", training: { target: "more", choices: ["more", "parks", "shops", "door"] } },
      { from: "2:45.508", to: "2:48.625", text: "There are places to <explore>.", training: { target: "to explore", choices: ["to explore", "to walk", "places", "blue before"] } },
      { from: "2:49.145", to: "2:52.529", text: "Block by block, we like to roam,", training: { target: "by block", choices: ["by block", "by street", "like to roam", "bike clock"] } },
      { from: "2:52.945", to: "2:57.558", text: "Every street can feel like home.", training: { target: "feel", choices: ["feel", "street", "home", "meal"] } },

  ]
  },

/* ── GRADE 5 UNIT 5 - INSIDE MY HOME ───────────────────────────────────── */
  {
    id: "5_5_insidemyhome",
    title: "Inside My Home",
    artist: "Grade5",
    audio: "songs/5_5_insidemyhome.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/5_5_insidemyhome.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:50", to: "1:06" },
      { at: "1:34", to: "1:55" },
{ at: "2:11", to: "3:26" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:44", to: "1:00" },
      { at: "1:51", to: "2:00" },
{ at: "2:30", to: "2:41" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "fork",    tr: "çatal",          image: "images/fork.webp" },
      { word: "bathroom",   tr: "banyo",         image: "images/bathroom.webp" },
      { word: "carpet",  tr: "yatak odası",      image: "images/carpet.webp" },
      { word: "wardrobe", tr: "gardrop",        image: "images/wardrobe.webp" },
      { word: "flat",  tr: "daire",     image: "images/flat.webp" },
      { word: "fridge",   tr: "buzdolabı", image: "images/fridge.webp" },
      { word: "spoon",  tr: "kaşık",           image: "images/spoon.webp" },
      { word: "pillow",   tr: "yastık",         image: "images/pillow.webp" }
    ],

    lyrics: [

          { from: "0:20.015", to: "0:22.375", text: "There's a sofa by the wall,", training: { target: "sofa", choices: ["sofa", "lamp", "table", "so far"] } },
       { from: "0:22.767", to: "0:24.831", text: "There's a lamp, not very tall.", training: { target: "lamp", choices: ["lamp", "sofa", "chair", "camp"] } },
       { from: "0:25.263", to: "0:27.335", text: "There are <pillow>s on the bed,", training: { target: "pillows", choices: ["pillows", "chairs", "carpets", "willows"] } },
       { from: "0:27.591", to: "0:29.903", text: "There's a <wardrobe> painted red.", training: { target: "wardrobe", choices: ["wardrobe", "cupboard", "carpet", "word globe"] } },
       { from: "0:30.199", to: "0:32.407", text: "There's an armchair by the door,", training: { target: "armchair", choices: ["armchair", "sofa", "table", "farm chair"] } },
       { from: "0:32.775", to: "0:34.687", text: "There's a <carpet> on the floor.", training: { target: "carpet", choices: ["carpet", "pillow", "wardrobe", "market"] } },
       { from: "0:35.191", to: "0:37.487", text: "There's a table, there are chairs,", training: { target: "table", choices: ["table", "lamp", "sofa", "cable"] } },
       { from: "0:37.743", to: "0:39.935", text: "Come on in and look upstairs.", training: { target: "upstairs", choices: ["upstairs", "down below", "inside", "up there"] } },
       { from: "0:40.359", to: "0:42.239", text: "Look around, what can you see?", training: { target: "see", choices: ["see", "look", "hear", "sea"] } },
       { from: "0:42.791", to: "0:44.727", text: "Come and take a look with me.", training: { target: "take", choices: ["take", "look", "come", "cake"] } },
       { from: "0:45.311", to: "0:47.175", text: "There is one and there are two,", training: { target: "one", choices: ["one", "two", "three", "sun"] } },
       { from: "0:47.935", to: "0:49.863", text: "Every room has something new.", training: { target: "new", choices: ["new", "old", "big", "blue"] } },
       { from: "0:50.343", to: "0:52.503", text: "There are rooms both big and small,", training: { target: "rooms", choices: ["rooms", "chairs", "walls", "brooms"] } },
       { from: "0:52.863", to: "0:55.103", text: "There are things along the hall.", training: { target: "things", choices: ["things", "rooms", "flowers", "rings"] } },
       { from: "0:55.390", to: "0:57.711", text: "There is a mat for my cat,", training: { target: "there is", choices: ["there is", "there are", "it is", "three kids"] } },
       { from: "0:57.886", to: "1:01.143", text: "There is a fence round the <flat>.", training: { target: "fence", choices: ["fence", "wall", "door", "cents"] } },
       { from: "1:20.891", to: "1:22.843", text: "There is a <fridge> near the wall,", training: { target: "fridge", choices: ["fridge", "mirror", "cupboard", "bridge"] } },
       { from: "1:23.091", to: "1:25.291", text: "There are plates both big and small.", training: { target: "plates", choices: ["plates", "forks", "spoons", "gates"] } },
       { from: "1:25.699", to: "1:27.899", text: "There are <fork>s beside the knives,", training: { target: "forks", choices: ["forks", "spoons", "plates", "corks"] } },
       { from: "1:28.098", to: "1:30.357", text: "There are <spoon>s of different size.", training: { target: "spoons", choices: ["spoons", "forks", "plates", "moons"] } },
       { from: "1:30.637", to: "1:32.653", text: "There is a mirror by the sink,", training: { target: "sink", choices: ["sink", "mirror", "towel", "pink"] } },
       { from: "1:33.497", to: "1:35.249", text: "There is a towel, white and pink.", training: { target: "towel", choices: ["towel", "mirror", "cupboard", "vowel"] } },
       { from: "1:35.489", to: "1:37.841", text: "There is a cupboard by the door,", training: { target: "cupboard", choices: ["cupboard", "wardrobe", "fridge", "upboard"] } },
       { from: "1:38.073", to: "1:40.209", text: "There are some flowers on the floor.", training: { target: "flowers", choices: ["flowers", "pictures", "plates", "hours"] } },
       { from: "1:40.626", to: "1:42.778", text: "From the kitchen to the hall,", training: { target: "kitchen", choices: ["kitchen", "bathroom", "bedroom", "kitten"] } },
       { from: "1:43.186", to: "1:45.338", text: "There are pictures on the wall.", training: { target: "pictures", choices: ["pictures", "flowers", "chairs", "fixtures"] } },
       { from: "1:45.762", to: "1:47.786", text: "Bedroom, <bathroom>, dining room,", training: { target: "bathroom", choices: ["bathroom", "bedroom", "kitchen", "classroom"] } },
       { from: "1:48.298", to: "1:50.490", text: "There are flowers in full bloom.", training: { target: "bloom", choices: ["bloom", "flowers", "garden", "room"] } },
       { from: "1:50.970", to: "1:52.642", text: "There are rooms both big and small,", training: { target: "big", choices: ["big", "small", "tall", "pig"] } },
       { from: "1:53.274", to: "1:55.490", text: "There are things along the hall.", training: { target: "along", choices: ["along", "inside", "outside", "a song"] } },
       { from: "1:55.690", to: "1:58.034", text: "There is a mat for my cat,", training: { target: "mat", choices: ["mat", "table", "carpet", "that"] } },
       { from: "1:58.202", to: "2:01.538", text: "There is a fence round the <flat>.", training: { target: "round", choices: ["round", "flat", "wall", "ground"] } },
       { from: "2:11.527", to: "2:15.735", text: "Inside, outside, take a look,", training: { target: "inside", choices: ["inside", "outside", "upstairs", "in sight"] } },
       { from: "2:16.991", to: "2:20.694", text: "There is a chair and a book.", training: { target: "chair", choices: ["chair", "table", "sofa", "bear"] } },
       { from: "2:21.806", to: "2:25.998", text: "Up the stairs and down below,", training: { target: "below", choices: ["below", "upstairs", "inside", "hello"] } },
       { from: "2:25.860", to: "2:29.132", text: "There are lights that softly glow.", training: { target: "glow", choices: ["glow", "lights", "flowers", "snow"] } },
       { from: "2:31.012", to: "2:33.124", text: "There are rooms both big and small,", training: { target: "small", choices: ["small", "big", "tall", "ball"] } },
       { from: "2:33.587", to: "2:35.724", text: "There are things along the hall.", training: { target: "hall", choices: ["hall", "wall", "floor", "ball"] } },
       { from: "2:35.995", to: "2:38.300", text: "There is a mat for my cat,", training: { target: "cat", choices: ["cat", "mat", "bed", "hat"] } },
       { from: "2:38.547", to: "2:41.000", text: "There is a fence round the <flat>.", training: { target: "flat", choices: ["flat", "house", "room", "hat"] } },

  ]
  },
/* ── GRADE 5 UNIT 6 - BITE BY BITE ───────────────────────────────────── */
  {
    id: "5_6_bitebybite",
    title: "Bite by Bite",
    artist: "Grade5",
    audio: "songs/5_6_bitebybite.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/5_6_bitebybite.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:46", to: "1:01" },
      { at: "1:46", to: "2:00" },
{ at: "2:39", to: "3:08" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:44", to: "1:00" },
      { at: "1:51", to: "2:00" },
{ at: "2:30", to: "2:41" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "main dish",    tr: "ana yemek",          image: "images/maindish.webp" },
      { word: "mushroom",   tr: "mantar",         image: "images/mushroom.webp" },
      { word: "Delicious",  tr: "leziz",      image: "images/delicious.webp" },
      { word: "recipe", tr: "tarif",        image: "images/recipe.webp" },
      { word: "boil",  tr: "haşlamak",     image: "images/boil.webp" },
      { word: "stir",   tr: "karıştırmak", image: "images/stir.webp" },
      { word: "spice",  tr: "kaşık",           image: "images/spice.webp" },
      { word: "flour",   tr: "un",         image: "images/flour.webp" }
    ],

    lyrics: [

       { from: "0:15.602", to: "0:18.339", text: "We've got pasta, beans and meat,", training: { target: "pasta", choices: ["pasta", "beans", "meat", "faster"] } },
       { from: "0:19.395", to: "0:22.096", text: "Fresh green salad, good to eat.", training: { target: "Fresh", choices: ["Fresh", "green", "salad", "flesh"] } },
       { from: "0:23.218", to: "0:26.402", text: "We've got butter, <flour> and oil,", training: { target: "flour", choices: ["flour", "butter", "oil", "flower"] } },
       { from: "0:27.008", to: "0:29.870", text: "Two fresh <mushroom>s start to <boil>.", training: { target: "mushrooms", choices: ["mushrooms", "beans", "pasta", "classrooms"] } },
       { from: "0:31.088", to: "0:33.445", text: "Wash the lettuce, slice it thin,", training: { target: "Wash", choices: ["Wash", "slice", "lettuce", "watch"] } },
       { from: "0:34.651", to: "0:37.311", text: "<Stir> the sauce and mix it in.", training: { target: "sauce", choices: ["sauce", "stir", "mix", "horse"] } },
       { from: "0:38.256", to: "0:41.320", text: "Add some garlic, salt and <spice>,", training: { target: "spice", choices: ["spice", "garlic", "salt", "ice"] } },
       { from: "0:42.369", to: "0:45.696", text: "Everything is looking nice.", training: { target: "nice", choices: ["nice", "food", "plate", "rice"] } },
       { from: "0:46.674", to: "0:49.362", text: "Bite by bite, come taste with me,", training: { target: "Bite", choices: ["Bite", "taste", "share", "light"] } },
       { from: "0:50.289", to: "0:53.553", text: "Come and share this <recipe>.", training: { target: "recipe", choices: ["recipe", "main dish", "flour", "remedy"] } },
       { from: "0:54.126", to: "0:57.334", text: "We've got plenty on our plate,", training: { target: "plenty", choices: ["plenty", "plate", "food", "twenty"] } },
       { from: "0:57.926", to: "1:01.902", text: "Take a bite, it tastes so great.", training: { target: "tastes", choices: ["tastes", "bite", "plate", "waste"] } },
       { from: "1:15.757", to: "1:18.693", text: "We've got salad, soup and rice,", training: { target: "salad", choices: ["salad", "soup", "rice", "ballad"] } },
       { from: "1:19.733", to: "1:22.629", text: "Grilled meat sounds really nice.", training: { target: "meat", choices: ["meat", "salad", "soup", "heat"] } },
       { from: "1:23.341", to: "1:26.269", text: "We've got pasta topped with cheese,", training: { target: "cheese", choices: ["cheese", "pasta", "rice", "peas"] } },
       { from: "1:26.616", to: "1:29.984", text: "What would you like? Tell me, please.", training: { target: "please", choices: ["please", "taste", "share", "cheese"] } },
       { from: "1:30.800", to: "1:34.112", text: "Soup or salsa for a starter,", training: { target: "Soup", choices: ["Soup", "salsa", "pasta", "group"] } },
       { from: "1:34.480", to: "1:37.664", text: "Make your next plate a bit larger.", training: { target: "larger", choices: ["larger", "smaller", "plate", "charger"] } },
       { from: "1:38.192", to: "1:40.976", text: "Maybe pasta, maybe fish,", training: { target: "fish", choices: ["fish", "pasta", "rice", "dish"] } },
       { from: "1:42.390", to: "1:45.926", text: "Choose your favorite <main dish>.", training: { target: "favorite", choices: ["favorite", "main dish", "pasta", "flavor it"] } },
       { from: "1:46.214", to: "1:49.342", text: "Bite by bite, come taste with me,", training: { target: "taste", choices: ["taste", "bite", "recipe", "waste"] } },
       { from: "1:49.902", to: "1:53.030", text: "Come and share this <recipe>.", training: { target: "share", choices: ["share", "recipe", "taste", "chair"] } },
       { from: "1:53.721", to: "1:56.713", text: "We've got plenty on our plate,", training: { target: "plate", choices: ["plate", "plenty", "food", "late"] } },
       { from: "1:57.345", to: "2:01.353", text: "Take a bite, it tastes so great.", training: { target: "Take", choices: ["Take", "bite", "taste", "cake"] } },
       { from: "2:23.473", to: "2:26.265", text: "There is a food fair in the square,", training: { target: "fair", choices: ["fair", "food", "square", "chair"] } },
       { from: "2:27.028", to: "2:30.060", text: "<Delicious> dishes everywhere.", training: { target: "Delicious", choices: ["Delicious", "recipe", "main dish", "suspicious"] } },
       { from: "2:30.410", to: "2:33.490", text: "Taste some great food from afar,", training: { target: "afar", choices: ["afar", "food", "fair", "guitar"] } },
       { from: "2:33.962", to: "2:38.930", text: "Some of it can be five-star.", training: { target: "star", choices: ["star", "food", "fair", "guitar"] } },
       { from: "2:39.482", to: "2:42.514", text: "Bite by bite, come taste with me,", training: { target: "by bite", choices: ["by bite", "taste", "share", "my light"] } },
       { from: "2:42.978", to: "2:46.162", text: "Come and share this <recipe>.", training: { target: "this", choices: ["this", "recipe", "dish", "kiss"] } },
       { from: "2:46.658", to: "2:49.746", text: "We've got plenty on our plate,", training: { target: "got", choices: ["got", "plenty", "plate", "hot"] } },
       { from: "2:50.258", to: "2:54.379", text: "Take a bite, it tastes so great.", training: { target: "great", choices: ["great", "bite", "plate", "late"] } },

  ]
  },

/* ── GRADE 8 UNIT 3 - BITE BY BITE v2───────────────────────────────────── */
  {
    id: "8_3_bitebybite",
    title: "Bite by Bite",
    artist: "Grade8",
    audio: "songs/8_3_bitebybite.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/8_3_bitebybite.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "0:46", to: "1:01" },
      { at: "1:54", to: "2:08" },
{ at: "2:53", to: "3:28" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:44", to: "1:00" },
      { at: "1:51", to: "2:00" },
{ at: "2:30", to: "2:41" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "main dish",    tr: "ana yemek",          image: "images/maindish.webp" },
      { word: "mushroom",   tr: "mantar",         image: "images/mushroom.webp" },
      { word: "Delicious",  tr: "leziz",      image: "images/delicious.webp" },
      { word: "recipe", tr: "tarif",        image: "images/recipe.webp" },
      { word: "boil",  tr: "haşlamak",     image: "images/boil.webp" },
      { word: "stir",   tr: "karıştırmak", image: "images/stir.webp" },
      { word: "spice",  tr: "kaşık",           image: "images/spice.webp" },
      { word: "flour",   tr: "un",         image: "images/flour.webp" }
    ],

    lyrics: [

       { from: "0:16.147", to: "0:19.171", text: "We've got pasta, beans and meat,", training: { target: "pasta", choices: ["pasta", "beans", "meat", "faster"] } },
       { from: "0:20.011", to: "0:23.067", text: "Fresh green salad, good to eat.", training: { target: "Fresh", choices: ["Fresh", "green", "salad", "flesh"] } },
       { from: "0:23.875", to: "0:27.267", text: "We've got butter, <flour> and oil,", training: { target: "flour", choices: ["flour", "butter", "oil", "flower"] } },
       { from: "0:27.811", to: "0:31.267", text: "Two fresh <mushroom>s start to <boil>.", training: { target: "mushrooms", choices: ["mushrooms", "beans", "pasta", "classrooms"] } },
       { from: "0:31.779", to: "0:34.851", text: "Wash the lettuce, slice it thin,", training: { target: "Wash", choices: ["Wash", "slice", "lettuce", "watch"] } },
       { from: "0:35.587", to: "0:38.707", text: "<Stir> the sauce and mix it in.", training: { target: "sauce", choices: ["sauce", "stir", "mix", "horse"] } },
       { from: "0:39.539", to: "0:42.659", text: "Add some garlic, salt and <spice>,", training: { target: "spice", choices: ["spice", "garlic", "salt", "ice"] } },
       { from: "0:43.567", to: "0:46.967", text: "Everything is looking nice.", training: { target: "nice", choices: ["nice", "food", "plate", "rice"] } },
       { from: "0:47.207", to: "0:50.111", text: "Bite by bite, come taste with me,", training: { target: "Bite", choices: ["Bite", "taste", "share", "light"] } },
       { from: "0:51.231", to: "0:54.207", text: "Come and share this <recipe>.", training: { target: "recipe", choices: ["recipe", "main dish", "flour", "remedy"] } },
       { from: "0:55.071", to: "0:57.911", text: "We've got plenty on our plate,", training: { target: "plenty", choices: ["plenty", "plate", "food", "twenty"] } },
       { from: "0:58.911", to: "1:01.959", text: "Take a bite, it tastes so great.", training: { target: "tastes", choices: ["tastes", "bite", "plate", "waste"] } },
       { from: "1:24.015", to: "1:26.903", text: "We've got salad, soup and rice,", training: { target: "salad", choices: ["salad", "soup", "rice", "ballad"] } },
       { from: "1:27.751", to: "1:30.815", text: "Grilled meat sounds really nice.", training: { target: "meat", choices: ["meat", "salad", "soup", "heat"] } },
       { from: "1:31.591", to: "1:34.535", text: "We've got pasta topped with cheese,", training: { target: "cheese", choices: ["cheese", "pasta", "rice", "peas"] } },
       { from: "1:34.927", to: "1:38.503", text: "What would you like? Tell me, please.", training: { target: "please", choices: ["please", "taste", "share", "cheese"] } },
       { from: "1:39.159", to: "1:42.391", text: "Soup or salsa for a starter,", training: { target: "Soup", choices: ["Soup", "salsa", "pasta", "group"] } },
       { from: "1:42.735", to: "1:46.247", text: "Make your next plate a bit larger.", training: { target: "larger", choices: ["larger", "smaller", "plate", "charger"] } },
       { from: "1:46.903", to: "1:49.943", text: "Maybe pasta, maybe fish,", training: { target: "fish", choices: ["fish", "pasta", "rice", "dish"] } },
       { from: "1:50.559", to: "1:54.167", text: "Choose your favorite <main dish>.", training: { target: "favorite", choices: ["favorite", "main dish", "pasta", "flavor it"] } },
       { from: "1:54.407", to: "1:57.375", text: "Bite by bite, come taste with me,", training: { target: "taste", choices: ["taste", "bite", "recipe", "waste"] } },
       { from: "1:58.455", to: "2:01.367", text: "Come and share this <recipe>.", training: { target: "share", choices: ["share", "recipe", "taste", "chair"] } },
       { from: "2:02.365", to: "2:05.093", text: "We've got plenty on our plate,", training: { target: "plate", choices: ["plate", "plenty", "food", "late"] } },
       { from: "2:06.069", to: "2:08.989", text: "Take a bite, it tastes so great.", training: { target: "Take", choices: ["Take", "bite", "taste", "cake"] } },
       { from: "2:28.461", to: "2:31.957", text: "There is a food fair in the square,", training: { target: "fair", choices: ["fair", "food", "square", "chair"] } },
       { from: "2:32.277", to: "2:35.533", text: "<Delicious> dishes everywhere.", training: { target: "Delicious", choices: ["Delicious", "recipe", "main dish", "suspicious"] } },
       { from: "2:36.133", to: "2:43.197", text: "Taste some great food from afar,", training: { target: "afar", choices: ["afar", "food", "fair", "guitar"] } },
       { from: "2:43.917", to: "2:49.245", text: "Some of it can be five-star.", training: { target: "star", choices: ["star", "food", "fair", "guitar"] } },
       { from: "2:55.229", to: "2:58.381", text: "Bite by bite, come taste with me,", training: { target: "by bite", choices: ["by bite", "taste", "share", "my light"] } },
       { from: "2:59.349", to: "3:02.261", text: "Come and share this <recipe>.", training: { target: "this", choices: ["this", "recipe", "dish", "kiss"] } },
       { from: "3:03.165", to: "3:06.014", text: "We've got plenty on our plate,", training: { target: "got", choices: ["got", "plenty", "plate", "hot"] } },
       { from: "3:07.006", to: "3:10.089", text: "Take a bite, it tastes so great.", training: { target: "great", choices: ["great", "bite", "plate", "late"] } },
  ]
  },

/* ── GRADE 5 UNIT 7 - INTO THE WILDS───────────────────────────────────── */
  {
    id: "5_7_intothewilds",
    title: "Into the Wilds",
    artist: "Grade5",
    audio: "songs/5_7_intothewilds.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/5_7_intothewilds.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "1:05", to: "1:20" },
      { at: "2:17", to: "2:31" },
{ at: "3:09", to: "3:40" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:44", to: "1:00" },
      { at: "1:51", to: "2:00" },
{ at: "2:30", to: "2:41" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "sharpest teeth",    tr: "en keskin dişler",          image: "images/sharp_teeth.webp" },
      { word: "eagle",   tr: "kartal",         image: "images/eagle.webp" },
      { word: "seal",  tr: "fok balığı",      image: "images/seal.webp" },
      { word: "jungle", tr: "vahşi orman",        image: "images/jungle.webp" },
      { word: "whale",  tr: "balina",     image: "images/whale.webp" },
      { word: "wild",   tr: "vahşi", image: "images/wild.webp" },
      { word: "shark",  tr: "köpek balığı",           image: "images/shark.webp" },
      { word: "survive",   tr: "hayatta kalmak",         image: "images/survive.webp" }
    ],

    lyrics: [

       { from: "0:17.229", to: "0:19.509", text: "Tigers walk out in the rain,", training: { target: "Tigers", choices: ["Tigers", "lions", "monkeys", "fighters"] } },
       { from: "0:21.141", to: "0:23.733", text: "Lions live out on the plain,", training: { target: "Lions", choices: ["Lions", "tigers", "wolves", "irons"] } },
       { from: "0:25.277", to: "0:27.741", text: "Monkeys can climb up a tree,", training: { target: "Monkeys", choices: ["Monkeys", "lions", "eagles", "donkeys"] } },
       { from: "0:29.445", to: "0:31.829", text: "Dolphins can swim in the sea.", training: { target: "Dolphins", choices: ["Dolphins", "whales", "eagles", "doll fins"] } },
       { from: "0:33.085", to: "0:35.589", text: "A rabbit is faster than a bear,", training: { target: "rabbit", choices: ["rabbit", "bear", "giraffe", "habit"] } },
       { from: "0:37.077", to: "0:39.733", text: "A giraffe is taller than a deer.", training: { target: "giraffe", choices: ["giraffe", "deer", "wolf", "carafe"] } },
       { from: "0:41.042", to: "0:43.690", text: "A wolf is stronger than a sheep,", training: { target: "wolf", choices: ["wolf", "sheep", "bear", "roof"] } },
       { from: "0:45.058", to: "0:47.818", text: "A <whale> is bigger than a ship.", training: { target: "whale", choices: ["whale", "ship", "eagle", "tail"] } },
       { from: "0:49.356", to: "0:52.132", text: "Where do the tigers live today?", training: { target: "tigers", choices: ["tigers", "lions", "eagles", "fighters"] } },
       { from: "0:53.404", to: "0:56.252", text: "Where do the <eagle>s fly away?", training: { target: "eagles", choices: ["eagles", "whales", "tigers", "beagles"] } },
       { from: "0:57.588", to: "1:00.868", text: "From the <jungle> to the sea,", training: { target: "jungle", choices: ["jungle", "sea", "plain", "jumble"] } },
       { from: "1:01.796", to: "1:05.428", text: "Nature's full of life to see.", training: { target: "Nature", choices: ["Nature", "animal", "life", "creature"] } },
       { from: "1:05.948", to: "1:08.700", text: "Far and wide, from land to sea,", training: { target: "Far", choices: ["Far", "land", "sea", "star"] } },
       { from: "1:09.844", to: "1:12.812", text: "Every animal, <wild> and free.", training: { target: "wild", choices: ["wild", "free", "animal", "child"] } },
       { from: "1:13.796", to: "1:17.412", text: "High in the sky, down below,", training: { target: "High", choices: ["High", "sky", "below", "fly"] } },
       { from: "1:17.884", to: "1:21.116", text: "Watch the world of nature grow.", training: { target: "Watch", choices: ["Watch", "world", "nature", "witch"] } },
       { from: "1:28.804", to: "1:31.540", text: "Penguins live at the South Pole,", training: { target: "Penguins", choices: ["Penguins", "mice", "parrots", "engines"] } },
       { from: "1:32.961", to: "1:35.600", text: "Little mice hide in a hole,", training: { target: "mice", choices: ["mice", "parrots", "penguins", "rice"] } },
       { from: "1:36.952", to: "1:40.600", text: "Parrots can talk, <seal>s can dive,", training: { target: "seals", choices: ["seals", "parrots", "sharks", "meals"] } },
       { from: "1:41.217", to: "1:44.472", text: "Nature helps them all <survive>.", training: { target: "survive", choices: ["survive", "nature", "animals", "arrive"] } },
       { from: "1:45.256", to: "1:47.648", text: "The cheetah is the fastest one,", training: { target: "cheetah", choices: ["cheetah", "tiger", "wolf", "cheater"] } },
       { from: "1:48.800", to: "1:51.721", text: "Chasing prey beneath the sun.", training: { target: "prey", choices: ["prey", "sun", "tree", "day"] } },
       { from: "1:53.145", to: "1:55.969", text: "The <shark> has the <sharpest teeth>,", training: { target: "shark", choices: ["shark", "whale", "seal", "park"] } },
       { from: "1:57.449", to: "2:00.341", text: "Swimming through the sea beneath.", training: { target: "Swimming", choices: ["Swimming", "flying", "climbing", "winning"] } },
       { from: "2:01.173", to: "2:03.853", text: "Where do the tigers live today?", training: { target: "today", choices: ["today", "tigers", "live", "away"] } },
       { from: "2:05.095", to: "2:07.919", text: "Where do the <eagle>s fly away?", training: { target: "fly", choices: ["fly", "eagles", "away", "sky"] } },
       { from: "2:09.375", to: "2:12.727", text: "From the <jungle> to the sea,", training: { target: "sea", choices: ["sea", "jungle", "land", "tree"] } },
       { from: "2:13.559", to: "2:17.183", text: "Nature's full of life to see.", training: { target: "life", choices: ["life", "nature", "see", "wife"] } },
       { from: "2:17.695", to: "2:20.503", text: "Far and wide, from land to sea,", training: { target: "wide", choices: ["wide", "far", "land", "guide"] } },
       { from: "2:21.671", to: "2:24.455", text: "Every animal, <wild> and free.", training: { target: "animal", choices: ["animal", "wild", "free", "minimal"] } },
       { from: "2:25.698", to: "2:29.123", text: "High in the sky, down below,", training: { target: "sky", choices: ["sky", "high", "below", "fly"] } },
       { from: "2:29.755", to: "2:32.786", text: "Watch the world of nature grow.", training: { target: "world", choices: ["world", "watch", "nature", "curled"] } },
       { from: "2:49.179", to: "2:52.378", text: "We must keep the rivers clean,", training: { target: "rivers", choices: ["rivers", "forests", "animals", "givers"] } },
       { from: "2:53.002", to: "2:56.562", text: "Keep the forests fresh and green.", training: { target: "forests", choices: ["forests", "rivers", "animals", "choruses"] } },
       { from: "2:57.172", to: "3:00.780", text: "We must help the animals too,", training: { target: "help", choices: ["help", "keep", "animals", "yelp"] } },
       { from: "3:01.308", to: "3:08.987", text: "There's so much that we can do.", training: { target: "much", choices: ["much", "help", "keep", "touch"] } },
       { from: "3:09.171", to: "3:12.027", text: "Far and wide, from land to sea,", training: { target: "land", choices: ["land", "far", "sea", "hand"] } },
       { from: "3:13.379", to: "3:16.083", text: "Every animal, <wild> and free.", training: { target: "free", choices: ["free", "wild", "animal", "tree"] } },
       { from: "3:17.291", to: "3:20.740", text: "High in the sky, down below,", training: { target: "below", choices: ["below", "high", "sky", "hello"] } },
       { from: "3:21.291", to: "3:24.307", text: "Watch the world of nature grow.", training: { target: "grow", choices: ["grow", "watch", "world", "snow"] } },
  ]
  },


/* ── GRADE 5 UNIT 7 - INTO THE WILDS───────────────────────────────────── */
  {
    id: "7_4_intothewilds",
    title: "Into the Wilds",
    artist: "Grade7",
    audio: "songs/5_7_intothewilds.mp3",
    video: null,
    videotimingdelay: "",
    image: "thumbnails/7_4_intothewilds.webp",
    spotify: "",
    videoclose: null,
    zoomfactor: true,
    zoomgap: 8,

    climax: [
      { at: "1:05", to: "1:20" },
      { at: "2:17", to: "2:31" },
{ at: "3:09", to: "3:40" }
    ],

    /* karaoke videosunun kendi timing'ine göre — dinleyip doldur */
    kareoke_climax: [{ at: "0:44", to: "1:00" },
      { at: "1:51", to: "2:00" },
{ at: "2:30", to: "2:41" }],

    /* çocuklar için sakıncalı sahne varsa {at,to} ekle — bkz rehber */
    censored: [],
    kareoke_censored: [],

    words: [
      { word: "sharpest teeth",    tr: "en keskin dişler",          image: "images/sharp_teeth.webp" },
      { word: "eagle",   tr: "kartal",         image: "images/eagle.webp" },
      { word: "seal",  tr: "fok balığı",      image: "images/seal.webp" },
      { word: "jungle", tr: "vahşi orman",        image: "images/jungle.webp" },
      { word: "whale",  tr: "balina",     image: "images/whale.webp" },
      { word: "wild",   tr: "vahşi", image: "images/wild.webp" },
      { word: "shark",  tr: "köpek balığı",           image: "images/shark.webp" },
      { word: "survive",   tr: "hayatta kalmak",         image: "images/survive.webp" }
    ],

    lyrics: [

       { from: "0:17.229", to: "0:19.509", text: "Tigers walk out in the rain,", training: { target: "Tigers", choices: ["Tigers", "lions", "monkeys", "fighters"] } },
       { from: "0:21.141", to: "0:23.733", text: "Lions live out on the plain,", training: { target: "Lions", choices: ["Lions", "tigers", "wolves", "irons"] } },
       { from: "0:25.277", to: "0:27.741", text: "Monkeys can climb up a tree,", training: { target: "Monkeys", choices: ["Monkeys", "lions", "eagles", "donkeys"] } },
       { from: "0:29.445", to: "0:31.829", text: "Dolphins can swim in the sea.", training: { target: "Dolphins", choices: ["Dolphins", "whales", "eagles", "doll fins"] } },
       { from: "0:33.085", to: "0:35.589", text: "A rabbit is faster than a bear,", training: { target: "rabbit", choices: ["rabbit", "bear", "giraffe", "habit"] } },
       { from: "0:37.077", to: "0:39.733", text: "A giraffe is taller than a deer.", training: { target: "giraffe", choices: ["giraffe", "deer", "wolf", "carafe"] } },
       { from: "0:41.042", to: "0:43.690", text: "A wolf is stronger than a sheep,", training: { target: "wolf", choices: ["wolf", "sheep", "bear", "roof"] } },
       { from: "0:45.058", to: "0:47.818", text: "A <whale> is bigger than a ship.", training: { target: "whale", choices: ["whale", "ship", "eagle", "tail"] } },
       { from: "0:49.356", to: "0:52.132", text: "Where do the tigers live today?", training: { target: "tigers", choices: ["tigers", "lions", "eagles", "fighters"] } },
       { from: "0:53.404", to: "0:56.252", text: "Where do the <eagle>s fly away?", training: { target: "eagles", choices: ["eagles", "whales", "tigers", "beagles"] } },
       { from: "0:57.588", to: "1:00.868", text: "From the <jungle> to the sea,", training: { target: "jungle", choices: ["jungle", "sea", "plain", "jumble"] } },
       { from: "1:01.796", to: "1:05.428", text: "Nature's full of life to see.", training: { target: "Nature", choices: ["Nature", "animal", "life", "creature"] } },
       { from: "1:05.948", to: "1:08.700", text: "Far and wide, from land to sea,", training: { target: "Far", choices: ["Far", "land", "sea", "star"] } },
       { from: "1:09.844", to: "1:12.812", text: "Every animal, <wild> and free.", training: { target: "wild", choices: ["wild", "free", "animal", "child"] } },
       { from: "1:13.796", to: "1:17.412", text: "High in the sky, down below,", training: { target: "High", choices: ["High", "sky", "below", "fly"] } },
       { from: "1:17.884", to: "1:21.116", text: "Watch the world of nature grow.", training: { target: "Watch", choices: ["Watch", "world", "nature", "witch"] } },
       { from: "1:28.804", to: "1:31.540", text: "Penguins live at the South Pole,", training: { target: "Penguins", choices: ["Penguins", "mice", "parrots", "engines"] } },
       { from: "1:32.961", to: "1:35.600", text: "Little mice hide in a hole,", training: { target: "mice", choices: ["mice", "parrots", "penguins", "rice"] } },
       { from: "1:36.952", to: "1:40.600", text: "Parrots can talk, <seal>s can dive,", training: { target: "seals", choices: ["seals", "parrots", "sharks", "meals"] } },
       { from: "1:41.217", to: "1:44.472", text: "Nature helps them all <survive>.", training: { target: "survive", choices: ["survive", "nature", "animals", "arrive"] } },
       { from: "1:45.256", to: "1:47.648", text: "The cheetah is the fastest one,", training: { target: "cheetah", choices: ["cheetah", "tiger", "wolf", "cheater"] } },
       { from: "1:48.800", to: "1:51.721", text: "Chasing prey beneath the sun.", training: { target: "prey", choices: ["prey", "sun", "tree", "day"] } },
       { from: "1:53.145", to: "1:55.969", text: "The <shark> has the <sharpest teeth>,", training: { target: "shark", choices: ["shark", "whale", "seal", "park"] } },
       { from: "1:57.449", to: "2:00.341", text: "Swimming through the sea beneath.", training: { target: "Swimming", choices: ["Swimming", "flying", "climbing", "winning"] } },
       { from: "2:01.173", to: "2:03.853", text: "Where do the tigers live today?", training: { target: "today", choices: ["today", "tigers", "live", "away"] } },
       { from: "2:05.095", to: "2:07.919", text: "Where do the <eagle>s fly away?", training: { target: "fly", choices: ["fly", "eagles", "away", "sky"] } },
       { from: "2:09.375", to: "2:12.727", text: "From the <jungle> to the sea,", training: { target: "sea", choices: ["sea", "jungle", "land", "tree"] } },
       { from: "2:13.559", to: "2:17.183", text: "Nature's full of life to see.", training: { target: "life", choices: ["life", "nature", "see", "wife"] } },
       { from: "2:17.695", to: "2:20.503", text: "Far and wide, from land to sea,", training: { target: "wide", choices: ["wide", "far", "land", "guide"] } },
       { from: "2:21.671", to: "2:24.455", text: "Every animal, <wild> and free.", training: { target: "animal", choices: ["animal", "wild", "free", "minimal"] } },
       { from: "2:25.698", to: "2:29.123", text: "High in the sky, down below,", training: { target: "sky", choices: ["sky", "high", "below", "fly"] } },
       { from: "2:29.755", to: "2:32.786", text: "Watch the world of nature grow.", training: { target: "world", choices: ["world", "watch", "nature", "curled"] } },
       { from: "2:49.179", to: "2:52.378", text: "We must keep the rivers clean,", training: { target: "rivers", choices: ["rivers", "forests", "animals", "givers"] } },
       { from: "2:53.002", to: "2:56.562", text: "Keep the forests fresh and green.", training: { target: "forests", choices: ["forests", "rivers", "animals", "choruses"] } },
       { from: "2:57.172", to: "3:00.780", text: "We must help the animals too,", training: { target: "help", choices: ["help", "keep", "animals", "yelp"] } },
       { from: "3:01.308", to: "3:08.987", text: "There's so much that we can do.", training: { target: "much", choices: ["much", "help", "keep", "touch"] } },
       { from: "3:09.171", to: "3:12.027", text: "Far and wide, from land to sea,", training: { target: "land", choices: ["land", "far", "sea", "hand"] } },
       { from: "3:13.379", to: "3:16.083", text: "Every animal, <wild> and free.", training: { target: "free", choices: ["free", "wild", "animal", "tree"] } },
       { from: "3:17.291", to: "3:20.740", text: "High in the sky, down below,", training: { target: "below", choices: ["below", "high", "sky", "hello"] } },
       { from: "3:21.291", to: "3:24.307", text: "Watch the world of nature grow.", training: { target: "grow", choices: ["grow", "watch", "world", "snow"] } },
  ]
  },
  /* ── YENİ ŞARKI EKLEMEK İÇİN ────────────────────────────────────────
     Yukarıdaki bloğu kopyala, virgülle ayırarak buraya yapıştır,
     alanları doldur. Hepsi bu. 🙂
     ------------------------------------------------------------------ */

];

/* Her training sorusunda en az bir ses benzeri güçlü çeldirici bulunur.
   Türev ekleri yerine rhyme / yakın ses eşleşmeleri tercih edilir. */
const PHONETIC_DISTRACTORS = Object.freeze({
  "journey": "attorney", "adventures": "departures", "smile": "style", "step": "slept",
  "dreams": "streams", "pride": "ride", "moments": "opponents", "find": "mind",
  "learn": "turn", "much": "touch", "shine": "line", "sorrow": "borrow",
  "stronger": "longer", "today": "away", "high": "sky", "fear": "near",
  "when": "then", "lesson": "session", "closer": "poser", "goal": "soul",
  "answer": "dancer", "really": "freely", "rise": "eyes", "always": "hallways",
  "friends": "ends", "laugh": "path", "better": "letter", "together": "weather",
  "dream": "stream", "word": "heard", "believe": "receive", "try": "sky",
  "grow": "snow", "world": "curled", "mornings": "warnings", "lonely": "only",
  "wave": "save", "little": "brittle", "dark": "park", "through": "blue",
  "memories": "melodies", "storm": "form", "still": "hill", "thing": "ring",
  "side": "wide", "alone": "stone", "make": "lake", "here": "near",
  "eye": "sky", "fall": "call", "sorry": "story", "other": "mother",
  "keep": "sleep", "matter": "letter", "stand": "land", "pass": "class",
  "roads": "codes", "life": "wife", "mind": "kind", "adil": "april",
  "listening": "glistening", "voices": "choices", "head": "red", "like": "bike",
  "what": "hot", "paths": "laughs", "same": "name", "none": "sun",
  "strong": "song", "belong": "along", "pretending": "defending", "forced": "forest",
  "own": "phone", "live": "give", "scorn": "storm", "will": "hill",
  "stop": "shop", "stare": "care", "noise": "voice", "only": "lonely",
  "night": "light", "star": "far", "each": "beach", "told": "cold",
  "sky": "high", "learned": "turned", "year": "near", "forest": "forced",
  "hear": "near", "sparrow": "narrow", "holding": "folding", "every": "heavy",
  "next": "text", "built": "guilt", "stone": "alone", "scared": "shared",
  "call": "fall", "oceans": "motions", "fallen": "pollen", "future": "teacher",
  "have": "save", "name": "same", "aim": "game", "rain": "train",
  "me": "sea", "speech": "beach", "lie": "fly", "mother": "other",
  "starts": "hearts", "sunrise": "surprise", "town": "down", "school": "pool",
  "down": "town", "pain": "train", "empires": "desires", "remains": "refrains",
  "hands": "lands", "sign": "line", "young": "song", "grave": "wave",
  "peace": "lease", "price": "rice", "gold": "cold", "war": "door",
  "child": "wild", "starve": "carve", "banquet": "blanket", "golden": "olden",
  "crumb": "drum", "those": "clothes", "bombs": "palms", "somehow": "allow",
  "right": "light", "gone": "dawn", "homes": "poems", "talking": "walking",
  "laughing": "graphing", "kitchen": "itching", "music": "mystic", "fight": "night",
  "doors": "floors", "quieter": "writer", "sound": "round", "else": "bells",
  "house": "mouse", "thousand": "mountain", "plate": "late", "asking": "masking",
  "stories": "worries", "grin": "twin", "wait": "gate", "loneliness": "silliness",
  "key": "sea", "nothing": "something", "familiar": "similar", "calling": "falling",
  "tonight": "light", "wide": "side", "missing": "kissing", "laughter": "after",
  "roam": "home", "things": "rings", "library": "diary", "canteen": "machine",
  "science lab": "science class", "notice board": "notice word", "field": "feel",
  "late": "gate", "obey the rules": "arrange the tools", "shout": "about",
  "safe": "save", "chess": "dress", "chess club": "chess class", "art": "heart",
  "art club": "art class", "obey": "away", "no fighting": "no writing",
  "music club": "music class", "sports club": "sports class", "technology": "ecology",
  "club": "globe", "respect": "reflect", "rules": "schools", "shouting": "counting",
  "from": "drum", "türkiye": "to be", "france": "dance", "spain": "train",
  "countries": "entries", "ways": "phase", "national days": "special ways",
  "national": "festival", "country": "laundry", "japan": "a fan", "three": "free",
  "canada": "camera", "germany": "journey", "south korea": "story area",
  "flag": "bag", "way": "maze", "friends": "ends", "day": "maze", "days": "phase",
  "one": "phone", "maths": "paths", "arts": "hearts", "science": "silence",
  "timetable": "fairytale", "p.e.": "t.v.", "i.t.": "e.t.", "write": "flight",
  "ruler": "cooler", "flow": "snow", "go": "snow", "play": "grey", "stay": "sleigh",
  "comes": "drums", "around": "sound", "follow": "hollow", "leave": "weave",
  "tomorrow": "sorrow", "tree": "free", "shake": "cake", "page": "stage",
  "send": "bend", "another": "mother", "children": "kitchen", "pay": "day",
  "room": "moon", "voice": "noise", "times": "rhymes", "keep": "sleep",
  "different": "distant", "celebrate": "separate", "me": "sea", "you": "blue",
  "by": "sky", "no pretending": "slow defending", "no forced dreams": "new forest scenes",
  "you're": "fur", "you're not": "pure thought", "that": "cat",
  "so leave us": "slow believers", "we're": "fur", "every tree": "heavy plea",
  "then send": "ten bends", "pay price": "day advice", "pay the price": "day advice",
  "long": "wrong", "nose": "goes", "curly": "early", "eyes": "rise",
  "short": "sport", "straight": "great", "round": "sound", "look": "foot",
  "features": "creatures", "clothes": "shows", "wear": "there", "white": "night",
  "style": "while", "fake": "ache", "part": "heart", "blonde": "pond",
  "shirt": "dirt", "shoes": "news", "all my": "fall by", "change": "strange",
  "of me": "on sea", "every way": "heavy maze", "bread": "red", "read": "green",
  "working": "walking", "stair": "share", "rest": "chest", "watering": "catering",
  "watching": "walking", "doing": "brewing", "enjoy": "a boy", "whole": "goal",
  "family": "melody", "cook": "foot", "walking": "talking", "means": "scenes",
  "work": "fork", "share": "chair", "cry": "sky", "brings": "wings",
  "home": "alone", "we're all": "fur ball", "at home": "a poem",
  "family means": "melody scenes",
  "street": "beat", "square": "chair", "something": "sunbeam", "new": "blue",
  "corner": "former", "see": "sea", "explore": "before", "me": "key",
  "block": "clock", "walk": "talk", "around": "sound", "by block": "bike clock",
  "fun": "sun", "places": "faces", "found": "sound", "parks": "marks",
  "playgrounds": "play sounds", "shops": "drops", "more": "door", "there": "chair",
  "to explore": "blue before", "like": "spike", "roam": "home", "every": "heavy",
  "feel": "meal"
});

const VISUALLY_DISTINCT_PHONETIC_DISTRACTORS = Object.freeze({
  "pride": "guide", "find": "behind", "fear": "clear", "when": "ten",
  "wave": "behave", "dark": "shark", "side": "guide", "make": "break",
  "fall": "drawl", "other": "colour", "life": "knife", "mind": "behind",
  "listening": "beginning", "like": "spike", "same": "flame", "live": "forgive",
  "will": "until", "stop": "drop", "night": "kite", "each": "sea",
  "told": "behold", "year": "clear", "hear": "clear", "holding": "snowing",
  "next": "flex", "built": "spilt", "call": "drawl", "have": "laugh",
  "name": "flame", "rain": "champagne", "mother": "colour", "town": "around",
  "down": "around", "hands": "plans", "price": "advice", "gold": "behold",
  "golden": "frozen", "right": "flight", "talking": "parking", "fight": "moonlight",
  "sound": "around", "house": "blouse", "plate": "straight", "asking": "dancing",
  "calling": "walking", "wide": "guide", "missing": "living", "late": "eight",
  "safe": "faith", "art": "aunt", "one": "won"
});

function areVisuallyTooSimilar(first, second) {
  const a = String(first).toLowerCase().replace(/[^a-z]/g, "");
  const b = String(second).toLowerCase().replace(/[^a-z]/g, "");
  if (!a || !b) return true;
  if ((a.includes(b) || b.includes(a)) && Math.abs(a.length - b.length) <= 2) return true;
  const rows = Array.from({ length: a.length + 1 }, (_, index) => [index]);
  for (let column = 1; column <= b.length; column++) rows[0][column] = column;
  for (let row = 1; row <= a.length; row++) {
    for (let column = 1; column <= b.length; column++) {
      rows[row][column] = Math.min(
        rows[row - 1][column] + 1,
        rows[row][column - 1] + 1,
        rows[row - 1][column - 1] + (a[row - 1] === b[column - 1] ? 0 : 1)
      );
    }
  }
  const distance = rows[a.length][b.length];
  const length = Math.max(a.length, b.length);
  return (length <= 5 && distance <= 1) || distance / length <= 0.15;
}

window.SONGS.forEach((song) => {
  (song.lyrics || []).forEach((line) => {
    const training = line?.training;
    const target = String(training?.target || "");
    const normalizedTarget = target.toLowerCase();
    const phonetic = VISUALLY_DISTINCT_PHONETIC_DISTRACTORS[normalizedTarget]
      || PHONETIC_DISTRACTORS[normalizedTarget];
    if (!phonetic || areVisuallyTooSimilar(target, phonetic) || !Array.isArray(training.choices) || training.choices.length !== 4) return;
    if (training.choices.some((choice) => String(choice).toLowerCase() === phonetic)) return;
    training.choices[3] = phonetic;
  });
});

/* Aynı lyric satırı tekrarlandığında tek bir hedefe takılı kalmasın.
   Son iki Grade 5 şarkısının training akışı elle düzenlendiği için korunur. */
const REPEATED_LINE_TRAINING_EXCLUSIONS = new Set([
  "5_2_schooldays",
  "5_2_adayinmylife",
  "5_3_meineveryway",
  "5_4_hometogether",
  "5_5_explorewithme",
  "5_5_insidemyhome",
  "5_6_bitebybite",
  "8_3_bitebybite",
  "5_7_intothewilds"
]);

function getPhoneticDistractor(target) {
  const normalizedTarget = String(target).toLowerCase();
  return VISUALLY_DISTINCT_PHONETIC_DISTRACTORS[normalizedTarget]
    || PHONETIC_DISTRACTORS[normalizedTarget]
    || "";
}

function getRepeatLineKey(text) {
  return String(text || "")
    .replace(/[<>]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function getRepeatLineTargets(line) {
  const cleanText = getRepeatLineKey(line.text);
  const words = cleanText.match(/[a-z]+(?:'[a-z]+)?/g) || [];
  const candidates = [String(line.training?.target || "").toLowerCase()];

  for (let size = 1; size <= Math.min(3, words.length); size++) {
    for (let start = 0; start <= words.length - size; start++) {
      candidates.push(words.slice(start, start + size).join(" "));
    }
  }

  return [...new Set(candidates)].filter((target) => {
    const phonetic = getPhoneticDistractor(target);
    return phonetic && !areVisuallyTooSimilar(target, phonetic);
  });
}

function applyRepeatedLineTrainingTargets(song) {
  if (REPEATED_LINE_TRAINING_EXCLUSIONS.has(song.id)) return;

  const repeatedLines = new Map();
  (song.lyrics || []).forEach((line) => {
    if (!line?.training?.target || !Array.isArray(line.training.choices)) return;
    const key = getRepeatLineKey(line.text);
    const group = repeatedLines.get(key) || [];
    group.push(line);
    repeatedLines.set(key, group);
  });

  repeatedLines.forEach((lines) => {
    if (lines.length < 2) return;
    const targets = getRepeatLineTargets(lines[0]);
    if (targets.length < 2) return;

    lines.forEach((line, index) => {
      const target = targets[index % targets.length];
      const phonetic = getPhoneticDistractor(target);
      const previousChoices = line.training.choices.map((choice) => String(choice));
      const choices = [target, phonetic];

      previousChoices.forEach((choice) => {
        if (choices.length >= 4) return;
        if (!choices.some((item) => item.toLowerCase() === choice.toLowerCase())) choices.push(choice);
      });
      targets.forEach((choice) => {
        if (choices.length >= 4) return;
        if (!choices.some((item) => item.toLowerCase() === choice.toLowerCase())) choices.push(choice);
      });

      line.training.target = target;
      line.training.choices = choices.slice(0, 4);
    });
  });
}

window.SONGS.forEach(applyRepeatedLineTrainingTargets);
