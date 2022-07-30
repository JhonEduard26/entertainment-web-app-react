import { Header } from "./components/ui/Header"
import { Search } from "./components/ui/Search"
import { Trending } from "./components/movie/Trending"
import { Recommended } from "./components/movie/Recommended"
import { Category } from "./components/movie/Category"
import { Footer } from "./components/ui/Footer"

export const App = () => {
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
