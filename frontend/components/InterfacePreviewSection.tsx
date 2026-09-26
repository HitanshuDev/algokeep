import React from 'react';
import { AppMockup } from './AppMockup';
import { Reveal } from './Reveal';

const callouts = [
  {
    n: '01',
    title: 'Topic sidebar with live counts',
    body: 'Jump straight to a pattern and see how much coverage you have on it.',
  },
  {
    n: '02',
    title: 'Stackable filters',
    body: 'Combine search, difficulty and language — the result set narrows instantly.',
  },
  {
    n: '03',
    title: 'Code visible on the card',
    body: 'Recognise a solution from the grid without opening anything.',
  },
];

export function InterfacePreviewSection() {
  return (
    <section id="preview" className="grain relative overflow-hidden bg-[#000000] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-[#34d2e0]/8 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="eyebrow text-[10px] text-[#34d2e0]">The workspace</span>
            <h2 className="display-sm mt-4 text-[clamp(2rem,4vw,3rem)] text-[#f5f5f5]">
              Dense where it counts,
              <span className="text-gradient-bright"> quiet everywhere else</span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#f5f5f5]/55">
              One screen holds your whole library — filters on top, topics on the left, code on
              the cards.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-cyan-teal opacity-[0.1] blur-[70px]" />
            <div className="relative">
              <AppMockup />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {callouts.map((c, i) => (
            <Reveal key={c.n} delay={i * 70}>
              <div className="border-t border-white/[0.08] pt-5">
                <div className="font-mono text-[11px] text-[#229799]">{c.n}</div>
                <h3 className="mt-2 text-[14.5px] font-semibold text-[#f5f5f5]">{c.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[#f5f5f5]/50">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
