import { BrowserRouter, Route, Routes } from "react-router-dom"
import { App } from "../App"
import { CategoryMovie } from "@components/movie/CategoryMovie"
import { MovieDetails } from "@components/movie/MovieDetails"
import { Movies } from "@components/movie/Movies"
import { SearchPage } from "@components/movie/SearchPage"
import { Series } from "@components/movie/Series"
import { Footer } from "@components/ui/Footer"
import { Header } from "@components/ui/Header"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="series" element={<Series />} />
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
