import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from 'contexts/global/global';
import './Dashboard.css';
import OutlineButton from 'components/atoms/OutlineButton/OutlineButton';
import BorderInput from 'components/atoms/BorderInput/BorderInput';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from 'utils/firebase';
import { updateProfile } from 'firebase/auth';

const Dashboard = () => {
  const [nameInputValue, setNameInputValue] = useState('');
  const [avatarInputValue, setAvatarInputValue] = useState('');
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.displayName) {
      setNameInputValue(user.displayName);
    }
  }, [user.displayName]);

  const handleAvatarInputChange = (e) => {
    setAvatarInputValue(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!avatarInputValue && user.displayName === nameInputValue) return;
    if (avatarInputValue) {
      uploadBytes(ref(storage, `usersAvatars/${user.uid}`), avatarInputValue)
        .then((snapshot) => {
          return getDownloadURL(snapshot.ref);
        })
        .then((avatarURL) => {
          return updateProfile(user, {
            displayName: nameInputValue,
            photoURL: avatarURL,
          }).then(() => {
            navigate('/');
          });
        });
    } else if (!avatarInputValue && user.displayName !== nameInputValue) {
      updateProfile(user, {
        displayName: nameInputValue,
      }).then(() => {
        navigate('/');
      });
    }
  };

  return (
    <div className="dashboard__container container__center">
      <p>
        Welcome again <span>{user.displayName || user.email}</span>.
      </p>
      <form onSubmit={handleSubmit}>
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
