import React from "react";
import "./Hero.scss";
import NavBar from "../NavBar/NavBar";


const Hero = ({ movies, setMovies, setError, selectedMovies, isLoading, setIsLoading }) => {
  const IMAGE_PATH = `https://image.tmdb.org/t/p/original`;

  return (
    <header
      className={`hero ${isLoading ? "black" : ""}`}
      style={{ backgroundImage: `url('${IMAGE_PATH}${selectedMovies.backdrop_path}')` }}
      
    >
      <NavBar movies={movies} setMovies={setMovies} setError={setError} setIsLoading={setIsLoading} isLoading={isLoading}/>
      {!isLoading ? (
        <div className="movieDetails">
          <h1 className="title">{selectedMovies.title}</h1>
          <div className="left">
            <img
              width="35"
              src="https://img.icons8.com/color/48/imdb.png"
              alt="imdb"
            />
            <p className="text">{selectedMovies.vote_average}0.0 / 100</p>
          </div>
          <p className="overview">
            {selectedMovies.overview ? selectedMovies.overview : null}
          </p>

          <button className="trailer">
            <img
              src="https://img.icons8.com/ios-filled/100/FFFFFF/circled-play.png"
              alt="circled-play"
            />
            Watch Trailer
          </button>
        </div> 
        
      ) : ''}

      <div className="overlay"></div>
    </header>
  );
};

export default Hero;
