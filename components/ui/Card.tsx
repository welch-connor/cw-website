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
    {
      'bg-white shadow-sm': true,
      'transition-all duration-300 hover:shadow': hoverable,
    },
    className
  );

  return (
    <div className={cardClasses} {...props}>
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
  return (
    <Tag className={className} {...props}>
      {children}
    </Tag>
  );
}
