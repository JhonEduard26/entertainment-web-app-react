import { MovieCard } from "./MovieCard"

export const Recommended = () => {
  return (
    <section className="recommended">
      <h2 className="recommended__title">Recommended for you</h2>
      <div className="recommended__list">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </section>
  )
}
