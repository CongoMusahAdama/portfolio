import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useSiteSoundtrack } from "@/context/SiteSoundtrackContext";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isPlaying } = useSiteSoundtrack();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showButton = isVisible && !isPlaying;

  return (
    <button
      onClick={scrollToTop}
      className={`hard-shadow fixed bottom-[max(1rem,calc(env(safe-area-inset-bottom)+0.75rem))] right-4 z-30 flex h-10 w-10 items-center justify-center gap-2 border-2 border-ink bg-paper font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-c-cream hover:text-on-color sm:bottom-6 sm:left-6 sm:right-auto sm:h-11 sm:w-auto sm:px-3 ${
        showButton ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Scroll to top"
      aria-hidden={!showButton}
    >
      <ArrowUp className="h-4 w-4" />
      <span className="hidden sm:inline">Top</span>
    </button>
  );
};

export default ScrollToTop;
