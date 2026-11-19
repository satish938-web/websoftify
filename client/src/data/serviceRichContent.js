import { liveProjectCount, clientCount } from './siteStats';

const categoryMap = {
  'Custom Software Development': 'development',
  'Web Application Development': 'development',
  'Mobile App Development': 'development',
  'Ecommerce Development': 'development',
  'Website Development': 'development',
  'Website Repair': 'development',
  'All Types of Websites': 'development',
  'Custom Software': 'development',
  'AI Chatbots': 'ai',
  'WhatsApp AI': 'ai',
  'AI Agents': 'ai',
  'CRM Software': 'business',
  'CRM Features': 'business',
  'ERP Software': 'business',
  'Task Management': 'business',
  'Micro-GCC Teams': 'business',
  'IVR System': 'communication',
  'Cloud Call Center': 'communication',
  'Dialer Software': 'communication',
  'WhatsApp Business API': 'communication',
  'UI/UX & Web Design': 'design',
  'SEO & Digital Growth': 'design',
  'Hosting Services': 'infrastructure',
  'SSL Certificates': 'infrastructure',
  'Maintenance & Support': 'infrastructure',
};

const categoryData = {
  development: {
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'AWS', 'Docker', 'PostgreSQL'],
    industries: ['Startups', 'E-Commerce', 'Healthcare', 'Education', 'Real Estate', 'Finance', 'Retail'],
    useCaseTemplates: [
      'Business websites and corporate portals',
      'SaaS platforms and subscription apps',
      'Internal admin dashboards and tools',
      'Customer-facing web and mobile apps',
      'Legacy system modernization',
      'API integrations with third-party services',
    ],
    deliverableTemplates: [
      'Fully functional application',
      'Responsive design for all devices',
      'Admin panel and user dashboard',
      'Source code and documentation',
      'Deployment and hosting setup',
      '30-day post-launch support',
    ],
  },
  ai: {
    technologies: ['OpenAI GPT', 'LangChain', 'Python', 'Node.js', 'WhatsApp API', 'TensorFlow', 'RAG', 'Webhooks'],
    industries: ['E-Commerce', 'Customer Support', 'Real Estate', 'Healthcare', 'Banking', 'Travel', 'Education'],
    useCaseTemplates: [
      '24/7 customer support automation',
      'Lead qualification and sales follow-ups',
      'FAQ and product recommendation bots',
      'WhatsApp order tracking and updates',
      'Appointment booking via chat',
      'Multi-language customer engagement',
    ],
    deliverableTemplates: [
      'Trained AI chatbot or agent',
      'WhatsApp / website integration',
      'Custom knowledge base setup',
      'Analytics and conversation logs',
      'Training for your team',
      'Ongoing AI model fine-tuning',
    ],
  },
  business: {
    technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'REST APIs', 'WebSockets', 'Chart.js', 'PDF Reports'],
    industries: ['Sales Teams', 'Manufacturing', 'Logistics', 'HR Departments', 'Retail Chains', 'BPO', 'Agencies'],
    useCaseTemplates: [
      'Lead and pipeline management',
      'Sales team performance tracking',
      'Inventory and warehouse management',
      'HR payroll and attendance systems',
      'Project and task assignment',
      'Dedicated offshore dev teams',
    ],
    deliverableTemplates: [
      'Custom CRM / ERP / task system',
      'Role-based access control',
      'Reports and analytics dashboard',
      'Email and SMS notifications',
      'Data migration from old systems',
      'Staff training and handover',
    ],
  },
  communication: {
    technologies: ['Asterisk', 'FreeSWITCH', 'SIP', 'WebRTC', 'Twilio', 'WhatsApp Cloud API', 'CRM APIs', 'AWS'],
    industries: ['Call Centers', 'BPO', 'Insurance', 'Banking', 'Telemarketing', 'Healthcare', 'Real Estate'],
    useCaseTemplates: [
      'Inbound customer support lines',
      'Outbound sales and telemarketing',
      'IVR menus and call routing',
      'WhatsApp bulk notifications',
      'Click-to-call from CRM',
      'Call recording and quality monitoring',
    ],
    deliverableTemplates: [
      'Cloud call center platform',
      'IVR flow design and setup',
      'Agent dashboard and dialer',
      'CRM integration',
      'Call reports and analytics',
      'Technical support and maintenance',
    ],
  },
  design: {
    technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Google Analytics', 'Search Console', 'SEMrush', 'Hotjar', 'PageSpeed'],
    industries: ['Startups', 'Agencies', 'E-Commerce', 'Local Businesses', 'Bloggers', 'SaaS Companies', 'Enterprises'],
    useCaseTemplates: [
      'Website UI/UX redesign',
      'Mobile app interface design',
      'Landing page optimization',
      'Google first-page ranking',
      'Local SEO for businesses',
      'Brand identity and wireframes',
    ],
    deliverableTemplates: [
      'Figma / XD design files',
      'Responsive HTML prototypes',
      'SEO audit report',
      'Keyword research document',
      'On-page and technical SEO fixes',
      'Monthly performance reports',
    ],
  },
  infrastructure: {
    technologies: ['cPanel', 'Cloudflare', 'AWS', 'Linux', 'Nginx', 'Let\'s Encrypt', 'SSL/TLS', 'Backup Systems'],
    industries: ['All Websites', 'E-Commerce Stores', 'SaaS Apps', 'Corporate Sites', 'Blogs', 'Web Apps', 'APIs'],
    useCaseTemplates: [
      'Website hosting and domain setup',
      'SSL certificate installation',
      'Monthly security updates',
      'Performance optimization',
      'Emergency bug fixes',
      'Hacked website recovery',
    ],
    deliverableTemplates: [
      'Hosting account setup',
      'SSL certificate active',
      'Daily automated backups',
      'Uptime monitoring alerts',
      'Security patch reports',
      'Priority support channel',
    ],
  },
};

const faqTemplates = (title) => [
  {
    q: `How much does ${title} cost?`,
    a: `Pricing depends on your project scope, features, and timeline. Websoftify offers transparent quotes with no hidden fees. Contact us for a free consultation and custom estimate tailored to your budget.`,
  },
  {
    q: `How long does ${title} take to complete?`,
    a: `Timeline varies by complexity. Simple projects take 2–4 weeks, medium projects 1–3 months, and enterprise solutions 3–6 months. We provide a clear roadmap before starting.`,
  },
  {
    q: `Do you provide support after launch?`,
    a: `Yes! Websoftify offers ongoing maintenance, updates, bug fixes, and support packages so your solution keeps running smoothly after delivery.`,
  },
  {
    q: `Can you integrate with our existing systems?`,
    a: `Absolutely. We integrate with CRMs, payment gateways, WhatsApp, email tools, APIs, and third-party platforms your business already uses.`,
  },
  {
    q: `Why choose Websoftify for ${title}?`,
    a: `Websoftify combines technical expertise, affordable pricing, fast delivery, and dedicated support. We've delivered ${liveProjectCount} live projects for ${clientCount} businesses — you can see them all on our Work page.`,
  },
  {
    q: `Do you work with startups and small businesses?`,
    a: `Yes! We work with startups, SMEs, and enterprises. Our flexible packages and Micro-GCC team options make professional software accessible at every budget level.`,
  },
];

export function buildRichContent(title) {
  const category = categoryMap[title] || 'development';
  const data = categoryData[category];
  const lower = title.toLowerCase();

  return {
    overview: [
      `At Websoftify, we specialize in ${lower} that helps businesses grow faster, work smarter, and serve customers better. We deliver solutions that are built to last.`,
      `Whether you're a startup launching your first product or an established company looking to upgrade your systems, our ${lower} service is designed around your goals. We don't believe in cookie-cutter templates — every project is custom-built to match your workflow, brand, and budget.`,
      `From initial consultation to post-launch support, Websoftify handles everything. Our agile process keeps you involved at every stage, with regular updates, demos, and feedback loops. The result? A solution that actually works for your business — not just looks good on paper.`,
    ],
    useCases: data.useCaseTemplates.map((uc) => ({
      title: uc,
      desc: `Websoftify helps businesses implement ${uc.toLowerCase()} with our expert ${lower} solutions.`,
    })),
    technologies: data.technologies,
    deliverables: data.deliverableTemplates,
    industries: data.industries,
    faqs: faqTemplates(title),
    whyPoints: [
      `${title} tailored specifically to your business model`,
      'Agile development with weekly progress updates',
      'Modern tech stack for speed, security, and scalability',
      'Dedicated project manager as your single point of contact',
      'Transparent pricing — no surprise charges ever',
      'Free consultation and project estimate',
    ],
  };
}

export function buildFeatures(title) {
  const lower = title.toLowerCase();
  return [
    {
      title: 'Fully Custom Solution',
      desc: `Every ${lower} project is built from scratch to match your exact requirements — no generic templates.`,
    },
    {
      title: 'Scalable Architecture',
      desc: 'Built to grow with your business. Handle 10 users or 10 million without rebuilding from scratch.',
    },
    {
      title: 'Modern Tech Stack',
      desc: 'Built with React, Node.js, MongoDB, and proven tools — the same stack behind our live client projects.',
    },
    {
      title: 'Fast Turnaround',
      desc: 'Agile sprints with regular demos, so you see real progress every week.',
    },
    {
      title: 'Support & Maintenance',
      desc: 'Bug fixes, updates, and monitoring after launch, with a support plan that fits your needs.',
    },
    {
      title: 'Transparent Pricing',
      desc: 'Clear quotes at competitive Indian pricing, with no hidden charges.',
    },
    {
      title: 'SEO & Performance Optimized',
      desc: 'Every solution is built for speed, mobile-first design, and search engine visibility.',
    },
    {
      title: 'Secure & Compliant',
      desc: 'SSL encryption, secure APIs, data protection, and industry best practices built in.',
    },
    {
      title: 'Easy Integrations',
      desc: 'Connect with WhatsApp, CRM, payment gateways, email tools, and third-party APIs seamlessly.',
    },
  ];
}
