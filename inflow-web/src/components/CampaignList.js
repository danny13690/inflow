import { Typography } from '@material-ui/core';
import { List, Card } from 'antd';
import { Row, Col } from 'antd';
import { collection, getDocs } from "firebase/firestore";
import React from 'react';
import '../App.css';
import { db } from "../index";
import { CampaignCard } from './CampaignCard';
import { CampaignCardAdd } from './CampaignCardAdd';


export class CampaignList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listData:[]};
    this.getCampaigns();
  }

  getCampaigns = async (values) => {
    const campaignsCol = collection(db, "campaigns");
    const campaignsSnapshot = await getDocs(campaignsCol);
    const campaignsList = campaignsSnapshot.docs.map(doc => {let d = doc.data(); d['id'] = doc.id; return d;});
    let newList = [];
    campaignsList.forEach((doc) => {
        newList.push({
        id: doc.id,
        name: doc.name,
        deliverables: doc.deliverables,
        compensation: doc.compensation,
      });
    })
    newList.push({
      name: "dummy"
    })
    this.setState({listData: newList});
  }

  render() {
    if (this.state.listData.length > 0 ){
      return (
        <>
        <Typography variant="h5" style={{marginBottom: "40px"}}>
          Active Campaigns
        </Typography>
        <List
          itemLayout="horizontal"
          size="large"
          grid={{
            gutter: 16,
          }}
          dataSource={this.state.listData}
          renderItem={(item, idx) => {
            return idx < this.state.listData.length - 1 ? 
            <List.Item
            onClick={() => this.props.history.push(`/home/InfluencerTable/${item.id}`)}
            key={item.id}
            >
              <CampaignCard item={item}/>
            </List.Item> :
            <List.Item
            onClick={() => this.props.history.push(`/home/CreateCampaign`)}
            key="add_campaign_card"
            >
              <CampaignCardAdd/>
            </List.Item>
          }
          }/>
        <Typography variant="h5" style={{marginBottom: "40px", marginTop: "80px"}}>
          Past Campaigns
        </Typography>
          </>
          )
      } else {
            return (
              <p> Submit a Campaign! </p>
            )
      }
  }
};