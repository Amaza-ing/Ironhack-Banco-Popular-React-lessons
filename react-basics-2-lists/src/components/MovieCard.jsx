function MovieCard(props) {
  const { movie, handleDelete } = props;

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      <button onClick={() => handleDelete(movie._id)}>Delete</button>
    </div>
  );
}

export default MovieCard;
