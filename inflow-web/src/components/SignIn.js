import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "../components/login.component";
import SignUp from "../components/signup.component";
import EmailVerify from "../components/EmailVerify.js";
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../index";


export default function SignIn() {
    const [isRegistered, userHasRegistered] = useState(false);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            userHasRegistered(true);
        } else {
            userHasRegistered(false);
        }
    });

    useEffect(() => {
        onLoad();
      }, []);
    
    async function onLoad() {
        if (auth.currentUser) {
            userHasRegistered(true);
        } else {
            userHasRegistered(false);
        }
    }
    
    return (
        <Router>
        <Switch>
            {/* {!isRegistered ? (
                <>
                    <Route
                        exact path={"/sign-in/new"}
                        component={SignUp}
                    />
                    <Route 
                        exact path={"/sign-in"}
                        component={Login}>
                    </Route>
                </>
                ) : (
                    <>
                        <Redirect exact from="/sign-in" to='/sign-in/email'/>
                        <Redirect exact from="/sign-in/new" to='/sign-in/email'/>
                    </>
                )}
            {isRegistered ? (
                    <Route
                        exact path={"/sign-in/email"}
                        component={EmailVerify}
                    />
                ) : (
                <Redirect exact from="/sign-in/email" to='/sign-in'/>
            )} */}

                {/* <Route
                    exact path={"/sign-in/email"}
                    component={EmailVerify}
                /> */}
                <Route
                        exact path={"/sign-in/new"}
                        component={SignUp}
                    />
                    <Route 
                        exact path={"/sign-in"}
                        component={Login}>
                    </Route>
        </Switch>
        </Router>
    );
    
};