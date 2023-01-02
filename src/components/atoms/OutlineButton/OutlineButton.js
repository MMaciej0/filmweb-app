import React from 'react';
import './OutlineButton.css';

const OutlineButton = ({ children, type, handleClick, disabled }) => {
  return (
    <button
      className="outline-btn"
      type={type ?? 'button'}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
