import { useSelector } from 'react-redux'
import { MovieCard } from "./MovieCard"

export const Trending = () => {

  const { movies } = useSelector(state => state.movies)

  return (
    <section className="trending">
      <h2 className="trending__title">Trending</h2>
      <div className="trending__slider">
        {
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.original_title}
              release={movie.release_date}
              image={movie.backdrop_path}
              isAdult={movie.adult}
            />
          ))
        }
      </div>
    </section>
  )
}