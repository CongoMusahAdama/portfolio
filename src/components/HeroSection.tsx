
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface HeroSectionProps {
  profileImage: string;
}

const HeroSection = ({ profileImage }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative bg-white min-h-screen pt-24 flex items-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 z-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-in-up order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Congo Musah Adama
            </h1>
            <h2 className="text-xl md:text-2xl text-orange-500 font-medium mt-2 md:mt-4">
              Backend Software Engineer | Scalable Systems Builder
            </h2>
            
            <p className="text-gray-600 mt-6 text-lg max-w-xl">
              Highly motivated and experienced backend software engineer with a strong passion for building scalable, efficient, and reliable systems.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md font-medium">
                  View Projects
                </Button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 py-2 px-6 rounded-md font-medium">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-orange-500/20 p-1 animate-fade-in">
              <img 
                src={profileImage} 
                alt="Congo Musah Adama" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
      
      <div className="wave-animation"></div>
    </section>
  );
};

export default HeroSection;
