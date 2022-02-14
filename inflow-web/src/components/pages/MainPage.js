import React, { Component } from "react";
import { MainLayout } from "../layout/Layout.js";
import { InfluencerTable } from "../InfluencerTable.js";
import { CampaignList } from "../CampaignList.js";
import { NewCampaignForm } from "../NewCampaignForm.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../App.css';

export const MainPage = () => {
    return (
    <main>
        <body>
        <MainLayout>
                <Switch>
                    <Route exact path={"/home/CreateCampaign"}
                    component={NewCampaignForm}>
                    </Route>
                    <Route
                    exact path={"/home/InfluencerTable"}
                    component={InfluencerTable}
                    />
                    <Route exact path={"/home/"}
                    component={CampaignList}>
                    </Route>
                </Switch>
        </MainLayout>
        </body>
    </main>
    );
};