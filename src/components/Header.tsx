import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SiteSoundtrackButton } from "@/components/SiteSoundtrackButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CursorLabel, Ruler } from "@/components/canvas/Canvas";

const chipClass =
  "relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/5 font-mono text-[11px] font-semibold text-ink transition-colors hover:bg-c-cream hover:text-on-color";

const socialChips = [
  { label: "EM", title: "Email", href: "mailto:amusahcongo@gmail.com" },
  { label: "GH", title: "GitHub", href: "https://github.com/CongoMusahAdama" },
  { label: "LI", title: "LinkedIn", href: "https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/" },
];

const navLinks = [
  { title: "Home", href: "/", external: false, isSection: false },
  { title: "About", href: "/about", external: false, isSection: false },
  { title: "Now", href: "/now", external: false, isSection: false },
  { title: "Projects", href: "#projects", external: false, isSection: true },
  { title: "Blog", href: "https://dev.to/congomusah", external: true, isSection: false },
];

const cellClass = (active: boolean) =>
  `flex h-full items-center px-5 lg:px-6 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors ${
    active ? "bg-c-blue text-on-color" : "text-ink hover:bg-c-cream hover:text-on-color"
  }`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleSectionClick = (href: string) => {
    setIsMenuOpen(false);
    const scroll = () =>
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 120);
    } else {
      scroll();
    }
  };

  const isActive = (href: string, isSection: boolean) =>
    !isSection && !href.startsWith("#") && location.pathname === href;

  const renderLink = (link: (typeof navLinks)[number], className: string) => {
    if (link.external) {
      return (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
          {link.title}
        </a>
      );
    }
    if (link.isSection) {
      return (
        <button key={link.href} type="button" onClick={() => handleSectionClick(link.href)} className={className}>
          {link.title}
        </button>
      );
    }
    return (
      <Link
        key={link.href}
        to={link.href}
        aria-current={isActive(link.href, false) ? "page" : undefined}
        className={className}
        onClick={() => setIsMenuOpen(false)}
      >
        {link.title}
      </Link>
    );
  };

  return (
    <>
      <CursorLabel />
      <header className="fixed left-0 top-0 z-[70] w-full border-b border-ink/10 bg-paper">
        <nav aria-label="Primary" className="flex h-16 w-full items-stretch">
          <Link
            to="/"
            aria-label="Home"
            className="flex items-center border-r border-ink/10 px-5 font-mono text-2xl font-semibold tracking-tight text-ink sm:px-7"
          >
            CMA
            <span className="-ml-[0.08em] text-[1.4em] leading-none text-brand-orange">.</span>
          </Link>

          <div className="hidden h-full items-stretch md:flex">
            {navLinks.map((link) =>
              renderLink(link, `${cellClass(isActive(link.href, link.isSection))} border-r border-ink/10`),
            )}
          </div>

          <div className="ml-auto hidden items-center gap-2 pr-5 md:flex lg:pr-7">
            <SiteSoundtrackButton className={`${chipClass} text-brand-orange`} iconClassName="h-5 w-5" />
            <ThemeToggle />
            <div className="hidden items-center gap-2 lg:flex">
              {socialChips.map((chip) => (
                <a
                  key={chip.label}
                  href={chip.href}
                  target={chip.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={chip.title}
                  className={`group ${chipClass}`}
                >
                  {chip.label}
                  <span className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 whitespace-nowrap bg-c-blue px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-on-color opacity-0 transition-opacity group-hover:opacity-100">
                    {chip.title}
                  </span>
                </a>
              ))}
            </div>
            <button
              type="button"
              onClick={() => handleSectionClick("#contact")}
              className="ml-2 border-2 border-ink px-4 py-2 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-canvas"
            >
              Talk to me
            </button>
          </div>

          <div className="ml-auto flex items-center gap-1.5 pr-4 md:hidden">
            <SiteSoundtrackButton className={`${chipClass} text-brand-orange`} iconClassName="h-5 w-5" />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className={`ml-1 border-2 border-ink px-3 py-1.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors ${
                isMenuOpen ? "bg-ink text-canvas" : "text-ink"
              }`}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          className={`overflow-hidden border-ink/10 bg-paper transition-[max-height] duration-300 ease-out md:hidden ${
            isMenuOpen ? "max-h-[520px] border-t" : "max-h-0"
          }`}
        >
          <div className="flex flex-col">
            {navLinks.map((link) =>
              renderLink(
                link,
                `${cellClass(isActive(link.href, link.isSection))} min-h-[52px] w-full border-b border-ink/10 text-left`,
              ),
            )}
            <div className="flex items-center gap-2 px-5 py-4">
              {socialChips.map((chip) => (
                <a
                  key={chip.label}
                  href={chip.href}
                  target={chip.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={chip.title}
                  className={chipClass}
                >
                  {chip.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => handleSectionClick("#contact")}
                className="ml-auto border-2 border-ink px-4 py-2 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-canvas"
              >
                Talk to me
              </button>
            </div>
          </div>
        </div>
      </header>
      <div aria-hidden className="h-16" />
      <Ruler sticky />
    </>
  );
};

export default Header;
