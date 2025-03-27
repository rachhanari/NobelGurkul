import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Noble-school/',
  server: {
    port: 5173, // Default Vite port
    open: true, // Opens browser on start
  },
  build: {
    outDir: 'dist', // Output directory
    sourcemap: true, 
  }
});
