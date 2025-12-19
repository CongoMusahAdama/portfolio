
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-cyan mx-auto mb-12"></div>

          <div className="text-base text-muted-foreground leading-relaxed mb-12 space-y-6">
            <p>
              I'm a self-taught Software Engineer and Freelancer based in Accra and Takoradi, Ghana, with strong expertise in Python, Node.js, FastAPI, Django, and Laravel. I specialize in building robust APIs, microservices, and cloud-connected systems that power impactful digital experiences.
            </p>

            <p className="font-semibold">
              But my journey doesn't end at code.
            </p>

            <p>
              Outside of software development, I'm an agricultural innovator dedicated to transforming food systems through technology, and a product thinker passionate about creating user-centered solutions across diverse industries. I enjoy bridging ideas, design, and strategy to build products that solve real-world problems and create meaningful impact.
            </p>

            <blockquote className="border-l-4 border-orange pl-6 italic text-muted-foreground/90 my-8">
              <p className="mb-4">
                "If a man is called to be a street sweeper, he should sweep streets even as Michelangelo painted, or Beethoven composed music, or Shakespeare wrote poetry. He should sweep streets so well that all the hosts of heaven and earth will pause to say, here lived a great street sweeper who did his job well."
              </p>
              <footer className="text-sm font-medium">— Martin Luther King Jr.</footer>
            </blockquote>

            <p>
              These words deeply inspire me — to pursue excellence in every field I commit to, whether in engineering or beyond. <span className="font-bold">Just build something.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="flex flex-col items-center group"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-orange filter drop-shadow-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Problem Solving</h3>
              <p className="text-muted-foreground">Creating efficient solutions to complex challenges</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center group"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-orange filter drop-shadow-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">API Development</h3>
              <p className="text-muted-foreground">Building robust and scalable APIs</p>
            </motion.div>

            <motion.div
              className="flex flex-col items-center group"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-orange filter drop-shadow-sm"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">System Architecture</h3>
              <p className="text-muted-foreground">Designing efficient and maintainable systems</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
