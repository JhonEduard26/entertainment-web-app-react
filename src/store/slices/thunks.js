import { movieApi } from "../../api/movieApi"
import { setCategories, setMovies } from "./movieSlice"
import { setLoading } from "./uiSlice"

export const getTrendingMovies = () => {
  return async (dispatch) => {
    dispatch(setLoading())
    const { data: { results } } = await movieApi.get(`trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`)
    dispatch(setMovies(results))
    dispatch(setLoading())
  }
}

export const getCategories = () => {
  return async (dispatch) => {
    const { data: { genres } } = await movieApi.get(`genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`)
    dispatch(setCategories(genres))
  }
}