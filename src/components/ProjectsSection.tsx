
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
}

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });
  
  // Updated projects data with WeBarb, AgriLync, and Mizrmo Carpool
  const projects: Project[] = [
    {
      id: 1,
      title: "WeBarb",
      description: "WeBarb connects you with top-rated barbers for a professional haircut experience. Book appointments easily, pay securely, and enjoy grooming wherever you are.",
      image: "https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SW-logo-clr.png", // Replace with actual WeBarb image
      technologies: ["Node.js", "Express", "React", "MongoDB"],
      githubUrl: "https://github.com/CongoMusahAdama",
    },
    {
      id: 2,
      title: "AgriLync",
      description: "AgriLync is an AI-powered platform aimed at transforming African agriculture and improving financial access.",
      image: "https://img.freepik.com/free-vector/organic-flat-farming-profession-illustration_23-2148897195.jpg",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/CongoMusahAdama",
    },
    {
      id: 3,
      title: "Mizrmo Carpool",
      description: "A carpool platform for finding and sharing rides. Users can create ride offers or join existing ones for efficient transportation.",
      image: "https://img.freepik.com/free-vector/car-sharing-service-illustration_23-2148970361.jpg",
      technologies: ["Laravel", "MySQL", "Vue.js", "Tailwind CSS"],
      githubUrl: "https://github.com/CongoMusahAdama",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
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
                    className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github className="w-5 h-5 mr-1" />
                    <span>GitHub</span>
                  </motion.a>
                  
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
