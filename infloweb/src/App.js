import React from 'react'
import logo from './logo.png';
import './App.css';
import { useTable } from 'react-table'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { MainPage } from './pages/MainPage.js';
// import { MainLayout } from "./components/layout/Layout.js";
// import { InfluencerTable } from "./components/InfluencerTable";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
