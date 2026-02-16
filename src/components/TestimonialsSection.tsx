
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
    <section id="testimonials" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-orange/10 text-brand-orange px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            Loved by Partners Worldwide
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-black text-foreground uppercase tracking-tight max-w-3xl leading-[1.1]"
          >
            Don't Just Take My <br />
            <span className="curvy-underline text-brand-orange">Work for It</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground mt-6 text-lg max-w-xl"
          >
            Real stories from visionary founders and industry leaders who transformed their digital presence.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card border border-border/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:border-brand-orange/20 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>

              <blockquote className="text-foreground/90 text-lg leading-relaxed mb-8 italic">
                "{t.content}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-foreground">{t.name}</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    {t.role}, {t.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center bg-brand-orange/5 border border-brand-orange/10 rounded-[32px] p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-4">
            Ready to Build Something Extraordinary?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-lg">
            Join the ranks of visionaries who turned their ideas into impactful digital solutions.
          </p>
          <a
            href="#contact"
            className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/20"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
