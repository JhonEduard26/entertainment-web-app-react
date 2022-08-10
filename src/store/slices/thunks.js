import { movieApi } from "../../api/movieApi"
import { setCategories, setMovies, setRecommendedMovies, setSimilarMovies, setTotalResults, setTvSeries } from "./movieSlice"
import { setLoading } from "./uiSlice"

export const getTrendingMovies = () => {
  return async (dispatch) => {
    dispatch(setLoading())
    const { data: { results } } = await movieApi.get('trending/movie/day')
    dispatch(setMovies(results))
    dispatch(setLoading())
  }
}

export const getMovieByCategory = (id) => {
  return async (dispatch) => {
    dispatch(setLoading())
    const { data: { results } } = await movieApi.get(`discover/movie?with_genres=${id}`)
    dispatch(setMovies(results))
    dispatch(setLoading())
  }
}

export const getMovieById = (id) => {
  return async (dispatch) => {
    const { data } = await movieApi.get(`movie/${id}`)
    dispatch(setMovies([data]))
  }
}

export const getMovieByName = (query) => {
  return async (dispatch) => {
    const { data } = await movieApi.get(`search/movie?query=${query}`)
    dispatch(setTotalResults(data.total_results))
    dispatch(setMovies(data.results))
  }
}

export const getRecommendedMovies = () => {
  return async (dispatch) => {
    const { data: { results } } = await movieApi.get('discover/movie?sort_by=popularity.desc')
    dispatch(setRecommendedMovies(results))
  }
}

export const getSimilarMovies = (id) => {
  return async (dispatch) => {
    const { data: { results } } = await movieApi.get(`movie/${id}/similar`)
    dispatch(setSimilarMovies(results))
  }
}

export const getCategories = () => {
  return async (dispatch) => {
    const { data: { genres } } = await movieApi.get('genre/movie/list')
    dispatch(setCategories(genres))
  }
}

export const getTvSeries = () => {
  return async (dispatch) => {
    const { data: { results } } = await movieApi.get('tv/popular')
    dispatch(setTvSeries(results))
  }
}