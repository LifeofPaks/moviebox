import axios from "axios";

const apiKey = "14fafd0c8dac1e1c2ab6222eeb3a9da0";
const baseUrl = "https://api.themoviedb.org/3";

export const fetchTopMovies = async () => {
  try {
    const response = await axios.get(`${baseUrl}/movie/top_rated`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${baseUrl}/search/movie`, {
      params: {
        api_key: apiKey,
        query,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieById = async (movieId) => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${movieId}`, {
      params: {
        api_key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};