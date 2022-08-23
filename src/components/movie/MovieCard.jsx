import { useNavigate } from 'react-router-dom'
export const MovieCard = ({ id, title, release, isAdult, image, overview, rated, genres }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/movies/${id}`)
  }

  return (
    <div className="moviecard" onClick={handleClick}>
      <figure className="moviecard__img-container">
        <img
          className="moviecard__img"
          src={`https://image.tmdb.org/t/p/w300${image}`}
          alt={title}
        />
      </figure>
      <div className="moviecard__details-container">
        <div className="moviecard__details">
          <span className="moviecard__year">{new Date(release).getFullYear() || ''}</span>
          <span className="moviecard__rated" >{isAdult && '18+'}</span>
        </div>
        <span className="moviecard__movie-name" >{title}</span>
      </div>
    </div>
  )
}
