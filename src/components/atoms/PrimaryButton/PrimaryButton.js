import React from 'react';

const PrimaryButton = ({ children, type, handleClick }) => {
  return (
    <button type={type ?? 'button'} onClick={handleClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
