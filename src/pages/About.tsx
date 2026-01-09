
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const About = () => {
  const profileImage = "/lovable-uploads/image copy 3.png";
  const resumeUrl = "https://flowcv.com/resume/wtaak1n6a414";



  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Profile Section */}
      <section className="pt-24 pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
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
                  My journey into web and mobile development began in 2020, sparked by a simple opportunity a WordPress training organized by a masquerade club I joined. Building my first website using WordPress and PHP showed me the power of technology to turn ideas into something real, useful, and far-reaching.
                </p>

                <p>
                  In 2021, I enrolled at the University of Energy and Natural Resources to study <span className="text-orange font-semibold">BSc. Agricultural Science and Technology</span>, where I gained firsthand exposure to real-world systems and communities. Studying agriculture alongside technology deepened my understanding of how critical well-designed digital solutions are to solving practical problems, especially in emerging markets.
                </p>

                <p>
                  While in the university, I intentionally sought out remote software development internships and collaborative projects, working with companies both within and outside Ghana. These experiences strengthened my technical foundation, exposed me to distributed teams, and grounded me in industry-standard practices, including Agile development and the design of reliable, <span className="text-orange font-semibold">RESTful backend systems</span>.
                </p>

                <p>
                  In 2022, I returned fully to software development, balancing academics with hands-on product work. Today, I continue to grow as a backend engineer, focused on building scalable, secure systems and contributing to mission-driven organizations across Africa.
                </p>

                <p>
                  During my National Service at the <span className="text-orange font-semibold">Association of Ghana Startups</span>, I worked closely with entrepreneurs to transform ideas into unified digital platforms. Through backend development, testing, and quality assurance, I developed a strong <span className="text-orange font-semibold">product mindset</span> one rooted in clarity, collaboration, and delivering solutions that truly serve users.
                </p>

                <p>
                  Beyond software engineering, I am an <span className="text-orange font-semibold">agricultural innovator</span> committed to using technology to strengthen food systems and create lasting impact. I am passionate about bridging technology, strategy, and human needs to build products that solve real problems.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Quote Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="border-l-4 border-orange pl-6 italic text-muted-foreground/90 my-8 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-6">
              <p className="mb-6 text-lg md:text-xl leading-relaxed">
                "If a man is called to be a street sweeper, he should sweep streets even as Michelangelo painted, or Beethoven composed music, or Shakespeare wrote poetry. He should sweep streets so well that all the hosts of heaven and earth will pause to say, here lived a great street sweeper who did his job well."
              </p>
              <footer className="text-base font-semibold text-foreground">— Martin Luther King Jr.</footer>
            </blockquote>

            <p className="text-muted-foreground mt-8 text-lg">
              These words deeply inspire me to pursue excellence in every field I commit to, whether in engineering or beyond. <span className="font-bold text-foreground">Just build something.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}


      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
