import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";

export const filteredNoteSelector = createSelector(
  [
    (state: RootState) => state.notes.notes,
    (state: RootState) => state.notes.filters,
  ],
  (notes, filters) => {
    const search = (filters.search ?? "").toLowerCase().trim();
    console.log("search");


    return notes.filter((note) => {
      const title = (note.title ?? "").toLowerCase();
      const problem = (note.problem ?? "").toLowerCase();
      const topic = note.topic ?? "";
      const language = note.language ?? "";

      if (filters.topic && topic !== filters.topic) return false;
      if (filters.language && language !== filters.language) return false;
      if (filters.isFavourite && !note.isFavourite) return false;

      if (search && !title.includes(search) && !problem.includes(search)) {
        return false;
      }

      return true;
    });
  }
);


// notesSelectors.ts
export const selectFavouriteCount = createSelector(
  (state: RootState) => state.notes.notes,
  (notes) => notes.filter((n) => n.isFavourite).length
);

