# Word Overlord Single Player Gelistirme Raporu

Tarih: 14 Haziran 2026  
Kaynak: Mevcut `word_master` oyununun fork'u  
Hedef: Tamamen single-player olarak gelistirilecek `WORD OVERLORD`

## Kesinlesen Tasarim Kararlari

- Single-player soru motorunda her soru stabil ve benzersiz bir `id` ile tasinacak.
- Oyun, Word Master'in tamamen single-player fork'u olacak ve `WORD OVERLORD` adiyla gelistirilecek.
- Classroom modu ve classroom/single-player mod secim ekrani bulunmayacak.
- Ana menu `NEW GAME`, `CONTINUE`, `SETTINGS` ve acilan LEVEL secimini destekleyecek.
- Yeni oyuncu kurulumunda oyuncu adi, sinif seviyesi ve Word Quest'ten entegre edilen avatar secimi bulunacak.
- Soru, cevap, Turkce tanim ve gorsel bilgileri tanim metniyle anahtarlanmayacak; secilen soru kaydi/ID'si uzerinden okunacak.
- Single-player kosusunda oyuncu harf sayisi veya kolay/orta/zor soru secmeyecek.
- Her LEVEL, harf sayisi giderek artan 10 sorudan olusacak.
- Ilk aday uzunluk egrisi: `[3, 4, 4, 5, 6, 7, 8, 8, 9, 10]`.
- Her LEVEL, 10 sorunun kac tanesinin easy, medium ve hard olacagini belirleyen ayri bir zorluk recetesine sahip olacak.
- LEVEL ilerledikce once medium, ardindan hard sorular kademeli olarak diziye eklenecek.
- Medium ve hard sorular mumkun oldugunca 10 soruluk dizinin ilerleyen pozisyonlarina yerlestirilecek.
- LEVEL sonu 1-3 yildiz degerlendirmesi prototipin zorunlu bir parcasi olacak.
- Sonraki LEVEL yalnizca mevcut LEVEL en az 1 yildizla tamamlandiginda acilacak.
- Basarisiz olunan LEVEL yeniden baslatilacak; daha once acilmis LEVEL'lar ve kazanilmis yildizlar kaybedilmeyecek.
- Oyun LEVEL ortasinda kapatilirsa `CONTINUE` aktif LEVEL state'ini surdurecek; LEVEL basarisizligi sonrasi yarim ilerleme kaydedilmeyecek.
- Sonraki oyun modlari prototip tamamlandiktan sonra surum yol haritasina gore eklenecek.
- Nihai uzunluk egrisi soru havuzundaki gercek dagilima ve oyun testlerine gore ayarlanacak.
- Hedef uzunlukta uygun soru yoksa once `+/-1`, sonra `+/-2` uzunluk toleransi uygulanacak.
- Harf uzunlugu hesaplanirken bosluklar ve tireler sayilmayacak.
- Ayni soru ID'si ve ayni ana cevap bir kosuda tekrar secilmeyecek.
- `questions.js` icindeki alternatif cevap alani diger oyunlarin mekaniklerine aittir; Word Overlord ana cevabi tek gecerli cevap olarak kullanacak.

## 1. Yonetici Ozeti

Word Master'in mevcut cekirdegi Word Overlord fork'u icin oldukca uygun:

- Oyuncu kolay, orta veya zor soru secerek risk aliyor.
- Harf alma ve Turkce ipucu puani dusuruyor.
- Jokerler ve sans carki karar cesitliligi yaratiyor.
- Cevap ekrandaki klavyeyle dogrudan yaziliyor.
- 1.359 soruluk genis bir havuz ve 1.347 gorselli soru var.

Ancak mevcut oyun akisi tamamen sinif ici, ogretmen kontrollu 2-3 grup yarismasi etrafinda kurulmus. Single-player surum, bu katmani gizlemekten fazlasini gerektiriyor. Grup skoru, sira degisimi, ogrenci listesi, round sonu joker donusumu ve kazanan ilaninin yerine oyuncuya karsi calisan bir hedef sistemi kurulmasi gerekiyor.

Onerilen ana tasarim:

> **WORD OVERLORD: MASTERY RUN**  
> Oyuncu, her biri 10 sorudan olusan LEVEL'larda hedef puani gecmeye calisir. Dogru cevap serileri carpan kazandirir; ipuclari puan ve ustalik notunu dusurur; LEVEL sonunda 1-3 yildiz ve kalici ilerleme elde edilir.

Ilk surumde Word Quest kadar buyuk bir RPG katmani kurmak yerine kaynak oyunun puan ve risk kimligini derinlestirmek daha dogru olur.

## 2. Mevcut Durum Analizi

### Guclu taraflar

- Soru secme ve puan ekonomisi hazir: `getCurrentScore()` ve `getAwardScore()` (`index.html:4242`, `index.html:4263`).
- Yazili cevap kontrolu hazir: `checkTypedAnswer()` (`index.html:6399`).
- Jokerler hazir: gorsel ipucu, ilk-son harf ve soru degistirme (`index.html:3192-3348`).
- Sans carki ve dokuz farkli etkisi hazir (`index.html:6479-7032`).
- Sinif, unite ve kategori filtreleri hazir (`index.html:5996-6249`).
- Ayarlar ve ogrenci isimleri icin localStorage kullaniliyor (`index.html:3077-3147`).
- Lite mode, sesler, fullscreen ve responsive kurallar mevcut.

### Mevcut cekirdek dongu

1. Grup ve ogrenciler ayarlanir.
2. Aktif grup kolay, orta veya zor soru secer.
3. Tanim ve harf sayisi gosterilir.
4. Oyuncu harf/ipucu alabilir veya cevaplamaya gecebilir.
5. Dogru cevap puan kazandirir.
6. Sira sonraki ogrenci ve gruba gecer.
7. Round sonunda kullanilmayan jokerler puana donusur.
8. Soru havuzu bitince en yuksek grup skoru kazanir.

### Single-player'i engelleyen bagimliliklar

Asagidaki sistemler dogrudan grup/ogrenci modeline bagli:

- `groupScores`, `groupStudents`, `studentScoreMap`, `currentGroup`, `studentIndex`
- Grup ve ogrenci isim giris ekranlari
- Yoklama, otomatik takim dagitimi ve takim dengeleme
- Aktif grup/siradaki ogrenci bildirimleri
- Grup skor tablosu ve otomatik ogrenci liderlik tablosu
- Round uzunlugunun toplam ogrenci sayisindan hesaplanmasi
- Sans carki sanslisinin ogrenciler arasindan secilmesi
- Ogretmen puan duzeltme paneli
- Kazanan grup ilan ekrani

Bu nedenle single-player'i `groupCount = 1` hilesiyle yapmak teknik borcu buyutur. Ayri bir oyun modu ve ayri state modeli kurulmalidir.

## 3. Donusumden Once Cozulmesi Gereken Kritik Sorunlar

### P0 - Sorular tanim metniyle kimliklendiriliyor

`startGameDirect()` icinde sorular sadece tanim metni olarak saklaniyor ve cevaplar `answers[p[0]]` biciminde tanima baglaniyor (`index.html:3622-3623`).

Olculen sonuc:

- 230 tekrar eden Ingilizce tanim var.
- Bunlarin 43 tanesi farkli dogru cevaplara sahip.
- Ornek: `"Very smart."` hem `CLEVER` hem `INTELLIGENT`.

Son kaydedilen cevap oncekini ezebildigi icin oyuncuya bir kelime gosterilip baska kelime beklenebilir.

**Oneri:** Her soruya stabil bir `id` verilmeli ve oyun boyunca tam soru objesi tasinmali.

```js
{
  id: "g7-u1-clever",
  definitionEn: "Very smart.",
  definitionTr: "Cok kafasi calisan.",
  answer: "CLEVER",
  grade: 7,
  difficulty: 2,
  unit: 1,
  image: "../images/7/1/17.webp"
}
```

### P0 - Hatali zorluk verisi

`ONCE` sorusunun zorlugu `12`; gecerli degerler `1`, `2`, `3`. Bu soru mevcut `buildQuizPool()` filtreleriyle hicbir havuza girmiyor.

**Oneri:** Gelistirme araci olarak veri dogrulama scripti eklenmeli ve yayin oncesi calistirilmali. Bu script oyun ici bir ozellik degildir; `questions.js` verisini tarayip gecersiz zorluk, eksik ID, tekrar eden ID ve bulunamayan gorsel yolu gibi hatalari raporlayan otomatik kontroldur.

Ornek olarak asagidaki hatalari oyun acilmadan yakalar:

- Zorluk degeri `1`, `2`, `3` disinda olan soru
- Ayni `id` degerini kullanan iki soru
- Bos ana cevap veya tanim
- Gecersiz sinif/unite degeri
- Dosya sisteminde bulunmayan gorsel yolu

Bu script prototip oynanisinin bir parcasi degildir, ancak soru havuzundaki hatalarin oyuncuya ulasmasini engelleyen dusuk maliyetli bir gelistirme aracidir.

### P1 - Ayni skor verme mantigi iki yerde

Dogru/yanlis sonucu hem `scoreAndClose()` hem `resolveQuestion()` icinde benzer sekilde isleniyor (`index.html:4449`, `index.html:6438`). Single-player gelisirken iki yolun davranisi kolayca ayrisabilir.

**Oneri:** Tek bir `resolveAnswer(result)` fonksiyonuna birlestirilmeli.

### P1 - Tek dosyada yuksek baglilik

HTML, CSS ve oyun mantigi yaklasik 7.083 satirlik `index.html` icinde. Single-player eklemek dosyayi daha kirilgan hale getirir.

**Oneri:** Buyuk yeniden yazim yapmadan asagidaki dosyalara kademeli ayrim:

- `core/question-engine.js`
- `core/answer-normalizer.js`
- `game/mastery-run.js`
- `game/level-recipes.js`
- `services/save-service.js`
- `services/audio-service.js`

## 4. Onerilen Single-player Oyun Tasarimi

### Ana mod: Mastery Run

Her LEVEL, progressive uzunluk ve zorluk recetesine sahip 10 sorudan olusur. Ilk surumde 10 LEVEL bulunur.

- Sorular, LEVEL icinde giderek artan hedef harf uzunluklarina gore otomatik secilir.
- Zorluklar mevcut taban puanlarini kullanir.
- LEVEL hedef puani ekranda surekli gorunur.
- 10 soru sonunda hedef gecilirse sonraki LEVEL acilir.
- Canlar biterse veya hedef puan gecilemezse LEVEL basarisiz olur ve ayni LEVEL bastan tekrar oynanir.
- Kosu boyunca ayni soru tekrar etmez.

Bu model mevcut ipucu ve puan ekonomisini korur; oyuncunun soru secmesine ve rakip gruba duyulan ihtiyaci ortadan kaldirir.

### 10 soruluk progressive uzunluk sistemi

Ilk prototipte kullanilacak hedef uzunluk egrisi:

```js
const LENGTH_CURVE = [3, 4, 4, 5, 6, 7, 8, 8, 9, 10];
```

Her soru seciminde:

1. Hedef uzunluktaki kullanilmamis sorular aranir.
2. Uygun soru yoksa sirasiyla `hedef - 1`, `hedef + 1`, `hedef - 2`, `hedef + 2` havuzlari denenir.
3. Bosluklar ve tireler harf uzunluguna dahil edilmez.
4. Ayni soru ID'si veya ayni cevap mevcut kosuda tekrar secilmez.
5. Secilen soru tam kayit olarak saklanir; tanim metninden cevap aramasi yapilmaz.

Uzunluk egrisi, soru havuzunun sinif ve unite filtrelerinden sonraki dagilimina gore dinamik olarak gevsetilebilir.

### LEVEL bazli progressive zorluk sistemi

Her LEVEL icin hem hedef harf uzunluklari hem de easy/medium/hard dagilimi kullanilacak. Boylece zorluk iki ayri eksende artacak:

- Kelimeler dizi ilerledikce uzayacak.
- LEVEL ilerledikce medium ve hard soru orani artacak.

Ilk dengeleme icin onerilen 10 LEVEL recetesi:

| Level | Easy | Medium | Hard |
|---|---:|---:|---:|
| 1 | 10 | 0 | 0 |
| 2 | 8 | 2 | 0 |
| 3 | 6 | 4 | 0 |
| 4 | 5 | 4 | 1 |
| 5 | 4 | 4 | 2 |
| 6 | 3 | 4 | 3 |
| 7 | 2 | 4 | 4 |
| 8 | 1 | 4 | 5 |
| 9 | 0 | 4 | 6 |
| 10 | 0 | 2 | 8 |

Bu tablo ilk prototip icindir; gercek basari oranlarina ve soru havuzu dagilimina gore dengelenecektir.

Zorluklar diziye tamamen rastgele serpistirilmeyecek. Yeni bir zorluk ilk kez tanitildiginda oyuncunun once ritim kazanabilmesi icin dizinin sonlarinda yer alacak.

Ornek LEVEL 4 dizisi:

```js
const LEVEL_4_DIFFICULTIES = [
  "easy", "easy", "easy", "medium", "easy",
  "medium", "medium", "easy", "medium", "hard"
];
```

Soru secici her pozisyonda hem hedef uzunlugu hem de hedef zorlugu kullanacak:

```js
selectQuestion({
  targetLength: LENGTH_CURVE[position],
  difficulty: LEVEL_RECIPES[level][position],
  usedQuestionIds,
  usedAnswers
});
```

Secim fallback sirasi:

1. Hedef zorluk + hedef uzunluk.
2. Hedef zorluk + `+/-1` uzunluk.
3. Hedef zorluk + `+/-2` uzunluk.
4. Hedef zorlukta baska uzunluktaki en yakin uygun soru.
5. Yalnizca havuz gercekten yetersizse komsu zorluk kategorisi.

Fallback sonucu LEVEL sonunda kaydedilerek hangi sinif/unite filtrelerinde recetenin uygulanamadigi olculebilir.

### Oyuncu kaynaklari

- **Score:** Kosu icindeki ana basari olcusu.
- **Lives:** Baslangicta 3; yanlis cevap veya sure bitimi 1 can goturur.
- **Jokers:** LEVEL basinda sinirli gelir, LEVEL kurallarina gore yenilenir.
- **Streak:** Ardisik dogru cevap; puan carpanini ve sans carkini tetikler.
- **Mastery XP:** Kalici ilerleme; yeni modlari ve kozmetik unvanlari acar.

### Streak ve carpan

Word Quest'ten alinabilecek en uygun fikir streak'tir; fakat burada hasar yerine puan carpanina baglanmalidir.

- 0-2 streak: x1.0
- 3-4 streak: x1.25
- 5-6 streak: x1.5
- 7+ streak: x2.0
- Harf veya Turkce ipucu almak streak'i bozmaz, ancak LEVEL sonucunu ve puani etkiler.
- Yanlis cevap ve sure bitimi streak'i sifirlar.

### LEVEL hedefleri

Ornek ilk dengeleme:

| LEVEL | Soru | Hedef | Ozellik |
|---|---:|---:|---|
| Rookie | 10 | 5.000 | Normal |
| Skilled | 10 | 7.500 | Daha az joker |
| Expert | 10 | 10.000 | Daha hizli timer |
| Elite | 10 | 12.500 | Yanlista ek puan kaybi |
| Word Overlord | 10 | 15.000 | Karisik kurallar |

Hedefler telemetri veya oyun testi sonrasinda ayarlanmalidir.

### LEVEL sonu yildizlari

- 1 yildiz: Hedef puani gec.
- 2 yildiz: Hedefin %125'ine ulas.
- 3 yildiz: Hedefin %150'sine ulas ve en fazla bir yanlis yap.

Yildizlar kalici ilerleme, unite tamamlama ve tekrar oynama nedeni saglar.

Bu sistem prototip kapsaminda uygulanacak bir tasarim kararidir. Her LEVEL sonuc ekraninda:

- Kazanilan yildizlar,
- Toplam skor ve hedef skor,
- Dogru/yanlis sayisi,
- En iyi streak,
- Kullanilan ipucu ve joker sayisi,
- Onceki en iyi skor ve yildiz derecesi

gosterilecek. Bir LEVEL tekrar oynandiginda yalnizca daha yuksek skor ve daha yuksek yildiz derecesi kalici kayda yazilacak.

### LEVEL basarisizligi ve devam kurali

- Sonraki LEVEL'in acilmasi icin mevcut LEVEL'da en az 1 yildiz kazanilmasi gerekir.
- Canlar bittiginde veya 10 soru sonunda 1 yildiz esigi gecilemediginde LEVEL basarisiz sayilir.
- Basarisizlik sonrasi oyuncu ayni LEVEL'i bastan tekrar oynar veya LEVEL secim ekranina doner.
- Basarisizlik daha once kazanilmis yildizlari, rekorlari veya acilmis LEVEL'lari silmez.
- Oyuncu aktif LEVEL sirasinda oyundan cikarsa `CONTINUE`, kayitli soru pozisyonu ve kaynaklarla LEVEL'i surdurur.
- LEVEL basarisizligi kesinlestiginde aktif LEVEL kaydi temizlenir; `CONTINUE` oyuncuyu LEVEL secim ekranina getirir.

### Sans carkinin yeni tetigi

Mevcut cark korunmali, ancak ogrenci secimine bagli olmamali.

Onerilen tetikler:

- Her 5 dogru streak'te bir cark hakki.
- LEVEL basinda dusuk ihtimalle bonus cark.
- Kusursuz LEVEL sonunda garanti cark.

`BONUS_250`, `DOUBLE_PTS`, `HALF_PRICE`, `TIME_WARP`, `JOKER_FLOOD` ve kelime challenge etkileri korunabilir. `EXTRA_JOKER` de single-player'a dogrudan uygundur.

### Oyun modlari ve surum yol haritasi

**Prototip:**

- Mastery Run
- 10 LEVEL ve her LEVEL sonunda 1-3 yildiz degerlendirmesi
- LEVEL tekrar oynama, en iyi skor ve en iyi yildiz kaydi
- New Game / Continue
- Oyuncu adi, sinif seviyesi ve avatar secimi

**v1.0:**

- Mastery Run'in tamamlanmis ve dengelenmis surumu
- New Game / Continue ve kalici ilerleme
- Ayarlar ve genel arayuz cilasi

**v1.1 - Gunluk rekabet:**

- Daily Challenge: Herkes icin gunluk ayni seed ve 20 soru

**v1.2 - Dayaniklilik modu:**

- Endless: Canlar bitene kadar devam

**v1.3 - Unite ilerlemesi:**

- Unit Mastery: Secili uniteyi 1-3 yildizla tamamlama

**v1.4 - Hiz modu:**

- Time Attack: Sabit surede maksimum skor

**Gelecek surum adayi:**

- Practice: Serbest calisma modu
- Baglamsal ilk oyun tutorial'i

## 5. Ekleme, Cikarma ve Donusturme Listesi

### Eklenecekler

- New Game / Continue ekrani
- Oyuncu adi, sinif seviyesi ve avatar secimi
- Word Quest avatar secim arayuzunun ve avatar verilerinin entegrasyonu
- Gelecek kozmetik expansion'lari destekleyecek kalici oyuncu profili
- Single-player HUD: skor, hedef, can, streak, LEVEL ve joker
- Mastery Run LEVEL secimi ve sonuc ekrani
- Kalici save/load sistemi
- LEVEL/yildiz ilerlemesi ve basarisiz LEVEL'i yeniden oynama akisi
- Single-player ayarlari: muzik ses seviyesi ve lite mode toggle
- Stabil soru ID sistemi ve ana cevap dogrulama
- Gelistirme araci olarak veri dogrulama scripti

### Prototip sonrasi degerlendirilecekler

- Practice modu
- Ilk oyun tutorial akisi
- Daily Challenge
- Endless
- Unit Mastery
- Time Attack

### Fork'tan cikarilacaklar

- Classroom ve single-player mod secimi
- Grup sayisi secimi
- Grup adi girisi
- Ogrenci listeleri ve yoklama
- Takim dengeleme ve otomatik dagitim
- Aktif grup ve siradaki ogrenci gosterimleri
- Grup liderlik tablosu
- Ogretmen puan duzeltme paneli
- Grup kazanan ekrani
- Round uzunlugunun ogrenci sayisindan hesaplanmasi
- Kullanilmayan jokerlerin takim puanina otomatik donusmesi
- Practice modu, tutorial, soru gecmisi ve yanlis kelimeler listesi prototip kapsaminda bulunmayacak.
- Efekt sesi icin ayri ayar bulunmayacak.
- Timer tercihi bulunmayacak; her LEVEL'in timer kurali oyun tarafindan dayatilacak.

### Donusturulecekler

| Mevcut sistem | Single-player karsiligi |
|---|---|
| Grup skoru | Oyuncu kosu skoru |
| Round | 10 soruluk LEVEL |
| Grup sirasi | Siradaki soru |
| Ogrenci sans carki | Streak/LEVEL carki |
| Kazanan grup | LEVEL basarisi / kosu sonucu |
| Ogrenci leaderboard | Kisisel rekorlar ve LEVEL yildizlari |
| Joker kotasi | Kosu envanteri |
| Puan duzeltme | Kaldirilir |

## 6. Teknik Mimari Onerisi

### Soru motoru

Fork, kaynak oyundaki tanim-keyed soru yapisini ID-keyed bir soru motoruna donusturmeli:

```js
QuestionEngine.createPool(filters)
QuestionEngine.draw(difficulty)
QuestionEngine.replaceCurrent()
QuestionEngine.validateAnswer(question, typedAnswer)
QuestionEngine.markUsed(question.id)
```

Soru state'i tanim string'i degil obje veya ID olmali:

```js
currentQuestionId
questionsById
remainingQuestionIdsByDifficulty
usedQuestionIds
```

### Mod adapter yapisi

Soru motoru sonuc uretsin, Mastery Run state'i sonucu uygulasin:

```js
masteryRun.onCorrect({ question, score, hintsUsed, timeLeft })
masteryRun.onWrong({ question, reason })
masteryRun.onQuestionComplete()
masteryRun.onLevelComplete()
```

Boylece fork, grup ve ogrenci degiskenlerini taklit etmek zorunda kalmadan tamamen single-player state'iyle calisir.

### Save modeli

Word Quest'teki `SP_SAVE_KEY`, New Game / Continue ve save sanitization yaklasimi alinmali (`word_quest/index.html:5914-6239`, `word_quest/index.html:6489-6570`).

Onerilen ilk save semasi:

```js
{
  version: 1,
  player: {
    name: "",
    grade: 7,
    avatarId: "",
    masteryXp: 0,
    level: 1
  },
  progression: {
    unlockedStage: 1,
    stageStars: {},
    bestScores: {},
    completedRuns: 0
  },
  stats: {
    correct: 0,
    wrong: 0,
    bestStreak: 0,
    answeredQuestionIds: [],
    missedQuestionIds: []
  },
  activeRun: null,
  completed: false
}
```

Kayit yuklenirken butun alanlar tip, aralik ve gecerli ID acisindan temizlenmeli. Save'e `version` eklenmesi ileride migrasyon yapmayi kolaylastirir.

### Otomatik kayit noktalari

- Her cevap sonucu
- LEVEL baslangici ve sonu
- Cark sonucu
- Joker kullanimi
- Ana menuye donus
- Ayar degisikligi

Aktif LEVEL state'i her cevaptan sonra kaydedilir. LEVEL basarisiz oldugunda aktif state temizlenir; kalici profil, acilmis LEVEL'lar, rekorlar ve yildizlar korunur.

## 7. Word Quest'ten Alinacak ve Alinmayacak Dersler

### Alinacaklar

- New Game / Continue ayrimi
- Aktif kosuyu kaydetme ve geri yukleme
- Save verisini yuklerken dogrulama
- Streak'in oynanisa gercek etkisi
- Kalici ilerleme ile kosu ilerlemesini ayirma
- Ayni kosuda soru tekrarini engelleme
- Ayarlari ilerleme kaydindan ayri tutma

### Ilk surumde alinmamasi gerekenler

- Ekipman, dayanıklilik ve loot sistemi
- Magaza ve para ekonomisi
- Town/hub yapisi
- Dusman, HP ve saldiri sistemi
- Buyuk quest zincirleri
- Cok sayida para birimi

Bunlar Word Overlord'un sade ve hizli puan oyunu kimligini bulandirir ve ilk surum kapsamını gereksiz buyutur.

## 8. Uygulama Yol Haritasi

### Faz 0 - Fork ve saglamlastirma

Hedef: Word Master kaynak kodundan tamamen single-player Word Overlord fork'unu olusturmak ve soru motorunu guvenilir hale getirmek.

- `word_master` kaynak alinip `word_overlord` fork dizini olustur.
- Classroom arayuzu ve state bagimliliklarini fork'tan kaldir.
- Soru objelerine stabil ID ekle veya yukleme aninda deterministik ID uret.
- Tanim-keyed map yapisini ID-keyed yapiya cevir.
- Word Overlord cevap kontrolunun yalnizca ana cevabi kullanmasini sagla.
- `ONCE` zorluk hatasini duzelt.
- Veri dogrulama scripti ekle.
- Cevap sonucunu tek fonksiyonda birlestir.

**Cikis kriteri:** Word Overlord fork'u classroom state'ine ihtiyac duymadan acilir ve tekrar eden tanimlar dogru cevapla eslesir.

### Faz 1 - Single-player MVP

Hedef: Bastan sona oynanabilir tek kosu.

- New Game / Continue ekrani
- Oyuncu adi, sinif seviyesi ve Word Quest avatar entegrasyonunu iceren profil
- Single-player state modeli
- Progressive uzunluk ve zorluk recetesine sahip 10 soruluk LEVEL
- Can, streak ve skor carpani
- Single-player HUD
- LEVEL sonu 1-3 yildiz degerlendirmesi ve sonuc ekrani
- LEVEL tekrar oynama, en iyi skor ve en iyi yildiz kaydi
- LEVEL basarisizligi ve Continue kurallari
- Game-over ekrani

**Cikis kriteri:** Oyuncu yeni profil olusturur, LEVEL oynar, basarili veya basarisiz sonuc alir ve kaldigi aktif LEVEL'e Continue ile donebilir.

### Faz 2 - Kayit ve ilerleme

- New Game / Continue
- Active run save/load
- LEVEL acma ve yildiz sistemi
- Kisisel rekorlar
- Muzik ses seviyesi ve lite mode ayarlari

**Cikis kriteri:** Sayfa kapatildiktan sonra kosu ve kalici ilerleme guvenle devam eder.

### Faz 3 - Icerik ve tekrar oynanabilirlik

- Sans carkini streak sistemine bagla
- v1.1: Daily Challenge
- v1.2: Endless
- v1.3: Unit Mastery
- v1.4: Time Attack
- Basarimlar
- Dengeleme ve ses/gorsel cilasi

## 9. v1.0 Kapsam Onerisi

Single-player v1.0 icin ideal kapsam:

- Oyun `WORD OVERLORD` adiyla tamamen single-player fork olarak calisir.
- Ana menude New Game, Continue ve Settings bulunur; classroom/mod secimi bulunmaz.
- Oyuncu adi, sinif seviyesi ve avatar secimi vardir.
- Mastery Run vardir; Practice prototip ve v1.0 kapsaminda zorunlu degildir.
- 10 LEVEL, hedef puan, can, streak, joker ve cark sistemi vardir.
- New Game / Continue ve otomatik kayit vardir.
- LEVEL bazli yildizlar, en iyi skor ve temel istatistikler vardir.
- Basarisiz LEVEL ayni LEVEL'dan yeniden oynanir; en az 1 yildiz sonraki LEVEL'i acar.
- Tekrar eden tanimlar soru ID'leriyle dogru ele alinir.
- Muzik ses seviyesi ve lite mode ayarlari vardir; timer tercihi yoktur.

Daily Challenge, Endless, Unit Mastery ve Time Attack prototip sonrasi surum yol haritasina gore eklenmelidir. RPG ekonomisi ve ekipman sistemi eklenmemelidir.

## 10. Kabul Kriterleri ve Test Listesi

- Ayni tanima sahip farkli cevapli sorular birbirini ezmez.
- Secilen sorunun ana cevabi dogru kabul edilir; diger oyunlara ait alternatif cevap alani kullanilmaz.
- Secili sinif/unite/kategorideki soru sayisi dogru gorunur.
- Bir kosuda ayni soru tekrar etmez.
- Dogru, yanlis, timeout, harf alma, Turkce ipucu ve joker skoru dogru hesaplar.
- Streak dogru artar ve yanlista sifirlanir.
- Cark etkileri bir sonraki soruya veya belirtilen kapsama dogru uygulanir.
- Save ortasinda kapatilan oyun ayni LEVEL ve state ile devam eder.
- Bozuk veya eski save oyunu kilitlemez.
- LEVEL basarisizliginda aktif LEVEL kaydi temizlenir, kalici ilerleme korunur.
- Mobil ve masaustu ekranlarda klavye, HUD ve modallar tasmaz.
- Muzik acma/kapama, muzik ses seviyesi ve lite mode ayarlari calisir.

## 11. Son Karar

Word Overlord projesinin en dogru ilk adimi Word Master fork'unu olusturmak ve mevcut soru motorunu ID tabanli hale getirmektir. Bu tamamlandiginda mevcut ipucu ekonomisi, yazili cevap sistemi ve sans carki cok az kayipla guclu bir solo oyuna donusebilir.

Tavsiye edilen implementasyon sirasi:

1. Soru/veri motorunu saglamlastir.
2. Classroom state'ini fork'tan kaldir ve Mastery Run state'ini kur.
3. Mastery Run MVP'yi kur.
4. Save/load ve kalici ilerlemeyi ekle.
5. Carki streak'e bagla ve tekrar oynanabilir modlari ekle.
