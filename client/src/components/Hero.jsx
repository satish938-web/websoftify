import { useState, useCallback } from 'react';
import {
  HiArrowRight,
  HiLightningBolt,
  HiShieldCheck,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import BrandName from './BrandName';
import { services } from '../data/services';

const featuredCount = 8;

const serviceStats = [
  '24/7 active',
  'Live project',
  '99.9% uptime',
  '50+ agents',
  '100+ clients',
  'Ready to deploy',
];

function getServiceStat(title, index) {
  if (/AI|Chatbot|WhatsApp|Agent/i.test(title)) return '24/7 active';
  if (/CRM|ERP|Task/i.test(title)) return '100+ clients';
  if (/Call|IVR|Dialer/i.test(title)) return '50+ agents';
  if (/Host|SSL|Maintenance|Support/i.test(title)) return '99.9% uptime';
  return serviceStats[index % serviceStats.length];
}

function MiniChart() {
  return (
    <svg viewBox="0 0 280 56" className="hero-chart w-full h-12" aria-hidden>
      <defs>
        <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9d00ff" />
          <stop offset="50%" stopColor="#0047ff" />
          <stop offset="100%" stopColor="#00d2ff" />
        </linearGradient>
      </defs>
      <path
        d="M0 44 L40 38 L80 46 L120 26 L160 32 L200 16 L240 22 L280 10 L280 56 L0 56 Z"
        fill="url(#chartFill)"
      />
      <path
        className="hero-chart-line"
        d="M0 44 L40 38 L80 46 L120 26 L160 32 L200 16 L240 22 L280 10"
        fill="none"
        stroke="url(#chartStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeroVisual() {
  const [active, setActive] = useState(0);
  const total = services.length;
  const featured = services.slice(0, featuredCount);

  const selectService = useCallback((index) => {
    setActive(index);
  }, []);

  const current = services[active];
  const Icon = current.icon;
  const stat = getServiceStat(current.title, active);

  return (
    <div className="hero-visual-scene hidden md:block">
      <div className="hero-premium-glow" aria-hidden />
      <div className="hero-orb hero-orb-1" aria-hidden />
      <div className="hero-orb hero-orb-2" aria-hidden />

      <div className="hero-3d-card-wrap">
        <div className="hero-3d-card">
          <div className="hero-dashboard relative">
            <div className="hero-dash-border-glow" aria-hidden />
            <div className="hero-dash-shimmer" aria-hidden />

            <div className="hero-dash-header">
              <div className="flex items-center gap-2.5">
                <Logo size={32} className="shrink-0" />
                <div>
                  <BrandName size="sm" className="hero-dash-brand" />
                  <p className="text-[10px] hero-dash-muted font-medium mt-0.5">Enterprise Dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="hero-status-pill">
                  <span className="hero-live-dot" /> Live
                </span>
              </div>
            </div>

            <div className="hero-metrics hero-metrics-premium">
              {[
                { label: 'Projects', value: '100+' },
                { label: 'Clients', value: '50+' },
                { label: 'Uptime', value: '99.9%' },
              ].map((m) => (
                <div key={m.label} className="hero-metric hero-metric-premium">
                  <p className="hero-metric-value">{m.value}</p>
                  <p className="hero-metric-label">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="hero-chart-wrap hero-chart-premium">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] hero-dash-label uppercase tracking-[0.15em] font-semibold">
                  Revenue Growth
                </p>
                <p className="text-xs text-primary-400 font-bold">+127%</p>
              </div>
              <MiniChart />
            </div>

            <div className="hero-highlight hero-highlight-premium" key={current.title}>
              <div className="hero-highlight-icon icon-bw">
                <Icon className="icon-bw-glyph text-xl" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] hero-dash-label uppercase tracking-[0.15em] font-semibold mb-0.5">
                  Featured Service
                </p>
                <p className="hero-dash-title font-semibold text-[15px] truncate leading-snug">
                  {current.title}
                </p>
                <p className="text-xs text-primary-400/90 flex items-center gap-1.5 mt-1">
                  <span className="hero-live-dot" /> {stat}
                </p>
              </div>
            </div>

            <div className="hero-service-picker">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] hero-dash-label uppercase tracking-[0.15em] font-semibold">
                  Select Service
                </p>
                <Link to="/services" className="hero-view-all">
                  View all {total} →
                </Link>
              </div>
              <div className="hero-icon-row">
                {featured.map((service, i) => {
                  const ServiceIcon = service.icon;
                  return (
                    <button
                      key={service.title}
                      type="button"
                      onClick={() => selectService(i)}
                      className={`hero-icon-btn ${i === active ? 'hero-icon-btn-active' : ''}`}
                      title={service.title}
                    >
                      <ServiceIcon className="w-4 h-4" />
                    </button>
                  );
                })}
                <Link to="/services" className="hero-icon-btn hero-icon-btn-more" title="All services">
                  +{total - featuredCount}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero-section hero-section-premium">
      <div className="hero-bg-wrap" aria-hidden>
        <div className="hero-mesh-bg" />
        <div className="hero-grid-bg" />
        <div className="hero-noise" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8 sm:py-12 lg:py-16">
          <div className="hero-content anim-fade-up anim-visible">
            <div className="hero-badge hero-badge-premium">
              <HiLightningBolt className="text-gray-300" />
              <span>India&apos;s Trusted Software Partner</span>
              <span className="hero-badge-dot" />
            </div>

            <h1 className="hero-headline">
              We Build Digital Solutions That{' '}
              <span className="gradient-text hero-headline-accent">Grow Your Business</span>
            </h1>

            <p className="hero-lead">
              Enterprise-grade websites, AI automation, CRM, ERP, and cloud solutions —
              engineered by Websoftify to scale your revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <Link to="/contact" className="hero-btn-primary hero-btn-premium w-full sm:w-auto text-center">
                Start Your Project <HiArrowRight />
              </Link>
              <Link to="/services" className="hero-btn-secondary hero-btn-secondary-premium w-full sm:w-auto text-center">
                Explore Services
              </Link>
            </div>

            <div className="hero-stats hero-stats-premium grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {[
                { value: '100+', label: 'Projects' },
                { value: '50+', label: 'Clients' },
                { value: '24/7', label: 'Support' },
                { value: '5★', label: 'Rated' },
              ].map((s) => (
                <div key={s.label} className="hero-stat hero-stat-premium">
                  <p className="hero-stat-value">{s.value}</p>
                  <p className="hero-stat-label">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="hero-trust hero-trust-premium max-w-full text-center sm:text-left">
              <HiShieldCheck className="text-gray-300 shrink-0" />
              <span className="text-sm sm:text-base">Trusted by startups, SMEs & enterprises across India</span>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
