import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getMovieByCategory } from '../../store/slices/thunks'
import { Loader } from '../ui/Loader'
import { MovieCard } from './MovieCard'

export const CategoryMovie = () => {


  const { id } = useParams()

  const [idCategory, name] = id.split('-')

  const { isLoading } = useSelector(state => state.ui)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getMovieByCategory(idCategory))
  }, [])


  const { movies } = useSelector(state => state.movies)

  return (
    <div className="categorymovie">
      <div className="category__item">
        <div className="category__color" id={`category${idCategory}`}></div>
        <span className="category__name">{name}</span>
      </div>
      {
        isLoading
          ? <Loader />
          : <div className="recommended__list">
            {
              movies.map(movie => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  release={movie.release_date}
                  image={movie.poster_path}
                  isAdult={movie.adult}
                  rated={movie.vote_average}
                  overview={movie.overview}
                  genres={movie.genre_ids}
                />
              ))
            }
          </div>

      }
    </div>
  )
}
