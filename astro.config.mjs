// @ts-check
import { defineConfig } from 'astro/config';

// Custom domain at the root: SITE = 'https://your-domain.org', BASE = ''.
// GitHub Pages project URL: SITE = 'https://mbanslow.github.io', BASE = '/cloud-belonging-website'.
const SITE = 'https://mbanslow.github.io';
const BASE = '/cloud-belonging-website';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // Links in pages use `url()` from src/lib/url.ts; links inside journal Markdown are
  // relative (e.g. `../../concept/`), so nothing else depends on the base.
  base: BASE || '/',
  redirects: {
    '/belonging': `${BASE}/concept/`,
    '/alpha': `${BASE}/installation/#alpha`,
    '/toolkit': `${BASE}/collaborate/`,
  },
});
