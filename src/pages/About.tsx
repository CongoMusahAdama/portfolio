import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AwardsSection from "@/components/AwardsSection";
import { ColorTag, HandKicker, LabelTag, PixelHeading, SelectionBox, StickyNote } from "@/components/canvas/Canvas";
import { aboutSections, highlightAboutText } from "@/data/aboutStory";

const profileImage = "/assets/profile.png";

const engineeringTags = [
  { label: "Payment Infrastructure", bg: "#e3a92f", tile: true },
  { label: "Storefronts", bg: "#5fb57f" },
  { label: "Mobile Apps", bg: "#d8365d", fg: "#ffffff", tile: true },
  { label: "USSD", bg: "#5fbee6" },
  { label: "Websites", bg: "#efdca4" },
];

const storyCards = [
  { bg: "#b5ddf0", caption: "2020 — the spark" },
  { bg: "#f2bfcd", caption: "how i work" },
  { bg: "#a6d9bb", caption: "today" },
];

const HighlightedText = ({ text, highlights }: { text: string; highlights?: string[] }) => (
  <>
    {highlightAboutText(text, highlights).map((part, index) =>
      part.highlight ? (
        <mark key={index} className="bg-white/70 px-0.5 font-semibold text-on-color">
          {part.text}
        </mark>
      ) : (
        <span key={index}>{part.text}</span>
      ),
    )}
  </>
);

const About = () => {
  const [intro, ...story] = aboutSections;

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-8 md:pt-20">
        <div className="mb-16 flex flex-col items-center text-center md:mb-20">
          <HandKicker>nice to meet you</HandKicker>
          <PixelHeading as="h1" lines={["ABOUT"]} className="mt-3 text-[clamp(4rem,18vw,10rem)]" />
        </div>

        <section id="about" className="mb-20 md:mb-28">
          <LabelTag bg="#e3a92f">Main bio</LabelTag>
          <SelectionBox color="#e3a92f" fill="rgb(var(--paper-rgb))">
            <div className="grid grid-cols-1 items-center gap-12 p-6 sm:p-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-14 md:p-14">
              <div className="min-w-0">
                <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl">
                  I'm Congo{" "}
                  <img
                    src="/assets/profile-pill.jpg"
                    alt=""
                    className="inline-block h-[0.95em] w-[1.45em] rounded-full border-2 border-ink bg-white object-cover align-[-0.1em]"
                  />{" "}
                  — I build software that matters here and across Africa.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">{intro?.text}</p>

                <div className="mt-9">
                  <p className="text-xl font-semibold leading-snug tracking-tight text-ink md:text-2xl">
                    I don&apos;t just build —{" "}
                    <span className="font-hand text-[1.35em] leading-none text-brand-orange">I engineer</span> the
                    tool that matches your goals.
                  </p>
                  <div className="mt-5 flex max-w-xl flex-wrap gap-x-3 gap-y-3">
                    {engineeringTags.map((tag, index) => (
                      <motion.span
                        key={tag.label}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ColorTag {...tag} />
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-9 flex flex-wrap gap-5">
                  <StickyNote bg="#efdca4" rotate={-2} className="max-w-[230px]">
                    Based in Takoradi, Ghana — working with teams at home and abroad.
                  </StickyNote>
                  <StickyNote bg="#efdca4" rotate={1.5} className="max-w-[230px]">
                    Bottom line? <span className="font-hand text-2xl leading-none">Just build something.</span>
                  </StickyNote>
                </div>
              </div>

              <motion.figure
                initial={{ opacity: 0, rotate: 0, y: 20 }}
                whileInView={{ opacity: 1, rotate: 2, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto w-56 bg-white p-3 pb-10 shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:mx-0"
              >
                <img src={profileImage} alt="Congo Musah Adams" className="aspect-[4/5] w-full object-cover object-[center_12%]" />
                <figcaption className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                  <span className="rounded-full bg-on-color px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    Congo M. Adams
                  </span>
                  <span className="font-hand text-xl text-on-color">it's me</span>
                </figcaption>
              </motion.figure>
            </div>
          </SelectionBox>
        </section>

        <section className="mb-20 md:mb-28">
          <LabelTag bg="#d8365d" fg="#ffffff">
            My story
          </LabelTag>
          <SelectionBox color="#d8365d" fill="rgb(var(--paper-rgb))">
            <div className="flex flex-col gap-10 p-6 sm:p-10 md:gap-14 md:p-14">
              {story.map((section, index) => {
                const card = storyCards[index % storyCards.length];
                const right = index % 2 === 1;
                return (
                  <motion.div
                    key={section.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex flex-col gap-3 md:flex-row md:items-center md:gap-6 ${right ? "md:flex-row-reverse md:self-end" : ""}`}
                  >
                    <div
                      className="max-w-xl p-6 text-on-color md:p-8"
                      style={{ background: card.bg, transform: `rotate(${right ? 1 : -1}deg)` }}
                    >
                      <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.16em] opacity-70">
                        {String(index + 1).padStart(2, "0")} · {section.label}
                      </p>
                      <p className="text-base leading-relaxed md:text-lg">
                        <HighlightedText text={section.text} highlights={section.highlights} />
                      </p>
                    </div>
                    <p className={`font-hand text-2xl text-ink md:text-3xl ${right ? "md:text-right" : ""}`}>
                      {card.caption}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </SelectionBox>
        </section>

        <AwardsSection />

        <section className="mt-20 flex justify-center md:mt-28">
          <StickyNote bg="#efdca4" rotate={-1} className="max-w-2xl px-8 py-8 md:px-12 md:py-10">
            <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] opacity-60">On excellence</p>
            <blockquote className="text-lg leading-relaxed md:text-xl">
              &ldquo;If a man is called to be a street sweeper, he should sweep streets even as Michelangelo painted… He
              should sweep streets so well that all the hosts of heaven and earth will pause to say, here lived a great
              street sweeper who did his job well.&rdquo;
            </blockquote>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] opacity-60">— Martin Luther King Jr.</p>
            <p className="mt-6 border-t border-black/15 pt-5 text-base">
              That&apos;s the standard I hold myself to — in engineering and everything else.{" "}
              <span className="font-hand text-2xl">Just build something.</span>
            </p>
          </StickyNote>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
