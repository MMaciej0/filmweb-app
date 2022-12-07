import React from 'react';
import { Link } from 'react-router-dom';

const AddMoviePage = ({ user }) => {
  return (
    <div className="add-page__container">
      {user ? (
        <div>add page</div>
      ) : (
        <Link to="/login">Please log in first.</Link>
      )}
    </div>
  );
};

export default AddMoviePage;
