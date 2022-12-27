import React, { useState } from 'react';
import { FaSortAmountDown } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from 'contexts/global/global';
import './MoviesPage.css';
import OutlineButton from 'components/atoms/OutlineButton/OutlineButton';
import SearchBar from 'components/sections/SearchBar/SearchBar';
import Filters from 'components/sections/Filters/Filters';
import FilmList from 'components/sections/FilmList/FilmList';

const MoviesPage = () => {
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [moviesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { movies } = useGlobalContext();

  const endIndex = moviesPerPage * currentPage;
  const startIndex = endIndex - moviesPerPage;

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
            <SearchBar />
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
    </div>
  );
};

export default MoviesPage;
