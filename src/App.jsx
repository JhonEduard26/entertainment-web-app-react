import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { Search } from "./components/ui/Search"
import { Trending, Recommended, Category } from "./components/movie"

import { getCategories, getRecommendedMovies, getTrendingMovies } from "./store/slices/thunks"

export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendingMovies())
    dispatch(getRecommendedMovies())
    dispatch(getCategories())
  }, [])


  return (
    <>
      <Search />
      <Trending />
      <Recommended />
      <Category />
    </>
  )
}
