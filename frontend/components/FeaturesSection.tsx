import React from 'react';
import { FileEdit, Search, FolderTree, Clock, Star } from 'lucide-react';
import { Reveal } from './Reveal';

const secondary = [
  {
    icon: FolderTree,
    title: 'Organize by topic and difficulty',
    description:
      'Group solutions by pattern — sliding window, DP, graphs — and filter down to exactly the set you want to review.',
  },
  {
    icon: Star,
    title: 'Favourite the ones that matter',
    description: 'Flag the problems you keep forgetting and pull them up as a focused revision list.',
  },
  {
    icon: Clock,
    title: 'Available on every device',
    description: 'Your library lives on the server, not a laptop — open it from anywhere before an interview.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[#000000] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="eyebrow text-[10px] text-[#34d2e0]">Features</span>
            <h2 className="display-sm mt-4 text-[clamp(2rem,4vw,3rem)] text-[#f5f5f5]">
              Built for the way you
              <span className="text-gradient-bright"> actually revise</span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[#f5f5f5]/55">
              Not another note app with a code block. Every field exists because it&apos;s what
              you need when you re-open a problem six months later.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Hero tile — editor */}
          <Reveal className="lg:col-span-7">
            <div className="ring-gradient card-surface group h-full overflow-hidden rounded-2xl p-7">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-cyan-teal">
                <FileEdit className="h-5 w-5 text-black" />
              </div>
              <h3 className="display-sm text-[22px] text-[#f5f5f5]">
                Save the solution, not just the link
              </h3>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-[#f5f5f5]/55">
                Title, language, topic, difficulty and the code itself — captured in one pass so
                the note is still useful long after you&apos;ve forgotten the problem.
              </p>

              <div className="mt-6 rounded-xl border border-white/[0.07] bg-black/45 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <span className="rounded-md border border-green-400/25 bg-green-500/15 px-2 py-0.5 font-mono text-[10px] text-green-300">
                    Python
                  </span>
                  <span className="rounded-md bg-yellow-500/15 px-2 py-0.5 font-mono text-[10px] text-yellow-300">
                    Medium
                  </span>
                  <span className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-[10px] text-[#f5f5f5]/50">
                    Two Pointers
                  </span>
                </div>
                <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-[#d4d4d4]">
                  <span className="text-[#c792ea]">def</span>{' '}
                  <span className="text-[#82aaff]">twoSum</span>(nums, target):
                  {'\n  '}
                  seen = {'{}'}
                  {'\n  '}
                  <span className="text-[#c792ea]">for</span> i, v{' '}
                  <span className="text-[#c792ea]">in</span>{' '}
                  <span className="text-[#82aaff]">enumerate</span>(nums):
                  {'\n    '}
                  <span className="text-[#c792ea]">if</span> target - v{' '}
                  <span className="text-[#c792ea]">in</span> seen:
                  {'\n      '}
                  <span className="text-[#c792ea]">return</span> [seen[target - v], i]
                  {'\n    '}
                  seen[v] = i
                </pre>
              </div>
            </div>
          </Reveal>

          {/* Search tile */}
          <Reveal delay={80} className="lg:col-span-5">
            <div className="ring-gradient card-surface h-full rounded-2xl p-7">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#229799]">
                <Search className="h-5 w-5 text-black" />
              </div>
              <h3 className="display-sm text-[22px] text-[#f5f5f5]">Find it in a keystroke</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#f5f5f5]/55">
                Search across titles and stack filters on top — language, difficulty, topic — to
                narrow a large library down to the handful you care about.
              </p>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-black/45 px-3 py-2.5">
                  <Search className="h-3.5 w-3.5 text-[#f5f5f5]/35" />
                  <span className="font-mono text-[11.5px] text-[#f5f5f5]/45">
                    dp<span className="animate-caret text-[#34d2e0]">|</span>
                  </span>
                </div>
                {[
                  ['Coin Change — Min Coins', 'Java'],
                  ['Longest Common Subsequence', 'C++'],
                  ['House Robber II', 'Python'],
                ].map(([title, lang]) => (
                  <div
                    key={title}
                    className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.02] px-3 py-2"
                  >
                    <span className="truncate text-[11.5px] text-[#f5f5f5]/65">{title}</span>
                    <span className="ml-2 shrink-0 font-mono text-[9.5px] text-[#34d2e0]">
                      {lang}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Three supporting tiles */}
          {secondary.map((item, i) => (
            <Reveal key={item.title} delay={120 + i * 60} className="lg:col-span-4">
              <div className="ring-gradient card-surface h-full rounded-2xl p-6 transition-colors duration-300 hover:bg-white/[0.035]">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#34d2e0]/20 bg-[#34d2e0]/10">
                  <item.icon className="h-4.5 w-4.5 text-[#34d2e0]" />
                </div>
                <h3 className="text-[15px] font-semibold text-[#f5f5f5]">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#f5f5f5]/50">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
