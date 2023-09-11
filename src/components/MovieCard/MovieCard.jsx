import React, { useState } from "react";
import "./MovieCard.scss";

const MovieCard = ({ movie, setSelectedMovies }) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="movieCard" onClick={() => setSelectedMovies(movie)}>
      {movie.poster_path ? (
        <img src={`${IMAGE_PATH}${movie.poster_path}`} alt="poster" />
      ) : (
        <img
          src="https://school.cistercian.org/wp-content/uploads/connections-images/breianna-bairrington/no-image-available.jpg"
          alt="no-image"
        />
      )}
      <h5>{movie.title}</h5>
    </div>
  );
};

export default MovieCard;
