import React from "react";
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return <button className="login-button bg-hammrGreen hover:bg-green-600 shadow-xl 
  text-white font-bold py-2 px-4 rounded" 
  onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>;
};

export default LogoutButton;
