import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const INK = "rgb(var(--ink-rgb))";
const PAPER = "rgb(var(--paper-rgb))";

export const CornerHandles = ({
  color = INK,
  fill = PAPER,
  size = 11,
}: {
  color?: string;
  fill?: string;
  size?: number;
}) => {
  const offset = -Math.ceil(size / 2);
  const base: CSSProperties = {
    width: size,
    height: size,
    background: fill,
    border: `1.5px solid ${color}`,
  };
  return (
    <>
      <span aria-hidden className="absolute z-10 block" style={{ ...base, top: offset, left: offset }} />
      <span aria-hidden className="absolute z-10 block" style={{ ...base, top: offset, right: offset }} />
      <span aria-hidden className="absolute z-10 block" style={{ ...base, bottom: offset, left: offset }} />
      <span aria-hidden className="absolute z-10 block" style={{ ...base, bottom: offset, right: offset }} />
    </>
  );
};

export const SelectionBox = ({
  color = INK,
  fill,
  className = "",
  children,
}: {
  color?: string;
  fill?: string;
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={`relative ${className}`}
    style={{ boxShadow: `0 0 0 1px ${color}`, background: fill }}
  >
    {children}
    <CornerHandles color={color} />
  </div>
);

export const LabelTag = ({
  bg,
  fg = "#141414",
  children,
  className = "",
}: {
  bg: string;
  fg?: string;
  children: ReactNode;
  className?: string;
}) => (
  <p
    className={`mb-3 inline-block px-3 py-1 font-mono text-xs font-semibold uppercase tracking-[0.14em] ${className}`}
    style={{ background: bg, color: fg }}
  >
    {children}
  </p>
);

export const Pill = ({
  bg,
  fg = "#141414",
  children,
  className = "",
}: {
  bg: string;
  fg?: string;
  children: ReactNode;
  className?: string;
}) => (
  <span
    className={`hard-shadow inline-block whitespace-nowrap rounded-full border-2 border-ink px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] ${className}`}
    style={{ background: bg, color: fg }}
  >
    {children}
  </span>
);

export const HandArrow = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    aria-hidden
    width="54"
    height="40"
    viewBox="0 0 54 40"
    fill="none"
    className={`${flip ? "-scale-x-100" : ""} ${className}`}
  >
    <path
      d="M4 6c10 2 22 8 28 18 3 5 5 9 6 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M31 31l7 6 3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FloatingPill = ({
  bg,
  fg,
  label,
  drift = "a",
  arrowSide = "left",
  className = "",
}: {
  bg: string;
  fg?: string;
  label: string;
  drift?: "a" | "b";
  arrowSide?: "left" | "right";
  className?: string;
}) => (
  <div
    className={`inline-flex flex-col text-ink ${arrowSide === "left" ? "items-start" : "items-end"} ${
      drift === "a" ? "animate-pill-a" : "animate-pill-b"
    } ${className}`}
  >
    <HandArrow flip={arrowSide === "right"} className="-mb-1" />
    <Pill bg={bg} fg={fg}>
      {label}
    </Pill>
  </div>
);

export const Squiggle = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden width="120" height="18" viewBox="0 0 120 18" fill="none" className={className}>
    <path
      d="M2 10c8-8 14-8 20 0s12 8 20 0 14-8 20 0 12 8 20 0 14-8 20 0 10 6 16 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const HandKicker = ({
  children,
  className = "",
  arrow = true,
}: {
  children: ReactNode;
  className?: string;
  arrow?: boolean;
}) => (
  <div className={`flex flex-col items-center text-ink ${className}`}>
    <p className="font-hand text-2xl sm:text-3xl">{children}</p>
    {arrow && (
      <svg aria-hidden width="30" height="38" viewBox="0 0 30 38" fill="none" className="mt-1">
        <path d="M15 2c-4 8 4 14 0 22s-1 10 0 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 28l7 8 7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </div>
);

export const StickyNote = ({
  bg,
  rotate = 0,
  className = "",
  children,
}: {
  bg: string;
  rotate?: number;
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={`border border-black/10 px-6 py-5 text-sm font-medium leading-relaxed text-on-color shadow-[0_2px_12px_rgba(0,0,0,0.1)] ${className}`}
    style={{ background: bg, transform: rotate ? `rotate(${rotate}deg)` : undefined }}
  >
    {children}
  </div>
);

type UnderlineLinkProps = {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  color?: string;
  className?: string;
};

export const UnderlineLink = ({ children, href, to, onClick, color, className = "" }: UnderlineLinkProps) => {
  const inner = (
    <>
      <span
        className="absolute bottom-0 left-0 h-px w-full origin-left transition-transform duration-300 ease-out group-hover/ul:scale-x-[1.06]"
        style={{ background: color ?? "currentColor" }}
      />
      <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover/ul:translate-x-1.5">
        {children}
      </span>
    </>
  );
  const cls = `group/ul relative inline-flex w-fit items-center pb-1 font-mono text-sm font-normal uppercase tracking-[0.14em] ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
};

export const PixelHeading = ({
  lines,
  className = "",
  as: Tag = "h2",
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2";
}) => {
  let letterIndex = 0;
  return (
    <Tag className={`font-pixel font-bold leading-[0.95] tracking-tight text-ink ${className}`} aria-label={lines.join(" ")}>
      {lines.map((line) => (
        <span key={line} className="block" aria-hidden>
          {line.split("").map((char, i) => {
            const delay = letterIndex++ * 0.04;
            return (
              <motion.span
                key={`${line}-${i}`}
                className="inline-block"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay, ease: [0.16, 1, 0.3, 1] }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
};

export const DiamondTile = ({ color, className = "" }: { color: string; className?: string }) => (
  <span aria-hidden className={`mt-1.5 flex h-8 w-8 shrink-0 rotate-45 flex-wrap gap-1 p-1 ${className}`}>
    <span className="h-2.5 w-2.5" style={{ background: color }} />
    <span className="h-2.5 w-2.5" style={{ background: color, opacity: 0.65 }} />
    <span className="h-2.5 w-2.5" style={{ background: color, opacity: 0.65 }} />
    <span className="h-2.5 w-2.5" style={{ background: color }} />
  </span>
);

export const ColorTag = ({
  bg,
  fg = "#141414",
  label,
  tile = false,
}: {
  bg: string;
  fg?: string;
  label: string;
  tile?: boolean;
}) => (
  <span className="flex items-center gap-2.5 sm:gap-3">
    <span
      className="whitespace-nowrap px-3.5 py-2 text-base font-semibold tracking-tight sm:px-4 sm:py-2.5 sm:text-xl"
      style={{ background: bg, color: fg }}
    >
      {label}
    </span>
    {tile && (
      <span
        aria-hidden
        className="grid h-[38px] w-[38px] shrink-0 grid-cols-2 place-items-center border-2 border-dashed border-ink p-1.5 sm:h-[46px] sm:w-[46px] sm:p-2"
        style={{ background: bg }}
      >
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="h-2 w-2 rotate-45 bg-on-color sm:h-2.5 sm:w-2.5" />
        ))}
      </span>
    )}
  </span>
);

const RULER_SEGMENT = 130;
const RULER_SEGMENTS = 26;

export const Ruler = ({ className = "", sticky = false }: { className?: string; sticky?: boolean }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const shift = (window.scrollY * 0.35) % (RULER_SEGMENT * 10);
      track.style.transform = `translate3d(${-shift}px,0,0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`relative h-9 select-none overflow-hidden border-b border-ink/10 bg-paper ${
        sticky ? "sticky top-16 z-[60]" : ""
      } ${className}`}
    >
      <div ref={trackRef} className="flex h-full will-change-transform">
        {Array.from({ length: RULER_SEGMENTS }, (_, i) => (
          <div key={i} className="relative h-full flex-shrink-0" style={{ width: RULER_SEGMENT }}>
            <span className="absolute bottom-1 left-0 -translate-x-1/2 font-mono text-[10px] tabular-nums text-ink/40">
              {(i % 26) * 100}
            </span>
            <span className="absolute left-0 top-0 h-2.5 w-px bg-ink/25" />
            {[26, 52, 78, 104].map((x) => (
              <span key={x} className="absolute top-0 h-1.5 w-px bg-ink/15" style={{ left: x }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CursorLabel = ({ label = "YOU" }: { label?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate3d(${e.clientX + 14}px, ${e.clientY + 14}px, 0)`;
      el.style.opacity = "1";
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9990] hidden opacity-0 transition-opacity duration-300 md:block"
      style={{ mixBlendMode: "difference" }}
    >
      <span className="absolute -left-2 -top-2 block h-3 w-3 rounded-full bg-white" />
      <span className="block rounded-full rounded-tl-none bg-white px-2.5 py-1 font-mono text-[11px] font-semibold text-black">
        {label}
      </span>
    </div>
  );
};
