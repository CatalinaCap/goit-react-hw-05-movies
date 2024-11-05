import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovieCredits } from '../../api';
import styles from './GetMoviesCredits.module.css';

const GetMoviesCredits = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const movieCast = await fetchMovieCredits(movieId);
        setCast(movieCast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Cast</h2>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={styles.castItem}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className={styles.actorImage}
              />
            )}
            <div>
              <p>
                {actor.name} as {actor.character}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

GetMoviesCredits.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};

export default GetMoviesCredits;
