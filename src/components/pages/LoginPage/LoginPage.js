import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'utils/firebase';
import './LoginPage.css';
import LoginRegisterForm from 'components/sections/LoginRegisterForm/LoginRegisterForm';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
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

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then(() => {
        setErrorMessage('');
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div className="login__container">
      <LoginRegisterForm
        formFor="login"
        emailValue={emailValue}
        onEmailChange={handleEmailChange}
        passwordValue={passwordValue}
        onPasswordChange={handlePasswordChange}
        handleSubmit={handleLogin}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default LoginPage;
