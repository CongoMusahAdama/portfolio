
import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  profileImage: string;
}

const HeroSection = ({ profileImage }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative bg-white min-h-screen pt-24 flex items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:gap-16 items-center">
          {/* Top-right positioned profile image for all screen sizes */}
          <div className="absolute top-32 right-10 lg:right-20 z-10">
            <motion.div 
              className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-4 border-orange-500/20 p-1 overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={profileImage} 
                alt="Congo Musah Adama" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
          
          <motion.div 
            className="pt-0 lg:pt-0 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Congo Musah Adama
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-500 font-medium mt-2 md:mt-4">
              Software Engineer
            </h2>
            
            <p className="text-gray-600 mt-6 text-lg max-w-xl">
              Highly motivated and experienced software engineer with a strong passion for building scalable, efficient, and reliable systems that solves felt needs and drives business growth.
            </p>
            
            <div className="flex items-center mt-4 text-gray-600">
              <MapPin className="w-5 h-5 text-orange-500 mr-2" />
              <span>Takoradi, Ghana</span>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md font-medium">
                  View Projects
                </Button>
              </a>
              <a href="https://drive.google.com/file/d/1jQl6Cr0qJSIT_6ljixZxE2dXHgGQKu7J/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 py-2 px-6 rounded-md font-medium">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="wave-animation"></div>
    </section>
  );
};

export default HeroSection;
