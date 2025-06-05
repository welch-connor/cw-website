// Common types used across the application

export interface NavLink {
  href: string;
  label: string;
  target?: string;
  rel?: string;
  className?: string;
  isButton?: boolean;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface SocialLink {
  href: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  ariaLabel: string;
}

export interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
}
