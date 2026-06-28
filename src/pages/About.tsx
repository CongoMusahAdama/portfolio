import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AwardsSection from "@/components/AwardsSection";
import { aboutSections, highlightAboutText } from "@/data/aboutStory";

const sectionLabel = "font-mono text-xs text-muted-foreground";
const bodyText = "text-sm leading-relaxed text-foreground/80";

const About = () => {
  const profileImage = "/lovable-uploads/profile.jpeg";

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />

      <main className="mx-auto w-full max-w-[800px] px-5 pb-12 pt-[max(6.5rem,calc(env(safe-area-inset-top)+5rem))] sm:px-8 sm:pb-16 sm:pt-32">
        <section id="about">
          <p className={sectionLabel}>About · My story</p>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
            <figure className="mx-auto shrink-0 sm:mx-0 sm:sticky sm:top-28">
              <img
                src={profileImage}
                alt="Congo Musah Adama"
                className="h-28 w-28 rounded-full object-cover object-[center_12%] ring-1 ring-border/50 sm:h-32 sm:w-32"
              />
            </figure>

            <dl className={`min-w-0 flex-1 space-y-5 ${bodyText}`}>
              {aboutSections.map((section) => (
                <div key={section.label} className="space-y-1">
                  <dt className={sectionLabel}>{section.label}</dt>
                  <dd>
                    {highlightAboutText(section.text, section.highlights).map((part, index) =>
                      part.highlight ? (
                        <span key={index} className="text-brand-orange">
                          {part.text}
                        </span>
                      ) : (
                        <span key={index}>{part.text}</span>
                      ),
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <AwardsSection />

        <div className="mt-10 max-w-xl space-y-3 border-t border-border pt-8">
          <p className={sectionLabel}>On excellence</p>

          <blockquote className={`border-l-2 border-brand-orange/50 pl-3 ${bodyText}`}>
            <p className="italic text-foreground/70">
              &ldquo;If a man is called to be a street sweeper, he should sweep streets even as
              Michelangelo painted… He should sweep streets so well that all the hosts of heaven
              and earth will pause to say, here lived a great street sweeper who did his job
              well.&rdquo;
            </p>
            <footer className="mt-2 font-mono text-[11px] text-muted-foreground">
              — Martin Luther King Jr.
            </footer>
          </blockquote>

          <p className={bodyText}>
            That&apos;s the standard I hold myself to — in engineering and everything else.{" "}
            <span className="text-foreground">Just build something.</span>
          </p>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
