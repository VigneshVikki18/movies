// src/pages/Home.js
import React, { useState } from 'react';
import { fetchMovies } from '../api';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';

const Home = ({ favorites, onFavoriteToggle, onMovieSelect }) => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleSearch = async (query) => {
    const data = await fetchMovies(query);
    setMovies(data.Search || []);
  };

  return (
    <div className="home">
      <SearchBar onSearch={handleSearch} />
      {selectedMovieId ? (
        <MovieDetails
          movieId={selectedMovieId}
          onClose={() => setSelectedMovieId(null)}
        />
      ) : (
        <MovieList
          movies={movies}
          onMovieSelect={setSelectedMovieId}
          onFavoriteToggle={onFavoriteToggle}
        />
      )}
    </div>
  );
};

export default Home;
