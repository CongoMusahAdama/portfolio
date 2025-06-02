
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappNumber = "233509154727";
  const whatsappMessage = "Hello I want to GetInTouch!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scan or tap the QR code to start a conversation with me on WhatsApp. I'm looking forward to discussing how we can work together.
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
            className="bg-background p-3 rounded-xl shadow-lg mb-5 border border-border"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat">
              <img 
                src="/lovable-uploads/764f9228-d9ad-428d-ab65-0610222686ec.png" 
                alt="WhatsApp QR Code" 
                className="w-48 h-48 md:w-52 md:h-52" 
              />
            </a>
          </motion.div>
          
          <Button 
            asChild 
            variant="default" 
            className="bg-orange-500 hover:bg-orange-600 transition-colors"
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
