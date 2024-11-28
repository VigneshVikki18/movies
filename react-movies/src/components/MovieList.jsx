// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieSelect, onFavoriteToggle }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          onMovieSelect={onMovieSelect}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default MovieList;
