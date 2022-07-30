import { movieApi } from "../../api/movieApi"
import { setMovies } from "./movieSlice"

export const getTrendingMovies = () => {
  return async (dispatch) => {
    const { data: { results } } = await movieApi.get(`trending/movie/day?api_key=${import.meta.env.VITE_API_KEY}`)
    dispatch(setMovies(results))
  }
}