import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocation } from "react-router-dom";

const SHOW_MS = 800;
const ringColors = ["#5fbee6", "#e3a92f", "#d8365d", "#5fb57f", "#f05a28", "#5fbee6", "#e3a92f", "#d8365d", "#5fb57f", "#f05a28"];

const SpinRing = () => (
  <motion.div
    aria-hidden
    className="relative h-16 w-16 sm:h-20 sm:w-20"
    animate={{ rotate: 360 }}
    transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
  >
    {ringColors.map((color, i) => (
      <span key={i} className="absolute inset-0" style={{ transform: `rotate(${i * (360 / ringColors.length)}deg)` }}>
        <span
          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 sm:h-3 sm:w-3"
          style={{ background: color, opacity: 0.25 + (i / (ringColors.length - 1)) * 0.75 }}
        />
      </span>
    ))}
  </motion.div>
);

const PageLoader = () => {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if (!isFirstRender.current) {
      window.scrollTo(0, 0);
      setVisible(true);
    }
    isFirstRender.current = false;
    const timer = window.setTimeout(() => setVisible(false), SHOW_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={pathname}
          role="status"
          aria-label="Loading page"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeOut" } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-canvas"
          style={{
            backgroundImage:
              "linear-gradient(var(--canvas-line) 1px, transparent 1px), linear-gradient(90deg, var(--canvas-line) 1px, transparent 1px)",
            backgroundSize: "170px 170px",
          }}
        >
          <SpinRing />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
