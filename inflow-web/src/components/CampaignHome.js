import React, { useRef } from 'react';
import { db, storage } from "../index";
import { Card, Button, Row, Col, Typography } from 'antd';
import { collection, updateDoc, doc } from "firebase/firestore";
import EditCampaignModal from './EditCampaignModal';
import "../index.css";

export class CampaignHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ended: props.campaign.ended}

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    EndStartCampaign = async (values) => {
        const docRef = doc(db, 'campaigns', this.props.campaign.id);
        const docRef2 = await updateDoc(docRef, {
            ended: !this.state.ended
          });
        this.setState({ended: !this.state.ended});
    }

    render() {
        const deliverables = this.props.campaign ? this.props.campaign.deliverables.map((deliverable) =>
        <li> {deliverable} </li> 
        ) : <></>
        const compensations = this.props.campaign ? this.props.campaign.compensation.map((compensation) => 
        <li> {compensation} </li>
        ) : <></>

        let campaign = this.props.campaign;
        console.log(campaign);

        return (
        <>
        <EditCampaignModal show={this.state.show} handleClose={this.hideModal} campaign={campaign} setCampaign={this.props.setCampaign} />

        <Card title={campaign.name} className="campaign-modal" >
            <Row>
            <Col span={24}>
            <Typography className="modal-head">Description</Typography>
            <Typography>{campaign.description}</Typography>
            </Col>
            </Row> 
            <Row>
            <Col span={12}>
            <Typography className="modal-head">Deliverables</Typography>
            <ul>
            {campaign.deliverables.map(n => {
            return (
                <li>{n}</li>
            );
            })}
            </ul>
            </Col>
            <Col span={12}>
            <Typography className="modal-head">Compensation</Typography>
            <ul>
            {campaign.compensation.map(n => {
            return (
                <li>{n}</li>
            );
            })}
            </ul>
            </Col>
            </Row>
            <Row>
            <Col span={24}>
            <Typography className="modal-head">Filters</Typography>
            </Col>
            </Row>
            <Row>
            <Col span={8}>
            <Typography className="modal-sub-head">Engagement</Typography>
            {"engagement" in campaign.filters ? 
            <Typography>{campaign.filters.engagement[0]} - {campaign.filters.engagement[1]}</Typography> :
            <Typography>None</Typography>}
            </Col>
            <Col span={8}>
            <Typography className="modal-sub-head">Follower</Typography>
            {"follower" in campaign.filters ? 
            <Typography>{campaign.filters.follower[0]} - {campaign.filters.follower[1]}</Typography> :
            <Typography>None</Typography>}
            </Col>
            <Col span={8}>
            <Typography className="modal-sub-head">Location</Typography>
            {"follower" in campaign.filters ? 
            <ul>
            {campaign.filters.locations.map(n => {
            return (
                <li>{n}</li>
            );
            })}
            </ul> :
            <Typography>None</Typography>}
            </Col>
            </Row>
            <Row>
            <Col span={24}>
            <Typography className="modal-head">Hashtags:</Typography>
            <Typography> {campaign.hashtags.map(n => {return (<>{n} </>) })} </Typography>
            </Col>
            </Row>
            <Row>
            <Col span={24}>
            <Typography className="modal-head">Industry:</Typography>
            <Typography>{campaign.industry}</Typography>
            </Col>
            </Row>
        </Card>
        <button className="normal-button" onClick={this.showModal}>Edit</button>
        <button className="normal-button" onClick={this.EndStartCampaign}> {this.state.ended? "Start Campaign" : "End Campaign"} </button>
        </>
        )
      }
}
