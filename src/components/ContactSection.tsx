
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const whatsappNumber = "233509154727";
  const whatsappMessage = "Hello I want to GetInTouch!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    // Generate QR code using Google Charts API
    const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(whatsappUrl)}&chs=300x300&chld=L|0`;
    setQrCode(qrUrl);
  }, [whatsappUrl]);

  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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
          {qrCode && (
            <motion.div 
              className="bg-white p-4 rounded-xl shadow-lg mb-6"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp chat">
                <img 
                  src={qrCode} 
                  alt="WhatsApp QR Code" 
                  className="w-64 h-64 md:w-72 md:h-72" 
                />
              </a>
            </motion.div>
          )}
          
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
