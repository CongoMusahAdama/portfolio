

// Contact Section Component
import { MessageCircle, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappNumber = "233509154727";
  const whatsappMessage = "Hello I want to GetInTouch!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-5 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-4 uppercase">
            Get <span className="curvy-underline text-brand-orange">In Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to start a project together? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <motion.div
          className="max-w-md mx-auto flex flex-col items-center justify-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-background p-5 rounded-2xl shadow-xl mb-10 border border-border/50"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat" className="block tap-highlight-none">
              <img
                src="/lovable-uploads/764f9228-d9ad-428d-ab65-0610222686ec.png"
                alt="WhatsApp QR Code"
                className="w-44 h-44 sm:w-52 sm:h-52 object-contain"
                loading="lazy"
              />
            </a>
          </motion.div>

          <Button
            asChild
            variant="default"
            className="w-full sm:w-auto min-h-[56px] bg-brand-orange hover:bg-brand-orange/90 text-white px-10 py-4 rounded-xl shadow-lg shadow-brand-orange/20 font-bold tracking-tight text-lg transition-all active:scale-95 tap-highlight-none"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-4 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm uppercase tracking-widest text-muted-foreground/60 font-bold font-mono">Follow Me</span>
          <div className="flex gap-4 items-center justify-center">
            <a
              href="https://github.com/CongoMusahAdama"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="GitHub"
            >
              <div className="p-2.5 bg-[#24292e] rounded-full text-white shadow-lg shadow-black/10">
                <Github className="w-5 h-5" />
              </div>
            </a>
            <a
              href="https://twitter.com/1real_vee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="X"
            >
              <div className="p-2.5 bg-black rounded-full text-white shadow-lg shadow-black/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="LinkedIn"
            >
              <div className="p-2.5 bg-[#0077b5] rounded-full text-white shadow-lg shadow-[#0077b5]/20">
                <Linkedin className="w-5 h-5" />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
