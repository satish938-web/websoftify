import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { servicePages } from '../data/servicePages';
import ServiceIllustration from '../components/ServiceIllustration';

function ServiceCard({ page, index }) {
  const { ref, visible } = useScrollAnimation();
  return (
    <Link
      ref={ref}
      to={`/services/${page.slug}`}
      className={`group block bg-gray-900/80 rounded-2xl border border-gray-800 p-6 services-card-dark anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
    >
      <div className="w-20 h-20 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center mb-4 p-3 group-hover:scale-110 transition-transform">
        <ServiceIllustration slug={page.slug} variant="card" title={page.title} />
      </div>
      <h2 className="font-bold text-lg mb-2 text-white group-hover:text-primary-400 transition-colors">
        {page.title}
      </h2>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{page.tagline}</p>
      <span className="inline-flex items-center gap-1 text-primary-400 text-sm font-medium">
        View Page <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}

export default function ServicesList() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="All Services | Websoftify - Software Development Company"
        description="Explore all Websoftify services — AI chatbots, CRM, ERP, web apps, mobile apps, call center, hosting, SEO, and more."
        keywords="websoftify services, software services, web development, CRM, ERP, AI, call center"
        canonical="https://websoftify.com/services"
      />
      <Navbar />
      <main className="pt-24 pb-20 relative">
        <div className="services-page-glow" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 theme-heading">
              All <span className="gradient-text">Services</span>
            </h1>
            <p className="theme-muted max-w-2xl mx-auto">
              {servicePages.length} specialized service pages — each with unique design, SEO optimization, and expert solutions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicePages.map((page, i) => (
              <ServiceCard key={page.slug} page={page} index={i} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
