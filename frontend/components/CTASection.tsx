import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#000000] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-aurora absolute left-1/2 top-1/2 h-72 w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-cyan-teal opacity-[0.16] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="ring-gradient grain card-surface relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'linear-gradient(#34d2e0 1px, transparent 1px), linear-gradient(90deg, #34d2e0 1px, transparent 1px)',
                backgroundSize: '48px 48px',
                maskImage: 'radial-gradient(ellipse at center, #000, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, #000, transparent 70%)',
              }}
            />

            <div className="relative">
              <h2 className="display mx-auto max-w-3xl text-[clamp(2.1rem,4.6vw,3.5rem)] text-[#f5f5f5]">
                Stop re-solving problems you&apos;ve
                <span className="text-gradient-bright"> already solved</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-[#f5f5f5]/55">
                Create an account and start your library with the problem you solved today.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/signup" variant="tertiary" size="lg" className="group font-medium">
                  Create free account
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button
                  href="https://github.com/HitanshuDev/algokeep"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="lg"
                  className="font-medium"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Read the code
                </Button>
              </div>

              <p className="mt-7 font-mono text-[11.5px] text-[#f5f5f5]/30">
                Free · No credit card · Your notes stay yours
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
