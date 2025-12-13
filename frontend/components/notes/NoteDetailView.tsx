'use client';
import { X, Copy, Star, Edit2, ExternalLink, Clock } from 'lucide-react';
import { useState } from 'react';

interface Note {
  id: string;
  title: string;
  language: string;
  topic: string;
  codePreview: string;
  fullCode: string;
  explanation: string;
  isFavorite: boolean;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  lastEdited: string;
  timeComplexity?: string;
  spaceComplexity?: string;
}

interface NoteDetailViewProps {
  note: Note | null;
  onClose: () => void;
}

export function NoteDetailView({ note, onClose }: NoteDetailViewProps) {
  const [isFavorite, setIsFavorite] = useState(note?.isFavorite || false);
  const [copied, setCopied] = useState(false);

  if (!note) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(note.fullCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="glass w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-accent/20">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border/50">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="text-foreground">{note.title}</h2>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-2 rounded-lg transition-all ${
                  isFavorite
                    ? 'text-yellow-400 bg-yellow-400/10'
                    : 'text-muted-foreground hover:bg-accent/10 hover:text-accent'
                }`}
              >
                <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg text-sm bg-primary/20 text-primary border border-primary/30">
                {note.language}
              </span>
              <span className="px-3 py-1.5 rounded-lg text-sm bg-accent/20 text-accent border border-accent/30">
                {note.topic}
              </span>
              {note.difficulty && (
                <span className="px-3 py-1.5 rounded-lg text-sm bg-secondary text-foreground border border-border/50">
                  {note.difficulty}
                </span>
              )}
              <span className="px-3 py-1.5 rounded-lg text-sm bg-secondary text-muted-foreground border border-border/50 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                {note.lastEdited}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-destructive/10 hover:text-destructive transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Complexity */}
          {(note.timeComplexity || note.spaceComplexity) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {note.timeComplexity && (
                <div className="p-4 rounded-xl bg-secondary border border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Time Complexity</p>
                  <p className="text-foreground font-mono">{note.timeComplexity}</p>
                </div>
              )}
              {note.spaceComplexity && (
                <div className="p-4 rounded-xl bg-secondary border border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Space Complexity</p>
                  <p className="text-foreground font-mono">{note.spaceComplexity}</p>
                </div>
              )}
            </div>
          )}

          {/* Code Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-foreground">Code</h3>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg
                         bg-primary/10 text-primary hover:bg-primary/20
                         border border-primary/30 transition-all"
              >
                <Copy className="w-4 h-4" />
                <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="relative rounded-xl bg-black/60 border border-border/50 overflow-hidden">
              <div className="absolute top-3 left-4 flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>

              <div className="p-6 pt-12 overflow-x-auto">
                <pre className="text-sm text-foreground font-mono leading-relaxed">
                  <code>{note.fullCode}</code>
                </pre>
              </div>
            </div>
          </div>

          {/* Explanation Section */}
          {note.explanation && (
            <div>
              <h3 className="text-foreground mb-3">Explanation</h3>
              <div className="p-5 rounded-xl bg-secondary/50 border border-border/50">
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {note.explanation}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border/50">
          <button
            className="px-4 py-2 rounded-lg bg-secondary text-foreground
                     border border-border/50 hover:bg-accent/10 hover:border-accent/50
                     transition-all"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-lg
                     bg-primary text-primary-foreground hover:bg-primary/90
                     shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30
                     transition-all"
          >
            <Edit2 className="w-4 h-4" />
            Edit Note
          </button>
        </div>
      </div>
    </div>
  );
}
