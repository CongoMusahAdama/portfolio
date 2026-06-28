import { motion } from "framer-motion";
import { PlayOutlineIcon, PauseOutlineIcon } from "@/components/PlayOutlineIcon";
import { useSiteSoundtrack } from "@/context/SiteSoundtrackContext";
import { siteSoundtrack } from "@/data/soundtrack";

type SiteSoundtrackButtonProps = {
  className?: string;
  iconClassName?: string;
};

export const SiteSoundtrackButton = ({
  className = "inline-flex h-10 w-10 shrink-0 items-center justify-center text-brand-orange transition-opacity duration-300 hover:opacity-80",
  iconClassName = "h-6 w-6 md:h-7 md:w-7",
}: SiteSoundtrackButtonProps) => {
  const { isPlaying, toggle } = useSiteSoundtrack();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        isPlaying
          ? `Pause ${siteSoundtrack.title} by ${siteSoundtrack.artist}`
          : `Play ${siteSoundtrack.title} by ${siteSoundtrack.artist}`
      }
      aria-pressed={isPlaying}
      className={className}
    >
      {isPlaying ? (
        <PauseOutlineIcon className={iconClassName} />
      ) : (
        <motion.span
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <PlayOutlineIcon className={iconClassName} />
        </motion.span>
      )}
    </button>
  );
};
