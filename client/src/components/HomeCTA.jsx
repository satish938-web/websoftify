import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HomeCTA() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`portfolio-cta-box portfolio-cta-box-dark max-w-4xl mx-auto text-center anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
            Ready to Start?
          </span>
          <h2 className="text-2xl md:text-3xl font-bold theme-heading mb-3">
            Let&apos;s Build Your Next Project Together
          </h2>
          <p className="theme-muted mb-8 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Websites, CRM, mobile apps, or AI automation — tell us what you need and get a free
            consultation with a clear quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="hero-btn-primary inline-flex items-center gap-2">
              Get Free Quote
              <HiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-400 border border-gray-700 rounded-lg hover:border-primary-500/40 hover:bg-gray-900 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
