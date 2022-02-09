import React, { Component } from "react";
import { MainLayout } from "../components/layout/Layout.js";
import { InfluencerTable } from "../components/InfluencerTable";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../logo.png';

export const MainPage = () => {
    return (
    <main>
        <MainLayout>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Inflow</p>
            </header>
            <body>
                    <p> welcome home </p>    
            </body>
        </MainLayout>
    </main>
    );
};