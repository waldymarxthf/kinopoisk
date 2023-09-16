import { createSlice } from "@reduxjs/toolkit";
import { fetchSession } from "./api";
import { Session } from "@supabase/supabase-js";

interface SessionData {
  session: Session | null;
}

const sessionSlice = createSlice({
  name: "filmsData",
  initialState: {
    session: null,
  } as SessionData,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSession.fulfilled, (state, action) => {
      state.session = action.payload.data.session;
    });
  },
});

export const sessionReducer = sessionSlice.reducer;
