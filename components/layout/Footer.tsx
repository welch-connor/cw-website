'use client';

import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { socialLinks } from '@/data/social';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; {currentYear} Connor Welch. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <div className="social-links">
              {socialLinks.map(({ href, icon: Icon, ariaLabel }, index) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light me-3"
                  aria-label={ariaLabel}
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
