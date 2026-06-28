import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GitHubContributionsSection from "@/components/GitHubContributionsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SystemsSection from "@/components/SystemsSection";
import LearningSection from "@/components/LearningSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  // Framer Motion will handle animations per section

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <HeroSection />
      <GitHubContributionsSection />
      <ProjectsSection />
      <SystemsSection />
      <LearningSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
