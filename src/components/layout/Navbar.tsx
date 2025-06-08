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
      href: 'https://storage.googleapis.com/connor-welch-resume/resume.pdf', 
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

  return (
    <BsNavbar 
      expand="lg" 
      className={navbarClasses}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{
        zIndex: 1030,
        transition: 'all 0.3s ease-in-out',
        backdropFilter: 'blur(10px)',
        backgroundColor: isDarkMode 
          ? 'rgba(33, 37, 41, 0.95)' 
          : 'rgba(255, 255, 255, 0.95)'
      }}
    >
      <Container>
        <Link href="/" className="navbar-brand fw-bold">Connor Welch</Link>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks
              .filter(link => !link.isButton)
              .map((link) => (
                <Nav.Item key={link.href} className="d-flex align-items-center">
                  <Link
                    href={link.href}
                    className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                    onClick={handleNavLinkClick}
                  >
                    {link.label}
                  </Link>
                </Nav.Item>
              ))}
          </Nav>
          <div className="d-flex align-items-center gap-2">
            {navLinks
              .filter(link => link.isButton)
              .map((link) => (
                <LinkButton
                  key={link.href}
                  href={link.href}
                  variant={link.variant}
                  size={link.size}
                  onClick={handleNavLinkClick}
                  external={link.external}
                  className="ms-2"
                >
                  {link.label}
                </LinkButton>
              ))}
            <div className="vr d-none d-lg-flex mx-2"></div>
            <ThemeToggle />
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
