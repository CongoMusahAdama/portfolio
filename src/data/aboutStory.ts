export type AboutSection = {
  label: string;
  text: string;
  highlights?: string[];
};

/** On-page copy — casual, scannable */
export const aboutSections: AboutSection[] = [
  {
    label: "Hey",
    text: "I'm Congo Musah Adama, a software engineer based in Takoradi, Ghana. I build software systems and products that actually matter here and across Africa.",
  },
  {
    label: "How it started",
    text: "2020 — joined a masquerade club, got into a WordPress training, built my first site. That was the moment. Ideas turning into something real on the internet just clicked for me.",
  },
  {
    label: "University days",
    text: "Went to the University of Energy and Natural Resources (UENR) for Agricultural Science & Technology while doing remote dev on the side. Agriculture plus tech shaped how I think about real problems in emerging markets.",
    highlights: ["Agricultural Science & Technology"],
  },
  {
    label: "What I do now",
    text: "Software engineer with a strong focus on system design — scalable architectures, RESTful APIs, and reliable distributed systems. During my national service I sharpened my product mindset working closely with founders. Now I'm going deep on machine learning — building models that predict, decide, and improve over time.",
    highlights: [
      "system design",
      "RESTful APIs",
      "product mindset",
      "machine learning",
    ],
  },
];

/**
 * Spoken intro for ElevenLabs — like talking to a friend, not reading a bio.
 */
export const aboutSpeechScript = `Hey! I'm Congo Musah Adama.

I'm a software engineer based in Takoradi, Ghana. I build software systems and products that actually matter — here at home and across Africa.

So, how did I get into this? Back in 2020, I joined a masquerade club. They organised a WordPress training, and I built my first website. Honestly? That was the moment for me. Watching an idea become something real on the internet — I was hooked.

I studied Agricultural Science and Technology at the University of Energy and Natural Resources — UENR — but I kept taking remote dev work on the side. Mixing agriculture with tech really changed how I see problems — especially in Ghana and other emerging markets.

I've worked with teams here and abroad — RESTful backends, Agile, shipping with distributed crews. Went full-time into software in 2022.

During my national service, I worked closely with founders and teams shipping real products. That's where my product mindset really clicked — clarity, collaboration, building stuff people actually use.

These days I'm focused on system design — scalable architectures, secure software systems, and how all the pieces fit together. And I'm going deep on machine learning — teaching systems to predict, decide, and improve over time.

That's a bit of my story. Bottom line? Just build something.`;

export const highlightAboutText = (
  text: string,
  highlights: string[] = [],
): Array<{ text: string; highlight: boolean }> => {
  if (!highlights.length) return [{ text, highlight: false }];

  const pattern = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "g",
  );

  return text.split(pattern).map((part) => ({
    text: part,
    highlight: highlights.includes(part),
  }));
};
