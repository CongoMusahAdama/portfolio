type SoundtrackProgressProps = {
  progress: number;
  isPlaying: boolean;
};

export const SoundtrackProgress = ({
  progress,
  isPlaying,
}: SoundtrackProgressProps) => (
  <div
    aria-hidden
    className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-opacity duration-700 ease-out ${
      isPlaying ? "opacity-100" : "opacity-0"
    }`}
  >
    <div className="h-px bg-border/40">
      <div
        className="h-full bg-brand-orange/70 transition-[width] duration-200 ease-linear"
        style={{ width: `${Math.min(100, progress * 100)}%` }}
      />
    </div>
  </div>
);
