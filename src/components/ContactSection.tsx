
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappNumber = "233509154727";
  const whatsappMessage = "Hello I want to GetInTouch!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start a project together? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <motion.div 
          className="max-w-md mx-auto flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-background p-6 rounded-xl shadow-sm border border-border mb-8"
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
            className="bg-orange hover:bg-orange/90 text-orange-foreground px-8 py-3"
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
      </div>
    </section>
  );
};

export default ContactSection;
