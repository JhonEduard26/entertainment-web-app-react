import { BrowserRouter, Route, Routes } from "react-router-dom"
import { App } from "../App"
import { MovieDetails } from "../components/movie/MovieDetails"
import { Series } from "../components/movie/Series"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="series" element={<Series />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter >
  )
}
