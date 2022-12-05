import React from 'react';
import './LoginRegisterForm.css';
import { Link } from 'react-router-dom';
import LabelInput from 'components/atoms/LabelInput/LabelInput';
import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';

const LoginRegisterForm = ({
  emailValue,
  onEmailChange,
  passwordValue,
  onPasswordChange,
  handleSubmit,
  formFor,
  errorMessage,
}) => {
  return (
    <form onSubmit={handleSubmit} className="login__form">
      <p className="form__error">{errorMessage}</p>
      <div className="form__row">
        <LabelInput
          type="email"
          label="Email"
          inputValue={emailValue}
          handleInputChange={onEmailChange}
        />
      </div>
      <div className="form__row">
        <LabelInput
          type="password"
          label="Password"
          inputValue={passwordValue}
          handleInputChange={onPasswordChange}
        />
      </div>
      <PrimaryButton type="submit">{formFor}</PrimaryButton>
      {formFor === 'login' ? (
        <p className="form__info">
          You don't have an account yet ?
          <Link to="/register" className="form__link">
            Sign up
          </Link>
        </p>
      ) : (
        <p className="form__info">
          Already registered ?
          <Link to="/login" className="form__link">
            Login
          </Link>
        </p>
      )}
    </form>
  );
};

export default LoginRegisterForm;
