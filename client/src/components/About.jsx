import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import Logo from './Logo';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { founderInfo } from '../data/contact';

const points = [
  'Experienced team with expertise in React, Node.js, AI, CRM, and cloud technologies',
  'Custom solutions tailored to your business needs and budget',
  'Affordable pricing with transparent quotes — no hidden costs',
  'Fast delivery without compromising quality or security',
  'Ongoing support, maintenance, and optimization available',
  'Client satisfaction is our top priority — 50+ happy clients',
  'Full-stack capabilities: design, development, hosting, and SEO',
  'Agile process with weekly updates and direct communication',
];

const highlights = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
  { value: '2+', label: 'Years Experience' },
  { value: '24/7', label: 'Support' },
];

function FounderPhoto() {
  const [imageError, setImageError] = useState(false);
  const initials = founderInfo.name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="founder-showcase-photo">
      <div className="founder-showcase-photo-ring">
        {!imageError ? (
          <img
            src={founderInfo.image}
            alt={founderInfo.name}
            className="founder-showcase-photo-img"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="founder-showcase-photo-fallback">{initials}</div>
        )}
      </div>
      {founderInfo.linkedin && (
        <a
          href={founderInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="founder-showcase-linkedin"
        >
          <FaLinkedin />
          Connect on LinkedIn
        </a>
      )}
    </div>
  );
}

function FounderShowcase() {
  const { ref, visible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`founder-showcase anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
    >
      <div className="founder-showcase-grid">
        <FounderPhoto />

        <div className="founder-showcase-content">
          <span className="founder-showcase-badge">{founderInfo.badge}</span>
          <h2 className="founder-showcase-name">{founderInfo.name}</h2>
          <p className="founder-showcase-tagline">{founderInfo.tagline}</p>

          <p className="founder-showcase-text">
            With <strong>2+ years of experience</strong> in software engineering, Satish Gupta has
            built a reputation for delivering reliable websites, CRM platforms, and custom business
            software.
          </p>

          <p className="founder-showcase-text">
            Under his leadership, <strong>Websoftify</strong> has helped companies across{' '}
            <strong>{founderInfo.location}</strong> with{' '}
            <strong>CRM systems</strong>, <strong>WhatsApp automation</strong>, mobile apps, and
            complete digital solutions — always with direct communication and honest pricing.
          </p>

          <blockquote className="founder-showcase-quote">
            <span className="founder-showcase-quote-icon" aria-hidden>
              &ldquo;
            </span>
            <p>{founderInfo.quote}</p>
            <cite>— {founderInfo.name}</cite>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

function CompanyIntro() {
  const { ref, visible } = useScrollAnimation(0.08);

  return (
    <div
      ref={ref}
      className={`about-company-intro anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
    >
      <div className="flex items-center gap-4 mb-5">
        <Logo size={52} className="shrink-0" />
        <div>
          <h3 className="text-2xl font-bold theme-heading">About Websoftify</h3>
          <p className="text-gray-400 text-sm">Software Development Company</p>
        </div>
      </div>
      <p className="theme-muted leading-relaxed mb-4">
        Websoftify is a full-stack software company helping businesses grow with websites, mobile
        apps, CRM, ERP, AI chatbots, cloud call centers, WhatsApp automation, and complete digital
        solutions — all under one roof.
      </p>
      <div className="flex flex-wrap gap-2">
        {founderInfo.skills.map((skill) => (
          <span key={skill} className="founder-skill-pill founder-skill-pill-dark">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About({ variant = 'section' }) {
  const isPage = variant === 'page';
  const { ref: statsRef, visible: statsVisible } = useScrollAnimation();
  const { ref: whyRef, visible: whyVisible } = useScrollAnimation();

  return (
    <section id="about" className={`relative overflow-hidden bg-black ${isPage ? '' : 'py-16 md:py-24'}`}>
      <div className="about-section-glow" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {isPage && (
          <div className="text-center pt-4 pb-10 md:pb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight theme-heading">
              About <span className="gradient-text">Websoftify</span>
            </h1>
          </div>
        )}

        {!isPage && (
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight theme-heading">
              Meet <span className="gradient-text">Our Founder</span>
            </h2>
          </div>
        )}

        <FounderShowcase />

        {isPage && (
          <>
            <CompanyIntro />

            <div
              ref={statsRef}
              className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-16 anim-fade-up ${statsVisible ? 'anim-visible' : 'anim-hidden'}`}
            >
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className="about-stat-card"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <p className="text-2xl md:text-3xl font-extrabold gradient-text">{item.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.label}</p>
                </div>
              ))}
            </div>

            <div
              ref={whyRef}
              className={`mt-12 md:mt-16 anim-fade-up ${whyVisible ? 'anim-visible' : 'anim-hidden'}`}
            >
              <div className="text-center mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
                  Why Choose Us
                </span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight theme-heading">
                  Your Partner in <span className="gradient-text">Digital Success</span>
                </h3>
              </div>

              <ul className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {points.map((point, i) => (
                  <li
                    key={point}
                    className="about-point-card"
                    style={{ transitionDelay: `${(i % 4) * 60}ms` }}
                  >
                    <HiCheckCircle className="text-primary-400 text-xl shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mt-12">
                <Link to="/contact" className="hero-btn-primary inline-flex items-center gap-2">
                  Work With Us
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </>
        )}

        {!isPage && (
          <div className="text-center mt-10">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-400 border border-gray-700 rounded-lg hover:border-primary-500/40 hover:bg-gray-900/50 transition-colors"
            >
              Read full about us
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
