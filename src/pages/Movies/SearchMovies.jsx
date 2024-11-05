import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { searchMovies } from '../../api';
import styles from './SearchMovies.module.css';
import { Link } from 'react-router-dom';

const SearchMovies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async e => {
    e.preventDefault();
    try {
      const searchedMovies = await searchMovies(query);
      setMovies(searchedMovies);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter movie name"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
      <ul className={styles.movieList}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

SearchMovies.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default SearchMovies;
