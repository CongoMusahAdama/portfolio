
import { Button } from "@/components/ui/button";
import { Download, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  profileImage: string;
}

const HeroSection = ({ profileImage }: HeroSectionProps) => {
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
              <span className="text-orange">Congo</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl lg:text-3xl text-muted-foreground font-medium mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Software Engineer
            </motion.h2>

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
              <a href="https://drive.google.com/file/d/1gejHNj4tP7kpchFHv0vUlJy4n-cpl31e/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-border text-foreground hover:bg-muted px-8 py-3 rounded-md font-medium">
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
