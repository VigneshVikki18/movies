// src/components/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../api';

const MovieDetails = ({ movieId, onClose }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <button onClick={onClose}>Close</button>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <p>Year: {movie.Year}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Rating: {movie.imdbRating}</p>
      
    </div>
  );
};

export default MovieDetails;
