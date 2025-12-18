import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative py-20 bg-[#000000] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-cyan-teal opacity-20 blur-[100px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-morphism rounded-3xl p-12 md:p-16 text-center glow-cyan">
          {/* Decorative Elements */}
          <div className="absolute top-8 left-8 w-20 h-20 border-2 border-[#34d2e0]/30 rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 border-2 border-[#229799]/30 rounded-full"></div>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34d2e0]/10 border border-[#34d2e0]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#34d2e0]" />
            <span className="text-[#34d2e0]">Start Your DSA Journey Today</span>
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#f5f5f5] mb-6 max-w-4xl mx-auto">
            Start building your personal{' '}
            <span className="text-gradient-cyan-teal">DSA knowledge library</span>{' '}
            today
          </h2>
          
          {/* Description */}
          <p className="text-xl text-[#f5f5f5]/70 mb-10 max-w-2xl mx-auto">
            Join thousands of developers who are mastering DSA and acing their technical interviews with AlgoKeep.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-[#34d2e0] text-[#000000] rounded-lg hover:bg-[#2bc1cf] transition-all duration-300 glow-cyan flex items-center gap-2">
              Get Started - It's Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-[#34d2e0] text-[#34d2e0] rounded-lg hover:bg-[#34d2e0]/10 transition-colors">
              Schedule a Demo
            </button>
          </div>
          
          {/* Small Print */}
          <p className="text-[#f5f5f5]/50 mt-8">
            No credit card required • Free forever for first 100 problems • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
