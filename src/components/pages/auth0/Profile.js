import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const Profile = () => {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div className="content_layout">
      <div>
        <div className="content__body">
          <h1 id="page-title" className="content_title">
            User Profile
          </h1>
          <div className="profile-grid">
            <div className="profile_header">
              <div>
                <img
                  src={user.picture}
                  alt="Profile"
                  className="profile_avatar"
                />
              </div>
              <div>
                <h2 className="profile_title">Name: {user.name}</h2>
                <h3 className="profile_title"> Nickname: {user.nickname}</h3>
              </div>
              <div>
                <span className="profile_title">Email: {user.email}</span>
              </div>
            </div>
            <div className="profile__details">
              <div
                title="Decoded ID Token"
                code={JSON.stringify(user, null, 2)}
              />
            </div>
          </div>
          <span className="warning">
            <strong>Only authenticated users can access this page.</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
