import React from "react";
import SignUpForm from "./Forms/SignUpForm.js"
import LoginForm from "./Forms/LoginForm.js"

import { withRouter } from "react-router";

// Potentially uodate to use Formik https://formik.org/

/* TODO
Security
    -> Add text field validation to avoid NoSQL injection
*/

class Auth extends React.Component {

    constructor(props) {
        super(props);
        // Should state be with formComponents?
        this.state = {
            isNewUser: false // Display login by default
        };
        // Bind functions
        this.switchForm = this.switchForm.bind(this)
    }

    // Handle switching between forms
    switchForm() {
        // Check current state & Change
        if (this.state.isNewUser === false) { 
            this.setState({isNewUser: true})
        } else {
            this.setState({isNewUser: false})
        }
    }

    render() {
        const isNewUser = this.state.isNewUser;

        if (isNewUser === false) {
            return (
                <div>
                    <LoginForm switchForm={this.switchForm}/>
                </div>
            );
        } else {
            return (
                <div>
                    <SignUpForm switchForm={this.switchForm} />
                </div>
            );
        }
    }
}

export default withRouter(Auth)