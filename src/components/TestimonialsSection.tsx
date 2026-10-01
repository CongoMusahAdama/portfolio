import { motion } from "framer-motion";
import { HandKicker, PixelHeading } from "@/components/canvas/Canvas";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: "06",
    name: "Nana Quasi-Wusu (PM)",
    role: "The Finest MC",
    company: "PM Holdings",
    avatar: "/lovable-uploads/nana-quasi-wusu.jpg",
    content:
      "Elite, great and awesome! Congo is a genius — he delivered a website that truly reflects my standard and my personality. I love it. It's mind-blowing!",
  },
  {
    id: "05",
    name: "Florence",
    role: "CEO",
    company: "VisionSpa",
    avatar: "/lovable-uploads/angelic.png",
    content:
      "I really admire the work on our platform. The project has significantly boosted our sales and streamlined our booking process. Amazing results!",
  },
  {
    id: "01",
    name: "Kwame Oteng",
    role: "Founder",
    company: "Mizrmo Technologies",
    avatar: "/lovable-uploads/dd834d92-de8f-4f21-9878-9cc88ffbb39e.png",
    content:
      "Highly impressed with the APIs and backend development. Congo delivered scalable solutions that perfectly matched our requirements. Truly professional!",
  },
  {
    id: "02",
    name: "Jerry Temakloe",
    role: "Founder & Creative Entrepreneur",
    company: "Carve Studio",
    avatar: "/lovable-uploads/e7a271ed-34b5-4117-b716-6c44c58df08d.png",
    content:
      "Congo's expertise in microservices architecture transformed our monolithic application into a scalable, maintainable system. His documentation skills are excellent too!",
  },
  {
    id: "03",
    name: "Prof. Daniel Addo-Mensah",
    role: "Lecturer & Head of Industrial Attachment",
    company: "University of Energy and Natural Resources",
    avatar: "/lovable-uploads/5548e7ab-7bc7-436a-877b-caab2b5d82c6.png",
    content:
      "Congo's ability to turn impactful ideas into digital platforms is insane — from understanding users' pain points to building solutions they actually want.",
  },
  {
    id: "04",
    name: "Host of Kultural Kompass",
    role: "Founder & Host",
    company: "Kultural Kompass",
    avatar: "/lovable-uploads/kultural.png",
    content:
      "I love the approach to product where ideas are easily turned into great digital solutions that resonate with the audience and target interests. Wonderful work!",
  },
];

const noteStyles = [
  { bg: "#efdca4", rotate: -2 },
  { bg: "#b5ddf0", rotate: 1.5 },
  { bg: "#f2bfcd", rotate: -1 },
  { bg: "#a6d9bb", rotate: 2 },
  { bg: "#efdca4", rotate: -1.5 },
  { bg: "#b5ddf0", rotate: 1 },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <HandKicker>people said nice things</HandKicker>
          <PixelHeading lines={["KIND WORDS"]} className="mt-3 text-[clamp(2.75rem,11vw,7rem)]" />
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink/70 md:text-base">
            From founders, clients and mentors I've built with.
          </p>
        </div>

        <p className="-mt-6 mb-4 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50 md:hidden">
          Swipe →
        </p>
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 pt-2 sm:-mx-8 sm:px-8 md:mx-0 md:block md:columns-2 md:gap-8 md:overflow-visible md:p-0 lg:columns-3">
          {testimonials.map((t, index) => {
            const style = noteStyles[index % noteStyles.length];
            return (
              <motion.figure
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="w-[84%] max-w-[340px] shrink-0 snap-center pt-3 md:mb-10 md:w-auto md:max-w-none md:break-inside-avoid"
              >
                <div
                  className="relative h-full border border-black/10 p-6 text-on-color shadow-[0_2px_12px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-0"
                  style={{ background: style.bg, transform: `rotate(${style.rotate}deg)` }}
                >
                  <span
                    aria-hidden
                    className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-[-3deg] bg-white/60 shadow-sm"
                  />
                  <span aria-hidden className="font-pixel text-5xl leading-none">
                    “
                  </span>
                  <blockquote className="-mt-2 text-[15px] font-medium leading-relaxed">{t.content}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-black/15 pt-4">
                    <img src={t.avatar} alt={t.name} className="h-11 w-11 rounded-full border-2 border-on-color object-cover" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="font-mono text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] opacity-70">
                        {t.role} · {t.company}
                      </p>
                    </div>
                  </figcaption>
                </div>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
