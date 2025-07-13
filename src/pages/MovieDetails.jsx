import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <Link to="/" className="back-btn">← Back</Link>
      <div className="detail-content">
        <img src={movie.image?.original} alt={movie.name} />
        <div className="detail-text">
          <h1>{movie.name}</h1>
          <div className="rating">⭐ {(movie.rating.average || 'N/A')}/10</div>
          <p dangerouslySetInnerHTML={{ __html: movie.summary }}></p>
          <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
          <p><strong>Language:</strong> {movie.language}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
