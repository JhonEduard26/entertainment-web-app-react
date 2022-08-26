import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { Search } from "@components/ui/Search"
import { Trending } from "@components/movie/Trending"
import { Recommended } from "@components/movie/Recommended"
import { Category } from "@components/movie/Category"
import { getCategories, getRecommendedMovies, getTrendingMovies } from "@store/slices/thunks"

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
