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
      className="relative min-h-[100dvh] pt-20 lg:pt-28 bg-background overflow-hidden flex flex-col justify-center"
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

      <div className="container mx-auto px-6 z-10 py-4 lg:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4 items-center max-w-5xl mx-auto">
          {/* Text content on the left */}
          <motion.div
            className="text-left order-last lg:order-first mt-2 lg:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1
              className="text-2xl lg:text-7xl font-bold leading-tight mb-1 lg:mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-foreground">Hi I'm </span>
              <motion.span
                className="text-orange inline-block relative"
                animate={{
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 0px rgb(25 209 230 / 0)",
                    "0 0 20px rgb(25 209 230 / 0.5)",
                    "0 0 0px rgb(25 209 230 / 0)"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: "linear-gradient(45deg, #19d1e6, #14a8b9, #19d1e6)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    background: "linear-gradient(45deg, #19d1e6, #14a8b9, #108592, #14a8b9, #19d1e6)",
                    backgroundSize: "400% 400%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Congo
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Rotating titles with less margin */}
            <div className="text-base lg:text-3xl font-medium mb-1 lg:mb-4 h-6 lg:h-10 flex items-center relative">
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
                  className="text-muted-foreground absolute"
                >
                  {titles[currentTitleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className="text-muted-foreground text-sm lg:text-lg leading-relaxed mb-3 lg:mb-6 max-w-lg">
              Passionate about turning real-world problems into impactful digital solutions that drive growth, success, and meaningful impact, one code at a time
            </p>

            <div className="flex flex-col gap-1 lg:gap-2 mb-4 lg:mb-8">
              <div className="flex items-center text-muted-foreground text-[10px] lg:text-sm">
                <MapPin className="w-3.5 h-3.5 text-orange mr-2" />
                <span>Accra and Takoradi, Ghana • Freelancer</span>
              </div>
              <div className="flex items-center text-muted-foreground text-[10px] lg:text-sm">
                <Mail className="w-3.5 h-3.5 text-orange mr-2" />
                <a href="mailto:amusahcongo@gmail.com" className="hover:text-orange transition-colors">amusahcongo@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 lg:gap-4">
              <a href="https://flowcv.com/resume/wtaak1n6a414" target="_blank" rel="noopener noreferrer">
                <Button className="bg-orange hover:bg-orange/90 text-orange-foreground px-5 lg:px-8 py-1.5 lg:py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange/20 text-xs lg:text-base">
                  Download CV
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" className="text-foreground hover:bg-muted px-5 lg:px-8 py-1.5 lg:py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 border-2 text-xs lg:text-base">
                  View Portfolio
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Profile image on the right with capsule shape */}
          <motion.div
            className="flex flex-col items-center lg:items-end order-first lg:order-last relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-row items-center gap-3 lg:gap-10">
              <div className="relative w-80 h-80 md:w-80 md:h-80">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-orange/10 rounded-3xl transform rotate-6 border-2 border-orange/10 backdrop-blur-sm"></div>
                  <img
                    src={profileImage}
                    alt="Congo Musah Adama"
                    className="relative w-full h-full object-cover rounded-3xl shadow-2xl z-10"
                  />

                  {/* Subtle accent shadows/glows */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 lg:w-32 lg:h-32 bg-orange/5 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-8 -left-8 w-16 h-16 lg:w-40 lg:h-40 bg-cyan/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>
              </div>

              {/* Social Links on the right of the image - closer now */}
              <div className="hidden lg:flex flex-col items-center gap-6">
                <div className="w-[1px] h-12 bg-border mb-2" />
                <span className="[writing-mode:vertical-lr] text-xs font-medium tracking-widest text-muted-foreground mb-4 uppercase whitespace-nowrap">Socials</span>
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 text-muted-foreground hover:text-orange transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Icons for mobile only */}
            <motion.div
              className="flex justify-center gap-4 mt-12 w-full lg:hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 transition-all duration-300 hover:scale-110 active:scale-95 scale-90"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
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
            className="w-1 h-2 bg-orange rounded-full"
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

