import { motion } from "framer-motion";
import { carouselTools } from "@/data/techStack";

const LogoRow = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <>
    {carouselTools.map((tool) => (      <div
        key={`${tool.name}-${ariaHidden ? "dup" : "orig"}`}
        className="flex items-center gap-3 shrink-0 px-5 md:px-7"
        aria-hidden={ariaHidden}
      >
        <img
          src={tool.icon}
          alt={ariaHidden ? undefined : tool.name}
          className="h-5 md:h-6 w-auto object-contain opacity-35 dark:opacity-45 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          loading="lazy"
        />
        <span className="text-sm md:text-[15px] font-semibold text-foreground/45 tracking-tight whitespace-nowrap">
          {tool.name}
        </span>
      </div>
    ))}
  </>
);

const scrollToSystems = () => {
  document.getElementById("systems")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const TechStackCarouselBar = () => {
  return (
    <div
      id="tech-stack"
      className="relative border-b border-border/50 py-7 md:py-8 overflow-hidden bg-card"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8 px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0 md:max-w-[280px]">
          <p className="text-sm md:text-[15px] text-muted-foreground leading-snug text-center sm:text-left">
            <span className="font-semibold text-foreground">20+ tools</span> I use to ship
            production-ready products
          </p>
          <button
            type="button"
            onClick={scrollToSystems}
            className="inline-flex items-center justify-center gap-2 self-center sm:self-auto rounded-full border border-brand-orange/40 bg-brand-orange/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
          >
            Systems
            <span className="text-[10px] opacity-70">→</span>
          </button>
        </div>

        <div className="relative flex-1 overflow-hidden min-w-0">
          <div className="absolute inset-y-0 left-0 w-10 md:w-16 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-10 md:w-16 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <LogoRow />
            <LogoRow ariaHidden />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStackCarouselBar;
