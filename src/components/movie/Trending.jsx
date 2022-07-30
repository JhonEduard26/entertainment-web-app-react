import { useSelector } from 'react-redux'
import { Loader } from '../ui/Loader'
import { MovieCard } from "./MovieCard"

export const Trending = () => {

  const { movies } = useSelector(state => state.movies)
  const { isLoading } = useSelector(state => state.ui)

  return (
    <section className="trending">
      <h2 className="trending__title">Trending</h2>
      <div className="trending__slider">
        {
          isLoading
            ? <Loader />
            : movies.map((movie) => (
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