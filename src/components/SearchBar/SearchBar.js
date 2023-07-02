import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortingOption, setSortingOption] = useState('');

  const onSearchChange = (event) => {
    setSearchTerm({ searchTerm: event.target.value });
  }

  const onLocationChange = (event) => {
    setLocation({ location: event.target.value });
  }

  const onSortingOptionClick = (event) => {
    setSortingOption({ sortingOption: event.target.value });
  }

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li value={sortingOption} onClick={onSortingOptionClick} key={sortByOptionValue}>{sortByOption}</li>;
    });
  };

  const onSearchSubmit = (event) => {
    console.log({
      searchTerm: searchTerm,
      location: location,
      sortingOption: sortingOption
    })
  }

  return (
    <div className={styles.SearchBar}>
      <div className={styles.SearchBarSortOptions}>
        <ul >{renderSortByOptions()}</ul>
      </div>
      <div className={styles.SearchBarFields}>
        <input
          type="text"
          placeholder="Search Term"
          value={searchTerm}
          onChange={onSearchChange}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={onLocationChange}
        />
      </div>
      <div className={styles.SearchBarSubmit}>
        <a onClick={onSearchSubmit}>Let's Go</a>
      </div>
    </div>
  );
};

export default SearchBar;
