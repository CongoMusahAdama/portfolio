
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { title: "Home", href: "#hero" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Testimonials", href: "#testimonials" },
    { title: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: "https://github.com/CongoMusahAdama",
      label: "GitHub"
    },
    { 
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>, 
      href: "https://twitter.com/1real_vee",
      label: "X"
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: "https://linkedin.com/in/musah-congo-766bb3224",
      label: "LinkedIn"
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? "bg-background/95 shadow-sm backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#" 
            className="font-bold text-xl text-foreground hover:text-orange transition-colors"
          >
            Congo Musah Adama
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4 ml-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button 
              className="text-foreground hover:text-orange transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border py-4 px-6 shadow-lg animate-fade-in">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-6 mt-6 py-2 border-t border-border">
            {socialLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
