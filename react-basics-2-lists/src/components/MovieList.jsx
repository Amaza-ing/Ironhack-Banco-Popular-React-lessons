import { useState } from "react";
import moviesData from "../movies-data.json";
import MovieCard from "./MovieCard";

function MovieList() {
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  const HTMLMovies = movies.map((movie) => {
    return (
      <MovieCard
        key={movie._id}
        movie={movie}
        handleDelete={deleteMovie}
      ></MovieCard>
    );
  });

  return (
    <div>
      <h2>Movie List</h2>

      {HTMLMovies}
    </div>
  );
}

export default MovieList;
