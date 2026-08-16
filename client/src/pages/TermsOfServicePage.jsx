import LegalPageLayout from '../components/LegalPageLayout';
import { contactInfo } from '../data/contact';

const sections = [
  {
    id: 'agreement',
    number: '01',
    title: 'Agreement',
    content: (
      <p>
        By accessing the Websoftify website or using our services, you agree to these Terms of Service.
        If you do not agree, please do not use our website or services.
      </p>
    ),
  },
  {
    id: 'services',
    number: '02',
    title: 'Services',
    content: (
      <p>
        Websoftify provides software development services including websites, mobile applications, CRM,
        ERP, AI solutions, hosting, and related digital services. Scope, timeline, and pricing for each
        project are defined in a separate proposal or agreement.
      </p>
    ),
  },
  {
    id: 'client-responsibilities',
    number: '03',
    title: 'Client Responsibilities',
    content: (
      <>
        <p>Clients agree to:</p>
        <ul className="list-disc pl-5 space-y-2 marker:text-primary-400">
          <li>Provide accurate project requirements and timely feedback</li>
          <li>Supply content, credentials, and assets needed for delivery</li>
          <li>Make payments as per the agreed schedule</li>
          <li>Use delivered software in compliance with applicable laws</li>
        </ul>
      </>
    ),
  },
  {
    id: 'payments-refunds',
    number: '04',
    title: 'Payments & Refunds',
    content: (
      <p>
        Payment terms are specified in each project quote. Work begins after agreed advance payment unless
        otherwise stated. Refunds, if applicable, depend on project stage and are handled case-by-case as
        per the signed agreement.
      </p>
    ),
  },
  {
    id: 'intellectual-property',
    number: '05',
    title: 'Intellectual Property',
    content: (
      <p>
        Upon full payment, clients receive ownership or license rights as defined in the project agreement.
        Websoftify retains the right to showcase completed work in its portfolio unless a confidentiality
        agreement states otherwise.
      </p>
    ),
  },
  {
    id: 'liability',
    number: '06',
    title: 'Limitation of Liability',
    content: (
      <p>
        Websoftify is not liable for indirect, incidental, or consequential damages arising from use of our
        website or services. Our total liability is limited to the amount paid for the specific service in
        question.
      </p>
    ),
  },
  {
    id: 'website-use',
    number: '07',
    title: 'Website Use',
    content: (
      <p>
        You may not misuse our website, attempt unauthorized access, copy content without permission, or use
        our services for unlawful purposes.
      </p>
    ),
  },
  {
    id: 'changes',
    number: '08',
    title: 'Changes to Terms',
    content: (
      <p>
        We may update these terms from time to time. Continued use of the website after changes constitutes
        acceptance of the updated terms.
      </p>
    ),
  },
  {
    id: 'contact',
    number: '09',
    title: 'Contact',
    content: (
      <>
        <p>For questions about these terms, contact:</p>
        <div className="rounded-xl border border-gray-800 bg-black/30 p-4">
          <p className="text-gray-200 font-semibold">{contactInfo.name}</p>
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

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      seo={{
        title: 'Terms of Service | Websoftify',
        description:
          'Websoftify terms of service — rules and conditions for using our website and software development services.',
        keywords: 'websoftify terms of service, service agreement',
        canonical: 'https://websoftify.com/terms-of-service',
      }}
      badge="Legal"
      title="Terms of"
      titleHighlight="Service"
      updated="August 2026"
      sections={sections}
      relatedLink="/privacy-policy"
      relatedLabel="Privacy Policy"
    />
  );
}
