import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(projectRoot, "./src"),
    },
  },
  // Production bundles are minified and source maps are never published.
  // This reduces casual inspection, but frontend code is still downloadable.
  build: {
    sourcemap: false,
    minify: "esbuild",
    cssMinify: true,
  },
  esbuild: {
    drop: ["debugger"],
  },
});