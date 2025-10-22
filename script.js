


window.addEventListener('DOMContentLoaded', () => {
  const words = [
    { arabic: "أَبٌ", reading: "abun", uzbek: "ota" },
    { arabic: "أُمٌّ", reading: "ummun", uzbek: "ona" },
    { arabic: "أَخٌ", reading: "akhun", uzbek: "aka" },
    { arabic: "أُخْتٌ", reading: "ukhtun", uzbek: "opa" },
    { arabic: "وَلَدٌ", reading: "waladun", uzbek: "bola" },
    { arabic: "بِنْتٌ", reading: "bintun", uzbek: "qiz" },
    { arabic: "رَجُلٌ", reading: "rajulun", uzbek: "erkak" },
    { arabic: "اِمْرَأَةٌ", reading: "imra'atun", uzbek: "ayol" },
    { arabic: "صَدِيقٌ", reading: "sadiqun", uzbek: "do‘st" },
    { arabic: "مَدْرَسَةٌ", reading: "madrasatun", uzbek: "maktab" },
    { arabic: "كِتَابٌ", reading: "kitabun", uzbek: "kitob" },
    { arabic: "قَلَمٌ", reading: "qalamun", uzbek: "qalam" },
    { arabic: "مَسْجِدٌ", reading: "masjidun", uzbek: "masjid" },
    { arabic: "سَيَّارَةٌ", reading: "sayyaratun", uzbek: "mashina" },
    { arabic: "بَيْتٌ", reading: "baytun", uzbek: "uy" },
    { arabic: "شُبَّاكٌ", reading: "shubbakun", uzbek: "deraza" },
    { arabic: "بَابٌ", reading: "babun", uzbek: "eshik" },
    { arabic: "كُرْسِيٌّ", reading: "kursiyyun", uzbek: "stul" },
    { arabic: "طَاوِلَةٌ", reading: "tawilatun", uzbek: "stol" },
    { arabic: "سَاعَةٌ", reading: "sa‘atun", uzbek: "soat" },
    { arabic: "مَاءٌ", reading: "ma'un", uzbek: "suv" },
    { arabic: "خُبْزٌ", reading: "khubzun", uzbek: "non" },
    { arabic: "لَبَنٌ", reading: "labanun", uzbek: "sut" },
    { arabic: "فَاكِهَةٌ", reading: "fakihatun", uzbek: "meva" },
    { arabic: "تُفَّاحٌ", reading: "tuffahun", uzbek: "olma" },
    { arabic: "بُرْتُقَالٌ", reading: "burtuqalun", uzbek: "apelsin" },
    { arabic: "مَوْزٌ", reading: "mawzun", uzbek: "banan" },
    { arabic: "خُضَرٌ", reading: "khudarun", uzbek: "sabzavot" },
    { arabic: "طَعَامٌ", reading: "ta‘amun", uzbek: "taom" },
    { arabic: "شَمْسٌ", reading: "shamsun", uzbek: "quyosh" },
    { arabic: "قَمَرٌ", reading: "qamarun", uzbek: "oy" },
    { arabic: "نَجْمٌ", reading: "najmun", uzbek: "yulduz" },
    { arabic: "سَمَاءٌ", reading: "sama'un", uzbek: "osmon" },
    { arabic: "أَرْضٌ", reading: "ardun", uzbek: "yer" },
    { arabic: "جَبَلٌ", reading: "jabalun", uzbek: "tog‘" },
    { arabic: "وَادِيٌ", reading: "wadiyun", uzbek: "vodiy" },
    { arabic: "بَحْرٌ", reading: "bahrun", uzbek: "dengiz" },
    { arabic: "نَهْرٌ", reading: "nahrun", uzbek: "daryo" },
    { arabic: "شَجَرَةٌ", reading: "shajaratun", uzbek: "daraxt" },
    { arabic: "وَرْدَةٌ", reading: "wardatun", uzbek: "gul" },
    { arabic: "حَيَوَانٌ", reading: "hayawanun", uzbek: "hayvon" },
    { arabic: "كَلْبٌ", reading: "kalbun", uzbek: "it" },
    { arabic: "قِطٌّ", reading: "qittun", uzbek: "mushuk" },
    { arabic: "حِمَارٌ", reading: "himarun", uzbek: "eshak" },
    { arabic: "بَقَرَةٌ", reading: "baqaratun", uzbek: "sigir" },
    { arabic: "خَنَازِيرٌ", reading: "khanazirun", uzbek: "cho‘chqa" },
    { arabic: "طِفْلٌ", reading: "tiflun", uzbek: "bola" },
    { arabic: "رَضِيعٌ", reading: "radi‘un", uzbek: "chaqaloq" },
    { arabic: "جَارٌ", reading: "jarun", uzbek: "qo‘shni" },
    { arabic: "جَارَةٌ", reading: "jaratun", uzbek: "qo‘shni ayol" },
    { arabic: "مَدِينَةٌ", reading: "madinatun", uzbek: "shahar" },
    { arabic: "قَرْيَةٌ", reading: "qaryatun", uzbek: "qishloq" },
    { arabic: "طَرِيقٌ", reading: "tariqun", uzbek: "yo‘l" },
    { arabic: "سُوقٌ", reading: "suqun", uzbek: "bozor" },
    { arabic: "مَطْعَمٌ", reading: "mat‘amun", uzbek: "restoran" },
    { arabic: "مَسْجِدٌ", reading: "masjidun", uzbek: "masjid" },
    { arabic: "كَنِيسَةٌ", reading: "kanisatun", uzbek: "chiroy" },
    { arabic: "مَسَافَةٌ", reading: "masafah", uzbek: "masofa" },
    { arabic: "سَيَّارَةٌ", reading: "sayyaratun", uzbek: "mashina" },
    { arabic: "دَرَّاجَةٌ", reading: "darrajatun", uzbek: "velosiped" },
    { arabic: "قِطَارٌ", reading: "qitarun", uzbek: "poezd" },
    { arabic: "طَائِرَةٌ", reading: "ta’iratun", uzbek: "samolyot" },
    { arabic: "سَفِينَةٌ", reading: "safeenatun", uzbek: "kema" },
    { arabic: "بَحَّارٌ", reading: "bahharun", uzbek: "suvchi" },
    { arabic: "قَارِبٌ", reading: "qaribun", uzbek: "qayiq" },
    { arabic: "جِسْمٌ", reading: "jismun", uzbek: "tan" },
    { arabic: "رَأْسٌ", reading: "ra’sun", uzbek: "bosh" },
    { arabic: "يَدٌ", reading: "yadun", uzbek: "qo‘l" },
    { arabic: "رِجْلٌ", reading: "rijlun", uzbek: "oyoq" },
    { arabic: "عَيْنٌ", reading: "‘aynun", uzbek: "ko‘z" },
    { arabic: "أُذُنٌ", reading: "udhun", uzbek: "quloq" },
    { arabic: "فَمٌ", reading: "famun", uzbek: "og‘iz" },
    { arabic: "أَنْفٌ", reading: "anfun", uzbek: "burun" },
    { arabic: "شَعْرٌ", reading: "sha‘run", uzbek: "soch" },
    { arabic: "وَجْهٌ", reading: "wajhun", uzbek: "yuz" },
    { arabic: "عَصِيرٌ", reading: "‘aseerun", uzbek: "sharbat" },
    { arabic: "قَهْوَةٌ", reading: "qahwahun", uzbek: "qahva" },
    { arabic: "شَايٌ", reading: "shayun", uzbek: "choy" },
    { arabic: "حَلِيبٌ", reading: "haleebun", uzbek: "sut" },
    { arabic: "سُكَّرٌ", reading: "sukkarun", uzbek: "shakar" },
    { arabic: "مِلْحٌ", reading: "milhun", uzbek: "tuz" },
    { arabic: "فِكْرٌ", reading: "fikrun", uzbek: "fikr" },
    { arabic: "قَلْبٌ", reading: "qalbun", uzbek: "yurak" },
    { arabic: "عَقْلٌ", reading: "‘aqlun", uzbek: "aql" },
    { arabic: "صَوْتٌ", reading: "sawtun", uzbek: "ovoz" },
    { arabic: "كَلِمَةٌ", reading: "kalimatun", uzbek: "so‘z" },
    { arabic: "جُمْلَةٌ", reading: "jumlatun", uzbek: "gap" },
    { arabic: "مُدَرِّسٌ", reading: "mudarrisun", uzbek: "o‘qituvchi" },
    { arabic: "طَالِبٌ", reading: "talibun", uzbek: "talaba" },
    { arabic: "مُعَلِّمٌ", reading: "mu‘allimun", uzbek: "ustoz" },
    { arabic: "مُدِيرٌ", reading: "mudirun", uzbek: "direktor" },
    { arabic: "مَرِيضٌ", reading: "maridun", uzbek: "kasal" },
    { arabic: "طَبِيبٌ", reading: "tabibun", uzbek: "shifokor" },
    { arabic: "مَسَافِرٌ", reading: "musafirun", uzbek: "sayohat qiluvchi" },
    { arabic: "سَائِقٌ", reading: "sa’iqun", uzbek: "haydovchi" },
    { arabic: "بَائِعٌ", reading: "ba’iqun", uzbek: "sotuvchi" },
    { arabic: "زَبُونٌ", reading: "zabunun", uzbek: "mijoz" },
    { arabic: "فَنٌّ", reading: "fannun", uzbek: "san‘at" },
    { arabic: "مَلِكٌ", reading: "malikun", uzbek: "shoh" },
    { arabic: "مَلِكَةٌ", reading: "malikatun", uzbek: "malika" },
    { arabic: "رَئِيسٌ", reading: "ra’eesun", uzbek: "ra‘is" },
    { arabic: "وَزِيرٌ", reading: "wazirun", uzbek: "vazir" },
    { arabic: "جُنْدِيٌّ", reading: "jundiyyun", uzbek: "askar" },
    { arabic: "حَرْبٌ", reading: "harbun", uzbek: "urush" },
    { arabic: "سَلَاحٌ", reading: "salahun", uzbek: "qurol" },
    { arabic: "سَلَامٌ", reading: "salamun", uzbek: "tinchlik" },
    { arabic: "حُبٌّ", reading: "hubbun", uzbek: "sevgi" },
    { arabic: "كَرِيمٌ", reading: "karimun", uzbek: "saxiy" },
    { arabic: "صَبُورٌ", reading: "saburun", uzbek: "sabrli" },
    { arabic: "سَعِيدٌ", reading: "sa‘eedun", uzbek: "baxtli" },
    { arabic: "حَزِينٌ", reading: "hazinun", uzbek: "xafa" },
    { arabic: "غَضْبَانٌ", reading: "ghadbanun", uzbek: "g‘azablangan" },
    { arabic: "جَاهِلٌ", reading: "jahilun", uzbek: "bilimsiz" },
    { arabic: "عَالِمٌ", reading: "‘alimun", uzbek: "bilimli" },
    { arabic: "سَرِيعٌ", reading: "sari‘un", uzbek: "tez" },
    { arabic: "بَطِيءٌ", reading: "bati’un", uzbek: "sekin" },
    { arabic: "كَبِيرٌ", reading: "kabirun", uzbek: "katta" },
    { arabic: "صَغِيرٌ", reading: "saghirun", uzbek: "kichik" },
    { arabic: "جَمِيلٌ", reading: "jamilun", uzbek: "chiroyli" },
    { arabic: "قَبِيحٌ", reading: "qabihun", uzbek: "yomon" },
    { arabic: "قَوِيٌّ", reading: "qawiyyun", uzbek: "kuchli" },
    { arabic: "ضَعِيفٌ", reading: "da‘ifun", uzbek: "zaif" },
    { arabic: "حَارٌّ", reading: "harrun", uzbek: "issiq" },
    { arabic: "بَارِدٌ", reading: "baridun", uzbek: "sovuq" },
    { arabic: "جَدِيدٌ", reading: "jadidun", uzbek: "yangi" },
    { arabic: "قَدِيمٌ", reading: "qadimun", uzbek: "eski" },
    { arabic: "نَعِيمٌ", reading: "na‘imun", uzbek: "yoqimli" },
    { arabic: "سَيِّئٌ", reading: "sayyi’un", uzbek: "yomon" },
    { arabic: "صَدِيقٌ", reading: "sadiqun", uzbek: "do‘st" },
    { arabic: "عَدُوٌّ", reading: "‘aduwwun", uzbek: "dushman" },
    { arabic: "وَقْتٌ", reading: "waqtun", uzbek: "vaqt" },
    { arabic: "يَوْمٌ", reading: "yawmun", uzbek: "kun" },
    { arabic: "لَيْلَةٌ", reading: "laylatun", uzbek: "kecha" },
    { arabic: "صَبَاحٌ", reading: "sabahun", uzbek: "ertalab" },
    { arabic: "مَسَاءٌ", reading: "masa’un", uzbek: "kechqurun" },
    { arabic: "شَهْرٌ", reading: "shahrun", uzbek: "oy" },
    { arabic: "سَنَةٌ", reading: "sanatun", uzbek: "yil" },
    { arabic: "مَوْسِمٌ", reading: "mawsimun", uzbek: "fasl" },
    { arabic: "رِجَالٌ", reading: "rijalun", uzbek: "erkaklar" },
    { arabic: "نِسَاءٌ", reading: "nisa’un", uzbek: "ayollar" },
    { arabic: "أَوْلَادٌ", reading: "awladun", uzbek: "bolalar" },
    { arabic: "أَصْدِقَاءٌ", reading: "asdiqa’un", uzbek: "do‘stlar" },
    { arabic: "أَهْلٌ", reading: "ahlun", uzbek: "oila" },
    { arabic: "مَسَافَةٌ", reading: "masafah", uzbek: "masofa" },
    { arabic: "مَطَرٌ", reading: "matarun", uzbek: "yomg‘ir" },
    { arabic: "ثَلْجٌ", reading: "thaljun", uzbek: "qor" },
    { arabic: "رِيحٌ", reading: "reehun", uzbek: "shamol" },
    { arabic: "سَمَكٌ", reading: "samakun", uzbek: "baliq" },
    { arabic: "طِيرٌ", reading: "tirun", uzbek: "qush" },
    { arabic: "حِصَانٌ", reading: "hisanun", uzbek: "ot" },
    { arabic: "جَمَلٌ", reading: "jamalun", uzbek: "tuya" },
    { arabic: "سَمَاءٌ", reading: "sama’un", uzbek: "osmon" },
    { arabic: "أَرْضٌ", reading: "ardun", uzbek: "yer" },
    { arabic: "نَارٌ", reading: "narun", uzbek: "olov" },
    { arabic: "مَكْتَبٌ", reading: "maktabun", uzbek: "stol" },
    { arabic: "كُرَّاسَةٌ", reading: "kurrasatun", uzbek: "daftar" },
    { arabic: "مِمْحَاةٌ", reading: "mimhatun", uzbek: "ochirg‘ich" },
    { arabic: "مِقَصٌّ", reading: "miqassun", uzbek: "qaychi" },
    { arabic: "قَلمٌ حِبْرٌ", reading: "qalamun hibrun", uzbek: "ruchka" },
    { arabic: "حِاسُوبٌ", reading: "hasubun", uzbek: "kompyuter" },
    { arabic: "هَاتِفٌ", reading: "hatifun", uzbek: "telefon" },
    { arabic: "هَاتِفٌ مَحْمُولٌ", reading: "hatifun mahmulun", uzbek: "mobil telefon" },
    { arabic: "تِلْفَازٌ", reading: "tilfazun", uzbek: "televizor" },
    { arabic: "رَادْيُو", reading: "radyu", uzbek: "radio" },
    { arabic: "سَاعَةُ اليَدِ", reading: "sa‘atu alyad", uzbek: "qo‘l soati" },
    { arabic: "كِيسٌ", reading: "kisun", uzbek: "sumka" },
    { arabic: "حِذَاءٌ", reading: "hiza’un", uzbek: "oyoq kiyim" },
    { arabic: "قُبَّعَةٌ", reading: "qub‘atun", uzbek: "shlyapa" },
    { arabic: "مِلَابِسٌ", reading: "milabisun", uzbek: "kiyimlar" },
    { arabic: "قَمِيصٌ", reading: "qamisun", uzbek: "ko‘ylak" },
    { arabic: "بِنْطَالٌ", reading: "bintalun", uzbek: "shalvar" },
    { arabic: "حِذَاءٌ", reading: "hiza’un", uzbek: "oyoq kiyim" },
    { arabic: "جَوْرَبٌ", reading: "jawrabun", uzbek: "paypoq" },
    { arabic: "قُفَّازٌ", reading: "quffazun", uzbek: "qo‘lqop" },
    { arabic: "مِعْطَفٌ", reading: "mi‘tafun", uzbek: "paltо" }
    ];


  let currentIndex = 0;
  let flipped = false;

  const front = document.getElementById("cardFront");
  const back = document.getElementById("cardBack");
  const flashcard = document.getElementById("flashcard");
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  function showWord(index) {
    front.textContent = words[index].arabic;
    back.textContent = words[index].reading + " — " + words[index].uzbek;
    flipped = false;
    flashcard.classList.remove("flipped");
  }

  function flipCard() {
    flipped = !flipped;
    flashcard.classList.toggle("flipped");
  }

  function nextWord() {
    currentIndex = (currentIndex + 1) % words.length;
    showWord(currentIndex);
  }

  function prevWord() {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
    showWord(currentIndex);
  }

  flashcard.addEventListener("click", flipCard);
  nextBtn.addEventListener("click", nextWord);
  prevBtn.addEventListener("click", prevWord);

  // Initialize first word
  showWord(currentIndex);
});
