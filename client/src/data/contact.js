export const contactInfo = {
  name: 'Satish Gupta',
  phone: '6379467223',
  phoneDisplay: '+91 63794 67223',
  phoneHref: 'tel:+916379467223',
  whatsappHref: 'https://wa.me/916379467223',
  businessEmail: 'satishbussiness821@gmail.com',
  personalEmail: 'satish202627@gmail.com',
};

export const founderInfo = {
  name: contactInfo.name,
  role: 'Software Engineer',
  title: 'Founder — Websoftify',
  badge: 'Founder & Software Engineer',
  tagline: 'Meet Our Visionary Leader',
  experience: '2+ Years Experience',
  location: 'Delhi / Noida / Gurgaon',
  image: '/founder-satish.png',
  linkedin: 'https://www.linkedin.com/in/satish-gupta-4a3ab622b/',
  quote: 'We believe in making quality software accessible to every business.',
  bio: 'Satish Gupta is a software engineer and the founder of Websoftify. With 2+ years of hands-on experience in web development, CRM systems, and full-stack solutions, he builds reliable software for startups and businesses across India.',
  bioLead:
    'With 2+ years of experience in software engineering, Satish Gupta has built a reputation for delivering reliable websites, CRM platforms, and custom business software.',
  bioDetail:
    'Under his leadership, Websoftify has helped companies across Delhi, Noida & Gurgaon with CRM systems, WhatsApp automation, mobile apps, and complete digital solutions — always with direct communication and honest pricing.',
  skills: ['React', 'Node.js', 'MongoDB', 'CRM Systems', 'WhatsApp API'],
};

export const contactFormEndpoint = `https://formsubmit.co/ajax/${encodeURIComponent(contactInfo.businessEmail)}`;
