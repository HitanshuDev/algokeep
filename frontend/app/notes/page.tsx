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
import { Pagination } from '@/components/notes/Pagination';

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
  console.log(typeof setIsAddNoteModalOpen);
  const [page, setPage] = useState(1);
  const NOTES_PER_PAGE = 15;

  // ---------------- REDUX ----------------
  const dispatch = useDispatch<AppDispatch>();

  const { notes, loading, error } = useSelector(
    (state: RootState) => state.notes
  );
  
  const filteredNotes = useSelector(filteredNoteSelector);
  const filters = useSelector((state: RootState) => state.notes.filters);

  const totalPages = Math.max(1, Math.ceil(filteredNotes.length / NOTES_PER_PAGE));
  const paginatedNotes = filteredNotes.slice(
    (page - 1) * NOTES_PER_PAGE,
    page * NOTES_PER_PAGE
  );

  // ---------------- AUTH ----------------
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  // ---------------- FETCH NOTES ----------------
  useEffect(() => {
    if (!token) return;
    dispatch(fetchNotes(token));
  }, [token, dispatch]);

  // Reset to page 1 whenever the filtered set changes (new search/topic/etc.)
  useEffect(() => {
    setPage(1);
  }, [filters.search, filters.topic, filters.language, filters.isFavourite]);

  // Clamp page if notes shrink (e.g. after a delete) below the current page
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

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
              <>
                <NotesGrid
                  viewMode={viewMode}
                  notes={paginatedNotes}
                  onNoteClick={(note) => setSelectedNoteId(note._id)}
                />
                <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
              </>
            )}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        activeTab={mobileTab}
        setIsAddNoteModalOpen={setIsAddNoteModalOpen}
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
      />
    </div>
  );
}
