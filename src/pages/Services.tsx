
import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Code, Bot, Search, Lightbulb, Palette, TestTube, Headphones, Check, MessageCircle } from "lucide-react";
import useIntersectionObserver from "@/hooks/use-intersection-observer";

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
      description: "I build scalable, responsive web applications and mobile solutions tailored to your business needs. From concept to deployment, I handle the entire development lifecycle using modern technologies like React, Node.js, Python, and PHP to deliver robust, user-friendly applications."
    },
    {
      icon: Bot,
      title: "Bot Development (Web scraping & automation)",
      description: "Automate repetitive tasks and extract valuable data with custom-built bots. I create web scraping solutions, data collection tools, and automation scripts that streamline your business processes, saving time and increasing efficiency while ensuring reliability and accuracy."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "I start by understanding your business, goals, and requirements through in-depth consultation.",
      icon: Search
    },
    {
      number: "02", 
      title: "Planning",
      description: "We develop a strategic roadmap with timelines, milestones, and deliverables.",
      icon: Lightbulb
    },
    {
      number: "03",
      title: "Design & Development", 
      description: "I create user-friendly designs and develop robust solutions with attention to detail.",
      icon: Palette
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "I rigorously test for bugs, performance, and cross-device compatibility before launch.",
      icon: TestTube
    },
    {
      number: "05",
      title: "Support & Maintenance",
      description: "I offer ongoing support, updates, and performance optimization.",
      icon: Headphones
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
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              My Services
            </h1>
            <div className="w-20 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive development solutions to transform your ideas into powerful digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30" ref={servicesRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
            initial="hidden"
            animate={isServicesVisible ? "visible" : "hidden"}
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
                  <div className="w-20 h-20 bg-orange/10 rounded-2xl flex items-center justify-center group-hover:bg-orange/20 transition-colors duration-300">
                    <service.icon className="w-10 h-10 text-orange" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-orange transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background" ref={processRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">My Process</h2>
            <div className="w-20 h-1 bg-orange mx-auto"></div>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto space-y-8"
            initial="hidden"
            animate={isProcessVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center gap-4 md:flex-col md:text-center md:min-w-[120px]">
                  <div className="w-16 h-16 bg-orange/10 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-orange" />
                  </div>
                  <span className="text-2xl font-bold text-orange md:mt-2">Step {step.number}</span>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 bg-muted/30" ref={benefitsRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isBenefitsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Why Work With Me</h2>
            <div className="w-20 h-1 bg-orange mx-auto"></div>
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
                  className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border/50"
                  variants={itemVariants}
                >
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-background" ref={contactRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isContactVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <div className="w-20 h-1 bg-orange mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground mb-12">
              Let's discuss your ideas and create something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Button asChild size="lg" className="bg-orange hover:bg-orange/90">
                <a 
                  href="https://wa.me/233553797995" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact on WhatsApp
                </a>
              </Button>

              <div className="flex flex-col items-center gap-2">
                <div className="w-32 h-32 bg-white p-2 rounded-lg shadow-lg">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://wa.me/233553797995" 
                    alt="WhatsApp QR Code" 
                    className="w-full h-full"
                  />
                </div>
                <span className="text-sm text-muted-foreground">Scan to connect</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;
