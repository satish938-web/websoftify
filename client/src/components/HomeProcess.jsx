import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionIllustration } from './SectionIllustrations';

const steps = [
  {
    step: '01',
    name: 'discovery',
    title: 'Discovery & Consultation',
    description:
      'We understand your business goals, requirements, and budget through a free consultation call.',
  },
  {
    step: '02',
    name: 'design',
    title: 'Design & Planning',
    description:
      'Wireframes, UI design, and a clear project roadmap — so you know exactly what we are building.',
  },
  {
    step: '03',
    name: 'development',
    title: 'Development & Testing',
    description:
      'Agile development with weekly updates, demos, and thorough testing before anything goes live.',
  },
  {
    step: '04',
    name: 'launch',
    title: 'Launch & Support',
    description:
      'Smooth deployment, training if needed, and ongoing maintenance to keep your software running perfectly.',
  },
];

function ProcessStep({ item, index }) {
  const { ref, visible } = useScrollAnimation(0.08);
  return (
    <div
      ref={ref}
      className={`relative anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-gray-900/80 rounded-2xl border border-gray-800 p-6 h-full hover:border-primary-500/30 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <SectionIllustration type="process" name={item.name} variant="card" />
          <span className="text-xs font-bold text-primary-400/80">{item.step}</span>
        </div>
        <h3 className="text-lg font-bold theme-heading mb-2">{item.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function HomeProcess() {
  const { ref: headingRef, visible: headingVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-black relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,71,255,0.08),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={headingRef}
          className={`text-center mb-14 anim-fade-up ${headingVisible ? 'anim-visible' : 'anim-hidden'}`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight theme-heading">
            From Idea to <span className="gradient-text">Launch</span>
          </h2>
          <p className="theme-muted max-w-2xl mx-auto leading-relaxed">
            A simple, transparent process — you stay involved at every step while we handle the
            technical heavy lifting.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <ProcessStep key={item.step} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
