'use client';
import React from 'react';
import { FeatureCard } from './FeatureCard';
import { FileEdit, Search, FolderTree, Clock } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: FileEdit,
      title: "Save Every DSA Question With a Clean Editor",
      description: "Write and save your solutions with syntax highlighting, code formatting, and rich text support. Never lose track of your problem-solving approaches."
    },
    {
      icon: Search,
      title: "Search & Filter by Tags (Arrays, DP, Trees…)",
      description: "Instantly find any problem using powerful search and smart filtering. Organize by difficulty, topic, company, or custom tags."
    },
    {
      icon: FolderTree,
      title: "Organize Problems Like a Pro",
      description: "Create collections, add notes, track progress, and build your personalized DSA knowledge base. Your solutions, your way."
    },
    {
      icon: Clock,
      title: "Revisit Notes Anytime, Anywhere",
      description: "Access your entire DSA library from any device. Cloud-synced and always available when you need to refresh your memory before interviews."
    }
  ];
  
  return (
    <section id="features" className="relative py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-morphism mb-6">
            <span className="text-[#34d2e0]">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-[#f5f5f5] mb-4">
            Everything You Need to Master{' '}
            <span className="text-gradient-cyan-teal">DSA</span>
          </h2>
          <p className="text-xl text-[#f5f5f5]/70 max-w-2xl mx-auto">
            Built by developers, for developers. AlgoKeep provides all the tools you need to build and maintain your personal DSA knowledge library.
          </p>
        </div>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant="glass"
            />
          ))}
        </div>
        
        {/* Bottom Decorative Element */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl h-px bg-linear-to-r from-transparent via-[#34d2e0] to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
