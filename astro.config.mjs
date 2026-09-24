// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mbanslow.github.io',
  // GitHub Pages serves the site from /<repo>/. Links in pages use `url()` from src/lib/url.ts;
  // links inside journal Markdown should be relative (e.g. `../../toolkit/`).
  base: '/cloud-belonging-website',
});
