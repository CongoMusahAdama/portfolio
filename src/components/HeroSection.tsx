
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
      className="relative min-h-screen pt-24 overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/551b2be4-1ad9-4401-8a29-a851eb72bb85.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced overlay for better visibility in both themes */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-white/70 dark:from-gray-900/85 dark:via-gray-900/75 dark:to-gray-900/65" />
      
      {/* Additional dark overlay for light mode text visibility */}
      <div className="absolute inset-0 bg-black/15 dark:bg-black/5" />
      
      {/* Additional subtle pattern overlay for texture */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 z-10 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text content on the left */}
          <motion.div 
            className="pt-0 lg:pt-0 max-w-2xl order-first"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">Hey, I'm </span>
              <span className="text-foreground drop-shadow-lg">Congo Musah Adama</span>
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl text-orange-500 font-medium mt-2 md:mt-4 drop-shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Software Engineer
            </motion.h2>

            <p className="text-muted-foreground mt-6 text-lg max-w-xl drop-shadow-lg font-medium">
              Passionate about turning real-world problems into impactful digital solutions that drive growth, success, and meaningful impact, one code at a time
            </p>

            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 text-orange-500 mr-2" />
                <span className="drop-shadow-lg font-medium">Takoradi, Ghana</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 text-orange-500 mr-2" />
                <a href="mailto:amusahcongo@gmail.com" className="hover:text-orange-500 transition-colors drop-shadow-lg font-medium">amusahcongo@gmail.com</a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md font-medium shadow-lg">
                  View Projects
                </Button>
              </a>
              <a href="https://drive.google.com/file/d/1gejHNj4tP7kpchFHv0vUlJy4n-cpl31e/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950 py-2 px-6 rounded-md font-medium bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Profile image on the right */}
          <motion.div 
            className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto lg:mx-0 order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Outer spinning border */}
            <div className="absolute inset-[-4px] rounded-full border-2 border-orange-500 opacity-80 animate-spin-slow z-0"></div>

            {/* Inner spinning border - reverse direction */}
            <div className="absolute inset-[-2px] rounded-full border border-orange-400 opacity-70 animate-spin-reverse z-0"></div>

            {/* Profile image */}
            <img 
              src={profileImage} 
              alt="Congo Musah Adama" 
              className="relative w-full h-full object-cover rounded-full border-4 border-background shadow-lg z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
