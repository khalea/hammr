import React from "react";
import Nav from "../../components/Nav/Nav.js";

import { withRouter } from "react-router";

function Signup() {
  return (
    <div>
      <Nav />

      <div className="login-container flex flex-row justify-center">
        <form className="login-card flex flex-col justify-center shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <label className="font-bold">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>

          <label className="font-bold">Password</label>
          <input
            id="password"
            type="text"
            placeholder="******"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          ></input>

          <div className="flex items-center justify-between">
            <button
              className="bg-hammrBlue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>

            <a
              className="inline-block align-baseline font-bold text-sm text-hammrBlue hover:text-blue-600"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Signup);
