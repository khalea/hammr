import React from "react";
import { Link } from "react-router-dom";

import LoginButton from "./LoginButton.js";

export default function Nav() {
  return (
    <div className="w-full bg-transparent p-5 flex items-center justify-between">
      <Link
        className="hammr-logo-text text-black text-3xl font-extrabold hover:underline"
        to="/"
      >hammr</Link>

      <div className="links w-1/10 flex items-center space-x-3">
        <Link to="/" className="text-black font-extrabold hover:underline">Marketplace</Link>

        <Link to="/" className="text-black font-extrabold hover:underline">Developers</Link>


        <LoginButton />
      </div>

    </div>
  );
}
