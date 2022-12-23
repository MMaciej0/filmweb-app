import React, { useState, useEffect, useRef } from 'react';
import './UserDropDown.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';
import { signOut } from 'firebase/auth';
import { auth } from 'utils/firebase';

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
      {/* todo recreate this button to avatar btn */}
      <PrimaryButton handleClick={() => setSelected(!selected)}>
        {user.email[0]}
        <FaChevronDown
          className={
            selected ? 'user-dropdown__icon active' : 'user-dropdown__icon'
          }
        />
      </PrimaryButton>
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
          <PrimaryButton handleClick={handleLogout}>Logout</PrimaryButton>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
