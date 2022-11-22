import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { movieAPI } from "../api/movieAPI";
import { movieReducer } from "./slices/movieSlice";

// Store
export const store = configureStore({
  reducer: {
    [movieAPI.reducerPath]: movieAPI.reducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// Custom hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
