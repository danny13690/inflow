import React, { useRef } from 'react';
import { db, storage } from "../index";
import { Card, Button } from 'antd';
import { collection, updateDoc, doc } from "firebase/firestore";
import EditCampaignModal from './EditCampaignModal';

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
          return (
            <>
            <EditCampaignModal show={this.state.show} handleClose={this.hideModal} campaign={this.props.campaign} setCampaign={this.props.setCampaign} />
            <Button onClick={this.showModal}>Edit</Button>
            <Button onClick={this.EndStartCampaign}> {this.state.ended? "Start Campaign" : "End Campaign"} </Button>
            <Card title={this.props.campaign.name}>
            <Card type="inner" title="Description">
                {this.props.campaign.description}
            </Card>
            <Card type="inner" title="Deliverables">
                <ul> {deliverables} </ul>
            </Card>
            <Card type="inner" title="Compensation">
            <ul> {compensations} </ul>
            </Card>
            </Card>
            </>
          )
      }
}
