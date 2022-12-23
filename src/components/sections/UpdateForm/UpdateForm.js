import React from 'react';

const UpdateForm = ({ data }) => {
  return (
    <form className="update-form__container">
      {data.map((row, index) => {
        const { label, type, value, onChange } = row;
        return (
          <div className="update-form__row" key={index}>
            <label htmlFor={label}>{label}</label>
            {onChange ? (
              <input type={type} id={label} value={value} onChange={onChange} />
            ) : (
              <input type={type} id={label} defaultValue={value} disabled />
            )}
          </div>
        );
      })}
    </form>
  );
};

export default UpdateForm;
