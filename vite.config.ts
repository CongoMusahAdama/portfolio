import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "::",
      port: 8080,
      proxy: {
        "/api/elevenlabs/tts": {
          target: "https://api.elevenlabs.io",
          changeOrigin: true,
          rewrite: (requestPath) =>
            requestPath.replace(/^\/api\/elevenlabs\/tts/, "/v1/text-to-speech"),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              const apiKey = env.ELEVENLABS_API_KEY;
              if (apiKey) {
                proxyReq.setHeader("xi-api-key", apiKey);
              }
            });
          },
        },
      },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
