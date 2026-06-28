/** Prefer a young male English voice — Ghana first, then similar en voices. */
export const pickYoungGhanaianVoice = (): SpeechSynthesisVoice | null => {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  const isFemale = (name: string) =>
    /female|zira|samantha|victoria|hazel|susan|linda|aria|jenny|sonia|libby|fiona|karen|moira|veena/i.test(
      name,
    );

  const matchers: ((v: SpeechSynthesisVoice) => boolean)[] = [
    (v) => v.lang === "en-GH" && !isFemale(v.name),
    (v) => v.lang.startsWith("en-GH"),
    (v) => /ghana/i.test(v.name),
    (v) => v.lang === "en-NG" && !isFemale(v.name),
    (v) => v.lang.startsWith("en-NG"),
    (v) => /english.*male|male.*english|guy|ryan|david|james|thomas|oliver|daniel|mark|george|aaron|andrew/i.test(
      v.name,
    ) && v.lang.startsWith("en"),
    (v) => v.lang.startsWith("en-GB") && !isFemale(v.name),
    (v) => v.lang.startsWith("en-US") && !isFemale(v.name),
    (v) => v.lang.startsWith("en") && !isFemale(v.name),
  ];

  for (const match of matchers) {
    const voice = voices.find(match);
    if (voice) return voice;
  }

  return voices.find((v) => v.lang.startsWith("en")) ?? null;
};

export const configureYoungMaleUtterance = (
  utterance: SpeechSynthesisUtterance,
): void => {
  const voice = pickYoungGhanaianVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  } else {
    utterance.lang = "en-GH";
  }
  utterance.pitch = 1.12;
  utterance.rate = 0.96;
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
