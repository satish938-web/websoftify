import { useTheme } from '../context/ThemeContext';

const LOGO_LIGHT = '/websoftify-logo.png';
const LOGO_DARK = '/logo2__2.png';

export default function Logo({ size, className = '', src }) {
  const { isDark } = useTheme();
  const logoSrc = src ?? (isDark ? LOGO_DARK : LOGO_LIGHT);

  return (
    <img
      src={logoSrc}
      alt="Websoftify"
      className={`object-contain w-auto ${className}`}
      {...(size != null ? { height: size, style: { maxHeight: size } } : {})}
    />
  );
}
