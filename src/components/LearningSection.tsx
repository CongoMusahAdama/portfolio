
import { motion } from "framer-motion";

const LearningSection = () => {
    const learningItems = [
        {
            name: "Machine Learning",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
            color: "text-brand-pink"
        },
        {
            name: "Product Development",
            icon: "/lovable-uploads/product-dev-icon.png",
            color: "text-blue-500"
        }
    ];

    return (
        <section className="py-6 bg-background border-b border-border/40 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
                        <h3 className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-bold text-muted-foreground/60 font-display">
                            Currently Learning
                        </h3>
                    </div>

                    <div className="flex items-center gap-8 sm:gap-12">
                        {learningItems.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2.5 group cursor-default">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-brand-pink/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain relative z-10 filter transition-transform group-hover:scale-110"
                                    />
                                </div>
                                <span className="text-xs sm:text-sm font-bold text-foreground tracking-tight group-hover:text-brand-pink transition-colors">
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LearningSection;
