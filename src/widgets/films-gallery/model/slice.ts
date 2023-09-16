import { createSlice } from "@reduxjs/toolkit";
import { fetchFilms } from "./api";
import { FilmsProps } from "~shared/api/films/models";

interface FilmState {
  films: FilmsProps[];
  isLoading: boolean;
}

const filmsSlice = createSlice({
  name: "filmsData",
  initialState: {
    films: [],
    isLoading: false,
  } as FilmState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilms.rejected, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.films = action.payload.docs;
      state.isLoading = false;
    });
  },
});

export const filmsReducer = filmsSlice.reducer;
