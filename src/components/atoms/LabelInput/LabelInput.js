import React from 'react';

const LabelInput = ({
  type,
  label,
  placeholder,
  inputValue,
  handleInputChange,
}) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type={type ?? 'text'}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </label>
  );
};

export default LabelInput;
