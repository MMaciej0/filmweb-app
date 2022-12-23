import React from 'react';
import './OutlineButton.css';

const OutlineButton = ({ children, type, handleClick, disabled, active }) => {
  return (
    <button
      className={active ? 'outline-btn active' : 'outline-btn'}
      type={type ?? 'button'}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
