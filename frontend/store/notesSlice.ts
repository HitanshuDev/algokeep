import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const NOTES_PER_PAGE = 15;

// const API = process.env.NEXT_PUBLIC_API_URL;

// if (!API) {
//   throw new Error("NEXT_PUBLIC_API_URL is missing");
// }

export interface Note {
  _id: string;
  title: string;
  problem: string;
  algorithm: string;
  code: string;
  language: string;
  topic: string;
  difficulty: "Easy" | "Medium" | "Hard";
  timeComplexity: string;
  spaceComplexity: string;
  isFavourite: boolean;
  createdAt: string;
}

interface NotesState {
  notes: Note[];
  total: number;
  loading: boolean;
  error: string | null;
  filters: {
    search: string;
    topic: string;
    isFavourite: boolean;
    language: string;
  };
}

const initialState: NotesState = {
  notes: [],
  total: 0,
  loading: false,
  error: null,
  filters: {
    search: "",
    topic: "",
    isFavourite: false,
    language: "",
  },
};

export const fetchNotes = createAsyncThunk(
  "notes/fetchNotes",
  async ({
    token,
    limit = 15,
    offset = 0,
  }: {
    token: string;
    limit?: number;
    offset?: number;
  }) => {
    const res = await fetch(`/api/notes?limit=${limit}&offset=${offset}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data; // { notes, total, limit, offset }
  }
);

export const addNote = createAsyncThunk(
  "notes/addNote",
  async ({ note, token }: { note: any; token: string }) => {
    const res = await fetch(`/api/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(note),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data.note;
  }
);

export const deleteNote = createAsyncThunk(
  "notes/deleteNote",
  async ({ noteId, token }: { noteId: string; token: string }) => {
    const res = await fetch(`/api/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    return noteId; // important
  }
);

export const updateNote = createAsyncThunk(
  "notes/updateNote",
  async ({
    noteId,
    updatedData,
    token,
  }: {
    noteId: string;
    updatedData: Partial<Note>;
    token: string;
  }) => {
    // console.log(updatedData);
    const res = await fetch(`/api/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);

    return data.note; // UPDATED NOTE
  }
);

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setTopicFilter(state, action) {
      state.filters.topic = action.payload;
    },
    setLanguageFilter(state, action) {
      state.filters.language = action.payload;
    },
    setSearchFilter(state, action) {
      state.filters.search = action.payload;
    },
    toggleFavouritesFilter(state) {
      state.filters.isFavourite = !state.filters.isFavourite;
    },
    clearFilters(state) {
      state.filters = {
        search: "",
        topic: "",
        language: "",
        isFavourite: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.notes = action.payload.notes;
        state.total = action.payload.total;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed";
      })

      // delete
      // Removes the note from the currently loaded page and decrements the
      // known total. The page itself may now be short by one until the next
      // fetchNotes() call re-pages from the server.
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.notes = state.notes.filter((note) => note._id !== action.payload);
        state.total = Math.max(0, state.total - 1);
      })
      // update
      .addCase(updateNote.fulfilled, (state, action) => {
        const index = state.notes.findIndex(
          (note) => note._id === action.payload._id
        );

        if (index !== -1) {
          state.notes[index] = action.payload;
        }
      })

      // add
      // Only bumps the total; the new note belongs wherever the server's
      // sort order places it, which may not be the page currently in view.
      // The caller re-fetches the relevant page to actually display it.
      .addCase(addNote.fulfilled, (state, action) => {
        state.total += 1;
      });
  },
});

export default notesSlice.reducer;

export const {
  setTopicFilter,
  setSearchFilter,
  setLanguageFilter,
  toggleFavouritesFilter,
  clearFilters,
} = notesSlice.actions;
