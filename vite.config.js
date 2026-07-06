import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base disesuaikan untuk GitHub Pages project site: https://<user>.github.io/ahmad-luthfi-portfolio/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/ahmad-luthfi-portfolio/" : "/",
  server: {
    port: 5173,
    open: true,
  },
}));
