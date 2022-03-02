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
    let oldCampaigns = [];
    campaignsList.forEach((doc) => {
      if (!doc.ended) {
        newList.push({
        id: doc.id,
        name: doc.name,
        deliverables: doc.deliverables,
        compensation: doc.compensation,
        description: doc.description,
        filters: doc.filters,
        hashtags: doc.hashtags,
        industry: doc.industry,
      });
      }
      else {
        oldCampaigns.push({
          id: doc.id,
          name: doc.name,
          deliverables: doc.deliverables,
          compensation: doc.compensation,
          description: doc.description,
          filters: doc.filters,
          hashtags: doc.hashtags,
          industry: doc.industry,
        });
      }
    })
    newList.push({
      name: "dummy"
    })
    this.setState({listData: newList});
    this.setState({listDataOld: oldCampaigns});
  }

  render() {
    if (this.state.listData && this.state.listData.length > 0 && this.state.listDataOld && this.state.listDataOld.length > 0 ){
      return (
        <>
        <CampaignModal show={this.state.show} handleClose={this.hideModal} campaign={this.state.campaign} setCampaign={this.props.setCampaign} />
        <Typography variant="h5" style={{marginBottom: "40px"}}>
          Active Campaigns
        </Typography>
        <List
          itemLayout="horizontal"
          grid={{
            gutter: 16,
          }}
          dataSource={this.state.listData}
          renderItem={(item, idx) => {
            return idx < this.state.listData.length - 1 ? 
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
        <Typography variant="h5" style={{marginBottom: "40px", marginTop: "80px"}}>
          Past Campaigns
        </Typography>
        <List
          itemLayout="horizontal"
          grid={{
            gutter: 16,
          }}
          dataSource={this.state.listDataOld}
          renderItem={(item, idx) => {
            return true ? 
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
      } else if (this.state.listData && this.state.listData.length > 0) {
            console.log(this.props)
            return (
              <>
              <CampaignModal show={this.state.show} handleClose={this.hideModal} campaign={this.state.campaign} setCampaign={this.props.setCampaign} />
              <Typography variant="h5" style={{marginBottom: "40px"}}>
                Active Campaigns
              </Typography>
              <List
                itemLayout="horizontal"
                grid={{
                  gutter: 16,
                }}
                dataSource={this.state.listData}
                renderItem={(item, idx) => {
                  return idx < this.state.listData.length - 1 ? 
                  <List.Item
                  // onClick={() => this.props.history.push(`/home/InfluencerTable/${item.id}`)}
                  onClick={() => this.campaignClicked(item)}
                  key={item.id}
                  >
                    <CampaignCard item={item} />
                  </List.Item> :
                  <List.Item
                  //onClick={() => this.props.history.push(`/home/CreateCampaign`)}
                  key="add_campaign_card"
                  >
                    <Link to="/home/CreateCampaign"> <CampaignCardAdd/> </Link>
                  </List.Item>
                }
                }/>
              <Typography variant="h5" style={{marginBottom: "40px", marginTop: "80px"}}>
                No Past Campaigns
              </Typography>     
              </>
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