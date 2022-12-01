import React, { useState } from 'react';
import './HomePage.css';
import FilmList from 'components/sections/FilmList/FilmList';
import SearchBar from 'components/sections/SearchBar/SearchBar';

const HomePage = () => {
  const [searchValue, setSeachValue] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearchChange = (e) => {
    setSeachValue(e.target.value);
  };

  return (
    <>
      <SearchBar searchValue={searchValue} setSeachValue={handleSearchChange} />
      <FilmList movies={movies} />
    </>
  );
};

export default HomePage;
