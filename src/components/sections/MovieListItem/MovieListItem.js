import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultImg from 'images/default-movie.jpg';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';

const ListItem = ({ posterUrl, title, year, plot, director }) => {
  const [imgUrl, setImgUrl] = useState(posterUrl);
  return (
    <li className="movie-list__item">
      <div className="image__container">
        <img src={imgUrl} onError={() => setImgUrl(DefaultImg)} alt={title} />
      </div>
      <div className="description__container">
        <div className="description__text">
          <h3>{title}</h3>
          <h5>{director}</h5>
          <h5>{year}</h5>
          <p>{plot}</p>
        </div>
        <PrimaryButton>
          <Link to="movie">See more</Link>
        </PrimaryButton>
      </div>
    </li>
  );
};

export default ListItem;
