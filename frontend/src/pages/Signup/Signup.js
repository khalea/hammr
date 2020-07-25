import React from "react";
import Nav from "../../components/Nav/Nav.js";

import { withRouter } from "react-router";

// Potentially uodate to use Formik https://formik.org/

class Signup extends React.Component {

  // Constructor -> Establish relevant state variables 
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isNewUser: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  // Handle Form Updates
  handleChange(event) {
    const value = event.target.value
    // Matches form name props to state property keys
    this.setState({
      [event.target.name]: value
    })
    // Prints out current field value
    console.log("Value:" + event.target.value)
  }


  // Submit Form
  submitForm(event) {
    console.log('Submitted Username: ' + this.state.username + " Password: " + this.state.password)
    event.preventDefault()
  }

  // Component
  render() {
    return (
      <div>
        <Nav />

        {/* Form */}
        <div className="login-container flex flex-row justify-center">
          <form className="login-card flex flex-col justify-center shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.submitForm}>

            {/* Username Field */}
            <label className="font-bold">Username</label>
            <input
              value={this.state.username}
              name="username"
              onChange={this.handleChange}

              type="text"
              placeholder="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>

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
                type="submit">
                Sign In
            </button>



              {/* Forgot Password */}
              <a className="inline-block align-baseline font-bold text-sm text-hammrBlue hover:text-blue-600 pl-2" href="#">
                Forgot Password? </a>
            </div>
            
            {/* Switch to Sign Up */}
          <div className="flex flex-row justify-start pt-1">
            <p className="inline-block align-baseline font-medium text-sm text-gray pr-2">
              No account?
            </p>
            
            <button className="inline-block align-baseline font-bold text-sm text-hammrBlue hover:text-blue-600" href="#"
            >
              Sign Up</button>
            </div>
          
          </form>

        </div>
      </div>
    )
  }


}

export default withRouter(Signup);
