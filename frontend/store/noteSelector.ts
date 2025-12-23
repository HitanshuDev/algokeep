import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export const filteredNoteSelector = createSelector(
  [
    (state: RootState) => state.notes.notes,
    (state: RootState) => state.notes.filters,
  ],
  (notes, filters) => {
    const search = filters.search.toLowerCase().trim();

    return notes.filter((note) => {
      if (filters.topic && note.topic !== filters.topic) return false;
      if (filters.language && note.language !== filters.language) return false;
      if (filters.isFavourite && !note.isFavourite) return false;

      if (
        search &&
        !note.title.toLowerCase().includes(search) &&
        !note.problem.toLowerCase().includes(search)
      ) {
        return false;
      }

      return true;
    });
  }
);

// notesSelectors.ts
export const selectFavouriteCount = (state: RootState) =>
  state.notes.notes.filter((n) => n.isFavourite).length;
