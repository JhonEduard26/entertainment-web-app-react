import { Header } from "./components/main/Header"
import { Search } from "./components/main/Search"
import { Trending } from "./components/main/Trending"

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <Trending />
    </div>
  )
}
