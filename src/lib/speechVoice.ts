/** Prefer a young male English voice — Ghana first, then similar en voices. */
export const pickYoungGhanaianVoice = (): SpeechSynthesisVoice | null => {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const isFemale = (name: string) =>
    /female|zira|samantha|victoria|hazel|susan|linda|aria|jenny|sonia|libby|fiona|karen|moira|veena|heera|priya|nancy|michelle|emma|amy|sara/i.test(
      name,
    );

  const isElderly = (name: string) =>
    /david|george|mark|fred|arthur|ralph|martin|albert|tom\b|stephen|paul|richard|brian|john\b|harry|william|roger|walter|elder|senior|grandpa|grandfather|uk english male|english \(uk\)|microsoft david|microsoft george|microsoft mark|google uk english male|daniel\b|alex\b|lee\b|bruce|derek|colin|peter|simon|nigel|gordon|kenneth|frank|edward|philip|timothy|ronald|donald|raymond|lawrence|harold|eugene|bobby|willie|joe\b|jim\b|jack\b|bob\b|barry|terry|keith|graham|mature/i.test(
      name,
    );

  const scoreVoice = (voice: SpeechSynthesisVoice): number => {
    if (isFemale(voice.name) || isElderly(voice.name)) return -1;

    let score = 0;
    const { lang, name } = voice;

    if (lang === "en-GH") score += 100;
    else if (lang.startsWith("en-GH")) score += 90;
    else if (/ghana/i.test(name)) score += 85;
    else if (lang === "en-NG") score += 70;
    else if (lang.startsWith("en-NG")) score += 65;
    else if (/nigeria|african|west africa/i.test(name)) score += 60;

    if (
      /guy|ryan|aaron|andrew|christopher|eric|steven|tony|jason|justin|brandon|kevin|mason|liam|noah|ethan|jacob|michael.*online|microsoft.*guy|microsoft.*ryan|microsoft.*aaron|google.*standard.*[bcd]|en-us.*standard.*[bcd]|en-gb.*standard.*[bcd]|young|natural|neural.*2|neural2|wavenet.*[bcd]/i.test(
        name,
      )
    ) {
      score += 40;
    }

    if (lang.startsWith("en-GB")) score += 15;
    if (lang.startsWith("en-US")) score += 10;
    if (lang.startsWith("en")) score += 5;

    if (/neural|natural|online|premium|enhanced|wavenet/i.test(name)) score += 8;

    return score;
  };

  const ranked = voices
    .map((voice) => ({ voice, score: scoreVoice(voice) }))
    .filter(({ score }) => score >= 0)
    .sort((a, b) => b.score - a.score);

  return ranked[0]?.voice ?? null;
};

export const configureYoungMaleUtterance = (
  utterance: SpeechSynthesisUtterance,
): void => {
  const voice = pickYoungGhanaianVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang.startsWith("en") ? voice.lang : "en-GH";
  } else {
    utterance.lang = "en-GH";
  }
  utterance.pitch = 1.22;
  utterance.rate = 1.02;
};

export const speakWhenVoicesReady = (speak: () => void): void => {
  if (window.speechSynthesis.getVoices().length > 0) {
    speak();
    return;
  }

  const onVoicesChanged = () => {
    window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
    speak();
  };

  window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged);
};
