import { Link } from 'react-router-dom';
import { HiArrowRight, HiExternalLink } from 'react-icons/hi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getServiceByTitle } from '../data/services';
import { titleToSlug } from '../utils/slugify';

function ProjectCard({ project, index, compact = false }) {
  const { ref, visible } = useScrollAnimation(0.08);
  const service = getServiceByTitle(project.service);
  const Icon = service?.icon;
  const serviceSlug = titleToSlug(project.service);

  return (
    <article
      ref={ref}
      className={`portfolio-card group anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="portfolio-card-top">
        {Icon && (
          <div className="portfolio-card-icon icon-bw">
            <Icon className="icon-bw-glyph text-lg" />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="portfolio-company">{project.company}</p>
          <h3 className="portfolio-title">{project.title}</h3>
        </div>
        <span className="portfolio-year">{project.year}</span>
      </div>

      <Link
        to={`/services/${serviceSlug}`}
        className="portfolio-service-tag"
      >
        {project.service}
      </Link>

      <p className={`portfolio-desc ${compact ? 'line-clamp-2' : 'line-clamp-3'}`}>
        {project.description}
      </p>

      <div className="portfolio-tech">
        {project.tech.map((t) => (
          <span key={t} className="portfolio-tech-pill">
            {t}
          </span>
        ))}
      </div>

      <div className="portfolio-card-footer">
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
          >
            View live <HiExternalLink />
          </a>
        ) : (
          <span className="portfolio-link-muted">Private project</span>
        )}
        <Link to={`/services/${serviceSlug}`} className="portfolio-link-primary">
          Service details <HiArrowRight />
        </Link>
      </div>
    </article>
  );
}

export default function Portfolio({ projects, showHeader = true, compact = false, dark = false }) {
  const { ref: headingRef, visible: headingVisible } = useScrollAnimation();

  return (
    <section
      id="work"
      className={`py-24 relative ${dark ? 'bg-black portfolio-section-dark' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div
            ref={headingRef}
            className={`text-center mb-14 anim-fade-up ${headingVisible ? 'anim-visible' : 'anim-hidden'}`}
          >
            <span
              className={`inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
                dark ? 'text-primary-400' : 'text-primary-600'
              }`}
            >
              Our Work
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${
                dark ? 'theme-heading' : 'text-slate-900'
              }`}
            >
              Projects Built for <span className="gradient-text">Real Companies</span>
            </h2>
            <p
              className={`max-w-2xl mx-auto text-base leading-relaxed ${
                dark ? 'theme-muted' : 'text-slate-500'
              }`}
            >
              Software solutions Websoftify has delivered for clients — CRM, AI, websites,
              apps, call centers, and more.
            </p>
          </div>
        )}

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${dark ? 'portfolio-grid-dark' : ''}`}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} compact={compact} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ProjectCard };
