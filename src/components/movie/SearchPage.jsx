import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Search } from "../ui/Search"
import { getMovieByName } from "../../store/slices/thunks"
import { MovieCard } from "./MovieCard"

export const SearchPage = () => {


  const { query } = useParams()

  const { movies, totalResults } = useSelector(state => state.movies)

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getMovieByName(query))

  }, [query])


  return (
    <>
      <Search />
      <div className="searchpage">
        <h2 className="searchpage__title">Found {totalResults} results from "{query}"</h2>
        <div className="recommended__list">
          {
            movies.map(movie => {
              return (
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
              )
            })
          }
        </div>
      </div>
    </>
  )
}
