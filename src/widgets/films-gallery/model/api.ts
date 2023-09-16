import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilms } from "~shared/api/films/films";
import { User } from "@supabase/supabase-js";
import { supabase } from "~shared/lib/supabase";

export const fetchFilms = createAsyncThunk(
  "films/getFilms",
  async (params: { sort: string; page: number; year: [number, number]; genres: string }) => {
    const response = await getFilms(params.sort, params.page, params.year, params.genres);
    return response;
  },
);

export const fetchFavoriteFilm = createAsyncThunk(
  "favoriteFilms/getFavoriteMovieList",
  async (params: { user: User }) => {
    console.log(params.user);
    const { data } = await supabase
      .from("favoriteFilms")
      .select("film, profiles!inner (id)")
      .eq("profiles.id", params.user);
    return { data };
  },
);
