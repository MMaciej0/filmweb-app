import React from 'react';
import { Link } from 'react-router-dom';
import './LinkMessage.css';

const LinkMessage = ({ messageText, path, linkText }) => {
  return (
    <div className="link-message__container">
      <h3>
        {messageText}
        <Link to={path}>{linkText}</Link>
      </h3>
    </div>
  );
};

export default LinkMessage;
