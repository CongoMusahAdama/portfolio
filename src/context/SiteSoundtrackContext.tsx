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
import { aboutSpeechScript } from "@/data/aboutStory";
import {
  fetchElevenLabsSpeech,
  isElevenLabsConfigured,
} from "@/lib/elevenLabsSpeech";
import {
  configureYoungMaleUtterance,
  speakWhenVoicesReady,
} from "@/lib/speechVoice";

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
  const blobUrlRef = useRef<string | null>(null);
  const cachedAudioRef = useRef<Blob | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const cleanupAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }
  }, []);

  const stopAll = useCallback(() => {
    window.speechSynthesis.cancel();
    cleanupAudio();
    setIsPlaying(false);
    setProgress(0);
  }, [cleanupAudio]);

  useEffect(() => {
    window.speechSynthesis.getVoices();
    return () => stopAll();
  }, [stopAll]);

  const playWithWebSpeech = useCallback(() => {
    window.speechSynthesis.cancel();

    const startSpeech = () => {
      const utterance = new SpeechSynthesisUtterance(aboutSpeechScript);
      configureYoungMaleUtterance(utterance);

      utterance.onstart = () => {
        setIsPlaying(true);
        setProgress(0);
      };
      utterance.onend = () => {
        setIsPlaying(false);
        setProgress(0);
      };
      utterance.onerror = () => {
        setIsPlaying(false);
        setProgress(0);
      };
      utterance.onboundary = (event) => {
        if (aboutSpeechScript.length > 0 && event.charIndex >= 0) {
          setProgress(Math.min(1, event.charIndex / aboutSpeechScript.length));
        }
      };

      window.speechSynthesis.speak(utterance);
    };

    speakWhenVoicesReady(startSpeech);
  }, []);

  const playWithElevenLabs = useCallback(async () => {
    cleanupAudio();

    if (!cachedAudioRef.current) {
      cachedAudioRef.current = await fetchElevenLabsSpeech(aboutSpeechScript);
    }

    const url = URL.createObjectURL(cachedAudioRef.current);
    blobUrlRef.current = url;

    const audio = new Audio(url);
    audioRef.current = audio;

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);
    audio.onended = () => stopAll();
    audio.ontimeupdate = () => {
      if (audio.duration) {
        setProgress(audio.currentTime / audio.duration);
      }
    };
    audio.onerror = () => stopAll();

    await audio.play();
  }, [cleanupAudio, stopAll]);

  const toggle = useCallback(async () => {
    const audioPlaying =
      audioRef.current &&
      !audioRef.current.paused &&
      !audioRef.current.ended;

    if (window.speechSynthesis.speaking || audioPlaying) {
      stopAll();
      return;
    }

    if (isElevenLabsConfigured()) {
      try {
        await playWithElevenLabs();
        return;
      } catch (error) {
        console.warn("ElevenLabs unavailable, falling back to browser speech:", error);
        cachedAudioRef.current = null;
      }
    }

    playWithWebSpeech();
  }, [playWithElevenLabs, playWithWebSpeech, stopAll]);

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
