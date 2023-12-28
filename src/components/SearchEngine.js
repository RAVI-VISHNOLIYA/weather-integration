import React from "react";

function SearchEngine({ query, setQuery, search }) {
  return (
    <div className="SearchEngine">
      <input
        type="text"
        className="city-search"
        placeholder="Enter City Name"
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      <button onClick={search}><i className="fas fa-search" style={{ fontSize: "18px" }}></i></button>
    </div>
  );
}

export default SearchEngine;
