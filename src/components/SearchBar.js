import React from "react";
import "../styles.css"
const SearchBar = ({ setSearch}) => {
    const handleSearch = (event) => {
      setSearch(event.target.value);
    };


    return (
        <div >
        <input
          onChange={handleSearch}
          className="search-bar"
          placeholder="Search Cards"
          type="search"
        ></input>
      </div>
    );
  };
  
  export default SearchBar;