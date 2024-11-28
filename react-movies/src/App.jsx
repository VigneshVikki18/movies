// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import { fetchMovies } from './api';
import './App.css';  // Add any global styles here

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleSearch = async (query) => {
    const data = await fetchMovies(query);
    setMovies(data.Search || []);
  };

  const toggleFavorite = (movie) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.imdbID === movie.imdbID)
        ? prev.filter((fav) => fav.imdbID !== movie.imdbID)
        : [...prev, movie]
    );
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                onFavoriteToggle={toggleFavorite}
                onMovieSelect={setSelectedMovieId}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                onMovieSelect={setSelectedMovieId}
                onFavoriteToggle={toggleFavorite}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
