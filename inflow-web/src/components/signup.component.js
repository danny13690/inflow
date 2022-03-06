import React, { Component } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth"; 
import "../index.css";
import logo from '../images/logo2.png';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../index";


toast.configure();

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand_name: '',
            email: '',
            password: '',
        };
        this.onBrandNameChange = this.onBrandNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onBrandNameChange(event) {
        this.setState({ brand_name: event.target.value });
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
            sendEmailVerification(user)
                .then(() => {
                    addDoc(collection(db, "brands"), {
                        name: this.state.brand_name,
                        email: this.state.email,
                        userId: user.uid,
                    });
                    this.props.history.push('/sign-in/email');
                    toast("Verification email sent!");
                })
                .catch((error) => {
                    console.log(error)
                });
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
                            <input type="text" value={this.brand_name} onChange={this.onBrandNameChange} className="form-control" placeholder="Brand name" />
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
