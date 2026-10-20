// @ts-check
import { defineConfig } from 'astro/config';

// Custom domain at the root: SITE = 'https://your-domain.org', BASE = ''.
// GitHub Pages project URL: SITE = 'https://mbanslow.github.io', BASE = '/cloud-belonging-website'.
const SITE = 'https://www.cloudfulness.life';
const BASE = '';

// Astro only refreshes a component's cached CSS on style-only edits; when markup and styles
// change in the same save, `Foo.astro?astro&type=style…` keeps serving the previous compile.
// Recompile the component straight away and drop its style modules on every edit.
const freshAstroStyles = {
  name: 'fresh-astro-styles',
  /** @param {{ file: string, modules: any[] }} ctx */
  async hotUpdate({ file, modules }) {
    if (!file.endsWith('.astro')) return;
    const graph = this.environment.moduleGraph;
    const main = graph.getModuleById(file);
    if (main) graph.invalidateModule(main);
    try {
      await this.environment.transformRequest(file);
    } catch {}
    const extra = [];
    for (const [id, mod] of graph.idToModuleMap) {
      if (id.startsWith(`${file}?astro&type=style`)) {
        graph.invalidateModule(mod);
        extra.push(mod);
      }
    }
    return [...modules, ...extra];
  },
};

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
  vite: {
    plugins: [freshAstroStyles],
    server: {
      watch: {
        // Since the workspace is located inside a OneDrive folder, the standard OS-level
        // file system events (fs.watch) are often intercepted or ignored.
        // Polling guarantees that Vite detects every code change instantly.
        usePolling: true,
        interval: 100,
      },
    },
  },
});
