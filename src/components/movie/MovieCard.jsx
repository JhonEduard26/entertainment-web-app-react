

export const MovieCard = () => {
  return (
    <div className="moviecard">
      <figure className="moviecard__img-container">
        <img
          className="moviecard__img"
          src="https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=600"
          alt="image"
        />
      </figure>
      <div className="moviecard__details-container">
        <div className="moviecard__details">
          <span className="moviecard__year">Year</span>
          <span className="moviecard__rated" >18+</span>
        </div>
        <span className="moviecard__movie-name" >Title</span>
      </div>
    </div>
  )
}
