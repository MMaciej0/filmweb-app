import React, { useState } from 'react';
import './HomePage.css';
import { useGlobalContext } from 'contexts/global/global';
import FilmList from 'components/sections/FilmList/FilmList';
import SearchBar from 'components/sections/SearchBar/SearchBar';
import Pagination from 'components/sections/Pagination/Pagination';

const HomePage = () => {
  const [searchValue, setSeachValue] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [moviesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const { movies } = useGlobalContext();

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

  const handleResetMovies = () => {
    setSeachValue('');
    setFilteredMovies([]);
  };

  const endIndex = moviesPerPage * currentPage;
  const startIndex = endIndex - moviesPerPage;

  return (
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
