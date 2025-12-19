'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';
import { updateNote } from '@/store/notesSlice';

interface EditNoteModalProps {
  note: any;
  isOpen: boolean;
  onClose: () => void;
}

export default function EditNoteModal({ note, isOpen, onClose }: EditNoteModalProps) {
  const dispatch = useDispatch<AppDispatch>();
  const [token, setToken] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    problem: '',
    algorithm: '',
    code: '',
    language: '',
  });

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  useEffect(() => {
    if (note) {
      setFormData({
        title: note.title,
        problem: note.problem,
        algorithm: note.algorithm,
        code: note.code,
        language: note.language,
      });
    }
  }, [note]);

  if (!isOpen || !note) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    try {
      await dispatch(
        updateNote({
          noteId: note._id,
          updatedData: formData,
          token,
        })
      ).unwrap();

      onClose();
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-secondary rounded-xl w-full max-w-3xl p-6">
        <div className="flex justify-between mb-4">
          <h2>Edit Note</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full p-2 rounded bg-input-background"
          />

          <textarea
            value={formData.problem}
            onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
            className="w-full p-2 rounded bg-input-background"
          />

          <textarea
            value={formData.algorithm}
            onChange={(e) => setFormData({ ...formData, algorithm: e.target.value })}
            className="w-full p-2 rounded bg-input-background"
          />

          <textarea
            value={formData.code}
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
            className="w-full p-2 rounded bg-black/60 font-mono"
          />

          <button
            type="submit"
            className="w-full bg-primary p-3 rounded"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
