import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';
import ImageFromUrl from 'components/atoms/ImageFromUrl/ImageFromUrl';

const ListItem = ({ id, posterUrl, title, year, plot, director }) => {
  return (
    <li className="movie-list__item">
      <ImageFromUrl imageUrl={posterUrl} alt={title} />
      <div className="description__container">
        <div className="description__text">
          <h3>{title}</h3>
          <h5>{director}</h5>
          <h5>{year}</h5>
          <p>{plot}</p>
        </div>
        <Link to={`${id}`}>
          <PrimaryButton>See more</PrimaryButton>
        </Link>
      </div>
    </li>
  );
};

export default ListItem;
