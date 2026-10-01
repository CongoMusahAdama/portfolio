export type AboutSection = {
  label: string;
  text: string;
  highlights?: string[];
};

/** On-page copy — casual, scannable */
export const aboutSections: AboutSection[] = [
  {
    label: "Hey",
    text: "I spend my days on system architecture and infrastructure design — using engineering as a tool to build products across agritech, fintech, edtech, and logistics. These are environments where reliability, security, and scale aren't optional. My role is to turn complex requirements into architecture that is resilient, maintainable, and built to grow — so the product simply works.",
  },
  {
    label: "How it started",
    text: "2020 — joined a masquerade club, got into a WordPress training, built my first site. That was the moment. Ideas turning into something real on the internet just clicked for me, and I've been shipping ever since.",
  },
  {
    label: "How I work",
    text: "I've shipped as a team of one and alongside founders and bigger teams, for clients in Ghana and abroad. I've had clean specs, and I've had requirements change mid-build. I've worked inside legacy systems and built platforms from scratch. What stays consistent is asking good questions, thinking through the failure modes, and shipping things that hold up.",
    highlights: ["asking good questions", "thinking through the failure modes", "shipping things that hold up"],
  },
  {
    label: "What I do now",
    text: "Day to day that means system design — scalable architectures, RESTful APIs, and reliable backends — paired with a product mindset that comes from building closely with founders. Now I'm going deep on machine learning — building models that predict, decide, and improve over time.",
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
export const aboutSpeechScript = `Hey! I'm Congo Musah Adams.

I'm a software engineer based in Takoradi, Ghana. I build software systems and products that actually matter — here at home and across Africa.

So, how did I get into this? Back in 2020, I joined a masquerade club. They organised a WordPress training, and I built my first website. Honestly? That was the moment for me. Watching an idea become something real on the internet — I was hooked.

These days I focus on system architecture and infrastructure design, using engineering as a tool to build products across agritech, fintech, edtech, and logistics. My role is to turn complex requirements into architecture that is resilient, maintainable, and built to grow.

I've shipped as a team of one and alongside founders and bigger teams, here and abroad. Clean specs, changing requirements, legacy systems, greenfield builds — what stays the same is asking good questions, thinking through what can break, and shipping things that hold up.

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
