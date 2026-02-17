import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-5 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-20">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-[280px] sm:max-w-sm mx-auto lg:mx-0 mb-8 lg:mb-0"
            >
              <div className="absolute inset-0 bg-brand-orange/10 rounded-2xl rotate-6 -z-10" />
              <img
                src="/lovable-uploads/profile.jpeg"
                alt="Congo Musah Adama"
                className="w-full h-full object-cover rounded-2xl shadow-xl grayscale md:hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-12 tracking-tight uppercase">About <span className="curvy-underline text-brand-orange">Me</span></h2>

              <div className="text-base sm:text-lg text-muted-foreground leading-relaxed space-y-6 mb-8">
                <p className="text-lg font-semibold text-foreground italic border-l-4 border-brand-orange pl-4 bg-brand-orange/5 py-3 rounded-r-lg">
                  "Passionate about turning real-world problems into impactful digital solutions that drive growth, success, and meaningful impact, one code at a time."
                </p>

                <p>
                  I'm a self-taught Software Engineer and Freelancer based in Accra and Takoradi, Ghana, with strong expertise in Python, Node.js, FastAPI, Django, and Laravel.
                </p>

                <p>
                  Outside of software development, I'm an agricultural innovator and product thinker passionate about creating user-centered solutions across diverse industries.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/5 border border-brand-orange/10 text-[10px] sm:text-xs font-bold text-brand-orange uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    Mentor - GDIW 2025
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/5 border border-brand-orange/10 text-[10px] sm:text-xs font-bold text-brand-orange uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                    Community Builder
                  </div>
                </div>
              </div>

              <Link to="/about" className="inline-block w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto min-h-[48px] group border-brand-orange/20 md:hover:border-brand-orange text-brand-orange transition-all font-semibold tap-highlight-none active:scale-95">
                  Read My Story
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform md:group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pt-12 border-t border-border/50">
            <motion.div
              className="flex flex-col items-center text-center group"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 mb-5 md:hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-brand-orange filter drop-shadow-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Problem Solving</h3>
              <p className="text-muted-foreground">Creating efficient solutions to complex challenges</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center group"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 mb-5 md:hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-brand-orange filter drop-shadow-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">API Development</h3>
              <p className="text-muted-foreground">Building robust and scalable APIs</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center text-center group"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-12 h-12 mb-5 md:hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-brand-orange filter drop-shadow-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">System Architecture</h3>
              <p className="text-muted-foreground">Designing efficient and maintainable systems</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
