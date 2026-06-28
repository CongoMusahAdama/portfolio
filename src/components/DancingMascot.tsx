type DancingMascotProps = {
  isPlaying: boolean;
};

const MASCOT_SRC = "/assets/mascot-listening.png";

/** Headphones mascot — gently grooves while soundtrack plays. */
export const DancingMascot = ({ isPlaying }: DancingMascotProps) => (
  <div
    aria-hidden
    className={`pointer-events-none fixed bottom-[max(0.25rem,env(safe-area-inset-bottom))] right-1 z-40 sm:right-4 md:bottom-2 transition-all duration-700 ease-out ${
      isPlaying
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-6 scale-95"
    }`}
  >
    <img
      src={MASCOT_SRC}
      alt=""
      draggable={false}
      className={`block h-32 w-auto origin-bottom object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_10px_32px_rgba(0,0,0,0.45)] sm:h-44 md:h-52 ${
        isPlaying ? "animate-mascot-groove" : ""
      }`}
    />
  </div>
);
