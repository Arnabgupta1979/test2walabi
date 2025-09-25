import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative base so the app works on GitHub Pages project sites
  // without needing the repo name hardcoded. This ensures asset paths
  // (JS/CSS/images) resolve correctly when served from a subpath.
  base: './',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
