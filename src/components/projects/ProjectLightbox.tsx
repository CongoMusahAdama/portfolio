import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { CornerHandles, UnderlineLink } from "@/components/canvas/Canvas";
import {
  getProjectKind,
  getProjectLiveUrl,
  getProjectStatus,
  type Project,
} from "@/data/projects";

type ProjectLightboxProps = {
  projects: Project[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const ProjectLightbox = ({ projects, index, onClose, onIndexChange }: ProjectLightboxProps) => {
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [view, setView] = useState<"web" | "mobile">("web");
  const open = index !== null;
  const project = open ? projects[index] : null;

  const go = (step: 1 | -1) => {
    if (index === null) return;
    setDirection(step === 1 ? "next" : "prev");
    setView("web");
    onIndexChange((index + step + projects.length) % projects.length);
  };

  useEffect(() => {
    if (!open) {
      setDirection(null);
      setView("web");
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index]);

  if (!open || !project || typeof document === "undefined") return null;

  const liveUrl = getProjectLiveUrl(project);
  const status = getProjectStatus(project);
  const animationClass =
    direction === "next"
      ? "animate-lightbox-snap-next"
      : direction === "prev"
        ? "animate-lightbox-snap-prev"
        : "animate-lightbox-zoom";

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case notes`}
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        key={project.id}
        onClick={(e) => e.stopPropagation()}
        className={`relative flex max-h-[92dvh] w-full max-w-5xl flex-col overflow-hidden bg-paper text-ink opacity-0 ${animationClass}`}
      >
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-ink/10 pl-5">
          <p className="truncate font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
            Case notes · {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </p>
          <div className="flex h-full items-stretch">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous project"
              className="flex w-12 items-center justify-center border-l border-ink/10 transition-colors hover:bg-c-cream hover:text-on-color"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next project"
              className="flex w-12 items-center justify-center border-l border-ink/10 transition-colors hover:bg-c-cream hover:text-on-color"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex w-12 items-center justify-center border-l border-ink/10 bg-ink text-canvas transition-colors hover:bg-c-pink hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-1 overflow-y-auto md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-4 bg-ink/[0.03] p-5 sm:p-8">
            {project.mobileImage && (
              <div className="flex gap-2">
                {(["web", "mobile"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setView(v)}
                    className={`px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                      view === v ? "bg-c-blue text-on-color" : "bg-ink/5 text-ink hover:bg-c-cream hover:text-on-color"
                    }`}
                  >
                    {v === "web" ? "Web view" : "Mobile view"}
                  </button>
                ))}
              </div>
            )}
            <div className="relative" style={{ boxShadow: "0 0 0 1px rgb(var(--ink-rgb) / 0.8)" }}>
              <CornerHandles />
              {view === "web" || !project.mobileImage ? (
                <img src={project.image} alt={project.title} className="aspect-[16/10] w-full object-cover object-top" />
              ) : (
                <div className="flex aspect-[16/10] w-full items-center justify-center bg-c-sky p-4">
                  <img
                    src={project.mobileImage}
                    alt={`${project.title} mobile`}
                    className="h-full w-auto rounded-[18px] border-[6px] border-on-color object-cover object-top"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6 p-5 sm:p-8">
            <div>
              <p className="mb-3 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
                <span className={`h-2 w-2 rounded-full ${status === "Shipped" ? "bg-c-green" : "bg-c-yellow"}`} />
                {status} · {getProjectKind(project)}
              </p>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/75">{project.description}</p>
            </div>

            {project.problem && (
              <div>
                <p className="mb-2 inline-block bg-c-pink px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  The challenge
                </p>
                <p className="text-sm leading-relaxed text-ink/75">{project.problem}</p>
              </div>
            )}
            {project.approach && (
              <div>
                <p className="mb-2 inline-block bg-c-green px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-on-color">
                  The approach
                </p>
                <p className="text-sm leading-relaxed text-ink/75">{project.approach}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="border border-ink/25 bg-canvas px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-6 pt-2">
              {liveUrl && <UnderlineLink href={liveUrl}>View project ↗</UnderlineLink>}
              <UnderlineLink href={project.githubUrl}>Source ↗</UnderlineLink>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectLightbox;
