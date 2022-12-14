import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from 'contexts/global';
import './SingleMoviePage.css';
import ImageFromUrl from 'components/atoms/ImageFromUrl/ImageFromUrl';
import CardSlider from 'components/sections/CardSlider/CardSlider';
import { stringsArraytoObjectsArr, stringToArray } from 'utils/array';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const { movies } = useGlobalContext();

  useEffect(() => {
    setMovie(movies.find((movie) => movie.id === Number(id)));
  }, []);

  return (
    <div className="single-movie__container">
      <header className="single-movie__header">
        {movie.posterUrl && (
          <ImageFromUrl imageUrl={movie.posterUrl} alt={movie.title} />
        )}
        <div className="single-movie__description">
          <h2>{movie.title}</h2>
          <p className="single-movie__subtitle">{movie.plot}</p>
          <div className="single-movie__info">
            <p>Directed by: {movie.director}</p>
            <p>
              Genre: {movie.genres && Object.values(movie.genres).join(', ')}
            </p>
            <p>Year: {movie.year}</p>
            <p>Runtime: {movie.runtime} minutes</p>
            <h4>Rating: {movie.rating ? movie.rating : 'No ratings'}</h4>
          </div>
        </div>
        {/* rating component */}
      </header>
      {movie.actors && (
        <CardSlider
          data={stringsArraytoObjectsArr('title', stringToArray(movie.actors))}
          sliderHeader={'The cast'}
        />
      )}
      <div>content</div>

      {/* rent a movie component */}
    </div>
  );
};

export default SingleMoviePage;
