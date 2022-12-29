import React, { createContext, useContext, useState, useEffect } from 'react';
import { useGlobalContext } from 'contexts/global/global';
import { getData } from 'utils/http';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchValue, setSeachValue] = useState('');
  const [moviesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [genres, setGenres] = useState([]);

  const { movies } = useGlobalContext();

  const endIndex = moviesPerPage * currentPage;
  const startIndex = endIndex - moviesPerPage;

  useEffect(() => {
    getData('genres', setGenres);
  }, []);

  const handleSearchChange = (e) => {
    setSeachValue(e.target.value);
    if (searchValue.length === 1) {
      setFilteredMovies([]);
    }
  };

  const handleSearchMovie = () => {
    if (!searchValue) return;

    const newMovies = movies.filter(
      (movie) =>
        movie.director.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.actors.toLowerCase().includes(searchValue.toLowerCase())
    );
    setCurrentPage(1);
    setFilteredMovies(newMovies);
  };

  return (
    <FilterContext.Provider
      value={{
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
        genres,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
