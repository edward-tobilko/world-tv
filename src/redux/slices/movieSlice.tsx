import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const LS_MOVIES_KEY = "favorites";

interface IState {
  favorites: Array<any>;
}

const initialState: IState = {
  favorites: JSON.parse(localStorage.getItem(LS_MOVIES_KEY) ?? "[]"),
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addFavoriteMovie: (state, action: PayloadAction<any>) => {
      state.favorites.push(action.payload);

      localStorage.setItem(LS_MOVIES_KEY, JSON.stringify(state.favorites));
    },
    removeFavoriteMovie: (state, action: PayloadAction<any>) => {
      state.favorites = state.favorites.filter((f) => f.id !== action.payload);

      localStorage.setItem(LS_MOVIES_KEY, JSON.stringify(state.favorites));
    },
  },
});

export const movieActions = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
