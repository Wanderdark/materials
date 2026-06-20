(function () {
  const COMPACT_PATTERNS = [
    "FUCK", "SHIT", "BITCH", "CUNT", "COCK", "DICK", "PUSSY", "NIGGER", "FAGGOT",
    "WHORE", "SLUT", "PORN", "NUDE", "NAKED", "PENIS", "VAGINA", "RAPE", "BOOB", "TITS",
    "TWAT", "PRICK", "RETARD", "HORNY", "MILF", "OROSPU",
    "YARRAK", "SIKIM", "SIKERIM", "SIKTIM", "SIKTIR", "AMK", "AMINA", "AMCIK", "AMINAK",
    "AMINAKOY", "AMINAKOYIM", "AMBITI", "AMYALAMA", "AMYALA", "AMGOT", "GAVAT",
    "KAHPE", "KALTAK", "FAHISE", "PEZEVENK", "SEREFSIZ", "DALYARAK", "SAKSO",
    "YALAMA", "IBNE", "ANANI", "ANASINI", "OTUZBIR", "BLOWJOB", "HANDJOB",
    "MOTHERFUCKER", "MOTHERFUCK", "MFKR", "SONOFABITCH", "CUMSHOT", "ASSHOLE",
    "JACKASS", "WANKER", "DOUCHE", "DOUCHEBAG", "BASTARD", "HENTAI", "BDSM",
    "ERECT", "BONER", "OROSPUCOCUGU", "OROSB", "YARRAM", "YARRAGIM", "SIKTIRGI",
    "AMKK", "AMQ", "AQQ", "GOTVEREN", "GOTLEK", "GOTOGLANI", "GOTLALESI", "GOTU",
    "GOTUNU", "AMCIGI", "BOKTAN", "SAKSOCU", "DOSEK", "SURUK", "FUHUS", "PEZO",
    "SRFSZ", "AVRADINI", "AVRAD", "YAVSAK", "PICKURUSU", "YOSMA", "ZINA", "DURZU",
    "DALLAMA", "KEZBAN"
  ];

  // Short forms are only blocked when they are their own token.
  const EXACT_TOKENS = new Set([
    "AM", "OC", "AQ", "MK", "SG", "AMK", "SIK", "BOK", "SEX", "ASS", "FAG",
    "CUM", "BJ", "HJ", "MF", "MQ", "SOB", "XXX", "TOP", "GOT", "PIC", "MEME"
  ]);
  const BLOCKED_TOKEN_PREFIXES = ["SIK"];

  const PLAYER_TEXT = /^[A-Za-z \-'\u00C7\u00E7\u011E\u011F\u0130\u0131\u00D6\u00F6\u015E\u015F\u00DC\u00FC]+$/u;
  const SCHOOL_TEXT = /^[A-Za-z0-9 .,&()\-'\u00C7\u00E7\u011E\u011F\u0130\u0131\u00D6\u00F6\u015E\u015F\u00DC\u00FC]+$/u;

  const CONFUSABLES = {
    "\u0410": "A", "\u0412": "B", "\u0421": "C", "\u0415": "E", "\u041D": "H",
    "\u0406": "I", "\u041A": "K", "\u041C": "M", "\u041E": "O", "\u0420": "P",
    "\u0422": "T", "\u0425": "X", "\u0423": "Y",
    "\u0391": "A", "\u0392": "B", "\u0395": "E", "\u0397": "H", "\u0399": "I",
    "\u039A": "K", "\u039C": "M", "\u039D": "N", "\u039F": "O", "\u03A1": "P",
    "\u03A4": "T", "\u03A5": "Y", "\u03A7": "X"
  };

  function isBlocked(raw) {
    const spaced = normalize(raw, true);
    const compact = normalize(raw, false);
    const collapsed = compact.replace(/([A-Z])\1+/g, "$1");
    const tokens = spaced.split(" ").filter(Boolean);

    return COMPACT_PATTERNS.some((pattern) => (
      compact.includes(pattern) || collapsed.includes(pattern)
    )) || tokens.some((token) => (
      EXACT_TOKENS.has(token) ||
      BLOCKED_TOKEN_PREFIXES.some((prefix) => token.startsWith(prefix) && token.length > prefix.length)
    ));
  }

  function validate(raw, options = {}) {
    const value = String(raw || "").trim();
    const maxLength = Number(options.maxLength) || 0;
    const allowedCharacters = options.kind === "school" ? SCHOOL_TEXT : PLAYER_TEXT;

    if (!value) return { valid: false, reason: "empty" };
    if (maxLength && [...value].length > maxLength) return { valid: false, reason: "too_long" };
    if (!allowedCharacters.test(value)) return { valid: false, reason: "invalid_characters" };
    if (isBlocked(value)) return { valid: false, reason: "inappropriate" };
    return { valid: true, reason: null };
  }

  function normalize(raw, keepSpaces) {
    const value = foldConfusables(String(raw || "")
      .toUpperCase()
      // Support text that was previously decoded with an incorrect character set.
      .replace(/\u00C4\u00B0/g, "I")
      .replace(/\u00C5\u009E/g, "S")
      .replace(/\u00C4\u009E/g, "G")
      .replace(/\u00C3\u009C/g, "U")
      .replace(/\u00C3\u0096/g, "O")
      .replace(/\u00C3\u0087/g, "C")
      .normalize("NFKD")
      .replace(/[\u0300-\u036F]/g, "")
      .replace(/\u0131/g, "I")
      .replace(/4/g, "A")
      .replace(/3/g, "E")
      .replace(/0/g, "O")
      .replace(/1/g, "I")
      .replace(/5/g, "S")
      .replace(/7/g, "T")
      .replace(/\$/g, "S")
      .replace(/@/g, "A"));

    return keepSpaces
      ? value.replace(/[^A-Z]+/g, " ").trim()
      : value.replace(/[^A-Z]/g, "");
  }

  function foldConfusables(value) {
    return value.replace(/[\u0410\u0412\u0421\u0415\u041D\u0406\u041A\u041C\u041E\u0420\u0422\u0425\u0423\u0391\u0392\u0395\u0397\u0399\u039A\u039C\u039D\u039F\u03A1\u03A4\u03A5\u03A7]/g, (char) => CONFUSABLES[char] || char);
  }

  window.ProfanityFilter = {
    isBlocked,
    normalize,
    validate
  };
})();
