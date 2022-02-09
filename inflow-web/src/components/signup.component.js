import React, { Component } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../index.css";
import logo from '../images/logo2.png';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onFirstNameChange(event) {
        this.setState({ first_name: event.target.value });
    }
    onLastNameChange(event) {
        this.setState({ last_name: event.target.value });
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    onPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            this.props.history.push('/home')
          })
          .catch((error) => {
            const errorMessage = error.message;
            document.getElementById("error").innerHTML = errorMessage;
          });
    }

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <img src={logo} alt="Logo" className="logo" />
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group text-field">
                            <input type="text" value={this.first_name} onChange={this.onFirstNameChange} className="form-control" placeholder="First name" />
                        </div>
                        <div className="form-group text-field">
                            <input type="text" value={this.last_name} onChange={this.onLastNameChange} className="form-control" placeholder="Last name" />
                        </div>
                        <div className="form-group text-field">
                            <input type="email" value={this.email} onChange={this.onEmailChange} className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group text-field">
                            <input type="password" value={this.password} onChange={this.onPasswordChange} className="form-control" placeholder="Enter password" />
                        </div>
                        <h className="error-message" id="error" >Password must be at least 8 characters!</h>
                        <button type="submit" className="sign-up-button">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/sign-in">sign in?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
