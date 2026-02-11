
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
      className="py-8 bg-background relative overflow-hidden flex items-center"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          <div className="flex-shrink-0">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight">What I Do</h2>
            <div className="w-12 h-1 bg-brand-orange mt-2"></div>
          </div>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-4"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 group"
                variants={itemVariants}
              >
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                  <service.icon className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-foreground">
                  {service.title}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="flex-shrink-0"
          >
            <Button asChild size="sm" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-full text-[10px] px-4">
              <Link to="/services">All Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
