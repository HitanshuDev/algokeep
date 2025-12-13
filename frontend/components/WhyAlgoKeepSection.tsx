import React from 'react';
import { TrendingUp, BookOpen, Zap, Target, Shield, Rocket } from 'lucide-react';

export function WhyAlgoKeepSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Boost Your Productivity",
      description: "Stop wasting time searching for that solution you wrote months ago. Find it in seconds with powerful search and filtering."
    },
    {
      icon: BookOpen,
      title: "Better Revision & Learning",
      description: "Review your solutions systematically. Track your progress, identify patterns, and strengthen weak areas before interviews."
    },
    {
      icon: Zap,
      title: "Faster Interview Prep",
      description: "Build your personal cheat sheet of DSA patterns. Quickly brush up on key concepts and approaches right before your interview."
    },
    {
      icon: Target,
      title: "Stay Organized",
      description: "No more scattered notes across multiple platforms. Keep everything in one place, beautifully organized and easily accessible."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your code is yours. Industry-standard encryption keeps your solutions safe and private. Export anytime, no lock-in."
    },
    {
      icon: Rocket,
      title: "Continuous Growth",
      description: "Watch your knowledge base grow over time. Celebrate milestones, track streaks, and visualize your DSA mastery journey."
    }
  ];
  
  return (
    <section id="why" className="relative py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-6">
            <span className="text-[#34d2e0]">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[#f5f5f5] mb-4">
            Why{' '}
            <span className="text-gradient-cyan-teal">AlgoKeep</span>?
          </h2>
          <p className="text-xl text-[#f5f5f5]/70 max-w-2xl mx-auto">
            Built to solve the real problems developers face when preparing for technical interviews and mastering DSA.
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="neomorphism p-8 rounded-2xl hover:scale-105 transition-all duration-300 h-full">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#229799] flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-[#000000]" />
                  </div>
                  {/* Decorative Circle */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-[#34d2e0]/50 rounded-full"></div>
                </div>
                
                {/* Content */}
                <h3 className="text-[#f5f5f5] mb-3">{benefit.title}</h3>
                <p className="text-[#f5f5f5]/70">{benefit.description}</p>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl bg-gradient-cyan-teal"></div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block glass-morphism p-8 rounded-2xl">
            <h3 className="text-2xl text-[#f5f5f5] mb-4">
              Join 5,000+ developers who trust AlgoKeep
            </h3>
            <p className="text-[#f5f5f5]/70 mb-6">
              Start building your DSA knowledge library today. Free forever for your first 100 problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-cyan-teal text-[#000000] rounded-lg hover:scale-105 transition-transform glow-cyan">
                Get Started Free
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-[#34d2e0] text-[#34d2e0] rounded-lg hover:bg-[#34d2e0]/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
