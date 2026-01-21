
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AwardsSection from "@/components/AwardsSection";

const About = () => {
  const profileImage = "/lovable-uploads/image copy 3.png";
  const resumeUrl = "https://flowcv.com/resume/wtaak1n6a414";



  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-background">
        <div className="container mx-auto px-5 md:px-6">
          <div className="max-w-5xl mx-auto overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">MY STORY</h2>
              <div className="w-16 h-1 bg-brand-pink"></div>
            </motion.div>

            <div className="block lg:block">
              <motion.div
                className="relative w-full max-w-[280px] sm:max-w-xs xl:max-w-sm mx-auto lg:float-left lg:mr-12 lg:mb-8 mb-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-pink/10 rounded-3xl transform rotate-6 scale-95"></div>
                  <img
                    src={profileImage}
                    alt="Congo Musah Adama"
                    className="relative w-full h-full object-cover rounded-3xl shadow-2xl z-10 transition-all duration-700"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="prose prose-lg max-w-none text-muted-foreground leading-relaxed lg:text-base xl:text-lg"
              >
                <p className="mb-6">
                  My journey into web and mobile development began in 2020, sparked by a simple opportunity—a WordPress training organized by a masquerade club I joined. Building my first website using WordPress and PHP showed me the power of technology to turn ideas into something real, useful, and far-reaching.
                </p>

                <p className="mb-6">
                  In 2021, I enrolled at the University of Energy and Natural Resources to study <span className="text-brand-pink font-semibold">BSc. Agricultural Science and Technology</span>, where I gained firsthand exposure to real-world systems and communities. Studying agriculture alongside technology deepened my understanding of how critical well-designed digital solutions are to solving practical problems, especially in emerging markets.
                </p>

                <p className="mb-6">
                  While at the university, I intentionally sought out remote software development internships and collaborative projects, working with companies both within and outside Ghana. These experiences strengthened my technical foundation, exposed me to distributed teams, and grounded me in industry-standard practices, including Agile development and the design of reliable, <span className="text-brand-pink font-semibold">RESTful backend systems</span>.
                </p>

                <p className="mb-6">
                  In 2022, I returned fully to software development, balancing academics with hands-on product work. Today, I continue to grow as a backend engineer, focused on building scalable, secure systems and contributing to mission-driven organizations across Africa.
                </p>

                <p className="mb-6">
                  During my National Service at the <span className="text-brand-pink font-semibold">Association of Ghana Startups</span>, I worked closely with entrepreneurs to transform ideas into unified digital platforms. Through backend development, testing, and quality assurance, I developed a strong <span className="text-brand-pink font-semibold">product mindset</span>—one rooted in clarity, collaboration, and delivering solutions that truly serve users.
                </p>

                <p>
                  But my growth didn’t stop there. I believe progress is not linear, especially in a fast-evolving tech landscape. This mindset led me into <span className="text-brand-pink font-semibold">Machine Learning</span>, where I’m fascinated by the idea of teaching computers how to think, predict, and automate decisions. What excites me most is the process of instructing machines to perform meaningful tasks—sometimes they listen, sometimes they don’t, but either way, I stay committed to learning, experimenting, and improving.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <AwardsSection />


      {/* Quote Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-5 md:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <blockquote className="border-l-4 border-brand-pink pl-5 md:pl-0 italic text-muted-foreground/90 my-8 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-8">
              <p className="mb-6 text-lg sm:text-xl md:text-2xl leading-relaxed">
                "If a man is called to be a street sweeper, he should sweep streets even as Michelangelo painted, or Beethoven composed music, or Shakespeare wrote poetry. He should sweep streets so well that all the hosts of heaven and earth will pause to say, here lived a great street sweeper who did his job well."
              </p>
              <footer className="text-base sm:text-lg font-semibold text-foreground">— Martin Luther King Jr.</footer>
            </blockquote>

            <p className="text-muted-foreground mt-8 text-base sm:text-lg leading-relaxed">
              These words deeply inspire me to pursue excellence in every field I commit to, whether in engineering or beyond. <span className="font-bold text-foreground">Just build something.</span>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
