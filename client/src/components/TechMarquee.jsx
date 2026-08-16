import { services } from '../data/services';

export default function TechMarquee() {
  const items = [...services, ...services];

  return (
    <div className="tech-marquee-section border-y border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-gray-500 mb-4">
          All {services.length} Services We Offer
        </p>
        <div className="tech-marquee-mask overflow-hidden">
          <div className="tech-marquee-track">
            {items.map((service, i) => {
              const Icon = service.icon;
              return (
                <span key={`${service.title}-${i}`} className="tech-marquee-item tech-marquee-item-dark">
                  <Icon className="tech-marquee-icon" aria-hidden />
                  {service.title}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
