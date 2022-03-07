import { useState, useEffect } from "react";

import "./App.css";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";
import { requestMovies } from "./API/API";

import MovieDetails from "./components/Movies";
import SearchBar from "./components/SearchBar";
import ResetFilter from "./components/ReserFilters";
import ScrollTop from "./components/ScrollTop";
import EmptyResults from "./components/EmptyResults";

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

  const saveToLocalStorageFav = (items) => {
    localStorage.setItem("movieFavourites", JSON.stringify(items));
  };

  const saveToLocalStorageWatch = (items) => {
    localStorage.setItem("movieWatchLater", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    if (!isDuplicate(favourites, movie)) {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorageFav(newFavouriteList);
    }
  };

  const addWatchLaterMovie = (movie) => {
    if (!isDuplicate(watchLater, movie)) {
      const newWatchLaterList = [...watchLater, movie];
      setWatchLater(newWatchLaterList);
      saveToLocalStorageWatch(newWatchLaterList);
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorageFav(newFavouriteList);
  };

  const removeWatchLaterMovie = (movie) => {
    const newWatchLaterList = watchLater.filter(
      (favourite) => favourite.id !== movie.id
    );

    setWatchLater(newWatchLaterList);
    saveToLocalStorageWatch(newWatchLaterList);
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

      <div className="movie-nav-filter-container">
        <ResetFilter clearResult={clearResults} />
        <div className="movies-nav">
          <Link to="/watch-later">Watch Later</Link>
          <Link to="/favourites">Favourites</Link>
        </div>
      </div>
      {noResults && <EmptyResults text="No results found." />}
      <div className="main-content">{renderedMovies}</div>
      <ScrollTop />
    </div>
  );
};

export default App;
