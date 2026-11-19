import LegalPageLayout from '../components/LegalPageLayout';
import { contactInfo } from '../data/contact';

const sections = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    content: (
      <p>
        Websoftify (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This Privacy Policy
        explains how we collect, use, and safeguard information when you visit our website or contact us
        for services.
      </p>
    ),
  },
  {
    id: 'information-collected',
    number: '02',
    title: 'Information We Collect',
    content: (
      <>
        <p>We may collect the following information when you use our contact form or communicate with us:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary-400">
          <li>Name and email address</li>
          <li>Phone number (if provided)</li>
          <li>Service interest and project details</li>
          <li>Technical data such as browser type and IP address (via standard server logs)</li>
        </ul>
      </>
    ),
  },
  {
    id: 'how-we-use',
    number: '03',
    title: 'How We Use Your Information',
    content: (
      <>
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary-400">
          <li>Respond to enquiries and provide quotes</li>
          <li>Deliver software development and related services</li>
          <li>Improve our website and customer experience</li>
          <li>Send project updates and service-related communication</li>
        </ul>
      </>
    ),
  },
  {
    id: 'data-sharing',
    number: '04',
    title: 'Data Sharing',
    content: (
      <p>
        We do not sell your personal data. We may share information only with trusted service providers
        (such as hosting or email tools) required to operate our business, or when required by law.
      </p>
    ),
  },
  {
    id: 'data-security',
    number: '05',
    title: 'Data Security',
    content: (
      <p>
        We take reasonable measures to protect your information. However, no method of transmission over
        the internet is 100% secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: 'cookies',
    number: '06',
    title: 'Cookies',
    content: (
      <p>
        Our website may use cookies and similar technologies to improve functionality and analyze traffic.
        You can control cookies through your browser settings.
      </p>
    ),
  },
  {
    id: 'your-rights',
    number: '07',
    title: 'Your Rights',
    content: (
      <p>
        You may request access, correction, or deletion of your personal data by contacting us. We will
        respond to valid requests within a reasonable timeframe.
      </p>
    ),
  },
  {
    id: 'contact',
    number: '08',
    title: 'Contact Us',
    content: (
      <>
        <p>For privacy-related questions, contact:</p>
        <div className="rounded-xl border border-gray-800 bg-black/30 p-4">
          <p className="text-gray-200 font-semibold">{contactInfo.companyName}</p>
          <p>
            Email:{' '}
            <a href={`mailto:${contactInfo.businessEmail}`} className="text-primary-400 hover:underline">
              {contactInfo.businessEmail}
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href={contactInfo.phoneHref} className="text-primary-400 hover:underline">
              {contactInfo.phoneDisplay}
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      seo={{
        title: 'Privacy Policy | Websoftify',
        description:
          "Read Websoftify's privacy policy — how we collect, use, and protect your personal information.",
        keywords: 'websoftify privacy policy, data protection',
      }}
      badge="Legal"
      title="Privacy"
      titleHighlight="Policy"
      updated="August 2026"
      sections={sections}
      relatedLink="/terms-of-service"
      relatedLabel="Terms of Service"
    />
  );
}
