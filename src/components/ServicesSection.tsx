
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Bot } from 'lucide-react';
import useIntersectionObserver from '@/hooks/use-intersection-observer';

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });

  const services = [
    {
      icon: Code,
      title: "Custom Web & Mobile Development",
      description: "Full-stack development solutions tailored to your business needs, from responsive websites to scalable mobile applications."
    },
    {
      icon: Bot,
      title: "Bot Development",
      description: "Web scraping bots and automation solutions to streamline your business processes and improve efficiency."
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
    <section id="services" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">What I Do</h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized services to help bring your digital vision to life
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-2xl bg-background shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-orange" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-orange transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button asChild size="lg" className="bg-orange hover:bg-orange/90">
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
