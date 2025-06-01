
import { Button } from "@/components/ui/button";
import { Download, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  profileImage: string;
}

const HeroSection = ({ profileImage }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen pt-24 overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-400/15 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-orange-600/8 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/2 left-1/5 w-1 h-1 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Profile image with enhanced design */}
          <motion.div 
            className="relative w-80 h-80 mx-auto lg:mx-0 order-last lg:order-none"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Outer decorative circle */}
            <div className="absolute inset-[-20px] rounded-full bg-gradient-to-r from-orange-500/20 to-pink-500/20 animate-spin-slow"></div>
            
            {/* Inner decorative circle */}
            <div className="absolute inset-[-10px] rounded-full bg-gradient-to-l from-orange-400/30 to-pink-400/30 animate-spin-reverse"></div>
            
            {/* Orange accent circle */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
            
            <img 
              src={profileImage} 
              alt="Congo Musah Adama" 
              className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
            />
          </motion.div>
          
          <motion.div 
            className="pt-0 lg:pt-0 max-w-2xl text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-400 text-sm font-medium mb-4">
                About Me
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Get a website that will make a{" "}
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text">
                lasting impression
              </span>{" "}
              on your audience!!!
            </motion.h1>

            <motion.p 
              className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Highly motivated and experienced software engineer with a strong passion for building scalable, efficient, and reliable systems that solves felt needs and drives business growth.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <span className="text-orange-400 font-medium w-20">Name:</span>
                  <span>Congo Musah Adama</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-orange-400 font-medium w-20">Phone:</span>
                  <span>+233 531 878 243</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 text-orange-400 mr-3" />
                  <a href="mailto:amusahcongo@gmail.com" className="hover:text-orange-400 transition-colors">amusahcongo@gmail.com</a>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 text-orange-400 mr-3" />
                  <span>Takoradi, Ghana</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a href="#projects">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-8 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Contact Me
                </Button>
              </a>
              <a href="https://drive.google.com/file/d/1gejHNj4tP7kpchFHv0vUlJy4n-cpl31e/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-400 py-3 px-8 rounded-full font-medium bg-transparent backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                  <Download className="mr-2 h-4 w-4" /> Download My Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
