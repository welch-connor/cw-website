'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useState } from 'react';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';
import { LinkButton } from '@/components/ui/Button';

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
      className="bg-body-tertiary sticky-top shadow-sm" 
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{
        zIndex: 1030,
        transition: 'all 0.3s ease-in-out',
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(var(--bs-body-bg-rgb), 0.8)'
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
