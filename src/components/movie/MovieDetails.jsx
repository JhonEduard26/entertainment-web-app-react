import { useSelector, useDispatch } from 'react-redux'
import { Header } from '../ui/Header'
import { Footer } from '../ui/Footer'

export const MovieDetails = () => {

  const { movieActive } = useSelector(state => state.movies)




  return (
    <>
      <Header />
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
      </div>
      <Footer />
    </>
  )
}
