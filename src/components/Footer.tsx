
import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl text-orange-500 mb-4">
              Congo<span className="text-gray-800">.dev</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Building scalable backend systems and reliable APIs. Let's collaborate to bring your ideas to life.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/CongoMusahAdama" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/1real_vee" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/congomusahadama" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Skills & Technologies
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">amusahcongo@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">+233 53 187 8243</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Takoradi, Ghana</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-gray-600">
            © {currentYear} Congo Musah Adama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
