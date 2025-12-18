import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2, Code, Filter, Tags } from 'lucide-react';

export function InterfacePreviewSection() {
  return (
    <section id="preview" className="relative py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-6">
            <span className="text-[#34d2e0]">Interface</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[#f5f5f5] mb-4">
            Beautiful, Intuitive,{' '}
            <span className="text-gradient-cyan-teal">Developer-First</span>
          </h2>
          <p className="text-xl text-[#f5f5f5]/70 max-w-2xl mx-auto">
            A clean, distraction-free interface designed for maximum productivity. Focus on what matters - your code.
          </p>
        </div>
        
        {/* Main Preview Container */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-cyan-teal opacity-20 blur-3xl"></div>
          
          {/* Glass Container */}
          <div className="relative glass-morphism rounded-2xl p-2 glow-cyan">
            <div className="bg-[#211f1e] rounded-xl overflow-hidden">
              {/* Browser Mock Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#34d2e0]/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-[#f5f5f5]/60">app.algokeep.io</div>
              </div>
              
              {/* Interface Image */}
              <div className="relative">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwaW50ZXJmYWNlJTIwZGFya3xlbnwxfHx8fDE3NjU1MjEyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt="AlgoKeep Interface"
                  className="w-full h-auto"
                />
                
                {/* Annotation Overlays */}
                <div className="absolute top-8 left-8 flex items-center gap-2 glass-morphism px-4 py-2 rounded-lg">
                  <Code className="w-5 h-5 text-[#34d2e0]" />
                  <span className="text-[#f5f5f5]">Clean Code Editor</span>
                  <div className="w-2 h-2 rounded-full bg-[#34d2e0] animate-pulse"></div>
                </div>
                
                <div className="absolute top-1/3 right-8 flex items-center gap-2 glass-morphism px-4 py-2 rounded-lg">
                  <Filter className="w-5 h-5 text-[#34d2e0]" />
                  <span className="text-[#f5f5f5]">Smart Filtering</span>
                  <div className="w-2 h-2 rounded-full bg-[#34d2e0] animate-pulse"></div>
                </div>
                
                <div className="absolute bottom-8 left-8 flex items-center gap-2 glass-morphism px-4 py-2 rounded-lg">
                  <Tags className="w-5 h-5 text-[#34d2e0]" />
                  <span className="text-[#f5f5f5]">Custom Tags</span>
                  <div className="w-2 h-2 rounded-full bg-[#34d2e0] animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="glass-morphism p-6 rounded-xl">
            <CheckCircle2 className="w-8 h-8 text-[#34d2e0] mb-3" />
            <h3 className="text-[#f5f5f5] mb-2">Syntax Highlighting</h3>
            <p className="text-[#f5f5f5]/70">Support for 50+ programming languages with beautiful, customizable themes.</p>
          </div>
          
          <div className="glass-morphism p-6 rounded-xl">
            <CheckCircle2 className="w-8 h-8 text-[#34d2e0] mb-3" />
            <h3 className="text-[#f5f5f5] mb-2">Real-time Sync</h3>
            <p className="text-[#f5f5f5]/70">Your notes sync instantly across all devices. Work anywhere, anytime.</p>
          </div>
          
          <div className="glass-morphism p-6 rounded-xl">
            <CheckCircle2 className="w-8 h-8 text-[#34d2e0] mb-3" />
            <h3 className="text-[#f5f5f5] mb-2">Keyboard Shortcuts</h3>
            <p className="text-[#f5f5f5]/70">Blazing-fast navigation with vim-inspired keyboard shortcuts for power users.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
