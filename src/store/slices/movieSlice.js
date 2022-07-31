import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  categories: [],
  recommendedMovies: [],
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload
    },
    setRecommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload
    },
    setCategories: (state, action) => {
      state.categories = action.payload
    }
  }
})

export const { setMovies, setRecommendedMovies, setCategories } = movieSlice.actions