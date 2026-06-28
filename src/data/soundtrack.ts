export const siteSoundtrack = {
  title: "Blessed",
  artist: "Wizkid",
  /** Local MP3 — add to public/assets/audio/wizkid-blessed.mp3 */
  localSrc:
    import.meta.env.VITE_SITE_SOUNDTRACK_URL?.trim() ||
    "/assets/audio/wizkid-blessed.mp3",
  /** YouTube fallback when local file is missing */
  youtubeId:
    import.meta.env.VITE_SITE_SOUNDTRACK_YOUTUBE_ID?.trim() || "QUSc5al8JpY",
} as const;

export const checkLocalSoundtrack = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    if (!response.ok) return false;

    const type = response.headers.get("content-type") ?? "";
    // Vite (and some hosts) return index.html with 200 for missing public files.
    if (type.includes("text/html") || type.includes("text/plain")) {
      return false;
    }

    return (
      type.includes("audio") ||
      type.includes("octet-stream") ||
      type.includes("mpeg")
    );
  } catch {
    return false;
  }
};
