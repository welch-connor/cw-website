'use client';

import { useEffect, useRef, useState, forwardRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import { LinkButton } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { ProfileImage } from '@/components/ui/ProfileImage';

// Animation helper functions
const useAnimateOnMount = (ref: React.RefObject<HTMLElement>, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
};

interface AnimatedElementProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  delay?: number;
  children: React.ReactNode;
}

const AnimatedElement = forwardRef<HTMLElement, AnimatedElementProps>(({ 
  as: Component = 'div', 
  className = '', 
  delay = 0, 
  children,
  ...props 
}, ref) => {
  const innerRef = useRef<HTMLElement>(null);
  const isVisible = useAnimateOnMount(innerRef, delay);
  
  // Use a callback ref to handle both forwarded ref and inner ref
  const setRef = (element: HTMLElement | null) => {
    // Update the inner ref
    if (innerRef.current !== element) {
      (innerRef as React.MutableRefObject<HTMLElement | null>).current = element;
    }
    
    // Handle the forwarded ref
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      // @ts-ignore - MutableRefObject is not assignable to RefObject
      ref.current = element;
    }
  };
  
  return (
    <Component
      ref={setRef}
      className={`${className} ${isVisible ? 'animate-enter' : 'animate-initial'}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
});

AnimatedElement.displayName = 'AnimatedElement';

export function Hero() {
  return (
    <Section 
      id="hero"
      className="hero-section d-flex align-items-center"
      containerClass="my-auto"
    >
      <Row className="align-items-center">
        <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
          <div className="d-flex flex-column h-100">
            <AnimatedElement as="h1" className="display-4 fw-bold mb-4">
              Howdy, I'm <span 
                className="text-primary"
                style={{
                  display: 'inline-block',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  transitionDelay: '300ms',
                }}
              >
                Connor
              </span>
            </AnimatedElement>
            
            <AnimatedElement as="h2" className="h3 text-muted mb-4" delay={100}>
              Business & Tech Strategy | Tech Execution
            </AnimatedElement>
            
            <AnimatedElement as="p" className="lead mb-4" delay={200}>
            I translate business strategy into scalable cloud, AI/ML, and data solutions to 
            deliver a strategic advantage.
            </AnimatedElement>
            
            <AnimatedElement 
              as="div" 
              className="d-flex gap-3 justify-content-center justify-content-lg-start"
              delay={300}
            >
              <LinkButton 
                href="https://storage.googleapis.com/cdub-web-data/resume/CWelch_Resume.pdf"
                variant="primary"
                size="lg"
                external
              >
                View My Resume
              </LinkButton>
              
              <LinkButton 
                href="mailto:connor.welch18@gmail.com"
                variant="outline-primary"
                size="lg"
              >
                Contact Me
              </LinkButton>
            </AnimatedElement>
          </div>
        </Col>
        
        <Col lg={6} className="text-center">
          <div 
            className="profile-image-container"
            style={{
              opacity: 0,
              transform: 'scale(0.9)',
              animation: 'fadeInScale 0.5s ease-out 0.2s forwards',
              width: '100%',
              maxWidth: '350px',
              margin: '0 auto',
            }}
          >
            <ProfileImage 
              src="/images/cw-profile.jpg"
              alt="Connor Welch"
              width={350}
              height={350}
              containerClassName="mx-auto"
            />
          </div>
        </Col>
      </Row>
      
      <style jsx global>{`
        .hero-section {
          min-height: 100vh;
          padding: 6rem 0;
          position: relative;
          overflow: hidden;
        }
        
        /* Animation keyframes */
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
          
          .animate-initial,
          .animate-enter {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </Section>
  );
}
