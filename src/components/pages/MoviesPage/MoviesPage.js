import React, { useState } from 'react';
import { FaSortAmountDown } from 'react-icons/fa';
import { useFilterContext } from 'contexts/filter/filter';
import './MoviesPage.css';
import OutlineButton from 'components/atoms/OutlineButton/OutlineButton';
import SearchBar from 'components/sections/SearchBar/SearchBar';
import Filters from 'components/sections/Filters/Filters';
import FilmList from 'components/sections/FilmList/FilmList';
import Pagination from 'components/sections/Pagination/Pagination';
import { useEffect } from 'react';

const MoviesPage = () => {
  const [moviesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    toggleFilters,
    filterVisibility,
    searchValue,
    clearFilters,
    handleSearchChange,
    handleSearchMovie,
    filteredMovies,
  } = useFilterContext();

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredMovies]);

  const endIndex = moviesPerPage * currentPage;
  const startIndex = endIndex - moviesPerPage;

  return (
    <div className="movies__container">
      <div className="movies__control">
        <OutlineButton handleClick={toggleFilters}>
          {filterVisibility ? 'Hide Filters' : 'Show Filters'}
          <FaSortAmountDown />
        </OutlineButton>
        <OutlineButton handleClick={clearFilters}>Clear Filters</OutlineButton>
      </div>
      <div className="movies__content">
        <div className="movies__row">
          <Filters />
          <main className="movies-list__container">
            <div
              className={
                filterVisibility
                  ? 'movies-list__search visible'
                  : 'movies-list__search'
              }
            >
              <SearchBar
                searchValue={searchValue}
                setSeachValue={handleSearchChange}
                handleSearchMovie={handleSearchMovie}
              />
            </div>
            <FilmList movies={filteredMovies.slice(startIndex, endIndex)} />
            <Pagination
              itemsPerPage={moviesPerPage}
              totalItems={filteredMovies.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              maxPages={5}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;
