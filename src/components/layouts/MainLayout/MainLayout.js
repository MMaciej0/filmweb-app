import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from 'contexts/global/global';
import './MainLayout.css';
import Header from 'components/sections/Header/Header';

const MainLayout = () => {
  const { user } = useGlobalContext();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // user redirecting is in LoginPage useEffect
    if (user && location.pathname === '/register') {
      navigate(-1);
    }
  }, [user, location.pathname]);

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
