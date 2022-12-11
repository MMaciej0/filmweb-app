import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
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
          <Link to="add">Add</Link>
          {user ? <UserDropDown user={user} /> : <Link to="login">Login</Link>}
        </div>
      </nav>
    </div>
  );
};

export default Header;
