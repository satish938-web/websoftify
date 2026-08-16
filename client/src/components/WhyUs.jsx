import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionIllustration } from './SectionIllustrations';

const features = [
  {
    name: 'quality',
    title: 'Quality Assured',
    description: 'Clean code, tested thoroughly, and built to industry standards.',
  },
  {
    name: 'delivery',
    title: 'On-Time Delivery',
    description: 'We respect deadlines and deliver projects on schedule, every time.',
  },
  {
    name: 'pricing',
    title: 'Best Pricing',
    description: 'Competitive rates with no hidden costs. Get maximum value for your investment.',
  },
  {
    name: 'support',
    title: 'Dedicated Support',
    description: 'Post-launch support and maintenance to keep your software running perfectly.',
  },
];

function WhyCard({ feature, index }) {
  const { ref, visible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`why-card anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="why-card-icon flex items-center justify-center p-2">
        <SectionIllustration type="why" name={feature.name} variant="card" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function WhyUs() {
  const { ref: headingRef, visible: headingVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,210,255,0.12),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          ref={headingRef}
          className={`text-center mb-16 anim-fade-up ${headingVisible ? 'anim-visible' : 'anim-hidden'}`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
            Why Websoftify
          </span>
          <h2 className="text-3xl font-bold mb-4 tracking-tight theme-heading">
            Built on Trust, Driven by Results
          </h2>
          <p className="theme-muted max-w-2xl mx-auto leading-relaxed">
            We combine technical expertise with a client-first approach to deliver software
            that makes a real difference.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <WhyCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
