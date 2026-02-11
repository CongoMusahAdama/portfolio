import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Code, Bot, Check, MessageCircle, Smartphone, Server, Database, Brain } from "lucide-react";
import useIntersectionObserver from "@/hooks/use-intersection-observer";
import TechPattern from "@/components/TechPattern";

const Services = () => {
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  const contactRef = useRef(null);

  const isServicesVisible = useIntersectionObserver(servicesRef, { threshold: 0.1 });
  const isProcessVisible = useIntersectionObserver(processRef, { threshold: 0.1 });
  const isBenefitsVisible = useIntersectionObserver(benefitsRef, { threshold: 0.1 });
  const isContactVisible = useIntersectionObserver(contactRef, { threshold: 0.1 });

  const services = [
    {
      icon: Code,
      title: "Custom Web & Mobile Development",
      description: "Scalable, responsive web and mobile solutions tailored to your needs using React, Node.js, Python, and PHP."
    },
    {
      icon: Bot,
      title: "Bot Development",
      description: "Custom bots for web scraping, data extraction, and process automation to boost efficiency."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Custom AI/ML models for automated decision-making and predictive analytics."
    },
    {
      icon: Smartphone,
      title: "USSD for Business",
      description: "Secure, offline-accessible USSD applications for payments, surveys, and services on any mobile device."
    },
    {
      icon: Server,
      title: "API Integration & Development",
      description: "Robust, secure RESTful and GraphQL APIs to connect systems and ensure reliable data flow."
    },
    {
      icon: Database,
      title: "Database Design & Management",
      description: "Expert design, optimization, and security for efficient and protected data storage."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "I start by understanding your business, goals, and requirements through in-depth consultation."
    },
    {
      number: "02",
      title: "Planning",
      description: "We develop a strategic roadmap with timelines, milestones, and deliverables."
    },
    {
      number: "03",
      title: "Design & Development",
      description: "I create user-friendly designs and develop robust solutions with attention to detail."
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "I rigorously test for bugs, performance, and cross-device compatibility before launch."
    },
    {
      number: "05",
      title: "Support & Maintenance",
      description: "I offer ongoing support, updates, and performance optimization."
    }
  ];

  const benefits = [
    "Custom solutions tailored to your specific needs",
    "Modern, responsive designs",
    "Clean, maintainable code",
    "SEO-friendly practices",
    "Ongoing support",
    "Transparent communication"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const processContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1,
      },
    },
  };

  const whatsappNumber = "233509154727";
  const whatsappMessage = "Hello I want to GetInTouch!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              My Services
            </h1>
            <div className="w-20 h-1 bg-brand-orange mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive development solutions to transform your ideas into powerful digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" ref={servicesRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center"
            initial="hidden"
            animate={isServicesVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {/* Services Content */}
            <motion.div className="space-y-12" variants={itemVariants}>
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300 flex-shrink-0 mt-1">
                      <service.icon className="w-8 h-8 text-brand-orange" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-brand-orange transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Services Image */}
            <motion.div
              className="hidden lg:flex justify-center lg:justify-end order-first lg:order-last"
              variants={imageVariants}
            >
              <div className="relative">
                <img
                  src="/lovable-uploads/7c7d21a9-be7a-46ca-ae6b-2990651a150f.png"
                  alt="Professional developer working on web and mobile applications"
                  className="w-full max-w-md h-auto rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background" ref={processRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">My Process</h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-12"
            initial="hidden"
            animate={isProcessVisible ? "visible" : "hidden"}
            variants={processContainerVariants}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-start gap-6"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 md:flex-col md:text-center md:min-w-[120px]">
                  <span className="text-sm font-medium text-brand-orange">Step {step.number}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-brand-orange relative overflow-hidden" ref={benefitsRef}>
        <TechPattern />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isBenefitsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Work With Me</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate={isBenefitsVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4"
                  variants={itemVariants}
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background" ref={contactRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isContactVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground mb-12">
              Let's discuss your ideas and create something amazing together.
            </p>

            <motion.div
              className="max-w-md mx-auto flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isContactVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                className="bg-background p-6 rounded-xl shadow-sm mb-8"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat">
                  <img
                    src="/lovable-uploads/764f9228-d9ad-428d-ab65-0610222686ec.png"
                    alt="WhatsApp QR Code"
                    className="w-52 h-52"
                  />
                </a>
              </motion.div>

              <Button
                asChild
                variant="default"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;
