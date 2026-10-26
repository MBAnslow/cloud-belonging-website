import type { APIRoute } from 'astro';
import { getJournal } from '../lib/journal';

const STATIC = ['/', '/installation/', '/concept/', '/process/', '/collaborate/', '/about/'];

export const GET: APIRoute = async ({ site }) => {
  const origin = site ?? new URL('https://www.cloudfulness.life');
  const journal = await getJournal();
  const paths = [...STATIC, ...journal.map((entry) => `/process/${entry.id}/`)];
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, origin).href}</loc></url>`)
    .join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
