'use client';

import React from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'accent' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsButton extends BaseProps {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: '_self' | '_blank';
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-lg transition-all duration-300 cursor-pointer';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-[#f5f5f5] text-[#211f1e] hover:bg-[#e5e5e5] hover:shadow-lg',
    secondary:
      'bg-[#211f1e] text-[#f5f5f5] border border-[#34d2e0]/30 hover:border-[#34d2e0] hover:shadow-[0_0_20px_rgba(52,210,224,0.3)]',
    tertiary: 'bg-[#34d2e0] text-[#000000] hover:bg-[#2bc1cf] glow-cyan',
    accent: 'bg-[#229799] text-[#f5f5f5] hover:bg-[#1d8587] glow-teal',
    outline:
      'bg-transparent border-2 border-[#34d2e0] text-[#34d2e0] hover:bg-[#34d2e0]/10 hover:shadow-[0_0_20px_rgba(52,210,224,0.3)]',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  // 🔗 LINK BUTTON
  if ('href' in props) {
    return (
      <Link
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  // 🔘 NORMAL BUTTON
  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
