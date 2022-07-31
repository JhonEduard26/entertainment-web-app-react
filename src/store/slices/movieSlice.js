import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  categories: [],
  recommendedMovies: [],
  series: [],
  movieActive: null,
  similarMovies: [],
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
    setSimilarMovies: (state, action) => {
      state.similarMovies = action.payload
    },
  }
})

export const {
  setMovies,
  setRecommendedMovies,
  setCategories,
  setTvSeries,
  setMovieActive,
  setSimilarMovies,
} = movieSlice.actions