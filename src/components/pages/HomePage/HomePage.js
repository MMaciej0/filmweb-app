import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/movies');
  }, []);

  return <div className="home__container">home page</div>;
};

export default HomePage;
