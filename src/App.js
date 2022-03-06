import { useState, useEffect } from "react";

import "./App.css";
import Logo from "./images/logo.png";
import MovieDetails from "./components/Movies";
import SearchBar from "./components/SearchBar";
import { requestMovies } from "./API/API";
import ResetFilter from "./components/ReserFilters";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("movieFavourites"));
    const movieWatchLater = JSON.parse(localStorage.getItem("movieWatchLater"));
    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
    if (movieWatchLater) {
      setWatchLater(movieWatchLater);
    }
  }, []);

  // prevent to add dublicates to the localStorage
  const isDuplicate = (data, obj) =>
    data.some((el) =>
      Object.entries(obj).every(([key, value]) => value === el[key])
    );

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movieFavourites", JSON.stringify(items));
    localStorage.setItem("movieWatchLater", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    if (!isDuplicate(favourites, movie)) {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    }
  };

  const addWatchLaterMovie = (movie) => {
    if (!isDuplicate(watchLater, movie)) {
      const newWatchLaterList = [...watchLater, movie];
      setWatchLater(newWatchLaterList);
      saveToLocalStorage(newWatchLaterList);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeWatchLaterMovie = (movie) => {
    const newWatchLaterList = watchLater.filter(
      (favourite) => favourite.id !== movie.id
    );

    setWatchLater(newWatchLaterList);
    saveToLocalStorage(newWatchLaterList);
  };

  const clearResults = () => setMovies([]);

  const onSearchSubmit = async (term) => {
    const movieArray = await requestMovies(term);
    setNoResults(movieArray.results.length === 0);
    setMovies(movieArray.results);
  };

  const renderedMovies = movies.map((movie, i) => {
    return (
      <MovieDetails
        handleFavouritesClick={addFavouriteMovie}
        addWatchLaterMovie={addWatchLaterMovie}
        removeFavouriteMovie={removeFavouriteMovie}
        removeWatchLaterMovie={removeWatchLaterMovie}
        movies={movie}
        key={i}
      />
    );
  });

  return (
    <div className="app">
      <div className="movie-title-container">
        <img className="logo" src={Logo} alt="logo" />
        <h1 className="title">LeoVegas</h1>
      </div>
      <span className="msg-icn">The Lord of the Rings is the best !</span>
      <div className="disclaimer-container">
        <p className="disclaimer">
          Search <span className="highlight">your favourite movie !</span>
        </p>
      </div>

      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
      <ResetFilter clearResult={clearResults} />
      {noResults && <p className="no-results">No results found.</p>}
      <div className="main-content">{renderedMovies}</div>

      <ScrollTop />
    </div>
  );
};

export default App;
