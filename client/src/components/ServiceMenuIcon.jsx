import { getServiceByTitle } from '../data/services';

export default function ServiceMenuIcon({ title, className = '' }) {
  const service = getServiceByTitle(title);
  const Icon = service?.icon;

  if (!Icon) return null;

  return (
    <span className={`service-menu-icon ${className}`} aria-hidden>
      <Icon />
    </span>
  );
}
