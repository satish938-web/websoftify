import { titleToSlug } from '../utils/slugify';
import { services } from './services';
import { buildRichContent, buildFeatures } from './serviceRichContent';
import { siteStats } from './siteStats';

const brandDark = {
  accent: 'text-primary-500',
  accentBg: 'bg-primary-600',
  btnClass: 'gradient-bg text-white hover:opacity-90 shadow-lg',
  textColor: 'text-white',
  subText: 'text-gray-400',
};

const brandLight = {
  accent: 'text-primary-700',
  accentBg: 'bg-primary-600',
  btnClass: 'gradient-bg text-white hover:opacity-90',
  textColor: 'text-slate-900',
  subText: 'text-slate-600',
};

export const layoutThemes = [
  {
    id: 'aurora',
    heroBg: 'bg-gradient-to-br from-primary-900 via-black to-primary-900',
    ...brandDark,
    featureStyle: 'glass',
    anim: 'fade-up',
  },
  {
    id: 'neon',
    heroBg: 'bg-black',
    ...brandDark,
    featureStyle: 'neon-border',
    anim: 'slide-left',
  },
  {
    id: 'minimal',
    heroBg: 'bg-white border-b-4 border-primary-600',
    ...brandLight,
    featureStyle: 'minimal-line',
    anim: 'scale-in',
  },
  {
    id: 'sunset',
    heroBg: 'bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500',
    accent: 'text-primary-200',
    accentBg: 'bg-primary-600',
    btnClass: 'bg-white hover:bg-primary-50 text-primary-700 font-bold',
    featureStyle: 'rounded-white',
    anim: 'float',
    textColor: 'text-white',
    subText: 'text-white/80',
  },
  {
    id: 'ocean',
    heroBg: 'bg-gradient-to-b from-primary-700 to-primary-900',
    accent: 'text-primary-300',
    accentBg: 'bg-primary-500',
    btnClass: 'bg-primary-500 hover:bg-primary-400 text-primary-900 font-bold',
    featureStyle: 'wave-card',
    anim: 'slide-right',
    textColor: 'text-white',
    subText: 'text-primary-100',
  },
  {
    id: 'forest',
    heroBg: 'bg-gradient-to-br from-primary-900 to-black',
    ...brandDark,
    featureStyle: 'leaf-card',
    anim: 'fade-up',
  },
  {
    id: 'corporate',
    heroBg: 'bg-gradient-to-br from-primary-50 to-white',
    ...brandLight,
    featureStyle: 'corporate-grid',
    anim: 'stagger',
  },
  {
    id: 'midnight',
    heroBg: 'bg-gradient-to-br from-black via-primary-900 to-black',
    ...brandDark,
    featureStyle: 'glow-card',
    anim: 'pulse',
  },
  {
    id: 'rose',
    heroBg: 'bg-gradient-to-br from-primary-50 to-white',
    ...brandLight,
    featureStyle: 'soft-shadow',
    anim: 'fade-up',
  },
  {
    id: 'electric',
    heroBg: 'bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900',
    accent: 'text-primary-200',
    accentBg: 'bg-primary-700',
    btnClass: 'bg-white hover:bg-primary-50 text-primary-800 font-bold',
    featureStyle: 'bold-border',
    anim: 'bounce-in',
    textColor: 'text-white',
    subText: 'text-primary-100/80',
  },
  {
    id: 'royal',
    heroBg: 'bg-gradient-to-br from-primary-800 to-primary-900',
    accent: 'text-primary-400',
    accentBg: 'bg-primary-500',
    btnClass: 'gradient-bg text-white hover:opacity-90 font-bold',
    featureStyle: 'gold-accent',
    anim: 'slide-left',
    textColor: 'text-white',
    subText: 'text-primary-200',
  },
  {
    id: 'steel',
    heroBg: 'bg-gradient-to-br from-gray-900 to-black',
    accent: 'text-primary-400',
    accentBg: 'bg-primary-600',
    btnClass: 'gradient-bg text-white hover:opacity-90 font-bold',
    featureStyle: 'metal-card',
    anim: 'scale-in',
    textColor: 'text-white',
    subText: 'text-gray-400',
  },
];

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'We understand your goals, requirements, and target audience.' },
  { step: '02', title: 'Planning', desc: 'Strategy, wireframes, and roadmap for your project.' },
  { step: '03', title: 'Development', desc: 'Agile development with regular updates and feedback.' },
  { step: '04', title: 'Launch & Support', desc: 'Deploy, test, and provide ongoing maintenance.' },
];

const serviceContent = {
  'Custom Software Development': {
    tagline: 'Software built exactly how your business works',
    intro: 'Get tailor-made software that automates workflows, saves time, and scales with your growth. No one-size-fits-all — every line of code is written for you.',
    keywords: 'custom software development, bespoke software, business software india, websoftify',
  },
  'AI Chatbots': {
    tagline: 'Smart bots that talk, sell, and support 24/7',
    intro: 'Deploy intelligent AI chatbots on your website, app, or social channels. Handle thousands of queries instantly while your team focuses on high-value work.',
    keywords: 'AI chatbot development, chatbot for business, conversational AI, websoftify chatbot',
  },
  'WhatsApp AI': {
    tagline: 'AI-powered WhatsApp automation for sales & support',
    intro: 'Turn WhatsApp into your smartest sales and support channel with AI that understands context, qualifies leads, and responds naturally.',
    keywords: 'WhatsApp AI, WhatsApp automation, AI WhatsApp bot, websoftify',
  },
  'AI Agents': {
    tagline: 'Autonomous AI agents for your business ops',
    intro: 'AI agents that execute tasks, manage workflows, follow up leads, and integrate with your existing tools — working around the clock.',
    keywords: 'AI agents, autonomous AI, business automation AI, websoftify',
  },
  'Web Application Development': {
    tagline: 'Powerful web apps that drive real results',
    intro: 'From SaaS platforms to internal dashboards — we build fast, secure, and scalable web applications using React, Node.js, and modern stacks.',
    keywords: 'web application development, SaaS development, web app company india',
  },
  'Mobile App Development': {
    tagline: 'Apps your users will love on every device',
    intro: 'Native iOS, Android, and cross-platform apps with stunning UI, smooth performance, and features that keep users coming back.',
    keywords: 'mobile app development, iOS app, Android app development india',
  },
  'Ecommerce Development': {
    tagline: 'Online stores that convert visitors to buyers',
    intro: 'Full e-commerce solutions with payment gateways, inventory, order management, and analytics — built to grow your online sales.',
    keywords: 'ecommerce development, online store development, shopify alternative india',
  },
  'UI/UX & Web Design': {
    tagline: 'Designs that delight users and drive conversions',
    intro: 'User-centered UI/UX design that makes your product intuitive, beautiful, and optimized for maximum engagement and conversions.',
    keywords: 'UI UX design, web design services, product design agency',
  },
  'SEO & Digital Growth': {
    tagline: 'Rank higher, get more traffic, grow faster',
    intro: 'Data-driven SEO and digital marketing strategies to boost your Google rankings, organic traffic, and online visibility.',
    keywords: 'SEO services, digital marketing, google ranking, websoftify SEO',
  },
  'WhatsApp Business API': {
    tagline: 'Official WhatsApp API for business messaging',
    intro: 'Integrate WhatsApp Business API for bulk messaging, notifications, chatbots, and CRM sync — reach customers where they are.',
    keywords: 'WhatsApp Business API, WhatsApp API integration, bulk WhatsApp messaging',
  },
  'Maintenance & Support': {
    tagline: 'Keep your software running flawlessly',
    intro: 'Proactive maintenance, security updates, bug fixes, backups, and ongoing support so your website and apps never miss a beat.',
    keywords: 'website maintenance, software support, IT maintenance services',
  },
  'Micro-GCC Teams': {
    tagline: 'Dedicated developer teams on demand',
    intro: 'Hire skilled remote developers as an extension of your team. Flexible, cost-effective, and ready to start immediately.',
    keywords: 'dedicated development team, hire remote developers, micro GCC teams',
  },
  'CRM Software': {
    tagline: 'Manage leads, customers & sales in one place',
    intro: 'Custom CRM software to track leads, manage pipelines, automate follow-ups, and close more deals efficiently.',
    keywords: 'CRM software development, custom CRM, sales CRM india',
  },
  'CRM Features': {
    tagline: 'Advanced CRM modules for every need',
    intro: 'Lead scoring, automation, reporting, integrations, and custom CRM features tailored to your sales process.',
    keywords: 'CRM features, CRM modules, CRM automation, sales pipeline',
  },
  'ERP Software': {
    tagline: 'Unify your entire business operations',
    intro: 'Enterprise resource planning systems for inventory, HR, finance, procurement, and operations — all connected in one platform.',
    keywords: 'ERP software development, custom ERP, enterprise software india',
  },
  'IVR System': {
    tagline: 'Professional phone systems that impress callers',
    intro: 'Interactive Voice Response systems with custom menus, call routing, and integrations for seamless customer experience.',
    keywords: 'IVR system, IVR software, call routing system, telephony solutions',
  },
  'Cloud Call Center': {
    tagline: 'Run your call center from anywhere',
    intro: 'Cloud-based call center with agent management, call recording, analytics, and CRM integration — no hardware needed.',
    keywords: 'cloud call center, virtual call center, call center software india',
  },
  'Dialer Software': {
    tagline: 'Automate outbound calling at scale',
    intro: 'Auto dialer, predictive dialer, and power dialer software to boost your sales team productivity and connect rates.',
    keywords: 'dialer software, auto dialer, predictive dialer, outbound calling',
  },
  'Task Management': {
    tagline: 'Keep teams organized and projects on track',
    intro: 'Custom task and project management tools with kanban boards, deadlines, team collaboration, and progress tracking.',
    keywords: 'task management software, project management tool, team collaboration',
  },
  'Hosting Services': {
    tagline: 'Fast, secure, and reliable web hosting',
    intro: 'Premium hosting with 99.9% uptime, SSD storage, free SSL, daily backups, and expert managed support.',
    keywords: 'web hosting services, website hosting india, managed hosting',
  },
  'SSL Certificates': {
    tagline: 'Secure your website and build trust',
    intro: 'SSL certificate installation and management for HTTPS security, browser trust badges, and better SEO rankings.',
    keywords: 'SSL certificate, HTTPS security, website SSL installation',
  },
  'Website Development': {
    tagline: 'Professional websites that represent your brand',
    intro: 'Business websites, portfolios, landing pages, and corporate sites — responsive, fast, and optimized for conversions.',
    keywords: 'website development, business website, professional website india',
  },
  'Website Repair': {
    tagline: 'Fix broken websites fast',
    intro: 'Emergency website repair — fix bugs, recover hacked sites, restore backups, and get your business back online quickly.',
    keywords: 'website repair, fix broken website, hacked website recovery',
  },
  'All Types of Websites': {
    tagline: 'Every website type your business needs',
    intro: 'Blog, educational, NGO, real estate, portfolio, corporate, landing pages — we build all types of professional websites.',
    keywords: 'all types of websites, blog website, NGO website, real estate website, portfolio website india',
  },
  'Custom Software': {
    tagline: 'APIs, dashboards & automation tools',
    intro: 'Build admin panels, APIs, internal tools, and business automation software that streamlines your operations.',
    keywords: 'custom software, API development, admin panel, business automation',
  },
};

const customThemes = {
  'WhatsApp AI': {
    id: 'forest',
    heroBg: 'bg-gradient-to-br from-primary-900 via-black to-primary-900',
    accent: 'text-primary-400',
    accentBg: 'bg-primary-600',
    btnClass: 'gradient-bg text-white hover:opacity-90 font-bold',
    featureStyle: 'leaf-card',
    anim: 'fade-up',
    textColor: 'text-white',
    subText: 'text-gray-400',
  },
  'WhatsApp Business API': {
    id: 'ocean',
    heroBg: 'bg-gradient-to-b from-primary-800 to-primary-900',
    accent: 'text-primary-300',
    accentBg: 'bg-primary-500',
    btnClass: 'bg-primary-500 hover:bg-primary-400 text-white font-bold',
    featureStyle: 'wave-card',
    anim: 'slide-right',
    textColor: 'text-white',
    subText: 'text-primary-100',
  },
};

const allServiceTitles = services.map((s) => s.title);

function findServiceIcon(title) {
  const found = services.find((s) => s.title === title);
  return found?.icon || services[0].icon;
}

export const servicePages = allServiceTitles.map((title, index) => {
  const slug = titleToSlug(title);
  const content = serviceContent[title] || {
    tagline: `Professional ${title} by Websoftify`,
    intro: `Websoftify delivers expert ${title.toLowerCase()} services tailored to your business needs.`,
    keywords: `${title.toLowerCase()}, websoftify, software development india`,
  };
  const theme = customThemes[title] || layoutThemes[index % layoutThemes.length];
  const rich = buildRichContent(title);

  return {
    slug,
    title,
    icon: findServiceIcon(title),
    theme,
    seo: {
      title: `${title} Services | Websoftify - Best ${title} Company in India`,
      description: `${content.intro} Hire Websoftify for expert ${title.toLowerCase()} in India. Free consultation available.`,
      keywords: content.keywords,
    },
    tagline: content.tagline,
    intro: content.intro,
    overview: rich.overview,
    useCases: rich.useCases,
    technologies: rich.technologies,
    deliverables: rich.deliverables,
    industries: rich.industries,
    faqs: rich.faqs,
    whyPoints: rich.whyPoints,
    features: buildFeatures(title),
    benefits: rich.whyPoints.slice(0, 6),
    process: processSteps,
    stats: siteStats,
  };
});

export function getServiceBySlug(slug) {
  return servicePages.find((p) => p.slug === slug);
}

export function getAllSlugs() {
  return servicePages.map((p) => p.slug);
}
