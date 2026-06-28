/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_SOUNDTRACK_URL?: string;
  readonly VITE_SITE_SOUNDTRACK_YOUTUBE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
