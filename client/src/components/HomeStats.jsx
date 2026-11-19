import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { SectionIllustration } from './SectionIllustrations';
import { siteStats as stats } from '../data/siteStats';

function StatCard({ stat, index }) {
  const { ref, visible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`text-center p-6 rounded-2xl bg-gray-900/80 border border-gray-800 anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <SectionIllustration type="stat" name={stat.illustration} variant="stat" />
      <p className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">{stat.value}</p>
      <p className="text-sm text-gray-400">{stat.label}</p>
    </div>
  );
}

export default function HomeStats() {
  return (
    <section className="py-12 md:py-16 bg-black border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
