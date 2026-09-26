import React from 'react';
import { Reveal } from './Reveal';
import { GitBranch, Lock, Zap, Container, ArrowRight, ShieldCheck } from 'lucide-react';

const pipeline = [
  { label: 'git push', sub: 'master' },
  { label: 'GitHub Actions', sub: 'build + test' },
  { label: 'Docker Hub', sub: 'tagged images' },
  { label: 'EC2', sub: 'compose pull & up' },
];

const stack = [
  'Next.js 16',
  'TypeScript',
  'Redux Toolkit',
  'Reselect',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'Mongoose',
  'JWT',
  'bcrypt',
  'Docker',
  'Docker Compose',
  'GitHub Actions',
  'AWS EC2',
  'Nginx',
  'Certbot',
];

export function HowItsBuiltSection() {
  return (
    <section id="built" className="grain relative overflow-hidden bg-[#000000] py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[#229799]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="eyebrow text-[10px] text-[#34d2e0]">Under the hood</span>
            <h2 className="display-sm mt-4 text-[clamp(2rem,4vw,3rem)] text-[#f5f5f5]">
              Not a tutorial project.
              <br />
              <span className="text-gradient-bright">Shipped like production.</span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#f5f5f5]/55">
              Owned end to end — from the Redux selector layer to the TLS certificate on the
              box serving it.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* CI/CD — wide tile */}
          <Reveal className="lg:col-span-2">
            <div className="ring-gradient card-surface h-full rounded-2xl p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#34d2e0]/12">
                  <GitBranch className="h-4.5 w-4.5 text-[#34d2e0]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#f5f5f5]">
                    Zero-touch continuous deployment
                  </h3>
                  <p className="text-[12.5px] text-[#f5f5f5]/45">
                    No SSH, no manual builds. Merge and it&apos;s live.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                {pipeline.map((step, i) => (
                  <React.Fragment key={step.label}>
                    <div className="flex-1 rounded-lg border border-white/[0.07] bg-black/35 px-3 py-2.5 text-center">
                      <div className="font-mono text-[11.5px] text-[#34d2e0]">{step.label}</div>
                      <div className="mt-0.5 text-[10px] text-[#f5f5f5]/40">{step.sub}</div>
                    </div>
                    {i < pipeline.length - 1 && (
                      <ArrowRight className="mx-auto h-3.5 w-3.5 shrink-0 rotate-90 text-[#229799] sm:rotate-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <pre className="mt-5 overflow-x-auto rounded-lg bg-black/50 p-3.5 font-mono text-[10.5px] leading-relaxed text-[#f5f5f5]/60">
                <span className="text-[#5c6370]"># .github/workflows/deploy.yml</span>
                {'\n'}
                <span className="text-[#c792ea]">run</span>: docker compose pull && docker compose up -d
              </pre>
            </div>
          </Reveal>

          {/* Auth */}
          <Reveal delay={80}>
            <div className="ring-gradient card-surface h-full rounded-2xl p-7">
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#34d2e0]/12">
                <Lock className="h-4.5 w-4.5 text-[#34d2e0]" />
              </div>
              <h3 className="text-[15px] font-semibold text-[#f5f5f5]">
                Auth that scopes every query
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#f5f5f5]/50">
                bcrypt-hashed passwords, JWTs with a 7-day expiry, and middleware that pins
                every read to <code className="font-mono text-[#34d2e0]">req.user</code> — so
                one user can never read another&apos;s notes.
              </p>
              <div className="mt-5 flex items-center gap-2 rounded-lg border border-[#229799]/25 bg-[#229799]/8 px-3 py-2">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#34d2e0]" />
                <span className="text-[11px] text-[#f5f5f5]/60">
                  HTTPS end to end via Certbot, auto-renewed
                </span>
              </div>
            </div>
          </Reveal>

          {/* Perf */}
          <Reveal delay={40}>
            <div className="ring-gradient card-surface h-full rounded-2xl p-7">
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-[#34d2e0]/12">
                <Zap className="h-4.5 w-4.5 text-[#34d2e0]" />
              </div>
              <h3 className="text-[15px] font-semibold text-[#f5f5f5]">
                Filtering that doesn&apos;t re-render
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#f5f5f5]/50">
                Derived state runs through memoized Reselect selectors, so filtering a large
                library recomputes only when its inputs actually change.
              </p>
              <pre className="mt-5 overflow-x-auto rounded-lg bg-black/50 p-3.5 font-mono text-[10.5px] leading-relaxed">
                <span className="text-[#c792ea]">createSelector</span>
                <span className="text-[#f5f5f5]/60">(</span>
                {'\n  '}
                <span className="text-[#f5f5f5]/60">[selectNotes, selectFilters],</span>
                {'\n  '}
                <span className="text-[#82aaff]">filterNotes</span>
                {'\n'}
                <span className="text-[#f5f5f5]/60">)</span>
              </pre>
            </div>
          </Reveal>

          {/* Docker — wide tile */}
          <Reveal delay={120} className="lg:col-span-2">
            <div className="ring-gradient card-surface h-full rounded-2xl p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#34d2e0]/12">
                  <Container className="h-4.5 w-4.5 text-[#34d2e0]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#f5f5f5]">
                    Separate dev and prod containers
                  </h3>
                  <p className="text-[12.5px] text-[#f5f5f5]/45">
                    Hot-reload locally; immutable, pinned images in production.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/[0.07] bg-black/35 p-4">
                  <div className="font-mono text-[11px] text-[#f5f5f5]/70">
                    docker-compose.dev.yml
                  </div>
                  <ul className="mt-2.5 space-y-1.5 text-[11.5px] text-[#f5f5f5]/45">
                    <li>— Mounted volumes, live reload</li>
                    <li>— Mongo exposed for inspection</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-[#34d2e0]/20 bg-[#34d2e0]/[0.04] p-4">
                  <div className="font-mono text-[11px] text-[#34d2e0]">docker-compose.yml</div>
                  <ul className="mt-2.5 space-y-1.5 text-[11.5px] text-[#f5f5f5]/45">
                    <li>— No volumes, versioned tags</li>
                    <li>— Behind Nginx reverse proxy</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stack marquee */}
        <Reveal delay={80}>
          <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
            <div className="animate-marquee flex w-max gap-3">
              {[...stack, ...stack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="shrink-0 rounded-lg border border-white/[0.07] bg-white/[0.02] px-3.5 py-1.5 font-mono text-[11.5px] text-[#f5f5f5]/45"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
