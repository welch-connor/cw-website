import React from 'react';

export interface AlertProps {
  type?: 'info' | 'warning' | 'error' | 'success';
  children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ 
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

export default Alert;
