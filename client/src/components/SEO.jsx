import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_NAME, OG_IMAGE_PATH, absoluteUrl } from '../config/site';

/**
 * Sets the page title, description, canonical link and social-share tags.
 * The canonical address is built from SITE_URL + the current path, so there is
 * no hard-coded domain in any page.
 */
export default function SEO({ title, description, keywords }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = absoluteUrl(pathname);
    const image = absoluteUrl(OG_IMAGE_PATH);

    document.title = title;

    const setMeta = (name, content, attr = 'name') => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:site_name', SITE_NAME, 'property');
    setMeta('og:image', image, 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }, [title, description, keywords, pathname]);

  return null;
}
