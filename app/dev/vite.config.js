// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname),
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: path.resolve(__dirname, "../www"),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
  resolve: {
    alias: {
      "@Aevium": path.resolve(__dirname, "./lib", "Aevium"),
    },
  },
  server: {
    port: 1024,
  },
});
