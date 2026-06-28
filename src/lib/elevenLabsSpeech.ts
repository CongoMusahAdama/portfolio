const MODEL_ID = "eleven_multilingual_v2";

type ElevenLabsOptions = {
  stability?: number;
  similarityBoost?: number;
  style?: number;
};

/** Casual, natural delivery — lower stability = less “script reading”. */
const DEFAULT_VOICE_SETTINGS: ElevenLabsOptions = {
  stability: 0.36,
  similarityBoost: 0.78,
  style: 0.52,
};

export const isElevenLabsConfigured = (): boolean => {
  const voiceId = import.meta.env.VITE_ELEVENLABS_VOICE_ID;
  if (!voiceId) return false;
  if (import.meta.env.VITE_ELEVENLABS_API_KEY) return true;
  return import.meta.env.DEV;
};

export async function fetchElevenLabsSpeech(
  text: string,
  options: ElevenLabsOptions = {},
): Promise<Blob> {
  const voiceId = import.meta.env.VITE_ELEVENLABS_VOICE_ID;
  if (!voiceId) {
    throw new Error("Missing VITE_ELEVENLABS_VOICE_ID");
  }

  const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
  const useDevProxy = import.meta.env.DEV && !apiKey;

  const url = useDevProxy
    ? `/api/elevenlabs/tts/${voiceId}`
    : `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "audio/mpeg",
  };

  if (apiKey) {
    headers["xi-api-key"] = apiKey;
  }

  const { stability, similarityBoost, style } = {
    ...DEFAULT_VOICE_SETTINGS,
    ...options,
  };

  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      text,
      model_id: MODEL_ID,
      voice_settings: {
        stability,
        similarity_boost: similarityBoost,
        style,
        use_speaker_boost: true,
      },
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`ElevenLabs TTS failed (${response.status})${detail ? `: ${detail}` : ""}`);
  }

  return response.blob();
}
