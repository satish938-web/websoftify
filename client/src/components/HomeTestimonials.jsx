import { HiStar } from 'react-icons/hi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'VFC Loans Team',
    role: 'Finance & HR Platform',
    text: 'Websoftify built our complete CRM with HR, calling, and WhatsApp automation. Everything works smoothly in one system — exactly what we needed.',
    rating: 5,
  },
  {
    name: 'Admire Holidays',
    role: 'Travel & CRM Solutions',
    text: 'From our holiday website to the custom CRM — professional work, fast delivery, and great communication throughout the project.',
    rating: 5,
  },
  {
    name: 'Travel N World',
    role: 'Travel Agency Website',
    text: 'Our travel portal with admin panel looks amazing and handles bookings perfectly. The team understood our business from day one.',
    rating: 5,
  },
];

function TestimonialCard({ item, index }) {
  const { ref, visible } = useScrollAnimation(0.08);
  return (
    <article
      ref={ref}
      className={`bg-gray-900/80 rounded-2xl border border-gray-800 p-6 md:p-7 anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: item.rating }).map((_, i) => (
          <HiStar key={i} className="text-primary-400 text-lg" />
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed mb-6">&ldquo;{item.text}&rdquo;</p>
      <div>
        <p className="font-bold theme-heading text-sm">{item.name}</p>
        <p className="text-primary-400 text-xs mt-0.5">{item.role}</p>
      </div>
    </article>
  );
}

export default function HomeTestimonials() {
  const { ref: headingRef, visible: headingVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-black relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`text-center mb-14 anim-fade-up ${headingVisible ? 'anim-visible' : 'anim-hidden'}`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight theme-heading">
            Trusted by <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="theme-muted max-w-2xl mx-auto leading-relaxed">
            Hear from companies who chose Websoftify for their websites, CRM, and software projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
