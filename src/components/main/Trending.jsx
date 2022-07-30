import { MovieCard } from "./MovieCard"

export const Trending = ({ movies }) => {
  return (
    <section className="trending">
      <h2 className="trending__title">Trending</h2>
      <div className="trending__slider">
        {
          movies.map(movie => (
            <MovieCard />
          ))
        }
      </div>
    </section>
  )
}

Trending.defaultProps = {
  movies: Array(3).fill('')
}
