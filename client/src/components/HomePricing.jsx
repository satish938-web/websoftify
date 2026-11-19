import { Link } from 'react-router-dom';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { contactInfo } from '../data/contact';
import { trackEvent } from '../utils/analytics';

/**
 * "Connect for pricing" section. Deliberately shows no prices: every project is quoted
 * after a conversation.
 */
const plans = [
  {
    title: 'Project-Based',
    tagline: 'Websites, CRM, apps, and automation built to an agreed scope.',
    points: ['Free consultation call', 'Written quote and timeline before we start', 'Weekly progress updates'],
  },
  {
    title: 'Support & Maintenance',
    tagline: 'Keep your website or software updated, secure, and running smoothly.',
    points: ['Bug fixes and updates', 'Backups and security patches', 'A plan sized to your needs'],
  },
  {
    title: 'Dedicated Team',
    tagline: 'Developers working on your product, month after month.',
    points: ['A team that knows your product', 'Flexible monthly engagement', 'Direct communication'],
  },
];

function PlanCard({ plan, index }) {
  const { ref, visible } = useScrollAnimation(0.08);
  return (
    <div
      ref={ref}
      className={`flex flex-col bg-gray-900/80 rounded-2xl border border-gray-800 p-6 md:p-7 hover:border-primary-500/30 transition-colors anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xl font-bold theme-heading mb-2">{plan.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{plan.tagline}</p>
      <ul className="space-y-2.5 mb-6 flex-1">
        {plan.points.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm text-gray-300">
            <HiCheckCircle className="text-primary-400 text-lg shrink-0" aria-hidden />
            {point}
          </li>
        ))}
      </ul>
      <p className="text-sm font-semibold text-gray-200 mb-4">Pricing: tailored to your project</p>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-primary-400 border border-gray-700 hover:border-primary-500/40 hover:bg-gray-800 transition-colors"
      >
        Talk to us for pricing <HiArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

export default function HomePricing() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="pricing" className="py-16 md:py-24 bg-black border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight theme-heading">
            Every Project Gets a <span className="gradient-text">Custom Quote</span>
          </h2>
          <p className="theme-muted max-w-2xl mx-auto leading-relaxed">
            No one-size-fits-all packages. Tell us what you need — we&apos;ll talk it through and
            send a clear, written quote with no hidden charges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <PlanCard key={plan.title} plan={plan} index={i} />
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link to="/contact" className="hero-btn-primary inline-flex items-center gap-2">
            Get a Free Consultation <HiArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={contactInfo.whatsappChatHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { location: 'pricing' })}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-lg bg-[#25D366]/90 hover:bg-[#25D366] transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" aria-hidden /> Discuss on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
