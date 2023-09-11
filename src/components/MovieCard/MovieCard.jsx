import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ movie, setSelectedMovies, setShowDetails, isLoading, error }) => {

  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  const handleMovieDetails = () =>{
    setShowDetails(true)
    setSelectedMovies(movie)
  }
  return ( !isLoading && movie ?
    <div className="card">
      
    <div className="movieCard" onClick={() => setSelectedMovies(movie)}  data-testid= 'movie-card'>
      {movie.poster_path ? (
        <img src={`${IMAGE_PATH}${movie.poster_path}`} alt="poster" data-testid= 'movie-poster' className="poster"/>
      ) : (
        <img
          src="https://school.cistercian.org/wp-content/uploads/connections-images/breianna-bairrington/no-image-available.jpg"
          alt="no-image" className="no-image"
        />
      )}
      <div className="detailsWrapper">
      <h5 data-testid= 'movie-title'>{movie.title}</h5>
      <div className="left">
            <img
              width="35"
              src="https://img.icons8.com/color/48/imdb.png"
              alt="imdb"
            />
            <p className="text">{movie.vote_average} / 10</p>
          </div>
      <p className="releaseDate" data-testid= 'movie-release-date'>{movie.release_date}</p>
      </div>
  
    </div>
      <button onClick={handleMovieDetails} className="more">More details</button>
    </div> : ''
  );
};

export default MovieCard;
