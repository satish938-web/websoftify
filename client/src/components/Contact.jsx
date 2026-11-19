import { useEffect, useState } from 'react';
import { HiMail, HiPhone, HiCheckCircle, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { allServiceNames } from '../data/services';
import { contactInfo, contactFormEndpoint } from '../data/contact';
import { trackEvent } from '../utils/analytics';

const serviceOptions = [...allServiceNames, 'Other'];

function getSubmitStatus(data) {
  const message = data.message || '';

  if (/activation|activate form/i.test(message)) {
    return {
      type: 'info',
      message: `Form activate karna hai (sirf ek baar). ${contactInfo.businessEmail} par FormSubmit ki email check karo — Spam/Junk folder bhi dekho. "Activate Form" link par click karo, phir dubara message bhejo.`,
    };
  }

  if (data.success === 'true' || data.success === true) {
    return {
      type: 'success',
      message: 'Thank you! Your message has been sent. We will get back to you soon.',
    };
  }

  return {
    type: 'error',
    message: message || 'Something went wrong. Please try again or contact us on WhatsApp.',
  };
}

const inputClass =
  'w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-700 bg-gray-900 text-base text-gray-100 placeholder:text-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (!showSuccessPopup) return undefined;

    const handleEscape = (e) => {
      if (e.key === 'Escape') setShowSuccessPopup(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [showSuccessPopup]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch(contactFormEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || 'Not provided',
          service: form.service || 'Not specified',
          message: form.message,
          _subject: `New Websoftify inquiry from ${form.name}`,
          _replyto: form.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await res.json();
      const result = getSubmitStatus(data);

      if (result.type === 'success') {
        trackEvent('generate_lead', { form: 'contact', service: form.service || 'Not specified' });
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
        setStatus({ type: '', message: '' });
        setShowSuccessPopup(true);
      } else {
        setStatus(result);
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to send message. Please try again or contact us directly on WhatsApp.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-black relative overflow-hidden">
      <div className="contact-section-glow" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 md:mb-16 px-1">
          <p className="text-primary-400 font-semibold mb-2">Contact Us</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 theme-heading">
            Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="theme-muted max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind? Get in touch and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
            <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 border border-gray-800 sm:col-span-2 lg:col-span-1">
              <h3 className="font-bold mb-1 theme-heading">{contactInfo.companyName}</h3>
              <p className="text-gray-400 text-sm">Software Development Company · Delhi NCR</p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 border border-gray-800">
              <HiMail className="text-gray-300 text-2xl mb-3" />
              <h3 className="font-bold mb-1 theme-heading">Business Email</h3>
              <a
                href={`mailto:${contactInfo.businessEmail}`}
                className="text-gray-400 hover:text-primary-400 transition-colors break-all"
              >
                {contactInfo.businessEmail}
              </a>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 border border-gray-800">
              <HiPhone className="text-gray-300 text-2xl mb-3" />
              <h3 className="font-bold mb-1 theme-heading">Call Us</h3>
              <a
                href={contactInfo.phoneHref}
                onClick={() => trackEvent('phone_click', { location: 'contact_section' })}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                {contactInfo.phoneDisplay}
              </a>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 border border-gray-800">
              <FaWhatsapp className="text-gray-300 text-2xl mb-3" />
              <h3 className="font-bold mb-1 theme-heading">WhatsApp</h3>
              <a
                href={contactInfo.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { location: 'contact_section' })}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                {contactInfo.phoneDisplay}
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-gray-900 rounded-2xl p-5 sm:p-8 border border-gray-800"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${inputClass} bg-gray-900`}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your project..."
              />
            </div>

            {status.message && status.type !== 'success' && (
              <div
                className={`flex items-center gap-2 mb-6 p-4 rounded-xl text-sm ${
                  status.type === 'success'
                    ? 'bg-green-900/40 text-green-300 border border-green-800'
                    : status.type === 'info'
                      ? 'bg-amber-900/30 text-amber-200 border border-amber-700'
                      : 'bg-red-900/40 text-red-300 border border-red-800'
                }`}
              >
                {status.type === 'success' && <HiCheckCircle className="text-lg shrink-0" />}
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full gradient-bg text-white py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {showSuccessPopup && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-success-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            aria-label="Close popup"
            onClick={() => setShowSuccessPopup(false)}
          />
          <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-700 bg-gray-900 p-6 sm:p-8 text-center shadow-2xl anim-fade-up anim-visible mx-4">
            <button
              type="button"
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <HiX className="text-xl" />
            </button>

            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-green-500/15 flex items-center justify-center">
              <HiCheckCircle className="text-4xl text-green-400" />
            </div>

            <h3 id="enquiry-success-title" className="text-2xl font-bold theme-heading mb-2">
              Your Enquiry Submitted!
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Thank you for reaching out. We have received your message and will get back to you
              within 24 hours.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccessPopup(false)}
              className="w-full gradient-bg text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
