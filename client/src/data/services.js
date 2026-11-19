import {
  HiGlobeAlt,
  HiDeviceMobile,
  HiUserGroup,
  HiShoppingCart,
  HiCog,
  HiPhone,
  HiServer,
  HiShieldCheck,
  HiChartBar,
  HiClipboardList,
  HiColorSwatch,
  HiTrendingUp,
  HiSupport,
  HiUserAdd,
} from 'react-icons/hi';
import {
  FaRobot,
  FaWhatsapp,
  FaTools,
  FaReact,
  FaBrain,
  FaLock,
} from 'react-icons/fa';
import { MdDialerSip, MdCloudQueue, MdRecordVoiceOver } from 'react-icons/md';

export const services = [
  {
    icon: FaReact,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built for your unique business workflows and goals.',
    color: 'icon-bw',
  },
  {
    icon: FaBrain,
    title: 'AI Chatbots',
    description: 'Smart AI chatbots that handle customer queries 24/7 and boost engagement.',
    color: 'icon-bw',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp AI',
    description: 'Automated WhatsApp conversations powered by AI for sales and support.',
    color: 'icon-bw',
  },
  {
    icon: FaRobot,
    title: 'AI Agents',
    description: 'Intelligent AI agents that automate tasks, leads, and business operations.',
    color: 'icon-bw',
  },
  {
    icon: HiGlobeAlt,
    title: 'Web Application Development',
    description: 'Scalable web apps with modern tech — dashboards, portals, and SaaS products.',
    color: 'icon-bw',
  },
  {
    icon: HiDeviceMobile,
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android with great UX.',
    color: 'icon-bw',
  },
  {
    icon: HiShoppingCart,
    title: 'Ecommerce Development',
    description: 'Full online stores with payments, inventory, orders, and analytics.',
    color: 'icon-bw',
  },
  {
    icon: HiColorSwatch,
    title: 'UI/UX & Web Design',
    description: 'Beautiful, user-friendly designs that convert visitors into customers.',
    color: 'icon-bw',
  },
  {
    icon: HiTrendingUp,
    title: 'SEO & Digital Growth',
    description: 'Rank higher on Google and grow your brand with proven digital strategies.',
    color: 'icon-bw',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp Business API',
    description: 'Official WhatsApp Business integration for bulk messaging and automation.',
    color: 'icon-bw',
  },
  {
    icon: HiSupport,
    title: 'Maintenance & Support',
    description: 'Regular updates, backups, security patches, and ongoing technical support.',
    color: 'icon-bw',
  },
  {
    icon: HiUserAdd,
    title: 'Micro-GCC Teams',
    description: 'Dedicated remote developer teams for your ongoing project needs.',
    color: 'icon-bw',
  },
  {
    icon: HiUserGroup,
    title: 'CRM Software',
    description: 'Manage leads, customers, sales pipelines, and grow revenue efficiently.',
    color: 'icon-bw',
  },
  {
    icon: HiChartBar,
    title: 'CRM Features',
    description: 'Advanced CRM modules — reporting, automation, integrations, and analytics.',
    color: 'icon-bw',
  },
  {
    icon: HiCog,
    title: 'ERP Software',
    description: 'Enterprise resource planning to streamline inventory, HR, finance, and ops.',
    color: 'icon-bw',
  },
  {
    icon: MdRecordVoiceOver,
    title: 'IVR System',
    description: 'Interactive voice response systems for professional call handling.',
    color: 'icon-bw',
  },
  {
    icon: MdCloudQueue,
    title: 'Cloud Call Center',
    description: 'Cloud-based call center solutions with agents, routing, and analytics.',
    color: 'icon-bw',
  },
  {
    icon: MdDialerSip,
    title: 'Dialer Software',
    description: 'Auto dialer, predictive dialer, and outbound calling software.',
    color: 'icon-bw',
  },
  {
    icon: HiClipboardList,
    title: 'Task Management',
    description: 'Project and task management tools to keep your team organized.',
    color: 'icon-bw',
  },
  {
    icon: HiServer,
    title: 'Hosting Services',
    description: 'Reliable web hosting with fast servers, uptime, and managed support.',
    color: 'icon-bw',
  },
  {
    icon: FaLock,
    title: 'SSL Certificates',
    description: 'Secure your website with SSL certificates for trust and SEO benefits.',
    color: 'icon-bw',
  },
  {
    icon: HiGlobeAlt,
    title: 'Website Development',
    description: 'Professional websites — business, portfolio, corporate, and landing pages.',
    color: 'icon-bw',
  },
  {
    icon: FaTools,
    title: 'Website Repair',
    description: 'Fix broken sites, bugs, hacked websites, and restore your online presence.',
    color: 'icon-bw',
  },
  {
    icon: HiPhone,
    title: 'All Types of Websites',
    description: 'Blog, educational, NGO, real estate — every type of website you need.',
    color: 'icon-bw',
  },
  {
    icon: HiShieldCheck,
    title: 'Custom Software',
    description: 'APIs, admin panels, dashboards, and business automation tools.',
    color: 'icon-bw',
  },
];

export const serviceCategories = [
  {
    title: 'Development',
    items: [
      'Custom Software Development',
      'Custom Software',
      'Web Application Development',
      'Mobile App Development',
      'Ecommerce Development',
      'Website Development',
      'All Types of Websites',
      'Website Repair',
    ],
  },
  {
    title: 'AI Solutions',
    items: ['AI Chatbots', 'WhatsApp AI', 'AI Agents'],
  },
  {
    title: 'Business Software',
    items: ['CRM Software', 'CRM Features', 'ERP Software', 'Task Management', 'Micro-GCC Teams'],
  },
  {
    title: 'Communication',
    items: ['IVR System', 'Cloud Call Center', 'Dialer Software', 'WhatsApp Business API'],
  },
  {
    title: 'Design & Marketing',
    items: ['UI/UX & Web Design', 'SEO & Digital Growth'],
  },
  {
    title: 'Infrastructure',
    items: ['Hosting Services', 'SSL Certificates', 'Maintenance & Support'],
  },
];

export const allServiceNames = services.map((s) => s.title);

export const megaMenuColumns = [
  services.slice(0, 13).map((s) => s.title),
  services.slice(13).map((s) => s.title),
];

export function getServiceByTitle(title) {
  return services.find((s) => s.title === title);
}
