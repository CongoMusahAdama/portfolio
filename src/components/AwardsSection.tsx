import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Star, Medal, X, ChevronLeft, ChevronRight } from "lucide-react";

const AwardsSection = () => {
    const [selectedAward, setSelectedAward] = useState<null | number>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const awards = [
        {
            title: "Mentor",
            subtitle: "GDIW 2025",
            logo: "/lovable-uploads/gdiw-logo.png",
            description: "Mentoring innovators at Ghana Digital and Innovation Week.",
            images: [
                "/lovable-uploads/gdiw-1.png",
                "/lovable-uploads/gdiw-2.png"
            ]
        },
        {
            title: "Business Development",
            subtitle: "United Way Ghana",
            logo: "/lovable-uploads/unitedway-logo.png",
            description: "Social impact and strategic program management.",
            images: [
                "/lovable-uploads/unitedway-1.png",
                "/lovable-uploads/unitedway-2.jpg"
            ]
        },
        {
            title: "Community Builder",
            subtitle: "Tech Ecosystem",
            logo: <Users className="w-8 h-8 text-brand-orange" />,
            description: "Scaling digital communities for collaborative growth.",
            images: [] // To be added later
        },
    ];

    const openModal = (index: number) => {
        if (awards[index].images.length > 0) {
            setSelectedAward(index);
            setCurrentImageIndex(0);
            document.body.style.overflow = "hidden";
        }
    };

    const closeModal = () => {
        setSelectedAward(null);
        document.body.style.overflow = "auto";
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedAward !== null) {
            setCurrentImageIndex((prev) =>
                (prev + 1) % awards[selectedAward].images.length
            );
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedAward !== null) {
            setCurrentImageIndex((prev) =>
                (prev - 1 + awards[selectedAward].images.length) % awards[selectedAward].images.length
            );
        }
    };

    return (
        <section className="py-12 md:py-16 bg-background relative overflow-hidden transition-colors duration-300">
            {/* Subtle Background Elements */}
            <div className="absolute top-10 left-10 opacity-[0.05] dark:opacity-[0.08] pointer-events-none text-foreground">
                <Star className="w-20 h-20 md:w-32 md:h-32 rotate-12" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-[0.05] dark:opacity-[0.08] pointer-events-none text-foreground">
                <Medal className="w-24 h-24 md:w-40 md:h-40 -rotate-12" />
            </div>

            <div className="container mx-auto px-5 md:px-6 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-16 font-display">
                    <div className="space-y-3 md:space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase leading-[0.9]">
                            Honors & <br />
                            <span className="curvy-underline text-brand-orange">Recognitions</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground text-base md:text-lg max-w-sm font-medium leading-tight">
                        A selection of milestones achieved through leadership and technical excellence. Click to view moments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 max-w-7xl mx-auto">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group flex flex-col ${award.images.length > 0 ? 'cursor-pointer' : ''}`}
                            onClick={() => openModal(index)}
                        >
                            <div className="mb-6 md:mb-10 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transition-all duration-700 transform group-hover:scale-110">
                                {typeof award.logo === 'string' ? (
                                    <img
                                        src={award.logo}
                                        alt={award.subtitle}
                                        className="w-full h-full object-contain"
                                    />
                                ) : (
                                    <div className="p-3 md:p-4 bg-muted rounded-2xl">
                                        {award.logo}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2 md:space-y-3">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight group-hover:text-brand-orange transition-colors leading-none">
                                    {award.title}
                                </h3>
                                <p className="text-brand-orange font-bold text-[10px] md:text-xs uppercase tracking-[0.25em]">
                                    {award.subtitle}
                                </p>
                                <div className="pt-1 md:pt-2">
                                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xs font-medium">
                                        {award.description}
                                    </p>
                                </div>
                                {award.images.length > 0 && (
                                    <span className="inline-block mt-3 md:mt-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-foreground/30 group-hover:text-brand-orange transition-colors">
                                        View Gallery ({award.images.length})
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedAward !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 md:p-10"
                        onClick={closeModal}
                    >
                        <motion.button
                            className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] p-2 md:p-3 text-foreground hover:text-brand-orange transition-colors bg-white/10 rounded-full md:bg-transparent"
                            onClick={closeModal}
                        >
                            <X className="w-6 h-6 md:w-8 md:h-8" />
                        </motion.button>

                        <div className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="w-full flex-1 flex items-center justify-center relative min-h-0"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={awards[selectedAward].images[currentImageIndex]}
                                    alt={`Recognition ${currentImageIndex + 1}`}
                                    className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-xl md:rounded-2xl shadow-2xl shadow-brand-orange/10"
                                />

                                {/* Navigation Buttons */}
                                {awards[selectedAward].images.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 p-2 md:p-3 text-foreground hover:text-brand-orange transition-colors bg-white/10 md:bg-transparent rounded-full"
                                        >
                                            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 p-2 md:p-3 text-foreground hover:text-brand-orange transition-colors bg-white/10 md:bg-transparent rounded-full"
                                        >
                                            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                                        </button>
                                    </>
                                )}
                            </motion.div>

                            <div className="mt-4 md:mt-8 pb-4 text-center space-y-1 md:space-y-2">
                                <h4 className="text-xl md:text-2xl font-black text-foreground tracking-tighter uppercase leading-tight">
                                    {awards[selectedAward].title}
                                </h4>
                                <p className="text-brand-orange font-bold text-xs md:text-sm uppercase tracking-widest">
                                    {awards[selectedAward].subtitle}
                                </p>
                                <div className="flex gap-1.5 md:gap-2 justify-center mt-3 md:mt-4">
                                    {awards[selectedAward].images.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-6 md:w-8 bg-brand-orange' : 'w-1.5 md:w-2 bg-foreground/10'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default AwardsSection;
