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
  // Updated profile image from newly uploaded file
  const profileImage = "/lovable-uploads/9522cc90-6833-4b56-a2df-059f0ddcab45.png";

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
