import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTvSerieById } from "../../store/slices/thunks";
// import { SerieCard } from "./SerieCard";
import { useParams } from "react-router-dom";

export const SerieDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTvSerieById(id));
    // dispatch(getSimilarMovies(id));
  }, [id]);

  const { series } = useSelector((state) => state.movies);

  const [serie] = series;

  return (
    <div className="moviedetails">
      <figure className="moviedetails__img-container">
        <img
          className="moviedetails__img"
          src={`https://image.tmdb.org/t/p/w500${serie?.backdrop_path}`}
          alt={serie?.title}
        />
      </figure>
      <div className="moviedetails__text-container">
        <h3 className="moviedetails__title">{serie?.name}</h3>
        <span className="moviedetails__rated">⭐{serie?.vote_average}</span>
      </div>
      <p className="moviedetails__overview">{serie?.overview}</p>
      <p className="moviedetails__genres">Categories</p>
      <div className="moviedetails__genres-container">
        {serie?.genres?.map(genre => (
          <span key={genre.id} className="moviedetails__genres-names">{genre.name}</span>
        ))}
      </div>
      <h4 className="moviedetails__similar-title">Similar series</h4>
      {/* <div className="moviedetails__similar-movies-container">
        {similarMovies?.map((movie, idx) => {
          if (idx < 5) {
            return (
              <SerieCard
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
            );
          }
        })}
      </div> */}
    </div>
  );
};
