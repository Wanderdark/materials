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

      { from: "2:39.858", to: "2:41.314", text: "Together we can", training: { line: 1, target: "grow", choices: ["grow", "laugh", "shine", "follow"] } },
      { from: "2:41.795", to: "2:42.994", text: "Learn and <grow>,", training: { target: "grow", choices: ["grow", "laugh", "shine", "follow"] } },
      { from: "2:43.147", to: "2:44.219", text: "We have so much", training: { line: 1, target: "world", choices: ["world", "dreams", "forest", "sorrow"] } },
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
      { from: "1:51.724", to: "1:57.052", text: "Is me...", training: { line: 1, target: "pretending", choices: ["pretending", "storm", "future", "forest"] } },
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
      { from: "0:31.130", to: "0:33.139", text: "The <forest>s fall." , training: {"target":"forest","choices":["forest","sparrow","sky","fallen"]} },
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
      { from: "2:55.409", to: "2:55.817", text: "Will you", training: { line: 1, target: "stand", choices: ["stand", "storm", "smile", "cities"] } },
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
      { from: "0:44.829", to: "0:46.517", text: "With others' <pain>s." , training: {"target":"pain","choices":["pain","speech","lie","sign"]} },
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
      { from: "2:30.451", to: "2:38.893", text: "And names on <grave>s." , training: {"target":"grave","choices":["grave","speech","lie","pain"]} },
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
      { from: "2:33.428", to: "2:36.258", text: "Open <wide>r than before." , training: {"target":"wide","choices":["wide","kitchen","plate","grin"]} },
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





  /* ── YENİ ŞARKI EKLEMEK İÇİN ────────────────────────────────────────
     Yukarıdaki bloğu kopyala, virgülle ayırarak buraya yapıştır,
     alanları doldur. Hepsi bu. 🙂
     ------------------------------------------------------------------ */

];
