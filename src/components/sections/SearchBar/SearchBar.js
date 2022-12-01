import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';

const SearchBar = ({ searchValue, setSeachValue }) => {
  return (
    <div className="search__container">
      <label htmlFor="search" className="search__label">
        <input
          className="search__input"
          placeholder="Search movies..."
          id="search"
          type="text"
          value={searchValue}
          onChange={setSeachValue}
        />
        <PrimaryButton>
          <FaSearch className="search__icon" /> Search
        </PrimaryButton>
      </label>
    </div>
  );
};

export default SearchBar;
