import React, { Component } from "react";
import { MainLayout } from "../layout/Layout.js";
import { InfluencerTable } from "../InfluencerTable.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../../images/logo2.png';
import '../../App.css';

export const MainPage = () => {
    return (
    <main>
        <MainLayout>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>Inflow</p>
            </header>
            <body>
                <Switch>
                    <Route
                    exact path={"/home/InfluencerTable"}
                    component={InfluencerTable}
                    />
                    <Route exact path={"/home/"}>
                    <p> welcome home </p>
                    </Route>
                </Switch>
            </body>
        </MainLayout>
    </main>
    );
};