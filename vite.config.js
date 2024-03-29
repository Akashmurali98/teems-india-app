import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from 'vite-jsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  server: {
    host: "0.0.0.0",
    port: 9001,
    open: true,
    proxy: {
      "/dev": {
        target: "http://13.127.249.79",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, ""),
      },
    },
  },
});
