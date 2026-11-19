import { HiGlobeAlt, HiUserGroup } from 'react-icons/hi';

/**
 * Add your company projects here.
 *
 * Fields:
 * - company: Client / company name
 * - title: Project name
 * - category: Must match a slug from workCategories
 * - service: Must match a title from services.js (for icon + link)
 * - description: Short summary of what you built
 * - tech: Technologies used
 * - year: Delivery year
 * - url: Live website/app link (optional — leave '' if private)
 * - image: Screenshot in public/portfolio/, 800x500 JPG (optional — without it the card
 *          shows an illustration). Never screenshot a client's private data.
 */

export const workCategories = [
  {
    slug: 'crm-software',
    title: 'CRM & Software Solutions',
    description:
      'Custom CRM, HR, operations, masked calling, call recording, bulk WhatsApp, and management systems.',
    icon: HiUserGroup,
  },
  {
    slug: 'company-websites',
    title: 'Websites for Companies',
    description:
      'Business websites, travel portals, finance sites, and corporate web presence built for real brands.',
    icon: HiGlobeAlt,
  },
];

export const portfolioProjects = [
  {
    id: 'project-crm-vfc',
    company: 'VFC Loans',
    title: 'All-in-One CRM & Operations Platform',
    category: 'crm-software',
    service: 'CRM Software',
    description:
      'Full business CRM with HR, operations & team management — masked calling, call recording, lead pipeline, bulk WhatsApp campaigns, and admin dashboards in one system.',
    tech: ['React', 'Node.js', 'MongoDB', 'WhatsApp API', 'Call Masking'],
    year: '2026',
    url: 'https://hrms.vfcloans.com/employee-dashboard',
    image: '/portfolio/vfc-loans-crm.jpg',
  },
  {
    id: 'project-crm-admire',
    company: 'Admire Holidays',
    title: 'CRM & Business Management System',
    category: 'crm-software',
    service: 'CRM Software',
    description:
      'Custom CRM for Admire Holidays — lead management, team operations, HR workflows, calling, and business automation in one platform.',
    tech: ['React', 'Node.js', 'MongoDB', 'WhatsApp API'],
    year: '2026',
    url: 'https://admiresoftech.online/',
  },
  {
    id: 'project-1',
    company: 'Web App Healing',
    title: 'Web App Healing Platform',
    category: 'company-websites',
    service: 'Web Application Development',
    description:
      'Modern web platform for application recovery and digital healing services with a clean, professional interface.',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    year: '2026',
    url: 'https://webapphealing.com/',
  },
  {
    id: 'project-2',
    company: 'Infinity Crew',
    title: 'Infinity Crew Website',
    category: 'company-websites',
    service: 'Website Development',
    description:
      'Brand website for Infinity Crew with responsive design, service showcase, and engaging user experience.',
    tech: ['React', 'Tailwind CSS', 'SEO'],
    year: '2026',
    url: 'https://www.infinitycrew.live/',
  },
  {
    id: 'project-3',
    company: 'Travel N World',
    title: 'Travel & Tour Website with Admin Panel',
    category: 'company-websites',
    service: 'All Types of Websites',
    description:
      'Travel agency website with tour packages, destination listings, booking inquiries, and admin panel to manage packages, leads, and bookings.',
    tech: ['React', 'Tailwind CSS', 'Admin Panel', 'SEO'],
    year: '2026',
    url: 'https://www.travelnworld.com/',
  },
  {
    id: 'project-4',
    company: 'Admire Holidays',
    title: 'Holiday Packages Portal with Admin Panel',
    category: 'company-websites',
    service: 'All Types of Websites',
    description:
      'Holiday planning website with curated travel packages, destination guides, customer bookings, and admin panel for package & inquiry management.',
    tech: ['React', 'Tailwind CSS', 'Admin Panel', 'SEO'],
    year: '2026',
    url: 'https://www.admireholidays.com/',
  },
  {
    id: 'project-5',
    company: 'VFC Loans',
    title: 'Home Loan Comparison Portal',
    category: 'company-websites',
    service: 'Website Development',
    description:
      'Finance website for home loans in Gurgaon, Noida & Delhi — compare 30+ banks, rates, LAP, and balance transfer services.',
    tech: ['React', 'Tailwind CSS', 'SEO'],
    year: '2026',
    url: 'https://www.vfcloans.com/',
    image: '/portfolio/vfc-loans-website.jpg',
  },
  {
    id: 'project-6',
    company: 'The Second Wife',
    title: 'Restaurant Website & Admin Dashboard',
    category: 'company-websites',
    service: 'Ecommerce Development',
    description:
      'Full restaurant platform for an Indian restaurant in San Jose — online ordering, menu, catering, table booking, delivery & takeout, rewards, gift cards, and admin dashboard to manage everything.',
    tech: ['React', 'Node.js', 'Online Ordering', 'Admin Dashboard'],
    year: '2026',
    url: 'https://secondwifebites.com/',
  },
];

export function getWorkCategory(slug) {
  return workCategories.find((c) => c.slug === slug);
}

export function getProjectsByCategory(categorySlug) {
  return portfolioProjects.filter((p) => p.category === categorySlug);
}

export function getPortfolioProjectsInOrder() {
  return workCategories.flatMap((category) => getProjectsByCategory(category.slug));
}

export function getProjectCountByCategory(categorySlug) {
  return getProjectsByCategory(categorySlug).length;
}

export function getProjectById(id) {
  return portfolioProjects.find((p) => p.id === id);
}
