
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, BookOpen, Clock, User, Target, Lightbulb, Zap } from "lucide-react";
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  websiteUrl?: string;
  status?: string;
  rating?: number;
  caseStudy?: {
    role: string;
    date: string;
    purpose: string;
    summary: string;
    problem: string;
    whyItMatters: string;
    solution: string;
    learned: string;
  };
}

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const projects: Project[] = [
    {
      id: 7,
      title: "BrainBank",
      description: "Idea management reimagined. BrainBank is a tool that helps you capture, organize, prioritize, and execute ideas in one focused space. Built for ambitious thinkers, entrepreneurs, students, and creatives who want clarity not clutter.",
      image: "/lovable-uploads/brainbank.png",
      mobileImage: "/lovable-uploads/brainbank-mobile.png",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
      githubUrl: "https://github.com/CongoMusahAdama/Brainbank",
      websiteUrl: "https://brainbanc.netlify.app/",
      status: "Coming Soon",
      rating: 5,
      caseStudy: {
        role: "Builder",
        date: "In Progress",
        purpose: "Personal Second Brain",
        summary: "Building a central vault where 'meh' thoughts get filtered and great ideas become real projects.",
        problem: "Scattered ideas in notebooks and DMs usually die. There’s no easy way to capture, score, and track them in one place.",
        whyItMatters: "Capturing a 'spark' instantly is the difference between a forgotten thought and a finished project.",
        solution: "v1 adds an Idea Vault for instant capture, a Scoring System to prioritize by impact/feasibility, and a tracking system to turn ideas into milestones.",
        learned: "Speed of capture is everything. If the UI takes more than two seconds to load, the idea is already gone."
      }
    },
    {
      id: 6,
      title: "Supreme Masqueraders Platform",
      description: "A digital hub for the Supreme Masqueraders Society, bringing traditional community engagement into the digital age with dashboards and media management.",
      image: "/lovable-uploads/supreme-masqueraders.jpg",
      mobileImage: "/lovable-uploads/supreme-mobile.png",
      technologies: ["React", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/CongoMusahAdama/sms",
      websiteUrl: "https://ssuprememasquraderssociety.netlify.app/",
      rating: 5,
      caseStudy: {
        role: "Full Stack Engineer",
        date: "Nov 2023",
        purpose: "Community Organization",
        summary: "I modernized the digital presence of a traditional society, making it easier for members to connect, share history, and manage events.",
        problem: "The society relied on manual processes for everything—member records, donations, and event planning. It was slow and prone to errors.",
        whyItMatters: "Preserving culture shouldn't be hard. By digitizing these processes, the society can focus more on their heritage and less on paperwork.",
        solution: "Implemented a role-based dashboard system. Admins can manage content and funds, while members have a private space for community forums.",
        learned: "Handling community data requires a high level of security and trust. I sharpened my skills in Auth and database relational design."
      }
    },
    {
      id: 0,
      title: "Artisans Hub",
      description: "A platform giving Ghanaian artisans the spotlight they deserve, connecting them with customers and AI-matched investors.",
      image: "/lovable-uploads/Screenshot (366).png",
      mobileImage: "/lovable-uploads/artisans-hub-mobile.png",
      technologies: ["React", "Express", "MongoDB", "AI"],
      githubUrl: "https://github.com/CongoMusahAdama/ArtisanHub",
      websiteUrl: "https://artisanhubghana.netlify.app/",
      rating: 5,
      caseStudy: {
        role: "Lead Architect",
        date: "Aug 2023",
        purpose: "Economic Empowerment",
        summary: "This is more than a marketplace; it's an ecosystem for Ghanaian craftsmen to scale their businesses through technology.",
        problem: "Talented artisans in Ghana have high-quality products but lack access to global markets and capital for expansion.",
        whyItMatters: "Small businesses are the backbone of the economy. Helping them connect with investors literally changes lives.",
        solution: "Created an AI-matching engine that analyzes artisan profiles and investor preferences to suggest the best financial matches.",
        learned: "Integrating AI into a practical marketplace taught me how to handle non-structured data to produce meaningful results."
      }
    },
    {
      id: 1,
      title: "RealRate",
      description: "AI powered real estate platform providing accurate property price predictions and helping you find your dream home in Ghana",
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
      image: "/lovable-uploads/mizrmo.png",
      technologies: ["Nest.js", "Node.js", "TypeScript", "PostgreSQL"],
      githubUrl: "https://github.com/CongoMusahAdama",
      rating: 4
    },
    {
      id: 5,
      title: "SikaSoft",
      description: "An all-in-one suite for financial management and operations. Lower costs, improve efficiency, and gain full control using Suite SikaSoft's unified platform tailored for Microfinance, Co-operative, and Susu institutions.",
      image: "/lovable-uploads/sikasoft.png",
      technologies: ["JavaScript", "AJAX", "jQuery", "PHP"],
      githubUrl: "https://github.com/CongoMusahAdama",
      websiteUrl: "https://sikasoftonline.com/",
      rating: 5
    },
  ];


  return (
    <section id="projects" className="py-20 md:py-24 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-5 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-brand-pink mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills and passion for creating digital solutions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative w-full rounded-[2rem] border border-white/10 shadow-3xl overflow-hidden bg-[#0A0A0B] group transition-all duration-700 hover:border-brand-pink/30"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Browser-style Title Bar - Always Dark */}
              <div className="h-12 bg-white/[0.03] border-b border-white/10 flex items-center px-6 md:px-8 justify-between">
                <div className="flex gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold font-mono">
                  PROJECT {index + 1}
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-5 gap-0">
                {/* Project Visual - Theme Aware Mockup Background */}
                <div className={`xl:col-span-3 relative bg-[#0D0D0E] p-4 sm:p-6 lg:p-12 flex items-center justify-center overflow-hidden ${index % 2 === 0 ? 'xl:order-1' : 'xl:order-2'}`}>
                  {/* Subtle Pattern Mesh */}
                  <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
                  />

                  <div className="relative flex items-center justify-center gap-4 md:gap-8 w-full h-full z-10">
                    {/* Desktop Screenshot - Full Width on Mobile, Side-by-Side on Desktop */}
                    <motion.div
                      className="relative w-full sm:w-[85%] xl:w-[75%] aspect-[16/11] rounded-xl overflow-hidden border border-white/10 shadow-3xl bg-black transition-all duration-500 md:group-hover:scale-[1.03]"
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} Desktop`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Mobile View - Hidden on mobile view, shown from 'sm' upwards in side-by-side */}
                    {project.mobileImage && (
                      <motion.div
                        className="relative w-[32%] aspect-[9/19.5] rounded-[2.5rem] border-[8px] border-[#18181B] bg-black shadow-[0_40px_80px_rgba(0,0,0,0.9)] overflow-hidden shrink-0 hidden sm:block md:group-hover:translate-y-[-12px] transition-transform duration-500"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={project.mobileImage}
                          alt={`${project.title} Mobile`}
                          className="w-full h-full object-contain"
                        />
                        {/* Premium Notch element */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-[4.5%] bg-[#18181B] rounded-b-2xl z-30" />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Project Info - Taking remaining columns */}
                <div className={`xl:col-span-2 p-8 sm:p-10 lg:p-16 flex flex-col justify-center border-white/10 ${index % 2 === 0 ? 'xl:order-2 xl:border-l' : 'xl:order-1 xl:border-r'}`}>
                  <div className="flex justify-between items-start mb-5 sm:mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-pink/10 text-brand-pink text-[9px] sm:text-[10px] font-bold uppercase tracking-widest w-fit font-mono">
                      {project.status || "Live Project"}
                    </div>
                    {project.rating && (
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < project.rating! ? 'text-brand-pink fill-brand-pink' : 'text-slate-700 fill-slate-700'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 tracking-tight font-sans text-white">{project.title}</h3>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded bg-white/5 text-slate-300 text-[9px] sm:text-[10px] font-bold font-mono uppercase tracking-wider border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-auto pt-6 border-t border-white/5">
                    {project.caseStudy && (
                      <button
                        onClick={() => openCaseStudy(project)}
                        className="group relative inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 hover:border-brand-pink/50 hover:bg-brand-pink/5 transition-all duration-500 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 hover:text-brand-pink tap-highlight-none"
                      >
                        <div className="absolute inset-x-4 top-0 bottom-0 bg-brand-pink/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                        <BookOpen className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
                        <span className="relative z-10">Case Study</span>
                      </button>
                    )}

                    <div className="flex items-center gap-6">
                      {(project.websiteUrl || project.demoUrl) && (
                        <a
                          href={project.websiteUrl || project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-brand-pink font-bold md:hover:text-brand-pink/80 transition-all font-sans text-[11px] uppercase tracking-widest min-h-[44px] tap-highlight-none"
                        >
                          Live Demo <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-slate-500 font-bold md:hover:text-white transition-colors font-sans text-[11px] uppercase tracking-widest min-h-[44px] tap-highlight-none"
                      >
                        <Github className="w-4 h-4" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <a
            href="https://github.com/CongoMusahAdama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-pink hover:text-brand-pink/80 font-medium"
          >
            <span className="mr-2">View all projects</span>
            <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden bg-[#0A0A0B] border-brand-pink/20 shadow-2xl rounded-[2rem]">
          <ScrollArea className="h-full max-h-[90vh]">
            {selectedProject && selectedProject.caseStudy && (
              <div className="p-6 md:p-12">
                <div className="flex flex-col items-center text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-pink/10 text-brand-pink text-[10px] font-bold uppercase tracking-[0.2em] font-mono mb-4">
                    Project Story
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">{selectedProject.caseStudy.purpose}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 py-6 border-y border-white/5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase text-slate-500 font-bold font-mono tracking-tighter flex items-center gap-1.5">
                      <User className="w-3 h-3" /> Role
                    </span>
                    <span className="text-white font-semibold text-sm">{selectedProject.caseStudy.role}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase text-slate-500 font-bold font-mono tracking-tighter flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> Date
                    </span>
                    <span className="text-white font-semibold text-sm">{selectedProject.caseStudy.date}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase text-slate-500 font-bold font-mono tracking-tighter flex items-center gap-1.5">
                      <Zap className="w-3 h-3" /> Tech
                    </span>
                    <div className="flex gap-1 overflow-hidden">
                      <span className="text-white font-semibold text-sm truncate">{selectedProject.technologies[0]}, {selectedProject.technologies[1]}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase text-slate-500 font-bold font-mono tracking-tighter flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3" /> Link
                    </span>
                    <a href={selectedProject.websiteUrl || selectedProject.githubUrl} target="_blank" className="text-brand-pink font-semibold text-sm hover:underline">View Live</a>
                  </div>
                </div>

                <div className="space-y-10">
                  <section>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      Summary
                    </h3>
                    <p className="text-slate-400 leading-relaxed italic border-l-2 border-brand-pink pl-4">
                      "{selectedProject.caseStudy.summary}"
                    </p>
                  </section>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <section>
                      <h3 className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Target className="w-4 h-4" /> The Problem
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {selectedProject.caseStudy.problem}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-sm font-bold text-cyan uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" /> Why It Matters
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {selectedProject.caseStudy.whyItMatters}
                      </p>
                    </section>
                  </div>

                  <section className="bg-white/5 p-6 rounded-2xl border border-white/5">
                    <h3 className="text-lg font-bold text-white mb-3">The Solution</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {selectedProject.caseStudy.solution}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className="px-2 py-1 rounded bg-black/50 text-slate-500 text-[9px] font-bold font-mono border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className="text-sm font-bold text-brand-pink uppercase tracking-widest mb-3">What I Learned</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {selectedProject.caseStudy.learned}
                    </p>
                  </section>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex justify-center">
                  <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                    Back to Projects
                  </button>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
