import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // //Data
import { db } from "../firebase-config";
import { get, ref } from "firebase/database";

export const fetchData = createAsyncThunk("data/fetchData", async function () {
  // const snapshot = await get(ref(db), "/");
  // const response = snapshot.val();
  const data = await fetch(`${process.env.PUBLIC_URL}/data/data.json`);
  const response = data.json();
  return response;
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    actors: [],
    plays: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.actors = action.payload.actors.sort((a, b) => a.sortId - b.sortId);
      state.plays = action.payload.plays.sort((a, b) => a.sortId - b.sortId);
    },
    [fetchData.rejected]: (state, action) => {},
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
