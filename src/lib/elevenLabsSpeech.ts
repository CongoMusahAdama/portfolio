const MODEL_ID = "eleven_multilingual_v2";

/** Taiwo — young natural West African male (ElevenLabs voice library). */
export const DEFAULT_GHANA_VOICE_ID = "CaroURy2Tqx0hGMqPyp8";

type ElevenLabsOptions = {
  stability?: number;
  similarityBoost?: number;
  style?: number;
};

/** Young, casual West African delivery — low stability = less “script reading”. */
const DEFAULT_VOICE_SETTINGS: ElevenLabsOptions = {
  stability: 0.25,
  similarityBoost: 0.85,
  style: 0.58,
};

export const getElevenLabsVoiceId = (): string =>
  import.meta.env.VITE_ELEVENLABS_VOICE_ID?.trim() || DEFAULT_GHANA_VOICE_ID;

export const isElevenLabsConfigured = (): boolean => {
  if (import.meta.env.VITE_ELEVENLABS_API_KEY) return true;
  return import.meta.env.DEV;
};

export async function fetchElevenLabsSpeech(
  text: string,
  options: ElevenLabsOptions = {},
): Promise<Blob> {
  const voiceId = getElevenLabsVoiceId();
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
      language_code: "en",
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
};
