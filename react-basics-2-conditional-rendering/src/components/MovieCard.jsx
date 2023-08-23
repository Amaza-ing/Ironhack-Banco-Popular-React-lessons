function MovieCard(props) {
  const { movie, handleDelete } = props;

  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>

      {/* {movie.hasOscars && <p>Got the Oscar award</p>}
      {!movie.hasOscars && <p>This movie has no Oscars</p>} */}

      {movie.hasOscars ? (
        <p>Got the Oscar award</p>
      ) : (
        <p>This movie has no Oscars</p>
      )}

      <button onClick={() => handleDelete(movie._id)}>Delete</button>
    </div>
  );
}

export default MovieCard;
