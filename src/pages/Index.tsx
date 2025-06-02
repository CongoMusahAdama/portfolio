
import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  // Profile image from uploaded file
  const profileImage = "/lovable-uploads/029b5b72-9c92-4d9b-b312-ed2509b5ce91.png";

  useEffect(() => {
    // Animation for elements with .slide-in class
    const handleScroll = () => {
      const elements = document.querySelectorAll('.slide-in');
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect();
        const isVisible = elementPosition.top < window.innerHeight * 0.85;
        
        if (isVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection profileImage={profileImage} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
