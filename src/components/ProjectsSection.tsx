
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
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
}

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const projects: Project[] = [
    {
      id: 1,
      title: "RealRate",
      description: "AI powered real estate platform providing accurate property price predictions and helping you find your dream home in Ghana",
      image: "/lovable-uploads/067f6480-76cb-4a27-a4c3-2388ff2fbd51.png",
      technologies: ["FastAPI", "Voting Regression Model"],
      githubUrl: "https://github.com/CongoMusahAdama/rrate",
      websiteUrl: "https://realrate.netlify.app/",
      status: "Under Development"
    },
    {
      id: 2,
      title: "WeBarb",
      description: "WeBarb connects you with top-rated barbers for a professional haircut experience. Book appointments easily, pay securely, and enjoy grooming wherever you are.",
      image: "/lovable-uploads/webarb.png",
      technologies: ["MongoDB", "Express", "JavaScript", "Node.js", "React", "Vite"],
      githubUrl: "https://github.com/CongoMusahAdama",
      websiteUrl: "https://webarb.netlify.app",
    },
    {
      id: 3,
      title: "AgriLync",
      description: "AgriLync is an AI-powered platform aimed at transforming African agriculture and improving financial access.",
      image: "/lovable-uploads/agrilync.png",
      technologies: ["MongoDB", "Express", "TypeScript", "React", "Vite"],
      githubUrl: "https://github.com/CongoMusahAdama",
      websiteUrl: "https://v0-agri-lync-platform-design.vercel.app"
    },
    {
      id: 4,
      title: "Mizrmo Carpool",
      description: "A carpool platform for finding and sharing rides. Users can create ride offers or join existing ones for efficient transportation.",
      image: "/lovable-uploads/mizrmo.png",
      technologies: ["Flutter", "Nest.js", "Node.js", "TypeScript", "PostgreSQL"],
      githubUrl: "https://github.com/CongoMusahAdama",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Projects</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col-reverse md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} items-center gap-8`}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Text */}
              <div className="flex-1 text-foreground">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  {project.status && (
                    <Badge variant="outline" className="bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800">
                      🔧 {project.status}
                    </Badge>
                  )}
                </div>
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300 text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 items-center flex-wrap">
                  <a href={project.githubUrl} target="_blank" className="text-orange-500 hover:text-orange-600 flex items-center">
                    <Github className="w-5 h-5 mr-1" />
                    GitHub
                  </a>

                  {project.websiteUrl && (
                    <a href={project.websiteUrl} target="_blank">
                      <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950 p-0">
                        Live Site →
                      </Button>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank">
                      <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950 p-0">
                        Live Demo →
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80 transition-transform duration-700 hover:scale-105"
                />
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
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
          >
            <span className="mr-2">...and more</span>
            <Github className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
