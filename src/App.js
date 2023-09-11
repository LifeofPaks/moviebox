import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import axios from "axios";
// import Main from "./components/Main/Main";
import Loader from "react-loaders";
import MovieCard from "./components/MovieCard/MovieCard";
import { Route, Routes } from "react-router-dom";
import MovieInfo from "./components/MovieInfo/MovieInfo";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovies, setSelectedMovies] = useState({});
  const [showDetails, setShowDetails] = useState(false)

  const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=14fafd0c8dac1e1c2ab6222eeb3a9da0`;

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(`${API_URL}`);
        setMovies(results);
        setIsLoading(false);
        setSelectedMovies(results[0]);
      } catch (e) {
        setError(`Movie not available`);
        setMovies([]);
        setIsLoading(false)
      }
    };

    setTimeout(() => {
      fetchMovies();
    }, 2000);
  }, []);

  return (
    <main className="App">
      <Hero
        movies={movies}
        setMovies={setMovies}
        setError={setError}
        setIsLoading={setIsLoading}
        selectedMovies={selectedMovies}
        isLoading={isLoading}
        error={error}
      />

      <section className="main">
        {isLoading && <Loader type="ball-clip-rotate" />}
        <div className="movies">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              setSelectedMovies={setSelectedMovies}
              setShowDetails={setShowDetails}
              isLoading={isLoading}
              error={error}
              />
              
              ))}
        </div>
      </section>

        <MovieInfo
           movies={movies}
           setMovies={setMovies}
           setError={setError}
           setIsLoading={setIsLoading}
           selectedMovies={selectedMovies}
           isLoading={isLoading}
           showDetails={showDetails}
           setShowDetails={setShowDetails}
        />
    </main>
  );
}

export default App;
