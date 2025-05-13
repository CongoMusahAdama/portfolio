
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

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
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects');
      if (section) {
        const sectionPosition = section.getBoundingClientRect();
        if (sectionPosition.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Swagger APIs",
      description: "APIs built and documented with Swagger for standardized API documentation and testing.",
      image: "https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SW-logo-clr.png",
      technologies: ["Node.js", "Express", "OpenAPI", "Swagger UI"],
      githubUrl: "https://github.com/CongoMusahAdama",
    },
    {
      id: 2,
      title: "Agri-Nexus",
      description: "An agricultural extension services API for farmers providing information on farming techniques, crop management, and market access.",
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

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg ${
                isVisible ? "slide-in active" : "slide-in"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
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
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    <span>GitHub</span>
                  </a>
                  
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0">
                        Live Demo →
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
