// src/components/Favorites.js
import React from 'react';
import MovieList from './MovieList';

const Favorites = ({ favorites, onMovieSelect, onFavoriteToggle }) => {
  return (
    <div className="favorites">
      <h2>Favorites</h2>
      <MovieList
        movies={favorites}
        onMovieSelect={onMovieSelect}
        onFavoriteToggle={onFavoriteToggle}
      />
    </div>
  );
};

export default Favorites;
