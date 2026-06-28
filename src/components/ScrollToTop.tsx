import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { useSiteSoundtrack } from "@/context/SiteSoundtrackContext";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isPlaying } = useSiteSoundtrack();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showButton = isVisible && !isPlaying;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed left-4 bottom-[max(1rem,calc(env(safe-area-inset-bottom)+0.75rem))] sm:left-6 sm:bottom-6 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-brand-orange text-white shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 z-30 ${
        showButton
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
      aria-hidden={!showButton}
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
