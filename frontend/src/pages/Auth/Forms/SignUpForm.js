// Sign Up New User
import React from 'react';
import Nav from "../../../components/Nav/Nav.js";
import Topo from "../images/topography.svg";

class SignUpForm extends React.Component {

    constructor(props) {
        super(props);
        // State variables
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            isNewUser: true,
        }
        // Bind functions
        this.handleFormChange = this.handleFormChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    // handleFormChange: Register form changes, re-render
    handleFormChange(event) {
        const value = event.target.value;
        // Matches form name prop. to state prop. keys
        this.setState({
            [event.target.name]: value
        })
    }

    // submitForm: Submit form to /api/login/
    submitForm(event) {
        fetch(
            "api/auth/signup",
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user: {
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        email: this.state.email,
                        username: this.state.username,
                        password: this.state.password
                    }
                })
            }).then(response => {
                response.json().then(data => {
                    console.log(data)
                })
            }).catch(
                error => console.log(error)
            )
        event.preventDefault();
    }

    render() {
        return (
            <div
        className="signup w-screen h-screen"
        style={{ backgroundImage: "url(" + Topo + ")" }}
      >
        <Nav />

        {/* Form */}
        <div className="login-container flex flex-row justify-center">
          <form
            className="login-card bg-white flex flex-col justify-center shadow-lg rounded-md px-8 pt-6 pb-8 mb-4"
            onSubmit={this.submitForm}
          >
          {/* First Name Field */}
          <label className="font-bold">First Name </label>
            <input
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleFormChange}
              type="text"
              placeholder="Jane"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>

            {/* Last Name Field */}
          <label className="font-bold">Last Name </label>
            <input
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleFormChange}
              type="text"
              placeholder="Doe"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>

            {/* Email Field */}
            <label className="font-bold">Email</label>
            <input
              value={this.state.email}
              name="email"
              onChange={this.handleFormChange}
              type="text"
              placeholder="xyz@gmail.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>

            {/* Username Field */}
            <label className="font-bold">Username</label>
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleFormChange}
              type="text"
              placeholder="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></input>

            {/* Password Field */}
            <label className="font-bold">Password</label>
            <input
              value={this.state.password}
              name="password"
              onChange={this.handleFormChange}
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
                onClick={this.props.switchForm}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
        )
    }

}

export default SignUpForm;