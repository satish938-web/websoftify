import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ServiceFAQ({ faqs, title }) {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="py-20 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-12 anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
        >
          <h2 className="text-3xl font-bold mb-4 theme-heading">
            Frequently Asked Questions
          </h2>
          <p className="theme-muted">
            Everything you need to know about our {title} service
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`bg-gray-900 rounded-xl border border-gray-800 overflow-hidden anim-fade-up ${visible ? 'anim-visible' : 'anim-hidden'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
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
