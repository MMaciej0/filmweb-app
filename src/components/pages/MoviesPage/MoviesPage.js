import React, { useState, useEffect, useReducer } from 'react';
import { FaSortAmountDown } from 'react-icons/fa';
import { useGlobalContext } from 'contexts/global/global';
import { getData } from 'utils/http';
import reducer from './moviesReducer';
import './MoviesPage.css';
import OutlineButton from 'components/atoms/OutlineButton/OutlineButton';
import SearchBar from 'components/sections/SearchBar/SearchBar';
import Filters from 'components/sections/Filters/Filters';
import FilmList from 'components/sections/FilmList/FilmList';
import Pagination from 'components/sections/Pagination/Pagination';

const initialState = {
  filteredMovies: [],
  searchValue: '',
  sortValue: '',
  selectedGenres: [],
  filterVisibility: false,
};

const MoviesPage = () => {
  const [moviesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const { movies } = useGlobalContext();

  const endIndex = moviesPerPage * currentPage;
  const startIndex = endIndex - moviesPerPage;

  useEffect(() => {
    getData('genres', setGenres);
  }, []);

  const handleSearchChange = (e) => {
    dispatch({ type: 'UPDATE_SEARCH_VALUE', payload: e.target.value });
  };

  const handleSearchMovie = () => {
    if (!state.searchValue) return;
    dispatch({ type: 'SEARCH_MOVIE', payload: movies });
    setCurrentPage(1);
  };

  const hideFilters = () => {
    return dispatch({ type: 'HIDE_FILTERS' });
  };

  const handleSelectedGenres = (genre) => {
    dispatch({ type: 'UPDATE_SELECTED_GENRES', payload: genre });
  };

  console.log(state.selectedGenres);
  return (
    <div className="movies__container">
      <div className="movies__control">
        <OutlineButton handleClick={() => dispatch({ type: 'TOGGLE_FILTERS' })}>
          {state.filterVisibility ? 'Hide Filters' : 'Show Filters'}
          <FaSortAmountDown />
        </OutlineButton>
        <OutlineButton handleClick={() => dispatch({ type: 'CLEAR_FILTERS' })}>
          Clear Filters
        </OutlineButton>
      </div>

      <div className="movies__content">
        <div className="movies__row">
          <Filters
            visibility={state.filterVisibility}
            hideFilters={hideFilters}
            handleSearchMovie={handleSearchMovie}
            handleSearchChange={handleSearchChange}
            searchValue={state.searchValue}
            genres={genres}
            handleSelectedGenres={handleSelectedGenres}
          />

          <main className="movies-list__container">
            <div
              className={
                state.filterVisibility
                  ? 'movies-list__search visible'
                  : 'movies-list__search'
              }
            >
              <SearchBar
                searchValue={state.searchValue}
                setSeachValue={handleSearchChange}
                handleSearchMovie={handleSearchMovie}
              />
            </div>

            <FilmList
              movies={
                state.filteredMovies.length
                  ? state.filteredMovies.slice(startIndex, endIndex)
                  : movies.slice(startIndex, endIndex)
              }
            />

            <Pagination
              itemsPerPage={moviesPerPage}
              totalItems={
                state.filteredMovies.length
                  ? state.filteredMovies.length
                  : movies.length
              }
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
