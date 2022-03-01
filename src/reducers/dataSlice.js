import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // //Data
import { db } from "../firebase";
import { get, ref } from "firebase/database";

export const fetchData = createAsyncThunk("data/fetchData", async function () {
  const snapshot = await get(ref(db), "/");
  const response = snapshot.val();
  return response;
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: {},
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
      state.data = action.payload;
    },
    [fetchData.rejected]: (state, action) => {},
  },
});

export const {} = dataSlice.actions;

export default dataSlice.reducer;
