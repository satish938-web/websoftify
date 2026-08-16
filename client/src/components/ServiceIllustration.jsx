const gradientDefs = (
  <defs>
    <linearGradient id="svc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#9d00ff" />
      <stop offset="50%" stopColor="#0047ff" />
      <stop offset="100%" stopColor="#00d2ff" />
    </linearGradient>
    <linearGradient id="svc-grad-soft" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#0047ff" stopOpacity="0.15" />
      <stop offset="100%" stopColor="#00d2ff" stopOpacity="0.35" />
    </linearGradient>
    <filter id="svc-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

function SvgWrap({ children, viewBox = '0 0 200 200' }) {
  return (
    <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {gradientDefs}
      {children}
    </svg>
  );
}

const illustrations = {
  'ai-chatbots': (
    <SvgWrap>
      <rect x="20" y="30" width="160" height="120" rx="20" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <circle cx="70" cy="80" r="8" fill="url(#svc-grad)" />
      <circle cx="100" cy="80" r="8" fill="url(#svc-grad)" />
      <circle cx="130" cy="80" r="8" fill="url(#svc-grad)" />
      <path d="M55 110 Q100 130 145 110" stroke="url(#svc-grad)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="45" r="18" fill="url(#svc-grad)" filter="url(#svc-glow)" />
      <path d="M100 63 L100 75 M88 68 L100 75 L112 68" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="45" cy="55" r="6" fill="#00d2ff" opacity="0.6" />
      <circle cx="155" cy="55" r="6" fill="#9d00ff" opacity="0.6" />
    </SvgWrap>
  ),
  'ai-agents': (
    <SvgWrap>
      <rect x="60" y="40" width="80" height="70" rx="14" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <circle cx="85" cy="65" r="6" fill="url(#svc-grad)" />
      <circle cx="115" cy="65" r="6" fill="url(#svc-grad)" />
      <path d="M80 85 Q100 95 120 85" stroke="url(#svc-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="35" y="120" width="130" height="40" rx="10" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="1.5" />
      <path d="M55 140 L75 140 M95 140 L115 140 M135 140 L155 140" stroke="url(#svc-grad)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="100" cy="25" r="10" fill="url(#svc-grad)" />
      <path d="M100 35 L100 40 M100 40 L85 50 M100 40 L115 50" stroke="url(#svc-grad)" strokeWidth="2" />
    </SvgWrap>
  ),
  'whatsapp-ai': (
    <SvgWrap>
      <circle cx="100" cy="100" r="70" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <path
        d="M100 45 C72 45 50 67 50 95 C50 108 55 119 63 127 L55 155 L84 147 C91 150 95 151 100 151 C128 151 150 129 150 101 C150 73 128 45 100 45Z"
        fill="url(#svc-grad)"
        filter="url(#svc-glow)"
      />
      <path d="M78 95 C78 88 84 82 92 82 C96 82 100 84 102 87 C104 84 108 82 112 82 C120 82 126 88 126 95 C126 105 102 118 102 118 C102 118 78 105 78 95Z" fill="#fff" opacity="0.9" />
      <circle cx="145" cy="55" r="12" fill="#00d2ff" opacity="0.5" />
      <text x="141" y="59" fill="#fff" fontSize="10" fontWeight="bold">AI</text>
    </SvgWrap>
  ),
  'whatsapp-business-api': (
    <SvgWrap>
      <rect x="30" y="50" width="140" height="100" rx="16" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <path d="M70 90 C70 78 80 68 92 68 H108 C120 68 130 78 130 90 V110 H70 Z" fill="url(#svc-grad)" />
      <path d="M85 95 L95 105 L115 85" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="100" cy="130" r="8" fill="url(#svc-grad)" />
      <path d="M40 70 L55 70 M145 70 L160 70" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </SvgWrap>
  ),
  'custom-software-development': (
    <SvgWrap>
      <rect x="25" y="35" width="150" height="110" rx="12" fill="#0a0a12" stroke="url(#svc-grad)" strokeWidth="2" />
      <path d="M25 55 H175" stroke="url(#svc-grad)" strokeWidth="1.5" opacity="0.5" />
      <circle cx="40" cy="45" r="4" fill="#ff5f57" /><circle cx="52" cy="45" r="4" fill="#febc2e" /><circle cx="64" cy="45" r="4" fill="#28c840" />
      <path d="M45 80 L65 95 L45 110" stroke="url(#svc-grad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M75 110 L95 80" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" />
      <path d="M105 80 L125 110" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" />
      <rect x="130" y="75" width="30" height="35" rx="4" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="1.5" />
    </SvgWrap>
  ),
  'custom-software': (
    <SvgWrap>
      <polygon points="100,30 160,60 160,120 100,150 40,120 40,60" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <path d="M75 85 L95 105 L125 75" stroke="url(#svc-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="100" cy="100" r="35" fill="none" stroke="url(#svc-grad)" strokeWidth="1.5" opacity="0.4" />
    </SvgWrap>
  ),
  'web-application-development': (
    <SvgWrap>
      <rect x="30" y="40" width="140" height="100" rx="10" fill="#0a0a12" stroke="url(#svc-grad)" strokeWidth="2" />
      <rect x="30" y="40" width="140" height="22" rx="10" fill="url(#svc-grad)" opacity="0.3" />
      <circle cx="45" cy="51" r="3" fill="#00d2ff" /><circle cx="55" cy="51" r="3" fill="#0047ff" />
      <rect x="45" y="75" width="50" height="8" rx="2" fill="url(#svc-grad)" opacity="0.6" />
      <rect x="45" y="90" width="110" height="6" rx="2" fill="#334155" />
      <rect x="45" y="102" width="90" height="6" rx="2" fill="#334155" />
      <rect x="110" y="72" width="45" height="45" rx="6" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="1.5" />
    </SvgWrap>
  ),
  'mobile-app-development': (
    <SvgWrap>
      <rect x="65" y="25" width="70" height="130" rx="14" fill="#0a0a12" stroke="url(#svc-grad)" strokeWidth="2.5" />
      <rect x="72" y="45" width="56" height="90" rx="4" fill="url(#svc-grad-soft)" />
      <circle cx="100" cy="145" r="6" fill="url(#svc-grad)" />
      <rect x="85" y="32" width="30" height="4" rx="2" fill="#334155" />
      <rect x="80" y="58" width="40" height="5" rx="2" fill="url(#svc-grad)" opacity="0.7" />
      <rect x="80" y="70" width="40" height="30" rx="4" fill="url(#svc-grad)" opacity="0.3" />
    </SvgWrap>
  ),
  'ecommerce-development': (
    <SvgWrap>
      <path d="M60 70 L75 130 H145 L160 70 Z" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M50 70 H170" stroke="url(#svc-grad)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="85" cy="145" r="8" fill="url(#svc-grad)" /><circle cx="135" cy="145" r="8" fill="url(#svc-grad)" />
      <rect x="90" y="85" width="40" height="30" rx="4" fill="url(#svc-grad)" opacity="0.4" />
      <path d="M100 50 L110 65 H130 L115 80 L120 95 L100 85 L80 95 L85 80 L70 65 H90 Z" fill="url(#svc-grad)" filter="url(#svc-glow)" />
    </SvgWrap>
  ),
  'website-development': (
    <SvgWrap>
      <circle cx="100" cy="100" r="65" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <ellipse cx="100" cy="100" rx="65" ry="22" fill="none" stroke="url(#svc-grad)" strokeWidth="1.5" opacity="0.5" />
      <path d="M35 100 H165 M100 35 V165" stroke="url(#svc-grad)" strokeWidth="1.5" opacity="0.4" />
      <rect x="75" y="75" width="50" height="50" rx="8" fill="url(#svc-grad)" opacity="0.5" />
      <path d="M88 95 L98 105 L112 88" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </SvgWrap>
  ),
  'all-types-of-websites': (
    <SvgWrap>
      <rect x="25" y="55" width="55" height="70" rx="6" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="1.5" />
      <rect x="72" y="40" width="55" height="85" rx="6" fill="url(#svc-grad)" opacity="0.35" stroke="url(#svc-grad)" strokeWidth="1.5" />
      <rect x="120" y="60" width="55" height="65" rx="6" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="1.5" />
      <path d="M40 75 H65 M130 80 H165 M85 60 H115" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
    </SvgWrap>
  ),
  'website-repair': (
    <SvgWrap>
      <rect x="40" y="50" width="120" height="90" rx="10" fill="#0a0a12" stroke="url(#svc-grad)" strokeWidth="2" />
      <path d="M40 68 H160" stroke="url(#svc-grad)" strokeWidth="1" opacity="0.4" />
      <path d="M70 120 L90 100 L110 115 L130 90" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      <circle cx="130" cy="55" r="22" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <path d="M130 45 L130 65 M120 55 L140 55" stroke="url(#svc-grad)" strokeWidth="3" strokeLinecap="round" />
    </SvgWrap>
  ),
  'crm-software': (
    <SvgWrap>
      <circle cx="100" cy="55" r="22" fill="url(#svc-grad)" filter="url(#svc-glow)" />
      <circle cx="55" cy="120" r="18" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <circle cx="145" cy="120" r="18" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <circle cx="100" cy="155" r="16" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <path d="M88 72 L62 105 M112 72 L138 105 M100 77 L100 140" stroke="url(#svc-grad)" strokeWidth="2" opacity="0.6" />
    </SvgWrap>
  ),
  'crm-features': (
    <SvgWrap>
      <rect x="30" y="40" width="140" height="120" rx="12" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <rect x="45" y="100" width="15" height="45" rx="3" fill="url(#svc-grad)" />
      <rect x="70" y="80" width="15" height="65" rx="3" fill="url(#svc-grad)" opacity="0.7" />
      <rect x="95" y="60" width="15" height="85" rx="3" fill="url(#svc-grad)" opacity="0.85" />
      <rect x="120" y="70" width="15" height="75" rx="3" fill="url(#svc-grad)" opacity="0.6" />
      <path d="M45 55 L155 55" stroke="url(#svc-grad)" strokeWidth="1.5" opacity="0.5" />
    </SvgWrap>
  ),
  'erp-software': (
    <SvgWrap>
      <rect x="35" y="45" width="130" height="110" rx="12" fill="#0a0a12" stroke="url(#svc-grad)" strokeWidth="2" />
      <circle cx="65" cy="75" r="15" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="1.5" />
      <circle cx="100" cy="75" r="15" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="1.5" />
      <circle cx="135" cy="75" r="15" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="1.5" />
      <path d="M50 115 H150 M50 130 H150 M50 145 H120" stroke="url(#svc-grad)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <rect x="50" y="100" width="100" height="8" rx="2" fill="url(#svc-grad)" opacity="0.4" />
    </SvgWrap>
  ),
  'task-management': (
    <SvgWrap>
      <rect x="45" y="35" width="110" height="130" rx="10" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <path d="M60 65 L72 77 L95 54" stroke="url(#svc-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M105 65 H145" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 95 L72 107 L95 84" stroke="url(#svc-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M105 95 H145" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
      <path d="M60 125 L72 137 L95 114" stroke="url(#svc-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d="M105 125 H145" stroke="#64748b" strokeWidth="2" strokeLinecap="round" />
    </SvgWrap>
  ),
  'micro-gcc-teams': (
    <SvgWrap>
      <circle cx="70" cy="75" r="20" fill="url(#svc-grad)" opacity="0.8" />
      <circle cx="130" cy="75" r="20" fill="url(#svc-grad)" opacity="0.8" />
      <circle cx="100" cy="120" r="20" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <path d="M82 88 L92 108 M118 88 L108 108" stroke="url(#svc-grad)" strokeWidth="2" opacity="0.5" />
      <rect x="55" y="145" width="90" height="25" rx="6" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="1.5" />
      <path d="M70 157 H130" stroke="url(#svc-grad)" strokeWidth="2" strokeLinecap="round" />
    </SvgWrap>
  ),
  'ivr-system': (
    <SvgWrap>
      <path d="M70 130 C70 100 85 75 100 75 C115 75 130 100 130 130" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <rect x="85" y="130" width="30" height="25" rx="6" fill="url(#svc-grad)" />
      <path d="M55 90 Q100 40 145 90" stroke="url(#svc-grad)" strokeWidth="2" fill="none" opacity="0.5" />
      <circle cx="55" cy="90" r="8" fill="#00d2ff" opacity="0.6" />
      <circle cx="100" cy="55" r="8" fill="#0047ff" opacity="0.6" />
      <circle cx="145" cy="90" r="8" fill="#9d00ff" opacity="0.6" />
    </SvgWrap>
  ),
  'cloud-call-center': (
    <SvgWrap>
      <path d="M50 110 C50 85 70 65 100 65 C130 65 150 85 150 110" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <ellipse cx="100" cy="55" rx="45" ry="25" fill="url(#svc-grad)" opacity="0.35" stroke="url(#svc-grad)" strokeWidth="2" />
      <path d="M75 55 Q100 35 125 55" stroke="#fff" strokeWidth="1.5" opacity="0.4" fill="none" />
      <circle cx="100" cy="95" r="12" fill="url(#svc-grad)" filter="url(#svc-glow)" />
    </SvgWrap>
  ),
  'dialer-software': (
    <SvgWrap>
      <rect x="55" y="45" width="90" height="110" rx="14" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <circle cx="100" cy="85" r="25" fill="url(#svc-grad)" opacity="0.5" />
      <path d="M100 70 L100 100 M85 85 L115 85" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x={68 + i * 16} y="120" width="10" height="22" rx="3" fill="url(#svc-grad)" opacity={0.4 + i * 0.12} />
      ))}
    </SvgWrap>
  ),
  'ui-ux-web-design': (
    <SvgWrap>
      <rect x="35" y="45" width="80" height="110" rx="8" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <circle cx="75" cy="80" r="18" fill="url(#svc-grad)" opacity="0.4" />
      <rect x="125" y="55" width="40" height="40" rx="20" fill="url(#svc-grad)" />
      <rect x="125" y="105" width="40" height="40" rx="6" fill="#0047ff" opacity="0.6" />
      <path d="M145 45 L155 65 L135 65 Z" fill="#00d2ff" opacity="0.7" />
    </SvgWrap>
  ),
  'seo-digital-growth': (
    <SvgWrap>
      <path d="M40 140 L70 110 L100 120 L130 80 L160 60" stroke="url(#svc-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="160" cy="60" r="8" fill="url(#svc-grad)" filter="url(#svc-glow)" />
      <path d="M145 45 L160 60 L175 45" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="40" y="145" width="120" height="8" rx="2" fill="#334155" opacity="0.5" />
    </SvgWrap>
  ),
  'hosting-services': (
    <SvgWrap>
      <rect x="45" y="50" width="110" height="25" rx="4" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <rect x="45" y="85" width="110" height="25" rx="4" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <rect x="45" y="120" width="110" height="25" rx="4" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <circle cx="60" cy="62" r="4" fill="#28c840" /><circle cx="60" cy="97" r="4" fill="#28c840" /><circle cx="60" cy="132" r="4" fill="#28c840" />
      <path d="M75 62 H140 M75 97 H130 M75 132 H135" stroke="url(#svc-grad)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </SvgWrap>
  ),
  'ssl-certificates': (
    <SvgWrap>
      <rect x="60" y="90" width="80" height="70" rx="8" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <path d="M100 35 C80 35 70 50 70 65 V80 H130 V65 C130 50 120 35 100 35Z" fill="url(#svc-grad)" filter="url(#svc-glow)" />
      <circle cx="100" cy="58" r="8" fill="#0a0a12" />
      <path d="M85 115 L95 125 L115 105" stroke="url(#svc-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </SvgWrap>
  ),
  'maintenance-support': (
    <SvgWrap>
      <circle cx="100" cy="100" r="55" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
      <path d="M100 55 L100 100 L130 115" stroke="url(#svc-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="100" cy="100" r="6" fill="url(#svc-grad)" />
      <path d="M145 60 L155 50 M155 60 L145 50" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="55" cy="145" r="12" fill="url(#svc-grad)" opacity="0.5" />
    </SvgWrap>
  ),
};

const defaultIllustration = (
  <SvgWrap>
    <circle cx="100" cy="100" r="60" fill="url(#svc-grad-soft)" stroke="url(#svc-grad)" strokeWidth="2" />
    <path d="M70 100 L90 120 L130 80" stroke="url(#svc-grad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </SvgWrap>
);

export default function ServiceIllustration({ slug, variant = 'hero', className = '', title = '' }) {
  const art = illustrations[slug] || defaultIllustration;

  return (
    <div
      className={`service-illustration service-illustration--${variant} ${className}`}
      role={title ? 'img' : undefined}
      aria-label={title || undefined}
    >
      {art}
    </div>
  );
}

export function ServiceIllustrationIcon({ slug, className = '' }) {
  return <ServiceIllustration slug={slug} variant="icon" className={className} />;
}
