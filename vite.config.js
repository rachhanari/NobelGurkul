import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/NobelGurkul/', // 👈 This is essential for GitHub Pages or any subdirectory deployment

  plugins: [react()],

  server: {
    port: 5173,
    open: true,
  },

  build: {
    outDir: 'dist',       // Output folder for production build
    sourcemap: true,      // Helpful for debugging
    emptyOutDir: true,    // Clean old build files before building again
  },
});
