import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from 'contexts/global';
import UserDropDown from '../UserDropDown/UserDropDown';

const Header = () => {
  const { user } = useGlobalContext();

  return (
    <div className="nav__container">
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/">MyFilm</Link>
        </div>
        <div className="nav__icons">
          <Link to="cart">
            <FaShoppingCart />
            <span>0</span>
          </Link>
          {user ? <UserDropDown user={user} /> : <Link to="login">Login</Link>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
