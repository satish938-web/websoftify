import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { ProjectCard } from './Portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getPortfolioProjectsInOrder } from '../data/portfolio';

const featuredProjects = getPortfolioProjectsInOrder().slice(0, 6);

export default function HomeWork() {
  const { ref: headingRef, visible: headingVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-black relative border-t border-white/5">
      <div className="services-section-glow opacity-60" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={headingRef}
          className={`text-center mb-14 anim-fade-up ${headingVisible ? 'anim-visible' : 'anim-hidden'}`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight theme-heading">
            Projects Built for <span className="gradient-text">Real Companies</span>
          </h2>
          <p className="theme-muted max-w-2xl mx-auto leading-relaxed">
            CRM platforms, business websites, and software solutions delivered for clients across
            India — from finance and travel to restaurants and tech.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 portfolio-grid-dark mb-12">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} compact />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-primary-400 bg-gray-900 border border-gray-700 rounded-lg hover:bg-gray-800 hover:border-primary-500/40 transition-colors"
          >
            View all projects
            <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
