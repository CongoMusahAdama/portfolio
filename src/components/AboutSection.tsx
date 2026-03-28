import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-12 md:py-16 bg-background overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* Top Row: Condensed Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Narrative Focus */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-foreground uppercase leading-[0.9]">
                About <br /> <span className="text-brand-orange">Me</span>
              </h2>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="flex items-center gap-2 px-3 py-1 bg-muted/30 border border-border/50 text-[10px] font-black uppercase tracking-widest text-foreground">
                  <span className="w-1 h-1 rounded-full bg-brand-orange animate-pulse" />
                  Mentor
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-muted/30 border border-border/50 text-[10px] font-black uppercase tracking-widest text-foreground">
                  <span className="w-1 h-1 rounded-full bg-brand-orange animate-pulse" />
                  Community Builder
                </span>
              </div>
            </div>

            {/* Right: Detailed Narrative */}
            <div className="lg:col-span-7 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base text-muted-foreground leading-relaxed font-medium">
                <p>
                  I'm a self-taught <span className="text-foreground font-black">Software Engineer</span> based in Ghana. I bridge the gap between technical complexity, user-centered design, and <span className="text-foreground font-black">Machine Learning</span>.
                </p>
                <p>
                  Outside of code, I'm an agricultural innovator and product thinker, dedicated to creating solutions that serve diverse industries and solve practical challenges.
                </p>
              </div>

              {/* Tiled Professional Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-border/20">
                {[
                  { title: "API Development", desc: "Robust, scalable backend architectures.", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
                  { title: "Strategic Thinking", desc: "Strategic thinking with intelligent details.", icon: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" },
                  { title: "Architectural", desc: "Designing maintainable system structures.", icon: "M2 3h20v14H2zM8 21h8M12 17v4" },
                ].map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="w-6 h-6 mb-3 text-muted-foreground group-hover:text-brand-orange transition-colors duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                      </svg>
                    </div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-foreground group-hover:text-brand-orange transition-colors">{feature.title}</h4>
                    <p className="text-[9px] text-muted-foreground font-bold mt-1">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="pt-6"
              >
                <Link to="/about">
                  <Button className="h-12 px-10 bg-foreground text-background hover:bg-brand-orange transition-all duration-500 rounded-none font-black uppercase text-[10px] tracking-[0.2em] shadow-xl group">
                    Read Story
                    <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
