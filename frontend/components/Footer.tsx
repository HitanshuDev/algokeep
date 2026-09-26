import React from 'react';
import { Code2, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#000000]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-cyan-teal">
                <Code2 className="h-4.5 w-4.5 text-black" />
              </div>
              <span className="text-[15px] font-semibold tracking-tight text-[#f5f5f5]">
                AlgoKeep
              </span>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[#f5f5f5]/45">
              A DSA notes manager built and deployed end to end — Next.js, Express, MongoDB,
              Docker, and a GitHub Actions pipeline onto AWS EC2.
            </p>
          </div>

          <div className="flex gap-14">
            <div>
              <h4 className="eyebrow text-[10px] text-[#f5f5f5]/35">Product</h4>
              <ul className="mt-4 space-y-2.5">
                {[
                  ['#features', 'Features'],
                  ['#preview', 'Workspace'],
                  ['#built', 'How it’s built'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[13.5px] text-[#f5f5f5]/55 transition-colors hover:text-[#34d2e0]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="eyebrow text-[10px] text-[#f5f5f5]/35">Account</h4>
              <ul className="mt-4 space-y-2.5">
                {[
                  ['/login', 'Sign in'],
                  ['/signup', 'Create account'],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-[13.5px] text-[#f5f5f5]/55 transition-colors hover:text-[#34d2e0]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-7 md:flex-row">
          <p className="text-[12.5px] text-[#f5f5f5]/35">
            Built by{' '}
            <span className="text-[#f5f5f5]/60">Hitanshu Khandelwal</span> · MIT Licensed
          </p>

          <div className="flex items-center gap-1">
            <a
              href="https://github.com/HitanshuDev/algokeep"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#f5f5f5]/45 transition-colors hover:bg-white/5 hover:text-[#34d2e0]"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/hitanshu-khandelwal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#f5f5f5]/45 transition-colors hover:bg-white/5 hover:text-[#34d2e0]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
