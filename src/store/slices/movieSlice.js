import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  categories: [],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    }
  }
})

export const { setMovies, setCategories } = movieSlice.actions