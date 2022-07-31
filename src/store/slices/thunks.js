import { movieApi } from "../../api/movieApi"
import { setCategories, setMovies, setRecommendedMovies, setTvSeries } from "./movieSlice"
import { setLoading } from "./uiSlice"

export const getTrendingMovies = () => {
  return async (dispatch) => {
    dispatch(setLoading())
    const { data: { results } } = await movieApi.get('trending/movie/day')
    dispatch(setMovies(results))
    dispatch(setLoading())
  }
}

export const getRecommendedMovies = () => {
  return async (dispatch) => {
    const { data: { results } } = await movieApi.get('discover/movie?sort_by=popularity.desc')
    dispatch(setRecommendedMovies(results))
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