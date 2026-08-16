import { useId } from 'react';

function Defs({ uid }) {
  return (
    <defs>
      <linearGradient id={`g-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#9d00ff" />
        <stop offset="50%" stopColor="#0047ff" />
        <stop offset="100%" stopColor="#00d2ff" />
      </linearGradient>
      <linearGradient id={`gs-${uid}`} x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0047ff" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.4" />
      </linearGradient>
    </defs>
  );
}

function Svg({ uid, children, viewBox = '0 0 64 64' }) {
  return (
    <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <Defs uid={uid} />
      {children}
    </svg>
  );
}

const statArts = {
  projects: (uid) => (
    <Svg uid={uid}>
      <rect x="8" y="14" width="48" height="36" rx="6" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <path d="M18 38 L26 30 L34 34 L46 22" stroke={`url(#g-${uid})`} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="46" cy="22" r="3" fill="#00d2ff" />
    </Svg>
  ),
  clients: (uid) => (
    <Svg uid={uid}>
      <circle cx="22" cy="26" r="10" fill={`url(#g-${uid})`} opacity="0.8" />
      <circle cx="42" cy="26" r="10" fill={`url(#g-${uid})`} opacity="0.55" />
      <path d="M10 48 C10 38 16 34 22 34 C28 34 34 38 34 48" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <path d="M30 48 C30 38 36 34 42 34 C48 34 54 38 54 48" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
    </Svg>
  ),
  services: (uid) => (
    <Svg uid={uid}>
      <rect x="12" y="12" width="18" height="18" rx="4" fill={`url(#g-${uid})`} opacity="0.7" />
      <rect x="34" y="12" width="18" height="18" rx="4" fill={`url(#g-${uid})`} opacity="0.5" />
      <rect x="12" y="34" width="18" height="18" rx="4" fill={`url(#g-${uid})`} opacity="0.5" />
      <rect x="34" y="34" width="18" height="18" rx="4" fill={`url(#g-${uid})`} opacity="0.85" />
    </Svg>
  ),
  support: (uid) => (
    <Svg uid={uid}>
      <circle cx="32" cy="32" r="22" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <path d="M32 18 V32 L42 38" stroke={`url(#g-${uid})`} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="32" r="3" fill="#00d2ff" />
    </Svg>
  ),
};

const processArts = {
  discovery: (uid) => (
    <Svg uid={uid}>
      <path d="M20 28 C20 20 26 14 34 14 C42 14 48 20 48 28 C48 36 34 50 34 50 C34 50 20 36 20 28Z" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <circle cx="34" cy="28" r="6" fill={`url(#g-${uid})`} />
    </Svg>
  ),
  design: (uid) => (
    <Svg uid={uid}>
      <circle cx="24" cy="28" r="12" fill={`url(#g-${uid})`} opacity="0.5" />
      <rect x="36" y="18" width="14" height="14" rx="7" fill={`url(#g-${uid})`} />
      <rect x="36" y="36" width="14" height="14" rx="3" fill="#0047ff" opacity="0.6" />
    </Svg>
  ),
  development: (uid) => (
    <Svg uid={uid}>
      <rect x="10" y="16" width="44" height="32" rx="5" fill="#0a0a12" stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <path d="M18 32 L26 40 L18 48" stroke={`url(#g-${uid})`} strokeWidth="2" strokeLinecap="round" />
      <path d="M34 44 H46" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  ),
  launch: (uid) => (
    <Svg uid={uid}>
      <path d="M32 10 L38 28 H50 L40 38 L44 54 L32 46 L20 54 L24 38 L14 28 H26 Z" fill={`url(#g-${uid})`} opacity="0.85" />
      <circle cx="32" cy="30" r="4" fill="#fff" opacity="0.8" />
    </Svg>
  ),
};

const whyArts = {
  quality: (uid) => (
    <Svg uid={uid}>
      <path d="M32 8 L38 22 H52 L41 31 L45 46 L32 38 L19 46 L23 31 L12 22 H26 Z" fill={`url(#g-${uid})`} opacity="0.3" stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <path d="M24 32 L30 38 L42 26" stroke={`url(#g-${uid})`} strokeWidth="2.5" strokeLinecap="round" />
    </Svg>
  ),
  delivery: (uid) => (
    <Svg uid={uid}>
      <circle cx="32" cy="34" r="18" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <path d="M32 18 V34 L42 40" stroke={`url(#g-${uid})`} strokeWidth="2.5" strokeLinecap="round" />
    </Svg>
  ),
  pricing: (uid) => (
    <Svg uid={uid}>
      <circle cx="32" cy="32" r="22" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <text x="32" y="38" textAnchor="middle" fill={`url(#g-${uid})`} fontSize="22" fontWeight="bold">₹</text>
    </Svg>
  ),
  support: (uid) => (
    <Svg uid={uid}>
      <rect x="14" y="20" width="36" height="24" rx="8" fill={`url(#g-${uid})`} opacity="0.5" />
      <path d="M20 44 H24 V48 H20 Z M40 44 H44 V48 H40 Z" fill={`url(#g-${uid})`} />
      <circle cx="32" cy="32" r="5" fill="#00d2ff" />
    </Svg>
  ),
};

const categoryArts = {
  development: (uid) => (
    <Svg uid={uid} viewBox="0 0 80 80">
      <rect x="10" y="15" width="60" height="45" rx="6" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="2" />
      <path d="M22 38 L30 46 L22 54" stroke={`url(#g-${uid})`} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M38 50 H58" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  ),
  ai: (uid) => (
    <Svg uid={uid} viewBox="0 0 80 80">
      <circle cx="40" cy="35" r="18" fill={`url(#g-${uid})`} filter="none" />
      <rect x="15" y="55" width="50" height="14" rx="5" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <circle cx="32" cy="35" r="3" fill="#fff" /><circle cx="48" cy="35" r="3" fill="#fff" />
    </Svg>
  ),
  business: (uid) => (
    <Svg uid={uid} viewBox="0 0 80 80">
      <circle cx="40" cy="28" r="12" fill={`url(#g-${uid})`} />
      <circle cx="22" cy="52" r="10" fill={`url(#g-${uid})`} opacity="0.6" />
      <circle cx="58" cy="52" r="10" fill={`url(#g-${uid})`} opacity="0.6" />
      <path d="M32 36 L26 44 M48 36 L54 44" stroke={`url(#g-${uid})`} strokeWidth="2" opacity="0.5" />
    </Svg>
  ),
  communication: (uid) => (
    <Svg uid={uid} viewBox="0 0 80 80">
      <path d="M25 50 C25 35 32 25 40 25 C48 25 55 35 55 50" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="2" />
      <ellipse cx="40" cy="22" rx="22" ry="10" fill={`url(#g-${uid})`} opacity="0.35" />
    </Svg>
  ),
  design: (uid) => (
    <Svg uid={uid} viewBox="0 0 80 80">
      <rect x="12" y="20" width="35" height="45" rx="4" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <circle cx="55" cy="35" r="14" fill={`url(#g-${uid})`} />
      <path d="M55 22 L58 32 L68 35 L58 38 L55 48 L52 38 L42 35 L52 32 Z" fill="#fff" opacity="0.5" />
    </Svg>
  ),
  infrastructure: (uid) => (
    <Svg uid={uid} viewBox="0 0 80 80">
      <rect x="15" y="22" width="50" height="12" rx="3" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <rect x="15" y="38" width="50" height="12" rx="3" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <rect x="15" y="54" width="50" height="12" rx="3" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <circle cx="22" cy="28" r="2" fill="#28c840" />
      <circle cx="22" cy="44" r="2" fill="#28c840" />
      <circle cx="22" cy="60" r="2" fill="#28c840" />
    </Svg>
  ),
};

const useCaseArts = [
  (uid) => (
    <Svg uid={uid}>
      <rect x="10" y="18" width="44" height="28" rx="4" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <path d="M16 38 H48" stroke={`url(#g-${uid})`} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  ),
  (uid) => (
    <Svg uid={uid}>
      <circle cx="32" cy="24" r="10" fill={`url(#g-${uid})`} opacity="0.7" />
      <path d="M14 48 H50" stroke={`url(#g-${uid})`} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 40 H44" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  ),
  (uid) => (
    <Svg uid={uid}>
      <path d="M32 12 L38 26 H52 L41 34 L44 50 L32 42 L20 50 L23 34 L12 26 H26 Z" fill={`url(#g-${uid})`} opacity="0.6" />
    </Svg>
  ),
  (uid) => (
    <Svg uid={uid}>
      <circle cx="32" cy="32" r="18" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <path d="M32 20 V32 L40 36" stroke={`url(#g-${uid})`} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  ),
  (uid) => (
    <Svg uid={uid}>
      <ellipse cx="32" cy="28" rx="20" ry="10" fill={`url(#g-${uid})`} opacity="0.4" />
      <rect x="14" y="28" width="36" height="22" rx="4" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
    </Svg>
  ),
  (uid) => (
    <Svg uid={uid}>
      <rect x="16" y="14" width="32" height="36" rx="6" fill={`url(#gs-${uid})`} stroke={`url(#g-${uid})`} strokeWidth="1.5" />
      <circle cx="32" cy="44" r="3" fill={`url(#g-${uid})`} />
    </Svg>
  ),
];

export function SectionIllustration({ type, name, index = 0, variant = 'card', className = '' }) {
  const uid = useId().replace(/:/g, '');
  let art = null;

  if (type === 'stat') art = statArts[name]?.(uid);
  else if (type === 'process') art = processArts[name]?.(uid);
  else if (type === 'why') art = whyArts[name]?.(uid);
  else if (type === 'category') art = categoryArts[name]?.(uid);
  else if (type === 'usecase') art = useCaseArts[index % useCaseArts.length]?.(uid);

  if (!art) return null;

  return (
    <div className={`section-illustration section-illustration--${variant} ${className}`} aria-hidden>
      {art}
    </div>
  );
}

export function DecorativeBlob({ className = '' }) {
  const uid = useId().replace(/:/g, '');
  return (
    <div className={`decorative-blob ${className}`} aria-hidden>
      <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
        <Defs uid={uid} />
        <circle cx="200" cy="200" r="160" fill={`url(#gs-${uid})`} opacity="0.5" />
        <circle cx="260" cy="140" r="80" fill={`url(#g-${uid})`} opacity="0.12" />
        <circle cx="120" cy="260" r="60" fill="#00d2ff" opacity="0.08" />
      </svg>
    </div>
  );
}

export const categoryIllustrationMap = {
  Development: 'development',
  'AI Solutions': 'ai',
  'Business Software': 'business',
  Communication: 'communication',
  'Design & Marketing': 'design',
  Infrastructure: 'infrastructure',
};

export const statIllustrationMap = {
  'Projects Delivered': 'projects',
  'Happy Clients': 'clients',
  'Services Offered': 'services',
  'Support Available': 'support',
};

export const processIllustrationMap = {
  '01': 'discovery',
  '02': 'design',
  '03': 'development',
  '04': 'launch',
};

export const whyIllustrationMap = {
  'Quality Assured': 'quality',
  'On-Time Delivery': 'delivery',
  'Best Pricing': 'pricing',
  'Dedicated Support': 'support',
};
