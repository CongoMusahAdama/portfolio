
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('testimonials');
      if (section) {
        const sectionPosition = section.getBoundingClientRect();
        if (sectionPosition.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Kwame Oteng",
      role: "Founder",
      company: "Mizrmo Technologies",
      avatar: "/lovable-uploads/dd834d92-de8f-4f21-9878-9cc88ffbb39e.png",
      content: "Highly impressed with the APIs and backend development. Congo delivered scalable solutions that perfectly matched our requirements. Truly professional!",
    },
    {
      id: 2,
      name: "Jerry Temakloe",
      role: "Founder & Creative Entrepreneur",
      company: "Carve Studio",
      content: "Congo's expertise in microservices architecture transformed our monolithic application into a scalable, maintainable system. His documentation skills are excellent too!",
      avatar: "/lovable-uploads/e7a271ed-34b5-4117-b716-6c44c58df08d.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-orange mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto ${isVisible ? "slide-in active" : "slide-in"}`}
             style={{ transitionDelay: '0.4s' }}>
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-700 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                style={{ display: currentSlide === index ? 'block' : 'none' }}
              >
                <div className="bg-muted/50 rounded-lg p-8 shadow-sm border border-border relative">
                  <Quote className="w-12 h-12 text-orange/20 absolute -top-6 left-8" />
                  <div className="text-muted-foreground text-lg leading-relaxed italic mb-8 pt-6">
                    {testimonial.content}
                  </div>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 -left-6 -translate-y-1/2 bg-background rounded-full p-3 shadow-md hover:bg-muted transition-colors border border-border"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 -right-6 -translate-y-1/2 bg-background rounded-full p-3 shadow-md hover:bg-muted transition-colors border border-border"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-orange' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
