
import { Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const resumeUrl = "https://drive.google.com/file/d/1gejHNj4tP7kpchFHv0vUlJy4n-cpl31e/view?usp=sharing";
  
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-bold text-2xl text-foreground mb-6">
              Congo Musah Adama
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Building scalable systems and reliable APIs. Let's collaborate to bring your ideas to life.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/CongoMusahAdama" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/1real_vee" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              <a 
                href="https://linkedin.com/in/musah-congo-766bb3224" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-6 text-lg">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                <a href="tel:+233531878243" className="text-muted-foreground hover:text-foreground transition-colors">+233 531 878 243</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                <a href="mailto:amusahcongo@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">amusahcongo@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Takoradi, Ghana</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Download CV</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Congo Musah Adama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
