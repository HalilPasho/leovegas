import { useState } from "react";

import "./App.css";
import CompanyDetails from "./components/Movies";
import SearchBar from "./components/SearchBar";
import { requestCompanies } from "./API/API";
import ResetFilter from "./components/ReserFilters";

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const clearResults = () => setCompanies([]);

  const onSearchSubmit = async (term) => {
    const companyArray = await requestCompanies(term);
    setNoResults(companyArray.results.length === 0);
    setCompanies(companyArray.results);
  };

  const renderedCompanies = companies.map((company, i) => {
    return <CompanyDetails companies={company} key={i} />;
  });

  return (
    <div className="app">
      <h1 className="title">LeoVegas</h1>
      <div className="disclaimer-container">
        <p className="disclaimer">
          Search <span className="highlight">your favourite movie !</span>
        </p>
      </div>

      <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
      <ResetFilter clearResult={clearResults} />
      <div className="checkbox-container"></div>
      {noResults && <p className="no-results">No results found.</p>}
      <div className="main-content">{renderedCompanies}</div>
    </div>
  );
};

export default App;
