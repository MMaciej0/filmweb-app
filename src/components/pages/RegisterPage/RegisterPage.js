import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'utils/firebase';
import './RegisterPage.css';
import LoginRegisterForm from 'components/sections/LoginRegisterForm/LoginRegisterForm';

const RegisterPage = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then(() => {
        navigate('/login');
        setErrorMessage('');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="register__container">
      <LoginRegisterForm
        formFor="register"
        emailValue={emailValue}
        onEmailChange={handleEmailChange}
        passwordValue={passwordValue}
        onPasswordChange={handlePasswordChange}
        handleSubmit={handleRegister}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default RegisterPage;
