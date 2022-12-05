import React, { useEffect, useState } from 'react';
import './HomePage.css';
import FilmList from 'components/sections/FilmList/FilmList';
import SearchBar from 'components/sections/SearchBar/SearchBar';
import Pagination from 'components/sections/Pagination/Pagination';
import Loader from 'components/atoms/Loader/Loader';
import { getMovies } from 'utils/http';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSeachValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [moviesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getMovies(setMovies, setIsLoading);
  }, []);

  const handleSearchChange = (e) => {
    setSeachValue(e.target.value);
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

  const handleResetMovies = () => {
    setSeachValue('');
    setFilteredMovies([]);
  };

  const endIndex = moviesPerPage * currentPage;
  const startIndex = endIndex - moviesPerPage;

  return isLoading ? (
    <Loader />
  ) : (
    <div className="home__container">
      <SearchBar
        searchValue={searchValue}
        setSeachValue={handleSearchChange}
        handleSearchMovie={handleSearchMovie}
        handleResetMovies={handleResetMovies}
      />
      <div className="home__movies">
        <FilmList
          movies={
            filteredMovies.length
              ? filteredMovies.slice(startIndex, endIndex)
              : movies.slice(startIndex, endIndex)
          }
        />
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
  );
};

export default HomePage;
