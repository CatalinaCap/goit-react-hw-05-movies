import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchMovieReviews } from '../../api';
import styles from './GetMoviesReviews.module.css';

const GetMoviesReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul className={styles.reviewList}>
          {reviews.map(review => (
            <li key={review.id} className={styles.reviewItem}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
};

GetMoviesReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default GetMoviesReviews;
