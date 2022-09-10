import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getRecommendedMovies } from "../../store/slices/thunks"
import { MovieCard } from "./"

export const Movies = () => {

  const dispatch = useDispatch()

  const { recommendedMovies: movies } = useSelector(state => state.movies)
  useEffect(() => {
    dispatch(getRecommendedMovies())
  }, [])


  return (
    <>
      <div className="series">
        <h2 className="series__title">Best movies for you</h2>
        <div className="series__container">
          {
            movies.map(movie => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                image={movie.poster_path}
                release={movie.release_date}
                title={movie.original_title}
                rated={movie.vote_average}
                overview={movie.overview}
                genres={movie.genre_ids}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
