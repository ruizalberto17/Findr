import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

function SearchBar({ searchYelp }) {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState(sortByOptions["Best Match"]);

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          onClick={() => handleSortByChange(sortByOptionValue)}
          className={sortBy === sortByOptionValue ? styles.active : ""}
        >
          {sortByOption}
        </li>
      );
    });
  };

  const handleSortByChange = (sortByOptionValue) => {
    setSortBy(sortByOptionValue);
  };


  const handleSearch = () => {
    searchYelp(term, location, sortBy);
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );
}

export default SearchBar;