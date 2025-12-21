import { RootState } from "@/store";

export const filteredNoteSelector = (state: RootState) => {
  const { notes, filters } = state.notes;

  return notes.filter((note) => {
    if (filters.topic && note.topic !== filters.topic) return false;
    if (filters.isFavourite && !note.isFavourite) return false;
    if (filters.language && note.language !== filters.language) return false;
    return true;
  });
};

// notesSelectors.ts
export const selectFavouriteCount = (state: RootState) =>
  state.notes.notes.filter((n) => n.isFavourite).length;
