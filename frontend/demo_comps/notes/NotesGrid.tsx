import { NoteCard } from './NoteCard';

export interface Note {
  id: string;
  title: string;
  language: string;
  topic: string;
  codePreview: string;
  fullCode: string; // Added
  explanation: string; // Added
  isFavorite: boolean;
  difficulty?: string;
  lastEdited: string;
  timeComplexity?: string; // Added
  spaceComplexity?: string; // Added
}

interface NotesGridProps {
  // Use the updated Note interface
  notes: Note[];
  viewMode: "grid" | "list";
  onNoteClick: (note: Note) => void;
}
export function NotesGrid({ notes, viewMode, onNoteClick }: NotesGridProps) {
  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <span className="text-4xl">📝</span>
        </div>
        <h3 className="text-foreground mb-2">No notes found</h3>
        <p className="text-muted-foreground text-sm">Create your first DSA note to get started</p>
      </div>
    );
  }

  return (
    <div
      className={
        viewMode === 'grid'
          ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'
          : 'flex flex-col gap-4'
      }
    >
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onClick={() => onNoteClick(note)} />
      ))}
    </div>
  );
}
