import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: "01",
      name: "Kwame Oteng",
      role: "Founder",
      company: "Mizrmo Technologies",
      avatar: "/lovable-uploads/dd834d92-de8f-4f21-9878-9cc88ffbb39e.png",
      content: "Highly impressed with the APIs and backend development. Congo delivered scalable solutions that perfectly matched our requirements. Truly professional!",
      rating: 5,
    },
    {
      id: "02",
      name: "Jerry Temakloe",
      role: "Founder & Creative Entrepreneur",
      company: "Carve Studio",
      content: "Congo's expertise in microservices architecture transformed our monolithic application into a scalable, maintainable system. His documentation skills are excellent too!",
      avatar: "/lovable-uploads/e7a271ed-34b5-4117-b716-6c44c58df08d.png",
      rating: 5,
    },
    {
      id: "03",
      name: "Prof. Daniel Addo-Mensah",
      role: "Lecturer & Head of Industrial Attachment",
      company: "UENR",
      content: "Congo's ability to turn impactful ideas into digital platforms is insane — from understanding users' pain points to building solutions they actually want.",
      avatar: "/lovable-uploads/5548e7ab-7bc7-436a-877b-caab2b5d82c6.png",
      rating: 5,
    },
    {
      id: "04",
      name: "Host of Kultural Kompass",
      role: "Founder & Host",
      company: "Kultural Kompass",
      content: "I love the approach to product where ideas are easily turned into great digital solutions that resonate with the audience and target interests. Wonderful work!",
      avatar: "/lovable-uploads/kultural.png",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-foreground mb-6 uppercase tracking-tight"
          >
            Kind Words <span className="text-brand-orange italic">From Clients</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg"
          >
            Trusted by industry leaders and creative minds across the globe.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background p-8 rounded-2xl border border-border/50 hover:border-brand-orange/30 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-8 italic">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover grayscale md:hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="font-bold text-foreground text-sm">{t.name}</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
