
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import useIntersectionObserver from '@/hooks/use-intersection-observer';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  websiteUrl?: string;
  status?: string;
  rating?: number;
}

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const projects: Project[] = [
    {
      id: 7,
      title: "BrainBank",
      description: "Idea management reimagined. BrainBank is a tool that helps you capture, organize, prioritize, and execute ideas in one focused space. Built for ambitious thinkers, entrepreneurs, students, and creatives who want clarity not clutter.",
      image: "/lovable-uploads/brainbank.png",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
      githubUrl: "https://github.com/CongoMusahAdama",
      websiteUrl: "https://brainbanc.netlify.app/",
      status: "Coming Soon",
      rating: 5
    },
    {
      id: 6,
      title: "Supreme Masqueraders Society Platform",
      description: "A responsive digital hub showcasing history, events, and media with role-based dashboards for members and admins. Features include forums, donations, event management, and content moderation to strengthen community engagement.",
      image: "/lovable-uploads/supreme-masqueraders.jpg",
      technologies: ["React", "TypeScript", "Node.js", "Payment Integration", "Analytics"],
      githubUrl: "https://github.com/CongoMusahAdama",
      websiteUrl: "https://ssuprememasquraderssociety.netlify.app/",
      rating: 5
    },
    {
      id: 0,
      title: "Artisans Hub",
      description: "A platform giving Ghanaian artisans the spotlight they deserve by helping them sell products, get booked for services, and secure funding through AI-matched investor connections tailored to their craft focus.",
      image: "/lovable-uploads/Screenshot (366).png",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AI Matching"],
      githubUrl: "https://github.com/CongoMusahAdama/ArtisanHub",
      websiteUrl: "https://artisanhubghana.netlify.app/",
      rating: 5
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
      technologies: ["MongoDB", "Express", "JavaScript", "Node.js", "React", "Vite"],
      githubUrl: "https://github.com/CongoMusahAdama",
      websiteUrl: "https://webarb.netlify.app",
      rating: 5
    },
    {
      id: 3,
      title: "AgriLync",
      description: "AgriLync is an AI-powered platform aimed at transforming African agriculture and improving financial access.",
      image: "/lovable-uploads/agrilync-new.png",
      technologies: ["MongoDB", "Express", "TypeScript", "React", "Vite"],
      githubUrl: "https://github.com/CongoMusahAdama",
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
          <div className="w-16 h-1 bg-cyan mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills and passion for creating digital solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="relative w-full rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl overflow-hidden bg-[#0A0A0B] group md:hover:border-orange/30 transition-all duration-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Browser-style Title Bar - Always Dark */}
              <div className="h-10 bg-white/5 border-b border-white/10 flex items-center px-4 md:px-6 justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold font-mono">
                  Project {index + 1}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Visual - Alternating Logic */}
                <div className={`relative aspect-[16/10] bg-slate-900/50 overflow-hidden border-white/5 ${index % 2 === 0 ? 'lg:border-r lg:order-1' : 'lg:border-l lg:order-2'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105 opacity-90 md:group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/80 to-transparent pointer-events-none" />
                </div>

                {/* Project Info - Always Dark Theme Text */}
                <div className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex justify-between items-start mb-5 sm:mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange/10 text-orange text-[9px] sm:text-[10px] font-bold uppercase tracking-widest w-fit font-mono">
                      {project.status || "Live Project"}
                    </div>
                    {project.rating && (
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < project.rating! ? 'text-orange fill-orange' : 'text-slate-700 fill-slate-700'}`}
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

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-auto">
                    {(project.websiteUrl || project.demoUrl) && (
                      <a
                        href={project.websiteUrl || project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange font-bold md:hover:text-orange/80 transition-all font-sans text-[11px] uppercase tracking-widest min-h-[44px] tap-highlight-none"
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
            className="inline-flex items-center text-orange hover:text-orange/80 font-medium"
          >
            <span className="mr-2">View all projects</span>
            <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
