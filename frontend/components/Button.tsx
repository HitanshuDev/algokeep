'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg transition-all duration-300 cursor-pointer';
  
  const variants = {
    primary: 'bg-[#f5f5f5] text-[#211f1e] hover:bg-[#e5e5e5] hover:shadow-lg',
    secondary: 'bg-[#211f1e] text-[#f5f5f5] border border-[#34d2e0]/30 hover:border-[#34d2e0] hover:shadow-[0_0_20px_rgba(52,210,224,0.3)]',
    tertiary: 'bg-[#34d2e0] text-[#000000] hover:bg-[#2bc1cf] glow-cyan',
    accent: 'bg-[#229799] text-[#f5f5f5] hover:bg-[#1d8587] glow-teal',
    outline: 'bg-transparent border-2 border-[#34d2e0] text-[#34d2e0] hover:bg-[#34d2e0]/10 hover:shadow-[0_0_20px_rgba(52,210,224,0.3)]',
  };
  
  const sizes = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
