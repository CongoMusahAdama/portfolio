import { DiamondTile, LabelTag, SelectionBox } from "@/components/canvas/Canvas";

const tileColors = ["#5fbee6", "#d8365d", "#e3a92f", "#5fb57f", "#45261c", "#5fbee6"];

const awards: {
  title: string;
  subtitle: string;
  logo: string | null;
  images: string[];
  imagePosition?: string;
}[] = [
  {
    title: "Dignitary",
    subtitle: "Ghana Career & Migration Fair · GIZ",
    logo: null,
    images: ["/uploads/gcmf-dignitary-1.jpg", "/uploads/gcmf-dignitary-2.jpg"],
    imagePosition: "center 8%",
  },
  {
    title: "Mentor",
    subtitle: "GDIW 2025",
    logo: "/uploads/gdiw-logo.png",
    images: ["/uploads/gdiw-1.png", "/uploads/gdiw-2.png"],
  },
  {
    title: "Hackathon Mentor",
    subtitle: "GDIW 2025",
    logo: "/uploads/gdiw-logo.png",
    images: ["/uploads/hackathon-mentor-1.png"],
  },
  {
    title: "Business Development",
    subtitle: "United Way Ghana",
    logo: "/uploads/unitedway-logo.png",
    images: ["/uploads/unitedway-1.png", "/uploads/unitedway-2.jpg"],
  },
  {
    title: "IT Facilitator",
    subtitle: "Zeus Atlas · NSS Ghana",
    logo: "/uploads/zeus-atlas-logo.png",
    images: ["/uploads/zeus-atlas-1.png", "/uploads/zeus-atlas-2.png"],
  },
  {
    title: "Community Builder",
    subtitle: "Tech Ecosystem",
    logo: null,
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
    ],
  },
];

const gallerySlides = awards.flatMap((award) =>
  award.images.map((src) => ({
    src,
    title: award.title,
    subtitle: award.subtitle,
    position: award.imagePosition ?? "center 20%",
  })),
);

const half = Math.ceil(gallerySlides.length / 2);
const firstHalf = gallerySlides.slice(0, half);
const secondHalf = gallerySlides.slice(half);

const marqueeSlides1 = [...firstHalf, ...firstHalf, ...firstHalf];
const marqueeSlides2 = [...secondHalf, ...secondHalf, ...secondHalf];

const AwardsSection = () => {
  return (
    <section>
      <LabelTag bg="#5fbee6">Honors &amp; recognitions</LabelTag>
      <SelectionBox color="#5fbee6" fill="rgb(var(--paper-rgb))">
        <ol className="grid grid-cols-1 gap-x-12 gap-y-8 p-6 sm:p-10 md:grid-cols-2 md:p-14">
          {awards.map((award, index) => (
            <li key={`${award.title}-${award.subtitle}`} className="flex items-start gap-4">
              <DiamondTile color={tileColors[index % tileColors.length]} />
              <div className="min-w-0">
                <p className="flex items-center gap-2 text-xl font-semibold tracking-tight text-ink">
                  {award.title}
                  {award.logo && <img src={award.logo} alt="" className="h-5 w-5 object-contain" />}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-ink/55">{award.subtitle}</p>
              </div>
            </li>
          ))}
        </ol>
      </SelectionBox>

      {gallerySlides.length > 0 && (
        <div className="relative left-1/2 mt-12 w-screen max-w-[100vw] -translate-x-1/2">
          <div className="group relative flex flex-col gap-1 overflow-hidden border-y-2 border-ink bg-on-color py-1">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-on-color to-transparent sm:w-24"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-on-color to-transparent sm:w-24"
              aria-hidden
            />

            <div
              className="flex w-max animate-awards-marquee group-hover:[animation-play-state:paused] motion-reduce:hidden"
              aria-label="Recognition photos carousel row 1"
            >
              {marqueeSlides1.map((slide, index) => (
                <div
                  key={`${slide.src}-${index}`}
                  className="group/slide relative h-[240px] w-[min(72vw,220px)] shrink-0 overflow-hidden border-r border-neutral-800 sm:h-[280px] sm:w-[min(32vw,280px)] md:h-[320px] md:w-[min(26vw,300px)] lg:w-[min(22vw,320px)]"
                >
                  <img
                    src={slide.src}
                    alt={`${slide.title} — ${slide.subtitle}`}
                    style={{ objectPosition: slide.position }}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover/slide:grayscale-0 group-hover/slide:scale-[1.03]"
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
                  className="group/slide relative h-[240px] w-[min(72vw,220px)] shrink-0 overflow-hidden border-r border-neutral-800 sm:h-[280px] sm:w-[min(32vw,280px)] md:h-[320px] md:w-[min(26vw,300px)] lg:w-[min(22vw,320px)]"
                >
                  <img
                    src={slide.src}
                    alt={`${slide.title} — ${slide.subtitle}`}
                    style={{ objectPosition: slide.position }}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover/slide:grayscale-0 group-hover/slide:scale-[1.03]"
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
                  className="relative h-[240px] w-[min(78vw,260px)] shrink-0 snap-center overflow-hidden border-r border-neutral-800 rounded-sm"
                >
                  <img
                    src={slide.src}
                    alt={`${slide.title} — ${slide.subtitle}`}
                    style={{ objectPosition: slide.position }}
                    className="h-full w-full object-cover grayscale"
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
