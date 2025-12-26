'use client';
import { Filter, SortAsc, LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';

interface FilterBarProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export function FilterBar({ viewMode, onViewModeChange }: FilterBarProps) {
  const [sortBy, setSortBy] = useState('recent');
  const [filterDifficulty, setFilterDifficulty] = useState('all');

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
      {/* Left: Filters */}
      <div className="flex flex-wrap items-center gap-3">
        {/* <div className="flex items-center gap-2 text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span className="text-sm">Filters:</span>
        </div> */}

        {/* <select
          value={filterDifficulty}
          onChange={(e) => setFilterDifficulty(e.target.value)}
          className="px-3 py-1.5 bg-secondary border border-border/50 rounded-lg
                   text-sm text-foreground
                   focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                   transition-all cursor-pointer"
        >
          <option value="all">All Difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select> */}

        {/* <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-1.5 bg-secondary border border-border/50 rounded-lg
                   text-sm text-foreground
                   focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent
                   transition-all cursor-pointer"
        >
          <option value="recent">Recently Added</option>
          <option value="alpha">Alphabetical</option>
          <option value="difficulty">By Difficulty</option>
          <option value="language">By Language</option>
        </select> */}
      </div>

      {/* Right: View Mode Toggle */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground mr-2">View:</span>
        <div className="flex items-center gap-1 p-1 bg-secondary rounded-lg border border-border/50">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded-md transition-all ${
              viewMode === 'grid'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
            }`}
            aria-label="Grid view"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded-md transition-all ${
              viewMode === 'list'
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
            }`}
            aria-label="List view"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
