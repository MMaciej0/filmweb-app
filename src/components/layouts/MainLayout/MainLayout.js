import Header from 'components/sections/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = ({ user }) => {
  console.log(user);
  return (
    <div className="main__container">
      <Header />
      <div className="main__content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
