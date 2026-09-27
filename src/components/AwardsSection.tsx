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
    images: [
      "/assets/image.png",
      "/assets/image copy.png",
      "/assets/image copy 2.png",
      "/assets/image copy 3.png",
      "/assets/image copy 4.png",
      "/assets/image copy 5.png",
      "/assets/image copy 6.png",
      "/assets/image copy 7.png",
      "/assets/image copy 8.png",
      "/assets/image copy 9.png",
      "/assets/image copy 10.png",
      "/assets/image copy 11.png",
      "/assets/image copy 12.png",
      "/assets/image copy 13.png",
      "/assets/image copy 14.png",
      "/assets/image copy 15.png",
    ] as string[],
  },
];

const gallerySlides = awards.flatMap((award) =>
  award.images.map((src) => ({
    src,
    title: award.title,
    subtitle: award.subtitle,
  })),
);

const half = Math.ceil(gallerySlides.length / 2);
const firstHalf = gallerySlides.slice(0, half);
const secondHalf = gallerySlides.slice(half);

const marqueeSlides1 = [...firstHalf, ...firstHalf, ...firstHalf];
const marqueeSlides2 = [...secondHalf, ...secondHalf, ...secondHalf];

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
          <div className="group relative overflow-hidden bg-neutral-950 flex flex-col gap-1 py-1">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-neutral-950 to-transparent sm:w-24"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-neutral-950 to-transparent sm:w-24"
              aria-hidden
            />

            <div
              className="flex w-max animate-awards-marquee group-hover:[animation-play-state:paused] motion-reduce:hidden"
              aria-label="Recognition photos carousel row 1"
            >
              {marqueeSlides1.map((slide, index) => (
                <div
                  key={`${slide.src}-${index}`}
                  className="group/slide relative h-[150px] w-[min(72vw,220px)] shrink-0 overflow-hidden border-r border-neutral-800 sm:h-[180px] sm:w-[min(32vw,280px)] md:h-[200px] md:w-[min(26vw,300px)] lg:w-[min(22vw,320px)]"
                >
                  <img
                    src={slide.src}
                    alt={`${slide.title} — ${slide.subtitle}`}
                    className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover/slide:grayscale-0 group-hover/slide:scale-[1.03]"
                    loading="eager"
                    decoding="async"
                    fetchPriority={index === 0 ? "high" : "auto"}
                    draggable={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 pb-2 pt-8 opacity-0 transition-opacity duration-300 group-hover/slide:opacity-100">
                    <p className="font-mono text-[10px] text-white/90">{slide.title}</p>
                    <p className="font-mono text-[9px] text-white/60">{slide.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="flex w-max animate-awards-marquee-reverse group-hover:[animation-play-state:paused] motion-reduce:hidden"
              aria-label="Recognition photos carousel row 2"
            >
              {marqueeSlides2.map((slide, index) => (
                <div
                  key={`${slide.src}-${index}`}
                  className="group/slide relative h-[150px] w-[min(72vw,220px)] shrink-0 overflow-hidden border-r border-neutral-800 sm:h-[180px] sm:w-[min(32vw,280px)] md:h-[200px] md:w-[min(26vw,300px)] lg:w-[min(22vw,320px)]"
                >
                  <img
                    src={slide.src}
                    alt={`${slide.title} — ${slide.subtitle}`}
                    className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover/slide:grayscale-0 group-hover/slide:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2.5 pb-2 pt-8 opacity-0 transition-opacity duration-300 group-hover/slide:opacity-100">
                    <p className="font-mono text-[10px] text-white/90">{slide.title}</p>
                    <p className="font-mono text-[9px] text-white/60">{slide.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden motion-reduce:flex snap-x snap-mandatory overflow-x-auto no-scrollbar gap-2 px-4">
              {gallerySlides.map((slide, index) => (
                <div
                  key={`${slide.src}-static-${index}`}
                  className="relative h-[150px] w-[min(78vw,260px)] shrink-0 snap-center overflow-hidden border-r border-neutral-800 rounded-sm"
                >
                  <img
                    src={slide.src}
                    alt={`${slide.title} — ${slide.subtitle}`}
                    className="h-full w-full object-cover object-center grayscale"
                    loading="lazy"
                    decoding="async"
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
