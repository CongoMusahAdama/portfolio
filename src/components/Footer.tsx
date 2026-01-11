
import { Github, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-12 pb-8 border-t border-border/40">
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div className="flex flex-col items-start text-left">
            <h3 className="font-bold text-xl md:text-2xl tracking-tighter text-foreground mb-4">
              Congo Musah Adama
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm text-sm">
              Building scalable systems and reliable APIs. Let's collaborate to bring your ideas to life.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/CongoMusahAdama"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground md:hover:text-foreground md:hover:bg-muted transition-all active:scale-90 tap-highlight-none"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/1real_vee"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground md:hover:text-foreground md:hover:bg-muted transition-all active:scale-90 tap-highlight-none"
                aria-label="X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/congo-musah-ad-deen-766bb3224/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground md:hover:text-foreground md:hover:bg-muted transition-all active:scale-90 tap-highlight-none"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start text-left">
            <h3 className="font-bold text-foreground mb-4 text-xs uppercase tracking-widest text-orange/80">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Testimonials'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground md:hover:text-orange transition-colors font-medium text-sm min-h-[40px] inline-flex items-center tap-highlight-none"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start text-left">
            <h3 className="font-bold text-foreground mb-4 text-xs uppercase tracking-widest text-orange/80">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange/10 text-orange">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+233531878243" className="text-muted-foreground md:hover:text-foreground text-sm font-medium">+233 531 878 243</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange/10 text-orange">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:amusahcongo@gmail.com" className="text-muted-foreground md:hover:text-foreground text-sm font-medium">amusahcongo@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange/10 text-orange">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-muted-foreground text-sm font-medium">Accra & Takoradi, Ghana</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground/60 font-medium">
            © 2025 Congo Musah Adama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
