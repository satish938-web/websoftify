import { useTheme } from '../context/ThemeContext';

export default function BrandName({ className = '', size = 'md', onDark = false }) {
  const { isDark } = useTheme();
  const sizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl',
  };

  const webClass = onDark || isDark ? 'text-white' : 'text-slate-900';

  return (
    <span className={`font-bold tracking-tight ${sizes[size] || sizes.md} ${className}`}>
      <span className={webClass}>Web</span>
      <span className="gradient-text">softify</span>
    </span>
  );
}
