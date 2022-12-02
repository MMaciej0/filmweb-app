import React, { useEffect, useState } from 'react';
import './HomePage.css';
import FilmList from 'components/sections/FilmList/FilmList';
import SearchBar from 'components/sections/SearchBar/SearchBar';
import { getMovies } from 'utils/http';

const HomePage = () => {
  const [searchValue, setSeachValue] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies(setMovies);
  }, []);

  const handleSearchChange = (e) => {
    setSeachValue(e.target.value);
  };

  return (
    <div className="home__container">
      <SearchBar searchValue={searchValue} setSeachValue={handleSearchChange} />
      <div className="home__movies">
        <FilmList movies={movies} />
      </div>
    </div>
  );
};

export default HomePage;
