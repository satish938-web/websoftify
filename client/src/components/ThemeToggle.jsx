import { HiMoon, HiSun } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ variant = 'dark' }) {
  const { isDark, toggleTheme } = useTheme();
  const onDarkNav = variant === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle-btn ${onDarkNav ? 'theme-toggle-btn-dark' : 'theme-toggle-btn-light'}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
    </button>
  );
}
