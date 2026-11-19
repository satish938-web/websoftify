/**
 * Company contact details. No personal names here: the site presents Websoftify
 * as a team, not as individuals.
 */
const whatsappNumber = '916379467223';
const whatsappGreeting = "Hi Websoftify, I'd like to discuss a project.";

export const contactInfo = {
  companyName: 'Websoftify',
  phone: '6379467223',
  phoneDisplay: '+91 63794 67223',
  phoneHref: 'tel:+916379467223',
  whatsappHref: `https://wa.me/${whatsappNumber}`,
  /** Opens WhatsApp with a ready-to-send first message. */
  whatsappChatHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappGreeting)}`,
  businessEmail: 'satishbussiness821@gmail.com',
  location: 'Delhi / Noida / Gurgaon',
};

export const companyInfo = {
  location: contactInfo.location,
  /** Technologies used in the live client projects (see portfolio.js). */
  techStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'WhatsApp API', 'CRM Systems'],
};

export const contactFormEndpoint = `https://formsubmit.co/ajax/${encodeURIComponent(contactInfo.businessEmail)}`;
