import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/store";


export const filteredNoteSelector = (state: RootState) => state.notes.notes;


// notesSelectors.ts
export const selectFavouriteCount = createSelector(
  (state: RootState) => state.notes.notes,
  (notes) => notes.filter((n) => n.isFavourite).length
);

