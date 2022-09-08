import { BrowserRouter, Route, Routes } from "react-router-dom"
import { App } from "../App"
import { CategoryMovie } from "../components/movie/CategoryMovie"
import { Movies } from "../components/movie/Movies"
import { MovieDetails } from "../components/movie/MovieDetails"
import { SearchPage } from "../components/movie/SearchPage"
import { Footer } from "../components/ui/Footer"
import { Header } from "../components/ui/Header"
import { Series } from "../components/serie/Series"
import { SerieDetails } from "../components/serie/SerieDetails"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<App />} />
        <Route path="series" element={<Series />} />
        <Route path="series/:id" element={<SerieDetails />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />} />
        <Route path="categories/:id" element={<CategoryMovie />} />
        <Route path="search/:query" element={<SearchPage />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter >
  )
}
