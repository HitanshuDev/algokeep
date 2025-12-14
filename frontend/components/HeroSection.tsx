import React from 'react';
import { Button } from './Button';
import { Code2, Sparkles, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000] pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#34d2e0]/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#229799]/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
        
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#34d2e0 1px, transparent 1px), linear-gradient(90deg, #34d2e0 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism">
              <Sparkles className="w-4 h-4 text-[#34d2e0]" />
              <span className="text-[#f5f5f5]/80">Your Personal DSA Knowledge Base</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#f5f5f5] leading-tight">
              Your Central Hub for{' '}
              <span className="text-gradient-cyan-teal">DSA Problem Solutions</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-[#f5f5f5]/70 max-w-xl">
              Store, organize, and revisit every coding problem you solve—never lose your hard-earned logic again.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href='/signup' variant="tertiary" size="lg" className="group">
                Start Now
                <Zap className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button href='/demo' variant="outline" size="lg">
                View Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div>
                <div className="text-3xl text-gradient-cyan-teal">10K+</div>
                <div className="text-[#f5f5f5]/60">Problems Stored</div>
              </div>
              <div>
                <div className="text-3xl text-gradient-cyan-teal">5K+</div>
                <div className="text-[#f5f5f5]/60">Active Users</div>
              </div>
              <div>
                <div className="text-3xl text-gradient-cyan-teal">99.9%</div>
                <div className="text-[#f5f5f5]/60">Uptime</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden glass-morphism p-1">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY1NTEyNDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Developer workspace"
                className="w-full h-auto rounded-2xl"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 glass-morphism p-4 rounded-xl glow-cyan">
                <Code2 className="w-8 h-8 text-[#34d2e0]" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-morphism p-4 rounded-xl">
                <div className="text-[#f5f5f5]">Save & Organize</div>
                <div className="text-[#34d2e0]">Instantly</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-24 h-24 border-2 border-[#34d2e0]/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-2 border-[#229799]/30 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
