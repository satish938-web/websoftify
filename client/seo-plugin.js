/**
 * Build-time SEO for this single-page site.
 *
 * - Adds share-preview tags (og:*, twitter:*) and Organization structured data to
 *   index.html, so WhatsApp/LinkedIn/Google see them without running JavaScript.
 * - Writes robots.txt and sitemap.xml into the build output.
 * - Adds Google Analytics 4 only when VITE_GA_ID is set.
 * - Adds the Search Console verification tag only when VITE_GSC_VERIFICATION is set.
 *
 * The site address comes from VITE_SITE_URL, else DEFAULT_SITE_URL in src/config/site.js.
 */
import {
  DEFAULT_SITE_URL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  OG_IMAGE_PATH,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  STATIC_ROUTES,
  absoluteUrl,
} from './src/config/site.js';
import { getAllSlugs } from './src/data/servicePages.js';
import { contactInfo } from './src/data/contact.js';

const GA_ID_PATTERN = /^G-[A-Z0-9]+$/;

export default function seoPlugin(env = {}) {
  const siteUrl = (env.VITE_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '');
  const url = (path) => absoluteUrl(path, siteUrl);
  const gscToken = (env.VITE_GSC_VERIFICATION || '').trim();
  let gaId = (env.VITE_GA_ID || '').trim();

  if (gaId && !GA_ID_PATTERN.test(gaId)) {
    console.warn(`[seo] VITE_GA_ID "${gaId}" does not look like a GA4 ID (G-XXXXXXX). Analytics NOT added.`);
    gaId = '';
  }

  const routes = [...STATIC_ROUTES, ...getAllSlugs().map((slug) => `/services/${slug}`)];
  const telephone = contactInfo.phoneHref.replace(/^tel:/, '');

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: url('/'),
    logo: url('/websoftify-logo.png'),
    image: url(OG_IMAGE_PATH),
    description: DEFAULT_DESCRIPTION,
    email: contactInfo.businessEmail,
    telephone,
    areaServed: contactInfo.location.split('/').map((place) => place.trim()).filter(Boolean),
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'sales', telephone, email: contactInfo.businessEmail },
    ],
  };

  const meta = (attrs) => ({ tag: 'meta', attrs, injectTo: 'head' });

  return {
    name: 'websoftify-seo',

    transformIndexHtml() {
      const tags = [
        meta({ property: 'og:site_name', content: SITE_NAME }),
        meta({ property: 'og:type', content: 'website' }),
        meta({ property: 'og:title', content: DEFAULT_TITLE }),
        meta({ property: 'og:description', content: DEFAULT_DESCRIPTION }),
        meta({ property: 'og:image', content: url(OG_IMAGE_PATH) }),
        meta({ property: 'og:image:width', content: String(OG_IMAGE_WIDTH) }),
        meta({ property: 'og:image:height', content: String(OG_IMAGE_HEIGHT) }),
        meta({ property: 'og:image:alt', content: `${SITE_NAME} logo` }),
        meta({ name: 'twitter:card', content: 'summary_large_image' }),
        meta({ name: 'twitter:image', content: url(OG_IMAGE_PATH) }),
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          // "<" escaped so the JSON can never close the script tag early
          children: JSON.stringify(organization).replace(/</g, '\\u003c'),
          injectTo: 'head',
        },
      ];

      if (gscToken) {
        tags.push(meta({ name: 'google-site-verification', content: gscToken }));
      }

      if (gaId) {
        tags.push(
          {
            tag: 'script',
            attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${gaId}` },
            injectTo: 'head',
          },
          {
            tag: 'script',
            // page_view is sent by RouteAnalytics on every page change, so turn off the automatic one
            children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}',{send_page_view:false});`,
            injectTo: 'head',
          },
        );
      }

      return tags;
    },

    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${url('/sitemap.xml')}\n`,
      });

      const entries = routes.map((route) => `  <url><loc>${url(route)}</loc></url>`).join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
      });
    },
  };
}
