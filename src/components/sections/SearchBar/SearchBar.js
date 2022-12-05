import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';

const SearchBar = ({
  searchValue,
  setSeachValue,
  handleSearchMovie,
  handleResetMovies,
}) => {
  return (
    <div className="search__container">
      <label htmlFor="search" className="search__label">
        <input
          className="search__input"
          placeholder="e.g.: title, director, actor..."
          id="search"
          type="text"
          value={searchValue}
          onChange={setSeachValue}
        />
        <PrimaryButton handleClick={handleSearchMovie}>
          <FaSearch className="search__icon" /> Search
        </PrimaryButton>
        <PrimaryButton handleClick={handleResetMovies}>Show All</PrimaryButton>
      </label>
    </div>
  );
};

export default SearchBar;
