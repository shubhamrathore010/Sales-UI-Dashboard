
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => (
  <div className={`bg-white p-6 md:p-8 rounded-[24px] shadow-sm transition-all duration-300 ${className}`}>
    {children}
  </div>
);
