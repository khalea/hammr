import React from "react";
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="login-button bg-hammrGreen hover:bg-green-600 shadow-xl 
  text-white font-bold py-2 px-4 rounded" 
  onClick={() => loginWithRedirect()}>Login</button>;
};

export default LoginButton;
