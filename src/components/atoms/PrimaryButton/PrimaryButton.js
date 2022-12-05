import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({ children, type, handleClick, disabled, active }) => {
  return (
    <button
      className={active ? 'primary-btn active' : 'primary-btn'}
      type={type ?? 'button'}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
