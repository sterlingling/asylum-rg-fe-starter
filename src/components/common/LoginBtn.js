import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: '/protected/profile',
      },
    });
  };

  return (
    <button className="button_login" onClick={handleLogin}>
      Log In
    </button>
  );
};
