import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    // The lightningcss native binary is blocked by Windows Application Control
    // on some machines; esbuild minifies CSS in pure JS and always works.
    cssMinify: "esbuild",
    rollupOptions: {
      output: {
        /* Keep long-lived vendor code in its own cacheable chunks. */
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (
            id.includes("framer-motion") ||
            id.includes("motion-dom") ||
            id.includes("motion-utils")
          )
            return "motion";
          if (id.includes("swiper")) return "swiper";
          if (id.includes("react-router")) return "router";
          if (id.includes("lucide-react")) return "icons";
          return "vendor";
        },
      },
    },
  },
});
