import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this repo from a sub-path. Pass the repo name as
  // BASE_PATH in CI (bare name, no slashes — Git Bash rewrites values that look
  // like absolute paths). Local dev and any root-domain host keep "/".
  base: process.env.BASE_PATH ? `/${process.env.BASE_PATH}/` : "/",
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
