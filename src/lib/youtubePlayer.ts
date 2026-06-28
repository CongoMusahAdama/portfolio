type YouTubePlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  unMute: () => void;
  setVolume: (volume: number) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  getPlayerState: () => number;
  destroy: () => void;
};

type YouTubeNamespace = {
  Player: new (
    elementId: string,
    config: {
      height: string;
      width: string;
      videoId: string;
      playerVars?: Record<string, number | string>;
      events?: {
        onReady?: (event: { target: YouTubePlayer }) => void;
        onStateChange?: (event: { data: number; target: YouTubePlayer }) => void;
      };
    },
  ) => YouTubePlayer;
  PlayerState: {
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
  };
};

declare global {
  interface Window {
    YT?: YouTubeNamespace;
    onYouTubeIframeAPIReady?: () => void;
  }
}

const YT_HOST_ID = "site-soundtrack-yt-host";

let apiPromise: Promise<YouTubeNamespace> | null = null;

const loadYouTubeApi = (): Promise<YouTubeNamespace> => {
  if (window.YT?.Player) {
    return Promise.resolve(window.YT);
  }

  if (!apiPromise) {
    apiPromise = new Promise((resolve, reject) => {
      const existing = document.getElementById("youtube-iframe-api");
      if (!existing) {
        const script = document.createElement("script");
        script.id = "youtube-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);
      }

      const timeout = window.setTimeout(() => {
        reject(new Error("YouTube API load timeout"));
      }, 15000);

      const finish = () => {
        window.clearTimeout(timeout);
        if (window.YT?.Player) {
          resolve(window.YT);
          return true;
        }
        reject(new Error("YouTube API unavailable"));
        return true;
      };

      window.onYouTubeIframeAPIReady = () => {
        finish();
      };

      // Script may have loaded before our callback was registered.
      const poll = window.setInterval(() => {
        if (window.YT?.Player) {
          window.clearInterval(poll);
          window.clearTimeout(timeout);
          resolve(window.YT);
        }
      }, 100);
    });
  }

  return apiPromise;
};

const ensureHostElement = (): HTMLElement => {
  let host = document.getElementById(YT_HOST_ID);
  if (!host) {
    host = document.createElement("div");
    host.id = YT_HOST_ID;
    // YouTube needs a real-sized iframe for reliable audio playback.
    host.className =
      "pointer-events-none fixed bottom-0 left-0 -z-50 h-[200px] w-[200px] overflow-hidden opacity-0";
    host.setAttribute("aria-hidden", "true");
    document.body.appendChild(host);
  }
  return host;
};

export const createYouTubeSoundtrackPlayer = async (
  videoId: string,
  handlers: {
    onReady?: (player: YouTubePlayer) => void;
    onEnded?: () => void;
    onPlaying?: () => void;
    onPaused?: () => void;
  },
): Promise<YouTubePlayer> => {
  const YT = await loadYouTubeApi();
  ensureHostElement();

  return new Promise((resolve, reject) => {
    let settled = false;

    const player = new YT.Player(YT_HOST_ID, {
      height: "200",
      width: "200",
      videoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        fs: 0,
        iv_load_policy: 3,
        modestbranding: 1,
        origin: window.location.origin,
        playsinline: 1,
        rel: 0,
      },
      events: {
        onReady: (event) => {
          if (!settled) {
            settled = true;
            handlers.onReady?.(event.target);
            resolve(event.target);
          }
        },
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            handlers.onPlaying?.();
          }
          if (event.data === YT.PlayerState.PAUSED) {
            handlers.onPaused?.();
          }
          if (event.data === YT.PlayerState.ENDED) {
            handlers.onEnded?.();
          }
        },
      },
    });

    window.setTimeout(() => {
      if (!settled) {
        settled = true;
        reject(new Error("YouTube player init timeout"));
        player.destroy?.();
      }
    }, 15000);
  });
};

export const playYouTubeSoundtrack = (player: YouTubePlayer) => {
  player.unMute();
  player.setVolume(100);
  player.playVideo();
};

export type { YouTubePlayer };
