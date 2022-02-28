import { configureStore } from "@reduxjs/toolkit";
import playsReducer from "./reducers/playsSlice";
import actorsReducer from "./reducers/actorsSlice";

export default configureStore({
  reducer: {
    plays: playsReducer,
    actors: actorsReducer,
  },
});
