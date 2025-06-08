'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BsSunFill, BsMoonFill, BsCircleFill } from 'react-icons/bs';
import { Button } from './Button';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'ghost' | 'outline-secondary';
}

export function ThemeToggle({ 
  className = '',
  size = 'md',
  variant = 'outline-secondary'
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  if (!mounted) {
    return (
      <Button 
        variant={variant} 
        size={size}
        className={className}
        disabled
        aria-label="Loading theme"
      >
        <BsCircleFill className="opacity-50" />
      </Button>
    );
  }


  const currentTheme = resolvedTheme || 'light';
  const isDark = currentTheme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={className}
    >
      {isDark ? <BsSunFill /> : <BsMoonFill />}
    </Button>
  );
}
