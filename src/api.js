const API_KEY = 'f43d8d8d308bd405752f75392e23676d';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch trending movies');
  }
  const data = await response.json();
  return data.results;
};

export const searchMovies = async query => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  if (!response.ok) {
    throw new Error('Failed to search movies');
  }
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movie details');
  }
  const data = await response.json();
  return data;
};

// Adaugă funcțiile pentru actorii și recenzile filmului
export const fetchMovieCredits = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movie credits');
  }
  const data = await response.json();
  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movie reviews');
  }
  const data = await response.json();
  return data.results;
};
