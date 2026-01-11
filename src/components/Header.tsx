import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionClick = (href: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const navLinks = [
    { title: "Home", href: "/", external: false, isSection: false },
    { title: "About", href: "/about", external: false, isSection: false },
    { title: "Services", href: "/services", external: false, isSection: false },
    { title: "Projects", href: "#projects", external: false, isSection: true },
    { title: "Skills", href: "#skills", external: false, isSection: true },
    { title: "Testimonials", href: "#testimonials", external: false, isSection: true },
    { title: "Blog", href: "https://dev.to/congomusah", external: true, isSection: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrollPosition > 20
        ? "py-3 px-4 md:px-6"
        : "py-6 px-4 md:px-6"
        }`}
    >
      <div
        className={`container mx-auto transition-all duration-500 rounded-px ${scrollPosition > 20
          ? "max-w-5xl bg-background/80 backdrop-blur-md border border-border/50 shadow-lg rounded-2xl px-6 py-2"
          : "max-w-7xl bg-transparent border-transparent px-0 py-0"
          }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="group flex items-center gap-2"
          >
            <img
              src="/lovable-uploads/ad4fce9f-936a-49dd-a850-844ccbc26dce.png"
              alt="Logo"
              className="w-8 h-8 object-contain group-hover:rotate-6 transition-transform"
            />
            <AnimatePresence>
              {scrollPosition <= 20 && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="font-bold text-lg lg:text-xl tracking-tight text-foreground hidden sm:block whitespace-nowrap"
                >
                  Congo Musah Adama<span className="text-orange">.</span>
                </motion.span>
              )}
            </AnimatePresence>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group/nav">
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/nav:opacity-100 transition-opacity" />
                  </a>
                ) : link.isSection ? (
                  <button
                    onClick={() => handleSectionClick(link.href)}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.title}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${location.pathname === link.href
                      ? "text-orange"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.title}
                  </Link>
                )}
                {location.pathname === link.href && !link.isSection && !link.external && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-orange"
                  />
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <a href="#contact" onClick={(e) => { e.preventDefault(); handleSectionClick('#contact'); }}>
              <Button size="sm" className="hidden md:flex bg-orange hover:bg-orange/90 text-white rounded-full px-5 font-semibold transition-all hover:scale-105 active:scale-95">
                Talk to Me
              </Button>
            </a>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Refined & Non-Intrusive */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Click-out backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-background/20 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="md:hidden absolute top-20 right-4 w-[240px] bg-background/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl overflow-hidden z-50 origin-top-right"
            >
              <div className="p-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-foreground hover:bg-orange/5 hover:text-orange rounded-xl transition-all"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                        <ArrowUpRight className="w-4 h-4 opacity-50" />
                      </a>
                    ) : link.isSection ? (
                      <button
                        onClick={() => handleSectionClick(link.href)}
                        className="flex items-center w-full px-4 py-3 text-sm font-semibold text-foreground hover:bg-orange/5 hover:text-orange rounded-xl transition-all"
                      >
                        {link.title}
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className={`flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-all ${location.pathname === link.href
                          ? 'bg-orange/10 text-orange'
                          : 'text-foreground hover:bg-orange/5 hover:text-orange'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <Button
                    onClick={() => handleSectionClick('#contact')}
                    className="w-full bg-orange hover:bg-orange/90 text-white py-5 rounded-xl text-sm font-bold shadow-lg shadow-orange/20"
                  >
                    Get in Touch
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
