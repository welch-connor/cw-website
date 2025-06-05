import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { ClientLayout } from './client-layout';
import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

export const metadata: Metadata = {
  title: 'Connor Welch | Cloud and AI',
  description: 'Personal portfolio of Connor Welch - Tech strategist and AI/ML Engineer.',
  keywords: ['Tech Strategy','AI/ML','AWS','GCP','Azure','Portfolio'],
  authors: [{ name: 'Connor Welch' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://conwelch.com',
    title: 'Connor Welch | Cloud and AI',
    description: 'Personal portfolio of Connor Welch - Tech strategist and AI/ML Engineer.',
    siteName: 'Connor Welch',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-vh-100 d-flex flex-column">
        <ClientLayout>
          {children}
        </ClientLayout>
        
        {/* Bootstrap JS Bundle with Popper */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
