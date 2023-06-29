import React from "react";

const SearchBar = () => {
  return (
    <>
      <form>
        <input placeholder="Search Business" type="text"></input>
        <input placeholder="Where?" type="text"></input>
        <button type="submit">Search</button>
      </form>
    </>
  )
};

export default SearchBar;