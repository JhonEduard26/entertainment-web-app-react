import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getTvSeries } from "../../store/slices/thunks"
import { Footer } from "../ui/Footer"
import { Header } from "../ui/Header"
import { MovieCard } from "./MovieCard"

export const Series = () => {

  const dispatch = useDispatch()
  const { series } = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(getTvSeries())
  }, [])

  return (
    <>
      <Header />
      <div className="series">
        <h2 className="series__title">Best series for you</h2>
        <div className="series__container">
          {
            series.map(serie => (
              <MovieCard
                key={serie.id}
                id={serie.id}
                image={serie.poster_path}
                release={serie.first_air_date}
                title={serie.original_name}
                rated={serie.vote_average}
                overview={serie.overview}
                genres={serie.genre_ids}
              />
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}
