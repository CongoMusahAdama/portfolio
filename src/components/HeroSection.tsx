import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[min(90dvh,900px)] bg-background flex flex-col pt-[max(5.5rem,calc(env(safe-area-inset-top)+4.5rem))] md:pt-32 overflow-hidden"
    >
      {/* Background Vertical Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="container mx-auto h-full px-6 flex justify-between">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-foreground" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10 flex-1 flex flex-col justify-center pb-10 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Content (Text) - First on mobile */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            className="lg:col-span-7 order-1 lg:order-1 flex flex-col gap-6 md:gap-8 relative z-10 min-w-0"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-2 max-w-full"
            >
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-brand-orange leading-snug">
                    Software Engineer & Machine Learning
                  </span>
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-brand-orange shrink-0" />
                </div>
                <div className="h-[1px] w-full bg-brand-orange/30 mt-1" />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl min-w-0 lg:pr-2"
            >
              {/* Curly arrow — outside text flow so lines stay aligned */}
              <div className="absolute -left-24 md:-left-40 top-[38%] hidden md:block select-none pointer-events-none w-24 md:w-32 h-24 md:h-32 -translate-y-1/2">
                <svg
                  viewBox="0 0 115 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-brand-orange w-full h-full opacity-90"
                >
                  <path
                    d="M5 85 C 15 95 35 90 45 70 C 50 45 35 30 25 50 C 15 70 45 95 75 90 C 95 85 105 65 108 45"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M98 58 L 108 45 L 115 55"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>

              <h1 className="flex flex-col items-start text-left font-display font-black tracking-tight text-foreground w-full max-w-full min-w-0">
                {/* Mobile: original 3-line layout */}
                <span className="block text-[clamp(1.75rem,8.5vw,2.15rem)] leading-[0.95] sm:text-[2.75rem] md:text-7xl md:leading-none lg:hidden">
                  Building{" "}
                  <span className="text-brand-orange">Digital</span>
                </span>
                <span className="block text-[clamp(1.75rem,8.5vw,2.15rem)] leading-[0.95] sm:text-[2.75rem] md:text-7xl mt-1 md:mt-2 md:leading-none lg:hidden">
                  Products That
                </span>
                <span className="block text-[clamp(1.75rem,8.5vw,2.15rem)] leading-[0.95] sm:text-[2.75rem] md:text-7xl mt-1 md:mt-2 md:leading-none lg:hidden">
                  Matter
                </span>

                {/* Desktop: 2 lines, orange Digital, smaller line 2 to avoid image overlap */}
                <span className="hidden lg:block whitespace-nowrap text-6xl xl:text-7xl 2xl:text-8xl leading-none">
                  Building{" "}
                  <span className="text-brand-orange">Digital</span>
                </span>
                <span className="hidden lg:block whitespace-nowrap text-5xl xl:text-6xl 2xl:text-7xl mt-2 leading-none">
                  Products That Matter
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed text-left"
            >
              Congo Musah Adama — A Product Builder who uses{" "}
              <span className="text-foreground font-semibold">engineering</span>{" "}
              as a tool to create impactful digital solutions.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2 md:pt-4"
            >
              <Button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full sm:w-auto px-6 md:px-8 font-black min-h-[48px] py-4 md:py-7 bg-foreground text-background hover:bg-foreground/90 rounded-none uppercase text-[10px] md:text-xs tracking-widest transition-all"
              >
                View Projects
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 md:px-8 font-black min-h-[48px] py-4 md:py-7 border-2 border-foreground/20 hover:border-brand-orange hover:text-brand-orange rounded-none uppercase text-[10px] md:text-xs tracking-widest transition-all gap-2"
                asChild
              >
                <a
                  href="https://flowcv.com/resume/wtaak1n6a414"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </Button>
              <div className="flex items-center justify-center sm:justify-start gap-5 px-0 pt-2 sm:pt-0 sm:px-0 sm:mt-0 w-full sm:w-auto">
                <a
                  href="mailto:amusahcongo@gmail.com"
                  className="flex items-center justify-center min-h-[44px] min-w-[44px] text-foreground/40 hover:text-foreground transition-all group/mail"
                  aria-label="Email amusahcongo@gmail.com"
                >
                  <Mail className="w-5 h-5 group-hover/mail:text-brand-orange transition-colors" />
                </a>
                <a
                  href="https://github.com/CongoMusahAdama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center min-h-[44px] min-w-[44px] text-foreground/40 hover:text-foreground transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center min-h-[44px] min-w-[44px] text-foreground/40 hover:text-foreground transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/1real_vee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center min-h-[44px] min-w-[44px] text-foreground/40 hover:text-foreground transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content (Image) */}
          <div className="lg:col-span-5 order-2 lg:order-2 relative z-0 flex items-center justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 2.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.6,
              }}
              className="relative w-full max-w-[160px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] mx-auto lg:mx-0"
            >
              <img
                src="/lovable-uploads/profilelove-transparent.png"
                alt="Congo Musah Adama"
                className="w-full max-h-[320px] sm:max-h-[360px] md:max-h-[420px] lg:max-h-[460px] h-auto object-contain object-bottom transition-transform duration-700 md:hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
