import React, { useState } from 'react';
import './OutlineButton.css';

const OutlineButton = ({ children, type, handleClick, disabled }) => {
  const [active, setActive] = useState(false);

  const handleButton = () => {
    setActive(!active);
    handleClick();
  };

  return (
    <button
      className={active ? 'outline-btn active' : 'outline-btn'}
      type={type ?? 'button'}
      onClick={handleButton}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
