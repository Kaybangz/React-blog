import React from "react";
import "./styles.css";

const SearchBar = ({ searchSubmit, searchValue, handleSearchKey, clearSearch }) => {
  return (
    <div className="searchBar__container">
      <form onSubmit={searchSubmit}>
        <input
          type="text"
          placeholder="Search By Category..."
          value={searchValue}
          onChange={handleSearchKey}
        />
        {searchValue && <span className="clearSearch" onClick={clearSearch}>X</span>}

        <button>search</button>
      </form>
    </div>
  );
};

export default SearchBar;
