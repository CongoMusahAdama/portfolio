
import { useEffect, useState } from 'react';
import { Mail, Phone, WhatsApp } from "lucide-react";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
      if (section) {
        const sectionPosition = section.getBoundingClientRect();
        if (sectionPosition.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-lg mx-auto">
            Feel free to reach out through any of these channels. I'm always open to new opportunities and collaborations.
          </p>
        </div>
        
        <div className={`max-w-xl mx-auto ${isVisible ? "slide-in active" : "slide-in"}`}>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              {/* Phone Contact */}
              <div className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-orange-50 transition-colors">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-100 rounded-full text-orange-500 mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone (Call)</h3>
                  <p className="text-gray-600">
                    <a href="tel:+233531878243" className="hover:text-orange-500 transition-colors">
                      +233 531 878 243
                    </a>
                  </p>
                </div>
              </div>
              
              {/* WhatsApp Contact */}
              <div className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-orange-50 transition-colors">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-100 rounded-full text-orange-500 mr-4">
                  <WhatsApp className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">
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
              </div>
              
              {/* Email Contact */}
              <div className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-orange-50 transition-colors">
                <div className="h-12 w-12 flex items-center justify-center bg-orange-100 rounded-full text-orange-500 mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
