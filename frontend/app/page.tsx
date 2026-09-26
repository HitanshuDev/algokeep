import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { InterfacePreviewSection } from '@/components/InterfacePreviewSection';
import { HowItsBuiltSection } from '@/components/HowItsBuiltSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f5]">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InterfacePreviewSection />
        <HowItsBuiltSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
