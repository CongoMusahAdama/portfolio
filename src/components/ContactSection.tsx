
import { useRef } from 'react';
import { Mail, Phone, MessageCircle } from "lucide-react";
import useIntersectionObserver from '@/hooks/use-intersection-observer';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-lg mx-auto">
            Feel free to reach out through any of these channels. I'm always open to new opportunities and collaborations.
          </p>
        </div>
        
        <div className={`max-w-lg mx-auto grid grid-cols-1 gap-6 md:grid-cols-3 ${isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700 ease-in-out`}>
          {/* Phone Contact */}
          <div className="flex flex-col items-center p-6 rounded-lg hover:bg-orange-50 transition-colors border border-gray-100">
            <div className="h-12 w-12 flex items-center justify-center bg-orange-100 rounded-full text-orange-500 mb-4">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="text-base font-medium text-gray-900">Phone (Call)</h3>
            <p className="text-sm text-gray-600 mt-1">
              <a href="tel:+233531878243" className="hover:text-orange-500 transition-colors">
                +233 531 878 243
              </a>
            </p>
          </div>
          
          {/* WhatsApp Contact */}
          <div className="flex flex-col items-center p-6 rounded-lg hover:bg-orange-50 transition-colors border border-gray-100">
            <div className="h-12 w-12 flex items-center justify-center bg-orange-100 rounded-full text-orange-500 mb-4">
              <MessageCircle className="h-5 w-5" />
            </div>
            <h3 className="text-base font-medium text-gray-900">WhatsApp</h3>
            <p className="text-sm text-gray-600 mt-1">
              <a 
                href="https://wa.me/233509154727" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition-colors"
              >
                0509154727
              </a>
            </p>
          </div>
          
          {/* Email Contact */}
          <div className="flex flex-col items-center p-6 rounded-lg hover:bg-orange-50 transition-colors border border-gray-100">
            <div className="h-12 w-12 flex items-center justify-center bg-orange-100 rounded-full text-orange-500 mb-4">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="text-base font-medium text-gray-900">Email</h3>
            <p className="text-sm text-gray-600 mt-1">
              <a 
                href="mailto:amusahcongo@gmail.com" 
                className="hover:text-orange-500 transition-colors"
              >
                amusahcongo@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
