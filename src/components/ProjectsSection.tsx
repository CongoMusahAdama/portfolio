
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
    <section id="projects" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#fdb515] mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-background rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
              variants={{
                hidden: {
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                  y: 20
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut"
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                {project.status && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    🔧 {project.status}
                  </Badge>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  {project.rating && (
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3.5 h-3.5 ${i < project.rating! ? 'text-primary fill-primary' : 'text-muted fill-muted'}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center">
                  <a href={project.githubUrl} target="_blank" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    <span className="text-sm">Code</span>
                  </a>

                  {project.websiteUrl && (
                    <a href={project.websiteUrl} target="_blank">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
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
            className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
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
