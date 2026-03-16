import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Monitor, Smartphone, ChevronDown, CheckCircle2 } from "lucide-react";
import useIntersectionObserver from '@/hooks/use-intersection-observer';

interface Project {
  id: number;
  title: string;
  description: string;
  problem?: string;
  approach?: string;
  image: string;
  mobileImage?: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  websiteUrl?: string;
  status?: string;
  rating?: number;
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const [activeView, setActiveView] = useState<'web' | 'mobile'>('web');
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`group grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start`}
    >
      {/* Image Showcase Section */}
      <div className={`lg:col-span-7 relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} lg:sticky lg:top-32`}>
        {/* Background Glass Plate */}
        <div className="absolute -inset-4 bg-brand-orange/5 dark:bg-white/[0.02] rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* View Switcher Tabs - Hidden on mobile, shown on desktop */}
        {project.mobileImage && (
          <div className="absolute -top-12 left-0 right-0 hidden lg:flex justify-start gap-4 z-30">
            <button
              onClick={() => setActiveView('web')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                activeView === 'web' 
                ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
                : 'bg-muted/50 text-muted-foreground hover:bg-muted font-bold border border-border/50'
              }`}
            >
              <Monitor className="w-3 h-3" /> Web View
            </button>
            <button
              onClick={() => setActiveView('mobile')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                activeView === 'mobile' 
                ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20' 
                : 'bg-muted/50 text-muted-foreground hover:bg-muted font-bold border border-border/50'
              }`}
            >
              <Smartphone className="w-3 h-3" /> Mobile View
            </button>
          </div>
        )}

        <div className="relative aspect-[16/10] sm:aspect-[16/9.5] rounded-2xl overflow-hidden border border-border/50 bg-black/5 dark:bg-muted/40 shadow-2xl transition-all duration-700">
          <AnimatePresence mode="wait">
            {activeView === 'web' ? (
              <motion.div
                key="web"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex flex-col"
              >
                {/* Browser Header Mockup */}
                <div className="h-9 md:h-11 bg-muted/80 backdrop-blur-md border-b border-border/50 flex items-center px-4 md:px-6 gap-2 md:gap-3 shrink-0">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-border" />
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-border" />
                    <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-border" />
                  </div>
                  <div className="mx-auto w-1/3 md:w-1/4 h-3 md:h-4 bg-border/40 rounded-full" />
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </motion.div>
            ) : (
              <motion.div
                key="mobile"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full flex items-center justify-center p-6 bg-muted/20"
              >
                {/* Modern Phone Frame - Sharper Corners */}
                <div className="relative h-[95%] aspect-[9/19.5] rounded-[2rem] border-[10px] border-[#1a1a1b] bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                  {/* Modern Notch / Dynamic Island */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5.5 bg-[#1a1a1b] rounded-full z-30 flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-slate-800 mr-8" />
                    <div className="w-6 h-0.5 bg-slate-800 rounded-full" />
                  </div>
                  
                  <img
                    src={project.mobileImage}
                    alt={`${project.title} Mobile`}
                    className="w-full h-full object-cover rounded-[0.8rem]"
                  />
                  
                  {/* Side Buttons Mockup */}
                  <div className="absolute top-20 -left-[11px] w-1 h-10 bg-[#1a1a1b] rounded-r-sm" />
                  <div className="absolute top-34 -left-[11px] w-1 h-10 bg-[#1a1a1b] rounded-r-sm" />
                  <div className="absolute top-28 -right-[11px] w-1 h-14 bg-[#1a1a1b] rounded-l-sm" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Glass Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity" />
        </div>
      </div>

      {/* Content Description Section */}
      <div className={`lg:col-span-5 flex flex-col justify-center space-y-6 md:space-y-8 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
        <div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            {project.status && (
              <>
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-brand-orange px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20">
                  {project.status}
                </span>
                <div className="h-px w-8 bg-border" />
              </>
            )}
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group/cs flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-muted-foreground uppercase tracking-widest hover:text-brand-orange transition-colors"
            >
              Case Study 0{index + 1}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </motion.div>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-[1.1] md:group-hover:text-brand-orange transition-colors duration-500">
            {project.title}
          </h3>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {!isExpanded ? (
              <motion.p
                key="desc"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed max-w-xl"
              >
                {project.description}
              </motion.p>
            ) : (
              <motion.div
                key="cs-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 overflow-hidden"
              >
                <div className="space-y-3">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-orange flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5" /> The Challenge
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed border-l-2 border-brand-orange/20 pl-4 italic">
                    {project.problem || "Solving complex user friction points through architectural excellence and intuitive UI patterns."}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-orange flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5" /> The Approach
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed border-l-2 border-brand-orange/20 pl-4">
                    {project.approach || "Leveraging modern tech-stack components to create a scalable, performant solution centered around user needs."}
                  </p>
                </div>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="text-[10px] font-black uppercase tracking-widest text-brand-orange hover:underline"
                >
                  Show Less
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="px-4 py-1.5 rounded-lg bg-muted/50 border border-border/50 text-[10px] md:text-[11px] font-black uppercase tracking-wider text-foreground/80 transition-all md:hover:border-brand-orange/40 md:hover:bg-brand-orange/5">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-8 pt-4">
          {(project.websiteUrl || project.demoUrl) && (
            <a
              href={project.websiteUrl || project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link relative flex items-center gap-2 text-foreground font-black text-[11px] md:text-[12px] uppercase tracking-widest py-2 transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Live Project <ExternalLink className="w-4 h-4 text-brand-orange transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange transform scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link relative flex items-center gap-2 text-muted-foreground font-black text-[11px] md:text-[12px] uppercase tracking-widest py-2 transition-all md:hover:text-foreground"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Github className="w-4 h-4" /> Source Code
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground/20 transform scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const projects: Project[] = [
    {
      id: 10,
      title: "VisionSpa",
      description: "A premium spa and wellness platform. Features an elegant booking system, service showcases, and a refined user interface designed to evoke relaxation and luxury.",
      problem: "Traditional spa booking systems are often cluttered and uninspiring, failing to reflect the premium nature of the services offered.",
      approach: "Built a high-end, visual-first platform using React and Tailwind, focusing on a minimal interface that guides users through a premium booking journey without friction.",
      image: "/lovable-uploads/visionspaweb.png",
      mobileImage: "/lovable-uploads/visionspamobile.png",
      technologies: ["React", "TypeScript", "TailwindCSS", "Node.js", "Booking API"],
      githubUrl: "https://github.com/CongoMusahAdama/visionspa",
      websiteUrl: "https://visionspa.store/",
      rating: 5
    },
    {
      id: 9,
      title: "FLA Purchase",
      description: "A bespoke tailoring and custom-print platform. Features real-time production tracking, secure escrow payments, and a seamless connection between clients and expert tailors.",
      problem: "The custom tailoring industry lacks transparency in production timelines and payment security for both clients and creators.",
      approach: "Implemented a custom production-tracking state machine and integrated a secure Escrow API to ensure trust throughout the manufacturing lifecycle.",
      image: "/lovable-uploads/fla.png",
      mobileImage: "/lovable-uploads/image copy 5.png",
      technologies: ["React", "TypeScript", "TailwindCSS", "Node.js", "Escrow API"],
      githubUrl: "https://github.com/CongoMusahAdama/fla",
      websiteUrl: "https://fadlanstore.netlify.app/",
      rating: 5
    },
    {
      id: 8,
      title: "Kultural Kompass",
      description: "Exploring culture, truth, and the tensions that shape our world. A dynamic podcast platform featuring automated episode fetching, a custom video player, and a refined brand-aligned interface.",
      problem: "Standard podcast directories often lack the branding and custom interactivity required for premium, niche-focused cultural content.",
      approach: "Designed a specialized content-delivery workflow using YouTube's Data API to automate episode releases within a custom-branded, interactive React frontend.",
      image: "/lovable-uploads/kultural project.png",
      mobileImage: "/lovable-uploads/Kultural mobile  4.png",
      technologies: ["React", "TypeScript", "TailwindCSS", "YouTube API", "Netlify"],
      githubUrl: "https://github.com/CongoMusahAdama/kultural",
      websiteUrl: "https://kulturalkompass.netlify.app/",
      rating: 5
    },
    {
      id: 7,
      title: "BrainBank",
      description: "Idea management reimagined. BrainBank is a tool that helps you capture, organize, prioritize, and execute ideas in one focused space. Built for ambitious thinkers, entrepreneurs, students, and creatives who want clarity not clutter.",
      problem: "Note-taking apps are often too generic, making it difficult to prioritize high-level ideas from casual thoughts.",
      approach: "Created a hierarchy-focused data structure that separates brainstorming from execution, optimized for rapid capture and intuitive prioritization.",
      image: "/lovable-uploads/brainbank.png",
      mobileImage: "/lovable-uploads/brainbank-mobile.png",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
      githubUrl: "https://github.com/CongoMusahAdama/Brainbank",
      websiteUrl: "https://brainbanc.netlify.app/",
      status: "Coming Soon",
      rating: 5
    },
    {
      id: 6,
      title: "Supreme Masqueraders Society Platform",
      description: "A responsive digital hub showcasing history, events, and media with role-based dashboards for members and admins. Features include forums, donations, event management, and content moderation to strengthen community engagement.",
      problem: "Cultural organizations often struggle with fragmented communication and difficulty in managing historical media and community engagement in one place.",
      approach: "Developed a comprehensive community management system with role-based access control, donation tracking, and an archival media library to centralize organizational assets.",
      image: "/lovable-uploads/supreme-masqueraders.jpg",
      mobileImage: "/lovable-uploads/supreme-mobile.png",
      technologies: ["React", "TypeScript", "Node.js", "Payment Integration", "Analytics"],
      githubUrl: "https://github.com/CongoMusahAdama/sms",
      websiteUrl: "https://ssuprememasquraderssociety.netlify.app/",
      rating: 5
    },
    {
      id: 0,
      title: "Artisans Hub",
      description: "A platform giving Ghanaian artisans the spotlight they deserve by helping them sell products, get booked for services, and secure funding through AI-matched investor connections tailored to their craft focus.",
      problem: "Local artisans often lack access to digital markets and struggle to find investors specifically interested in traditional craft focus.",
      approach: "Integrated an AI-driven matching algorithm that connects artisans with tailored funding opportunities based on their specific niche and historical project metadata.",
      image: "/lovable-uploads/Screenshot (366).png",
      mobileImage: "/lovable-uploads/artisans-hub-mobile.png",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AI Matching"],
      githubUrl: "https://github.com/CongoMusahAdama/ArtisanHub",
      websiteUrl: "https://artisanhubghana.netlify.app/",
      rating: 5
    },
    {
      id: 1,
      title: "RealRate",
      description: "AI powered real estate platform providing accurate property price predictions and helping you find your dream home in Ghana",
      problem: "High volatility and lack of reliable data in the real estate market make accurate property valuation difficult for Ghanaian homebuyers.",
      approach: "Developed a Voting Regression machine learning model that analyzes historical sales data and location metrics to provide real-time price predictions.",
      image: "/lovable-uploads/067f6480-76cb-4a27-a4c3-2388ff2fbd51.png",
      technologies: ["FastAPI", "Voting Regression Model"],
      githubUrl: "https://github.com/CongoMusahAdama/rrate",
      status: "Under Development",
      rating: 4
    },
    {
      id: 2,
      title: "WeBarb",
      description: "WeBarb connects you with top-rated barbers for a professional haircut experience. Book appointments easily, pay securely, and enjoy grooming wherever you are.",
      problem: "Users often face long wait times and inconsistent quality when looking for professional grooming services in unfamiliar locations.",
      approach: "Built a location-aware booking engine with a peer-review system and secure micro-payments to ensure quality and reliability for users on the move.",
      image: "/lovable-uploads/webarb.png",
      mobileImage: "/lovable-uploads/webarb-mobile.png",
      technologies: ["MongoDB", "Express", "JavaScript", "Node.js", "React", "Vite"],
      githubUrl: "https://github.com/CongoMusahAdama/webarb-fe",
      websiteUrl: "https://webarb.netlify.app",
      rating: 5
    },
    {
      id: 3,
      title: "AgriLync",
      description: "AgriLync is an AI-powered platform aimed at transforming African agriculture and improving financial access.",
      problem: "Small-scale farmers in Africa struggle to access credit due to lack of traditional credit scoring data and modern agricultural insights.",
      approach: "Leveraged satellite imagery and AI modeling to create alternative credit scores for farmers, facilitating financial access and providing predictive crop insights.",
      image: "/lovable-uploads/agrilync-new.png",
      mobileImage: "/lovable-uploads/agrilync-mobile.png",
      technologies: ["MongoDB", "Express", "TypeScript", "React", "Vite"],
      githubUrl: "https://github.com/CongoMusahAdama/agrilync-protoype",
      websiteUrl: "https://agri-lync.netlify.app",
      rating: 5
    },
    {
      id: 4,
      title: "Mizrmo Carpool",
      description: "A carpool platform for finding and sharing rides. Users can create ride offers or join existing ones for efficient transportation.",
      problem: "Inefficient commuting patterns lead to higher transportation costs and increased urban traffic congestion.",
      approach: "Designed a route-matching algorithm that optimizes ride-shares in real-time based on destination proximity and user preferences.",
      image: "/lovable-uploads/mizrmo.png",
      technologies: ["Nest.js", "Node.js", "TypeScript", "PostgreSQL"],
      githubUrl: "https://github.com/CongoMusahAdama",
      rating: 4
    },
    {
      id: 5,
      title: "SikaSoft",
      description: "An all-in-one suite for financial management and operations. Lower costs, improve efficiency, and gain full control using Suite SikaSoft's unified platform tailored for Microfinance, Co-operative, and Susu institutions.",
      problem: "Microfinance institutions often use fragmented legacy systems that slow down operations and increase the risk of data loss.",
      approach: "Developed a mission-critical financial suite that unifies accounting, member management, and reporting into a single, high-reliability platform.",
      image: "/lovable-uploads/sikasoft.png",
      technologies: ["JavaScript", "AJAX", "jQuery", "PHP"],
      githubUrl: "https://github.com/CongoMusahAdama",
      websiteUrl: "https://sikasoftonline.com/",
      rating: 5
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-brand-orange/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] bg-brand-orange/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground uppercase mb-6 leading-tight">
              Selected <span className="curvy-underline text-brand-orange">Works</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              A curated showcase of technical architecture and visual design, bridging the gap between complex logic and seamless user experience.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Projects Footer */}
        <motion.div
          className="mt-24 md:mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center flex-col gap-6">
            <div className="h-16 w-px bg-gradient-to-b from-brand-orange to-transparent" />
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-brand-orange text-brand-orange font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-all h-14 px-10 group"
              asChild
            >
              <a
                href="https://github.com/CongoMusahAdama"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Repository
                <Github className="ml-2 w-5 h-5 transition-transform group-hover:rotate-12" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
