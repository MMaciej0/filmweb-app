import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="nav__container">
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/">MyFilm</Link>
        </div>
        <div className="nav__icons">
          <Link to="add">Add</Link>
          <Link to="login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
