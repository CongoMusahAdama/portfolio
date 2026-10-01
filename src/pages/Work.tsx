import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { HandKicker, PixelHeading, StickyNote } from "@/components/canvas/Canvas";
import ProjectLightbox from "@/components/projects/ProjectLightbox";
import { getProjectKind, getProjectStatus, projects } from "@/data/projects";

const Work = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const moveCursor = (e: React.MouseEvent) => {
    const el = cursorRef.current;
    if (el) el.style.transform = `translate3d(${e.clientX - 44}px, ${e.clientY - 44}px, 0)`;
  };

  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />

      <main className="px-4 pb-24 pt-14 sm:px-8 md:pb-32 md:pt-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="relative mb-16 flex flex-col items-center text-center md:mb-24">
            <HandKicker>every project, one canvas</HandKicker>
            <PixelHeading as="h1" lines={["ALL", "WORKS"]} className="mt-3 text-[clamp(3.5rem,15vw,9rem)]" />
            <div className="mt-8 md:absolute md:bottom-4 md:right-0 md:mt-0">
              <StickyNote bg="#efdca4" rotate={2} className="max-w-[250px] text-left">
                {projects.length} builds — client sites, products and experiments. Click any folder for the case notes.
              </StickyNote>
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 md:cursor-none"
            onMouseMove={moveCursor}
            onMouseEnter={() => setCursorVisible(true)}
            onMouseLeave={() => setCursorVisible(false)}
          >
            {projects.map((project, index) => {
              const status = getProjectStatus(project);
              return (
                <motion.button
                  key={project.id}
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group block text-left md:cursor-none"
                >
                  <div className="folder-tab flex h-10 w-[85%] items-center sm:w-[62%] bg-folder pl-5 pr-12 transition-colors duration-300 group-hover:bg-ink">
                    <span className="truncate font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors group-hover:text-canvas">
                      {String(index + 1).padStart(2, "0")} · {getProjectKind(project)}
                    </span>
                  </div>
                  <div className="bg-folder p-4 transition-colors duration-300 group-hover:bg-ink sm:p-5">
                    <div className="aspect-[16/10] overflow-hidden bg-black/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-4 pt-4 text-ink transition-colors group-hover:text-canvas">
                      <div className="min-w-0">
                        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h2>
                        <p className="mt-1 line-clamp-2 text-sm opacity-70">{project.description}</p>
                      </div>
                      <span className="mt-1 flex shrink-0 items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em]">
                        <span className={`h-2 w-2 rounded-full ${status === "Shipped" ? "bg-c-green" : "bg-c-yellow"}`} />
                        {status}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </main>

      <div
        ref={cursorRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[95] hidden h-[88px] w-[88px] md:block"
        style={{ mixBlendMode: "difference" }}
      >
        <span
          className={`flex h-full w-full items-center justify-center rounded-full bg-white font-mono text-sm font-semibold uppercase tracking-[0.14em] text-black transition duration-200 ${
            cursorVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          See
        </span>
      </div>

      <ProjectLightbox
        projects={projects}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Work;
