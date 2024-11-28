// src/components/MovieCard.js
import React from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const MovieCard = ({ movie, onMovieSelect, onFavoriteToggle, isFavorite }) => {
  return (
    <div className="movie-card" onClick={() => onMovieSelect(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onFavoriteToggle(movie);
        }}
        className="favorite-button"
      >
        {isFavorite ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
      </button>
    </div>
  );
};

export default MovieCard;
