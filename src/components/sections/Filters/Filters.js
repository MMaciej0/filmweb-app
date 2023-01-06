import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './Filters.css';

import SearchBar from '../SearchBar/SearchBar';
import Checkbox from 'components/atoms/Checkbox/Checkbox';
import OutlineSingleSelectBtn from 'components/atoms/OutlineSingleSelectBtn/OutlineSingleSelectBtn';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';
import { useFilterContext } from 'contexts/filter/filter';
import { getData } from 'utils/http';
import { useLocation } from 'react-router-dom';

const Filters = () => {
  const [genres, setGenres] = useState([]);
  const {
    filterVisibility,
    hideFilters,
    searchValue,
    handleSearchChange,
    handleSearchMovie,
    handleSelectedGenres,
    handleSelectSort,
    handleApplyFilters,
    selectedGenres,
    sortValue,
  } = useFilterContext();

  const location = useLocation();

  useEffect(() => {
    getData('genres', setGenres);
  }, []);

  useEffect(() => {
    if (location.pathname === '/movies') {
      document.body.style.overflowY = filterVisibility ? 'hidden' : 'visible';
    }
  }, [filterVisibility]);

  return (
    <div
      className={
        filterVisibility ? 'filters__container visible' : 'filters__container'
      }
    >
      <aside className="filters">
        <button className="filters__hide" onClick={hideFilters}>
          <AiOutlineClose />
        </button>
        <div className="filters__list">
          <div className="filters__row search">
            <SearchBar
              searchValue={searchValue}
              setSeachValue={handleSearchChange}
              handleSearchMovie={handleSearchMovie}
            />
          </div>
          <div className="filters__row">
            <h3>Sort:</h3>
            <div className="filters__buttons">
              <OutlineSingleSelectBtn
                active={sortValue === 'random'}
                handleClick={() => handleSelectSort('random')}
              >
                Random
              </OutlineSingleSelectBtn>
              <OutlineSingleSelectBtn
                active={sortValue === 'newest'}
                handleClick={() => handleSelectSort('newest')}
              >
                Newest
              </OutlineSingleSelectBtn>
              <OutlineSingleSelectBtn
                active={sortValue === 'oldest'}
                handleClick={() => handleSelectSort('oldest')}
              >
                Oldest
              </OutlineSingleSelectBtn>
            </div>
          </div>
          <div className="filters__row">
            <h3>Genres:</h3>
            <ul>
              {genres.map((genre, index) => {
                const checked = selectedGenres.includes(genre);
                return (
                  <li key={index}>
                    <Checkbox
                      label={genre}
                      handleChange={handleSelectedGenres}
                      checked={checked}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="filters__submit">
          <PrimaryButton handleClick={handleApplyFilters}>Apply</PrimaryButton>
        </div>
      </aside>
    </div>
  );
};

export default Filters;
