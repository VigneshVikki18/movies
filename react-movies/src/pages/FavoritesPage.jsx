// src/pages/FavoritesPage.js
import React from 'react';
import Favorites from '../components/Favorites';

const FavoritesPage = ({ favorites, onMovieSelect, onFavoriteToggle }) => {
  return (
    <div className="favorites-page">
      <Favorites
        favorites={favorites}
        onMovieSelect={onMovieSelect}
        onFavoriteToggle={onFavoriteToggle}
      />
    </div>
  );
};

export default FavoritesPage;
