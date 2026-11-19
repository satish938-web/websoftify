import { Link } from 'react-router-dom';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import Logo from './Logo';
import { SectionIllustration, categoryIllustrationMap } from './SectionIllustrations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { companyInfo } from '../data/contact';
import { serviceCategories } from '../data/services';
import { siteStats, liveProjectCount, clientCount } from '../data/siteStats';

/**
 * About page content. Presents Websoftify as a team: no personal names or photos.
 */

const pillars = [
  {
    title: 'Our Mission',
    text: 'Make reliable, custom software affordable for every growing business — not just large enterprises.',
  },
  {
    title: 'Our Approach',
    text: 'Understand the business first, then build. Every project starts with your workflow, not a template.',
  },
  {
    title: 'Our Promise',
    text: 'Clear communication, a written quote before we start, and support after launch.',
  },
];

/** Industries of the clients in portfolio.js. Only add one when there is a real project for it. */
const industries = [
  'Finance & Loans',
  'Travel & Holidays',
  'Restaurants & Food Ordering',
  'Startups & Brands',
];

const points = [
  'Hands-on expertise in React, Node.js, AI, CRM, and cloud technologies',
  'Custom solutions tailored to your business needs and budget',
  'Transparent quotes with no hidden costs',
  'Fast delivery without compromising quality or security',
  'Ongoing support, maintenance, and optimization available',
  `${liveProjectCount} live projects delivered for ${clientCount} businesses`,
  'Full-stack capabilities: design, development, hosting, and SEO',
  'Agile process with weekly updates and direct communication',
];

function Reveal({ children, className = '', threshold }) {
  const { ref, visible } = useScrollAnimation(threshold);
  return (
    <div ref={ref} className={`${className} anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}>
      {children}
    </div>
  );
}

function SectionHeading({ kicker, children }) {
  return (
    <div className="text-center mb-10">
      <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
        {kicker}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight theme-heading">{children}</h2>
    </div>
  );
}

function CompanyIntro() {
  return (
    <Reveal className="about-company-intro" threshold={0.08}>
      <div className="flex items-center gap-4 mb-5">
        <Logo size={52} className="shrink-0" />
        <div>
          <h2 className="text-2xl font-bold theme-heading">Who We Are</h2>
          <p className="text-gray-400 text-sm">Software Development Company · Delhi NCR</p>
        </div>
      </div>
      <p className="theme-muted leading-relaxed mb-4">
        Websoftify is a dedicated team of developers and designers based in{' '}
        <strong className="text-gray-200">{companyInfo.location}</strong>. We build websites, CRM
        platforms, mobile apps, and AI &amp; WhatsApp automation that help growing businesses
        work faster and sell more.
      </p>
      <p className="theme-muted leading-relaxed mb-6">
        You work directly with the people who build your product — from the first call, through
        design and development, to launch and ongoing support. No layers, no hand-offs, no
        surprises.
      </p>
      <div className="flex flex-wrap gap-2">
        {companyInfo.techStack.map((tech) => (
          <span key={tech} className="founder-skill-pill founder-skill-pill-dark">
            {tech}
          </span>
        ))}
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-black">
      <div className="about-section-glow" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center pt-4 pb-10 md:pb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight theme-heading mb-4">
            About <span className="gradient-text">Websoftify</span>
          </h1>
          <p className="theme-muted max-w-2xl mx-auto leading-relaxed">
            We turn business ideas into reliable software — websites, CRM, apps, and automation
            built around how your business actually works.
          </p>
        </div>

        <CompanyIntro />

        {/* Stats */}
        <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-16">
          {siteStats.map((item) => (
            <div key={item.label} className="about-stat-card">
              <p className="text-2xl md:text-3xl font-extrabold gradient-text">{item.value}</p>
              <p className="text-gray-400 text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </Reveal>

        {/* Mission / approach / promise */}
        <Reveal className="mt-16 md:mt-20">
          <SectionHeading kicker="What Drives Us">
            Built on <span className="gradient-text">Clear Principles</span>
          </SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="bg-gray-900/80 rounded-2xl border border-gray-800 p-6">
                <h3 className="text-lg font-bold theme-heading mb-2">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* What we do */}
        <Reveal className="mt-16 md:mt-20">
          <SectionHeading kicker="What We Do">
            Everything Your Business <span className="gradient-text">Needs Online</span>
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((category) => (
              <div
                key={category.title}
                className="bg-gray-900/80 rounded-2xl border border-gray-800 p-6 hover:border-primary-500/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <SectionIllustration
                    type="category"
                    name={categoryIllustrationMap[category.title]}
                    variant="card"
                  />
                  <h3 className="text-lg font-bold theme-heading">{category.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-gray-400 flex gap-2">
                      <span className="text-primary-400" aria-hidden>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300"
            >
              Explore all services <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        {/* Industries */}
        <Reveal className="mt-16 md:mt-20">
          <SectionHeading kicker="Industries">
            Businesses <span className="gradient-text">We Have Worked With</span>
          </SectionHeading>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 rounded-full border border-gray-800 bg-gray-900/80 text-sm text-gray-300"
              >
                {industry}
              </span>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-primary-300"
            >
              See our client projects <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        {/* Why choose us */}
        <Reveal className="mt-16 md:mt-20 pb-4">
          <SectionHeading kicker="Why Choose Us">
            Your Partner in <span className="gradient-text">Digital Success</span>
          </SectionHeading>
          <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {points.map((point) => (
              <li key={point} className="about-point-card">
                <HiCheckCircle className="text-primary-400 text-xl shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
