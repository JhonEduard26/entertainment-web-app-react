import { configureStore } from "@reduxjs/toolkit"
import { movieSlice } from "./slices/movieSlice"
import { uiSlice } from "./slices/uiSlice"

export const store = configureStore({
  reducer: {
    movies: movieSlice.reducer,
    ui: uiSlice.reducer,
  }
})