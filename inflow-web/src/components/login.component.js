import React, { Component } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import logo from '../images/logo2.png';
import { auth } from "../index";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    onPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        // const auth = getAuth();
        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
        .then((userCredential) => {
          const user = userCredential.user;
          this.props.history.push('/home');
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
                            <input type="email" value={this.email} onChange={this.onEmailChange}  className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group text-field">
                            <input type="password" value={this.password} onChange={this.onPasswordChange} className="form-control" placeholder="Enter password" />
                        </div>
                        {/* <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div> */}
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                        <h className="error-message" id="error" ></h>
                        <button type="submit" className="sign-up-button">Login</button>

                    </form>

                    <p className="new-here">New Here? <a href="/sign-in/new">Register</a></p>
                </div>
            </div>
        );
    }
}
