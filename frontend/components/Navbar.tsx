'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X, Code2, Github } from 'lucide-react';
import { Button } from './Button';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#preview', label: 'Workspace' },
  { href: '#built', label: 'How it’s built' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/[0.07] bg-black/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-cyan-teal transition-transform duration-300 group-hover:scale-105">
              <Code2 className="h-4.5 w-4.5 text-black" />
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-[#f5f5f5]">
              AlgoKeep
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] text-[#f5f5f5]/60 transition-colors hover:text-[#34d2e0]"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/HitanshuDev/algokeep"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#f5f5f5]/55 transition-colors hover:bg-white/5 hover:text-[#f5f5f5]"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="/login"
              className="rounded-lg px-3 py-2 text-[13.5px] text-[#f5f5f5]/75 transition-colors hover:text-[#f5f5f5]"
            >
              Sign in
            </a>
            <Button href="/signup" variant="tertiary" size="sm" className="text-[13.5px]">
              Get started
            </Button>
          </div>

          <button
            className="text-[#34d2e0] md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="space-y-1 border-t border-white/[0.07] py-4 md:hidden">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-[14px] text-[#f5f5f5]/70 hover:bg-white/5 hover:text-[#34d2e0]"
              >
                {l.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Button href="/login" variant="secondary" size="sm">
                Sign in
              </Button>
              <Button href="/signup" variant="tertiary" size="sm">
                Get started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
