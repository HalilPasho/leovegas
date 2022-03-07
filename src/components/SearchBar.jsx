import { useEffect, useState } from "react";
import "../css/SearchBar.css";

const SearchBar = ({ onSearchSubmit, clearResults }) => {
  const [term, setTerm] = useState("");
  const [debouncedValue, setDebouncedValue] = useState(term);

  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedValue), 500);
    return () => clearTimeout(timer);
  }, [debouncedValue]);

  // submit a new search
  useEffect(() => {
    if (term !== "") {
      onSearchSubmit(term, "");
    } else {
      clearResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  return (
    <div className="searchbar">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Search movie. . ."
        onChange={(e) => setDebouncedValue(e.target.value)}
        value={debouncedValue}
      />
    </div>
  );
};

export default SearchBar;
