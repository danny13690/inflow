import { Typography } from '@material-ui/core';
import { List, Card } from 'antd';
import { Row, Col } from 'antd';
import { collection, getDocs } from "firebase/firestore";
import React from 'react';
import '../App.css';
import { db } from "../index";
import { CampaignCard } from './CampaignCard';
import { CampaignCardAdd } from './CampaignCardAdd';
import CampaignModal from './CampaignModal';
import { Link } from "react-router-dom";

export class CampaignList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      listData:[],
      show: false,
      campaign: null
    };

    props.setCampaign(null);
    this.getCampaigns();
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.campaignClicked = this.campaignClicked.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  campaignClicked = (campaign_) => {
    this.setState({ campaign: campaign_ });
    this.showModal();
  };

  getCampaigns = async (values) => {
    const campaignsCol = collection(db, "campaigns");
    const campaignsSnapshot = await getDocs(campaignsCol);
    const campaignsList = campaignsSnapshot.docs.map(doc => {let d = doc.data(); d['id'] = doc.id; return d;});
    
    let newList = [];
    campaignsList.forEach((doc) => {
      if (doc.ended == this.props.ended) {
        newList.push({
        id: doc.id,
        name: doc.name,
        description: doc.description,
        deliverables: doc.deliverables,
        compensation: doc.compensation,
        ended: doc.ended,
        filters: doc.filters,
        hashtags: doc.hashtags,
        industry: doc.industry,
      });
      }
    })
    if (!this.props.ended) {
      newList.push({
        name: "dummy"
      })
    }
    this.setState({listData: newList});
  }

  render() {
    console.log(this.state.listData)
    console.log(this.state.listData.length)

    if (this.state.listData && this.state.listData.length > 0){
      return (
        <>
        <CampaignModal show={this.state.show} handleClose={this.hideModal} campaign={this.state.campaign} setCampaign={this.props.setCampaign} />
        <Typography variant="h5" style={{marginBottom: "40px"}}>
          {this.props.title}
        </Typography>
        <List
          itemLayout="horizontal"
          grid={{
            gutter: 16,
          }}
          dataSource={this.state.listData}
          renderItem={(item, idx) => {
            return item.name !== "dummy" ? 
            <List.Item
            // onClick={() => this.props.history.push(`/home/InfluencerTable/${item.id}`)}
            onClick={() => this.campaignClicked(item)}
            key={item.id}
            >
              <CampaignCard item={item} />
            </List.Item> :
            <List.Item
            // onClick={() => this.props.history.push(`/home/CreateCampaign`)}
            key="add_campaign_card"
            >
               <Link to="/home/CreateCampaign"> <CampaignCardAdd/> </Link>
            </List.Item>
          }
          }/>
        </>
        )
      } else if (this.props.ended) {
        return(
          <Typography variant="h5" style={{marginBottom: "40px"}}>
            There are no past campaigns.
          </Typography>
        )
      }
      else {
        return (
          <>
          </>
        )
      }
  }
};