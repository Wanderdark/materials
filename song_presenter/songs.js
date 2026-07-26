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
   image  : şarkı kapak görseli, ör. "images/kapak.webp" — yoksa: null

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
    video: null,
    image: "thumbnails/learningtogether.webp",
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
      { from: "0:16.532", to: "0:19.315", text: "A new <journey> starts today," },
      { from: "0:20.339", to: "0:22.987", text: "New adventures on the way." },
      { from: "0:23.644", to: "0:26.555", text: "One more word and one more <smile>," },
      { from: "0:27.124", to: "0:30.195", text: "Every step is worth the try." },
      { from: "0:31.321", to: "0:34.082", text: "Books and <dreams> are side by side," },
      { from: "0:34.993", to: "0:37.649", text: "With my friends, I learn with <pride>." },
      { from: "0:37.779", to: "0:40.155", text: "Little moments, day by day," },
      { from: "0:41.307", to: "0:43.803", text: "Help me find another way." },
      { from: "0:44.851", to: "0:47.683", text: "I can learn, I can <grow>," },
      { from: "0:48.403", to: "0:52.270", text: "There's so much I want to know." },

      { from: "0:52.702", to: "0:55.974", text: "Learn today, shine tomorrow," },
      { from: "0:56.254", to: "0:59.666", text: "Leave behind, every <sorrow>" },
      { from: "0:59.914", to: "1:02.418", text: "Word by word, step by step," },
      { from: "1:02.787", to: "1:06.210", text: "I am stronger than yesterday" },
 
      { from: "1:06.818", to: "1:08.234", text: "Learn today," },
      { from: "1:08.402", to: "1:09.994", text: "Dream so high," },
      { from: "1:10.170", to: "1:11.835", text: "Nothing to <fear>" },
      { from: "1:12.139", to: "1:13.331", text: "When we try." },

      { from: "1:13.994", to: "1:15.511", text: "Every lesson," },
      { from: "1:15.767", to: "1:17.031", text: "Every smile," },
      { from: "1:17.312", to: "1:18.465", text: "Brings me closer," },
      { from: "1:18.608", to: "1:19.974", text: "To my goal." },

      { from: "1:35.806", to: "1:38.295", text: "Every answer helps me see," },
      { from: "1:39.350", to: "1:41.926", text: "Who I really want to be." },
      { from: "1:42.838", to: "1:45.334", text: "If I fall, I rise again," },
      { from: "1:45.974", to: "1:48.926", text: "That's the way I always win." },
      { from: "1:49.478", to: "1:50.598", text: "With my friends," },
      { from: "1:50.766", to: "1:52.350", text: "We <laugh> and play," },
      { from: "1:53.158", to: "1:58.582", text: "Learning gets better day by day." },
      { from: "2:03.742", to: "2:07.126", text: "Learning together," },
      { from: "2:07.526", to: "2:10.438", text: "Growing together," },
      { from: "2:11.086", to: "2:14.190", text: "For better tomorrows," },
      { from: "2:14.366", to: "2:19.238", text: "With our <dreams> to guide us." },

      { from: "2:19.486", to: "2:22.654", text: "Learn today, shine tomorrow," },
      { from: "2:22.806", to: "2:26.118", text: "Every dream is ours to follow." },
  
      { from: "2:26.294", to: "2:29.005", text: "Word by word, day by day," },
      { from: "2:29.284", to: "2:34.653", text: "I believe we'll find our way." },
   
      { from: "2:33.401", to: "2:34.548", text: "Learn today," },
      { from: "2:34.763", to: "2:36.315", text: "Dream so high," },
      { from: "2:36.795", to: "2:38.003", text: "Nothing to <fear>" },
      { from: "2:38.171", to: "2:39.587", text: "When we try." },

      { from: "2:39.858", to: "2:41.314", text: "Together we can" },
      { from: "2:41.795", to: "2:42.994", text: "Learn and <grow>," },
      { from: "2:43.147", to: "2:44.219", text: "We have so much" },
      { from: "2:44.595", to: "2:48.019", text: "To show the <world>." },]
  },

/* ── ŞARKI 2 — SIDE BY SIDE ───────────────────────────────────── */
  {
    id: "sidebyside",
    title: "Side by side",
    artist: "Ella",
    audio: "songs/sidebyside.mp3",
    video: null,
    image: "thumbnails/sidebyside.webp",
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
      { from: "0:16.423", to: "0:19.055", text: "Some mornings feel so gray," },
      { from: "0:19.887", to: "0:22.447", text: "Feeling <lonely> on my way." },
      { from: "0:23.359", to: "0:27.991", text: "Then you wave, it fades away." },
      { from: "0:30.175", to: "0:33.215", text: "One little joke, one little smile," },
      { from: "0:33.823", to: "0:36.799", text: "Makes a dark day <shine> so bright." },
      { from: "0:37.239", to: "0:38.774", text: "Walking through the school ," },
      { from: "0:38.966", to: "0:42.126", text: "Sharing dreams along the way," },
      { from: "0:42.766", to: "0:45.895", text: "Making <memories> day by day." },
      { from: "0:48.126", to: "0:50.318", text: "Even when the <storm> comes," },
      { from: "0:51.494", to: "0:54.847", text: "I'll still be around." },
      { from: "0:55.717", to: "1:02.294", text: "There's one thing I want you to know..." },
      { from: "1:02.445", to: "1:07.062", text: "Side by side, I'm here for you." },
      { from: "1:08.949", to: "1:12.197", text: "You're not alone," },
      { from: "1:12.565", to: "1:14.053", text: "We'll make it through." },
      { from: "1:16.350", to: "1:21.229", text: "Side by side, I'm here for you." },
      { from: "1:23.086", to: "1:26.525", text: "You're not alone," },
      { from: "1:26.725", to: "1:28.181", text: "We'll make it through." },
      { from: "1:30.645", to: "1:33.501", text: "Sometimes we don't see eye to eye," },
      { from: "1:33.773", to: "1:37.133", text: "<Tears> may fall, we may cry." },
      { from: "1:37.525", to: "1:40.693", text: "But one small sorry changes it all," },
      { from: "1:41.013", to: "1:44.165", text: "And we don't let each other fall." },
      { from: "1:44.517", to: "1:46.741", text: "You keep my <secrets>," },
      { from: "1:47.846", to: "1:49.750", text: "I keep yours too." },
      { from: "1:51.118", to: "1:53.590", text: "No matter what," },
      { from: "1:54.733", to: "1:56.645", text: "I'll stand by you." },
      { from: "1:58.981", to: "2:01.603", text: "Even when the <storm> comes," },
      { from: "2:02.120", to: "2:05.329", text: "I'll still be around." },
      { from: "2:06.329", to: "2:12.841", text: "There's one thing I want you to know..." },
      { from: "2:13.056", to: "2:17.609", text: "Side by side, I'm here for you." },
      { from: "2:19.377", to: "2:22.768", text: "You're not alone," },
      { from: "2:23.017", to: "2:24.664", text: "We'll make it through." },
      { from: "2:26.833", to: "2:31.536", text: "Side by side, I'm here for you." },
      { from: "2:33.617", to: "2:36.745", text: "You're not alone," },
      { from: "2:37.096", to: "2:38.520", text: "We'll make it through." },
      { from: "2:41.753", to: "2:45.304", text: "Years may pass, hair turns white." },
      { from: "2:45.504", to: "2:48.664", text: "Different <roads>, different lives." },
      { from: "2:48.880", to: "2:52.208", text: "No matter where life may lead," },
      { from: "2:52.408", to: "2:55.609", text: "In <mind> and heart, we will meet." },
      { from: "2:56.817", to: "2:59.257", text: "Even when the <storm> comes," },
      { from: "3:00.073", to: "3:03.185", text: "I'll still be around." },
      { from: "3:04.177", to: "3:10.674", text: "There's one thing I want you to know..." },
      { from: "3:10.833", to: "3:15.258", text: "Side by side, I'm here for you." },
      { from: "3:17.377", to: "3:20.609", text: "You're not alone," },
      { from: "3:20.841", to: "3:22.561", text: "We'll make it through." },
      { from: "3:24.601", to: "3:29.465", text: "Side by side, I'm here for you." },
      { from: "3:31.145", to: "3:34.417", text: "You're not alone," },
      { from: "3:34.809", to: "3:36.281", text: "We'll make it through..." },
      { from: "3:38.506", to: "3:40.025", text: "Side by side," },
      { from: "3:41.889", to: "3:43.386", text: "Side by side," },
      { from: "3:45.550", to: "3:48.846", text: "Side by side," },
      { from: "3:49.134", to: "3:53.534", text: "We'll make it through." },
      { from: "", to: "", text: "Written by Adil Fırat Oktav." },
      { from: "", to: "", text: "Thanks for listening..." },]
  }




  /* ── YENİ ŞARKI EKLEMEK İÇİN ────────────────────────────────────────
     Yukarıdaki bloğu kopyala, virgülle ayırarak buraya yapıştır,
     alanları doldur. Hepsi bu. 🙂
     ------------------------------------------------------------------ */

];
