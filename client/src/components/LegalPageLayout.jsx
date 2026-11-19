import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import { contactInfo } from '../data/contact';

function LegalSection({ number, title, children, id }) {
  return (
    <article
      id={id}
      className="legal-section-card scroll-mt-28 bg-gray-900/60 rounded-2xl border border-gray-800 p-6 md:p-8"
    >
      <div className="flex items-start gap-4 mb-4">
        <span className="shrink-0 w-10 h-10 rounded-xl bg-primary-500/15 border border-primary-500/30 flex items-center justify-center text-sm font-bold text-primary-400">
          {number}
        </span>
        <h2 className="text-xl md:text-2xl font-bold theme-heading pt-1.5">{title}</h2>
      </div>
      <div className="text-gray-400 text-[15px] leading-relaxed space-y-3 pl-0 md:pl-14">
        {children}
      </div>
    </article>
  );
}

export default function LegalPageLayout({
  seo,
  badge,
  title,
  titleHighlight,
  updated,
  sections,
  relatedLink,
  relatedLabel,
}) {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <SEO {...seo} />
      <Navbar />
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 relative overflow-hidden">
        <div className="services-page-glow" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14 md:mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
              {badge}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 theme-heading">
              {title} <span className="gradient-text">{titleHighlight}</span>
            </h1>
            <p className="theme-muted text-sm">Last updated: {updated}</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 xl:gap-10 items-start">
            <aside className="lg:col-span-4 xl:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="bg-gray-900/80 rounded-2xl border border-gray-800 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary-500 mb-4">
                    On this page
                  </h3>
                  <ul className="space-y-2">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-sm text-gray-400 hover:text-white transition-colors leading-snug block"
                        >
                          {section.number}. {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-900/80 rounded-2xl border border-gray-800 p-6">
                  <h3 className="font-bold theme-heading mb-2">Need help?</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Contact us for any questions about these policies.
                  </p>
                  <Link to="/contact" className="hero-btn-primary inline-flex text-sm px-5 py-2.5">
                    Contact Us
                  </Link>
                </div>

                {relatedLink && relatedLabel && (
                  <p className="text-sm text-gray-500 px-1">
                    See also{' '}
                    <Link to={relatedLink} className="text-primary-400 hover:underline">
                      {relatedLabel}
                    </Link>
                  </p>
                )}
              </div>
            </aside>

            <div className="lg:col-span-8 xl:col-span-9 space-y-5 order-1 lg:order-2">
              {sections.map((section) => (
                <LegalSection
                  key={section.id}
                  id={section.id}
                  number={section.number}
                  title={section.title}
                >
                  {section.content}
                </LegalSection>
              ))}

              <div className="portfolio-cta-box portfolio-cta-box-dark">
                <h2 className="text-xl font-bold theme-heading mb-2">Questions about this page?</h2>
                <p className="theme-muted mb-5 text-sm">
                  Reach out to us — we&apos;re happy to clarify anything about our policies or services.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="hero-btn-primary inline-flex text-sm">
                    Get in Touch
                  </Link>
                  <a
                    href={`mailto:${contactInfo.businessEmail}`}
                    className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-primary-400 border border-gray-700 rounded-lg hover:border-primary-500/40 transition-colors"
                  >
                    {contactInfo.businessEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { LegalSection };
