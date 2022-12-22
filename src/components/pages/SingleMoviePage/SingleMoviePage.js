import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from 'contexts/global/global';
import { AiFillStar } from 'react-icons/ai';
import { stringsArraytoObjectsArr, stringToArray } from 'utils/array';

import './SingleMoviePage.css';
import ImageFromUrl from 'components/atoms/ImageFromUrl/ImageFromUrl';
import CardSlider from 'components/sections/CardSlider/CardSlider';
import MovieRating from 'components/sections/MovieRating/MovieRating';
import RentMovieBanner from 'components/sections/RentMovieBanner/RentMovieBanner';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();
  const { movies } = useGlobalContext();

  useEffect(() => {
    setMovie(movies.find((movie) => movie.id === Number(id)));
  }, [movies]);

  return (
    <div className="single-movie__container container__center">
      {movie && (
        <>
          <header className="single-movie__header">
            <ImageFromUrl imageUrl={movie.posterUrl} alt={movie.title} />
            <div className="single-movie__description">
              <h2>{movie.title}</h2>
              <p className="single-movie__subtitle">{movie.plot}</p>
              <div className="single-movie__info">
                <p>Directed by: {movie.director}</p>
                <p>Genre: {Object.values(movie.genres).join(', ')}</p>
                <p>Year: {movie.year}</p>
                <p>Runtime: {movie.runtime} minutes</p>
                <h4 className="single-movie__rating">
                  Rating:{' '}
                  {movie.rating ? (
                    <>
                      {movie.rating}
                      <AiFillStar />
                      <span>{movie.usersRate.length} rates</span>
                    </>
                  ) : (
                    'No ratings'
                  )}
                </h4>
              </div>
            </div>
          </header>
          <MovieRating movie={movie} />
          <CardSlider
            data={stringsArraytoObjectsArr(
              'title',
              stringToArray(movie.actors)
            )}
            sliderHeader={'The cast'}
          />
          <RentMovieBanner {...movie} />

          <div>comments section</div>
        </>
      )}
    </div>
  );
};

export default SingleMoviePage;
