import { useState } from "react";

import "./App.css";
import Logo from "./images/logo.png";
import MovieDetails from "./components/Movies";
import SearchBar from "./components/SearchBar";
import { requestMovies } from "./API/API";
import ResetFilter from "./components/ReserFilters";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const clearResults = () => setMovies([]);

  const onSearchSubmit = async (term) => {
    const movieArray = await requestMovies(term);
    setNoResults(movieArray.results.length === 0);
    setMovies(movieArray.results);
  };

  const renderedMovies = movies.map((movie, i) => {
    return <MovieDetails movies={movie} key={i} />;
  });

  return (
    <div className="app">
      <div className="movie-title-container">
        <img className="logo" src={Logo} alt="logo" />
        <h1 className="title">LeoVegas</h1>
      </div>

      <div className="disclaimer-container">
        <p className="disclaimer">
          Search <span className="highlight">your favourite movie !</span>
        </p>
      </div>

      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
      <ResetFilter clearResult={clearResults} />
      {noResults && <p className="no-results">No results found.</p>}
      <div className="main-content">{renderedMovies}</div>
    </div>
  );
};

export default App;
