import { Users } from "lucide-react";

const sectionLabel = "font-mono text-xs text-muted-foreground";
const bodyText = "text-sm leading-relaxed text-foreground/80";

const awards = [
  {
    title: "Mentor",
    subtitle: "GDIW 2025",
    logo: "/lovable-uploads/gdiw-logo.png",
    images: ["/lovable-uploads/gdiw-1.png", "/lovable-uploads/gdiw-2.png"],
  },
  {
    title: "Hackathon Mentor",
    subtitle: "GDIW 2025",
    logo: "/lovable-uploads/gdiw-logo.png",
    images: ["/lovable-uploads/hackathon-mentor-1.png"],
  },
  {
    title: "Business Development",
    subtitle: "United Way Ghana",
    logo: "/lovable-uploads/unitedway-logo.png",
    images: ["/lovable-uploads/unitedway-1.png", "/lovable-uploads/unitedway-2.jpg"],
  },
  {
    title: "IT Facilitator",
    subtitle: "Zeus Atlas · NSS Ghana",
    logo: "/lovable-uploads/zeus-atlas-logo.png",
    images: ["/lovable-uploads/zeus-atlas-1.png", "/lovable-uploads/zeus-atlas-2.png"],
  },
  {
    title: "Community Builder",
    subtitle: "Tech Ecosystem",
    logo: null as string | null,
    images: [] as string[],
  },
];

const gallerySlides = awards.flatMap((award) =>
  award.images.map((src) => ({
    src,
    title: award.title,
    subtitle: award.subtitle,
  }))
);

const marqueeSlides = [...gallerySlides, ...gallerySlides];

const AwardsSection = () => {
  return (
    <section className="mt-8 border-t border-border pt-6">
      <p className={`${sectionLabel} mb-4`}>Honors & recognitions</p>

      <ul className={`mb-6 space-y-3 ${bodyText}`}>
        {awards.map((award) => (
          <li key={`${award.title}-${award.subtitle}`} className="flex items-start gap-3">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center mt-0.5">
              {award.logo ? (
                <img src={award.logo} alt="" className="h-full w-full object-contain" />
              ) : (
                <Users className="h-4 w-4 text-brand-orange" strokeWidth={1.5} />
              )}
            </div>
            <span className="min-w-0 leading-snug">
              <span className="text-foreground">{award.title}</span>
              <span className="text-muted-foreground"> · {award.subtitle}</span>
            </span>
          </li>
        ))}
      </ul>

      {gallerySlides.length > 0 && (
        <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
          <div className="group relative overflow-hidden bg-neutral-950">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-950 to-transparent sm:w-24"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-950 to-transparent sm:w-24"
              aria-hidden
            />

            <div
              className="hidden sm:flex w-max animate-awards-marquee group-hover:[animation-play-state:paused] motion-reduce:hidden"
              aria-label="Recognition photos carousel"
            >
              {marqueeSlides.map((slide, index) => (
                <div
                  key={`${slide.src}-${index}`}
                  className="group/slide relative h-[200px] w-[min(42vw,320px)] shrink-0 overflow-hidden border-r border-neutral-800 sm:h-[230px] sm:w-[min(32vw,340px)] md:h-[250px] md:w-[min(26vw,360px)] lg:w-[min(22vw,380px)]"
                >
                  <img
                    src={slide.src}
                    alt={`${slide.title} — ${slide.subtitle}`}
                    className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover/slide:grayscale-0 group-hover/slide:scale-[1.03]"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 pb-2 pt-8 opacity-0 transition-opacity duration-300 group-hover/slide:opacity-100">
                    <p className="font-mono text-[10px] text-white/90">{slide.title}</p>
                    <p className="font-mono text-[9px] text-white/60">{slide.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar sm:hidden">
              {gallerySlides.map((slide, index) => (
                <div
                  key={`${slide.src}-static-${index}`}
                  className="relative h-[180px] w-[min(78vw,300px)] shrink-0 snap-center overflow-hidden border-r border-neutral-800"
                >
                  <img
                    src={slide.src}
                    alt={`${slide.title} — ${slide.subtitle}`}
                    className="h-full w-full object-cover object-center grayscale"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AwardsSection;
