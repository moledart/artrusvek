import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // //Data
import { db } from "../firebase-config";
import { get, ref } from "firebase/database";

export const fetchData = createAsyncThunk("data/fetchData", async function () {
  const snapshot = await get(ref(db), "/");
  const response = snapshot.val();
  // const data = await fetch(`${process.env.PUBLIC_URL}/data/data.json`);
  // const response = data.json();
  return response;
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    actors: [],
    plays: [],
    news: [],
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
      state.news = action.payload.news.sort(
        (a, b) => new Date(b.published) - new Date(a.published)
      );
    },
    [fetchData.rejected]: (state, action) => {},
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;

export const selectAllPlays = (state) => state.data.plays;
export const selectPlayBySlug = (state, slug) =>
  state.data.plays.find((play) => play.slug === slug);

export const selectAllActors = (state) => state.data.actors;
export const selectActorBySlug = (state, slug) =>
  state.data.actors.find((actor) => actor.slug === slug);

export const selectAllNews = (state) => state.data.news;
export const selectNewsBySlug = (state, slug) =>
  state.data.news.find((post) => post.slug === slug);
