
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
    // Close mobile menu
    setIsMenuOpen(false);
    
    // If we're not on the homepage, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
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
      // We're already on homepage, just scroll
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
    { title: "Skills", href: "#skills", external: false, isSection: true },
    { title: "Projects", href: "#projects", external: false, isSection: true },
    { title: "Testimonials", href: "#testimonials", external: false, isSection: true },
    { title: "Blog", href: "https://dev.to/congomusah", external: true, isSection: false },
    { title: "Contact", href: "#contact", external: false, isSection: true },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                        scrollPosition > 50 ? "bg-background/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="font-bold text-xl text-foreground hover:text-orange transition-colors"
          >
            Congo Musah Adama
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
                    >
                      {link.title}
                    </a>
                  ) : link.isSection ? (
                    <button
                      onClick={() => handleSectionClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm cursor-pointer"
                    >
                      {link.title}
                    </button>
                  ) : (
                    <Link 
                      to={link.href}
                      className={`text-muted-foreground hover:text-foreground transition-colors font-medium text-sm ${
                        location.pathname === link.href ? 'text-orange' : ''
                      }`}
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4 ml-4">
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
                    <div className="md:hidden bg-background py-4 px-6 shadow-lg animate-fade-in">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                ) : link.isSection ? (
                  <button
                    onClick={() => handleSectionClick(link.href)}
                    className="block text-left w-full text-muted-foreground hover:text-foreground transition-colors font-medium py-2 cursor-pointer"
                  >
                    {link.title}
                  </button>
                ) : (
                  <Link 
                    to={link.href}
                    className={`block text-muted-foreground hover:text-foreground transition-colors font-medium py-2 ${
                      location.pathname === link.href ? 'text-orange' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
