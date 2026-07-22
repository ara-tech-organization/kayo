/**
 * Resolves a path in /public against the deployment base.
 *
 * On GitHub Pages the site is served from a sub-path (/kayo/), so a literal
 * "/media/photos/hero.webp" would 404. `import.meta.env.BASE_URL` reflects the
 * `base` in vite.config.js and always ends with a slash, so it works unchanged
 * at the site root too.
 */
const BASE = import.meta.env.BASE_URL;

export default function asset(path) {
  return BASE + String(path).replace(/^\/+/, "");
}
