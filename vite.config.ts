import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Set base to the repo name for GitHub Pages project site
  // so built assets resolve correctly under /test2walabi/
  base: '/test2walabi/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
