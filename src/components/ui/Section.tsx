'use client';

import { SectionProps } from '@/src/types';

export function Section({ 
  id, 
  title, 
  description, 
  children, 
  className = '',
  containerClass = '',
  ...props 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-5 ${className}`}
      {...props}
    >
      <div className={`container ${containerClass}`}>
        {(title || description) && (
          <div className="text-center mb-5">
            {title && <h2 className="section-title">{title}</h2>}
            {description && (
              <p className="lead text-muted">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
