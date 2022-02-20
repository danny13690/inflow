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


function App() {
  const [authStatus, authStatusChanged] = useState(1);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    if (auth.currentUser && auth.currentUser.emailVerified) {
      if (auth.currentUser.emailVerified) {
        authStatusChanged(3);
      } else {
        authStatusChanged(2);
      }
    } else {
      authStatusChanged(1);
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user && user.emailVerified) {
      authStatusChanged(3);
    } else if (user) {
      authStatusChanged(2);
    } else {
      authStatusChanged(1);
    }
  });

  return (<Router>
      <Switch>
        <Redirect exact from='/' to='/home'/>
        {authStatus === 1 ? (
          <Route path='/sign-in' component={SignIn} />
        ) : (
          <Redirect from='/sign-in' to='/home'/>
        )}
        {authStatus === 2 ? (
          <Route path='/email' component={EmailVerify} />
        ) : (
          <Redirect from='/email' to='/sign-in'/>
        )}
        {authStatus === 3 ? (
          <Route path='/home' component={MainPage} />
        ) : (
          <Redirect from='/home' to='/email'/>
        )}

      </Switch>
      </Router>
  );
}
export default App;