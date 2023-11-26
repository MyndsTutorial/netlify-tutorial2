import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";
import AnimesSlice from "./slices/AnimesSlice";

const store = configureStore({
  reducer: {user: UserSlice.reducer, animes: AnimesSlice.reducer},
});

export default store;
