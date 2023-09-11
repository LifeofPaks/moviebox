import React, { useState } from "react";
import "./MovieInfo.scss";
const MovieInfo = ({ showDetails, selectedMovies, setShowDetails }) => {
    const IMAGE_PATH = `https://image.tmdb.org/t/p/original`;

  return (
    showDetails && (
      <div className="info">
        <img src={`${IMAGE_PATH}${selectedMovies.backdrop_path}`} alt="poster" className="poster" />
        <div className="movieDetails">
          <h1 className="title">{selectedMovies.title}</h1>
          <div className="left">
            <img
              width="35"
              src="https://img.icons8.com/color/48/imdb.png"
              alt="imdb"
            />
            <p className="text">{selectedMovies.vote_average} / 10</p>
          </div>
          <p className="overview">
            {selectedMovies.overview ? selectedMovies.overview : null}
          </p>

          <p className="releaseDate" data-testid= 'movie-release-date'>Release date: {selectedMovies.release_date}</p>

        </div>

        <button onClick={()=> setShowDetails(false)} className="close">
        <img width="20"src="https://img.icons8.com/ios-glyphs/90/FFFFFF/delete-sign.png" alt="delete-sign"/>
        </button>
      </div>
    )
  );
};

export default MovieInfo;
