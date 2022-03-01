import React, { useRef } from 'react';
import { FirebaseError } from 'firebase/app';
import { initializeApp } from "firebase/app";
import { Card } from 'antd';

export class CampaignHome extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.campaign);
      }

      render() {
          const deliverables = this.props.campaign.deliverables.map((deliverable) =>
            <li> {deliverable} </li>
          );
          const compensations = this.props.campaign.compensation.map((compensation) => 
          <li> {compensation} </li>
          );
          return (
            <>
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
