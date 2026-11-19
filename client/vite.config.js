import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import seoPlugin from './seo-plugin.js';

export default defineConfig(({ mode }) => {
  // VITE_* values from .env files or the hosting dashboard (Netlify/Vercel)
  const env = loadEnv(mode, process.cwd(), 'VITE_');

  return {
    plugins: [react(), tailwindcss(), seoPlugin(env)],
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: 'http://localhost:5001',
          changeOrigin: true,
        },
      },
    },
  };
});
