import { useSelector } from 'react-redux'
import { MovieCard } from "./MovieCard"

export const Recommended = () => {

  const { recommendedMovies } = useSelector(state => state.movies)

  return (
    <section className="recommended">
      <h2 className="recommended__title">Recommended for you</h2>
      <div className="recommended__list">
        {
          recommendedMovies.map(movie => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              release={movie.release_date}
              image={movie.poster_path}
              isAdult={movie.adult}
            />
          ))
        }
      </div>
    </section>
  )
}
