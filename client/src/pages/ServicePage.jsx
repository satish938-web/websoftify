import { Link, useParams, Navigate } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle, HiPhone, HiStar } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ServiceFAQ from '../components/ServiceFAQ';
import ServiceIllustration from '../components/ServiceIllustration';
import { DecorativeBlob, SectionIllustration } from '../components/SectionIllustrations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getServiceBySlug, servicePages } from '../data/servicePages';

function AnimatedSection({ children, className = '', anim = 'fade-up', delay = 0 }) {
  const { ref, visible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${className} anim-${anim} ${visible ? 'anim-visible' : 'anim-hidden'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function FeatureCard({ feature, index, theme, slug }) {
  return (
    <AnimatedSection anim={theme.anim} delay={index * 100}>
      <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-primary-500/40 hover:shadow-lg hover:shadow-primary-500/10 transition-all group">
        <ServiceIllustration slug={slug} variant="mini" className="mb-4 group-hover:scale-110 transition-transform" title={feature.title} />
        <h3 className="font-bold text-lg mb-2 theme-heading">{feature.title}</h3>
        <p className="text-sm theme-muted">{feature.desc}</p>
      </div>
    </AnimatedSection>
  );
}

function HeroAurora({ page }) {
  const { theme, title, tagline, intro } = page;
  return (
    <section className={`relative min-h-[70vh] flex items-center overflow-hidden pt-16 ${theme.heroBg}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <AnimatedSection anim="fade-up">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 ${theme.subText} text-sm mb-6`}>
              <ServiceIllustration slug={page.slug} variant="icon" title={title} />
              Websoftify Services
            </div>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 ${theme.textColor}`}>{title}</h1>
            <p className={`text-xl md:text-2xl ${theme.accent} font-semibold mb-6`}>{tagline}</p>
            <p className={`max-w-2xl text-lg mb-8 ${theme.subText}`}>{intro}</p>
            <Link to="/#contact" className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold ${theme.btnClass} transition-all hover:scale-105`}>
              Get Free Quote <HiArrowRight />
            </Link>
          </AnimatedSection>
          <AnimatedSection anim="float" delay={200} className="flex justify-center">
            <ServiceIllustration slug={page.slug} variant="hero-lg" className="service-illustration--float" title={title} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function HeroSplit({ page }) {
  const { theme, title, tagline, intro, stats } = page;
  return (
    <section className={`min-h-[70vh] flex items-center pt-16 ${theme.heroBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        <AnimatedSection anim="slide-left">
          <p className={`${theme.accent} font-semibold mb-2 uppercase tracking-widest text-sm`}>Websoftify</p>
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${theme.textColor}`}>{title}</h1>
          <p className={`text-xl ${theme.accent} mb-4`}>{tagline}</p>
          <p className={`${theme.subText} mb-8 leading-relaxed`}>{intro}</p>
          <Link to="/#contact" className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold ${theme.btnClass}`}>
            Start Project <HiArrowRight />
          </Link>
        </AnimatedSection>
        <AnimatedSection anim="slide-right" delay={200}>
          <div className="flex justify-center mb-6">
            <ServiceIllustration slug={page.slug} variant="hero" className="service-illustration--float" title={title} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div key={s.label} className="p-6 rounded-2xl text-center anim-float" style={{ animationDelay: `${i * 0.5}s`, background: 'rgba(255,255,255,0.08)' }}>
                <p className={`text-3xl font-bold ${theme.accent}`}>{s.value}</p>
                <p className={`text-sm ${theme.subText}`}>{s.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function HeroMinimal({ page }) {
  const { theme, title, tagline, intro } = page;
  const initials = title
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className={`relative min-h-[75vh] flex items-center pt-16 ${theme.heroBg} overflow-hidden border-b-4 border-black`}>
      <span
        aria-hidden
        className="absolute right-4 xl:right-12 top-1/2 -translate-y-1/2 text-[7rem] xl:text-[10rem] font-black text-gray-100 select-none pointer-events-none leading-none z-0 hidden lg:block"
      >
        {initials}
      </span>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <AnimatedSection anim="scale-in">
            <div className="flex items-center gap-3 mb-6">
              <ServiceIllustration slug={page.slug} variant="icon" title={title} />
              <span className={`text-sm font-semibold uppercase tracking-widest ${theme.accent}`}>Websoftify</span>
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-black mb-4 ${theme.textColor} leading-tight max-w-3xl`}>
              {title}
            </h1>
            <div className="w-24 h-1 bg-primary-600 mb-6" />
            <p className={`text-xl md:text-2xl font-light ${theme.subText} mb-4 max-w-xl`}>{tagline}</p>
            <p className={`${theme.subText} max-w-2xl mb-8 leading-relaxed`}>{intro}</p>
            <Link to="/#contact" className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg ${theme.btnClass} font-semibold`}>
              Get Quote →
            </Link>
          </AnimatedSection>
          <AnimatedSection anim="float" delay={250} className="hidden lg:flex justify-end">
            <ServiceIllustration slug={page.slug} variant="side" className="service-illustration--float opacity-90" title={title} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function HeroGradient({ page }) {
  const { theme, title, tagline, intro } = page;
  return (
    <section className={`relative min-h-[65vh] flex items-center pt-16 ${theme.heroBg} overflow-hidden`}>
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 55C120 50 240 40 360 45C480 50 600 70 720 75C840 80 960 70 1080 60C1200 50 1320 40 1380 35L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z" fill="white"/>
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-8 items-center w-full">
        <AnimatedSection anim="fade-up">
          <h1 className={`text-4xl md:text-5xl font-extrabold mb-4 ${theme.textColor}`}>{title}</h1>
          <p className={`text-xl mb-4 ${theme.subText}`}>{tagline}</p>
          <p className={`${theme.subText} mb-8 opacity-90`}>{intro}</p>
          <Link to="/#contact" className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold ${theme.btnClass}`}>
            <HiPhone /> Contact Us
          </Link>
        </AnimatedSection>
        <AnimatedSection anim="float" delay={300}>
          <div className="flex justify-center">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white/15 flex items-center justify-center anim-pulse-glow p-6">
              <ServiceIllustration slug={page.slug} variant="hero" title={title} />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function HeroCorporate({ page }) {
  const { theme, title, tagline, intro } = page;
  return (
    <section className={`${theme.heroBg} pt-24 pb-20 border-b border-slate-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <AnimatedSection anim="stagger" className="flex-1">
            <span className={`inline-block px-3 py-1 rounded text-sm font-semibold ${theme.accentBg} text-white mb-4`}>
              Websoftify
            </span>
            <h1 className={`text-4xl md:text-5xl font-bold mb-3 ${theme.textColor}`}>{title}</h1>
            <p className={`text-lg ${theme.accent} font-medium mb-4`}>{tagline}</p>
            <p className={`${theme.subText} leading-relaxed max-w-xl mb-6`}>{intro}</p>
            <Link to="/#contact" className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold ${theme.btnClass}`}>
              Request Demo <HiArrowRight />
            </Link>
          </AnimatedSection>
          <AnimatedSection anim="scale-in" delay={200}>
            <div className="w-64 h-64 md:w-72 md:h-72 bg-primary-50 rounded-3xl flex items-center justify-center border border-primary-100 p-6">
              <ServiceIllustration slug={page.slug} variant="hero" title={title} />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function HeroBold({ page }) {
  const { theme, title, tagline, intro } = page;
  return (
    <section className={`${theme.heroBg} pt-28 pb-24 relative overflow-hidden`}>
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <AnimatedSection anim="bounce-in">
            <h1 className={`text-5xl md:text-7xl font-black mb-4 ${theme.textColor} uppercase tracking-tight`}>
              {title}
            </h1>
            <p className={`text-xl md:text-2xl font-bold ${theme.subText} mb-6`}>{tagline}</p>
            <p className={`max-w-2xl ${theme.subText} mb-8`}>{intro}</p>
            <Link to="/#contact" className={`inline-flex items-center gap-2 px-10 py-4 rounded-none font-black uppercase tracking-wider ${theme.btnClass} border-4 border-primary-900`}>
              Let's Go →
            </Link>
          </AnimatedSection>
          <AnimatedSection anim="float" delay={200} className="hidden md:flex justify-center">
            <ServiceIllustration slug={page.slug} variant="hero" className="service-illustration--float" title={title} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

const heroMap = {
  aurora: HeroAurora,
  neon: HeroSplit,
  minimal: HeroMinimal,
  sunset: HeroGradient,
  ocean: HeroGradient,
  forest: HeroAurora,
  corporate: HeroCorporate,
  midnight: HeroSplit,
  rose: HeroCorporate,
  electric: HeroBold,
  royal: HeroAurora,
  steel: HeroSplit,
};

export default function ServicePage() {
  const { slug } = useParams();
  const page = getServiceBySlug(slug);

  if (!page) return <Navigate to="/services" replace />;

  const HeroComponent = heroMap[page.theme.id] || HeroAurora;
  const related = servicePages.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <SEO
        title={page.seo.title}
        description={page.seo.description}
        keywords={page.seo.keywords}
        canonical={`https://websoftify.com/services/${page.slug}`}
      />
      <Navbar />
      <main>
        <HeroComponent page={page} />

        {/* Overview */}
        <section className="py-20 bg-black relative overflow-hidden">
          <DecorativeBlob className="absolute -right-32 top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-40 hidden lg:block" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-3 gap-12">
              <AnimatedSection anim="slide-left" className="lg:col-span-2">
                <div className="flex flex-col sm:flex-row gap-6 sm:items-start mb-8">
                  <ServiceIllustration slug={page.slug} variant="banner" className="shrink-0 lg:hidden" title={page.title} />
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-heading">
                      What is <span className="gradient-text">{page.title}</span>?
                    </h2>
                    <div className="space-y-4 theme-muted leading-relaxed">
                      {page.overview.map((para) => (
                        <p key={para.slice(0, 40)}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection anim="slide-right" delay={200}>
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 sticky top-24">
                  <ServiceIllustration slug={page.slug} variant="card" className="mx-auto" title={page.title} />
                  <h3 className="font-bold text-lg mb-4 text-primary-400 text-center">Quick Facts</h3>
                  <ul className="space-y-3 text-sm">
                    {page.stats.map((s) => (
                      <li key={s.label} className="flex justify-between border-b border-gray-800 pb-2">
                        <span className="text-gray-400">{s.label}</span>
                        <span className="font-bold text-primary-400">{s.value}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/#contact"
                    className="mt-6 w-full flex items-center justify-center gap-2 gradient-bg text-white py-3 rounded-xl font-semibold text-sm"
                  >
                    Free Consultation <HiArrowRight />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-black text-white border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection anim="fade-up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Use Cases & Applications</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                How businesses use our {page.title.toLowerCase()} to solve real problems
              </p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {page.useCases.map((uc, i) => (
                <AnimatedSection key={uc.title} anim="fade-up" delay={i * 80}>
                  <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-primary-500/40 transition-colors h-full">
                    <SectionIllustration type="usecase" index={i} variant="card" />
                    <h3 className="font-bold mb-2 theme-heading">{uc.title}</h3>
                    <p className="text-gray-400 text-sm">{uc.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection anim="fade-up" className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-heading">
                Why Choose Our <span className="gradient-text">{page.title}</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Websoftify delivers industry-leading {page.title.toLowerCase()} with proven expertise.
              </p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.features.map((f, i) => (
                <FeatureCard key={f.title} feature={f} index={i} theme={page.theme} slug={page.slug} />
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-black border-t border-white/5 relative overflow-hidden">
          <ServiceIllustration slug={page.slug} variant="watermark" className="absolute -left-20 top-1/2 -translate-y-1/2 hidden xl:block" title={page.title} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <AnimatedSection anim="fade-up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 theme-heading">Technologies We Use</h2>
              <p className="theme-muted">Modern, reliable tools for building world-class {page.title.toLowerCase()}</p>
            </AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {page.technologies.map((tech, i) => (
                <AnimatedSection key={tech} anim="scale-in" delay={i * 50}>
                  <span className="inline-block px-5 py-2.5 theme-surface-card border rounded-full text-sm font-medium theme-body-text hover:border-primary-500 hover:text-primary-600 transition-colors">
                    {tech}
                  </span>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection anim="slide-left">
              <h2 className="text-3xl font-bold mb-6 theme-heading">What You Get</h2>
              <p className="theme-muted mb-8 leading-relaxed">
                When you hire Websoftify for {page.title.toLowerCase()}, here's exactly what's included in your project delivery:
              </p>
              <ul className="space-y-3">
                {page.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-3">
                    <HiCheckCircle className="text-primary-500 text-xl shrink-0" />
                    <span className="theme-body-text">{d}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection anim="slide-right" delay={200}>
              <div className="flex flex-col items-center">
                <ServiceIllustration slug={page.slug} variant="hero" className="mb-6 service-illustration--float" title={page.title} />
                <div className="grid grid-cols-2 gap-4 w-full">
                {page.industries.map((ind) => (
                  <div
                    key={ind}
                    className="p-4 theme-surface-card rounded-xl border text-center hover:border-primary-500/40 transition-colors"
                  >
                    <p className="font-semibold theme-body-text text-sm">{ind}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm theme-muted mt-4">Industries we serve</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-black border-t border-white/5 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection anim="slide-left">
              <h2 className="text-3xl font-bold mb-6 theme-heading">
                Benefits You Get
              </h2>
              <ul className="space-y-4">
                {page.benefits.map((b, i) => (
                  <li key={b} className="flex items-start gap-3 anim-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <HiCheckCircle className="text-primary-500 text-xl shrink-0 mt-0.5" />
                    <span className="theme-body-text">{b}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection anim="slide-right" delay={200}>
              <div className={`p-8 rounded-3xl ${page.theme.accentBg} text-white`}>
                <ServiceIllustration slug={page.slug} variant="card" title={page.title} />
                <h3 className="text-2xl font-bold mb-3">Ready to get started?</h3>
                <p className="opacity-90 mb-6">
                  Contact Websoftify today for a free consultation on {page.title.toLowerCase()}.
                </p>
                <Link to="/#contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Contact Now <HiArrowRight />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection anim="fade-up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 theme-heading">Our Process</h2>
              <p className="theme-muted">Simple, transparent, and result-driven approach</p>
            </AnimatedSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {page.process.map((step, i) => (
                <AnimatedSection key={step.step} anim="scale-in" delay={i * 150}>
                  <div className="relative p-6 border border-gray-800 bg-gray-900/50 rounded-2xl hover:border-primary-500/40 transition-colors group">
                    <SectionIllustration type="process" name={step.step === '01' ? 'discovery' : step.step === '02' ? 'design' : step.step === '03' ? 'development' : 'launch'} variant="card" />
                    <span className="text-5xl font-black text-gray-800 group-hover:text-primary-900/50 transition-colors absolute top-4 right-4">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold mb-2 relative theme-heading">{step.title}</h3>
                    <p className="theme-muted text-sm relative">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection anim="fade-up" className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 theme-heading">What Our Clients Say</h2>
              <p className="theme-muted">Real feedback from businesses who used our {page.title.toLowerCase()}</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6">
              {page.testimonials.map((t, i) => (
                <AnimatedSection key={t.name} anim="fade-up" delay={i * 150}>
                  <div className="p-6 bg-gray-900 rounded-2xl border border-gray-800 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <HiStar key={j} className="text-primary-400" />
                      ))}
                    </div>
                    <p className="theme-muted text-sm leading-relaxed flex-1 mb-4">&ldquo;{t.text}&rdquo;</p>
                    <div>
                      <p className="font-bold theme-heading">{t.name}</p>
                      <p className="text-xs theme-muted">{t.role}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <ServiceFAQ faqs={page.faqs} title={page.title} />

        {/* Related Services */}
        <section className="py-20 bg-black border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold theme-heading mb-8">More Services from Websoftify</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r, i) => (
                <AnimatedSection key={r.slug} anim="fade-up" delay={i * 100}>
                  <Link
                    to={`/services/${r.slug}`}
                    className="block p-5 bg-gray-900 rounded-xl text-gray-300 border border-gray-800 hover:text-white hover:border-primary-500/40 hover:bg-gray-800 transition-all hover:-translate-y-1"
                  >
                    <ServiceIllustration slug={r.slug} variant="icon" className="mb-2" title={r.title} />
                    <span className="font-medium text-sm">{r.title}</span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 gradient-bg text-white text-center relative overflow-hidden">
          <ServiceIllustration slug={page.slug} variant="watermark" className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden md:block" title={page.title} />
          <AnimatedSection anim="fade-up" className="relative">
            <ServiceIllustration slug={page.slug} variant="card" className="mx-auto mb-6 opacity-90" title={page.title} />
            <h2 className="text-3xl font-bold mb-4">Need {page.title}?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Get a free quote from Websoftify — India's trusted software development company.
            </p>
            <Link to="/#contact" className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
              Get Free Quote <HiArrowRight />
            </Link>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </>
  );
}
