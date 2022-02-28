import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // //Data
import { db } from "../firebase";
import { get, ref } from "firebase/database";

export const fetchActors = createAsyncThunk("actors/fetchActors", async function () {
  const snapshot = await get(ref(db, "/actors"));
  const response = snapshot.val();
  const data = response.sort((a, b) => {
    return a.sortId - b.sortId;
  });
  return data;
});

export const actorsSlice = createSlice({
  name: "actors",
  initialState: {
    actors: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchActors.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchActors.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.actors = action.payload;
    },
    [fetchActors.rejected]: (state, action) => {},
  },
});

export const {} = actorsSlice.actions;

export default actorsSlice.reducer;
