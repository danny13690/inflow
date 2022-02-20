import React, { Component } from "react";
import { getAuth, signOut } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth"; 
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typography from "@material-ui/core/Typography";


toast.configure()

export default class EmailVerify extends Component {
    constructor(props) {
        super(props);
        this.handleResend = this.handleResend.bind(this);
        this.onSignOut = this.onSignOut.bind(this);
    }

    handleResend() {
        sendEmailVerification(getAuth().currentUser)
                .then(() => {
                    toast("Verification email sent!");
                })
                .catch((error) => {
                    console.log(error);
                });
    }

    onSignOut() {
        signOut(getAuth()).then(() => {
          window.location.href='/home'
        }).catch((error) => {
          console.log(error)
        });
    }

    render() {
        const email = getAuth().currentUser && getAuth().currentUser.email;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Typography variant="h5" style={{marginBottom: "20px"}}>Please verify your email</Typography>
                    <Typography>
                        For security purposes, we've sent you an email to verify your identity before you can access your account. Click the link in the email we sent to {email} to confirm this address.
                    </Typography>
                    <button className="sign-up-button" onClick={this.handleResend}>Resend Email</button>
                    <button className="sign-up-button" style={{marginTop: "40px"}} onClick={this.onSignOut}>Sign Out</button>
                </div>
            </div>
        );
    }
}
