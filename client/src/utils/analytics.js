/**
 * Google Analytics 4 helpers.
 * They do nothing until VITE_GA_ID is set (vite.config.js only adds the GA script then),
 * so the site works the same with or without analytics.
 */
function gtag(...args) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

export function trackPageView(path) {
  gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** e.g. trackEvent('generate_lead', { form: 'contact' }) */
export function trackEvent(name, params = {}) {
  gtag('event', name, params);
}
