
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
      className="py-10 bg-background relative overflow-hidden flex items-center border-y border-border/40"
      ref={sectionRef}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          <div className="flex-shrink-0">
            <h2 className="text-xl lg:text-2xl font-black text-foreground tracking-tighter uppercase">What I <span className="curvy-underline text-brand-orange">Do</span></h2>
          </div>

          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-6 flex-1 px-4 lg:px-12"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 group cursor-default"
                variants={itemVariants}
              >
                <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center md:group-hover:bg-brand-orange border border-transparent md:group-hover:border-brand-orange/20 transition-all duration-500">
                  <service.icon className="w-4 h-4 text-brand-orange md:group-hover:text-white transition-colors duration-500" />
                </div>
                <span className="text-[11px] font-black text-foreground uppercase tracking-wider opacity-60 md:group-hover:opacity-100 transition-opacity duration-500">
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
            <Link to="/services">
              <Button size="sm" variant="outline" className="border-border/60 text-foreground font-black rounded-none text-[9px] px-6 h-10 tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-all">
                All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
