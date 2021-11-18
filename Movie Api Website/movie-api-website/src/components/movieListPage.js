import React, { useState } from "react";
import Card from "./movieCard";

const MovieListPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=3f935de0bb20db5105f608871078ea8d&language=en-US&page=1&include_ault=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.errors) {
          setResults([]);
        } else {
          setResults(data.results);
        }
      });
  };

  return (
    <div>
      <div className="container">
        <div className="movie-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search the movies..."
              value={query}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <div className="content">
              {results.map((movie) => {
                if (movie.poster_path) {
                  return <Card key={movie.id} movie={movie} />;
                }
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieListPage;
