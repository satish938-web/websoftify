import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    q: 'What services does Websoftify offer?',
    a: 'We build websites, mobile apps, CRM, ERP, AI chatbots, cloud call centers, WhatsApp automation, hosting, SEO, and complete custom software — all under one roof.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Pricing depends on scope, features, and timeline. We offer transparent quotes with no hidden fees. Contact us for a free consultation and custom estimate.',
  },
  {
    q: 'How long does development take?',
    a: 'Simple websites take 2–4 weeks, medium projects 1–3 months, and enterprise CRM/ERP systems 3–6 months. We share a clear timeline before starting.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes! We offer maintenance, updates, bug fixes, and support packages so your software keeps running smoothly after delivery.',
  },
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Absolutely. We work with startups, SMEs, and enterprises across Delhi, Noida, Gurgaon, and all of India.',
  },
  {
    q: 'Can you integrate with WhatsApp, CRM, or payment gateways?',
    a: 'Yes. We integrate with WhatsApp Business API, payment gateways, existing CRMs, email tools, and third-party APIs your business already uses.',
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-black border-t border-white/5 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary-500 mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 theme-heading">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="theme-muted">
            Quick answers about working with Websoftify — still have doubts? Contact us anytime.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`bg-gray-900/80 rounded-xl border border-gray-800 overflow-hidden anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-5 text-left font-semibold theme-heading hover:bg-gray-800/80 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <HiChevronDown
                  className={`shrink-0 ml-4 transition-transform text-gray-400 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-400 leading-relaxed text-sm border-t border-gray-800 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
