import "../css/ResetFilter.css";

function ResetFilters({ clearResult }) {
  return (
    <div className="button-container">
      <button onClick={clearResult} className="clear-filters">
        Reset Filters
      </button>
    </div>
  );
}

export default ResetFilters;
