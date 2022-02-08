import React, { Component } from "react";
import { MainLayout } from "../components/layout/Layout.js";
import { InfluencerTable } from "../components/InfluencerTable";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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