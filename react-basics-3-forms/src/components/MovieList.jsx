import { useState } from "react";
import moviesData from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

function MovieList() {
  const [movies, setMovies] = useState(moviesData);

  const addNewMovie = (newMovie) => {
    // Create a new array
    const updatedMovies = [...movies, newMovie];
   
    setMovies(updatedMovies);
  };

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

      <AddMovie addNewMovie={addNewMovie}></AddMovie>
      {HTMLMovies}
    </div>
  );
}

export default MovieList;
