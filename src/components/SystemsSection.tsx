import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  buildSystemRows,
  fetchGitHubLanguages,
} from "@/data/techStack";

const SystemsSection = () => {
  const { data: githubLanguages, isLoading } = useQuery({
    queryKey: ["github-languages"],
    queryFn: fetchGitHubLanguages,
    staleTime: 1000 * 60 * 60,
  });

  const systemRows = useMemo(
    () => buildSystemRows(githubLanguages ?? []),
    [githubLanguages]
  );

  return (
    <section
      id="systems"
      className="py-16 md:py-28 bg-background text-foreground border-t border-border/40 scroll-mt-24"
    >
      <div className="container mx-auto px-5 sm:px-6 md:px-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight">
            <span className="text-muted-foreground">02</span>
            <span className="text-brand-orange mx-2 md:mx-3">/</span>
            <span className="text-foreground">Systems</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
            {isLoading
              ? "Loading your stack from GitHub…"
              : "Languages and tools I use day to day — synced with my GitHub repos where available."}
          </p>
        </motion.div>

        <div className="border-t border-border/50">
          {systemRows.map((row, index) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-1 md:grid-cols-[minmax(140px,200px)_1fr] gap-3 md:gap-10 py-8 md:py-10 border-b border-border/50"
            >
              <span className="text-sm md:text-base text-muted-foreground font-mono tracking-wide">
                {row.label}
              </span>
              <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                {row.items.join(", ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemsSection;
