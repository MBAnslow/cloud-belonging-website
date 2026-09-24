const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path with the site's base (e.g. `/cloud-belonging-website` on GitHub Pages). */
export const url = (path: string) => `${base}${path.startsWith('/') ? path : `/${path}`}`;
