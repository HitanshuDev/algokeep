import React from 'react';
import { Button } from './Button';
import { ArrowRight, Github, Terminal } from 'lucide-react';
import { AppMockup } from './AppMockup';
import { Reveal } from './Reveal';

const proof = [
  { k: 'Next.js 16', v: 'App Router + RSC' },
  { k: 'Dockerized', v: 'Two services, one command' },
  { k: 'CI/CD', v: 'Push to master → live on EC2' },
];

export function HeroSection() {
  return (
    <section className="grain relative overflow-hidden bg-[#000000] pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Aurora field */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-aurora absolute -top-40 left-[5%] h-[34rem] w-[34rem] rounded-full bg-[#34d2e0]/18 blur-[130px]" />
        <div
          className="animate-aurora absolute -bottom-52 right-[2%] h-[32rem] w-[32rem] rounded-full bg-[#229799]/18 blur-[130px]"
          style={{ animationDelay: '-8s' }}
        />
        {/* Perspective grid that fades toward the horizon */}
        <div
          className="absolute inset-x-0 top-0 h-[70%] opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#34d2e0 1px, transparent 1px), linear-gradient(90deg, #34d2e0 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, #000 30%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-16">
          {/* Copy */}
          <div>
            <Reveal>
              <div className="ring-gradient inline-flex items-center gap-2.5 rounded-full bg-white/[0.03] px-3.5 py-1.5 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d2e0] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#34d2e0]" />
                </span>
                <span className="text-[12.5px] text-[#f5f5f5]/75">
                  Live in production on AWS EC2
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display mt-7 text-[clamp(2.75rem,6.2vw,4.75rem)] text-[#f5f5f5]">
                Every problem you&apos;ve solved.
                <br />
                <span className="text-gradient-bright">One search away.</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[#f5f5f5]/60">
                AlgoKeep is the notebook for your DSA brain — store solutions with code, tag
                them by topic and difficulty, then find any pattern you&apos;ve ever written in
                a keystroke.
              </p>
            </Reveal>

            <Reveal delay={210}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/signup" variant="tertiary" size="lg" className="group font-medium">
                  Start building your library
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
                  View source
                </Button>
              </div>
            </Reveal>

            {/* Honest engineering proof, not invented metrics */}
            <Reveal delay={280}>
              <div className="mt-12 border-t border-white/[0.07] pt-7">
                <div className="mb-4 flex items-center gap-2 text-[#f5f5f5]/35">
                  <Terminal className="h-3.5 w-3.5" />
                  <span className="eyebrow text-[10px]">How it ships</span>
                </div>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-3">
                  {proof.map((p) => (
                    <div key={p.k}>
                      <dt className="font-mono text-[13px] font-medium text-[#34d2e0]">{p.k}</dt>
                      <dd className="mt-1 text-[12.5px] leading-snug text-[#f5f5f5]/45">{p.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          {/* Product shot — rendered, not screenshotted */}
          <Reveal delay={260} className="relative">
            <div className="absolute -inset-8 bg-gradient-cyan-teal opacity-[0.12] blur-[80px]" />
            <div className="animate-float relative [perspective:1600px]">
              <div className="transition-transform duration-700 ease-out lg:[transform:rotateY(-7deg)_rotateX(3deg)] lg:hover:[transform:rotateY(-2deg)_rotateX(1deg)]">
                <AppMockup />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
