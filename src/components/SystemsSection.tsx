import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { buildSystemRows, fetchGitHubLanguages } from "@/data/techStack";
import { TechStackCarouselBar } from "@/components/TechStackCarousel";
import { HandKicker, LabelTag, PixelHeading, SelectionBox } from "@/components/canvas/Canvas";

const SystemsSection = () => {
  const { data: githubLanguages, isLoading } = useQuery({
    queryKey: ["github-languages"],
    queryFn: fetchGitHubLanguages,
    staleTime: 1000 * 60 * 60,
  });

  const systemRows = useMemo(() => buildSystemRows(githubLanguages ?? []), [githubLanguages]);

  return (
    <section id="systems" className="scroll-mt-24 pb-20 pt-10 md:pb-28">
      <TechStackCarouselBar />

      <div className="mx-auto mt-16 w-full max-w-5xl px-5 sm:px-8 md:mt-24">
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <HandKicker>what i build with</HandKicker>
          <PixelHeading lines={["SYSTEMS"]} className="mt-3 text-[clamp(3rem,12vw,7rem)]" />
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink/70 md:text-base">
            {isLoading
              ? "Loading my stack from GitHub…"
              : "Languages and tools I use day to day — synced with my GitHub repos where available."}
          </p>
        </div>

        <LabelTag bg="#5fb57f">Stack</LabelTag>
        <SelectionBox color="#5fb57f" fill="rgb(var(--paper-rgb))">
          <dl className="divide-y divide-ink/10">
            {systemRows.map((row, index) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2.5 px-4 py-4 sm:flex-row sm:items-start sm:gap-6 sm:px-5 sm:py-5 md:px-8 md:py-6"
              >
                <dt className="shrink-0 pt-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink/50 sm:w-40">
                  {row.label}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {row.items.map((item) => (
                    <span
                      key={item}
                      className="border border-ink/25 bg-canvas px-2 py-0.5 text-[13px] font-medium text-ink sm:px-2.5 sm:py-1 sm:text-sm transition-colors hover:border-ink hover:bg-c-cream hover:text-on-color"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </motion.div>
            ))}
          </dl>
        </SelectionBox>
      </div>
    </section>
  );
};

export default SystemsSection;
