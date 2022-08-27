import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getTvSeries } from "../../store/slices/thunks"
import { SerieCard } from "./SerieCard"

export const Series = () => {

  const dispatch = useDispatch()
  const { series } = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(getTvSeries())
  }, [])

  return (
    <>
      <div className="series">
        <h2 className="series__title">Best series for you</h2>
        <div className="series__container">
          {
            series.map(serie => (
              <SerieCard
                key={serie.id}
                id={serie.id}
                image={serie.poster_path}
                release={serie.first_air_date}
                name={serie.name}
                rated={serie.vote_average}
                overview={serie.overview}
                genres={serie.genre_ids}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
