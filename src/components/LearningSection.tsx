import { motion } from "framer-motion";

const learningItems = [
  {
    name: "Machine Learning",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    bg: "#f2bfcd",
  },
  {
    name: "Product Development",
    icon: "/lovable-uploads/product-dev-icon.png",
    bg: "#b5ddf0",
  },
];

const LearningSection = () => {
  return (
    <section className="border-y border-ink/10 bg-paper">
      <motion.div
        className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-4 px-5 py-5 sm:flex-row sm:gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">
          <span className="h-2 w-2 animate-status-pulse rounded-full bg-c-pink" />
          Currently learning
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {learningItems.map((item) => (
            <span
              key={item.name}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-on-color"
              style={{ background: item.bg }}
            >
              <img src={item.icon} alt="" className="h-5 w-5 object-contain" />
              {item.name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LearningSection;
