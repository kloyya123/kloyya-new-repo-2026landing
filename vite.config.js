import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Dev-only: the /legal/* policy pages are static files at
 * public/legal/<slug>/index.html. Production hosts (and `vite preview`)
 * resolve /legal/<slug>/ to that index.html automatically; Vite's dev
 * server does not — it SPA-falls-back to the app shell instead. This
 * rewrites the request before the fallback runs so `npm run dev` matches
 * production. No effect on the build.
 */
function legalStaticPages() {
  return {
    name: 'kloyya-legal-static-pages',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url) {
          const [path, query] = req.url.split('?');
          const last = path.split('/').pop();
          if (path.startsWith('/legal/') && !last.includes('.')) {
            const base = path.endsWith('/') ? path.slice(0, -1) : path;
            req.url = `${base}/index.html${query ? `?${query}` : ''}`;
          }
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), legalStaticPages()],
  server: { port: 5173, open: true }
});
