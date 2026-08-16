import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiChevronDown, HiArrowRight } from 'react-icons/hi';
import Logo from './Logo';
import BrandName from './BrandName';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { serviceCategories, services } from '../data/services';
import { titleToSlug } from '../utils/slugify';
import ServiceMenuIcon from './ServiceMenuIcon';

function NavLink({ to, children, className, onClick }) {
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDark } = useTheme();
  const isHome = location.pathname === '/';
  const navOnDark = isDark;

  const homeLink = isHome ? '#home' : '/';
  const aboutLink = '/about';
  const contactLink = '/contact';
  const workLink = '/work';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeServicesTimer = useRef(null);

  const openServicesMenu = useCallback(() => {
    if (closeServicesTimer.current) {
      clearTimeout(closeServicesTimer.current);
      closeServicesTimer.current = null;
    }
    setServicesOpen(true);
  }, []);

  const scheduleCloseServicesMenu = useCallback(() => {
    if (closeServicesTimer.current) {
      clearTimeout(closeServicesTimer.current);
    }
    closeServicesTimer.current = setTimeout(() => {
      setServicesOpen(false);
      closeServicesTimer.current = null;
    }, 250);
  }, []);

  useEffect(
    () => () => {
      if (closeServicesTimer.current) {
        clearTimeout(closeServicesTimer.current);
      }
    },
    []
  );

  return (
    <>
      {servicesOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setServicesOpen(false)}
          aria-hidden
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navOnDark
            ? scrolled || servicesOpen
              ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-white/10'
              : 'bg-black/40 backdrop-blur-md border-b border-white/5'
            : scrolled || servicesOpen
              ? 'bg-white shadow-sm border-b border-gray-100'
              : 'bg-white/90 backdrop-blur-md border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 shrink-0 min-w-0" aria-label="Websoftify Home">
              <Logo className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12" />
              <BrandName
                className="truncate text-base sm:text-lg md:text-xl lg:text-2xl"
                size="sm"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <NavLink
                to={homeLink}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  navOnDark
                    ? 'text-gray-300 hover:text-primary-400 hover:bg-white/5'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                Home
              </NavLink>

              <div
                className="relative"
                onMouseEnter={openServicesMenu}
                onMouseLeave={scheduleCloseServicesMenu}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    servicesOpen
                      ? navOnDark
                        ? 'text-primary-400 bg-white/10'
                        : 'text-primary-600 bg-primary-50'
                      : navOnDark
                        ? 'text-gray-300 hover:text-primary-400 hover:bg-white/5'
                        : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <HiChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {servicesOpen && (
                  <span
                    className="hidden lg:block absolute left-0 right-0 top-full h-3"
                    aria-hidden
                  />
                )}
              </div>

              <NavLink
                to={workLink}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  navOnDark
                    ? 'text-gray-300 hover:text-primary-400 hover:bg-white/5'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                Our Work
              </NavLink>

              <NavLink
                to={aboutLink}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  navOnDark
                    ? 'text-gray-300 hover:text-primary-400 hover:bg-white/5'
                    : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                About
              </NavLink>

              <ThemeToggle variant={navOnDark ? 'dark' : 'light'} />

              <NavLink
                to={contactLink}
                className="ml-1 px-5 py-2.5 text-sm font-semibold text-white gradient-bg rounded-lg transition-opacity hover:opacity-90 shadow-sm"
              >
                Get Quote
              </NavLink>
            </div>

            <div className="lg:hidden flex items-center gap-1">
              <ThemeToggle variant={navOnDark ? 'dark' : 'light'} />
              <button
                className={`p-2 rounded-lg ${
                  navOnDark
                    ? 'text-gray-300 hover:bg-white/10'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <HiX size={22} /> : <HiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Professional mega menu — pt bridge keeps hover path from Services button */}
        <div
          className={`hidden lg:block absolute left-0 right-0 top-full pt-1 border-t shadow-2xl transition-all duration-300 origin-top ${
            navOnDark
              ? 'bg-black/98 backdrop-blur-xl border-white/10 shadow-black/50'
              : 'bg-white border-gray-100 shadow-xl'
          } ${
            servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
          }`}
          onMouseEnter={openServicesMenu}
          onMouseLeave={scheduleCloseServicesMenu}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {serviceCategories.map((cat) => (
                <div key={cat.title}>
                  <h4
                    className={`text-[11px] font-bold uppercase tracking-widest mb-3 pb-2 border-b ${
                      navOnDark
                        ? 'text-primary-500 border-gray-800'
                        : 'text-primary-600 border-primary-100'
                    }`}
                  >
                    {cat.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => {
                      const slug = titleToSlug(item);
                      return (
                      <li key={item}>
                        <Link
                          to={`/services/${slug}`}
                          className={`group flex items-start gap-2 text-[13px] py-1 transition-colors leading-snug ${
                            navOnDark
                              ? 'text-gray-400 hover:text-primary-500'
                              : 'text-slate-600 hover:text-primary-600'
                          }`}
                        >
                          <ServiceMenuIcon title={item} className="mt-0.5" />
                          <span className="flex-1">{item}</span>
                          <HiArrowRight className="w-3 h-3 mt-0.5 opacity-0 group-hover:opacity-100 transition-all shrink-0" />
                        </Link>
                      </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
            <div
              className={`mt-8 pt-5 border-t flex items-center justify-between ${
                navOnDark ? 'border-gray-800' : 'border-gray-100'
              }`}
            >
              <p className={`text-sm ${navOnDark ? 'text-gray-500' : 'text-slate-500'}`}>
                {services.length} end-to-end software solutions for growing businesses
              </p>
              <Link
                to="/services"
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${
                  navOnDark
                    ? 'text-primary-400 hover:text-primary-300'
                    : 'text-primary-600 hover:text-primary-700'
                }`}
              >
                Browse all services
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {open && (
          <div
            className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 border-t overflow-y-auto overscroll-contain ${
              navOnDark
                ? 'border-white/10 bg-black/98 backdrop-blur-md'
                : 'border-gray-100 bg-white'
            }`}
          >
            <div className="px-4 py-4 space-y-1">
              <NavLink
                to={homeLink}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg ${
                  navOnDark
                    ? 'text-gray-200 hover:bg-white/10'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                onClick={() => setOpen(false)}
              >
                Home
              </NavLink>

              <button
                className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-lg ${
                  navOnDark
                    ? 'text-gray-200 hover:bg-white/10'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <HiChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pb-2 space-y-4">
                  {serviceCategories.map((cat) => (
                    <div key={cat.title}>
                      <p
                        className={`text-xs font-bold uppercase tracking-wider mb-2 ${
                          navOnDark ? 'text-primary-400' : 'text-primary-600'
                        }`}
                      >
                        {cat.title}
                      </p>
                      <div className="space-y-1">
                        {cat.items.map((item) => {
                          const slug = titleToSlug(item);
                          return (
                          <Link
                            key={item}
                            to={`/services/${slug}`}
                            className={`flex items-center gap-2 text-sm py-1.5 px-2 rounded ${
                              navOnDark
                                ? 'text-gray-400 hover:bg-white/10 hover:text-primary-400'
                                : 'text-slate-600 hover:bg-slate-50'
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            <ServiceMenuIcon title={item} />
                            {item}
                          </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                  <Link
                    to="/services"
                    className={`block text-sm font-semibold py-2 ${
                      navOnDark ? 'text-primary-400' : 'text-primary-600'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    View all services →
                  </Link>
                </div>
              )}

              <NavLink
                to={workLink}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg ${
                  navOnDark
                    ? 'text-gray-200 hover:bg-white/10'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                onClick={() => setOpen(false)}
              >
                Our Work
              </NavLink>

              <NavLink
                to={aboutLink}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg ${
                  navOnDark
                    ? 'text-gray-200 hover:bg-white/10'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
                onClick={() => setOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to={contactLink}
                className="block text-center mt-2 px-5 py-2.5 text-sm font-semibold text-white gradient-bg rounded-lg"
                onClick={() => setOpen(false)}
              >
                Get Quote
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
