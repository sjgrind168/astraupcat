import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },

  build:{
    chunkSizeWarningLimit:1000,

    rollupOptions:{
      output:{

        manualChunks(id){

          if(id.includes("node_modules")){

            if(
            id.includes("recharts")
            ) return "charts"

            if(
            id.includes("@radix-ui")
            ) return "ui"

            return "vendor"
          }

          if(
          id.includes("/src/data/")
          ){
            return "question-bank"
          }

          if(
          id.includes("/src/pages/")
          ){
            return "pages"
          }

        }

      }
    }

  }

});
