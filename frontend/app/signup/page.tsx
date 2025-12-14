'use client';
import React from 'react';
import { BrandingPanel } from '@/components/signup/branding-panel';
import { SignInForm } from '@/components/signup/sign-in-form';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] flex">
      {/* Left Panel - Branding (Desktop only) */}
      <BrandingPanel />

      {/* Right Panel - Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        {/* Mobile Logo - Only visible on mobile */}
        <div className="absolute top-8 left-6 lg:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#229799] to-[#34d2e0] shadow-[0_0_20px_rgba(34,151,153,0.4)] flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-white"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M8 7h6" />
                <path d="M8 11h8" />
                <path d="M8 15h6" />
              </svg>
            </div>
            <span className="text-[#f5f5f5]">AlgoKeep</span>
          </div>
        </div>

        {/* Sign In Form */}
        <SignInForm />
      </div>

      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-[#34d2e0] rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#229799] rounded-full animate-ping opacity-20 delay-500"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-[#34d2e0] rounded-full animate-ping opacity-20 delay-1000"></div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
}
