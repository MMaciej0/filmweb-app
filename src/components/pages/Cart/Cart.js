import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from 'contexts/cart/cart';
import { GrClose } from 'react-icons/gr';
import './Cart.css';
import ImageFromUrl from 'components/atoms/ImageFromUrl/ImageFromUrl';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';

const Cart = () => {
  const { cart, total, amount, removeItem } = useCartContext();

  return (
    <div className="cart__container container__center">
      {cart.length === 0 ? (
        <h2 className="cart-message">
          Your cart is empty. <Link to="/">Go find your movie.</Link>
        </h2>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item) => {
              const { id, title, posterUrl, rentPrice } = item;
              return (
                <li key={id} className="cart-list__card">
                  {posterUrl && (
                    <ImageFromUrl imageUrl={posterUrl} alt={title} />
                  )}
                  <div className="card__description">
                    <h4>Title: {title}</h4>
                    <h4>Rent Price: {rentPrice}$</h4>
                  </div>
                  <PrimaryButton handleClick={() => removeItem(id)}>
                    <GrClose />
                  </PrimaryButton>
                </li>
              );
            })}
          </ul>
          <div className="cart-summary">
            <div className="cart-summary__text">
              <h3>
                Movies: <span>{amount}</span>
              </h3>
              <h3>
                Total: <span>{total}$</span>
              </h3>
            </div>
            <div className="cart-summary__button">
              <PrimaryButton>Checkout</PrimaryButton>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
