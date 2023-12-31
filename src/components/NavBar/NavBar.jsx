import React, { useState } from "react";
import "./NavBar.scss";
import Logo from "../../images/tv.png";
import Menu from "../../images/Menu alt 4.svg";
import axios from "axios";
import Loader from "react-loaders";

const NavBar = ({ setMovies, setError, setIsLoading, isLoading, error }) => {
  const [search, setSearch] = useState("");

  const API_URL = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=14fafd0c8dac1e1c2ab6222eeb3a9da0`;

  const getSearchedMovie = async () => {
    try {
      setIsLoading(true);
      const {
        data: { results },
      } = await axios.get(`${API_URL}`);
      setMovies(results);
    } catch (e) {
        setMovies([]);
        setError(`${e.message}`);
    }
  };

  const searchMovies = (e) => {
    e.preventDefault();
      getSearchedMovie();
    setSearch("");
  };

  return (
    <>
      <nav>
        <div className="logoWrapper">
          <img src={Logo} alt="logo" />

          <h1>MovieBox</h1>
        </div>

        <form onSubmit={searchMovies}>
          <input
            type="text"
            placeholder="What do you want to search?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>
            <img
              src="https://img.icons8.com/ios-filled/100/FFFFFF/search--v1.png"
              alt="search--v1"
            />
          </button>
        </form>

        <div className="cta">
          <p>Sign in</p>
          <button className="hamburger">
            <img src={Menu} alt="menu" />
          </button>
        </div>
      </nav>
      { isLoading && <Loader type="ball-clip-rotate" />}

    </>
  );
};

export default NavBar;
