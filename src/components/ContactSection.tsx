
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappNumber = "233509154727";
  const whatsappMessage = "Hello I want to GetInTouch!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-5 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-brand-pink mx-auto mb-6"></div>
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
            className="w-full sm:w-auto min-h-[56px] bg-brand-pink hover:bg-brand-pink/90 text-white px-10 py-4 rounded-xl shadow-lg shadow-brand-pink/20 font-bold tracking-tight text-lg transition-all active:scale-95 tap-highlight-none"
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
      </div>
    </section>
  );
};

export default ContactSection;
