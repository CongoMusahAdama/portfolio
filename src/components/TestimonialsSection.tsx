
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
    handleScroll(); // Check on mount
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sample testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Project Manager",
      company: "TechCorp",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "Highly impressed with the APIs and backend development. Congo delivered scalable solutions that perfectly matched our requirements. Truly professional!",
    },
    {
      id: 2,
      name: "Sara Williams",
      role: "CTO",
      company: "StartupHub",
      content: "Working with Congo was a pleasure. His knowledge of backend systems and database optimization helped us improve our application performance by 40%.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Developer",
      company: "InnoTech Solutions",
      content: "Congo's expertise in microservices architecture transformed our monolithic application into a scalable, maintainable system. His documentation skills are excellent too!",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
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
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto"></div>
        </div>
        
        <div className={`max-w-4xl mx-auto ${isVisible ? "slide-in active" : "slide-in"}`}>
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
                }`}
                style={{ display: currentSlide === index ? 'block' : 'none' }}
              >
                <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-100 relative">
                  <Quote className="w-10 h-10 text-orange-200 absolute -top-4 left-6" />
                  <div className="text-gray-700 text-lg leading-relaxed italic mb-6">
                    "{testimonial.content}"
                  </div>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <button 
              onClick={prevSlide}
              className="absolute top-1/2 -left-5 md:-left-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-orange-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute top-1/2 -right-5 md:-right-10 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-orange-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
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
