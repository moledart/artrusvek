import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // //Data
import { db } from "./firebase";
import { get, ref } from "firebase/database";

export const fetchPlays = createAsyncThunk("plays/fetchPlays", async function () {
  const snapshot = await get(ref(db, "/plays"));
  const data = snapshot.val();
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

// Action creators are generated for each case reducer function
export const { addData } = playsSlice.actions;

console.log(playsSlice);
export default playsSlice.reducer;
