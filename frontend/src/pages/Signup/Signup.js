import React from "react";
import Nav from "../../components/Nav/Nav.js";

import { withRouter } from "react-router";

// Potentially uodate to use Formik https://formik.org/

class Signup extends React.Component {
  // Constructor -> Establish relevant state variables
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      isNewUser: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.loginForm = this.loginForm.bind(this);
    this.signupForm = this.signupForm.bind(this);
    this.handleSwitchToLogin = this.handleSwitchToLogin.bind(this);
    this.handleSwitchToSignup = this.handleSwitchToSignup.bind(this);
  }

  // Submit Form -- TODO, for now it just prints the values
  submitForm(event) {
    console.log(
      "Submitted Email:" +
        this.state.email +
        " Username: " +
        this.state.username +
        " Password: " +
        this.state.password
    );
    event.preventDefault();
  }

  // Handle Form Updates -> Testing Purposes,
  handleChange(event) {
    const value = event.target.value;
    // Matches form name props to state property keys
    this.setState({
      [event.target.name]: value,
    });
    // Prints out current field value
    console.log("Value:" + event.target.value);
  }

  // On Login Page -> Switch to Signup
  handleSwitchToSignup() {
    this.setState({
      isNewUser: true,
    });
  }

  // On Signup Page -> Switch to Login
  handleSwitchToLogin() {
    this.setState({
      isNewUser: false,
      email: "",
      username: "",
      password: "",
    });
  }

  // Login Form Component
  loginForm() {
    return (
      <div>
        <Nav />

        {/* Form */}
        <div className="login-container flex flex-row justify-center">
          <form
            className="login-card flex flex-col justify-center shadow-lg rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={this.submitForm}
          >
            {/* Username Field */}
            <label className="font-bold">Username</label>
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
              type="text"
              placeholder="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>

            {/* Password Field */}
            <label className="font-bold">Password</label>
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              type="text"
              placeholder="*********"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></input>

            {/* Submit */}
            <div className="flex items-center justify-between">
              <button
                className="bg-hammrBlue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log In
              </button>

              {/* Forgot Password */}
              <a className="inline-block align-baseline font-bold text-sm text-hammrBlue hover:text-blue-600 pl-2">
                Forgot Password?{" "}
              </a>
            </div>

            {/* Switch to Sign Up */}
            <div className="flex flex-row justify-start pt-1">
              <p className="inline-block align-baseline font-medium text-sm text-gray pr-2">
                No account?
              </p>

              <button
                className="inline-block align-baseline font-bold text-sm text-hammrBlue hover:text-blue-600"
                onClick={this.handleSwitchToSignup}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Signup Form Component
  signupForm() {
    return (
      <div>
        <Nav />

        {/* Form */}
        <div className="login-container flex flex-row justify-center">
          <form
            className="login-card flex flex-col justify-center shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={this.submitForm}
          >
            {/* Username Field */}
            <label className="font-bold">Email</label>
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleChange}
              type="text"
              placeholder="xyz@gmail.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>

            {/* Username Field */}
            <label className="font-bold">Username</label>
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
              type="text"
              placeholder="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>

            {/* Password Field */}
            <label className="font-bold">Password</label>
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
              type="text"
              placeholder="*********"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            ></input>

            {/* Submit */}
            <div className="flex items-center justify-between">
              <button
                className="bg-hammrBlue hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            {/* Switch to Sign Up */}
            <div className="flex flex-row justify-start pt-1">
              <p className="inline-block align-baseline font-medium text-sm text-gray pr-2">
                Already have an account?
              </p>

              <button
                className="inline-block align-baseline font-bold text-sm text-hammrBlue hover:text-blue-600"
                onClick={this.handleSwitchToLogin}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Component
  render() {
    const isNewUser = this.state.isNewUser;

    if (isNewUser === false) {
      return (
        <div>
          <this.loginForm />
        </div>
      );
    } else {
      return (
        <div>
          <this.signupForm />
        </div>
      );
    }
  }
}

export default withRouter(Signup);
