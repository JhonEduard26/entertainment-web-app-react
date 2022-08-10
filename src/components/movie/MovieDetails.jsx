import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getMovieById, getSimilarMovies } from '../../store/slices/thunks'
import { MovieCard } from './MovieCard'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovieById(id))
    dispatch(getSimilarMovies(id))
  }, [id])

  const { similarMovies, movies } = useSelector(state => state.movies)

  const [movie] = movies

  return (
    <div className='moviedetails'>
      <figure className='moviedetails__img-container'>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={'title'}
        />
      </figure>
      <div className='moviedetails__text-container'>
        <h3 className='moviedetails__title'>{movie.title}</h3>
        <span className='moviedetails__rated'>⭐{movie.vote_average}</span>
      </div>
      <p className='moviedetails__overview'>
        {movie.overview}
      </p>
      <p className='moviedetails__genres'>
        Categories
      </p>
      <span>
        {'genres'}
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
  )
}