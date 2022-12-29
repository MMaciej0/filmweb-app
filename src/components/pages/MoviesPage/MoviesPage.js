import React, { useState } from 'react';
import { FaSortAmountDown } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import './MoviesPage.css';
import OutlineButton from 'components/atoms/OutlineButton/OutlineButton';
import SearchBar from 'components/sections/SearchBar/SearchBar';
import Filters from 'components/sections/Filters/Filters';
import FilmList from 'components/sections/FilmList/FilmList';
import Pagination from 'components/sections/Pagination/Pagination';
import { useFilterContext } from 'contexts/filter/filter';

const MoviesPage = () => {
  const [filterVisibility, setFilterVisibility] = useState(false);

  const {
    handleSearchMovie,
    handleSearchChange,
    startIndex,
    endIndex,
    filteredMovies,
    searchValue,
    movies,
    moviesPerPage,
    currentPage,
    setCurrentPage,
  } = useFilterContext();

  return (
    <div className="movies__container">
      <div className="movies__control">
        <OutlineButton
          handleClick={() => setFilterVisibility(!filterVisibility)}
        >
          {filterVisibility ? 'Hide Filters' : 'Show Filters'}
          <FaSortAmountDown />
        </OutlineButton>
        <OutlineButton>
          Selected Options
          <FaChevronDown />
        </OutlineButton>
      </div>

      <div className="movies__content">
        <div className="movies__row">
          <Filters
            visibility={filterVisibility}
            setVisibility={setFilterVisibility}
          />

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
            <FilmList
              movies={
                filteredMovies.length
                  ? filteredMovies.slice(startIndex, endIndex)
                  : movies.slice(startIndex, endIndex)
              }
            />
          </main>
        </div>
        <Pagination
          itemsPerPage={moviesPerPage}
          totalItems={
            filteredMovies.length ? filteredMovies.length : movies.length
          }
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          maxPages={5}
        />
      </div>
    </div>
  );
};

export default MoviesPage;
