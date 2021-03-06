import React, { Component } from "react";
import { MainLayout } from "../layout/Layout.js";
import { InfluencerTable } from "../InfluencerTable.js";
import { CampaignList } from "../CampaignList.js";
import { NewCampaignForm } from "../NewCampaignForm.js";
import { CampaignHome } from "../CampaignHome.js";
import { Profile } from "../Profile.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from 'react';
import '../../App.css';

export const MainPage = () => {
    const [campaign, setCampaign] = useState(null);

    return (
        <MainLayout campaign={campaign} setCampaign={setCampaign}>
                <Switch>
                    <Route exact path={"/home/CreateCampaign"}
                    component={() => <NewCampaignForm setCampaign={setCampaign}/>}>
                    </Route>
                    <Route
                    exact path={"/home/CampaignHome/:campaignID"}
                    component={() => <CampaignHome campaign={campaign}/>}
                    />
                    <Route
                    exact path={"/home/InfluencerTable/:campaignID"}
                    component={InfluencerTable}
                    />
                    <Route
                    exact path={"/home/InfluencerTable"}
                    component={InfluencerTable}
                    />
                    <Route exact path={"/home/PastCampaigns"}
                    component={() => <CampaignList setCampaign={setCampaign} ended={true} title={"Inactive Campaigns"}/> }>
                    </Route>
                    <Route exact path={"/home"}
                    component={() => <CampaignList setCampaign={setCampaign} ended={false} title={"Active Campaigns"}/> }>
                    </Route>
                    <Route exact path={"/home/Profile"}
                    component={() => <Profile setCampaign={setCampaign} /> }>
                    </Route>
                </Switch>
        </MainLayout>
    );
};