import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { CornerHandles, Squiggle } from "@/components/canvas/Canvas";

const rise = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const socials = [
  { label: "Email amusahcongo@gmail.com", href: "mailto:amusahcongo@gmail.com", Icon: Mail },
  { label: "GitHub", href: "https://github.com/CongoMusahAdama", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/", Icon: Linkedin },
  { label: "Twitter", href: "https://twitter.com/1real_vee", Icon: Twitter },
];

const scrollToProjects = () =>
  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });

const HeroSection = () => {
  return (
    <section id="hero" className="relative px-5 pb-8 pt-10 sm:px-8 sm:pb-14 md:pb-28 md:pt-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
          className="relative z-10 flex min-w-0 flex-col items-start"
        >
          <motion.div variants={rise} className="mb-5 flex flex-col items-start text-ink">
            <p className="font-hand text-2xl leading-none sm:text-3xl">hi, my name is congo</p>
            <Squiggle className="mt-1 text-c-pink" />
          </motion.div>

          <motion.div variants={rise} className="relative mb-8 mt-2 max-w-full">
            <span className="absolute -top-8 right-2 z-20 -rotate-6 bg-c-yellow px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-on-color shadow-[2px_2px_0_rgba(20,20,20,0.85)] sm:-right-6">
              Product builder
            </span>
            <div className="group relative px-4 py-4 transition-colors duration-300 hover:bg-ink sm:px-6 sm:py-5"
              style={{ boxShadow: "0 0 0 1px #5fbee6" }}
            >
              <CornerHandles color="#5fbee6" />
              <h1 className="flex flex-col items-start font-pixel font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-canvas">
                <span className="block text-[clamp(2rem,10.4vw,2.6rem)] leading-[1] sm:text-[2.75rem] md:text-7xl lg:hidden">
                  Building <span className="text-brand-orange">Digital</span>
                </span>
                <span className="mt-1 block text-[clamp(2rem,10.4vw,2.6rem)] leading-[1] sm:text-[2.75rem] md:mt-2 md:text-7xl lg:hidden">
                  Products That
                </span>
                <span className="mt-1 block text-[clamp(2rem,10.4vw,2.6rem)] leading-[1] sm:text-[2.75rem] md:mt-2 md:text-7xl lg:hidden">
                  Matter
                </span>

                <span className="hidden whitespace-nowrap text-6xl leading-none lg:block xl:text-7xl">
                  Building <span className="text-brand-orange">Digital</span>
                </span>
                <span className="mt-3 hidden whitespace-nowrap text-5xl leading-none lg:block xl:text-6xl">
                  Products That Matter
                </span>
              </h1>
            </div>
            <span className="absolute -bottom-5 left-4 z-20 rotate-3 bg-c-pink px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-[2px_2px_0_rgba(20,20,20,0.85)]">
              Machine learning
            </span>
          </motion.div>

          <motion.p
            variants={rise}
            className="mb-4 mt-4 flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink/70"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-c-blue" />
            Software Engineer &amp; Machine Learning · Ghana
          </motion.p>

          <motion.p variants={rise} className="max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
            Congo Musah Adams — A Product Builder who uses{" "}
            <span className="bg-c-cream px-1 font-semibold text-on-color">engineering</span> as a tool to create
            impactful digital solutions.
          </motion.p>

          <motion.div variants={rise} className="mt-8 grid w-full grid-cols-2 gap-3 sm:mt-9 sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-4">
            <button
              type="button"
              onClick={scrollToProjects}
              className="group relative inline-flex min-h-[52px] items-center justify-between gap-2 bg-on-color py-2 pl-3.5 pr-2 text-white dark:bg-ink dark:text-canvas sm:justify-start sm:gap-4 sm:pl-3"
            >
              <span className="hidden h-4 w-4 shrink-0 bg-c-pink sm:block" />
              <span className="whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-[0.1em] sm:text-sm sm:tracking-[0.14em]">
                View projects
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-start overflow-hidden rounded-full bg-c-blue text-on-color sm:h-9 sm:w-9">
                <span className="flex w-[200%] shrink-0 animate-arrow-through">
                  <ArrowUpRight className="mx-[10px] h-4 w-4 rotate-45" />
                  <ArrowUpRight className="mx-[10px] h-4 w-4 rotate-45" />
                </span>
              </span>
              <span className="pointer-events-none opacity-0 transition-opacity group-hover:opacity-100">
                <CornerHandles color="#5fbee6" size={9} />
              </span>
            </button>

            <a
              href="https://flowcv.com/resume/wtaak1n6a414"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center whitespace-nowrap border-2 border-ink px-3 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-ink transition-colors hover:bg-ink hover:text-canvas sm:px-6 sm:text-sm sm:tracking-[0.14em]"
            >
              Download CV
            </a>

            <div className="col-span-2 mt-1 flex items-center gap-2 sm:ml-2 sm:mt-0">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-c-cream hover:text-on-color"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="relative mx-auto mt-10 w-[210px] sm:mt-0 sm:w-[250px] lg:mx-0 lg:mr-6 lg:w-[290px]"
        >
          <img
            src="/uploads/profilelove-transparent.png"
            alt="Congo Musah Adams"
            className="block h-auto w-full object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
