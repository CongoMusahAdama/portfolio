type DancingMascotProps = {
  isPlaying: boolean;
};

const MASCOT_SRC = "/lovable-uploads/mascot-skateboard-transparent.png";

/** Transparent skateboard mascot — bounces while About audio plays. */
export const DancingMascot = ({ isPlaying }: DancingMascotProps) => (
  <div
    aria-hidden
    className={`pointer-events-none fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-40 sm:right-5 md:bottom-6 transition-opacity duration-500 ease-out ${
      isPlaying ? "opacity-100" : "opacity-0"
    }`}
  >
    <img
      src={MASCOT_SRC}
      alt=""
      draggable={false}
      className={`block h-24 w-auto object-contain sm:h-44 md:h-52 ${
        isPlaying ? "animate-mascot-skate" : ""
      }`}
    />
  </div>
);
