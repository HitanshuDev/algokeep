import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API = process.env.NEXT_PUBLIC_API_URL;

if (!API) {
  throw new Error("NEXT_PUBLIC_API_URL is missing");
}

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
  async (token: string) => {
    const res = await fetch(`${API}/api/notes`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data.notes;
  }
);

export const addNote = createAsyncThunk(
  "notes/addNote",
  async ({ note, token }: { note: any; token: string }) => {
    const res = await fetch(`${API}/api/notes`, {
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
    const res = await fetch(`${API}/api/notes/${noteId}`, {
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
    const res = await fetch(`${API}/api/notes/${noteId}`, {
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
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed";
      })

      // delete
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.notes = state.notes.filter((note) => note._id !== action.payload);
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
      .addCase(addNote.fulfilled, (state, action) => {
        state.notes.unshift(action.payload);
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
