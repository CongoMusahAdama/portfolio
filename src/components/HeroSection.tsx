
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const techStack = [
    { name: "React", path: "/lovable-uploads/antigravity-logo.png" },
    { name: "TypeScript", path: "/lovable-uploads/cursor-logo.png" },
    { name: "Node.js", path: "/lovable-uploads/nestjs-logo.png" },
    { name: "Machine Learning", path: "/lovable-uploads/ml-brain.png" },
    { name: "Discord", path: "/lovable-uploads/discord-logo.png" },
    { name: "NestJS", path: "/lovable-uploads/nestjs-logo.png" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] bg-background flex flex-col pt-24 md:pt-32 overflow-hidden"
    >
      {/* Background Vertical Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
        <div className="container mx-auto h-full px-6 flex justify-between">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-foreground" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Content (Text) - First on mobile */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="lg:col-span-7 order-1 lg:order-1 flex flex-col gap-6 md:gap-8 relative"
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-brand-orange">
                    Software Engineer & Machine Learning
                  </span>
                  <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 text-brand-orange" />
                </div>
                <div className="h-[1px] w-full bg-brand-orange/30 mt-1" />
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <h1 className="text-[2.6rem] md:text-7xl lg:text-8xl font-display font-black leading-[1.05] tracking-tight text-foreground relative">
                Creating The <br />
                Best Digital <br />
                <span className="relative inline-block">
                  Solution
                  
                  {/* Curly Arrow - Perfectly Refined & Bold Calligraphic Swoosh */}
                  <div className="absolute -left-28 md:-left-44 bottom-2 md:bottom-4 hidden md:block select-none pointer-events-none w-28 md:w-36 h-28 md:h-36">
                    <svg viewBox="0 0 115 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-orange w-full h-full opacity-90 transition-opacity hover:opacity-100 duration-700">
                      <path 
                        d="M5 85 C 15 95 35 90 45 70 C 50 45 35 30 25 50 C 15 70 45 95 75 90 C 95 85 105 65 108 45" 
                        stroke="currentColor" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        fill="none" 
                      />
                      <path 
                        d="M98 58 L 108 45 L 115 55" 
                        stroke="currentColor" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        fill="none" 
                      />
                    </svg>
                  </div>
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-muted-foreground text-xs md:text-base max-w-md leading-relaxed text-left"
            >
              Congo Musah Adama — A Product Builder who uses <span className="text-foreground font-semibold">engineering</span> as a tool to create impactful digital solutions.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2 md:pt-4"
            >
              <Button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 md:px-8 font-black py-5 md:py-7 bg-foreground text-background hover:bg-foreground/90 rounded-none uppercase text-[10px] md:text-xs tracking-widest transition-all"
              >
                View Projects
              </Button>
              
              <Button
                variant="outline"
                className="px-6 md:px-8 font-black py-5 md:py-7 border-2 border-foreground/20 hover:border-brand-orange hover:text-brand-orange rounded-none uppercase text-[10px] md:text-xs tracking-widest transition-all gap-2"
                asChild
              >
                <a href="https://flowcv.com/resume/wtaak1n6a414" target="_blank" rel="noopener noreferrer">
                   Download CV
                </a>
              </Button>
              <div className="flex items-center gap-4 px-4 md:px-0 mt-4 md:mt-0">
                <a href="mailto:amusahcongo@gmail.com" className="flex items-center gap-2 text-foreground/40 hover:text-foreground transition-all group/mail mr-2">
                  <Mail className="w-4 h-4 group-hover/mail:text-brand-orange transition-colors" />
                  <span className="text-[10px] md:text-xs font-bold tracking-wide hidden sm:inline">amusahcongo@gmail.com</span>
                </a>
                <div className="w-px h-4 bg-border/40 mr-2 md:block hidden" />
                <a href="https://github.com/CongoMusahAdama" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/1real_vee" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-foreground transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content (Image) - Second on mobile, slightly larger */}
          <div className="lg:col-span-5 order-2 lg:order-2 relative flex items-center justify-center mt-0 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
              className="relative w-full max-w-[210px] md:max-w-md lg:max-w-lg"
            >
              <img
                src="/lovable-uploads/profilelove.jpg"
                alt="Congo Musah Adama"
                className="w-full h-auto object-contain transition-transform duration-700 md:hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Compact Tech Stack Marquee Section */}
      <div className="w-full bg-background border-y border-border/40 py-6 md:py-8 mt-12 md:mt-20 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

        <div className="flex whitespace-nowrap overflow-hidden">
          <motion.div
            className="flex items-center gap-10 md:gap-16 px-10 md:px-16"
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`} 
                className="flex items-center gap-3 shrink-0 transition-all duration-500 cursor-pointer group"
              >
                <div className="h-6 md:h-7 w-auto flex items-center">
                  <img src={tech.path} alt={tech.name} className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="font-display font-black text-[10px] md:text-xs tracking-widest uppercase text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
            
            {[...techStack, ...techStack].map((tech, index) => (
              <div 
                key={`${tech.name}-dup-${index}`} 
                className="flex items-center gap-3 shrink-0 transition-all duration-500 cursor-pointer group"
              >
                <div className="h-6 md:h-7 w-auto flex items-center">
                  <img src={tech.path} alt={tech.name} className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <span className="font-display font-black text-[10px] md:text-xs tracking-widest uppercase text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}} />
    </section>
  );
};

export default HeroSection;
