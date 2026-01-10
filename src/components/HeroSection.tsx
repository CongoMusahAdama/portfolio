import { Button } from "@/components/ui/button";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  profileImage: string;
}

const HeroSection = ({ profileImage }: HeroSectionProps) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ["Software Engineer", "Product Strategy Thinker"];
  const accentImage = "/lovable-uploads/image.png";
  const accentTiles = [
    {
      className:
        "hidden md:block top-6 right-32 w-40 h-40 rotate-3",
    },
    {
      className:
        "top-32 left-4 md:left-24 w-32 h-32 -rotate-2",
    },
    {
      className:
        "bottom-8 right-6 md:right-32 w-36 h-36 rotate-6",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4500); // 4.5 seconds for each title

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
      className="relative min-h-[100dvh] pt-14 lg:pt-28 pb-32 lg:pb-0 bg-background overflow-hidden flex flex-col justify-center"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        {accentTiles.map((tile, index) => (
          <img
            key={index}
            src={accentImage}
            alt="hero accent"
            className={`absolute rounded-3xl shadow-lg opacity-80 dark:opacity-60 mix-blend-multiply dark:mix-blend-screen blur-[0.2px] ${tile.className}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 py-0 lg:py-20 relative max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Text content on the left */}
          <motion.div
            className="text-left order-last lg:order-first mt-2 lg:mt-0 flex flex-col justify-center items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {/* Social Media Icons for mobile only - Horizontal row ABOVE text, Centered below image */}
            <motion.div
              className="flex justify-center gap-4 my-3 w-full lg:hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-all duration-300 hover:scale-110 active:scale-95 bg-muted/50 rounded-full text-muted-foreground hover:text-primary"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-7xl font-bold leading-tight mb-1 lg:mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-foreground block mb-1 lg:mb-2">Hi I'm </span>
              <motion.span
                className="text-primary inline-block relative text-5xl sm:text-6xl lg:text-8xl"
                animate={{
                  scale: [1, 1.02, 1],
                  textShadow: [
                    "0 0 0px rgb(253 181 21 / 0)",
                    "0 0 15px rgb(253 181 21 / 0.3)",
                    "0 0 0px rgb(253 181 21 / 0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  backgroundImage: "linear-gradient(45deg, #fdb515, #ffcc00, #fdb515)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Congo
              </motion.span>
            </motion.h1>

            {/* Rotating titles */}
            <div className="text-base sm:text-xl lg:text-3xl font-medium mb-2 lg:mb-8 h-6 lg:h-12 flex items-center relative justify-start w-full">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(8px)" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                  }}
                  className="text-muted-foreground absolute left-0"
                >
                  {titles[currentTitleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className="text-muted-foreground text-sm sm:text-lg lg:text-xl leading-snug mb-3 lg:mb-10 max-w-[95%] lg:max-w-xl">
              Passionate about turning real-world problems into impactful digital solutions that drive growth, success, and meaningful impact, one code at a time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 mb-4 lg:mb-12 w-full max-w-md lg:max-w-none">
              <div className="flex items-center justify-start text-muted-foreground text-xs sm:text-base lg:text-base">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-primary mr-2 lg:mr-3" />
                <span>Accra and Takoradi, Ghana</span>
              </div>
              <div className="flex items-center justify-start text-muted-foreground text-xs sm:text-base lg:text-base">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-primary mr-2 lg:mr-3" />
                <a href="mailto:amusahcongo@gmail.com" className="hover:text-primary transition-colors">amusahcongo@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-row gap-3 lg:gap-5 w-full sm:w-auto justify-start">
              <a href="https://flowcv.com/resume/wtaak1n6a414" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 lg:px-6 lg:py-4 h-auto rounded-full font-bold text-xs sm:text-sm lg:text-lg transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 w-full min-h-[36px] lg:min-h-[48px]">
                  Download CV
                </Button>
              </a>
              <a href="#projects" className="flex-1 sm:flex-none">
                <Button variant="outline" className="text-foreground hover:bg-muted px-3 py-2 lg:px-6 lg:py-4 h-auto rounded-full font-bold text-xs sm:text-sm lg:text-lg transition-all hover:scale-105 active:scale-95 border-2 w-full min-h-[36px] lg:min-h-[48px]">
                  View Portfolio
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Profile image on the right with capsule shape */}
          <motion.div
            className="flex flex-col lg:flex-row justify-center lg:justify-end order-first lg:order-last relative items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 w-full justify-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px]">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-[2rem] lg:rounded-[3rem] transform rotate-6 border-2 border-primary/10 backdrop-blur-sm"></div>
                  <img
                    src={profileImage}
                    alt="Congo Musah Adama"
                    className="relative w-full h-full object-cover rounded-[2rem] lg:rounded-[3rem] shadow-2xl z-10"
                  />

                  {/* Subtle accent shadows/glows */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 lg:w-40 lg:h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 lg:w-48 lg:h-48 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>
              </div>

              {/* Social Links on the right of the image - pinned to container right */}
              <div className="hidden lg:flex flex-col items-center gap-8">
                <div className="w-[1px] h-20 bg-border mb-2" />
                <span className="[writing-mode:vertical-lr] text-xs font-semibold tracking-[0.2em] text-muted-foreground mb-4 uppercase whitespace-nowrap">Follow Me</span>
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 active:scale-95 bg-muted/30 rounded-full"
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

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-12 hidden lg:flex items-center gap-3 text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <span className="text-xs font-medium uppercase tracking-widest">Scroll down</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;

