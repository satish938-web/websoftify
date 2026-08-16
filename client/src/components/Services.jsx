import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { serviceCategories } from '../data/services';
import Carousel3D from './Carousel3D';
import { SectionIllustration, categoryIllustrationMap } from './SectionIllustrations';

export default function Services() {
  const { ref: headingRef, visible: headingVisible } = useScrollAnimation();

  return (
    <section id="services" className="services-section-dark py-16 md:py-24 relative overflow-hidden">
      <div className="services-section-glow" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={headingRef}
          className={`text-center mb-14 anim-fade-up ${headingVisible ? 'anim-visible' : 'anim-hidden'}`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold theme-heading mb-4 tracking-tight">
            Enterprise-Grade <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="theme-muted max-w-2xl mx-auto text-base leading-relaxed">
            From AI automation to cloud infrastructure — Websoftify delivers reliable,
            scalable software built for modern businesses.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 md:mb-12">
          {serviceCategories.map((cat) => (
            <div
              key={cat.title}
              className="services-cat-card rounded-xl border border-gray-800 p-3 sm:p-4 text-center transition-all"
            >
              <SectionIllustration type="category" name={categoryIllustrationMap[cat.title]} variant="category" />
              <p className="text-xs font-bold uppercase tracking-wider text-primary-500 mb-1">
                {cat.title}
              </p>
              <p className="text-2xl font-bold theme-heading">{cat.items.length}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">services</p>
            </div>
          ))}
        </div>

        <Carousel3D />

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-primary-400 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 hover:border-primary-500/40 transition-colors"
          >
            View complete service catalog
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
