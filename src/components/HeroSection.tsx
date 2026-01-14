import { Button } from "@/components/ui/button";
import { MapPin, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


interface HeroSectionProps {
  profileImage?: string;
}

const HeroSection = ({ profileImage }: HeroSectionProps) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ["Software Engineer", "Product Strategy Thinker"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [titles.length]);

  const socialLinks = [
    {
      icon: <div className="p-2 bg-[#24292e] rounded-full text-white"><Github className="w-5 h-5" /></div>,
      href: "https://github.com/CongoMusahAdama",
      label: "GitHub"
    },
    {
      icon: <div className="p-2 bg-black rounded-full text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg></div>,
      href: "https://twitter.com/1real_vee",
      label: "X"
    },
    {
      icon: <div className="p-2 bg-[#0077b5] rounded-full text-white"><Linkedin className="w-5 h-5" /></div>,
      href: "https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/",
      label: "LinkedIn"
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen-dvh pt-28 md:pt-20 pb-12 md:pb-20 bg-background overflow-hidden flex flex-col items-center justify-start md:justify-center text-foreground transition-colors duration-500"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Background Elements */}

        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
      </div>

      {/* Decorative Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] -z-10 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-br from-brand-pink/20 to-cyan/20 rounded-full blur-[80px] md:blur-[100px]" />
      </div>

      <div className="container mx-auto px-5 md:px-6 z-10 flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          {/* Announcement Pill - Theme Aware with Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 pl-1.5 pr-3.5 py-1.5 rounded-full bg-card/50 backdrop-blur-sm border border-border shadow-sm text-muted-foreground hover:bg-muted md:hover:bg-muted transition-colors text-xs sm:text-sm font-medium mb-4 md:mb-6 cursor-pointer group tap-highlight-none"
          >
            <div className="relative flex-shrink-0 w-6 h-6 rounded-full overflow-hidden border border-white/20 shadow-inner">
              <img
                src="/lovable-uploads/image copy 3.png"
                alt="Profile"
                className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <span className="font-sans flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-pink opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-pink"></span>
              </span>
              Hi, I'm <span className="font-bold">Congo Musah</span>
            </span>
            <svg
              className="w-3.5 h-3.5 transition-transform md:group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] md:leading-[1.1] mb-4 md:mb-6 tracking-normal md:tracking-wide w-full px-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A product builder who&nbsp;uses <br /> <span className="text-brand-pink font-mono font-bold lowercase italic leading-none whitespace-nowrap">engineering</span> <span className="whitespace-nowrap">as a tool.</span>
          </motion.h1>

          <motion.div
            className="h-6 md:h-8 mb-4 md:mb-6 overflow-hidden flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={titles[currentTitleIndex]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="text-[10px] sm:text-xs md:text-sm lg:text-base font-mono font-bold text-brand-pink uppercase tracking-[0.3em] md:tracking-[0.4em] drop-shadow-sm"
              >
                {titles[currentTitleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="flex flex-row justify-center gap-3 lg:gap-5 mb-8 md:mb-10 w-full sm:w-auto mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a href="https://flowcv.com/resume/wtaak1n6a414" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button size="sm" className="w-full sm:w-auto h-11 md:h-12 bg-brand-pink hover:bg-brand-pink/90 text-white px-4 md:px-8 rounded-lg font-semibold transition-all md:hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-pink/20 text-xs md:text-base tracking-tight">
                Download CV
              </Button>
            </a>
            <a href="#projects" className="flex-1 sm:flex-none">
              <Button size="sm" variant="outline" className="w-full sm:w-auto h-11 md:h-12 bg-card border border-border text-foreground hover:bg-muted md:hover:bg-muted px-4 md:px-8 rounded-lg font-semibold transition-all md:hover:scale-[1.02] active:scale-95 text-xs md:text-base tracking-tight">
                View Projects
              </Button>
            </a>
          </motion.div>

          {/* Contact Bar - Refined & Optimized */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 w-full pt-6 md:pt-8 border-t border-border/60 mt-6 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-1.5 md:gap-2 min-w-[140px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold font-mono">Location</span>
              <div className="flex items-center text-center text-foreground font-semibold text-xs md:text-sm lg:text-base">
                <MapPin className="w-3.5 h-3.5 text-brand-pink mr-1.5 flex-shrink-0" />
                <span>Takoradi / Accra</span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1.5 md:gap-2 min-w-[140px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold font-mono">Drop an Email</span>
              <div className="flex items-center text-foreground font-semibold text-xs md:text-sm lg:text-base">
                <Mail className="w-3.5 h-3.5 text-brand-pink mr-1.5 flex-shrink-0" />
                <a href="mailto:amusahcongo@gmail.com" className="hover:text-brand-pink transition-colors">amusahcongo@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1.5 md:gap-2 min-w-[140px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-bold font-mono">Socials</span>
              <div className="flex gap-4 items-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground md:hover:text-brand-pink transition-all duration-300 transform md:hover:scale-110 p-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center tap-highlight-none"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator - Enhanced & Prominent */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 lg:left-12 lg:translate-x-0 flex items-center gap-4 md:gap-5 text-muted-foreground/50 hover:text-brand-pink transition-colors cursor-pointer group z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-8 h-12 md:w-10 md:h-16 border-2 border-current rounded-full flex justify-center p-2 md:p-2.5 opacity-80 md:opacity-100 shadow-md">
          <motion.div
            className="w-1.5 h-2 md:w-2.5 md:h-3.5 bg-brand-pink rounded-full shadow-[0_0_10px_rgba(255,0,128,0.5)]"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[10px] md:text-sm uppercase tracking-[0.3em] font-bold font-mono">Scroll</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
