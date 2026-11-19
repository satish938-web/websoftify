import { portfolioProjects } from './portfolio';
import { services } from './services';

/**
 * The only numbers the site shows about itself.
 * They are counted from the real data files, so they stay true when you add a
 * project to portfolio.js. Do not type numbers into components by hand.
 */
export const liveProjectCount = portfolioProjects.length;
export const clientCount = new Set(portfolioProjects.map((p) => p.company)).size;
export const serviceCount = services.length;

export const siteStats = [
  { value: String(liveProjectCount), label: 'Live Projects', illustration: 'projects' },
  { value: String(clientCount), label: 'Businesses Served', illustration: 'clients' },
  { value: String(serviceCount), label: 'Services Offered', illustration: 'services' },
  { value: 'Free', label: 'Consultation', illustration: 'support' },
];
