import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { services } from '../data/services';
import { titleToSlug } from '../utils/slugify';
import { getServiceBySlug } from '../data/servicePages';

function getOffset(index, active, total) {
  let offset = index - active;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
}

function CarouselCard({ service, offset, isActive, onSelect }) {
  const slug = titleToSlug(service.title);
  const hasPage = !!getServiceBySlug(slug);
  const abs = Math.abs(offset);
  const visible = abs <= 1;

  const style = {
    transform: `
      translateX(calc(${offset} * (100% + 1.75rem)))
      translateZ(${isActive ? 70 : -40}px)
      rotateY(${offset * -16}deg)
      scale(${isActive ? 1.02 : 0.94})
    `,
    opacity: visible ? (isActive ? 1 : 0.95) : 0,
    zIndex: isActive ? 10 : 5 - abs,
    pointerEvents: visible ? 'auto' : 'none',
  };

  const inner = (
    <div className={`carousel-card-inner ${isActive ? 'carousel-card-active' : 'carousel-card-side'}`}>
      <div className="carousel-card-icon icon-bw">
        <service.icon className="icon-bw-glyph text-xl" />
      </div>
      <h3 className="carousel-card-title">{service.title}</h3>
      <p className="carousel-card-desc">{service.description}</p>
      {hasPage && (
        <span className="carousel-card-link">
          Learn more <HiArrowRight className="w-3.5 h-3.5" />
        </span>
      )}
    </div>
  );

  const className = `carousel-card-slide ${isActive ? 'is-active' : ''} ${offset === -1 ? 'is-left' : ''} ${offset === 1 ? 'is-right' : ''}`;

  const handleClick = (e) => {
    if (!isActive && visible) {
      e.preventDefault();
      onSelect?.();
    }
  };

  if (hasPage) {
    return (
      <Link to={`/services/${slug}`} className={className} style={style} onClick={handleClick}>
        {inner}
      </Link>
    );
  }

  return (
    <div className={className} style={style} onClick={() => !isActive && visible && onSelect?.()} role="button" tabIndex={0}>
      {inner}
    </div>
  );
}

const MOBILE_FEATURED_COUNT = 6;

export default function Carousel3D() {
  const total = services.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const mobileFeatured = services.slice(0, MOBILE_FEATURED_COUNT);

  const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);
  const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  const progress = ((active + 1) / total) * 100;

  return (
    <div className="carousel-pro-wrapper">
      <div
        className="carousel-pro-panel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="carousel-pro-header">
          <div>
            <p className="carousel-pro-eyebrow">Featured Services</p>
            <h3 className="carousel-pro-title">{services[active].title}</h3>
          </div>
          <div className="carousel-pro-counter">
            <span className="carousel-pro-counter-current">{String(active + 1).padStart(2, '0')}</span>
            <span className="carousel-pro-counter-sep">/</span>
            <span className="carousel-pro-counter-total">{String(total).padStart(2, '0')}</span>
          </div>
        </div>

        <div className="carousel-3d-viewport">
          <div className="carousel-3d-stage">
            <div className="carousel-3d-reflection" aria-hidden />
            <button type="button" className="carousel-nav carousel-nav-prev" onClick={prev} aria-label="Previous service">
              <HiChevronLeft size={20} />
            </button>

            <div className="carousel-3d-track">
              {services.map((service, i) => (
                <CarouselCard
                  key={service.title}
                  service={service}
                  offset={getOffset(i, active, total)}
                  isActive={i === active}
                  onSelect={() => setActive(i)}
                />
              ))}
            </div>

            <button type="button" className="carousel-nav carousel-nav-next" onClick={next} aria-label="Next service">
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="carousel-pro-footer">
          <div className="carousel-pro-footer-left">
            <div className="carousel-pro-progress">
              <div className="carousel-pro-progress-bar" style={{ width: `${progress}%` }} />
            </div>
            <p className="carousel-pro-status">
              {paused ? 'Paused' : 'Auto-playing'}
            </p>
          </div>
          <Link
            to={`/services/${titleToSlug(services[active].title)}`}
            className="carousel-pro-cta"
          >
            Explore service <HiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Mobile list — featured subset */}
      <div className="carousel-3d-fallback">
        {mobileFeatured.map((service) => {
          const slug = titleToSlug(service.title);
          const hasPage = !!getServiceBySlug(slug);
          const inner = (
            <div className="carousel-card-inner carousel-card-active">
              <div className="carousel-card-icon icon-bw">
                <service.icon className="icon-bw-glyph text-xl" />
              </div>
              <h3 className="carousel-card-title">{service.title}</h3>
              <p className="carousel-card-desc">{service.description}</p>
              {hasPage && (
                <span className="carousel-card-link">
                  Learn more <HiArrowRight className="w-3.5 h-3.5" />
                </span>
              )}
            </div>
          );
          return hasPage ? (
            <Link key={service.title} to={`/services/${slug}`} className="carousel-fallback-card">
              {inner}
            </Link>
          ) : (
            <div key={service.title} className="carousel-fallback-card">
              {inner}
            </div>
          );
        })}
        <Link to="/services" className="carousel-mobile-view-all">
          View all {total} services <HiArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
