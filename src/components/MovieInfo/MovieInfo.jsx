import React, { useEffect, useState } from "react";
import "./MovieInfo.scss";
import { useParams } from "react-router-dom";
import MovieInfoSideBar from "../MovieInfoSideBar/MovieInfoSideBar";
import Footer from "../Footer/Footer";
const MovieInfo = () => {
  const [movie, setMovieDetails] = useState(null);

  const IMAGE_PATH = `https://image.tmdb.org/t/p/original`;
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=14fafd0c8dac1e1c2ab6222eeb3a9da0&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
        setMovieDetails([]);
      });
  }, [id]);

  return (
    movie && (
      <div className="movieInfo">
        <MovieInfoSideBar />

        <div className="checkk">
          <div className="info">
            <div className="posterWrapper">
              <img
                src={`${IMAGE_PATH}${movie.backdrop_path}`}
                alt={movie.title}
                className='poster'
              />
            </div>

            <div className=" section sec1">
              <h1 data-testid="movie-title" className="title">
                {movie.title}
              </h1>
              <img
                width="30"
                src="https://img.icons8.com/color/48/like--v1.png"
                alt="like--v1"
              />
            </div>
            <div className="section sec2">
              <div className="time">
                <p className="release-date" data-testid="movie-release-date">
                  Release date: {movie.release_date}
                </p>
                <p className="runtime" data-testid="movie-runtime">
                  Runtime: {movie.runtime} Minutes
                </p>
              </div>

              <div className="showtimes">
                <img
                  width="20"
                  src="https://img.icons8.com/ios/100/FFFFFF/ticket--v1.png"
                  alt="ticket--v1"
                />
                <p>See Showtimes</p>
              </div>
            </div>

            <div className="section sec3">
              <p className="overview" data-testid="movie-overview">
                {movie.overview ? movie.overview : null}
              </p>

              <div className="more">
                <img
                  width="20"
                  src="https://img.icons8.com/ios/100/000000/list--v1.png"
                  alt="list--v1"
                />
                <h4>More watch options</h4>
              </div>
            </div>
          </div>

          <Footer/>
        </div>
      </div>
    )
  );
};

export default MovieInfo;
