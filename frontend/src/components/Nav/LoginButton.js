import React from "react";
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Link to="/Auth" className="">
      <button className="login-button bg-hammrGreen hover:bg-green-600 shadow-xl text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </Link>
  );
}
