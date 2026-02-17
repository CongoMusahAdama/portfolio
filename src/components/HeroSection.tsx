
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, MessageSquare, Briefcase, Zap, Code, Database, Smartphone, Palette, ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen lg:min-h-screen bg-background md:pt-48 pb-12 md:pb-16 overflow-hidden flex flex-col items-center justify-center transition-colors duration-500"
    >
      {/* Mobile Design (Fitting single screen) */}
      <div className="md:hidden w-full h-[100dvh] flex flex-col items-center px-6 pt-16 pb-6 relative z-20">
        {/* Header Bar */}
        <div className="w-full flex items-center justify-center mb-8">
          <h2 className="text-lg font-bold font-display uppercase tracking-widest text-foreground">Profile</h2>
        </div>

        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-6"
        >
          <div className="w-24 h-24 rounded-full border-4 border-brand-orange/20 p-1">
            <img
              src="/lovable-uploads/image copy 3.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center border-2 border-background shadow-lg">
            <Zap className="w-3 h-3 text-white fill-white" />
          </div>
        </motion.div>

        <div className="text-center mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl font-black text-foreground uppercase tracking-tight mb-2"
          >
            Congo Musah Adama
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.2em]">Software Engineer</span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Product Builder</span>
          </motion.div>
        </div>

        {/* Stats Row - Simplified to only Projects */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full flex items-center justify-center py-2 border-y border-border/30 mb-6"
        >
          <div className="flex flex-col items-center">
            <span className="text-xl font-black text-foreground">12+</span>
            <span className="text-[10px] text-muted-foreground uppercase font-black tracking-[0.2em]">Live Projects</span>
          </div>
        </motion.div>

        {/* Restored About Content */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full flex-1 flex flex-col justify-center text-center px-4"
        >
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            A Product Builder who uses <span className="text-brand-orange font-bold italic">engineering</span> as a tool to create impactful digital solutions.
          </p>

          {/* Social Links for Mobile */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <a href="https://github.com/CongoMusahAdama" target="_blank" rel="noopener noreferrer" className="text-foreground/30 hover:text-brand-orange transition-all scale-110 active:scale-95">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/" target="_blank" rel="noopener noreferrer" className="text-foreground/30 hover:text-brand-orange transition-all scale-110 active:scale-95">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="https://twitter.com/1real_vee" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-brand-orange transition-all scale-110 active:scale-95">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
          </div>

          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-foreground text-[10px] font-black uppercase tracking-[0.2em] underline decoration-brand-orange decoration-2 underline-offset-8"
          >
            Full Story
          </button>
        </motion.div>


        {/* CTAs - Fixed at bottom */}
        <div className="w-full flex gap-3 mt-6 pt-4 border-t border-border/10">
          <Button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 px-4 py-4 bg-brand-orange text-white rounded-full font-bold uppercase text-[10px] tracking-widest"
          >
            Projects
          </Button>
          <a href="https://flowcv.com/resume/wtaak1n6a414" target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button
              variant="outline"
              className="w-full px-4 py-4 bg-transparent border-2 border-foreground rounded-full font-bold uppercase text-[10px] tracking-widest"
            >
              Resume
            </Button>
          </a>
        </div>
      </div>

      {/* Desktop Design (Preserved Cinematic Style) */}
      <div className="hidden md:flex container mx-auto px-6 z-20 flex-col items-center relative gap-0 mb-12 md:mb-0">
        {/* Intro Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mt-4 md:mt-12"
        >
          <p className="text-[10px] md:text-xs font-bold text-foreground uppercase tracking-[0.2em] border-b border-brand-orange/30 pb-1">
            Hi, I am <span className="text-foreground">Congo Musah Adama</span>
          </p>
        </motion.div>

        {/* Cinematic Headlines */}
        <div className="relative w-full flex flex-col items-center text-center mt-4 md:mt-0">
          {/* Main Title - Outlined PRODUCT BUILDER with Shifting Reveal */}
          <div className="overflow-hidden py-2">
            <motion.h1
              className="text-[6vw] sm:text-[7vw] md:text-[5.5vw] font-display font-black leading-none tracking-tighter uppercase text-foreground z-10 whitespace-nowrap"
              style={{
                WebkitTextStroke: '1px currentColor',
                WebkitTextFillColor: 'transparent',
                opacity: 1
              }}
            >
              {"{PRODUCT BUILDER}".split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 * index,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block relative"
                >
                  {letter === "O" ? (
                    <span className="relative inline-flex items-center justify-center group mx-1">
                      {letter}
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: (0.1 * index) + 0.6,
                          type: "spring",
                          stiffness: 100
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-[5vw] h-[5vw] md:w-[3vw] md:h-[3vw] flex items-center justify-center rounded-full bg-background border-[1px] md:border-2 border-foreground shadow-sm">
                          <ArrowUpRight className="w-1/2 h-1/2 text-brand-orange" strokeWidth={3} />
                        </div>
                      </motion.div>
                    </span>
                  ) : letter === " " ? (
                    <span className="inline-block w-[1.5vw] md:w-[1vw]">&nbsp;</span>
                  ) : (
                    letter
                  )}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black leading-snug tracking-normal text-foreground z-20 md:mt-2 max-w-4xl px-4 relative mt-4"
          >
            who uses <span className="text-brand-orange font-bold lowercase italic underline decoration-brand-orange/30 decoration-2 underline-offset-8">engineering</span> as a tool.
          </motion.h2>

        </div>
      </div>

      {/* Footer Section (Desktop) */}
      <div className="hidden md:flex container mx-auto px-6 z-40 relative flex-col md:flex-row items-center justify-between md:mt-auto mt-8 pb-12 w-full max-w-6xl gap-10 md:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <span className="text-[11px] font-black text-foreground uppercase tracking-[0.3em]">Software Engineer</span>
          <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-[0.3em]">Product Strategy Thinker</span>
          <div className="w-12 h-1 bg-brand-orange mt-2" />
        </motion.div>

        {/* Desktop Email Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden md:flex flex-col items-center gap-1 group md:pt-8"
        >
          <a
            href="mailto:amusahcongo@gmail.com"
            className="flex flex-col items-center gap-1"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-orange font-black">Drop a mail</span>
            <span className="text-sm font-medium text-foreground group-hover:text-brand-orange transition-colors duration-300 underline decoration-brand-orange/20 underline-offset-8">amusahcongo@gmail.com</span>
          </a>

          {/* Integrated Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground/30 hover:text-brand-orange transition-colors cursor-pointer mt-4 group/scroll"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="w-[1px] h-12 bg-current relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-brand-orange"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <span className="text-[9px] uppercase tracking-[0.4em] font-bold">Scroll</span>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-row items-center gap-3 w-auto"
        >
          <Button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-5 bg-brand-orange text-white hover:bg-brand-orange/90 rounded-none font-bold uppercase text-[9px] tracking-[0.15em] transition-all duration-300 shadow-[0_10px_20px_rgba(255,87,36,0.2)]"
          >
            view projects
          </Button>
          <a href="https://flowcv.com/resume/wtaak1n6a414" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="px-6 py-5 bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-none font-bold uppercase text-[9px] tracking-[0.15em] transition-all duration-300"
            >
              download cv
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Desktop Social Sidebar */}
      <motion.div
        className="fixed left-6 bottom-12 hidden lg:flex flex-col items-center gap-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="w-[1px] h-20 bg-border/40" />
        <a href="https://github.com/CongoMusahAdama" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 group">
          <Github className="w-5 h-5 text-foreground/40 group-hover:text-brand-orange transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 group">
          <svg className="w-5 h-5 text-[#0077b5]/60 group-hover:text-brand-orange transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
        </a>
        <a href="https://twitter.com/1real_vee" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300 group">
          <svg className="w-4 h-4 text-foreground/40 group-hover:text-brand-orange transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
