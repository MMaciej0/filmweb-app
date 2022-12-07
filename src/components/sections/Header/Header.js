import React from 'react';
import { Link } from 'react-router-dom';
import UserDropDown from '../UserDropDown/UserDropDown';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './Header.css';
import { useState } from 'react';

const Header = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      const email = user.email;
      setUser({ id: uid, email });
    } else {
      setUser(null);
    }
  });

  return (
    <header className="nav__container">
      <nav className="nav">
        <div className="nav__logo">
          <Link to="/">MyFilm</Link>
        </div>
        <div className="nav__icons">
          <Link to="add">Add</Link>
          {user ? <UserDropDown user={user} /> : <Link to="login">Login</Link>}
        </div>
      </nav>
    </header>
  );
};

export default Header;
