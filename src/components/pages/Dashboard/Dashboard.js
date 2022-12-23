import React, { useEffect, useState } from 'react';
import { useGlobalContext } from 'contexts/global/global';
import './Dashboard.css';
import OutlineButton from 'components/atoms/OutlineButton/OutlineButton';
import BorderInput from 'components/atoms/BorderInput/BorderInput';

const Dashboard = () => {
  const { user } = useGlobalContext();
  const [nameInputValue, setNameInputValue] = useState('');
  const [avatarInputValue, setAvatarInputValue] = useState('');

  useEffect(() => {
    if (user.displayName) {
      setNameInputValue(user.displayName);
    }
  }, [user.displayName]);

  const handleAvatarInputChange = (e) => {
    setAvatarInputValue(e.target.files[0]);
  };

  return (
    <div className="dashboard__container container__center">
      <p>
        Welcome again <span>{user.displayName || user.email}</span>.
      </p>
      <form>
        <div className="dashboard__row">
          <div className="dashboard__label">
            <label htmlFor="email">Email:</label>
          </div>
          <BorderInput
            type="email"
            id="email"
            defaultValue={user.email}
            disabled={true}
          />
        </div>
        <div className="dashboard__row">
          <div className="dashboard__label">
            <label htmlFor="name">Name to display:</label>
          </div>
          <BorderInput
            type="text"
            id="name"
            value={nameInputValue}
            onChange={(e) => setNameInputValue(e.target.value)}
          />
        </div>
        <div className="dashboard__row">
          <div className="dashboard__label">
            <label htmlFor="avatar">Avatar:</label>
          </div>
          <input type="file" id="avatar" onChange={handleAvatarInputChange} />
        </div>
        <OutlineButton type="submit">Update</OutlineButton>
      </form>
    </div>
  );
};

export default Dashboard;
