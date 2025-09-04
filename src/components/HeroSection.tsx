
import { Button } from "@/components/ui/button";
import { Download, MapPin, Mail, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  profileImage: string;
}

const HeroSection = ({ profileImage }: HeroSectionProps) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ["Software Engineer", "Product Strategy Thinker"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4500); // 4.5 seconds for each title

    return () => clearInterval(interval);
  }, [titles.length]);

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
    <section 
      id="hero" 
      className="relative min-h-screen pt-24 bg-background"
    >
      <div className="container mx-auto px-6 z-10 py-20 lg:py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Profile image on the left */}
          <motion.div 
            className="relative w-80 h-80 mx-auto lg:mx-0 order-first lg:order-first"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-orange/10 rounded-3xl transform rotate-6"></div>
              <img 
                src={profileImage} 
                alt="Congo Musah Adama" 
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl z-10"
              />
            </div>
            
            {/* Social Media Icons under profile */}
            <motion.div 
              className="flex justify-center gap-4 mt-6"
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
                  className="p-3 bg-background/80 backdrop-blur-sm rounded-full text-muted-foreground hover:text-orange hover:bg-orange/10 transition-all duration-300 shadow-sm"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Text content on the right */}
          <motion.div 
            className="text-left order-last lg:order-last"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="text-foreground">Hi I'm </span>
              <motion.span 
                className="text-orange inline-block relative"
                animate={{
                  scale: [1, 1.1, 1],
                  textShadow: [
                    "0 0 0px rgb(249 115 22 / 0)",
                    "0 0 20px rgb(249 115 22 / 0.5)",
                    "0 0 0px rgb(249 115 22 / 0)"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  background: "linear-gradient(45deg, #f97316, #ea580c, #f97316)",
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
                    background: "linear-gradient(45deg, #f97316, #ea580c, #dc2626, #ea580c, #f97316)",
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
            
            {/* Rotating titles */}
            <div className="text-2xl lg:text-3xl font-medium mb-6 h-12 flex items-center">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentTitleIndex}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
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

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Passionate about turning real-world problems into impactful digital solutions that drive growth, success, and meaningful impact, one code at a time
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 text-orange mr-3" />
                <span className="font-medium">Takoradi, Ghana</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 text-orange mr-3" />
                <a href="mailto:amusahcongo@gmail.com" className="hover:text-orange transition-colors font-medium">amusahcongo@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button className="bg-orange hover:bg-orange/90 text-orange-foreground px-8 py-3 rounded-md font-medium">
                  Get In Touch
                </Button>
              </a>
              <a href="https://flowcv.com/resume/wtaak1n6a414" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="text-foreground hover:bg-muted px-8 py-3 rounded-md font-medium">
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
