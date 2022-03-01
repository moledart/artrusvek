import { configureStore } from "@reduxjs/toolkit";
import playsReducer from "./reducers/playsSlice";
import actorsReducer from "./reducers/actorsSlice";
import dataReducer from "./reducers/dataSlice";

export default configureStore({
  reducer: {
    data: dataReducer,
    plays: playsReducer,
    actors: actorsReducer,
  },
});
