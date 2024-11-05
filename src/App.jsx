import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/Shared/SharedLayout';
import GetTrending from './pages/Home/GetTrending';
import SearchMovies from './pages/Movies/SearchMovies';
import GetMovieDetails from './pages/MovieDetails/GetMovieDetails';
import GetMoviesCredits from './pages/Cast/GetMoviesCredits';
import GetMoviesReviews from './pages/Reviews/GetMoviesReviews';
import NotFound from './pages/Shared/NotFoundPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<GetTrending />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:movieId" element={<GetMovieDetails />} />
        <Route path="movies/:movieId/cast" element={<GetMoviesCredits />} />
        <Route path="movies/:movieId/reviews" element={<GetMoviesReviews />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
