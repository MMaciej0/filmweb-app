import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader__container">
      <HashLoader size={100} color="#ff7d1a" />
    </div>
  );
};

export default Loader;
