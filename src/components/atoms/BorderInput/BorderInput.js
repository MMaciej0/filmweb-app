import React from 'react';
import './BorderInput.css';

const BorderInput = ({ type, id, value, onChange, defaultValue, disabled }) => {
  return (
    <input
      className="border__input"
      type={type ?? 'text'}
      id={id ?? ''}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      disabled={disabled ? true : false}
    />
  );
};

export default BorderInput;
