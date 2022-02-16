import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ9pLA5iHoAijrd-Gf7XHOH_qhz7asE74",
  authDomain: "inflow-3382f.firebaseapp.com",
  projectId: "inflow-3382f",
  storageBucket: "inflow-3382f.appspot.com",
  messagingSenderId: "16173008953",
  appId: "1:16173008953:web:dd099b7b74b4c64d1ee5e8",
  measurementId: "G-8FCDTE5ZRY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage(app);
// import { getAnalytics } from "firebase/analytics";
// const analytics = getAnalytics(app);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();