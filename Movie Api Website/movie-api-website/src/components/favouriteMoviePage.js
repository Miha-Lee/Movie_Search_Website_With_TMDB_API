import React, { useContext } from "react";
import { GlobalContext } from "../favouriteContext/GlobalState";

const FavouriteMoviePage = () => {
  const { favouritelist, removeMovieFromfavouritelist } =
    useContext(GlobalContext);

  return (
    <>
      {favouritelist.length > 0 ? (
        <div className="container">
          <div className="content">
            {favouritelist.map((movie) => (
              <div className="card" key={movie.id}>
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
                      {movie.release_date && (
                        <span>({movie.release_date})</span>
                      )}
                    </div>
                    <div>⭐{movie.vote_average}</div>
                    <p className="overview">{movie.overview}</p>
                    <button
                      className="btn-error"
                      onClick={() => {
                        removeMovieFromfavouritelist(movie.id);
                      }}
                    >
                      Remove From List
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h1 className="no-movies">No movies in your list</h1>
      )}
    </>
  );
};

export default FavouriteMoviePage;
