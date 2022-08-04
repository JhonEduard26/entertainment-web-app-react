import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getSimilarMovies } from '../../store/slices/thunks'
import { MovieCard } from './MovieCard'

export const MovieDetails = () => {

  const dispatch = useDispatch()
  const { movieActive } = useSelector(state => state.movies)
  const { similarMovies } = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(getSimilarMovies(movieActive.id))
  }, [])



  return (
    <>
      <div className='moviedetails'>
        <figure className='moviedetails__img-container'>
          <img
            src={`https://image.tmdb.org/t/p/w300${movieActive?.image}`}
            alt={movieActive?.title}
          />
        </figure>
        <div className='moviedetails__text-container'>
          <h3 className='moviedetails__title'>{movieActive?.title}</h3>
          <span className='moviedetails__rated'>⭐{movieActive?.rated}</span>
        </div>
        <p className='moviedetails__overview'>
          {movieActive?.overview}
        </p>
        <p className='moviedetails__genres'>
          Categories
        </p>
        <span>
          {movieActive.genres}
        </span>
        <h4 className='moviedetails__similar-title'>Similar movies</h4>
        <div className='moviedetails__similar-movies-container'>
          {
            similarMovies.map((movie, idx) => {
              if (idx < 5) {
                return (
                  <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    release={movie.release_date}
                    isAdult={movie.isAdult}
                    image={movie.poster_path}
                    overview={movie.overview}
                    rated={movie.rated}
                    genres={movie.genres}
                  />
                )
              }
            }
            )
          }
        </div>
      </div>
    </>
  )
}
