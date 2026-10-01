import { motion } from "framer-motion";
import { carouselTools } from "@/data/techStack";

const LogoRow = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
  <>
    {carouselTools.map((tool) => (
      <div
        key={`${tool.name}-${ariaHidden ? "dup" : "orig"}`}
        className="flex shrink-0 items-center gap-2.5 border-r border-ink/10 px-5 md:px-7"
        aria-hidden={ariaHidden}
      >
        <img
          src={tool.icon}
          alt={ariaHidden ? undefined : tool.name}
          className="h-5 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 dark:invert-[0.15]"
          loading="lazy"
        />
        <span className="whitespace-nowrap font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">
          {tool.name}
        </span>
      </div>
    ))}
  </>
);

export const TechStackCarouselBar = () => {
  return (
    <div id="tech-stack" className="relative flex items-stretch overflow-hidden border-y border-ink/10 bg-paper">
      <p className="relative z-10 hidden shrink-0 items-center gap-2 border-r border-ink/10 bg-c-yellow px-5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-on-color sm:flex">
        20+ tools I ship with
      </p>
      <div className="relative min-w-0 flex-1 overflow-hidden py-4">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <LogoRow />
          <LogoRow ariaHidden />
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackCarouselBar;
