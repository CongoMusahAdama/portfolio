import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiteSoundtrackButton } from "@/components/SiteSoundtrackButton";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinkClass = (active: boolean) =>
  `font-mono text-sm transition-colors ${
    active
      ? "text-foreground underline decoration-brand-orange decoration-2 underline-offset-[6px]"
      : "text-muted-foreground hover:text-foreground"
  }`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSectionClick = (href: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navLinks = [
    { title: "Home", href: "/", external: false, isSection: false },
    { title: "About", href: "/about", external: false, isSection: false },
    { title: "Now", href: "/now", external: false, isSection: false },
    { title: "Projects", href: "#projects", external: false, isSection: true },
    {
      title: "Blog",
      href: "https://dev.to/congomusah",
      external: true,
      isSection: false,
    },
  ];

  const isActive = (href: string, isSection: boolean) =>
    !isSection && !href.startsWith("#") && location.pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[70] transition-all duration-300 ${
        scrolled || isMenuOpen
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex w-full max-w-6xl items-center justify-between px-5 sm:px-8 transition-all duration-300 ${
          scrolled ? "py-3" : "pt-[max(1.25rem,env(safe-area-inset-top))] pb-4 sm:pt-6 sm:pb-5"
        } ${scrolled ? "border-b-0" : "border-b border-border/40"}`}
      >
        <Link
          to="/"
          aria-label="Home"
          className="inline-flex items-baseline font-mono text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          CMA
          <span className="-ml-[0.12em] text-[1.6em] leading-none text-brand-orange sm:text-[1.8em]">
            .
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-x-5">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={navLinkClass(false)}
              >
                {link.title}
              </a>
            ) : link.isSection ? (
              <button
                key={link.href}
                type="button"
                onClick={() => handleSectionClick(link.href)}
                className={navLinkClass(false)}
              >
                {link.title}
              </button>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                aria-current={isActive(link.href, link.isSection) ? "page" : undefined}
                className={navLinkClass(isActive(link.href, link.isSection))}
              >
                {link.title}
              </Link>
            ),
          )}
          <SiteSoundtrackButton iconClassName="h-8 w-8" />
          <ThemeToggle />
          <Button
            size="sm"
            onClick={() => handleSectionClick("#contact")}
            className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full px-5 font-semibold shadow-lg shadow-brand-orange/20"
          >
            Talk to Me
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-0.5">
          <ThemeToggle />
          <SiteSoundtrackButton iconClassName="h-8 w-8" />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <span className="relative block h-4 w-6" aria-hidden>
                <span className="absolute left-0 top-0 h-px w-6 bg-foreground" />
                <span className="absolute bottom-0 left-0 h-px w-6 bg-foreground" />
              </span>
            )}
          </button>
        </div>
      </nav>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden fixed inset-0 z-[60] bg-background overflow-y-auto overscroll-contain"
              >
                <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[max(5.5rem,calc(env(safe-area-inset-top)+4.75rem))]">
                  <nav aria-label="Mobile" className="flex flex-col gap-1">
                    {navLinks.map((link) =>
                      link.external ? (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-2xl tracking-tight text-muted-foreground min-h-[52px] flex items-center active:text-foreground transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.title}
                        </a>
                      ) : link.isSection ? (
                        <button
                          key={link.href}
                          type="button"
                          onClick={() => handleSectionClick(link.href)}
                          className="font-mono text-2xl tracking-tight text-left text-muted-foreground min-h-[52px] flex items-center active:text-foreground transition-colors"
                        >
                          {link.title}
                        </button>
                      ) : (
                        <Link
                          key={link.href}
                          to={link.href}
                          className={`font-mono text-2xl tracking-tight min-h-[52px] flex items-center active:text-foreground transition-colors ${
                            isActive(link.href, link.isSection)
                              ? "text-foreground underline decoration-brand-orange decoration-2 underline-offset-[6px]"
                              : "text-muted-foreground"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.title}
                        </Link>
                      ),
                    )}
                  </nav>

                  <div className="mt-8 pt-6 border-t border-border/40">
                    <Button
                      onClick={() => handleSectionClick("#contact")}
                      className="w-full min-h-[52px] bg-brand-orange hover:bg-brand-orange/90 text-white py-5 rounded-xl text-sm font-bold shadow-lg shadow-brand-orange/20"
                    >
                      Talk to Me
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </header>
  );
};

export default Header;
