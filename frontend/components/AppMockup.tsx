import React from 'react';
import { Star, Search, LayoutGrid, Plus, Hash, Heart, FolderTree, Code2 } from 'lucide-react';

const langStyles: Record<string, string> = {
  'C++': 'bg-blue-500/15 text-blue-300 border-blue-400/25',
  Python: 'bg-green-500/15 text-green-300 border-green-400/25',
  JavaScript: 'bg-yellow-500/15 text-yellow-300 border-yellow-400/25',
  Java: 'bg-orange-500/15 text-orange-300 border-orange-400/25',
};

const diffStyles: Record<string, string> = {
  Easy: 'bg-green-500/15 text-green-300',
  Medium: 'bg-yellow-500/15 text-yellow-300',
  Hard: 'bg-red-500/15 text-red-300',
};

type MockNote = {
  title: string;
  topic: string;
  lang: keyof typeof langStyles;
  diff: keyof typeof diffStyles;
  fav?: boolean;
  code: React.ReactNode;
};

const k = (s: string) => <span className="text-[#c792ea]">{s}</span>;
const f = (s: string) => <span className="text-[#82aaff]">{s}</span>;
const n = (s: string) => <span className="text-[#f78c6c]">{s}</span>;
const c = (s: string) => <span className="text-[#5c6370]">{s}</span>;

const notes: MockNote[] = [
  {
    title: 'Longest Substring Without Repeat',
    topic: 'Sliding Window',
    lang: 'Python',
    diff: 'Medium',
    fav: true,
    code: (
      <>
        {k('def')} {f('lengthOfLongest')}(s):{'\n'}
        {'  '}seen, left, best = {'{}'}, {n('0')}, {n('0')}
        {'\n'}
        {'  '}{k('for')} r, ch {k('in')} {f('enumerate')}(s):{'\n'}
        {'    '}{k('if')} ch {k('in')} seen:{'\n'}
        {'      '}left = {f('max')}(left, seen[ch]+{n('1')})
      </>
    ),
  },
  {
    title: 'Binary Search on Rotated Array',
    topic: 'Binary Search',
    lang: 'C++',
    diff: 'Medium',
    code: (
      <>
        {k('int')} {f('search')}(vector&lt;{k('int')}&gt;&amp; a, {k('int')} t) {'{'}
        {'\n'}
        {'  '}{k('int')} lo = {n('0')}, hi = a.{f('size')}()-{n('1')};{'\n'}
        {'  '}{k('while')} (lo &lt;= hi) {'{'}
        {'\n'}
        {'    '}{k('int')} mid = lo + (hi-lo)/{n('2')};
      </>
    ),
  },
  {
    title: 'Course Schedule (Cycle Detect)',
    topic: 'Graphs',
    lang: 'JavaScript',
    diff: 'Hard',
    fav: true,
    code: (
      <>
        {c('// Kahn — topological sort')}
        {'\n'}
        {k('const')} {f('canFinish')} = (numCourses, pre) =&gt; {'{'}
        {'\n'}
        {'  '}{k('const')} indeg = {k('new')} {f('Array')}(numCourses).{f('fill')}({n('0')});
      </>
    ),
  },
  {
    title: 'Coin Change — Min Coins',
    topic: 'Dynamic Prog.',
    lang: 'Java',
    diff: 'Medium',
    code: (
      <>
        {k('int')} {f('coinChange')}({k('int')}[] coins, {k('int')} amt) {'{'}
        {'\n'}
        {'  '}{k('int')}[] dp = {k('new')} {k('int')}[amt+{n('1')}];{'\n'}
        {'  '}{f('Arrays')}.{f('fill')}(dp, amt+{n('1')});
      </>
    ),
  },
];

function NoteCardMock({ note }: { note: MockNote }) {
  return (
    <div className="group/card ring-gradient card-surface rounded-xl p-3.5 transition-colors duration-300 hover:bg-white/[0.03]">
      <div className="mb-2.5 flex items-start justify-between gap-2">
        <h4 className="text-[13px] font-medium leading-snug text-[#f5f5f5]">{note.title}</h4>
        <Star
          className={`h-3.5 w-3.5 shrink-0 ${
            note.fav ? 'fill-[#34d2e0] text-[#34d2e0]' : 'text-[#f5f5f5]/25'
          }`}
        />
      </div>

      <pre className="mb-3 overflow-hidden rounded-lg bg-black/55 p-2.5 font-mono text-[9.5px] leading-[1.6] text-[#d4d4d4]">
        {note.code}
      </pre>

      <div className="flex flex-wrap items-center gap-1.5">
        <span className={`rounded-md border px-1.5 py-0.5 text-[9px] font-medium ${langStyles[note.lang]}`}>
          {note.lang}
        </span>
        <span className={`rounded-md px-1.5 py-0.5 text-[9px] font-medium ${diffStyles[note.diff]}`}>
          {note.diff}
        </span>
        <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[9px] text-[#f5f5f5]/50">{note.topic}</span>
      </div>
    </div>
  );
}

/**
 * A real, code-rendered mirror of the notes workspace — used instead of a
 * stock screenshot so the marketing page always matches the shipped UI.
 */
export function AppMockup({ compact = false }: { compact?: boolean }) {
  const shown = compact ? notes.slice(0, 2) : notes;

  return (
    <div className="ring-gradient overflow-hidden rounded-xl bg-[#0c0b0b] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-white/[0.07] bg-[#161413] px-3.5 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-black/40 px-3 py-1 font-mono text-[10px] text-[#f5f5f5]/45">
          <span className="text-[#28c840]">&#9679;</span> algokeep.hitanshukhandelwal.com/notes
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        {!compact && (
          <aside className="hidden w-[168px] shrink-0 flex-col gap-1 border-r border-white/[0.07] bg-[#121110] p-3 sm:flex">
            <div className="mb-3 flex items-center gap-2 px-1">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-cyan-teal">
                <Code2 className="h-3.5 w-3.5 text-black" />
              </div>
              <span className="text-[11px] font-semibold text-[#f5f5f5]">AlgoKeep</span>
            </div>

            <div className="flex items-center gap-2 rounded-md bg-[#34d2e0]/10 px-2 py-1.5 text-[10.5px] text-[#34d2e0]">
              <FolderTree className="h-3.5 w-3.5" /> All Notes
              <span className="ml-auto text-[9px] text-[#34d2e0]/70">128</span>
            </div>
            <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[10.5px] text-[#f5f5f5]/55">
              <Heart className="h-3.5 w-3.5" /> Favourites
              <span className="ml-auto text-[9px] text-[#f5f5f5]/35">24</span>
            </div>

            <div className="mt-3 px-2 pb-1 text-[8.5px] font-medium uppercase tracking-wider text-[#f5f5f5]/30">
              Topics
            </div>
            {[
              ['Arrays', 32],
              ['Dynamic Prog.', 21],
              ['Graphs', 18],
              ['Trees', 15],
              ['Sliding Window', 11],
            ].map(([label, count]) => (
              <div
                key={label as string}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[10.5px] text-[#f5f5f5]/55"
              >
                <Hash className="h-3 w-3 text-[#229799]" /> {label}
                <span className="ml-auto text-[9px] text-[#f5f5f5]/30">{count}</span>
              </div>
            ))}
          </aside>
        )}

        {/* Main panel */}
        <div className="min-w-0 flex-1 p-3.5">
          {/* Filter bar */}
          <div className="mb-3.5 flex items-center gap-2">
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/[0.07] bg-black/40 px-2.5 py-1.5">
              <Search className="h-3.5 w-3.5 shrink-0 text-[#f5f5f5]/35" />
              <span className="truncate text-[10.5px] text-[#f5f5f5]/35">
                sliding window
                <span className="animate-caret ml-px text-[#34d2e0]">|</span>
              </span>
            </div>
            <span className="hidden rounded-md border border-[#34d2e0]/30 bg-[#34d2e0]/10 px-2 py-1 text-[9.5px] text-[#34d2e0] md:inline">
              Medium
            </span>
            <span className="hidden rounded-md border border-white/[0.07] px-2 py-1 text-[9.5px] text-[#f5f5f5]/45 md:inline">
              Python
            </span>
            <LayoutGrid className="hidden h-3.5 w-3.5 text-[#f5f5f5]/35 sm:block" />
            <div className="flex items-center gap-1 rounded-md bg-gradient-cyan-teal px-2 py-1 text-[9.5px] font-medium text-black">
              <Plus className="h-3 w-3" /> New
            </div>
          </div>

          <div className={`grid gap-2.5 ${compact ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
            {shown.map((note) => (
              <NoteCardMock key={note.title} note={note} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
