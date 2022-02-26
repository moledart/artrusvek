import { configureStore } from "@reduxjs/toolkit";
import playsReducer from "./counterSlice";

export default configureStore({
  reducer: {
    plays: playsReducer,
  },
});
