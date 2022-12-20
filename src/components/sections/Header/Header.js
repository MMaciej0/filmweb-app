import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { GiFilmProjector } from 'react-icons/gi';
import { useGlobalContext } from 'contexts/global/global';
import { useCartContext } from 'contexts/cart/cart';
import UserDropDown from '../UserDropDown/UserDropDown';

const Header = () => {
  const { user } = useGlobalContext();
  const { amount } = useCartContext();

  return (
    <div className="nav__container">
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/">
            MyFilm <GiFilmProjector />
          </Link>
        </div>
        <div className="nav__icons">
          <Link to="cart">
            <FaShoppingCart />
            <span>{amount}</span>
          </Link>
          {user ? <UserDropDown user={user} /> : <Link to="login">Login</Link>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
