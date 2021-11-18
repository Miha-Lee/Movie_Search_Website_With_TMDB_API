import React, { useContext } from "react";
import { GlobalContext } from "../favouriteContext/GlobalState";

const MovieCard = ({ movie }) => {
  const { addMovieTofavouritelist, favouritelist } = useContext(GlobalContext);
  let storedMovie = favouritelist.find((o) => o.id === movie.id);
  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div className="card">
      <div
        className="frontWeb"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        }}
      >
        <p>{movie.title}</p>
      </div>
      <div className="back">
        <div>
          <div className="release_date">
            {movie.title}
            {movie.release_date && <span>({movie.release_date})</span>}
          </div>
          <div>⭐{movie.vote_average}</div>
          <p className="overview">{movie.overview}</p>
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => {
              addMovieTofavouritelist(movie);
            }}
          >
            Add To Favourite
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
