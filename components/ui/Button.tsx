import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

type ButtonVariant = 'primary' | 'secondary' | 'outline-primary' | 'outline-secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = BaseButtonProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string;
  external?: boolean;
};

const buttonClasses = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  fullWidth = false,
  className = ''
) => {
  return classNames(
    'btn',
    {
      'btn-primary': variant === 'primary',
      'btn-secondary': variant === 'secondary',
      'btn-outline-primary': variant === 'outline-primary',
      'btn-outline-secondary': variant === 'outline-secondary',
      'btn-ghost': variant === 'ghost',
      'btn-sm': size === 'sm',
      'btn-lg': size === 'lg',
      'w-100': fullWidth,
    },
    className
  );
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    loading = false,
    disabled = false,
    ...props
  }, ref) => {
    const classes = buttonClasses(variant, size, fullWidth, className);
    const isDisabled = loading || disabled;

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isDisabled}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
        )}
        {icon && iconPosition === 'left' && !loading && (
          <span className="me-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ms-2">{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({
    href,
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    icon,
    iconPosition = 'left',
    fullWidth = false,
    external = false,
    ...props
  }, ref) => {
    const classes = buttonClasses(variant, size, fullWidth, className);
    
    if (external) {
      return (
        <a
          ref={ref}
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {icon && iconPosition === 'left' && (
            <span className="me-2">{icon}</span>
          )}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="ms-2">{icon}</span>
          )}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className="me-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === 'right' && (
          <span className="ms-2">{icon}</span>
        )}
      </Link>
    );
  }
);

LinkButton.displayName = 'LinkButton';
