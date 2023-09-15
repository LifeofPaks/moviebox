import { useEffect, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import axios from "axios";
// import Main from "./components/Main/Main";
import Loader from "react-loaders";
import MovieCard from "./components/MovieCard/MovieCard";
import { Route, Routes } from "react-router-dom";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import { fetchTopMovies } from "./api";


function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedMovies, setSelectedMovies] = useState({});
  const [showDetails, setShowDetails] = useState(false)


  useEffect(() => {
    async function fetchTop10Movies() {
      try {
        const data = await fetchTopMovies();
        setMovies(data.results.slice(0, 10));
        console.log(data.results[0])
        setSelectedMovies(data.results[0]);
      } catch (error) {
        console.error("Error fetching top movies:", error);
      }
    }


    fetchTop10Movies();
  }, []);

  const Layout = () =>{
    return(
      <>
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
      </>
    )
  }

  return (
    <main className="App">
        <Routes>
          <Route path="/" element ={<Layout/>}/>
          <Route path="/MovieInfo/:id" element={  <MovieInfo
           movies={movies}
           setMovies={setMovies}
           setError={setError}
           setIsLoading={setIsLoading}
           selectedMovies={selectedMovies}
           isLoading={isLoading}
           showDetails={showDetails}
           setShowDetails={setShowDetails}
        />}/>
        </Routes>

      
    </main>
  );
}

export default App;
