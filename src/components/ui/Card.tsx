import React, { ReactNode } from 'react';
import classNames from 'classnames';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ 
  children, 
  className = '',
  hoverable = false,
  ...props 
}: CardProps) {
  const cardClasses = classNames(
    'p-4 rounded-3 h-100',
    'card', // Base card class for styling
    'border',
    'shadow-sm',
    'transition-all',
    'duration-300',
    {
      'hover:shadow': hoverable,
    },
    className
  );
  
  // No inline styles - using CSS variables from globals.css
  const cardStyle = {};

  return (
    <div 
      className={cardClasses}
      style={cardStyle}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export function CardTitle({ 
  children, 
  as: Tag = 'h3',
  className = 'h5 mb-3',
  ...props 
}: CardTitleProps) {
  const titleClasses = classNames(
    'h5',
    'mb-3',
    'text-body', // Use theme's body text color
    'dark:text-white', // Force white text in dark mode
    className
  );

  return (
    <Tag className={titleClasses} {...props}>
      {children}
    </Tag>
  );
}
