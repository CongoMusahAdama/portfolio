
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
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
}

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });
  
  const projects: Project[] = [
    {
      id: 1,
      title: "WeBarb",
      description: "WeBarb connects you with top-rated barbers for a professional haircut experience. Book appointments easily, pay securely, and enjoy grooming wherever you are.",
      image: "/lovable-uploads/webarb.png",
      technologies: ["MongoDB", "Express", "JavaScript", "Node.js", "React", "Vite"],
      githubUrl: "https://github.com/CongoMusahAdama",
      websiteUrl: "https://webarb.netlify.app",
    },
    {
      id: 2,
      title: "AgriLync",
      description: "AgriLync is an AI-powered platform aimed at transforming African agriculture and improving financial access.",
      image: "/lovable-uploads/agrilync.png",
      technologies: ["MongoDB", "Express", "TypeScript", "React", "Vite"],
      githubUrl: "https://github.com/CongoMusahAdama",
      websiteUrl: "https://v0-agri-lync-platform-design.vercel.app"
    },
    {
      id: 3,
      title: "Mizrmo Carpool",
      description: "A carpool platform for finding and sharing rides. Users can create ride offers or join existing ones for efficient transportation.",
      image: "/lovable-uploads/mizrmo.png",
      technologies: ["Flutter", "Nest.js", "Node.js", "TypeScript", "PostgreSQL"],
      githubUrl: "https://github.com/CongoMusahAdama",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
<<<<<<< HEAD
        duration: 0.7,
=======
        duration: 1,
>>>>>>> 39de518be6e348419bacd25f2d40c0db5c7027dc
      },
    },
  };

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-800" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Projects</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>

        {/* Decorative Triangle */}
        <div className="absolute top-0 left-0 w-40 h-40 md:w-56 md:h-56 bg-orange-500 clip-triangle opacity-20 -z-10"></div>
        
        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* First two projects side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {projects.slice(0, 2).map((project) => (
              <motion.div 
                key={project.id}
                className="bg-gray-700 rounded-lg overflow-hidden shadow-md border border-gray-600 transition-all duration-500 hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.5, ease: "easeOut" } 
                }}
              >
                <motion.div className="h-48 overflow-hidden bg-gray-600">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.6 } 
                    }}
                    initial={{ opacity: 0.9 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <motion.a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 hover:text-orange-500 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github className="w-5 h-5 mr-1" />
                      <span>GitHub</span>
                    </motion.a>
                    
                    <div className="flex gap-4">
                      {project.demoUrl && (
                        <motion.a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0">
                            Live Demo →
                          </Button>
                        </motion.a>
                      )}

                      {project.websiteUrl && (
                        <motion.a 
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-gray-600 p-0 transition-colors duration-300">
                            Live Site →
                          </Button>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Third project centered */}
          <div className="flex justify-center">
            <motion.div 
              className="bg-gray-700 rounded-lg overflow-hidden shadow-md border border-gray-600 transition-all duration-500 hover:shadow-lg max-w-md w-full"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.5, ease: "easeOut" } 
              }}
            >
              <motion.div className="h-48 overflow-hidden bg-gray-600">
                <motion.img 
                  src={projects[2].image} 
                  alt={projects[2].title}
                  className="w-full h-full object-cover"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.6 } 
                  }}
                  initial={{ opacity: 0.9 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{projects[2].title}</h3>
                <p className="text-gray-300 mb-4">{projects[2].description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[2].technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  {project.websiteUrl && (
                    <motion.a 
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Button className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-lg font-semibold">
                        Live App
                      </Button>
                    </motion.a>
                  )}
                  <motion.a 
                    href={projects[2].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-orange-500 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github className="w-6 h-6 mr-2" />
                    <span>Learn More</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a 
            href="https://github.com/CongoMusahAdama"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
          >
            <span className="mr-2">...and more</span>
            <Github className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
