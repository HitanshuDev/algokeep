'use client';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navbar } from '@/components/notes/Navbar';
import { Sidebar } from '@/components/notes/Sidebar';
import { FilterBar } from '@/components/notes/FilterBar';
import { NotesGrid } from '@/components/notes/NotesGrid';
import { NoteDetailView } from '@/components/notes/NoteDetailView';
import { MobileBottomNav } from '@/components/notes/MobileBottomNav';
import { AddNoteModal, NoteFormData } from '@/components/notes/AddNoteModal';

import { fetchNotes, addNote } from '@/store/notesSlice';
import type { RootState, AppDispatch } from '@/store';
import { filteredNoteSelector } from '@/store/noteSelector';

export default function App() {
  // ---------------- UI STATE (LOCAL) ----------------
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  // const [selectedNote, setSelectedNote] = useState<any | null>(null);
  const [selectedNoteId, setSelectedNoteId] = useState<any | null>(null);
  const [mobileTab, setMobileTab] = useState('all');
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);

  // ---------------- REDUX ----------------
  const dispatch = useDispatch<AppDispatch>();

  const { notes, loading, error } = useSelector(
    (state: RootState) => state.notes
  );
  
  const filteredNotes = useSelector(filteredNoteSelector);

  // ---------------- AUTH ----------------
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  // ---------------- FETCH NOTES ----------------
  useEffect(() => {
    if (!token) return;
    dispatch(fetchNotes(token));
  }, [token, dispatch]);

  // ---------------- SAVE NOTE ----------------
  const handleSaveNote = (note: NoteFormData) => {
    if (!token) return;
    dispatch(addNote({ note, token }));
  };

  // ---------------- RENDER ----------------
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onAddNote={() => setIsAddNoteModalOpen(true)}
        />

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-4rem)] pb-20 lg:pb-0">
          <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-foreground mb-2">Your DSA Notes</h1>
              <p className="text-muted-foreground">
                Manage and organize your data structures & algorithms solutions
              </p>
            </div>

            {/* Filter Bar */}
            <FilterBar
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            {/* Loading */}
            {loading && (
              <p className="text-muted-foreground mt-6">
                Loading notes...
              </p>
            )}

            {/* Error */}
            {error && (
              <p className="text-destructive mt-6">
                {error}
              </p>
            )}

            {/* Notes Grid */}
            {!loading && !error && (
              <NotesGrid
              viewMode={viewMode}
                notes={filteredNotes}
                onNoteClick={(note) => setSelectedNoteId(note._id)}
              />
            )}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        activeTab={mobileTab}
        onTabChange={setMobileTab}
      />

      {/* Note Detail Modal */}
      <NoteDetailView
        noteId={selectedNoteId}
        onClose={() => setSelectedNoteId(null)}
      />

      {/* Add Note Modal */}
      <AddNoteModal
        isOpen={isAddNoteModalOpen}
        onClose={() => setIsAddNoteModalOpen(false)}
        onSave={handleSaveNote}
      />
    </div>
  );
}
