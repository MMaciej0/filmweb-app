import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import { signOut } from 'firebase/auth';
import { auth } from 'utils/firebase';
import './UserDropDown.css';
import DefaultPerson from 'images/person-default.png';

const UserDropDown = ({ user }) => {
  const [selected, setSelected] = useState(false);
  const navigate = useNavigate();
  const dropContainer = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!dropContainer.current.contains(e.target)) {
        setSelected(false);
      }
    };
    document.addEventListener('click', handler);

    return () => document.removeEventListener('click', handler);
  });

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
        setSelected(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="user-dropdown" ref={dropContainer}>
      <div
        className="user-dropdown__person"
        onClick={() => setSelected(!selected)}
      >
        <img src={user.photoURL ?? DefaultPerson} alt="avatar" />
        <FaChevronDown
          className={
            selected ? 'user-dropdown__icon active' : 'user-dropdown__icon'
          }
        />
      </div>
      <ul
        className={
          selected
            ? 'dropdown-list__container drop'
            : 'dropdown-list__container'
        }
      >
        <li>
          <Link to="/dashboard" onClick={() => setSelected(false)}>
            DashBoard
          </Link>
        </li>
        <li>
          <Link onClick={handleLogout}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
