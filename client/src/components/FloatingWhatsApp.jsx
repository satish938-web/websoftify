import { FaWhatsapp } from 'react-icons/fa';
import { contactInfo } from '../data/contact';
import { trackEvent } from '../utils/analytics';

/**
 * Round WhatsApp button fixed to the bottom-right of every page.
 * Opens a chat with a ready-to-send first message.
 * z-30 keeps it under the mobile menu (z-40) and pop-ups.
 */
export default function FloatingWhatsApp() {
  return (
    <a
      href={contactInfo.whatsappChatHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Websoftify on WhatsApp"
      title="Chat with us on WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { location: 'floating_button' })}
      className="group fixed right-4 sm:right-6 z-30 flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 hover:bg-[#1ebe5b] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 transition-colors"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
    >
      <span className="flex h-14 w-14 items-center justify-center">
        <FaWhatsapp className="h-7 w-7" aria-hidden />
      </span>
      <span className="hidden sm:group-hover:inline pr-5 -ml-1 text-sm font-semibold whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
