'use client';
import { X, Copy, Star, Edit2, Clock, Save, XCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { updateNote } from '@/store/notesSlice';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

interface Note {
  _id: string;
  title: string;
  problem: string;
  algorithm: string;
  code: string;
  language: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeComplexity?: string;
  spaceComplexity?: string;
  isFavourite: boolean;
  createdAt: string;
}

interface NoteDetailViewProps {
  noteId: string | null;
  onClose: () => void;
}


export function NoteDetailView({ noteId, onClose }: NoteDetailViewProps) {
  const dispatch = useDispatch<AppDispatch>();

  const note = useSelector((state: RootState) =>
    state.notes.notes.find(n => n._id === noteId)
  );

  // console.log(note);
  // if (!note) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isFavorite, setIsFavorite] = useState(note?.isFavourite ?? false);

  // editable states
  const [title, setTitle] = useState('');
  const [problem, setProblem] = useState('');
  const [algorithm, setAlgorithm] = useState('');
  const [code, setCode] = useState('');
  const [timeComplexity, setTimeComplexity] = useState('');
  const [spaceComplexity, setSpaceComplexity] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setProblem(note.problem);
      setAlgorithm(note.algorithm);
      setCode(note.code);
      setTimeComplexity(note.timeComplexity || '');
      setSpaceComplexity(note.spaceComplexity || '');
      setIsFavorite(note.isFavourite);
    }
  }, [note]);

  if (!note) return null;

  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = async () => {
    if (!token) return;

    await dispatch(
      updateNote({
        noteId: note._id,
        updatedData: {
          title,
          problem,
          algorithm,
          code,
          timeComplexity,
          spaceComplexity,
        },
        token,
      })
    );

    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(note.title);
    setProblem(note.problem);
    setAlgorithm(note.algorithm);
    setCode(note.code);
    setTimeComplexity(note.timeComplexity || '');
    setSpaceComplexity(note.spaceComplexity || '');
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="glass w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl shadow-accent/20">

        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-border/50">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              {isEditing ? (
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-input-background px-3 py-2 rounded w-full"
                />
              ) : (
                <h2 className="text-foreground">{note.title}</h2>
              )}

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
              {note.topic && (<span className="px-3 py-1.5 rounded-lg text-sm bg-primary/20 text-primary border border-primary/30">
                {note.topic}
              </span>)}

              {isEditing ? (
                <input
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className="px-3 py-1.5 rounded-lg text-sm bg-input-background border border-border/50"
                />
              ) : (
                <span className="px-3 py-1.5 rounded-lg text-sm bg-accent/20 text-accent border border-accent/30">
                  {note.problem}
                </span>
              )}

              <span className="px-3 py-1.5 rounded-lg text-sm bg-secondary text-foreground border border-border/50">
                {note.difficulty}
              </span>

              <span className="px-3 py-1.5 rounded-lg text-sm bg-secondary text-muted-foreground border border-border/50 flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                {new Date(note.createdAt).toLocaleString()}
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
          {(timeComplexity || spaceComplexity) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-secondary border border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Time Complexity</p>
                {isEditing ? (
                  <input
                    value={timeComplexity}
                    onChange={(e) => setTimeComplexity(e.target.value)}
                    className="w-full bg-input-background px-3 py-2 rounded font-mono"
                  />
                ) : (
                  <p className="text-foreground font-mono">{note.timeComplexity}</p>
                )}
              </div>

              <div className="p-4 rounded-xl bg-secondary border border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Space Complexity</p>
                {isEditing ? (
                  <input
                    value={spaceComplexity}
                    onChange={(e) => setSpaceComplexity(e.target.value)}
                    className="w-full bg-input-background px-3 py-2 rounded font-mono"
                  />
                ) : (
                  <p className="text-foreground font-mono">{note.spaceComplexity}</p>
                )}
              </div>
            </div>
          )}

          {/* Code */}
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
              <div className="p-6 pt-12 overflow-x-auto">
                {isEditing ? (
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full min-h-[250px] bg-black/70 text-foreground font-mono p-4 rounded"
                  />
                ) : (
                  <pre className="text-sm text-foreground font-mono leading-relaxed">
                    <code>{note.code}</code>
                  </pre>
                )}
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div>
            <h3 className="text-foreground mb-3">Explanation</h3>
            {isEditing ? (
              <textarea
                value={algorithm}
                onChange={(e) => setAlgorithm(e.target.value)}
                className="w-full bg-input-background p-4 rounded"
              />
            ) : (
              <div className="p-5 rounded-xl bg-secondary/50 border border-border/50">
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {note.algorithm}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 p-6 border-t border-border/50">
          {isEditing ? (
            <>
              <button
                onClick={handleCancel}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary"
              >
                <XCircle className="w-4 h-4" />
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/50"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg
                         bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Edit2 className="w-4 h-4" />
              Edit Note
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
