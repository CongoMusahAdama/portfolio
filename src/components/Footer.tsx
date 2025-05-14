
import { Github, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const resumeUrl = "https://drive.google.com/file/d/1N-cUtJDkeZUsxsmsdNnRl3fTpaIpd9NC/view?usp=sharing";
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl text-orange-500 mb-4">
              Congo<span className="text-gray-800">.dev</span>
            </h3>
            <p className="text-gray-600 mb-6">
              Building scalable systems and reliable APIs. Let's collaborate to bring your ideas to life.
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
                aria-label="X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              <a 
                href="https://linkedin.com/in/musah-congo-766bb3224" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-500 transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
                <a href="mailto:amusahcongo@gmail.com" className="text-gray-600 hover:text-orange-500 transition-colors">amusahcongo@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Takoradi, Ghana</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors">View Resume</a>
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
