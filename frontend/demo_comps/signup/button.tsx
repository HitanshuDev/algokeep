import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = `
    px-6 py-3 
    rounded-lg 
    font-medium
    transition-all duration-200
    flex items-center justify-center gap-2
    outline-none
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-offset-[#000000]
    disabled:opacity-50 
    disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;

  const variants = {
    primary: `
      bg-[#229799] 
      text-white 
      hover:bg-[#1a7577]
      focus:ring-[#229799]/50
      shadow-[0_0_20px_rgba(34,151,153,0.3)]
      hover:shadow-[0_0_30px_rgba(34,151,153,0.5)]
      active:scale-[0.98]
    `,
    secondary: `
      bg-[#211f1e] 
      text-[#f5f5f5] 
      border border-[#333333]
      hover:bg-[#2a2826]
      hover:border-[#444444]
      focus:ring-[#34d2e0]/50
      active:scale-[0.98]
    `,
    outline: `
      bg-transparent 
      text-[#f5f5f5] 
      border border-[#333333]
      hover:bg-[#211f1e]
      hover:border-[#444444]
      focus:ring-[#34d2e0]/50
      active:scale-[0.98]
    `,
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
