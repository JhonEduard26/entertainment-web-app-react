import { Header } from "./components/ui/Header"
import { Search } from "./components/ui/Search"
import { Trending } from "./components/movie/Trending"

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Trending />
    </div>
  )
}
