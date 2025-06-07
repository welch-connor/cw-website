'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useEffect, useState } from 'react';

// Apply theme classes to the html element
function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Ensure theme is set in localStorage
    if (typeof window !== 'undefined' && !localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'system');
    }
    
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!isMounted || typeof document === 'undefined') return;
    
    const root = document.documentElement;
    
    // Remove any existing theme classes
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    if (resolvedTheme) {
      root.classList.add(resolvedTheme);
      root.setAttribute('data-theme', resolvedTheme);
      
      // Add theme class to body as well for better specificity
      document.body.classList.remove('light', 'dark');
      document.body.classList.add(resolvedTheme);
    }
    
    // Add a class to the body to enable transitions after initial load
    document.body.classList.add('theme-loaded');
    
    return () => {
      document.body.classList.remove('theme-loaded');
    };
  }, [resolvedTheme, isMounted]);

  if (!isMounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
}

export function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem={true}
      enableColorScheme={true}
      disableTransitionOnChange={false}
      storageKey="theme"
    >
      <ThemeWrapper>
        <Navbar />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default ClientLayout;