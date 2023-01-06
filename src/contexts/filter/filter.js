import React, { useEffect, createContext, useReducer, useContext } from 'react';
import { useGlobalContext } from 'contexts/global/global';
import reducer from './reducer';

const FilterContext = createContext();

const initialState = {
  allMovies: [],
  filteredMovies: [],
  searchValue: '',
  sortValue: 'random',
  selectedGenres: [],
  filterVisibility: false,
};

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: 'SETUP_MOVIES', payload: movies });
  }, [movies]);

  useEffect(() => {
    if (!state.searchValue) {
      dispatch({ type: 'APPLY_FILTERS' });
    }
  }, [state.searchValue]);

  const toggleFilters = () => {
    return dispatch({ type: 'TOGGLE_FILTERS' });
  };

  const hideFilters = () => {
    return dispatch({ type: 'HIDE_FILTERS' });
  };

  const clearFilters = () => {
    return dispatch({ type: 'CLEAR_FILTERS' });
  };

  const handleSearchChange = (e) => {
    dispatch({ type: 'UPDATE_SEARCH_VALUE', payload: e.target.value });
  };

  const handleSearchMovie = () => {
    if (!state.searchValue) return;
    dispatch({ type: 'SEARCH_MOVIE' });
  };

  const handleSelectedGenres = (genre) => {
    dispatch({ type: 'UPDATE_SELECTED_GENRES', payload: genre });
  };

  const handleSelectSort = (sort) => {
    dispatch({ type: 'UPDATE_SORT', payload: sort });
  };

  const handleApplyFilters = () => {
    dispatch({ type: 'APPLY_FILTERS' });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        toggleFilters,
        handleSearchChange,
        handleSearchMovie,
        hideFilters,
        handleSelectedGenres,
        clearFilters,
        handleSelectSort,
        handleApplyFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
