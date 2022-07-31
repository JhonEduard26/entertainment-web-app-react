import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  categories: [],
  recommendedMovies: [],
  series: [],
  movieActive: null,
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
    },
    setTvSeries: (state, action) => {
      state.series = action.payload
    },
    setMovieActive: (state, action) => {
      state.movieActive = action.payload
    },
  }
})

export const {
  setMovies,
  setRecommendedMovies,
  setCategories,
  setTvSeries,
  setMovieActive
} = movieSlice.actions