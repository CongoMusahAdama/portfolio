import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CornerHandles, HandKicker, PixelHeading, StickyNote, UnderlineLink } from "@/components/canvas/Canvas";
import ProjectLightbox from "@/components/projects/ProjectLightbox";
import {
  getProjectKind,
  getProjectLiveUrl,
  getProjectStatus,
  projects,
  type Project,
} from "@/data/projects";

const FEATURED_COUNT = 6;

const folderThemes = [
  { bg: "#5fbee6", fg: "#141414", line: "#141414" },
  { bg: "#161616", fg: "#ffffff", line: "#ffffff" },
  { bg: "#e3a92f", fg: "#141414", line: "#141414" },
  { bg: "#a6d9bb", fg: "#141414", line: "#141414" },
  { bg: "#d8365d", fg: "#ffffff", line: "#ffffff" },
  { bg: "#efdca4", fg: "#141414", line: "#141414" },
];

const FolderCard = ({
  project,
  index,
  total,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  onOpen: () => void;
}) => {
  const theme = folderThemes[index % folderThemes.length];
  const liveUrl = getProjectLiveUrl(project);
  const status = getProjectStatus(project);
  const number = String(index + 1).padStart(2, "0");
  const tabLeft = total > 1 ? `calc((100% - var(--tab-w)) * ${index / (total - 1)})` : "0px";

  return (
    <div
      className="sticky top-[148px] mt-[44px] md:top-[176px] md:mt-[52px]"
      style={{ zIndex: index + 1 }}
    >
      <div
        className="folder-tab-mid absolute bottom-[calc(100%-1px)] flex h-[44px] w-[var(--tab-w)] items-center justify-center px-10 md:h-[52px]"
        style={{ left: tabLeft, background: theme.bg, color: theme.fg }}
      >
        <span className="truncate font-mono text-[11px] font-semibold uppercase tracking-[0.08em]">
          <span className="opacity-60">{number}</span> {project.title}
        </span>
      </div>

      <article
        className="group grid gap-6 px-5 py-6 shadow-[0_-8px_24px_-12px_rgba(0,0,0,0.25)] sm:px-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10 md:px-14 md:py-12"
        style={{ background: theme.bg, color: theme.fg }}
      >
        <div className="order-2 flex min-w-0 flex-col md:order-1 md:justify-center">
          <p className="mb-3 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] opacity-80 md:text-xs">
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ background: status === "Shipped" ? theme.line : "transparent", border: `1.5px solid ${theme.line}` }}
            />
            {getProjectKind(project)} · {status}
          </p>
          <h3 className="text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">{project.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed opacity-85 md:mt-5 md:line-clamp-4 md:text-base">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-8">
            {liveUrl && (
              <UnderlineLink href={liveUrl} color={theme.line}>
                View project ↗
              </UnderlineLink>
            )}
            <UnderlineLink href={project.githubUrl} color={theme.line} className="max-sm:hidden">
              Source ↗
            </UnderlineLink>
            <UnderlineLink onClick={onOpen} color={theme.line}>
              Case notes +
            </UnderlineLink>
          </div>

          <div className="mt-8 hidden flex-wrap gap-2 md:flex">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="folder-chip flex h-[46px] min-w-[88px] items-end px-3 pb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.1em]"
                style={{ background: theme.fg === "#ffffff" ? "rgba(255,255,255,0.14)" : "rgba(20,20,20,0.12)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="order-1 min-w-0 md:order-2">
          <button
            type="button"
            onClick={onOpen}
            aria-label={`Open ${project.title} case notes`}
            className="relative block h-[190px] w-full text-left sm:h-[260px] md:h-[min(440px,calc(100dvh-300px))]"
            style={{ boxShadow: `0 0 0 1px ${theme.line}` }}
          >
            <CornerHandles color={theme.line} fill={theme.bg} />
            <span
              className="absolute -top-px left-4 z-10 -translate-y-full px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em]"
              style={{ background: theme.line, color: theme.bg }}
            >
              {number}.jpg
            </span>
            <span className="block h-full w-full overflow-hidden bg-black/10">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </span>
            {project.mobileImage && (
              <span className="absolute -bottom-4 right-3 z-20 block w-[70px] rotate-[8deg] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-[-3deg] sm:w-[90px] md:-bottom-6 md:-right-5 md:w-[130px]">
                <span className="block overflow-hidden rounded-[14px] border-[4px] border-[#141414] bg-[#141414] shadow-[0_12px_30px_rgba(0,0,0,0.35)] md:rounded-[20px] md:border-[6px]">
                  <img
                    src={project.mobileImage}
                    alt={`${project.title} mobile`}
                    loading="lazy"
                    className="aspect-[9/19] w-full object-cover object-top"
                  />
                </span>
              </span>
            )}
          </button>
        </div>
      </article>
    </div>
  );
};

const ProjectsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <section id="projects" className="relative scroll-mt-24 px-4 pb-20 pt-8 sm:px-8 md:pb-32 md:pt-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="relative mb-14 flex flex-col items-center text-center md:mb-20">
          <HandKicker>explore my work!</HandKicker>
          <PixelHeading lines={["FEATURED", "WORKS"]} className="mt-3 text-[clamp(3rem,13vw,8.5rem)]" />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 md:absolute md:-right-2 md:bottom-2 md:mt-0 lg:right-0"
          >
            <StickyNote bg="#efdca4" rotate={-2} className="max-w-[260px] text-left">
              Client builds &amp; products I've shipped — storefronts, platforms and AI tools. Scroll the stack, open the
              case notes.
            </StickyNote>
          </motion.div>
        </div>

        <div className="relative [--tab-w:200px] md:[--tab-w:250px]">
          {featured.map((project, index) => (
            <FolderCard
              key={project.id}
              project={project}
              index={index}
              total={featured.length}
              onOpen={() => setOpenIndex(index)}
            />
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-5 md:mt-20">
          <Link
            to="/work"
            className="group inline-flex items-center gap-4 border-2 border-ink px-6 py-3 font-mono text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-canvas"
          >
            All work ({projects.length})
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
          <UnderlineLink href="https://github.com/CongoMusahAdama">Explore repository ↗</UnderlineLink>
        </div>
      </div>

      <ProjectLightbox
        projects={featured}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </section>
  );
};

export default ProjectsSection;
