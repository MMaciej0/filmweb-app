import React, { useState, useEffect } from 'react';
import { useCartContext } from 'contexts/cart/cart';
import {
  addItemsToLocalStorage,
  getItemsFromLocalStorage,
} from 'utils/localStorage';
import './RentMovieBanner.css';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';

const RentMovieBanner = ({ id, title, posterUrl, rentPrice }) => {
  const [disabled, setDisabled] = useState(false);
  const { addToCart, cart } = useCartContext();

  useEffect(() => {
    const inCart = cart.find((item) => item.id === id);
    if (inCart) {
      setDisabled(true);
    }
  }, [cart]);

  const handleRentMovieBtn = () => {
    const cart = getItemsFromLocalStorage('cart');
    const movieCart = {
      id,
      title,
      posterUrl,
      rentPrice,
    };
    const cartNew = [...cart, movieCart];
    addItemsToLocalStorage('cart', cartNew);
    addToCart(movieCart);
  };

  return (
    <div className="rent-movie__container">
      <h5>
        Watch this movie on our platform, just for <span>{rentPrice}$</span>
      </h5>
      <PrimaryButton handleClick={handleRentMovieBtn} disabled={disabled}>
        {disabled ? 'In Cart' : 'Add to cart'}
      </PrimaryButton>
    </div>
  );
};

export default RentMovieBanner;
