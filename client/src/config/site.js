/**
 * Site-wide SEO settings. Used by the browser code AND by vite.config.js at build time.
 *
 * DEFAULT_SITE_URL: the public address Google is told to index.
 * NOT CONFIRMED YET: websoftify.com currently shows a GoDaddy placeholder page.
 * Once the real domain is settled, change it here, or set VITE_SITE_URL in the
 * hosting dashboard (Netlify/Vercel) without touching code.
 */
export const DEFAULT_SITE_URL = 'https://websoftify.com';

const envSiteUrl = import.meta.env ? import.meta.env.VITE_SITE_URL : undefined;
export const SITE_URL = (envSiteUrl || DEFAULT_SITE_URL).replace(/\/+$/, '');

export const SITE_NAME = 'Websoftify';
export const DEFAULT_TITLE = 'Websoftify | Software Development Company';
export const DEFAULT_DESCRIPTION =
  'Websoftify - Professional Website, App, CRM Development & Maintenance Services';

/** 1200x630 picture shown when a link is shared on WhatsApp, LinkedIn, Facebook, X. */
export const OG_IMAGE_PATH = '/og-image.jpg';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

/** Pages listed in sitemap.xml. Keep in step with the routes in App.jsx. */
export const STATIC_ROUTES = [
  '/',
  '/services',
  '/work',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms-of-service',
];

/** Full address for a path, e.g. absoluteUrl('/about') -> https://websoftify.com/about */
export function absoluteUrl(path = '/', base = SITE_URL) {
  const clean = path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return `${base.replace(/\/+$/, '')}${clean}`;
}
