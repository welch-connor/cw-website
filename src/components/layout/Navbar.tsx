'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/src/components/ui/theme-toggle';
import { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';
import { LinkButton } from '@/src/components/ui/Button';
import classNames from 'classnames';

interface NavLink {
  href: string;
  label: string;
  variant?: 'primary' | 'outline-primary' | 'secondary' | 'outline-secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isButton?: boolean;
  external?: boolean;
}

export function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Listen for theme changes
  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(html.classList.contains('dark'));
        }
      });
    });

    // Initial check
    setIsDarkMode(html.classList.contains('dark'));

    // Start observing
    observer.observe(html, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const navbarClasses = classNames(
    'sticky-top shadow-sm',
    'navbar',
    'navbar-expand-lg',
    {
      'navbar-dark': isDarkMode,
      'navbar-light': !isDarkMode,
      'bg-dark': isDarkMode,
      'bg-body': !isDarkMode,
    }
  );

  const navLinks: NavLink[] = [
    { 
      href: '/blog', 
      label: 'Blog',
      variant: 'ghost',
      size: 'sm'
    },
    { 
      href: 'https://storage.googleapis.com/cdub-web-data/resume/CWelch_Resume.pdf', 
      label: 'Resume',
      variant: 'primary',
      size: 'sm',
      isButton: true,
      external: true
    },
    { 
      href: 'mailto:connor.welch18@gmail.com', 
      label: 'Contact',
      variant: 'outline-primary',
      size: 'sm',
      isButton: true
    }
  ];

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  // Separate navigation items
  const blogLink = navLinks.find(link => !link.isButton);
  const actionButtons = navLinks.filter(link => link.isButton);

  return (
    <div className={navbarClasses} style={{
      zIndex: 1030,
      transition: 'all 0.3s ease-in-out',
      backdropFilter: 'blur(10px)',
      backgroundColor: isDarkMode 
        ? 'rgba(33, 37, 41, 0.95)' 
        : 'rgba(255, 255, 255, 0.95)'
    }}>
      <Container className="px-3">
        <div className="d-flex w-100 align-items-center py-2">
          <Link href="/" className="navbar-brand fw-bold me-4">Connor Welch</Link>
          
          {/* Desktop Navigation - Only show on lg screens and up */}
          <div className="d-none d-lg-flex w-100">
            {/* Blog Link */}
            <Nav className="me-auto">
              {blogLink && (
                <Nav.Item>
                  <Link
                    href={blogLink.href}
                    className={`nav-link ${pathname === blogLink.href ? 'active' : ''} px-2`}
                  >
                    {blogLink.label}
                  </Link>
                </Nav.Item>
              )}
            </Nav>
            
            {/* Action Buttons */}
            <div className="d-flex align-items-center gap-2">
              {actionButtons.map((button) => (
                <LinkButton
                  key={button.href}
                  href={button.href}
                  variant={button.variant}
                  size="sm"
                  external={button.external}
                  className="flex-shrink-0"
                >
                  {button.label}
                </LinkButton>
              ))}
              <div className="vr mx-2 d-none d-lg-block"></div>
              <div className="ms-lg-0">
                <ThemeToggle />
              </div>
            </div>
          </div>
          
          {/* Mobile Toggle - Only show on screens smaller than lg */}
          <div className="d-flex align-items-center ms-auto d-lg-none">
            <button 
              className="navbar-toggler border-0"
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only show on screens smaller than lg */}
        {expanded && (
          <div className="d-lg-none py-3">
            <div className="d-flex flex-wrap align-items-center gap-2">
              {/* Blog Link - Mobile */}
              {blogLink && (
                <Link
                  href={blogLink.href}
                  className={`btn btn-link text-decoration-none ${pathname === blogLink.href ? 'active' : ''} px-2 py-2`}
                  onClick={handleNavLinkClick}
                >
                  {blogLink.label}
                </Link>
              )}
              
              {/* Action Buttons - Mobile */}
              {actionButtons.map((button) => (
                <LinkButton
                  key={`mobile-${button.href}`}
                  href={button.href}
                  variant={button.variant}
                  size="sm"
                  external={button.external}
                  className="flex-shrink-0"
                  onClick={handleNavLinkClick}
                >
                  {button.label}
                </LinkButton>
              ))}
              
              <div className="vr mx-2 d-lg-none"></div>
              <div className="ms-lg-0">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
