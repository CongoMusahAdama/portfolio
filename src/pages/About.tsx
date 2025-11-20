
import { motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import useIntersectionObserver from "@/hooks/use-intersection-observer";

const About = () => {
  const profileImage = "/lovable-uploads/d51f7576-dd9d-4647-ae97-24a43a1f93ee.png";
  const resumeUrl = "https://flowcv.com/resume/wtaak1n6a414";
  const timelineRef = useRef(null);
  const isTimelineVisible = useIntersectionObserver(timelineRef, { threshold: 0.1 });

  const timelineData = [
    {
      type: "work",
      year: "May 2025 – Present",
      title: "Duapa Werkspace",
      subtitle: "Fullstack Developer",
      achievements: [
        "Enhance digital finance , improving system efficiency by 45%",
        "Supported program facilitation, boostin participant engagement by 35% and streamline communication workflow ",
      ],
      icon: "💼"
    },
    {
      type: "work",
      year: "Oct 2024 – Oct 2025",
      title: "Association of Ghana Startups",
      subtitle: "Backend Developer (NSP)",
      achievements: [
        "Built scalable backend system powering a national startup portal",
        "Reduced page load times by 40%",
        "Integrated CMS for 75% faster updates on the About/My Journey section"
      ],
      icon: "💼"
    },
    {
      type: "work",
      year: "Sept 2024 – Present",
      title: "Mirzmo Technologies",
      subtitle: "Backend Developer",
      achievements: [
        "Developed backend APIs for a ride-sharing app",
        "Increased user engagement by 120% in 3 months"
      ],
      icon: "💼"
    },
    {
      type: "work",
      year: "June 2024 – Aug 2024",
      title: "Mentor Me In-Tech (Lagos)",
      subtitle: "Backend Developer",
      achievements: [
        "Supported 3× growth in daily active users",
        "Hardened backend security and streamlined APIs"
      ],
      icon: "💼"
    },
    {
      type: "work",
      year: "May 2024 – Sept 2024",
      title: "Afrovivo (Remote)",
      subtitle: "Backend Developer",
      achievements: [
        "Achieved 99.9% uptime",
        "Reduced server costs by 25%"
      ],
      icon: "💼"
    },
    {
      type: "work",
      year: "May 2024 – Aug 2024",
      title: "Carve Studio (Remote)",
      subtitle: "Web Developer Intern",
      achievements: [
        "Built RESTful APIs for mobile apps",
        "Optimized database performance by 60%"
      ],
      icon: "💼"
    },
    {
      type: "work",
      year: "June 2023 – Feb 2024",
      title: "WahalaGH",
      subtitle: "Backend Developer",
      achievements: [
        "Reduced blog load time by 55%",
        "Boosted content publishing efficiency by 70%"
      ],
      icon: "💼"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Profile Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              className="relative w-80 h-80 mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-orange/10 rounded-3xl transform rotate-6"></div>
                <img 
                  src={profileImage} 
                  alt="Congo Musah Adama" 
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl z-10"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">MY STORY</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                  My journey into web and mobile development started in 2020 when a masquerade club I joined organized a WordPress course with iCode. I built my first website using a WordPress theme and PHP.
                </p>
                
                <p>
                  In 2021, I enrolled at the University of Energy and Natural Resources to study BSc. Agricultural Science and Technology.
                </p>
                
                <p>
                  In 2022, I returned to software development while combining academics and exploring tech opportunities. Today, I continue to grow as a backend engineer while contributing to mission-driven organizations across Africa.
                </p>

                <p>
                  Outside of software development, I'm an agricultural innovator dedicated to transforming food systems through technology, and a product thinker passionate about creating user-centered solutions across diverse industries. I enjoy bridging ideas, design, and strategy to build products that solve real-world problems and create meaningful impact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background" ref={timelineRef}>
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">My Journey</h2>
            <div className="w-20 h-1 bg-orange mx-auto mb-6"></div>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-foreground hover:bg-muted px-8 py-3 rounded-md font-medium">
                Download CV
              </Button>
            </a>
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-border hidden md:block"></div>
            
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <motion.div
                      className="p-6"
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-sm font-medium text-orange">{item.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-3">{item.subtitle}</p>
                      
                      {item.achievements && (
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2">
                              <span className="text-orange text-xs mt-1.5">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
