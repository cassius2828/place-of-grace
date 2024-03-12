import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compressionPlugin from "vite-plugin-compression";
import legacy from "@vitejs/plugin-legacy";
// https://vitejs.dev/config/

export default defineConfig(() => {
  return {
    base: "/",
    plugins: [
      react(),
      compressionPlugin({
        ext: ".br", // Use .br extension for Brotli compressed files
        algorithm: "brotliCompress", // Use Brotli compression algorithm
      }),
      legacy({
        targets: ["defaults", "not IE 11"], // Specify browser targets to generate legacy bundles
      }),
    ],
    rules: {
      "no-unused-vars": "warn",
    },
  };
});
