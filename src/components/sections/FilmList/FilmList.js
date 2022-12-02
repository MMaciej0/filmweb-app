import React from 'react';
import './FilmList.css';
import ListItem from '../MovieListItem/MovieListItem';

const FilmList = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <ListItem {...movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default FilmList;
