import { defineConfig } from 'vite';

export default defineConfig({
  // относительные пути в сборке: тогда dist/ работает из любого подкаталога —
  // GitHub Pages (/lite-os/docs/), статика на флешке, превью-прокси. С
  // абсолютным '/' тот же index.html ищет /assets/… в корне хоста и ловит 404.
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    hmr: { overlay: false },
  },
  preview: { host: '0.0.0.0', port: 4173, allowedHosts: true },
  build: { target: 'es2020', chunkSizeWarningLimit: 1500 },
});
