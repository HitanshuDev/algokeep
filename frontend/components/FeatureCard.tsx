'use client';
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'glass' | 'neo';
}

export function FeatureCard({ icon: Icon, title, description, variant = 'glass' }: FeatureCardProps) {
  const cardStyles = variant === 'glass' 
    ? 'glass-morphism' 
    : 'neomorphism';
    
  return (
    <div className={`${cardStyles} p-6 rounded-xl hover:scale-105 transition-transform duration-300`}>
      <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[#229799] mb-4">
        <Icon className="w-7 h-7 text-black" />
      </div>
      <h3 className="text-[#f5f5f5] mb-3">{title}</h3>
      <p className="text-[#f5f5f5]/70">{description}</p>
    </div>
  );
}
