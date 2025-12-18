'use client';

import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from './Button';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-[#34d2e0]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-cyan-teal flex items-center justify-center">
              <Code2 className="w-6 h-6 text-[#000000]" />
            </div>
            <span className="text-[#f5f5f5]">AlgoKeep</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[#f5f5f5]/80 hover:text-[#34d2e0] transition-colors">Features</a>
            <a href="#preview" className="text-[#f5f5f5]/80 hover:text-[#34d2e0] transition-colors">Preview</a>
            <a href="#why" className="text-[#f5f5f5]/80 hover:text-[#34d2e0] transition-colors">Why AlgoKeep</a>
            <a href="#testimonials" className="text-[#f5f5f5]/80 hover:text-[#34d2e0] transition-colors">Testimonials</a>
          </div>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button href='/login' variant="outline" size="sm">Sign In</Button>
            <Button variant="tertiary" size="sm">Get Started</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#34d2e0]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#features" className="block text-[#f5f5f5]/80 hover:text-[#34d2e0] transition-colors">Features</a>
            <a href="#preview" className="block text-[#f5f5f5]/80 hover:text-[#34d2e0] transition-colors">Preview</a>
            <a href="#why" className="block text-[#f5f5f5]/80 hover:text-[#34d2e0] transition-colors">Why AlgoKeep</a>
            <a href="#testimonials" className="block text-[#f5f5f5]/80 hover:text-[#34d2e0] transition-colors">Testimonials</a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" size="sm">Sign In</Button>
              <Button variant="tertiary" size="sm">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
