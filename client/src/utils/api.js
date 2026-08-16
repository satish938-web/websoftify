/** Production API base URL (set VITE_API_URL on Vercel/Netlify). Leave empty when API is same origin. */
export function getApiUrl(path) {
  const base = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}`;
}
