import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Logo from './Logo';
import BrandName from './BrandName';
import { contactInfo } from '../data/contact';
import { trackEvent } from '../utils/analytics';

const footerLinks = {
  Development: [
    { label: 'Custom Software', to: '/services/custom-software' },
    { label: 'Web Applications', to: '/services/web-application-development' },
    { label: 'Mobile Apps', to: '/services/mobile-app-development' },
    { label: 'Ecommerce', to: '/services/ecommerce-development' },
  ],
  Solutions: [
    { label: 'AI Chatbots', to: '/services/ai-chatbots' },
    { label: 'CRM Software', to: '/services/crm-software' },
    { label: 'ERP Software', to: '/services/erp-software' },
    { label: 'Cloud Call Center', to: '/services/cloud-call-center' },
    { label: 'WhatsApp AI', to: '/services/whatsapp-ai' },
  ],
  Company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Service', to: '/terms-of-service' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-4" aria-label="Websoftify">
              <Logo className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12" />
              <BrandName size="md" onDark className="text-lg sm:text-xl md:text-2xl" />
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Full-stack software company — AI, CRM, ERP, call center, websites, apps, hosting,
              and complete digital solutions under one roof.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors text-white"
                  aria-label="Social link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contactInfo.businessEmail}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {contactInfo.businessEmail}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.phoneHref}
                  onClick={() => trackEvent('phone_click', { location: 'footer' })}
                  className="hover:text-white transition-colors"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { location: 'footer' })}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FaWhatsapp /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Websoftify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
