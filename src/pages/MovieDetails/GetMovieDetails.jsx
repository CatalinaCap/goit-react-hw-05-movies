import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovieDetails } from '../../api';
import styles from './GetMovieDetails.module.css';

const GetMovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Loading movie details...</p>;

  const { title, overview, poster_path } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <div className={styles.container}>
      <h1>{movie.title}</h1>
      <img src={imageUrl} alt={title} />
      <p>{overview}</p>
      <nav>
        <Link to={`/movies/${movieId}/cast`} className={styles.link}>
          Cast
        </Link>
        <Link to={`/movies/${movieId}/reviews`} className={styles.link}>
          Reviews
        </Link>
      </nav>
    </div>
  );
};

GetMovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    overview: PropTypes.string,
  }),
};

export default GetMovieDetails;
