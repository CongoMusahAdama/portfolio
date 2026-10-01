import { Link } from "react-router-dom";
import { Ruler } from "@/components/canvas/Canvas";

const contactItems = [
  { label: "Phone", value: "+233 531 878 243", href: "tel:+233531878243" },
  { label: "Email", value: "amusahcongo@gmail.com", href: "mailto:amusahcongo@gmail.com" },
  { label: "Based in", value: "Accra & Takoradi, Ghana" },
];

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Now", to: "/now" },
  { label: "Work", to: "/work" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/CongoMusahAdama" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/" },
  { label: "X", href: "https://twitter.com/1real_vee" },
  { label: "Blog", href: "https://dev.to/congomusah" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-8">
      <div className="relative z-10 mx-auto -mb-20 w-[min(92%,620px)] rounded-2xl bg-white p-5 text-on-color shadow-[0_14px_40px_rgba(0,0,0,0.14)] sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-c-blue font-mono text-xs font-semibold">
            CM
          </span>
          <div className="min-w-0">
            <p className="flex flex-wrap items-baseline gap-x-2 text-sm font-semibold">
              Congo Musah Adams
              <span className="font-mono text-[10px] font-normal uppercase tracking-[0.12em] text-black/45">just now</span>
            </p>
            <p className="mt-1 text-sm leading-relaxed text-black/75">
              Building scalable systems and reliable APIs. Let's collaborate to bring your ideas to life.
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-full border border-black/10 py-1.5 pl-4 pr-1.5">
          <span className="flex-1 truncate text-sm text-black/40">Reply to Congo…</span>
          <a
            href="mailto:amusahcongo@gmail.com"
            className="rounded-full bg-on-color px-4 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-c-pink"
          >
            Send
          </a>
        </div>
      </div>

      <div className="rounded-t-[36px] bg-c-yellow px-5 pb-14 pt-32 text-on-color sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
          <a
            href="mailto:amusahcongo@gmail.com"
            className="contact-plate group relative flex w-full max-w-4xl items-center justify-center gap-4 border-[3px] border-on-color bg-c-blue px-4 py-6 shadow-[6px_6px_0_#141414] transition-transform duration-300 hover:-translate-y-1 sm:gap-8 sm:py-8"
          >
            <span aria-hidden className="tile-roll grid h-8 w-8 shrink-0 grid-cols-2 gap-1 sm:h-12 sm:w-12">
              <span className="bg-on-color" />
              <span className="bg-c-yellow" />
              <span className="bg-c-yellow" />
              <span className="bg-on-color" />
            </span>
            <span className="font-pixel text-[clamp(2.5rem,11vw,8rem)] font-bold leading-none tracking-tight">CONTACT</span>
            <span aria-hidden className="tile-roll-rev grid h-8 w-8 shrink-0 grid-cols-2 gap-1 sm:h-12 sm:w-12">
              <span className="bg-c-yellow" />
              <span className="bg-on-color" />
              <span className="bg-on-color" />
              <span className="bg-c-yellow" />
            </span>
          </a>

          <dl className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            {contactItems.map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] opacity-60">{item.label}</dt>
                <dd className="mt-1 text-base font-semibold">
                  {item.href ? (
                    <a href={item.href} className="break-all underline-offset-4 hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="border-t border-ink/10 bg-paper px-5 pb-[max(1rem,env(safe-area-inset-bottom))] pt-4 sm:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/60 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Congo Musah Adams</p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="transition-colors hover:text-ink">
                {link.label}
              </Link>
            ))}
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
                {link.label} ↗
              </a>
            ))}
          </nav>
        </div>
      </div>
      <Ruler />
    </footer>
  );
};

export default Footer;
