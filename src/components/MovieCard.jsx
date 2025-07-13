
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';



const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image?.original} alt={movie.name} />
      <div className="movie-info">
        <div className="rating"><FontAwesomeIcon icon={faStar} style={{ color: 'gold' }} /> {(movie.rating.average || 'N/A')}/10</div>
        <h3>{movie.name}</h3>
        <p>{movie.genres.join(', ')}</p>
        <Link to={`/movie/${movie.id}`} className="view-more">View More</Link>
      </div>
    </div>
  );
};

export default MovieCard;
