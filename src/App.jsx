import { Header } from "./components/ui/Header"
import { Search } from "./components/ui/Search"
import { Trending } from "./components/movie/Trending"
import { Recommended } from "./components/movie/Recommended"
import { Category } from "./components/movie/Category"
import { Footer } from "./components/ui/Footer"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getCategories, getTrendingMovies } from "./store/slices/thunks"

export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTrendingMovies())
    dispatch(getCategories())
  }, [])


  return (
    <div className="App">
      <Header />
      <Search />
      <Trending />
      <Recommended />
      <Category />
      <Footer />
    </div>
  )
}
