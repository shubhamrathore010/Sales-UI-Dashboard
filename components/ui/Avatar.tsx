
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  rank?: number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md', className = '', rank }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 rounded-[10px]',
    md: 'w-10 h-10 rounded-full',
    lg: 'w-11 h-11 rounded-[14px]',
  };

  return (
    <div className="relative inline-block">
      <img 
        src={src} 
        alt={alt} 
        className={`${sizeClasses[size]} object-cover border border-gray-100 shadow-sm ${className}`} 
      />
      {rank === 1 && (
        <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#E67E7E] rounded-full flex items-center justify-center text-[9px] text-white font-black border-2 border-white shadow-md">
          1
        </div>
      )}
    </div>
  );
};
