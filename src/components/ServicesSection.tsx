
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Bot, Brain, Smartphone, Server, Database } from 'lucide-react';
import useIntersectionObserver from '@/hooks/use-intersection-observer';
import TechPattern from './TechPattern';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code,
      title: "Custom Web & Mobile Development",
    },
    {
      icon: Bot,
      title: "Bot Development",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
    },
    {
      icon: Smartphone,
      title: "USSD for Business",
    },
    {
      icon: Server,
      title: "API Integration & Development",
    },
    {
      icon: Database,
      title: "Database Design & Management",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="services"
      className="py-12 bg-primary relative overflow-hidden"
      ref={sectionRef}
    >
      <TechPattern />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">What I Do</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
        </div>




        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 max-w-4xl mx-auto mb-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group text-center"
              variants={itemVariants}
            >
              <div className="mb-2 flex justify-center">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              <h3 className="text-sm lg:text-base font-bold text-white group-hover:text-white/90 transition-colors duration-300 px-1 leading-tight">
                {service.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button asChild size="default" className="bg-white text-black hover:bg-white/90 font-bold px-6 shadow-md h-10">
            <Link to="/services">
              See All Services
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
