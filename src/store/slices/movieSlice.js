import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  categories: [],
  recommendedMovies: [],
  series: [],
  similarMovies: [],
  totalResults: 0,
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
    setSimilarMovies: (state, action) => {
      state.similarMovies = action.payload
    },
    setTotalResults: (state, action) => {
      state.totalResults = action.payload
    },
  }
})

export const {
  setMovies,
  setRecommendedMovies,
  setCategories,
  setTvSeries,
  setSimilarMovies,
  setTotalResults
} = movieSlice.actions