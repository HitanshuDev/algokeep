'use client';

import React, { InputHTMLAttributes, forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, type, className = '', ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm text-[#f5f5f5]">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a8a8a8]">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            type={inputType}
            className={`
              w-full px-4 py-3 
              ${icon ? 'pl-12' : ''}
              ${isPassword ? 'pr-12' : ''}
              bg-[#0a0a0a] 
              border border-[#333333] 
              rounded-lg
              text-[#f5f5f5] 
              placeholder:text-[#666666]
              outline-none
              transition-all duration-200
              focus:border-[#34d2e0]
              focus:ring-2 
              focus:ring-[#34d2e0]/20
              focus:shadow-[0_0_20px_rgba(52,210,224,0.15)]
              hover:border-[#444444]
              ${error ? 'border-[#ef4444] focus:border-[#ef4444] focus:ring-[#ef4444]/20' : ''}
              ${className}
            `}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a8a8a8] hover:text-[#f5f5f5] transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
        {error && (
          <p className="mt-2 text-sm text-[#ef4444]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
