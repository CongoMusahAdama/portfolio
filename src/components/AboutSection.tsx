
import { motion } from "framer-motion";

const AboutSection = () => {
  // Animation variants for the floating effect
  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const scaleAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            I'm a self-taught software engineer with strong expertise in Python, Node.js, FastAPI, Django, and Laravel. I love building robust APIs, microservices, and cloud-connected systems. I'm based in Takoradi, Ghana, and always open to collaboration.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="p-6 bg-background rounded-lg shadow-sm border border-border flex flex-col items-center hover:shadow-md transition-shadow"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="p-3 bg-orange-50 dark:bg-orange-950 rounded-full mb-4"
                animate={floatingAnimation}
              >
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 text-orange-500" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  animate={scaleAnimation}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </motion.svg>
              </motion.div>
              <h3 className="font-medium text-foreground mb-1">Problem Solving</h3>
              <p className="text-muted-foreground text-center">Creating efficient solutions to complex challenges</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-background rounded-lg shadow-sm border border-border flex flex-col items-center hover:shadow-md transition-shadow"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="p-3 bg-orange-50 dark:bg-orange-950 rounded-full mb-4"
                animate={{
                  y: [-3, 7, -3],
                  transition: {
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }
                }}
              >
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 text-orange-500" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  animate={{
                    scale: [1, 1.08, 1],
                    transition: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }
                  }}
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </motion.svg>
              </motion.div>
              <h3 className="font-medium text-foreground mb-1">API Development</h3>
              <p className="text-muted-foreground text-center">Building robust and scalable APIs</p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-background rounded-lg shadow-sm border border-border flex flex-col items-center hover:shadow-md transition-shadow"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="p-3 bg-orange-50 dark:bg-orange-950 rounded-full mb-4"
                animate={{
                  y: [-6, 4, -6],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
              >
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 text-orange-500" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  animate={{
                    scale: [1, 1.06, 1],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.7
                    }
                  }}
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </motion.svg>
              </motion.div>
              <h3 className="font-medium text-foreground mb-1">System Architecture</h3>
              <p className="text-muted-foreground text-center">Designing efficient and maintainable systems</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
