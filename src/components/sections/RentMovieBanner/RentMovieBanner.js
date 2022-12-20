import React from 'react';
import './RentMovieBanner.css';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';

const RentMovieBanner = ({ price, onRentClick }) => {
  return (
    <div className="rent-movie__container">
      <h5>
        Watch this movie on our platform, just for <span>{price}$</span>
      </h5>
      <PrimaryButton handleClick={onRentClick}>Add to cart</PrimaryButton>
    </div>
  );
};

export default RentMovieBanner;
