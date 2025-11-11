import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: true,        // listen on LAN (0.0.0.0)
    port: 8080,        // keep the port you used before
    strictPort: true,  // fail instead of auto-switching ports
  },
  plugins: [react()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});
