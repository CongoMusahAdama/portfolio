import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { CornerHandles, PixelHeading, UnderlineLink } from "@/components/canvas/Canvas";

const whatsappNumber = "233509154727";
const whatsappMessage = "Hello I want to GetInTouch!";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const socials = [
  { label: "GitHub", href: "https://github.com/CongoMusahAdama", Icon: Github },
  { label: "X", href: "https://twitter.com/1real_vee", Icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/", Icon: Linkedin },
  { label: "Email", href: "mailto:amusahcongo@gmail.com", Icon: Mail },
];

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,1.2fr)_auto]">
        <div className="flex flex-col items-start">
          <p className="mb-3 font-hand text-2xl text-ink sm:text-3xl">got a project in mind?</p>
          <div className="flex items-end gap-4">
            <PixelHeading lines={["LET'S", "TALK"]} className="text-[clamp(3.5rem,14vw,8.5rem)]" />
            <svg aria-hidden width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-4 animate-wiggle text-c-pink">
              <path d="M32 6l6 18h18l-14 11 5 18-15-11-15 11 5-18L8 24h18z" fill="currentColor" stroke="#141414" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75 md:text-lg">
            Ready to start a project together? Let's discuss how we can bring your ideas to life.
          </p>

          <div className="mt-9 flex w-full flex-col gap-5 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-between gap-4 bg-on-color py-2 pl-3 pr-2 text-white dark:bg-ink dark:text-canvas sm:justify-start"
            >
              <span className="h-4 w-4 shrink-0 bg-c-green" />
              <span className="font-mono text-sm font-semibold uppercase tracking-[0.14em]">Chat on WhatsApp</span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-start overflow-hidden rounded-full bg-c-blue text-on-color">
                <span className="flex w-[200%] shrink-0 animate-arrow-through">
                  <ArrowUpRight className="mx-[10px] h-4 w-4" />
                  <ArrowUpRight className="mx-[10px] h-4 w-4" />
                </span>
              </span>
              <span className="pointer-events-none opacity-0 transition-opacity group-hover:opacity-100">
                <CornerHandles color="#5fbee6" size={9} />
              </span>
            </a>
            <UnderlineLink href="mailto:amusahcongo@gmail.com">amusahcongo@gmail.com</UnderlineLink>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink/50">Follow me</span>
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 text-ink transition-colors hover:bg-c-cream hover:text-on-color"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open WhatsApp chat"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto hidden md:mx-0 md:block"
        >
          <div className="relative animate-wiggle bg-white p-3 pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <img
              src="/lovable-uploads/764f9228-d9ad-428d-ab65-0610222686ec.png"
              alt="WhatsApp QR Code"
              className="h-52 w-52 object-contain sm:h-60 sm:w-60"
              loading="lazy"
            />
            <p className="absolute bottom-3 left-0 right-0 text-center font-hand text-2xl text-on-color">scan me!</p>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
