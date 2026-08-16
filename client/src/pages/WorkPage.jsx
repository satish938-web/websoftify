import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { ProjectCard } from '../components/Portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  portfolioProjects,
  workCategories,
  getProjectsByCategory,
} from '../data/portfolio';

function WorkSection({ category, projects, indexOffset = 0 }) {
  const { ref, visible } = useScrollAnimation();
  const Icon = category.icon;

  return (
    <section className="mb-16 last:mb-0">
      <div
        ref={ref}
        className={`flex items-start gap-4 mb-8 anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
      >
        <div className="w-12 h-12 icon-bw rounded-xl flex items-center justify-center shrink-0">
          <Icon className="icon-bw-glyph text-xl" />
        </div>
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-[0.15em] text-primary-500 mb-1">
            {projects.length} {projects.length === 1 ? 'project' : 'projects'}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold theme-heading mb-2">{category.title}</h2>
          <p className="theme-muted max-w-2xl text-sm leading-relaxed">{category.description}</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 portfolio-grid-dark">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={indexOffset + i} />
        ))}
      </div>
    </section>
  );
}

export default function WorkPage() {
  const crmProjects = getProjectsByCategory('crm-software');
  const websiteProjects = getProjectsByCategory('company-websites');

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <SEO
        title="Our Work | Websoftify - Client Projects & Portfolio"
        description="Explore Websoftify client work — CRM systems, company websites, HR & operations software, calling, and WhatsApp automation."
        keywords="websoftify portfolio, client projects, company websites, CRM projects india"
        canonical="https://websoftify.com/work"
      />
      <Navbar />
      <main className="pt-24 pb-20 relative">
        <div className="services-page-glow" aria-hidden />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 theme-heading">
              Our <span className="gradient-text">Work</span>
            </h1>
            <p className="theme-muted max-w-2xl mx-auto leading-relaxed">
              {portfolioProjects.length} client projects — CRM & software solutions first, then
              company websites we built for real businesses.
            </p>
          </div>

          <WorkSection
            category={workCategories[0]}
            projects={crmProjects}
            indexOffset={0}
          />
          <WorkSection
            category={workCategories[1]}
            projects={websiteProjects}
            indexOffset={crmProjects.length}
          />

          <div className="mt-16 text-center">
            <div className="portfolio-cta-box portfolio-cta-box-dark max-w-2xl mx-auto">
              <h2 className="text-xl font-bold theme-heading mb-2">Want a project like these?</h2>
              <p className="theme-muted mb-6 text-sm">
                Tell us about your company and we&apos;ll build a custom solution for you.
              </p>
              <Link to="/#contact" className="hero-btn-primary inline-flex">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
