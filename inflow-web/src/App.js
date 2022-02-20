import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./components/SignIn.js";
import { MainPage } from "./components/pages/MainPage.js";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react';
import { auth } from "./index";
import EmailVerify from './components/EmailVerify';


const SIGNED_OUT = 1;
const SIGNED_IN = 2;
const EMAIL_VERIFIED = 3;

function App() {

  const [authStatus, authStatusChanged] = useState(SIGNED_OUT);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    if (auth.currentUser && auth.currentUser.emailVerified) {
      if (auth.currentUser.emailVerified) {
        authStatusChanged(EMAIL_VERIFIED);
      } else {
        authStatusChanged(SIGNED_IN);
      }
    } else {
      authStatusChanged(SIGNED_OUT);
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user && user.emailVerified) {
      authStatusChanged(EMAIL_VERIFIED);
    } else if (user) {
      authStatusChanged(SIGNED_IN);
    } else {
      authStatusChanged(SIGNED_OUT);
    }
  });

  console.log(authStatus);

  return (<Router>
      <Switch>
        <Redirect exact from='/' to='/home'/>
        {authStatus === SIGNED_OUT ? (
          <Route path='/sign-in' component={SignIn} />
        ) : (
          <Redirect from='/sign-in' to='/home'/>
        )}
        {authStatus === SIGNED_IN ? (
          <Route path='/email' component={EmailVerify} />
        ) : (
          <Redirect from='/email' to='/sign-in'/>
        )}
        {authStatus === EMAIL_VERIFIED ? (
          <Route path='/home' component={MainPage} />
        ) : (
          <Redirect from='/home' to='/email'/>
        )}

      </Switch>
      </Router>
  );
}
export default App;