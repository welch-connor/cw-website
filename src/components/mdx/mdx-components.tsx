import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import React from 'react';

// Reusable Alert component
const Alert: React.FC<{ 
  type?: 'info' | 'warning' | 'error' | 'success';
  children: React.ReactNode;
}> = ({ 
  type = 'info', 
  children 
}) => {
  const typeClasses = {
    info: 'bg-blue-100 text-blue-800 border-blue-300',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    error: 'bg-red-100 text-red-800 border-red-300',
    success: 'bg-green-100 text-green-800 border-green-300',
  };

  return (
    <div 
      className={`p-4 mb-4 border-l-4 rounded ${typeClasses[type]}`}
      role="alert"
    >
      {children}
    </div>
  );
};

// Custom components to be used in MDX files
export const mdxComponents: MDXComponents = {
  // Customize HTML elements
  h1: ({ children }) => <h1 className="display-5 fw-bold mb-4">{children}</h1>,
  h2: ({ children }) => <h2 className="h3 mt-5 mb-3">{children}</h2>,
  h3: ({ children }) => <h3 className="h4 mt-4 mb-2">{children}</h3>,
  p: ({ children }) => <p className="mb-3">{children}</p>,
  a: ({ href, children }) => (
    <Link href={href as string} className="text-primary hover:underline">
      {children}
    </Link>
  ),
  ul: ({ children }) => <ul className="mb-4 ps-4 list-disc">{children}</ul>,
  ol: ({ children }) => <ol className="mb-4 ps-4 list-decimal">{children}</ol>,
  li: ({ children }) => <li className="mb-2">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 my-4 text-gray-600 italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
      <code>{children}</code>
    </pre>
  ),
  // Custom components
  Alert,
  // Add more custom components as needed
};
