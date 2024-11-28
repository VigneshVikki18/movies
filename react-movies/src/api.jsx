// src/api.js
import axios from 'axios';

const API_KEY = '57d201ad';
const BASE_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  const response = await axios.get(BASE_URL, {
    params: { s: query, apiKey: API_KEY },
  });
  return response.data;
};

export const fetchMovieDetails = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: { i: id, apiKey: API_KEY },
  });
  return response.data;
};
