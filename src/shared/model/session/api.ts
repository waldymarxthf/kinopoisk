import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "~shared/lib/supabase";

export const fetchSession = createAsyncThunk("session/getSession", async () => {
  return await supabase.auth.getSession();
});
