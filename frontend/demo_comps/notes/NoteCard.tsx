import { Star, Edit2, Trash2, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';

interface NoteCardProps {
  note: {
    id: string;
    title: string;
    language: string;
    topic: string;
    codePreview: string;
    isFavorite: boolean;
    difficulty?: string;
    lastEdited: string;
  };
  onClick: () => void;
}

const languageColors: Record<string, string> = {
  'C++': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Java': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Python': 'bg-green-500/20 text-green-400 border-green-500/30',
  'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
};

const difficultyColors: Record<string, string> = {
  'Easy': 'bg-green-500/20 text-green-400',
  'Medium': 'bg-yellow-500/20 text-yellow-400',
  'Hard': 'bg-red-500/20 text-red-400'
};

export function NoteCard({ note, onClick }: NoteCardProps) {
  const [isFavorite, setIsFavorite] = useState(note.isFavorite);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={onClick}
      className="group relative bg-card rounded-xl border border-border/50 p-5
               hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10
               transition-all duration-300 cursor-pointer"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-foreground mb-2 group-hover:text-accent transition-colors">
            {note.title}
          </h3>
          
          <div className="flex flex-wrap gap-2">
            <span className={`px-2.5 py-1 rounded-md text-xs border ${languageColors[note.language] || 'bg-muted text-muted-foreground'}`}>
              {note.language}
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs bg-primary/10 text-primary border border-primary/20">
              {note.topic}
            </span>
            {note.difficulty && (
              <span className={`px-2.5 py-1 rounded-md text-xs ${difficultyColors[note.difficulty]}`}>
                {note.difficulty}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={handleFavorite}
          className={`p-2 rounded-lg transition-all ${
            isFavorite 
              ? 'text-yellow-400 hover:bg-yellow-400/10' 
              : 'text-muted-foreground hover:bg-accent/10 hover:text-accent'
          }`}
        >
          <Star className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Code Preview */}
      <div className="relative mb-4 overflow-hidden rounded-lg bg-black/40 border border-border/30">
        <div className="p-3 overflow-x-auto">
          <pre className="text-xs line-clamp-6 text-muted-foreground font-mono leading-relaxed">
            <code>{note.codePreview}</code>
          </pre>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {note.lastEdited}
        </span>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Copy logic
            }}
            className="p-2 rounded-lg hover:bg-accent/10 hover:text-accent transition-all"
            aria-label="Copy code"
          >
            <Copy className="w-4 h-4" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Edit logic
            }}
            className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all"
            aria-label="Edit note"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Delete logic
            }}
            className="p-2 rounded-lg hover:bg-destructive/10 hover:text-destructive transition-all"
            aria-label="Delete note"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
