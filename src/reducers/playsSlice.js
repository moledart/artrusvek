import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // //Data
import { db } from "../firebase";
import { get, ref } from "firebase/database";

export const fetchPlays = createAsyncThunk("plays/fetchPlays", async function () {
  const snapshot = await get(ref(db, "/plays"));
  const response = snapshot.val();
  const data = response.sort((a, b) => {
    return a.sortId - b.sortId;
  });
  return data;
});

export const playsSlice = createSlice({
  name: "plays",
  initialState: {
    plays: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPlays.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchPlays.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.plays = action.payload;
    },
    [fetchPlays.rejected]: (state, action) => {},
  },
});

export const {} = playsSlice.actions;

export default playsSlice.reducer;
