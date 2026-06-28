import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { DancingMascot } from "@/components/DancingMascot";
import { SoundtrackProgress } from "@/components/SoundtrackProgress";
import { checkLocalSoundtrack, siteSoundtrack } from "@/data/soundtrack";
import { toast } from "@/hooks/use-toast";
import {
  createYouTubeSoundtrackPlayer,
  playYouTubeSoundtrack,
  type YouTubePlayer,
} from "@/lib/youtubePlayer";

type PlaybackSource = "none" | "local" | "youtube";

type SiteSoundtrackContextValue = {
  isPlaying: boolean;
  progress: number;
  toggle: () => void;
};

const SiteSoundtrackContext = createContext<SiteSoundtrackContextValue | null>(
  null,
);

export const SiteSoundtrackProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const youtubeRef = useRef<YouTubePlayer | null>(null);
  const youtubeReadyRef = useRef<Promise<YouTubePlayer> | null>(null);
  const sourceRef = useRef<PlaybackSource>("none");
  const localAvailableRef = useRef<boolean | null>(null);
  const progressTimerRef = useRef<number | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const clearProgressTimer = useCallback(() => {
    if (progressTimerRef.current !== null) {
      window.clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
  }, []);

  const stopAll = useCallback(() => {
    clearProgressTimer();

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (youtubeRef.current) {
      youtubeRef.current.pauseVideo();
      youtubeRef.current.stopVideo();
    }

    sourceRef.current = "none";
    setIsPlaying(false);
    setProgress(0);
  }, [clearProgressTimer]);

  useEffect(() => {
    return () => {
      stopAll();
      youtubeRef.current?.destroy();
      youtubeRef.current = null;
      audioRef.current = null;
    };
  }, [stopAll]);

  const startProgressTimer = useCallback(
    (getProgress: () => number) => {
      clearProgressTimer();
      progressTimerRef.current = window.setInterval(() => {
        setProgress(getProgress());
      }, 250);
    },
    [clearProgressTimer],
  );

  const resolveLocalAvailability = useCallback(async () => {
    if (localAvailableRef.current !== null) {
      return localAvailableRef.current;
    }

    localAvailableRef.current = await checkLocalSoundtrack(siteSoundtrack.localSrc);
    return localAvailableRef.current;
  }, []);

  const playLocal = useCallback(async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(siteSoundtrack.localSrc);
      audioRef.current.preload = "auto";
    }

    const audio = audioRef.current;
    sourceRef.current = "local";

    audio.onended = () => stopAll();
    audio.onpause = () => {
      if (sourceRef.current === "local") {
        setIsPlaying(false);
        clearProgressTimer();
      }
    };
    audio.ontimeupdate = () => {
      if (audio.duration) {
        setProgress(audio.currentTime / audio.duration);
      }
    };

    await audio.play();
    setIsPlaying(true);
    startProgressTimer(() =>
      audio.duration ? audio.currentTime / audio.duration : 0,
    );
  }, [clearProgressTimer, startProgressTimer, stopAll]);

  const getYouTubePlayer = useCallback(async () => {
    if (youtubeRef.current) return youtubeRef.current;

    if (!youtubeReadyRef.current) {
      youtubeReadyRef.current = createYouTubeSoundtrackPlayer(
        siteSoundtrack.youtubeId,
        {
          onPlaying: () => setIsPlaying(true),
          onPaused: () => {
            if (sourceRef.current === "youtube") {
              setIsPlaying(false);
              clearProgressTimer();
            }
          },
          onEnded: () => stopAll(),
        },
      )
        .then((player) => {
          youtubeRef.current = player;
          return player;
        })
        .catch((error) => {
          youtubeReadyRef.current = null;
          throw error;
        });
    }

    return youtubeReadyRef.current;
  }, [clearProgressTimer, stopAll]);

  const playYouTube = useCallback(async () => {
    const player = await getYouTubePlayer();
    sourceRef.current = "youtube";
    playYouTubeSoundtrack(player);
    setIsPlaying(true);
    startProgressTimer(() => {
      const duration = player.getDuration();
      if (!duration) return 0;
      return player.getCurrentTime() / duration;
    });
  }, [getYouTubePlayer, startProgressTimer]);

  const toggle = useCallback(async () => {
    const audioPlaying =
      sourceRef.current === "local" &&
      audioRef.current &&
      !audioRef.current.paused;

    const youtubePlaying =
      sourceRef.current === "youtube" &&
      youtubeRef.current &&
      youtubeRef.current.getPlayerState?.() === 1;

    if (audioPlaying || youtubePlaying || isPlaying) {
      stopAll();
      return;
    }

    try {
      const hasLocal = await resolveLocalAvailability();

      if (hasLocal) {
        try {
          await playLocal();
          return;
        } catch (localError) {
          console.warn("Local soundtrack failed, trying YouTube:", localError);
          localAvailableRef.current = false;
          stopAll();
        }
      }

      await playYouTube();
    } catch (error) {
      console.warn("Soundtrack playback failed:", error);
      stopAll();
      toast({
        title: "Could not play soundtrack",
        description: `Add ${siteSoundtrack.localSrc.replace(/^\//, "public/")} or check your connection.`,
        variant: "destructive",
      });
    }
  }, [
    isPlaying,
    playLocal,
    playYouTube,
    resolveLocalAvailability,
    stopAll,
  ]);

  return (
    <SiteSoundtrackContext.Provider value={{ isPlaying, progress, toggle }}>
      {children}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-1000 ease-out ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, hsl(var(--brand-orange) / 0.06), transparent 70%)",
        }}
      />
      <DancingMascot isPlaying={isPlaying} />
      <SoundtrackProgress progress={progress} isPlaying={isPlaying} />
    </SiteSoundtrackContext.Provider>
  );
};

export const useSiteSoundtrack = () => {
  const ctx = useContext(SiteSoundtrackContext);
  if (!ctx) {
    throw new Error("useSiteSoundtrack must be used within SiteSoundtrackProvider");
  }
  return ctx;
};
