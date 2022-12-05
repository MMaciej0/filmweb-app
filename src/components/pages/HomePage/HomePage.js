import React, { useEffect, useState } from 'react';
import './HomePage.css';
import FilmList from 'components/sections/FilmList/FilmList';
import SearchBar from 'components/sections/SearchBar/SearchBar';
import { getMovies } from 'utils/http';
import Pagination from 'components/sections/Pagination/Pagination';

const HomePage = () => {
  const [searchValue, setSeachValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [moviesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getMovies(setMovies);
  }, []);

  const handleSearchChange = (e) => {
    setSeachValue(e.target.value);
  };

  const endIndex = moviesPerPage * currentPage;
  const startIndex = endIndex - moviesPerPage;

  const moviesToRender = movies.slice(startIndex, endIndex);

  return (
    <div className="home__container">
      <SearchBar searchValue={searchValue} setSeachValue={handleSearchChange} />
      <div className="home__movies">
        <FilmList movies={moviesToRender} />
      </div>
      <Pagination
        itemsPerPage={moviesPerPage}
        totalItems={movies.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPages={5}
      />
    </div>
  );
};

export default HomePage;
